export interface ArticleJourney {
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  kind: 'partner' | 'procurement' | 'support' | 'technical' | 'product' | 'learning';
}

export function getArticleJourney(slug: string, category: string, collection: 'blog' | 'glossary' = 'blog'): ArticleJourney {
  const source = `/${collection}/${slug}/`;
  const enquiry = (subject: string, role?: string) => `/contact-us/?${new URLSearchParams({ subject, from: source, ...(role ? { role } : {}) })}#lead-form`;
  const topic = `${slug} ${category}`.toLowerCase();
  if (/dealer|distributor|dealership|channel.partner|partner.application|become.*partner/.test(topic)) {
    const isDistributor = /distributor|distribution/.test(slug);
    return { kind: 'partner', heading: 'Discuss the right Qbits partnership route', description: 'Share your business role and location. Confirm eligibility, territory, commercial terms and support arrangements directly with Qbits.', primaryLabel: isDistributor ? 'Enquire About Distribution' : 'Enquire About a Partnership', primaryHref: enquiry(isDistributor ? 'Become a Distributor' : 'Become a Dealer', isDistributor ? 'Distributor' : 'Dealer'), secondaryLabel: 'View the Partner Application', secondaryHref: '/become-our-partner/' };
  }
  if (/inverter.*(error|fault|wifi|wi-fi|failure|troubleshoot|low-output|beeping|warranty|replacement)|maintenance/.test(topic)) {
    return { kind: 'support', heading: 'Need help with an inverter or warranty request?', description: 'Share the exact model, serial number, installation location and observed fault. Follow the model manual and use a qualified technician for electrical work.', primaryLabel: 'Request Technical Support', primaryHref: enquiry('Service Support'), secondaryLabel: 'Check the Service Network', secondaryHref: '/authorized-service-partners/' };
  }
  // Software research does not mean the reader needs an inverter supplier.
  if (/software|crm|design.tool|proposal.tool/.test(topic)) {
    return { kind: 'learning', heading: 'Continue your solar software research', description: 'Compare the workflow, inputs and limitations that matter to your task before choosing software.', primaryLabel: 'Explore Software Guides', primaryHref: '/blog/category/solar-software/', secondaryLabel: 'Browse the Solar Glossary', secondaryHref: '/glossary/' };
  }
  if (category.toLowerCase() === 'policy') {
    return { kind: 'learning', heading: 'Check the rule that applies to your project', description: 'Use the issuing authority and your DISCOM documents to confirm the current rule, eligibility and application process for your location.', primaryLabel: 'Explore Policy Guides', primaryHref: '/blog/category/policy/', secondaryLabel: 'Browse Regulatory Definitions', secondaryHref: '/glossary/' };
  }
  if (/\b(?:epc|procurement|inverter-suppliers|bulk|boq|tender|commercial|industrial|factory|cold-storage|hospital-inverter)\b/.test(topic)) {
    return { kind: 'procurement', heading: 'Preparing an inverter shortlist or RFQ?', description: 'Send the required model or capacity, quantity, grid connection, project location and delivery date. Request the exact-model documents and written supply terms.', primaryLabel: 'Discuss an EPC / Bulk RFQ', primaryHref: enquiry('EPC / Bulk Supply', 'EPC Company'), secondaryLabel: 'View Model Datasheets', secondaryHref: '/download-datasheets/' };
  }
  if (/\b(?:mppt|string|sizing|dc-ac|dc\/ac|anti-islanding|derating|voltage|current|circuit|wiring|commission(?:ing)?|efficiency)\b/.test(topic)) {
    return { kind: 'technical', heading: 'Check the exact inverter before finalising a design', description: 'Use the current model datasheet and installation instructions to verify voltage, current, phase and application limits.', primaryLabel: 'View Inverter Datasheets', primaryHref: '/download-datasheets/', secondaryLabel: 'Use the String Sizing Calculator', secondaryHref: '/string-sizing-calculator/' };
  }
  if (/inverter|residential|hybrid/.test(topic)) {
    return { kind: 'product', heading: 'Compare inverters for your application', description: 'Shortlist the right inverter type and phase, then request current documents and an exact-model quotation.', primaryLabel: 'Compare Qbits Inverter Families', primaryHref: '/our-products/', secondaryLabel: 'Request Product Pricing', secondaryHref: enquiry('Product Inquiry') };
  }
  return { kind: 'learning', heading: 'Continue researching your solar decision', description: 'Use the related guides and definitions to check the assumptions and requirements relevant to your project.', primaryLabel: 'Browse Solar Guides', primaryHref: '/blog/', secondaryLabel: 'Explore Technical Definitions', secondaryHref: '/glossary/' };
}

/** Generic finance, module and policy terms are learning journeys, not inverter RFQs. */
export function getGlossaryJourney(slug: string, category: string): ArticleJourney {
  const technicalCategories = ['Installation', 'Protection', 'Power Quality', 'Electrical Basics', 'MPPT and Strings', 'Standards', 'Grid Compliance'];
  const supportedTypes = ['solar-inverter', 'on-grid-inverter', 'hybrid-inverter', 'string-inverter', 'transformerless-inverter', 'sine-wave-inverter', 'pure-sine-wave'];
  if (supportedTypes.includes(slug)) return getArticleJourney(slug, category, 'glossary');
  if (technicalCategories.includes(category) || ['inverter-efficiency', 'clipping-loss', 'open-circuit-voltage'].includes(slug)) {
    return { kind: 'technical', heading: 'Apply this definition to an exact inverter design', description: 'Check the relevant model datasheet and installation manual. A definition or calculation alone does not confirm equipment compatibility or grid approval.', primaryLabel: 'View Inverter Datasheets', primaryHref: '/download-datasheets/', secondaryLabel: 'Read the Datasheet Guide', secondaryHref: '/blog/how-to-read-solar-inverter-datasheets/' };
  }
  if (category === 'Batteries') {
    return { kind: 'learning', heading: 'Check battery and inverter compatibility separately', description: 'Confirm battery voltage, charge and discharge limits, BMS protocol and the permitted connection arrangement before selecting equipment.', primaryLabel: 'Read the Battery Sizing Guide', primaryHref: '/blog/battery-sizing-hybrid-solar/', secondaryLabel: 'Compare Hybrid Inverter Families', secondaryHref: '/hybrid-inverter/' };
  }
  return { kind: 'learning', heading: 'Continue researching this solar decision', description: 'Use the related definitions and guides to check the assumptions, sources and requirements for your project.', primaryLabel: 'Browse Solar Guides', primaryHref: '/blog/', secondaryLabel: 'Explore Related Definitions', secondaryHref: '/glossary/' };
}
