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
      "🤔 Imagine your friend has never seen an equation. What's the very first thing they'd need to know?",
      "🧭 Try using the words 'balance' and 'both sides' in your explanation. Why do they matter?",
      "💡 A great teacher uses an example. Can you walk through solving x + 2 = 5 step by step, in your own words?",
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
