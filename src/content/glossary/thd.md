---
term: Total Harmonic Distortion (THD)
title: "THD (Total Harmonic Distortion): Definition, Formula, Limits & Solar Inverter Applications"
description: "THD measures harmonic content in voltage or current. Guide to formula, IEEE 519 limits, measurement and Indian solar inverter compliance."
category: Power Quality
categorySlug: power-quality
priority: P1
updatedDate: 2026-10-14
keywords:
- what is thd
- total harmonic distortion
- thd formula
- thd solar inverter
- thd vs tdd
shortDefinition: Total Harmonic Distortion (THD) is the RMS magnitude of the harmonic components of a voltage or current waveform divided by the RMS magnitude of its fundamental component, usually expressed as a percentage.
quickFacts:
  industry: Power quality and solar inverter specifications
  primaryUse: Describing waveform distortion under stated test conditions
  commonUsers: Engineers, EPCs and equipment buyers
  relevantStandards: IEEE 519-2014; IEC 61000-4-7; IEC 61000-4-30; CEA connectivity regulations
  relatedTechnologies: Inverter output filters, power-quality analysers and harmonics
relatedTerms:
- { slug: harmonics, term: Harmonics }
- { slug: power-factor, term: Power Factor }
- { slug: solar-inverter, term: Solar Inverter }
faqs:
- q: What is THD in simple terms?
  a: It describes how much of a voltage or current waveform is made of harmonics rather than its fundamental frequency. Lower is generally preferable when the same measurement conditions are used.
- q: What is the THD formula?
  a: THD equals the square root of the sum of squared RMS harmonic components, divided by the fundamental RMS component, multiplied by 100 percent. In symbols, THD = 100 × √(H₂² + H₃² + … + Hₙ²) ÷ H₁.
- q: Is THD the same as TDD?
  a: No. THD uses the fundamental component as its denominator; current TDD uses a defined maximum-demand reference. They should not be compared as interchangeable percentages.
- q: Does a datasheet THD figure apply at every load?
  a: Not necessarily. Check whether it is current or voltage THD and the load, power factor, measurement bandwidth and test conditions stated by the manufacturer. Current THD normally rises at light load because the fundamental current is small.
- q: Is THD a voltage or a current measure?
  a: It can be either. Voltage THD describes the supply waveform at a point and depends on grid impedance. Current THD describes the current drawn or injected by equipment. Inverter datasheets usually quote current THD at the AC output.
- q: What voltage THD limit does IEEE 519-2014 set?
  a: At the point of common coupling, Table 1 sets 8 percent THD and 5 percent for any single harmonic at 1 kV or below, and 5 percent THD with 3 percent for any single harmonic from above 1 kV to 69 kV. Higher voltage classes have tighter limits.
- q: Does IEEE 519 apply to a solar inverter by itself?
  a: IEEE 519 is a recommended practice for the point of common coupling between a user and the utility, not a product test for one inverter. Indian connectivity regulations refer to it for harmonic current injection, so the site-level result is what is judged.
- q: How is THD measured?
  a: With a power-quality analyser that samples the waveform, runs an FFT and reports harmonic magnitudes. IEC 61000-4-7 covers harmonic measurement and IEC 61000-4-30 covers power-quality measurement methods, including Class A instruments and 10-minute aggregation.
- q: What is the THD of a square wave?
  a: About 48 percent. The ideal square wave has odd harmonics only, with the third at one third and the fifth at one fifth of the fundamental amplitude, and the sum works out to √(π²/8 − 1), roughly 0.483.
- q: Can THD ever be zero?
  a: Only for a pure sine wave with no other frequency component. Real waveforms always carry some distortion, so the useful question is whether the figure is low enough for the standard or contract that applies.
- q: What is the difference between THD-F and THD-R?
  a: THD-F divides the harmonic RMS by the fundamental RMS. THD-R divides it by the total RMS value, so it can never exceed 100 percent. Instruments differ in which they default to, so confirm the definition before comparing numbers.
- q: Does high THD damage equipment?
  a: Harmonic currents add heating in transformers, cables and motors and can stress capacitors, so persistent high distortion shortens equipment life. The effect depends on the harmonic orders and the network, not on the THD percentage alone.
- q: Why can THD be high at low inverter output?
  a: Switching ripple and filter effects stay roughly fixed while the fundamental current falls, so the ratio rises. Many inverters therefore show a higher current THD at 10 to 20 percent load than at rated output.
