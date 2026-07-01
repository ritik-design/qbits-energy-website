---
term: "DHI"
title: "DHI (Diffuse Horizontal Irradiance): Definition & Solar Applications"
description: "DHI is the diffuse component of solar irradiance. Full guide to measurement and Indian solar applications."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is dhi
  - diffuse horizontal irradiance
  - dhi india
  - sky diffuse solar
shortDefinition: "Diffuse Horizontal Irradiance (DHI) is the solar radiation received from the sky on a horizontal surface, excluding the direct beam from the sun. It is the scattered light that creates daylight even on cloudy days. Indian DHI ranges from 600 to 950 kWh/m²/year."
quickFacts:
  industry: "Solar Resource Assessment"
  primaryUse: "Resource modelling, bifacial yield calculation"
  commonUsers: "Resource assessors, yield modellers"
  relevantStandards: "ISO 9060, IEC 61724"
  relatedTechnologies: "Shaded pyranometer, rotating shadowband, satellite-derived"
relatedTerms:
  - { slug: "ghi", term: "GHI" }
  - { slug: "dni", term: "DNI" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "bifacial-module", term: "Bifacial Module" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "pyranometer", term: "Pyranometer" }
  - { slug: "albedo", term: "Albedo" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "shading-analysis", term: "Shading Analysis" }
  - { slug: "irradiation", term: "Irradiation" }
faqs:
  - q: "What is DHI in simple words?"
    a: "The scattered sky light, not direct sunbeam. The illumination on a cloudy day or in the shadow of a building. Part of the total light that solar panels still capture."
  - q: "What is the unit of DHI?"
    a: "Irradiance in W/m². Irradiation in kWh/m² over time."
  - q: "DHI vs DNI vs GHI?"
    a: "GHI = DNI × cos(zenith) + DHI. GHI is total horizontal. DNI is direct beam. DHI is diffuse sky-scattered."
  - q: "What is the typical Indian DHI?"
    a: "600 to 950 kWh/m²/year. Higher in humid and monsoon regions, lower in dry clear regions."
  - q: "Why does DHI matter?"
    a: "Solar panels collect diffuse light too. Bifacial gain depends on diffuse light reaching the ground and back of the panel."
  - q: "How is DHI measured?"
    a: "Pyranometer with shading disc or band that blocks direct sun. Or computed from GHI minus DNI projected."
  - q: "Does DHI matter for fixed solar PV?"
    a: "Yes. Diffuse contribution is 15 to 30 percent of total POA irradiance for typical Indian sites."
  - q: "Why is DHI higher in monsoon?"
    a: "Clouds scatter direct beam into diffuse. DNI drops, DHI rises, GHI is somewhere between."
  - q: "Does DHI matter for trackers?"
    a: "Less so than DNI. Trackers capture direct beam primarily; diffuse is captured similarly to fixed."
  - q: "What is bifacial diffuse capture?"
    a: "Diffuse light scatters from sky and ground. Bifacial modules pick up both front-side direct and rear-side reflected/scattered diffuse."
  - q: "Is DHI same as scattered radiation?"
    a: "Yes, on a horizontal surface."
  - q: "Where is DHI highest in India?"
    a: "Coastal Kerala, Goa, north-east, and during monsoon across most of India."
  - q: "Is DHI useful for building daylighting?"
    a: "Yes. Building lighting design uses DHI for north-facing windows and overcast sky illumination."
  - q: "What is sky clearness index?"
    a: "GHI / extraterrestrial irradiance. Indicates how clear the atmosphere is. Lower clearness means relatively more DHI."
  - q: "Where can I find Indian DHI data?"
    a: "NIWE Solar Resource Atlas, Solargis, NSRDB, Meteonorm."
author: "Nirav Dhanani"
---

## What is DHI

Diffuse Horizontal Irradiance (DHI) is the solar radiation received on a horizontal surface from all directions of the sky except the direct beam from the sun. It is the scattered light produced by atmospheric scattering of sunlight by air molecules, clouds, aerosols and water vapour.

Measured in W/m² as irradiance and kWh/m² as integrated irradiation, DHI complements the direct beam (DNI) and together with the projected direct beam makes up the total Global Horizontal Irradiance (GHI):

GHI = DNI × cos(θz) + DHI

For Indian solar, DHI ranges from 600 to 950 kWh/m²/year. Humid coastal regions and monsoon periods have proportionally higher DHI. DHI is critical for accurate yield modelling, bifacial gain calculation and building daylighting design.

## Why DHI matters

