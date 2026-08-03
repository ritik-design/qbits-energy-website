---
term: "Peak Sun Hours"
title: "Peak Sun Hours (PSH): Definition & Solar Calculation"
description: "Peak Sun Hours is a simple measure of daily solar resource. Full guide and Indian state-wise PSH benchmarks."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is peak sun hours
  - psh
  - peak sun hours india
  - solar hours calculation
  - sun hours per day
shortDefinition: "Peak Sun Hours (PSH) is the number of hours per day during which solar irradiance averages 1,000 W/m² (1 kW/m²). It is a simplified measure of daily solar resource. Indian PSH ranges from 4.0 to 6.5 hours/day depending on location and season."
quickFacts:
  industry: "Solar Resource Assessment"
  primaryUse: "Quick solar resource estimation"
  commonUsers: "Designers, installers, customers"
  relevantStandards: "Industry convention; not a formal standard"
  relatedTechnologies: "Solar yield calculation, sizing"
relatedTerms:
  - { slug: "ghi", term: "GHI" }
  - { slug: "dni", term: "DNI" }
  - { slug: "dhi", term: "DHI" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "irradiation", term: "Irradiation" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "site-survey", term: "Site Survey" }
faqs:
  - q: "What is PSH in simple words?"
    a: "How many hours of bright peak sun your site gets per day. If your location averages 5 PSH, it is like getting 5 hours of full midday sun every day."
  - q: "What is the typical Indian PSH?"
    a: "4.0 to 6.5 hours/day annual average. Higher in Rajasthan and Gujarat (5.5 to 6.0), lower in north-east (4.0 to 4.5)."
  - q: "How is PSH calculated?"
    a: "PSH (hours/day) = daily GHI (kWh/m²) / 1 kW/m². If GHI is 5.5 kWh/m²/day, PSH = 5.5 hours."
  - q: "PSH vs sunshine hours?"
    a: "Sunshine hours include all daylight with sun above horizon. PSH counts only the equivalent peak hours at 1 kW/m². Different concepts."
  - q: "How does PSH relate to solar yield?"
    a: "Daily yield (kWh) = PSH × Capacity (kW) × Performance Ratio. A 5 kW system at 5 PSH × 0.8 PR generates 20 kWh/day."
  - q: "Does PSH change with season?"
    a: "Yes. Indian PSH peaks in April-May (6 to 7), drops during monsoon (3.5 to 4.5)."
  - q: "Does location latitude affect PSH?"
    a: "Yes. Lower latitudes get more sun on average. Indian PSH varies more by climate than latitude."
  - q: "Is PSH a formal standard?"
    a: "Industry convention. Not a formal scientific term. Used widely in solar sizing literature."
  - q: "What is the highest PSH in India?"
    a: "Western Rajasthan and Ladakh: 6.0 to 6.5 hours/day annual average. Peak summer days exceed 8 hours."
  - q: "Does PSH count cloudy hours?"
    a: "Indirectly. Cloudy hours contribute less than 1 kW/m². They are scaled down before counting toward PSH."
  - q: "How is PSH used in off-grid design?"
    a: "PV size (kW) = (Daily load kWh) / (PSH × Performance Ratio × battery efficiency)."
  - q: "Does tilt affect PSH calculation?"
    a: "If using POA irradiance instead of GHI, yes. PSH at optimal tilt is higher than GHI-based PSH."
  - q: "What is PSH for Delhi?"
    a: "Approximately 4.7 hours/day annual average."
  - q: "What is PSH for Mumbai?"
    a: "Approximately 5.0 hours/day annual average. Monsoon months drop to 3.5."
  - q: "Where do I find Indian PSH data?"
    a: "NIWE Solar Atlas, Solargis, or computed from GHI in NSRDB and Meteonorm."
author: "Nirav Dhanani"
---

## What are Peak Sun Hours

