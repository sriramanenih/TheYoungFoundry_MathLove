/* ════════════════════════════════════════════════
   JOURNEY MAP — Avatar, Progress & Concept State
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Avatar stages ────────────────────────────── */
  const AVATAR_STAGES = [
    { min: 0,  emoji: '🌱', title: 'Seeds of Curiosity',       sub: 'Your journey begins — every expert started exactly here' },
    { min: 1,  emoji: '🧒', title: 'Number Explorer',          sub: 'You\'re building the foundations — the hardest step is the first' },
    { min: 5,  emoji: '🧑‍🔬', title: 'Pattern Seeker',         sub: 'You see structure where others see chaos — that\'s a mathematician\'s gift' },
    { min: 10, emoji: '🧑‍💻', title: 'Algebra Apprentice',     sub: 'Letters don\'t scare you. Variables are your tools now' },
    { min: 15, emoji: '👨‍🏫', title: 'Math Mentor',            sub: 'You can teach what you know — the highest form of mastery' },
    { min: 22, emoji: '🎓', title: 'Young Mathematician',      sub: 'You think in numbers, equations, and proofs. Welcome to the summit.' },
  ];

  /* World IDs that map to concept dots in the HTML */
  const WORLD_DOTS = {
    'number-sense':     'dot-number-sense',
    'multiplication':   'dot-multiplication',
    'fraction-factory': 'dot-fraction-factory',
    'area-perimeter':   'dot-area-perimeter',
    'algebra-academy':  'dot-algebra-academy',
  };

  /* Worlds associated with concept cards (data-world attribute) */
  const WORLD_CARDS = {
    'number-sense':     'card-place-value',
    'multiplication':   'card-multiplication',
    'fraction-factory': 'card-fractions',
    'area-perimeter':   'card-area-perimeter',
    'algebra-academy':  'card-algebra',
  };

  /* ── Compute total completed activities ────────── */
  function totalCompleted(state) {
    let count = 0;
    for (const world in state.activities) {
      for (const act in state.activities[world]) {
        if (state.activities[world][act] && state.activities[world][act].completed) count++;
      }
    }
    return count;
  }

  /* ── Compute world completion 0–5 ─────────────── */
  function worldCompleted(state, worldId) {
    const worldActs = state.activities[worldId];
    if (!worldActs) return 0;
    return Object.values(worldActs).filter(a => a && a.completed).length;
  }

  function worldDone(state, worldId) {
    return worldCompleted(state, worldId) >= 5;
  }

  /* ── Update concept dot ────────────────────────── */
  function updateDot(dotEl, state, worldId) {
    if (!dotEl) return;
    const done = worldDone(state, worldId);
    const started = worldCompleted(state, worldId) > 0;
    if (done) {
      dotEl.textContent = '✓';
      dotEl.style.background = 'var(--brand-green)';
      dotEl.style.color = 'white';
      dotEl.style.borderColor = 'var(--brand-green-dark)';
    } else if (started) {
      dotEl.textContent = '▶';
      dotEl.style.background = 'var(--brand-yellow)';
      dotEl.style.color = '#333';
      dotEl.style.borderColor = 'var(--brand-orange)';
    }
  }

  /* ── Add "You are here" badge ──────────────────── */
  function addYouAreHereBadge(cardEl) {
    if (!cardEl) return;
    const existing = cardEl.querySelector('.you-are-here');
    if (existing) return;
    const badge = document.createElement('div');
    badge.className = 'you-are-here';
    badge.textContent = '📍 You are here';
    cardEl.appendChild(badge);
  }

  /* ── Main init ─────────────────────────────────── */
  function init() {
    /* init HUD */
    if (window.YFUI) YFUI.initHUD();

    const state = (window.YF && YF.getState) ? YF.getState() : null;
    if (!state) return;

    const completed = totalCompleted(state);
    const totalActs = 25;

    /* Avatar stage */
    let stage = AVATAR_STAGES[0];
    for (const s of AVATAR_STAGES) {
      if (completed >= s.min) stage = s;
    }

    const emojiEl    = document.getElementById('avatar-emoji');
    const titleEl    = document.getElementById('avatar-title');
    const subEl      = document.getElementById('avatar-subtitle');
    const fillEl     = document.getElementById('avatar-progress-fill');
    const labelEl    = document.getElementById('avatar-progress-label');

    if (emojiEl)  emojiEl.textContent  = stage.emoji;
    if (titleEl)  titleEl.textContent  = (state.student && state.student.name && state.student.named)
      ? state.student.name + ' — ' + stage.title
      : stage.title;
    if (subEl)    subEl.textContent    = stage.sub;
    if (fillEl)   fillEl.style.width   = Math.max(2, Math.round(completed / totalActs * 100)) + '%';
    if (labelEl)  labelEl.textContent  = completed + ' / ' + totalActs + ' activities';

    /* Update world dots and concept cards */
    let latestWorldDone = null;

    for (const worldId in WORLD_DOTS) {
      const dotEl  = document.getElementById(WORLD_DOTS[worldId]);
      const cardEl = document.getElementById(WORLD_CARDS[worldId]);
      updateDot(dotEl, state, worldId);

      const wComp = worldCompleted(state, worldId);
      if (wComp > 0 && !worldDone(state, worldId)) {
        /* Currently in progress — mark "You are here" */
        latestWorldDone = cardEl;
      }
      if (worldDone(state, worldId) && cardEl) {
        /* Mark completed cards */
        cardEl.style.borderColor = 'var(--brand-green)';
        const doneTag = document.createElement('div');
        doneTag.style.cssText = 'position:absolute;top:-12px;left:16px;background:var(--brand-green);color:white;font-family:var(--font-display);font-size:0.7rem;padding:2px 10px;border-radius:999px;border:2px solid white';
        doneTag.textContent = '✓ Completed';
        cardEl.style.position = 'relative';
        cardEl.appendChild(doneTag);
      }
    }

    /* Place "you are here" badge on most recent in-progress world */
    if (latestWorldDone) addYouAreHereBadge(latestWorldDone);
    else if (completed === 0) addYouAreHereBadge(document.getElementById('card-place-value'));

    /* Lock Foundation cards (always unlocked) */
    /* Lock future concept cards depending on progress thresholds */
    const gradeGates = {
      'card-ratios':       5,   /* after 5 activities (1 world) */
      'card-integers':     5,
      'card-algebra':      8,
      'card-geometry':     8,
      'card-statistics':   10,
      'card-pythagorean':  12,
      'card-linear':       12,
      'card-quadratics':   15,
      'card-coords':       15,
      'card-trig':         18,
      'card-adv-stats':    18,
      'card-proof':        20,
    };

    for (const [cardId, threshold] of Object.entries(gradeGates)) {
      const el = document.getElementById(cardId);
      if (!el) continue;
      if (completed < threshold) {
        el.classList.add('locked');
        /* Replace link buttons on locked cards */
        const link = el.querySelector('.concept-link');
        if (link) {
          const lock = document.createElement('span');
          lock.className = 'concept-coming-soon';
          lock.textContent = '🔒 Complete earlier worlds first';
          link.replaceWith(lock);
        }
      }
    }
  }

  /* Run after DOM + engine ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
