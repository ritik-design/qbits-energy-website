---
term: "GHI"
title: "GHI (Global Horizontal Irradiance): Definition & Indian Solar Applications"
description: "GHI is the total solar irradiance on a horizontal surface. Full guide to definition, measurement and Indian solar resource assessment."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is ghi
  - global horizontal irradiance
  - ghi india
  - solar irradiance
  - irradiation
shortDefinition: "Global Horizontal Irradiance (GHI) is the total solar radiation received on a horizontal surface, equal to the sum of direct, diffuse and ground-reflected components. Measured in W/m² at any instant or kWh/m² over time. Indian GHI annual totals range from 1,200 to 2,200 kWh/m² depending on region."
quickFacts:
  industry: "Solar Resource Assessment"
  primaryUse: "Solar resource quantification"
  commonUsers: "Designers, EPCs, IPPs, modellers"
  relevantStandards: "ISO 9060, IEC 61724"
  relatedTechnologies: "Pyranometer, satellite-derived irradiance, NIWE Atlas"
relatedTerms:
  - { slug: "dni", term: "DNI" }
  - { slug: "dhi", term: "DHI" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "pyranometer", term: "Pyranometer" }
  - { slug: "albedo", term: "Albedo" }
  - { slug: "irradiation", term: "Irradiation" }
  - { slug: "p50-p90", term: "P50 / P90" }
faqs:
  - q: "What is GHI in simple words?"
    a: "How much solar energy hits a flat horizontal surface each day or year. The standard baseline measure of how sunny a location is."
  - q: "What is the unit of GHI?"
    a: "Irradiance in W/m² at an instant. Irradiation in kWh/m² over time (typically daily or annual)."
  - q: "What is the difference between GHI, DNI and DHI?"
    a: "GHI = DNI × cos(zenith) + DHI. GHI is total on horizontal. DNI is direct beam. DHI is diffuse sky radiation."
  - q: "What is the average Indian GHI?"
    a: "1,700 to 1,900 kWh/m² per year for most of India. Higher in western Rajasthan and Ladakh (above 2,000), lower in north-east and coastal (1,400 to 1,600)."
  - q: "Which Indian regions have highest GHI?"
    a: "Western Rajasthan (Jaisalmer, Bikaner), Ladakh, Gujarat (Kutch), parts of Telangana and Andhra Pradesh."
  - q: "How is GHI measured?"
    a: "Pyranometer mounted horizontally. Modern stations record at 1-minute intervals."
  - q: "What is satellite-derived GHI?"
    a: "Estimated from cloud cover, atmospheric models and surface measurements. Used where ground stations are sparse."
  - q: "Is GHI same as irradiation?"
    a: "Irradiation is the time integral of irradiance. GHI specifically refers to the horizontal-plane component."
  - q: "What is plane-of-array irradiance?"
    a: "Irradiance on the tilted PV module surface. Computed from GHI, DNI and DHI through geometric models."
  - q: "Why does Indian GHI vary by region?"
    a: "Latitude, monsoon rainfall, dust load, altitude and cloud patterns. Western India is sunnier than eastern; Ladakh has very high GHI due to altitude."
  - q: "How does GHI vary seasonally?"
    a: "Peaks in April to May. Drops during monsoon (June to September). Stable but lower in winter."
  - q: "What is the typical Indian daily GHI?"
    a: "4.5 to 6.5 kWh/m²/day average annual. Up to 8 kWh/m²/day in summer in dry regions."
  - q: "How does GHI affect solar yield?"
    a: "Yield is roughly proportional to GHI. Doubling GHI roughly doubles annual generation for the same plant."
  - q: "Where can I find Indian GHI data?"
    a: "NIWE Solar Resource Atlas, NSRDB, Solargis, Meteonorm."
  - q: "What is the relationship between GHI and PSH?"
    a: "PSH (peak sun hours) is GHI / 1000 W/m². Roughly equal to GHI in kWh/m²/day."
---

## What is GHI

Global Horizontal Irradiance (GHI) is the total solar radiation received on a horizontal surface at the Earth's surface. It is the sum of direct beam radiation (Direct Normal Irradiance projected onto horizontal), diffuse radiation from the sky (Diffuse Horizontal Irradiance) and ground-reflected radiation (typically negligible for horizontal-facing).

GHI is measured in W/m² as instantaneous irradiance, or in kWh/m² as integrated irradiation over time. Daily GHI in India averages 4.5 to 6.5 kWh/m²; annual GHI ranges from 1,200 to 2,200 kWh/m² depending on region.

For Indian solar resource assessment, GHI is the foundational measurement. Plane-of-array irradiance (the irradiance actually hitting the tilted module) is derived from GHI, DNI and DHI through geometric transformations.

## Why GHI matters

Solar resource baseline. GHI defines how much solar energy is available at a site.

Yield modelling. P50 and P90 yield models use GHI as primary input.

Plant siting. High-GHI regions favour utility-scale plants.

Performance benchmarking. PR is normalised against plane-of-array irradiance derived from GHI.

PPA tariff modelling. Higher-GHI sites can support lower PPA tariffs.

CUF prediction. CUF correlates strongly with GHI.

## GHI equation

GHI = DNI × cos(θz) + DHI

Where:
- DNI = Direct Normal Irradiance
- θz = solar zenith angle
- DHI = Diffuse Horizontal Irradiance