- q: Can two inverters on one feeder cause a harmonic problem together?
  a: Yes. Harmonic currents from several sources add at the point of common coupling, and a capacitor bank can resonate with grid impedance at a particular harmonic order. That is why site-level measurement matters more than one datasheet figure.
- q: Where do I find the THD figure for a Qbits inverter?
  a: In that model's datasheet in the download library. For example, the QB-4.6/5/6KTLS datasheet lists THD below 3 percent under rated power and the QB 6 to 17KTLC datasheet lists below 2 percent. Quote only the figure printed for the exact model, with its load condition, and ask for the test report if a utility or engineer requires one.
author: Keyur Rakholiya
---

## What is THD?

**Total Harmonic Distortion (THD)** compares the combined RMS magnitude of harmonics with the RMS magnitude of the fundamental component in an electrical waveform. It can describe **voltage** or **current**. A solar-inverter datasheet commonly gives an AC-output **current THD** figure, but the load and test conditions matter.

A lower THD figure can indicate a cleaner waveform under the same measurement method. It is not a complete statement about grid compliance, equipment safety or performance at every output level.

A perfect sine wave has a THD of zero. An ideal square wave works out to about 48 percent, dominated by the 3rd, 5th and 7th [harmonics](/glossary/harmonics/). Real supply voltage and real inverter output sit between those extremes.

## THD explained simply

Think of a single clean musical note. On the Indian grid that note is the 50 Hz fundamental. Now add several faint, higher notes at 150 Hz, 250 Hz, 350 Hz and so on. Each one is a harmonic, an exact whole-number multiple of 50 Hz. The waveform is no longer a pure tone, and THD is the single number that says how large those extra tones are compared with the main one.

Harmonics are produced by non-linear loads and by switching electronics, including rectifiers, variable-speed drives, LED drivers and inverters. A [solar inverter](/glossary/solar-inverter/) produces its output by high-frequency switching and then filters it, so the remaining distortion depends on the filter, the control loop and the operating point.

## Formula and checked example

For harmonic components numbered 2 through *n*:

**THD (%) = 100 × √(H₂² + H₃² + … + Hₙ²) ÷ H₁**

Here each H is the RMS magnitude of that frequency component, and H₁ is the fundamental. The same form is used for voltage (V) and current (I). IEEE 519-2014 counts harmonic orders up to the 50th.

For an illustrative current waveform with a 100 A fundamental, a 3 A third harmonic and a 4 A fifth harmonic, the combined harmonic RMS is **√(3² + 4²) = 5 A**. THD for only those stated components is **5 ÷ 100 × 100 = 5%**. This is an arithmetic example, not a measured Qbits product value or a pass/fail limit.

A real analyser may include more harmonic orders and apply a specific aggregation method. Its reported value can therefore differ from a simplified hand calculation.

### Total demand distortion (TDD)

IEEE 519-2014 defines TDD as the RMS of the harmonic current content (orders up to 50, excluding interharmonics) divided by the **maximum demand load current** I_L, expressed as a percentage. Because I_L is a fixed reference rather than the current at the moment of measurement, TDD does not balloon at light load the way current THD can. It is the quantity IEEE 519 uses for current limits at the point of common coupling.

## Voltage THD, current THD and TDD

| Measure | Numerator | Denominator | Common use |
| --- | --- | --- | --- |
| Voltage THD | Voltage harmonics | Fundamental voltage | Describes voltage waveform distortion at a measurement point |
| Current THD | Current harmonics | Fundamental current at that operating point | Describes current distortion under the stated load |
| Current TDD | Current harmonics | Defined maximum demand load current | Helps assess harmonic impact against a demand reference |

A claim such as “THD <3%” is incomplete without identifying **what** was measured and **when**. At light load, the fundamental current is smaller, so current THD can change even when the harmonic current changes little. Ask for the test condition before comparing two inverter brochures.

Voltage and current distortion are linked through the network. A harmonic current *I_h* flowing through grid impedance *Z_h* at that harmonic frequency produces a harmonic voltage drop of roughly *Z_h × I_h*. A weak grid, with high impedance, turns the same inverter current into more voltage distortion than a strong grid does.

## THD-F and THD-R