Peak Sun Hours (PSH) is a simplified measure of solar resource expressed as the number of hours per day during which solar irradiance averages 1,000 W/m² (1 kW/m²). It is the time integral of daily [GHI](/glossary/ghi/) normalised by [STC](/glossary/stc/) reference irradiance.

> **TL;DR**
> - PSH is a simplified single-number measure of daily solar resource, equal to daily GHI divided by 1 kW/m².
> - Indian PSH ranges from 4.0 to 6.5 hours/day annual average — highest in western Rajasthan and Ladakh (6.0-6.5), lowest in the north-east (4.0-4.5).
> - Daily yield (kWh) = capacity (kW) × PSH × Performance Ratio, giving a quick sizing shortcut for residential and off-grid systems.
> - PSH swings seasonally: Delhi peaks around 6.5-6.8 hours/day in April-May and drops to 3.8-4.0 during monsoon and winter months.
> - It is numerically equal to daily GHI in kWh/m²/day, but ignores POA tilt gains, temperature and soiling losses that PR captures separately.
> - Utility-scale developers use full hourly GHI/DNI/DHI simulation rather than PSH alone for bankable yield estimates.

PSH (hours/day) = Daily GHI (kWh/m²/day) / 1 kW/m²

For Indian sites, PSH ranges from 4.0 to 6.5 hours/day on annual average. PSH is widely used in residential and off-grid sizing because it gives an intuitive single number for daily solar resource. See [Solar Irradiance Data India, State-Wise Peak Sun Hours](/blog/solar-irradiance-data-india-statewise/) for the full state and city breakdown behind the regional table below.

## Why PSH matters

Simplified sizing. PSH × capacity × PR = daily energy. Direct sizing formula.

Customer communication. Customers grasp "5 hours of sun per day" easily.

Off-grid design. PSH drives PV-to-load sizing for [off-grid inverter](/glossary/off-grid-inverter/) systems.

Yield estimation. Quick annual [solar yield](/glossary/solar-yield/): capacity × PSH × 365 × [PR](/glossary/pr/).

Regional comparison. Single number to compare solar potential across locations.

## How PSH is calculated

PSH = GHI / G_STC

Where G_STC = 1 kW/m² = 1000 W/m².

For daily PSH, integrate hourly GHI over the day and divide by 1 kW/m².

## Indian PSH by region (annual average)

| Region | PSH (hours/day) |
|---|---|
| Western Rajasthan, Ladakh | 6.0 to 6.5 |
| Andhra Pradesh, Telangana | 5.5 to 5.7 |
| Gujarat (non-Kutch) | 5.5 to 6.0 |
| Karnataka, Tamil Nadu | 5.0 to 5.5 |
| Maharashtra, MP | 5.0 to 5.5 |
| Delhi, Haryana, Punjab | 4.7 to 5.0 |
| Mumbai | 5.0 |
| Bengaluru | 5.3 |
| Chennai | 5.3 |
| Kolkata | 4.5 |
| Hyderabad | 5.5 |
| Uttar Pradesh, Bihar | 4.5 to 4.8 |
| West Bengal, Odisha | 4.3 to 4.7 |
| Kerala, Goa | 4.5 to 5.0 |
| North-east states | 4.0 to 4.5 |

## Technical deep dive

### PSH vs GHI

| Metric | Definition | Use |
|---|---|---|
| GHI (kWh/m²) | Total irradiation | Scientific resource measure |
| PSH (hours) | Equivalent hours at 1 kW/m² | Simple sizing |

Numerically equal in daily averages: 5.5 kWh/m²/day = 5.5 PSH.

### Yield from PSH

Daily yield (kWh) = Capacity (kW) × PSH × PR

For a 5 kW system at 5.0 PSH, PR 0.80:
Daily yield = 5 × 5.0 × 0.80 = 20 kWh/day

Annual yield = 20 × 365 = 7,300 kWh

### Off-grid sizing using PSH

