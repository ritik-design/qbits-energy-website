---
term: "Solar Yield"
title: "Solar Yield: Definition, Calculation & Indian Yield Benchmarks"
description: "Solar yield is the annual energy generated per kW of installed solar capacity. Full guide to calculation and Indian benchmarks."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is solar yield
  - specific yield solar
  - solar yield india
  - kwh per kwp
  - solar yield calculation
shortDefinition: "Solar yield, or specific yield, is the annual energy generated per kilowatt of installed solar capacity, expressed in kWh per kWp per year. Indian solar yield typically ranges from 1,200 to 1,900 kWh/kWp depending on location, technology and plant quality."
quickFacts:
  industry: "Solar Performance"
  primaryUse: "Annual energy benchmark per installed capacity"
  commonUsers: "Developers, installers, customers, financiers"
  relevantStandards: "IEC 61724, MNRE benchmarking"
  relatedTechnologies: "Yield modelling, irradiance data, PV plant performance"
relatedTerms:
  - { slug: "cuf", term: "CUF" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "lcoe", term: "LCOE" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "capex", term: "CAPEX" }
  - { slug: "payback-period", term: "Payback Period" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "bifacial-module", term: "Bifacial Module" }
  - { slug: "shading-loss", term: "Shading Loss" }
  - { slug: "soiling", term: "Soiling" }
faqs:
  - q: "What is solar yield in simple words?"
    a: "How many units of electricity each kilowatt of installed solar generates over a year. A 5 kW system generating 7,500 kWh per year has a yield of 1,500 kWh per kWp."
  - q: "What is the formula for specific yield?"
    a: "Specific yield (kWh/kWp/year) = Annual energy (kWh) / Plant capacity (kWp)."
  - q: "What is a good solar yield in India?"
    a: "1,500 to 1,800 kWh/kWp for utility scale, 1,300 to 1,650 for C&I rooftop, 1,250 to 1,550 for residential rooftop."
  - q: "Why does solar yield vary?"
    a: "Sun availability, panel orientation, shading, soiling, temperature, equipment efficiency and plant design all affect yield."
  - q: "Is solar yield same as CUF?"
    a: "Related but different. Yield is kWh per kWp. CUF is the percentage of nameplate. CUF = yield / 8,760 × 100."
  - q: "Which Indian states have highest solar yield?"
    a: "Rajasthan, Gujarat, Telangana, Andhra Pradesh and southern Karnataka top the charts. Western India and the Deccan plateau have the best solar resource."
  - q: "What is P50 yield?"
    a: "The median expected annual yield. 50 percent chance of exceeding, 50 percent of underperforming. The baseline figure for planning."
  - q: "What is P90 yield?"
    a: "The 90 percent confidence-level yield. The conservative figure used by lenders. Typically 90 to 95 percent of P50."
  - q: "How does bifacial affect yield?"
    a: "Bifacial gain adds 5 to 25 percent to annual yield depending on ground albedo and clearance."
  - q: "How does soiling affect yield?"
    a: "Indian dust can cause 5 to 25 percent annual yield loss without regular cleaning. Monthly cleaning recovers most."
  - q: "Does yield drop over time?"
    a: "Yes, due to module degradation. Modern modules lose 0.3 to 0.55 percent per year. 25-year average yield is roughly 8 to 12 percent below year 1."
  - q: "How is yield used in PPAs?"
    a: "PPA expected generation is set based on yield assumptions. Underperformance triggers contract reviews."
  - q: "What is the world average solar yield?"
    a: "Globally 1,000 to 1,600 kWh/kWp. India sits above the global average due to high irradiance."
  - q: "Is yield independent of plant capacity?"
    a: "Specific yield is normalised by capacity. A 1 kW residential system and a 100 MW utility plant in similar conditions have comparable yield figures."
  - q: "What is the typical yield for PM Surya Ghar systems?"
    a: "Residential PM Surya Ghar systems typically yield 1,250 to 1,550 kWh/kWp in most Indian states, depending on roof orientation and cleaning."
author: "Keyur Rakholiya"
---

## What is solar yield

Solar yield, also called specific yield or normalised yield, is the annual energy generated per kilowatt of installed solar capacity, expressed in kWh per kWp per year. It is the practical performance benchmark for solar installations and the basis for PPA pricing, payback calculations and project finance.

Solar yield captures everything that affects annual generation: irradiance, technology, orientation, [temperature coefficient](/glossary/temperature-coefficient/) losses, shading, [soiling](/glossary/soiling/), equipment efficiency and operational quality. Two plants with the same nameplate but in different locations or with different design have different yields.

