---
term: "String Sizing"
title: "String Sizing: Definition, Calculation & Solar Design Applications"
description: "String sizing determines how many panels per string for a solar inverter. Full guide to calculation and Indian temperature derating."
category: "MPPT and Strings"
categorySlug: "mppt-strings"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is string sizing
  - solar string size
  - string sizing calculation
  - mppt window
  - module string design
shortDefinition: "String sizing is the process of determining the optimal number of solar modules connected in series within a string, bounded by the inverter's MPPT voltage window at hot maximum and cold minimum temperatures. Correct string sizing maximises yield and avoids inverter damage."
quickFacts:
  industry: "Solar PV Design"
  primaryUse: "Optimal module-to-inverter electrical matching"
  commonUsers: "Designers, EPCs, installers"
  relevantStandards: "Inverter datasheet, module datasheet"
  relatedTechnologies: "MPPT, temperature derating, DC oversizing"
relatedTerms:
  - { slug: "mppt", term: "MPPT" }
  - { slug: "open-circuit-voltage", term: "Voc" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "current", term: "Current" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "dc-oversizing", term: "DC Oversizing" }
  - { slug: "temperature-coefficient", term: "Temperature Coefficient" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "combiner-box", term: "Combiner Box" }
faqs:
  - q: "What is string sizing in simple words?"
    a: "Deciding how many solar panels to connect in series in one row. The maximum and minimum string size are set by the inverter's voltage window and module temperature behaviour."
  - q: "How many panels in a string?"
    a: "Typically 6 to 20 panels for residential and C&I string inverters. 20 to 30 for utility-scale string inverters."
  - q: "What sets the maximum string size?"
    a: "Inverter's maximum DC input voltage rating. String Voc at the coldest expected temperature must stay below this."
  - q: "What sets the minimum string size?"
    a: "Inverter's MPPT lower voltage. String Vmp at the hottest noon must stay above this."
  - q: "How does temperature affect string voltage?"
    a: "Module voltage rises in cold weather, falls in hot weather. Typical coefficient -0.27 to -0.36% per °C for Voc."
  - q: "What is cold Voc derate?"
    a: "Voc(cold) = Voc(STC) × (1 + temp_coeff × (Tmin − 25))."
  - q: "What is hot Vmp derate?"
    a: "Vmp(hot) = Vmp(STC) × (1 + temp_coeff × (Tmax − 25))."
  - q: "What is the typical cold temperature for Indian design?"
    a: "5°C for most of India. 0°C for Himachal Pradesh, Uttarakhand. -10°C for Ladakh."
  - q: "What is the typical hot temperature?"
    a: "65 to 70°C cell temperature at rated conditions. Real-world summer noon can reach 75 to 80°C."
  - q: "Can I exceed inverter max DC input?"
    a: "No. Exceeding maximum DC input voltage destroys the inverter on the first cold morning."
  - q: "What if my string falls below MPPT minimum at noon?"
    a: "The inverter de-rates or shuts down briefly. Significant yield loss."
  - q: "Can different string lengths be on the same MPPT?"
    a: "Yes if Vmp ranges overlap. Best practice is equal-length strings per MPPT for matched operation."
  - q: "What is DC oversizing?"
    a: "Total DC capacity greater than inverter AC rating, typically 110 to 135 percent. String sizing must stay within voltage limits regardless."
  - q: "How is string sizing documented?"
    a: "On the single-line diagram with string layout, module Voc/Vmp, temperature ranges and inverter voltage window."
  - q: "Are different module brands compatible in same string?"
    a: "Best practice no. Different Voc and Vmp cause mismatch loss and undermine string sizing assumptions."
author: "Keyur Rakholiya"
---

## What is string sizing

String sizing is the design process of determining the number of solar modules connected in series to form a string that feeds one MPPT input of a solar inverter. The optimal string length is constrained by the inverter's MPPT voltage window and the temperature-dependent behaviour of module open-circuit voltage (Voc) and voltage at maximum power (Vmp).

The two binding constraints:

1. Maximum string Voc at coldest expected temperature must stay below the inverter's absolute maximum DC input voltage.
2. Minimum string Vmp at hottest expected operating temperature must stay above the inverter's MPPT lower limit.

A string longer than the upper limit can damage the inverter on the first cold morning. A string shorter than the lower limit forces the inverter outside its MPPT window during hot periods, losing yield. See [string voltage vs MPPT voltage in solar inverters](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/) for the full temperature-corrected design framework Indian EPCs use across cold Himalayan mornings and 65°C+ Rajasthan rooftops.

## Why string sizing matters

Inverter safety. Exceeding maximum DC input destroys the inverter.

Yield optimisation. String voltage within MPPT window maximises power tracking.

Equipment compatibility. Verified string sizing makes inverter, modules and cabling work as a system.

ALMM compliance. ALMM and BIS certificates assume sized strings.

Regulatory acceptance. CEIG and DISCOM commissioning verify string configuration.

## String sizing equations

### Upper bound (cold morning)

Voc_string_cold = N × Voc_module_STC × (1 + βVoc × (Tmin_cell − 25))

Where:
- N = number of modules in series
- βVoc = temperature coefficient of Voc (negative number, in %/°C as decimal)
- Tmin_cell = minimum expected cell temperature (≈ ambient at dawn)

Constraint: Voc_string_cold ≤ V_inverter_max_DC

### Lower bound (hot noon)

Vmp_string_hot = N × Vmp_module_STC × (1 + βVmp × (Tmax_cell − 25))

