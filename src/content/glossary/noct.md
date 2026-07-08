---
term: "NOCT"
title: "NOCT (Nominal Operating Cell Temperature): Definition & Solar"
description: "NOCT is realistic operating cell temperature. Full guide to estimation and Indian applications."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - noct
  - nominal operating cell temperature
  - cell temperature solar
  - noct vs stc
  - module operating temperature
shortDefinition: "NOCT (Nominal Operating Cell Temperature) is the equilibrium cell temperature of a solar module operating at 800 W/m² irradiance, 20°C ambient and 1 m/s wind speed. Typical modern modules: 42-45°C. Used to estimate realistic operating temperature, distinct from STC's 25°C."
quickFacts:
  industry: "Solar Module Performance"
  primaryUse: "Realistic operating temperature estimation"
  commonUsers: "Designers, EPCs, yield modellers"
  relevantStandards: "IEC 61215, IEC 61853"
  relatedTechnologies: "Cell technology, module construction"
relatedTerms:
  - { slug: "stc", term: "STC" }
  - { slug: "temperature-coefficient", term: "Temperature Coefficient" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "perc-cell", term: "PERC Cell" }
  - { slug: "topcon-cell", term: "TOPCon Cell" }
  - { slug: "hjt-cell", term: "HJT Cell" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "bifacial-module", term: "Bifacial Module" }
  - { slug: "mounting-structure", term: "Mounting Structure" }
faqs:
  - q: "What is NOCT in simple words?"
    a: "The realistic temperature your solar panels reach during normal operation, not the idealised 25°C in datasheets. About 42-45°C for modern modules in standard test conditions."
  - q: "What is NOCT vs STC?"
    a: "STC: laboratory conditions (25°C, 1000 W/m²). NOCT: realistic operating conditions (~45°C, 800 W/m²)."
  - q: "Why is NOCT important?"
    a: "Real-world operating temperature is much higher than STC's 25°C. NOCT gives a more realistic estimate, especially for Indian hot climates."
  - q: "What is the typical NOCT?"
    a: "Modern modules: 42-45°C. Older designs: 47-50°C. Lower NOCT = better cooling = higher yield."
  - q: "How is NOCT measured?"
    a: "Standard test at 800 W/m² irradiance, 20°C ambient, 1 m/s wind. Cell temperature measured at equilibrium."
  - q: "Does mounting affect NOCT?"
    a: "Yes. Rooftop close-mount: higher NOCT (less air flow). Open ground-mount: lower NOCT (better cooling)."
  - q: "What is INOCT?"
    a: "Installed NOCT, accounting for actual mounting and site conditions. May differ from datasheet NOCT."
  - q: "How is real cell temperature estimated?"
    a: "T_cell = T_ambient + (NOCT - 20) × (Irradiance / 800). Approximation valid for moderate wind."
  - q: "What is Indian operating cell temperature?"
    a: "Indian summer noon (45°C ambient, 1000 W/m²): T_cell ≈ 45 + (43 - 20) × 1.25 = 73-75°C typical."
  - q: "Does NOCT affect yield?"
    a: "Yes. Modules with lower NOCT run cooler and produce more energy in hot climates."
  - q: "Are bifacial modules NOCT different?"
    a: "Generally similar. Bifacial gain is separate from cell temperature."
  - q: "What is the relationship to temperature coefficient?"
    a: "NOCT determines operating temperature. Temperature coefficient determines power loss per °C above STC."
  - q: "Is NOCT mandatory on datasheets?"
    a: "Yes per IEC 61215. Most modules report it."
  - q: "Does cell technology affect NOCT?"
    a: "Slightly. HJT modules often have slightly lower NOCT than PERC."
  - q: "Why is NOCT 800 W/m²?"
    a: "Reflects typical real-world irradiance during operation (less than STC's 1000 W/m²)."
author: "Nirav Dhanani"
---

## What is NOCT

NOCT (Nominal Operating Cell Temperature) is the equilibrium cell temperature of a solar PV module operating under standardised conditions designed to reflect realistic outdoor operation, distinct from the laboratory conditions of STC. NOCT conditions:

