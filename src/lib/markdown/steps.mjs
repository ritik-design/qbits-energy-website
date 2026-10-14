// Remark plugin: an ordered list directly after `<!-- steps -->` gets numbered step styling.
//
//   <!-- steps -->
//   1. First do this
//   2. Then do that
//
// The comment is removed and the list gets class="steps" (styled in global.css).
import { walk, fileLabel } from './util.mjs';

const MARKER = /^<!--\s*steps\s*-->$/i;

export default function remarkSteps() {
  return (tree, file) => {
    walk(tree, (node) => {
      if (!Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type !== 'html' || !MARKER.test(child.value.trim())) continue;
        const next = node.children[i + 1];
        if (!next || next.type !== 'list' || !next.ordered) {
          throw new Error(
            `[steps] ${fileLabel(file)}: "<!-- steps -->" must be immediately followed by an ordered list (1. 2. 3.).`,
          );
        }
        next.data = next.data || {};
        next.data.hProperties = { ...(next.data.hProperties || {}), className: ['steps'] };
        node.children.splice(i, 1);
        i--;
      }
    });
  };
}
