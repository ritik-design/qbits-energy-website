---
title: "THD in Solar Inverters — Why It Matters for Sensitive Loads"
excerpt: "THD in an inverter is the percentage of non-fundamental harmonic content in its AC output. High THD damages motors, trips VFDs, faults UPS systems, and disqualifies inverters from hospital and data centre projects."
description: "What is THD in an inverter, why IEEE 519 caps it at 5% VTHD at PCC and 3% for sensitive loads, and how Qbits inverters achieve <3% THD using LC filters, IGBT selection and PWM control."
category: "Technology"
date: 2026-06-05
readTime: "16 min"
image: "/blog-images/solar-inverter-specifications-decoded.svg"
author: "Qbits Editorial"
keywords:
  - what is thd in inverter
  - total harmonic distortion solar inverter
  - inverter thd limits ieee 519
  - thd sensitive loads hospital data centre
  - solar inverter power quality india
faqs:
  - q: "What is THD in an inverter?"
    a: "THD (Total Harmonic Distortion) is the ratio of the root-mean-square sum of all harmonic components in an inverter's AC output to the rms of the fundamental 50 Hz component, expressed as a percentage. A Qbits solar inverter delivers less than 3% current THD at rated output, which is within IEEE 519-2014, IS 17387, and CEA Grid Code limits. Values above 5% indicate poor waveform quality that can damage sensitive equipment and trigger DISCOM non-compliance penalties."
  - q: "What is the acceptable THD limit for a solar inverter in India?"
    a: "IS 17387 and the CEA Grid Code (which references IEEE 519) require current THD below 5% at the point of common coupling for most systems. For hospital, data centre, and precision manufacturing applications, the effective design target is below 3% current THD at rated load. Individual harmonic orders must also stay within their own sub-limits: no single harmonic component above 3% of the fundamental for systems connected below 69 kV. All ALMM-listed inverters in India must demonstrate compliance at commissioning."
  - q: "Does high THD damage equipment?"
    a: "Yes. Elevated THD causes transformer core and winding overheating through eddy current losses, motor vibration and acoustic noise, premature capacitor failure in power factor correction banks, nuisance tripping of VFDs and UPS units that use the AC supply as a voltage reference, metering errors in older energy meters, and progressive ageing of sensitive electronics exposed to distorted supply. The damage is cumulative and often not apparent until equipment fails prematurely. A sustained VTHD above 8% at the load terminals is considered a severe distortion event under IEC 61000-4-30."
  - q: "What is the difference between VTHD and ITHD?"
    a: "VTHD (Voltage THD) measures distortion in the voltage waveform at a given point on the network — typically at the point of common coupling (PCC). ITHD (Current THD) measures harmonic content in the current drawn or injected by a device — typically the inverter AC output current. Inverter datasheets quote ITHD at rated load. DISCOM compliance uses VTHD at PCC. The two are related through grid impedance: higher ITHD from multiple inverters on a feeder raises the VTHD that every connected load experiences."
  - q: "Why is THD higher at light load?"
    a: "LC output filters in solar inverters are designed with a fixed cutoff frequency tuned for rated-load conditions. At light load, the fundamental current is small while switching-frequency ripple currents remain relatively large. The ratio of ripple to fundamental therefore rises, increasing measured ITHD. A typical inverter may show 2% ITHD at 100% load and 8–12% ITHD at 10% load. This is why procurement specifications for sensitive-load projects should state THD requirements at both rated and partial load conditions, not only at 100%."
  - q: "How do solar inverters minimise THD?"
    a: "Modern grid-tied solar inverters control THD through four mechanisms: high switching frequencies (16–50 kHz) that push harmonic energy far above the grid frequency; LCL output filters (inductor-capacitor-inductor) that attenuate switching ripple before it reaches the grid; high-quality IGBT modules with precise gate-drive control that minimise dead-time distortion; and digital control loops with feedforward compensation that cancel low-order harmonic components in real time. Premium inverters combine all four. Budget designs often compromise on filter inductance to cut cost, resulting in higher real-world THD than the datasheet value."
  - q: "What happens when THD is too high at a hospital or data centre?"
    a: "At a hospital, distorted supply voltage can interfere with medical imaging equipment calibration, cause ground-fault interrupters to nuisance-trip, and degrade battery chargers on life-support UPS units. At a data centre, UPS systems that derive their transfer threshold from the AC waveform may make unnecessary transfers to battery, shortening battery life and increasing apparent power demand. Server power supplies with tight PFC circuits can overheat. In both cases, the facility operator may invoke supply-quality clauses in the building procurement contract, creating contractual liability for the EPC."
  - q: "Does Qbits specify THD in its inverter datasheets?"
    a: "Yes. Qbits inverters achieve less than 3% current THD at rated output, verified at the factory as part of the BIS and IEC certification test protocol. This figure applies to the full TLS, TLD, HS, and HT series. EPCs can request test reports with individual harmonic measurements during procurement. For C&I projects with sensitive loads, the Qbits engineering team will provide site-specific THD assessments at commissioning using class A power quality analysers per IEC 61000-4-30."
  - q: "How is THD measured on a solar project?"
    a: "THD is measured with a class A power quality analyser connected at the inverter AC terminals or at the point of common coupling. The analyser samples voltage and current at high rate (typically 64–256 samples per cycle), applies FFT, and computes harmonic magnitudes. IEC 61000-4-30 requires 10-minute aggregated values for compliance reporting. Instantaneous snapshots are suitable for troubleshooting only. For plants above 100 kW, DISCOM commissioning protocols in most Indian states include a mandatory power quality audit that covers both VTHD and ITHD."
  - q: "Can two inverters on the same feeder worsen THD?"
    a: "Yes, through two mechanisms. First, harmonic currents from multiple inverters can add constructively if they are in phase — which happens when all units run identical PWM algorithms. Modern inverters use phase-shifted carrier waves to partially cancel interleaved harmonics, but this requires coordinated configuration. Second, multiple inverter outputs flowing through shared feeder impedance convert current harmonics to voltage harmonics that every load on the feeder sees. Site designers should conduct a harmonic penetration study for any installation with more than five inverters on a single distribution feeder."