PV yield modelling. Diffuse light contributes 15 to 30 percent of POA irradiance for fixed tilt arrays.

Bifacial yield. DHI determines sky diffuse contribution to rear-side gain.

Cloudy day generation. Most generation under clouds is from DHI.

Building daylighting. North-facing windows in northern hemisphere rely on DHI.

Resource decomposition. Bankable yield models need DNI and DHI separately, not just GHI.

## DHI measurement

DHI can be measured directly or computed indirectly:

| Method | Description |
|---|---|
| Shaded pyranometer | Pyranometer with shadow ball blocking direct beam |
| Rotating shadowband | Periodically shades pyranometer to compute DHI |
| GHI minus projected DNI | Calculated from independent DNI and GHI measurements |
| Satellite-derived | Estimated from cloud and aerosol products |

## Technical deep dive

### Indian DHI by region (annual, kWh/m²)

| Region | Annual DHI |
|---|---|
| Western Rajasthan, Ladakh (dry, clear) | 600 to 700 |
| Andhra Pradesh, Telangana | 700 to 800 |
| Karnataka, Tamil Nadu | 700 to 850 |
| Maharashtra, MP | 700 to 800 |
| Gujarat (non-Kutch) | 700 to 800 |
| Delhi, Haryana, Punjab | 750 to 850 |
| Uttar Pradesh, Bihar | 750 to 850 |
| West Bengal, Odisha | 800 to 900 |
| Kerala, Goa | 850 to 950 |
| North-east states (humid) | 850 to 950 |

### Diffuse fraction (DHI/GHI)

| Climate type | DHI/GHI ratio |
|---|---|
| Desert clear sky | 0.20 to 0.30 |
| Continental dry | 0.30 to 0.40 |
| Tropical | 0.40 to 0.55 |
| Humid coastal | 0.50 to 0.65 |
| Monsoon (peak) | 0.60 to 0.85 |

### Plane-of-array contribution

For a south-facing tilted module:
POA irradiance = direct beam + diffuse on tilt + ground reflected

The diffuse-on-tilt component uses sky models (isotropic, Hay, Perez):

Diffuse on tilt = DHI × f(tilt, sky model)

For most Indian sites, diffuse contributes 20 to 30 percent of POA on annual basis.

## Real-world applications

Yield modelling for utility solar plants.

Bifacial yield projection.

Building integrated PV design.

Architectural daylighting (BIPV facades).

Cloudy-day generation estimation.

## Common DHI problems

Soiled pyranometer underreading DHI.

Shadow ball misalignment.

Satellite-derived DHI errors under heavy aerosols.

Decomposition errors between GHI and DNI.

Sky model assumptions affecting POA diffuse calculation.

## Best practices

Use shadow-ball pyranometer for direct DHI measurement when available.

Apply validated decomposition models (DIRINT, DISC) for satellite data.

Document sky model used in POA calculation.

Compare DHI estimates across data sources for validation.

Apply local aerosol corrections in dust-heavy regions.

## Indian market context

NIWE limited DHI ground stations; most plants use derived or satellite-based DHI.

Solargis and NSRDB provide Indian DHI from satellite-derived methods.

Bifacial yield modelling for SECI tender bids uses DHI as input for rear-side calculation.

PM Surya Ghar residential systems do not require DHI-specific data; GHI is sufficient.

## Standards and certifications

| Standard | Scope |
|---|---|
| ISO 9060 | Pyranometer classification |
| IEC 61724-1 | Performance monitoring |
| WMO CIMO Guide | Meteorological measurement |

## Key takeaways

DHI is the diffuse sky-scattered solar irradiance, complementing DNI to make up GHI. Indian DHI ranges from 600 in dry regions to 950 in humid and monsoon-affected regions. DHI contributes 20 to 30 percent of POA irradiance for tilted PV. Bifacial yield, cloudy-day generation and daylighting design all depend on accurate DHI. Modern bankable yield modelling requires separate GHI, DNI and DHI inputs.

## Need DHI-aware yield modelling?

QBits Energy provides solar resource assessment using validated GHI, DNI and DHI data for bankable yield projections across Indian projects.

## Sources

- NIWE Solar Resource Atlas.
- ISO 9060, Pyranometer classification.
- IEC 61724-1, Performance monitoring.
- Solargis Solar Resource Database.
- NSRDB National Solar Radiation Database, NREL.
- Meteonorm Global Solar Radiation Database.
- WMO Guide to Meteorological Instruments.
- Perez R., et al., Modeling daylight availability and irradiance components from direct and global irradiance, Solar Energy, 1990.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