PV size = (Daily load × autonomy factor) / (PSH × PR × battery efficiency)

For 5 kWh daily load, 1.3 oversize, 5 PSH, 0.85 PR, 0.92 battery:
PV size = (5 × 1.3) / (5 × 0.85 × 0.92) = 6.5 / 3.91 = 1.66 kWp

See [Off-Grid Solar Battery Bank Sizing, India Complete Guide](/blog/off-grid-battery-bank-sizing-india/) for a full worked methodology covering autonomy days and depth of discharge.

### Seasonal variation (Delhi example)

| Month | Approximate PSH |
|---|---|
| January | 4.0 |
| February | 4.8 |
| March | 5.8 |
| April | 6.5 |
| May | 6.8 |
| June | 5.5 |
| July | 4.5 |
| August | 4.0 |
| September | 4.8 |
| October | 5.2 |
| November | 4.3 |
| December | 3.8 |
| Average | 4.85 |

## Real-world applications

Residential and small commercial solar sizing.

Off-grid system design.

Solar pumping capacity calculation, for example sizing [solar inverters for water pumps](/blog/solar-inverter-for-water-pump/) against site PSH.

Customer-facing [quick-estimate tools](https://heavengreenenergy.com/solar-calculator/), such as PSH-driven solar savings calculators.

State-wise solar potential comparison.

## Limitations of PSH

Ignores temperature, soiling, shading separately (PR captures these).

GHI-based PSH not optimal for tilted arrays without [plane of array](/glossary/plane-of-array/) correction.

Does not capture intra-day variability.

Less precise than full hourly simulation.

## Best practices

Use multi-year average PSH for sizing.

Apply realistic PR for the application.

For tilted arrays, use POA-based PSH.

Validate against ground irradiance data gathered during [site survey](/glossary/site-survey/) when available.

Communicate PSH alongside expected yield.

## Indian market context

NIWE Solar Atlas provides Indian PSH and GHI data.

PM Surya Ghar customer education materials use PSH to explain expected generation.

Residential rooftop sizing typically uses 4.5 to 5.5 PSH depending on city.

Utility solar developers use full hourly simulation with GHI, [DNI](/glossary/dni/) and [DHI](/glossary/dhi/) rather than PSH alone, typically inside bankable [solar simulation software](https://surgepv.com/solar-simulation-software/).

Off-grid solar under PM-KUSUM and rural electrification programmes use PSH-based sizing.

## Standards and certifications

| Standard | Scope |
|---|---|
| Industry convention | PSH definition |
| IEC 61724 | Performance monitoring (uses irradiance) |
| WMO CIMO Guide | Underlying meteorology |

## Key takeaways

PSH is a simplified single-number measure of daily solar resource, equal to daily GHI divided by 1 kW/m². Indian PSH ranges from 4.0 to 6.5 hours/day. PSH provides intuitive sizing for residential and off-grid systems through the relationship: daily yield = capacity × PSH × PR. Multi-year averages and realistic PR assumptions are essential for accurate use.

## Need PSH-based solar sizing?

QBits Energy designs solar systems using site-specific PSH for residential and small commercial customers across Indian states.

## Further reading

For how Peak Sun Hours plays out in real projects, these guides go deeper:

- [Solar Irradiance Data India, Peak Sun Hours](/blog/solar-irradiance-data-india-statewise/)
- [How Much Electricity Does Solar Generate in India?](/blog/how-much-electricity-solar-generates-india/)

## Sources

- NIWE Solar Resource Atlas.
- Solargis Solar Resource Database.
- NSRDB National Solar Radiation Database, NREL.
- Meteonorm Global Solar Radiation Database.
- IEC 61724, Performance monitoring.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
- IEA PVPS Trends in Photovoltaic Applications 2024.
- MNRE Solar PV Design Guidelines.
- Mertens K., Photovoltaics: Fundamentals, Technology, and Practice, Wiley.
