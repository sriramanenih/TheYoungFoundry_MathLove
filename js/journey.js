/* ════════════════════════════════════════════════
   JOURNEY MAP — one-window curriculum chart
   Renders 4 band rows (Senior → Foundation, so the
   climb reads bottom-to-top), concept chips, the
   growing avatar, and the concept detail modal.
   ════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Avatar stages ────────────────────────────── */
  const AVATAR_STAGES = [
    { min: 0,  emoji: '🌱', title: 'Seeds of Curiosity' },
    { min: 1,  emoji: '🧒', title: 'Number Explorer' },
    { min: 5,  emoji: '🧑‍🔬', title: 'Pattern Seeker' },
    { min: 12, emoji: '🧑‍💻', title: 'Algebra Apprentice' },
    { min: 25, emoji: '👨‍🏫', title: 'Math Mentor' },
    { min: 45, emoji: '🎓', title: 'Young Mathematician' },
  ];

  /* ── Bands (render order = top of screen first) ── */
  const BANDS = [
    { id: 'senior',     cls: 'band-senior',     emoji: '🎓', name: 'Senior School',  grades: 'Grade 9–10', accent: '#5B4FCF' },
    { id: 'myp',        cls: 'band-myp',        emoji: '🔭', name: 'MYP',            grades: 'Grade 6–8',  accent: '#1E88E5' },
    { id: 'pyp',        cls: 'band-pyp',        emoji: '🚀', name: 'PYP',            grades: 'Grade 3–5',  accent: '#E53935' },
    { id: 'foundation', cls: 'band-foundation', emoji: '🌱', name: 'Foundation',     grades: 'Grade 1–2',  accent: '#F9A825' },
  ];

  /* ── Concepts ─────────────────────────────────────
     gate: total completed activities needed to unlock.
     world: links to a playable world when present.
     key: 🔑 cornerstone concept.                      */
  const CONCEPTS = [
    /* Foundation — Grade 1–2 */
    { id: 'counting', band: 'foundation', grade: 'Grade 1 · Foundation', icon: '🔢', name: 'Counting & Numbers', key: true,
      insight: 'Numbers are the universal language — every culture on Earth invented them because we had no choice.',
      professions: ['🚀 Astronauts', '👨‍⚕️ Doctors', '👨‍🍳 Chefs', '💻 Programmers', '🎵 Musicians'],
      builds: '🔑 The start of everything' },
    { id: 'add-sub', band: 'foundation', grade: 'Grade 1–2 · Foundation', icon: '➕', name: 'Addition & Subtraction', key: true,
      insight: 'Combining and separating things is what every business, every hospital, every kitchen does all day long.',
      professions: ['🏦 Bankers', '🏗️ Engineers', '🛒 Shopkeepers', '🩺 Nurses', '🎮 Game Designers'],
      builds: '🔗 Builds from: Counting' },
    { id: 'shapes', band: 'foundation', grade: 'Grade 1–2 · Foundation', icon: '🔷', name: 'Shapes & Patterns',
      insight: 'The universe is made of patterns. Recognising them is the first superpower a mathematician develops.',
      professions: ['🏛️ Architects', '🎨 Artists', '👗 Fashion Designers', '🎮 Game Developers', '🤖 Robotics Engineers'],
      builds: '🔗 Seeds geometry & algebra' },
    { id: 'measurement', band: 'foundation', grade: 'Grade 2 · Foundation', icon: '📏', name: 'Measurement',
      insight: '"How much?" is the question that launched science. Measurement lets humans compare, build, and improve the world.',
      professions: ['🔬 Scientists', '🏗️ Builders', '👨‍🍳 Chefs', '🩺 Doctors', '🌍 Geographers'],
      builds: '🔗 Seeds area, perimeter & data' },

    /* PYP — Grade 3–5 */
    { id: 'place-value', band: 'pyp', grade: 'Grade 3 · PYP', icon: '🧱', name: 'Place Value', key: true, world: 'number-sense',
      worldName: '🧱 Number Sense Kingdom', worldUrl: 'worlds/number-sense/index.html',
      insight: '23 and 32 use the same two digits — but mean totally different things. WHERE you place a digit is everything.',
      professions: ['💻 Programmers', '🏦 Bankers', '📊 Data Scientists', '🔬 Scientists', '📡 Network Engineers'],
      builds: '🔗 Builds from: Counting' },
    { id: 'multiplication', band: 'pyp', grade: 'Grade 3 · PYP', icon: '🎭', name: 'Multiplication', key: true, world: 'multiplication',
      worldName: '🎭 Multiplication Village', worldUrl: 'worlds/multiplication/index.html',
      insight: 'Multiplication is just a faster, smarter way to add equal groups. The kangaroo doesn\'t count its hops — it multiplies them.',
      professions: ['⚗️ Chemists', '👨‍🍳 Chefs', '🏗️ Builders', '🏪 Business Owners', '🎮 Game Designers'],
      builds: '🔗 Builds from: Addition' },
    { id: 'fractions', band: 'pyp', grade: 'Grade 4 · PYP', icon: '🍕', name: 'Fractions', key: true, world: 'fraction-factory',
      worldName: '🍕 Fraction Factory', worldUrl: 'worlds/fraction-factory/index.html',
      insight: 'Fractions were invented the moment the first human needed to share one pizza among four friends. It\'s just fair sharing with a name.',
      professions: ['🩺 Doctors', '💊 Pharmacists', '🏛️ Architects', '👨‍🍳 Chefs', '🎵 Musicians'],
      builds: '🔗 Builds from: Division' },
    { id: 'area-perimeter', band: 'pyp', grade: 'Grade 4 · PYP', icon: '🏡', name: 'Area & Perimeter', world: 'area-perimeter',
      worldName: '🏡 Area & Perimeter Park', worldUrl: 'worlds/area-perimeter/index.html',
      insight: 'A garden\'s fence and its grass are completely different problems — same shape, two totally different questions. Welcome to 2D thinking.',
      professions: ['🏛️ Architects', '🌿 Landscape Designers', '🏠 Interior Designers', '🏗️ Civil Engineers', '🎨 Painters'],
      builds: '🔗 Builds from: Multiplication' },
    { id: 'decimals', band: 'pyp', grade: 'Grade 5 · PYP', icon: '💯', name: 'Decimals & %',
      insight: '"25% off" is just the fraction ¼ wearing a business suit. Percentages make fractions easy to compare and communicate.',
      professions: ['💰 Bankers', '📈 Economists', '⚽ Sports Analysts', '🔬 Scientists', '🛒 Marketing'],
      builds: '🔗 Builds from: Fractions' },
    { id: 'data', band: 'pyp', grade: 'Grade 5 · PYP', icon: '📊', name: 'Data & Graphs',
      insight: 'A number alone tells you nothing. A collection of numbers, displayed visually, tells you everything — stories, trends, truths.',
      professions: ['📰 Journalists', '🩺 Epidemiologists', '💼 Business Analysts', '⚽ Sports Coaches', '🌎 Climate Scientists'],
      builds: '🔗 Builds from: Measurement' },

    /* MYP — Grade 6–8 */
    { id: 'ratios', band: 'myp', grade: 'Grade 6 · MYP', icon: '⚖️', name: 'Ratios & Proportion', key: true, gate: 5,
      world: 'myp-ratios', worldName: '⚖️ Ratio Workshop', worldUrl: 'concept.html?c=ratios',
      insight: 'A recipe that serves 4 can serve 40 — if you understand ratios. Scale changes size, not shape. This is how all of engineering thinks.',
      professions: ['👨‍🍳 Chefs & Nutritionists', '💊 Pharmacists', '🏗️ Engineers', '🗺️ Cartographers', '🎨 Graphic Designers'],
      builds: '🔗 Builds from: Fractions & Division' },
    { id: 'integers', band: 'myp', grade: 'Grade 6 · MYP', icon: '🌡️', name: 'Negative Numbers', gate: 5,
      world: 'myp-integers', worldName: '🌡️ Below Zero Lab', worldUrl: 'concept.html?c=integers',
      insight: 'The number line doesn\'t stop at zero — it keeps going below. Temperature below freezing, bank overdrafts, sea-level depth: all need negative numbers.',
      professions: ['🌡️ Meteorologists', '🔬 Physicists', '💻 Programmers', '💰 Accountants', '🌊 Oceanographers'],
      builds: '🔗 Builds from: Number Line' },
    { id: 'algebra', band: 'myp', grade: 'Grade 7 · MYP', icon: '🔮', name: 'Algebra', key: true, gate: 8, world: 'algebra-academy',
      worldName: '🔮 Algebra Academy', worldUrl: 'worlds/algebra-academy/index.html',
      insight: 'A variable is just a mystery box. Algebra is the art of opening it. The moment you write "x", you\'ve taken a giant leap towards thinking like Einstein.',
      professions: ['🚀 Scientists', '🤖 AI Engineers', '📈 Economists', '🎮 Game Designers', '💊 Medical Researchers'],
      builds: '🔗 Builds from: Arithmetic & Patterns' },
    { id: 'geometry', band: 'myp', grade: 'Grade 7 · MYP', icon: '📐', name: 'Angles & Triangles', gate: 8,
      world: 'myp-geometry', worldName: '📐 Angle Observatory', worldUrl: 'concept.html?c=geometry',
      insight: 'Every bridge, every building, every airplane wing is made of triangles — the only shape that cannot be squashed into a different shape. Geometry is structural logic.',
      professions: ['🌍 Surveyors', '✈️ Pilots', '🏗️ Civil Engineers', '🏛️ Architects', '🎬 3D Animators'],
      builds: '🔗 Builds from: Shapes & Measurement' },
    { id: 'statistics', band: 'myp', grade: 'Grade 7 · MYP', icon: '🎲', name: 'Probability', gate: 10,
      world: 'myp-statistics', worldName: '🎲 Probability Lab', worldUrl: 'concept.html?c=statistics',
      insight: 'When you can\'t know something for certain, you can still reason about how likely it is. Statistics lets you make smart decisions under uncertainty — which is basically adult life.',
      professions: ['📊 Data Scientists', '🩺 Doctors', '🎯 Sports Coaches', '🏦 Insurance Analysts', '🌏 Policy Makers'],
      builds: '🔗 Builds from: Data & Graphs' },
    { id: 'pythagorean', band: 'myp', grade: 'Grade 8 · MYP', icon: '📡', name: 'Pythagoras', key: true, gate: 12,
      world: 'myp-pythagorean', worldName: '📡 Pythagoras Quest', worldUrl: 'concept.html?c=pythagorean',
      insight: 'a² + b² = c² — possibly the most useful equation ever written. GPS, construction, navigation, and computer graphics all live here.',
      professions: ['🏗️ Architects', '📡 GPS Engineers', '🌍 Surveyors', '🎮 Game Developers', '🔭 Astronomers'],
      builds: '🔗 Builds from: Geometry & Algebra' },
    { id: 'linear-functions', band: 'myp', grade: 'Grade 8 · MYP', icon: '📈', name: 'Linear Functions', gate: 12,
      world: 'myp-linear', worldName: '📈 Line Lab', worldUrl: 'concept.html?c=linear',
      insight: 'y = mx + c describes every constant-speed journey, every salary calculation, every steady trend. This one equation is hiding everywhere in the real world.',
      professions: ['🔬 Physicists', '📈 Economists', '💻 Programmers', '🚗 Automotive Engineers', '🧬 Biologists'],
      builds: '🔗 Builds from: Algebra' },

    /* Senior — Grade 9–10 */
    { id: 'quadratics', band: 'senior', grade: 'Grade 9 · Senior', icon: '🌙', name: 'Quadratics', key: true, gate: 15,
      insight: 'Every ball thrown through the air, every satellite orbit, every supply-and-demand curve — all follow a parabola. Quadratics are the shape of motion itself.',
      professions: ['🔬 Physicists', '⚽ Sports Scientists', '🚀 Aerospace Engineers', '📈 Economists', '🎮 Physics Engine Devs'],
      builds: '🔗 Builds from: Linear Functions & Algebra' },
    { id: 'coordinate-geometry', band: 'senior', grade: 'Grade 9 · Senior', icon: '🗺️', name: 'Coordinate Geometry', gate: 15,
      insight: 'René Descartes invented this from his bed, watching a fly on the ceiling. Today, every GPS, every game world, every map is built on his coordinate system.',
      professions: ['🎮 Game Developers', '🌌 Astronomers', '📡 GPS Engineers', '🤖 Robotics', '🚗 Self-Driving Cars'],
      builds: '🔗 Builds from: Geometry & Algebra' },
    { id: 'trigonometry', band: 'senior', grade: 'Grade 10 · Senior', icon: '🔭', name: 'Trigonometry', key: true, gate: 18,
      insight: 'Ancient Greeks used trigonometry to measure the height of pyramids using only shadows. Today it steers ships, synthesizes music, and builds every suspension bridge.',
      professions: ['🏛️ Architects', '✈️ Pilots & Navigators', '🎵 Audio Engineers', '🌌 Astronomers', '🎮 3D Developers'],
      builds: '🔗 Builds from: Pythagoras' },
    { id: 'advanced-stats', band: 'senior', grade: 'Grade 10 · Senior', icon: '🧬', name: 'Advanced Statistics', gate: 18,
      insight: 'Every clinical drug trial, every election forecast, every AI model rests on advanced statistics. This is the mathematics that saves lives and shapes societies.',
      professions: ['🧬 Medical Researchers', '🌏 Policy Makers', '📊 Data Scientists', '💊 Epidemiologists', '🤖 ML Engineers'],
      builds: '🔗 Builds from: Probability & Statistics' },
    { id: 'proof', band: 'senior', grade: 'Grade 10 · Senior', icon: '💎', name: 'Proof & Reasoning', key: true, gate: 20,
      insight: 'A proof is an argument so airtight that no one in the universe can disagree. Mathematicians have proven things that will be true for eternity. That\'s a kind of immortality.',
      professions: ['💻 Computer Scientists', '🔐 Cryptographers', '⚖️ Lawyers', '🔬 All Researchers', '🤖 AI Safety Engineers'],
      builds: '🔑 The crown of all mathematics' },
  ];

  /* ── Progress helpers ─────────────────────────── */

  function totalCompleted(state) {
    let count = 0;
    for (const world in state.activities) {
      for (const act in state.activities[world]) {
        if (state.activities[world][act] && state.activities[world][act].completed) count++;
      }
    }
    return count;
  }

  function worldCompleted(state, worldId) {
    const acts = state.activities[worldId];
    if (!acts) return 0;
    return Object.values(acts).filter(a => a && a.completed).length;
  }

  /* Total activities across every registered world */
  function totalActivities() {
    const reg = (window.YF && YF.WORLD_ACTIVITIES) || {};
    return Object.values(reg).reduce((sum, list) => sum + list.length, 0) || 25;
  }

  function worldSize(worldId) {
    const reg = (window.YF && YF.WORLD_ACTIVITIES) || {};
    return (reg[worldId] || []).length || 5;
  }

  /* status: 'done' | 'active' | 'locked' | 'ready' */
  function conceptStatus(c, state, completed) {
    if (c.gate && completed < c.gate) return 'locked';
    if (c.world) {
      const n = worldCompleted(state, c.world);
      if (n >= worldSize(c.world)) return 'done';
      if (n > 0) return 'active';
    }
    return 'ready';
  }

  const STATUS_BADGE = { done: '✓', active: '▶', ready: '→', locked: '🔒' };

  /* ── Render the map ───────────────────────────── */

  function render(state) {
    const completed = totalCompleted(state);
    const map = document.getElementById('journey-map');
    map.innerHTML = '';

    /* Which band is the student currently working in? */
    let activeBand = 'pyp';                       /* default: first playable band */
    let sawActive = false;
    for (const c of CONCEPTS) {
      const s = conceptStatus(c, state, completed);
      if (s === 'active') { activeBand = c.band; sawActive = true; }
    }
    if (!sawActive) {
      /* No world mid-progress: park the avatar at the lowest band with a 'ready' playable world */
      const next = CONCEPTS.find(c => c.world && conceptStatus(c, state, completed) === 'ready');
      if (next) activeBand = next.band;
      else if (completed >= totalActivities()) activeBand = 'senior';
    }

    const stage = AVATAR_STAGES.reduce((acc, s) => (completed >= s.min ? s : acc), AVATAR_STAGES[0]);

    for (const band of BANDS) {
      const row = document.createElement('div');
      row.className = 'band-row ' + band.cls;

      const side = document.createElement('div');
      side.className = 'band-side';
      side.innerHTML =
        `<span class="band-emoji">${band.emoji}</span>` +
        `<span class="band-name">${band.name}</span>` +
        `<span class="band-grades">${band.grades}</span>` +
        (band.id === activeBand ? `<span class="band-here">📍 You are here</span>` : '');
      row.appendChild(side);

      if (band.id === activeBand) {
        const marker = document.createElement('span');
        marker.className = 'band-avatar-marker';
        marker.textContent = stage.emoji;
        marker.title = stage.title;
        row.appendChild(marker);
      }

      const area = document.createElement('div');
      area.className = 'band-concepts';
      for (const c of CONCEPTS.filter(c => c.band === band.id)) {
        const status = conceptStatus(c, state, completed);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'concept-chip is-' + status + (c.key ? ' is-key' : '');
        chip.innerHTML =
          `<span class="chip-status">${STATUS_BADGE[status]}</span>` +
          `<span class="chip-emoji">${c.icon}</span>` +
          `<span class="chip-name">${c.name}</span>`;
        chip.addEventListener('click', () => openModal(c, status, band.accent));
        area.appendChild(chip);
      }
      row.appendChild(area);
      map.appendChild(row);
    }

    /* Avatar chip in the topbar */
    const emojiEl = document.getElementById('avatar-emoji');
    const titleEl = document.getElementById('avatar-title');
    const fillEl  = document.getElementById('avatar-progress-fill');
    const labelEl = document.getElementById('avatar-progress-label');
    if (emojiEl) emojiEl.textContent = stage.emoji;
    if (titleEl) titleEl.textContent = (state.student && state.student.named)
      ? state.student.name + ' — ' + stage.title
      : stage.title;
    const total = totalActivities();
    if (fillEl)  fillEl.style.width  = Math.max(2, Math.round(completed / total * 100)) + '%';
    if (labelEl) labelEl.textContent = completed + ' / ' + total + ' activities';
  }

  /* ── Concept modal ────────────────────────────── */

  function openModal(c, status, accent) {
    const overlay = document.getElementById('concept-modal');
    overlay.querySelector('.concept-modal').style.setProperty('--modal-accent', accent);

    document.getElementById('cm-icon').textContent = c.icon;
    document.getElementById('cm-name').textContent = c.name;
    document.getElementById('cm-grade').textContent = c.grade + (c.key ? ' · 🔑 Key concept' : '');
    document.getElementById('cm-insight').textContent = '💡 ' + c.insight;
    document.getElementById('cm-builds').textContent = c.builds;

    const pills = document.getElementById('cm-professions');
    pills.innerHTML = '';
    for (const p of c.professions) {
      const pill = document.createElement('span');
      pill.className = 'profession-pill';
      pill.textContent = p;
      pills.appendChild(pill);
    }

    const actions = document.getElementById('cm-actions');
    actions.innerHTML = '';
    if (status === 'locked') {
      const tag = document.createElement('span');
      tag.className = 'concept-coming-soon';
      tag.textContent = '🔒 Complete earlier worlds first';
      actions.appendChild(tag);
    } else if (c.world) {
      const link = document.createElement('a');
      link.className = 'concept-link';
      link.href = c.worldUrl;
      link.textContent = (status === 'done' ? '✓ Revisit ' : '🚀 Enter ') + c.worldName;
      actions.appendChild(link);
    } else {
      const tag = document.createElement('span');
      tag.className = 'concept-coming-soon';
      tag.textContent = c.band === 'foundation' ? '🔓 Foundational — already in your bones' : '🔜 World coming soon';
      actions.appendChild(tag);
    }

    overlay.hidden = false;
  }

  function closeModal() {
    document.getElementById('concept-modal').hidden = true;
  }

  /* ── Init ─────────────────────────────────────── */

  function init() {
    if (window.YFUI) YFUI.initHUD();
    const state = (window.YF && YF.getState) ? YF.getState() : null;
    if (!state) return;

    render(state);

    document.getElementById('concept-modal-close').addEventListener('click', closeModal);
    document.getElementById('concept-modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
