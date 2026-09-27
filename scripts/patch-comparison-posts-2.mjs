// Second batch of hand-authored exact-string patches: the three-way comparison and the 5 kW
// buying guide, where the Qbits warranty term appears inside like-for-like comparison rows
// and a "warranty advantage" argument that has to be withdrawn with it.
import { readFileSync, writeFileSync } from 'fs';

const PATCHES = {
  'src/content/blog/qbits-vs-sungrow-vs-growatt.md': [
    [
      'Qbits competes on a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years, plus a published service partner network.',
      'Qbits competes on per-model electrical detail and a published service partner network, though its public datasheets do not define a base warranty term, so that row has to be settled in writing.',
    ],
    [
      'a: "Qbits states dispatch within 72 hours of claim approval. Read the trigger carefully, because the clock starts at claim approval and not at the moment you report the fault. The approval step itself has no published duration. Ask your dealer in writing how long approval has taken on recent claims for the same model."',
      'a: "No current written Qbits service term sets a dispatch time, so ask your dealer for the committed action after claim approval in writing. Where any brand quotes a dispatch window, read the trigger carefully, because such clocks start at claim approval and not at the moment you report the fault, and the approval step itself usually has no published duration. Also ask how long approval has taken on recent claims for the same model."',
    ],
    [
      '> - Qbits publishes a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years instead, and its own datasheets do not define the base term in public.',
      '> - Qbits publishes an expandable warranty and its own datasheets do not define the base term, remedy, registration deadline or exclusions, so it cannot be compared on duration until you hold the document.',
    ],
    [
      '**Qbits.** Qbits publishes a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years instead. Full unit replacement is a stronger remedy than repair, and the term is longer than either competitor\'s standard period. The honest caveat sits in the product data itself: the public datasheets describe an expandable warranty but do not define the base term, the remedy, the registration deadline, or the exclusions. So obtain the current written warranty for the exact quoted model, and apply exactly the same document standard you would apply to an imported brand.',
      '**Qbits.** Qbits publishes an expandable warranty, and the note carried on every Qbits product page is explicit that the public datasheets do not define the base term, the remedy, the registration deadline, or the exclusions. So on this row Qbits is the brand you can read least about before buying, and no duration comparison against Sungrow or Growatt is available. Obtain the current written warranty for the exact quoted model, and apply exactly the same document standard you would apply to an imported brand.',
    ],
    [
      '| Standard term | 5 years, dealer string inverters | Varies by product line | 12 years, 8 above 30 kW |',
      '| Standard term | 5 years, dealer string inverters | Varies by product line | Not defined in public material |',
    ],
    [
      'On turnaround it states dispatch within 72 hours of claim approval. Read that trigger precisely, because the clock starts at claim approval and not when you report the fault. The approval step itself carries no published duration, which is exactly the kind of gap a buyer should close in writing.',
      'On turnaround, no current written Qbits service term sets a dispatch time, and the approval step carries no published duration either. Both are exactly the kind of gap a buyer should close in writing before purchase.',
    ],
    [
      'Note also that Qbits units above 30 kW carry 8 years rather than the 12-year full unit replacement warranty that applies below that threshold, so the warranty advantage narrows at this scale.',
      'Note also that Qbits publishes no defined base warranty term at any capacity, so there is no warranty advantage to weigh at this scale until the written terms are produced.',
    ],
  ],
  'src/content/blog/best-5kw-solar-inverter-india-2026.md': [
    [
      'Qbits publishes a 12-year full unit replacement warranty on its inverters, with units above 30 kW carrying 8 years instead, and states dispatch within 72 hours of claim approval.',
      'Qbits publishes an expandable warranty whose base term, remedy, registration deadline and exclusions are not defined in its public datasheets, and no current written service term sets a dispatch time.',
    ],
    [
      '| Qbits QB 4.2 to 6KTLS | Single | 1 | 12-year full unit replacement warranty; units above 30 kW carry 8 years |',
      '| Qbits QB 4.2 to 6KTLS | Single | 1 | Not defined in public material; request written terms |',
    ],
    [
      'Qbits states its service process as dispatch within 72 hours of claim approval, and states it is ALMM Phase III listed. MNRE publishes no inverter ALMM list, so treat inverter certificates separately.',
      'Qbits states it is ALMM Phase III listed, which is the company\'s own statement rather than a scheme confirmation, and MNRE publishes ALMM lists for modules and cells rather than inverters, so treat inverter certificates separately. No current written Qbits service term sets a dispatch time either.',
    ],
  ],
};

let total = 0;
for (const [file, pairs] of Object.entries(PATCHES)) {
  let t = readFileSync(file, 'utf8');
  const missed = [];
  for (const [from, to] of pairs) {
    if (!t.includes(from)) {
      missed.push(from.slice(0, 70));
      continue;
    }
    t = t.split(from).join(to);
    total++;
  }
  writeFileSync(file, t);
  console.log(`${file}: ${pairs.length - missed.length}/${pairs.length} applied`);
  for (const m of missed) console.log(`   MISSED: ${m}`);
}
console.log(`\ntotal replacements: ${total}`);
