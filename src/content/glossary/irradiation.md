---
term: "Irradiation"
title: "Irradiation: Definition, Units & Solar Resource"
description: "Irradiation is solar energy received over time. Full guide to units and Indian solar applications."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - solar irradiation
  - irradiation units
  - kwh per m2
  - solar energy per area
  - daily irradiation
shortDefinition: "Irradiation is solar energy received per unit area over a period, measured in kWh/m² or MJ/m². Distinct from irradiance (power, W/m²). Daily irradiation in India typically 4.5-6.5 kWh/m²/day. Annual irradiation 1,200-2,200 kWh/m²/year."
quickFacts:
  industry: "Solar Resource"
  primaryUse: "Solar resource quantification over time"
  commonUsers: "Resource assessors, yield modellers"
  relevantStandards: "ISO 9060, IEC 61724"
  relatedTechnologies: "Pyranometer, satellite-derived data"
relatedTerms:
  - { slug: "ghi", term: "GHI" }
  - { slug: "dni", term: "DNI" }
  - { slug: "dhi", term: "DHI" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "plane-of-array", term: "Plane of Array" }
  - { slug: "albedo", term: "Albedo" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "stc", term: "STC" }
faqs:
  - q: "What is irradiation in simple words?"
    a: "The total amount of solar energy that hits a surface over a day, month or year. Measured in kilowatt-hours per square metre."
  - q: "Irradiation vs irradiance?"
    a: "Irradiance: instantaneous power, W/m². Irradiation: energy over time, kWh/m². Irradiation = integral of irradiance over time."
  - q: "What is the unit?"
    a: "kWh/m² (kilowatt-hour per square metre) for solar. MJ/m² (megajoule per square metre) in some scientific contexts. 1 kWh/m² = 3.6 MJ/m²."
  - q: "Indian daily irradiation?"
    a: "4.5-6.5 kWh/m²/day on horizontal. Higher in summer (6-7) and dry regions, lower in monsoon (3-4)."
  - q: "Indian annual irradiation?"
    a: "1,200-2,200 kWh/m²/year on horizontal. Highest in Rajasthan, Gujarat, Ladakh."
  - q: "Is irradiation same as GHI?"
    a: "GHI is irradiation on horizontal surface. POA is irradiation on tilted plane. Both are forms of irradiation."
  - q: "How is irradiation measured?"
    a: "Integrating pyranometer output over time, or summing hourly satellite-derived irradiance values."
  - q: "Is irradiation same as insolation?"
    a: "Insolation is sometimes used synonymously, especially in older literature. Modern engineering prefers irradiation."
  - q: "How does irradiation relate to yield?"
    a: "Yield (kWh) = Capacity (kW) × Irradiation (kWh/m²) × Performance Ratio / G_STC."
  - q: "What is the highest irradiation in the world?"
    a: "Atacama Desert (Chile), Sahara, parts of Australia: 2,500-2,800 kWh/m²/year."
  - q: "Is Indian irradiation high?"
    a: "Above global average. India's annual average around 1,700-1,900 kWh/m²/year for most regions."
  - q: "How does monsoon affect irradiation?"
    a: "Significant reduction. Monsoon months see 30-50 percent reduction in daily irradiation."
  - q: "What is plane-of-array irradiation?"
    a: "Irradiation on the actual tilted PV module surface. Calculated from GHI, DNI and DHI with sky models."
  - q: "How accurate is satellite-derived irradiation?"
    a: "Within 3-5 percent for ground-validated multi-year averages. Higher uncertainty for individual years."
  - q: "Where is irradiation data found?"
    a: "NIWE Solar Atlas, Solargis, NSRDB, Meteonorm, PVGIS."
author: "Akash Hirapara"
---

## What is irradiation

Irradiation is the total solar energy received per unit area over a specified time period, expressed in kWh/m² or MJ/m². It is the time integral of irradiance (instantaneous power per area). Daily irradiation is typical for solar PV design; annual irradiation is the standard for resource benchmarking; hourly irradiation supports detailed yield modelling.

For Indian solar, irradiation is the foundational measurement for resource assessment, yield prediction and plant siting. Daily irradiation in India averages 4.5-6.5 kWh/m²/day (varying by location and season). Annual irradiation ranges from 1,200 kWh/m²/year in the north-east to over 2,200 in western Rajasthan and Ladakh.

## Why irradiation matters

Yield prediction. Direct proportional relationship to PV plant generation.

