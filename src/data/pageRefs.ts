/**
 * Page references for WhatsApp prefill and lead attribution (Heaven Group plan, W8).
 * Every WhatsApp chat from the site opens "[QB-<REF>] ...", and every lead carries the same
 * ref in Odoo and the email. Named refs follow the plan (section 3.3).
 */
const NAMED: Record<string, string> = {
  '/': 'HOME',
  '/become-our-partner': 'PARTNER',
  '/authorized-service-partners': 'PARTNER-MAP',
  '/download-datasheets': 'DATASHEET',
  '/contact-us': 'CONTACT',
  '/our-products': 'PRODUCTS',
  '/blog/solar-panel-price-india': 'HOME-HANDOFF',
};

const clean = (s: string) => s.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toUpperCase().slice(0, 24);

export function pageRefFor(pathname: string): string {
  const p = (pathname || '/').replace(/\.html$/, '').replace(/(^|\/)index$/, '').replace(/\/+$/, '') || '/';
  if (NAMED[p]) return NAMED[p];
  const [section, slug] = p.split('/').filter(Boolean);
  if (section === 'blog') {
    if (!slug) return 'BLOG';
    if (/dealer|distributor|partner|dealership|margin/.test(slug)) return 'PARTNER';
    if (/installer|epc/.test(slug)) return 'INSTALLER';
    if (/surya-?ghar|pmsg/.test(slug)) return 'PMSG';
    if (/vs-|best-|price|review/.test(slug)) return 'COMPARE';
    return 'BLOG';
  }
  if (section === 'on-grid-inverter' || section === 'hybrid-inverter') return slug ? `PRODUCT-${clean(slug)}`.slice(0, 32) : clean(section);
  if (section === 'our-products' || section === 'products') return slug ? `PRODUCT-${clean(slug)}`.slice(0, 32) : 'PRODUCTS';
  if (section === 'glossary') return 'GLOSSARY';
  return clean(section || 'HOME') || 'HOME';
}
