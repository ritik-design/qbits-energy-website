// Rehype plugin: every markdown table is wrapped for horizontal scrolling and gets
// optional caption + numeric alignment.
//
//   Table: Optional caption text       <- a paragraph immediately before the table
//   | A | B |
//   | --- | --- |
//
// -> <div class="table-wrap" role="region" aria-label="..." tabindex="0"><table><caption>..</caption>...</table></div>
import { walk, textOf, isWhitespaceText } from './util.mjs';

const CAPTION_PREFIX = /^\s*Table:\s*/i;
const NUM = String.raw`[₹$]?\s*\d[\d,]*(?:\.\d+)?`;
const NUMERIC_CELL = new RegExp(
  String.raw`^[~≈<>+±-]?\s*${NUM}(?:\s*(?:–|-|to)\s*${NUM})?\s*(?:%|[A-Za-z₹/²³.]{0,8}(?: ?[A-Za-z/]{1,6})?)$`,
);

const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const elementChildren = (node) => (node.children || []).filter((c) => c.type === 'element');

/** If the nearest previous non-whitespace sibling is a "Table: ..." paragraph, return {index, nodes}. */
function findCaption(siblings, tableIndex) {
  let i = tableIndex - 1;
  while (i >= 0 && isWhitespaceText(siblings[i])) i--;
  const p = siblings[i];
  if (!p || p.type !== 'element' || p.tagName !== 'p') return null;
  const lead = p.children[0];
  if (!lead || lead.type !== 'text' || !CAPTION_PREFIX.test(lead.value)) return null;
  const nodes = [{ type: 'text', value: lead.value.replace(CAPTION_PREFIX, '') }, ...p.children.slice(1)];
  if (!textOf({ children: nodes }).trim()) return null;
  return { index: i, nodes };
}

function numericColumns(table) {
  const rows = [];
  for (const section of elementChildren(table)) {
    if (section.tagName === 'tbody') rows.push(...elementChildren(section).filter((r) => r.tagName === 'tr'));
  }
  const cols = new Map();
  for (const row of rows) {
    elementChildren(row).forEach((cell, c) => {
      const t = textOf(cell).trim();
      if (!t) return;
      const e = cols.get(c) || { n: 0, num: 0 };
      e.n++;
      if (NUMERIC_CELL.test(t)) e.num++;
      cols.set(c, e);
    });
  }
  const result = new Set();
  for (const [c, { n, num }] of cols) {
    // First column is the row label; "mostly numbers" = at least 70% of filled cells.
    if (c > 0 && n >= 2 && num / n >= 0.7) result.add(c);
  }
  return result;
}

function decorate(table) {
  const numeric = numericColumns(table);
  let cols = 0;
  for (const section of elementChildren(table)) {
    for (const row of elementChildren(section)) {
      if (row.tagName !== 'tr') continue;
      const cells = elementChildren(row);
      cols = Math.max(cols, cells.length);
      cells.forEach((cell, c) => {
        if (!numeric.has(c)) return;
        if (cell.properties?.align) return; // explicit GFM alignment wins
        const cls = cell.properties?.className || [];
        cell.properties = { ...cell.properties, className: [...cls, 'num'] };
      });
    }
  }
  return cols;
}

export default function rehypeTables() {
  return (tree) => {
    walk(tree, (node) => {
      if (!Array.isArray(node.children)) return;
      if (node.type === 'element' && Array.isArray(node.properties?.className) && node.properties.className.includes('table-wrap')) {
        return 'skip';
      }
      let lastHeading = '';
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'element' && /^h[1-6]$/.test(child.tagName)) lastHeading = textOf(child).trim();
        if (child.type !== 'element' || child.tagName !== 'table') continue;

        const caption = findCaption(node.children, i);
        let label = lastHeading ? `Table: ${lastHeading}` : 'Data table';
        let captionNode = null;
        if (caption) {
          captionNode = el('caption', {}, caption.nodes);
          label = textOf(captionNode).trim();
          node.children.splice(caption.index, 1);
          i--; // table moved one slot left
        }
        const tableIdx = i;
        const table = node.children[tableIdx];
        if (captionNode) table.children.unshift(captionNode, { type: 'text', value: '\n' });
        const cols = decorate(table);
        node.children[tableIdx] = el(
          'div',
          {
            className: ['table-wrap'],
            role: 'region',
            ariaLabel: label,
            tabIndex: 0,
            style: `--cols:${cols}`,
          },
          [table],
        );
      }
    });
  };
}
