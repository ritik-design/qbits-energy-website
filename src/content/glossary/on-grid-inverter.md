---
term: "On Grid Inverter"
title: "On Grid Inverter: Definition, Meaning, How It Works, Benefits & Applications"
description: "An on grid inverter (grid-tie inverter) converts solar DC into AC and feeds it directly to the utility grid. Complete technical and Indian market guide."
category: "Inverter Types"
categorySlug: "inverter-types"
priority: "P0"
updatedDate: 2026-07-08
keywords:
  - what is on grid inverter
  - grid tie inverter
  - on grid solar inverter india
  - grid connected solar inverter
  - on grid vs off grid inverter
  - solar export inverter
  - grid tie inverter working
shortDefinition: "An on grid inverter is a grid-tied solar inverter that converts DC from PV modules into AC and feeds it directly into the utility grid. It cannot run without grid voltage, has no battery, and shuts down during grid outages for safety. It is the most common inverter used in Indian rooftop solar."
quickFacts:
  industry: "Solar PV / Grid-Connected Power"
  primaryUse: "Direct DC-to-AC conversion with utility grid export"
  commonUsers: "Homeowners, RWAs, commercial and industrial plants, EPCs, utilities"
  relevantStandards: "IEC 62109, IEC 61727, IEC 62116, IS 16221, IS 17387, CEA Grid Code, MNRE ALMM"
  relatedTechnologies: "MPPT, anti-islanding, net metering, smart meters, IGBT, SiC, transformerless topology"
relatedTerms:
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "micro-inverter", term: "Micro Inverter" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "gross-metering", term: "Gross Metering" }
  - { slug: "thd", term: "Total Harmonic Distortion (THD)" }
  - { slug: "almm-list", term: "ALMM List" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "transformerless-inverter", term: "Transformerless Inverter" }
faqs:
  - q: "What is an on grid inverter in simple words?"
    a: "It is a solar inverter that converts panel DC into AC and pushes it straight into the electricity grid. If the grid goes down, the inverter switches off. There is no battery and no backup."
  - q: "What is the difference between an on grid and off grid inverter?"
    a: "An on grid inverter needs the utility grid to operate and has no battery. An off grid inverter runs independently and stores energy in batteries. On-grid systems are cheaper and ideal where net metering is available."
  - q: "Does an on grid inverter work during a power cut?"
    a: "No. By design and by law it disconnects from the grid within milliseconds of an outage. This anti-islanding behaviour protects line workers from being shocked by exported solar power on a supposedly dead line."
  - q: "Can an on grid inverter charge a battery?"
    a: "Standard on grid inverters cannot charge batteries. If you need both grid export and battery backup, you need a hybrid inverter or an AC-coupled storage setup."
  - q: "How is an on grid inverter sized?"
    a: "Pick the inverter AC rating close to the expected DC array rating, usually between 80% and 120% of array DC kWp. Indian DISCOMs sanction the AC rating, so the inverter size also caps your billable export."
  - q: "Is net metering required for an on grid inverter?"
    a: "Net metering is needed if you want credit for surplus solar exported to the grid. Without it, the inverter still runs, but exported units are not compensated and may be limited by zero-export rules."
  - q: "Why does my on grid inverter trip frequently?"
    a: "The most common reasons are grid voltage outside the 0.85 to 1.10 pu window, frequency drift outside 47.5 to 51.5 Hz, loose AC connections, MPPT voltage too low at dawn or dusk, or insulation faults on the DC side."
  - q: "What is the efficiency of an on grid inverter?"
    a: "Modern string on-grid inverters deliver 97 to 98.6 percent peak efficiency and 96.5 to 98 percent European weighted efficiency. Microinverters land slightly lower around 95 to 97 percent."
  - q: "What certifications must an on grid inverter have in India?"
    a: "BIS certification under IS 16221 and IS 17387, MNRE ALMM listing for subsidy-eligible projects, plus compliance with IEC 62109 for safety, IEC 61727 for grid interconnection and IEC 62116 for anti-islanding."
  - q: "Can I install an on grid inverter without DISCOM approval?"
    a: "Technically yes, but you cannot legally export power to the grid without a sanctioned net or gross metering connection. Operating an unapproved grid-tie inverter can violate state electricity rules and void warranties."
  - q: "What happens to extra solar power from an on grid inverter?"
    a: "Surplus AC after meeting on-site load flows back through the bidirectional meter to the DISCOM. Under net metering you get credited, usually at the retail or average pooled power cost, depending on state policy."
  - q: "How long does an on grid inverter last?"
    a: "Quality string inverters last 10 to 15 years in Indian conditions. DC capacitors, fans and AC contactors are the most common wear items. Most manufacturers offer 5 to 10 years of standard warranty, extendable to 20 years."
  - q: "What is the price of an on grid inverter in India in 2026?"
    a: "Approximate ranges: 1 to 3 kW single-phase ₹15,000 to ₹35,000; 5 kW ₹35,000 to ₹55,000; 10 kW three-phase ₹65,000 to ₹1,10,000; 50 kW commercial unit ₹2,50,000 to ₹4,00,000."
  - q: "Is an on grid inverter same as a UPS?"
    a: "No. A UPS supplies backup AC from batteries during a power cut. An on grid inverter converts solar DC into AC for grid export and stops working when the grid is down."
  - q: "Do I need earthing for an on grid inverter?"
    a: "Yes. CEA regulations and IS 3043 require a dedicated earth electrode for the inverter chassis and a separate one for the PV array frame. Without proper earthing, residual current devices and surge protection will not work as intended."
