---
term: "String Inverter"
title: "String Inverter: Definition, Meaning, How It Works, Benefits & Applications"
description: "A string inverter converts DC from a series-connected PV string into AC. Full technical, sizing and Indian market guide for residential to utility solar."
category: "Inverter Types"
categorySlug: "inverter-types"
priority: "P0"
updatedDate: 2026-06-04
keywords:
  - what is string inverter
  - string inverter india
  - string inverter working
  - string inverter vs micro inverter
  - solar string inverter sizing
  - string inverter mppt
shortDefinition: "A string inverter is a centralised solar inverter that processes the combined DC output of one or more series-connected strings of PV modules into grid-quality AC. It is the dominant form factor in Indian residential, commercial and utility solar."
quickFacts:
  industry: "Solar PV / Power Electronics"
  primaryUse: "Conversion of string-level DC into AC for grid or load"
  commonUsers: "Homeowners, EPCs, C&I plants, utility-scale developers"
  relevantStandards: "IEC 62109, IEC 61727, IEC 62116, IS 16221, IS 17387, MNRE ALMM"
  relatedTechnologies: "MPPT, IGBT, SiC, transformerless topology, multilevel inverters"
relatedTerms:
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "micro-inverter", term: "Micro Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage (Voc)" }
  - { slug: "short-circuit-current", term: "Short Circuit Current (Isc)" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "dc-oversizing", term: "DC Oversizing" }
  - { slug: "shading-loss", term: "Shading Loss" }
  - { slug: "module-level-power-electronics", term: "Module Level Power Electronics" }
faqs:
  - q: "What is a string inverter in simple words?"
    a: "It is a single inverter that handles a row of solar panels wired in series, like beads on a thread. One inverter, many panels, one cable to the grid."
  - q: "Why is it called a string inverter?"
    a: "Because the panels are connected in a string, a series chain that adds up voltage. The inverter sees the combined DC voltage of that whole chain at its input."
  - q: "How many panels can connect to a string inverter?"
    a: "Depends on the MPPT voltage window and current limit. A common 5 kW residential inverter accepts strings of 6 to 14 modules per MPPT input. Utility string inverters can take 20 or more modules per string."
  - q: "String inverter vs micro inverter, which is better?"
    a: "String is cheaper and more efficient at array level. Microinverters handle shading and panel mismatch better. Pick string for unshaded rooftops and C&I, micro for complex roofs with shading and multiple orientations."
  - q: "What happens if one panel in a string is shaded?"
    a: "The whole string current drops to the level of the shaded panel, since they are in series. Bypass diodes inside the panel reroute current, but you still lose 20 to 40 percent of that string's output."
  - q: "How many MPPTs should a string inverter have?"
    a: "One MPPT per orientation is the working rule. Single-orientation rooftops can use a single MPPT. Mixed east-west or complex roofs need two or more MPPTs to avoid forcing mismatched strings together."
  - q: "What is DC oversizing on a string inverter?"
    a: "Connecting more PV DC than the inverter AC rating, typically 110 to 135 percent. The inverter clips peak output but delivers more annual energy by reaching rated power earlier and later in the day."
  - q: "Are string inverters used in utility-scale solar?"
    a: "Yes. Modern utility plants increasingly use 100 to 350 kW string inverters in distributed fashion, replacing central inverters. They simplify logistics and reduce single-point failure risk."
  - q: "Is a string inverter the same as an on grid inverter?"
    a: "String inverter describes the topology. On grid describes the grid relationship. Most on grid solar inverters in India are string inverters, but you can also have off grid and hybrid string inverters."
  - q: "How long does a string inverter last?"
    a: "10 to 15 years in Indian conditions. Capacitors and fans wear first. Manufacturers offer 5 to 10 years of standard warranty, extendable to 20."
  - q: "What is the efficiency of a string inverter?"
    a: "Modern transformerless string inverters reach 97 to 98.6 percent peak efficiency. European weighted efficiency for Indian residential models lands at 96.5 to 98 percent."
  - q: "Where should I install a string inverter?"
    a: "Shaded, ventilated wall close to the AC panel. Avoid direct sun, especially on west walls, and avoid unventilated cupboards. Maintain manufacturer-specified clearances on all sides."
  - q: "Can I parallel two string inverters on the same array?"
    a: "Not on the same DC string. You can split the array into separate strings and feed each to its own inverter on the AC side, with a combined service connection."
  - q: "What is the price of a string inverter in India?"
    a: "Approximate 2026 prices: 1 to 3 kW single-phase ₹15,000 to ₹35,000, 5 kW ₹35,000 to ₹55,000, 10 kW three-phase ₹65,000 to ₹1,10,000, 50 kW C&I ₹2,50,000 to ₹4,00,000, 100 kW utility-string ₹5,00,000 to ₹7,50,000."
  - q: "Do string inverters need a combiner box?"
    a: "Up to two or three strings, the inverter's built-in inputs are enough. Above that, a DC combiner box with fuses and SPDs is needed before the inverter."
