---
term: "Harmonics"
title: "Harmonics: Definition, Meaning, How It Works, Effects & Applications"
description: "Harmonics are unwanted higher-frequency components in AC power that distort the sine wave. Full guide to causes, effects, IEEE 519 limits and solar inverter THD."
category: "Power Quality"
categorySlug: "power-quality"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what are harmonics
  - power harmonics
  - harmonic distortion
  - ieee 519
  - solar inverter harmonics
  - harmonic filter
shortDefinition: "Harmonics are integer-multiple frequency components present in voltage or current waveforms beyond the fundamental 50 Hz. They are caused by non-linear loads and switching converters, and degrade power quality. Modern solar inverters tightly control output harmonics to meet IEEE 519 and IEC 61000 limits."
quickFacts:
  industry: "Power Quality"
  primaryUse: "Characterising and limiting waveform distortion"
  commonUsers: "Power quality engineers, utilities, EPCs, inverter manufacturers"
  relevantStandards: "IEEE 519, IEC 61000-3-6, IEC 61000-3-2, CEA Grid Code, IS 17387"
  relatedTechnologies: "Active and passive harmonic filters, multilevel inverters, LCL output filters"
relatedTerms:
  - { slug: "thd", term: "THD" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "fault-ride-through", term: "Fault Ride Through" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "ieee-519", term: "IEEE 519" }
  - { slug: "lcl-filter", term: "LCL Filter" }
  - { slug: "pwm", term: "PWM" }
  - { slug: "grid-code", term: "Grid Code" }
  - { slug: "power-quality", term: "Power Quality" }
faqs:
  - q: "What are harmonics in simple words?"
    a: "Extra ripples on what should be a clean AC sine wave. They are unwanted frequencies sitting on top of the 50 Hz fundamental, caused by switching electronics and non-linear loads."
  - q: "What causes harmonics?"
    a: "Anything that draws current in a non-linear way: solar inverters, VFDs, computer power supplies, fluorescent lights, arc furnaces, EV chargers and welders."
  - q: "Are harmonics bad?"
    a: "Yes, when they exceed limits. They cause transformer overheating, motor vibration, capacitor failure, breaker tripping and metering errors."
  - q: "What is THD?"
    a: "Total Harmonic Distortion: the ratio of harmonic content to the fundamental, expressed as a percentage."
  - q: "What is the IEEE 519 limit?"
    a: "Current THD limits depend on short-circuit ratio. Most utility connections require less than 5 percent. Individual harmonic limits vary by order."
  - q: "Do solar inverters produce harmonics?"
    a: "All switching converters produce some harmonic content. Modern inverters use LCL filters and high switching frequencies to keep output THD well below 3 percent."
  - q: "What harmonics matter most?"
    a: "The lower odd harmonics: 3rd, 5th, 7th, 11th and 13th. These have the largest amplitude in typical non-linear loads and the most impact on equipment."
  - q: "What is triplen harmonic?"
    a: "Harmonics at multiples of 3 (3rd, 9th, 15th) that add up in the neutral conductor of three-phase systems. They cause neutral overheating."
  - q: "Can I filter harmonics?"
    a: "Yes. Passive LC filters block specific harmonics. Active filters dynamically inject opposing harmonic current. Choice depends on harmonic profile and cost."
  - q: "Are harmonics measured in voltage or current?"
    a: "Both. Voltage harmonics propagate across the supply. Current harmonics are drawn by individual loads. Power quality assessments look at both."
  - q: "How are harmonics measured?"
    a: "Power quality analysers record waveform samples and perform FFT to extract individual harmonic magnitudes and phases. Snapshot or 10-minute aggregated reporting per IEC 61000-4-30."
  - q: "Are harmonics same as noise?"
    a: "No. Harmonics are discrete integer multiples of the fundamental. Noise is broadband and random."
  - q: "What is the impact of harmonics on solar inverters?"
    a: "Grid-side voltage harmonics propagate to inverter terminals. Severe distortion can cause PLL jitter and false anti-islanding trips."
  - q: "Do central inverters produce more harmonics than string inverters?"
    a: "Modern multilevel central inverters produce lower THD than basic two-level string inverters because of multilevel switching. Both are well within limits."
  - q: "Are harmonics regulated in India?"
    a: "Yes. CEA Grid Code references IEEE 519 and IEC 61000 limits for distributed generators."
author: "Nirav Dhanani"
---

## What are harmonics

Harmonics are sinusoidal components of voltage or current at integer multiples of the fundamental frequency. In a 50 Hz Indian grid, the 3rd harmonic is at 150 Hz, the 5th at 250 Hz, the 7th at 350 Hz, and so on. Any periodic non-sinusoidal waveform can be decomposed into a sum of harmonics through Fourier analysis.

