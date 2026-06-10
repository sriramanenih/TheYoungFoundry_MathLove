/* ════════════════════════════════════════════════
   THE YOUNG FOUNDRY — UI LAYER (YFUI)
   HUD rendering, toasts, modals, confetti.
   Depends on engine.js (YF).
   ════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  /* ── HUD ─────────────────────────────────────── */

  function renderHUD() {
    const xpEl    = document.getElementById('hud-xp-val');
    const coinEl  = document.getElementById('hud-coin-val');
    const levelEl = document.getElementById('hud-level-val');
    const barEl   = document.getElementById('hud-xp-bar');
    if (!xpEl) return;

    const lvl = YF.getLevel();
    xpEl.textContent    = YF.getXP().toLocaleString();
    coinEl.textContent  = YF.getCoins().toLocaleString();
    levelEl.textContent = lvl.level;
    if (barEl) barEl.style.width = Math.round(lvl.progress * 100) + '%';
  }

  function initHUD() {
    renderHUD();
    YF.on('xp',    () => renderHUD());
    YF.on('coins', () => renderHUD());
    YF.on('reset', () => renderHUD());

    /* Celebrate XP gains with a toast + confetti burst */
    YF.on('xp', (data) => {
      if (data.amount > 0) toast(`⚡ +${data.amount} XP`, 'xp', 1600);
    });
    YF.on('discovery', (data) => {
      confetti();
      toast(`✨ Discovery: ${data.label}`, 'success', 3000);
    });
    YF.on('tier', (data) => {
      confetti();
      const icons = { bronze: '🥉', silver: '🥈', gold: '🥇', diamond: '💎' };
      toast(`${icons[data.tier] || '🏅'} ${cap(data.tier)} tier reached!`, 'success', 3000);
    });
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ── Toasts ──────────────────────────────────── */

  function toast(message, type, duration) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'toast' + (type ? ' ' + type : '');
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => {
      el.classList.add('leaving');
      setTimeout(() => el.remove(), 350);
    }, duration || 2200);
  }

  /* ── Modal ───────────────────────────────────── */

  function modal(opts) {
    const backdrop = document.createElement('div');
    backdrop.className = 'yf-modal-backdrop';
    const box = document.createElement('div');
    box.className = 'yf-modal';
    box.innerHTML = opts.html;
    backdrop.appendChild(box);
    document.body.appendChild(backdrop);

    function close() { backdrop.remove(); }
    if (opts.dismissable !== false) {
      backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    }
    if (opts.onOpen) opts.onOpen(box, close);
    return { close, box };
  }

  /* ── Onboarding (first visit: ask for a name) ── */

  function showOnboarding(done) {
    const state = YF.getState();
    if (state.student.named) { if (done) done(); return; }

    modal({
      dismissable: false,
      html: `
        <div style="font-size:3rem">🏭</div>
        <h2>Welcome to The Young Foundry!</h2>
        <p>You're about to <strong>discover</strong> mathematics — not memorize it.<br>What should we call you, explorer?</p>
        <input type="text" id="yf-onboard-name" maxlength="24" placeholder="Your name" autocomplete="off" />
        <button class="btn" id="yf-onboard-go">🚀 Let's Go!</button>
      `,
      onOpen(box, close) {
        const input = box.querySelector('#yf-onboard-name');
        const btn   = box.querySelector('#yf-onboard-go');
        input.focus();
        function submit() {
          const name = input.value.trim();
          if (name) YF.setStudentName(name);
          else YF.setStudentName('Explorer');
          close();
          toast(`👋 Welcome, ${YF.getState().student.name}!`, 'success');
          if (done) done();
        }
        btn.addEventListener('click', submit);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
      },
    });
  }

  /* ── Confetti ────────────────────────────────── */

  const PARTICLE_COLORS = ['#FFD93D', '#5B4FCF', '#2ECC71', '#ff6b9d', '#00d2d3', '#FF9F43'];

  function confetti(x, y, count) {
    const cx = x != null ? x : window.innerWidth / 2;
    const cy = y != null ? y : window.innerHeight / 3;
    const n  = count || 28;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'yf-particle';
      p.style.background = PARTICLE_COLORS[i % PARTICLE_COLORS.length];
      p.style.left = (cx + (Math.random() - 0.5) * 240) + 'px';
      p.style.top  = (cy + (Math.random() - 0.5) * 80) + 'px';
      p.style.animationDelay = (Math.random() * 0.2) + 's';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1600);
    }
  }

  /* ── Feedback helpers ────────────────────────── */

  function shake(el) {
    el.classList.remove('shake');
    void el.offsetWidth;            /* restart animation */
    el.classList.add('shake');
  }

  function pop(el) {
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
  }

  /* ── Public API ──────────────────────────────── */

  global.YFUI = {
    initHUD, renderHUD,
    toast, modal, showOnboarding,
    confetti, shake, pop,
  };

})(window);
