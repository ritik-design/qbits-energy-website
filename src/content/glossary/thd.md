---
term: "Total Harmonic Distortion (THD)"
title: "THD (Total Harmonic Distortion): Definition, Formula, Limits & Solar Inverter Applications"
description: "THD measures harmonic content in voltage or current. Full guide to formula, IEEE 519 limits, measurement and Indian solar inverter compliance."
category: "Power Quality"
categorySlug: "power-quality"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is thd
  - total harmonic distortion
  - thd formula
  - thd solar inverter
  - thd limit ieee 519
  - thd vs tdd
shortDefinition: "Total Harmonic Distortion (THD) is the ratio of the rms sum of harmonic components to the fundamental component in a voltage or current waveform, expressed as a percentage. It is the headline metric for power quality and inverter waveform fidelity."
quickFacts:
  industry: "Power Quality / Solar Inverter Specification"
  primaryUse: "Quantifying waveform distortion"
  commonUsers: "Power quality engineers, inverter designers, EPCs, utilities"
  relevantStandards: "IEEE 519, IEC 61000-4-7, IEC 61000-4-30, IS 17387"
  relatedTechnologies: "LCL filter, active filter, multilevel inverter, power quality analyser"
relatedTerms:
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "ieee-519", term: "IEEE 519" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "lcl-filter", term: "LCL Filter" }
  - { slug: "tdd", term: "Total Demand Distortion" }
  - { slug: "fundamental-frequency", term: "Fundamental Frequency" }
  - { slug: "power-quality", term: "Power Quality" }
  - { slug: "grid-code", term: "Grid Code" }
faqs:
  - q: "What is THD in simple words?"
    a: "A single number that tells you how distorted an AC waveform is. Zero percent means perfectly clean. Higher percent means more harmonic ripple riding on top of the fundamental."
  - q: "What is the formula for THD?"
    a: "THD = sqrt(sum of harmonic rms squared) divided by fundamental rms, expressed as a percentage. Calculated typically for harmonics 2 through 50."
  - q: "What is acceptable THD for a solar inverter?"
    a: "Less than 3 percent current THD at rated output. Modern inverters often achieve less than 2 percent."
  - q: "Is THD voltage or current?"
    a: "Both. Voltage THD applies to source-side voltage. Current THD applies to load-side current. Solar inverter datasheets quote current THD at the AC output."
  - q: "What is the difference between THD and TDD?"
    a: "THD divides by fundamental rms. TDD divides by maximum demand load current. TDD is more relevant for utility-scale compliance under IEEE 519."
  - q: "What is the IEEE 519 voltage THD limit?"
    a: "5 percent total, 3 percent individual harmonic for systems under 69 kV."
  - q: "How is THD measured?"
    a: "With a power quality analyser performing FFT on voltage and current waveforms. Per IEC 61000-4-7, 10-minute aggregation is standard."
  - q: "Does high THD damage equipment?"
    a: "Yes. Transformers and motors overheat. Capacitors fail. Sensitive electronics misbehave. Long-term ageing is the most common consequence."
  - q: "What is the THD of a square wave?"
    a: "Approximately 48 percent, dominated by the 3rd, 5th and 7th harmonics."
  - q: "Can THD be zero?"
    a: "Only for a perfect sine wave with no harmonics. Real waveforms always have some THD. Below 0.5 percent is considered essentially clean."
  - q: "Does THD vary with load?"
    a: "Yes. Inverter THD is usually lowest at rated load. At light load, THD can be much higher, sometimes 5 to 10 percent."
  - q: "What is the THD requirement under CEA Grid Code?"
    a: "CEA references IEEE 519 limits. Indian DISCOMs apply the same 5 percent voltage and 5 percent current TDD limits."
  - q: "Are individual harmonic limits stricter than overall THD?"
    a: "Often yes. IEEE 519 limits individual harmonics typically lower than 3 percent of fundamental even when total THD is 5 percent."
  - q: "How do inverters keep THD low?"
    a: "High switching frequency, LCL output filter, multilevel modulation, careful control loop design and well-tuned PWM."
  - q: "Is THD same as THD-F or THD-R?"
    a: "THD-F divides by fundamental. THD-R divides by total rms (including harmonics). Most engineering uses THD-F. Some instruments report THD-R."
author: "Keyur Rakholiya"
---

## What is THD

