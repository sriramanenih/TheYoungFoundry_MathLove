/* ════════════════════════════════════════════════
   CONCEPT PAGE RENDERER
   Block types: story, reveal, key, example,
     think, try, teach (gated),
     fillblank (gated, type-in),
     stepwise  (un-gated, step-by-step),
     drill     (un-gated, optional extra practice)
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  let concept = null;
  let topicIdx = 0;
  let answered = {};   /* { blockIndex: true } for open topic */
  let misses = 0;

  /* ── Helpers ──────────────────────────────────── */

  function conceptIdFromURL() {
    const m = /[?&]c=([\w-]+)/.exec(location.search);
    return m ? m[1] : null;
  }

  /* fillblank is gated — child must answer to proceed */
  function isQuestion(b) {
    return b.t === 'think' || b.t === 'try' || b.t === 'fillblank';
  }

  function topicComplete(topic) {
    return YF.isActivityComplete(concept.worldId, topic.id);
  }

  function completedCount() {
    return concept.topics.filter(topicComplete).length;
  }

  /* ── Theme & header bar ───────────────────────── */

  function applyTheme() {
    const root = document.body;
    root.style.setProperty('--concept-accent', concept.accent);
    root.style.setProperty('--concept-dark', concept.dark);
    root.style.setProperty('--concept-bg', concept.bg);
    document.title = concept.name + ' — The Young Foundry';

    document.getElementById('bar-icon').textContent = concept.icon;
    document.getElementById('bar-name').textContent = concept.name;
    document.getElementById('bar-grade').textContent = concept.grade;

    const profWrap = document.getElementById('bar-professions');
    profWrap.innerHTML = '<span class="bar-prof-label">💼 Used by</span>';
    concept.professions.forEach(p => {
      const pill = document.createElement('span');
      pill.className = 'bar-prof-pill';
      pill.textContent = p;
      profWrap.appendChild(pill);
    });
  }

  /* ── Sidebar ──────────────────────────────────── */

  function renderSidebar() {
    const list = document.getElementById('topic-list');
    list.innerHTML = '';
    concept.topics.forEach((topic, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'topic-item'
        + (i === topicIdx ? ' active' : '')
        + (topicComplete(topic) ? ' done' : '');
      btn.innerHTML =
        `<span class="topic-num">${topicComplete(topic) ? '✓' : i + 1}</span>` +
        `<span class="topic-label"><strong>${topic.icon} ${topic.title}</strong><small>${topic.sub}</small></span>`;
      btn.addEventListener('click', () => openTopic(i));
      list.appendChild(btn);
    });

    document.getElementById('sidebar-progress').textContent =
      completedCount() + ' / ' + concept.topics.length;

    const tier = YF.getMasteryTier(concept.worldId);
    document.getElementById('sidebar-tier').innerHTML = tier
      ? `${tier.icon} ${tier.label} tier`
      : '🏅 Complete topics to earn tiers';
  }

  /* ── Progressive disclosure ───────────────────── */

  function updateVisibility(container) {
    const blocks = [...container.querySelectorAll('[data-block]')];
    let gateHit = false;
    blocks.forEach(el => {
      const idx = Number(el.dataset.block);
      const type = el.dataset.type;
      if (gateHit) { el.style.display = 'none'; return; }
      el.style.display = '';
      if ((type === 'think' || type === 'try' || type === 'fillblank' || type === 'teach') && !answered[idx]) {
        gateHit = true;
      }
    });
    const banner = container.querySelector('.topic-done-banner');
    if (banner) banner.style.display = gateHit ? 'none' : '';
  }

  /* ── Block renderers ──────────────────────────── */

  function renderBlock(b, idx, container) {
    let el;

    /* ── Static content blocks ──────────────────── */

    if (b.t === 'story') {
      el = document.createElement('div');
      el.className = 'block block-story';
      el.innerHTML = `<span class="story-label">📖 The Hook</span>${b.html}`;

    } else if (b.t === 'reveal') {
      el = document.createElement('div');
      el.className = 'block block-reveal';
      el.innerHTML = `<span class="reveal-label">💡 The Discovery</span>${b.html}`;

    } else if (b.t === 'key') {
      el = document.createElement('div');
      el.className = 'block block-key';
      el.innerHTML = b.html;

    } else if (b.t === 'example') {
      el = document.createElement('div');
      el.className = 'block block-example';
      el.innerHTML = `<div class="example-title">${b.title}</div>${b.html}`;

    /* ── Step-by-step worked example (not gated) ── */

    } else if (b.t === 'stepwise') {
      el = document.createElement('div');
      el.className = 'block block-stepwise';
      el.innerHTML = `<div class="example-title">${b.title}</div>`;

      const stepsWrap = document.createElement('div');
      stepsWrap.className = 'stepwise-steps';
      b.steps.forEach((step, si) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'step-item' + (si > 0 ? ' step-hidden' : '');
        stepEl.innerHTML =
          `<span class="step-num">${si + 1}</span>` +
          `<span class="step-body">${step}</span>`;
        stepsWrap.appendChild(stepEl);
      });
      el.appendChild(stepsWrap);

      if (b.steps.length > 1) {
        let revealed = 0;
        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'btn btn-sm step-next-btn';
        nextBtn.textContent = 'Next step ▶';
        nextBtn.addEventListener('click', () => {
          revealed++;
          const items = stepsWrap.querySelectorAll('.step-item');
          if (revealed < items.length) {
            items[revealed].classList.remove('step-hidden');
            items[revealed].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          if (revealed >= items.length - 1) {
            nextBtn.textContent = '✅ All steps shown';
            nextBtn.disabled = true;
          }
        });
        el.appendChild(nextBtn);
      }

    /* ── Fill-in-the-blank (gated) ─────────────── */

    } else if (b.t === 'fillblank') {
      el = document.createElement('div');
      el.className = 'block block-fillblank';
      el.innerHTML = `<span class="q-label">✍️ Quick Check</span>`;

      const sentence = document.createElement('p');
      sentence.className = 'fillblank-sentence';
      sentence.innerHTML =
        `<span class="fb-before">${b.before}&nbsp;</span>` +
        `<input type="text" class="fb-input" placeholder="?" autocomplete="off" spellcheck="false">` +
        `<span class="fb-after">&nbsp;${b.after}</span>`;
      el.appendChild(sentence);

      const hintEl = document.createElement('div');
      hintEl.className = 'fb-hint';
      hintEl.innerHTML = `<button class="fb-hint-toggle" type="button">💡 Show hint</button><span class="fb-hint-text" hidden>${b.hint}</span>`;
      el.appendChild(hintEl);

      const fb = document.createElement('div');
      fb.className = 'q-feedback';
      el.appendChild(fb);

      const input = sentence.querySelector('.fb-input');
      const hintToggle = hintEl.querySelector('.fb-hint-toggle');
      const hintText  = hintEl.querySelector('.fb-hint-text');

      hintToggle.addEventListener('click', () => {
        hintText.hidden = !hintText.hidden;
        hintToggle.textContent = hintText.hidden ? '💡 Show hint' : '🙈 Hide hint';
      });

      function checkBlank() {
        if (answered[idx]) return;
        const val = input.value.trim().replace(/\s+/g, '');
        if (!val) return;
        const correct = String(b.blank).trim().replace(/\s+/g, '');
        if (val.toLowerCase() === correct.toLowerCase()) {
          input.classList.add('fb-correct');
          input.disabled = true;
          fb.className = 'q-feedback good';
          fb.textContent = b.goodFb || '🎉 Correct!';
          answered[idx] = true;
          YFUI.pop(el);
          updateVisibility(container);
          checkTopicDone(container);
        } else {
          misses++;
          input.classList.add('fb-wrong');
          fb.className = 'q-feedback bad';
          fb.textContent = b.badFb || '🤔 Not quite — check your working and try again.';
          YFUI.shake(el);
          setTimeout(() => {
            input.classList.remove('fb-wrong');
            input.value = '';
            fb.className = 'q-feedback';
            fb.textContent = '';
          }, 1600);
        }
      }

      input.addEventListener('keydown', e => { if (e.key === 'Enter') checkBlank(); });
      input.addEventListener('blur', checkBlank);

    /* ── MCQ (think / try) ──────────────────────── */

    } else if (isQuestion(b)) {
      el = document.createElement('div');
      el.className = 'block block-q' + (b.t === 'think' ? ' is-think' : '');
      el.innerHTML =
        `<span class="q-label">${b.t === 'think' ? '🤔 Think First' : '✏️ Your Turn'}</span>` +
        `<p class="q-text">${b.q}</p>`;
      const grid = document.createElement('div');
      grid.className = 'q-choices';
      const fb = document.createElement('div');
      fb.className = 'q-feedback';

      const order = b.choices.map((c, i) => i).sort(() => Math.random() - 0.5);
      order.forEach(ci => {
        const c = b.choices[ci];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'q-choice';
        btn.textContent = c.label;
        btn.addEventListener('click', () => {
          if (answered[idx]) return;
          fb.textContent = c.fb;
          if (c.right) {
            btn.classList.add('right');
            fb.className = 'q-feedback good';
            answered[idx] = true;
            grid.querySelectorAll('.q-choice').forEach(x => x.disabled = true);
            YFUI.pop(el);
            updateVisibility(container);
            checkTopicDone(container);
          } else {
            misses++;
            btn.classList.add('wrong');
            btn.disabled = true;
            fb.className = 'q-feedback bad';
            YFUI.shake(el);
          }
        });
        grid.appendChild(btn);
      });
      el.appendChild(grid);
      el.appendChild(fb);

    /* ── Teach-back gate ────────────────────────── */

    } else if (b.t === 'teach') {
      el = document.createElement('div');
      el.className = 'block block-q block-teach';
      el.innerHTML =
        `<span class="q-label">💎 Teach It</span>` +
        `<p class="q-text">${b.prompt}</p>` +
        `<textarea placeholder="${b.placeholder}"></textarea>` +
        `<div class="teach-actions"><button class="btn" type="button">📬 Send My Explanation</button></div>` +
        `<div class="q-feedback"></div>`;
      const ta  = el.querySelector('textarea');
      const btn = el.querySelector('button');
      const fb  = el.querySelector('.q-feedback');
      btn.addEventListener('click', () => {
        if (answered[idx]) return;
        const text = ta.value.trim().toLowerCase();
        if (text.length < 60) {
          fb.className = 'q-feedback bad';
          fb.textContent = '🤔 A real explanation needs a bit more — aim for three full sentences.';
          YFUI.shake(el);
          return;
        }
        const hits = b.keywords.filter(group => group.some(k => text.includes(k))).length;
        if (hits < 2) {
          fb.className = 'q-feedback bad';
          fb.textContent = `🤔 Good start — but a friend would still be confused. Try working in ideas like ${b.hint}.`;
          YFUI.shake(el);
          return;
        }
        answered[idx] = true;
        fb.className = 'q-feedback good';
        fb.textContent = '🎉 Now THAT is teaching. You own this concept.';
        ta.disabled = true;
        btn.disabled = true;
        YFUI.confetti();
        updateVisibility(container);
        checkTopicDone(container);
      });

    /* ── Optional extra practice drill (not gated) ── */

    } else if (b.t === 'drill') {
      el = document.createElement('div');
      el.className = 'block block-drill';
      el.dataset.isDrill = 'true';
      el.style.display = 'none'; /* revealed by "More examples" button */

      const head = document.createElement('div');
      head.className = 'drill-head';
      head.innerHTML = '<span class="q-label">🎯 Extra Practice</span><p class="drill-sub">Three more problems to sharpen your understanding.</p>';
      el.appendChild(head);

      b.qs.forEach((dq, qi) => {
        const qEl = document.createElement('div');
        qEl.className = 'drill-q';
        qEl.innerHTML = `<p class="q-text">${dq.q}</p>`;
        const grid = document.createElement('div');
        grid.className = 'q-choices';
        const fb = document.createElement('div');
        fb.className = 'q-feedback';

        const order = dq.choices.map((c, ci) => ci).sort(() => Math.random() - 0.5);
        order.forEach(ci => {
          const c = dq.choices[ci];
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'q-choice';
          btn.textContent = c.label;
          btn.addEventListener('click', () => {
            if (qEl.dataset.answered) return;
            fb.textContent = c.fb;
            if (c.right) {
              btn.classList.add('right');
              fb.className = 'q-feedback good';
              qEl.dataset.answered = 'true';
              grid.querySelectorAll('.q-choice').forEach(x => x.disabled = true);
              YFUI.pop(qEl);
            } else {
              misses++;
              btn.classList.add('wrong');
              btn.disabled = true;
              fb.className = 'q-feedback bad';
              YFUI.shake(qEl);
            }
          });
          grid.appendChild(btn);
        });
        qEl.appendChild(grid);
        qEl.appendChild(fb);
        el.appendChild(qEl);
      });
    }

    if (el) {
      el.dataset.block = idx;
      el.dataset.type = b.t;
      container.appendChild(el);
    }
  }

  /* ── Topic completion ─────────────────────────── */

  function checkTopicDone(container) {
    const topic = concept.topics[topicIdx];
    const gates = topic.blocks
      .map((b, i) => ({ b, i }))
      .filter(x => isQuestion(x.b) || x.b.t === 'teach');
    const allDone = gates.every(x => answered[x.i]);
    if (!allDone) return;

    const wasNew = YF.completeActivity(concept.worldId, topic.id, { perfect: misses === 0 });
    if (wasNew) YFUI.confetti();
    renderSidebar();
    renderHUDStats();

    let banner = container.querySelector('.topic-done-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'topic-done-banner';
      const isLast = topicIdx >= concept.topics.length - 1;

      banner.innerHTML =
        `<h3>${misses === 0 ? '🌟 Perfect run!' : '🎉 Topic mastered!'}</h3>` +
        `<p>${isLast
            ? 'You\'ve climbed every topic in ' + concept.name + '.'
            : 'The next topic builds right on top of this one.'}</p>`;

      const actions = document.createElement('div');
      actions.className = 'banner-actions';

      /* "More examples" button — only when drill block exists */
      const drillEl = container.querySelector('[data-is-drill]');
      if (drillEl) {
        const moreBtn = document.createElement('button');
        moreBtn.className = 'btn btn-outline';
        moreBtn.type = 'button';
        moreBtn.textContent = '📚 More examples';
        moreBtn.addEventListener('click', () => {
          drillEl.style.display = '';
          moreBtn.style.display = 'none';
          drillEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        actions.appendChild(moreBtn);
      }

      /* Next / back button */
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn';
      nextBtn.type = 'button';
      if (!isLast) {
        nextBtn.textContent = '➡️ Next: ' + concept.topics[topicIdx + 1].title;
        nextBtn.addEventListener('click', () => openTopic(topicIdx + 1));
      } else {
        nextBtn.textContent = '🗺️ Back to the Journey Map';
        nextBtn.addEventListener('click', () => { location.href = 'journey.html'; });
      }
      actions.appendChild(nextBtn);
      banner.appendChild(actions);
      container.appendChild(banner);
    }
    banner.style.display = '';
  }

  /* ── Open a topic ─────────────────────────────── */

  function openTopic(i) {
    topicIdx = i;
    answered = {};
    misses = 0;
    const topic = concept.topics[i];
    const main = document.getElementById('topic-content');
    main.innerHTML =
      `<div class="topic-head">` +
      `<span class="topic-emoji">${topic.icon}</span>` +
      `<div><div class="topic-step">Topic ${i + 1} of ${concept.topics.length} · ${concept.name}</div>` +
      `<h1>${topic.title}</h1></div></div>`;

    topic.blocks.forEach((b, idx) => renderBlock(b, idx, main));

    /* Already-completed topics open fully revealed */
    if (topicComplete(topic)) {
      topic.blocks.forEach((b, idx) => {
        if (isQuestion(b) || b.t === 'teach') answered[idx] = true;
      });
      main.querySelectorAll('.q-choice, textarea, .block-teach .btn, .fb-input').forEach(x => x.disabled = true);
      /* Show drill blocks for revisit */
      main.querySelectorAll('[data-is-drill]').forEach(el => el.style.display = '');
      /* Reveal all stepwise steps */
      main.querySelectorAll('.step-item').forEach(el => el.classList.remove('step-hidden'));
      main.querySelectorAll('.step-next-btn').forEach(btn => { btn.textContent = '✅ All steps shown'; btn.disabled = true; });
    }

    updateVisibility(main);
    renderSidebar();
    main.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollTo(0, 0);
  }

  /* ── HUD stats ────────────────────────────────── */

  function renderHUDStats() {
    const xp = document.getElementById('hud-xp-val');
    const coin = document.getElementById('hud-coin-val');
    const lvl = document.getElementById('hud-level-val');
    if (xp)   xp.textContent   = YF.getXP().toLocaleString();
    if (coin) coin.textContent = YF.getCoins().toLocaleString();
    if (lvl)  lvl.textContent  = YF.getLevel().level;
  }

  /* ── Welcome modal ───────────────────────────── */

  function showWelcomeModal() {
    document.getElementById('welcome-emoji').textContent = concept.icon;
    document.getElementById('welcome-title').textContent = concept.name;
    document.getElementById('welcome-insight').textContent = concept.insight;

    const profList = document.getElementById('welcome-professions');
    profList.innerHTML = '';
    concept.professions.forEach(p => {
      const item = document.createElement('span');
      item.className = 'profession-item';
      item.textContent = p;
      profList.appendChild(item);
    });

    document.getElementById('welcome-modal').hidden = false;
  }

  function closeWelcomeModal() {
    document.getElementById('welcome-modal').hidden = true;
  }

  /* ── Init ─────────────────────────────────────── */

  function init() {
    const id = conceptIdFromURL();
    const registry = Object.assign({}, window.MYP_CONTENT, window.SENIOR_CONTENT);
    concept = registry[id] || null;

    if (!concept) {
      document.getElementById('topic-content').innerHTML =
        `<div class="topic-head"><span class="topic-emoji">🚧</span>` +
        `<div><h1>Concept not found</h1></div></div>` +
        `<p style="font-weight:600;color:var(--text-soft)">This concept isn't built yet. ` +
        `<a href="journey.html">Back to the Journey Map</a></p>`;
      return;
    }

    applyTheme();
    renderHUDStats();
    YF.on('xp', renderHUDStats);
    YF.on('coins', renderHUDStats);

    const closeBtn = document.getElementById('welcome-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeWelcomeModal);
      document.getElementById('welcome-modal').addEventListener('click', e => {
        if (e.target.id === 'welcome-modal') closeWelcomeModal();
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeWelcomeModal(); });
    }

    const firstOpen = concept.topics.findIndex(t => !topicComplete(t));
    openTopic(firstOpen === -1 ? 0 : firstOpen);
    showWelcomeModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
