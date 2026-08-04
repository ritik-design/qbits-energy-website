/**
 * Real Qbits inverter installations, photographed on site.
 *
 * Everything here is read off the photograph itself — the DCDB/ACDB rating
 * labels, the mounting surface, whether the site is a single home or a bank of
 * inverters. Nothing is inferred. Customer names, cities, system sizes and
 * commissioning dates are deliberately absent: add them per row as the field
 * team confirms them, and the UI will render them automatically.
 */

export type InstallationCategory = 'residential' | 'commercial';

export interface Installation {
  /** Stable slug — used for anchors and lightbox keys. */
  id: string;
  /** 1600px wide WebP. */
  image: string;
  /** 800px wide WebP for grid tiles. */
  thumb: string;
  alt: string;
  caption: string;
  category: InstallationCategory;
  /** DC combiner box rating printed on the enclosure label, if visible. */
  dcdb?: string;
  /** AC combiner box rating printed on the enclosure label, if visible. */
  acdb?: string;
  /** Where the unit is mounted — the honest, photo-derived detail. */
  setting: string;
  /** Number of Qbits inverters visible in frame. */
  inverters: number;
  /** Show in the homepage teaser + hero mosaic. */
  featured?: boolean;
  /* --- Fill these in as the field team confirms them --- */
  city?: string;
  state?: string;
  /** e.g. "5.4 kWp" — the actual array size, not the DB rating. */
  systemSize?: string;
  /** ISO date, e.g. "2026-03-14". */
  commissioned?: string;
}

const img = (n: number) => ({
  image: `/installations/install-${n}.webp`,
  thumb: `/installations/install-${n}-sm.webp`,
});