---

Solar projects in hospitals, data centres, pharmaceutical facilities, and precision manufacturing plants face a procurement question that goes beyond panel count and kWp: what is the THD specification of the inverter under evaluation, and does it meet the distortion limits that apply to sensitive loads?

The question matters because every switching inverter injects harmonic currents into the AC grid as a side effect of its DC-to-AC conversion process. When those harmonics are controlled correctly, the inverter operates within IEEE 519 and IS 17387 limits and is invisible to connected equipment. When they are not — due to weak filters, low-quality IGBTs, or inadequate control design — the result is waveform distortion that causes equipment overheating, VFD trips, UPS faults, and, in extreme cases, medical device calibration errors.

This guide covers what THD is, why solar inverters generate it, what the applicable standards require, how to read THD data on a datasheet, and what design and procurement decisions determine whether a project stays within limits.

> **Direct answer.** THD in an inverter is the percentage of harmonic content in its AC output relative to the 50 Hz fundamental. IEEE 519-2014 caps voltage THD at 5% at the point of common coupling for systems below 69 kV; IEC 61000 and IS 17387 require current THD below 3% at rated output. Qbits inverters achieve less than 3% current THD across the TLS, TLD, HS, and HT series. Above these limits, motors overheat, VFDs trip, UPS systems fault, and medical equipment malfunctions.

The [glossary definition of THD](/glossary/thd/) provides the full formula and measurement methodology. The sections below build on that foundation with the procurement and design decisions that determine real-world compliance.

## What Harmonics Are and Why Inverters Produce Them

An ideal 50 Hz AC grid delivers a perfect sine wave. Every connected device is designed for that sine wave. [Harmonics](/glossary/harmonics/) are integer-multiple frequency components that sit on top of the fundamental — the 3rd harmonic at 150 Hz, the 5th at 250 Hz, the 7th at 350 Hz, and so on. Any device that draws or injects non-sinusoidal current introduces harmonics.

Solar inverters produce harmonics as a direct consequence of their operating principle. A string inverter takes DC from the solar array and uses high-speed semiconductor switches (IGBTs) to synthesise an AC waveform. The switching process — called Pulse Width Modulation (PWM) — happens at 16 to 50 kHz. At that frequency, the switching events create small ripple currents at the switching frequency and its sidebands. Without filtering, those ripple currents would appear as high-frequency harmonics at the inverter output.