author: "Nirav Dhanani"
---

## What is a string inverter

A string inverter is a centralised solar inverter that converts the combined DC output of one or more series-connected strings of PV modules into AC. A string is a chain of modules wired positive to negative in a row, adding up their voltages. The inverter sees the sum of those voltages at the input and runs MPPT on the whole string at once.

It is the most common inverter topology in Indian solar. Residential rooftops use single-phase string inverters in the 1 to 10 kW range. Commercial and industrial sites use three-phase string inverters from 10 to 100 kW. Utility-scale plants increasingly use 200 to 350 kW string inverters distributed across the field instead of central 1 MW units.

The defining trade-off is granularity. A string inverter optimises a string, not a panel. When the string is uniform in orientation, tilt and shading, the string inverter delivers near-microinverter yield at a fraction of the cost. When mismatched, the weakest panel drags the string down.

## String inverter explained simply

Imagine a row of solar panels wired in a single chain on the roof. The chain produces high-voltage DC. One wire runs down to the inverter on the wall. The inverter is the single point of conversion for that whole chain.

Compare this with microinverters, where each panel has its own little inverter underneath. String is centralised, micro is distributed. Centralised is cheaper. Distributed is more flexible.

For a typical Indian rooftop with one clean south-facing slope, string is the obvious answer. For a roof with a tree to one side, a chimney casting shade for half the day, and two orientations, microinverters or DC optimisers earn their cost.

## Why string inverters matter

Cost per installed watt. String inverters cost ₹2 to ₹6 per watt against ₹8 to ₹14 per watt for microinverters. Across an Indian rooftop market that grew from 8 GW to over 40 GW between 2020 and 2025, the cost gap drove almost all deployments to string.

Field serviceability. One inverter on a wall is easier to swap than 20 microinverters on a roof. Mean time to repair is hours, not days.

Scalability. The same architecture works from a 1 kW residential rooftop to a 100 MW utility plant. EPC standardisation lowers cost and trains a single workforce.

Indian market fit. ALMM listing, BIS certification and DISCOM commissioning processes are built around string topology. Subsidy disbursement timelines under PM Surya Ghar assume a single inverter per system.

## How a string inverter works

Internally the data path through a string inverter follows the same five-stage model as any modern PV inverter.

1. DC sensing. Voltage and current at each MPPT input are sampled at high speed.
2. MPPT. A control loop perturbs the operating voltage and observes power. The string is held at the maximum-power point of its I-V curve.
3. DC bus regulation. A boost or buck converter steps the string voltage to the DC bus level needed for inversion.
4. Inversion. IGBT or SiC switches chop the DC bus at 16 to 50 kHz. An LCL filter smooths the chopped output into a sine wave.
5. Grid synchronisation. A phase-locked loop matches grid voltage and frequency. Anti-islanding logic guards against islanding.

The string-specific part is the MPPT stage. Each MPPT input tracks one string. A 10 kW inverter with two MPPTs lets the installer point two strings in different directions, each tracked independently. A 50 kW unit might have 4 to 6 MPPTs, allowing six different sub-arrays.

## Technical deep dive

### String sizing

String length is bounded above by the maximum DC input voltage of the inverter and bounded below by the MPPT lower window.

Upper bound. At the coldest expected ambient, panel Voc rises. Indian winter minima for the Voc derate are commonly taken as 5 degrees Celsius, with Voc = Voc(STC) × (1 + βVoc × (Tmin − 25)). For 40 modules of Voc 41 V at 5 degrees with βVoc of −0.27 percent per degree, string Voc is 40 × 41 × (1 + 0.054) = 1729 V. Above the inverter limit of typically 1100 V residential or 1500 V utility, you must reduce string length.