> **TL;DR**
> - Harmonics are voltage or current components at integer multiples of the 50 Hz fundamental, caused by non-linear loads and switching converters like solar inverters.
> - IEEE 519 limits most utility connections to under 5 percent current [THD](/glossary/thd/), with tighter limits on individual harmonic orders such as the 5th and 7th.
> - Modern solar inverters use LCL output filters and high switching frequencies to keep output THD below 3 percent, well within IS 17387 and CEA Grid Code limits.
> - Triplen harmonics (3rd, 9th, 15th) add up in the neutral conductor of three-phase systems and can overheat wiring.
> - Uncontrolled harmonics shorten transformer, motor and capacitor life, sometimes halving capacitor lifespan at 5 percent THD.
> - Harmonics interact closely with [power factor](/glossary/power-factor/) and [reactive power](/glossary/reactive-power/), the other two headline power quality metrics for solar plants.

A perfect sine wave has only the fundamental. A distorted waveform has the fundamental plus harmonic content. Power systems are designed for sine waves. Harmonics cause heating, vibration, equipment ageing and measurement errors. Standards like IEEE 519 and IEC 61000 limit harmonic content to keep power quality manageable.

Solar inverters, like all switching converters, generate some harmonic content as part of their normal operation. Output filters, multilevel topologies and high switching frequencies keep modern inverter harmonic output well within applicable limits.

## Harmonics explained simply

Imagine pure music: a single sine-wave tone. Now imagine you add a second tone three times the frequency, a third tone five times the frequency, all mixed in. The waveform no longer looks like a clean sine wave. It looks ragged.

The grid is supposed to deliver a clean 50 Hz sine wave. Anything that distorts it, switching electronics in inverters, computers, drives, fluorescent lamps, adds ragged shapes that are mathematically expressible as a stack of higher-frequency sine waves. Those are harmonics.

A small amount of harmonic ripple is harmless. Too much causes real problems: transformers run hot, motors vibrate, capacitors blow up, breakers nuisance-trip, and meters read wrong. The measure engineers quote to summarise all this ripple in one number is [Total Harmonic Distortion (THD)](/glossary/thd/).

## Why harmonics matter

Equipment lifetime. Heat from harmonic currents shortens transformer, motor and capacitor life. Even 5 percent THD can halve capacitor life.

Neutral overload. Triplen harmonics (3rd, 9th, 15th) add in the neutral of three-phase systems, sometimes carrying more current than each phase.

Resonance. Harmonics excite LC resonances on the network, causing voltage spikes.

Metering. Older meters mis-record under high distortion. Even modern meters specify accuracy only up to defined THD levels.

Anti-islanding interference. PLL inside inverters can lock onto harmonic components in highly distorted grids, causing trips.

DISCOM compliance. Indian large C&I and utility connections include harmonic limits referencing IEEE 519.

## How harmonics arise

1. A non-linear load draws current in pulses rather than smoothly.
2. The pulsed current contains the fundamental plus harmonics.
3. The current flows through source impedance, dropping harmonic voltage on the line.
4. The harmonic voltage appears at other loads on the same feeder.
5. Sensitive loads experience distorted voltage and may malfunction.

A switching converter inside a solar inverter operates at 16 to 50 kHz, well above audio frequencies. Without a filter, switching ripple would inject harmonics at the switching frequency and its sidebands. An LCL filter attenuates this. Lower-order harmonics from PWM control imperfections are kept within limits through modulation design.

## Technical deep dive

### Common harmonic orders

| Order | Frequency (50 Hz base) | Typical source |
|---|---|---|
| 3rd | 150 Hz | Single-phase non-linear loads, triplen |
| 5th | 250 Hz | Six-pulse rectifiers, VFDs |
| 7th | 350 Hz | Six-pulse rectifiers, VFDs |
| 11th | 550 Hz | Twelve-pulse rectifiers |
| 13th | 650 Hz | Twelve-pulse rectifiers |
| 17th, 19th | 850, 950 Hz | Higher rectifier orders |

### IEEE 519 current limits

| Short-circuit ratio | h<11 | 11≤h<17 | 17≤h<23 | TDD |
|---|---|---|---|---|
| <20 | 4.0% | 2.0% | 1.5% | 5.0% |
| 20-50 | 7.0% | 3.5% | 2.5% | 8.0% |
| 50-100 | 10.0% | 4.5% | 4.0% | 12.0% |
| 100-1000 | 12.0% | 5.5% | 5.0% | 15.0% |
| >1000 | 15.0% | 7.0% | 6.0% | 20.0% |

### Voltage limits

IEEE 519 voltage limits for systems below 69 kV: 3 percent individual, 5 percent total. CEA Grid Code uses equivalent limits with state-specific adjustments.

### Inverter output filters

| Filter | Notes |
|---|---|
| L | Single inductor, simple, poor attenuation |
| LC | One stage of LC, better attenuation |
| LCL | Two-stage with capacitor in the middle, dominant in modern grid-tie inverters |
| Active filter | Dynamic current injection, used for compensation of external loads |

## Real-world applications

Solar inverter compliance. All BIS-certified Indian inverters meet THD below 3 percent at rated output.

Industrial reactive and harmonic compensation. Solar inverters with active filter mode compensate factory harmonic loads.

