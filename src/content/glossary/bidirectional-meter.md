---
term: "Bidirectional Meter"
title: "Bidirectional Meter: Definition, Meaning, How It Works, Benefits & Applications"
description: "A bidirectional meter records both energy import and export for net-metered solar customers. Complete guide to working, accuracy and Indian installation."
category: "Metering and Grid"
categorySlug: "metering-grid"
priority: "P1"
updatedDate: 2026-07-18
keywords:
  - what is bidirectional meter
  - bidirectional energy meter
  - net meter india
  - smart meter solar
  - import export meter
shortDefinition: "A bidirectional meter is an electricity meter that records both energy imported from and exported to the grid through separate registers. It is the metering device used for net-metered rooftop solar and other distributed generation arrangements."
quickFacts:
  industry: "Smart Metering and Distributed Generation"
  primaryUse: "Two-way energy measurement at solar customer service connections"
  commonUsers: "Net-metered solar customers, DISCOMs, smart-meter integrators"
  relevantStandards: "IS 16444, IEC 62052-11, IEC 62053-22, CEA Smart Meter Regulations 2023"
  relatedTechnologies: "Smart meter, AMI, MDMS, four-quadrant metering"
relatedTerms:
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "smart-meter", term: "Smart Meter" }
  - { slug: "gross-metering", term: "Gross Metering" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "virtual-net-metering", term: "Virtual Net Metering" }
faqs:
  - q: "What is a bidirectional meter in simple words?"
    a: "An electricity meter that can run in both directions. It records energy flowing from the grid into your home and also energy flowing from your solar panels back to the grid."
  - q: "Bidirectional meter vs net meter, are they the same?"
    a: "Effectively yes in residential solar. A net meter is the practical name for a bidirectional meter installed for net metering purposes. Technically all net meters are bidirectional, but not all bidirectional meters are used for net metering."
  - q: "How does a bidirectional meter measure both directions?"
    a: "Modern static meters use separate import and export registers. Internal logic detects the direction of energy flow at every measurement interval and accumulates into the matching register."
  - q: "Who installs the bidirectional meter?"
    a: "The DISCOM, with the customer paying a one-time procurement and installation fee. The meter must be sealed and calibrated by the DISCOM before it is energised."
  - q: "What is the cost of a bidirectional meter in India?"
    a: "Approximate 2026 prices: single-phase residential ₹4,000 to ₹8,000, three-phase residential and small commercial ₹8,000 to ₹15,000, HT class ₹25,000 to ₹50,000."
  - q: "Is the bidirectional meter same as a smart meter?"
    a: "Smart meter adds AMI communications, time-of-day registers and remote disconnect to the basic bidirectional capability. Most modern bidirectional meters in India are smart meters."
  - q: "What accuracy class is required?"
    a: "Class 1.0 for residential single-phase, class 0.5S for commercial and industrial three-phase, class 0.2S for HT and CT-operated installations."
  - q: "How often is the meter read?"
    a: "Monthly through AMI in smart-meter deployments. Older DRM and tri-vector meters require physical visits, monthly or quarterly."
  - q: "What happens if the bidirectional meter fails?"
    a: "The DISCOM replaces it. Energy logged before failure is honoured, energy during the dead period is estimated based on the previous twelve-month average."
  - q: "Can I install my own bidirectional meter?"
    a: "No. The meter must be DISCOM-approved, sealed and installed by the DISCOM. Self-installed meters are not accepted for billing."
  - q: "Does a bidirectional meter measure reactive power?"
    a: "Modern four-quadrant bidirectional meters record both active and reactive energy in import and export directions. Older two-quadrant meters record only active energy."
  - q: "What is the lifespan of a bidirectional meter?"
    a: "10 to 15 years for residential, 7 to 10 years for HT class. AMI modules may require firmware updates every 2 to 3 years."
  - q: "Why does my bidirectional meter show no export reading?"
    a: "Most common causes: meter installed in single-direction mode, export register not configured, or inverter exporting below the meter's start threshold. Raise a complaint with the DISCOM."
  - q: "Can a bidirectional meter be hacked?"
    a: "Modern AMI smart meters use signed firmware, encrypted communication and tamper detection. Tampering is detected and logged, and the meter switches to safe mode."
  - q: "Are bidirectional meters AMI integrated?"
    a: "Smart bidirectional meters under CEA Smart Meter Regulations 2023 require AMI integration. Older static bidirectional meters may not have AMI."
