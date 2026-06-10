# 🏭 The Young Foundry — Math Discovery Platform

> *Teach children how mathematics was discovered, not how it is memorized.*

**Live:** [https://sriramanenih.github.io/TheYoungFoundry_MathLove](https://sriramanenih.github.io/TheYoungFoundry_MathLove)

**Repo:** [https://github.com/sriramanenih/TheYoungFoundry_MathLove](https://github.com/sriramanenih/TheYoungFoundry_MathLove)

---

## What This Is

A discovery-based mathematics learning platform for ages 9–12 (Grades 5–6).

Every concept follows:
**Observe → Explore → Discover → Explain → Apply → Create → Teach**

No formula is shown before the child has enough interactive experience to discover the pattern themselves.

---

## Project Structure

```
TheYoungFoundry_MathLove/
│
├── index.html                    ← World Map (homepage)
│
├── css/
│   ├── tokens.css                ← Design tokens (colors, fonts, spacing)
│   └── global.css                ← Base styles, components, animations
│
├── js/
│   ├── engine.js                 ← Game engine (XP, coins, mastery, localStorage)
│   ├── ui.js                     ← UI layer (HUD, toasts, modals, particles, drag-drop)
│   └── tutor.js                  ← Foundry Buddy AI tutor (Socratic dialogue)
│
└── worlds/
    ├── algebra-academy/          ← ✅ COMPLETE — Showpiece world
    │   ├── index.html
    │   ├── algebra.css
    │   └── algebra.js
    ├── number-sense/             ← 🚧 Stub (Coming Soon)
    ├── multiplication/           ← 🚧 Stub (Coming Soon)
    ├── fraction-factory/         ← 🚧 Stub (Coming Soon)
    └── area-perimeter/           ← 🚧 Stub (Coming Soon)
```

---

## Algebra Academy — 5 Activities

| # | Activity | Concept | Mechanic |
|---|----------|---------|----------|
| 1 | 🎁 Mystery Box | Variable as unknown | Slider + guess-and-check |
| 2 | ⚖️ Balance Scale | Equation = equality | Animated tilt scale |
| 3 | 🔧 Build It | Expressions | Token tap-to-build builder |
| 4 | 🕵️ Solve It | Solving by undoing | Step-by-step equation solver |
| 5 | 💎 Teach It | Diamond mastery gate | Free-text Socratic teach-back |

---

## Mastery System

| Tier | Threshold | Unlock |
|------|-----------|--------|
| 🥉 Bronze | 20% activities | Keep going |
| 🥈 Silver | 45% activities | Harder challenges |
| 🥇 Gold | 70% activities | Real-world problems |
| 💎 Diamond | 90% + Teach-Back | Prove you can explain it |

---

## Foundry Buddy — AI Tutor Rules

The AI tutor **never** gives the answer directly. It always:
- Asks a guiding question first
- Gives a hint only after 2+ attempts
- Celebrates discoveries with reflection prompts
- Uses the Socratic method at every step

Example:
- ❌ `"Area = Length × Width"`
- ✅ `"How many tiles are in one row? How many rows? Is there a faster way?"`

---

## Game Engine

**XP Awards:**
- Activity complete: 25 XP
- Concept discovered: 50 XP
- Perfect score: 75 XP
- Mastery tiers: 100 / 200 / 350 / 600 XP

**Storage:** All state in `localStorage` under key `tyf_state_v1`. No backend needed.

---

## Deploy to GitHub Pages

```bash
# Clone the repo
git clone https://github.com/sriramanenih/TheYoungFoundry_MathLove.git
cd TheYoungFoundry_MathLove

# Add files and push
git add .
git commit -m "Initial Young Foundry Math Platform"
git push origin main

# Enable GitHub Pages:
# Repo → Settings → Pages → Source: main branch → / (root)
# Live at: https://sriramanenih.github.io/TheYoungFoundry_MathLove
```

---

## Integration with Main YoungFoundry Platform

When ready to integrate into `sriramanenih.github.io/YoungFoundry`:

1. Copy `worlds/algebra-academy/` into the main YoungFoundry repo
2. Add a card on the YoungFoundry index pointing to it
3. The engine/ui/tutor JS files are self-contained — no conflicts
4. Fredoka One + color tokens already match the Math Quest standard

---

## Next Worlds to Build

Priority order based on curriculum dependency:

1. **Fraction Factory** — pizza/cake cutting, most visual, highest engagement
2. **Area & Perimeter Park** — tile counting, strong "aha moment"
3. **Number Sense Kingdom** — place value towers, foundation
4. **Multiplication Village** — arrays, theater seating

Each world follows the same architecture:
- `worldname.html` — page shell
- `worldname.css` — world-specific theme
- `worldname.js` — 5 activities + init function

---

*Built with The Young Foundry pedagogy: every child should feel "I figured it out myself."*