Data centre power quality. Multiple non-linear loads need clean voltage. Solar plus filter approach maintains it.

EV charging stations. DC fast chargers are non-linear loads. Co-located solar with active filtering manages site harmonics.

Hospital power quality. Sensitive imaging equipment requires low harmonic distortion. Solar inverter design must demonstrate compliance.

## Advantages of low-harmonic inverters

Meets grid code with margin.

Reduces equipment heating and ageing.

Supports neighbouring sensitive loads.

Avoids resonance with capacitor banks.

Compatible with future smart grid functions.

## Limitations and trade-offs

Lower THD requires larger filter inductors and higher switching frequencies, increasing cost and losses.

Active filtering capability uses inverter kVA capacity, reducing solar export headroom.

Filter design depends on grid impedance, which varies. Off-spec sites can resonate.

External harmonic loads can saturate the inverter active filter.

## Common problems

High THD at light load. Inverters often have higher THD at low output. Quoted THD figures are at rated load.

Voltage resonance with site capacitor banks. Capacitor failure within months.

Neutral current overload from triplen harmonics in offices with many single-phase IT loads.

Meter error at high THD. Class 0.5 meters can drift to 1 percent error above 10 percent THD.

PLL false trips during severe grid distortion events.

Filter capacitor failure in coastal humidity. Replace at 7 to 10 years.

## Best practices

Specify THD compliance in inverter purchase contracts.

Measure THD at commissioning with power quality analyser, at multiple load levels.

Avoid placing fixed capacitor banks near solar inverter output without resonance analysis.

Use active filtering inverters at sites with severe external harmonic loads.

Audit harmonic levels annually during preventive maintenance.

Coordinate with DISCOM if grid voltage THD is high upstream.

## Comparison: harmonic sources and mitigation

| Source | Typical THD | Mitigation |
|---|---|---|
| Modern solar inverter | <3% | LCL filter, multilevel topology |
| VFD without filter | 30 to 50% | 6-pulse plus line reactor or 12-pulse |
| Computer SMPS | 80 to 130% | PFC front end |
| Six-pulse rectifier | 25 to 35% | 12-pulse or active filter |
| Fluorescent ballast | 10 to 20% | Electronic ballast with PFC |

## Indian market context

CEA Grid Code 2019 references IEEE 519 and IEC 61000 for harmonic limits applicable to distributed generators. IS 17387 incorporates equivalent THD limits for Indian solar inverters.

Major Indian inverter brands like Sungrow, Sineng, Solis, Goodwe, Growatt and Tata Power Solar list THD below 3 percent in datasheets.

State DISCOM commissioning protocols often include a harmonic measurement at point of common coupling.

C&I customers using VFDs alongside solar increasingly specify active filtering inverters to manage site harmonics holistically.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEEE 519-2014 | Recommended practice for harmonic control |
| IEC 61000-3-2 | Harmonic emission limits for equipment <16 A |
| IEC 61000-3-6 | Limits for emission of distorting loads in MV/HV |
| IEC 61000-4-7 | Measurement of harmonics and interharmonics |
| IEC 61000-4-30 | Power quality measurement methods |
| IS 17387 | Indian inverter standard, includes THD requirements |
| CEA Grid Code 2019 | Indian connection requirements |

## Common mistakes

Quoting inverter THD at rated load and ignoring light-load THD.

Installing capacitor banks without resonance check.

Ignoring neutral current measurements in three-phase systems.

Skipping harmonic measurement at commissioning.

Using budget inverters without filter specification.

Treating harmonics as a maintenance-only concern.

Forgetting that grid-side voltage harmonics affect every load, including the solar inverter.

## Key takeaways

Harmonics are unwanted higher-frequency components on AC power, generated by switching converters and non-linear loads. Modern solar inverters control output harmonics well below IEEE 519 and IS 17387 limits using LCL filters and high switching frequencies. Site design, capacitor bank placement and external harmonic loads decide whether actual site harmonic levels stay within compliance.

## Need help with power quality on solar projects?

QBits Energy supports EPCs and C&I customers on harmonic assessment, inverter selection and filter design for Indian solar projects.

## Sources

- IEEE Std 519-2014, IEEE Recommended Practice and Requirements for Harmonic Control in Electric Power Systems.
- IEC 61000-3-2, IEC 61000-3-6, IEC 61000-4-7, IEC 61000-4-30, harmonic emission and measurement standards.
- IS 17387, Indian Standard for utility-interconnected photovoltaic inverters.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- Arrillaga J., Watson N. R., Power System Harmonics, John Wiley and Sons.
- NREL Technical Report TP-5D00-71341, Inverter Performance for High Penetration PV.
- IEA PVPS Task 14 publications on PV grid integration and power quality.
- Sandia National Laboratories Report SAND2014-0840, PV Inverter Modelling for Harmonic Analysis.
- Akagi H., Watanabe E. H., Aredes M., Instantaneous Power Theory and Applications to Power Conditioning, Wiley-IEEE Press.