author: "Akash Hirapara"
---

## What is a bidirectional meter

A bidirectional meter is an electricity energy meter that measures and records energy flowing in both directions through the service connection. It has separate cumulative registers for energy imported from the grid and energy exported to the grid, plus time-stamped interval logs that can be retrieved by the utility.

It is the meter type required for any consumer who exports electricity to the grid: net-metered rooftop solar, gross-metered systems, virtual net-metered group housing, and small captive plants with surplus export. In a typical Indian residential rooftop installation, a single bidirectional meter replaces the existing one-way meter at the service entrance. See [Net Metering in India, Complete 2026 Guide](/blog/net-metering-india-complete-guide/) for how this billing mechanism works end to end.

CEA Smart Meter Regulations 2023 require AMI-enabled bidirectional smart meters for all new net-metered connections. Class 1.0 for single-phase residential, class 0.5S for three-phase, and class 0.2S for HT applications.

> **TL;DR**
> - A bidirectional meter records energy import and export in separate registers, and is the metering device required for net-metered rooftop solar.
> - CEA Smart Meter Regulations 2023 require AMI-enabled bidirectional smart meters for all new net-metered connections.
> - Accuracy classes are 1.0 for residential single-phase, 0.5S for LT commercial/industrial, and 0.2S for HT and CT-operated installations.
> - The DISCOM owns, seals and installs the meter; it cannot be self-installed or self-purchased.
> - Typical Indian residential pricing runs from roughly ₹4,000 to ₹15,000 depending on phase and accuracy class.
> - Most billing errors, such as an unconfigured export register or reversed CT polarity, surface within the first three bills and should be audited early.

## Bidirectional meter explained simply

A normal electricity meter has one dial that goes up when you use electricity. A bidirectional meter has two: one for what you take from the grid and one for what you send back. Solar panels on your roof can push power into the grid during the day, and the meter quietly records both flows.

At the end of the month the DISCOM looks at both numbers. If you sent more than you took, you get credit — see [Gross Metering vs Net Metering, Which Should You Choose?](/blog/gross-metering-vs-net-metering/) for how this billing arrangement compares against the gross-metering alternative. If you took more, you pay for the difference. The meter does not care which way the wind is blowing inside the wires. It just keeps two separate counts.

## Why bidirectional meters matter

Enables net metering. Without a meter that records export, there is no way to credit a solar customer for surplus generation.

Statutory compliance. CEA Smart Meter Regulations 2023 require smart bidirectional metering for distributed generation.

Accurate billing. The meter is the single source of truth between customer and DISCOM. Disputes about export credits go back to meter logs.

AMI integration. Smart bidirectional meters push reads to the [DISCOM](/glossary/discom/) head end automatically, reducing meter-reading staff workload and human-entry errors. A basic [smart meter](/glossary/smart-meter/) adds these communications, time-of-day registers and remote disconnect on top of the core bidirectional capability.

Time-of-day capable. Modern smart meters log energy in 15 or 30-minute intervals, supporting time-of-day tariffs and demand response — see [Electricity Tariff Hikes 2026: Solar Pays Off Faster](/blog/electricity-tariff-hikes-solar/) for how rising ToD tariffs change the payback math.

## How a bidirectional meter works