Total Harmonic Distortion (THD) is the ratio of the root-mean-square sum of all harmonic components in a waveform to the rms of the fundamental component, expressed as a percentage. It is the most widely used single number for waveform distortion in power systems.

THD applies to both voltage and current. For solar inverters, the headline figure is current THD at the AC output at rated power, typically less than 3 percent. For DISCOM compliance, the voltage THD at the point of common coupling is the metric, typically less than 5 percent under IEEE 519 for systems below 69 kV. See [THD in Solar Inverters, Why It Matters for Sensitive Loads](/blog/thd-solar-inverter/) for how LC filters, IGBT selection and PWM control keep output THD under 3 percent in practice.

A perfect sine wave has zero THD. A pure square wave has roughly 48 percent THD. Real-world distribution-grid voltage in India ranges from less than 1 percent in clean industrial zones to 5 or 6 percent in commercial and IT-heavy areas with high non-linear load.

## THD explained simply

Imagine a piano playing a single clean note. That is the fundamental, 50 Hz on the Indian grid. Now imagine the same piano playing the note plus several softer harmonics on top. The waveform is no longer a single tone. It is a richer, slightly muddy sound.

THD is one number that captures how muddy the sound is. Lower is cleaner. Higher is more distorted. For electrical power, distortion above a few percent starts causing real problems for sensitive equipment.

## Why THD matters

Equipment compatibility. Many electronic devices specify operation up to a certain voltage THD. Above that, they may overheat or misread the supply.

Standards compliance. CEA Grid Code, IEEE 519 and IEC 61000 all use THD as a primary compliance metric.

Inverter quality benchmark. The single most-quoted power quality number in solar inverter datasheets.

Measurement basis. Power analysers, billing meters and protection relays use THD to make decisions about supply quality and equipment behaviour.

Customer protection. Sensitive industrial customers stipulate THD limits in supply contracts.

## How THD is calculated

THD = sqrt((V2² + V3² + V4² + … + Vn²) / V1²) × 100%

Where Vn is the rms of the nth harmonic and V1 is the fundamental rms. Most calculations use harmonics 2 through 50.

For current:
THD_I = sqrt((I2² + I3² + … + In²) / I1²) × 100%

For TDD (Total Demand Distortion) used in IEEE 519:
TDD = sqrt((I2² + I3² + … + In²)) / I_L × 100%

Where I_L is the maximum demand load current over 12 months.

## Technical deep dive

### Measurement procedure

1. Sample voltage and current at high rate, typically 64 to 256 samples per fundamental cycle.
2. Apply windowing function, typically Hanning or rectangular for IEC 61000-4-7.
3. Perform FFT to extract harmonic magnitudes and phases.
4. Aggregate over 10 minutes per IEC 61000-4-30 class A.
5. Compute THD per the standard formula.
6. Report individual harmonic magnitudes if needed.

### Solar inverter THD profile

| Load | Typical current THD |
|---|---|
| 100% | 1.5 to 2.5% |
| 50% | 2.5 to 4.0% |
| 25% | 4.0 to 6.0% |
| 10% | 6.0 to 12.0% |

Low-load THD is higher because filter cutoff is fixed and switching ripple is a larger fraction of the small fundamental current.

### Voltage vs current THD

Voltage THD applies to the supply waveform. Current THD applies to load current. The two are related through grid impedance:

ΔV_h ≈ Z_h × I_h

Where Z_h is the grid impedance at harmonic frequency h.

### IEEE 519 limits at PCC

| System | Voltage individual | Voltage THD | Current TDD |
|---|---|---|---|
| <1 kV | 5% | 8% | varies with SCR |
| 1 to 69 kV | 3% | 5% | varies with SCR |
| 69 to 161 kV | 1.5% | 2.5% | varies with SCR |
| >161 kV | 1% | 1.5% | varies with SCR |

## Real-world applications

Solar inverter datasheet compliance.

DISCOM commissioning of large solar plants.

Industrial supply contracts requiring stipulated power quality.

Data centre power quality audits.

VFD installations requiring harmonic study.

EV charging station planning.

Hospital and laboratory clean-power requirements.

## Advantages of THD as a metric

Single number, easy to communicate.

Standardised globally.

Measurable with off-the-shelf power quality analysers.

Correlates well with equipment heating and ageing.

Maps directly to compliance limits.

## Limitations

Does not capture phase relationships among harmonics, only magnitudes.

