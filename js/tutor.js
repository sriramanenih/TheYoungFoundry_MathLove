/* ════════════════════════════════════════════════
   THE YOUNG FOUNDRY — FOUNDRY BUDDY (YFTutor)
   Socratic tutor: never gives the answer.
   - Always asks a guiding question first
   - Hints unlock only after 2+ attempts
   - Celebrates with reflection prompts
   ════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  const attempts = {};   // { topicId: count }

  /*
   * Each topic has tiers of help. Index 0 is always a question,
   * never an answer. Deeper hints require more attempts.
   */
  const TOPICS = {
    'mystery-box': [
      "🤔 The box is hiding a number. What happens to the total when you slide to a bigger number?",
      "🧭 Try a number, look at the result. Is it too big or too small? Which way should you move?",
      "💡 You're narrowing it down! If 10 was too big and 5 too small, where would you look next?",
    ],
    'balance-scale': [
      "🤔 Look at the scale. Which side is heavier right now? What does that tell you?",
      "🧭 A balanced scale means both sides are EQUAL. What would make the light side catch up?",
      "💡 The '=' sign is just a balanced scale in disguise. What value of x makes both sides weigh the same?",
    ],
    'build-it': [
      "🤔 Read the phrase slowly. Which word tells you the operation — more, less, times?",
      "🧭 'A number' we don't know yet — which token could stand for it?",
      "💡 '3 more than x' means we START with x and ADD 3. What order do the tokens go in?",
    ],
    'solve-it': [
      "🤔 What was DONE to x in this equation? To find x, what's the opposite move?",
      "🧭 Whatever you do to one side, you must do to the other — or the scale tips! What undoes adding?",
      "💡 Peel the equation like an onion: undo the + or − first, then undo the ×. What's the first layer here?",
    ],
    'teach-it': [
      "🤔 Imagine your friend has never seen this idea before. What's the very first thing they'd need to know?",
      "🧭 Use the big words you discovered in this world. WHY does your method work — not just HOW?",
      "💡 A great teacher uses an example. Can you walk through one, step by step, in your own words?",
    ],

    /* ── Number Sense Kingdom ── */
    'tower-builder': [
      "🤔 Look at the digit in the middle of the number. Is it worth itself — or something more?",
      "🧭 What's the difference between 3 ones and 3 tens? Build both and compare!",
      "💡 Read the number out loud: 'three HUNDRED forty seven.' Which blocks does each word ask for?",
    ],
    'number-line': [
      "🤔 Where is the halfway point of the line? Is your number before it or after it?",
      "🧭 Find the two closest landmarks (like 30 and 40). Which one is your number nearer to?",
      "💡 Split the space between landmarks into steps of 1. Count your way to the number!",
    ],
    'compare-order': [
      "🤔 Which number has more digits? What does that instantly tell you?",
      "🧭 Same number of digits? Compare the FIRST digit of each. Then the next…",
      "💡 Think of the numbers on a number line. The one further right is always bigger.",
    ],
    'secret-number': [
      "🤔 The clues might be out of order! Which clue talks about the biggest place?",
      "🧭 Write three blanks: _ _ _. Fill hundreds first, then tens, then ones.",
      "💡 '4 hundreds' means a 4 in the LEFT blank — even if the clue came last!",
    ],

    /* ── Multiplication Village ── */
    'theater-seats': [
      "🤔 Counting every seat one by one works… but is there a faster way? What repeats?",
      "🧭 How many seats are in ONE row? How many rows? What could you do with those two numbers?",
      "💡 If one row has 6 seats, then 4 rows have 6 + 6 + 6 + 6. Is there a shortcut for repeated adding?",
    ],
    'array-builder': [
      "🤔 You found one way — could a DIFFERENT pair of numbers make the same total?",
      "🧭 If 3 × 8 works, what happens when you swap the rows and columns?",
      "💡 Try small rows first: can 2 rows make it? 3 rows? Which divide it evenly?",
    ],
    'skip-counter': [
      "🤔 How much does the sequence grow at each step? Check the gap between neighbors!",
      "🧭 Take a number you know and add the jump size. What lands in the blank?",
      "💡 Skip counting IS multiplication: the 3rd number when counting by 4s is 3 × 4.",
    ],
    'group-detective': [
      "🤔 What is the GROUP in this story? How many are inside each group?",
      "🧭 Draw it! Circles for groups, dots inside. Now what do you see?",
      "💡 'Groups × items in each group' — which two numbers in the story are those?",
    ],

    /* ── Fraction Factory ── */
    'pizza-cutter': [
      "🤔 How many slices is the WHOLE pizza cut into? Where does that number live in the fraction?",
      "🧭 The bottom number counts all the slices. The top number counts the ones you take.",
      "💡 3/8 means: cut into 8 equal slices, shade exactly 3 of them. Count as you click!",
    ],
    'fair-share': [
      "🤔 If the sharing is FAIR, everyone gets exactly the same. What are we splitting, and among how many?",
      "🧭 Try sharing ONE bar first among all friends. Then what about the next bar?",
      "💡 Sharing 2 bars among 4 friends: each friend's share of EACH bar is 1/4. Two bars means…?",
    ],
    'twin-fractions': [
      "🤔 Look at the shaded bars, not the numbers. Which two bars cover the SAME amount?",
      "🧭 Cut every piece of 1/2 in half. Now how many pieces are shaded — out of how many?",
      "💡 Twins look different but are equal: multiply top AND bottom by the same number and nothing really changes.",
    ],
    'compare-fractions': [
      "🤔 Don't trust the big numbers! Is 1/8 of a pizza more or less than 1/4? Picture the slices.",
      "🧭 More slices means each slice is SMALLER. Compare the bars, not the digits.",
      "💡 Same bottom number? Compare tops. Same top? The smaller bottom wins. Why?",
    ],

    /* ── Area & Perimeter Park ── */
    'tile-counter': [
      "🤔 Count the tiles however you like. Do you notice anything about the rows?",
      "🧭 Every row has the same number of tiles. Could that speed things up?",
      "💡 Count one row. Count the rows. You're one step from a famous shortcut…",
    ],
    'fast-counter': [
      "🤔 This grid is BIG. Counting one-by-one will take forever. What did you notice about rows last time?",
      "🧭 How many tiles in one row? How many rows? Multiplication is repeated adding…",
      "💡 You're discovering it: tiles in a row × number of rows = ALL the tiles. That's what 'area' means!",
    ],
    'fence-builder': [
      "🤔 The fence goes AROUND the garden, not inside it. Trace the edge with your finger.",
      "🧭 Walk the edge: across the top, down the side, across the bottom, up again. Add as you go!",
      "💡 Two sides are the width, two sides are the height. Is there a shortcut for width + height + width + height?",
    ],
    'garden-design': [
      "🤔 You need the area to hit the target EXACTLY. Which width × height pairs multiply to it?",
      "🧭 Found one design? Stretch it: longer and thinner, or shorter and wider. Does the area stay?",
      "💡 Same area, different shape — now compare the fences. Are they the same length? Surprised?",
    ],
    'default': [
      "🤔 What do you notice? What do you wonder?",
      "🧭 Try something — even a wrong guess teaches you which way to go.",
      "💡 Look for a pattern in what you've tried so far. What stays the same? What changes?",
    ],
  };

  const CELEBRATIONS = [
    "🎉 YOU discovered that — no one told you! How would you explain it to a friend?",
    "✨ That's a real mathematician move. What was the moment it 'clicked' for you?",
    "🏆 Brilliant! Could you have found it faster? What would you try first next time?",
    "💪 You figured it out yourself — that's the whole point of the Foundry. What surprised you?",
  ];

  const ENCOURAGEMENTS = [
    "Not yet — but every try teaches you something. What did THAT try teach you?",
    "Close! Mathematicians are wrong a LOT before they're right. What will you adjust?",
    "Hmm, not quite. Look again — what changed when you tried that?",
  ];

  /* Record an attempt on a topic. Returns total attempts so far. */
  function attempt(topicId) {
    attempts[topicId] = (attempts[topicId] || 0) + 1;
    return attempts[topicId];
  }

  /*
   * Get help for a topic. Always Socratic:
   * fewer than 2 attempts → guiding question only,
   * more attempts → progressively deeper hints.
   */
  function hint(topicId) {
    const tiers = TOPICS[topicId] || TOPICS['default'];
    const n = attempts[topicId] || 0;
    let idx = 0;
    if (n >= 2) idx = 1;
    if (n >= 4) idx = 2;
    return tiers[Math.min(idx, tiers.length - 1)];
  }

  function encourage() {
    return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
  }

  function celebrate() {
    return CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)];
  }

  function resetTopic(topicId) {
    delete attempts[topicId];
  }

  /* ── Floating buddy widget ───────────────────── */

  let buddyEl = null;
  let currentTopic = 'default';

  function setTopic(topicId) {
    currentTopic = topicId;
  }

  function mountBuddy() {
    if (buddyEl) return;
    buddyEl = document.createElement('div');
    buddyEl.id = 'foundry-buddy';
    buddyEl.innerHTML = `
      <button id="buddy-btn" title="Ask Foundry Buddy" aria-label="Ask Foundry Buddy">🤖</button>
      <div id="buddy-bubble" hidden></div>
    `;
    const style = document.createElement('style');
    style.textContent = `
      #foundry-buddy { position: fixed; right: 20px; bottom: 20px; z-index: 150; }
      #buddy-btn {
        width: 56px; height: 56px; border-radius: 50%; border: none;
        background: var(--algebra-primary); font-size: 1.6rem;
        box-shadow: var(--shadow-lg); transition: transform var(--t-fast);
      }
      #buddy-btn:hover { transform: scale(1.1) rotate(-8deg); }
      #buddy-bubble {
        position: absolute; right: 0; bottom: 68px; width: 260px;
        background: white; border: 2px solid var(--algebra-border);
        border-radius: var(--r-lg); padding: 14px 16px;
        font-weight: 700; font-size: 0.9rem; color: var(--text-dark);
        box-shadow: var(--shadow-lg); animation: pop-in 0.25s ease;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(buddyEl);

    const btn    = buddyEl.querySelector('#buddy-btn');
    const bubble = buddyEl.querySelector('#buddy-bubble');
    btn.addEventListener('click', () => {
      if (!bubble.hidden) { bubble.hidden = true; return; }
      bubble.textContent = hint(currentTopic);
      bubble.hidden = false;
    });
    document.addEventListener('click', (e) => {
      if (!buddyEl.contains(e.target)) bubble.hidden = true;
    });
  }

  /* ── Public API ──────────────────────────────── */

  global.YFTutor = {
    attempt, hint, encourage, celebrate, resetTopic,
    setTopic, mountBuddy,
  };

})(window);