1. The meter measures voltage and current at the service connection through internal sensors, sometimes augmented by external CTs.
2. A microprocessor samples voltage and current at high rates, typically 64 to 256 samples per cycle.
3. Instantaneous active power is calculated as the product of voltage and current.
4. The sign of power indicates direction. Positive means import, negative means export.
5. Energy in each direction is accumulated into the matching register every 15 minutes.
6. Interval logs are stored locally for 35 to 90 days.
7. AMI module pushes data to the DISCOM head end through RF, PLC or cellular.

## Technical deep dive

### Accuracy classes

| Class | Allowable error | Application |
|---|---|---|
| 0.2S | ±0.2 percent | HT, large industrial |
| 0.5S | ±0.5 percent | LT commercial, industrial |
| 1.0 | ±1.0 percent | Residential single-phase |

### Quadrants

A four-quadrant meter measures active and reactive power in both directions:

- Q1: active import, reactive import (inductive load)
- Q2: active export, reactive import
- Q3: active export, reactive export (capacitive load)
- Q4: active import, reactive export

Net-metered residential typically uses Q1 and Q2 only. Large C&I requires all four for [reactive energy billing](/blog/reactive-power-solar-inverters-india/).

### Communication

| Protocol | Use |
|---|---|
| DLMS/COSEM | Standard meter protocol under CEA regulations |
| RF mesh | Common AMI option in dense urban areas |
| PLC | Used where RF is impractical |
| Cellular (2G/4G) | Rural and remote sites |
| BLE/IR | Field diagnostics |

## Real-world applications

