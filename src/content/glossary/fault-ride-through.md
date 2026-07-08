---
term: "Fault Ride Through"
title: "Fault Ride Through (FRT): Definition, Meaning, How It Works, Benefits & Applications"
description: "Fault ride through (FRT) keeps solar inverters connected through brief grid disturbances. Full guide to LVRT, HVRT curves and Indian grid code rules."
category: "Grid Compliance"
categorySlug: "grid-compliance"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is fault ride through
  - lvrt
  - hvrt
  - frt curve solar inverter
  - grid code india frt
shortDefinition: "Fault Ride Through (FRT) is the requirement that grid-tied solar inverters stay connected through brief voltage and frequency disturbances and support the grid during recovery. It includes Low Voltage Ride Through (LVRT) and High Voltage Ride Through (HVRT) profiles defined by grid codes."
quickFacts:
  industry: "Grid Code Compliance / Power Electronics"
  primaryUse: "Riding through brief grid disturbances without disconnecting"
  commonUsers: "Utility solar developers, large C&I, grid operators, DISCOMs"
  relevantStandards: "CEA Grid Code 2019, IEC 61400-27, IEEE 1547-2018, IS 17387"
  relatedTechnologies: "Smart inverter, reactive power control, voltage support, PLL"
relatedTerms:
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "grid-code", term: "Grid Code" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "phase-locked-loop", term: "Phase Locked Loop" }
  - { slug: "voltage-sag", term: "Voltage Sag" }
  - { slug: "frequency-response", term: "Frequency Response" }
  - { slug: "smart-inverter", term: "Smart Inverter" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "thd", term: "THD" }
  - { slug: "cea", term: "CEA" }
faqs:
  - q: "What is fault ride through in simple words?"
    a: "A rule that says a solar inverter must stay connected when the grid briefly goes wobbly, instead of switching off. Solar plants are big enough now that mass disconnection during a wobble would itself crash the grid."
  - q: "What is the difference between LVRT and HVRT?"
    a: "LVRT covers voltage dips below normal, HVRT covers voltage spikes above normal. Both require the inverter to stay connected through the disturbance and inject reactive support."
  - q: "Why is FRT required?"
    a: "Without FRT, a brief grid fault would cause every solar inverter in a region to disconnect simultaneously, removing gigawatts of generation in milliseconds. The resulting frequency drop could cause cascading outages."
  - q: "Is FRT same as anti-islanding?"
    a: "No. Anti-islanding disconnects on grid loss. FRT keeps the inverter connected through brief disturbances. The two protections are complementary."
  - q: "What is the typical LVRT requirement?"
    a: "Indian CEA Grid Code requires LVRT down to 15 percent of nominal voltage for 150 ms, with a recovery profile after that. Different codes have slightly different curves."
  - q: "Do residential rooftop inverters need FRT?"
    a: "Indian CEA grid code applies FRT requirements to inverters above 10 kW. Most residential systems are below this threshold, but the inverter hardware capability is typically present."
  - q: "What is the FRT curve?"
    a: "A voltage-versus-time plot showing the boundary inside which the inverter must stay connected. Above the curve, ride through. Below the curve, trip is allowed."
  - q: "Does FRT inject reactive power?"
    a: "Yes. Modern FRT requires the inverter to inject reactive current during the voltage dip, supporting voltage recovery. The reactive current can be up to 100 percent of rated apparent power."
  - q: "Are central inverters FRT compliant?"
    a: "Yes, all modern central inverters supplied for Indian utility plants ship with FRT compliance to CEA grid code."
  - q: "Is FRT same as low voltage ride through?"
    a: "LVRT is one part of FRT, covering voltage sags. HVRT covers voltage swells. Together they form FRT."
  - q: "What happens if FRT fails?"
    a: "The inverter disconnects during a disturbance and contributes to cascading instability. Grid operators take the inverter out of compliance and may impose penalties under PPA terms."
  - q: "How is FRT tested?"
    a: "Type tests at the manufacturer using a programmable grid simulator. Plant-level tests at commissioning using DISCOM-provided sags or by relay-controlled switching."
  - q: "Is FRT required for residential systems?"
    a: "Below 10 kW it is not a hard requirement in India, but inverter hardware supports it. Above 10 kW it is mandatory."
  - q: "Can FRT cause inverter damage?"
    a: "Modern FRT-compliant inverters are designed to withstand the thermal and current stress of riding through faults. Older non-FRT inverters can suffer DC bus capacitor failure."
  - q: "What standards govern FRT in India?"
    a: "CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019, IS 17387 and IEC 61400-27."
author: "Keyur Rakholiya"
---

## What is fault ride through

Fault Ride Through (FRT) is the grid-code requirement that an inverter-based generator stay connected to the grid during brief voltage and frequency disturbances, and support voltage and frequency recovery through reactive and active power injection. FRT includes Low Voltage Ride Through (LVRT) for dips and High Voltage Ride Through (HVRT) for swells.