Misses interharmonics (frequencies between integer multiples).

Hides which specific harmonic order is the problem.

Depends on the calculation window. Short windows can show high transient THD.

Low-load THD can mislead about typical operating-point distortion.

## Common problems

Inverter THD higher than spec at light load. Often a control loop tuning issue.

Grid voltage THD too high to allow inverter normal operation.

Resonance with site capacitor banks amplifies a specific harmonic, raising THD selectively. Indian agricultural and mixed industrial feeders are a common source of this problem; see [India Grid Solar Inverter Firmware, A Founder Engineering Guide](/blog/tuning-inverters-indian-grid/) for measured feeder THD levels and how PLL harmonic rejection keeps inverter output clean even when supply THD reaches 8-10 percent.

Measurement artefacts from low-quality CTs or PTs.

Triplen harmonic accumulation in neutral causing measurement saturation.

Reporting THD-R instead of THD-F or vice versa, leading to spec mismatch.

## Best practices

Specify THD at rated load AND at light load in inverter purchase orders.

Use class A power quality analysers per IEC 61000-4-30 for compliance measurements.

Conduct THD audit at commissioning of any plant above 100 kW.

Check for resonance before installing capacitor banks.

Document THD trends over preventive maintenance cycles. Rising trends signal filter or capacitor ageing.

Use 10-minute aggregated values for compliance, not instantaneous snapshots.

## Comparison: THD vs related metrics

| Metric | Definition | Use |
|---|---|---|
| THD-F | Harmonic rms / fundamental rms | Standard engineering |
| THD-R | Harmonic rms / total rms | Some instruments default |
| TDD | Harmonic rms / max demand current | IEEE 519 compliance |
| Interharmonic | Non-integer harmonics | Specialised analysis |
| Crest factor | Peak / rms | Different distortion lens |

## Indian market context

CEA Grid Code 2019 references IEEE 519 and IEC 61000 for THD limits. IS 17387 incorporates THD limits for inverter type tests.

ALMM-listed inverters meet THD below 3 percent at rated output. BIS certification under IS 17387 includes THD measurement.

DISCOM commissioning for plants above 100 kW typically includes a power quality audit covering voltage and current THD at the PCC.

State industrial power quality standards reference IEEE 519, with state-specific reactive and harmonic penalty schedules.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEEE 519-2014 | Harmonic control recommended practice |
| IEC 61000-4-7 | Measurement of harmonics |
| IEC 61000-4-30 | Power quality measurement methods |
| IEC 61000-3-2 / -3-6 | Emission limits |
| IS 17387 | Indian inverter standard |
| CEA Grid Code 2019 | Indian connectivity requirements |
| UL 1741 SA | US smart inverter standard |

## Common mistakes

Quoting THD only at rated load and ignoring light-load behaviour.

Confusing THD-F and THD-R.

Skipping individual harmonic limits, looking only at total THD.

Using instantaneous snapshots instead of 10-minute aggregates.

Comparing THD across different measurement standards.

Ignoring grid-side voltage THD when evaluating inverter behaviour.

Using poor-quality measurement instruments.

## Key takeaways

THD is the headline metric for waveform distortion. Modern solar inverters deliver less than 3 percent current THD at rated output, well within IEEE 519, IS 17387 and CEA Grid Code limits. Light-load THD is higher and should be checked at the design stage. Compliance measurements require class A power quality analysers and 10-minute aggregation.

## Need a power quality audit for your solar project?

QBits Energy provides power quality and harmonic measurement services for C&I and utility solar plants across India, supporting commissioning, compliance and troubleshooting.

## Sources

- IEEE Std 519-2014, Recommended Practice and Requirements for Harmonic Control in Electric Power Systems.
- IEC 61000-4-7:2008, Measurement of harmonics and interharmonics for power supply systems.
- IEC 61000-4-30:2015, Testing and measurement techniques: Power quality measurement methods.
- IS 17387, Indian Standard for utility-interconnected photovoltaic inverters.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- UL 1741 SA, Inverters, Converters, Controllers and Interconnection System Equipment for Use With Distributed Energy Resources.
- NREL Technical Report TP-5D00-78195, Solar PV Inverter Performance and Grid Integration.
- IEEE Power and Energy Society publications on harmonic measurement.
- Arrillaga J., Watson N. R., Power System Harmonics, Wiley.
