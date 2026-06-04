---
term: "State of Health"
title: "SOH (State of Health): Definition & Battery Applications"
description: "SOH measures battery long-term degradation. Full guide to estimation and solar storage."
category: "Batteries"
categorySlug: "batteries"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - state of health battery
  - soh battery
  - battery degradation measurement
  - battery health
  - soh estimation
shortDefinition: "State of Health (SOH) is the percentage of original capacity remaining in a battery, measuring long-term degradation. 100 percent when new, dropping over years to end of life (typically 80 percent). Distinct from SOC (immediate charge level)."
quickFacts:
  industry: "Battery Storage"
  primaryUse: "Long-term degradation tracking"
  commonUsers: "BMS, customers, technicians"
  relevantStandards: "IEC 61960, manufacturer specifications"
  relatedTechnologies: "BMS, LFP, NMC"
relatedTerms:
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "battery-dod", term: "Battery DOD" }
  - { slug: "cycle-life", term: "Cycle Life" }
  - { slug: "calendar-life", term: "Calendar Life" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "bms", term: "BMS" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "thermal-runaway", term: "Thermal Runaway" }
  - { slug: "deep-discharge", term: "Deep Discharge" }
faqs:
  - q: "What is SOH in simple words?"
    a: "How healthy your battery is compared to brand new. 100 percent at start, dropping to ~80 percent at end of life."
  - q: "What does SOH stand for?"
    a: "State of Health."
  - q: "SOH vs SOC?"
    a: "SOC: how much charge is in the battery right now (changes constantly). SOH: long-term health (changes slowly over years)."
  - q: "When is end of life?"
    a: "Typically when SOH drops to 80 percent of original capacity. Some standards use 70 percent threshold."
  - q: "How is SOH measured?"
    a: "BMS estimates from coulomb counting, internal resistance and voltage characteristics. Direct measurement: full charge-discharge cycle measurement."
  - q: "Does SOH drop linearly?"
    a: "Usually not. Slow loss in first 70-80 percent of life, accelerating toward end of life."
  - q: "What affects SOH?"
    a: "Number of cycles, depth of discharge, temperature, charge rate, calendar age, manufacturing quality."
  - q: "Can SOH recover?"
    a: "Slightly through reduced stress. Most loss is permanent."
  - q: "What is the typical SOH after 10 years?"
    a: "LFP: 85-92 percent. NMC: 75-85 percent. Lead acid: 70-80 percent (or end of life)."
  - q: "Does cold storage preserve SOH?"
    a: "Yes, but specific to chemistry. Lithium-ion: cool dry storage at moderate SOC (around 50%) preserves SOH."
  - q: "Is SOH covered in warranty?"
    a: "Battery warranties typically specify minimum SOH at warranty period end (e.g., 70% at 10 years for LFP)."
  - q: "Can I see SOH in the app?"
    a: "Yes for most modern battery systems with smart BMS. Reported as percentage."
  - q: "Does SOH affect usable capacity?"
    a: "Yes directly. Usable capacity = nominal capacity × SOH × DOD."
  - q: "Is SOH accurate?"
    a: "BMS estimates typically 3-5 percent accurate. Direct measurement more accurate but disruptive."
  - q: "Should I replace battery at 80% SOH?"
    a: "Not necessarily. Continued use possible if capacity meets needs. End of life is decision, not requirement."
---

## What is State of Health

State of Health (SOH) is the percentage of original capacity remaining in a battery, measuring long-term degradation accumulated over time and usage. A new battery has SOH of 100 percent. Over years of operation, SOH gradually drops due to chemical and mechanical aging mechanisms. End of life is typically defined as SOH reaching 80 percent of original capacity (some standards use 70 percent threshold).

SOH is distinct from SOC (State of Charge). SOC changes constantly during normal operation, while SOH changes slowly over years. SOH represents the underlying capacity available for use; SOC represents how much of that capacity is currently charged.

For solar storage, SOH tracking is critical for warranty enforcement, replacement planning and lifecycle cost calculation. Modern BMS estimate SOH from coulomb counting, internal resistance measurements and voltage characteristics. Customer-facing apps typically display SOH alongside SOC.

## Why SOH matters

