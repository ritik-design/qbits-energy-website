---
term: "Reactive Power"
title: "Reactive Power: Definition, Meaning, How It Works, Benefits & Applications"
description: "Reactive power is the non-working component of AC power that maintains voltage. Full guide to kVAR, power factor and inverter reactive support."
category: "Power Quality"
categorySlug: "power-quality"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is reactive power
  - kvar
  - reactive power solar inverter
  - power factor correction
  - apparent power vs reactive power
shortDefinition: "Reactive power, measured in kVAR, is the component of AC power that oscillates between source and load without doing useful work. It maintains voltage and supports magnetic fields in motors and transformers. Modern solar inverters can inject or absorb reactive power on demand."
quickFacts:
  industry: "Power Systems / Solar Inverter Capability"
  primaryUse: "Voltage support, power factor correction, grid services"
  commonUsers: "Utilities, large C&I customers, EPCs, inverter engineers"
  relevantStandards: "CEA Grid Code 2019, IEEE 1547, IEC 61727"
  relatedTechnologies: "Smart inverter, STATCOM, capacitor banks, volt-var control"
relatedTerms:
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "kva", term: "kVA" }
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "thd", term: "THD" }
  - { slug: "fault-ride-through", term: "Fault Ride Through" }
  - { slug: "smart-inverter", term: "Smart Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
faqs:
  - q: "What is reactive power in simple words?"
    a: "AC power that bounces back and forth between source and load without doing any actual work. It is needed to keep voltage stable and to magnetise motors, but it does not turn lights on or run a fan."
  - q: "What is the unit of reactive power?"
    a: "Kilovolt-ampere reactive, written as kVAR. Megavar (MVAR) is used at utility scale."
  - q: "What is the difference between active, reactive and apparent power?"
    a: "Active power (kW) does work. Reactive power (kVAR) maintains voltage and magnetisation. Apparent power (kVA) is the vector sum. Power factor is the ratio of active to apparent."
  - q: "Can solar inverters provide reactive power?"
    a: "Yes. Modern smart inverters can inject or absorb reactive power up to about 33 percent of their rated apparent power while delivering full active power, and up to 100 percent of rated kVA at zero active power."
  - q: "Why does the grid need reactive power?"
    a: "Voltage on AC networks depends on reactive power balance. Long transmission lines, transformers and motors consume reactive power. Capacitor banks, generators and now inverters supply it."
  - q: "Is reactive power free?"
    a: "Reactive power circulating in the grid is not directly billed for residential customers but C&I customers are penalised for poor power factor, which reflects high reactive demand relative to active."
  - q: "What is power factor?"
    a: "The ratio of active power to apparent power. Equals cosine of the angle between voltage and current. A power factor of 1.0 means all power is active. Lower values indicate more reactive flow."
  - q: "Why is poor power factor a problem?"
    a: "It increases line losses, wastes transformer capacity and triggers DISCOM penalties. Most state tariffs penalise power factor below 0.85 to 0.95 depending on category."
  - q: "How do solar inverters help power factor?"
    a: "By injecting reactive power at the site, the inverter offsets inductive loads and raises power factor. The DISCOM sees less reactive demand."
  - q: "What is leading vs lagging reactive?"
    a: "Lagging reactive (inductive load) consumes VAR. Leading reactive (capacitive load) supplies VAR. Most industrial loads are lagging. Capacitor banks and grid-supporting inverters supply leading VAR."
  - q: "What is volt-var control?"
    a: "A smart-inverter function that automatically adjusts reactive power injection based on local voltage. If voltage is high, the inverter absorbs VAR. If low, it injects."
  - q: "Can reactive power flow over long distances?"
    a: "Not efficiently. Reactive power flow causes voltage drop on transmission lines. Best practice is to supply reactive locally, near where it is consumed."
  - q: "What happens if there is no reactive power?"
    a: "Voltage collapses. Motors stall, transformers saturate. The grid becomes unstable and protection systems trip."
  - q: "How much reactive can a 100 kW solar inverter provide?"
    a: "Typically up to 100 kVAR at zero active output, or about 33 kVAR while exporting 100 kW. The exact capability is in the inverter datasheet."
  - q: "Are central inverters used for reactive support?"
    a: "Yes. Utility-scale central inverters often serve as STATCOM-like reactive sources at the plant point of coupling."
author: "Keyur Rakholiya"
---

## What is reactive power

Reactive power, measured in kVAR, is the component of AC electrical power that oscillates between source and load without doing useful work. It is required to maintain voltage on AC networks and to support magnetic fields in inductive devices like motors and transformers.

In phasor terms, voltage and current in an AC circuit are not always in phase. Active power is the in-phase product, useful for work. Reactive power is the quadrature product, useful for voltage and magnetisation but not for work. Apparent power is the vector magnitude that combines both.

Modern grid-tied solar inverters are reactive-power-capable devices. They can inject leading or lagging reactive on demand, supporting site power factor, contributing to grid voltage regulation, and meeting smart-inverter requirements under CEA Grid Code 2019.

> **TL;DR**
> - Reactive power (kVAR) is the non-working AC component that maintains voltage and magnetises motors and transformers, unlike active power (kW) which does actual work.
> - Apparent power (kVA) is the vector sum of active and reactive power; power factor is the ratio of active to apparent power.
> - Modern smart inverters can inject or absorb reactive power up to about 33 percent of rated kVA while delivering full active power, rising to 100 percent at zero active output.
> - CEA Grid Code 2019 requires generators above 10 kW to maintain power factor between 0.95 leading and 0.95 lagging at full output.
> - DISCOMs penalise power factor below 0.85 to 0.95, and inverter reactive support can replace capacitor banks with millisecond-level dynamic response.
> - Whether the capability actually delivers value depends on commissioning configuration, firmware and plant-level coordination across multiple inverters.

## Reactive power explained simply

Picture pouring water down a slide. The water doing work is like active power: it lands at the bottom and powers something. Some water sloshes back and forth on the slide, never reaching the bottom, but its motion keeps the slide wet and smooth. That sloshing is like reactive power: it does not turn anything on, but the slide cannot work without it.

Inductive loads like motors and fluorescent lights need that sloshing to magnetise. Capacitors do the opposite, pushing the slosh in the other direction. A grid in balance has equal slosh in both directions, and voltage stays stable.

## Why reactive power matters

Voltage stability. Voltage on AC networks is governed by reactive balance. Reactive shortage causes voltage collapse.

Power factor. C&I customers pay reactive penalties when [power factor](/glossary/power-factor/) falls below state thresholds; see [reactive power in solar inverters, an India buyer's guide](/blog/reactive-power-solar-inverters-india/) for how factories eliminate this charge without a dedicated correction panel.

Grid integration of solar. Inverters injecting controlled reactive power help DISCOMs absorb more rooftop solar without voltage issues.

[Smart-inverter functions](/glossary/smart-inverter/). Volt-var, volt-watt and power-factor control all rely on reactive power capability.

Capacitor bank replacement. Smart inverters can replace traditional capacitor banks at [industrial sites](https://heavengreenenergy.com/industrial-solar/), with dynamic response instead of stepped switching.

## How reactive power works

In an AC circuit:

- v(t) = Vm sin(ωt)
- i(t) = Im sin(ωt − φ)

Active power P = Vrms × Irms × cos(φ).
Reactive power Q = Vrms × Irms × sin(φ).
Apparent power S = Vrms × Irms = √(P² + Q²).

φ is the phase angle between voltage and current. Power factor PF = cos(φ).

A solar inverter modulates the current phase relative to the grid voltage to inject or absorb reactive power. The control loop sets the desired reactive level based on a fixed setpoint, a Q(V) curve or a Q(P) curve.

## Technical deep dive

### Inverter capability curve

| Active power output | Maximum reactive |
|---|---|
| 100% | ±33% kVAR/kW |
| 80% | ±60% |
| 50% | ±87% |
| 0% | ±100% |

The capability curve is bounded by the rated apparent power S.

### Smart-inverter modes

| Mode | Description |
|---|---|
| Constant Q | Fixed reactive output |
| Constant PF | Maintain power factor at a setpoint |
| Volt-Var | Reactive output vs local voltage |
| Watt-Var | Reactive output vs active power |
| Frequency-Watt | Active output vs frequency |
| Volt-Watt | Active output vs voltage |

### Capability vs grid code

[CEA Grid Code 2019](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) requires generators above 10 kW to provide power factor between 0.95 leading and 0.95 lagging at full output, with extended reactive capability at lower outputs.

### Reactive billing

DISCOMs typically meter reactive energy (kVARh) separately. Penalty kicks in when:

PF < threshold (typically 0.85 to 0.95)

Penalty rate is usually a fraction of the active tariff applied to excess reactive.

## Real-world applications

Industrial sites using solar inverters as dynamic reactive sources, eliminating older capacitor banks; see [solar inverter for factory and industrial loads](/blog/solar-inverter-for-factory/) for sizing guidance.

Utility solar plants providing scheduled reactive support per dispatch instructions.

C&I rooftop systems configured to maintain power factor near unity at the site.

Hybrid wind-solar plants coordinating reactive at the point of common coupling.

Distribution feeder support, where rooftop solar volt-var control prevents overvoltage.

## Advantages of inverter reactive support

Dynamic response in milliseconds, faster than capacitor banks.

No mechanical wear or switching transients.

Capacity available without additional hardware.

Avoids reactive penalties on the customer bill.

Helps DISCOMs integrate more distributed solar.

## Limitations

Reactive capability reduces with rising active output.

Reactive injection during high voltage can worsen the problem if not coordinated.

Inverter losses include reactive support overhead.

Requires correct configuration. Default factory settings often disable reactive.

Voltage instability risk if multiple inverters inject reactive without coordination.

## Common problems

Default inverter PF setting at unity, missing site reactive penalty.

Reactive injection at high voltage causing voltage rise nuisance.

Capability curve misunderstood, leading to overcommitment in design.

Multi-inverter sites with no plant controller, each inverter reacting independently.

DISCOM reactive penalty continues despite inverter setting, because reactive meter not in same compartment.

Volt-var curve too aggressive, causing oscillation.

## Best practices

Read the inverter capability curve carefully. The 33 percent figure at full active is a default, not a constant.

Configure power factor or Q setpoint at commissioning based on actual site load.

Use volt-var mode for distributed plants where voltage regulation matters.

Coordinate multi-inverter sites with a plant controller.

Audit the first three reactive bills. Penalty should drop materially after inverter PF tuning.

Maintain firmware updates. Smart-inverter functions improve with each release.

## Comparison: solar inverter vs traditional reactive sources

| Source | Response time | Cost | Notes |
|---|---|---|---|
| Solar inverter | ms | Free if already installed | Dynamic, requires configuration |
| Capacitor bank | seconds | Low | Stepped, switching transients |
| STATCOM | ms | High | Dedicated reactive source |
| Synchronous condenser | seconds | High | Mechanical, robust |
| Tap-changing transformer | seconds | Medium | Voltage control via turns ratio |

## Indian market context

CEA Grid Code 2019 mandates reactive capability and smart-inverter functions for generators above 10 kW. State DISCOMs increasingly use inverter reactive capability for feeder voltage regulation.

Large [C&I customers](/c-i-solution/) actively configure solar inverters to maintain power factor at unity, avoiding penalty.

Utility solar plants under SECI PPA include reactive dispatch terms, where the plant controller responds to TSO commands.

Major inverter brands support full reactive capability with documentation in the Indian market.

## Standards and certifications

| Standard | Scope |
|---|---|
| CEA Grid Code 2019 | Indian distribution grid requirements |
| IEEE 1547-2018 | US smart-inverter functions |
| IEC 61727 | Utility interface characteristics |
| IS 17387 | Indian inverter grid interconnection |
| UL 1741 SA / SB | US smart-inverter standard |

## Common mistakes

Leaving default unity PF setting active despite site reactive penalty.

Sizing inverter without considering reactive headroom.

Activating volt-var without coordinating across the feeder.

Forgetting that reactive capability reduces with active output.

Ignoring power factor on the customer bill.

Using old capacitor banks when smart inverters could do the job, and skipping a resonance check when both are present on the same feeder; see [THD in solar inverters](/blog/thd-solar-inverter/) for how fixed capacitor banks can amplify a specific harmonic order once a solar inverter joins the circuit.

Not specifying reactive capability in inverter purchase orders.

## Key takeaways

Reactive power is what keeps AC voltage stable. Solar inverters can now serve as dynamic reactive sources, replacing capacitor banks and providing voltage support to distribution feeders. CEA Grid Code 2019 mandates the capability. Configuration at commissioning, plant-level coordination and firmware updates decide whether the capability is actually used.

## Need help with inverter reactive configuration?

QBits Energy configures smart-inverter reactive functions for C&I solar customers across India, eliminating power factor penalties and supporting DISCOM grid code requirements.

## Further reading

For how Reactive Power plays out in real projects, these guides go deeper:

- [Reactive Power Support from Solar Inverters India](/blog/reactive-power-solar-inverters-india/)
- [How Does a Solar Power System Work in India?](/blog/how-solar-power-system-works-india/)
- [String vs Microinverter, Indian Roof Reality](/blog/string-vs-microinverter/)
- [Enphase vs SolarEdge in India 2026: Are Premium Micros Worth It?](/blog/enphase-vs-solaredge-india/)

## Sources

- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- IS 17387, Indian Standard for utility-interconnected photovoltaic inverters.
- IEEE 1547-2018, Standard for Interconnection and Interoperability of Distributed Energy Resources.
- UL 1741 SA and SB, Inverters, Converters, Controllers and Interconnection System Equipment.
- IEC 61727:2004, Photovoltaic systems: Characteristics of the utility interface.
- NREL Technical Report TP-5D00-72528, Grid-Forming Inverter Performance.
- Sandia National Laboratories Report SAND2018-2168, Volt-Var Control with Smart Inverters.
- IEA PVPS Task 14 Report on smart inverter functions.
- Mohan N., Power Electronics: Converters, Applications, and Design, Wiley.
