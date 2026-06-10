/* ════════════════════════════════════════════════
   FRACTION FACTORY — 5 DISCOVERY ACTIVITIES
   1. 🍕 Pizza Cutter      — parts of a whole
   2. 🍫 Fair Share        — fractions are fair sharing
   3. 👯 Twin Fractions    — equivalence
   4. 🥊 Fraction Face-Off — comparing
   5. 💎 Teach It          — mastery teach-back
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  const W = YFWorld;
  const rnd = W.rnd;

  /* Horizontal fraction bar: den segments, first num shaded */
  function barHTML(num, den) {
    let segs = '';
    for (let i = 0; i < den; i++) segs += `<div class="frac-seg${i < num ? ' shaded' : ''}"></div>`;
    return `<div class="frac-bar">${segs}</div>`;
  }

  /* ═════════════════════════════════════════════
     1. 🍕 PIZZA CUTTER — parts of a whole
     ═════════════════════════════════════════════ */

  function wedgePath(cx, cy, r, a0, a1) {
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1} Z`;
  }

  function renderPizzaCutter(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let den, num;

    body.innerHTML = `
      <p class="stage-prompt">
        Welcome to the bakery 🍕! Each order names a fraction. The pizza is
        already sliced into EQUAL parts — <strong>click slices</strong> to add
        sauce to exactly the right share.
      </p>
      <div class="big-display">Order: shade <strong id="pc-frac" style="color:var(--world-primary)"></strong> of the pizza</div>
      <div class="pizza-wrap"><svg id="pc-svg" viewBox="0 0 200 200"></svg></div>
      <div class="frac-label" id="pc-status"></div>
      <div class="stage-actions">
        <button class="btn" id="pc-check">👨‍🍳 Serve It!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions').appendChild(W.hintButton('pizza-cutter'));

    const svg = body.querySelector('#pc-svg');

    function shadedCount() { return svg.querySelectorAll('.slice.shaded').length; }

    function updateStatus() {
      body.querySelector('#pc-status').textContent = `Shaded: ${shadedCount()} of ${den} slices`;
    }

    function newRound() {
      den = [4, 6, 8][rnd(0, 2)];
      num = rnd(1, den - 1);
      body.querySelector('#pc-frac').textContent = `${num}/${den}`;
      svg.innerHTML = '';
      for (let i = 0; i < den; i++) {
        const a0 = (i / den) * 2 * Math.PI - Math.PI / 2;
        const a1 = ((i + 1) / den) * 2 * Math.PI - Math.PI / 2;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', wedgePath(100, 100, 92, a0, a1));
        path.setAttribute('class', 'slice');
        path.addEventListener('click', () => {
          path.classList.toggle('shaded');
          updateStatus();
        });
        svg.appendChild(path);
      }
      updateStatus();
    }

    body.querySelector('#pc-check').addEventListener('click', () => {
      YFTutor.attempt('pizza-cutter');
      if (shadedCount() === num) {
        round += 1;
        YFUI.pop(svg.parentElement);
        if (round === 1) {
          YF.addDiscovery('fraction-is-parts',
            'A fraction is equal parts of a whole — bottom counts ALL, top counts YOURS', 'fraction-factory');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, '🎉 Three perfect orders! You speak fluent fraction now.', true);
          W.finish('pizza-cutter', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ ${num}/${den} served hot! Order ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(svg.parentElement);
        W.setFeedback(fb, `🤔 The customer ordered ${num}/${den} but got ${shadedCount()}/${den}. What does the TOP number count?`, false);
      }
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     2. 🍫 FAIR SHARE — fractions are fair sharing
     ═════════════════════════════════════════════ */

  function renderFairShare(body) {
    const CASES = [
      { story: '1 chocolate bar 🍫 shared fairly by 2 friends. How much does each friend get?', answer: '1/2 of a bar', wrong: ['2 bars', '1/4 of a bar'] },
      { story: '1 cake 🎂 shared fairly by 4 friends. How much cake each?', answer: '1/4 of the cake', wrong: ['1/2 of the cake', '4 cakes'] },
      { story: '3 pizzas 🍕 shared fairly by 4 friends. How much pizza each?', answer: '3/4 of a pizza', wrong: ['1/3 of a pizza', '4/3 of a pizza'] },
    ];
    let idx = 0, misses = 0;

    body.innerHTML = `
      <p class="stage-prompt">
        Fractions were invented for ONE reason: <strong>fair sharing</strong> 🍫.
        Everyone gets exactly the same — no fights at the table! Solve each
        sharing puzzle.
      </p>
      <div class="big-display" id="fs-story" style="font-size:1.1rem;font-family:var(--font-body);font-weight:700"></div>
      <div class="choice-grid" id="fs-choices"></div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('fair-share'));
    body.appendChild(actions);

    function newCase() {
      const c = CASES[idx];
      body.querySelector('#fs-story').textContent = c.story;
      const grid = body.querySelector('#fs-choices');
      grid.innerHTML = '';
      W.shuffle([c.answer, ...c.wrong]).forEach(label => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => {
          YFTutor.attempt('fair-share');
          if (label === c.answer) {
            idx += 1;
            YFUI.pop(grid);
            if (idx === 1) {
              YF.addDiscovery('fractions-are-fair-sharing',
                'Fractions are just fair sharing', 'fraction-factory');
            }
            if (idx >= CASES.length) {
              W.setFeedback(fb, '🎉 Everyone fed, no fights! Sharing fairly IS fractions.', true);
              W.finish('fair-share', { perfect: misses === 0 });
            } else {
              W.setFeedback(fb, `✅ Perfectly fair! Next table (${idx + 1} of ${CASES.length})…`, true);
              setTimeout(newCase, 1100);
            }
          } else {
            misses += 1;
            YFUI.shake(grid);
            W.setFeedback(fb, `🤔 Someone got more than someone else! Among how many friends are we splitting?`, false);
          }
        });
        grid.appendChild(btn);
      });
    }

    newCase();
  }

  /* ═════════════════════════════════════════════
     3. 👯 TWIN FRACTIONS — equivalence
     ═════════════════════════════════════════════ */

  function renderTwinFractions(body) {
    const PUZZLES = [
      { base: [1, 2], twin: [2, 4], decoys: [[3, 4], [1, 3]] },
      { base: [1, 3], twin: [2, 6], decoys: [[2, 3], [3, 6]] },
      { base: [3, 4], twin: [6, 8], decoys: [[4, 6], [5, 8]] },
    ];
    let idx = 0, misses = 0;

    body.innerHTML = `
      <p class="stage-prompt">
        Some fractions are twins 👯 — they LOOK different but cover exactly the
        same amount. Trust the bars, not the numbers! Find the twin of the top
        fraction.
      </p>
      <div class="frac-label" style="font-size:1.3rem">Find the twin of <strong id="tf-base-label" style="color:var(--world-primary)"></strong></div>
      <div id="tf-base-bar"></div>
      <div class="choice-grid" id="tf-choices" style="max-width:none"></div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('twin-fractions'));
    body.appendChild(actions);

    function newPuzzle() {
      const p = PUZZLES[idx];
      body.querySelector('#tf-base-label').textContent = `${p.base[0]}/${p.base[1]}`;
      body.querySelector('#tf-base-bar').innerHTML = barHTML(p.base[0], p.base[1]);
      const grid = body.querySelector('#tf-choices');
      grid.innerHTML = '';
      W.shuffle([p.twin, ...p.decoys]).forEach(([n, d]) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<div class="frac-label">${n}/${d}</div>${barHTML(n, d)}`;
        btn.addEventListener('click', () => {
          YFTutor.attempt('twin-fractions');
          if (n === p.twin[0] && d === p.twin[1]) {
            idx += 1;
            YFUI.pop(grid);
            if (idx === 1) {
              YF.addDiscovery('equivalent-fractions',
                'Different fractions can cover the SAME amount — twins!', 'fraction-factory');
            }
            if (idx >= PUZZLES.length) {
              W.setFeedback(fb, '🎉 All twins reunited! Same amount, different names.', true);
              W.finish('twin-fractions', { perfect: misses === 0 });
            } else {
              W.setFeedback(fb, `✅ ${p.base[0]}/${p.base[1]} = ${n}/${d} — twins! Next pair (${idx + 1} of ${PUZZLES.length})…`, true);
              setTimeout(newPuzzle, 1100);
            }
          } else {
            misses += 1;
            YFUI.shake(grid);
            W.setFeedback(fb, '🤔 Look at the SHADED lengths, not the numbers. Which bar matches exactly?', false);
          }
        });
        grid.appendChild(btn);
      });
    }

    newPuzzle();
  }

  /* ═════════════════════════════════════════════
     4. 🥊 FRACTION FACE-OFF — comparing
     ═════════════════════════════════════════════ */

  function renderCompareFractions(body) {
    const ROUNDS = 4;
    let round = 0, misses = 0;
    let L, R;   /* [num, den] each */

    body.innerHTML = `
      <p class="stage-prompt">
        Two fractions enter the ring 🥊. Big numbers can LIE — 1/8 has a bigger
        bottom than 1/4, but tiny slices! Look at the bars and crown the
        champion.
      </p>
      <div class="frac-compare">
        <div><div class="frac-label" id="cf-l-label"></div><div id="cf-l-bar"></div></div>
        <div><div class="frac-label" id="cf-r-label"></div><div id="cf-r-bar"></div></div>
      </div>
      <div class="choice-grid row" id="cf-choices">
        <button class="choice-btn" data-pick="L">👈 Left wins</button>
        <button class="choice-btn" data-pick="=">🤝 Tie</button>
        <button class="choice-btn" data-pick="R">Right wins 👉</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('compare-fractions'));
    body.appendChild(actions);

    function newRound() {
      const pool = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 6], [5, 6], [3, 8], [5, 8]];
      L = pool[rnd(0, pool.length - 1)];
      if (rnd(1, 6) === 1) {
        R = [L[0] * 2, L[1] * 2];   /* sometimes an equivalent twin — a tie! */
      } else {
        do { R = pool[rnd(0, pool.length - 1)]; } while (L[0] / L[1] === R[0] / R[1]);
      }
      body.querySelector('#cf-l-label').textContent = `${L[0]}/${L[1]}`;
      body.querySelector('#cf-r-label').textContent = `${R[0]}/${R[1]}`;
      body.querySelector('#cf-l-bar').innerHTML = barHTML(L[0], L[1]);
      body.querySelector('#cf-r-bar').innerHTML = barHTML(R[0], R[1]);
    }

    body.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        YFTutor.attempt('compare-fractions');
        const lv = L[0] / L[1], rv = R[0] / R[1];
        const correct = lv > rv ? 'L' : lv < rv ? 'R' : '=';
        if (btn.dataset.pick === correct) {
          round += 1;
          YFUI.pop(body.querySelector('.frac-compare'));
          if (round === 1) {
            YF.addDiscovery('compare-with-bars',
              'More pieces means SMALLER pieces — compare the amount, not the digits', 'fraction-factory');
          }
          if (round >= ROUNDS) {
            W.setFeedback(fb, '🎉 Undefeated champion! Fractions can\'t trick your eyes anymore.', true);
            W.finish('compare-fractions', { perfect: misses === 0 });
          } else {
            W.setFeedback(fb, `✅ Right call! Round ${round + 1} of ${ROUNDS}…`, true);
            setTimeout(newRound, 1000);
          }
        } else {
          misses += 1;
          YFUI.shake(body.querySelector('.frac-compare'));
          W.setFeedback(fb, '🤔 The bars don\'t lie — look at how much is SHADED on each side.', false);
        }
      });
    });

    newRound();
  }

  /* ── Init ────────────────────────────────────── */

  YFWorld.init({
    worldId: 'fraction-factory',
    activities: [
      { id: 'pizza-cutter', emoji: '🍕', title: 'Pizza Cutter',
        desc: 'Shade exactly the fraction each customer orders — slice by slice.',
        render: renderPizzaCutter },
      { id: 'fair-share', emoji: '🍫', title: 'Fair Share',
        desc: 'Chocolate, cake, and pizza shared fairly. That\'s ALL a fraction is.',
        render: renderFairShare },
      { id: 'twin-fractions', emoji: '👯', title: 'Twin Fractions',
        desc: 'Different names, same amount. Find each fraction\'s secret twin.',
        render: renderTwinFractions },
      { id: 'compare-fractions', emoji: '🥊', title: 'Fraction Face-Off',
        desc: 'Which fraction is bigger? The bars know the truth.',
        render: renderCompareFractions },
      { id: 'teach-it', emoji: '💎', title: 'Teach It',
        desc: 'The Diamond gate: explain fractions in YOUR own words.',
        render: YFWorld.makeTeachIt({
          prompt: 'What does 3/4 really mean — and why is 1/8 SMALLER than 1/4 even though 8 is bigger than 4?',
          placeholder: 'Dear friend, imagine cutting a pizza...',
          keywords: [
            ['whole', 'parts', 'pieces', 'slices', 'cut'],
            ['equal', 'same size', 'fair', 'fairly'],
            ['top', 'bottom', 'numerator', 'denominator', 'smaller', 'more pieces'],
          ],
          keywordHint: '"equal parts", "the whole", or "more pieces means smaller pieces"',
          discoveryId: 'teach-fractions',
          discoveryLabel: 'If you can teach fractions, you own them',
        }) },
    ],
  });

})();