export const installations: Installation[] = [
  {
    id: 'rooftop-parapet-mount',
    ...img(12),
    alt: 'Qbits on-grid solar inverter wall-mounted on a rooftop parapet between a DCCB and ACDB enclosure, with conduit routed to a cable tray',
    caption:
      'Rooftop parapet mount with the DC and AC combiner boxes flanking the inverter and every conduit run squared off to the wall.',
    category: 'residential',
    dcdb: 'DCCB 1–1.3 kW',
    acdb: 'ACDB 1–4 kW',
    setting: 'Rooftop parapet wall',
    inverters: 1,
    featured: true,
  },
  {
    id: 'terrace-open-air',
    ...img(18),
    alt: 'Qbits solar inverter mounted on a white terrace wall under an open pergola, flanked by DCDB and ACDB boxes on a blue cable trunk',
    caption:
      'Terrace installation under an open pergola. Combiner boxes sit level with the inverter on a single trunking run.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Open terrace, shaded bay',
    inverters: 1,
    featured: true,
  },
  {
    id: 'exposed-concrete-wall',
    ...img(7),
    alt: 'Qbits solar inverter installed on a bare concrete wall with DCDB and ACDB enclosures and a long grey cable trunk beneath',
    caption:
      'Bare concrete wall install. A single continuous trunk carries every cable run below the equipment line.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Exposed concrete wall',
    inverters: 1,
    featured: true,
  },
  {
    id: 'home-entrance-mount',
    ...img(5),
    alt: 'Qbits solar inverter mounted above a decorated home entrance with marigold garlands and a toran',
    caption:
      'Mounted above the main entrance of a family home, with the combiner boxes set symmetrically either side.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Above the main entrance',
    inverters: 1,
    featured: true,
  },
  {
    id: 'patterned-tile-wall',
    ...img(17),
    alt: 'Qbits solar inverter mounted on a patterned jali tile wall with DCCB and ACDB enclosures',
    caption:
      'Mounted flush against a patterned tile facade without disturbing the tilework.',
    category: 'residential',
    dcdb: 'DCCB 1–3.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Patterned tile facade',
    inverters: 1,
    featured: true,
  },
  {
    id: 'marble-clad-entrance',
    ...img(19),
    alt: 'Qbits solar inverter installed on a marble-clad wall above a carved wooden door, with DCCB and ACDB boxes and PVC conduit',
    caption:
      'Marble-clad entrance wall. Conduit is routed in straight parallel runs so the cladding stays the feature.',
    category: 'residential',
    dcdb: 'DCCB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Marble-clad entrance wall',
    inverters: 1,
  },
  {
    id: 'grey-facade-vertical-runs',
    ...img(3),
    alt: 'Qbits solar inverter on a grey textured wall with vertical PVC conduit runs down to DCDB and ACDB enclosures',
    caption:
      'Vertical conduit drops feed the combiner boxes below, keeping the inverter face clear.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Textured exterior facade',
    inverters: 1,
  },
  {
    id: 'stairwell-mount',
    ...img(6),
    alt: 'Qbits solar inverter mounted on an interior stairwell wall with ACDB and DCDB enclosures on either side',
    caption:
      'Interior stairwell install, kept out of the weather and within easy reach for service.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Interior stairwell',
    inverters: 1,
  },
  {
    id: 'boundary-wall-rural',
    ...img(4),
    alt: 'Qbits solar inverter installed on a rural boundary wall with a long horizontal conduit run above',
    caption:
      'Boundary wall install with the DC run carried overhead and dropped cleanly into each enclosure.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Boundary wall',
    inverters: 1,
  },
  {
    id: 'weathered-compound-wall',
    ...img(10),
    alt: 'Qbits solar inverter mounted on a weathered compound wall with ACDB and DCDB enclosures on a slim trunking rail',
    caption:
      'Retrofit onto an older compound wall. The equipment line is levelled even where the wall is not.',
    category: 'residential',
    dcdb: 'DCDB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Weathered compound wall',
    inverters: 1,
  },
  {
    id: 'utility-meter-integration',
    ...img(8),
    alt: 'Qbits solar inverter installed beside utility meter enclosures and a consumer distribution board',
    caption:
      'Tied in alongside the existing utility meters and consumer board — the net-metering handover point.',
    category: 'residential',
    dcdb: 'DCDB 1–1.5 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Beside the utility metering point',
    inverters: 1,
  },
  {
    id: 'meter-wall-verandah',
    ...img(9),
    alt: 'Qbits solar inverter on a verandah wall with DCCB and ACDB boxes on a blue trunk, next to a utility meter box',
    caption:
      'Verandah wall mount with the combiner boxes dropped below the inverter onto a shared trunk.',
    category: 'residential',
    dcdb: 'DCCB 1–1.5 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Covered verandah',
    inverters: 1,
  },
  {
    id: 'plastered-wall-blue-trunk',
    ...img(11),
    alt: 'Qbits solar inverter on a plain white wall with two combiner enclosures and a blue slotted cable trunk',
    caption:
      'Plain plastered wall, slotted trunking, and cable tails dressed to equal lengths.',
    category: 'residential',
    setting: 'Plastered interior wall',
    inverters: 1,
  },
  {
    id: 'roadside-shop-front',
    ...img(14),
    alt: 'Qbits solar inverter mounted on a blue painted wall of a roadside commercial premises',
    caption:
      'Roadside commercial premises. Installed on an existing painted wall with no structural work.',
    category: 'commercial',
    setting: 'Roadside commercial premises',
    inverters: 1,
  },
  {
    id: 'indoor-plant-room',
    ...img(16),
    alt: 'Qbits solar inverter mounted in an indoor plant room with DCCB and ACDB boxes and a Qbits shipping carton below',
    caption:
      'Indoor plant room install, photographed on commissioning day.',
    category: 'commercial',
    dcdb: 'DCCB 1–5.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Indoor plant room',
    inverters: 1,
  },
  {
    id: 'corner-mount-three-phase',
    ...img(15),
    alt: 'Larger Qbits solar inverter mounted in a building corner with a three-phase ACDB and a multi-string DCDB enclosure',
    caption:
      'Corner mount with a multi-string DC board and a three-phase AC board sized for a larger array.',
    category: 'commercial',
    dcdb: 'DCDB 5–3.3 kW',
    acdb: 'ACDB 1–2.5 kW',
    setting: 'Building corner, indoors',
    inverters: 1,
  },
  {
    id: 'nine-inverter-bank',
    ...img(21),
    alt: 'A bank of nine Qbits solar inverters mounted in three rows on an exterior wall with paired combiner boxes',
    caption:
      'Nine Qbits inverters in a three-by-three bank, each with its own DC and AC combiner pair on a shared rail.',
    category: 'commercial',
    setting: 'Multi-inverter bank, exterior wall',
    inverters: 9,
    featured: true,
  },
  {
    id: 'institutional-inverter-wall',
    ...img(13),
    alt: 'A large institutional installation with dozens of Qbits solar inverters and meters racked across a courtyard wall',
    caption:
      'An institutional-scale wall: rows of inverters and metering racked across a single elevation.',
    category: 'commercial',
    setting: 'Institutional courtyard wall',
    inverters: 30,
    featured: true,
  },
  {
    id: 'clean-white-wall',
    ...img(20),
    alt: 'Qbits solar inverter on a clean white exterior wall with DCDB and ACDB enclosures above a long cable trunk',
    caption:
      'A textbook layout — inverter centred, boards squared, one trunk line carrying everything.',
    category: 'residential',
    dcdb: 'DCDB 1–3.9 kW',
    acdb: 'ACDB 1–6 kW',
    setting: 'Exterior wall',
    inverters: 1,
  },
  {
    id: 'earlier-generation-mount',
    ...img(1),
    alt: 'Qbits solar inverter mounted on a beige wall between a solar SCDB and a single-phase solar ACDB enclosure',
    caption:
      'Single-phase install with the solar DCDB and ACDB set either side of the inverter.',
    category: 'residential',
    setting: 'Exterior wall',
    inverters: 1,
  },
];

export const featuredInstallations = installations.filter((i) => i.featured);

export const residentialInstallations = installations.filter(
  (i) => i.category === 'residential',
);

export const commercialInstallations = installations.filter(
  (i) => i.category === 'commercial',
);

/** Total Qbits inverters visible across every photograph on the page. */
export const invertersPictured = installations.reduce(
  (sum, i) => sum + i.inverters,
  0,
);
