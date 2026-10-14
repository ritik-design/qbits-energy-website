/**
 * "Apply this term" link row for glossary pages (Batch 4B).
 * Maps a glossary category (with a few per-term overrides) to 1-2 internal links.
 * Link text describes the destination; it makes no claim about the product.
 */
export interface GlossaryApplyLink {
  href: string;
  label: string;
}

export interface GlossaryApplyRow {
  heading: string;
  links: GlossaryApplyLink[];
}

/** The slice of an ArticleJourney this module needs (kept structural to avoid a dependency). */
export interface JourneyLike {
  kind: string;
  primaryHref: string;
  secondaryHref: string;
}

const STRING_CALC: GlossaryApplyLink = { href: '/string-sizing-calculator/', label: 'Size strings for this with the string sizing calculator' };
const DATASHEETS: GlossaryApplyLink = { href: '/download-datasheets/', label: 'Check this on the exact model datasheet' };
const ON_GRID: GlossaryApplyLink = { href: '/on-grid-inverter/', label: 'See the on-grid inverter range' };
const HYBRID: GlossaryApplyLink = { href: '/hybrid-inverter/', label: 'See the hybrid inverter range' };
const BATTERY_GUIDE: GlossaryApplyLink = { href: '/blog/battery-sizing-hybrid-solar/', label: 'Read the battery sizing guide for hybrid solar' };

const policyGuide = (slug: string, label: string): GlossaryApplyLink => ({ href: `/blog/${slug}/`, label });

const NET_METERING_GUIDE = policyGuide('net-metering-india-complete-guide', 'Read the net metering guide for India');
const MNRE_GUIDE = policyGuide('mnre-rooftop-solar-scheme', 'Read the MNRE rooftop solar scheme guide');

/** Glossary categories that map to no link. Listed explicitly so the test can prove every category is classified. */
export const CATEGORIES_WITHOUT_LINKS = ['Finance', 'Performance', 'Solar Resource', 'Panels and Modules', 'ESG'] as const;

/** Category default mapping. Categories not listed here (or listed in CATEGORIES_WITHOUT_LINKS) get no row. */
export const CATEGORY_LINKS: Record<string, GlossaryApplyLink[]> = {
  'MPPT and Strings': [STRING_CALC, DATASHEETS],
  'Electrical Basics': [STRING_CALC, DATASHEETS],
  Installation: [STRING_CALC, DATASHEETS],
  'Inverter Types': [ON_GRID], // hybrid-type terms are overridden below
  Batteries: [HYBRID, BATTERY_GUIDE],
  Protection: [DATASHEETS],
  'Power Quality': [DATASHEETS],
  'Grid Compliance': [DATASHEETS],
  Standards: [DATASHEETS],
  Policies: [ON_GRID, MNRE_GUIDE],
  'Metering and Grid': [ON_GRID, NET_METERING_GUIDE],
  // Not named in the 4B spec; mapped sensibly (see logs/batch4B-glossary-links.md).
  Regulatory: [DATASHEETS],
  'System Layout': [],
};

/** Per-term overrides (win over the category default). */
export const TERM_LINKS: Record<string, GlossaryApplyLink[]> = {
  // Inverter Types: matching hub by term
  'hybrid-inverter': [HYBRID],
  'off-grid-inverter': [HYBRID],
  // System Layout
  'ac-coupling': [HYBRID],
  'dc-coupling': [HYBRID],
  'dc-oversizing': [STRING_CALC, DATASHEETS],
  // Metering and Grid: matching guide
  'virtual-net-metering': [ON_GRID, policyGuide('virtual-net-metering-india', 'Read the virtual net metering guide for India')],
  'gross-metering': [ON_GRID, policyGuide('gross-metering-vs-net-metering', 'Read the gross vs net metering comparison')],
  // Policies: matching guide
  'pm-surya-ghar': [ON_GRID, policyGuide('pm-surya-ghar-yojana-complete-guide', 'Read the PM Surya Ghar scheme guide')],
  kusum: [ON_GRID, policyGuide('kusum-yojana-agricultural-solar-subsidy', 'Read the KUSUM Yojana guide')],
  // Regulatory: matching guide
  discom: [ON_GRID, policyGuide('discom-approval-solar-inverter-net-metering', 'Read the DISCOM approval guide for net metering')],
  mnre: [ON_GRID, MNRE_GUIDE],
  'almm-list': [ON_GRID, policyGuide('almm-list-ii-exemption-net-metering-open-access', 'Read the ALMM List-II exemption guide')],
};

/** Raw mapping for a term, ignoring the journey CTA. Empty array means no row. */
export function getGlossaryCommercialLinks(slug: string, category: string): GlossaryApplyLink[] {
  const byTerm = TERM_LINKS[slug];
  if (byTerm) return byTerm;
  return CATEGORY_LINKS[category] ?? [];
}

/**
 * Row to render on a glossary page, or null.
 * The page already shows a journey CTA (getGlossaryJourney). To avoid duplicating it:
 * - technical journeys keep their CTA and get no row (spec 4B);
 * - any link whose href equals the journey's primary or secondary href is dropped;
 * - if nothing remains, no row.
 */
export function getGlossaryApplyRow(slug: string, category: string, journey: JourneyLike): GlossaryApplyRow | null {
  if (journey.kind === 'technical') return null;
  const taken = new Set([journey.primaryHref, journey.secondaryHref]);
  const links = getGlossaryCommercialLinks(slug, category).filter((l) => !taken.has(l.href));
  if (links.length === 0) return null;
  return { heading: 'Apply this term', links: links.slice(0, 2) };
}
