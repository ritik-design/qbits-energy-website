// The factual audit's internal vocabulary was published as reader-facing copy: "the retained
// documents", a backticked `unknown` verdict token, internal role names, and source-code
// filenames. This is a terminology normalisation only. Every replacement preserves the meaning
// of the statement, including the fact that something is not established; it just says so in
// English a buyer can read.
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DIR = 'src/content/blog';
const DRY = process.argv.includes('--dry');

const RULES = [
  // Audit verdict token rendered as inline code.
  [/`unknown`/g, 'not established'],
  [/\bare not established\b(?=\s+(?:until|under))/g, 'are not established'],
  // "the retained documents / evidence" is how the audit referred to what it held.
  [/\bthe retained documents\b/gi, 'the current published documents'],
  [/\bthe retained evidence\b/gi, 'the current published evidence'],
  [/\bretained documents\b/gi, 'current published documents'],
  [/\bretained evidence\b/gi, 'current published evidence'],
  // Internal role names for the client contact.
  [/\bQbits commercial owner\b/gi, 'Qbits commercial team'],
  [/\bservice and warranty owners\b/gi, 'the Qbits service and warranty team'],
  [/\bcommercial owner\b/gi, 'commercial team'],
  // Source-code identifiers.
  [/\bsrc\/data\/products\.ts\b/g, 'the current Qbits product records'],
  [/\bproducts\.ts\b/g, 'the current Qbits product records'],
  [/`WARRANTY_NOTE`/g, 'the warranty note published on every product page'],
  [/\bWARRANTY_NOTE\b/g, 'the warranty note published on every product page'],
  // Hindi leak of the same idea.
  [/\bRepo mein yeh bhi noted hai ki\b/gi, 'Yeh bhi dhyan rakhein ki'],
  [/\bRepo mein\b/gi, 'Published material mein'],
];

let changed = 0;
const counts = {};
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const path = join(DIR, file);
  const before = readFileSync(path, 'utf8');
  let t = before;
  for (const [re, to] of RULES) {
    t = t.replace(re, (m) => {
      const k = re.source.slice(0, 40);
      counts[k] = (counts[k] || 0) + 1;
      return to;
    });
  }
  // Collapse the double article the product-records swap can create.
  t = t.replace(/\bthe the current Qbits product records\b/g, 'the current Qbits product records')
       .replace(/\bin the current Qbits product records\b/g, 'in the current Qbits product records');
  if (t !== before) {
    changed++;
    if (!DRY) writeFileSync(path, t);
  }
}
console.log(`${DRY ? 'would change' : 'changed'} ${changed} files`);
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`  ${v.toString().padStart(4)}  /${k}/`);