Two definitions are in use. **THD-F** (also called THD of the fundamental) divides the harmonic RMS by the fundamental RMS, as above, and is the usual engineering and standards definition. **THD-R** divides by the total RMS value including harmonics, so it is capped at 100 percent. At low distortion the two are almost identical, but they diverge as distortion grows. Some instruments default to THD-R, so check the definition in the report before comparing numbers.

## How THD is measured

A compliance-grade measurement follows a defined chain.

1. Voltage and current are sampled at a high rate, over many samples per fundamental cycle.
2. A Fourier transform extracts the magnitude and phase of each harmonic. IEC 61000-4-7 sets out the measurement method for harmonics and interharmonics.
3. Values are aggregated over a defined interval. IEC 61000-4-30 describes power-quality measurement methods, including Class A instruments and a 10-minute aggregation interval for harmonics.
4. THD (or TDD) is computed and individual harmonic magnitudes are reported where needed.

A quick handheld snapshot is useful for troubleshooting but is not equivalent to a Class A, aggregated measurement for a compliance report.

## IEEE 519-2014 limits at the point of common coupling

IEEE 519-2014 is a recommended practice that sets limits at the point of common coupling (PCC), the point where the user connects to the utility. Voltage limits in Table 1 are:

| Bus voltage at PCC | Individual harmonic | Voltage THD |
| --- | --- | --- |
| 1 kV and below | 5.0% | 8.0% |
| Above 1 kV to 69 kV | 3.0% | 5.0% |
| Above 69 kV to 161 kV | 1.5% | 2.5% |
| Above 161 kV | 1.0% | 1.5% |

Current limits (Table 2, for 120 V to 69 kV systems) are expressed as a percentage of I_L and depend on the ratio of short-circuit current to load current (I_SC/I_L). The TDD limit rises from 5% for a ratio below 20 to 20% for a ratio above 1000. Table 2 also states that power-generation equipment is limited to the lowest-ratio values (5% TDD) regardless of the actual ratio. Even-order harmonic limits are 25% of the odd-order limits. Check the standard itself for the order-by-order limits.

## Reading an inverter specification

Check whether the figure covers rated output only, a range of loads, a stated power factor and a defined grid voltage. Also check the standard or procedure used for the measurement. A grid-connection decision should use the actual applicable utility and product documentation, not a single THD number copied from an article.

The [Qbits datasheet library](/download-datasheets/) is the starting point for a specific inverter model. As an example of per-model differences, the published technical data (checked October 2026) for the QB-4.6/5/6KTLS single-phase family lists THD below 3% under rated power, while the QB 6 to 17KTLC three-phase datasheet lists THD below 2% under rated power. Both also state DC current injection below 0.5% under rated power. Quote the figure for the exact model and its stated condition, and do not carry one family's number to another. For an engineering review, request the current model revision and its test report. If a site has a harmonic complaint, have a qualified person measure at the relevant point of connection; do not assume the inverter is the sole source when loads, transformers and other equipment share the network. The guide to [THD in solar inverters](/blog/thd-solar-inverter/) covers how output filters and control affect the figure in practice, and the [on-grid inverter range](/on-grid-inverter/) lists the Qbits models those datasheets belong to.

## Where THD figures are used

- **Inverter datasheets and type-test reports,** usually as current THD at rated output.
- **Grid-connection review,** where the utility checks harmonic injection at the PCC for larger plants.
- **Industrial supply contracts,** which can stipulate voltage THD limits at the incomer.
- **Power-quality audits** of factories, data centres, hospitals and laboratories with sensitive loads.
- **Harmonic studies** for variable-speed drives, EV charging stations and capacitor-bank installations.

## What THD does well, and where it falls short

THD is a single number that is easy to communicate, standardised and measurable with off-the-shelf analysers, and it correlates reasonably with equipment heating. Its limits are real, though. It reports magnitudes and says nothing about the phase relationship among harmonics. It does not capture interharmonics, which sit between whole-number multiples of the fundamental. It hides which harmonic order is the problem. It depends on the averaging window, so short windows can show transient spikes. And low-load current THD can mislead about the distortion at the typical operating point.

## Common problems on site