Lower-order harmonics (3rd, 5th, 7th) also appear from control imperfections. PWM dead-time, IGBT non-linearity, and current measurement offsets all introduce small asymmetries that appear as 3rd, 5th, and 7th harmonic content in the output current. These lower-order harmonics are more problematic than high-frequency switching ripple because they fall within the range where equipment is sensitive and where IEEE 519 imposes the strictest individual harmonic limits.

The THD figure on an inverter datasheet is the root-mean-square combination of all harmonic components, divided by the fundamental, expressed as a percentage:

**THD = √(I₂² + I₃² + I₄² + … + Iₙ²) / I₁ × 100%**

Where I₁ is the fundamental current and Iₙ is the current at the nth harmonic.

### What the 3% Threshold Means in Practice

A current THD of 3% at rated load — the figure Qbits inverters achieve — means the combined rms of all harmonic components is 3% of the fundamental current. For a 10 kW inverter at 230 V single-phase, that is roughly 43 A fundamental current and 1.3 A total harmonic current. The harmonic power drawn from the grid is tiny. The problem is not the power — it is the distortion of the voltage waveform that the harmonic current creates when it flows through grid impedance. That voltage distortion affects every other device on the same feeder.

## IEEE 519 and IEC 61000 THD Limits Explained

IEEE 519-2014, IEC 61000-3-6, and India's IS 17387 form the three-layer framework that governs inverter THD compliance in Indian solar projects.

The table below summarises the voltage THD limits at the point of common coupling (PCC) under IEEE 519-2014, which is the standard cited in the CEA Grid Code 2019:

| System voltage | Individual harmonic limit | Total VTHD limit |
| --- | --- | --- |
| Below 1 kV | 5% | 8% |
| 1 kV to 69 kV | 3% | 5% |
| 69 kV to 161 kV | 1.5% | 2.5% |
| Above 161 kV | 1% | 1.5% |

Most Indian solar projects connect at LT (415 V) or HT (11 kV / 33 kV). The relevant limit for LT connections is 8% VTHD total and 5% per individual harmonic at the PCC. For HT connections above 1 kV, the limit is 5% total and 3% per individual harmonic — substantially stricter.

Current THD (ITHD) limits under IEEE 519 depend on the short-circuit ratio (SCR) at the PCC — the ratio of available short-circuit current to the maximum demand load current. The lower the SCR, the stricter the current limits because the grid impedance is higher and harmonic currents cause proportionally larger voltage distortion. For most rooftop and C&I solar connections in India, the SCR falls in the 20–50 range, which permits up to 8% total demand distortion (TDD) but requires individual harmonics below 7% for 3rd through 10th harmonic.

