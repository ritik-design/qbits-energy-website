---
term: "STC"
title: "STC (Standard Test Conditions): Definition & Solar Module Rating"
description: "STC is the laboratory rating standard for solar modules. Full guide and yield modelling."
category: "Performance"
categorySlug: "performance-efficiency"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - standard test conditions
  - stc solar
  - module nameplate rating
  - 1000 w/m2
  - solar test conditions
shortDefinition: "STC (Standard Test Conditions) is the laboratory reference condition for rating solar module electrical parameters: 1000 W/m² irradiance, 25°C cell temperature, AM1.5G solar spectrum. Module nameplate watts (Wp = peak watts) refers to STC output. Real-world operation differs significantly from STC."
quickFacts:
  industry: "Solar Module Specification"
  primaryUse: "Standardised module rating"
  commonUsers: "All solar industry participants"
  relevantStandards: "IEC 60904, IEC 61215, IEC 61853"
  relatedTechnologies: "Flash testing, sun simulator"
relatedTerms:
  - { slug: "noct", term: "NOCT" }
  - { slug: "temperature-coefficient", term: "Temperature Coefficient" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
  - { slug: "wattage", term: "Module Wattage" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage" }
  - { slug: "short-circuit-current", term: "Short Circuit Current" }
  - { slug: "monocrystalline", term: "Monocrystalline" }
  - { slug: "perc-cell", term: "PERC Cell" }
  - { slug: "topcon-cell", term: "TOPCon Cell" }
  - { slug: "iec-61215", term: "IEC 61215" }
  - { slug: "solar-yield", term: "Solar Yield" }
faqs:
  - q: "What is STC in simple words?"
    a: "The standardised conditions in a lab where solar panel ratings are measured: bright sunlight (1000 W/m²), moderate temperature (25°C), and standard sunlight spectrum. The Wp on the panel label."
  - q: "What does STC stand for?"
    a: "Standard Test Conditions."
  - q: "What are STC parameters?"
    a: "Irradiance: 1000 W/m². Cell temperature: 25°C. Spectrum: AM1.5G. Solar angle: zenith reference."
  - q: "What is Wp?"
    a: "Watt-peak. Power output at STC. A 540 Wp module produces 540 W under STC conditions."
  - q: "Why STC?"
    a: "Standardised conditions allow comparison across modules. Without STC, manufacturer specs would not be comparable."
  - q: "Is real output equal to STC?"
    a: "No. Real-world operating conditions (hotter, sometimes less light) produce less than STC. Module typically operates at 60-90 percent of nameplate."
  - q: "What is AM1.5?"
    a: "Air Mass 1.5: the path length of sunlight through atmosphere at 48° solar zenith. Standard reference spectrum for terrestrial PV."
  - q: "How is STC measured?"
    a: "Solar simulator (flash tester) provides STC conditions. Module connected to electronic load. I-V curve measured."
  - q: "What is positive power tolerance?"
    a: "Manufacturer guarantee that module produces at least nameplate Wp under STC. Typical 0 to +5 W tolerance."
  - q: "Is STC the warranty point?"
    a: "Yes. Linear performance warranty references STC nameplate."
  - q: "Does STC reflect Indian conditions?"
    a: "Poorly. Indian operating conditions typically exceed 25°C cell temperature by 30-50°C, reducing actual output."
  - q: "What is the difference between STC and NOCT?"
    a: "STC: lab conditions (25°C, 1000 W/m²). NOCT: realistic operating temperature at moderate irradiance. NOCT used for real-world estimation."
  - q: "How is yield calculated from STC?"
    a: "Yield = Capacity (STC Wp) × Annual irradiation / 1 kW/m² × PR (performance ratio)."
  - q: "Is STC same globally?"
    a: "Yes. IEC 60904 standard ensures global consistency in STC definition and measurement."
  - q: "Are bifacial modules rated at STC?"
    a: "Front-side rated at STC. Rear-side gain specified separately as bifaciality factor."
---

## What are Standard Test Conditions

STC (Standard Test Conditions) are the laboratory reference conditions used worldwide to specify and compare solar module electrical performance. The conditions are:

- Irradiance: 1000 W/m² (peak sun)
- Cell temperature: 25°C
- Solar spectrum: AM1.5G (Air Mass 1.5 Global reference)
- Solar zenith angle: 48° (corresponding to AM1.5)

Module nameplate ratings (Pmax, Voc, Vmp, Isc, Imp) are measured at STC. The "Wp" or "Watt-peak" designation refers to STC power output. A 540 Wp module produces 540 W at STC.

For Indian solar, STC ratings provide standardised comparison but do not directly reflect operating conditions. Indian summer noon typically operates at 65-75°C cell temperature with 800-1000 W/m² irradiance, producing actual output 10-20 percent below STC nameplate.

## Why STC matters

Module comparison. Identical reference conditions enable apples-to-apples comparison.

Nameplate rating. All datasheets reference STC.

Warranty point. Linear performance warranties reference STC.

Sales transactions. Pricing per Wp at STC.

Standards basis. IEC 61215, IEC 61853 all reference STC.

## STC vs operating conditions

| Parameter | STC | Indian summer noon |
|---|---|---|
| Irradiance | 1000 W/m² | 800-1000 W/m² |
| Ambient | n/a | 35-45°C |
| Cell temperature | 25°C | 65-80°C |
| Spectrum | AM1.5G | Variable |
| Output | Nameplate | 70-85% of nameplate |

## Technical deep dive

### STC parameters in module datasheet

| Parameter | Description |
|---|---|
| Pmax (W) | Maximum power at STC |
| Voc (V) | Open-circuit voltage at STC |
| Isc (A) | Short-circuit current at STC |
| Vmp (V) | Voltage at maximum power at STC |
| Imp (A) | Current at maximum power at STC |
| FF | Fill factor at STC |
| Eff (%) | Module efficiency at STC |

### IEC 60904 spectrum requirements

| Wavelength range | Required tolerance |
|---|---|
| 300-1100 nm | ±25% per 100 nm bin |
| Total irradiance | ±2% |

Solar simulators must meet Class AAA: A for spectral match, A for spatial uniformity, A for temporal stability.

### Flash testing

| Parameter | Specification |
|---|---|
| Flash duration | 10-100 ms |
| Spectrum quality | AAA simulator |
| Temperature monitoring | Cell temperature ≈ 25°C |
| I-V sweep | Multiple points |
| Output | Pmax with tolerance |

### Translation from STC to operating

Yield calculation:
P_operating = P_STC × (Irradiance / 1000) × (1 + γ × (T_cell, 25))

Where γ is temperature coefficient (negative).

## Real-world applications

Module specification.

Sales and procurement.

Warranty enforcement.

Yield modelling baseline.

System sizing.

## Positive power tolerance

Modern modules: 0 to +5 W tolerance.

Manufacturer guarantees minimum nameplate Wp. Higher tolerance modules cost slightly more.

## Indian market context

All ALMM-listed Indian modules rated at STC.

BIS certification under IS 14286 includes STC measurement.

Indian flash testing labs include NISE, TUV Rheinland India, Intertek India, Bureau Veritas India.

Major Indian manufacturers run in-house flash testing during production.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 60904 | PV device measurement |
| IEC 61215 | Module qualification including STC |
| IEC 61853 | Performance over operating conditions |
| IS 14286 | Indian module standard |

## Key takeaways

STC (Standard Test Conditions) are the laboratory reference for solar module ratings: 1000 W/m² irradiance, 25°C cell temperature, AM1.5G spectrum. Module nameplate Wp refers to STC. Real Indian operating conditions produce 10-20 percent less than STC due to higher temperatures. Translation from STC to operating performance requires temperature coefficient and irradiance scaling. STC enables global module comparison and forms the basis of warranty enforcement.

## Need STC-compliant module specifications?

QBits Energy supplies ALMM-listed modules with verified STC ratings for residential, C&I and utility solar across India.

## Sources

- IEC 60904, PV device measurement.
- IEC 61215, Module qualification.
- IEC 61853, Performance over operating conditions.
- IS 14286, Indian module standard.
- ITRPV Roadmap.
- Manufacturer datasheets.
- NREL PV Performance Studies.
- Sandia National Laboratories module testing.
- IEA PVPS Task 13 Reports.
