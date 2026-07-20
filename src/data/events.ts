export interface EventPhoto {
  /** Path under /public, WebP, pre-trimmed and resized to 1000px wide. */
  image: string;
  /** Descriptive alt text for screen readers and image search. */
  alt: string;
  /** Short caption shown under the photo in the grid. */
  caption: string;
}

export interface TradeEvent {
  id: string;
  name: string;
  /** Short name for tight spaces (cards, breadcrumbs). */
  shortName: string;
  venue: string;
  city: string;
  state: string;
  /** Human-readable date range as printed on the event material. */
  dates: string;
  /** ISO start date — used for sorting and structured data. */
  startDate: string;
  endDate: string;
  summary: string;
  photos: EventPhoto[];
}

const varanasi2026Dir = '/events/global-solar-expo-varanasi-2026';

export const events: TradeEvent[] = [
  {
    id: 'global-solar-expo-varanasi-2026',
    name: 'Global Solar Expo Varanasi 2026',
    shortName: 'Global Solar Expo Varanasi',
    venue: 'Deen Dayal Upadhyaya Hastkala Sankul',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    dates: '8–9 April 2026',
    startDate: '2026-04-08',
    endDate: '2026-04-09',
    summary:
      'We took the full Qbits line-up to Varanasi - on-grid and hybrid inverters on live display, with our engineers on the floor for two days answering installer and distributor questions.',
    photos: [
      {
        image: `${varanasi2026Dir}/qbits-stall-ai-inverter-display.webp`,
        alt: 'Qbits Energy exhibition stall with an AI-powered solar inverter mounted on the display wall at Global Solar Expo Varanasi',
        caption: 'Our stall, with the AI-powered inverter on live display.',
      },
      {
        image: `${varanasi2026Dir}/visitors-at-qbits-stall.webp`,
        alt: 'Visitors standing with the Qbits team in front of the India’s First AI Powered Inverter backdrop at the Qbits stall',
        caption: 'Installers and distributors at the Qbits stand.',
      },
      {
        image: `${varanasi2026Dir}/visitor-product-demo.webp`,
        alt: 'Qbits team members demonstrating solar inverter hardware to a visitor at the exhibition stall',
        caption: 'Walking a visitor through the hardware.',
      },
      {
        image: `${varanasi2026Dir}/qbits-inverter-lineup.webp`,
        alt: 'Range of Qbits on-grid and hybrid solar inverters displayed on a table at the exhibition stall',
        caption: 'The on-grid and hybrid line-up, up close.',
      },
      {
        image: `${varanasi2026Dir}/qbits-team-at-booth.webp`,
        alt: 'The Qbits Energy team standing together at their exhibition booth in Varanasi',
        caption: 'The team on the floor, both days.',
      },
      {
        image: `${varanasi2026Dir}/qbits-on-sponsor-board.webp`,
        alt: 'Qbits logo displayed among the partner brands on the official Global Solar Expo Varanasi sponsor board',
        caption: 'Qbits among the expo’s partner brands.',
      },
      {
        image: `${varanasi2026Dir}/global-solar-expo-varanasi-entrance.webp`,
        alt: 'Qbits team at the Global Solar Expo Varanasi welcome board showing the April 2026 event dates',
        caption: 'At the expo entrance, Varanasi.',
      },
    ],
  },
];

/** Most recent event first. */
export const eventsByRecency = [...events].sort((a, b) =>
  b.startDate.localeCompare(a.startDate)
);

export const latestEvent = eventsByRecency[0];

/** Flat photo list across all events, newest event first. */
export const allEventPhotos = eventsByRecency.flatMap((event) =>
  event.photos.map((photo) => ({ ...photo, event }))
);