Lower bound. At the hottest noon, panel Vmp drops. Indian rooftop modules at 60 degrees Celsius see Vmp around 32 V instead of nameplate 34 V. For a 100 V MPPT lower limit, minimum string length is roughly 100 / 32 = 4 modules.

Current. Per-string short-circuit current must stay under the inverter input current limit, otherwise current is clipped and yield falls.

### MPPT count

| Site type | Recommended MPPT count |
|---|---|
| Single-orientation residential | 1 |
| Two-orientation residential | 2 |
| Complex residential, multiple shades | 3 or more |
| C&I single roof | 1 to 2 per 25 kW |
| C&I sheds, mixed orientations | 1 per orientation |
| Utility-string, single plane | 4 to 12 |
| Utility-string, mixed terrain | 1 per sub-array |

### DC oversizing

DC oversizing is the practice of connecting more PV than the inverter AC rating. Indian conditions justify 115 to 130 percent ratio for most rooftops. The inverter clips midday output above its AC rating, but the day starts and ends earlier and later at the rated output, raising annual yield by 4 to 9 percent compared to 100 percent matching.

DC oversize ratio = PV DC kWp / inverter AC kW.

### Topology and efficiency

| Topology | Peak efficiency | Typical use |
|---|---|---|
| Line-frequency transformer | 94 to 96% | Legacy 1 to 5 kW |
| High-frequency transformer | 95 to 97% | Smaller modern units |
| Transformerless | 97 to 98.6% | Most modern residential and C&I |
| Multilevel NPC or T-type | 98 to 99% | C&I and utility-string above 50 kW |
| SiC-based | 98 to 99% | Premium and high-altitude C&I |

## Real-world applications

Indian rooftops. Single-phase 3 to 10 kW string inverters dominate residential. Three-phase 10 to 50 kW units cover small commercial and institutional rooftops.

C&I plants. 50 to 200 kW string inverters distributed across rooftops, carports and ground-mount arrays.

Utility solar. 200 to 350 kW string inverters in cluster boxes feeding pad-mounted transformers. Used in plants from 5 MW to 500 MW.

Solar carports. Multiple 10 to 50 kW string inverters under each shade structure.

Agricultural pumping. Three-phase string inverters with VFD output for direct PV-to-pump operation under PM-KUSUM Component B and C.

## Advantages of a string inverter

Lowest cost per installed watt among grid-tie topologies. Simple installation with one inverter on a wall, fewer joints and fewer rooftop electronics. Easy diagnostics with all MPPT data centralised in one device. Mature supply chain and broad ALMM listings. High efficiency that has stayed within 1 to 2 percent of microinverters for the last five years. Standardised by the Indian DISCOM commissioning process.

## Limitations

String-level optimisation. One shaded panel drags down the whole string. Mismatch losses from soiling, tilt or partial shade hit harder than on a panel-level system.

Single point of failure. If the inverter goes down, the whole system stops. Microinverter outages affect only one panel at a time.

High DC voltage on the roof. Strings up to 600 V residential or 1500 V utility require careful DC isolation, conduit, and arc-fault management.

Limited monitoring granularity. Panel-level performance is invisible unless you add DC optimisers.

Inverter end-of-life is the system end-of-life unless replaced. Microinverters tend to outlive string inverters by 5 to 10 years.

## Common problems

MPPT input current overload. Adding one more module per string in summer pushes Isc past the input limit. The inverter clips current, yield drops, and the user blames the panels.

DC isolator faults. Indian rooftops in monsoon corrode cheap DC isolators. Use IP66 or better, replace at 5 to 7 years.

Reverse polarity at MPPT input. Once-only event during installation. Many inverters die on the spot because the protection diode passes reverse current.

Insulation resistance trips. A wet PV cable triggers the inverter's Riso protection. The inverter does not start. Dry the cable, redo the gland, the inverter resumes.

Communication dropouts. RS485 or WiFi to the cloud fails silently. The user sees no data. Audit monitoring monthly.

Display showing PV power lower than measured ammeter reading. Common when MPPT lower window is set above the operating point on a partially shaded morning. The inverter stops tracking.

## Best practices for string inverters

Match string length to inverter MPPT window at the worst-case temperatures for the site.

Use one MPPT per orientation. Do not split a single MPPT across east and west panels.

