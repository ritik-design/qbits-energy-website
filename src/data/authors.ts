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
    bio: 'Nirav Dhanani is listed by Qbits as its co-founder and CEO. He oversees product strategy, customer experience, and project delivery across residential, commercial, and industrial solar applications. Product eligibility, certifications, and warranty terms must be checked against the current documents for the exact inverter model.',
    shortBio: 'Co-founder & CEO driving Qbits Energy\'s product strategy and growth across India.',
  },
  {
    name: 'Keyur Rakholiya',
    slug: 'keyur-rakholiya',
    role: 'CTO',
    photo: '/team/keyur-rakholiya.webp',
    linkedin: 'https://www.linkedin.com/in/keyur-rakholiya/',
    bio: 'Keyur Rakholiya is listed by Qbits as its CTO and leads engineering and product development for string and hybrid inverters. His work covers system design, protection coordination, and commissioning. Model-specific operating limits, protection functions, communications, and certificates should be verified in the current datasheet and approval documents.',
    shortBio: 'Listed by Qbits as its CTO. Current role, technical responsibilities and credentials require confirmation by the company owner.',
  },
  {
    name: 'Akash Hirapara',
    slug: 'akash-hirapara',
    role: 'CFO',
    photo: '/team/akash-hirapara.webp',
    linkedin: 'https://www.linkedin.com/in/akash-hirpara-5b0632ab/',
    bio: 'Akash Hirapara is listed by Qbits as its CFO and works across finance, procurement, and channel-partner enablement. His remit includes solar financing structures and commercial decision support. Financing, tax, partner coverage, and service availability can change and should be confirmed for the project, jurisdiction, and date of enquiry.',
    shortBio: 'CFO overseeing solar financing, procurement, and channel partner enablement at Qbits.',
  },
];

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
