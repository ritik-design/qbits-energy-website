export interface Author {
  name: string;
  slug: string;
  role: string;
  photo: string;
  linkedin: string;
  bio: string;
  shortBio: string;
}

export const authors: Author[] = [
  {
    name: 'Nirav Dhanani',
    slug: 'nirav-dhanani',
    role: 'CEO',
    photo: '/team/nirav-dhanani.webp',
    linkedin: 'https://www.linkedin.com/in/nirav-dhanani-700332129/',
    bio: 'Nirav co-founded Qbits Energy and has been shaping India\'s solar inverter landscape since 2017. He oversees product strategy, customer experience, and large-scale project deployments across residential, commercial, and industrial sectors. Under his leadership, Qbits has grown into one of India\'s most trusted made-in-India solar inverter brands — with 10,000+ installations, ALMM Phase III listing, and a 12-year full-replacement warranty that sets the industry standard.',
    shortBio: 'Co-founder & CEO driving Qbits Energy\'s product strategy and growth across India.',
  },
  {
    name: 'Keyur Rakholiya',
    slug: 'keyur-rakholiya',
    role: 'CTO',
    photo: '/team/keyur-rakholiya.webp',
    linkedin: 'https://www.linkedin.com/in/keyur-rakholiya/',
    bio: 'Keyur leads engineering and product development at Qbits Energy, including the R&D roadmap for string and hybrid inverters. He specialises in system design, protection coordination, and commissioning for rooftop and ground-mount plants. His work on India-tuned inverter technology — grid-compliance for wide-voltage Indian grids, IP66 weather protection, and AI-powered WhatsApp monitoring — ensures Qbits products perform reliably in India\'s demanding conditions.',
    shortBio: 'CTO leading Qbits inverter R&D, system design, and engineering innovation.',
  },
  {
    name: 'Akash Hirapara',
    slug: 'akash-hirapara',
    role: 'CFO',
    photo: '/team/akash-hirapara.webp',
    linkedin: 'https://www.linkedin.com/in/akash-hirpara-5b0632ab/',
    bio: 'Akash manages finance, procurement, and channel-partner enablement at Qbits Energy. He specialises in solar financing structures — including solar loans, accelerated depreciation, and CAPEX vs OPEX vs RESCO decisions — and has helped structure financing for large-scale C&I solar installations across Gujarat, Maharashtra, and Rajasthan. He also manages Qbits\' dealer and installer network spanning 20+ cities across India.',
    shortBio: 'CFO overseeing solar financing, procurement, and channel partner enablement at Qbits.',
  },
];

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
