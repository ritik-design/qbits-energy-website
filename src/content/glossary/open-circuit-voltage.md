---
term: "Open Circuit Voltage"
title: "Open Circuit Voltage (Voc): Definition & Solar String Sizing"
description: "Voc is the maximum voltage of a solar module. Full guide to string sizing and Indian applications."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - open circuit voltage
  - voc solar
  - module voc
  - voc temperature
  - string voltage limit
shortDefinition: "Open Circuit Voltage (Voc) is the voltage of a solar module when no current is flowing (no load connected). Maximum voltage the module produces. Used for string sizing: cold-temperature Voc must not exceed inverter maximum DC input. Typical: 41-50 V per modern module."
quickFacts:
  industry: "Solar Module Specification"
  primaryUse: "String sizing upper bound"
  commonUsers: "Designers, installers, EPCs"
  relevantStandards: "IEC 60904, IEC 61215"
  relatedTechnologies: "PERC, TOPCon, HJT, string sizing"
relatedTerms:
  - { slug: "stc", term: "STC" }
  - { slug: "temperature-coefficient", term: "Temperature Coefficient" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "short-circuit-current", term: "Short Circuit Current" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "perc-cell", term: "PERC Cell" }
faqs:
  - q: "What is Voc in simple words?"
    a: "The maximum voltage a solar panel can produce when nothing is connected to it. Reached when the panel is in sunlight but no current flowing."
  - q: "What is typical Voc?"
    a: "Modern modules: 41-50 V at STC. Half-cut: similar to full-cell. Larger modules have higher Voc."
  - q: "Why does Voc matter?"
    a: "String Voc is the cold-temperature limit on string size. Must stay below inverter maximum DC input voltage."
  - q: "How does Voc change with temperature?"
    a: "Decreases at higher temperature, increases at lower. Voc temperature coefficient typically -0.27 to -0.30%/°C."
  - q: "What is cold Voc?"
    a: "Voc at the coldest expected cell temperature. Used for string sizing upper bound. Indian cold morning: ~10-15°C cell."
  - q: "Why measure Voc at zero current?"
    a: "Open circuit means no current path. Module operates at the voltage where current naturally falls to zero. Maximum theoretical voltage."
  - q: "Is Voc same as Vmp?"
    a: "No. Voc is the open-circuit voltage. Vmp is the voltage at maximum power. Vmp is about 78-85 percent of Voc."
  - q: "How is Voc measured?"
    a: "Voltmeter across module terminals with no current flowing. Standard measurement in IV curve testing."
  - q: "What is the cold-morning Voc derate?"
    a: "Voc(cold) = Voc(STC) × (1 + β × (T_min - 25)). For β = -0.0027 and T_min = 5°C: Voc(cold) = Voc × 1.054."
  - q: "Does Voc affect string sizing?"
    a: "Yes. Number of modules per string limited by: Cold String Voc ≤ Inverter Max DC Input."
  - q: "What is Voc per cell?"
    a: "Approximately 0.6-0.7 V per cell at STC for modern cells. HJT cells: 0.72 V."
  - q: "Are 60-cell and 72-cell Voc different?"
    a: "Yes. 60-cell module Voc ~36 V. 72-cell ~44 V. Half-cut 120 modules ~38 V (120 half-cells in series, same as 60 full)."
  - q: "Does Voc determine string voltage?"
    a: "String Voc = Per-module Voc × Number of modules. Cold Voc check uses this."
  - q: "Is Voc same for bifacial?"
    a: "Front-side Voc similar. Bifacial gain adds to current, not voltage."
  - q: "What is the typical Indian module Voc?"
    a: "540 W mono PERC: 49.5 V. 600 W TOPCon: 51-53 V."
---

## What is open circuit voltage (Voc)

Open Circuit Voltage (Voc) is the voltage across the terminals of a solar PV module when no current is flowing because no electrical load is connected. It is the maximum voltage the module produces under the given conditions. At STC (1000 W/m² irradiance, 25°C cell temperature, AM1.5G spectrum), modern modules typically have Voc of 41-50 V.

Voc is determined by the cell technology (Voc per cell at STC is approximately 0.6-0.7 V for modern silicon cells) and the number of cells in series. A 60-cell PERC module has Voc ≈ 60 × 0.61 = 36.6 V. A 144 half-cell module has Voc ≈ 144 × 0.34 = 49 V (each half-cell ~0.34 V).

