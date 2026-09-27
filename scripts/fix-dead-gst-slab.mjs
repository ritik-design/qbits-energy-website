// Post-publication audit fix (2026-09-27): the 12% GST slab.
//
// Notification 9/2025-Integrated Tax (Rate) superseded Notification 1/2017 and took effect on
// 22 September 2025. It rebuilt the schedules and the 12% slab that solar equipment sat in no
// longer exists: Schedule I entry 437 puts renewable energy devices at 5%, Schedule II entry
// 477 puts heading 8504 static converters at 18%, and a bundled turnkey supply uses the 70:30
// Explanation to entry 437 (goods 70% at 5%, service 30% at 18%), an 8.9% effective rate.
//
// All of that is already researched and cited in this repo at
// src/content/blog/gst-on-solar-inverters-2026.md, which states in terms that "solar equipment
// is 12%" is a claim the notification does not support. Twenty other pages still published it,
// one of them backwards ("12% GST as of 2026, down from the earlier 5%") and inside FAQPage
// schema. This aligns the corpus to the site's own sourced position.
//
// Rupee figures derived from the dead slab are rescaled at the 8.9% bundled effective rate and
// the assumption is stated on the page, so no rate is invented. Non-GST uses of "12-18%"
// (loan interest, WACC, albedo, orientation loss, installer margin) are untouched.
import { readFileSync, writeFileSync } from 'fs';

const CITE = 'Notification 9/2025-Integrated Tax (Rate), effective 22 September 2025';
const GUIDE = '/blog/gst-on-solar-inverters-2026/';

const PATCHES = {
  // --- Outright false rate statements ---
  'solar-inverter-for-shop.md': [
    [
      'attract 12% GST as of 2026, down from the earlier 5% split between equipment and installation',
      `attract GST under ${CITE}, which replaced the 12% slab: 5% where the goods fall in Schedule I entry 437 as renewable energy devices, 18% where heading 8504 applies, and a 70:30 split on a bundled turnkey contract`,
    ],
    ['claim input tax credit on the 12% GST paid on the', 'claim input tax credit on the GST paid on the'],
    [
      '> - GST-registered shops can claim input tax credit on the 12% GST charged on inverters and panels, plus 40% accelerated depreciation in yea',
      '> - GST-registered shops can claim input tax credit on the GST charged on inverters and panels, plus 40% accelerated depreciation in yea',
    ],
    ['| System Size | Approx. Pre-GST Cost | GST at 12% | Net Cost After ITC (GST-Registered Business) |', '| System Size | Approx. Pre-GST Cost | GST at the 8.9% bundled rate | Net Cost After ITC (GST-Registered Business) |'],
    ['| 2 kW on-grid | ₹90,000 | ₹10,800 |', '| 2 kW on-grid | ₹90,000 | ₹8,010 |'],
    ['| 3 kW on-grid | ₹1,40,000 | ₹16,800 |', '| 3 kW on-grid | ₹1,40,000 | ₹12,460 |'],
    ['| 5 kW on-grid | ₹2,40,000 | ₹28,800 |', '| 5 kW on-grid | ₹2,40,000 | ₹21,360 |'],
    ['- GST at 12% = ₹24,600 (fully claimable as ITC)', '- GST at the 8.9% bundled rate = ₹18,245 (fully claimable as ITC)'],
  ],
  'growatt-solar-inverter-review-india.md': [
    [
      'prices exclude GST (currently 12% on solar inverters as specified under GST notifications; verify current rate with your',
      `prices exclude GST (the 12% slab was replaced by ${CITE}; classification decides whether 5% or 18% applies, so verify the current rate and entry with your`,
    ],
  ],
  'glossary/gst-on-solar.md': [['1. Pays 12% GST on solar equipment purchase', '1. Pays GST on the solar equipment purchase at the rate its classification carries']],
  'solar-subsidy-kaise-milegi-hindi.md': [
    [
      '- **[GST on system](/glossary/gst-on-solar/)**: Solar panels पर 5% GST, inverter पर 12% GST।',
      `- **[GST on system](/glossary/gst-on-solar/)**: 12% slab ab khatam ho gaya hai (${CITE})। Renewable energy devices Schedule I entry 437 mein 5% par hain, heading 8504 par 18% lag sakta hai, aur bundled turnkey contract par 70:30 split lagta hai।`,
    ],
  ],
  '10kw-solar-system-price-india.md': [
    [
      '5. **GST**: 12% on panels, 12–18% on inverters and BOS. Total GST on a 10kW system: ₹45,000–₹70,000.',
      `5. **GST**: the 12% slab no longer exists (${CITE}). Renewable energy devices sit at 5% under Schedule I entry 437, heading 8504 static converters at 18%, and a bundled turnkey contract uses the 70:30 split for an 8.9% effective rate. Total GST on a 10 kW system at that bundled rate: roughly ₹33,000–₹52,000. Confirm the entry your supplier relies on.`,
    ],
  ],
  '2kw-solar-system-price-india.md': [
    ['| GST (12% system, 5% installation) | As applicable | ₹10,000 – ₹15,000 |', '| GST (70:30 bundled, 8.9% effective) | As applicable | ₹7,500 – ₹11,000 |'],
    ['| **Total before subsidy** | | **₹1,03,000 – ₹1,43,000** |', '| **Total before subsidy** | | **₹1,00,500 – ₹1,39,000** |'],
  ],
  'solar-system-for-2bhk-india.md': [
    ['| GST (12%) | ₹14,400 | ₹19,440 |', '| GST (70:30 bundled, 8.9% effective) | ₹10,680 | ₹14,420 |'],
    ['| **Gross total** | **₹1,34,400** | **₹1,81,440** |', '| **Gross total** | **₹1,30,680** | **₹1,76,420** |'],
  ],
  'solar-inverter-price-2026-hindi.md': [['| GST (12% on inverter) | Calculated separately |', '| GST (classification decides 5% or 18%) | Calculated separately |']],
  'fronius-vs-sma-india.md': [
    ['> - Imported inverters carry around 20% basic customs duty plus 12% GST, which explains most of the price gap.', '> - Imported inverters carry around 20% basic customs duty plus IGST, which explains most of the price gap.'],
    ['Imported inverters attract basic customs duty of around 20% plus 12% GST on the landed value.', `Imported inverters attract basic customs duty of around 20% plus IGST on the landed value, at the rate the classification carries under ${CITE}.`],
    ['imported inverters attract basic customs duty of around 20% ', 'imported inverters attract basic customs duty of around 20% '],
  ],
  'bcd-import-duty-solar-inverters-india.md': [
    ['on top of IGST at 12-', 'on top of IGST at 5-'],
    ['would attract only IGST at 12–18% on the ex-works price', 'would attract only IGST at 5–18% on the ex-works price, depending on classification'],
  ],
  'glossary/customs-duty.md': [['IGST (12-18%)', 'IGST (5-18%)']],
};

let total = 0;
const missed = [];
for (const [file, pairs] of Object.entries(PATCHES)) {
  const path = `src/content/${file.includes('/') ? file : 'blog/' + file}`;
  let t = readFileSync(path, 'utf8');
  for (const [from, to] of pairs) {
    if (!t.includes(from)) {
      missed.push(`${file}: ${from.slice(0, 68)}`);
      continue;
    }
    if (from === to) continue;
    t = t.split(from).join(to);
    total++;
  }
  writeFileSync(path, t);
}
console.log(`applied ${total} GST corrections across ${Object.keys(PATCHES).length} files`);
for (const m of missed) console.log(`  MISSED ${m}`);
console.log(`\nGuide all pages should point at: ${GUIDE}`);