For Indian solar, yield ranges from 1,200 kWh/kWp in the north-eastern states to 1,900 kWh/kWp in Rajasthan and Gujarat for utility-scale bifacial tracker plants. Residential rooftop yields are typically 100 to 200 kWh/kWp lower due to suboptimal orientation and shading, a gap explored in detail in [Solar Yield in India, kWh-per-kW Benchmarks by State](/blog/solar-yield-india/).

> **TL;DR**
> - Solar yield (specific yield) is annual energy generated per kW of installed capacity, in kWh/kWp/year, and is the basis for PPA pricing and payback calculations.
> - Indian utility plants achieve 1,500 to 1,900 kWh/kWp/year; C&I rooftop runs 1,300 to 1,650; residential rooftop 1,250 to 1,550.
> - Yield = Peak Sun Hours x 365 x Performance Ratio, linking three of the most important Indian solar performance metrics.
> - Rajasthan and Gujarat post the highest yields nationally; the north-east and eastern states post the lowest.
> - Single-axis trackers add 15 to 35 percent yield over fixed-tilt; bifacial modules add another 5 to 25 percent depending on albedo and clearance.
> - Modules degrade 0.3 to 0.55 percent per year, so 25-year average yield runs about 8 to 12 percent below year-1 output.

## Solar yield explained simply

Take a 1 kW solar panel and let it run for a year. The total electricity it generates is its annual yield, in kilowatt-hours. In India, a typical 1 kW residential rooftop panel generates 1,300 to 1,500 kWh in a year. A utility-grade panel in Rajasthan can do 1,800 kWh.

Yield is the practical number you use to estimate how much electricity your solar system will generate.

## Why solar yield matters

[PPA](/glossary/ppa/) pricing. The expected yield underwrites the revenue calculation.