For solar system design, Voc is critical for string sizing. Cold-temperature Voc determines the maximum number of modules per string, bounded by the inverter's absolute maximum DC input voltage. Exceeding this limit on the first cold morning destroys the inverter.

## Why Voc matters

String sizing. Cold Voc bounds maximum string length.

Inverter safety. Exceeding inverter max DC input is catastrophic.

System voltage class. Sets DC bus voltage operating range.

Temperature derating. Cold morning Voc rise must be calculated.

CEIG approval. SLD must demonstrate string Voc within limits.

## Cold Voc calculation

Voc(cold) = Voc(STC) × (1 + β × (T_min, 25))

Where:
- β = Voc temperature coefficient (typically -0.0027 for PERC)
- T_min = minimum expected cell temperature in operation

For typical Indian conditions with T_min = 5°C:
Voc(cold) = Voc × (1 + (-0.0027) × (-20)) = Voc × 1.054

So cold Voc is ~5.4 percent higher than STC Voc.

## Technical deep dive

### Voc by cell technology

| Cell | Per-cell Voc | Module Voc (72-cell equiv) |
|---|---|---|
| PERC | 0.68-0.69 V | 49-50 V |
| TOPCon | 0.71-0.72 V | 51-52 V |
| HJT | 0.74-0.75 V | 53-54 V |
| Standard mono | 0.62-0.63 V | 45-46 V |

### Module configurations

| Configuration | Per-cell count | Typical Voc |
|---|---|---|
| 60 full-cell | 60 cells in series | ~36 V |
| 72 full-cell | 72 cells in series | ~44 V |
| 120 half-cell (60 equiv) | 120 half-cells in 2 sub-strings | ~38 V |
| 144 half-cell (72 equiv) | 144 half-cells in 2 sub-strings | ~50 V |
| Larger formats | More cells | Higher Voc |

### String Voc calculation

String Voc(cold) = N × Voc_module(cold)

For 14 modules at 49.5 V Voc(STC) at -15°C cold:
Voc(cold per module) = 49.5 × (1 + 0.0027 × 40) = 49.5 × 1.108 = 54.8 V
String Voc = 14 × 54.8 = 767 V

Must stay below inverter max DC input (e.g., 1000 V residential, 1500 V utility).

### Indian regional Tmin assumptions

| Region | Tmin design |
|---|---|
| Coastal Kerala | 18°C |
| Central India | 12°C |
| Northern plains | 5°C |
| Himachal, Uttarakhand | -2°C |
| Ladakh | -15°C |
| Kashmir | -10°C |

## Real-world applications

String sizing calculations.

Inverter selection.

CEIG drawing approval.

System voltage class selection (1000 V vs 1500 V).

## Best practices

Apply cold Voc derate using site-specific T_min.

Include 5 percent safety margin on max DC input.

Verify with inverter manufacturer string sizing tool.

Document Voc values used in calculations.

Use cell-technology-specific β.

## Indian market context

ALMM-listed modules report Voc and β in datasheets.

Indian solar inverters max DC input: 600 V residential, 1100 V C&I, 1500 V utility.

CEIG drawing approval verifies string Voc compliance.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 60904 | PV device measurement |
| IEC 61215 | Module qualification |
| IS 14286 | Indian module standard |
| Manufacturer datasheets | Specific Voc values |

## Key takeaways

Open Circuit Voltage (Voc) is the maximum voltage a solar module produces with no current flowing. Modern modules: 41-50 V at STC. Voc rises in cold weather: ~5 percent higher at 5°C than at STC. String Voc is bounded by inverter maximum DC input. Indian cold-temperature derating uses site-specific T_min. CEIG drawing approval verifies string sizing compliance.

## Need Voc-aware string sizing?

QBits Energy provides string sizing calculations using site-specific cold-temperature derating for residential, C&I and utility solar across India.

## Sources

- IEC 60904, PV device measurement.
- IEC 61215, Module qualification.
- IS 14286, Indian module standard.
- ITRPV Roadmap, latest edition.
- Manufacturer datasheets from leading module brands.
- NREL PV Performance Studies.
- IEA PVPS Task 13 Reports.
- IEC 62548, PV array design.
- Inverter manufacturer string sizing tools.
