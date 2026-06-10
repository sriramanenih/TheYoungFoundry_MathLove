/* ════════════════════════════════════════════════
   AREA & PERIMETER PARK — 5 DISCOVERY ACTIVITIES
   1. 🟩 Tile Counter   — area by counting
   2. ⚡ Speed Counter  — discover the rows × columns shortcut
   3. 🚧 Fence Builder  — perimeter goes AROUND
   4. 🌷 Garden Design  — same area, different fences
   5. 💎 Teach It       — mastery teach-back
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  const W = YFWorld;
  const rnd = W.rnd;

  function gridHTML(rows, cols, extraClass) {
    let cells = '';
    for (let i = 0; i < rows * cols; i++) cells += '<div class="cell"></div>';
    return `<div class="grid-board garden ${extraClass || ''}" style="grid-template-columns:repeat(${cols},auto)">${cells}</div>`;
  }

  /* ═════════════════════════════════════════════
     1. 🟩 TILE COUNTER — area by counting
     ═════════════════════════════════════════════ */

  function renderTileCounter(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let rows, cols;

    body.innerHTML = `
      <p class="stage-prompt">
        The park keeper is paving a picnic spot 🟩. Count the tiles — that
        number is called the <strong>area</strong> (how much ground is
        covered). Count any way you like… but keep an eye on those rows 👀.
      </p>
      <div id="tc-grid"></div>
      <div class="answer-row">
        <input type="number" class="num-input" id="tc-input" placeholder="tiles?" />
        <button class="btn" id="tc-check">🧮 Count!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('tile-counter'));
    body.appendChild(actions);

    const input = body.querySelector('#tc-input');

    function newRound() {
      rows = rnd(2, 4);
      cols = rnd(3, 6);
      body.querySelector('#tc-grid').innerHTML = gridHTML(rows, cols);
      input.value = '';
    }

    body.querySelector('#tc-check').addEventListener('click', () => {
      YFTutor.attempt('tile-counter');
      if (Number(input.value) === rows * cols) {
        round += 1;
        YFUI.pop(body.querySelector('#tc-grid'));
        if (round >= ROUNDS) {
          W.setFeedback(fb, '🎉 Three patios paved! Did you notice anything about the rows…? Hold that thought.', true);
          W.finish('tile-counter', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ ${rows * cols} tiles exactly! Patio ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, `🤔 Recount! ${YFTutor.encourage()}`, false);
      }
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') body.querySelector('#tc-check').click(); });

    newRound();
  }

  /* ═════════════════════════════════════════════
     2. ⚡ SPEED COUNTER — the rows × columns aha
     ═════════════════════════════════════════════ */

  function renderFastCounter(body) {
    const ROUNDS = 2;
    let round = 0, misses = 0;
    let rows, cols;

    body.innerHTML = `
      <p class="stage-prompt">
        ⚡ This plaza is HUGE — counting one-by-one would take all day. You
        know each row has the same number of tiles… is there a shortcut
        hiding here? (Spoiler: you're about to discover a famous formula —
        before anyone shows it to you.)
      </p>
      <div id="fc-grid"></div>
      <div class="big-display" style="font-size:1.1rem;color:var(--text-soft)" id="fc-dims"></div>
      <div class="answer-row">
        <input type="number" class="num-input" id="fc-input" placeholder="tiles?" />
        <button class="btn" id="fc-check">⚡ Fast Count!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('fast-counter'));
    body.appendChild(actions);

    const input = body.querySelector('#fc-input');

    function newRound() {
      rows = rnd(5, 7);
      cols = rnd(7, 9);
      body.querySelector('#fc-grid').innerHTML = gridHTML(rows, cols, 'compact');
      body.querySelector('#fc-dims').textContent = `${rows} rows · ${cols} tiles in each row`;
      input.value = '';
    }

    body.querySelector('#fc-check').addEventListener('click', () => {
      YFTutor.attempt('fast-counter');
      if (Number(input.value) === rows * cols) {
        round += 1;
        YFUI.pop(body.querySelector('#fc-grid'));
        if (round === 1) {
          YF.addDiscovery('area-is-rows-times-columns',
            'Area = rows × columns — YOU discovered the formula', 'area-perimeter');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, `🎉 ${rows} × ${cols} = ${rows * cols} in two seconds flat. THAT shortcut is what grown-ups call "Area = length × width"!`, true);
          W.finish('fast-counter', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ Lightning fast! One more plaza (${round + 1} of ${ROUNDS})…`, true);
          newRound();
        }
      } else {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, `🤔 Not quite. One row has ${cols} tiles, and there are ${rows} rows… what could you do with those two numbers?`, false);
      }
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') body.querySelector('#fc-check').click(); });

    newRound();
  }

  /* ═════════════════════════════════════════════
     3. 🚧 FENCE BUILDER — perimeter goes AROUND
     ═════════════════════════════════════════════ */

  function renderFenceBuilder(body) {
    const ROUNDS = 3;
    let round = 0, misses = 0;
    let rows, cols;

    body.innerHTML = `
      <p class="stage-prompt">
        Rabbits are raiding the garden 🐰! Build a fence — but fences cost
        money, so you must order EXACTLY enough. The fence goes
        <strong>around the edge</strong>: each tile side it touches needs 1
        meter. How many meters?
      </p>
      <div id="fn-grid"></div>
      <div class="big-display" style="font-size:1.1rem;color:var(--text-soft)" id="fn-dims"></div>
      <div class="answer-row">
        <input type="number" class="num-input" id="fn-input" placeholder="meters?" />
        <button class="btn" id="fn-check">🚧 Order Fence!</button>
      </div>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    const actions = document.createElement('div');
    actions.className = 'stage-actions';
    actions.appendChild(W.hintButton('fence-builder'));
    body.appendChild(actions);

    const input = body.querySelector('#fn-input');

    function newRound() {
      rows = rnd(2, 5);
      cols = rnd(3, 7);
      body.querySelector('#fn-grid').innerHTML = gridHTML(rows, cols);
      body.querySelector('#fn-dims').textContent = `Garden: ${cols} m wide · ${rows} m tall`;
      input.value = '';
    }

    body.querySelector('#fn-check').addEventListener('click', () => {
      YFTutor.attempt('fence-builder');
      const perimeter = 2 * (rows + cols);
      const guess = Number(input.value);
      if (guess === perimeter) {
        round += 1;
        YFUI.pop(body.querySelector('#fn-grid'));
        if (round === 1) {
          YF.addDiscovery('perimeter-goes-around',
            'Perimeter is the walk AROUND the edge', 'area-perimeter');
        }
        if (round >= ROUNDS) {
          W.setFeedback(fb, '🎉 Three gardens safe, zero meters wasted! Around the edge — that\'s perimeter.', true);
          W.finish('fence-builder', { perfect: misses === 0 });
        } else {
          W.setFeedback(fb, `✅ ${perimeter} m — a perfect fit! Garden ${round + 1} of ${ROUNDS}…`, true);
          newRound();
        }
      } else if (guess === rows * cols) {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, '🤔 That counts the tiles INSIDE — but the fence goes around the EDGE. Trace it with your finger!', false);
      } else {
        misses += 1;
        YFUI.shake(input);
        W.setFeedback(fb, `🤔 The rabbits found a gap! Walk the edge: top, side, bottom, side. ${YFTutor.encourage()}`, false);
      }
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') body.querySelector('#fn-check').click(); });

    newRound();
  }

  /* ═════════════════════════════════════════════
     4. 🌷 GARDEN DESIGN — same area, different fences
     ═════════════════════════════════════════════ */

  function renderGardenDesign(body) {
    const TARGETS = [24, 36, 30];
    const target = TARGETS[rnd(0, TARGETS.length - 1)];
    const found = [];
    let misses = 0;

    body.innerHTML = `
      <p class="stage-prompt">
        Design a flower garden 🌷 with an area of EXACTLY
        <strong>${target}</strong> square meters. Then design a
        <strong>different</strong> one with the same area — and watch what
        happens to the fence…
      </p>
      <div class="slider-row"><span class="slider-val">Wide: <span id="gd-w">4</span></span>
        <input type="range" id="gd-width" min="1" max="12" value="4" /></div>
      <div class="slider-row"><span class="slider-val">Tall: <span id="gd-h">3</span></span>
        <input type="range" id="gd-height" min="1" max="12" value="3" /></div>
      <div id="gd-grid"></div>
      <div class="big-display" style="font-size:1.1rem" id="gd-stats"></div>
      <div class="stage-actions">
        <button class="btn" id="gd-check">🌷 Plant Garden!</button>
      </div>
      <ul class="design-list" id="gd-found"></ul>
    `;
    const fb = W.feedbackEl();
    body.appendChild(fb);
    body.querySelector('.stage-actions').appendChild(W.hintButton('garden-design'));

    const wEl = body.querySelector('#gd-width');
    const hEl = body.querySelector('#gd-height');

    function draw() {
      const w = Number(wEl.value), h = Number(hEl.value);
      body.querySelector('#gd-w').textContent = w;
      body.querySelector('#gd-h').textContent = h;
      body.querySelector('#gd-grid').innerHTML = gridHTML(h, w, 'compact');
      body.querySelector('#gd-stats').textContent = `Area: ${w * h} m² · Fence: ${2 * (w + h)} m`;
    }
    wEl.addEventListener('input', draw);
    hEl.addEventListener('input', draw);

    body.querySelector('#gd-check').addEventListener('click', () => {
      const w = Number(wEl.value), h = Number(hEl.value);
      YFTutor.attempt('garden-design');
      if (w * h !== target) {
        misses += 1;
        YFUI.shake(body.querySelector('#gd-grid'));
        const dir = w * h > target ? 'too big' : 'too small';
        W.setFeedback(fb, `🤔 ${w} × ${h} = ${w * h} m² — ${dir}. Which pairs multiply to exactly ${target}?`, false);
        return;
      }
      const key = [Math.min(w, h), Math.max(w, h)].join('×');
      if (found.some(f => f.key === key)) {
        W.setFeedback(fb, '🤔 Same garden, just rotated! Find a shape with DIFFERENT sides.', false);
        return;
      }
      const fence = 2 * (w + h);
      found.push({ key, fence });
      const li = document.createElement('li');
      li.textContent = `🌷 ${w} × ${h} = ${target} m² — fence ${fence} m`;
      body.querySelector('#gd-found').appendChild(li);
      YFUI.pop(body.querySelector('#gd-grid'));

      if (found.length === 1) {
        W.setFeedback(fb, `✅ Lovely! Now design a DIFFERENT garden with area ${target} — and watch the fence number…`, true);
      } else {
        const [a, b] = found;
        const twist = a.fence === b.fence
          ? 'and the fences happen to match — rare!'
          : `but the fences are DIFFERENT (${a.fence} m vs ${b.fence} m)!`;
        YF.addDiscovery('same-area-different-perimeter',
          'Same area can need a different amount of fence', 'area-perimeter');
        W.setFeedback(fb, `🎉 Two gardens, same area, ${twist} Area and perimeter are different ideas.`, true);
        W.finish('garden-design', { perfect: misses === 0 });
      }
    });

    draw();
  }

  /* ── Init ────────────────────────────────────── */

  YFWorld.init({
    worldId: 'area-perimeter',
    activities: [
      { id: 'tile-counter', emoji: '🟩', title: 'Tile Counter',
        desc: 'Pave the picnic spot and count the tiles. That number has a name: area.',
        render: renderTileCounter },
      { id: 'fast-counter', emoji: '⚡', title: 'Speed Counter',
        desc: 'The plaza is too big to count one-by-one. Discover the famous shortcut yourself.',
        render: renderFastCounter },
      { id: 'fence-builder', emoji: '🚧', title: 'Fence Builder',
        desc: 'Order EXACTLY enough fence to go around the garden. Not a meter more.',
        render: renderFenceBuilder },
      { id: 'garden-design', emoji: '🌷', title: 'Garden Design',
        desc: 'Two gardens, same area — but do they need the same fence? Find out.',
        render: renderGardenDesign },
      { id: 'teach-it', emoji: '💎', title: 'Teach It',
        desc: 'The Diamond gate: explain area and perimeter in YOUR own words.',
        render: YFWorld.makeTeachIt({
          prompt: 'What is the difference between AREA and PERIMETER — and why is multiplying rows × columns a shortcut for counting tiles?',
          placeholder: 'Dear friend, imagine a garden made of tiles...',
          keywords: [
            ['inside', 'cover', 'covers', 'tiles', 'space', 'ground'],
            ['around', 'fence', 'edge', 'border', 'outside'],
            ['rows', 'columns', 'multiply', 'times', 'add', 'shortcut'],
          ],
          keywordHint: '"covering the inside", "around the edge", or "rows × columns"',
          discoveryId: 'teach-area-perimeter',
          discoveryLabel: 'If you can teach area & perimeter, you own them',
        }) },
    ],
  });

})();