Net-metered [rooftop solar installations](https://heavengreenenergy.com/residential-solar/) at homes, schools and small commercial buildings.

Gross-metered C&I plants using two unidirectional meters or one four-quadrant bidirectional meter with configured registers.

[Virtual net metering](/glossary/virtual-net-metering/) at housing societies where one bulk bidirectional meter is shared across multiple sub-meters.

Captive power plants with grid backup, where the bidirectional meter records both export from the captive plant and import from the grid.

EV charging stations under V2G arrangements, where the EV can export energy back during peak hours.

## Advantages

Accurate, regulator-compliant export measurement.

Smart-meter capability for AMI integration, time-of-day tariffs and remote diagnostics.

Tamper detection and event logging.

Compatible with future grid services like demand response and V2G.

## Limitations

Higher cost than one-way meters. Single-phase residential bidirectional smart meters cost 3 to 6 times a basic meter.

Installation requires DISCOM coordination. The meter is utility property and cannot be self-installed.

Firmware updates require physical visits or AMI head-end coordination.

Replacement during failure causes a brief billing gap, filled by estimation.

## Common problems

Export register not configured at installation. Energy exported is not recorded. Audit the first bill carefully.

Meter installed in unidirectional mode by mistake. The customer is billed for full consumption with no export credit. Raise a DISCOM complaint with photos.

CT polarity reversed during installation. Direction inversion makes import appear as export and vice versa. Catastrophic billing error, must be caught at commissioning.

AMI dropout. The meter is reading correctly but the head end has not received recent data. Most DISCOMs have a 30-day grace period before estimation kicks in.

Voltage sag triggers meter reset. Repeated resets indicate a faulty meter or supply quality issue.

Seal tampering alarms during cleaning or pest control. Reset requires DISCOM visit.

## Best practices

Specify class 0.5S or better for any installation above 5 kW.

Confirm meter make and model is in the DISCOM-approved list before purchase.

Witness installation and note all register readings, seal numbers and serial numbers on the commissioning report, following the step-by-step process in [How to Apply for Net Metering in India, State by State (2026)](/blog/how-to-apply-net-metering-india/).

Audit the first three bills against inverter monitoring data. Most errors surface in the first three months.

Demand AMI integration. Manual reads invite errors and delays.

Plan for periodic firmware update access. Some DISCOMs require remote update consent.

Keep a copy of the [single-line diagram](https://heavendesigns.in/electrical-ceig-drawings/) showing meter location, CT placement and seal numbers.

## Comparison: bidirectional vs unidirectional vs four-quadrant

| Feature | Unidirectional | Bidirectional two-quadrant | Bidirectional four-quadrant |
|---|---|---|---|
| Active import | Yes | Yes | Yes |
| Active export | No | Yes | Yes |
| Reactive measurement | No | Limited | Full |
| Used for | Standard consumption | Net metering residential | Net metering C&I, HT |
| Cost | Lowest | Medium | Highest |

## Indian market context

CEA Smart Meter Regulations 2023 mandate AMI-enabled smart bidirectional meters for net-metered connections. The Revamped Distribution Sector Scheme (RDSS) funds smart meter procurement.

Genus Power, HPL Electric, Secure Meters, Larsen and Toubro, Itron, Landis+Gyr and Honeywell are the major bidirectional smart meter suppliers in India.

State DISCOMs maintain approved meter model lists. Maharashtra MSEDCL, Karnataka BESCOM, Delhi BSES Rajdhani and Tata Power Delhi all publish current lists periodically.

[PM Surya Ghar](/glossary/pm-surya-ghar/) disbursement requires the bidirectional meter installed and commissioned; see [PM Surya Ghar: How to Apply Online](/blog/pm-surya-ghar-apply-online/) for the full sequence. Subsidy is released after this step.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 16444 | Indian smart meter standard |
| IEC 62052-11 | General requirements for AC electricity meters |
| IEC 62053-22 | Static meters for active energy |
| IEC 62053-23 | Static meters for reactive energy |
| CEA Smart Meter Regulations 2023 | Indian smart meter rollout |
| DLMS/COSEM | Meter communication protocol |

## Common mistakes

Accepting a unidirectional meter for a solar installation by mistake. No export is recorded.

Skipping the witness of CT polarity at installation. Subsequent billing errors are hard to reverse.

Ignoring the seal number record. Tamper allegations become hard to defend.

Choosing the cheapest meter model not in the DISCOM-approved list. Commissioning is refused.

Missing the AMI integration step. Manual reads delay bills and credits.

Allowing the meter to stay installed in a hot west-facing position. Heat-related drift accelerates failure.

Not auditing the first three bills.

## Key takeaways

A bidirectional meter is the device that makes net metering possible. It records import and export through separate registers, integrates with AMI for automated reading, and conforms to CEA Smart Meter Regulations 2023. Class, configuration and DISCOM approval all matter. Errors typically surface in the first three months and must be caught early.

## Need help with meter installation?

QBits Energy coordinates bidirectional meter procurement, DISCOM approval and commissioning for net-metered rooftop solar across Indian states.

## Further reading

For how Bidirectional Meter plays out in real projects, these guides go deeper:

- [Best Solar Proposal Software UK: 2026 Guide](/blog/solar-proposal-software-uk/)
- [How Does a Solar Power System Work in India?](/blog/how-solar-power-system-works-india/)
- [Solar Inverter Wiring Diagram for Indian Homes 2026: Panels to Meter Board](/blog/solar-inverter-wiring-diagram/)
- [Solar Inverter Price with Installation in India 2026: The Real All-In Cost](/blog/solar-inverter-price-with-installation/)

## Sources

- IS 16444, Indian Standard for AC static smart meters.
- IEC 62052-11, IEC 62053-22, IEC 62053-23, International Electrotechnical Commission energy meter standards.
- CEA Smart Meter Regulations 2023, Central Electricity Authority of India.
- DLMS User Association, DLMS/COSEM Blue Book and Green Book.
- Revamped Distribution Sector Scheme (RDSS) guidelines, Ministry of Power, Government of India.
- State DISCOM approved meter model lists for MSEDCL, BESCOM, BSES Rajdhani, Tata Power Delhi and others.
- MNRE Grid-Connected Rooftop Solar Programme guidelines.
- IEEE Power and Energy Society publications on AMI deployment.
- Forum of Regulators reports on smart metering implementation in India.