author: "Nirav Dhanani"
---

## What is an on grid inverter

An on grid inverter is a solar inverter that converts the DC produced by PV modules into AC and pushes that AC directly into the utility distribution network. It is also called a grid-tie inverter, grid-connected inverter or grid-interactive inverter. The defining feature is dependence: without grid voltage and frequency present at the output terminals, the inverter does not produce power.

On the grid side it behaves as a controlled current source. The grid sets the voltage and frequency. The inverter pushes a current waveform locked in phase with that voltage, with very low harmonic distortion. On the DC side it acts as a maximum power point tracker, holding the array at the voltage that yields the most watts at that instant.

There is no battery, no transfer switch, and no standby mode. When the grid disappears, the inverter must disconnect within milliseconds. This is the most important safety property of a grid-tie inverter, and it is the reason on-grid systems do not provide backup during outages.

> **TL;DR**
> - An on grid inverter converts PV DC into AC and feeds it directly into the utility grid, with no battery and no backup during outages.
> - It disconnects within milliseconds of a grid outage, an anti-islanding behaviour required to protect line workers.
> - It dominates Indian rooftop solar and is the inverter type PM Surya Ghar and most C&I schemes are designed around.
> - It costs roughly 35 to 50 percent less than an equivalent hybrid system because batteries are skipped entirely.
> - Peak efficiency reaches 97 to 98.6 percent, the highest of any inverter type since there is no battery round-trip loss.
> - In India it must be ALMM-listed and BIS-certified under IS 16221 and IS 17387 to qualify for subsidy.

In India, on grid inverters dominate the rooftop solar market. The MNRE PM Surya Ghar Muft Bijli Yojana, almost all C&I projects, and the bulk of state subsidy programs are designed around grid-connected, net-metered systems using on grid inverters.

## On grid inverter explained simply

Think of your house wiring as a river. The utility grid keeps the river flowing at a steady level. A solar panel produces DC, which is the wrong kind of water for this river. An on grid inverter is the pump that takes panel DC and pushes AC into the river at exactly the same rhythm as the existing flow.

If your home is using less than the panels are making, the extra water flows upstream into the neighbour's pipes. Your meter spins backwards, and the DISCOM credits you. If the river dries up because the grid is off, the pump shuts off too. You get no backup. That is the deal.

For most Indian homes with a reliable enough grid, this is the cheapest and simplest way to use solar. You do not pay for batteries, you do not lose energy in storage cycles, and you cut your bill by 70 to 95 percent depending on roof size and consumption pattern.

## Why on grid inverters matter

