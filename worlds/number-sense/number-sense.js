/* ════════════════════════════════════════════════
   NUMBER SENSE KINGDOM — 5 DISCOVERY ACTIVITIES
   1. 🧱 Tower Builder   — place value
   2. 🐸 Number Line Leap — numbers live in order
   3. ⚔️ Compare Duel    — greater / less / equal
   4. 🕵️ Secret Number   — place-value riddles
   5. 💎 Teach It        — mastery teach-back
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  const W = YFWorld;
  const rnd = W.rnd;

  /* ═════════════════════════════════════════════
     1. 🧱 TOWER BUILDER — place value
     ═════════════════════════════════════════════ */

  function renderTowerBuilder(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let target, h, t, o;

    body.innerHTML = `
      <p class="stage-prompt">
        Build the King's number out of blocks 🧱. Red blocks are worth
        <strong>100</strong>, orange are worth <strong>10</strong>, yellow are
        worth <strong>1</strong>. Same blocks, different towers — discover why
        the PLACE matters!
      </p>
      <div class="big-display">Build: <strong id="tb-target"></strong></div>
      <div class="tower-display">
        <div class="tower-col hundreds"><div class="blocks" id="tb-h"></div><div class="col-label">Hundreds</div></div>
        <div class="tower-col tens"><div class="blocks" id="tb-t"></div><div class="col-label">Tens</div></div>
        <div class="tower-col ones"><div class="blocks" id="tb-o"></div><div class="col-label">Ones</div></div>
      </div>
      <div class="big-display" style="font-size:1.3rem">Your number: <span id="tb-built" style="color:var(--world-primary)">0</span></div>
      <div class="stage-actions">
        <button class="btn btn-sm" id="tb-add-h">+ 🟥 100</button>
        <button class="btn btn-sm" id="tb-add-t">+ 🟧 10</button>
        <button class="btn btn-sm" id="tb-add-o">+ 🟨 1</button>
        <button class="btn btn-secondary btn-sm" id="tb-clear">↺ Clear</button>
      </div>
      <div class="stage-actions">
        <button class="btn" id="tb-check">✔️ Check Tower</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions:last-of-type').appendChild(W.hintButton('tower-builder'));

    const builtEl = body.querySelector('#tb-built');

    function draw() {
      const cols = { h: [body.querySelector('#tb-h'), h], t: [body.querySelector('#tb-t'), t], o: [body.querySelector('#tb-o'), o] };
      for (const k in cols) {
        const [el, n] = cols[k];
        el.innerHTML = '';
        for (let i = 0; i < n; i++) {
          const b = document.createElement('div');
          b.className = 'block';
          el.appendChild(b);
        }
      }
      builtEl.textContent = h * 100 + t * 10 + o;
    }

    function newRound() {
      target = rnd(1, 9) * 100 + rnd(0, 9) * 10 + rnd(1, 9);
      h = 0; t = 0; o = 0;
      body.querySelector('#tb-target').textContent = target;
      draw();
    }

    body.querySelector('#tb-add-h').addEventListener('click', () => { if (h < 9) h++; draw(); });
    body.querySelector('#tb-add-t').addEventListener('click', () => { if (t < 9) t++; draw(); });
    body.querySelector('#tb-add-o').addEventListener('click', () => { if (o < 9) o++; draw(); });
    body.querySelector('#tb-clear').addEventListener('click', () => { h = 0; t = 0; o = 0; draw(); });

    body.querySelector('#tb-check').addEventListener('click', () => {
      const built = h * 100 + t * 10 + o;
      YFTutor.attempt('tower-builder');
      if (built === target) {
        round += 1;
        YFUI.pop(builtEl.parentElement);
        if (round === 1) {
          YF.addDiscovery('place-makes-value', "A digit's PLACE decides what it's worth", 'number-sense');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, `🎉 Three royal towers built! ${target} needed exactly those blocks — place is power.`, true);
          W.finish('tower-builder', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ Tower complete! Next number (${round + 1} of ${ROUNDS})…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(builtEl.parentElement);
        const diff = built > target ? 'Your tower is too TALL.' : 'Your tower is too SHORT.';
        W.setFeedback(fb, `${diff} ${YFTutor.encourage()}`, false);
      }
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     2. 🐸 NUMBER LINE LEAP
     ═════════════════════════════════════════════ */

  function renderNumberLine(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let target;

    body.innerHTML = `
      <p class="stage-prompt">
        Every number has a home on the line 🐸. Slide the frog to where the
        secret number lives — no number shown, just your sense of WHERE it
        belongs. (Within 3 counts as a perfect leap!)
      </p>
      <div class="big-display">Leap to: <strong id="nl-target" style="color:var(--world-primary)"></strong></div>
      <div class="number-line" id="nl-line">
        <div class="line-track"></div>
      </div>
      <div class="slider-row">
        <input type="range" id="nl-slider" min="0" max="100" value="50" />
        <span class="slider-val">🐸</span>
      </div>
      <div class="stage-actions">
        <button class="btn" id="nl-check">🐸 Leap!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions').appendChild(W.hintButton('number-line'));

    /* Draw landmark ticks 0, 25, 50, 75, 100 */
    const line = body.querySelector('#nl-line');
    [0, 25, 50, 75, 100].forEach(v => {
      const tick = document.createElement('div');
      tick.className = 'tick';
      tick.style.left = v + '%';
      const label = document.createElement('div');
      label.className = 'tick-label';
      label.style.left = v + '%';
      label.textContent = v;
      line.appendChild(tick);
      line.appendChild(label);
    });

    const slider = body.querySelector('#nl-slider');

    function newRound() {
      target = rnd(3, 97);
      body.querySelector('#nl-target').textContent = target;
      slider.value = 50;
    }

    body.querySelector('#nl-check').addEventListener('click', () => {
      const guess = Number(slider.value);
      YFTutor.attempt('number-line');
      if (Math.abs(guess - target) <= 3) {
        round += 1;
        if (round === 1) {
          YF.addDiscovery('numbers-have-order', 'Numbers live in order on a line', 'number-sense');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, '🎉 Three perfect leaps! You can FEEL where numbers live now.', true);
          W.finish('number-line', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ Splash-down at ${guess} — close enough to ${target}! Leap ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        const dir = guess > target ? 'You leaped too FAR.' : 'You leaped too SHORT.';
        W.setFeedback(fb, `${dir} You landed at ${guess}. ${YFTutor.encourage()}`, false);
      }
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     3. ⚔️ COMPARE DUEL
     ═════════════════════════════════════════════ */

  function renderCompareOrder(body) {
    const ROUNDS = 4;
    let round = 0, misses = 0;
    let a, b;

    body.innerHTML = `
      <p class="stage-prompt">
        Two numbers enter the arena ⚔️. Which is mightier? Pick the symbol that
        sits between them. (Careful: the hungry crocodile <strong>&lt;</strong>
        always eats the BIGGER number!)
      </p>
      <div class="big-display"><span id="co-a"></span> <span style="color:var(--world-primary)" id="co-sym">?</span> <span id="co-b"></span></div>
      <div class="choice-grid row" id="co-choices">
        <button class="choice-btn" data-sym="<">&lt;</button>
        <button class="choice-btn" data-sym="=">=</button>
        <button class="choice-btn" data-sym=">">&gt;</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('compare-order'));
    body.appendChild(actions);

    function newRound() {
      if (rnd(1, 6) === 1) { a = rnd(10, 999); b = a; }       /* sometimes equal */
      else {
        a = rnd(10, 999); b = rnd(10, 999);
        if (a === b) b += 1;
      }
      body.querySelector('#co-a').textContent = a;
      body.querySelector('#co-b').textContent = b;
      body.querySelector('#co-sym').textContent = '?';
    }

    body.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        YFTutor.attempt('compare-order');
        const correct = a < b ? '<' : a > b ? '>' : '=';
        if (btn.dataset.sym === correct) {
          round += 1;
          body.querySelector('#co-sym').textContent = correct;
          YFUI.pop(body.querySelector('.big-display'));
          if (round === 1) {
            YF.addDiscovery('compare-by-place', 'Compare numbers place by place, left to right', 'number-sense');
          }
          if (round >= ROUNDS) {
            W.setFeedback(fb, '🎉 Champion of the arena! No number can fool you now.', true);
            W.finish('compare-order', { perfect: misses === 0 });
          } else {
            W.setFeedback(fb, `✅ ${a} ${correct} ${b} — exactly! Duel ${round + 1} of ${ROUNDS}…`, true);
            setTimeout(newRound, 900);
          }
        } else {
          misses += 1;
          YFUI.shake(body.querySelector('.big-display'));
          W.setFeedback(fb, YFTutor.encourage(), false);
        }
      });
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     4. 🕵️ SECRET NUMBER — place-value riddles
     ═════════════════════════════════════════════ */

  function renderSecretNumber(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let target;

    body.innerHTML = `
      <p class="stage-prompt">
        A number is hiding in the castle 🏰 and the only clues are scrambled!
        Read ALL the clues, then type the secret number.
      </p>
      <div class="big-display" id="sn-clues" style="font-size:1.15rem;flex-direction:column;gap:6px"></div>
      <div class="answer-row">
        <input type="number" class="num-input" id="sn-input" placeholder="???" />
        <button class="btn" id="sn-check">🔓 Unlock</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('secret-number'));
    body.appendChild(actions);

    const input = body.querySelector('#sn-input');

    function newRound() {
      const h = rnd(1, 9), t = rnd(0, 9), o = rnd(0, 9);
      target = h * 100 + t * 10 + o;
      const clues = W.shuffle([
        `🧩 I have ${t} ten${t === 1 ? '' : 's'}`,
        `🧩 I have ${h} hundred${h === 1 ? '' : 's'}`,
        `🧩 I have ${o} one${o === 1 ? '' : 's'}`,
      ]);
      body.querySelector('#sn-clues').innerHTML = clues.map(c => `<span>${c}</span>`).join('');
      input.value = '';
    }

    body.querySelector('#sn-check').addEventListener('click', () => {
      YFTutor.attempt('secret-number');
      if (Number(input.value) === target) {
        round += 1;
        YFUI.pop(input);
        if (round >= ROUNDS) {
          W.setFeedback(fb, '🎉 Master detective! Scrambled clues can\'t hide a number from you.', true);
          W.finish('secret-number', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ The secret number was ${target}! Riddle ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, `🤔 Not ${input.value || 'that'}. Which clue names the HUNDREDS? Start there!`, false);
      }
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') body.querySelector('#sn-check').click(); });

    newRound();
  }

  /* ── Init ────────────────────────────────────── */

  YFWorld.init({
    worldId: 'number-sense',
    activities: [
      { id: 'tower-builder', emoji: '🧱', title: 'Tower Builder',
        desc: 'Build numbers from hundred, ten, and one blocks — and discover why place matters.',
        render: renderTowerBuilder },
      { id: 'number-line', emoji: '🐸', title: 'Number Line Leap',
        desc: 'Every number has a home. Leap the frog to where it lives!',
        render: renderNumberLine },
      { id: 'compare-order', emoji: '⚔️', title: 'Compare Duel',
        desc: 'Two numbers enter. Which is mightier — or are they twins?',
        render: renderCompareOrder },
      { id: 'secret-number', emoji: '🕵️', title: 'Secret Number',
        desc: 'Scrambled place-value clues hide a number. Unscramble and unlock it.',
        render: renderSecretNumber },
      { id: 'teach-it', emoji: '💎', title: 'Teach It',
        desc: 'The Diamond gate: explain place value in YOUR own words.',
        render: YFWorld.makeTeachIt({
          prompt: 'Why is 23 a totally different number from 32, even though they use the same digits?',
          placeholder: 'Dear friend, the digits are the same but...',
          keywords: [
            ['place', 'position', 'spot', 'order', 'where'],
            ['tens', 'ten', 'hundreds', 'ones', 'digit'],
            ['value', 'worth', 'means', 'bigger', 'different'],
          ],
          keywordHint: '"place", "tens and ones", or "worth"',
          discoveryId: 'teach-place-value',
          discoveryLabel: 'If you can teach place value, you own it',
        }) },
    ],
  });

})();
