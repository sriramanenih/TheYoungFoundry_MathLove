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
          { t: 'example', title: '⚽ Penalty record', html: `Keeper A saved 12 of 30 shots. Keeper B saved 8 of 20. Who's better? Simplify: 12:30 → 2:5, and 8:20 → 2:5. They are <strong>exactly equally good</strong> — both save 2 shots in every 5.` },
          { t: 'try', q: 'Which of these is NOT equivalent to 6 : 9?',
            choices: [
              { label: '2 : 3', right: false, fb: '🤔 6÷3 : 9÷3 = 2:3 — that IS equivalent. One of the others breaks the pattern.' },
              { label: '12 : 18', right: false, fb: '🤔 6×2 : 9×2 = 12:18 — equivalent! Check the others by dividing.' },
              { label: '9 : 12', right: true, fb: '🎉 Right — 9:12 simplifies to 3:4, but 6:9 simplifies to 2:3. Different blends!' },
            ] },
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
          { t: 'example', title: '🏃 Who is faster?', html: `Ria runs 100 m in 16 s. Dev runs 150 m in 25.5 s. Per second: Ria = 100÷16 = 6.25 m/s. Dev = 150÷25.5 ≈ 5.88 m/s. <strong>Ria is faster</strong>, even though Dev ran farther.` },
          { t: 'try', q: 'Printer X prints 45 pages in 9 minutes. Printer Y prints 64 pages in 16 minutes. Which is faster?',
            choices: [
              { label: 'Y — it printed more pages', right: false, fb: '🤔 More pages, but in much more time. What is each printer\'s pages-per-ONE-minute?' },
              { label: 'X — 5 pages/min beats 4 pages/min', right: true, fb: '🎉 45÷9 = 5, 64÷16 = 4. Unit rates make it obvious.' },
              { label: 'They\'re the same speed', right: false, fb: '🤔 Divide pages by minutes for each printer — the two answers are not equal.' },
            ] },
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
          { t: 'example', title: '💊 A real dose calculation', html: `A medicine is dosed at 5 mg per 2 kg of body weight. A 24 kg child: the multiplier from 2 kg to 24 kg is ×12, so the dose is 5 × 12 = <strong>60 mg</strong>. Pharmacists solve this proportion for real children every single day — this math saves lives.` },
          { t: 'try', q: 'A model car is built at scale 1 : 24. The model is 18 cm long. How long is the real car?',
            choices: [
              { label: '42 cm — 18 + 24', right: false, fb: '🤔 A 42 cm "car" would fit in your backpack. Scale means MULTIPLY: each model cm stands for 24 real cm.' },
              { label: '432 cm — 18 × 24', right: true, fb: '🎉 4.32 metres — a real car length. The proportion 1:24 = 18:432 held firm.' },
              { label: '24 cm — the scale says so', right: false, fb: '🤔 The 24 means the real car is 24 times LONGER than the model — not 24 cm long.' },
            ] },
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
          { t: 'example', title: '🌊 The submarine', html: `A submarine at −120 m (120 m below the surface) rises 45 m. New position: −120 + 45 = <strong>−75 m</strong>. Still underwater, but 45 m closer to the sun.` },
          { t: 'try', q: 'Which number is the SMALLEST: −7, −2, 0, or 3?',
            choices: [
              { label: '−2, because 2 is small', right: false, fb: '🤔 On the line, −7 sits even further LEFT than −2. Further left = smaller. Owe ₹7 vs owe ₹2 — which is worse?' },
              { label: '−7 — it\'s furthest below zero', right: true, fb: '🎉 Right. With negatives, the bigger-looking digit means further below zero — so −7 < −2 < 0 < 3.' },
              { label: '0 — zero means nothing', right: false, fb: '🤔 Zero beats every negative! Having nothing is better than owing something.' },
            ] },
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
          { t: 'example', title: '💰 The pocket-money ledger', html: `You owe your sister ₹40 (−40). You earn ₹100 (+60 after paying her back: −40 + 100 = 60). Then she cancels ₹10 of your old debt as a gift: 60 − (−10) = <strong>₹70</strong>. Debt removed = money gained.` },
          { t: 'try', q: 'The temperature is −6°C. It "warms up" by −3°C, says the weather robot with a glitch. What really happened, and where does it land?',
            choices: [
              { label: '−6 + (−3) = −9 — adding negative warmth means it got COLDER', right: true, fb: '🎉 Adding a negative is sliding further down the line. The robot announced a warm-up and delivered a freeze.' },
              { label: '−6 + (−3) = −3', right: false, fb: '🤔 Two teams of sandbags don\'t cancel each other — they pile up. 6 down plus 3 more down = ?' },
              { label: '−6 + (−3) = +9', right: false, fb: '🤔 There are no balloons in this sum at all — nothing can lift it to positive territory.' },
            ] },
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
          { t: 'example', title: '🧮 Pattern proof', html: `Watch the pattern fall: 3×(−2)=−6, 2×(−2)=−4, 1×(−2)=−2, 0×(−2)=0… each step ADDS 2. Continue: (−1)×(−2) must be <strong>+2</strong>, (−2)×(−2)=+4. The pattern itself forces negative × negative to be positive.` },
          { t: 'try', q: 'Calculate: (−4) × (−3) × (−1)',
            choices: [
              { label: '+12 — negatives always cancel', right: false, fb: '🤔 Count the minus signs: there are THREE. Two cancel… what does the third one do?' },
              { label: '−12 — three reversals = still reversed', right: true, fb: '🎉 4×3×1 = 12, and an odd number of negative signs leaves the answer negative. −12.' },
              { label: '−8 — multiply then subtract something', right: false, fb: '🤔 Multiply the sizes first (4 × 3 × 1 = 12), then settle the sign by counting reversals.' },
            ] },
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
          { t: 'example', title: '🏔️ From summit to shore', html: `The Dead Sea sits at −430 m (below sea level); a nearby hill rises to +570 m. Height difference: |570 − (−430)| = |1000| = <strong>1000 m</strong> of pure vertical distance.` },
          { t: 'try', q: 'Which is GREATER: |−9| or |5|?',
            choices: [
              { label: '|5| — positive beats negative', right: false, fb: '🤔 The absolute-value bars erase the sign BEFORE comparing. What number do the bars turn −9 into?' },
              { label: '|−9| — it equals 9, which beats 5', right: true, fb: '🎉 |−9| = 9 and |5| = 5. Nine steps from zero beats five steps, whichever direction you walked.' },
              { label: 'They\'re equal', right: false, fb: '🤔 9 steps from zero vs 5 steps from zero — those aren\'t the same journey length.' },
            ] },
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
          { t: 'example', title: '🕒 Clock angles', html: `From 12 to 3, the hour hand sweeps a quarter of the clock face: 360° ÷ 4 = <strong>90°</strong>. Every hour mark is 360° ÷ 12 = 30° — so 12 to 1 is 30°, 12 to 5 is 150°.` },
          { t: 'try', q: 'A skateboarder does a "540". Where do they end up facing?',
            choices: [
              { label: 'Backwards — 540° = 360° + 180°: one full spin plus a half turn', right: true, fb: '🎉 One whole rotation brings them back to start; the extra 180° flips them to face backwards. Riders call it "landing switch".' },
              { label: 'Forwards — every trick ends facing forwards', right: false, fb: '🤔 Subtract the full spin: 540 − 360 = 180 leftover. What does a 180° turn do to where you face?' },
              { label: 'Sideways', right: false, fb: '🤔 Sideways would be 90° leftover (a 450). Here the leftover is 540 − 360 = 180°.' },
            ] },
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
          { t: 'example', title: '🛣️ The road crossing', html: `Two straight roads cross. One angle between them measures 110°. Instantly you know all four: 110° opposite, and 180 − 110 = <strong>70°</strong> for both remaining angles. One measurement, four answers.` },
          { t: 'try', q: 'Two lines cross. One of the four angles is 35°. What are the other three?',
            choices: [
              { label: '35°, 145°, 145°', right: true, fb: '🎉 Opposite twin = 35°; neighbours = 180 − 35 = 145° each. Check: 35+35+145+145 = 360° — a full turn around the point!' },
              { label: '35°, 35°, 35°', right: false, fb: '🤔 All four equal would need 4 × 35 = 140° around the point — but a full turn is 360°. The neighbours must pick up the slack.' },
              { label: '55°, 55°, 215°', right: false, fb: '🤔 55 would pair with 35 to make 90° — but a straight LINE needs 180°, not 90°. What plus 35 gives 180?' },
            ] },
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
          { t: 'example', title: '⛰️ The unreachable peak', html: `From two ends of a valley, surveyors measure angles of 67° and 48° up to a peak. The angle AT the summit — where no one is standing — must be 180 − 67 − 48 = <strong>65°</strong>. Geometry climbed the mountain for them.` },
          { t: 'try', q: 'A right triangle (one angle = 90°) has another angle of 35°. The third angle is…',
            choices: [
              { label: '55° — because 90 + 35 + 55 = 180', right: true, fb: '🎉 The two non-right angles of a right triangle always share the leftover 90°. 35 + 55 = 90. ✓' },
              { label: '65°', right: false, fb: '🤔 Check the total: 90 + 35 + 65 = 190°. Too much turn! The three must total exactly 180.' },
              { label: 'Impossible to know without measuring', right: false, fb: '🤔 That\'s the magic — you never need to measure the third. 180 − 90 − 35 = ?' },
            ] },
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
          { t: 'example', title: '🗼 Pylon engineering', html: `An electricity pylon is a tower of triangles. If wind pushes it, every force travels into a triangle that cannot change shape without breaking a beam — far harder than merely leaning. Same trick in the Eiffel Tower and every crane arm on Earth.` },
          { t: 'try', q: 'An isosceles triangle has a top angle of 40°. What are the two base angles?',
            choices: [
              { label: '70° each — they share 180 − 40 = 140 equally', right: true, fb: '🎉 Isosceles base angles are twins: 140 ÷ 2 = 70° each. Check: 40 + 70 + 70 = 180. ✓' },
              { label: '40° each — all angles match the top', right: false, fb: '🤔 That totals 120°, missing 60. Only EQUILATERAL triangles have three matching angles. Here just the two base angles match.' },
              { label: '140° each', right: false, fb: '🤔 140 + 140 + 40 = 320° — nearly two triangles\' worth! The two bases SHARE 140 between them.' },
            ] },
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
          { t: 'example', title: '🎯 The spinner', html: `A spinner has 8 equal slices: 3 red, 4 blue, 1 gold. P(gold) = 1/8 = 0.125. P(red) = 3/8. P(not blue) = 4/8 = 0.5 — half the spins avoid blue.` },
          { t: 'try', q: 'A bag holds 5 green and 3 yellow marbles. P(green) = ?',
            choices: [
              { label: '5/8 — five favourable out of eight total', right: true, fb: '🎉 5 greens among 8 marbles: 0.625. Better than a coin flip but far from certain.' },
              { label: '5/3 — greens versus yellows', right: false, fb: '🤔 5/3 is bigger than 1 — more certain than certain?! Impossible. Divide by ALL the marbles, not just the rivals.' },
              { label: '1/2 — it\'s either green or it isn\'t', right: false, fb: '🤔 "Two outcomes" doesn\'t mean "equally likely"! By that logic you\'d win every lottery half the time. Count the marbles.' },
            ] },
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
          { t: 'example', title: '👕 The outfit count', html: `3 shirts × 4 trousers = 12 equally likely outfits if you grab blindly. P(your lucky shirt with your lucky trousers) = 1/12 — one favourable outfit out of twelve.` },
          { t: 'try', q: 'Flip two fair coins. What is P(exactly one head)?',
            choices: [
              { label: '1/3 — the outcomes are 0, 1, or 2 heads', right: false, fb: '🤔 The gambler\'s trap again! Those three totals are NOT equally likely. List the actual flips: HH, HT, TH, TT.' },
              { label: '1/2 — two of the four outcomes (HT and TH) have exactly one head', right: true, fb: '🎉 Sample space {HH, HT, TH, TT}: each 1/4. Exactly one head happens 2 ways out of 4 = 1/2.' },
              { label: '1/4', right: false, fb: '🤔 1/4 is the chance of one SPECIFIC pattern like HT. But TH also gives exactly one head — count both.' },
            ] },
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
          { t: 'example', title: '🏥 Why trials need to be big', html: `A drug helps 60% of patients. In a 5-patient test it might help all 5 (looks like a miracle) or just 2 (looks like a dud). In a 5,000-patient trial, results park near 60% — which is why medicine regulators demand LARGE trials before approving anything.` },
          { t: 'try', q: 'A die rolled 60 times shows a six 13 times (instead of the "expected" 10). The most reasonable conclusion is…',
            choices: [
              { label: 'Normal randomness — 13/60 is comfortably within small-sample wobble', right: true, fb: '🎉 Right. If 6,000 rolls gave six 1,300 times, suspect the die. At 60 rolls, this is everyday noise.' },
              { label: 'The die is definitely loaded', right: false, fb: '🤔 Three extra sixes in sixty rolls is well within ordinary luck. How would your suspicion change at 6,000 rolls with the same RATIO?' },
              { label: 'Sixes are now "hot" — bet on more sixes', right: false, fb: '🤔 Dice have no memory, no streaks, no mood. Each roll restarts at 1/6 forever.' },
            ] },
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
          { t: 'example', title: '🔐 Why long passwords win', html: `A 1-digit PIN: guessed in ≤10 tries. Each extra digit multiplies the search by 10 — a 6-digit PIN means 10⁶ = 1,000,000 possibilities. P(random guess) = 0.000001. Multiplication is the bodyguard of every password on Earth.` },
          { t: 'try', q: 'Rain tomorrow: 1/3. Your bus being late: 1/4 (independent). P(rain AND late bus) = ?',
            choices: [
              { label: '7/12 — add them', right: false, fb: '🤔 Adding made the double-misfortune MORE likely than rain alone (1/3 = 4/12). Both bad things together must be rarer than either.' },
              { label: '1/12 — multiply 1/3 × 1/4', right: true, fb: '🎉 Of the 1/3 of days with rain, 1/4 also have a late bus: 1/12 of all days get the double whammy.' },
              { label: '1/7', right: false, fb: '🤔 Close in size but no — multiply the fractions: 1/3 × 1/4. Numerators together, denominators together.' },
            ] },
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
          { t: 'example', title: '🪟 The carpenter\'s check', html: `A carpenter marks 30 cm along one edge of a frame and 40 cm along the other. If the diagonal between the marks is exactly <strong>50 cm</strong>, the corner is perfectly square. Off by even a few millimetres? The frame gets adjusted. Pure 3-4-5, scaled ×10.` },
          { t: 'try', q: 'Which other triple also forces a right angle?',
            choices: [
              { label: '6, 8, 10 — it\'s 3-4-5 doubled', right: true, fb: '🎉 36 + 64 = 100. ✓ Scaling a right triangle keeps its angles — every multiple of 3-4-5 works. (5-12-13 is another famous family.)' },
              { label: '4, 5, 6', right: false, fb: '🤔 Test it: 16 + 25 = 41, but 6² = 36. No match — that corner is slightly wider than square.' },
              { label: '1, 2, 3', right: false, fb: '🤔 1 + 2 = 3 exactly — these "sides" collapse into a flat line. No triangle at all!' },
            ] },
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
          { t: 'example', title: '📺 What "55 inch" means', html: `A TV's size is its diagonal — pure Pythagoras. A screen 48" wide and 27" tall: diagonal = √(48² + 27²) = √(2304 + 729) = √3033 ≈ <strong>55 inches</strong>. You\'ve been buying hypotenuses all along.` },
          { t: 'try', q: 'A right triangle has legs 5 and 12. The hypotenuse is…',
            choices: [
              { label: '13 — because 25 + 144 = 169 = 13²', right: true, fb: '🎉 You met the second famous family: 5-12-13. Builders love these whole-number triples.' },
              { label: '17 — add the legs', right: false, fb: '🤔 17 is the walk AROUND (the two legs); the hypotenuse is the shortcut ACROSS — it must be shorter than 17. Square, add, then un-square.' },
              { label: '60 — multiply the legs', right: false, fb: '🤔 5 × 12 mixes up area with length. The recipe is: square each leg, add, take the square root.' },
            ] },
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
          { t: 'example', title: '✈️ The drone\'s straight-line distance', html: `A drone flies 9 km east, then 12 km north. Straight-line distance home: √(81 + 144) = √225 = <strong>15 km</strong>. Its battery monitor runs exactly this calculation before agreeing to the return trip.` },
          { t: 'try', q: 'A 13 m wire runs from the top of a pole to a stake 5 m from its base. How tall is the pole?',
            choices: [
              { label: '12 m — √(169 − 25) = √144', right: true, fb: '🎉 The 5-12-13 family again, found backwards this time. Whole-number triples are everywhere once you know them.' },
              { label: '8 m — 13 − 5', right: false, fb: '🤔 The subtraction happens between the SQUARES: 169 − 25 = 144. Then the root.' },
              { label: '√194 ≈ 13.9 m', right: false, fb: '🤔 You added — but the wire (13) is the hypotenuse, the longest side. A 13.9 m pole would out-stretch its own wire! Subtract instead.' },
            ] },
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
          { t: 'example', title: '🏗️ Checking a foundation', html: `A builder's foundation measures 8 m × 15 m, with diagonals of 17 m. Check: 64 + 225 = 289 = 17². ✓ Square corners — pour the concrete. (Both diagonals matching also guarantees a true rectangle, not a parallelogram.)` },
          { t: 'try', q: 'A triangle has sides 7, 9, and 11. Its largest angle is…',
            choices: [
              { label: 'Obtuse — 49 + 81 = 130 < 121? No wait… 130 > 121, so acute!', right: false, fb: '🤔 You caught your own slip — good instinct, wrong button. 130 > 121 means the angle is squeezed ACUTE. Pick that answer.' },
              { label: 'Acute — because 7² + 9² = 130 > 11² = 121', right: true, fb: '🎉 The two smaller squares out-fill the largest, so the big angle is pinched below 90°. Diagnosis by tape measure.' },
              { label: 'Exactly 90°', right: false, fb: '🤔 Exact rightness needs an exact match: 130 vs 121 misses by 9. Close, but geometry doesn\'t round.' },
            ] },
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
          { t: 'example', title: '🚕 The taxi meter', html: `A taxi charges ₹50 just to start, plus ₹15 per km. Fare = 15 × km + 50 — a function machine on wheels. 8 km ride: 15(8) + 50 = <strong>₹170</strong>, computed before you even get in.` },
          { t: 'try', q: 'A machine follows y = 3x − 2. Feed it 6. What comes out?',
            choices: [
              { label: '16 — three sixes minus two', right: true, fb: '🎉 3(6) − 2 = 16. Multiply first, then the adjustment — always that order.' },
              { label: '12 — just 3 × 6, ignore the rest', right: false, fb: '🤔 The −2 is part of the machine! Every output gets the same final adjustment.' },
              { label: '7 — because 3 + 6 − 2', right: false, fb: '🤔 3x means 3 TIMES x, not 3 plus x. The multiplication is the machine\'s main gear.' },
            ] },
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
          { t: 'example', title: '🔋 The dying battery', html: `Your phone drops from 80% to 35% between 2 pm and 8 pm: slope = (35 − 80) ÷ (8 − 2) = −45 ÷ 6 = <strong>−7.5% per hour</strong>. The minus sign is the bad news; the 7.5 tells you how bad. (You'll hit 0% around 12:40 am.)` },
          { t: 'try', q: 'A line passes through the points (2, 5) and (6, 17). Its slope is…',
            choices: [
              { label: '3 — rise 12 over run 4', right: true, fb: '🎉 (17−5)/(6−2) = 12/4 = 3. Up three for every step right — climbing briskly.' },
              { label: '12 — that\'s how much y grew', right: false, fb: '🤔 y grew 12, but over FOUR steps of x. Slope is the rise per SINGLE step: divide.' },
              { label: '1/3', right: false, fb: '🤔 Upside down! Rise over run, not run over rise: 12/4, not 4/12. (A 1/3 slope would be a gentle stroll.)' },
            ] },
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
          { t: 'example', title: '🌱 The bamboo race', html: `A bamboo shoot is 20 cm tall and grows 5 cm/day: h = 5d + 20. Its rival starts at 50 cm but grows 2 cm/day: h = 2d + 50. Setting them equal: 5d + 20 = 2d + 50 → d = 10. <strong>Day 10, at 70 cm, the fast grower overtakes</strong> — slope beats intercept, given time.` },
          { t: 'try', q: 'A phone plan costs y = 2x + 199 (₹, for x GB of data). What does the 199 physically mean?',
            choices: [
              { label: 'The monthly base charge — what you pay even using ZERO data', right: true, fb: '🎉 x = 0 → y = 199. The intercept is the cost of just existing on the network; the 2 is the price of each GB.' },
              { label: 'The price of one GB', right: false, fb: '🤔 Each GB costs ₹2 — that\'s the slope, the per-unit rate. The 199 arrives even if x = 0…' },
              { label: 'The maximum monthly bill', right: false, fb: '🤔 It\'s the MINIMUM! The bill starts at 199 and climbs ₹2 with every GB. Set x = 0 and see.' },
            ] },
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
          { t: 'example', title: '💼 The freelancer\'s rule', html: `A designer charged ₹3,500 for a 3-hour job and ₹6,500 for a 7-hour job. Slope: (6500 − 3500)/(7 − 3) = ₹750/hour. Intercept: 3500 − 750(3) = ₹1,250 — her fixed consultation fee. Rule recovered: <code>price = 750h + 1250</code>. Now she can quote ANY job in seconds.` },
          { t: 'try', q: 'A candle is 30 cm tall and burns 2 cm per hour. Which equation tells its height, and when does it die?',
            choices: [
              { label: 'h = −2t + 30; it reaches zero at t = 15 hours', right: true, fb: '🎉 Burning DOWN means negative slope; 30 is the head start. Height hits zero when 2t = 30. A complete life story in four symbols.' },
              { label: 'h = 2t + 30; it grows forever', right: false, fb: '🤔 A candle that grows while burning would be excellent value! Losing height means the slope carries a minus sign.' },
              { label: 'h = 30t − 2', right: false, fb: '🤔 That candle starts at −2 cm and rockets 30 cm per hour. The PER-hour number (2) is the slope; the starting height (30) is the intercept.' },
            ] },
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
