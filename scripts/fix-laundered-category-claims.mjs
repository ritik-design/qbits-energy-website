// Post-publication audit fix (2026-09-27).
//
// Two Qbits marketing figures had been generalised into industry facts, so stripping them
// from Qbits-attributed sentences left the same claims standing as category statements:
//
//   1. "12-year full replacement" presented as an available premium/Indian standard. The
//      site's own sourced comparison (best-solar-inverter-longest-warranty-india) establishes
//      10 years as the longest verifiable published term (Havells Enviro GTi, UTL F Series),
//      so the 12-year benchmark contradicted it.
//   2. "1,000+ automated tests per unit", listed in prohibited-claims.md as a self-published,
//      independently unverified Qbits figure, restated as what "premium" or "reputable"
//      manufacturers do, and used as an objective verification criterion.
//
// Where the underlying point is real it is kept and reframed onto the thing that actually
// decides outcomes: the remedy (replacement vs repair) and the written test protocol, rather
// than an unverifiable number. Sentences that correctly attribute a figure to Qbits are left
// alone.
import { readFileSync, writeFileSync } from 'fs';

const PATCHES = {
  // --- Class 1: 12-year presented as an available standard ---
  'solar-epc-india.md': [
    [
      '- **Warranty** ([12-year full replacement](/blog/12-year-solar-inverter-warranty/))',
      '- **Warranty** ([the written remedy and base term, not the headline years](/blog/12-year-solar-inverter-warranty/))',
    ],
    ['| Warranty | 12-year full replacement vs 5-year limited |', '| Warranty | Full unit replacement vs repair only, plus the written base term |'],
    ['| Quality testing | 1,000+ automated tests per unit |', '| Quality testing | Ask for the factory test protocol and the per-unit test record |'],
  ],
  'solar-inverter-integration-in-india.md': [
    ['| Premium warranty | 12-year full replacement |', '| Premium warranty | Full unit replacement rather than repair at the maker\'s option |'],
  ],
  'indian-vs-international-solar-inverters.md': [
    [
      '> - Indian manufacturers commonly offer 12-year full replacement warranties versus 5-10 years with more exclusions from international brands.',
      '> - The longest verifiable published terms in the Indian market are 10 years (Havells Enviro GTi datasheets, UTL F Series on-site), against 5 years typical for the imported string brands. Compare the remedy and exclusions, not the years.',
    ],
  ],
  'made-in-india-solar-inverters-2026.md': [
    [
      '| **Warranty depth** | ✓ Up to 12-year full replacement | ✗ Typically 5–10 years, prorated |',
      '| **Warranty depth** | ✓ Up to 10 years published (Havells, UTL) | ✗ Typically 5 years on imported string brands, often prorated |',
    ],
  ],
  'how-to-evaluate-solar-inverter-reliability.md': [
    ['| **10-12 year full replacement** |', '| **10 year full replacement, where documented** |'],
    ['| Warranty | 12-year full replacement |', '| Warranty | Written base term, and whether the remedy is replacement or repair |'],
    ['| Factory testing | 1,000+ automated tests per unit |', '| Factory testing | Written test protocol, burn-in duration, and per-unit records |'],
    [
      '> - Reputable manufacturers run 1,000+ automated tests per unit with burn-in and',
      '> - Reputable manufacturers run automated end-of-line testing on every unit with burn-in and',
    ],
  ],
  'inverter-mppt.md': [
    ['| 12-year full replacement | Strong manufacturer confidence in MPPT and power stage |', '| 10 years or more with full replacement | Strong manufacturer confidence in MPPT and power stage |'],
  ],
  'lcoe-solar-india.md': [
    [
      '> - A 12-year full-replacement inverter warranty removes the mid-life replacement provision from the DSCR model, directly strengthening project bankability.',
      '> - A long full-replacement inverter warranty, where the written document actually provides one, reduces the mid-life replacement provision in the DSCR model and strengthens project bankability.',
    ],
  ],
  'sungrow-vs-solis-comparison.md': [
    [
      'For buyers who are warranty-conscious above all else, neither brand matches the 12-year full replacement standard that is now available from Indian market alternatives.',
      'For buyers who are warranty-conscious above all else, note that both publish repair-based terms, while the longest verifiable published terms in the Indian market run to 10 years with a replacement remedy.',
    ],
  ],
  'growatt-solar-inverter-review-india.md': [
    ['shorter than the 10 to 12 year full-replacement terms some competitors publish', 'shorter than the 10 year full-replacement terms some competitors publish'],
    ['against 10 or 12-year full-replacement alternatives', 'against 10-year full-replacement alternatives'],
  ],
  'solar-inverter-buying-mistakes.md': [
    [
      'Premium brands offer a different structure: 12-year full unit replacement. If any part fails within 12 years for any reason not caused by physical mishandling, the entire inverter is swapped, not repaired. This matters because:',
      'The better-documented brands offer a different structure, and the structure matters more than the duration: full unit replacement rather than repair at the maker\'s option. Where a document promises replacement, a failed unit is swapped instead of being opened and reworked. Read the remedy clause to confirm which one you are buying, because this is where the value sits:',
    ],
  ],
  // --- Class 2: the test-count figure as an industry fact ---
  'solar-inverter-failure.md': [
    [
      '> - Premium manufacturers run 1,000+ automated tests per unit (thermal cycling, humidity, vibration,',
      '> - Premium manufacturers run automated end-of-line test sequences on every unit (thermal cycling, humidity, vibration,',
    ],
    ['Premium manufacturers conduct **1,000+ automated tests per unit**:', 'Better manufacturers run an automated end-of-line test sequence on every unit, typically covering:'],
  ],
  'solar-inverter-specifications-decoded.md': [
    ['- **1,000+ automated tests per unit**', '- **An automated end-of-line test sequence on every unit**, with the protocol available on request'],
  ],
};

let total = 0;
const missed = [];
for (const [file, pairs] of Object.entries(PATCHES)) {
  const path = `src/content/blog/${file}`;
  let t = readFileSync(path, 'utf8');
  for (const [from, to] of pairs) {
    if (!t.includes(from)) {
      missed.push(`${file}: ${from.slice(0, 70)}`);
      continue;
    }
    t = t.split(from).join(to);
    total++;
  }
  writeFileSync(path, t);
}
console.log(`applied ${total} replacements across ${Object.keys(PATCHES).length} files`);
for (const m of missed) console.log(`  MISSED ${m}`);