Constraint: Vmp_string_hot ≥ V_MPPT_lower

## Technical deep dive

### Worked example (Indian C&I rooftop)

Inverter: 25 kW, MPPT range 200 to 950 V, max DC 1100 V.
Module: 540 W bifacial mono PERC, Voc 49.5 V, Vmp 41.4 V, βVoc = -0.27%/°C, βVmp = -0.36%/°C.
Site: Mumbai. Tmin = 5°C, Tmax cell = 70°C.

Upper bound:
Voc_cold = N × 49.5 × (1 + (-0.0027) × (5 − 25)) = N × 49.5 × 1.054 = N × 52.17
N_max = 1100 / 52.17 = 21.08 → 21 modules

Lower bound:
Vmp_hot = N × 41.4 × (1 + (-0.0036) × (70 − 25)) = N × 41.4 × 0.838 = N × 34.69
N_min = 200 / 34.69 = 5.77 → 6 modules

Acceptable string range: 6 to 21 modules per MPPT.

### Indian regional Tmin assumptions

| Region | Tmin (°C) for design |
|---|---|
| Kerala, coastal Tamil Nadu | 18 |
| South-central India | 12 |
| North-central India | 5 |
| Punjab, Haryana, Delhi NCR | 2 |
| Himachal, Uttarakhand | -2 |
| Ladakh, Spiti | -15 |
| Kashmir | -10 |

### Temperature coefficient by cell technology

| Cell | βVoc (%/°C) | βVmp (%/°C) | βPmax (%/°C) |
|---|---|---|---|
| PERC | -0.27 | -0.36 | -0.36 |
| TOPCon | -0.25 | -0.31 | -0.31 |
| HJT | -0.21 | -0.26 | -0.26 |

### Common Indian residential string ranges

| Inverter MPPT | Module Voc 41-50 V | Typical string |
|---|---|---|
| 100 to 500 V | 6 to 10 modules | 8 to 9 |
| 100 to 600 V | 7 to 12 modules | 10 to 11 |
| 200 to 1000 V | 10 to 20 modules | 14 to 16 |

## Real-world applications

Residential rooftop solar design.

C&I rooftop and ground-mount string layout.

Utility solar plant configuration.

Carport string design.

Floating solar with seasonal temperature variation.

## Common string sizing problems

String too long, inverter destroyed on cold morning.

String too short, inverter de-rates at noon during summer.

Mixed module brands creating Vmp mismatch.

Cold-temperature derate ignored for Ladakh-class sites.

Different orientations on same string causing mismatch.

## Best practices

Use site-specific Tmin and Tmax for derating.

Apply 5 percent safety margin on maximum Voc.

Document string sizing on the single-line diagram, including the fuse rating for parallel strings; see [solar string sizing and overcurrent protection in India](/blog/solar-string-sizing-ocp-india/) for the 5-step method EPC teams use to size both together.

Verify with PVsyst or inverter manufacturer's sizing tool.

Match string lengths within one MPPT.

Use one MPPT per orientation.

Specify cold-climate ratings for high-altitude installations.

## Comparison: residential vs utility string sizing

| Aspect | Residential | Utility |
|---|---|---|
| Inverter max DC | 600 V | 1500 V |
| Typical string length | 8 to 16 modules | 20 to 30 modules |
| MPPT count | 1 to 4 | 4 to 12 per inverter |
| Sizing tools | Manual, manufacturer tool | PVsyst, in-house tools |

## Indian market context

Inverter manufacturers (Sungrow, Solis, Goodwe, Solax, Growatt, Deye) publish online string sizing tools.

PVsyst is the industry standard for utility-scale string sizing in India.

ALMM-listed module datasheets provide Voc, Vmp and temperature coefficients required for sizing.

CEIG drawing approval includes verification of string configuration.

PM Surya Ghar residential installations use installer-side sizing tools.

## Standards and certifications

| Standard | Scope |
|---|---|
| Inverter datasheet | MPPT range and max DC input |
| Module datasheet | Voc, Vmp, temperature coefficients |
| MNRE design guidelines | Recommendations |
| IS 14286 | Module standard, temperature coefficient testing |

## Common mistakes

Using STC values without temperature derate.

Ignoring cold-temperature Voc rise on high-altitude sites.

Mixing 60-cell and 72-cell modules in one string.

Skipping inverter MPPT window check.

Using same string size across different orientations.

Not documenting string sizing assumptions.

Trusting installer recommendation without verification.

## Key takeaways

String sizing is the design step that matches modules to inverter MPPT window across temperatures. Maximum string Voc at coldest temperature must stay below inverter max DC input. Minimum string Vmp at hottest temperature must stay above MPPT lower limit. Site-specific temperature assumptions, cell-technology coefficients and inverter datasheet limits determine acceptable string lengths. Wrong string sizing destroys inverters or wastes yield.

## Need professional string sizing for your solar project?

QBits Energy provides PVsyst-validated string sizing for residential, C&I and utility solar projects across Indian temperature zones.

## Sources

- Manufacturer string sizing tools from Sungrow, Solis, Goodwe, Solax, Growatt, Deye.
- PVsyst software documentation.
- IS 14286, Indian Standard for crystalline silicon PV modules.
- IS 17387, Inverter grid interconnection.
- MNRE Design Guidelines for Solar PV Plants.
- IEC 61730, Module safety standards.
- Inverter datasheets from major OEMs.
- IEA PVPS Trends in Photovoltaic Applications 2024.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
