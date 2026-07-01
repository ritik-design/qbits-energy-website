---
term: "DNI"
title: "DNI (Direct Normal Irradiance): Definition & Solar Applications"
description: "DNI is the direct beam solar irradiance. Full guide to measurement and CSP/tracker applications in India."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is dni
  - direct normal irradiance
  - dni india
  - csp dni
  - tracker solar dni
shortDefinition: "Direct Normal Irradiance (DNI) is the solar radiation arriving on a surface perpendicular to the sun's direct beam, excluding diffuse and reflected components. It is critical for CSP (Concentrated Solar Power), single-axis trackers and bifacial PV gain calculations. Indian annual DNI ranges from 1,400 to 2,400 kWh/m²."
quickFacts:
  industry: "Solar Resource Assessment"
  primaryUse: "CSP, tracker and bifacial yield calculation"
  commonUsers: "CSP developers, tracker manufacturers, resource assessors"
  relevantStandards: "ISO 9060, IEC 61724"
  relatedTechnologies: "Pyrheliometer, sun tracker, CSP, single-axis tracker"
relatedTerms:
  - { slug: "ghi", term: "GHI" }
  - { slug: "dhi", term: "DHI" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "csp", term: "CSP" }
  - { slug: "single-axis-tracker", term: "Single-Axis Tracker" }
  - { slug: "bifacial-module", term: "Bifacial Module" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "pyranometer", term: "Pyranometer" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "irradiation", term: "Irradiation" }
faqs:
  - q: "What is DNI in simple words?"
    a: "The portion of sunlight that comes straight from the sun without scattering, measured on a surface that always faces the sun. The component that trackers and concentrators care about."
  - q: "What is the unit of DNI?"
    a: "Irradiance in W/m². Irradiation in kWh/m² over time."
  - q: "DNI vs GHI, what is the difference?"
    a: "GHI is total irradiance on horizontal including diffuse and reflected. DNI is only the direct beam, measured perpendicular to the sun."
  - q: "What is the typical Indian DNI?"
    a: "1,400 to 2,400 kWh/m²/year. Highest in Ladakh (above 2,500), western Rajasthan (above 2,000), lowest in north-east and humid coastal (1,200 to 1,500)."
  - q: "Where is DNI most important?"
    a: "CSP plants (mirrors only concentrate direct beam). Single-axis trackers. Bifacial yield modelling. Solar pumping with tracking."
  - q: "How is DNI measured?"
    a: "Pyrheliometer mounted on a sun-tracking platform. Always pointed at the sun."
  - q: "Why does DNI matter less for fixed PV?"
    a: "Fixed PV captures direct, diffuse and some reflected. DNI alone does not predict fixed PV yield well; GHI does better."
  - q: "Why is Ladakh DNI so high?"
    a: "High altitude reduces atmospheric absorption. Clear, dry air maximises direct beam."
  - q: "Does dust affect DNI?"
    a: "Yes. Aerosols scatter direct beam into diffuse, reducing DNI but raising DHI. Indian dust significantly lowers DNI compared to clear sky models."
  - q: "Does DNI vary seasonally?"
    a: "Yes. Monsoon clouds dramatically reduce DNI in June to September across most of India."
  - q: "What is the relationship between DNI, DHI and GHI?"
    a: "GHI = DNI × cos(zenith) + DHI."
  - q: "Is DNI same as direct irradiance?"
    a: "Yes. Direct irradiance and DNI are interchangeable terms."
  - q: "How is DNI used in CSP economics?"
    a: "CSP yield is roughly proportional to DNI. CSP requires sites with at least 2,000 kWh/m²/year DNI for viability."
  - q: "What is solar disk angular size?"
    a: "About 0.5 degrees. DNI is measured within a 5 degree field of view around the sun for practical instruments."
  - q: "Where can I find Indian DNI data?"
    a: "NIWE Solar Resource Atlas, Solargis, NSRDB, Meteonorm."
author: "Nirav Dhanani"
---

## What is DNI

Direct Normal Irradiance (DNI) is the solar radiation arriving on a surface perpendicular to the direct beam from the sun, excluding diffuse sky radiation and ground-reflected components. Measured in W/m² as instantaneous irradiance and kWh/m² as integrated irradiation.

DNI represents the unscattered solar beam. On a clear day at sea level, peak DNI reaches roughly 900 W/m². At higher altitudes or in extremely clear conditions, DNI can exceed 1,000 W/m². On cloudy days DNI drops to near zero, even when GHI may still be significant due to diffuse contribution.

For Indian solar, DNI matters most for CSP (Concentrated Solar Power), single-axis tracker PV plants and bifacial yield modelling. CSP cannot use diffuse light; tracker plants chase the direct beam for maximum capture; bifacial gain depends on the direct/diffuse split that determines ground reflection patterns.

## Why DNI matters