> **< 3%.** The current THD that Qbits solar inverters achieve at rated output — verified under IS 17387 and IEC certification test protocols, and reported in individual harmonic test reports available on request. *Source — [IS 17387, Bureau of Indian Standards](https://www.bis.gov.in/), 2026.*

IEC 61000-3-6 governs the current emission limits for medium-voltage (MV) connected equipment and is referenced for C&I plants above 630 kW. [IEC 61000-4-30](https://www.iec.ch/homepage) defines class A measurement methodology — the 10-minute aggregation protocol that DISCOMs require for compliance audits. The [IEEE 519-2014 standard](https://www.ieee.org/standards/) remains the primary reference for harmonic control at the point of common coupling across Indian utility-interconnected solar projects.

### The Medical and Critical Infrastructure Exception

For hospital operating theatres, ICUs, radiology suites, data centre critical power zones, and pharmaceutical cleanrooms, the effective design target is stricter than the IEEE 519 general limit. [IEC 60601-1](https://www.iec.ch/homepage) (medical electrical equipment) requires that supply voltage THD not exceed 3% for the equipment to operate within specification. Building facilities standards for tier-III and tier-IV data centres recommend supply VTHD below 3% to ensure UPS bypass transfer criteria are met without nuisance transfers. Precision measurement laboratories often specify 1–2% VTHD in supply contracts.

The EPC specifying an inverter for these projects must therefore work backwards: if the facility contract requires 3% VTHD, and the distribution network already carries 1.5–2% background distortion, the inverter's ITHD contribution — converted through grid impedance — must stay within the remaining headroom. This is why the procurement specification must state current THD requirements at multiple load points, not only at 100% rated output.

## What Happens When THD Is Too High — Equipment-Level Consequences

Understanding the failure modes caused by elevated THD is the strongest argument for specifying compliant inverters on C&I projects. The effects are not theoretical — they appear in maintenance logs, warranty claims, and energy audit reports at facilities that installed budget inverters without verifying THD specifications. [NREL research on inverter performance and grid integration](https://www.nrel.gov/solar/grid-connected-pv.html) documents the range of harmonic-related field issues across large solar deployments.

### Motors and Drives

Harmonic currents flowing in an induction motor produce additional rotating magnetic fields at harmonic frequencies. These fields produce torques that oppose the fundamental-frequency torque (braking at 5th and 11th harmonics) and add to it in unhelpful directions (at 7th and 13th). The net effect is:

- **Increased copper losses** from harmonic currents in stator and rotor windings — a 5% ITHD environment can increase motor losses by 3–6%.
- **Increased iron losses** from eddy currents at harmonic frequencies — proportional to the square of frequency, so a 250 Hz (5th harmonic) component causes 25× more eddy current loss per unit current than the 50 Hz fundamental.
- **Vibration and acoustic noise** at harmonic frequencies — noticeable as a hum at multiples of 50 Hz.
- **Shortened insulation life** from the combination of thermal stress and voltage spikes.

Variable Frequency Drives (VFDs) are particularly sensitive because their input rectifiers use the AC voltage zero-crossing as a timing reference. When voltage THD distorts the zero-crossing — a phenomenon called zero-crossing jitter — the VFD control loop can misfire, causing spurious overcurrent trips that shut down the process line.

### UPS Systems and Critical Power

Modern online double-conversion UPS units use the incoming AC supply as a phase reference for their output inverter during bypass mode. When VTHD is high, the UPS bypass transfer algorithm — designed to transfer the load to the raw mains when the UPS inverter fails — may hold on battery unnecessarily or transfer at a distorted waveform. Both outcomes are problematic. Hospitals and data centres that experience unexplained UPS battery cycling often find elevated VTHD from a newly commissioned solar plant as the root cause.

Static transfer switches (STS) used in data centre dual-bus architectures have similar sensitivity. Some STS models specify maximum VTHD of 5% for guaranteed transfer performance. Above that, transfer time — nominally under 4 milliseconds — can extend unpredictably.

### Capacitor Banks and Power Factor Correction Equipment

[Power factor](/glossary/power-factor/) correction capacitor banks are particularly vulnerable. Capacitors have impedance that decreases with frequency (Xc = 1 / 2πfC). At the 5th harmonic (250 Hz), a capacitor draws five times the current relative to the fundamental for the same voltage. In a distorted supply environment, capacitors act as harmonic sinks, drawing large harmonic currents that cause overheating, dielectric breakdown, and early failure — sometimes within months of installation rather than the expected 10-year service life.

Worse, the combination of capacitor bank inductance and capacitance can create a resonant circuit tuned near a harmonic frequency, causing amplification of that harmonic across the entire site. This resonance effect can raise individual harmonic voltages well above the IEEE 519 limits even when the inverter itself is fully compliant.

## How to Read THD Specifications on an Inverter Datasheet

Inverter datasheets present THD in several forms, and misreading the specification is a common procurement error that experienced EPCs learn to avoid.

### VTHD vs ITHD: Which Figure to Look For

**Current THD (ITHD)** is what the inverter injects into the grid. This is the figure you will find in the inverter datasheet, typically stated as a percentage at rated output at unity power factor. The Qbits TLS and TLD on-grid series, and the HS and HT hybrid series, all specify less than 3% ITHD at rated output.

**Voltage THD (VTHD)** is what the connected loads experience. VTHD at the PCC depends on both the inverter's ITHD and the grid impedance — it is not a fixed property of the inverter alone. The DISCOM compliance requirement is stated as VTHD at the PCC.

The comparison table below clarifies the two metrics for procurement:

| Metric | What it measures | Where it appears | Typical limit |
| --- | --- | --- | --- |
| ITHD (current THD) | Harmonic content in inverter output current | Inverter datasheet | < 3% at rated load |
| VTHD at PCC | Voltage distortion at connection point | DISCOM audit report | < 5% (LT) / < 5% (HT under 69 kV) |
| TDD (Total Demand Distortion) | Like ITHD but normalised to max demand | IEEE 519 compliance | 5–12% depending on SCR |
| Individual harmonic | Single harmonic order magnitude | Both datasheet and audit | < 3% (HT) per order |

### Load-Point Dependency — The Specification Trap

The most consequential thing missing from many datasheet comparisons is the THD behaviour at partial load. Datasheets state THD at rated output (100%). But solar arrays operate at partial output for the majority of daylight hours — particularly in the morning, evening, and on overcast days. At 25% output, a typical inverter may show 6–10% ITHD. At 10% output, 10–15% is common.

For a hospital that operates 24 hours but has low overnight demand, the solar array may spend its mornings and evenings exporting at 20–30% output. If the inverter ITHD at those operating points exceeds 5%, the supply quality in those hours is poor — even though the inverter was specified as a compliant unit based on the 100% rated-load THD figure.

Procurement specifications for sensitive-load projects should therefore explicitly state:

- ITHD ≤ 3% at 100% rated output
- ITHD ≤ 5% at 25% rated output
- ITHD ≤ 8% at 10% rated output

And request test data at all three load points from the manufacturer before purchase order placement.

## The 5-Stage THD Control Method: How Quality Inverters Minimise Distortion

Inverter manufacturers use a combination of hardware and software techniques to keep THD within limits. Understanding these stages helps EPCs assess whether a low-price inverter is cutting corners that will appear as field problems.

### The 5-Stage THD Control Method

1. **High switching frequency** — Operating the IGBT switches at 16–50 kHz pushes the fundamental switching harmonic far above the range where IEEE 519 and IEC 61000 impose strict limits. A 16 kHz switching frequency means the dominant ripple component is at the 320th harmonic (16,000 / 50), which is well above the range of concern. Lower switching frequencies (8 kHz and below) bring switching harmonics into the 100–200 Hz range, requiring heavier filters.

2. **LCL output filter** — The inductor-capacitor-inductor (LCL) filter at the inverter AC output provides three-pole roll-off above the corner frequency. A well-designed LCL filter attenuates switching ripple by 60–80 dB at the switching frequency. The capacitor in the middle also creates a resonant peak, so damping resistors or active damping in the control loop are required to prevent filter resonance from amplifying specific harmonic orders.

3. **IGBT quality and gate drive precision** — High-quality IGBT modules from established manufacturers (Infineon, Mitsubishi, Fuji, ON Semiconductor) have tighter switching characteristics than generic modules. Dead-time distortion — the brief interval when both switches in a half-bridge are off to prevent shoot-through — is the dominant source of low-order harmonic content. Precision gate drivers that minimise dead time and compensate for IGBT on-state voltage drops reduce 3rd and 5th harmonic content substantially.

4. **Feedforward harmonic compensation** — The digital control loop in a modern inverter samples output current at high frequency and uses a feedforward compensator to inject an opposing signal that cancels predicted harmonic components before they appear at the output. This is effective for low-order harmonics (3rd, 5th, 7th) that arise from dead-time and IGBT non-linearity. The technique requires sufficient computational resources in the DSP — a constraint that budget inverters sometimes compromise on.

5. **Interleaved carrier phase shift** — In multi-string inverters with parallel power stages, phase-shifting the PWM carrier wave between stages causes partial harmonic cancellation at the output. The 5th harmonic from one stage cancels the 5th from the adjacent stage if the carrier phases are offset correctly. This is standard practice in Qbits multi-string designs and allows achieving lower effective THD at the AC output than any individual stage would produce.

## THD by Application: Hospitals, Data Centres, and Precision Manufacturing

The THD requirements are not uniform across C&I applications. The table below maps application type to the effective THD design target and the consequences of non-compliance:

| Application | Effective VTHD target | Sensitive equipment | Consequence of exceedance |
| --- | --- | --- | --- |
| Hospital OT / ICU | ≤ 3% | Life support, imaging, monitors | Device malfunction, ground fault trips |
| Data centre (Tier III+) | ≤ 3% | UPS bypass, STS, server PSUs | UPS battery cycling, extended transfer time |
| Pharmaceutical cleanroom | ≤ 3% | HVAC VFDs, isolators, centrifuges | VFD overcurrent trips, batch failures |
| Precision manufacturing | ≤ 3–5% | CNC controllers, servo drives | Servo tracking error, scrap rates |
| General commercial | ≤ 5% | Chillers, lifts, office IT | Reduced equipment life, metering drift |
| General industrial | ≤ 5–8% | Motors, compressors, welders | Increased losses, reduced motor life |

### Hospital Projects: The Mandatory Checklist

For hospital solar installations, the EPC must verify three THD-related items before the inverter specification is finalised:

- **Inverter ITHD at rated and partial load** — request test reports, not just datasheet figures.
- **Background VTHD at the PCC** — measure existing grid distortion before the solar plant energises. If background distortion is already 2.5%, the inverter headroom is only 0.5% VTHD additional before hitting the 3% design target.
- **Isolation from critical circuits** — the solar feeder should be separated from the critical power distribution panel by an isolation transformer if the feeder VTHD cannot be guaranteed below 3%. The transformer provides galvanic isolation and acts as a harmonic barrier.

Refer to the [solar inverter certifications guide](/blog/solar-inverter-certifications/) for the complete list of standards verification steps that apply to hospital and healthcare projects.

### Data Centre Projects: UPS Coordination

Data centre solar projects require coordination between the inverter design and the UPS transfer algorithm. Before commissioning:

- Confirm with the UPS manufacturer the maximum VTHD at which bypass transfer performance is guaranteed.
- Confirm the inverter's contribution to VTHD at the switchboard, accounting for feeder impedance.
- Test bypass transfer at actual VTHD levels during commissioning, not just at clean-grid conditions.

The [solar inverter vs UPS comparison](/blog/solar-inverter-vs-ups/) covers the architectural differences that determine where harmonic injection affects critical load paths.

## Common THD Mistakes EPCs Make on C&I Projects

Field failures from THD non-compliance follow predictable patterns. These are the five mistakes most frequently seen in Indian C&I solar projects:

- **Specifying THD only at 100% rated load** — The datasheet figure looks compliant, but partial-load distortion causes problems during morning and evening export hours. Always request THD data at 25% and 50% load in addition to 100%.

- **Ignoring background VTHD before installation** — Industrial feeders in India often carry 3–5% background VTHD from VFDs, arc furnaces, and rectifier loads. Adding a solar inverter on top can push the PCC above the IEEE 519 limit. A pre-installation power quality audit prevents this.

- **Installing capacitor banks without resonance analysis** — Fixed capacitor banks are common at Indian industrial sites for [reactive power compensation](/glossary/reactive-power/). Adding a solar inverter on the same feeder can create an LC resonant circuit that amplifies a specific harmonic order. A simple resonance check before commissioning prevents capacitor failures.

- **Accepting generic THD figures in purchase orders** — Phrases like "THD within limits" or "THD per standards" without specifying the measurement conditions allow suppliers to meet the letter of the specification while delivering marginal performance. The purchase order must state ITHD ≤ 3% at rated output, measurement per IEC 61000-4-30 class A.

- **Skipping the commissioning harmonic audit** — DISCOM protocols for C&I connections above 100 kW include power quality verification. An in-house audit before the DISCOM audit catches problems while they are still the installer's responsibility rather than a post-handover defect. See the [solar inverter commissioning guide](/blog/solar-inverter-commissioning-in-india/) for the full commissioning checklist.

For a deeper examination of what separates premium from problematic inverter components — including filter capacitor quality and IGBT selection — see [solar inverter components: 7 critical parts to inspect](/blog/solar-inverter-components/).

## Evaluating Inverter THD Specifications: A Comparison Framework

### The 4-Point THD Procurement Scorecard

Before a purchase order is placed on a C&I project with sensitive loads, evaluate every candidate inverter against these four dimensions:

1. **Rated-load ITHD with test evidence** — The datasheet figure is a starting point; the factory test report is proof. Ask for individual harmonic magnitudes (3rd through 25th) as part of the BIS/IEC certification test data. A compliant inverter will have this documentation available within two business days of request.

2. **Partial-load ITHD curve** — Request a graph or table of ITHD vs output percentage from 10% to 100%. Inverters that refuse to share this data are usually hiding elevated partial-load distortion. The acceptable partial-load profile for sensitive-load projects: ITHD ≤ 5% at 25% load, ≤ 8% at 10% load.

3. **Filter design specifics** — Ask whether the output filter is L, LC, or LCL topology. LCL is the minimum acceptable for below-3% THD targets. Ask for the filter resonant frequency and confirm it is not close to a major harmonic order (150 Hz, 250 Hz, 350 Hz). Filters resonant near a harmonic order can amplify rather than attenuate that harmonic.

4. **IGBT manufacturer and grade** — Premium-grade IGBTs (Infineon, Mitsubishi, Fuji) have tighter switching loss and delay specifications that translate directly to lower dead-time distortion and lower 3rd/5th harmonic content. Generic IGBT modules save cost at the component level but impose it at the harmonic performance level.

| Criterion | Premium compliance | Marginal | Non-compliant |
| --- | --- | --- | --- |
| ITHD at 100% load | < 2% with test report | < 3% datasheet only | > 3% or no data |
| ITHD at 25% load | < 4% with test data | < 5% datasheet claim | > 5% or no data |
| Filter topology | LCL with active damping | LCL basic | LC or L only |
| IGBT source | Tier-1 manufacturer | Named manufacturer | Generic / unstated |
| Individual harmonic data | Available per order | On request, delayed | Not available |

## Where Qbits Fits for Power-Quality-Sensitive Projects

C&I buyers at hospitals, data centres, and precision manufacturing plants need an inverter that proves its harmonic performance with documentation — not just a low price and a datasheet claim. Qbits inverters achieve less than 3% current THD at rated output across the TLS, TLD, HS, and HT series, backed by BIS certification test reports and factory-level individual harmonic data available on request. The India-grid-tuned firmware handles the 180–270 V voltage variations that Indian distribution feeders exhibit without compromising harmonic control — a critical detail for sites where grid quality is already marginal.

For EPC teams specifying inverters on sensitive-load projects:

- **[On-Grid Inverters (TLS / TLD series)](/on-grid-inverter/)** — 1.5 kW to 100 kW, LCL-filtered, less than 3% ITHD, ALMM-listed, BIS/IEC certified. Suitable for hospital, school, and commercial rooftop projects where power quality compliance is a contractual requirement.
- **[Hybrid Inverters (HS / HT series)](/hybrid-inverter/)** — Battery-ready with seamless backup switchover. Less than 3% ITHD at rated output, making them appropriate for data centre edge deployments and hospital UPS integration where solar + storage topology is specified.
- **[Download datasheets](/download-datasheets/)** — Full harmonic specifications, individual harmonic test data, and BIS / IEC certification references are included in the technical datasheet package for all current series.

When you are ready to evaluate THD performance against a specific project specification — including background VTHD at the site and load-point requirements — the Qbits engineering team provides site-specific harmonic assessments at no cost for projects above 50 kW. [Contact the team](/contact-us/) with the site address and single-line diagram to get started.

## THD Across Inverter Technologies: String, Central, and Hybrid

Different inverter topologies produce different THD profiles due to their power stage architecture.

### String Inverters

String inverters — the standard choice for rooftop solar up to 100 kW in India — use a two-level or three-level H-bridge topology. Two-level designs have inherently higher switching harmonics for a given switching frequency and require heavier filters to achieve below-3% THD. Three-level neutral-point-clamped (NPC) designs switch at effectively double the fundamental switching frequency, producing lower harmonic amplitudes with lighter filters. Premium string inverters from established manufacturers use NPC or T-type three-level topologies. The Qbits TLS and TLD series use three-level switching for this reason.

### Central Inverters

Central inverters used for MW-scale ground-mount projects use multilevel or multi-parallel topologies with interleaved PWM carriers. The harmonic cancellation from interleaving multiple parallel stages means central inverters typically achieve below-2% ITHD at rated output — lower than most string inverters. This is one reason utility-scale and large C&I plants (above 500 kW) often use central inverter architecture even where string inverters could technically be used.

### Hybrid Inverters

Hybrid inverters add a bidirectional DC-DC converter between the battery and the DC bus, introducing an additional switching stage. If the battery stage and the grid-tie stage are not synchronised in their PWM timing, the beat frequencies between the two switching clocks can produce interharmonics — non-integer-multiple frequency components — that standard THD measurement may not fully capture. Quality hybrid inverters synchronise their switching clocks or use separate filtering stages to prevent battery-side switching from appearing at the AC output. Verify this in the datasheet by checking whether interharmonic content is specified alongside THD.

The [solar inverter specifications decoded guide](/blog/solar-inverter-specifications-decoded/) covers all 15 key datasheet parameters including THD in the context of full specification evaluation.

## Maintaining THD Compliance Over Time

THD is not only a commissioning metric. It is a system health indicator that changes over the inverter's service life.

Filter capacitors age. The capacitance in an LCL filter decreases as the capacitor dielectric degrades — typically by 10–20% over ten years in 40–45 °C ambient conditions, which are common on Indian industrial rooftops. As capacitance falls, the filter resonant frequency shifts and attenuation at the original design frequency decreases. THD rises. A preventive maintenance schedule that includes biannual THD measurement at the AC terminals — part of the [inverter maintenance regime for Indian conditions](/blog/inverter-maintenance-india/) — catches this drift before it becomes a compliance problem.

IGBT gate oxide also ages under thermal cycling. Gate threshold voltage shifts cause subtle changes in switching timing that increase dead-time distortion and raise 3rd harmonic content. The firmware-based harmonic compensation in modern inverters adjusts for this to some extent, but the adjustment range is finite. An ITHD trend that rises more than 0.5% per year above the commissioning baseline is a signal to investigate filter condition and IGBT performance.

> **Approximately 20%.** The increase in filter capacitor current stress that a 5% VTHD supply environment causes compared to a clean 2% VTHD supply — shortening capacitor life from the design target of 10 years to approximately 6–7 years in high-THD sites. *Source — [IEC 61000-4-30 Technical Guidance, International Electrotechnical Commission](https://www.iec.ch/), 2025.*

For a complete understanding of how harmonic compliance fits within the broader framework of [inverter reliability evaluation](/blog/how-to-evaluate-solar-inverter-reliability/), the linked guide covers all five reliability dimensions that C&I buyers should assess before finalising a specification.

## THD in the Context of Indian Grid Conditions

Indian distribution feeders present a distinctive harmonic environment that European and US inverter specifications may not anticipate. [IRENA's analysis of distributed solar integration](https://www.irena.org/solar) highlights harmonic management as one of the key technical challenges for high-penetration rooftop solar in developing-market grids. Several factors increase the India-specific challenge:

- **High non-linear load density** — Industrial feeders in Gujarat, Tamil Nadu, and Maharashtra carry significant VFD, rectifier, and welding load. Background VTHD of 3–5% before any solar installation is common in manufacturing clusters.
- **Weak grid impedance in semi-urban areas** — Short-circuit ratios at LT connections in Tier-2 and Tier-3 cities are often below 20, making the voltage THD response to injected harmonic current higher than in urban areas.
- **Wide voltage variation** — Indian grids operate at 180–270 V nominal at the LT terminal. Voltage variation changes the operating point of LCL filters and can shift THD by 1–2% between nominal and extreme voltage conditions. Inverters designed only for 220–240 V European grids may show elevated THD at the lower end of the Indian voltage range.
- **Triplen harmonic accumulation in single-phase installations** — Large rooftop solar deployments on single-phase LT connections in residential and small commercial areas generate 3rd harmonic currents that accumulate in the distribution transformer neutral. This is separate from the inverter THD specification but is a system-level design consideration for high-density rooftop deployments.

The Qbits India-grid-tuned firmware explicitly handles the 180–270 V operating range, maintaining less than 3% ITHD across this voltage band. This is documented in the product datasheet and verified as part of the BIS certification test, which requires testing at 85% and 110% of nominal voltage.

The [solar inverter regulations and BIS/IEC compliance guide](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) covers how Indian certification requirements for inverter harmonic performance differ from their international equivalents.