- **Higher THD at light load than at rated output,** which is normal behaviour and often not a fault.
- **High grid voltage THD** before the inverter is even connected, which the inverter cannot fix and which may affect its operation.
- **Resonance** between a site capacitor bank and the network, which amplifies one harmonic order. Agricultural and mixed industrial feeders with switched capacitors are a typical setting.
- **Measurement artefacts** from low-quality current or voltage transformers, or from comparing a THD-F figure with a THD-R figure.
- **Triplen harmonics** (3rd, 9th, 15th) adding in the neutral of a three-phase four-wire system.

## Practical steps

1. Ask for current THD at rated load **and** at light load when comparing inverter offers.
2. For compliance measurement, use a Class A analyser and aggregated values, not an instantaneous reading.
3. Check for resonance risk before adding or switching capacitor banks.
4. Log THD at maintenance visits. A rising trend can point to filter or capacitor ageing.

## THD compared with related metrics

| Metric | Definition | Typical use |
| --- | --- | --- |
| THD-F | Harmonic RMS ÷ fundamental RMS | Standard engineering and datasheets |
| THD-R | Harmonic RMS ÷ total RMS | Default on some instruments |
| TDD | Harmonic current RMS ÷ maximum demand current | IEEE 519 current limits at the PCC |
| Interharmonics | Components at non-integer multiples of the fundamental | Specialised analysis |
| Crest factor | Peak ÷ RMS | A different view of waveform shape |

## Indian context

India's central connectivity rules for distributed generation below 33 kV are the CEA technical standards (Technical Standards for Connectivity of the Distributed Generation Resources Regulations, 2013, as amended; the 2019 amendment inserted Regulation 11A). Regulation 11 says harmonic current injection from a generating station must not exceed the limits in IEEE 519, and that a distributed generating resource must not inject DC greater than 0.5% of its full rated output at the interconnection point. Regulation 11A says harmonic injection limits at the point of common coupling and the measurement method follow IEEE 519-2014, that harmonics are to be measured continuously with power-quality meters complying with IEC 61000-4-30 Class A, and that users connected at 11 kV or above install such meters. Harmonic current, DC injection and flicker are measured with calibrated meters before commissioning. Check the [CEA](/glossary/cea/) publication for the current text and for any newer amendment, and check your [DISCOM](/glossary/discom/)'s commissioning checklist, because states and utilities add their own procedures.

Be careful with a few claims that circulate. There is no single Indian inverter THD figure that every product is certified to, and a BIS or other certificate does not by itself state a THD value. IS 17387 is a standard for battery management systems, not a solar inverter THD standard. ALMM, which MNRE publishes for modules and cells, says nothing about inverter THD.

## Standards and references

| Standard or document | What it covers |
| --- | --- |
| IEEE Std 519-2014 | Recommended practice and requirements for harmonic control in electric power systems |
| IEC 61000-4-7 | Measurement of harmonics and interharmonics |
| IEC 61000-4-30 | Power-quality measurement methods |
| IEC 61000-3-2, 61000-3-12 | Emission limits for equipment connected to public low-voltage networks |
| CEA Technical Standards for Connectivity of the Distributed Generation Resources Regulations, 2013 (as amended, including Regulation 11A) | Indian connectivity requirements below 33 kV: harmonics per IEEE 519, DC injection, flicker, Class A power-quality metering |

Sources: [IEEE 519-2014 summary of limits](https://www.mirusinternational.com/downloads/White%20Paper%20-%20IEEE%20Std%20519-2014%20Harmonic%20Limits.pdf); [CEA regulations on connectivity of distributed generation resources](https://cea.nic.in/regulations-category/connectivity-of-distributed-generation-resources/?lang=en). Checked 14 October 2026.

## Common mistakes

- Quoting THD only at rated load and ignoring light-load behaviour.
- Mixing up THD-F and THD-R.
- Looking only at total THD and skipping the individual harmonic limits.
- Using an instantaneous snapshot where an aggregated Class A measurement is required.
- Comparing THD figures taken under different test conditions or standards.
- Ignoring grid-side voltage THD when judging inverter behaviour.

## Key takeaways

THD is the headline metric for waveform distortion, but it only means something when the quantity (voltage or current), the load point and the method are stated. Standards judge harmonics at the point of common coupling, mostly through TDD for current and voltage THD for the supply. Light-load current THD is usually higher and should be checked at design stage. Related terms to read next: [power factor](/glossary/power-factor/), [performance ratio](/glossary/pr/) and the safety scope of [IEC 62109](/glossary/iec-62109/).