- Irradiance: 800 W/m² (lower than STC's 1000 W/m²)
- Ambient air temperature: 20°C
- Wind speed: 1 m/s
- Module mounted open-frame with rear-side air flow

Modern modules report NOCT values of 42-45°C, meaning cells operate 22-25°C above ambient at these moderate irradiance conditions. NOCT serves as a baseline for estimating realistic operating cell temperature at any actual ambient and irradiance.

For Indian solar, NOCT-based cell temperature estimation is essential because actual operating conditions are far from STC. Indian summer noon ambient of 45°C with 1000 W/m² irradiance produces cell temperatures of 70-75°C, with significant power derating per temperature coefficient.

## Why NOCT matters

Realistic yield modelling. STC overstates expected output by ignoring operating temperature.

Cell technology comparison. Modules with lower NOCT run cooler and produce more.

Mounting impact. Rooftop close-mount has higher effective NOCT than open ground-mount.

PR calculation. Operating temperature derating must be applied.

PVsyst input. NOCT or operating temperature model required, as detailed in [PV Yield Simulation Software: 2026 Bankable Guide](/blog/pv-yield-simulation-software/).

## NOCT estimation

T_cell ≈ T_ambient + (NOCT, 20) × (Irradiance / 800)

For NOCT = 45°C, ambient = 35°C, irradiance = 900 W/m²:
T_cell = 35 + (25) × (1.125) = 35 + 28 = 63°C

## Technical deep dive

### NOCT by module construction

| Construction | Typical NOCT |
|---|---|
| Modern half-cut mono | 42-44°C |
| Standard mono | 44-46°C |
| Older designs | 47-50°C |
| Thin film | 45-48°C |
| HJT premium | 41-43°C |
| Frameless glass-glass | 43-45°C |
| Building-integrated PV | 50-65°C (limited ventilation) |

### Mounting impact

| Mounting | NOCT modifier |
|---|---|
| Open rack (1-2m clearance) | Standard NOCT applies |
| Close-mount rooftop (gap < 20cm) | +3 to 5°C |
| Direct-mount on roof | +5 to 8°C |
| Building-integrated facade | +10 to 15°C |
| Floating solar (water cooling) | -2 to 5°C |

### Indian operating cell temperature

| Conditions | T_cell |
|---|---|
| Winter morning, 1000 W/m², 15°C ambient | 40-45°C |
| Summer noon, 1000 W/m², 45°C ambient | 70-75°C |
| Monsoon afternoon, 600 W/m², 30°C ambient | 45-50°C |
| Peak summer rooftop noon | 75-80°C |

### Better cooling = higher yield

For PERC at γ = -0.36%/°C, every 10°C reduction in operating cell temperature:
- +3.6% efficiency
- +3.6% yield

Optimised mounting and ventilation pays back through yield gains.

## Real-world applications

Yield modelling.

Cell technology comparison for hot climates.

Mounting design (clearance specification).

Rooftop vs ground-mount yield comparison.

BIPV thermal management.

## Best practices

Use NOCT-based operating temperature for yield models.

Specify open rack mounting where possible.

Maintain rear-side air flow.

Avoid close-mounted dark surfaces beneath modules.

Document NOCT assumption in yield reports.

## Indian market context

Indian rooftop close-mounting often raises effective NOCT, compounding the output loss covered in [Why Solar Inverters Produce Less in Indian Summer, Derating Explained](/blog/solar-inverter-summer-derating-india/).

Major Indian module manufacturers report NOCT in datasheets.

PVsyst and SAM use NOCT for cell temperature modelling.

Floating solar leverages water cooling for lower operating temperature.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61215 | Module qualification including NOCT |
| IEC 61853 | Operating performance |
| IS 14286 | Indian module standard |
| Manufacturer datasheets | Specific NOCT values |

## Key takeaways

NOCT (Nominal Operating Cell Temperature) is the cell temperature under standardised realistic outdoor conditions (800 W/m², 20°C ambient, 1 m/s wind). Modern modules: 42-45°C. Used to estimate actual operating cell temperature at any conditions. Mounting impact significant: close-mounted rooftop raises effective NOCT by 3-8°C. Combined with temperature coefficient, NOCT-based modelling provides realistic yield estimates for Indian hot climate.

## Need NOCT-aware solar yield modelling?

QBits Energy provides yield modelling accounting for NOCT, mounting effects and Indian climate conditions for residential, C&I and utility solar.

## Sources

- IEC 61215, Module qualification.
- IEC 61853, Module performance.
- IS 14286, Indian module standard.
- ITRPV Roadmap.
- Manufacturer datasheets from major brands.
- NREL Module Temperature Studies.
- Sandia National Laboratories cell temperature reports.
- IEA PVPS Task 13 Reports.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes.