Cost. On grid systems are roughly 35 to 50 percent cheaper than equivalent [hybrid systems](/glossary/hybrid-inverter/) because batteries are skipped entirely. A typical 5 kW rooftop in India costs ₹2.5 to ₹3.5 lakh on-grid, against ₹4.5 to ₹6.5 lakh with storage.

Efficiency. There is no round-trip loss in a battery. Every kWh of solar generated either powers the load directly or goes to the grid at near-unity efficiency. Hybrid systems typically lose 10 to 15 percent in charge and discharge cycles.

Grid stability. Modern on grid inverters perform reactive power support, voltage ride-through and frequency response. As rooftop solar penetration climbs in states like Gujarat, Kerala and Tamil Nadu, these inverter functions help the grid absorb variable solar without instability.

Policy fit. India's net metering framework, smart-meter rollouts and ALMM list all assume grid-interactive operation. An on grid inverter is the device the policy was built around.

## How an on grid inverter works

The path from sunlight to grid current follows five stages.

1. DC collection. PV strings feed the inverter through fused combiner boxes. Each MPPT input has its own voltage and current sensor.
2. [MPPT](/glossary/mppt/) control. The processor sweeps the array voltage to find the knee of the I-V curve, then holds the operating point there. Most algorithms use perturb-and-observe or incremental conductance, refreshed every few milliseconds.
3. DC boost or buck. A boost converter raises array voltage to the DC bus level needed for inversion, typically 380 to 800 V depending on AC side.
4. Inversion. IGBT or SiC switches chop the DC bus at 16 to 50 kHz using pulse-width modulation. An LCL filter smooths the chopped output into a clean sine wave.
5. Grid synchronisation and export. A phase-locked loop matches the inverter output to grid voltage and frequency. [Anti-islanding](/glossary/anti-islanding/) logic continuously checks that the grid is alive. If grid voltage, frequency or impedance moves outside the configured window, the AC contactor opens.

All of this happens with a control loop running at the millisecond scale. Modern inverters also report telemetry over Modbus or SunSpec, push it to the cloud over WiFi or 4G, and accept remote firmware updates.

## Technical deep dive

### Conversion efficiency

European efficiency is the weighted measure most installers quote. It assumes the inverter spends most of its time at part-load. The formula weights efficiency at 5, 10, 20, 30, 50 and 100 percent loading:

ηEU = 0.03·η5 + 0.06·η10 + 0.13·η20 + 0.10·η30 + 0.48·η50 + 0.20·η100

A good Indian rooftop inverter posts ηEU between 97.0 and 98.0 percent. Peak efficiency at 50 percent load can touch 98.6 percent on SiC platforms.

### MPPT window

The DC voltage window where MPPT works defines what string configurations are legal. For a 5 kW single-phase inverter, a typical MPPT window is 100 to 500 V with a startup voltage near 100 V. The string voltage at the coldest expected ambient must stay below the absolute maximum DC input, and at the hottest noon must stay above the lower MPPT bound.

### Grid code compliance

The Indian CEA grid code and IEEE 1547 require the inverter to ride through specific voltage and frequency excursions before tripping. Typical settings:

- Voltage trip: 0.85 to 1.10 pu, with low-voltage ride-through to 0.50 pu for 150 ms.
- Frequency trip: 47.5 to 51.5 Hz, with frequency-watt droop from 50.2 Hz.
- THD: less than 3 percent total, less than 4 percent on any individual harmonic up to the 50th.
- Power factor: adjustable from 0.8 leading to 0.8 lagging.

### Topologies

| Topology | Efficiency | Typical use | Notes |
|---|---|---|---|
| Transformer-based, line frequency | 94 to 96% | Older 1 to 5 kW units | Heavy, robust, expensive |
| High-frequency transformer | 95 to 97% | 1 to 10 kW | Lighter, still isolated |
| [Transformerless](/glossary/transformerless-inverter/) | 97 to 98.6% | Modern 1 to 100 kW | Lightest, requires PV negative isolation monitor |
| Multilevel (NPC, T-type) | 98 to 99% | Central 50 kW and above | Lower switching losses, lower THD |

## Real-world applications

