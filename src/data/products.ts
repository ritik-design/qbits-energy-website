export interface Product {
  id: string;
  name: string;
  series: string;
  category: 'on-grid' | 'hybrid';
  phase: 'single' | 'three';
  powerMin: number;
  powerMax: number;
  powerUnit: string;
  efficiency: string;
  mppt: number;
  mpptLabel: string;
  voltageRange: string;
  frequency: string;
  protection: string;
  display: string;
  communication: string;
  warranty: string;
  features: string[];
  /** Spec rows below are transcribed from the model's own datasheet PDF. A field is omitted when that datasheet does not state it (or states it ambiguously). Never copy a value across models. */
  ratedOutput?: string;
  maxInputCurrent?: string;
  gridVoltageRange?: string;
  operatingTemperature?: string;
  safetyStandard?: string;
  gridStandard?: string;
  /** Blog slugs (src/content/blog) shown as "Guides for this model". Max 3. */
  guides?: string[];
  image?: string;
  datasheet?: string;
}

export const WARRANTY_NOTE =
  'The public datasheets describe an expandable warranty but do not define the base term, remedy, registration deadline, or exclusions. Obtain the current written warranty for the exact quoted model before purchase.';

// Printed identically in the "Standard" block of every datasheet listed below (checked per datasheet).
const DATASHEET_SAFETY_STANDARD = 'NB/T32004-2018, IEC62109, IEC61000, IS16169 & IS16221(BIS)';
const DATASHEET_GRID_STANDARD = 'IEC61727, EN50549-1, VDE-4105, NRS-097-2-1, OVE-Richtlinie R25, UNE217001/2, Ordinace No.140';

