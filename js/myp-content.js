/* ════════════════════════════════════════════════
   MYP CONTENT (Grade 6–8) — six discovery courses
   Each concept: 5 topics. Each topic: blocks.
   Block types:
     story   — the hook / wonder
     think   — discovery question asked BEFORE the reveal
     reveal  — the explanation (unlocks after its think)
     key     — boxed key idea
     example — worked example
     try     — practice MCQ (must be answered right to finish)
     teach   — teach-back gate (final topic only)
   ════════════════════════════════════════════════ */

window.MYP_CONTENT = {

  /* ═════════════════════════════════════════════
     ⚖️ RATIOS & PROPORTION
     ═════════════════════════════════════════════ */
  'ratios': {
    worldId: 'myp-ratios',
    icon: '⚖️',
    name: 'Ratios & Proportion',
    grade: 'Grade 6 · MYP',
    accent: '#1E88E5', dark: '#0D47A1', bg: '#E3F2FD',
    professions: ['👨‍🍳 Chefs', '💊 Pharmacists', '🏗️ Engineers', '🗺️ Cartographers', '🎨 Designers', '📷 Photographers', '⚗️ Chemists'],
    topics: [
      {
        id: 'what-is-ratio', icon: '🥤', title: 'What Is a Ratio?', sub: 'The recipe rebellion',
        blocks: [
          { t: 'story', html: `Maya's famous mango lassi uses <strong>2 cups of mango</strong> and <strong>3 cups of yogurt</strong>. Her little brother "improves" it by adding 1 extra cup of each: 3 mango, 4 yogurt. He says: <em>"Same difference — I added the same to both!"</em> But one sip and Maya makes a face. It tastes… wrong. Watery.` },
          { t: 'think', q: 'The brother kept the DIFFERENCE the same (1 apart). Why did the taste change?',
            choices: [
              { label: 'Because taste depends on the MULTIPLICATIVE relationship — 2:3 is not the same blend as 3:4', right: true, fb: '🎉 Exactly. 2 mango for every 3 yogurt is a blend. Adding the same amount to both changes the blend.' },
              { label: 'Because he should have added 2 cups of each', right: false, fb: '🤔 Try it: 4:5 is a different blend again. ADDING anything equal to both sides changes the mix. What stays the same when you DOUBLE both?' },
              { label: 'The taste didn\'t really change; Maya is being dramatic', right: false, fb: '🤔 Do the math: 2/3 ≈ 0.67 cups of mango per yogurt, 3/4 = 0.75. The blends really are different!' },
            ] },
          { t: 'reveal', html: `A <strong>ratio</strong> compares quantities by <strong>multiplication</strong>, not addition. The lassi recipe is the ratio <code>2 : 3</code> — two mango <em>for every</em> three yogurt. To keep the taste, you must <strong>multiply both numbers by the same amount</strong>: 4:6, 6:9, 20:30 all taste identical. That little phrase "for every" is the soul of every ratio.` },
          { t: 'key', html: `A ratio says "for every ___ of this, ___ of that." Scaling a ratio means MULTIPLYING both sides by the same number — never adding.` },
          { t: 'fillblank', before: 'Red : yellow = 2 : 5. Scale ×4: you use 8 red, so you need', blank: '20', after: 'cups of yellow. (Same colour, bigger batch.)', hint: '5 × 4 = ?', goodFb: '🎉 Exactly — both sides × 4. The blend stays identical.', badFb: '🤔 The multiplier from 2 to 8 is 4. Apply the SAME multiplier to 5.' },
          { t: 'stepwise', title: '🍝 Pasta for a crowd', steps: [
            'Identify the ratio: a sauce for 4 people uses 6 tomatoes → ratio <code>4 : 6</code>.',
            'Find the multiplier: 4 people → 12 people is ×3.',
            'Apply to BOTH sides equally: 6 tomatoes × 3 = <strong>18 tomatoes</strong>.',
            '✅ Same recipe, same taste — three times the dinner! Ratio 12 : 18 = same as 4 : 6.',
          ]},
          { t: 'try', q: 'Orange paint mixes red : yellow = 3 : 5. You use 9 cups of red. How much yellow keeps the SAME orange?',
            choices: [
              { label: '11 cups (I added 6 to both)', right: false, fb: '🤔 That\'s the adding trap from the lassi story! 9 red is 3 × 3. What must happen to the yellow?' },
              { label: '15 cups (3:5 scaled by 3)', right: true, fb: '🎉 Perfect. 3×3 : 5×3 = 9:15. Same orange, bigger bucket.' },
              { label: '9 cups (make them equal)', right: false, fb: '🤔 Equal parts would be the ratio 1:1 — a totally different (much redder) orange.' },
            ] },
          { t: 'drill', qs: [
            { q: 'A smoothie uses banana : mango = 2 : 3. For 10 bananas, how many mangoes?',
              choices: [
                { label: '15 — 2:3 scaled ×5', right: true, fb: '🎉 5 × 3 = 15. The taste stays locked.' },
                { label: '13 — add 3 to each', right: false, fb: '🤔 Adding trap! Multiply both sides by the same factor, not add.' },
                { label: '5 — half of 10', right: false, fb: '🤔 Halving the bananas would give half the mangoes: 1:1.5. Use the ratio!' },
              ]},
            { q: 'Concrete mix = cement : sand = 1 : 4. You use 6 bags of cement. How many bags of sand?',
              choices: [
                { label: '24 — scaled ×6', right: true, fb: '🎉 1×6 : 4×6 = 6:24. The mix holds.' },
                { label: '10 — add 4 to each side', right: false, fb: '🤔 Adding 4 to both gives 5:8 — a completely different (weaker) mix.' },
                { label: '4 — that\'s what the ratio says', right: false, fb: '🤔 4 bags would be right only when cement = 1. You have 6 bags of cement — scale it up.' },
              ]},
            { q: 'Paint: 1 litre covers 8 m². How many litres to cover 72 m²?',
              choices: [
                { label: '9 — 72 ÷ 8', right: true, fb: '🎉 Unit rate thinking: 1:8, so 9:72. Same ratio, perfect coverage.' },
                { label: '64 — 72 − 8', right: false, fb: '🤔 Subtracting areas gives m² not litres. What multiplies 8 to give 72?' },
                { label: '576 — 72 × 8', right: false, fb: '🤔 That multiplies the wrong way — you want litres PER 8 m², not m² per litre.' },
              ]},
          ]},
        ],
      },
      {
        id: 'equivalent-ratios', icon: '👯', title: 'Equivalent Ratios', sub: 'Different numbers, same story',
        blocks: [
          { t: 'story', html: `A juice stand sells two sizes. Small: <strong>4 lemons in 10 cups of water</strong>. Jumbo: <strong>10 lemons in 25 cups of water</strong>. A customer complains the jumbo must be weaker because "it has way more water!"` },
          { t: 'think', q: 'Is the jumbo actually weaker?',
            choices: [
              { label: 'Yes — 25 cups of water is more than 10', right: false, fb: '🤔 More water, but also more lemons! Compare the RATIOS: simplify 4:10 and 10:25 and see what happens.' },
              { label: 'No — 4:10 and 10:25 both simplify to 2:5. Identical strength', right: true, fb: '🎉 Both are 2 lemons for every 5 cups. The customer compared sizes, not blends.' },
              { label: 'You can\'t compare them without tasting', right: false, fb: '🤔 You can! Divide both sides of each ratio by their common factor and compare. Math IS the taste test.' },
            ] },
          { t: 'reveal', html: `Ratios have <strong>twins</strong> — just like fractions did in Fraction Factory. <code>4:10</code>, <code>10:25</code>, and <code>2:5</code> are all the <em>same relationship</em> wearing different outfits. To find the simplest form, divide both sides by their greatest common factor. The simplest form is the recipe's true identity.` },
          { t: 'key', html: `Equivalent ratios describe the SAME relationship. Simplify (divide both sides by the same number) to reveal a ratio's true identity — then comparing becomes easy.` },
          { t: 'fillblank', before: 'Simplify 12 : 18 — divide both sides by 6 to get', blank: '2', after: ': 3. (Simplest form reveals the true relationship.)', hint: '12 ÷ 6 = ?', goodFb: '🎉 Correct — 12:18 and 2:3 are the same recipe.', badFb: '🤔 Divide 12 by 6. What do you get?' },
          { t: 'stepwise', title: '⚽ Penalty record', steps: [
            'Keeper A: saved 12 of 30 shots. Write as ratio → <code>12 : 30</code>.',
            'Simplify A: GCF of 12 and 30 is 6. Divide both: <code>2 : 5</code>.',
            'Keeper B: saved 8 of 20. Simplify: GCF is 4 → <code>2 : 5</code>.',
            '✅ Both simplify to 2:5 — <strong>exactly equally good</strong>. Simplifying revealed the truth.',
          ]},
          { t: 'try', q: 'Which of these is NOT equivalent to 6 : 9?',
            choices: [
              { label: '2 : 3', right: false, fb: '🤔 6÷3 : 9÷3 = 2:3 — that IS equivalent. One of the others breaks the pattern.' },
              { label: '12 : 18', right: false, fb: '🤔 6×2 : 9×2 = 12:18 — equivalent! Check the others by dividing.' },
              { label: '9 : 12', right: true, fb: '🎉 Right — 9:12 simplifies to 3:4, but 6:9 simplifies to 2:3. Different blends!' },
            ] },
          { t: 'drill', qs: [
            { q: 'Are 15 : 25 and 9 : 15 equivalent?',
              choices: [
                { label: 'Yes — both simplify to 3 : 5', right: true, fb: '🎉 15÷5 : 25÷5 = 3:5 and 9÷3 : 15÷3 = 3:5. Same relationship.' },
                { label: 'No — the numbers are different', right: false, fb: '🤔 Different numbers, same RATIO. Simplify each: both reduce to 3:5.' },
                { label: 'Can\'t tell without more information', right: false, fb: '🤔 You have all you need! Divide each by their GCF and compare the simplified forms.' },
              ]},
            { q: 'A recipe uses 5 g sugar for every 20 g flour. Which is an equivalent amount?',
              choices: [
                { label: '10 g sugar : 40 g flour (scaled ×2)', right: true, fb: '🎉 Both sides ×2 keeps the 1:4 ratio — same sweetness.' },
                { label: '10 g sugar : 25 g flour (added 5 to each)', right: false, fb: '🤔 Adding 5 to both changes the ratio: 10:25 = 2:5, not 1:4.' },
                { label: '5 g sugar : 25 g flour (added 5 to flour only)', right: false, fb: '🤔 Changing only one side definitely breaks the ratio.' },
              ]},
            { q: 'Simplify 36 : 48 fully.',
              choices: [
                { label: '3 : 4', right: true, fb: '🎉 GCF = 12. 36÷12 : 48÷12 = 3:4.' },
                { label: '18 : 24', right: false, fb: '🤔 Divided by 2 — but you can simplify further. Can you divide again?' },
                { label: '6 : 8', right: false, fb: '🤔 Divided by 6 — but 6:8 still simplifies to 3:4. Look for the GREATEST common factor.' },
              ]},
          ]},
        ],
      },
      {
        id: 'unit-rates', icon: '🛒', title: 'Unit Rates', sub: 'The best-buy detective',
        blocks: [
          { t: 'story', html: `Two cereal boxes stare at you from the shelf. Box A: <strong>500g for ₹150</strong>. Box B: <strong>750g for ₹210</strong>. The big box LOOKS like a better deal — big things usually feel cheaper. But "feels cheaper" has emptied many wallets…` },
          { t: 'think', q: 'How can you compare the two deals fairly?',
            choices: [
              { label: 'Find the price of ONE gram (or 100g) of each — then compare', right: true, fb: '🎉 That\'s the unit rate: the great equalizer. Price per 100g: A = ₹30, B = ₹28. The big box wins — but now you KNOW, you don\'t guess.' },
              { label: 'The bigger box is always the better deal', right: false, fb: '🤔 Supermarkets count on you thinking that! Sometimes the big pack costs MORE per gram. Find the price of one gram of each.' },
              { label: 'Subtract: 210 − 150 = 60, so B costs ₹60 more', right: false, fb: '🤔 That tells you the difference in price, but not the difference in VALUE. You\'re paying more — but for how much more cereal?' },
            ] },
          { t: 'reveal', html: `A <strong>unit rate</strong> rewrites a ratio so one side equals <strong>1</strong>: rupees per <em>1 gram</em>, km per <em>1 hour</em>, heartbeats per <em>1 minute</em>. Once everything is "per one", any two deals, speeds, or machines can be compared instantly. Divide: A = 150 ÷ 500 = <code>₹0.30/g</code>. B = 210 ÷ 750 = <code>₹0.28/g</code>.` },
          { t: 'key', html: `Unit rate = ratio with a 1 on one side ("per one"). It is the universal comparison tool: when in doubt, divide it out.` },
          { t: 'fillblank', before: 'Box A: 500 g for ₹100. Unit rate (₹ per 100 g) =', blank: '20', after: '₹ per 100 g. (Now you can compare any pack size fairly.)', hint: '100 ÷ 500 × 100 = 20, or just 100/500 = 0.2 per gram × 100', goodFb: '🎉 ₹20 per 100g — the universal comparison unit.', badFb: '🤔 Divide ₹100 by 5 (to get per 100g): 100 ÷ 5 = ?' },
          { t: 'stepwise', title: '🏃 Who is faster?', steps: [
            'Ria: 100 m in 16 s. Dev: 150 m in 25.5 s. Both claim to be fastest — different distances and times.',
            'Find UNIT RATE (speed = m per 1 second). Ria: 100 ÷ 16 = <strong>6.25 m/s</strong>.',
            'Dev: 150 ÷ 25.5 ≈ <strong>5.88 m/s</strong>.',
            '✅ Ria wins — even though Dev ran further. Unit rates make it impossible to argue.',
          ]},
          { t: 'try', q: 'Printer X prints 45 pages in 9 minutes. Printer Y prints 64 pages in 16 minutes. Which is faster?',
            choices: [
              { label: 'Y — it printed more pages', right: false, fb: '🤔 More pages, but in much more time. What is each printer\'s pages-per-ONE-minute?' },
              { label: 'X — 5 pages/min beats 4 pages/min', right: true, fb: '🎉 45÷9 = 5, 64÷16 = 4. Unit rates make it obvious.' },
              { label: 'They\'re the same speed', right: false, fb: '🤔 Divide pages by minutes for each printer — the two answers are not equal.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Car A: 240 km on 20 L. Car B: 350 km on 25 L. Which is more fuel-efficient?',
              choices: [
                { label: 'B — 14 km/L beats A\'s 12 km/L', right: true, fb: '🎉 240÷20=12, 350÷25=14. Car B stretches every litre further.' },
                { label: 'A — it used less fuel', right: false, fb: '🤔 Using less fuel is pointless if you also went less far. Compare km PER litre.' },
                { label: 'They\'re equal', right: false, fb: '🤔 12 km/L ≠ 14 km/L. Divide each distance by its fuel amount.' },
              ]},
            { q: 'Apples: Shop 1 sells 8 for ₹56. Shop 2 sells 5 for ₹40. Which is cheaper per apple?',
              choices: [
                { label: 'Shop 1 — ₹7 each vs ₹8 each', right: true, fb: '🎉 56÷8=7, 40÷5=8. Shop 1 wins despite the higher total price.' },
                { label: 'Shop 2 — ₹40 is less than ₹56', right: false, fb: '🤔 Total price tells you nothing without quantity. Find cost per single apple.' },
                { label: 'Equal — both prices end in round numbers', right: false, fb: '🤔 ₹7 per apple ≠ ₹8 per apple. Divide price by quantity.' },
              ]},
            { q: 'A tap fills 90 L in 6 minutes. How many litres per minute?',
              choices: [
                { label: '15 L/min', right: true, fb: '🎉 90 ÷ 6 = 15. The unit rate tells the tap\'s true speed.' },
                { label: '96 L/min', right: false, fb: '🤔 That adds instead of divides. Rate = total ÷ time.' },
                { label: '84 L/min', right: false, fb: '🤔 That subtracts. Find how many litres flow per ONE minute: 90 ÷ 6.' },
              ]},
          ]},
        ],
      },
      {
        id: 'proportions', icon: '🗺️', title: 'Proportions & Scale', sub: 'Tiny maps, real cities',
        blocks: [
          { t: 'story', html: `A map of your city says <strong>1 cm = 5 km</strong>. Your school and the stadium are 7 cm apart on paper. Somehow, that little ruler measurement on your desk knows the real distance across the entire city. How can paper "know" that?` },
          { t: 'think', q: 'The map distance is 7 cm. What is the real distance, and what\'s the reasoning?',
            choices: [
              { label: '35 km — every 1 cm stands for 5 km, so 7 cm stands for 7 × 5', right: true, fb: '🎉 That\'s a proportion: 1:5 = 7:35. The ratio stays locked while both sides scale together.' },
              { label: '12 km — add 5 to 7', right: false, fb: '🤔 The adding trap again! Map scales multiply, never add. If 1 cm is 5 km, what are 2 cm? 3 cm? Follow the pattern.' },
              { label: '7.5 km — a bit more than 7', right: false, fb: '🤔 Each single centimetre is already worth 5 whole km. Seven of them must be much more.' },
            ] },
          { t: 'reveal', html: `A <strong>proportion</strong> is a statement that two ratios are equal: <code>1 : 5 = 7 : x</code>. Solve it by asking <em>"what scales 1 into 7?"</em> (×7) — then do the same to the other side: 5 × 7 = 35. This one move — keep the ratio, scale both sides — designs buildings from blueprints, mixes medicine doses by body weight, and shrinks the world onto a map.` },
          { t: 'key', html: `A proportion = two equal ratios. Find the multiplier on one side, apply it to the other. Architects, pharmacists, and map-makers do exactly this all day.` },
          { t: 'fillblank', before: 'Map scale 1 cm = 8 km. Two cities are 6 cm apart on the map. Real distance =', blank: '48', after: 'km.', hint: '6 × 8 = ?', goodFb: '🎉 Every cm represents 8 real km — 6 cm = 48 km.', badFb: '🤔 Each centimetre = 8 km. Multiply 6 by 8.' },
          { t: 'stepwise', title: '💊 A real dose calculation', steps: [
            'Dose rule: 5 mg per 2 kg body weight. Write as proportion: <code>2 : 5 = 24 : ?</code>',
            'Find the multiplier: 2 kg → 24 kg is × 12.',
            'Apply to dosage side: 5 mg × 12 = <strong>60 mg</strong>.',
            '✅ Proportion solved. A pharmacist runs this for every child, every day — wrong answer = real harm.',
          ]},
          { t: 'try', q: 'A model car is built at scale 1 : 24. The model is 18 cm long. How long is the real car?',
            choices: [
              { label: '42 cm — 18 + 24', right: false, fb: '🤔 A 42 cm "car" would fit in your backpack. Scale means MULTIPLY: each model cm stands for 24 real cm.' },
              { label: '432 cm — 18 × 24', right: true, fb: '🎉 4.32 metres — a real car length. The proportion 1:24 = 18:432 held firm.' },
              { label: '24 cm — the scale says so', right: false, fb: '🤔 The 24 means the real car is 24 times LONGER than the model — not 24 cm long.' },
            ] },
          { t: 'drill', qs: [
            { q: 'A recipe for 4 serves: 3 cups flour. Scaling for 10 people — how much flour?',
              choices: [
                { label: '7.5 cups — 3 × (10/4)', right: true, fb: '🎉 Multiplier = 10/4 = 2.5. So 3 × 2.5 = 7.5 cups. Proportion perfect.' },
                { label: '9 cups — add 3 for each extra person', right: false, fb: '🤔 Adding is the enemy of proportions. Find what multiplies 4 into 10, then apply it to 3.' },
                { label: '6 cups — just double it', right: false, fb: '🤔 Doubling serves 8, not 10. Use the exact multiplier: 10 ÷ 4 = 2.5.' },
              ]},
            { q: 'Blueprint scale: 2 cm = 5 m. A wall is 7 cm on the plan. Real length?',
              choices: [
                { label: '17.5 m — multiplier 3.5 from 2 to 7', right: true, fb: '🎉 7 ÷ 2 = 3.5. Real: 5 × 3.5 = 17.5 m. Architects live here.' },
                { label: '35 m — 7 × 5', right: false, fb: '🤔 You multiplied the blueprint length by the scale number without applying the proportion properly. Find what scales 2 to 7 first.' },
                { label: '12 cm — 7 + 5', right: false, fb: '🤔 That adds a length to a scale number — mixed units. Set up the proportion: 2:5 = 7:?' },
              ]},
            { q: 'Shadow: a 2m pole casts a 3m shadow. Nearby building casts a 21m shadow. Height of building?',
              choices: [
                { label: '14 m — 2:3 = ?:21, so ? = 14', right: true, fb: '🎉 Multiplier = 21÷3 = 7. Height = 2×7 = 14 m. Ancient Egyptians measured pyramids this way.' },
                { label: '22 m — 21 + 1', right: false, fb: '🤔 The shadow ratio must stay the same as the height ratio. Set up 2:3 = h:21.' },
                { label: '63 m — 21 × 3', right: false, fb: '🤔 That multiplies shadow by scale, confusing the direction. Multiplier = shadow÷3 = 7, then apply to height.' },
              ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `You've discovered the whole story: ratios are "for every" relationships, they scale by multiplying, unit rates make anything comparable, and proportions let tiny models control real-world giants. Now prove you own it — <strong>teach it</strong>.` },
          { t: 'teach',
            prompt: 'A friend doubled a recipe by ADDING 2 cups to every ingredient, and it tasted terrible. Explain what went wrong and how to really double it.',
            placeholder: 'Dear friend, a recipe is a ratio, which means...',
            keywords: [
              ['ratio', 'proportion', 'for every', 'relationship'],
              ['multiply', 'times', 'double', 'scale', 'twice'],
              ['add', 'adding', 'plus', 'same amount'],
            ],
            hint: 'mention the ratio idea, what multiplying does, and why adding fails' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     🌡️ INTEGERS & NEGATIVE NUMBERS
     ═════════════════════════════════════════════ */
  'integers': {
    worldId: 'myp-integers',
    icon: '🌡️',
    name: 'Negative Numbers',
    grade: 'Grade 6 · MYP',
    accent: '#00897B', dark: '#00574B', bg: '#E0F2F1',
    professions: ['🌡️ Meteorologists', '💰 Accountants', '🌊 Submarine Pilots', '💻 Programmers', '🏔️ Mountaineers', '🔬 Physicists'],
    topics: [
      {
        id: 'below-zero', icon: '🧊', title: 'Below Zero', sub: 'The number line keeps going',
        blocks: [
          { t: 'story', html: `In Leh, the weather report says the temperature will <strong>drop 8 degrees</strong> tonight — from 5°C. You start counting down: 5, 4, 3, 2, 1, 0… and then what? For thousands of years, mathematicians argued that nothing could be less than nothing. Then winter disagreed.` },
          { t: 'think', q: 'The temperature falls 8 degrees from 5°C. Where does it land?',
            choices: [
              { label: 'At 0 — temperatures stop at zero', right: false, fb: '🤔 Tell that to Antarctica (−89°C on record)! Zero is just the freezing point of water, not a wall. Keep walking down the line.' },
              { label: 'At −3°C — three steps below zero', right: true, fb: '🎉 5 − 8 = −3. The number line doesn\'t end at zero — it extends forever in BOTH directions.' },
              { label: 'It\'s impossible to say', right: false, fb: '🤔 It\'s very possible — count down 8 steps from 5: you pass 0 after 5 steps, then take 3 more.' },
            ] },
          { t: 'reveal', html: `Zero is not the edge of the world — it's the <strong>middle</strong>. Negative numbers mirror the positives on the other side: <code>−3</code> is exactly as far below zero as <code>3</code> is above. Bank overdrafts (−₹500), basement floors (level −2), depths below sea level (−200 m), golf scores (−4 is great!) — humanity uses the "other side" of the line constantly.` },
          { t: 'key', html: `The number line runs forever in BOTH directions, with zero in the middle. A negative number answers: "how far BELOW the zero point?"` },
          { t: 'fillblank', before: 'Start at 3°C, temperature falls 10 degrees. You land at', blank: '-7', after: '°C. (Past zero and into negative territory.)', hint: '3 − 10 = ?', goodFb: '🎉 Right — three steps down past zero gives −7.', badFb: '🤔 Count down 10 steps from 3: 3, 2, 1, 0, −1, −2… keep going.' },
          { t: 'stepwise', title: '🌊 The submarine', steps: [
            'Submarine starts at <strong>−120 m</strong> (120 m below the surface).',
            'It rises 45 m — "rising" means <em>adding</em> a positive number.',
            'New position: −120 + 45 = <strong>−75 m</strong>.',
            '✅ Still underwater, but 45 m closer to the sun. Negative numbers describe real depth.',
          ]},
          { t: 'try', q: 'Which number is the SMALLEST: −7, −2, 0, or 3?',
            choices: [
              { label: '−2, because 2 is small', right: false, fb: '🤔 On the line, −7 sits even further LEFT than −2. Further left = smaller. Owe ₹7 vs owe ₹2 — which is worse?' },
              { label: '−7 — it\'s furthest below zero', right: true, fb: '🎉 Right. With negatives, the bigger-looking digit means further below zero — so −7 < −2 < 0 < 3.' },
              { label: '0 — zero means nothing', right: false, fb: '🤔 Zero beats every negative! Having nothing is better than owing something.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Put in order, smallest first: 4, −9, 0, −3',
              choices: [
                { label: '−9, −3, 0, 4', right: true, fb: '🎉 On the number line, furthest left = smallest. −9 is deepest below zero.' },
                { label: '0, −3, −9, 4', right: false, fb: '🤔 Zero is GREATER than any negative. Place −9 first — furthest from zero on the left.' },
                { label: '4, 0, −3, −9', right: false, fb: '🤔 That\'s biggest first. Flip it: smallest (most negative) comes first.' },
              ]},
            { q: 'A lift starts at floor 6, descends 9 floors. Which floor?',
              choices: [
                { label: 'Floor −3 (3 floors below ground)', right: true, fb: '🎉 6 − 9 = −3. Underground parking, perhaps.' },
                { label: 'Floor 3', right: false, fb: '🤔 Going DOWN subtracts. 6 − 9 goes PAST zero — into negative territory.' },
                { label: 'Floor 15', right: false, fb: '🤔 Going down adds floors? Descending means subtracting: 6 − 9.' },
              ]},
            { q: 'Which temperature is colder: −12°C or −5°C?',
              choices: [
                { label: '−12°C — further below zero', right: true, fb: '🎉 −12 < −5 on the number line. Deeper below zero = colder.' },
                { label: '−5°C — smaller digit, so smaller number', right: false, fb: '🤔 With negatives, the "bigger" digit means further from zero — which is MORE negative, so LESS.' },
                { label: 'They\'re both cold, same thing', right: false, fb: '🤔 7 degrees difference! Ask anyone who\'s experienced both.' },
              ]},
          ]},
        ],
      },
      {
        id: 'adding-negatives', icon: '🎈', title: 'Adding & Subtracting', sub: 'Balloons and sandbags',
        blocks: [
          { t: 'story', html: `Picture a hot-air balloon. <strong>Balloons (+1)</strong> lift it up, <strong>sandbags (−1)</strong> pull it down. One balloon and one sandbag cancel perfectly: they make a <strong>zero pair</strong>. All of integer arithmetic is just loading and unloading this balloon.` },
          { t: 'think', q: 'The balloon carries 5 sandbags (−5). You add 3 balloons (+3). Where is it now?',
            choices: [
              { label: 'At −2 — three sandbags get cancelled, two remain', right: true, fb: '🎉 (−5) + (+3) = −2. Three zero pairs vanish, leaving 2 sandbags of pull.' },
              { label: 'At −8 — five sandbags plus three more things', right: false, fb: '🤔 Careful — balloons LIFT. They cancel sandbags rather than joining them. Pair them up and see what survives.' },
              { label: 'At +3 — balloons always win', right: false, fb: '🤔 Only if there are more balloons than sandbags! Here 5 bags vs 3 balloons… who outnumbers whom?' },
            ] },
          { t: 'reveal', html: `Adding integers = combining lifts and pulls, cancelling <strong>zero pairs</strong>. And here is the beautiful twist: <strong>subtracting a negative is adding</strong>. Removing a sandbag (−(−1)) makes the balloon RISE — the same effect as adding a balloon (+1). That's why <code>7 − (−2) = 9</code>: cutting away two units of "down" gives you two units of "up".` },
          { t: 'key', html: `Same signs: pile up. Opposite signs: cancel zero pairs, the bigger team's sign survives. Subtracting a negative = adding (cutting a sandbag loose lifts the balloon).` },
          { t: 'fillblank', before: '8 − (−5) =', blank: '13', after: '. (Removing five sandbags = adding five balloons.)', hint: 'Subtracting a negative = adding: 8 + 5 = ?', goodFb: '🎉 Exactly — subtract negative = add. 8 + 5 = 13.', badFb: '🤔 Subtracting −5 is the same as adding +5. Try 8 + 5.' },
          { t: 'stepwise', title: '💰 The pocket-money ledger', steps: [
            'You owe your sister ₹40. Account balance: <strong>−40</strong>.',
            'You earn ₹100: −40 + 100 = <strong>+60</strong>. Paid her back and still have ₹60.',
            'She cancels ₹10 of old debt as a gift: 60 − (−10) = 60 + 10.',
            '✅ Final balance: <strong>₹70</strong>. Removing debt (negative) = gaining money (positive).',
          ]},
          { t: 'try', q: 'The temperature is −6°C. It "warms up" by −3°C, says the weather robot with a glitch. What really happened, and where does it land?',
            choices: [
              { label: '−6 + (−3) = −9 — adding negative warmth means it got COLDER', right: true, fb: '🎉 Adding a negative is sliding further down the line. The robot announced a warm-up and delivered a freeze.' },
              { label: '−6 + (−3) = −3', right: false, fb: '🤔 Two teams of sandbags don\'t cancel each other — they pile up. 6 down plus 3 more down = ?' },
              { label: '−6 + (−3) = +9', right: false, fb: '🤔 There are no balloons in this sum at all — nothing can lift it to positive territory.' },
            ] },
          { t: 'drill', qs: [
            { q: '(−15) + 9 = ?',
              choices: [
                { label: '−6', right: true, fb: '🎉 9 balloons cancel 9 of the 15 sandbags. 6 sandbags remain: −6.' },
                { label: '+6', right: false, fb: '🤔 There are MORE sandbags (15) than balloons (9). The sandbag team wins — result is negative.' },
                { label: '−24', right: false, fb: '🤔 That adds them. Opposite signs cancel — subtract the sizes, keep the bigger team\'s sign.' },
              ]},
            { q: '12 − (−7) = ?',
              choices: [
                { label: '19', right: true, fb: '🎉 Subtracting −7 = adding 7. 12 + 7 = 19. Cutting seven sandbags loose from a rising balloon.' },
                { label: '5', right: false, fb: '🤔 That subtracts without flipping the sign. Minus a negative ADDS. 12 + 7 = ?' },
                { label: '−5', right: false, fb: '🤔 Two errors: both the calculation and the sign. Minus a negative = plus. 12 + 7 = ?' },
              ]},
            { q: 'A diver is at −30 m. Surfaces 12 m, then dives 20 m. Final depth?',
              choices: [
                { label: '−38 m', right: true, fb: '🎉 −30 + 12 − 20 = −38. Two steps: first to −18, then down to −38.' },
                { label: '−22 m', right: false, fb: '🤔 Work step by step: −30 + 12 = −18. Then −18 − 20 = ?' },
                { label: '−2 m', right: false, fb: '🤔 Check the signs: surface = positive, dive = negative. −30 + 12 = −18, then −18 − 20 = ?' },
              ]},
          ]},
        ],
      },
      {
        id: 'multiplying-negatives', icon: '🎬', title: 'Multiplying Negatives', sub: 'The film played backwards',
        blocks: [
          { t: 'story', html: `Every student meets the rule "<em>negative times negative is positive</em>" and thinks: WHY? Here's a film that explains it. A water tank <strong>drains 2 litres per minute</strong> (−2 L/min). I film it… and play the film <strong>backwards</strong> (−1 × time). On the backwards film, what does the tank appear to do?` },
          { t: 'think', q: 'Drain (−2 L/min), film reversed (negative time). What do you SEE on screen?',
            choices: [
              { label: 'The tank FILLS — two negatives made a positive before my eyes', right: true, fb: '🎉 A draining tank, played backwards, fills. (−2) × (−1) = +2. The rule isn\'t a trick — it\'s reversed direction, reversed again.' },
              { label: 'The tank still drains', right: false, fb: '🤔 Imagine literally rewinding a video of water pouring out. Which way does the water move on screen?' },
              { label: 'The film breaks', right: false, fb: '🤔 The film is fine! Rewind a video of someone walking forward — they appear to walk backward. Now rewind a video of draining…' },
            ] },
          { t: 'reveal', html: `Multiplying by a negative means <strong>reversing direction</strong>. Positive × negative: one reversal → negative. Negative × negative: reversal of a reversal → back to <strong>positive</strong>. <code>(−2) × 3 = −6</code> (drain for 3 minutes: 6 litres gone). <code>(−2) × (−3) = +6</code> (rewind a drain by 3 minutes: 6 litres return). Mathematics keeps this rule because it keeps every pattern on the number line unbroken.` },
          { t: 'key', html: `A negative sign = a direction reversal. One reversal: negative. Two reversals: positive. Count the minus signs — odd count means negative answer, even count means positive.` },
          { t: 'fillblank', before: '(−3) × (−4) =', blank: '12', after: '. (Two reversals bring you back to positive.)', hint: '3 × 4 = 12. Two negatives → even number of reversals → positive.', goodFb: '🎉 Correct — two direction flips land you positive.', badFb: '🤔 Sizes multiply: 3 × 4 = 12. Two minus signs = even reversals = positive.' },
          { t: 'stepwise', title: '🧮 Pattern proof', steps: [
            'Start the pattern: 3×(−2) = −6, then 2×(−2) = −4, then 1×(−2) = −2.',
            'Notice: each step in the pattern <em>adds 2</em>. Constant gap.',
            'Continue: 0×(−2) = 0. Next must be: (−1)×(−2) = <strong>+2</strong>.',
            '✅ (−2)×(−2) = +4. The pattern itself FORCES negative × negative = positive. No rule required — math insisted.',
          ]},
          { t: 'try', q: 'Calculate: (−4) × (−3) × (−1)',
            choices: [
              { label: '+12 — negatives always cancel', right: false, fb: '🤔 Count the minus signs: there are THREE. Two cancel… what does the third one do?' },
              { label: '−12 — three reversals = still reversed', right: true, fb: '🎉 4×3×1 = 12, and an odd number of negative signs leaves the answer negative. −12.' },
              { label: '−8 — multiply then subtract something', right: false, fb: '🤔 Multiply the sizes first (4 × 3 × 1 = 12), then settle the sign by counting reversals.' },
            ] },
          { t: 'drill', qs: [
            { q: '(−6) × 5 = ?',
              choices: [
                { label: '−30', right: true, fb: '🎉 One reversal — answer is negative. Size: 6 × 5 = 30.' },
                { label: '+30', right: false, fb: '🤔 Only ONE negative sign here — just one reversal. Result stays negative.' },
                { label: '−11', right: false, fb: '🤔 That adds (−6) + 5 = −1... no, that\'s wrong too. Multiply the sizes: 6 × 5 = 30, then apply the sign.' },
              ]},
            { q: '(−2) × (−3) × (−4) × (−1) = ?',
              choices: [
                { label: '+24', right: true, fb: '🎉 Four negative signs = even = positive. Sizes: 2×3×4×1 = 24.' },
                { label: '−24', right: false, fb: '🤔 Count the minus signs: 4 of them. EVEN count = positive answer.' },
                { label: '+10', right: false, fb: '🤔 Don\'t add — multiply all sizes: 2×3×4×1 = 24. Then count the negatives.' },
              ]},
            { q: 'A lift descends at −3 floors per minute for 4 minutes. Net change in floor?',
              choices: [
                { label: '−12 floors (12 floors down)', right: true, fb: '🎉 (−3) × 4 = −12. One negative (direction) × positive (time) = negative result = going down.' },
                { label: '+12 floors', right: false, fb: '🤔 Going down (negative rate) for a positive time means you end up LOWER, not higher.' },
                { label: '−7 floors', right: false, fb: '🤔 That adds instead of multiplying. Rate × time = −3 × 4.' },
              ]},
          ]},
        ],
      },
      {
        id: 'absolute-value', icon: '📏', title: 'Absolute Value', sub: 'Distance doesn\'t care about direction',
        blocks: [
          { t: 'story', html: `Two friends leave the same school gate. Anya walks 3 km east (+3), Boris walks 3 km west (−3). Their positions are different — opposite, even. But ask each one <em>"how far did you walk?"</em> and they give the SAME answer. Some questions ignore direction completely.` },
          { t: 'think', q: 'What single idea answers "how far?" for both +3 and −3?',
            choices: [
              { label: 'Distance from zero — both are 3 steps from the gate, direction ignored', right: true, fb: '🎉 That\'s absolute value: |+3| = |−3| = 3. It measures pure distance, stripping away the sign.' },
              { label: 'The average: (+3 + −3) ÷ 2 = 0', right: false, fb: '🤔 Zero would mean nobody walked anywhere! Averaging positions isn\'t the same as measuring each journey.' },
              { label: 'You must know which direction is "positive" first', right: false, fb: '🤔 That\'s the trick — "how far" doesn\'t need a direction at all. 3 km is 3 km, east or west.' },
            ] },
          { t: 'reveal', html: `The <strong>absolute value</strong> <code>|x|</code> is a number's distance from zero — always positive or zero, never negative. It powers every "how far apart?" question: the gap between −6°C and 4°C is <code>|4 − (−6)| = 10</code> degrees. GPS error margins, temperature swings, profit-or-loss sizes — all absolute values.` },
          { t: 'key', html: `|x| = distance from zero. Distance has size but no direction, so it is never negative. The distance between a and b is |a − b|.` },
          { t: 'fillblank', before: '|−11| =', blank: '11', after: '. (Distance from zero — always strip the sign.)', hint: 'Absolute value removes the minus sign.', goodFb: '🎉 |−11| = 11. Eleven steps from zero, in either direction.', badFb: '🤔 Absolute value = distance from zero. Just remove the negative sign.' },
          { t: 'stepwise', title: '🏔️ From summit to shore', steps: [
            'Dead Sea: <strong>−430 m</strong> below sea level. Nearby hill: <strong>+570 m</strong> above.',
            'Height difference = |570 − (−430)|. First simplify inside: 570 − (−430) = 570 + 430.',
            '= |1000|.',
            '✅ <strong>1000 m</strong> of pure vertical distance. Absolute value strips direction — only the gap matters.',
          ]},
          { t: 'try', q: 'Which is GREATER: |−9| or |5|?',
            choices: [
              { label: '|5| — positive beats negative', right: false, fb: '🤔 The absolute-value bars erase the sign BEFORE comparing. What number do the bars turn −9 into?' },
              { label: '|−9| — it equals 9, which beats 5', right: true, fb: '🎉 |−9| = 9 and |5| = 5. Nine steps from zero beats five steps, whichever direction you walked.' },
              { label: 'They\'re equal', right: false, fb: '🤔 9 steps from zero vs 5 steps from zero — those aren\'t the same journey length.' },
            ] },
          { t: 'drill', qs: [
            { q: '|−15| − |8| = ?',
              choices: [
                { label: '7', right: true, fb: '🎉 |−15| = 15, |8| = 8. 15 − 8 = 7. Compute absolute values first, then subtract.' },
                { label: '−7', right: false, fb: '🤔 |−15| = 15 (positive!). 15 − 8 = 7, which is positive.' },
                { label: '23', right: false, fb: '🤔 That adds them. 15 − 8, not 15 + 8.' },
              ]},
            { q: 'The distance between −4 and 7 on the number line is…',
              choices: [
                { label: '11 — |7 − (−4)| = |11| = 11', right: true, fb: '🎉 7 − (−4) = 7 + 4 = 11. Absolute value distance works regardless of direction.' },
                { label: '3 — 7 − 4', right: false, fb: '🤔 Careful with the negative: 7 − (−4) = 7 + 4, not 7 − 4.' },
                { label: '28 — multiply the two distances', right: false, fb: '🤔 Distance = |a − b|, not a × b. Subtract then take absolute value.' },
              ]},
            { q: 'Temperature swing: low −8°C, high 15°C. The range (difference) is…',
              choices: [
                { label: '23°C — |15 − (−8)| = 23', right: true, fb: '🎉 15 + 8 = 23. Absolute value distance between the two temperatures.' },
                { label: '7°C', right: false, fb: '🤔 15 − 8 = 7 only if the low were +8. But it\'s −8, so 15 − (−8) = 15 + 8.' },
                { label: '−23°C', right: false, fb: '🤔 Temperature RANGE is always positive — it\'s a distance, not a direction. Use absolute value.' },
              ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `You've explored the dark side of the number line: numbers below zero, zero pairs, the backwards film, and distance-without-direction. Time to teach it and earn the diamond.` },
          { t: 'teach',
            prompt: 'A classmate says "negative times negative being positive is just a made-up rule with no meaning." Convince them it makes real sense.',
            placeholder: 'Imagine filming a draining tank and playing it backwards...',
            keywords: [
              ['negative', 'minus', 'below zero'],
              ['reverse', 'backwards', 'opposite', 'direction', 'rewind', 'flip'],
              ['positive', 'pattern', 'fills', 'cancel'],
            ],
            hint: 'use the reversal / backwards-film idea (or the falling pattern) in your own words' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     📐 GEOMETRY — ANGLES & TRIANGLES
     ═════════════════════════════════════════════ */
  'geometry': {
    worldId: 'myp-geometry',
    icon: '📐',
    name: 'Angles & Triangles',
    grade: 'Grade 7 · MYP',
    accent: '#8E24AA', dark: '#4A148C', bg: '#F3E5F5',
    professions: ['🏛️ Architects', '✈️ Pilots', '🏗️ Civil Engineers', '🎬 3D Animators', '🌍 Surveyors', '🪑 Carpenters'],
    topics: [
      {
        id: 'what-is-angle', icon: '🚪', title: 'What Is an Angle, Really?', sub: 'The amount of turn',
        blocks: [
          { t: 'story', html: `A skateboarder lands a "360". A door opens "just a crack". A clock's hands sweep from 12 to 3. None of these mention length, area, or size — yet all three are measuring the <em>same kind of thing</em>. What is it?` },
          { t: 'think', q: 'What do the 360, the door crack, and the clock hands all measure?',
            choices: [
              { label: 'An amount of TURN — rotation, measured in degrees', right: true, fb: '🎉 An angle is not a shape or a length: it is a quantity of turning. 360° = one full spin.' },
              { label: 'How long something is', right: false, fb: '🤔 A door opened "a crack" and opened wide is the SAME door — same length. What changed?' },
              { label: 'How fast something moves', right: false, fb: '🤔 A door opened slowly to halfway and one flung quickly to halfway end at the same angle. Speed isn\'t it.' },
            ] },
          { t: 'reveal', html: `An <strong>angle is an amount of turn</strong>. Why 360 for a full circle? Ancient Babylonian astronomers watched the sky shift roughly one step per day for ~360 days a year — and 360 is divisible by 2, 3, 4, 5, 6, 8, 9, 10, 12… making fractions of a turn beautifully clean. Quarter turn = <code>90°</code> (the "right" angle), half turn = <code>180°</code> (a straight line — because turning halfway leaves you facing exactly backwards).` },
          { t: 'key', html: `Angle = amount of turn. 360° full spin · 180° half turn (straight line) · 90° quarter turn (right angle). Less than 90° is acute, between 90° and 180° is obtuse.` },
          { t: 'fillblank', before: 'The hour hand moves from 12 to 6. That is half the clock face =', blank: '180', after: '°. (A straight line!)', hint: '360° ÷ 2 = ?', goodFb: '🎉 Half a turn = 180°. The hands point in opposite directions — a straight line.', badFb: '🤔 Half of a full 360° turn is?' },
          { t: 'stepwise', title: '🕒 Clock angles', steps: [
            'A full clock face = <strong>360°</strong> (one complete turn).',
            'Each hour mark = 360° ÷ 12 = <strong>30°</strong> per hour.',
            'From 12 to 3 = 3 marks × 30° = <strong>90°</strong> (quarter turn — a right angle).',
            '✅ From 12 to 5 = 5 × 30° = <strong>150°</strong> (obtuse). The clock is a built-in protractor.',
          ]},
          { t: 'try', q: 'A skateboarder does a "540". Where do they end up facing?',
            choices: [
              { label: 'Backwards — 540° = 360° + 180°: one full spin plus a half turn', right: true, fb: '🎉 One whole rotation brings them back to start; the extra 180° flips them to face backwards. Riders call it "landing switch".' },
              { label: 'Forwards — every trick ends facing forwards', right: false, fb: '🤔 Subtract the full spin: 540 − 360 = 180 leftover. What does a 180° turn do to where you face?' },
              { label: 'Sideways', right: false, fb: '🤔 Sideways would be 90° leftover (a 450). Here the leftover is 540 − 360 = 180°.' },
            ] },
          { t: 'drill', qs: [
            { q: 'A door opens 270°. What type of angle is that?',
              choices: [
                { label: 'Reflex — more than 180°', right: true, fb: '🎉 270° > 180° so it\'s a reflex angle. The door has swept past straight.' },
                { label: 'Obtuse — between 90° and 180°', right: false, fb: '🤔 Obtuse stops at 180°. 270° keeps going past the straight line.' },
                { label: 'Right angle', right: false, fb: '🤔 90° is a right angle. 270° is three times that — a reflex angle.' },
              ]},
            { q: 'An acute angle is always…',
              choices: [
                { label: 'Less than 90°', right: true, fb: '🎉 Acute = "sharp" — always less than a right angle.' },
                { label: 'Exactly 90°', right: false, fb: '🤔 Exactly 90° is called a right angle, not acute.' },
                { label: 'Between 90° and 180°', right: false, fb: '🤔 That range is obtuse. Acute means strictly less than 90°.' },
              ]},
            { q: 'How many degrees does the minute hand sweep in 20 minutes?',
              choices: [
                { label: '120° — 20 minutes is 1/3 of the clock face', right: true, fb: '🎉 60 minutes = 360°, so 1 minute = 6°. 20 × 6° = 120°.' },
                { label: '20°', right: false, fb: '🤔 Each minute mark is 6°, not 1°. 20 × 6° = ?' },
                { label: '60°', right: false, fb: '🤔 That\'s 10 minutes (10 × 6°). 20 minutes sweeps twice as far.' },
              ]},
          ]},
        ],
      },
      {
        id: 'angle-pairs', icon: '✂️', title: 'Angle Pairs', sub: 'Scissors never lie',
        blocks: [
          { t: 'story', html: `Open a pair of scissors and look at the two pairs of angles around the pivot: the angle between the blades, and the angle between the handles. Open the blades wider — the handle angle grows too. Snap them nearly shut — both shrink together. The two angles seem to be… <em>communicating</em>.` },
          { t: 'think', q: 'Why is the blade angle ALWAYS exactly equal to the handle angle?',
            choices: [
              { label: 'Both lines pass straight through the pivot, so opposite angles must match', right: true, fb: '🎉 "Vertically opposite angles are equal." Each blade-line is straight (180°), which locks the opposite angles together.' },
              { label: 'Scissors are manufactured that way', right: false, fb: '🤔 Cross ANY two straight sticks — same result. It\'s not engineering, it\'s geometry. What does each straight stick guarantee about angles along it?' },
              { label: 'Coincidence', right: false, fb: '🤔 Try it ten times — it never fails. In math, "never fails" means there\'s a reason hiding. Each straight line totals 180°…' },
            ] },
          { t: 'reveal', html: `Here is the full logic, three steps long: a straight line is a half-turn, so angles along it sum to <code>180°</code>. Call the blade angle <em>b</em> and one side angle <em>s</em>: then <em>b + s = 180</em> (one straight line) and <em>s + handle = 180</em> (the other straight line). Subtract: <strong>b = handle</strong>. You just did your first <em>proof</em> — a fact forced to be true forever.` },
          { t: 'key', html: `Angles on a straight line sum to 180°. When two lines cross, vertically opposite angles are EQUAL — and that's provable, not just observable.` },
          { t: 'fillblank', before: 'Two lines cross. One angle is 65°. Its neighbour on the straight line is', blank: '115', after: '°. (Supplementary angles sum to 180°.)', hint: '180 − 65 = ?', goodFb: '🎉 65 + 115 = 180°. They sit on a straight line.', badFb: '🤔 Angles on a straight line sum to 180°. 180 − 65 = ?' },
          { t: 'stepwise', title: '🛣️ The road crossing', steps: [
            'Two straight roads cross. One angle is <strong>110°</strong>.',
            'Its neighbour on the straight line: 180° − 110° = <strong>70°</strong>.',
            'Its vertically opposite angle = <strong>110°</strong> (opposite = equal).',
            '✅ All four angles known: 110°, 70°, 110°, 70°. Check: 110+70+110+70 = 360° ✓',
          ]},
          { t: 'try', q: 'Two lines cross. One of the four angles is 35°. What are the other three?',
            choices: [
              { label: '35°, 145°, 145°', right: true, fb: '🎉 Opposite twin = 35°; neighbours = 180 − 35 = 145° each. Check: 35+35+145+145 = 360° — a full turn around the point!' },
              { label: '35°, 35°, 35°', right: false, fb: '🤔 All four equal would need 4 × 35 = 140° around the point — but a full turn is 360°. The neighbours must pick up the slack.' },
              { label: '55°, 55°, 215°', right: false, fb: '🤔 55 would pair with 35 to make 90° — but a straight LINE needs 180°, not 90°. What plus 35 gives 180?' },
            ] },
          { t: 'drill', qs: [
            { q: 'Lines AB and CD cross at point P. Angle APD = 48°. What is angle APC?',
              choices: [
                { label: '132° — supplementary (on the same straight line)', right: true, fb: '🎉 APD and APC sit on straight line CD: 48 + 132 = 180°.' },
                { label: '48° — vertically opposite', right: false, fb: '🤔 CPB would be 48° (vertically opposite). APC is the neighbour on the straight line: 180 − 48.' },
                { label: '90° — they always make a right angle', right: false, fb: '🤔 Only when the crossing lines are perpendicular. Here one angle is 48°, not 90°.' },
              ]},
            { q: 'A straight road is crossed by two parallel lines. Angle between the road and line 1 is 70°. Angle between road and line 2 is…',
              choices: [
                { label: '70° — corresponding angles on parallel lines are equal', right: true, fb: '🎉 Parallel lines cut by a transversal give equal corresponding (and alternate) angles.' },
                { label: '110° — supplementary to 70°', right: false, fb: '🤔 110° is the co-interior angle on the same side. Corresponding angles (same side, same position) are equal.' },
                { label: 'It depends on the lines', right: false, fb: '🤔 For parallel lines it\'s definite — that\'s what "parallel" guarantees. Corresponding angles always match.' },
              ]},
            { q: 'A straight line and an angle of 42° sit together. The other angle on the line is…',
              choices: [
                { label: '138°', right: true, fb: '🎉 180 − 42 = 138°. Angles on a straight line sum to 180° every time.' },
                { label: '48°', right: false, fb: '🤔 48° would be the complement (sums to 90°). Straight line needs 180°, not 90°.' },
                { label: '42°', right: false, fb: '🤔 Equal angles there would need each to be 90°. 180 − 42 ≠ 42.' },
              ]},
          ]},
        ],
      },
      {
        id: 'triangle-sum', icon: '🔺', title: 'The 180° Secret', sub: 'Every triangle ever drawn',
        blocks: [
          { t: 'story', html: `Draw any triangle — long and thin, short and fat, perfectly even. Tear off its three corners and place them side by side, tips touching. Something eerie happens: the three corners <strong>always form a perfectly straight line</strong>. Every triangle. Every time. Since the beginning of triangles.` },
          { t: 'think', q: 'The three torn corners always line up straight. What does that prove?',
            choices: [
              { label: 'The three angles of ANY triangle sum to exactly 180°', right: true, fb: '🎉 A straight line is 180°, and the corners tile it perfectly — so they must total 180°. Universal law, zero exceptions.' },
              { label: 'It only works for neat, symmetric triangles', right: false, fb: '🤔 Tear up the ugliest triangle you can draw — the corners still make a straight line. The law plays no favourites.' },
              { label: 'Triangles sum to 360° like a full turn', right: false, fb: '🤔 360° would be a full circle of corners. The torn pieces form a STRAIGHT line — half a turn. How many degrees is that?' },
            ] },
          { t: 'reveal', html: `The <strong>Triangle Angle Sum</strong>: the interior angles of every triangle total exactly <code>180°</code>. This gives you x-ray vision: know two angles, and the third has nowhere to hide — it must be <code>180 − (a + b)</code>. Surveyors who can't reach a mountain peak measure two angles from the valley and compute the third from their desk.` },
          { t: 'key', html: `Triangle angles always sum to 180°. Two known angles reveal the third: c = 180 − a − b. This single fact underpins navigation, surveying, and astronomy.` },
          { t: 'fillblank', before: 'Triangle angles: 72° and 53°. The third angle is', blank: '55', after: '°.', hint: '180 − 72 − 53 = ?', goodFb: '🎉 72 + 53 + 55 = 180°. ✓', badFb: '🤔 All three must total 180°. 180 − 72 − 53 = ?' },
          { t: 'stepwise', title: '⛰️ The unreachable peak', steps: [
            'Two surveyors stand in a valley, measuring angles UP to a mountain peak.',
            'Angle from station 1 = <strong>67°</strong>. Angle from station 2 = <strong>48°</strong>.',
            'Third angle (at the peak) = 180° − 67° − 48° = <strong>65°</strong>.',
            '✅ Nobody climbed the peak. Triangle sum did the climbing for them.',
          ]},
          { t: 'try', q: 'A right triangle (one angle = 90°) has another angle of 35°. The third angle is…',
            choices: [
              { label: '55° — because 90 + 35 + 55 = 180', right: true, fb: '🎉 The two non-right angles of a right triangle always share the leftover 90°. 35 + 55 = 90. ✓' },
              { label: '65°', right: false, fb: '🤔 Check the total: 90 + 35 + 65 = 190°. Too much turn! The three must total exactly 180.' },
              { label: 'Impossible to know without measuring', right: false, fb: '🤔 That\'s the magic — you never need to measure the third. 180 − 90 − 35 = ?' },
            ] },
          { t: 'drill', qs: [
            { q: 'A triangle has angles x, 2x, and 3x. Find x.',
              choices: [
                { label: 'x = 30° — since x + 2x + 3x = 6x = 180°', right: true, fb: '🎉 6x = 180, so x = 30°. The angles are 30°, 60°, and 90° — a right triangle!' },
                { label: 'x = 60°', right: false, fb: '🤔 If x = 60, then 60 + 120 + 180 = 360 — too much. Set 6x = 180 and solve.' },
                { label: 'x = 45°', right: false, fb: '🤔 Check: 45 + 90 + 135 = 270° ≠ 180. Try 6x = 180.' },
              ]},
            { q: 'An exterior angle of a triangle is 115°. The two non-adjacent interior angles sum to…',
              choices: [
                { label: '115° — exterior angle equals the sum of remote interior angles', right: true, fb: '🎉 The exterior angle theorem: exterior = sum of the two far interior angles. Always.' },
                { label: '65° — it\'s supplementary to 115°', right: false, fb: '🤔 65° is the ADJACENT interior angle (180 − 115). The other two remote angles together equal the exterior angle.' },
                { label: 'Impossible without more info', right: false, fb: '🤔 One measurement is enough! The exterior angle theorem gives the sum of the two remote angles directly.' },
              ]},
            { q: 'Triangle sides: 40 m, 75 m, and 65 m. The largest angle is opposite which side?',
              choices: [
                { label: 'The 75 m side — the longest side is opposite the largest angle', right: true, fb: '🎉 In any triangle: longer side = larger opposite angle. The relationship is direct.' },
                { label: 'The 40 m side', right: false, fb: '🤔 The shortest side is opposite the SMALLEST angle. The largest angle faces the longest side.' },
                { label: 'The 65 m side', right: false, fb: '🤔 65 is the middle length — so it\'s opposite the middle angle. The LARGEST faces the LONGEST.' },
              ]},
          ]},
        ],
      },
      {
        id: 'triangle-types', icon: '🌉', title: 'Why Triangles Rule', sub: 'The unsquashable shape',
        blocks: [
          { t: 'story', html: `Build a square frame from four sticks and push its corner: it <em>leans</em> into a diamond shape — the sides didn't change, but the shape collapsed. Now build a triangle from three sticks and push as hard as you like. It <strong>refuses to budge</strong>. Now look at any bridge, crane, or electricity pylon: triangles everywhere.` },
          { t: 'think', q: 'Why can a square lean while a triangle cannot?',
            choices: [
              { label: 'Three fixed side lengths allow only ONE possible triangle — there is no other shape to lean into', right: true, fb: '🎉 That\'s rigidity. A square with fixed sides can flex through endless parallelogram shapes; a triangle\'s three sides lock its three angles completely.' },
              { label: 'Triangles are heavier', right: false, fb: '🤔 Same sticks, fewer of them — the triangle is actually lighter. Think about how many different shapes each frame could form.' },
              { label: 'Squares are weak only when made badly', right: false, fb: '🤔 Even a perfect square frame leans — its angles are free to change while sides stay fixed. What fixes a triangle\'s angles?' },
            ] },
          { t: 'reveal', html: `Three side lengths determine a triangle <strong>completely</strong> — its angles come included, no choices left. Engineers call this <strong>triangulation</strong>: brace any structure with diagonals (turning squares into pairs of triangles) and it cannot deform. The triangle family: <strong>equilateral</strong> (3 equal sides, all angles 60°), <strong>isosceles</strong> (2 equal sides, 2 equal angles), <strong>scalene</strong> (all different). One more law: any two sides together must out-reach the third — or the sticks can't even touch.` },
          { t: 'key', html: `Three sides fix a triangle's shape forever — that rigidity holds up bridges, cranes, and roofs. Equilateral = all 60°. Isosceles = the two base angles match.` },
          { t: 'fillblank', before: 'An equilateral triangle (all sides equal) has all three angles equal. Each angle =', blank: '60', after: '°.', hint: '180° ÷ 3 = ?', goodFb: '🎉 180 ÷ 3 = 60°. Equal sides force equal angles.', badFb: '🤔 Three equal angles must share 180° equally. 180 ÷ 3 = ?' },
          { t: 'stepwise', title: '🗼 Pylon engineering', steps: [
            'A square frame: push one corner → it <em>leans</em>. The angles change even though sides don\'t.',
            'A triangle frame: push as hard as you like → it <strong>refuses to move</strong>.',
            'Why? Three fixed side lengths allow ONLY ONE possible triangle. No leeway left.',
            '✅ Engineers call this rigidity. Every bridge, crane, and tower uses it — triangles that cannot be squashed.',
          ]},
          { t: 'try', q: 'An isosceles triangle has a top angle of 40°. What are the two base angles?',
            choices: [
              { label: '70° each — they share 180 − 40 = 140 equally', right: true, fb: '🎉 Isosceles base angles are twins: 140 ÷ 2 = 70° each. Check: 40 + 70 + 70 = 180. ✓' },
              { label: '40° each — all angles match the top', right: false, fb: '🤔 That totals 120°, missing 60. Only EQUILATERAL triangles have three matching angles. Here just the two base angles match.' },
              { label: '140° each', right: false, fb: '🤔 140 + 140 + 40 = 320° — nearly two triangles\' worth! The two bases SHARE 140 between them.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Which set of side lengths CANNOT form a triangle?',
              choices: [
                { label: '3, 4, 8 — because 3 + 4 = 7 < 8', right: true, fb: '🎉 Triangle inequality: any two sides must together exceed the third. 3 + 4 = 7 can\'t reach 8 — they fall short.' },
                { label: '5, 5, 5', right: false, fb: '🤔 That\'s a perfect equilateral triangle. 5 + 5 > 5 easily.' },
                { label: '6, 8, 10', right: false, fb: '🤔 6 + 8 = 14 > 10. And it\'s a right triangle (the 3-4-5 family scaled ×2)!' },
              ]},
            { q: 'An isosceles triangle has base angles of 55° each. The top angle is…',
              choices: [
                { label: '70° — 180 − 55 − 55', right: true, fb: '🎉 The two base angles use up 110°. The top takes the remaining 70°.' },
                { label: '55° — all three match', right: false, fb: '🤔 If all three are 55°, total = 165° ≠ 180°. Only base angles are equal in isosceles.' },
                { label: '110°', right: false, fb: '🤔 110° is the total of BOTH base angles. The top angle alone = 180 − 110 = 70°.' },
              ]},
            { q: 'A triangle has ONE angle greater than 90°. What type is it?',
              choices: [
                { label: 'Obtuse — one angle > 90°', right: true, fb: '🎉 Obtuse triangle: one angle exceeds 90° (and the other two must be acute, totalling less than 90° between them).' },
                { label: 'Right triangle', right: false, fb: '🤔 Right triangle has EXACTLY one 90° angle. Here the angle exceeds 90°.' },
                { label: 'Equilateral', right: false, fb: '🤔 Equilateral triangles have all angles = 60°. No angle can exceed 90°.' },
              ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `Turns, crossing lines, the 180° secret, and the unsquashable triangle — you've proven things now, not just noticed them. Teach it to own it.` },
          { t: 'teach',
            prompt: 'Explain to a younger student why the angles of every triangle add up to 180° — and one real place engineers cash in on triangles.',
            placeholder: 'Tear the three corners off any triangle and...',
            keywords: [
              ['180', 'straight line', 'half turn'],
              ['corner', 'angle', 'tear', 'sum', 'add'],
              ['bridge', 'rigid', 'strong', 'engineer', 'tower', 'crane', 'collapse', 'squash'],
            ],
            hint: 'mention the straight line / 180°, the corners adding up, and a real structure' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     🎲 STATISTICS & PROBABILITY
     ═════════════════════════════════════════════ */
  'statistics': {
    worldId: 'myp-statistics',
    icon: '🎲',
    name: 'Probability',
    grade: 'Grade 7 · MYP',
    accent: '#F4511E', dark: '#BF360C', bg: '#FBE9E7',
    professions: ['📊 Data Scientists', '🩺 Doctors', '🏦 Insurance Analysts', '🌦️ Forecasters', '🎮 Game Designers', '⚽ Coaches'],
    topics: [
      {
        id: 'measuring-chance', icon: '🌦️', title: 'Measuring Chance', sub: 'A number for "maybe"',
        blocks: [
          { t: 'story', html: `"Will it rain tomorrow?" Your grandmother says <em>"perhaps"</em>. The weather app says <strong>"70%"</strong>. Both are talking about the same unknowable future — but one of them can be compared, bet on, and checked later. Humanity needed 2,000 years to invent a NUMBER for maybe.` },
          { t: 'think', q: 'A probability of 0 means…? And 1 means…?',
            choices: [
              { label: '0 = impossible, 1 = certain — everything else lives in between', right: true, fb: '🎉 That\'s the whole scale. 0.5 = perfect coin-flip uncertainty; 0.7 = rain is likely but no promise.' },
              { label: '0 = it hasn\'t happened yet, 1 = it happened once', right: false, fb: '🤔 Probability measures the future\'s likelihood, not history\'s count. What\'s the chance the sun rises tomorrow — and what number deserves "no chance at all"?' },
              { label: 'The numbers are just vibes', right: false, fb: '🤔 They\'re checkable! Of all days a good forecaster says "70%", it should rain on about 70 in 100 of them. Vibes can\'t be audited; probabilities can.' },
            ] },
          { t: 'reveal', html: `<strong>Probability</strong> squeezes all uncertainty onto a ruler from <code>0</code> (impossible) to <code>1</code> (certain). For equally likely outcomes: <code>P = favourable ÷ total</code>. A fair die: P(rolling 5) = 1/6 ≈ 0.17. Drawing a red card: 26/52 = 0.5. The moment "maybe" became a number, insurance, medicine trials, and weather forecasting became possible.` },
          { t: 'key', html: `Probability lives between 0 (impossible) and 1 (certain). With equally likely outcomes: P = favourable outcomes ÷ total outcomes.` },
          { t: 'fillblank', before: 'A bag: 3 red, 7 blue marbles. P(red) =', blank: '3/10', after: '= 0.3. (Three favourable out of ten total.)', hint: 'favourable ÷ total = 3 ÷ 10', goodFb: '🎉 3/10 — three chances in ten.', badFb: '🤔 Count: 3 red out of 3 + 7 = 10 total. P = 3 ÷ 10.' },
          { t: 'stepwise', title: '🎯 The spinner', steps: [
            'Spinner: 8 equal slices — 3 red, 4 blue, 1 gold. Total outcomes = <strong>8</strong>.',
            'P(gold) = 1 ÷ 8 = <strong>0.125</strong>. One slice out of eight.',
            'P(red) = 3 ÷ 8 = <strong>0.375</strong>.',
            '✅ P(NOT blue) = 1 − P(blue) = 1 − 4/8 = <strong>0.5</strong>. Every probability trick in one spinner.',
          ]},
          { t: 'try', q: 'A bag holds 5 green and 3 yellow marbles. P(green) = ?',
            choices: [
              { label: '5/8 — five favourable out of eight total', right: true, fb: '🎉 5 greens among 8 marbles: 0.625. Better than a coin flip but far from certain.' },
              { label: '5/3 — greens versus yellows', right: false, fb: '🤔 5/3 is bigger than 1 — more certain than certain?! Impossible. Divide by ALL the marbles, not just the rivals.' },
              { label: '1/2 — it\'s either green or it isn\'t', right: false, fb: '🤔 "Two outcomes" doesn\'t mean "equally likely"! By that logic you\'d win every lottery half the time. Count the marbles.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Roll a fair die. P(even number) = ?',
              choices: [
                { label: '1/2 — three even faces (2, 4, 6) out of six', right: true, fb: '🎉 3/6 = 1/2. Even and odd are equally likely on a fair die.' },
                { label: '1/6 — there\'s only one even', right: false, fb: '🤔 Even numbers on a die: 2, 4, 6 — that\'s three of them, not one.' },
                { label: '2/3', right: false, fb: '🤔 4 faces out of 6 would be 2/3. Only 3 faces are even: 2, 4, 6.' },
              ]},
            { q: 'Pick a letter from MATHEMATICS at random. P(vowel) = ?',
              choices: [
                { label: '4/11 — letters A, E, A, I = 4 vowels in 11 letters', right: true, fb: '🎉 M-A-T-H-E-M-A-T-I-C-S = 11 letters. Vowels: A, E, A, I = 4. P = 4/11.' },
                { label: '3/11 — three distinct vowels A, E, I', right: false, fb: '🤔 We count POSITIONS, not distinct vowels. A appears twice — both positions are favourable. Count all vowel positions: A(2), E(1), I(1) = 4.' },
                { label: '1/2', right: false, fb: '🤔 Nearly half, but not exactly. Count carefully: 11 total, 4 vowels.' },
              ]},
            { q: 'What is the probability of an IMPOSSIBLE event?',
              choices: [
                { label: '0 — no favourable outcomes', right: true, fb: '🎉 P(impossible) = 0. Favourable = 0, so 0 ÷ total = 0.' },
                { label: '1', right: false, fb: '🤔 P = 1 means CERTAIN to happen. Impossible is the opposite end of the scale.' },
                { label: 'Cannot be defined', right: false, fb: '🤔 It is perfectly defined: 0 favourable outcomes means probability = 0. Zero is a valid, useful answer.' },
              ]},
          ]},
        ],
      },
      {
        id: 'sample-space', icon: '🎲', title: 'The Sample Space', sub: 'Count before you bet',
        blocks: [
          { t: 'story', html: `Roll two dice and add them. Eleven possible totals: 2 through 12. A gambler shrugs: "Eleven outcomes, all equal — each has chance 1/11." He bets accordingly… and steadily loses everything on totals of 2 and 12. The dice are fair. His COUNTING wasn't.` },
          { t: 'think', q: 'Why does a total of 7 come up far more often than a total of 2?',
            choices: [
              { label: 'There are SIX ways to roll 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) but only ONE way to roll 2 (1+1)', right: true, fb: '🎉 The true sample space is the 36 ordered pairs, not the 11 totals. P(7) = 6/36; P(2) = 1/36. Seven is six times likelier!' },
              { label: 'Dice prefer middle numbers', right: false, fb: '🤔 Dice have no preferences — each FACE is equally likely. But how many face-COMBINATIONS produce each total? List them for 7 and for 2.' },
              { label: 'It doesn\'t — all totals are equally likely', right: false, fb: '🤔 That was the gambler\'s exact mistake. List every way to make 2, then every way to make 7. Count them honestly.' },
            ] },
          { t: 'reveal', html: `The <strong>sample space</strong> is the complete list of equally likely outcomes — and finding it is 90% of every probability problem. Two dice = <code>6 × 6 = 36</code> ordered pairs. Probability only works when you divide by outcomes that are <em>genuinely equally likely</em>. The totals 2–12 are not; the 36 pairs are.` },
          { t: 'key', html: `Before computing any probability, build the FULL sample space of equally likely outcomes. Multi-step events multiply: 6 faces × 6 faces = 36 outcomes.` },
          { t: 'fillblank', before: 'Flip a coin and roll a die. Total outcomes in the sample space =', blank: '12', after: '. (2 coin results × 6 die faces.)', hint: '2 × 6 = ?', goodFb: '🎉 12 equally likely outcomes — the full sample space.', badFb: '🤔 Coin has 2 outcomes, die has 6. Multiply for combined sample space.' },
          { t: 'stepwise', title: '👕 The outfit count', steps: [
            '3 shirts (red, blue, green) × 4 trousers = total outfits?',
            'List a few: (red, trousers1), (red, t2), (red, t3), (red, t4) — already 4 just for red.',
            '3 shirts × 4 = <strong>12 equally likely outfits</strong> when grabbing blindly.',
            '✅ P(lucky shirt AND lucky trousers) = 1/12. One favourable pair out of the full sample space.',
          ]},
          { t: 'try', q: 'Flip two fair coins. What is P(exactly one head)?',
            choices: [
              { label: '1/3 — the outcomes are 0, 1, or 2 heads', right: false, fb: '🤔 The gambler\'s trap again! Those three totals are NOT equally likely. List the actual flips: HH, HT, TH, TT.' },
              { label: '1/2 — two of the four outcomes (HT and TH) have exactly one head', right: true, fb: '🎉 Sample space {HH, HT, TH, TT}: each 1/4. Exactly one head happens 2 ways out of 4 = 1/2.' },
              { label: '1/4', right: false, fb: '🤔 1/4 is the chance of one SPECIFIC pattern like HT. But TH also gives exactly one head — count both.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Roll two dice. How many ways make a total of 3?',
              choices: [
                { label: '2 — (1+2) and (2+1)', right: true, fb: '🎉 Both orders count as different outcomes since the dice are distinguishable. P(total 3) = 2/36 = 1/18.' },
                { label: '1 — only 1+2', right: false, fb: '🤔 Die 1 showing 1 and Die 2 showing 2 is a different outcome from Die 1 showing 2, Die 2 showing 1. Both are valid.' },
                { label: '3', right: false, fb: '🤔 Can you write three distinct ordered pairs that sum to 3 using numbers 1–6? There are only two: (1,2) and (2,1).' },
              ]},
            { q: 'Bag: 4 red, 3 blue, 2 green. P(NOT red) = ?',
              choices: [
                { label: '5/9 — blue + green = 5 out of 9 total', right: true, fb: '🎉 P(not red) = (3+2)/9 = 5/9. Or: 1 − 4/9 = 5/9. Both routes same answer.' },
                { label: '4/9', right: false, fb: '🤔 4/9 is P(red). NOT red means everything else: 3 blue + 2 green = 5 out of 9.' },
                { label: '2/9', right: false, fb: '🤔 2/9 is P(green). "Not red" includes BOTH blue AND green.' },
              ]},
            { q: 'Choose a month at random. P(month has 31 days) = ?',
              choices: [
                { label: '7/12 — January, March, May, July, August, October, December', right: true, fb: '🎉 7 months have 31 days out of 12 total months.' },
                { label: '1/2', right: false, fb: '🤔 6/12 would be 1/2. Count the 31-day months: Jan, Mar, May, Jul, Aug, Oct, Dec — that\'s 7.' },
                { label: '4/12', right: false, fb: '🤔 4 is the number of months with exactly 30 days (Apr, Jun, Sep, Nov). The question asks for 31-day months.' },
              ]},
          ]},
        ],
      },
      {
        id: 'experiment-vs-theory', icon: '🧪', title: 'Theory Meets Reality', sub: 'The law of large numbers',
        blocks: [
          { t: 'story', html: `Theory says a fair coin lands heads with probability 1/2. You flip 10 times and get… 7 heads. Is the theory broken? You keep going. After 100 flips: 56 heads. After 1,000: 511. After 10,000: 5,023. Something is pulling the results toward the prediction — slowly, but unstoppably.` },
          { t: 'think', q: '7 heads in 10 flips — does that prove the coin is unfair?',
            choices: [
              { label: 'No — small samples swing wildly; only LONG-RUN frequency converges to the true probability', right: true, fb: '🎉 That\'s the Law of Large Numbers: 7/10 is ordinary luck, while 7,000/10,000 would scream "rigged!"' },
              { label: 'Yes — 7 ≠ 5, so the theory failed', right: false, fb: '🤔 Probability never promised 5 out of every 10. It promises the RATIO settles toward 0.5 as flips pile up. Watch what happened by 10,000.' },
              { label: 'The coin "owes" you tails now, to even things out', right: false, fb: '🤔 The famous gambler\'s fallacy! Coins have no memory and no debts — flip 11 is still 50/50. The ratio evens out by drowning early luck in volume, not by repaying it.' },
            ] },
          { t: 'reveal', html: `<strong>Theoretical probability</strong> comes from counting the sample space; <strong>experimental probability</strong> comes from actually doing it. The <strong>Law of Large Numbers</strong> bridges them: as trials grow, the experimental ratio homes in on the theoretical value. This is exactly how insurance companies survive — one driver's year is unpredictable, but a million drivers' years are almost clockwork.` },
          { t: 'key', html: `Short runs are wild; long runs are tame. Experimental results converge to theoretical probability as trials increase — and past flips never influence the next one.` },
          { t: 'fillblank', before: 'Roll a fair die 120 times. Expected number of sixes =', blank: '20', after: '. (Theoretical probability 1/6 × 120 trials.)', hint: '120 ÷ 6 = ?', goodFb: '🎉 1/6 of 120 = 20 expected sixes.', badFb: '🤔 P(six) = 1/6. Expected = 1/6 × 120 = ?' },
          { t: 'stepwise', title: '🏥 Why trials need to be big', steps: [
            'Drug trial: theory says it helps 60% of patients.',
            'Test on <strong>5 patients</strong>: results range from 0 to 5 cured — massive swing. One bad luck batch looks like failure.',
            'Test on <strong>5,000 patients</strong>: results settle near 3,000 cured — reliably near 60%.',
            '✅ Law of Large Numbers. Regulators demand large trials exactly because small samples lie. The math is the safeguard.',
          ]},
          { t: 'try', q: 'A die rolled 60 times shows a six 13 times (instead of the "expected" 10). The most reasonable conclusion is…',
            choices: [
              { label: 'Normal randomness — 13/60 is comfortably within small-sample wobble', right: true, fb: '🎉 Right. If 6,000 rolls gave six 1,300 times, suspect the die. At 60 rolls, this is everyday noise.' },
              { label: 'The die is definitely loaded', right: false, fb: '🤔 Three extra sixes in sixty rolls is well within ordinary luck. How would your suspicion change at 6,000 rolls with the same RATIO?' },
              { label: 'Sixes are now "hot" — bet on more sixes', right: false, fb: '🤔 Dice have no memory, no streaks, no mood. Each roll restarts at 1/6 forever.' },
            ] },
          { t: 'drill', qs: [
            { q: 'You flipped tails 6 times in a row. Probability the next flip is heads = ?',
              choices: [
                { label: '1/2 — each flip is independent; the coin has no memory', right: true, fb: '🎉 This is the gambler\'s fallacy trap. Past results never influence an independent future flip.' },
                { label: 'Greater than 1/2 — tails is "overdue"', right: false, fb: '🤔 Coins are not superstitious. Each flip is fresh. The coin has no idea about the previous six.' },
                { label: 'Less than 1/2 — tails is "hot"', right: false, fb: '🤔 No streaks in fair coins — no momentum, no heat. It\'s exactly 1/2 every single time.' },
              ]},
            { q: 'Experimental probability of heads after 1,000 flips = 0.53. What does this tell us?',
              choices: [
                { label: 'The coin is probably fair — 0.53 is close to 0.5 with small-sample noise', right: true, fb: '🎉 At 1,000 flips the result should be near 0.5. 0.53 is well within normal variation.' },
                { label: 'The coin is definitely biased toward heads', right: false, fb: '🤔 0.53 is only 3% above fair. With 1,000 flips you\'d need results much further from 0.5 to suspect bias.' },
                { label: 'We need to flip more times to know anything', right: false, fb: '🤔 1,000 flips IS a lot — it\'s enough to draw a cautious conclusion. And 0.53 looks very fair.' },
              ]},
            { q: 'A coin is flipped 10 times. The MOST likely individual result is…',
              choices: [
                { label: '5 heads, 5 tails — but other outcomes are also very possible', right: true, fb: '🎉 5-5 is the most probable single outcome, but it only happens ~25% of the time. The rest of the 75% is other splits.' },
                { label: 'Exactly 5 heads, guaranteed', right: false, fb: '🤔 Most likely ≠ guaranteed. In practice you\'ll often get 4, 6, or 7. The Law of Large Numbers only kicks in at large N.' },
                { label: '10 heads — statistics are random so anything is equally likely', right: false, fb: '🤔 Not equally likely. 10-0 is possible (probability 1/1024) but 5-5 is far more likely (252/1024).' },
              ]},
          ]},
        ],
      },
      {
        id: 'independent-events', icon: '🎰', title: 'Combined Events', sub: 'And means multiply',
        blocks: [
          { t: 'story', html: `A game show offers the jackpot if you do two things: flip heads (1/2), then roll a six (1/6). Contestants feel it's "about a 1-in-4 shot — both are pretty common." The show's accountant, smiling quietly, knows the house almost never pays. Who's right?` },
          { t: 'think', q: 'What is the real chance of heads AND a six?',
            choices: [
              { label: '1/12 — of the half who flip heads, only one-sixth also roll a six: 1/2 × 1/6', right: true, fb: '🎉 "AND" multiplies. Each extra requirement shrinks the winners: 12 contestants → 6 flip heads → just 1 rolls the six.' },
              { label: '1/8 — split the difference between 1/2 and 1/6', right: false, fb: '🤔 Probabilities don\'t average when you chain them. Imagine 12 players: how many survive the coin? Of those, how many survive the die?' },
              { label: '2/3 — add 1/2 + 1/6', right: false, fb: '🤔 Adding says doing BOTH is easier than doing either alone — clearly upside-down! Chaining requirements must make winning HARDER.' },
            ] },
          { t: 'reveal', html: `For <strong>independent events</strong> (neither affects the other), the chance both happen is the <strong>product</strong>: <code>P(A and B) = P(A) × P(B)</code>. Every multiplication shrinks the result, which is why long chains of "ands" get brutally unlikely — and why a lottery (matching six numbers in a row) is essentially a tax on hope. Flip side: P(at least one success) = 1 − P(all failures), often the fastest route to an answer.` },
          { t: 'key', html: `Independent events: multiply chances for "AND". Each added condition shrinks the probability. For "at least one", compute 1 − P(none).` },
          { t: 'fillblank', before: 'P(A) = 1/2, P(B) = 1/5, independent. P(A and B) =', blank: '1/10', after: '.', hint: '1/2 × 1/5 = ?', goodFb: '🎉 Multiply: 1/2 × 1/5 = 1/10.', badFb: '🤔 Independent events: AND = multiply. 1/2 × 1/5 = ?' },
          { t: 'stepwise', title: '🔐 Why long passwords win', steps: [
            '1-digit PIN: 10 possible digits. P(random guess) = 1/10.',
            '2-digit PIN: 10 × 10 = 100 combinations. P(guess) = 1/100.',
            '6-digit PIN: 10⁶ = <strong>1,000,000</strong> combinations. P(guess) = 0.000001.',
            '✅ Each extra independent digit multiplies the security by 10. Multiplication is the bodyguard of every password.',
          ]},
          { t: 'try', q: 'Rain tomorrow: 1/3. Your bus being late: 1/4 (independent). P(rain AND late bus) = ?',
            choices: [
              { label: '7/12 — add them', right: false, fb: '🤔 Adding made the double-misfortune MORE likely than rain alone (1/3 = 4/12). Both bad things together must be rarer than either.' },
              { label: '1/12 — multiply 1/3 × 1/4', right: true, fb: '🎉 Of the 1/3 of days with rain, 1/4 also have a late bus: 1/12 of all days get the double whammy.' },
              { label: '1/7', right: false, fb: '🤔 Close in size but no — multiply the fractions: 1/3 × 1/4. Numerators together, denominators together.' },
            ] },
          { t: 'drill', qs: [
            { q: 'P(A) = 0.4, P(B) = 0.5, independent. P(A AND B) = ?',
              choices: [
                { label: '0.2 — 0.4 × 0.5', right: true, fb: '🎉 Independent events multiply. 0.4 × 0.5 = 0.20.' },
                { label: '0.9 — 0.4 + 0.5', right: false, fb: '🤔 Adding gives P(A or B) when events are mutually exclusive. AND = multiply.' },
                { label: '0.1', right: false, fb: '🤔 Off by a factor of 2. 0.4 × 0.5 = 0.20, not 0.10.' },
              ]},
            { q: 'P(passing English) = 0.8, P(passing Maths) = 0.7 (independent). P(passing BOTH) = ?',
              choices: [
                { label: '0.56 — 0.8 × 0.7', right: true, fb: '🎉 0.8 × 0.7 = 0.56. More than half the students pass both.' },
                { label: '1.5 — add them', right: false, fb: '🤔 Probability can\'t exceed 1! AND = multiply, not add.' },
                { label: '0.75', right: false, fb: '🤔 0.75 is their average, not their joint probability. Multiply: 0.8 × 0.7.' },
              ]},
            { q: 'P(at least one head in two flips) = ?',
              choices: [
                { label: '3/4 — because P(no heads) = 1/4, so 1 − 1/4 = 3/4', right: true, fb: '🎉 P(TT) = 1/2 × 1/2 = 1/4. At least one head = 1 − 1/4 = 3/4. The complement shortcut!' },
                { label: '1/2', right: false, fb: '🤔 Sample space: HH, HT, TH, TT. "At least one head" = HH, HT, TH = 3 out of 4.' },
                { label: '1/4', right: false, fb: '🤔 1/4 is P(BOTH heads). "At least one" is a much looser condition — it includes HT and TH as well.' },
              ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `A number for maybe, honest counting, the long-run law, and the multiplication of "ands" — you now reason about uncertainty better than most adults. Teach it.` },
          { t: 'teach',
            prompt: 'Your friend lost 5 coin flips in a row and says "I\'m DUE a win — the next flip is almost certainly heads!" Set them straight, kindly.',
            placeholder: 'Coins have no memory, my friend. Here\'s why...',
            keywords: [
              ['memory', 'independent', 'no influence', 'fresh', 'each flip', 'every flip'],
              ['50', 'half', '1/2', 'same chance', 'equal'],
              ['long run', 'large', 'many', 'fallacy', 'luck', 'streak'],
            ],
            hint: 'mention that flips are independent / memoryless, the chance stays 50%, and what only happens in the long run' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     📡 THE PYTHAGOREAN THEOREM
     ═════════════════════════════════════════════ */
  'pythagorean': {
    worldId: 'myp-pythagorean',
    icon: '📡',
    name: 'Pythagoras',
    grade: 'Grade 8 · MYP',
    accent: '#3949AB', dark: '#1A237E', bg: '#E8EAF6',
    professions: ['🏗️ Architects', '📡 GPS Engineers', '🌍 Surveyors', '🎮 Game Developers', '🚒 Firefighters', '⚽ Groundskeepers'],
    topics: [
      {
        id: 'rope-stretchers', icon: '🪢', title: 'The Rope Stretchers', sub: 'Egypt\'s 3-4-5 secret',
        blocks: [
          { t: 'story', html: `Egypt, 4,500 years ago. After every Nile flood, field boundaries vanish and must be redrawn with <em>perfect square corners</em> — a crooked corner means a crooked pyramid. The royal surveyors ("rope stretchers") carry one tool: a loop of rope with <strong>12 equally spaced knots</strong>. With it, they conjure perfect right angles out of mud. How?` },
          { t: 'think', q: 'How does a 12-knot rope loop make a perfect right angle?',
            choices: [
              { label: 'Stretch it into a triangle with sides 3, 4, and 5 knots — the corner between 3 and 4 is forced to be square', right: true, fb: '🎉 3 + 4 + 5 = 12 knots. Three fixed side lengths allow exactly ONE triangle (remember rigidity?) — and this one has a perfect 90° corner built in.' },
              { label: 'Fold the rope in half twice', right: false, fb: '🤔 Folding finds midpoints, not angles. The trick uses the rope as a TRIANGLE with very special side lengths summing to 12…' },
              { label: 'It\'s impossible — you need a protractor', right: false, fb: '🤔 The pyramids\' corners are square to within 1/100 of a degree — built 4,000 years before protractors. The rope\'s 12 knots split into three special numbers…' },
            ] },
          { t: 'reveal', html: `The Egyptians knew the recipe — sides of <code>3, 4, 5</code> always produce a right angle — long before anyone knew <em>why</em>. Try the only-special-thing about these numbers: <code>3² + 4² = 9 + 16 = 25 = 5²</code>. The squares of the two short sides exactly fill the square of the longest. Carpenters still use 3-4-5 today to square up door frames and foundations.` },
          { t: 'key', html: `A 3-4-5 triangle always contains a perfect right angle — practical magic known for millennia. The hidden pattern: 3² + 4² = 5².` },
          { t: 'fillblank', before: 'Check 6-8-10: 6² + 8² = 36 + 64 =', blank: '100', after: '= 10². ✓ A right angle confirmed!', hint: '36 + 64 = ?', goodFb: '🎉 100 = 10². The 3-4-5 family scaled ×2 works perfectly.', badFb: '🤔 36 + 64 = ?' },
          { t: 'stepwise', title: '🪟 The carpenter\'s check', steps: [
            'Carpenter needs a square corner. Marks <strong>30 cm</strong> along one edge and <strong>40 cm</strong> along the other.',
            'Measures the diagonal between the two marks.',
            'If it\'s exactly <strong>50 cm</strong>: 30² + 40² = 900 + 1600 = 2500 = 50². ✓ Square!',
            '✅ Off by even 1 mm — the frame is adjusted. Pure 3-4-5 scaled ×10 saves thousands of buildings every day.',
          ]},
          { t: 'try', q: 'Which other triple also forces a right angle?',
            choices: [
              { label: '6, 8, 10 — it\'s 3-4-5 doubled', right: true, fb: '🎉 36 + 64 = 100. ✓ Scaling a right triangle keeps its angles — every multiple of 3-4-5 works. (5-12-13 is another famous family.)' },
              { label: '4, 5, 6', right: false, fb: '🤔 Test it: 16 + 25 = 41, but 6² = 36. No match — that corner is slightly wider than square.' },
              { label: '1, 2, 3', right: false, fb: '🤔 1 + 2 = 3 exactly — these "sides" collapse into a flat line. No triangle at all!' },
            ] },
          { t: 'drill', qs: [
            { q: 'A rectangle is 5 m × 12 m. What is its diagonal?',
              choices: [
                { label: '13 m — 5-12-13 is a Pythagorean triple', right: true, fb: '🎉 25 + 144 = 169 = 13². The diagonal of every 5×12 rectangle is exactly 13.' },
                { label: '17 m — 5 + 12', right: false, fb: '🤔 That\'s the perimeter of two sides. The diagonal goes corner to corner: square, add, root.' },
                { label: '√119 ≈ 10.9 m', right: false, fb: '🤔 144 − 25 = 119 would be if you subtracted. Add the squares: 25 + 144 = 169.' },
              ]},
            { q: 'Verify: does a triangle with sides 8, 15, 17 have a right angle?',
              choices: [
                { label: 'Yes — 64 + 225 = 289 = 17²', right: true, fb: '🎉 8² + 15² = 64 + 225 = 289 = 17². ✓ The 8-15-17 family.' },
                { label: 'No — 8 + 15 ≠ 17', right: false, fb: '🤔 The Pythagorean check uses SQUARES, not sums. 8² + 15² vs 17²?' },
                { label: 'Can\'t tell from side lengths alone', right: false, fb: '🤔 That\'s exactly what the theorem does — three lengths fully determine whether there\'s a right angle. Check a² + b² = c².' },
              ]},
            { q: 'Which Pythagorean triple is 3-4-5 scaled by 5?',
              choices: [
                { label: '15-20-25', right: true, fb: '🎉 3×5=15, 4×5=20, 5×5=25. Check: 225+400=625=25². ✓' },
                { label: '8-12-15', right: false, fb: '🤔 8 = 3+5, 12 = 4+8 — inconsistent scaling. Scale means MULTIPLY each by the same number: 3, 4, 5 all ×5.' },
                { label: '9-12-16', right: false, fb: '🤔 9=3×3, 12=4×3 — but 16 ≠ 5×3=15. The hypotenuse must also scale by 5: 5×5=25, not 16.' },
              ]},
          ]},
        ],
      },
      {
        id: 'squares-on-sides', icon: '🟦', title: 'Squares on the Sides', sub: 'Discovering a² + b² = c²',
        blocks: [
          { t: 'story', html: `Draw a right triangle. Now build an actual square on each of its three sides — a small one, a medium one, and a big one on the longest side (the <strong>hypotenuse</strong>, opposite the right angle). Greek mathematicians cut these squares from tiles and weighed them. The two smaller squares together <em>always</em> balanced the big one. Exactly. Every time.` },
          { t: 'think', q: 'Sides 6 and 8 hold squares of area 36 and 64. What is the area of the square on the hypotenuse?',
            choices: [
              { label: '100 — the two smaller squares\' areas pour together perfectly: 36 + 64', right: true, fb: '🎉 So the hypotenuse is √100 = 10. The 3-4-5 secret was one glimpse of a universal law about AREAS.' },
              { label: '48 — multiply 6 × 8', right: false, fb: '🤔 6 × 8 is the rectangle BETWEEN the sides (twice the triangle\'s area). The discovery is about the squares ON the sides: 36 and 64 combine how?' },
              { label: '14 — add the sides 6 + 8', right: false, fb: '🤔 Adding sides gives a fence length. The Greeks weighed AREAS: the 36-tile and the 64-tile together matched the big square exactly.' },
            ] },
          { t: 'reveal', html: `The <strong>Pythagorean Theorem</strong>: in any right triangle with legs <em>a</em>, <em>b</em> and hypotenuse <em>c</em>, <code>a² + b² = c²</code>. Why believe it forever? Take a big square and fill it with four identical right triangles two different ways: the leftover empty space is <em>c²</em> in one arrangement and <em>a² + b²</em> in the other. Same square, same triangles removed — the leftovers MUST be equal. No exceptions are possible.` },
          { t: 'key', html: `a² + b² = c² — the squares on the two legs together exactly equal the square on the hypotenuse. It's a law about AREAS, provable with four cut-out triangles.` },
          { t: 'fillblank', before: 'Right triangle: legs 9 and 40. Hypotenuse = √(81 + 1600) = √1681 =', blank: '41', after: 'cm.', hint: '41² = 1681. (9-40-41 is a Pythagorean triple.)', goodFb: '🎉 9-40-41 is a perfect triple. √1681 = 41.', badFb: '🤔 81 + 1600 = 1681. What number squared gives 1681? (Hint: try 41.)' },
          { t: 'stepwise', title: '📺 What "55 inch" means', steps: [
            'TV screen: <strong>48 inches wide</strong> and <strong>27 inches tall</strong>.',
            'The "size" is the diagonal — the hypotenuse of the rectangle.',
            'Apply: √(48² + 27²) = √(2304 + 729) = √3033.',
            '✅ √3033 ≈ <strong>55 inches</strong>. You\'ve been buying hypotenuses all along.',
          ]},
          { t: 'try', q: 'A right triangle has legs 5 and 12. The hypotenuse is…',
            choices: [
              { label: '13 — because 25 + 144 = 169 = 13²', right: true, fb: '🎉 You met the second famous family: 5-12-13. Builders love these whole-number triples.' },
              { label: '17 — add the legs', right: false, fb: '🤔 17 is the walk AROUND (the two legs); the hypotenuse is the shortcut ACROSS — it must be shorter than 17. Square, add, then un-square.' },
              { label: '60 — multiply the legs', right: false, fb: '🤔 5 × 12 mixes up area with length. The recipe is: square each leg, add, take the square root.' },
            ] },
          { t: 'drill', qs: [
            { q: 'A screen is 36 cm wide and 27 cm tall. Find the diagonal.',
              choices: [
                { label: '45 cm — 36² + 27² = 1296 + 729 = 2025 = 45²', right: true, fb: '🎉 The 3-4-5 family (×9): 27-36-45. Perfect.' },
                { label: '63 cm — 36 + 27', right: false, fb: '🤔 Adding sides gives perimeter not diagonal. Square, add, root.' },
                { label: '√63 ≈ 7.9 cm', right: false, fb: '🤔 That\'s far too small for a screen with 36 cm width! Did you subtract instead of add?' },
              ]},
            { q: 'An isosceles right triangle has legs of 7 cm each. Hypotenuse = ?',
              choices: [
                { label: '7√2 ≈ 9.9 cm', right: true, fb: '🎉 7² + 7² = 98. √98 = 7√2. Isosceles right triangles always have hypotenuse = leg × √2.' },
                { label: '14 cm — double the leg', right: false, fb: '🤔 7 + 7 = 14 is the sum of two legs, not the hypotenuse. 7² + 7² = 98, then take √.' },
                { label: '49 cm', right: false, fb: '🤔 49 = 7². The theorem says ADD the squares, THEN root: √(49 + 49) = √98 ≈ 9.9.' },
              ]},
            { q: 'A ramp rises 4 m over a horizontal distance of 3 m. What is the ramp\'s actual LENGTH?',
              choices: [
                { label: '5 m — classic 3-4-5 triangle', right: true, fb: '🎉 9 + 16 = 25 = 5². The ramp is 5 m long, the hypotenuse of a 3-4-5.' },
                { label: '7 m — 3 + 4', right: false, fb: '🤔 The ramp doesn\'t go horizontally then vertically. Its LENGTH is the hypotenuse: √(9 + 16).' },
                { label: '1 m — 4 − 3', right: false, fb: '🤔 Subtracting legs makes no sense for length. Square each, add, root: √(9 + 16) = ?' },
              ]},
          ]},
        ],
      },
      {
        id: 'missing-side', icon: '🪜', title: 'Finding the Missing Side', sub: 'The ladder problem',
        blocks: [
          { t: 'story', html: `A firefighter's ladder is exactly <strong>10 m</strong> long. Safety rules demand its base sit <strong>6 m</strong> from the wall. A child waits at a window <strong>8.5 m</strong> up. The crew has five seconds to answer: <em>does the ladder reach?</em> No tape measure goes up a wall — but Pythagoras does.` },
          { t: 'think', q: 'Ladder 10 m (hypotenuse), base 6 m from the wall. How high does it touch?',
            choices: [
              { label: '8 m — because 10² − 6² = 64, and √64 = 8. The child at 8.5 m is just out of reach', right: true, fb: '🎉 Working BACKWARDS: height² = c² − a² = 100 − 36 = 64. The crew must move the base closer or find another way — and they know instantly.' },
              { label: '4 m — subtract 10 − 6', right: false, fb: '🤔 Lengths don\'t subtract like that — the theorem lives in SQUARES. Subtract the squares first (100 − 36), then take the root.' },
              { label: '16 m — taller than the ladder itself', right: false, fb: '🤔 No side of a triangle can beat the hypotenuse — 10 m is the absolute maximum. Did you add the squares instead of subtracting?' },
            ] },
          { t: 'reveal', html: `The theorem runs in both directions. Missing hypotenuse: <code>c = √(a² + b²)</code> — square, add, root. Missing leg: <code>a = √(c² − b²)</code> — square, <em>subtract</em>, root. One golden check: the hypotenuse is always the longest side. If your "leg" comes out longer than your hypotenuse, a sign got flipped somewhere.` },
          { t: 'key', html: `Hypotenuse: ADD the squares. Missing leg: SUBTRACT the squares. Always finish with the square root — and the hypotenuse must end up longest.` },
          { t: 'fillblank', before: 'Hypotenuse 15 m, one leg 9 m. Other leg = √(225 − 81) = √144 =', blank: '12', after: 'm.', hint: '225 − 81 = 144 = 12²', goodFb: '🎉 √144 = 12. The missing side found by subtraction.', badFb: '🤔 225 − 81 = 144. √144 = ?' },
          { t: 'stepwise', title: '✈️ The drone\'s distance home', steps: [
            'Drone flies <strong>9 km east</strong> then <strong>12 km north</strong>. Forms a right triangle.',
            'Distance home = hypotenuse = √(9² + 12²).',
            '= √(81 + 144) = √225.',
            '✅ = <strong>15 km</strong>. The battery monitor runs this exact calculation before approving the return trip.',
          ]},
          { t: 'try', q: 'A 13 m wire runs from the top of a pole to a stake 5 m from its base. How tall is the pole?',
            choices: [
              { label: '12 m — √(169 − 25) = √144', right: true, fb: '🎉 The 5-12-13 family again, found backwards this time. Whole-number triples are everywhere once you know them.' },
              { label: '8 m — 13 − 5', right: false, fb: '🤔 The subtraction happens between the SQUARES: 169 − 25 = 144. Then the root.' },
              { label: '√194 ≈ 13.9 m', right: false, fb: '🤔 You added — but the wire (13) is the hypotenuse, the longest side. A 13.9 m pole would out-stretch its own wire! Subtract instead.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Ladder 10 m, base 6 m from wall. Height reached = ?',
              choices: [
                { label: '8 m — √(100 − 36) = √64', right: true, fb: '🎉 10² − 6² = 64 = 8². The ladder reaches 8 m up the wall.' },
                { label: '4 m — 10 − 6', right: false, fb: '🤔 Subtract the SQUARES: 100 − 36 = 64. Then take the square root.' },
                { label: '11.7 m', right: false, fb: '🤔 That\'s larger than the ladder itself — impossible! The leg must be SHORTER than the hypotenuse. Subtract, don\'t add.' },
              ]},
            { q: 'A square has diagonal 10 cm. What is the side length?',
              choices: [
                { label: '5√2 ≈ 7.07 cm', right: true, fb: '🎉 s² + s² = 100 → 2s² = 100 → s² = 50 → s = √50 = 5√2 ≈ 7.07.' },
                { label: '5 cm — half the diagonal', right: false, fb: '🤔 Halving the diagonal gives the radius of the circumscribed circle. The side uses Pythagoras: s² + s² = 100.' },
                { label: '10 cm — the diagonal equals the side', right: false, fb: '🤔 The diagonal is always longer than the side in a square. Set up: side² + side² = 100.' },
              ]},
            { q: 'A right triangle has hypotenuse 26 and one leg 10. The other leg = ?',
              choices: [
                { label: '24 — √(676 − 100) = √576', right: true, fb: '🎉 26² − 10² = 676 − 100 = 576 = 24². Another lovely triple: 10-24-26 (the 5-12-13 family ×2).' },
                { label: '16 — 26 − 10', right: false, fb: '🤔 Subtract the squares, not the sides: 676 − 100 = 576. Then root.' },
                { label: '28 — √(676 + 100)', right: false, fb: '🤔 Adding squares finds the hypotenuse. For a MISSING LEG you subtract: c² − a² = b².' },
              ]},
          ]},
        ],
      },
      {
        id: 'is-it-right', icon: '🔍', title: 'The Right-Angle Detector', sub: 'Running the theorem backwards',
        blocks: [
          { t: 'story', html: `A groundskeeper has just laid out a football pitch: 90 m long, 60 m wide. The lines LOOK straight, the corners LOOK square… but "looks" has ruined many a stadium. She measures one diagonal with a long tape: <strong>108.2 m</strong>. From that single number, she knows whether every corner is true.` },
          { t: 'think', q: 'What diagonal SHOULD a perfect 90 × 60 m rectangle have?',
            choices: [
              { label: '√(90² + 60²) = √11700 ≈ 108.2 m — her corners are perfect', right: true, fb: '🎉 The converse of Pythagoras: if a² + b² = c² holds for the measured sides, the angle between a and b must be exactly 90°. Numbers verify what eyes cannot.' },
              { label: '150 m — add length and width', right: false, fb: '🤔 150 m is the walk around two sides. The diagonal is the shortcut across — always less. Square, add, root.' },
              { label: 'There\'s no way to know without a protractor at each corner', right: false, fb: '🤔 That\'s the beauty — the DIAGONAL is the protractor. If it matches √(90² + 60²), the corners have no choice but to be square.' },
            ] },
          { t: 'reveal', html: `The <strong>converse</strong>: if the three sides of a triangle satisfy <code>a² + b² = c²</code>, then the angle opposite <em>c</em> is exactly 90° — guaranteed. Even better, it's a <em>diagnostic</em>: if <code>a² + b² &gt; c²</code> the angle is acute (squeezed shut); if <code>a² + b² &lt; c²</code> it's obtuse (forced open). Three tape measurements tell you an angle's whole story without ever measuring an angle.` },
          { t: 'key', html: `Converse of Pythagoras: sides satisfying a² + b² = c² force a right angle. Greater than → acute; less than → obtuse. Three lengths reveal the angle.` },
          { t: 'fillblank', before: 'Foundation: 8 m × 15 m, diagonal = 17 m. Check: 64 + 225 =', blank: '289', after: '= 17². ✓ Square corners confirmed.', hint: '8² = 64, 15² = 225. Sum?', goodFb: '🎉 289 = 17². The converse confirms perfect right angles.', badFb: '🤔 64 + 225 = ?' },
          { t: 'stepwise', title: '🏗️ Checking a foundation', steps: [
            'Builder\'s foundation: <strong>8 m × 15 m</strong>. Diagonal measured: <strong>17 m</strong>.',
            'Apply converse: check a² + b² = c²? → 8² + 15² vs 17².',
            '64 + 225 = 289. And 17² = 289. They match!',
            '✅ ✓ Square corners confirmed — pour the concrete. No protractor required.',
          ]},
          { t: 'try', q: 'A triangle has sides 7, 9, and 11. Its largest angle is…',
            choices: [
              { label: 'Obtuse — 49 + 81 = 130 < 121? No wait… 130 > 121, so acute!', right: false, fb: '🤔 You caught your own slip — good instinct, wrong button. 130 > 121 means the angle is squeezed ACUTE. Pick that answer.' },
              { label: 'Acute — because 7² + 9² = 130 > 11² = 121', right: true, fb: '🎉 The two smaller squares out-fill the largest, so the big angle is pinched below 90°. Diagnosis by tape measure.' },
              { label: 'Exactly 90°', right: false, fb: '🤔 Exact rightness needs an exact match: 130 vs 121 misses by 9. Close, but geometry doesn\'t round.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Triangle sides: 5, 12, 13. What type of triangle?',
              choices: [
                { label: 'Right triangle — 25 + 144 = 169 = 13²', right: true, fb: '🎉 Perfect. 5-12-13 is a classic Pythagorean triple.' },
                { label: 'Acute', right: false, fb: '🤔 Check: 5² + 12² = 169 = 13² exactly. Not "greater than" — perfectly equal. That means a right angle.' },
                { label: 'Obtuse', right: false, fb: '🤔 Obtuse needs a² + b² < c². Here 25 + 144 = 169 = 13² exactly — a perfect right angle.' },
              ]},
            { q: 'Triangle sides: 6, 7, 10. The largest angle is…',
              choices: [
                { label: 'Obtuse — 36 + 49 = 85 < 100 = 10²', right: true, fb: '🎉 85 < 100 means the two smaller squares can\'t fill the big one — the large angle opens past 90°.' },
                { label: 'Acute — 85 is close to 100', right: false, fb: '🤔 Close only counts in horseshoes. 85 < 100 means obtuse, not close-to-right.' },
                { label: 'Right angle', right: false, fb: '🤔 Right needs 85 = 100. It doesn\'t — and 85 < 100 means obtuse.' },
              ]},
            { q: 'A city planner marks a plot: 20 m × 21 m. The diagonal measures 29 m. Are the corners square?',
              choices: [
                { label: 'Yes — 400 + 441 = 841 = 29²', right: true, fb: '🎉 20-21-29 is a Pythagorean triple. The corners are perfectly square — approved for building.' },
                { label: 'No — the numbers don\'t look like a triple', right: false, fb: '🤔 Check the math: 20² + 21² = 400 + 441 = 841. Is 841 = 29²? (29 × 29 = ?)' },
                { label: 'Can\'t determine from measurements alone', right: false, fb: '🤔 Three measurements is all the converse of Pythagoras needs. Calculate a² + b² and compare to c².' },
              ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `From knotted ropes on the Nile to TV screens and fire ladders — you've discovered, used, and reversed the most famous equation in geometry. Teach it and take the diamond.` },
          { t: 'teach',
            prompt: 'Explain a² + b² = c² to someone who has never seen it: what the letters mean, what the equation says about SQUARES, and one real use.',
            placeholder: 'Take any triangle with a square corner. Call the two short sides a and b...',
            keywords: [
              ['right angle', 'right triangle', '90', 'square corner'],
              ['hypotenuse', 'longest', 'diagonal', 'across'],
              ['square', 'squared', 'area', 'add'],
            ],
            hint: 'mention the right angle, the hypotenuse/longest side, and squaring & adding' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     📈 LINEAR EQUATIONS & FUNCTIONS
     ═════════════════════════════════════════════ */
  'linear': {
    worldId: 'myp-linear',
    icon: '📈',
    name: 'Linear Functions',
    grade: 'Grade 8 · MYP',
    accent: '#00ACC1', dark: '#006064', bg: '#E0F7FA',
    professions: ['🔬 Physicists', '📈 Economists', '💻 Programmers', '🚕 Taxi Companies', '📱 Phone Plans', '🧬 Biologists'],
    topics: [
      {
        id: 'function-machines', icon: '⚙️', title: 'Function Machines', sub: 'Rules you can trust',
        blocks: [
          { t: 'story', html: `A mysterious vending machine takes a number and gives one back. You feed it 1 → out comes 5. Feed it 2 → out comes 7. Feed it 3 → out comes 9. Feed it 10 → out comes 23. The machine never lies and never changes its mind. Inside it, there is a <em>rule</em>.` },
          { t: 'think', q: 'What is the machine\'s rule?',
            choices: [
              { label: 'Double the input, then add 3 — written y = 2x + 3', right: true, fb: '🎉 Check every pair: 2(1)+3=5 ✓, 2(2)+3=7 ✓, 2(10)+3=23 ✓. One rule, infinite predictions.' },
              { label: 'Add 4 each time', right: false, fb: '🤔 1→5 is +4, but 2→7 is +5 and 10→23 is +13. "Add a fixed number" can\'t explain all the pairs. Try "multiply, THEN add".' },
              { label: 'The machine is random', right: false, fb: '🤔 Random machines don\'t repeat: feed it 1 again, you\'d get 5 again, every time. Patterns that never break have rules. Compare how the OUTPUT grows when the input grows by 1.' },
            ] },
          { t: 'reveal', html: `A <strong>function</strong> is a rule that turns each input into exactly one output. The family <code>y = mx + c</code> — multiply by something, then add something — is the <strong>linear</strong> family, and it might be the most-used rule in human civilization: taxi fares, phone plans, salaries, temperature conversions, currency exchange. Two numbers, <em>m</em> and <em>c</em>, and the machine is fully described.` },
          { t: 'key', html: `A function: every input → exactly one output. Linear functions follow y = mx + c ("multiply, then add") and grow by the SAME amount with every step.` },
          { t: 'fillblank', before: 'A machine applies y = 5x + 3. Feed it 4. The output is', blank: '23', after: '.', hint: 'Multiply first: 5 × 4 = 20. Then add 3.', goodFb: '🎉 Exactly! 5(4) + 3 = 23.', badFb: '🤔 Multiply first: 5 × 4, then add 3.' },
          { t: 'stepwise', title: '🚕 The taxi meter', steps: [
            'A taxi charges ₹50 just to start, plus ₹15 per km. Identify the machine: <code>Fare = 15 × km + 50</code>.',
            'The input is distance: 8 km. Multiply first: <strong>15 × 8 = 120</strong>.',
            'Now add the starting charge: <strong>120 + 50 = 170</strong>.',
            '✅ An 8 km ride costs <strong>₹170</strong> — the machine gives the same answer every single time.',
          ]},
          { t: 'try', q: 'A machine follows y = 3x − 2. Feed it 6. What comes out?',
            choices: [
              { label: '16 — three sixes minus two', right: true, fb: '🎉 3(6) − 2 = 16. Multiply first, then the adjustment — always that order.' },
              { label: '12 — just 3 × 6, ignore the rest', right: false, fb: '🤔 The −2 is part of the machine! Every output gets the same final adjustment.' },
              { label: '7 — because 3 + 6 − 2', right: false, fb: '🤔 3x means 3 TIMES x, not 3 plus x. The multiplication is the machine\'s main gear.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Machine rule: y = 4x + 1. Input is 5. Output is…', choices: [
              { label: '21 — 4 × 5 + 1', right: true, fb: '🎉 Perfect! Multiply then add.' },
              { label: '20 — just 4 × 5', right: false, fb: '🤔 Don\'t forget to add 1 after multiplying.' },
              { label: '25 — (4 + 1) × 5', right: false, fb: '🤔 The rule is multiply x by 4 FIRST, then add 1 — order matters!' },
            ]},
            { q: 'A vending machine doubles your number and subtracts 3. Input 7, output is…', choices: [
              { label: '11 — 2 × 7 − 3', right: true, fb: '🎉 Correct! 14 − 3 = 11.' },
              { label: '8 — 7 + 3 − 2', right: false, fb: '🤔 "Doubles" means × 2, "subtracts 3" means − 3. Not addition.' },
              { label: '14 — just double it', right: false, fb: '🤔 Don\'t forget the −3 step — the machine does two things.' },
            ]},
            { q: 'Which is true about the function y = 7x − 5?', choices: [
              { label: 'Input 1 gives output 2', right: true, fb: '🎉 7(1) − 5 = 2. Nice checking!' },
              { label: 'Input 0 gives output 7', right: false, fb: '🤔 7(0) − 5 = −5, not 7. When input is 0, the multiply step gives 0.' },
              { label: 'Every input gives the same output', right: false, fb: '🤔 That\'s a constant, not a function machine. This one changes with each input.' },
            ]},
          ]},
        ],
      },
      {
        id: 'slope-story', icon: '⛰️', title: 'Slope', sub: 'The steepness number',
        blocks: [
          { t: 'story', html: `Two cyclists climb two hills. Hill A rises 30 m over a 600 m ride. Hill B rises 30 m over a 200 m ride. Same height gained — but one cyclist arrives chatting, the other arrives gasping. Height alone clearly isn't the whole story. Steepness needs its own number.` },
          { t: 'think', q: 'How should we turn steepness into a single number?',
            choices: [
              { label: 'Rise ÷ run — height gained per metre travelled: A = 0.05, B = 0.15. B is 3× steeper', right: true, fb: '🎉 That ratio is the SLOPE. Hill B gains 15 cm of height per metre forward; Hill A only 5 cm. The gasping is now mathematically justified.' },
              { label: 'Just use the height: both are 30, so equally steep', right: false, fb: '🤔 A wheelchair ramp and a cliff can both rise 30 m! The DISTANCE over which you climb matters — combine the two numbers.' },
              { label: 'Rise + run', right: false, fb: '🤔 Adding gives 630 vs 230 — but a LONGER hill would score steeper, which is backwards. You need "rise per unit of run": divide.' },
            ] },
          { t: 'reveal', html: `<strong>Slope</strong> <code>m = rise ÷ run</code> — the change in <em>y</em> per single step of <em>x</em>. It is exactly the <em>m</em> in <code>y = mx + c</code>: the taxi's ₹15/km, the climb's gradient, a download's MB-per-second. Slope 2 means "up 2 per step". Slope 0 means flat. <strong>Negative slope means downhill</strong> — y falls as x grows, like battery percentage over hours of streaming.` },
          { t: 'key', html: `Slope m = rise/run = change per step. Big |m| = steep, m = 0 = flat, negative m = decreasing. On a graph it's the line's tilt; in life it's the rate.` },
          { t: 'fillblank', before: 'A line goes from point (0, 3) to point (4, 11). The rise is 8 and the run is 4, so the slope is', blank: '2', after: '.', hint: 'Slope = rise ÷ run = 8 ÷ 4.', goodFb: '🎉 Yes! 8 ÷ 4 = 2. Up 2 for every step right.', badFb: '🤔 Divide rise by run: 8 ÷ 4.' },
          { t: 'stepwise', title: '🔋 The dying battery', steps: [
            'Phone drops from 80% at 2 pm to 35% at 8 pm. Rise = change in y = <strong>35 − 80 = −45%</strong>.',
            'Run = change in x (hours) = <strong>8 − 2 = 6 hours</strong>.',
            'Slope = rise ÷ run = <strong>−45 ÷ 6 = −7.5% per hour</strong>.',
            '✅ Negative slope means draining. At this rate, 35% ÷ 7.5 ≈ 4.7 more hours — dead around <strong>12:40 am</strong>.',
          ]},
          { t: 'try', q: 'A line passes through the points (2, 5) and (6, 17). Its slope is…',
            choices: [
              { label: '3 — rise 12 over run 4', right: true, fb: '🎉 (17−5)/(6−2) = 12/4 = 3. Up three for every step right — climbing briskly.' },
              { label: '12 — that\'s how much y grew', right: false, fb: '🤔 y grew 12, but over FOUR steps of x. Slope is the rise per SINGLE step: divide.' },
              { label: '1/3', right: false, fb: '🤔 Upside down! Rise over run, not run over rise: 12/4, not 4/12. (A 1/3 slope would be a gentle stroll.)' },
            ] },
          { t: 'drill', qs: [
            { q: 'A ramp rises 3 m over a 12 m stretch. What is its slope?', choices: [
              { label: '0.25 — rise 3, run 12', right: true, fb: '🎉 3/12 = 0.25. Gentle ramp — wheelchair-friendly!' },
              { label: '4 — run over rise', right: false, fb: '🤔 That\'s run/rise, not rise/run. Flip it.' },
              { label: '9 — add them', right: false, fb: '🤔 Slope is a ratio (division), not a sum.' },
            ]},
            { q: 'A temperature graph drops from 20°C to 5°C over 5 hours. What is the slope?', choices: [
              { label: '−3 — drop 15 over 5 hours', right: true, fb: '🎉 (5 − 20)/5 = −15/5 = −3°C per hour. Negative = cooling.' },
              { label: '3 — just 15/5', right: false, fb: '🤔 Temperature is dropping, so rise is negative: (5 − 20) = −15.' },
              { label: '−15 — the total drop', right: false, fb: '🤔 That\'s the total rise, not the rate. Divide by the number of hours.' },
            ]},
            { q: 'Which line is steeper?', choices: [
              { label: 'y = 5x + 1 — slope 5 vs slope 2', right: true, fb: '🎉 Higher absolute slope = steeper line.' },
              { label: 'y = 2x + 100 — the larger constant makes it steep', right: false, fb: '🤔 The intercept (100) shifts the line up but doesn\'t change the tilt. Slope controls steepness.' },
              { label: 'Both are the same steepness', right: false, fb: '🤔 Compare the slopes: 5 vs 2. The larger one climbs faster.' },
            ]},
          ]},
        ],
      },
      {
        id: 'starting-point', icon: '🚩', title: 'The Intercept', sub: 'Where the story begins',
        blocks: [
          { t: 'story', html: `Two gyms advertise. <strong>FitZone:</strong> "Just ₹500/month!" <strong>PowerHouse:</strong> "Only ₹300/month!"… plus, in tiny grey letters, <em>a ₹2,400 joining fee</em>. Ten months later, two friends compare what they've spent — and the one who chose the "cheaper" gym is furious.` },
          { t: 'think', q: 'After 10 months, who has actually paid more?',
            choices: [
              { label: 'PowerHouse: 2400 + 300(10) = ₹5,400 vs FitZone\'s 500(10) = ₹5,000', right: true, fb: '🎉 The joining fee is the INTERCEPT — money charged at month zero, before any service. A head start in spending that took 12 months to justify.' },
              { label: 'FitZone — ₹500 > ₹300, end of story', right: false, fb: '🤔 That compares slopes only! PowerHouse\'s ₹2,400 fee is paid at month ZERO. Total cost = fee + monthly × months. Run the numbers for 10 months.' },
              { label: 'They\'ve paid the same', right: false, fb: '🤔 Equal happens when 2400 + 300t = 500t → exactly t = 12 months. At 10 months, one friend is still ₹400 behind.' },
            ] },
          { t: 'reveal', html: `The <strong>intercept</strong> <em>c</em> in <code>y = mx + c</code> is the value when <code>x = 0</code> — the starting point before anything accumulates. Taxi base fare. Joining fee. A plant's height on the day you bought it. On a graph, it's where the line crosses the y-axis. Lines with the same slope but different intercepts run <strong>parallel</strong> forever: same rate, permanent head start.` },
          { t: 'key', html: `Intercept c = the value at x = 0, the head start. Slope is the rate of change; intercept is where you began. Together they tell the whole linear story.` },
          { t: 'fillblank', before: 'In y = 4x + 7, the y-intercept (value when x = 0) is', blank: '7', after: '.', hint: 'Substitute x = 0: y = 4(0) + 7.', goodFb: '🎉 Right! When x = 0, y = 7 — that\'s where the line starts.', badFb: '🤔 Substitute x = 0 into y = 4x + 7.' },
          { t: 'stepwise', title: '🌱 The bamboo race', steps: [
            'Bamboo A starts at 20 cm, grows 5 cm/day: <code>h = 5d + 20</code>. Bamboo B starts at 50 cm, grows 2 cm/day: <code>h = 2d + 50</code>.',
            'To find when they\'re equal, set expressions equal: <strong>5d + 20 = 2d + 50</strong>.',
            'Solve: subtract 2d both sides → 3d + 20 = 50 → 3d = 30 → <strong>d = 10 days</strong>.',
            '✅ On day 10, both reach <strong>70 cm</strong>. After that, faster slope always wins — momentum beats head starts.',
          ]},
          { t: 'try', q: 'A phone plan costs y = 2x + 199 (₹, for x GB of data). What does the 199 physically mean?',
            choices: [
              { label: 'The monthly base charge — what you pay even using ZERO data', right: true, fb: '🎉 x = 0 → y = 199. The intercept is the cost of just existing on the network; the 2 is the price of each GB.' },
              { label: 'The price of one GB', right: false, fb: '🤔 Each GB costs ₹2 — that\'s the slope, the per-unit rate. The 199 arrives even if x = 0…' },
              { label: 'The maximum monthly bill', right: false, fb: '🤔 It\'s the MINIMUM! The bill starts at 199 and climbs ₹2 with every GB. Set x = 0 and see.' },
            ] },
          { t: 'drill', qs: [
            { q: 'A savings account starts at ₹5,000 and grows ₹200/month. What is the intercept?', choices: [
              { label: '5000 — the starting balance', right: true, fb: '🎉 At month 0, balance = ₹5,000. That\'s the intercept.' },
              { label: '200 — the monthly deposit', right: false, fb: '🤔 ₹200 is the rate of change — the slope. The intercept is the value before any months pass.' },
              { label: '5200 — first month\'s balance', right: false, fb: '🤔 That\'s the balance after one month (x = 1). The intercept is when x = 0.' },
            ]},
            { q: 'Two taxi companies: A = 10d + 30, B = 8d + 60. For a short 5 km ride, which is cheaper?', choices: [
              { label: 'Company A — 10(5) + 30 = ₹80 vs 8(5) + 60 = ₹100', right: true, fb: '🎉 Lower intercept wins short trips. Company B\'s higher base hurts for short distances.' },
              { label: 'Company B — cheaper per km', right: false, fb: '🤔 Cheaper per km (slope) helps on long rides. Calculate the total for exactly 5 km.' },
              { label: 'They cost the same', right: false, fb: '🤔 They are equal at d = 15 km. At d = 5, calculate both: A = 80, B = 100.' },
            ]},
            { q: 'Line equation: y = 6x + c passes through (0, −4). What is c?', choices: [
              { label: '−4 — the y-value when x = 0', right: true, fb: '🎉 The point (0, −4) is exactly the y-intercept! c = −4.' },
              { label: '6 — that\'s the coefficient shown', right: false, fb: '🤔 6 is the slope (m). The intercept c is found using the given point where x = 0.' },
              { label: '4 — ignore the minus sign', right: false, fb: '🤔 Signs matter! A negative intercept means the line starts below the x-axis.' },
            ]},
          ]},
        ],
      },
      {
        id: 'real-world-lines', icon: '🌍', title: 'Reading the World', sub: 'One equation, everywhere',
        blocks: [
          { t: 'story', html: `Once you know <code>y = mx + c</code>, you start seeing it everywhere: the °F↔°C conversion on a thermometer, a freelancer's invoice, a car's fuel gauge sinking on a highway, a savings account filling up. Different costumes — same actor. The final skill is <strong>translation</strong>: world → equation, equation → world.` },
          { t: 'think', q: 'Fahrenheit = 1.8 × Celsius + 32. In this famous line, what are the slope and intercept SAYING?',
            choices: [
              { label: 'Slope 1.8: each °C is worth 1.8 °F. Intercept 32: water freezes at 32 °F when C = 0', right: true, fb: '🎉 Perfect translation. m = the exchange rate between the scales; c = where Fahrenheit pegs the freezing point.' },
              { label: 'Slope 32, intercept 1.8', right: false, fb: '🤔 The slope is whatever MULTIPLIES the input. Which number is glued to C by multiplication?' },
              { label: 'The numbers are arbitrary history', right: false, fb: '🤔 Their VALUES are historical, but their ROLES are pure math: one is the per-degree rate, the other is the starting offset at C = 0. Which is which?' },
            ] },
          { t: 'reveal', html: `The translation dictionary: <strong>"per", "each", "every" → slope</strong>. <strong>"base", "starting", "flat fee", "initially" → intercept</strong>. And in reverse: given two data points, you can recover the whole rule — slope from <code>rise ÷ run</code>, then intercept by plugging one point back in. Two observations, and a linear world becomes fully predictable. That is why scientists fit lines to data before trying anything fancier.` },
          { t: 'key', html: `"Per/each/every" = slope; "base/starting/initial" = intercept. From any two points: m = rise/run, then solve for c. Two points unlock every prediction on the line.` },
          { t: 'fillblank', before: 'A rule says "₹12 per hour plus ₹50 flat fee." In y = mx + c, the slope m is', blank: '12', after: '.', hint: '"Per hour" is the rate — that\'s the slope.', goodFb: '🎉 Yes! "Per hour" means slope. The ₹50 flat fee is the intercept.', badFb: '🤔 "Per hour" = slope. What\'s the per-hour charge?' },
          { t: 'stepwise', title: '💼 The freelancer\'s rule', steps: [
            'Designer charged ₹3,500 for 3 hours and ₹6,500 for 7 hours. Find slope: <strong>(6500 − 3500) ÷ (7 − 3) = 3000 ÷ 4 = ₹750/hour</strong>.',
            'Now find intercept c. Use one point, say (3, 3500): <strong>3500 = 750 × 3 + c → 3500 = 2250 + c → c = 1250</strong>.',
            'Rule recovered: <code>price = 750h + 1250</code>. The ₹1,250 is her fixed consultation fee.',
            '✅ Two data points → full equation → predict ANY job. For a 10-hour project: 750(10) + 1250 = <strong>₹8,750</strong>.',
          ]},
          { t: 'try', q: 'A candle is 30 cm tall and burns 2 cm per hour. Which equation tells its height, and when does it die?',
            choices: [
              { label: 'h = −2t + 30; it reaches zero at t = 15 hours', right: true, fb: '🎉 Burning DOWN means negative slope; 30 is the head start. Height hits zero when 2t = 30. A complete life story in four symbols.' },
              { label: 'h = 2t + 30; it grows forever', right: false, fb: '🤔 A candle that grows while burning would be excellent value! Losing height means the slope carries a minus sign.' },
              { label: 'h = 30t − 2', right: false, fb: '🤔 That candle starts at −2 cm and rockets 30 cm per hour. The PER-hour number (2) is the slope; the starting height (30) is the intercept.' },
            ] },
          { t: 'drill', qs: [
            { q: 'Water tank holds 200 L. A pump drains 15 L/min. Which equation models it?', choices: [
              { label: 'V = −15t + 200', right: true, fb: '🎉 Draining = negative slope. 200 is the starting volume.' },
              { label: 'V = 15t + 200', right: false, fb: '🤔 Draining means volume decreases — slope should be negative.' },
              { label: 'V = 200t − 15', right: false, fb: '🤔 The rate (15) is the slope; the starting volume (200) is the intercept — not the other way.' },
            ]},
            { q: 'A car travels at 80 km/h and starts 40 km from the city. Distance from city = 80t + 40. After 3 hours, it is…', choices: [
              { label: '280 km from the city', right: true, fb: '🎉 80(3) + 40 = 240 + 40 = 280 km. Plug in t = 3.' },
              { label: '240 km', right: false, fb: '🤔 You forgot the starting distance! 80 × 3 = 240, but the car was already 40 km away.' },
              { label: '120 km', right: false, fb: '🤔 Check the equation again: 80t + 40 with t = 3.' },
            ]},
            { q: 'A scientist measures 10°C at altitude 0 m and 4°C at 2000 m. What is the equation?', choices: [
              { label: 'T = −0.003a + 10', right: true, fb: '🎉 Slope = (4 − 10)/2000 = −0.003°C per metre. Intercept = 10 at sea level.' },
              { label: 'T = 0.003a + 4', right: false, fb: '🤔 Temperature drops as altitude increases — slope must be negative. Use sea level as the intercept.' },
              { label: 'T = −6a + 10', right: false, fb: '🤔 Rise = −6°C, but run = 2000 m. Slope = −6/2000 = −0.003, not −6.' },
            ]},
          ]},
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `Function machines, the steepness number, head starts, and translation between equations and life — y = mx + c has no secrets left for you. Teach it.` },
          { t: 'teach',
            prompt: 'Using a taxi ride, a gym membership, or any example you invent, explain what m and c each mean in y = mx + c.',
            placeholder: 'Imagine a taxi that charges a starting fee, and then...',
            keywords: [
              ['slope', 'rate', 'per', 'each', 'every', 'steep'],
              ['intercept', 'start', 'base', 'fee', 'fixed', 'initial', 'beginning'],
              ['multiply', 'change', 'grow', 'increase', 'add'],
            ],
            hint: 'cover the per-unit rate (m), the starting amount (c), and how they build the total' },
        ],
      },
    ],
  },
};
