/* ════════════════════════════════════════════════
   THE YOUNG FOUNDRY — SHARED WORLD PLUMBING (YFWorld)
   Activity trail, stage open/close, tier badge,
   completion flow, teach-back factory.
   Depends on engine.js (YF), ui.js (YFUI), tutor.js (YFTutor).
   ════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  let WORLD = null;
  let ACTIVITIES = [];

  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);

  /* ── Trail & stage ───────────────────────────── */

  function renderTrail() {
    const trail = document.getElementById('activity-trail');
    trail.innerHTML = '';
    ACTIVITIES.forEach((act, i) => {
      const done = YF.isActivityComplete(WORLD, act.id);
      const node = document.createElement('button');
      node.className = 'activity-node' + (done ? ' done' : '');
      node.innerHTML = `
        <span class="node-emoji">${act.emoji}</span>
        <span class="node-info">
          <h3>${i + 1}. ${act.title}</h3>
          <span class="node-desc">${act.desc}</span>
        </span>
        <span class="node-status">${done ? '✅' : '▶️'}</span>
      `;
      node.addEventListener('click', () => openActivity(act));
      trail.appendChild(node);
    });
  }

  function renderTierBadge() {
    const el = document.getElementById('world-tier');
    if (!el) return;
    const tier = YF.getMasteryTier(WORLD);
    const pct = Math.round(YF.getMastery(WORLD) * 100);
    el.innerHTML = tier
      ? `<span class="badge badge-${tier.name}">${tier.icon} ${tier.label} — ${pct}% explored</span>`
      : `<span class="badge badge-purple">${pct}% explored</span>`;
  }

  function openActivity(act) {
    YFTutor.setTopic(act.id);
    const stage = document.getElementById('stage');
    document.getElementById('stage-title').textContent = `${act.emoji} ${act.title}`;
    const body = document.getElementById('stage-body');
    body.innerHTML = '';
    stage.hidden = false;
    act.render(body);
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeStage() {
    document.getElementById('stage').hidden = true;
    YFTutor.setTopic('default');
  }

  function finish(id, opts) {
    const first = YF.completeActivity(WORLD, id, opts || {});
    if (first) YFUI.confetti();
    YFUI.toast(YFTutor.celebrate(), 'success', 3500);
    renderTrail();
    renderTierBadge();
  }

  /* ── Feedback helpers ────────────────────────── */

  function feedbackEl() {
    const el = document.createElement('p');
    el.className = 'stage-feedback';
    return el;
  }

  function setFeedback(el, msg, good) {
    el.textContent = msg;
    el.className = 'stage-feedback ' + (good ? 'good' : 'bad');
  }

  /* Standard "🤖 Buddy?" hint button wired to the current topic */
  function hintButton(topicId) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.textContent = '🤖 Buddy?';
    btn.addEventListener('click', () => YFUI.toast(YFTutor.hint(topicId), '', 4000));
    return btn;
  }

  /* ── Teach-back factory (the 💎 Diamond gate) ── */

  function makeTeachIt(cfg) {
    return function renderTeachIt(body) {
      body.innerHTML = `
        <p class="stage-prompt">
          💎 <strong>The Diamond Gate.</strong> You only truly know something when
          you can teach it. Imagine a friend who has never seen this before.
          In your own words: <em>${cfg.prompt}</em>
        </p>
        <textarea class="teach-area" id="ti-text" placeholder="${cfg.placeholder || 'Dear friend, ...'}"></textarea>
        <div class="stage-actions">
          <button class="btn" id="ti-submit">🎓 Teach It!</button>
        </div>
      `;
      const fb = feedbackEl();
      body.appendChild(fb);
      body.querySelector('.stage-actions').appendChild(hintButton('teach-it'));

      body.querySelector('#ti-submit').addEventListener('click', () => {
        const text = body.querySelector('#ti-text').value.trim().toLowerCase();
        YFTutor.attempt('teach-it');

        if (text.length < 60) {
          setFeedback(fb, '🤔 A friend would need a little more than that. Explain it like a story — a few sentences at least!', false);
          return;
        }
        const hits = cfg.keywords.filter(group => group.some(k => text.includes(k))).length;
        if (hits < 2) {
          setFeedback(fb, `🧭 Good start! Try using the big ideas you discovered here — like ${cfg.keywordHint}.`, false);
          return;
        }

        YF.addDiscovery(cfg.discoveryId, cfg.discoveryLabel, WORLD);
        setFeedback(fb, "💎 THAT is a teacher's explanation. You didn't memorize this — you OWN it.", true);
        finish('teach-it', { perfect: true });
      });
    };
  }

  /* ── Init ────────────────────────────────────── */

  function init(cfg) {
    WORLD = cfg.worldId;
    ACTIVITIES = cfg.activities;
    document.getElementById('stage-close').addEventListener('click', closeStage);
    YF.on('*', renderTierBadge);
    YFUI.initHUD();
    YFTutor.mountBuddy();
    YFUI.showOnboarding(() => {});
    renderTrail();
    renderTierBadge();
  }

  /* ── Public API ──────────────────────────────── */

  global.YFWorld = {
    init, finish, closeStage,
    feedbackEl, setFeedback, hintButton, makeTeachIt,
    rnd, shuffle,
  };

})(window);
