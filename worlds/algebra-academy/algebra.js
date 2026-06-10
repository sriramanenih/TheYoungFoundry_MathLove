/* ════════════════════════════════════════════════
   ALGEBRA ACADEMY — 5 DISCOVERY ACTIVITIES
   1. 🎁 Mystery Box    — variable as unknown
   2. ⚖️ Balance Scale  — equation = equality
   3. 🔧 Build It       — expressions
   4. 🕵️ Solve It       — solving by undoing
   5. 💎 Teach It       — mastery teach-back
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  const WORLD = 'algebra-academy';
  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  /* ── Activity registry ───────────────────────── */

  const ACTIVITIES = [
    {
      id: 'mystery-box', emoji: '🎁', title: 'Mystery Box',
      desc: 'A box is hiding a number. Slide, guess, and check until you crack it!',
      render: renderMysteryBox,
    },
    {
      id: 'balance-scale', emoji: '⚖️', title: 'Balance Scale',
      desc: 'Discover what the = sign REALLY means: a perfectly balanced scale.',
      render: renderBalanceScale,
    },
    {
      id: 'build-it', emoji: '🔧', title: 'Build It',
      desc: 'Turn words into math. Build expressions from tokens.',
      render: renderBuildIt,
    },
    {
      id: 'solve-it', emoji: '🕵️', title: 'Solve It',
      desc: 'Equations are knots. Discover how to untie them — one undo at a time.',
      render: renderSolveIt,
    },
    {
      id: 'teach-it', emoji: '💎', title: 'Teach It',
      desc: 'The Diamond gate: explain solving equations in YOUR own words.',
      render: renderTeachIt,
    },
  ];

  /* ── Trail & stage plumbing ──────────────────── */

  const trail     = document.getElementById('activity-trail');
  const stage     = document.getElementById('stage');
  const stageTitle = document.getElementById('stage-title');
  const stageBody = document.getElementById('stage-body');

  function renderTrail() {
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
    const tier = YF.getMasteryTier(WORLD);
    const pct = Math.round(YF.getMastery(WORLD) * 100);
    el.innerHTML = tier
      ? `<span class="badge badge-${tier.name}">${tier.icon} ${tier.label} — ${pct}% explored</span>`
      : `<span class="badge badge-purple">${pct}% explored</span>`;
  }

  function openActivity(act) {
    YFTutor.setTopic(act.id);
    stageTitle.textContent = `${act.emoji} ${act.title}`;
    stageBody.innerHTML = '';
    stage.hidden = false;
    act.render(stageBody);
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeStage() {
    stage.hidden = true;
    YFTutor.setTopic('default');
  }

  function finishActivity(id, opts) {
    const first = YF.completeActivity(WORLD, id, opts || {});
    if (first) YFUI.confetti();
    YFUI.toast(YFTutor.celebrate(), 'success', 3500);
    renderTrail();
    renderTierBadge();
  }

  function feedbackEl() {
    const el = document.createElement('p');
    el.className = 'stage-feedback';
    return el;
  }

  function setFeedback(el, msg, good) {
    el.textContent = msg;
    el.className = 'stage-feedback ' + (good ? 'good' : 'bad');
  }

  /* ═════════════════════════════════════════════
     1. 🎁 MYSTERY BOX — variable as unknown
     ═════════════════════════════════════════════ */

  function renderMysteryBox(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let a, target;

    body.innerHTML = `
      <p class="stage-prompt">
        Something is hiding inside the box 🎁. The machine adds a number to it
        and shows the total. <strong>Slide until the math works!</strong>
        No formulas — just your detective brain.
      </p>
      <div class="mystery-display" id="mb-display"></div>
      <div class="slider-row">
        <input type="range" id="mb-slider" min="0" max="20" value="10" />
        <span class="slider-val" id="mb-val">10</span>
      </div>
      <div class="stage-actions">
        <button class="btn" id="mb-check">🔍 Check</button>
        <button class="btn btn-secondary" id="mb-hint">🤖 Buddy?</button>
      </div>
    `;
    const fb = feedbackEl();
    body.appendChild(fb);

    const display = body.querySelector('#mb-display');
    const slider  = body.querySelector('#mb-slider');
    const valEl   = body.querySelector('#mb-val');

    function newRound() {
      target = rnd(2, 18);
      a = rnd(1, 9);
      display.innerHTML = `<span class="box">?</span> <span>+ ${a} = ${target + a}</span>`;
      slider.value = 10;
      valEl.textContent = '10';
    }

    slider.addEventListener('input', () => { valEl.textContent = slider.value; });

    body.querySelector('#mb-check').addEventListener('click', () => {
      const guess = Number(slider.value);
      YFTutor.attempt('mystery-box');
      if (guess === target) {
        round += 1;
        YFUI.pop(display);
        if (round === 1) {
          YF.addDiscovery('variable-is-unknown',
            'A variable is just a number in hiding', WORLD);
        }
        if (round >= ROUNDS) {
          setFeedback(fb, `🎉 Box cracked ${ROUNDS} times! The "?" was a different number each time — but the IDEA was the same.`, true);
          finishActivity('mystery-box', { perfect: misses === 0 });
        } else {
          setFeedback(fb, `✅ Cracked it! The box was hiding ${target}. Round ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(display);
        const dir = guess > target ? 'That made the total too BIG.' : 'That made the total too SMALL.';
        setFeedback(fb, `${dir} ${YFTutor.encourage()}`, false);
      }
    });

    body.querySelector('#mb-hint').addEventListener('click', () => {
      YFUI.toast(YFTutor.hint('mystery-box'), '', 4000);
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     2. ⚖️ BALANCE SCALE — equation = equality
     ═════════════════════════════════════════════ */

  function renderBalanceScale(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let x, a, total;

    body.innerHTML = `
      <p class="stage-prompt">
        The <strong>=</strong> sign is a secret scale ⚖️. Both sides must weigh
        EXACTLY the same. Slide the mystery weight <strong>x</strong> until the
        scale balances.
      </p>
      <div class="scale-wrap">
        <div class="scale-beam-area">
          <div class="scale-beam" id="bs-beam">
            <div class="scale-pan left"  id="bs-left"></div>
            <div class="scale-pan right" id="bs-right"></div>
          </div>
          <div class="scale-post"></div>
          <div class="scale-base"></div>
        </div>
      </div>
      <div class="slider-row">
        <input type="range" id="bs-slider" min="0" max="15" value="0" />
        <span class="slider-val">x = <span id="bs-val">0</span></span>
      </div>
      <div class="stage-actions">
        <button class="btn" id="bs-check">⚖️ Balance!</button>
        <button class="btn btn-secondary" id="bs-hint">🤖 Buddy?</button>
      </div>
    `;
    const fb = feedbackEl();
    body.appendChild(fb);

    const beam   = body.querySelector('#bs-beam');
    const left   = body.querySelector('#bs-left');
    const right  = body.querySelector('#bs-right');
    const slider = body.querySelector('#bs-slider');
    const valEl  = body.querySelector('#bs-val');

    function tilt() {
      const guess = Number(slider.value);
      const leftWeight  = guess + a;
      const diff = Math.max(-1, Math.min(1, (total - leftWeight) / 6));
      beam.style.transform = `translateX(-50%) rotate(${diff * 10}deg)`;
    }

    function newRound() {
      x = rnd(1, 12);
      a = rnd(1, 8);
      total = x + a;
      left.innerHTML  = `x + ${a}`;
      right.innerHTML = `${total}`;
      slider.value = 0;
      valEl.textContent = '0';
      tilt();
    }

    slider.addEventListener('input', () => {
      valEl.textContent = slider.value;
      tilt();
    });

    body.querySelector('#bs-check').addEventListener('click', () => {
      const guess = Number(slider.value);
      YFTutor.attempt('balance-scale');
      if (guess === x) {
        round += 1;
        YFUI.pop(beam.parentElement);
        if (round === 1) {
          YF.addDiscovery('equals-means-balance',
            'The = sign means both sides balance', WORLD);
        }
        if (round >= ROUNDS) {
          setFeedback(fb, '🎉 Perfectly balanced — every time! You just discovered what an EQUATION really is.', true);
          finishActivity('balance-scale', { perfect: misses === 0 });
        } else {
          setFeedback(fb, `✅ Balanced! x was ${x}. Round ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        const side = guess + a > total ? 'Left side is too heavy!' : 'Left side is too light!';
        setFeedback(fb, `${side} ${YFTutor.encourage()}`, false);
      }
    });

    body.querySelector('#bs-hint').addEventListener('click', () => {
      YFUI.toast(YFTutor.hint('balance-scale'), '', 4000);
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     3. 🔧 BUILD IT — expressions from tokens
     ═════════════════════════════════════════════ */

  function renderBuildIt(body) {
    const PUZZLES = [
      { phrase: '“3 more than a number”',        answer: ['x', '+', '3'], tokens: ['3', 'x', '+', '−'] },
      { phrase: '“a number doubled”',            answer: ['2', '×', 'x'], tokens: ['x', '×', '2', '+'] },
      { phrase: '“5 less than a number”',        answer: ['x', '−', '5'], tokens: ['5', '−', 'x', '+'] },
      { phrase: '“4 times a number, plus 1”',    answer: ['4', '×', 'x', '+', '1'], tokens: ['1', 'x', '+', '4', '×'] },
    ];
    let idx = 0, misses = 0;
    let built = [];

    body.innerHTML = `
      <p class="stage-prompt">
        Math is a language 🗣️. Read the phrase, then <strong>tap tokens</strong>
        to translate it into symbols. <code>x</code> stands for “a number we
        don't know yet.”
      </p>
      <div class="mystery-display" id="bi-phrase" style="font-size:1.3rem"></div>
      <div class="token-slot-row" id="bi-slots"></div>
      <div class="token-tray" id="bi-tray"></div>
      <div class="stage-actions">
        <button class="btn" id="bi-check">✔️ Check</button>
        <button class="btn btn-secondary" id="bi-clear">↺ Clear</button>
        <button class="btn btn-secondary" id="bi-hint">🤖 Buddy?</button>
      </div>
    `;
    const fb = feedbackEl();
    body.appendChild(fb);

    const phraseEl = body.querySelector('#bi-phrase');
    const slotsEl  = body.querySelector('#bi-slots');
    const trayEl   = body.querySelector('#bi-tray');

    function renderPuzzle() {
      const p = PUZZLES[idx];
      built = [];
      phraseEl.textContent = p.phrase;
      slotsEl.innerHTML = '<span class="placeholder">Tap tokens below to build…</span>';
      trayEl.innerHTML = '';
      p.tokens.forEach(tok => {
        const btn = document.createElement('button');
        btn.className = 'token';
        btn.textContent = tok;
        btn.addEventListener('click', () => {
          built.push(tok);
          drawSlots();
        });
        trayEl.appendChild(btn);
      });
    }

    function drawSlots() {
      slotsEl.innerHTML = built.length
        ? built.map(t => `<span class="token" style="cursor:default">${t}</span>`).join('')
        : '<span class="placeholder">Tap tokens below to build…</span>';
    }

    body.querySelector('#bi-clear').addEventListener('click', () => {
      built = [];
      drawSlots();
    });

    body.querySelector('#bi-check').addEventListener('click', () => {
      const p = PUZZLES[idx];
      YFTutor.attempt('build-it');
      /* Accept commutative addition/multiplication reversals */
      const norm = (arr) => arr.join(' ');
      const reversed = [...p.answer].reverse();
      const commutative = (p.answer.includes('+') || p.answer.includes('×')) && p.answer.length === 3;
      const ok = norm(built) === norm(p.answer) || (commutative && norm(built) === norm(reversed));

      if (ok) {
        idx += 1;
        YFUI.pop(slotsEl);
        if (idx === 1) {
          YF.addDiscovery('expressions-are-language',
            'Expressions are math sentences', WORLD);
        }
        if (idx >= PUZZLES.length) {
          setFeedback(fb, '🎉 You translated them all! Words → symbols. That\'s what algebra IS.', true);
          finishActivity('build-it', { perfect: misses === 0 });
        } else {
          setFeedback(fb, `✅ Perfect translation! Next phrase (${idx + 1} of ${PUZZLES.length})…`, true);
          renderPuzzle();
        }
      } else {
        misses += 1;
        YFUI.shake(slotsEl);
        setFeedback(fb, YFTutor.encourage(), false);
      }
    });

    body.querySelector('#bi-hint').addEventListener('click', () => {
      YFUI.toast(YFTutor.hint('build-it'), '', 4000);
    });

    renderPuzzle();
  }

  /* ═════════════════════════════════════════════
     4. 🕵️ SOLVE IT — solving by undoing
     ═════════════════════════════════════════════ */

  function renderSolveIt(body) {
    const ROUNDS = 2;
    let round = 0, misses = 0;
    let a, b, x;          /* equation: a·x + b = a·x + b  →  ax + b = c */
    let stageNum = 0;     /* 0 = need to undo +b, 1 = need to undo ×a, 2 = solved */

    body.innerHTML = `
      <p class="stage-prompt">
        An equation is a wrapped present 🎁 — x is inside. To unwrap it,
        <strong>undo</strong> each operation… and whatever you do to one side,
        do to the other! Pick the right move at each step.
      </p>
      <div class="equation-display" id="si-eq"></div>
      <div class="step-choices" id="si-choices"></div>
      <ul class="step-history" id="si-history"></ul>
    `;
    const fb = feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.innerHTML = `<button class="btn btn-secondary" id="si-hint">🤖 Buddy?</button>`;
    body.appendChild(actions);

    const eqEl      = body.querySelector('#si-eq');
    const choicesEl = body.querySelector('#si-choices');
    const histEl    = body.querySelector('#si-history');

    function newRound() {
      a = rnd(2, 5);
      x = rnd(2, 9);
      b = rnd(1, 9);
      stageNum = 0;
      histEl.innerHTML = '';
      drawEquation();
      drawChoices();
    }

    function drawEquation() {
      if (stageNum === 0)      eqEl.textContent = `${a}x + ${b} = ${a * x + b}`;
      else if (stageNum === 1) eqEl.textContent = `${a}x = ${a * x}`;
      else                     eqEl.textContent = `x = ${x}  🎉`;
      YFUI.pop(eqEl);
    }

    function drawChoices() {
      choicesEl.innerHTML = '';
      if (stageNum >= 2) return;
      const correct = stageNum === 0
        ? { label: `Subtract ${b} from both sides`, ok: true }
        : { label: `Divide both sides by ${a}`,     ok: true };
      const wrongPool = stageNum === 0
        ? [`Add ${b} to both sides`, `Divide both sides by ${a}`, `Subtract ${b} from the left side only`]
        : [`Multiply both sides by ${a}`, `Subtract ${a} from both sides`, `Divide the right side only by ${a}`];
      const options = [correct,
        { label: wrongPool[rnd(0, wrongPool.length - 1)], ok: false },
        { label: wrongPool.filter(w => true)[ (rnd(0, wrongPool.length - 1) + 1) % wrongPool.length ], ok: false },
      ];
      /* de-dupe wrong choices */
      if (options[1].label === options[2].label) options[2].label = wrongPool.find(w => w !== options[1].label);
      options.sort(() => Math.random() - 0.5);

      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'step-choice';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => {
          YFTutor.attempt('solve-it');
          if (opt.ok) {
            const li = document.createElement('li');
            li.textContent = `✅ ${opt.label}`;
            histEl.appendChild(li);
            stageNum += 1;
            drawEquation();
            drawChoices();
            if (stageNum >= 2) {
              round += 1;
              if (round === 1) {
                YF.addDiscovery('solve-by-undoing',
                  'Solving means undoing — in reverse order', WORLD);
              }
              if (round >= ROUNDS) {
                setFeedback(fb, '🎉 Equation detective! You can unwrap ANY equation now.', true);
                finishActivity('solve-it', { perfect: misses === 0 });
              } else {
                setFeedback(fb, `✅ Solved! x was ${x}. Next mystery (${round + 1} of ${ROUNDS})…`, true);
                setTimeout(newRound, 1400);
              }
            } else {
              setFeedback(fb, '✅ Good move. What\'s next?', true);
            }
          } else {
            misses += 1;
            YFUI.shake(eqEl);
            setFeedback(fb, `${YFTutor.encourage()}`, false);
          }
        });
        choicesEl.appendChild(btn);
      });
    }

    body.querySelector('#si-hint').addEventListener('click', () => {
      YFUI.toast(YFTutor.hint('solve-it'), '', 4000);
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     5. 💎 TEACH IT — mastery teach-back gate
     ═════════════════════════════════════════════ */

  function renderTeachIt(body) {
    const KEYWORDS = [
      ['both sides', 'both side'],
      ['balance', 'balanced', 'equal', 'same'],
      ['undo', 'opposite', 'subtract', 'divide', 'inverse', 'reverse'],
    ];

    body.innerHTML = `
      <p class="stage-prompt">
        💎 <strong>The Diamond Gate.</strong> You only truly know something when
        you can teach it. Imagine a friend who has never seen algebra. In your
        own words, explain: <em>How do you solve an equation like
        <code>x + 4 = 9</code> — and WHY does your method work?</em>
      </p>
      <textarea class="teach-area" id="ti-text"
        placeholder="Dear friend, an equation is like..."></textarea>
      <div class="stage-actions">
        <button class="btn" id="ti-submit">🎓 Teach It!</button>
        <button class="btn btn-secondary" id="ti-hint">🤖 Buddy?</button>
      </div>
    `;
    const fb = feedbackEl();
    body.appendChild(fb);

    const textEl = body.querySelector('#ti-text');

    body.querySelector('#ti-submit').addEventListener('click', () => {
      const text = textEl.value.trim().toLowerCase();
      YFTutor.attempt('teach-it');

      if (text.length < 60) {
        setFeedback(fb, '🤔 A friend would need a little more than that. Can you explain it like a story — at least a few sentences?', false);
        return;
      }
      const hits = KEYWORDS.filter(group => group.some(k => text.includes(k))).length;
      if (hits < 2) {
        setFeedback(fb, '🧭 Good start! Try using ideas like "balance", "both sides", or "undoing" — the big ideas you discovered here.', false);
        return;
      }

      YF.addDiscovery('teaching-is-mastery',
        'If you can teach it, you own it', WORLD);
      setFeedback(fb, '💎 THAT is a teacher\'s explanation. You didn\'t memorize algebra — you OWN it.', true);
      finishActivity('teach-it', { perfect: true });
    });

    body.querySelector('#ti-hint').addEventListener('click', () => {
      YFUI.toast(YFTutor.hint('teach-it'), '', 4500);
    });
  }

  /* ── Init ────────────────────────────────────── */

  document.getElementById('stage-close').addEventListener('click', closeStage);

  YF.on('*', () => renderTierBadge());

  YFUI.initHUD();
  YFTutor.mountBuddy();
  YFUI.showOnboarding(() => {});
  renderTrail();
  renderTierBadge();

})();