CSP economics. CSP plants are viable only at sites with DNI above approximately 2,000 kWh/m²/year.

Tracker yield. Trackers maximise the use of DNI by keeping panels perpendicular to the sun.

Bifacial yield. The DNI/DHI ratio affects rear-side reflection gain.

Plant siting. High-DNI sites favour tracker and CSP technologies.

Resource assessment. DNI is one of three core measurements alongside GHI and DHI.

## How DNI is measured

DNI = solar beam radiation through a small angular field of view (typically 5°) centred on the sun.

Measurement instruments:
| Instrument | Description |
|---|---|
| Pyrheliometer | Thermopile sensor, narrow field of view, mounted on solar tracker |
| Rotating shadowband radiometer | Periodically shades pyranometer to derive DNI |
| Satellite-derived DNI | Estimated from cloud and aerosol products |

## Technical deep dive

### Indian DNI by region (annual, kWh/m²)

| Region | Annual DNI |
|---|---|
| Ladakh, Spiti | 2,400 to 2,600 |
| Western Rajasthan, Kutch | 2,000 to 2,300 |
| Andhra Pradesh, Telangana | 1,700 to 1,950 |
| Karnataka, Tamil Nadu | 1,600 to 1,900 |
| Maharashtra, MP | 1,700 to 1,900 |
| Gujarat (non-Kutch) | 1,800 to 2,050 |
| Delhi, Haryana, Punjab | 1,500 to 1,800 |
| Uttar Pradesh, Bihar | 1,300 to 1,650 |
| West Bengal, Odisha | 1,300 to 1,600 |
| Kerala, Goa | 1,300 to 1,650 |
| North-east states | 1,000 to 1,400 |

### DNI vs GHI ratio (clearness index)

| Climate | DNI/GHI ratio (approximate) |
|---|---|
| Desert (clear, dry) | 1.2 to 1.4 |
| Continental dry | 1.0 to 1.2 |
| Tropical (humid) | 0.7 to 1.0 |
| Coastal humid | 0.6 to 0.9 |
| Monsoon (June-Sep India) | 0.3 to 0.6 |

### Bifacial gain interaction

Higher DNI means more direct light reaching the ground for rear-side reflection. Sites with high DNI/GHI ratio favour bifacial more strongly.

### CSP DNI threshold

CSP economic viability roughly requires DNI > 2,000 kWh/m²/year. Indian CSP has limited deployment because most regions fall below this threshold, with exceptions in Rajasthan and Ladakh.

## Real-world applications

CSP plant siting (limited Indian deployment).

Tracker plant yield modelling.

Bifacial plant gain prediction.

Solar pumping with tracking.

Concentrated PV (CPV).

Daylighting design.

## Common DNI problems

Pyrheliometer tracking error.

Soiled instrument reducing reading.

Satellite-derived DNI errors in aerosol-heavy regions.

Monsoon-period dramatic reduction underestimated.

Confusion between DNI and POA direct.

## Best practices

Use Class A pyrheliometers for reference measurements.

Combine ground stations with satellite-derived multi-year averages.

Apply local aerosol corrections in dust-heavy regions.

Document DNI source and methodology in yield reports.

Validate satellite DNI against nearby ground stations.

## Indian market context

NIWE operates limited number of pyrheliometer stations.

Solargis and NSRDB provide commercial Indian DNI data.

Indian CSP plants are limited: Reliance Areva 125 MW Rajasthan, Acme 2.5 MW Bikaner, KVK Energy 100 MW Rajasthan.

Tracker plant adoption is growing across SECI tender projects, with DNI as a yield input.

Bifacial gain modelling for SECI bids increasingly uses DNI-derived ground reflection.

## Standards and certifications

| Standard | Scope |
|---|---|
| ISO 9060 | Pyrheliometer classification |
| IEC 61724-1 | Performance monitoring |
| WMO CIMO Guide | Meteorological measurement |
| NREL DNI methodologies | Satellite-derived references |

## Key takeaways

DNI is the direct beam solar irradiance, critical for CSP, trackers and bifacial yield. Indian DNI ranges from 1,000 in north-east to over 2,500 in Ladakh. The DNI/GHI ratio distinguishes clear-sky from cloudy and dusty conditions. CSP requires DNI above 2,000 kWh/m²/year. Tracker plants maximise DNI capture through sun-following alignment.

## Need DNI-based tracker or bifacial yield modelling?

QBits Energy provides DNI-based yield modelling for tracker and bifacial solar plants across Indian regions.

## Sources

- NIWE Solar Resource Atlas.
- ISO 9060, Pyrheliometer classification.
- IEC 61724-1, Performance monitoring.
- Solargis Solar Resource Database.
- NSRDB National Solar Radiation Database, NREL.
- Meteonorm Global Solar Radiation Database.
- WMO Guide to Meteorological Instruments.
- IEA SolarPACES on CSP plant requirements.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
