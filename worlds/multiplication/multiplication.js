/* ════════════════════════════════════════════════
   MULTIPLICATION VILLAGE — 5 DISCOVERY ACTIVITIES
   1. 🎭 Theater Seats   — the seating mystery
   2. 🔵 Array Builder   — same total, different arrays
   3. 🦘 Skip Counter    — skip counting IS multiplying
   4. 🕵️ Group Detective — equal groups in stories
   5. 💎 Teach It        — mastery teach-back
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  const W = YFWorld;
  const rnd = W.rnd;

  function gridHTML(rows, cols, symbol, extraClass) {
    let cells = '';
    for (let i = 0; i < rows * cols; i++) cells += `<div class="cell">${symbol}</div>`;
    return `<div class="grid-board ${extraClass || ''}" style="grid-template-columns:repeat(${cols},auto)">${cells}</div>`;
  }

  /* ═════════════════════════════════════════════
     1. 🎭 THEATER SEATS — the seating mystery
     ═════════════════════════════════════════════ */

  function renderTheaterSeats(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let rows, cols;

    body.innerHTML = `
      <p class="stage-prompt">
        The village theater 🎭 needs a ticket count — FAST, the show starts in
        one minute! How many seats are there? (Counting one-by-one works… but
        the show might start without you. Is there a quicker way?)
      </p>
      <div id="ts-grid"></div>
      <div class="answer-row">
        <input type="number" class="num-input" id="ts-input" placeholder="seats?" />
        <button class="btn" id="ts-check">🎟️ Count!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('theater-seats'));
    body.appendChild(actions);

    const input = body.querySelector('#ts-input');

    function newRound() {
      rows = rnd(3, 5);
      cols = rnd(4, 8);
      body.querySelector('#ts-grid').innerHTML = gridHTML(rows, cols, '🪑');
      input.value = '';
    }

    body.querySelector('#ts-check').addEventListener('click', () => {
      YFTutor.attempt('theater-seats');
      if (Number(input.value) === rows * cols) {
        round += 1;
        YFUI.pop(body.querySelector('#ts-grid'));
        if (round === 1) {
          YF.addDiscovery('rows-times-seats',
            'Equal rows can be counted in ONE multiplication', 'multiplication');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, `🎉 ${rows} rows of ${cols} seats = ${rows * cols}. You counted a whole theater in seconds!`, true);
          W.finish('theater-seats', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ ${rows * cols} seats — show saved! Theater ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, `🤔 The audience disagrees! How many seats in ONE row? How many rows? ${YFTutor.encourage()}`, false);
      }
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') body.querySelector('#ts-check').click(); });

    newRound();
  }

  /* ═════════════════════════════════════════════
     2. 🔵 ARRAY BUILDER — same total, many shapes
     ═════════════════════════════════════════════ */

  function renderArrayBuilder(body) {
    const TARGETS = [12, 18, 24, 16, 20];
    const target = TARGETS[rnd(0, TARGETS.length - 1)];
    const found = [];
    let misses = 0;

    body.innerHTML = `
      <p class="stage-prompt">
        The village square needs <strong>${target}</strong> flower pots 🔵 in a
        perfect rectangle. Slide rows and columns to make EXACTLY ${target} —
        then find a <strong>second, different</strong> rectangle that also
        works!
      </p>
      <div class="slider-row"><span class="slider-val">Rows: <span id="ab-r">3</span></span>
        <input type="range" id="ab-rows" min="1" max="10" value="3" /></div>
      <div class="slider-row"><span class="slider-val">Cols: <span id="ab-c">3</span></span>
        <input type="range" id="ab-cols" min="1" max="10" value="3" /></div>
      <div id="ab-grid"></div>
      <div class="big-display" style="font-size:1.2rem"><span id="ab-count"></span></div>
      <div class="stage-actions">
        <button class="btn" id="ab-check">🌼 Plant It!</button>
      </div>
      <ul class="step-history" id="ab-found" style="list-style:none;text-align:center;font-weight:800;color:var(--world-dark)"></ul>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions').appendChild(W.hintButton('array-builder'));

    const rowsEl = body.querySelector('#ab-rows');
    const colsEl = body.querySelector('#ab-cols');

    function draw() {
      const r = Number(rowsEl.value), c = Number(colsEl.value);
      body.querySelector('#ab-r').textContent = r;
      body.querySelector('#ab-c').textContent = c;
      body.querySelector('#ab-grid').innerHTML = gridHTML(r, c, '🔵', 'compact');
      body.querySelector('#ab-count').textContent = `${r} × ${c} = ${r * c} pots`;
    }
    rowsEl.addEventListener('input', draw);
    colsEl.addEventListener('input', draw);

    body.querySelector('#ab-check').addEventListener('click', () => {
      const r = Number(rowsEl.value), c = Number(colsEl.value);
      YFTutor.attempt('array-builder');
      if (r * c !== target) {
        misses += 1;
        YFUI.shake(body.querySelector('#ab-grid'));
        const dir = r * c > target ? 'Too many pots!' : 'Not enough pots!';
        W.setFeedback(fb, `${dir} ${r} × ${c} = ${r * c}, not ${target}. ${YFTutor.encourage()}`, false);
        return;
      }
      const key = [Math.min(r, c), Math.max(r, c)].join('×');
      if (found.includes(key)) {
        W.setFeedback(fb, `🤔 You already planted ${key}! Swapping rows and columns is the SAME rectangle — find a truly different one.`, false);
        return;
      }
      found.push(key);
      const li = document.createElement('li');
      li.textContent = `🌼 ${r} × ${c} = ${target}`;
      body.querySelector('#ab-found').appendChild(li);
      YFUI.pop(body.querySelector('#ab-grid'));

      if (found.length === 1) {
        YF.addDiscovery('many-arrays-one-number',
          'One number can hide many rectangles', 'multiplication');
        W.setFeedback(fb, `✅ Beautiful! Now find a DIFFERENT rectangle that also makes ${target}…`, true);
      } else {
        W.setFeedback(fb, `🎉 Two different rectangles, same ${target} pots! Numbers have many faces.`, true);
        W.finish('array-builder', { perfect: misses === 0 });
      }
    });

    draw();
  }

  /* ═════════════════════════════════════════════
     3. 🦘 SKIP COUNTER
     ═════════════════════════════════════════════ */

  function renderSkipCounter(body) {
    const ROUNDS = 2;
    let round = 0, misses = 0;
    let n, blanks;          /* blanks: positions (1-based step index) hidden */

    body.innerHTML = `
      <p class="stage-prompt">
        The kangaroo 🦘 jumps the same distance every time — but some
        footprints washed away! Fill in the missing landing spots.
      </p>
      <div class="skip-seq" id="sc-seq"></div>
      <div class="stage-actions">
        <button class="btn" id="sc-check">🦘 Check Jumps</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions').appendChild(W.hintButton('skip-counter'));

    function newRound() {
      n = rnd(3, 9);
      blanks = [3, 5];
      const seq = body.querySelector('#sc-seq');
      seq.innerHTML = '';
      for (let i = 1; i <= 6; i++) {
        if (blanks.includes(i)) {
          const inp = document.createElement('input');
          inp.type = 'number';
          inp.dataset.answer = n * i;
          seq.appendChild(inp);
        } else {
          const span = document.createElement('span');
          span.className = 'num';
          span.textContent = n * i;
          seq.appendChild(span);
        }
        if (i < 6) {
          const arrow = document.createElement('span');
          arrow.textContent = '→';
          arrow.style.color = 'var(--text-soft)';
          seq.appendChild(arrow);
        }
      }
    }

    body.querySelector('#sc-check').addEventListener('click', () => {
      YFTutor.attempt('skip-counter');
      const inputs = [...body.querySelectorAll('#sc-seq input')];
      const allRight = inputs.every(inp => Number(inp.value) === Number(inp.dataset.answer));
      if (allRight) {
        round += 1;
        YFUI.pop(body.querySelector('#sc-seq'));
        if (round === 1) {
          YF.addDiscovery('skip-counting-is-multiplying',
            'Skip counting IS multiplying — the 4th jump of 3 is 4 × 3', 'multiplication');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, `🎉 Every footprint found! Jumping by ${n}s and multiplying by ${n} are the same trick.`, true);
          W.finish('skip-counter', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ Perfect trail! A new kangaroo approaches (${round + 1} of ${ROUNDS})…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(body.querySelector('#sc-seq'));
        W.setFeedback(fb, `🤔 Some footprints are off. How big is each jump? ${YFTutor.encourage()}`, false);
      }
    });

    newRound();
  }

  /* ═════════════════════════════════════════════
     4. 🕵️ GROUP DETECTIVE — equal groups in stories
     ═════════════════════════════════════════════ */

  function renderGroupDetective(body) {
    const CASES = [
      { story: 'The baker packs 6 boxes. Each box holds 4 muffins. How many muffins?', answer: '6 × 4 = 24', wrong: ['6 + 4 = 10', '6 − 4 = 2'] },
      { story: '5 friends each bring 3 marbles to the game. How many marbles in all?', answer: '5 × 3 = 15', wrong: ['5 + 3 = 8', '3 × 3 = 9'] },
      { story: 'The farmer plants 7 rows of corn with 5 plants in every row. How many plants?', answer: '7 × 5 = 35', wrong: ['7 + 5 = 12', '7 × 7 = 49'] },
    ];
    let idx = 0, misses = 0;

    body.innerHTML = `
      <p class="stage-prompt">
        Multiplication hides inside stories 🕵️. Find the GROUPS and what's
        inside each one — then pick the number sentence that solves the case.
      </p>
      <div class="big-display" id="gd-story" style="font-size:1.1rem;font-family:var(--font-body);font-weight:700"></div>
      <div class="choice-grid" id="gd-choices"></div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('group-detective'));
    body.appendChild(actions);

    function newCase() {
      const c = CASES[idx];
      body.querySelector('#gd-story').textContent = '📜 ' + c.story;
      const choices = W.shuffle([c.answer, ...c.wrong]);
      const grid = body.querySelector('#gd-choices');
      grid.innerHTML = '';
      choices.forEach(label => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => {
          YFTutor.attempt('group-detective');
          if (label === c.answer) {
            idx += 1;
            YFUI.pop(grid);
            if (idx === 1) {
              YF.addDiscovery('groups-in-stories',
                'Stories hide equal groups — find them and multiply', 'multiplication');
            }
            if (idx >= CASES.length) {
              W.setFeedback(fb, '🎉 Case closed, detective! You can spot equal groups anywhere now.', true);
              W.finish('group-detective', { perfect: misses === 0 });
            } else {
              W.setFeedback(fb, `✅ Correct! ${c.answer}. Next case (${idx + 1} of ${CASES.length})…`, true);
              setTimeout(newCase, 1100);
            }
          } else {
            misses += 1;
            YFUI.shake(grid);
            W.setFeedback(fb, `🤔 The clues don't add up. What is the GROUP here, and how many are inside it?`, false);
          }
        });
        grid.appendChild(btn);
      });
    }

    newCase();
  }

  /* ── Init ────────────────────────────────────── */

  YFWorld.init({
    worldId: 'multiplication',
    activities: [
      { id: 'theater-seats', emoji: '🎭', title: 'Theater Seats',
        desc: 'Count a whole theater before the show starts. There HAS to be a faster way…',
        render: renderTheaterSeats },
      { id: 'array-builder', emoji: '🔵', title: 'Array Builder',
        desc: 'One number, many rectangles. Build two different arrays for the same total.',
        render: renderArrayBuilder },
      { id: 'skip-counter', emoji: '🦘', title: 'Skip Counter',
        desc: 'Follow the kangaroo\'s equal jumps and fill the missing footprints.',
        render: renderSkipCounter },
      { id: 'group-detective', emoji: '🕵️', title: 'Group Detective',
        desc: 'Find the equal groups hiding inside everyday stories.',
        render: renderGroupDetective },
      { id: 'teach-it', emoji: '💎', title: 'Teach It',
        desc: 'The Diamond gate: explain multiplication in YOUR own words.',
        render: YFWorld.makeTeachIt({
          prompt: 'What does 4 × 6 really MEAN — and why is it faster than counting one by one?',
          placeholder: 'Dear friend, multiplication is like...',
          keywords: [
            ['group', 'groups', 'row', 'rows', 'equal'],
            ['times', 'multiply', 'multiplication', 'repeated'],
            ['add', 'adding', 'count', 'faster', 'skip', 'shortcut'],
          ],
          keywordHint: '"equal groups", "repeated adding", or "faster than counting"',
          discoveryId: 'teach-multiplication',
          discoveryLabel: 'If you can teach multiplication, you own it',
        }) },
    ],
  });

})();
