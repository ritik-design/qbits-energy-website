/**
 * Template-level inverter recommendations for blog posts (implementation plan 4A).
 * Slug-driven, first match wins. Patterns match whole hyphen-delimited tokens (or
 * adjacent-token pairs like "power-cut"), never substrings, so "ups" does not hit
 * "startups" and "home" does not hit "nursing-home". Model ids must exist in
 * src/data/products.ts (enforced by tests/inverter-recommendations.test.mjs).
 */
export type InverterHub = '/on-grid-inverter/' | '/hybrid-inverter/' | '/c-i-solution/';

export interface InverterRecommendation {
  hub: InverterHub;
  /** products.ts ids, max 3. */
  models: string[];
}

export interface InverterRule {
  id: string;
  pattern: RegExp;
  hub: InverterHub;
  models: string[];
}

// Patterns run against `-${slug}-`, so a leading/trailing "-" in a pattern is a token boundary.
const tok = (alts: string) => new RegExp(`-(?:${alts})-`);

// Topics that never get an inverter module (software research, case studies).
const EXCLUDED = tok('software|crm|design-tools?|proposal-tools?|case-study|case-studies');
// Dealer / distributor / partner business posts already get the partner journey CTA.
const PARTNER_BUSINESS = tok('dealers?|dealerships?|distributors?|partners?|franchis(?:e|es|ee|ees)|margins?');
const POLICY_ALLOWED = tok('subsid(?:y|ies)|surya|net-meter|net-metering');

const HYBRID: InverterRule = { id: 'hybrid', pattern: tok('hybrids?|batter(?:y|ies)|backups?|back-up|power-cuts?|outages?|ups|bms|lithium'), hub: '/hybrid-inverter/', models: ['QBH-3-6KS48P', 'QBH-7-8KS48P', 'QBH-5-12KS48P3'] };
const SMALL: InverterRule = { id: '1-3kw', pattern: tok('(?:1|2|3|one|two)-?kw'), hub: '/on-grid-inverter/', models: ['QB-1.5-4.0KTLS', 'QBH-3-6KS48P'] };
// clinic|hospital|nursing are commercial buildings: caught before the residential branch.
const HEALTH_CI: InverterRule = { id: 'ci-health', pattern: tok('clinics?|hospitals?|nursing'), hub: '/c-i-solution/', models: ['QB-20-30KTLC', 'QB-30-40KTLC-Pro', 'QB-40-50KTLC-Plus'] };
const HOME: InverterRule = { id: '5-6kw-home', pattern: tok('(?:5|6|five|six)-?kw|homes?|\\d*bhk|residential'), hub: '/on-grid-inverter/', models: ['QB-4.6-6KTLS', 'QB-4-6KTLD', 'QBH-3-6KS48P'] };
const LARGE: InverterRule = { id: '8-10kw-3phase', pattern: tok('(?:10|8|eight)-?kw|three-phase|3-phase'), hub: '/on-grid-inverter/', models: ['QB-6-17KTLC', 'QBH-5-12KS48P3'] };
const CI: InverterRule = { id: 'ci', pattern: tok('factor(?:y|ies)|industrial|commercial|cold-storage|hospitals?|rice-mills?|petrol|hotels?|msme|captive|open-access|epc|procurement|tenders?'), hub: '/c-i-solution/', models: ['QB-20-30KTLC', 'QB-30-40KTLC-Pro', 'QB-40-50KTLC-Plus'] };
const GENERIC: InverterRule = { id: 'generic-on-grid', pattern: tok('subsid(?:y|ies)|surya|net-meter|net-metering|discoms?|mppt|strings?|inverters?|prices?'), hub: '/on-grid-inverter/', models: ['QB-1.5-4.0KTLS', 'QB-4.6-6KTLS', 'QB-6-17KTLC'] };

/** Default order, first match wins. */
export const INVERTER_RULES: InverterRule[] = [HYBRID, SMALL, HEALTH_CI, HOME, LARGE, CI, GENERIC];
// Policy posts: the subsidy / surya / net-meter branch is checked before the C&I branch, so
// e.g. "...net-metering-open-access" lands on on-grid rather than C&I on the word "open-access".
const POLICY_RULES: InverterRule[] = [HYBRID, SMALL, HEALTH_CI, HOME, LARGE, GENERIC, CI];

export function matchInverterRule(slug: string, category: string): InverterRule | null {
  const s = slug.toLowerCase();
  const cat = (category || '').toLowerCase().trim().replace(/\s+/g, '-');
  if (EXCLUDED.test(`-${s}-${cat}-`)) return null;
  const padded = `-${s}-`;
  if (PARTNER_BUSINESS.test(padded)) return null;
  const isPolicy = cat === 'policy';
  if (isPolicy && !POLICY_ALLOWED.test(padded)) return null;
  const rules = isPolicy ? POLICY_RULES : INVERTER_RULES;
  return rules.find((r) => r.pattern.test(padded)) ?? null;
}

export function getInverterRecommendations(slug: string, category: string): InverterRecommendation | null {
  const rule = matchInverterRule(slug, category);
  return rule ? { hub: rule.hub, models: rule.models.slice(0, 3) } : null;
}