Payback. Bill saving = yield × tariff, calculable with a [solar savings calculator](https://heavengreenenergy.com/solar-calculator/). Higher yield, faster payback.

Project finance. Lenders model annual debt service against [P50/P90](/glossary/p50-p90/) yield estimates.

Operations. Annual yield against expected reveals plant issues.

Customer expectations. Marketing materials and sales pitches quote expected yield.

[PR](/glossary/pr/) and [CUF](/glossary/cuf/) derivation. Yield is the bridge between the two.

## How specific yield is calculated

Specific yield (kWh/kWp/year) = Annual energy (kWh) / Capacity (kWp)

Example: A 1 MWp plant generates 1,650 MWh in a year.
Specific yield = 1,650,000 / 1,000 = 1,650 kWh/kWp/year

Alternative formulation:
Specific yield = [Peak Sun Hours](/glossary/peak-sun-hours/) × 365 × PR

For PSH = 5.5, PR = 0.80:
Yield = 5.5 × 365 × 0.80 = 1,606 kWh/kWp/year

## Technical deep dive

### Indian yield by region (utility fixed-tilt mono PERC)

| Region | Approximate yield (kWh/kWp/yr) |
|---|---|
| Rajasthan, Gujarat | 1,650 to 1,800 |
| Andhra Pradesh, Telangana | 1,600 to 1,750 |
| Karnataka, Tamil Nadu | 1,550 to 1,700 |
| Maharashtra | 1,500 to 1,650 |
| Madhya Pradesh, Chhattisgarh | 1,500 to 1,650 |
| Himachal Pradesh, Uttarakhand | 1,400 to 1,550 |
| Bihar, Jharkhand | 1,300 to 1,500 |
| North-east | 1,200 to 1,400 |
| West Bengal, Odisha | 1,250 to 1,450 |

### Yield by technology

| Technology | Yield uplift over baseline |
|---|---|
| Fixed-tilt monofacial PERC | Baseline |
| Fixed-tilt bifacial PERC | +5 to 18% |
| Fixed-tilt bifacial TOPCon | +8 to 20% |
| Single-axis tracker monofacial | +15 to 25% |
| Single-axis tracker bifacial | +25 to 35% |

### P50 vs P90 yield

| Confidence | Description |
|---|---|
| P50 | Median expected yield. 50% probability of meeting or exceeding. |
| P75 | 75% probability. |
| P90 | 90% probability. Used by lenders for debt sizing. |
| P95 | Very conservative. Equity floor. |

Typical P90 is 90 to 95 percent of P50.

### Degradation impact

Year 1 yield × (1 − degradation_rate)^(year − 1) = Year n yield.

For 0.5 percent annual degradation:
- Year 1: 1,650 kWh/kWp
- Year 10: 1,577 kWh/kWp
- Year 25: 1,466 kWh/kWp

25-year average yield: 1,556 kWh/kWp (94 percent of year 1).

## Real-world applications

PPA tariff bidding.

C&I solar payback analysis.

Residential PM Surya Ghar bill saving estimates.

Lender financial modelling, often run through tools such as SurgePV's [generation and financial modelling tool](https://surgepv.com/generation-financial-tool/).

State SERC tariff benchmarking.

CUF and PR derivation.

## Advantages

Intuitive metric (kWh, the same unit as the bill).

Comparable across plant sizes.

Direct input to financial models.

Used in all PPA contracts.

## Limitations

Location-dependent, not directly a quality metric.

Year-to-year variation of 3 to 6 percent due to weather.

Degradation makes long-term averages important.

Conflates location and technology in one number.

## Common problems

Underperformance against design yield. Most common causes: soiling, shading, equipment issues.

Year-to-year weather variation interpreted as plant degradation.

Yield gaps between rooftop and utility plants surprising customers.

P50 vs P90 confusion in financial models.

Yield reduction over years overlooked in lifecycle estimates.

## Best practices

Use P50 yield for planning, P90 for lender models.

Source irradiance data from validated sources (NSRDB, NIWE, Solargis), cross-checked against [state-wise irradiance benchmarks](/blog/solar-irradiance-data-india-statewise/).

Apply realistic loss assumptions in yield modelling, using [solar design calculators](https://surgepv.com/tools/) built for this purpose.

Monitor monthly yield against expected.

Plan annual cleaning to maintain yield, especially ahead of [monsoon season](/blog/monsoon-solar-prep/).

Track yield trend over years for degradation assessment.

Set customer expectations using yield, not nameplate alone.

## Comparison: yield by project type (Indian average)

| Project type | Year 1 yield |
|---|---|
| Utility tracker bifacial Rajasthan | 1,900 to 2,000 kWh/kWp |
| Utility fixed-tilt Rajasthan | 1,700 to 1,800 kWh/kWp |
| Utility fixed-tilt Maharashtra | 1,550 to 1,650 kWh/kWp |
| C&I rooftop Gujarat | 1,500 to 1,650 kWh/kWp |
| Residential rooftop Delhi | 1,350 to 1,500 kWh/kWp |
| Floating solar Telangana | 1,600 to 1,750 kWh/kWp |

## Indian market context

SECI utility tender bids assume yield based on location and technology, currently 1,650 to 1,900 kWh/kWp for new bids.

PM Surya Ghar performance expectations target 1,200 to 1,500 kWh/kWp for residential systems.

State SERC tariff orders reference deemed yield (CUF × 8,760) for distributed solar.

NIWE Solar Atlas and Solargis are the primary irradiance data sources for Indian yield modelling.

CEA publishes monthly state-wise generation data for yield benchmarking.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61724-3 | Energy evaluation method |
| MNRE benchmarking | Yield expectations for tenders |
| NIWE Solar Atlas | Indian irradiance reference |
| NSRDB / Solargis | International irradiance databases |

## Common mistakes

Using global average yield assumptions for Indian projects.

Ignoring degradation in 25-year yield averages.

Confusing P50 and P90 in financial models.

Treating year-to-year variation as plant deterioration.

Skipping site-specific irradiance data, using regional averages.

Overestimating bifacial gain.

Ignoring soiling losses in yield projections.

## Key takeaways

Solar yield is the practical annual energy generated per kilowatt of installed solar. Indian utility plants achieve 1,500 to 1,900 kWh/kWp depending on location and technology. Residential rooftop typically lands 100 to 300 kWh/kWp lower. P50 yield for planning, P90 for lender models. Site-specific irradiance data, realistic loss assumptions and degradation modelling determine accurate projections.

## Need bankable solar yield projections?

QBits Energy provides site-specific P50 and P90 yield projections for Indian residential, C&I and utility solar projects.

## Sources

- IEC 61724-3:2016, Photovoltaic system performance: Energy evaluation method.
- NIWE Solar Resource Assessment Atlas.
- Solargis Solar Resource Data.
- NSRDB National Solar Radiation Database, NREL.
- MNRE Benchmarking Guidelines.
- CEA Monthly Renewable Energy Reports.
- IEA PVPS Trends in Photovoltaic Applications 2024.
- IRENA Renewable Power Generation Costs in 2024.
- NREL System Advisor Model (SAM) documentation.
