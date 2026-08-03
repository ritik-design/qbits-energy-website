---
term: "Clipping Loss"
title: "Clipping Loss: Definition, Causes & Solar Inverter Sizing"
description: "Clipping loss is energy lost to inverter peak capping. Full guide to DC oversize trade-offs."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - clipping loss
  - inverter clipping
  - dc oversize clipping
  - power clipping solar
  - inverter saturation
shortDefinition: "Clipping loss is the solar energy lost when the DC array would produce more power than the inverter's AC rating. The inverter caps output at rated power, leaving excess DC unused. Typical 1-8 percent of annual generation in DC-oversized plants. Trade-off accepted for higher annual yield from shoulder hours."
quickFacts:
  industry: "Solar Performance"
  primaryUse: "Yield loss factor in DC-oversized plants"
  commonUsers: "Designers, EPCs, performance modellers"
  relevantStandards: "IEC 61724"
  relatedTechnologies: "Inverter, DC oversizing, MPPT"
relatedTerms:
  - { slug: "dc-oversizing", term: "DC Oversizing" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "bifacial-module", term: "Bifacial Module" }
  - { slug: "single-axis-tracker", term: "Single-Axis Tracker" }
  - { slug: "stc", term: "STC" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "lcoe", term: "LCOE" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
faqs:
  - q: "What is clipping loss in simple words?"
    a: "When solar panels produce more electricity than the inverter can handle, the inverter cuts off at its limit. The excess is wasted. This is clipping loss."
  - q: "Why does clipping happen?"
    a: "DC oversizing intentionally connects more PV than inverter capacity. During peak noon, DC exceeds inverter rating; inverter clips."
  - q: "Is clipping bad?"
    a: "Counterintuitively no. DC oversizing trades a small clipping loss for larger gains in morning/evening shoulder hours. Net annual yield is higher."
  - q: "What is typical Indian clipping loss?"
    a: "1-8 percent depending on DC/AC ratio. Higher ratio (1.30+) gives 4-8 percent; lower (1.15-1.20) gives 1-3 percent."
  - q: "Does clipping damage inverter?"
    a: "No. Inverters are designed for it. They operate at rated power during clipping events."
  - q: "How is clipping calculated?"
    a: "Through hourly yield simulation. PVsyst, SAM and similar tools model clipping as part of DC oversize analysis."
  - q: "Does bifacial increase clipping?"
    a: "Yes. Bifacial gain pushes more DC into the inverter. Without inverter oversize, bifacial gain may be partly lost to clipping."
  - q: "Do trackers cause more clipping?"
    a: "Yes. Tracker DC output stays higher across the day, increasing clipping events."
  - q: "Is clipping in PR?"
    a: "PR captures total losses including clipping. A clipping-heavy plant has lower PR but may have higher absolute yield."
  - q: "What is the optimum DC/AC ratio?"
    a: "Indian: 1.20-1.35 typical. Higher with bifacial and trackers. Higher with cloudy climates."
  - q: "When does clipping happen?"
    a: "Solar noon on clear days. Brief on hazy or cloudy days. Some days no clipping at all."
  - q: "Can clipping be reduced?"
    a: "Increase inverter size. Reduce DC oversize. Curtail array. Each trade-off reduces yield gain elsewhere."
  - q: "Is clipping seasonal?"
    a: "Yes. More clipping in summer (high noon irradiance). Less in monsoon."
  - q: "Does clipping affect MPPT?"
    a: "During clipping, MPPT operates at limit boundary, not true MPP. Brief inefficiency, included in yield modelling."
  - q: "Is clipping covered in PPA?"
    a: "PPA expected generation accounts for clipping. Excessive clipping beyond design may indicate other issues."
author: "Keyur Rakholiya"
---

## What is clipping loss

Clipping loss is the solar energy lost when the DC array would generate more power than the inverter's rated AC output capability. During peak noon irradiance in a [DC-oversized](/glossary/dc-oversizing/) plant, the array attempts to produce more than the inverter can convert. The inverter caps its output at rated power, leaving the excess DC unused.

For example, a 1.3 DC/AC ratio plant has 1.3 MWp of DC connected to a 1 MW AC [inverter](/glossary/solar-inverter/). At peak noon, the array may produce 1.2 MW DC after losses. The inverter caps at 1 MW AC. The remaining 0.2 MW is clipped, not generating revenue.

The economic logic of accepting clipping: a slightly smaller inverter costs significantly less than a perfectly-matched inverter, and the lost peak energy is more than offset by gains in morning and evening shoulder hours when the inverter operates at rated power for more total hours. Indian DC/AC ratios of 1.20-1.35 are standard, balancing clipping against [capex](/glossary/capex/) and [yield](/glossary/solar-yield/) optimisation.

> **TL;DR**
> - Clipping loss is the energy lost when a DC-oversized solar array would produce more power than the inverter's rated AC capacity.
> - Indian DC-oversized plants typically lose 1 to 8 percent of annual generation to clipping, depending on the DC/AC ratio.
> - A DC/AC ratio of 1.20 to 1.35 is standard in India, trading a small clipping loss for larger gains in morning and evening shoulder hours.
> - Bifacial modules and single-axis trackers push the optimum DC/AC ratio higher, toward 1.35 to 1.45.
> - Clipping is factored into Performance Ratio and PPA generation models, and is a normal, economically optimal design choice rather than a defect.

## Why clipping loss matters

[LCOE](/glossary/lcoe/) optimisation. Right DC/AC ratio minimises ₹/kWh.

Plant economics. Accepted small loss for larger gain elsewhere.

[PR](/glossary/pr/) impact. Clipping reduces PR but improves [CUF](/glossary/cuf/).

[PPA](/glossary/ppa/) design. Expected clipping built into generation models.

Inverter sizing decisions. [The clipping trade-off](/blog/inverter-clipping-explained/) must be analysed per project.

## Where clipping happens

| Conditions | Clipping likelihood |
|---|---|
| Clear noon at solar elevation peak | High |
| Cloudy days | Low |
| Morning and evening | None |
| Hazy days | Moderate |
| Summer noon (high irradiance) | High |
| Monsoon | Rare |

## Technical deep dive

### Clipping vs DC/AC ratio

| DC/AC | Annual clipping loss | Yield gain over 1.0 |
|---|---|---|
| 1.00 | 0% | 0% |
| 1.10 | 0.3% | 8.7% |
| 1.20 | 1.5% | 14.5% |
| 1.25 | 2.5% | 17.5% |
| 1.30 | 4% | 19.5% |
| 1.35 | 6% | 21% |
| 1.40 | 8% | 22% |
| 1.45 | 11% | 22.5% |
| 1.50 | 13% | 22% |

Sweet spot around 1.30 for monofacial fixed-tilt at Indian conditions.

### Effect of technology

| Technology | Optimum DC/AC |
|---|---|
| Monofacial fixed | 1.20-1.25 |
| Bifacial fixed | 1.25-1.30 |
| Monofacial tracker | 1.30-1.35 |
| Bifacial tracker | 1.35-1.45 |

### Seasonal variation

| Month | Approximate clipping share |
|---|---|
| March-May (peak summer) | 50% of annual clipping |
| September-November (clear winter) | 25% |
| June-August (monsoon) | 5% |
| December-February (winter) | 20% |

### Diagnosis through monitoring

| Indicator | Diagnosis |
|---|---|
| Flat output at inverter rated for hours | Clipping (expected) |
| Inverter output at less than rated when other plants generate more | Other issue, not clipping |
| Clipping vs. expected | Compare hourly logs with design |

## Real-world applications

Utility solar plant design.

[C&I rooftop sizing](/c-i-solution/).

PPA generation modelling.

Performance ratio analysis.

## Best practices

Use [PVsyst-based yield simulation](https://surgepv.com/solar-simulation-software/) or SAM to optimise DC/AC ratio.

Accept clipping below 5 percent for most Indian plants.

Monitor actual clipping against design.

Reconsider inverter sizing if clipping consistently exceeds 8 percent.

Document clipping assumption in financial models.

## Comparison: clipping vs no clipping

| Aspect | Plant at 1.0 DC/AC | Plant at 1.3 DC/AC |
|---|---|---|
| Inverter cost per kW | Highest | Lower |
| Total capex | Highest | Lower |
| Annual yield | Baseline | +14-18% |
| Annual clipping | 0% | 4% |
| Net annual yield | Baseline | +10-14% |
| Sweet spot? | No | Yes |

## Indian market context

SECI tender bid documents include DC/AC ratio assumptions.

CERC Tariff Regulations reference clipping in capex methodology.

Major Indian utility plants run 1.25-1.40 DC/AC ratios.

[Bifacial](/glossary/bifacial-module/) tracker plants push toward 1.35-1.45.

PVsyst-based optimisation is standard for utility design.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61724 | Performance monitoring |
| Manufacturer inverter datasheets | Maximum DC/AC ratio |
| MNRE design guidelines | Recommendations |

## Key takeaways

Clipping loss is the energy lost when DC array generation exceeds inverter AC rating. Counterintuitively, accepting moderate clipping (4-6 percent) is economically optimal in DC-oversized plants because it enables higher annual yield from shoulder hours. Indian DC/AC ratios of 1.20-1.35 balance clipping against capex and yield. Bifacial and tracker plants push toward 1.35-1.45. PVsyst-based optimisation determines the optimum ratio.

## Need optimised DC/AC sizing for your solar plant?

QBits Energy provides PVsyst-based DC/AC optimisation and clipping analysis for residential, C&I and utility solar projects across Indian conditions.

## Further reading

For how Clipping Loss plays out in real projects, these guides go deeper:

- [Inverter Clipping Explained: DC Oversizing FAQs](/blog/inverter-clipping-explained/)
- [DC Oversizing in Solar: FAQ Guide for Maximum ROI](/blog/dc-oversizing-in-solar/)
- [Solar Inverter Derating in Indian Summer, Explained](/blog/solar-inverter-summer-derating-india/)
- [How Does a Solar Power System Work in India?](/blog/how-solar-power-system-works-india/)

## Sources

- IEC 61724, Performance monitoring.
- IEC 62548, PV array design.
- PVsyst software documentation.
- NREL System Advisor Model (SAM).
- IRENA Renewable Power Generation Costs in 2024.
- Manufacturer inverter datasheets.
- CERC Tariff Regulations 2024.
- IEA PVPS Trends 2024.
- SECI Tender Documents.
