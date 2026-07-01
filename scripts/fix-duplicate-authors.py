#!/usr/bin/env python3
"""Remove duplicate author lines from frontmatter."""
import glob
import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if not content.startswith('---'):
        return False

    end = content.find('---', 3)
    if end == -1:
        return False

    frontmatter = content[3:end]
    body = content[end:]

    lines = frontmatter.split('\n')
    seen_author = False
    new_lines = []
    for line in lines:
        if line.startswith('author:'):
            if not seen_author:
                new_lines.append(line)
                seen_author = True
            # skip duplicates
        else:
            new_lines.append(line)

    new_fm = '\n'.join(new_lines)
    if new_fm == frontmatter:
        return False

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('---' + new_fm + body)
    return True

fixed = 0
for pattern in ['src/content/glossary/*.md', 'src/content/blog/*.md']:
    for fp in sorted(glob.glob(pattern)):
        if fix_file(fp):
            fixed += 1

print(f"Fixed {fixed} files")