> **TL;DR**
> - FRT requires solar and wind inverters to stay connected through brief voltage or frequency disturbances instead of tripping, while injecting reactive support.
> - CEA Grid Code 2019 makes FRT mandatory in India for generators above 10 kW; IS 17387 covers the equivalent testing.
> - LVRT requires ride-through down to 15 percent of nominal voltage for 150 ms, with a recovery curve back to 0.85 pu by 1500 ms.
> - Reactive current injection during a dip can reach up to 100 percent of rated apparent power to help voltage recover.
> - FRT is distinct from anti-islanding: FRT keeps the inverter connected through a brief disturbance, while anti-islanding disconnects it when the grid is genuinely lost.
> - Non-compliant trips during real grid events can trigger PPA penalties on utility-scale plants.

The requirement emerged from wind power experience in the 2000s, when fault-driven mass disconnection of wind farms threatened grid stability. As solar PV capacity grew to gigawatt scale, the same logic applied. Modern grid codes require both wind and [solar inverters](/glossary/solar-inverter/) to behave as grid-supporting devices, not as fragile loads.

In India, the [CEA](/glossary/cea/) Technical Standards for Connectivity to the Grid 2019 set FRT profiles for generators above 10 kW. IS 17387 incorporates equivalent FRT testing. Utility plant [PPAs](/glossary/ppa/) reference these requirements with penalties for non-compliance.

## Fault ride through explained simply

Imagine a power grid as a busy intersection. When a traffic accident briefly stops the flow, you do not want every driver behind the accident to throw up their hands and abandon their car. You want them to ride through the moment, get past the obstruction, and keep traffic moving.

FRT is the rule that says solar and wind inverters cannot abandon the grid at the first sign of disturbance. They must stay connected, inject reactive support to help voltage recover, and come back to normal power once the fault clears.

## Why FRT matters

Grid stability. Without FRT, a brief 100 ms fault in one substation would trip gigawatts of solar across a region, dragging frequency down catastrophically.

Penetration limits. Grid operators allow more solar capacity on the network when they trust the inverters to stay connected through disturbances.

PPA compliance. Utility solar PPAs reference FRT compliance. Non-compliant trips during real grid events lead to financial penalties.

Reduced cascading risk. FRT support during a fault helps the protection system isolate the fault correctly.

Smart inverter foundation. FRT is one of the core [smart-inverter](/glossary/smart-inverter/) functions that also include reactive power, voltage support and frequency response.

## How FRT works

1. The inverter continuously monitors voltage and frequency at its AC terminals.
2. When voltage drops below the trip threshold, conventional protection would disconnect. FRT logic instead checks if the voltage trajectory is inside the protected ride-through profile.
3. If yes, the inverter stays connected.
4. During the dip, the inverter injects [reactive current](/glossary/reactive-power/) up to 100 percent of rated apparent power, supporting voltage at the connection point.
5. Active power is temporarily reduced to free apparent power capacity for reactive injection.
6. Once voltage recovers, the inverter ramps active power back up over a defined recovery period.
7. If the voltage trajectory falls below the protected profile, the inverter trips as a last resort.

## Technical deep dive

### LVRT profile (CEA Grid Code 2019)

| Voltage (pu) | Time (ms) | Action |
|---|---|---|
| 1.0 | Steady | Normal operation |
| 0.85 to 1.0 | Indefinite | Normal operation |
| 0.50 to 0.85 | 150 | Ride through |
| 0.15 to 0.50 | 150 | Ride through |
| Below 0.15 | Recovery curve | Trip allowed beyond curve |

The recovery curve linearly increases the minimum permitted voltage from 0.15 pu at 150 ms to 0.85 pu at 1500 ms.

### HVRT profile

| Voltage (pu) | Time (ms) | Action |
|---|---|---|
| 1.0 to 1.10 | Indefinite | Normal operation |
| 1.10 to 1.20 | 2000 | Ride through |
| 1.20 to 1.30 | 100 | Ride through |
| Above 1.30 | Trip allowed | |

### Reactive current support

During the dip, the inverter injects reactive current Iq:

Iq = K × (Vnominal − V) × Irated

Where K is typically 2.0 to 4.0 per unit. Reactive injection is capped at 100 percent of rated apparent power.

### Active power recovery

After voltage recovers above 0.9 pu, the inverter ramps active power back to pre-fault value at a configured rate, typically 10 to 50 percent of rated per second.

## Real-world applications

