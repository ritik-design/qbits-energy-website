#!/usr/bin/env python3
"""Assign authors to all blog posts and glossary entries based on content type."""

import os
import re
import glob

BLOG_DIR = "src/content/blog"
GLOSSARY_DIR = "src/content/glossary"

# Keywords in filename → author assignment
# Order matters: first match wins

KEYUR_KEYWORDS = [
    "install", "commission", "troubleshoot", "error-code", "fault", "ground-fault",
    "grounding", "mppt", "pwm", "thd", "firmware", "overheating", "beeping",
    "switching-off", "wifi-not-connect", "lifespan", "component", "protect",
    "transformer", "anti-island", "reactive-power", "summer-derating", "low-output",
    "keeps-switching", "noise", "specification", "ip65", "ip66", "dc-oversizing",
    "clipping", "string-siz", "efficiency", "battery-siz", "dual-mppt", "single-mppt",
    "3-phase", "single-vs-3", "inverter-mppt", "how-does", "how-solar-power-system",
    "smart-solar-inverter", "monitoring-systems", "solar-inverter-app", "solar-annual-maintenance",
    "pre-monsoon-solar-inspection", "monsoon-solar-prep", "solar-inverter-failure",
    "solar-inverter-downtime", "inverter-maintenance", "solar-inverter-reliability",
    "solar-inverter-underperform", "maximize-solar-output", "solar-performance-indian",
    "solar-irradiance", "tuning-inverter", "india-grid-tuned", "reactive-power",
    "inverter-voltage", "solar-inverter-components", "solar-string-sizing",
    "whatsapp-solar-monitor", "solar-inverter-wifi", "solar-inverter-kya-hai",
    "solar-inverter-band", "solar-inverter-keeps", "solar-inverter-low-output",
    "solar-inverter-error", "solar-inverter-ground", "solar-inverter-grounding",
    "solar-inverter-noise", "solar-inverter-summer", "solar-inverter-firmware",
    "solar-inverter-integration", "solar-inverter-warranty-claim",
    "how-to-read-solar-inverter", "how-to-read-solar-monitoring",
    "how-to-choose-solar-inverter", "how-to-choose-hybrid-solar",
    "how-to-evaluate-solar-inverter", "essential-vs-advanced",
    "inverter-clipping", "transformerless", "string-vs-micro", "bms-hybrid",
    "battery-backup-calculator", "how-long-solar-batteries", "how-long-solar-install",
    "how-much-electricity", "solar-yield", "solar-irr", "pre-monsoon",
    "solar-inverter-power-cut", "solar-inverter-vs-ups", "when-to-replace",
    "solar-inverter-for", "smart-solar",
]

AKASH_KEYWORDS = [
    "subsidy", "loan", "price-guide", "price-2026", "system-price",
    "emi", "capex-vs-opex", "opex", "resco", "payback", "lcoe",
    "depreciation", "financing", "irr", "gst", "tco", "procurement",
    "suppliers", "distributor", "bank", "fund", "bid", "boq",
    "financial-model", "quotation", "invest", "unit-econ",
    "solar-on-emi", "solar-loan", "hdfc-solar", "best-bank-solar",
    "solar-investment", "is-solar-worth", "solar-vs-diesel",
    "solar-capex", "inverter-financing", "inverter-tco",
    "solar-resco", "zero-cost-solar", "solar-bid", "solar-boq",
    "solar-financial", "solar-subsidy", "pm-surya-ghar-subsidy",
    "gst-on-solar", "solar-inverter-installation-cost",
    "solar-inverter-payback", "solar-inverter-depreciation",
    "solar-inverter-price", "empanelled-vendor", "inverter-procurement",
    "how-to-become-a-solar-inverter-partner", "unit-economics",
    "solar-irr-payback", "solar-for-rented", "solar-for-apartment",
    "how-to-evaluate-solar-epc-bids", "solar-quotation",
    "best-solar-system-under", "bijli-bill-zero",
    "how-to-apply-net-metering", "solar-on-emi",
]

def get_author_for_slug(slug: str, category: str = "") -> str:
    slug_lower = slug.lower()
    cat_lower = category.lower()

    # Technical category → Keyur
    if cat_lower in ("technical", "maintenance"):
        return "Keyur Rakholiya"

    # Check Keyur keywords first
    for kw in KEYUR_KEYWORDS:
        if kw in slug_lower:
            return "Keyur Rakholiya"

    # Check Akash keywords
    for kw in AKASH_KEYWORDS:
        if kw in slug_lower:
            return "Akash Hirapara"

    # Default → Nirav
    return "Nirav Dhanani"


def update_frontmatter_author(filepath: str, author: str, has_author_field: bool = True) -> bool:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if not content.startswith("---"):
        return False

    # Find end of frontmatter
    end = content.find("---", 3)
    if end == -1:
        return False

    frontmatter = content[3:end]
    body = content[end:]  # includes closing ---

    if has_author_field:
        # Replace existing author field
        new_fm = re.sub(r'^author:.*$', f'author: "{author}"', frontmatter, flags=re.MULTILINE)
        if new_fm == frontmatter:
            # No author field found, add it before the closing ---
            new_fm = frontmatter.rstrip() + f'\nauthor: "{author}"\n'
    else:
        # Add author field (for glossary which may not have it)
        new_fm = frontmatter.rstrip() + f'\nauthor: "{author}"\n'

    new_content = "---" + new_fm + body
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    return True


def process_blog_posts():
    files = glob.glob(f"{BLOG_DIR}/**/*.md", recursive=True) + glob.glob(f"{BLOG_DIR}/*.md")
    updated = 0
    for filepath in sorted(set(files)):
        slug = os.path.basename(filepath).replace(".md", "")

        # Read category from frontmatter
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        cat_match = re.search(r'^category:\s*["\']?([^"\'\n]+)["\']?', content, re.MULTILINE)
        category = cat_match.group(1).strip() if cat_match else ""

        author = get_author_for_slug(slug, category)
        if update_frontmatter_author(filepath, author, has_author_field=True):
            updated += 1
            print(f"  blog/{slug} → {author}")

    print(f"\nUpdated {updated} blog posts")


def process_glossary():
    files = glob.glob(f"{GLOSSARY_DIR}/**/*.md", recursive=True) + glob.glob(f"{GLOSSARY_DIR}/*.md")
    updated = 0
    for filepath in sorted(set(files)):
        slug = os.path.basename(filepath).replace(".md", "")

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        has_author = bool(re.search(r'^author:', content, re.MULTILINE))
        cat_match = re.search(r'^category:\s*["\']?([^"\'\n]+)["\']?', content, re.MULTILINE)
        category = cat_match.group(1).strip() if cat_match else ""

        author = get_author_for_slug(slug, category)
        if update_frontmatter_author(filepath, author, has_author_field=has_author):
            updated += 1
            print(f"  glossary/{slug} → {author}")

    print(f"\nUpdated {updated} glossary entries")


if __name__ == "__main__":
    print("=== Assigning blog authors ===")
    process_blog_posts()
    print("\n=== Assigning glossary authors ===")
    process_glossary()
    print("\nDone!")