Plant siting. High-irradiation sites favour utility-scale plants.

Tariff economics. Higher irradiation supports lower PPA tariffs.

Bankability. Multi-year irradiation data underpins project finance.

Performance benchmarking. PR is normalised against irradiation.

## Irradiation types

| Type | Description |
|---|---|
| GHI (Global Horizontal Irradiation) | On horizontal surface |
| DNI (Direct Normal Irradiation) | On surface perpendicular to sun |
| DHI (Diffuse Horizontal Irradiation) | Sky-scattered on horizontal |
| POA (Plane of Array Irradiation) | On tilted module surface |
| GTI (Global Tilted Irradiation) | Same as POA |

## Technical deep dive

### Irradiation by region (annual, kWh/m²/year, on horizontal GHI)

| Region | Annual GHI |
|---|---|
| Western Rajasthan, Ladakh | 2,000-2,400 |
| Andhra Pradesh, Telangana | 1,800-1,950 |
| Karnataka, Tamil Nadu | 1,750-1,900 |
| Maharashtra, MP | 1,700-1,850 |
| Gujarat (non-Kutch) | 1,800-1,950 |
| Delhi, Haryana, Punjab | 1,650-1,800 |
| UP, Bihar | 1,500-1,750 |
| West Bengal, Odisha | 1,500-1,700 |
| Kerala, Goa | 1,500-1,750 |
| North-east | 1,200-1,500 |

### Unit conversions

| From | To | Factor |
|---|---|---|
| kWh/m² | MJ/m² | × 3.6 |
| MJ/m² | kWh/m² | / 3.6 |
| kWh/m²/day | W/m² (average) | / 24 × 1000 |
| Wh/m² | kWh/m² | / 1000 |

### POA vs GHI

POA irradiation typically exceeds GHI for south-facing tilted modules:
- POA gain at optimum tilt: +5 to +15 percent over GHI
- POA reduction at horizontal: 0% (POA = GHI)
- POA reduction at flat south-facing wall: -50% to -70%

### Seasonal variation (Delhi example, daily GHI)

| Month | Daily kWh/m² |
|---|---|
| January | 4.0 |
| April | 6.5 |
| July | 4.5 (monsoon) |
| December | 3.8 |

### Measurement instruments

| Type | Use |
|---|---|
| Thermopile pyranometer (Class A) | Reference quality |
| Silicon-cell pyranometer | Commercial monitoring |
| Pyrheliometer | DNI measurement |
| Albedometer | GHI and reflected |

## Real-world applications

Solar plant siting.

Bankable yield modelling.

PR calculation.

PPA tariff inputs.

Tariff orders.

Performance benchmarking.

## Best practices

Use multi-year averaged irradiation (10+ years).

Cross-validate satellite data against ground stations.

Document irradiation source in yield reports.

Apply P50 and P90 distributions for project finance.

Account for inter-annual variability (typically ±5 percent).

## Indian market context

NIWE Solar Atlas provides Indian ground station data.

Solargis and NSRDB provide bankable satellite-derived irradiation.

Meteonorm and PVGIS used for residential and small commercial.

SECI tender bids use validated multi-year irradiation.

PM Surya Ghar residential uses location-based estimates.

## Standards and certifications

| Standard | Scope |
|---|---|
| ISO 9060 | Pyranometer classification |
| IEC 61724 | Performance monitoring |
| WMO CIMO Guide | Meteorological measurement |
| NREL NSRDB methodology | Satellite-derived |

## Key takeaways

Irradiation is solar energy per unit area over time, measured in kWh/m² or MJ/m². Indian annual irradiation ranges from 1,200 (north-east) to over 2,200 (Rajasthan, Ladakh). Key types: GHI, DNI, DHI, POA. Multi-year ground-validated satellite data is the bankable standard. Irradiation underpins yield prediction, plant siting and PPA tariff economics. Inter-annual variability of ±5 percent affects yield projections.

## Need bankable irradiation data?

QBits Energy provides solar resource assessment using ground-validated multi-year irradiation data for Indian utility, C&I and residential solar projects.

## Sources

- ISO 9060, Pyranometer classification.
- IEC 61724, Performance monitoring.
- NIWE Solar Resource Atlas.
- Solargis Solar Resource Database.
- NSRDB, NREL.
- Meteonorm Global Solar Radiation Database.
- PVGIS Photovoltaic Geographic Information System.
- WMO Guide to Meteorological Instruments.
- IEA PVPS Task 16 publications.