export const products: Product[] = [
  // On-Grid Single Phase TLS
  {
    id: 'QB-1.5-4.0KTLS',
    name: 'QB 1.5/2.0/2.7/3.0/3.3/3.6/4.0KTLS',
    series: 'TLS',
    category: 'on-grid',
    phase: 'single',
    powerMin: 1.5,
    powerMax: 4,
    powerUnit: 'kW',
    efficiency: '98%',
    mppt: 1,
    mpptLabel: 'Single-MPPT',
    voltageRange: '40–550 V MPPT; 550 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['50 V starting voltage', '20 A maximum DC input current', '98% maximum efficiency', 'IP66 enclosure'],
    ratedOutput: '1.5KTLS: 1500 W; 2.0KTLS: 2000 W; 2.7KTLS: 2700 W; 3.0KTLS: 3000 W; 3.3KTLS: 3300 W; 3.6KTLS: 3600 W; 4.0KTLS: 4000 W',
    maxInputCurrent: '20 A',
    gridVoltageRange: '90–290 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['best-3kw-solar-inverter-india-2026', '1kw-solar-system-price-india', '3kw-solar-system-price-india'],
    image: '/homepage-new/1kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_2.0-4.0-kw_1MPPT_1Phs.pdf',
  },
  {
    id: 'QB-4.6-6KTLS',
    name: 'QB 4.2/4.6/5/5.4/6KTLS',
    series: 'TLS',
    category: 'on-grid',
    phase: 'single',
    powerMin: 4.2,
    powerMax: 6,
    powerUnit: 'kW',
    efficiency: '98.0–98.1% by model',
    mppt: 1,
    mpptLabel: 'Single-MPPT',
    voltageRange: '40–600 V MPPT; 600 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['50 V starting voltage', '20 A maximum DC input current', '90–290 Vac adjustable grid range', 'IP66 enclosure'],
    ratedOutput: '4.6KTLS: 4600 W; 5KTLS: 5000 W; 6KTLS: 6000 W',
    maxInputCurrent: '20 A',
    gridVoltageRange: '90–290 Vac (adjustable)',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['best-5kw-solar-inverter-india-2026', '5kw-solar-system-price-india', 'best-solar-inverter-for-home-india'],
    image: '/homepage-new/5kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_4.6-6.0-kw_1MPPT_1Phs.pdf',
  },
  {
    id: 'QB-4-6KTLD',
    name: 'QB 4/5/6 KTLD',
    series: 'TLD',
    category: 'on-grid',
    phase: 'single',
    powerMin: 4,
    powerMax: 6,
    powerUnit: 'kW',
    efficiency: '98.1%',
    mppt: 2,
    mpptLabel: 'Dual-MPPT',
    voltageRange: '80–550V (MPPT); 550V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['2 Independent MPPTs', '20A Input per MPPT', '98.1% Maximum Efficiency', 'IP66 Protection'],
    ratedOutput: '4KTLD: 4000 W; 5KTLD: 5000 W; 6KTLD: 6000 W',
    maxInputCurrent: '20/20 A',
    gridVoltageRange: '160–270 Vac (adjustable)',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['dual-mppt-vs-single-mppt', 'east-west-roof-solar-design', 'best-5kw-solar-inverter-india-2026'],
    image: '/homepage-new/3kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf',
  },
  // On-Grid Three Phase TLC
  {
    id: 'QB-6-17KTLC',
    name: 'QB 5/6/8/10/12/15/17KTLC',
    series: 'TLC',
    category: 'on-grid',
    phase: 'three',
    powerMin: 5,
    powerMax: 17,
    powerUnit: 'kW',
    efficiency: '98.5–98.7% by model',
    mppt: 2,
    mpptLabel: 'Dual-MPPT',
    voltageRange: '180–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['2 MPPTs', '180 V starting voltage', '98.5–98.7% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '6KTLC: 6000 W; 8KTLC: 8000 W; 10KTLC: 10000 W; 12KTLC: 12000 W; 15KTLC: 15000 W; 17KTLC: 17000 W',
    maxInputCurrent: '6, 8, 10, 12KTLC: 20/20 A; 15, 17KTLC: 20/30 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['best-10kw-solar-inverter-india-2026', '3kw-vs-5kw-vs-10kw-solar-inverters', 'single-vs-3-phase-inverter'],
    image: '/homepage-new/10kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_6.0-17.0-kw_2MPPT_3Phs.pdf',
  },
  {
    id: 'QB-20-30KTLC',
    name: 'QB 20/23/25/28/30KTLC',
    series: 'TLC',
    category: 'on-grid',
    phase: 'three',
    powerMin: 20,
    powerMax: 30,
    powerUnit: 'kW',
    efficiency: '98.8%',
    mppt: 2,
    mpptLabel: 'Dual-MPPT',
    voltageRange: '180–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['2 MPPTs', '180 V starting voltage', '98.8% maximum efficiency', 'IP66 enclosure'],
    ratedOutput: '20KTLC: 20000 W; 23KTLC: 23000 W; 25KTLC: 25000 W; 28KTLC: 28000 W; 30KTLC: 30000 W',
    maxInputCurrent: '20, 23KTLC: 30/30 A; 25KTLC: 40/30 A; 28, 30KTLC: 40/40 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['solar-inverter-for-factory', 'inverter-procurement-india', 'solar-epc-india'],
    image: '/homepage-new/25kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_20.0-30.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-30-40KTLC-Pro',
    name: 'QB 30/33/36/40KTLC-Pro',
    series: 'Pro',
    category: 'on-grid',
    phase: 'three',
    powerMin: 30,
    powerMax: 40,
    powerUnit: 'kW',
    efficiency: '98.6–98.7% by model',
    mppt: 3,
    mpptLabel: '3 MPPTs',
    voltageRange: '200–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['3 MPPTs', '180 V starting voltage', '98.6–98.7% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '30KTLC-Pro: 30000 W; 33KTLC-Pro: 33000 W; 36KTLC-Pro: 36000 W; 40KTLC-Pro: 40000 W',
    maxInputCurrent: '40/40/20 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['solar-inverter-for-factory', 'solar-inverter-for-cold-storage-india', 'group-captive-solar-msme'],
    image: '/product-images/product-image-2.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_30.0-40.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-40-50KTLC-Plus',
    name: 'QB 40/45/50KTLC-Plus',
    series: 'Plus',
    category: 'on-grid',
    phase: 'three',
    powerMin: 40,
    powerMax: 50,
    powerUnit: 'kW',
    efficiency: '98.6–98.7% by model',
    mppt: 4,
    mpptLabel: 'Multi-MPPT',
    voltageRange: '200–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['4 MPPTs', '180 V starting voltage', '98.6–98.7% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '40KTLC-Plus: 40000 W; 45KTLC-Plus: 45000 W; 50KTLC-Plus: 50000 W',
    maxInputCurrent: '40/40/20/20 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    image: '/homepage-new/50kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_40.0-50.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-50-60KTLC',
    name: 'QB 50/60KTLC',
    series: 'TLC',
    category: 'on-grid',
    phase: 'three',
    powerMin: 50,
    powerMax: 60,
    powerUnit: 'kW',
    efficiency: '98.7–98.9% by model',
    mppt: 3,
    mpptLabel: '3 MPPTs',
    voltageRange: '250–1100 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['3 MPPTs', '300 V starting voltage', '98.7–98.9% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '50KTLC: 50000 W; 60KTLC: 60000 W',
    maxInputCurrent: '45/45/45 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    image: '/product-images/image.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_50.0-60.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-70-110KTLC-Pro',
    name: 'QB 70/75/80/90/100/110KTLC-Pro',
    series: 'Pro',
    category: 'on-grid',
    phase: 'three',
    powerMin: 70,
    powerMax: 110,
    powerUnit: 'kW',
    efficiency: '98.6–98.7% by model',
    mppt: 6,
    mpptLabel: '6 or 8 MPPTs by model',
    voltageRange: '200–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['6 or 8 MPPTs by model', '180 V starting voltage', '98.6–98.7% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '70KTLC-Pro: 70 kW; 75KTLC-Pro: 75 kW; 80KTLC-Pro: 80 kW; 90KTLC-Pro: 90 kW; 100KTLC-Pro: 100 kW; 110KTLC-Pro: 110 kW',
    maxInputCurrent: '70, 75KTLC-Pro: 40/40/20/40/40/20 A; 80, 90, 100, 110KTLC-Pro: 40/40/20/20/40/40/20/20 A',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['group-captive-solar-msme', 'open-access-solar-india-explained', 'solar-irr-payback-ci-india'],
    image: '/homepage-new/110kw.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_70.0-100.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-80-125KTLC',
    name: 'QB 80/90/100/110/125KTLC',
    series: 'TLC',
    category: 'on-grid',
    phase: 'three',
    powerMin: 80,
    powerMax: 125,
    powerUnit: 'kW',
    efficiency: '98.6–98.9% by model',
    mppt: 8,
    mpptLabel: '8 to 10 MPPTs by model',
    voltageRange: '200–1000 V MPPT; 1100 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['8 to 10 MPPTs by model', '300 V starting voltage', '98.6–98.9% maximum efficiency by model', 'IP66 enclosure'],
    ratedOutput: '80KTLC: 80 kW; 90KTLC: 90 kW; 100KTLC: 100 kW; 110KTLC: 110 kW; 125KTLC: 125 kW',
    maxInputCurrent: '80KTLC: 30 A × 8; 90KTLC: 30 A × 9; 100, 110, 125KTLC: 30 A × 10',
    gridVoltageRange: '310–480 Vac',
    operatingTemperature: '-25 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    image: '/homepage-new/explore-technology.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_80.0-125.0-kw_3Phs.pdf',
  },
  {
    id: 'QB-225-320K-EHV',
    name: 'QB 225/320K-EHV',
    series: 'TLC',
    category: 'on-grid',
    phase: 'three',
    powerMin: 225,
    powerMax: 320,
    powerUnit: 'kW',
    efficiency: '99.02%',
    mppt: 12,
    mpptLabel: '12 MPPTs; 14 or 16 optional on 320 kW',
    voltageRange: '500–1500 V MPPT; 1500 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'LED and Bluetooth app; optional LCD',
    communication: 'Wi-Fi; optional RS485 or GPRS',
    warranty: 'Request current written terms',
    features: ['12 MPPTs as standard', '550 V starting voltage', '99.02% maximum efficiency', 'IP66 enclosure'],
    ratedOutput: '225K-EHV: 225 kW; 320K-EHV: 320 kW',
    maxInputCurrent: '225K-EHV: 40 A × 12; 320K-EHV: 40 A × 12 (optional 30 A × 14 or 30 A × 16)',
    gridVoltageRange: '640–920 Vac',
    operatingTemperature: '-30 to +60 °C',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    image: '/product-images/product-image-4.webp',
    datasheet: '/datasheets/products/QB_Data-Sheet_225.0-320.0-kw_3Phs_Utility-Scale.pdf',
  },
  // Hybrid
  {
    id: 'QBH-3-6KS48P',
    name: 'QBH 3KS/3K6S/4KS/4K6S/5KS/6KS48P',
    series: 'QBH',
    category: 'hybrid',
    phase: 'single',
    powerMin: 3,
    powerMax: 6,
    powerUnit: 'kW',
    efficiency: '97.6% maximum',
    mppt: 1,
    mpptLabel: '1 or 2 MPPTs by model',
    voltageRange: '150–450V (MPPT); 500V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'Model-specific display; see catalogue',
    communication: 'Wi-Fi monitoring; verify battery interface',
    warranty: 'Request current written terms',
    features: ['75–120A battery current by model', '1 or 2 MPPTs by model', 'IP66 enclosure', 'Lead-acid or lithium subject to compatibility'],
    ratedOutput: '3KS48P: 3000 W; 3K6S48P: 3600 W; 4KS48P: 4000 W; 4K6S48P: 4600 W; 5KS48P: 5000 W; 6KS48P: 6000 W (off-grid rated output apparent power)',
    maxInputCurrent: '3KS48P: 18 A; 3K6S, 4KS, 4K6S, 5KS, 6KS48P: 18/18 A',
    operatingTemperature: '-25 to +60 °C (frequency-decreasing above 45 °C)',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['solar-inverter-power-cut-backup', 'battery-sizing-hybrid-solar', 'best-hybrid-solar-inverter-india-2026', 'hybrid-inverter-price-india'],
    image: '/homepage-new/hybrid.webp',
    datasheet: '/datasheets/products/Qbits-Hybride-Inverter-Catalogue-1.pdf',
  },
  {
    id: 'QBH-7-8KS48P',
    name: 'QBH 7KS/7K6S/8KS48P',
    series: 'QBH',
    category: 'hybrid',
    phase: 'single',
    powerMin: 7,
    powerMax: 8,
    powerUnit: 'kW',
    efficiency: '98% maximum',
    mppt: 2,
    mpptLabel: 'Dual-MPPT',
    voltageRange: '150–450 V MPPT; 500 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'See current model documentation',
    communication: 'Remote monitoring shown; verify interface',
    warranty: 'Request current written terms',
    features: ['175–190 A battery current by model', '2 MPPTs', '98% maximum efficiency', 'IP66 enclosure'],
    maxInputCurrent: '30/18 A',
    operatingTemperature: '-25 to +60 °C (frequency-decreasing above 45 °C)',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['best-hybrid-solar-inverter-india-2026', 'hybrid-inverter-price-india', '5kw-hybrid-inverter-price-india'],
    image: '/homepage-new/hybrid.webp',
    datasheet: '/datasheets/products/Qbits-Hybride-Inverter-Catalogue-2.pdf',
  },
  {
    id: 'QBH-5-12KS48P3',
    name: 'QBH 5/6/7/8/10/12KS48P3',
    series: 'QBH',
    category: 'hybrid',
    phase: 'three',
    powerMin: 5,
    powerMax: 12,
    powerUnit: 'kW',
    efficiency: '98%',
    mppt: 1,
    mpptLabel: '1 or 2 MPPTs by model',
    voltageRange: '200–800 V MPPT; 1000 V maximum DC',
    frequency: '50/60Hz',
    protection: 'IP66',
    display: 'See current model documentation',
    communication: 'Remote monitoring shown; verify interface',
    warranty: 'Request current written terms',
    features: ['120–250 A battery current by model', '1 or 2 MPPTs by model', '98% maximum efficiency', 'IP66 enclosure'],
    maxInputCurrent: '5, 6, 7KS48P3: 18 A; 8KS48P3: 18/18 A; 10, 12KS48P3: 36/18 A',
    operatingTemperature: '-25 to +60 °C (frequency-decreasing above 45 °C)',
    safetyStandard: DATASHEET_SAFETY_STANDARD,
    gridStandard: DATASHEET_GRID_STANDARD,
    guides: ['best-10kw-solar-inverter-india-2026', 'hybrid-inverter-price-india'],
    image: '/homepage-new/hybrid.webp',
    datasheet: '/datasheets/products/Qbits-Hybride-Inverter-Catalogue-3.pdf',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: 'on-grid' | 'hybrid'): Product[] {
  return products.filter(p => p.category === category);
}

export function getRelatedProducts(productOrId: Product | string, limit = 3): Product[] {
  const product = typeof productOrId === 'string' ? getProductById(productOrId) : productOrId;
  if (!product) return [];
  // The EHV family uses an 800 Vac connection. Other three-phase families
  // are not equivalent alternatives merely because their phase matches.
  const isEhv = product.id === 'QB-225-320K-EHV';
  return products
    .filter(p => p.category === product.category && p.phase === product.phase &&
      p.id !== product.id && (p.id === 'QB-225-320K-EHV') === isEhv)
    .sort((a, b) => Math.abs(a.powerMax - product.powerMax) - Math.abs(b.powerMax - product.powerMax))
    .slice(0, limit);
}

/** Title template: "Qbits QB-4-6KTLD 4–6 kW 1-Phase On-Grid Inverter". */
export function getProductPowerLabel(product: Product): string {
  return `${product.powerMin}–${product.powerMax} ${product.powerUnit}`;
}

export function getProductSeoTitle(product: Product): string {
  const phase = product.phase === 'single' ? '1-Phase' : '3-Phase';
  const type = product.category === 'hybrid' ? 'Hybrid' : 'On-Grid';
  return `Qbits ${product.id} ${getProductPowerLabel(product)} ${phase} ${type} Inverter`;
}

/** Description template: <= 160 chars for all 14 models, built only from fields on the page. */
export function getProductSeoDescription(product: Product): string {
  const phase = product.phase === 'single' ? 'single-phase' : 'three-phase';
  const type = product.category === 'hybrid' ? 'hybrid' : 'on-grid';
  const mpptText = product.mpptLabel.includes(' or ') && !product.mpptLabel.includes(';')
    ? product.mpptLabel.replace(' by model', '')
    : `${product.mppt} MPPT${product.mppt > 1 ? 's' : ''}`;
  const efficiency = product.efficiency.replace(' by model', '').replace(' maximum', '');
  return `Qbits ${product.id} ${getProductPowerLabel(product)} ${phase} ${type} inverter: ${mpptText}, ${efficiency} max efficiency, ${product.protection}. Download the datasheet or request a quote.`;
}
