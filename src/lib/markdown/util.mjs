// Tiny shared helpers for the build-time Markdown component plugins.
// No dependencies on purpose: a small tree walker instead of unist-util-visit.

/** Depth-first walk. `fn(node, parent, index)`; returning the string 'skip' skips that node's children. */
export function walk(node, fn, parent = null, index = null) {
  if (fn(node, parent, index) === 'skip') return;
  if (!node || !Array.isArray(node.children)) return;
  // Iterate by index over the live array so callbacks may splice siblings.
  for (let i = 0; i < node.children.length; i++) {
    walk(node.children[i], fn, node, i);
  }
}

/** Plain text of an mdast/hast node. */
export function textOf(node) {
  if (!node) return '';
  if (typeof node.value === 'string' && (node.type === 'text' || node.type === 'inlineCode')) return node.value;
  if (Array.isArray(node.children)) return node.children.map(textOf).join('');
  return '';
}

/** Best-effort source file label for build errors. */
export function fileLabel(file) {
  const raw = String(file?.path ?? file?.history?.[0] ?? 'unknown file');
  try {
    if (raw.startsWith('file://')) return decodeURIComponent(new URL(raw).pathname);
  } catch {
    /* fall through */
  }
  return raw;
}

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isWhitespaceText(node) {
  return node?.type === 'text' && /^\s*$/.test(node.value);
}
