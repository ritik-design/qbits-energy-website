// Hand-authored exact-string patches for the brand-comparison posts, where the warranty
// claim is load-bearing (ranking rows, like-for-like tables) and a regex sweep would break
// the argument. Also removes source-code identifiers (`products.ts`, `WARRANTY_NOTE`) that
// leaked from the factual audit into reader-facing prose.
import { readFileSync, writeFileSync } from 'fs';

const PATCHES = {
  'src/content/blog/qbits-vs-luminous-honest-comparison.md': [
    [
      'Qbits publishes a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years instead. The public Qbits datasheets describe an expandable warranty but do not define the base term, remedy, registration deadline or exclusions, so request the current written terms for the exact quoted model.',
      'Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so request the current written terms for the exact quoted model.',
    ],
    [
      '> - Qbits publishes a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years. Luminous lists a 2-year base warranty, while one store listing showed 36 months. Compare documents, not numbers.',
      '> - Qbits publishes an expandable warranty with no base term defined in public material. Luminous lists a 2-year base warranty, while one store listing showed 36 months. Compare documents, not numbers.',
    ],
    ['98% to 99.02% by model, per products.ts', '98% to 99.02% by model, per the current Qbits product records'],
    [
      'IP66 on every series in products.ts, including all three QBH hybrid entries',
      'IP66 on every series in the current Qbits product records, including all three QBH hybrid entries',
    ],
    [
      'Qbits publishes a 12-year full unit replacement warranty, with the carve-out that units above 30 kW carry 8 years instead. Carry the documented caveat with it. The `WARRANTY_NOTE` in the Qbits product data states that the public datasheets describe an expandable warranty but do not define the base term, the remedy, the registration deadline or the exclusions. So obtain the current written warranty for the exact quoted model.',
      'Qbits publishes an expandable warranty. The note carried on every Qbits product page states that the public datasheets describe an expandable warranty but do not define the base term, the remedy, the registration deadline or the exclusions. So there is no published Qbits duration to set against the Luminous figures, and the comparison has to wait until you obtain the current written warranty for the exact quoted model.',
    ],
    [
      'On claims, the only supportable Qbits statement is dispatch within 72 hours of claim approval. That phrase holds two conditions, approval and dispatch, and neither is a delivery date.',
      'On claims, no current written Qbits service term sets a dispatch time, so ask for the committed action after approval in writing. Note also that approval and dispatch are two separate conditions, and neither is a delivery date.',
    ],
    [
      'Qbits ships Wi-Fi monitoring as standard on every series in products.ts, with optional RS485 or GPRS',
      'Qbits ships Wi-Fi monitoring as standard on every series in its current product records, with optional RS485 or GPRS',
    ],
    ['What products.ts does not establish is', 'What those records do not establish is'],
    [
      'A 12-year Qbits term, which drops to 8 years above 30 kW, still depends on the exclusion list, the registration window and who pays freight.',
      'A long headline term still depends on the exclusion list, the registration window and who pays freight.',
    ],
    ['apply the published Qbits DC ceilings from products.ts', 'apply the published Qbits DC ceilings from the current product records'],
    [
      'products.ts records IP66 on every series, verified 24 September 2026',
      'the current product records show IP66 on every series, verified 24 September 2026',
    ],
    [
      'with a 12-year full unit replacement warranty that becomes 8 years above 30 kW and a documented instruction to obtain written terms per quote',
      'with an expandable warranty whose base term is not defined in public material and a documented instruction to obtain written terms per quote',
    ],
  ],
  'src/content/blog/qbits-vs-microtek-honest-comparison.md': [
    [
      'Qbits states a 12-year full unit replacement warranty, with units rated above 30 kW carrying 8 years. The important caveat is that the public Qbits datasheets describe an expandable warranty without defining the base term, remedy, registration deadline or exclusions. Obtain the current written warranty for the exact quoted model before purchase.',
      'Qbits publishes an expandable warranty, and the public Qbits datasheets do not define the base term, remedy, registration deadline or exclusions. That means there is no published Qbits duration to set against the Microtek figures. Obtain the current written warranty for the exact quoted model before purchase.',
    ],
    [
      '> - Qbits states a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years, but its public datasheets do not define the base term, so you must obtain it in writing.',
      '> - Qbits publishes an expandable warranty and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so you must obtain the written terms for your exact model.',
    ],
    [
      '| Warranty period on the vendor\'s own public page | Datasheets do not define the base term. Qbits states a 12-year full unit replacement warranty, with units above 30 kW carrying 8 years |',
      '| Warranty period on the vendor\'s own public page | Not defined. The datasheets describe an expandable warranty without fixing the base term, remedy, registration deadline or exclusions |',
    ],
    [
      'Qbits states a 12-year full unit replacement warranty, with units rated above 30 kW carrying 8 years. The caveat is material and comes from the Qbits product data itself: the public datasheets describe an expandable warranty but do not define the base term, remedy, registration deadline or exclusions. So treat that figure as a claim requiring the written document, and obtain the current written warranty for the exact quoted model before purchase. On service logistics Qbits states dispatch within 72 hours of claim approval, which is measured from approval, not an end-to-end repair time.',
      'Qbits publishes an expandable warranty, and the note carried on every Qbits product page is explicit that the public datasheets do not define the base term, remedy, registration deadline or exclusions. Microtek prints periods on its own public pages, so on this row Microtek is the brand you can actually read before buying. Obtain the current written Qbits warranty for the exact quoted model before purchase. On service logistics, no current written Qbits term sets a dispatch time, so ask for the committed action after claim approval in writing.',
    ],
    [
      'and a 12-year full unit replacement claim with units above 30 kW at 8 years that has to be obtained in writing',
      'and an expandable warranty whose base term is not defined in public material and has to be obtained in writing',
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