[Residential solar](https://surgepv.com/residential-solar-design/). Single-phase 1 to 10 kW on grid inverters dominate Indian rooftop projects. Net metering credits surplus and offsets daytime consumption. Typical payback in India: 4 to 6 years.

[Commercial solar](https://surgepv.com/commercial-solar-design/). Three-phase 10 to 100 kW inverters power offices, schools, hospitals and small factories. Net or gross metering with state-specific tariffs. Payback in India is 3 to 5 years for daytime-heavy loads.

Industrial solar. 50 to 500 kW three-phase inverters connect to LT or HT panels through transformers, often delivered under a turnkey solar EPC contract. Reactive power support is often contractually required by the DISCOM.

Utility-scale solar. 1 to 5 MW [central](/glossary/central-inverter/) or large [string inverters](/glossary/string-inverter/) feed step-up transformers at 33 to 66 kV. These plants supply power under PPA contracts at fixed tariffs.

PM Surya Ghar projects. Subsidised 1 to 10 kW residential systems under the central scheme almost always use on grid inverters, paired with a single-phase or three-phase bidirectional meter.

## Advantages of an on grid inverter

The cost per installed kW is the lowest among all solar inverter categories. Lifecycle energy yield is the highest because there are no battery losses. Footprint is small, since no battery cabinet is needed. Operation and maintenance are minimal, mostly dust cleaning, fan replacement and annual insulation resistance checks. Subsidy and tax-incentive eligibility is the broadest, because Indian schemes assume grid-tied operation.

## Limitations

No backup during grid outages. In areas with poor supply, the inverter sits idle during the hours when you most need power. Export limits in some states cap the financial benefit. Reactive power and voltage rise can constrain how much solar a feeder can absorb in semi-urban areas. The inverter is a single point of failure for the AC string. Cybersecurity exposure is real, since most units talk to a vendor cloud over the internet.

## Common problems

Frequent grid trips. The most common complaint in Indian installations. Usually root-caused to high midday grid voltage, low neutral conductor quality or undersized service cable. Fix by adjusting trip windows within CEA limits, upgrading the neutral, or moving the connection point closer to the transformer.

DC arc faults. Caused by loose MC4 connectors and water ingress. Annual torque checks prevent most of these.

Insulation resistance faults. PV cabling damp from monsoon water ingress trips Riso protection. The inverter refuses to start until panels dry out. Fix the cable gland, not the inverter.

Display errors like F30, E13, ISO error. Codes are vendor-specific. Always consult the manual before resetting more than twice.

Communication dropouts. WiFi credentials change, cellular SIMs expire, RS485 cables get vibration-damaged. Plan for periodic reconnection.

## Best practices for on grid inverters

Mount in a shaded, ventilated location. Avoid west walls and metal sheds, which push internal temperature above derating thresholds. Use the manufacturer's bracket and the recommended air clearance.

Size the AC cable for 1.5 percent voltage drop or less from the inverter to the meter. Long cable runs above 30 m are a frequent cause of trip-on-export.

Earth the inverter chassis and the PV array frame separately, then bond at the main earth bar. Use a Class II SPD on both DC and AC sides for Indian conditions.

Set up monitoring on day one. Without telemetry, low-yield faults can go unnoticed for months.

Schedule a 6-monthly check of DC connectors, fan filters and AC torque. Replace fans at 5 to 7 years even if they still spin.

## Comparison: on grid vs other inverter types

For a full decision framework across all three architectures, see [On-Grid vs Hybrid Inverter, Which Should You Actually Buy?](/blog/on-grid-vs-hybrid/) and the [off grid inverter](/glossary/off-grid-inverter/) glossary entry.

| Feature | On grid | Off grid | Hybrid |
|---|---|---|---|
| Battery required | No | Yes | Optional but typical |
| Works during outage | No | Yes | Yes |
| Round-trip efficiency | 97 to 98.6% | 85 to 90% with battery | 88 to 94% with battery |
| Capex (5 kW system in India) | ₹2.5 to 3.5 lakh | ₹4.5 to 6.5 lakh | ₹4 to 6 lakh |
| Net metering eligible | Yes | No | Yes |
| Best for | Stable grid + low capex | No grid access | Frequent outages |

## Indian market context

The [MNRE ALMM List](/glossary/almm-list/) of Models and Manufacturers is the gating document for any on grid inverter sold under a subsidised or government-tendered scheme. Inverters must additionally hold BIS certification under IS 16221 (safety) and IS 17387 (grid interconnection).

State [DISCOMs](/glossary/discom/) enforce CEA grid standards through commissioning tests. The standard tests include anti-islanding within 2 seconds of grid loss, [THD](/glossary/thd/) under 3 percent at rated output and 50 Hz frequency lock-in within ±0.5 Hz.

[Net metering](/glossary/net-metering/) rules differ by state. Maharashtra and Gujarat allow net metering up to the sanctioned load. Karnataka and Tamil Nadu have moved towards [gross metering](/glossary/gross-metering/) for larger systems. Delhi and Kerala allow virtual net metering for group housing.

ALMM compliance was reinstated in April 2024 after a temporary suspension. As of 2026, only ALMM-listed inverters are eligible for central subsidy, PM Surya Ghar disbursements and CPSU tenders.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109-1, -2 | Safety of power converters for PV |
| IEC 61727 | Utility interface characteristics |
| IEC 62116 | Anti-islanding test procedures |
| IS 16221 | Indian PV inverter safety standard |
| IS 17387 | Indian grid-interconnection standard |
| CEA Technical Standards 2019 | Connectivity to distribution system |
| MNRE ALMM | Mandatory listing for subsidised projects |
| UL 1741 SA | Smart inverter functions, US reference |

## Common mistakes

Buying an inverter that is too small to save a few rupees. A 4 kW inverter on a 5 kW array sees [clipping](/blog/inverter-clipping-explained/) every clear day from 10 am to 2 pm.

Mounting the inverter on a west wall or inside an unventilated cupboard. Both push internal temperatures above derating limits.

Ignoring the AC isolator. A dedicated AC isolator next to the inverter is mandatory under CEA rules and required by every Indian DISCOM during commissioning.

Wiring strings to the wrong MPPT input pair. The inverter will run but each MPPT will average two mismatched strings, costing 4 to 8 percent annual yield.

Skipping surge protection. Indian thunderstorm zones see lightning surges that fry inverters not protected by Class II SPDs on both DC and AC.

Forgetting to commission the cloud monitoring. Without it, the first sign of trouble is a lower-than-expected bill three months later.

Letting the [warranty card](/blog/solar-inverter-warranty/) sit in a drawer. Registering the inverter on the manufacturer portal within 30 days is usually mandatory for extended warranty.

Mixing inverter brands on the same site. Different anti-islanding algorithms can interact badly, causing nuisance trips.

## Key takeaways

An on grid inverter is the lowest-cost, highest-efficiency way to use solar where the grid is reliable. It cannot back up loads during outages and requires net or gross metering to fully realise the financial benefit. In India it must be ALMM-listed and BIS-certified. Sizing, mounting, earthing and surge protection determine whether it lasts 10 years or fails in three.

## Looking for an on grid inverter?

QBits Energy supplies BIS-certified, ALMM-listed on grid inverters for residential, commercial and industrial rooftop solar across India. Talk to our engineers for a system design that matches your DISCOM rules and your roof.

## Sources

- IEC 62109-1, -2, Safety of power converters for use in photovoltaic power systems, International Electrotechnical Commission.
- IEC 61727:2004, Photovoltaic systems: Characteristics of the utility interface.
- IEC 62116:2014, Anti-islanding test procedures for grid-tied PV inverters.
- IS 16221 and IS 17387, Indian Standards for PV inverter safety and grid interconnection, Bureau of Indian Standards.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019, Central Electricity Authority of India.
- MNRE Approved List of Models and Manufacturers (ALMM), Ministry of New and Renewable Energy.
- PM Surya Ghar Muft Bijli Yojana, scheme guidelines, MNRE.
- EN 50530:2010, Overall efficiency of grid-connected photovoltaic inverters.
- NREL Technical Report TP-5D00-78195, On the Path to SunShot: Emerging Issues and Challenges in Integrating Solar with the Distribution System.
