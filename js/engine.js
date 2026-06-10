/* ════════════════════════════════════════════════
   THE YOUNG FOUNDRY — GAME ENGINE (YF)
   XP, coins, levels, mastery, discoveries.
   All state persisted to localStorage.
   No backend. No accounts. No tracking.
   ════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  const STORAGE_KEY = 'tyf_state_v1';

  /* Activities per world — mastery = completed / total */
  const WORLD_ACTIVITIES = {
    'algebra-academy': ['mystery-box', 'balance-scale', 'build-it', 'solve-it', 'teach-it'],
    'number-sense':    [],
    'multiplication':  [],
    'fraction-factory':[],
    'area-perimeter':  [],
  };

  /* Activity that gates the Diamond tier in each world */
  const TEACH_BACK = {
    'algebra-academy': 'teach-it',
  };

  const XP_AWARDS = {
    activity:  25,
    discovery: 50,
    perfect:   75,
    bronze:    100,
    silver:    200,
    gold:      350,
    diamond:   600,
  };

  const TIERS = [
    { name: 'diamond', label: 'Diamond', icon: '💎', threshold: 0.90, needsTeachBack: true },
    { name: 'gold',    label: 'Gold',    icon: '🥇', threshold: 0.70 },
    { name: 'silver',  label: 'Silver',  icon: '🥈', threshold: 0.45 },
    { name: 'bronze',  label: 'Bronze',  icon: '🥉', threshold: 0.20 },
  ];

  function defaultState() {
    return {
      version: 1,
      student: { name: 'Explorer', named: false },
      xp: 0,
      coins: 0,
      discoveries: [],            // [{ id, label, world, at }]
      activities: {},             // { worldId: { activityId: { completed, perfect, at } } }
      tiersAwarded: {},           // { worldId: ['bronze', ...] }
      createdAt: Date.now(),
    };
  }

  let state = load();
  const listeners = {};           // { eventName: [fn, ...], '*': [fn, ...] }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch (e) {
      console.warn('[YF] Could not load saved state, starting fresh.', e);
      return defaultState();
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[YF] Could not save state.', e);
    }
  }

  /* ── Events ──────────────────────────────────── */

  function on(event, fn) {
    (listeners[event] = listeners[event] || []).push(fn);
  }

  function emit(event, data) {
    (listeners[event] || []).forEach(fn => fn(data, event));
    if (event !== '*') (listeners['*'] || []).forEach(fn => fn(data, event));
  }

  /* ── XP / Coins / Level ──────────────────────── */

  function addXP(amount, reason) {
    state.xp += amount;
    save();
    emit('xp', { amount, reason, total: state.xp });
  }

  function addCoins(amount, reason) {
    state.coins += amount;
    save();
    emit('coins', { amount, reason, total: state.coins });
  }

  /* Level n requires 100·n XP beyond level n−1 (100, 300, 600, …) */
  function getLevel() {
    let level = 1, need = 100, xp = state.xp;
    while (xp >= need) { xp -= need; level += 1; need = level * 100; }
    return { level, into: xp, need, progress: xp / need };
  }

  /* ── Activities & Mastery ────────────────────── */

  function completeActivity(worldId, activityId, opts) {
    opts = opts || {};
    const world = state.activities[worldId] = state.activities[worldId] || {};
    const first = !world[activityId] || !world[activityId].completed;
    world[activityId] = {
      completed: true,
      perfect: !!opts.perfect || (world[activityId] && world[activityId].perfect) || false,
      at: Date.now(),
    };
    save();

    if (first) {
      addXP(XP_AWARDS.activity, 'activity:' + activityId);
      addCoins(opts.coins != null ? opts.coins : 10, 'activity:' + activityId);
      if (opts.perfect) addXP(XP_AWARDS.perfect, 'perfect:' + activityId);
      checkTiers(worldId);
    }
    emit('activity', { worldId, activityId, first });
    return first;
  }

  function isActivityComplete(worldId, activityId) {
    const world = state.activities[worldId];
    return !!(world && world[activityId] && world[activityId].completed);
  }

  function getMastery(worldId) {
    const all = WORLD_ACTIVITIES[worldId] || [];
    if (!all.length) return 0;
    const world = state.activities[worldId] || {};
    const done = all.filter(id => world[id] && world[id].completed).length;
    return done / all.length;
  }

  function getMasteryTier(worldId) {
    const mastery = getMastery(worldId);
    const teachId = TEACH_BACK[worldId];
    for (const tier of TIERS) {
      if (mastery < tier.threshold) continue;
      if (tier.needsTeachBack && teachId && !isActivityComplete(worldId, teachId)) continue;
      return { name: tier.name, label: tier.label, icon: tier.icon };
    }
    return null;
  }

  function checkTiers(worldId) {
    const awarded = state.tiersAwarded[worldId] = state.tiersAwarded[worldId] || [];
    const tier = getMasteryTier(worldId);
    if (!tier) return;
    /* Award XP for the reached tier and any skipped lower tiers */
    const order = ['bronze', 'silver', 'gold', 'diamond'];
    for (const name of order) {
      if (awarded.indexOf(name) !== -1) continue;
      if (order.indexOf(name) > order.indexOf(tier.name)) break;
      awarded.push(name);
      save();
      addXP(XP_AWARDS[name], 'tier:' + worldId + ':' + name);
      emit('tier', { worldId, tier: name });
    }
  }

  /* ── Discoveries ─────────────────────────────── */

  function addDiscovery(id, label, worldId) {
    if (state.discoveries.some(d => d.id === id)) return false;
    state.discoveries.push({ id, label, world: worldId, at: Date.now() });
    save();
    addXP(XP_AWARDS.discovery, 'discovery:' + id);
    emit('discovery', { id, label, worldId });
    return true;
  }

  /* ── Student ─────────────────────────────────── */

  function setStudentName(name) {
    name = String(name || '').trim().slice(0, 24);
    if (!name) return;
    state.student.name = name;
    state.student.named = true;
    save();
    emit('student', { name });
  }

  function reset() {
    state = defaultState();
    save();
    emit('reset', {});
  }

  /* ── Public API ──────────────────────────────── */

  global.YF = {
    XP_AWARDS,
    on, emit,
    getState: () => state,
    getXP:    () => state.xp,
    getCoins: () => state.coins,
    getLevel,
    addXP, addCoins,
    completeActivity, isActivityComplete,
    getMastery, getMasteryTier,
    addDiscovery,
    setStudentName,
    reset,
  };

})(window);
