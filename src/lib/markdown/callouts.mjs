// Rehype plugin: GitHub-style alert blockquotes become accessible callouts.
//
//   > [!TIP] Optional custom title
//   > Body text, **with markdown**, lists, links...
//
// Renders <aside class="callout callout--tip" role="note">. Blockquotes without a
// recognised [!TYPE] marker are left exactly as they were.
import { walk, isWhitespaceText } from './util.mjs';

const svg = (inner) =>
  `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;

export const CALLOUT_TYPES = {
  note: {
    title: 'Note',
    icon: svg('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'),
  },
  tip: {
    title: 'Tip',
    icon: svg(
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    ),
  },
  important: {
    title: 'Important',
    icon: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v4"/><path d="M12 14h.01"/>'),
  },
  warning: {
    title: 'Warning',
    icon: svg(
      '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    ),
  },
  caution: {
    title: 'Caution',
    icon: svg(
      '<path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>',
    ),
  },
  keytakeaways: {
    title: 'Key takeaways',
    icon: svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  },
  example: {
    title: 'Worked example',
    icon: svg(
      '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
    ),
  },
  formula: {
    title: 'Formula',
    icon: svg('<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>'),
  },
  checklist: {
    title: 'Checklist',
    icon: svg('<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>'),
  },
};

const MARKER = /^\s*\[!([A-Za-z][A-Za-z _-]*)\]/;

const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const text = (value) => ({ type: 'text', value });

/** Returns a callout <aside> for a marked blockquote, or null when it is a normal blockquote. */
function buildCallout(blockquote) {
  const firstIdx = blockquote.children.findIndex((c) => !isWhitespaceText(c));
  const first = blockquote.children[firstIdx];
  if (!first || first.type !== 'element' || first.tagName !== 'p') return null;
  const lead = first.children[0];
  if (!lead || lead.type !== 'text') return null;
  const m = MARKER.exec(lead.value);
  if (!m) return null;
  const key = m[1].toLowerCase().replace(/[^a-z]/g, '');
  const type = CALLOUT_TYPES[key];
  if (!type) return null;

  // Split the first paragraph: rest of the marker line = custom title, remaining lines = body.
  const seq = [text(lead.value.slice(m[0].length)), ...first.children.slice(1)];
  const titleNodes = [];
  const bodyNodes = [];
  let inTitle = true;
  for (const node of seq) {
    if (!inTitle) {
      bodyNodes.push(node);
    } else if (node.type === 'text') {
      const nl = node.value.indexOf('\n');
      if (nl >= 0) {
        titleNodes.push(text(node.value.slice(0, nl)));
        bodyNodes.push(text(node.value.slice(nl + 1)));
        inTitle = false;
      } else {
        titleNodes.push(node);
      }
    } else if (node.type === 'element' && node.tagName === 'br') {
      inTitle = false;
    } else {
      titleNodes.push(node);
    }
  }
  const trimEdges = (nodes) => {
    const out = nodes.filter((n) => !(n.type === 'text' && n.value === ''));
    if (out[0]?.type === 'text') out[0] = text(out[0].value.replace(/^\s+/, ''));
    const last = out.length - 1;
    if (last >= 0 && out[last].type === 'text') out[last] = text(out[last].value.replace(/\s+$/, ''));
    return out.filter((n) => !(n.type === 'text' && n.value === ''));
  };
  const title = trimEdges(titleNodes);
  const body = trimEdges(bodyNodes);

  const bodyChildren = [];
  if (body.length) bodyChildren.push(el('p', { ...first.properties }, body));
  bodyChildren.push(...blockquote.children.slice(firstIdx + 1));
  // Drop whitespace-only text nodes so the markup stays tidy.
  const cleanBody = bodyChildren.filter((c) => !isWhitespaceText(c));

  return el('aside', { className: ['callout', `callout--${key}`], role: 'note' }, [
    el('div', { className: ['callout__title'] }, [
      el('span', { className: ['callout__icon'], ariaHidden: 'true' }, [{ type: 'raw', value: type.icon }]),
      el('span', { className: ['callout__label'] }, title.length ? title : [text(type.title)]),
    ]),
    el('div', { className: ['callout__body'] }, cleanBody),
  ]);
}

export default function rehypeCallouts() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'blockquote') return;
      const callout = buildCallout(node);
      if (!callout) return; // ordinary blockquote: untouched, but keep walking for nested ones
      node.tagName = callout.tagName;
      node.properties = callout.properties;
      node.children = callout.children;
    });
  };
}
