// One-off claim-integrity remediation (2026-09-27). Tier 1: mechanical cases only.
//
// No controlled Qbits warranty document supports the asserted term and remedy ("12 year full
// unit replacement ... 8 years above 30 kW"), and "dispatch within 72 hours of claim approval"
// is legacy blog copy rather than a current written service level. src/data/products.ts
// WARRANTY_NOTE already publishes the correct framing on every product page; this brings the
// blog corpus into line with it.
//
// Design rules learned from a failed first attempt:
//   * every match is anchored at "Qbits" and ends at a sentence terminator, so markdown
//     prefixes ("> - ", "- ", 'a: "', "**") are never consumed;
//   * sentences that already carry the datasheet caveat are collapsed rather than doubled;
//   * generic, non-Qbits discussion of 12-year warranties as a market category is untouched;
//   * files where the claim is load-bearing (ranking tables, brand comparisons) are excluded
//     here and edited by hand instead.
//
// Run with --dry first.
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DIR = 'src/content/blog';
const DRY = process.argv.includes('--dry');

// Edited by hand: the term anchors a market ranking or a like-for-like brand table there,
// so removing it changes the argument and needs editorial judgement, not substitution.
const HAND_EDIT = new Set([
  'best-solar-inverter-longest-warranty-india.md',
  '12-year-solar-inverter-warranty.md',
  'qbits-vs-luminous-honest-comparison.md',
  'qbits-vs-microtek-honest-comparison.md',
  'qbits-vs-sungrow-vs-growatt.md',
  'best-5kw-solar-inverter-india-2026.md',
  // An entire H2, a stage table and an FAQ are built on the 72-hour trigger here, so
  // removing the claim needs the section rewritten rather than the sentence deleted.
  'solar-inverter-warranty-claim.md',
]);

// Already-correct files: they state the documents do NOT establish the term. Leave alone.
const ALREADY_CORRECT = new Set(['solar-inverter-amc-cost-india.md', 'almm-list-phase-iii-guide.md']);

const CAVEAT =
  'its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model';

// A Qbits-attributed warranty-term sentence, anchored at "Qbits", terminated at the period.
// Optionally swallows a trailing caveat sentence so the replacement does not duplicate it.
const TERM =
  /Qbits\s+(?:states|publishes|lists|names)\b[^.!?\n]*?(?:12[-\s]?year|12 years|full unit replacement)[^.!?\n]*?\.(?:\s*(?:The|Its|The Qbits) (?:public )?(?:datasheets|product data)[^.!?\n]*?\.)?/gi;

// Standalone 72-hour sentences, and comma-led clauses inside a larger sentence.
// A leading sentence-fragment ("For service, ", "On turnaround, ") is consumed with the
// sentence so removal cannot orphan it.
const SLA_SENTENCE =
  /(?:(?:For service|On turnaround|On service|Commercially|On the service side)\s*,\s*)?(?:Qbits (?:also )?(?:states|publishes)(?: that)?|Its stated service process is|On turnaround it states|Replacement units dispatch|Approved claims are met with)\s*(?:that )?(?:stock is |replacement units are )?dispatch(?:ed)? within 72[-\s]?hours of claim approval\.\s?/gi;
const SLA_CLAUSE =
  /,\s*(?:and |with )?(?:also )?(?:states|describes|publishes)?(?: that)?(?: its service process as)?\s*(?:replacement units are |stock is )?dispatch(?:ed)? within 72[-\s]?hours of claim approval/gi;
const SLA_CLAUSE2 =
  /,\s*and service runs through its partner network with dispatch within 72[-\s]?hours of claim approval/gi;
// Forms the patterns above miss: a bare subject + "dispatch", and an "It also states" lead.
const SLA_EXTRA = [
  /Replacement units dispatch within 72[-\s]?hours of claim approval\.\s?/gi,
  /It also states dispatch within 72[-\s]?hours of claim approval\.\s?/gi,
  /On service logistics Qbits states dispatch within 72[-\s]?hours of claim approval,\s*which is measured from approval, not an end-to-end repair time\.\s?/gi,
];