Warranty enforcement. Manufacturer warranties reference SOH thresholds.

Lifecycle planning. Predicts replacement timing.

Usable capacity. Determines actual energy available.

Customer expectations. Honest SOH reporting builds trust.

Diagnostics. Slower SOH decline indicates good operation.

## SOH trajectories

| Chemistry | SOH at 10 years | End of life |
|---|---|---|
| LFP | 85-92% | 15+ years to 80% |
| NMC | 75-85% | 10-15 years to 80% |
| Lead acid (tubular) | 0% (replaced by 5-7 years) | 5-7 years |
| Sodium-ion | 80-90% | Comparable to LFP |
| Vanadium flow | 95+% | 20+ years |

## Technical deep dive

### SOH estimation methods

| Method | Accuracy | Description |
|---|---|---|
| Coulomb counting baseline | ±3-5% | Cumulative discharge vs original capacity |
| Internal resistance | ±5-10% | Resistance increases with aging |
| Open-circuit voltage curve | ±5% | OCV curve shifts with aging |
| Capacity test (direct) | ±1% | Full discharge measurement, disruptive |
| Kalman filter combination | ±2-3% | Combined methods, most accurate |

### Factors affecting SOH

| Factor | Impact |
|---|---|
| Cycle count | Each cycle reduces SOH slightly |
| Depth of discharge | Deeper DOD per cycle = faster SOH decline |
| Temperature | High temperature accelerates aging |
| Charge rate (C-rate) | High C-rate accelerates aging |
| Calendar time | Aging occurs even without cycling |
| Manufacturing variation | Cell quality variation |

### Typical Indian residential LFP SOH trajectory

| Year | SOH | Notes |
|---|---|---|
| 0 (new) | 100% | Commissioning |
| 1 | 99% | Mild break-in |
| 3 | 96% | Steady decline |
| 5 | 93% | |
| 7 | 89% | |
| 10 | 85% | Mid-life |
| 12 | 82% | |
| 15 | 78% | Approaching end of life |

Assumes proper operation within manufacturer's recommended DOD, temperature and C-rate.

### Warranty implications

Typical LFP residential warranty:
- 10 years OR 6,000 cycles
- Minimum SOH 70-80% at warranty end
- Replacement or refund if breach

## Real-world applications

Warranty claim documentation.

Replacement planning.

Lifecycle cost calculation.

Insurance valuation.

Second-life battery sorting.

## Best practices

Operate within manufacturer's DOD and temperature recommendations.

Maintain BMS firmware updates.

Track SOH annually through BMS reports.

Document SOH at warranty milestones.

Plan replacement budget for expected end of life.

## Indian market context

ALMM-listed and IS 16893 certified battery packs include BMS with SOH reporting.

Major Indian residential storage brands (Goodwe, Sungrow, Solis, BYD, Pylon Tech) display SOH in apps.

Warranty enforcement increasingly references SOH measurement.

Second-life market emerging for retired EV batteries with SOH 70-80%.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61960 | Performance of lithium cells |
| IS 16893 | Indian stationary storage |
| IEEE 1188 | VRLA battery maintenance |
| Manufacturer warranty documents | SOH thresholds |

## Key takeaways

SOH (State of Health) measures long-term battery degradation as percentage of original capacity. Distinct from SOC (immediate charge level). Indian LFP residential systems: SOH 85-92% at 10 years, end of life (80% SOH) at 12-15+ years. Modern BMS estimate SOH; warranty references it. Operating within manufacturer's recommendations preserves SOH and extends life.

## Need SOH-aware battery monitoring?

QBits Energy supplies BMS-equipped LFP battery packs with accurate SOH reporting for residential, C&I and microgrid solar storage in India.

## Sources

- IEC 61960, Performance of lithium cells.
- IS 16893, Indian stationary storage.
- IEEE 1188, VRLA maintenance.
- Manufacturer BMS specifications from Pylon Tech, BYD, Goodwe.
- Plett G. L., Battery Management Systems Vol II, Artech House.
- NREL Battery Lifetime Analysis.
- BloombergNEF Battery Storage Outlook.
- IEA Energy Storage Outlook 2024.
- IRENA Battery Storage publications.