Use the manufacturer's specified DC isolator. Cheap third-party DC isolators are the most common failure in Indian rooftops.

Mount in a shaded, ventilated location with the manufacturer's clearance specifications.

Use Class II SPDs on DC and AC sides.

Earth the inverter chassis and the array frame separately, then bond at the main earth bar.

Plan DC oversize between 115 and 125 percent for Indian rooftops unless the inverter datasheet states otherwise.

## Comparison: string vs micro vs central inverter

| Feature | String | Micro | Central |
|---|---|---|---|
| Optimisation level | Per string | Per panel | Per array |
| Cost per watt (₹) | 2 to 6 | 8 to 14 | 1.5 to 3 |
| Shade tolerance | Low to medium | High | Lowest |
| Mean time to repair | Hours | 1 to 2 days | Hours but huge impact |
| Best site | Unshaded rooftop, C&I, utility | Complex shaded residential | 5 MW and above utility |
| Indian market share 2025 | ~85% | ~5% | ~10% |

## Indian market context

ALMM listing is mandatory for any string inverter sold under PM Surya Ghar, MNRE programmes and state subsidies. BIS certification under IS 16221 and IS 17387 applies. CEA grid standards govern interconnection.

Common string inverter brands in India include Sungrow, Solis, Goodwe, Growatt, Solax, Deye, Huawei, Sineng, Fronius, SMA, Tata Power Solar and Luminous. Most three-phase utility-string inverters used in large plants are sourced from Sungrow, Sineng, Huawei and Solis as of 2026.

CEIG approvals are needed for systems above 10 kW in many states, with the inverter forming a key part of the single-line diagram.

ALMM was reinstated in April 2024 after a temporary suspension. Inverter ALMM list updates are issued by MNRE every few months. Always verify ALMM status on the day of subsidy claim.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109-1, -2 | Inverter safety |
| IEC 61727 | Utility-interface characteristics |
| IEC 62116 | Anti-islanding test procedures |
| IS 16221 | Indian inverter safety |
| IS 17387 | Indian grid-interconnection |
| CEA Technical Standards 2019 | Connectivity rules |
| MNRE ALMM | Subsidy-eligibility listing |

## Common mistakes

Putting east-facing and west-facing strings on the same MPPT. The string with weaker irradiance drags the other down by 8 to 15 percent annual yield.

Choosing too few MPPTs to save inverter cost. Two extra MPPTs cost less than the energy lost over five years on a mixed-orientation roof.

Ignoring temperature derate of Voc when sizing strings for Indian high-altitude sites like Leh and Spiti.

Skipping DC SPDs. Indian thunderstorm zones see lightning surges that fry inverter front ends.

Buying an inverter that is not ALMM-listed, then losing PM Surya Ghar subsidy eligibility.

Installing the inverter on a west-facing wall. The internal temperature rises, derate kicks in by 1 pm, and the user blames the panels for low afternoon yield.

Forgetting to record string layouts on the system handover document. The first service visit takes twice as long.

## Key takeaways

String inverters are the workhorse of Indian solar. They give the best cost per watt for unshaded, single-orientation roofs and for utility-scale plants. The trade-off is string-level mismatch sensitivity, which can be managed with MPPT count, careful string sizing, and DC optimisers when needed. Sizing, mounting and earthing decide whether the inverter delivers full rated yield for 12 years or trips intermittently for 2 years.

## Looking for a string inverter?

QBits Energy supplies BIS-certified, ALMM-listed string inverters from 3 kW residential to 350 kW utility-string. Reach out for a sizing study that matches your roof, your DISCOM rules and your DC oversize target.

## Sources

- IEC 62109-1, -2, Safety of power converters for use in photovoltaic power systems.
- IEC 61727:2004 and IEC 62116:2014, Utility interface and anti-islanding.
- IS 16221 and IS 17387, Indian Standards for PV inverter safety and grid interconnection.
- MNRE Approved List of Models and Manufacturers (ALMM), Ministry of New and Renewable Energy.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- EN 50530:2010, Overall efficiency of grid-connected photovoltaic inverters.
- NREL Technical Report TP-5D00-74465, Best Practices for Operation and Maintenance of Photovoltaic and Energy Storage Systems.
- Sandia National Laboratories Report SAND2018-12700, Comparative Analysis of String and Central Inverters.
- IRENA Renewable Power Generation Costs in 2024.