// The Hindi posts carry the same two claims in Hindi and are missed by the English patterns.
const HINDI = [
  {
    re: /Qbits (?:ke case mein|ki) published (?:position|term) 12-year full unit replacement warranty hai, aur 30 kW se upar ke units 8 years carry karte hain\./gi,
    to: 'Qbits ki public datasheets expandable warranty describe karti hain, lekin base term, remedy, registration deadline aur exclusions define nahi karti.',
  },
  {
    re: /Warranty par Qbits ka published term 12-year full unit replacement warranty hai, aur 30 kW se upar ki units par yeh 8 saal hai\./gi,
    to: 'Warranty par Qbits ki public datasheets expandable warranty describe karti hain, lekin base term, remedy, registration deadline aur exclusions define nahi karti.',
  },
  {
    re: /\s*Service (?:side par published phrase yeh hai ki dispatch within 72 hours of claim approval hota hai|claim par published process dispatch within 72 hours of claim approval hai)\.,?/gi,
    to: '',
  },
  {
    re: /\s*Service side par publi(?:shed)? phrase hai ki dispatch within 72 hours of claim approval hota hai,\s*aur hybrid units par UPS switching within 10 seconds\./gi,
    to: ' Hybrid units par published phrase UPS switching within 10 seconds hai.',
  },
];

const ALMM_BARE = /Qbits states (?:that )?it is ALMM Phase III listed\.(?!\s*(?:[Tt]reat|That))/g;
const ALMM_FIXED =
  "Qbits states it is ALMM Phase III listed. Treat that as the company's own statement and ask for the current certificate covering the exact model you are buying.";

const ALMM_WRONG = /Inverters are covered by a separate ALMM inverter list\./g;
const ALMM_RIGHT =
  'ALMM publishes List-I for solar PV modules and List-II for solar PV cells, so neither list establishes whether a given inverter model is acceptable for a connection. Verify inverter acceptance separately with the relevant DISCOM.';

let changed = 0;
const log = [];

for (const file of readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  if (HAND_EDIT.has(file) || ALREADY_CORRECT.has(file)) continue;
  const path = join(DIR, file);
  const before = readFileSync(path, 'utf8');
  let t = before;
  const hits = [];

  t = t.replace(TERM, (m) => {
    hits.push({ kind: 'warranty-term', from: m.trim() });
    return `Qbits publishes an expandable warranty, and ${CAVEAT}.`;
  });

  for (const re of [SLA_CLAUSE2, SLA_CLAUSE, SLA_SENTENCE, ...SLA_EXTRA]) {
    t = t.replace(re, (m) => {
      hits.push({ kind: '72h-sla', from: m.trim() });
      return '';
    });
  }

  for (const { re, to } of HINDI) {
    t = t.replace(re, (m) => {
      hits.push({ kind: 'hindi-claim', from: m.trim() });
      return to;
    });
  }

  t = t.replace(ALMM_BARE, () => {
    hits.push({ kind: 'almm-attribution', from: 'Qbits states it is ALMM Phase III listed.' });
    return ALMM_FIXED;
  });

  t = t.replace(ALMM_WRONG, () => {
    hits.push({ kind: 'almm-wrong-scope', from: 'Inverters are covered by a separate ALMM inverter list.' });
    return ALMM_RIGHT;
  });

  if (!hits.length) continue;

  // Repair only artifacts these replacements can create. Table rows keep their padding.
  t = t
    .split('\n')
    .map((l) =>
      l.includes('|')
        ? l
        : l
            .replace(/ +([.,;:])/g, '$1')
            .replace(/,\s*\./g, '.')
            .replace(/\.{2,}/g, '.')
            .replace(/,\s*,/g, ',')
            .replace(/(\S)  +(\S)/g, '$1 $2')
            .replace(/[ \t]+$/, '')
    )
    .join('\n');

  changed++;
  log.push({ file, hits });
  if (!DRY) writeFileSync(path, t);
}

const byKind = {};
for (const { hits } of log) for (const h of hits) byKind[h.kind] = (byKind[h.kind] || 0) + 1;
console.log(`${DRY ? 'DRY RUN: would change' : 'CHANGED'} ${changed} files`);
console.log('edits by class:', byKind);
console.log(`hand-edit queue: ${[...HAND_EDIT].join(', ')}\n`);
for (const { file, hits } of log) {
  console.log(`--- ${file} (${hits.length})`);
  for (const h of hits) console.log(`    [${h.kind}] ${h.from.slice(0, 150)}`);
}
