/* ════════════════════════════════════════════════
   SENIOR SCHOOL CONTENT (Grade 9–10)
   Five discovery courses, same schema as MYP_CONTENT.
   Rendered by concept-page.js via concept.html?c=<id>
   ════════════════════════════════════════════════ */

window.SENIOR_CONTENT = {

  /* ═════════════════════════════════════════════
     🌙 QUADRATIC FUNCTIONS
     ═════════════════════════════════════════════ */
  'quadratics': {
    worldId: 'senior-quadratics',
    icon: '🌙',
    name: 'Quadratic Functions',
    grade: 'Grade 9 · Senior School',
    accent: '#5E35B1', dark: '#311B92', bg: '#EDE7F6',
    professions: ['🚀 Aerospace Engineers', '⚽ Sports Scientists', '🔬 Physicists', '📈 Economists', '🎮 Physics-Engine Devs', '📡 Antenna Designers'],
    topics: [
      {
        id: 'shape-of-motion', icon: '⛹️', title: 'The Shape of Motion', sub: 'Why thrown things curve',
        blocks: [
          { t: 'story', html: `Watch a basketball leave a player's hands. It rises, slows, hangs for a heartbeat, then falls — tracing a perfect arch. Water from a fountain draws the same curve. So does a long jumper, a cricket ball, and a rocket after burnout. Different objects, different speeds, different planets even — <strong>identical shape</strong>. Nature appears to have a favourite curve.` },
          { t: 'think', q: 'Linear functions grow by the SAME amount each step. What must be different about the ball\'s height for it to curve?',
            choices: [
              { label: 'Its change must itself be changing — rising less each moment, then falling more each moment', right: true, fb: '🎉 Exactly. Gravity steadily subtracts from the upward speed. A changing rate of change is precisely what x² produces — and no straight line can.' },
              { label: 'The ball curves because air pushes it sideways', right: false, fb: '🤔 The arch appears even in a vacuum chamber — moon astronauts traced perfect parabolas with golf balls and zero air. Something about the RATE of rising is changing…' },
              { label: 'Nothing — it\'s made of two straight lines, up then down', right: false, fb: '🤔 Look at the top: there\'s no sharp corner, only a smooth turn. Straight pieces would meet at a point. The rate of climb is shrinking gradually…' },
            ] },
          { t: 'reveal', html: `Add an <code>x²</code> term and everything changes. In <code>y = x²</code>, the jumps between outputs are 1, 3, 5, 7… — growing by 2 every step. A <strong>steadily changing rate of change</strong> is gravity's signature: height under gravity follows <code>h = −5t² + vt + h₀</code> (on Earth, roughly). The curve is the <strong>parabola</strong>, and its equation family <code>y = ax² + bx + c</code> is the quadratic. Negative <em>a</em> opens it downward (thrown balls); positive <em>a</em> opens it upward (hanging cables, satellite dishes).` },
          { t: 'key', html: `Quadratics y = ax² + bx + c produce CURVED change — a rate of change that itself changes steadily. Every projectile on Earth flies along one.` },
          { t: 'example', title: '📡 The dish that catches whispers', html: `A satellite dish is a parabola spun in 3D — because a parabola has a magic point (the <em>focus</em>) where every incoming parallel ray bounces to. A signal too weak to feel gets concentrated thousands of times at the receiver. Headlight mirrors run the same trick backwards.` },
          { t: 'try', q: 'For y = x², the outputs at x = 1, 2, 3, 4 are 1, 4, 9, 16. The gaps are 3, 5, 7. What is the NEXT gap, and why?',
            choices: [
              { label: '9 — the gaps climb by 2 each time; constant second difference is the quadratic fingerprint', right: true, fb: '🎉 25 − 16 = 9. ✓ Spotting a constant SECOND difference in data is how scientists recognise a hidden quadratic.' },
              { label: '8 — gaps just go up by one', right: false, fb: '🤔 Check the gap sequence again: 3 → 5 → 7. Each is 2 more than the last, not 1.' },
              { label: '7 — the gaps repeat', right: false, fb: '🤔 If gaps repeated, growth would settle into a straight line. Squares accelerate: compute 5² − 4².' },
            ] },
        ],
      },
      {
        id: 'roots-and-factors', icon: '🎯', title: 'Roots & Factoring', sub: 'Where the ball lands',
        blocks: [
          { t: 'story', html: `A stunt coordinator needs to know exactly where a jumping motorbike will land. The flight path is <code>h = −x² + 8x</code> (height h at distance x). "Where does it land?" means "where is the height ZERO again?" — and for that question, algebra has a beautiful trap door.` },
          { t: 'think', q: 'h = −x² + 8x can be rewritten as h = x(8 − x). Why is that form a gift?',
            choices: [
              { label: 'A product is zero only when a factor is zero: x = 0 (take-off) or x = 8 (landing). Read the answers straight off', right: true, fb: '🎉 The Zero Product Property — multiply anything by zero and you get zero, and ONLY zero behaves that way. Factored form hands you the roots for free.' },
              { label: 'It looks shorter', right: false, fb: '🤔 Shorter, yes — but the real treasure is what happens when you set a PRODUCT equal to zero. When can a × b = 0?' },
              { label: 'You can now plug in numbers faster', right: false, fb: '🤔 Plugging in x = 1, 2, 3… might take all day to stumble on the landing point. The factored form answers "where is h = 0?" instantly. How?' },
            ] },
          { t: 'reveal', html: `The <strong>roots</strong> of a quadratic are where it crosses zero — landings, break-even points, moments of impact. <strong>Factoring</strong> rewrites <code>ax² + bx + c</code> as a product, and the <strong>Zero Product Property</strong> does the rest: if <code>(x − p)(x − q) = 0</code> then <code>x = p</code> or <code>x = q</code>. To factor <code>x² + bx + c</code>, hunt two numbers that <em>multiply</em> to c and <em>add</em> to b. Example: <code>x² − 5x + 6 = (x − 2)(x − 3)</code> because (−2)(−3) = 6 and −2 + −3 = −5.` },
          { t: 'key', html: `Roots = where the quadratic equals zero. Factor into a product, then use: a product is zero only when a factor is zero. Find two numbers that multiply to c and add to b.` },
          { t: 'example', title: '💰 The break-even problem', html: `A phone-case maker's profit is P = −x² + 30x − 200 (x = price in $). Factor: −(x − 10)(x − 20). Profit is ZERO at $10 and $20 — price between them to profit, outside them to lose. Two roots, an entire pricing strategy.` },
          { t: 'try', q: 'Solve x² − 7x + 12 = 0.',
            choices: [
              { label: 'x = 3 or x = 4 — since (x−3)(x−4) = 0', right: true, fb: '🎉 3 × 4 = 12 ✓ and 3 + 4 = 7 ✓. Both roots check: 9 − 21 + 12 = 0 and 16 − 28 + 12 = 0.' },
              { label: 'x = −3 or x = −4', right: false, fb: '🤔 Sign check! (x+3)(x+4) expands to x² +7x + 12 — but our middle term is MINUS 7x. Flip both signs.' },
              { label: 'x = 7 or x = 12', right: false, fb: '🤔 Tempting to grab the visible numbers, but test x = 7: 49 − 49 + 12 = 12 ≠ 0. You need two numbers that MULTIPLY to 12 and ADD to 7.' },
            ] },
        ],
      },
      {
        id: 'vertex-power', icon: '🏔️', title: 'The Vertex', sub: 'The highest point of everything',
        blocks: [
          { t: 'story', html: `Same stunt bike: <code>h = −x² + 8x</code>. The safety inspector doesn't care where it lands — she demands the <strong>maximum height</strong>, because the arena ceiling is 17 m. Somewhere on that curve is a single highest point where rising stops and falling begins. Where?` },
          { t: 'think', q: 'The bike takes off at x = 0 and lands at x = 8. Where is the peak — and what\'s the reasoning?',
            choices: [
              { label: 'At x = 4, exactly halfway — a parabola is perfectly symmetric, so the turn must happen midway between the roots', right: true, fb: '🎉 Symmetry is the shortcut: vertex at x = (0 + 8)/2 = 4, height = −16 + 32 = 16 m. One metre below the ceiling — approved, barely.' },
              { label: 'At x = 8, the end of the flight', right: false, fb: '🤔 At x = 8 the bike is back on the GROUND (h = 0). The peak must be somewhere the bike is still airborne — and the curve\'s mirror symmetry pins down where.' },
              { label: 'You\'d have to compute every point', right: false, fb: '🤔 The parabola\'s perfect symmetry saves you: the way up mirrors the way down. So the summit sits exactly… where, between 0 and 8?' },
            ] },
          { t: 'reveal', html: `The <strong>vertex</strong> is the parabola's turning point — maximum (if it opens down) or minimum (if it opens up). Symmetry places it at <code>x = −b/(2a)</code>, the midpoint of the roots. This little formula is an <em>optimization machine</em>: maximum profit, minimum material, biggest enclosed area, least fuel — wherever a quantity rises then falls (or falls then rises), the vertex names the best possible point.` },
          { t: 'key', html: `Vertex at x = −b/(2a): the parabola's max or min. It answers the most valuable question in applied math — "what's the BEST we can do?"` },
          { t: 'example', title: '🐔 The farmer\'s fence', html: `A farmer has 40 m of fence for a rectangular pen against a barn wall (3 sides needed). Area = x(40 − 2x) = −2x² + 40x. Vertex: x = −40/(2·−2) = 10. Best pen: 10 m × 20 m = <strong>200 m²</strong> — provably unbeatable with that fence.` },
          { t: 'try', q: 'A rocket\'s height is h = −5t² + 40t. When does it peak, and how high?',
            choices: [
              { label: 'Peaks at t = 4 s, height 80 m — vertex at −40/(2·−5)', right: true, fb: '🎉 t = 4, then h = −80 + 160 = 80 m. (And by symmetry it lands at t = 8 — the vertex tells you that too.)' },
              { label: 'Peaks at t = 8 s', right: false, fb: '🤔 t = 8 is where h returns to ZERO — splashdown, not summit. The peak is halfway there.' },
              { label: 'Peaks at t = 40', right: false, fb: '🤔 Plug t = 40 in: h = −8000 + 1600, deeply underground! Use x = −b/(2a) with a = −5, b = 40.' },
            ] },
        ],
      },
      {
        id: 'quadratic-formula', icon: '🗝️', title: 'The Quadratic Formula', sub: 'The master key',
        blocks: [
          { t: 'story', html: `Factoring is elegant — when it works. But try <code>x² + 4x − 7 = 0</code>: no pair of nice whole numbers multiplies to −7 and adds to 4. For two thousand years, mathematicians from Babylon to Baghdad chipped away at the general problem, until the answer crystallised into one formula that solves EVERY quadratic ever written — past, present, and future.` },
          { t: 'think', q: 'What would a "master key" for ax² + bx + c = 0 have to look like?',
            choices: [
              { label: 'A recipe using only a, b, and c — so any quadratic\'s roots come from its own three coefficients', right: true, fb: '🎉 That\'s it: x = (−b ± √(b² − 4ac)) / 2a. Feed in the three numbers that define the quadratic; out come both roots, always.' },
              { label: 'A bigger table of factoring pairs', right: false, fb: '🤔 Tables run out — the roots of x² + 4x − 7 are irrational (endless decimals no table holds). The key must be built from the quadratic\'s own ingredients: a, b, c…' },
              { label: 'There can\'t be one — some quadratics are just unsolvable', right: false, fb: '🤔 The Babylonians were solving these 4,000 years ago, case by case. Completing the square on the GENERAL case bottles their method into a single formula.' },
            ] },
          { t: 'reveal', html: `<code>x = (−b ± √(b² − 4ac)) / 2a</code> — the quadratic formula. The fragment under the root, <code>Δ = b² − 4ac</code>, is the <strong>discriminant</strong>, and it tells the curve's story before you finish solving: <strong>Δ &gt; 0</strong> → two roots (the parabola pierces the axis twice); <strong>Δ = 0</strong> → one root (it kisses the axis at the vertex); <strong>Δ &lt; 0</strong> → no real roots (it floats clear of the axis entirely). Engineers read Δ first: "does this trajectory hit the target <em>at all</em>?"` },
          { t: 'key', html: `x = (−b ± √(b² − 4ac)) / 2a solves every quadratic. The discriminant b² − 4ac announces in advance whether there are 2, 1, or 0 real solutions.` },
          { t: 'example', title: '🏀 The impossible shot', html: `A shot follows h = −x² + 6x + 2 and the hoop is at height 12. Solve −x² + 6x + 2 = 12 → x² − 6x + 10 = 0. Discriminant: 36 − 40 = <strong>−4 &lt; 0</strong>. No real solution — the ball never reaches 12. The math vetoes the shot before the player even jumps.` },
          { t: 'try', q: 'For x² + 4x − 7 = 0 (the unfactorable one), the formula gives…',
            choices: [
              { label: 'x = −2 ± √11 — two irrational roots, since Δ = 16 + 28 = 44 > 0', right: true, fb: '🎉 (−4 ± √44)/2 = −2 ± √11 ≈ 1.32 and −5.32. The formula goes where factoring cannot.' },
              { label: 'No solutions — it didn\'t factor', right: false, fb: '🤔 "Won\'t factor nicely" ≠ "has no roots"! Check the discriminant: 4² − 4(1)(−7) = 16 + 28. Positive or negative?' },
              { label: 'x = 4 and x = −7', right: false, fb: '🤔 Test x = 4: 16 + 16 − 7 = 25 ≠ 0. The coefficients go INTO the formula; they aren\'t the answers themselves.' },
            ] },
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `The curve of every thrown thing, roots and landings, the vertex's "best possible", and the master key that solves them all. Teach it and the diamond is yours.` },
          { t: 'teach',
            prompt: 'A younger student asks: "Why does everyone make such a fuss about parabolas?" Explain what makes quadratics special and TWO real things they decide.',
            placeholder: 'Watch what happens when you throw a ball...',
            keywords: [
              ['curve', 'parabola', 'arch', 'x²', 'squared', 'quadratic'],
              ['ball', 'thrown', 'projectile', 'rocket', 'dish', 'bridge', 'profit', 'fence', 'gravity'],
              ['vertex', 'maximum', 'minimum', 'roots', 'land', 'best', 'highest', 'zero'],
            ],
            hint: 'mention the curved shape (x²), real examples like projectiles or profit, and the vertex/roots' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     🗺️ COORDINATE GEOMETRY
     ═════════════════════════════════════════════ */
  'coordinates': {
    worldId: 'senior-coordinates',
    icon: '🗺️',
    name: 'Coordinate Geometry',
    grade: 'Grade 9 · Senior School',
    accent: '#D81B60', dark: '#880E4F', bg: '#FCE4EC',
    professions: ['🎮 Game Developers', '🚗 Self-Driving Car Engineers', '🤖 Roboticists', '📡 GPS Engineers', '🌌 Astronomers', '🎬 VFX Artists'],
    topics: [
      {
        id: 'descartes-grid', icon: '🪰', title: 'Descartes\' Fly', sub: 'The idea that fused algebra and geometry',
        blocks: [
          { t: 'story', html: `Paris, 1619. René Descartes lies ill in bed, watching a fly wander across the ceiling. A question seizes him: <em>could I describe the fly's exact position with nothing but numbers?</em> Two walls meet the ceiling in two edges. "Distance from THIS wall, distance from THAT wall" — two numbers, one fly, pinned precisely. He had just fused two ancient subjects into one.` },
          { t: 'think', q: 'Why was (distance-from-wall-1, distance-from-wall-2) such an explosive idea?',
            choices: [
              { label: 'Every point becomes a pair of numbers — so SHAPES become EQUATIONS, and geometry problems become algebra problems', right: true, fb: '🎉 That\'s the fusion. A circle stops being a drawing and becomes x² + y² = 25. Two thousand years of Greek geometry suddenly opened to the power tools of algebra.' },
              { label: 'It made flies easier to swat', right: false, fb: '🤔 The fly escaped, history records. The prize was bigger: if a POINT is two numbers, what does a whole CURVE of points become?' },
              { label: 'It was the first map ever made', right: false, fb: '🤔 Maps are ancient — but they were pictures. Descartes\' leap was that positions become NUMBERS, so shapes obey equations you can calculate with.' },
            ] },
          { t: 'reveal', html: `The <strong>Cartesian plane</strong>: an x-axis, a y-axis, and every point named by an ordered pair <code>(x, y)</code>. The magic is the dictionary it creates: a line is <code>y = 2x + 1</code>, a circle is <code>x² + y² = r²</code>, an intersection of shapes is just <em>simultaneous equations</em>. Every video game world, every GPS fix, every graph you have ever seen lives on Descartes' ceiling.` },
          { t: 'key', html: `Points become number pairs (x, y); shapes become equations; geometry questions become calculations. One sick day in 1619 → every screen you've ever looked at.` },
          { t: 'example', title: '🎮 Your game character', html: `In a 2D game, your character at (340, 220) moves right by 5 each frame: just x → x + 5. A wall is "the set of points with x = 400". Collision detection = comparing numbers. The entire game engine is Descartes running 60 times a second.` },
          { t: 'try', q: 'Point A is at (3, −2). Where is it?',
            choices: [
              { label: '3 right of the origin, 2 below it — bottom-right quadrant', right: true, fb: '🎉 x first (right/left), then y (up/down). Negative y dives below the axis.' },
              { label: '3 up and 2 left', right: false, fb: '🤔 Order matters in an ORDERED pair: the first number is always the x (horizontal) step.' },
              { label: '2 right and 3 down', right: false, fb: '🤔 Swapped! (3, −2) and (−2, 3) are entirely different points — that\'s why the pair is ordered.' },
            ] },
        ],
      },
      {
        id: 'distance-formula', icon: '📏', title: 'Distance on the Grid', sub: 'Pythagoras returns',
        blocks: [
          { t: 'story', html: `A delivery drone sits at (1, 2); the customer waits at (7, 10) — units in km. The drone can't follow streets; it flies <em>straight</em>. The screen must show the crow-flies distance… but all the computer holds are four numbers. An old friend from Grade 8 is about to make a comeback.` },
          { t: 'think', q: 'How do you get a straight-line distance out of two coordinate pairs?',
            choices: [
              { label: 'The x-change (6) and y-change (8) are the legs of a right triangle — the distance is its hypotenuse: √(36+64) = 10', right: true, fb: '🎉 Pythagoras lives inside the grid! Horizontal and vertical steps are always perpendicular, so a² + b² = c² applies to ANY two points.' },
              { label: 'Add the changes: 6 + 8 = 14 km', right: false, fb: '🤔 14 km is the L-shaped taxi route (along streets). The drone cuts the diagonal — which famous theorem turns two perpendicular legs into a shortcut?' },
              { label: 'Average the coordinates somehow', right: false, fb: '🤔 Averaging finds the MIDPOINT (coming next topic!) — a place, not a length. For length, build a right triangle from the two changes.' },
            ] },
          { t: 'reveal', html: `The <strong>distance formula</strong>: <code>d = √((x₂−x₁)² + (y₂−y₁)²)</code> — nothing more than Pythagoras wearing coordinates. Every "how far apart?" in the digital world runs through it: GPS navigation, the aim-assist in games, a robot deciding which charging dock is nearer, your phone ranking nearby restaurants.` },
          { t: 'key', html: `d = √(Δx² + Δy²). The grid turns every distance question into a right triangle — Pythagoras is the engine inside the distance formula.` },
          { t: 'example', title: '🤖 The robot\'s choice', html: `A warehouse robot at (4, 3) sees chargers at (0, 0) and (7, 7). Distances: √(16+9) = 5 versus √(9+16) = 5. A perfect tie — the robot's tiebreaker code wakes up. Two different-looking journeys, identical length: only the formula could tell.` },
          { t: 'try', q: 'How far apart are (−2, 1) and (4, 9)?',
            choices: [
              { label: '10 — Δx = 6, Δy = 8, √(36 + 64) = √100', right: true, fb: '🎉 A hidden 6-8-10 triangle (the 3-4-5 family doubled). Watch the negatives: 4 − (−2) = 6.' },
              { label: '14 — walk 6 across then 8 up', right: false, fb: '🤔 That\'s the taxi distance again. Straight-line means hypotenuse: square, add, root.' },
              { label: '√52', right: false, fb: '🤔 Check Δx: from −2 to 4 is 4 − (−2) = 6, not 4. Subtracting a negative strikes again!' },
            ] },
        ],
      },
      {
        id: 'midpoint-slope', icon: '⚖️', title: 'Midpoints & Gradients', sub: 'The balance point and the tilt',
        blocks: [
          { t: 'story', html: `Two towns, Avalon at (2, 3) and Brookfield at (8, 11), agree to build a shared hospital — at the exact halfway point, to be perfectly fair. Then the road engineer asks a second question: "how steep will the straight road between them be?" Two questions, two tools, both one line of arithmetic.` },
          { t: 'think', q: 'Where is the fair hospital site?',
            choices: [
              { label: '(5, 7) — average the x\'s and average the y\'s', right: true, fb: '🎉 The midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2). Halfway across AND halfway up simultaneously — averages are balance points.' },
              { label: '(6, 8) — subtract the coordinates', right: false, fb: '🤔 (6, 8) is the CHANGE between the towns (Δx, Δy), useful for slope — but it\'s a displacement, not a place. For "halfway", what do you do with two numbers to find their middle?' },
              { label: '(10, 14) — add them', right: false, fb: '🤔 Adding overshoots past Brookfield entirely! Add… then divide by 2. The middle of 2 and 8 is?' },
            ] },
          { t: 'reveal', html: `<strong>Midpoint</strong> = the average of the endpoints: <code>((x₁+x₂)/2, (y₁+y₂)/2)</code>. <strong>Gradient (slope)</strong> = <code>(y₂−y₁)/(x₂−x₁)</code> — rise over run, now between any two named points: here 8/6 = 4/3. And a pair of facts engineers lean on daily: parallel lines share the same gradient, while <strong>perpendicular gradients multiply to −1</strong> (one is the negative reciprocal of the other — tilt a line 90° and rise/run swap and flip sign).` },
          { t: 'key', html: `Midpoint: average the coordinates. Gradient: Δy/Δx. Parallel ⇔ equal gradients; perpendicular ⇔ gradients multiply to −1.` },
          { t: 'example', title: '📐 The perpendicular water pipe', html: `The Avalon–Brookfield road has gradient 4/3. A water main must cross it at a perfect right angle: its gradient must be −3/4 (check: 4/3 × −3/4 = −1). The construction crew never measures an angle — the numbers carry the 90° for them.` },
          { t: 'try', q: 'A line has gradient 2. A second line is PERPENDICULAR to it. The second gradient is…',
            choices: [
              { label: '−1/2 — flip and negate, so 2 × (−1/2) = −1', right: true, fb: '🎉 The negative reciprocal. Steep up-2-per-step crosses gentle down-half-per-step at exactly 90°.' },
              { label: '−2 — just go downhill instead', right: false, fb: '🤔 −2 is the MIRROR of 2, not its perpendicular: 2 × (−2) = −4 ≠ −1. You must flip the fraction too.' },
              { label: '1/2 — flip it', right: false, fb: '🤔 Half right! 2 × 1/2 = +1, but perpendicularity demands −1. Flip AND negate.' },
            ] },
        ],
      },
      {
        id: 'line-equations', icon: '✍️', title: 'The Equation of a Line', sub: 'From two dots to infinite prediction',
        blocks: [
          { t: 'story', html: `A startup measured exactly two things: in month 2 it had 700 users; in month 5 it had 1,600. An investor asks the killer question: <em>"If this trend holds, where are you in month 12?"</em> Two dots on a graph — and the demand to extend them into the future. This is the everyday miracle of the line's equation.` },
          { t: 'think', q: 'How do two points become a prediction machine?',
            choices: [
              { label: 'Two points fix the line completely: gradient = 900/3 = 300 users/month, then trace back to the intercept and you own every month on the line', right: true, fb: '🎉 m = (1600−700)/(5−2) = 300. Intercept: 700 − 300×2 = 100. Rule: u = 300t + 100 → month 12 predicts 3,700 users.' },
              { label: 'You can\'t — two data points is too few for any conclusion', right: false, fb: '🤔 Too few to be CONFIDENT the trend holds — a fair worry! But geometrically, exactly one straight line passes through two points. IF the growth is linear, two points determine everything.' },
              { label: 'Double the month-5 number for month 10 and estimate from there', right: false, fb: '🤔 Doubling assumes users scale with time from zero — but the line needn\'t pass through the origin. Find its true gradient and intercept instead.' },
            ] },
          { t: 'reveal', html: `From two points: gradient <code>m = Δy/Δx</code>, then plug either point into <code>y = mx + c</code> to find <em>c</em>. Faster still, the <strong>point-gradient form</strong>: <code>y − y₁ = m(x − x₁)</code> — one point and a tilt define the whole line. This is the workhorse of all data science: "fit a line, read the trend" begins exactly here.` },
          { t: 'key', html: `Two points → one line → infinite predictions: m = Δy/Δx, then y − y₁ = m(x − x₁). Where lines CROSS, solve the equations simultaneously — that point satisfies both stories at once.` },
          { t: 'example', title: '🚗 When does the cheaper car win?', html: `Petrol car: ₹8/km to run. EV: ₹2/km but costs ₹3,00,000 more upfront. Cost lines: y = 8x and y = 2x + 300000. Intersection: 8x = 2x + 300000 → x = 50,000 km. Before 50,000 km the petrol car is cheaper; after, the EV wins forever. One intersection point = an entire buying decision.` },
          { t: 'try', q: 'The line through (1, 4) and (3, 10) has equation…',
            choices: [
              { label: 'y = 3x + 1 — gradient 6/2 = 3, and 4 = 3(1) + 1 confirms c = 1', right: true, fb: '🎉 Check the second point too: 3(3) + 1 = 10 ✓. Two dots, fully decoded.' },
              { label: 'y = 6x − 2', right: false, fb: '🤔 Gradient = Δy/Δx = (10−4)/(3−1) = 6/2. Simplify before building the equation.' },
              { label: 'y = 2x + 2', right: false, fb: '🤔 It passes the first point (2+2=4 ✓) but fails the second: 2(3)+2 = 8 ≠ 10. A true line equation must satisfy BOTH points.' },
            ] },
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `From a fly on a ceiling to GPS, game engines, and growth forecasts — you've seen geometry and algebra become one subject. Teach the fusion.` },
          { t: 'teach',
            prompt: 'Explain Descartes\' big idea — how putting numbers on points changed mathematics — and give one modern technology that depends on it.',
            placeholder: 'Imagine lying in bed watching a fly on the ceiling...',
            keywords: [
              ['point', 'coordinates', 'pair', '(x, y)', 'x and y', 'position', 'grid', 'plane'],
              ['equation', 'algebra', 'number', 'calculate', 'formula'],
              ['gps', 'game', 'map', 'screen', 'robot', 'navigation', 'graph', 'pixel'],
            ],
            hint: 'cover points-as-number-pairs, shapes-becoming-equations, and a technology like GPS or games' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     🔭 TRIGONOMETRY
     ═════════════════════════════════════════════ */
  'trigonometry': {
    worldId: 'senior-trigonometry',
    icon: '🔭',
    name: 'Trigonometry',
    grade: 'Grade 10 · Senior School',
    accent: '#00838F', dark: '#004D40', bg: '#E0F7FA',
    professions: ['✈️ Pilots & Navigators', '🎵 Audio Engineers', '🏛️ Architects', '🌌 Astronomers', '🎮 3D Graphics Devs', '🌊 Oceanographers'],
    topics: [
      {
        id: 'shadow-measurers', icon: '🌅', title: 'The Shadow Measurers', sub: 'Thales and the pyramid',
        blocks: [
          { t: 'story', html: `Egypt, ~600 BC. The philosopher Thales stands before the Great Pyramid, and the priests challenge him to state its height — without climbing it. Thales plants his walking stick in the sand and waits, watching its shadow shrink as the sun climbs… then announces he'll measure the pyramid <em>at one particular moment</em>.` },
          { t: 'think', q: 'Which moment, and why does it crack the problem?',
            choices: [
              { label: 'The moment his stick\'s shadow equals the stick\'s own length — at that instant EVERY shadow equals its object\'s height, including the pyramid\'s', right: true, fb: '🎉 Sun rays arrive parallel, so all objects and shadows form similar triangles with identical proportions. Measure the pyramid\'s shadow on the ground, and the height surrenders.' },
              { label: 'Noon, when shadows vanish', right: false, fb: '🤔 No shadow, no data! Thales needed a shadow with a KNOWN relationship to height. When his stick\'s shadow matched the stick\'s length, what was true of the pyramid\'s shadow?' },
              { label: 'Sunset, when shadows are longest', right: false, fb: '🤔 Long shadows are dramatic but the ratio is awkward. Thales chose the moment the ratio became exactly 1:1 — when was that for his stick?' },
            ] },
          { t: 'reveal', html: `Thales exploited <strong>similar triangles</strong>: same angles → same <em>ratios</em> between sides, regardless of size. The deeper discovery underneath: in a right triangle, once you fix one acute angle, the ratios between the sides are <strong>locked forever</strong> — a 30° ramp has the same side ratios whether it's a wheelchair ramp or a mountain road. Trigonometry is the science of those locked ratios.` },
          { t: 'key', html: `Fix an angle in a right triangle and every side ratio is fixed too, at any scale. Similar triangles let a stick measure a pyramid — ratios are size-blind.` },
          { t: 'example', title: '🌳 The forester\'s trick', html: `A forester walks away from a tree until the top lines up at 45° (easily sighted with a simple tool). At 45°, height = horizontal distance. She paces 23 m back to the trunk, adds her eye height: tree ≈ <strong>24.5 m</strong>. Thales' move, still used daily.` },
          { t: 'try', q: 'At the magic 1:1 shadow moment, the pyramid\'s shadow (measured from the centre of its base) is 147 m. The pyramid is…',
            choices: [
              { label: '147 m tall — shadow equals height at that moment', right: true, fb: '🎉 And that is, in fact, the Great Pyramid\'s original height. Thales measured a wonder of the world with a stick.' },
              { label: '294 m — double the shadow', right: false, fb: '🤔 The whole point of Thales\' chosen moment: ratio exactly 1:1. No doubling — the stick proved it.' },
              { label: 'Unknowable without the sun\'s angle', right: false, fb: '🤔 Thales sidestepped angle-measuring entirely — his stick TOLD him when the ratio hit 1:1. That was the genius.' },
            ] },
        ],
      },
      {
        id: 'sohcahtoa', icon: '🧭', title: 'Sine, Cosine, Tangent', sub: 'Naming the locked ratios',
        blocks: [
          { t: 'story', html: `If every angle locks its triangle's ratios, someone should <em>tabulate</em> them — measure the ratios once for every angle, and never measure a tall thing the hard way again. Ancient astronomers did exactly that, and the three most useful ratios earned names you now carry in your calculator: <strong>sin</strong>, <strong>cos</strong>, <strong>tan</strong>.` },
          { t: 'think', q: 'Relative to an angle θ in a right triangle, the three sides are: Opposite (across from θ), Adjacent (next to θ), Hypotenuse (longest). Which ratio should "tangent" be, if tan 45° = 1?',
            choices: [
              { label: 'Opposite ÷ Adjacent — at 45° the two legs are equal, making the ratio exactly 1', right: true, fb: '🎉 TOA: Tan = Opp/Adj. A 45° right triangle is isosceles, legs equal, ratio 1. The forester\'s trick was tan 45° all along.' },
              { label: 'Opposite ÷ Hypotenuse', right: false, fb: '🤔 That ratio (sine!) at 45° equals 1/√2 ≈ 0.707, not 1. Which two sides are EQUAL at 45°?' },
              { label: 'Hypotenuse ÷ Opposite', right: false, fb: '🤔 The hypotenuse is the longest side, so this ratio always exceeds 1 — and the standard three ratios keep the hypotenuse on the bottom or absent. At 45°, which pair of sides match?' },
            ] },
          { t: 'reveal', html: `<strong>SOH-CAH-TOA</strong>: <code>sin θ = Opp/Hyp</code> · <code>cos θ = Adj/Hyp</code> · <code>tan θ = Opp/Adj</code>. Your calculator holds the complete table for every angle — the finished work of centuries of astronomers. Landmarks worth memorising: sin 30° = 1/2 (a 30° ramp gains half its length in height), cos 60° = 1/2, tan 45° = 1. Know one angle and one side of any right triangle, and the other sides are one multiplication away.` },
          { t: 'key', html: `SOH CAH TOA — three locked ratios, pre-computed for every angle. One angle + one side = the whole triangle. sin 30° = ½, tan 45° = 1.` },
          { t: 'example', title: '🛫 The climbing jet', html: `A jet climbs at 18° while flying 4,000 m along its path. Height gained = 4000 × sin 18° ≈ 4000 × 0.309 ≈ <strong>1,236 m</strong>. The flight computer runs sines continuously — every climb, every bank, every descent.` },
          { t: 'try', q: 'A 6 m ladder leans at 60° to the ground. How high up the wall does it reach? (sin 60° ≈ 0.866)',
            choices: [
              { label: '≈ 5.2 m — height = 6 × sin 60°, opposite over hypotenuse', right: true, fb: '🎉 The wall height is OPPOSITE the 60° angle; the ladder is the hypotenuse. SOH: 6 × 0.866 ≈ 5.2 m.' },
              { label: '≈ 3 m — use cos 60° = 0.5', right: false, fb: '🤔 cos gives the ADJACENT side — how far the ladder\'s foot sits from the wall (3 m). The height is the opposite side: which ratio uses Opp/Hyp?' },
              { label: '6 m — the ladder\'s length is the height', right: false, fb: '🤔 Only a ladder flat against the wall (90°) reaches its full length. At 60° it leans, sacrificing some height — sin 60° tells exactly how much survives.' },
            ] },
        ],
      },
      {
        id: 'finding-heights', icon: '🗼', title: 'Measuring the Unreachable', sub: 'Angles of elevation',
        blocks: [
          { t: 'story', html: `You stand 50 m from a radio tower. You can't climb it, can't drop a tape from it, can't even touch it — there's a fence. But tilting your head from horizontal up to the tower's tip sweeps an angle a phone app measures instantly: <strong>38°</strong>. You now have everything required.` },
          { t: 'think', q: 'Distance 50 m, angle of elevation 38°. Which ratio finds the height?',
            choices: [
              { label: 'tan — height is opposite the angle, distance is adjacent: h = 50 × tan 38° ≈ 39 m', right: true, fb: '🎉 TOA: tan 38° = h/50, so h = 50 × 0.781 ≈ 39 m (+ your eye height). The fence never mattered.' },
              { label: 'sin — it\'s the most famous one', right: false, fb: '🤔 sin needs the HYPOTENUSE (your eye-to-tip sightline), which you never measured. You have the ground distance — the side ADJACENT to your angle. Which ratio pairs opposite with adjacent?' },
              { label: 'You still need to reach the tower', right: false, fb: '🤔 That\'s the magic on offer: two measurements from where you stand — one distance, one angle — and trig does the climbing.' },
            ] },
          { t: 'reveal', html: `The <strong>angle of elevation</strong> (up from horizontal) or <strong>depression</strong> (down from horizontal) turns inaccessible heights and depths into desk calculations. The pattern never changes: sketch the right triangle, label Opp/Adj/Hyp <em>relative to the known angle</em>, pick the ratio joining your known pair to your unknown, solve. Surveyors, artillery officers, drone pilots, and astronomers all run this exact loop.` },
          { t: 'key', html: `Sketch the triangle · label sides relative to the angle · choose the ratio that links known to unknown · solve. Elevation looks up, depression looks down — both deliver unreachable measurements.` },
          { t: 'example', title: '🚁 The rescue hover', html: `A coastguard helicopter hovers at 90 m and spots a raft at a 25° angle of depression. Horizontal distance: the depression angle equals the elevation angle from the raft (alternate angles), so 90/tan 25° ≈ 90/0.466 ≈ <strong>193 m</strong>. The winch officer knows the approach distance without a single external measurement.` },
          { t: 'try', q: 'From a 40 m cliff top, a boat is seen at 18° below horizontal. Roughly how far is the boat from the cliff base? (tan 18° ≈ 0.325)',
            choices: [
              { label: '≈ 123 m — distance = 40 ÷ tan 18°', right: true, fb: '🎉 The cliff (40 m) is opposite the 18° angle at the boat; the sea distance is adjacent. 40/0.325 ≈ 123 m.' },
              { label: '≈ 13 m — multiply 40 × tan 18°', right: false, fb: '🤔 Multiplying treats the 40 m as the ADJACENT side — but the cliff height sits opposite the angle at the boat. The unknown is downstairs: divide.' },
              { label: '≈ 40 m — same as the cliff', right: false, fb: '🤔 Equal height and distance happens only at 45°. At a shallow 18°, the boat is much FARTHER out than the cliff is tall.' },
            ] },
        ],
      },
      {
        id: 'waves-and-circles', icon: '🎵', title: 'Waves & Circles', sub: 'Why sine is the sound of music',
        blocks: [
          { t: 'story', html: `Sit on a Ferris wheel and track only your <em>height</em> as it turns steadily: rise… crest… sink… bottom… rise again. Plot height against time and an unmistakable shape rolls out — smooth, endless, wavelike. Now look at a microphone's recording of a tuning fork: <strong>the identical shape</strong>. Why would a spinning wheel and a musical note draw the same curve?` },
          { t: 'think', q: 'What connects circular motion to the wave shape?',
            choices: [
              { label: 'Height on a circle IS sine: as the angle grows steadily, sin θ traces the wave — anything that spins or vibrates steadily draws it', right: true, fb: '🎉 sin θ = height/radius on the wheel. Steady rotation → sine wave. Vibration is rotation\'s twin, so sound, AC electricity, and tides all sing in sines.' },
              { label: 'Coincidence — circles and sounds are unrelated', right: false, fb: '🤔 The match is exact, peak for peak — too perfect for chance. On the wheel: your height equals the radius times WHAT function of the angle turned?' },
              { label: 'The wheel squeaks musically', right: false, fb: '🤔 😄 The connection is in the geometry: extend SOH to a point moving around a circle — what does sin of the turning angle give you?' },
            ] },
          { t: 'reveal', html: `Promote sine from triangles to the <strong>unit circle</strong>: a point circling at radius 1 has height <code>sin θ</code> and horizontal position <code>cos θ</code> as θ sweeps round. Let θ grow with time and sine becomes a <strong>wave</strong> — the purest repeating pattern in nature. Sound is sine waves layered (each instrument a different recipe of them); AC electricity alternates sinusoidally; tides, daylight hours, even your heartbeat trace approximate sines. Trigonometry's day job is triangles; its night job is <em>everything that repeats</em>.` },
          { t: 'key', html: `On the unit circle, sin θ = height and cos θ = horizontal position. Steady rotation makes sine a wave — the mathematics of sound, electricity, tides, and all rhythm.` },
          { t: 'example', title: '🎚️ The audio engineer\'s daily bread', html: `Concert pitch A is a sine wave at 440 cycles per second: y = sin(2π · 440t). Doubling the frequency (880 Hz) jumps it an octave; an equalizer boosts or trims chosen frequencies. Every mixing desk is applied trigonometry with knobs on.` },
          { t: 'try', q: 'A Ferris wheel of radius 20 m turns steadily. Your height above the axle is h = 20 sin θ. What is the wave\'s maximum, and when does it occur?',
            choices: [
              { label: '20 m, at θ = 90° — sine peaks at 1 when you\'re at the top of the circle', right: true, fb: '🎉 sin 90° = 1 → h = 20 m, the very top. The wave\'s peak IS the wheel\'s summit — the two pictures are one.' },
              { label: '40 m, at θ = 180°', right: false, fb: '🤔 The radius is the leash — height above the axle can never exceed 20 m. And at 180° you\'re level with the axle on the far side: sin 180° = 0.' },
              { label: 'It grows forever as θ grows', right: false, fb: '🤔 Sine never escapes the band −1 to +1 — circular motion repeats, it doesn\'t climb. That bounded repetition is exactly what makes it a WAVE.' },
            ] },
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `A stick measuring a pyramid, three locked ratios, unreachable towers, and the wave hiding inside every circle — trigonometry's whole arc is yours. Teach it.` },
          { t: 'teach',
            prompt: 'Explain how sin/cos/tan let you measure something you cannot reach, and name one thing in daily life secretly made of sine waves.',
            placeholder: 'In a right triangle, once you know one angle...',
            keywords: [
              ['ratio', 'opposite', 'adjacent', 'hypotenuse', 'sides', 'similar'],
              ['angle', 'tan', 'sin', 'cos', 'elevation'],
              ['height', 'tower', 'pyramid', 'distance', 'measure', 'sound', 'music', 'wave', 'electricity', 'tide'],
            ],
            hint: 'mention the side ratios, using a known angle, and a real measurement or wave example' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     🧬 ADVANCED STATISTICS
     ═════════════════════════════════════════════ */
  'advanced-stats': {
    worldId: 'senior-statistics',
    icon: '🧬',
    name: 'Advanced Statistics',
    grade: 'Grade 10 · Senior School',
    accent: '#6D4C41', dark: '#3E2723', bg: '#EFEBE9',
    professions: ['🧬 Medical Researchers', '📊 Data Scientists', '🌏 Policy Makers', '💊 Epidemiologists', '🤖 ML Engineers', '📰 Fact-Checkers'],
    topics: [
      {
        id: 'average-that-lies', icon: '💼', title: 'The Average That Lies', sub: 'Mean, median, and the billionaire on the bus',
        blocks: [
          { t: 'story', html: `A startup advertises: <em>"Average salary at our company: ₹48 lakh!"</em> You join… and discover your nine teammates each earn ₹6 lakh while the founder pays herself ₹4.26 crore. The ad was arithmetically TRUE. You have just been mugged by an average.` },
          { t: 'think', q: 'The mean is honestly ₹48 lakh. What number would have told the truth about a typical employee?',
            choices: [
              { label: 'The MEDIAN — line everyone up and take the middle value: ₹6 lakh. One billionaire can drag the mean anywhere, but barely nudges the middle', right: true, fb: '🎉 The median is outlier-proof. One extreme value shifts the mean enormously but only steps the middle person over by half a place.' },
              { label: 'A more precise mean, with decimals', right: false, fb: '🤔 Precision isn\'t the problem — the mean is exactly right and still misleading. The founder\'s crore pulls it far above what anyone TYPICAL earns. Which statistic refuses to be pulled?' },
              { label: 'No single number can describe salaries', right: false, fb: '🤔 Healthy skepticism! But one number does resist the billionaire\'s gravity: sort the list and look dead centre.' },
            ] },
          { t: 'reveal', html: `Three "centres", three personalities: <strong>mean</strong> (sum ÷ count — fair shares, but outlier-sensitive), <strong>median</strong> (middle of the sorted list — robust), <strong>mode</strong> (most common value — what you'd most likely meet). When a distribution is <em>skewed</em> — incomes, house prices, social-media followers — mean and median split apart, and which one a person quotes usually reveals what they're selling. House-price reports use the median for exactly this reason.` },
          { t: 'key', html: `Mean shares it out; median picks the middle; mode picks the popular. Outliers haul the mean, barely touch the median. Skewed data + quoted mean = check who benefits.` },
          { t: 'example', title: '🚌 The billionaire boards a bus', html: `Ten commuters with average wealth ₹5 lakh ride a bus. A billionaire steps aboard: the MEAN wealth rockets past ₹900 crore per person — "statistically", a bus of crorepatis. The MEDIAN ticks up one seat: still about ₹5 lakh. Same bus, two stories; one of them honest.` },
          { t: 'try', q: 'Data: 2, 3, 3, 4, 88. Which statement is true?',
            choices: [
              { label: 'Median = 3, mean = 20 — the 88 inflates the mean nearly 7× above the typical value', right: true, fb: '🎉 Sum 100 ÷ 5 = 20; sorted middle = 3. One outlier, and the two centres tell wildly different tales.' },
              { label: 'Mean = 3, median = 20', right: false, fb: '🤔 Reversed! The MEDIAN is the sorted middle (2, 3, **3**, 4, 88). The mean is the one the 88 drags skyward.' },
              { label: 'Both equal about 20', right: false, fb: '🤔 The median doesn\'t care how BIG the 88 is — only that it\'s one value to the right. Middle of the sorted list: ?' },
            ] },
        ],
      },
      {
        id: 'measuring-spread', icon: '🎯', title: 'Measuring Spread', sub: 'Two archers, same average',
        blocks: [
          { t: 'story', html: `Two archers each average a score of 7. Identical, says the mean. But Archer A shoots 7, 7, 7, 7, 7 — metronomic. Archer B shoots 10, 2, 10, 3, 10 — brilliance and disaster alternating. Who do you send to the Olympics? The mean has no idea. You need a number for <em>consistency</em>.` },
          { t: 'think', q: 'How do you turn "how scattered are the scores?" into a single number?',
            choices: [
              { label: 'Measure each score\'s distance from the mean and combine those distances — big typical distance = wild, small = steady', right: true, fb: '🎉 That\'s the soul of standard deviation: the typical distance from the mean. A: deviations all 0. B: deviations 3, 5, 3, 4, 3 — huge.' },
              { label: 'Just add up the deviations from the mean', right: false, fb: '🤔 Beautiful trap: the raw deviations ALWAYS sum to zero — overs cancel unders perfectly, for any data. You must stop the cancellation first (square them!), then average.' },
              { label: 'Report the highest score', right: false, fb: '🤔 Both archers hit 10s. The difference is what happens BETWEEN the highs. You need every score\'s distance from centre, not the best moment.' },
            ] },
          { t: 'reveal', html: `<strong>Standard deviation (σ)</strong>: square each deviation (killing the cancellation), average the squares (<em>variance</em>), then square-root back to natural units. Archer A: σ = 0. Archer B: σ ≈ 3.6. Small σ = predictable; big σ = volatile. This single number is the financial world's definition of <em>risk</em>, the factory's definition of <em>quality</em>, and the lab's definition of <em>precision</em>. For many bell-shaped datasets, ~68% of values sit within 1σ of the mean and ~95% within 2σ — so "2σ away" already means <em>unusual</em>.` },
          { t: 'key', html: `Standard deviation = typical distance from the mean (square deviations → average → root). Means say WHERE the data centres; σ says HOW TIGHTLY. Risk, quality, and precision are all σ in disguise.` },
          { t: 'example', title: '📦 Why factories worship σ', html: `A bottling plant fills bottles at a mean of 500 ml. With σ = 2 ml, ~95% of bottles land between 496 and 504 — fine. If σ creeps to 10 ml, thousands of bottles ship under-filled (lawsuits) or overflowing (waste). The whole "Six Sigma" quality movement is literally named after this number.` },
          { t: 'try', q: 'Two bus routes both average 30 min. Route X: σ = 2 min. Route Y: σ = 12 min. You have a flight to catch. Which route, and why?',
            choices: [
              { label: 'X — same average, far smaller spread: 34 minutes is nearly guaranteed, while Y\'s bad days run 50+', right: true, fb: '🎉 When stakes are high, you don\'t buy the mean — you buy the spread. Low σ IS reliability.' },
              { label: 'Y — its lucky days are quicker', right: false, fb: '🤔 True, Y sometimes does 18 minutes… and sometimes 54. With a flight on the line, is the upside worth the tail risk? What does σ = 12 say about bad days?' },
              { label: 'Identical — same mean', right: false, fb: '🤔 That\'s exactly the blindness σ was invented to cure. Two archers, average 7. Two routes, average 30. The mean cannot see risk.' },
            ] },
        ],
      },
      {
        id: 'sampling-bias', icon: '🗳️', title: 'The Poll That Fooled America', sub: 'Sampling & bias',
        blocks: [
          { t: 'story', html: `USA, 1936. <em>Literary Digest</em> magazine mails <strong>10 million</strong> ballots to predict the presidential election and receives 2.4 million back — the largest poll in history. Verdict: Landon beats Roosevelt in a landslide. Meanwhile a young pollster named George Gallup surveys just <strong>50,000</strong> people… and predicts the opposite. Roosevelt wins 46 of 48 states. The giant poll wasn't just wrong — it was wrong by 19 points.` },
          { t: 'think', q: 'How did 2,400,000 answers lose to 50,000?',
            choices: [
              { label: 'The Digest mailed car owners and telephone subscribers — in 1936, the wealthy. A huge sample of the WRONG people beats nobody', right: true, fb: '🎉 Biased frame + voluntary response = doom at any size. Gallup\'s small sample was chosen to MIRROR the whole electorate — representativeness beats volume.' },
              { label: 'Gallup got lucky', right: false, fb: '🤔 He repeated the feat election after election and founded an industry. Look at WHERE the Digest got its mailing lists: car registries and phone books, during the Great Depression…' },
              { label: '2.4 million still wasn\'t enough people', right: false, fb: '🤔 Size was never the issue — 2.4 million of the wrong slice just measures that slice very precisely. Whom did car-and-telephone lists systematically exclude in 1936?' },
            ] },
          { t: 'reveal', html: `A sample teaches you about a population only if it's <strong>representative</strong> — and the gold standard is <strong>random selection</strong>, where every member has an equal chance of being picked. The classic killers: <strong>selection bias</strong> (the frame excludes someone systematically), <strong>voluntary response bias</strong> (the angry and the passionate answer; the contented don't), <strong>survivorship bias</strong> (you only study what made it through). A small clean sample beats a mountain of skew — every time.` },
          { t: 'key', html: `Representative > big. Random selection is the gold standard. Before trusting any statistic, interrogate it: WHO was asked, who was left out, and who chose to answer?` },
          { t: 'example', title: '✈️ The bullet holes that weren\'t there', html: `WWII: returning bombers come back riddled with holes in the wings and tail, so commanders propose armouring those areas. Statistician Abraham Wald objects: you're studying the <em>survivors</em>. Planes hit in the engine never came home. <strong>Armour where the returning planes are clean.</strong> Survivorship bias, defeated — and thousands of crews saved.` },
          { t: 'try', q: 'A website banner asks "Do you love our site?" — 96% say yes. The flaw?',
            choices: [
              { label: 'Voluntary response on a biased frame: only current visitors who bother to click are counted — the people who left in disgust were never asked', right: true, fb: '🎉 The 96% measures enthusiasm among self-selected fans. The silent majority — and everyone who bounced — are invisible. Digest 1936, miniaturised.' },
              { label: 'The sample is too small', right: false, fb: '🤔 It might be huge! Size can\'t cure a frame that structurally excludes the unhappy. WHO never gets the chance to vote here?' },
              { label: 'Nothing — 96% is overwhelming', right: false, fb: '🤔 Overwhelming among whom? People who hated the site closed the tab long ago. A poll of a fan club will always adore the band.' },
            ] },
        ],
      },
      {
        id: 'correlation-causation', icon: '🍦', title: 'Ice Cream & Sharks', sub: 'Correlation is not causation',
        blocks: [
          { t: 'story', html: `A coastal city's data analyst finds a startling pattern: in months when <strong>ice-cream sales</strong> rise, <strong>shark attacks</strong> rise too. The correlation is strong, consistent, year after year. A councillor drafts an emergency proposal: <em>ban ice cream to protect swimmers</em>. The numbers are real. The conclusion is absurd. What went wrong?` },
          { t: 'think', q: 'Ice cream and shark attacks genuinely move together. Why?',
            choices: [
              { label: 'A lurking third variable — SUMMER — drives both: heat sells ice cream AND fills the ocean with swimmers', right: true, fb: '🎉 The confounder. A and B can correlate because A causes B, B causes A, or hidden C causes both. The data alone cannot tell you which.' },
              { label: 'Sugar in the water attracts sharks', right: false, fb: '🤔 Creative marine biology! But ask the simpler question: what ELSE is true in exactly the months when ice-cream sales spike? What season is it?' },
              { label: 'The correlation must be a data error', right: false, fb: '🤔 The correlation is genuine and will replicate every single year. The error is in the LEAP from "move together" to "one causes the other".' },
            ] },
          { t: 'reveal', html: `<strong>Correlation is not causation.</strong> When A and B move together: maybe A→B, maybe B→A, maybe hidden C→both (the <em>confounder</em>), and sometimes — with thousands of variables — pure coincidence (per-capita cheese consumption tracks bedsheet-tangling deaths; nobody legislates cheese). The cure is the <strong>controlled experiment</strong>: randomly split subjects, change ONE thing, compare. Randomization scatters every confounder evenly across both groups — which is why drug trials randomize, and why "studies show a link" is the beginning of a question, not the end of one.` },
          { t: 'key', html: `Moving together proves nothing about cause: consider A→B, B→A, hidden C, and coincidence. Only randomized controlled experiments isolate causation — that's why medicine runs RCTs.` },
          { t: 'example', title: '💊 How a real drug gets proven', html: `10,000 volunteers, randomly split. 5,000 get the vaccine, 5,000 a placebo; neither patients nor doctors know who got which (double-blind). Randomness equalizes age, wealth, habits — every confounder. If illness then differs between groups, the vaccine is the only standing explanation. This design is the reason modern medicine works.` },
          { t: 'try', q: 'Children who eat breakfast score higher on tests. Therefore breakfast causes better grades. The sharpest objection is…',
            choices: [
              { label: 'Confounding: families with stable routines tend to provide BOTH regular breakfasts and homework support — the breakfast may be a marker, not a cause', right: true, fb: '🎉 Perhaps breakfast helps; perhaps it just travels with other advantages. Only a randomized experiment (assign breakfast, compare) could separate them.' },
              { label: 'The study should have surveyed more children', right: false, fb: '🤔 More children makes the CORRELATION more certain — and does absolutely nothing to establish causation. The gap isn\'t sample size; it\'s the missing experiment.' },
              { label: 'No objection — the link is proof enough', right: false, fb: '🤔 By that standard, ice cream causes shark attacks and we must ban sundaes. What third factor might travel with regular breakfasts?' },
            ] },
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The Diamond gate',
        blocks: [
          { t: 'story', html: `Lying averages, the number for risk, polls that fooled a nation, and the shark-flavoured trap of correlation — you now read statistics the way fact-checkers do. Teach it.` },
          { t: 'teach',
            prompt: 'A news headline screams: "People who drink coffee live longer — study of 50,000 adults!" Write the three questions a statistician asks before believing it, and why each matters.',
            placeholder: 'Hold on. Before trusting this headline, I would ask...',
            keywords: [
              ['correlation', 'causation', 'cause', 'confound', 'third', 'lurking'],
              ['sample', 'random', 'bias', 'representative', 'who was asked', 'selected'],
              ['experiment', 'control', 'mean', 'median', 'outlier', 'spread'],
            ],
            hint: 'question the causal leap, the sampling, and the study design / statistics used' },
        ],
      },
    ],
  },

  /* ═════════════════════════════════════════════
     💎 PROOF & MATHEMATICAL REASONING
     ═════════════════════════════════════════════ */
  'proof': {
    worldId: 'senior-proof',
    icon: '💎',
    name: 'Proof & Reasoning',
    grade: 'Grade 10 · Senior School',
    accent: '#B8860B', dark: '#6F4E00', bg: '#FFF8E1',
    professions: ['🔐 Cryptographers', '💻 Computer Scientists', '⚖️ Lawyers', '🤖 AI Safety Engineers', '🔬 Researchers', '🧮 Mathematicians'],
    topics: [
      {
        id: 'million-not-enough', icon: '🔢', title: 'When a Million Isn\'t Enough', sub: 'Why mathematicians demand proof',
        blocks: [
          { t: 'story', html: `In 1772, Euler noticed that the formula <code>n² + n + 41</code> spits out a prime number for n = 0, 1, 2, 3… He checked dozens of values: prime, prime, prime, every single time. A scientist would publish. An engineer would build on it. Test it yourself — it works for n = 10, for n = 25, for n = 39… Does the streak ever end?` },
          { t: 'think', q: 'The formula produces primes for n = 0 through 39 — forty straight successes. Is "always prime" now established?',
            choices: [
              { label: 'No — and at n = 40 it crashes: 40² + 40 + 41 = 41 × 41. Forty confirmations, then a counterexample', right: true, fb: '🎉 1681 = 41². (n=40 gives 1600+40+41 — and the +41 betrays it.) No number of examples can secure "always"; one counterexample demolishes it.' },
              { label: 'Yes — forty straight successes is overwhelming evidence', right: false, fb: '🤔 Try n = 40: 1600 + 40 + 41 = 1681. Now notice 1681 = 41 × 41… The streak was a 40-step trap.' },
              { label: 'Check up to a million; if it holds, accept it', right: false, fb: '🤔 There are claims that hold past a TRILLION and still fail (one famous conjecture\'s first counterexample exceeds 10³¹⁶). "Always" covers infinitely many cases — checking can never finish the job.' },
            ] },
          { t: 'reveal', html: `Mathematics makes claims about <strong>infinitely many cases at once</strong> — and no amount of checking covers infinity. A <strong>proof</strong> is different in kind: a chain of logic showing the claim <em>cannot fail</em>, ever. That's why a theorem proved in 300 BC (Euclid: infinitely many primes) is still bankably true under your phone's encryption today. Science says "true so far"; mathematics, uniquely, says "true, full stop".` },
          { t: 'key', html: `Examples suggest; proofs guarantee. One counterexample kills a claim; no pile of confirmations can secure one. Proof = certainty across infinitely many cases at once.` },
          { t: 'example', title: '🔐 Why your bank cares', html: `Online banking encrypts with mathematics whose security rests on PROVEN properties of prime numbers. "We tested it a lot" would be a terrifying security policy; "it is a theorem" is why your password survives contact with criminals running supercomputers.` },
          { t: 'try', q: 'Claim: "Every odd number greater than 1 is prime." Your friend offers 3, 5, 7 as evidence. The correct response is…',
            choices: [
              { label: '9 — one counterexample (9 = 3×3) and the claim is dead, despite three confirmations', right: true, fb: '🎉 Examples open the case; a counterexample closes it. Three hits mean nothing against one decisive miss.' },
              { label: 'Agree — three for three is convincing', right: false, fb: '🤔 The very next odd number is 9. Is 9 prime?' },
              { label: 'Demand fifty more examples', right: false, fb: '🤔 More confirmations can\'t rescue a universal claim — but a single FAILURE settles it instantly. Scan the odd numbers just past 7…' },
            ] },
        ],
      },
      {
        id: 'direct-proof', icon: '🔗', title: 'The Direct Proof', sub: 'Algebra as a logic machine',
        blocks: [
          { t: 'story', html: `Claim: <em>the sum of any two odd numbers is even.</em> 3+5=8 ✓, 7+9=16 ✓, 11+13=24 ✓… but you now know examples prove nothing about "any". The infinite set of odd numbers cannot be checked one by one. The trick mathematicians invented: capture ALL of them in a single algebraic costume.` },
          { t: 'think', q: 'How do you write "any odd number whatsoever" as algebra?',
            choices: [
              { label: '2k + 1, where k is any whole number — every odd number is one more than something even, so one expression wears them all', right: true, fb: '🎉 k=0 →1, k=1 →3, k=5 →11… Prove something about 2k+1 and you\'ve proven it for every odd number that exists or ever will.' },
              { label: 'Just write n and say "n is odd"', right: false, fb: '🤔 A fine start, but the proof needs to USE oddness inside the algebra. What structural fact makes a number odd? It\'s one more than a multiple of…?' },
              { label: 'List odd numbers with a "…" at the end', right: false, fb: '🤔 The "…" is a promise, not an argument. Algebra can do better: find one EXPRESSION whose values are exactly the odd numbers.' },
            ] },
          { t: 'reveal', html: `The <strong>direct proof</strong>, in full: let the two odd numbers be <code>2a + 1</code> and <code>2b + 1</code> (using different letters — they needn't be equal). Sum: <code>2a + 1 + 2b + 1 = 2a + 2b + 2 = 2(a + b + 1)</code>. That is 2 × (a whole number) — the definition of <strong>even</strong>. ∎ Three lines, and infinitely many cases close at once: every pair of odd numbers that will ever exist, already covered. This is what algebra is <em>for</em>.` },
          { t: 'key', html: `Direct proof: define generally (odd = 2k+1, even = 2k), compute, recognise the result\'s form. Three lines of algebra can settle infinitely many cases forever. ∎ marks the kill.` },
          { t: 'example', title: '🃏 The number trick exposed', html: `"Think of a number. Double it. Add 10. Halve it. Subtract your original number." The answer is always 5 — and the proof is the trick's autopsy: (2n + 10)/2 − n = n + 5 − n = <strong>5</strong>. The n vanishes, so YOUR choice never mattered. Every magician's "mind-reading" number trick dies under one line of algebra.` },
          { t: 'try', q: 'Prove-sketch: the product of any two odd numbers is odd. (2a+1)(2b+1) = 4ab + 2a + 2b + 1. Why does this finish the proof?',
            choices: [
              { label: 'It equals 2(2ab + a + b) + 1 — exactly one more than an even number, which is the definition of odd', right: true, fb: '🎉 The expression wears the odd costume 2k + 1 with k = 2ab + a + b. Every odd×odd, settled simultaneously. ∎' },
              { label: 'Because 3 × 5 = 15, which is odd', right: false, fb: '🤔 One example again! The whole point of the algebra is to cover ALL cases. Look at the expanded form: can you split it into "2 × something, plus 1"?' },
              { label: 'It doesn\'t — there are too many terms', right: false, fb: '🤔 Group them: 4ab + 2a + 2b is all even (factor out 2), leaving the lone +1. Even + 1 = ?' },
            ] },
        ],
      },
      {
        id: 'contradiction', icon: '🃏', title: 'Proof by Contradiction', sub: 'Assume the opposite, watch it explode',
        blocks: [
          { t: 'story', html: `Around 300 BC, Euclid asked: do the primes ever run out? Is there a LAST prime number, after which everything is composite? No telescope sees to infinity, and no list of primes — however long — answers the question. Euclid's move was judo: <em>suppose the primes DO run out… and ride that assumption to disaster.</em>` },
          { t: 'think', q: 'Suppose the primes are exactly p₁, p₂, …, pₙ — a complete, finite list. Euclid forms N = (p₁ × p₂ × … × pₙ) + 1. What goes wrong?',
            choices: [
              { label: 'Divide N by ANY prime on the list and the remainder is 1 — so N\'s prime factors are missing from the "complete" list. The list refutes itself', right: true, fb: '🎉 N is either prime itself or built from primes — and either way, those primes aren\'t on the list (each leaves remainder 1). "Complete list" was impossible. Primes are infinite. ∎' },
              { label: 'N is too large to compute', right: false, fb: '🤔 Size is irrelevant — the argument never computes N, it reasons about N\'s REMAINDERS. Divide N by p₁: the product part divides cleanly, and then there\'s that +1…' },
              { label: 'Nothing goes wrong; N is just another number', right: false, fb: '🤔 But every number > 1 has a prime factor. Which prime divides N? Try each pᵢ on the list: product + 1 leaves remainder… ?' },
            ] },
          { t: 'reveal', html: `<strong>Proof by contradiction</strong>: assume the claim is FALSE, deduce carefully, and arrive at an impossibility — which means the assumption was rotten, so the claim is true. It proves negatives and infinities that direct checking can't touch. The other classic: assume <code>√2 = a/b</code> in lowest terms; squaring forces a even, then b even — contradicting "lowest terms". So √2 is irrational: its decimals never repeat, <em>provably, forever</em>. Legend says this discovery so scandalised the Pythagoreans that they drowned its discoverer.` },
          { t: 'key', html: `To prove P: assume NOT-P, derive an impossibility, conclude P. The only weapon that reaches "there is no…", "it never ends", "it cannot be done".` },
          { t: 'example', title: '♟️ The everyday version', html: `"There are 367 students, so two MUST share a birthday: assume all birthdays differ — that needs 367 distinct dates, but only 366 exist. Contradiction." You\'ve used this style of reasoning informally all your life; mathematics just sharpened it into a scalpel.` },
          { t: 'try', q: 'To prove "there is no largest even number" by contradiction, the first move is…',
            choices: [
              { label: 'Assume some largest even number E exists — then E + 2 is even and bigger. Contradiction, so no largest exists', right: true, fb: '🎉 Textbook form: assume the opposite, find the immediate absurdity, close the case. ∎' },
              { label: 'List even numbers until you give up', right: false, fb: '🤔 Lists end; even numbers don\'t. Contradiction skips the infinite chase: START by supposing a largest one exists, then look at it sideways…' },
              { label: 'Prove a largest ODD number first', right: false, fb: '🤔 Same disease, no cure gained. Attack the claim head-on: grant the enemy their "largest even E" — what simple object immediately embarrasses it?' },
            ] },
        ],
      },
      {
        id: 'counterexamples', icon: '⚔️', title: 'Conjectures & Counterexamples', sub: 'How mathematics actually advances',
        blocks: [
          { t: 'story', html: `Mathematics in the wild is a duel. One side proposes a <strong>conjecture</strong> — "I believe this pattern always holds." The other side attacks with <strong>counterexamples</strong>. If the attack lands, the conjecture dies in one blow. If every attack fails and someone constructs a proof, the conjecture is crowned a <strong>theorem</strong> — immortal. Goldbach's conjecture ("every even number above 2 is a sum of two primes") has survived attack since 1742, verified past 4 × 10¹⁸ — and is still not a theorem.` },
          { t: 'think', q: 'Conjecture: "If n is prime, then 2ⁿ − 1 is prime." Test it: n = 2 → 3 ✓, n = 3 → 7 ✓, n = 5 → 31 ✓, n = 7 → 127 ✓. Crown it?',
            choices: [
              { label: 'Attack n = 11 first: 2¹¹ − 1 = 2047 = 23 × 89. The conjecture dies at its fifth test', right: true, fb: '🎉 Four glamorous confirmations, one quiet killer. (Primes where 2ⁿ−1 IS prime are the rare Mersenne primes — the largest known primes on Earth are these.)' },
              { label: 'Crown it — four for four, all prime', right: false, fb: '🤔 Euler\'s 41-formula ran FORTY for forty before collapsing. The next prime up is n = 11: compute 2047 and try small divisors… 23, say.' },
              { label: 'Reject it without checking — patterns always fail eventually', right: false, fb: '🤔 Too cynical! Some patterns survive and become theorems — that\'s the whole game. But the verdict needs either a counterexample or a proof. Hunt at n = 11.' },
            ] },
          { t: 'reveal', html: `The full life cycle: <strong>observe</strong> a pattern → <strong>conjecture</strong> boldly → <strong>hunt counterexamples</strong> honestly (smart hunting: try extremes — 0, 1, negatives, huge values, weird shapes) → if it survives, <strong>attempt proof</strong> → theorem. Both outcomes advance mathematics: a counterexample teaches precisely <em>where</em> intuition broke. This loop — conjecture, attack, prove — is exactly The Young Foundry's own cycle: Observe → Explore → Discover → Explain, sharpened to a professional edge.` },
          { t: 'key', html: `Conjecture → counterexample-hunt → proof → theorem. Hunt at the extremes: 0, 1, negatives, giants. A failed conjecture is not failure — it's a map of exactly where the truth bends.` },
          { t: 'example', title: '🧪 A famous survivor and a famous corpse', html: `Survivor: Fermat's Last Theorem — conjectured 1637, attacked for 358 years, finally PROVEN by Andrew Wiles in 1995. Corpse: Fermat's other claim, that 2^(2ⁿ) + 1 is always prime — Euler shot it down at n = 5 (4,294,967,297 = 641 × 6,700,417). Same Fermat. One immortal theorem, one instructive corpse. The method, not the fame, decides.` },
          { t: 'try', q: 'Conjecture: "Every quadrilateral with four equal sides is a square." Your counterexample?',
            choices: [
              { label: 'A rhombus tilted over — four equal sides, no right angles. The conjecture confused side-length with angles', right: true, fb: '🎉 One squashed diamond, and the claim is dead — with a lesson attached: equal sides don\'t police the angles. (Remember the leaning square frame from triangles? Same ghost.)' },
              { label: 'A rectangle', right: false, fb: '🤔 A non-square rectangle has UNequal sides (long ≠ short), so it never qualified as a test case — it doesn\'t meet the conjecture\'s "if". Find a shape with four equal sides that still isn\'t square…' },
              { label: 'There is none — it\'s true', right: false, fb: '🤔 Push a square frame sideways at the corners (the squashable square from geometry!). Sides unchanged, angles ruined. What\'s that shape called?' },
            ] },
        ],
      },
      {
        id: 'teach-it', icon: '💎', title: 'Teach It', sub: 'The final Diamond gate',
        blocks: [
          { t: 'story', html: `The summit of the whole map. You know why a million examples prove nothing, how three lines of algebra conquer infinity, how to detonate a false assumption, and how conjectures live and die. This is the crown of mathematics — teach it.` },
          { t: 'teach',
            prompt: 'Explain to a curious friend what makes mathematical proof DIFFERENT from evidence in science or law — and walk them through one proof idea you met (odd+odd, infinite primes, or √2).',
            placeholder: 'In court, evidence persuades. In science, experiments support. But in mathematics...',
            keywords: [
              ['proof', 'prove', 'certain', 'always', 'forever', 'guarantee', 'cannot fail'],
              ['example', 'counterexample', 'evidence', 'check', 'infinite', 'every case', 'all cases'],
              ['odd', 'even', 'prime', '√2', 'contradiction', 'assume', '2k'],
            ],
            hint: 'contrast proof with evidence, mention examples vs all cases, and sketch one actual proof' },
        ],
      },
    ],
  },
};