## Technical deep dive

### Indian GHI by region (annual, kWh/m²)

| Region | Annual GHI |
|---|---|
| Western Rajasthan, Kutch | 2,000 to 2,200 |
| Ladakh, Spiti | 2,000 to 2,400 (altitude effect) |
| Andhra Pradesh, Telangana | 1,800 to 1,950 |
| Karnataka, Tamil Nadu | 1,750 to 1,900 |
| Maharashtra, MP, Chhattisgarh | 1,700 to 1,850 |
| Gujarat (non-Kutch) | 1,800 to 1,950 |
| Delhi, Haryana, Punjab | 1,650 to 1,800 |
| Uttar Pradesh, Bihar | 1,500 to 1,750 |
| West Bengal, Odisha | 1,500 to 1,700 |
| Kerala, Goa | 1,500 to 1,750 |
| North-east states | 1,200 to 1,500 |

### GHI vs PSH

Peak Sun Hours (PSH) = GHI / 1 kW/m²

For GHI = 1,800 kWh/m²/year:
Annual PSH = 1,800 hours
Daily PSH average = 1,800 / 365 = 4.93 hours

### Seasonal variation

| Month | Approximate Delhi GHI (kWh/m²/day) |
|---|---|
| January | 4.0 |
| February | 4.8 |
| March | 5.8 |
| April | 6.5 |
| May | 6.8 |
| June | 5.5 (monsoon onset) |
| July | 4.5 (monsoon peak) |
| August | 4.0 (monsoon) |
| September | 4.8 |
| October | 5.2 |
| November | 4.3 |
| December | 3.8 |

### GHI measurement

| Instrument | Description |
|---|---|
| Thermopile pyranometer (Class A) | High-accuracy reference |
| Silicon-cell pyranometer (Class B/C) | Lower cost, spectrum-limited |
| Satellite-derived | Spatial coverage |
| Reanalysis data (ERA5) | Historical archive |

### Data sources

| Source | Coverage |
|---|---|
| NIWE Solar Resource Atlas | India ground stations |
| Solargis | Global satellite-derived |
| NSRDB | Global, including India |
| Meteonorm | Global synthesis |
| ISRO Bhuvan Solar | Indian satellite-derived |

## Real-world applications

Solar plant siting and pre-feasibility.

Bankable yield modelling for project finance.

PR calculation for plant performance.

State-wise solar policy benchmarking.

Tariff order LCOE inputs.

Residential rooftop sizing.

## GHI quality classifications

| Class | Standard | Use |
|---|---|---|
| Class A (Secondary Standard) | ISO 9060 | Reference, scientific |
| Class B (First Class) | ISO 9060 | Commercial plants |
| Class C (Second Class) | ISO 9060 | Indicative |
| Reference cell | IEC 60904 | Calibration |

## Common GHI problems

Soiled pyranometer reading low.

Shading on pyranometer (intermittent).

Calibration drift over years.

Satellite-derived GHI errors in cloudy regions.

Conversion errors between GHI and POA.

## Best practices

Install calibrated pyranometers in array plane.

Clean sensors regularly.

Use ground-validated satellite data for long-term averages.

Apply P50 and P90 GHI for yield modelling.

Document GHI source and version in yield reports.

Match temporal resolution to project needs (hourly minimum for plant modelling).

## Indian market context

NIWE operates a network of ground-based solar resource stations across India.

Solargis and NSRDB provide commercial satellite-derived GHI data for bankable yield modelling.

ISRO Bhuvan Solar provides free Indian satellite GHI data.

Major Indian utility solar projects use Solargis or Meteonorm P50/P90 data.

SECI tender bid documents reference GHI data for capacity allocation by state.

## Standards and certifications

| Standard | Scope |
|---|---|
| ISO 9060 | Pyranometer classification |
| IEC 61724-1 | Performance monitoring including irradiance |
| WMO CIMO Guide | Meteorological measurement |
| NREL NSRDB methodology | Satellite-derived GHI |

## Common mistakes

Using one year of GHI data instead of multi-year averages.

Confusing GHI with POA irradiance.

Skipping P90 sensitivity for project finance.

Treating satellite-derived data as fully ground-validated.

Ignoring soiling and shading on pyranometer.

## Key takeaways

GHI is the foundational solar resource measurement, the total solar radiation hitting a horizontal surface. Indian GHI ranges from 1,200 kWh/m²/year in the north-east to over 2,200 in western Rajasthan and Ladakh. GHI is the primary input to yield modelling, plant siting and PPA tariff calculation. Calibrated measurements, multi-year averages and proper sensor maintenance determine bankable resource assessment.

## Need bankable GHI-based yield modelling?

QBits Energy provides solar resource assessment and yield modelling using validated GHI data sources for Indian utility, C&I and residential projects.

## Sources

- NIWE Solar Resource Atlas.
- ISO 9060, Pyranometer classification.
- IEC 61724-1, Performance monitoring.
- Solargis Solar Resource Database.
- NSRDB National Solar Radiation Database, NREL.
- Meteonorm Global Solar Radiation Database.
- ISRO Bhuvan Solar.
- WMO Guide to Meteorological Instruments.
- IEA PVPS Task 16 Report on Solar Resource for High-Penetration Applications.