[Utility-scale solar plants](https://surgepv.com/utility-scale-solar-design/) under SECI and CPSU PPAs.

C&I plants above 10 kW connected to LT or HT.

Hybrid wind-solar plants where common point of coupling requires coordinated FRT.

Distributed generation in states with smart-inverter mandates.

Grid-supporting BESS in firm renewable energy packages.

## Advantages

Maintains grid stability under disturbances.

Allows higher renewable penetration.

Reduces cascading trip risk.

Supports voltage recovery through reactive current injection.

Enables smart-inverter functions like volt-var, volt-watt and frequency response.

## Limitations

Hardware stress. Inverter components experience thermal and current cycling during ride-through.

Coordination complexity. FRT settings must align with upstream protection.

False ride-through during real grid loss could compromise safety unless coordinated with [anti-islanding](/glossary/anti-islanding/) protection.

Older inverters cannot be retrofitted. Replacement is the only path to FRT compliance.

Test infrastructure is expensive. Programmable grid simulators required.

## Common problems

Inverter trips during a disturbance that should have been within the FRT profile. Firmware update or setting adjustment.

Reactive current injection during FRT increases voltage at a weak connection point, causing overvoltage trip on neighbours.

PPA penalty for non-compliant trips during real grid events.

Coordination conflict with anti-islanding. Both protections trigger simultaneously.

Old inverter without FRT capability blocks DISCOM commissioning of a large solar EPC project.

DISCOM does not have programmable grid simulator for type test.

## Best practices

Specify FRT compliance to CEA Grid Code 2019 in inverter purchase contracts.

Validate type test reports from accredited labs against recognised [inverter certification standards](/blog/solar-inverter-certifications/).

Conduct plant-level FRT test at commissioning, witnessed by DISCOM, backed by CEIG-approved electrical drawings where required.

Coordinate FRT settings with upstream protection during plant design.

Document FRT events for compliance audits.

[Update firmware periodically](/blog/solar-inverter-firmware-update-india/).

Plan for combined LVRT, HVRT and frequency response settings.

## Comparison: FRT vs anti-islanding vs UV protection

| Protection | Acts when | Action |
|---|---|---|
| Anti-islanding | Grid fully lost | Disconnect within 2 s |
| FRT | Brief voltage or frequency disturbance | Stay connected, inject reactive |
| UV/OV trip | Voltage outside tolerance band, sustained | Disconnect |
| Frequency trip | Frequency outside band, sustained | Disconnect |

## Indian market context

CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019 made FRT mandatory for generators above 10 kW. The standard references LVRT and HVRT profiles with reactive support requirements.

SECI tender bid documents and IPP PPAs include FRT compliance clauses with penalties for sustained non-compliance.

Major inverter brands like Sungrow, Sineng, Huawei, ABB, Solis, Goodwe and others maintain FRT-compliant model series for the Indian market.

Plant-level FRT testing is performed at commissioning by [DISCOMs](/glossary/discom/) using available grid simulator capability or by relay-driven switching.

## Standards and certifications

| Standard | Scope |
|---|---|
| CEA Grid Code 2019 | Indian distribution grid FRT requirements |
| IS 17387 | Indian inverter grid interconnection, FRT testing |
| IEC 61400-27 | Generic electrical simulation models for grid code compliance |
| IEEE 1547-2018 | US grid interconnection, FRT requirements |
| FERC Order 842 | US bulk-power FRT requirements |
| ENTSO-E Network Codes | European FRT requirements |

## Common mistakes

Using an inverter without FRT certification for a utility-scale plant.

Mis-setting FRT thresholds, leading to nuisance trips or non-compliance.

Failing to coordinate FRT with anti-islanding.

Skipping plant-level FRT test at commissioning.

Ignoring FRT events in plant logs.

Treating FRT as an inverter-only requirement. Plant controller and switchgear coordination matters too.

Not budgeting for the FRT test infrastructure during commissioning.

## Key takeaways

Fault Ride Through is the grid-code requirement that solar inverters above 10 kW stay connected through brief grid disturbances and inject reactive support. CEA Grid Code 2019 defines the Indian LVRT and HVRT profiles. Compliance is mandatory for SECI and utility PPAs, with penalties for non-compliant trips. Modern inverters from major brands are FRT-capable, but firmware settings and plant-level testing decide actual compliance.

## Need FRT-compliant inverter selection?

QBits Energy supports EPCs and developers on FRT-compliant inverter selection, plant controller coordination, and commissioning support across Indian utility and large C&I solar projects.

## Sources

- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- IS 17387, Indian Standard for utility-interconnected photovoltaic inverters.
- IEC 61400-27, Electrical simulation models for grid code compliance verification.
- IEEE 1547-2018, Standard for Interconnection and Interoperability of Distributed Energy Resources.
- FERC Order 842, Essential Reliability Services and the Evolving Bulk-Power System.
- ENTSO-E Network Codes on Requirements for Generators.
- Sandia National Laboratories Report SAND2019-2237, Inverter Ride-Through.
- NREL Technical Report TP-5D00-72528, Grid-Forming Inverter Performance.
- IEA PVPS Task 14 Report on high penetration PV grid integration.
