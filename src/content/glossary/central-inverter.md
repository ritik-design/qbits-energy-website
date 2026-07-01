---
term: "Central Inverter"
title: "Central Inverter: Definition, Meaning, How It Works, Benefits & Applications"
description: "A central inverter is a high-capacity solar inverter used in utility-scale solar plants. Full guide to topology, sizing, O&M and Indian market trends."
category: "Inverter Types"
categorySlug: "inverter-types"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is central inverter
  - central solar inverter
  - utility scale solar inverter
  - central inverter vs string inverter
  - mw scale inverter
  - solar farm inverter india
shortDefinition: "A central inverter is a high-capacity solar inverter, typically 500 kW to 5 MW, used in utility-scale solar plants. It processes the combined DC output of a large array through one or two centralised power blocks feeding a step-up transformer."
quickFacts:
  industry: "Utility-Scale Solar PV"
  primaryUse: "Centralised DC-to-AC conversion in solar parks and large ground-mount plants"
  commonUsers: "IPPs, utility developers, EPC companies, NTPC, SECI tendered plants"
  relevantStandards: "IEC 62109, IEC 61727, IEC 62116, IS 16221, IS 17387, CEA grid code, MNRE specs"
  relatedTechnologies: "IGBT, multilevel topology, MV transformer, SCADA, plant controller"
relatedTerms:
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "transformer", term: "Step-Up Transformer" }
  - { slug: "scada", term: "SCADA" }
  - { slug: "plant-controller", term: "Plant Controller" }
  - { slug: "reactive-power", term: "Reactive Power" }
  - { slug: "dc-oversizing", term: "DC Oversizing" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "anti-islanding", term: "Anti-Islanding" }
  - { slug: "frt", term: "Fault Ride Through" }
  - { slug: "harmonics", term: "Harmonics" }
faqs:
  - q: "What is a central inverter in simple words?"
    a: "It is one very large inverter that handles the DC output of a whole section of a solar farm. Instead of many small inverters scattered across the field, one or two big units sit in a cabinet, each taking in megawatts of DC."
  - q: "Central inverter vs string inverter, which is used in utility solar?"
    a: "Both are used. Central inverters dominate Indian utility plants commissioned before 2020. String inverters dominate plants commissioned after 2022 because of better serviceability and lower MPPT mismatch loss."
  - q: "How big is a central inverter?"
    a: "Capacity ranges from 500 kW to 5 MW. Physical size is that of a shipping container in the largest ratings, or a tall switchgear cabinet for smaller units. They weigh 2 to 12 tonnes."
  - q: "What is the efficiency of a central inverter?"
    a: "Modern central inverters reach 98.5 to 99 percent peak efficiency, with weighted efficiency at 98 to 98.5 percent. They are the most efficient solar inverter topology."
  - q: "How many MPPTs does a central inverter have?"
    a: "1 to 12 depending on capacity. Very large units use a single MPPT for the entire DC bus, which works well for uniform ground-mount arrays but suffers in non-uniform plants."
  - q: "What is the lifespan of a central inverter?"
    a: "15 to 25 years for the cabinet, with major components like IGBT modules, fans and DC capacitors replaced once or twice over that period."
  - q: "Why are utility plants moving from central to string inverters?"
    a: "Two reasons: when a central inverter fails, you lose 1 MW or more of generation until the truck and crane arrive. String inverters reduce that loss to 200 to 350 kW per unit and are swapped in hours."
  - q: "Where are central inverters installed?"
    a: "Inside containerised stations on a concrete pad in the solar field, beside the medium-voltage transformer. The combined assembly is called a power conversion station."
  - q: "How is a central inverter cooled?"
    a: "Forced air cooling with fans and air filters for outdoor cabinets, or air-conditioned containers for harsh climates. Liquid cooling appears on the largest 5 MW units."
  - q: "What standards govern central inverters in India?"
    a: "IEC 62109 for safety, IEC 61727 for grid interconnection, IEC 62116 for anti-islanding, IS 16221 and IS 17387 for the Indian variant, and the CEA grid code for utility connection."
  - q: "Do central inverters have anti-islanding?"
    a: "Yes. Utility plants are required to disconnect from the grid in defined fault conditions. Anti-islanding logic in the central inverter is one of multiple layers of grid protection."
  - q: "What is the harmonic distortion of a central inverter?"
    a: "Modern multilevel central inverters deliver THD under 1.5 percent at rated load, often under 1 percent. Tight harmonic control is essential to meet utility power quality standards."
  - q: "Can a central inverter do reactive power compensation?"
    a: "Yes. Modern central inverters provide reactive power support at zero active power, supporting voltage regulation at the grid connection point. This is increasingly required by Indian utility PPAs."
  - q: "What is the typical DC voltage of a central inverter?"
    a: "1000 to 1500 V DC. The trend is toward 1500 V to reduce DC cable losses and increase string length."
  - q: "Are central inverters cheaper than string per watt?"
    a: "They were cheaper by 15 to 25 percent before 2020. By 2025 the price gap has shrunk to 5 to 10 percent, and many developers consider string the better lifecycle cost option."
author: "Nirav Dhanani"
---

## What is a central inverter

A central inverter is a high-capacity solar inverter that processes the combined DC output of a large PV array through one or two centralised power blocks. Capacities range from 500 kW to 5 MW per unit. Each unit feeds a dedicated medium-voltage step-up transformer at the same pad, and the combination is called a power conversion station, PCS or skid.

In a typical Indian utility plant of 50 to 250 MW, central inverters are deployed in clusters of 1 to 2.5 MW per skid, with 20 to 100 skids per plant. The DC array is divided into blocks, each block feeding one central inverter through a combiner box network and DC cables.

Central inverters dominated Indian utility solar between 2010 and 2020. Since 2022, large string inverters of 200 to 350 kW have eaten into the central inverter market share because of better field serviceability, lower MPPT mismatch loss, and simplified logistics. As of 2025, central inverters retain roughly 35 to 45 percent of Indian utility-scale new build, mostly in plants above 200 MW where logistics and CapEx pressure still favour them.

## Central inverter explained simply

Imagine a solar farm covering 200 hectares. Instead of putting one small inverter under each panel or one medium inverter at each row, the plant builder puts a single big cabinet in a hut every few hundred metres. Each hut handles a megawatt of solar power.

The advantage is fewer parts and a tidy electrical layout. The disadvantage is that when the cabinet trips, a megawatt goes dark. A truck has to drive out, sometimes through monsoon mud, and a technician has to diagnose and repair on site. In the meantime, the plant loses real revenue.

Modern utility designers weigh these trade-offs by site. Flat, uniform plants in low-rain zones still favour central. Hilly, fragmented plants or those in cyclone-prone coasts favour string.

## Why central inverters matter

Lowest installed cost per watt at very large scales. For plants above 100 MW with uniform terrain, central remains the most CapEx-efficient topology.

Centralised maintenance. One operator can service a multi-MW plant with a small team and a single set of spare parts. Spares logistics are simpler than with 300-plus string inverters.

High peak efficiency. The largest modern multilevel central inverters touch 99 percent, slightly above the best string inverters.

Mature interface with utility-scale balance of plant. Plant controllers, SCADA systems and grid compliance modules have long shipped first for central inverter topology.

Reactive power capability. Central inverters offer high reactive power support, important for plants where the grid connection point has tight voltage regulation requirements.

## How a central inverter works

The signal path through a central inverter resembles a string inverter scaled up by two orders of magnitude.

1. DC collection. Hundreds of strings from the array feed a network of combiner boxes. Each combiner box parallels 8 to 24 strings, with fused isolation for each string. Combiner box outputs feed the central inverter through trunk DC cables.
2. DC bus. The combined DC arrives at the central inverter's DC bus, typically 1000 or 1500 V. One or a few MPPT loops control the bus voltage.
3. Inversion. Parallel banks of IGBT or SiC modules switch the DC bus into a chopped AC waveform. Modern central inverters use NPC or T-type multilevel topologies for low losses and low THD.
4. AC filtering. Large LCL filters smooth the chopped output into clean low-voltage AC, typically 380 to 690 V.
5. Step-up transformer. The PCS-mounted transformer steps the inverter LV to the medium voltage of the plant collection system, typically 22 or 33 kV in India.

A plant controller above the inverters orchestrates active power dispatch, reactive power support and fault response across the whole field.

## Technical deep dive

### Topology

Modern central inverters almost universally use multilevel topologies. The dominant choices:

| Topology | Notes |
|---|---|
| Neutral Point Clamped (NPC) | 3-level NPC is standard for 1000 V DC bus. Low switching loss, balanced THD. |
| T-type | 3-level T-type favoured for 1500 V DC. Lower component count than NPC. |
| Active NPC | 3-level ANPC for highest efficiency at full load. Used by some premium central inverters. |
| Modular Multilevel | Emerging for very large 5 MW and above units. Lower output filter, higher complexity. |

### DC oversize

Indian utility plants typically run a DC oversize ratio of 130 to 150 percent on central inverters. The inverter clips midday peak but harvests more morning and evening energy, raising annual yield by 6 to 12 percent depending on irradiance profile.

### Reactive power and grid services

Central inverters provide:

- Reactive power up to ±33 percent of rated active power at full load.
- Reactive power at zero active power, which functions like a STATCOM, up to ±100 percent of rated apparent power on premium models.
- Low and high voltage ride-through per IEC 61400-27.
- Active power-frequency droop response.
- Black-start capability on some hybrid models.

These features are increasingly required under Indian CEA grid codes and SECI PPA terms.

### Cooling and environmental

Central inverters sit on concrete pads outdoors. They are housed in IP54 to IP65 cabinets or in containerised PCS skids with internal air conditioning. Dust, monsoon humidity and Indian summer temperatures over 50 degrees Celsius push designers toward redundant cooling and filtered air intakes.

## Real-world applications

Utility solar parks. 50 MW to 2.5 GW plants in Rajasthan, Karnataka, Andhra Pradesh, Gujarat and Tamil Nadu. Central inverter PCSs are the workhorse for most plants commissioned 2014 to 2022.

Floating solar. Large floating plants like the 100 MW NTPC Ramagundam use central inverters mounted on floating platforms or on the shore.

Hybrid wind-solar plants. Sites combining wind and solar PV often use central inverters for the solar block and feed both into a shared substation.

Solar-plus-storage utility plants. Central inverters paired with battery containers form the AC bus for hybrid PCS skids.

Industrial captive plants. 5 to 50 MW captive solar plants for cement, steel and chemicals customers often use central inverters for cost efficiency.

## Advantages of a central inverter

Lowest cost per installed watt at utility scale. Highest peak efficiency, with the best units exceeding 99 percent. Simplified spares and trained workforce centralised at the plant. Single interface for the plant controller and SCADA. High reactive power capability that supports utility grid compliance. Suitable for very large 1500 V DC architectures.

## Limitations

Single point of failure per skid. A trip takes 0.5 to 2.5 MW offline until repaired. Average downtime in Indian conditions runs 4 to 24 hours per fault.

Higher MPPT mismatch loss. One MPPT for a megawatt block cannot track sub-arrays separately, costing 0.5 to 2 percent annual yield on non-uniform terrain.

Heavy and bulky. Skids weigh 5 to 20 tonnes and need crane access. Logistics into hilly or remote sites is expensive.

Air filter and fan maintenance is constant. Dust ingress shortens IGBT module life.

Less attractive for plants below 50 MW or for fragmented terrain.

## Common problems

DC arc faults at the combiner box. Loose terminations after thermal cycling are the most common cause. Annual torque audits cut the failure rate.

Fan failure leading to derating. The inverter throttles below rated power on hot afternoons.

Air-conditioner failure in containerised skids. Loss of cooling forces the inverter offline in summer.

IGBT module failure. Statistically rare, but catastrophic when it happens. Spare IGBT stack should be on site or with the O&M operator.

DC ground faults. Cable insulation damaged by rodents or vegetation. Hard to localise across thousands of metres of DC cable.

Communication loss to the plant controller. The inverter still runs locally but no longer participates in plant-level reactive power dispatch.

## Best practices for central inverters

Pre-commissioning insulation tests on every DC cable run. Catch damaged cables before they fail in service.

Install string-level monitoring through smart combiner boxes. Without it, MPPT mismatch losses are invisible.

Annual thermography sweep of all DC terminations. Loose joints heat up first.

Maintain a 4 percent stock of fans, capacitors and SPDs as spares on site.

Keep filters clean. Quarterly cleaning is the minimum in Indian dust conditions. Monthly during summer in arid zones.

Test ride-through performance during commissioning. Re-test after firmware updates.

Plan crane access to every PCS. Replacement IGBT stacks and transformers are not field-strippable.

## Comparison: central vs string vs micro

| Feature | Central | String | Micro |
|---|---|---|---|
| Capacity per unit | 0.5 to 5 MW | 1 kW to 350 kW | 0.25 to 0.4 kW |
| Plants per MW | 1 to 2 | 4 to 8 | 2500 to 4000 |
| Peak efficiency | 98.5 to 99% | 97 to 98.6% | 95 to 97% |
| Mean time to repair | 4 to 24 h | 1 to 4 h | 1 to 2 days |
| Capex per watt (₹, 2026) | 1.5 to 3 | 2 to 6 | 8 to 14 |
| Best fit | 100+ MW uniform | 1 MW to 250 MW, fragmented | Residential, shaded |
| Indian utility share 2025 | 35 to 45% | 50 to 60% | Negligible |

## Indian market context

NTPC, Adani Green, ReNew Power, Tata Power Solar, Greenko, Avaada, JSW Energy and SJVN are the largest deployers of central inverters in Indian utility plants. Sungrow, Sineng, Huawei, ABB, Power Electronics, TBEA and Hitachi Energy are the major OEMs.

CEA grid code requires reactive power capability, fault ride-through and active power-frequency response from grid-connected solar inverters above 1 MW. Central inverters meet these requirements with appropriate firmware settings during plant commissioning.

ALMM listing applies to central inverters used in SECI and CPSU tenders. Most major OEMs maintain ALMM-listed central inverter model series.

The 1500 V DC architecture is now standard for new utility plants in India. Central inverters at 1500 V dominate plants tendered after 2021.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109-1, -2 | Inverter safety |
| IEC 61727 | Utility-interface characteristics |
| IEC 62116 | Anti-islanding |
| IEC 61400-27 | Generic grid code compliance |
| IS 16221 | Indian inverter safety |
| IS 17387 | Indian grid-interconnection |
| CEA Grid Code | Utility connection requirements |
| MNRE ALMM | Required for tendered plants |

## Common mistakes

Sizing the central inverter without enough DC oversize. Annual yield falls 4 to 9 percent below what string-equivalent plants achieve.

Ignoring fan filter cleaning schedule. The unit runs hot, derates by midday, and the operator chases ghost MPPT problems.

Treating the central inverter as a fit-and-forget device. Annual maintenance and thermography are not optional.

Using 1000 V DC architecture for new plants. The 1500 V architecture cuts DC cable cost by 15 to 20 percent and is now the industry default.

Co-locating two PCS skids without enough thermal separation. Hot exhaust from one re-enters the intake of the next.

Skipping the fault ride-through commissioning test. Grid faults that should be ridden through cause unnecessary trips and PPA penalty risk.

Choosing the lowest-cost central inverter without checking the O&M support footprint. A 1 MW outage with a four-day OEM response time costs more than the inverter saved.

## Key takeaways

Central inverters remain the dominant topology for very large Indian utility solar plants where CapEx and grid services matter more than serviceability. The 1500 V DC architecture and multilevel topology are now standard. The trade-off against string inverters is sharp: lower upfront cost and higher peak efficiency, against higher downtime per fault and worse MPPT mismatch tolerance. The right choice depends on plant size, terrain uniformity and O&M maturity.

## Looking for utility-scale solar engineering?

QBits Energy works with EPCs and IPPs on central inverter selection, plant layout, DC architecture and grid compliance for utility-scale solar in India. Reach out for design support on your next plant.

## Sources

- IEC 62109-1, -2, Safety of power converters for use in photovoltaic power systems.
- IEC 61727:2004 and IEC 62116:2014, Utility interface and anti-islanding.
- IEC 61400-27, Generic electrical simulation models for grid code compliance verification.
- IS 16221 and IS 17387, Indian Standards for PV inverter safety and grid interconnection.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019.
- MNRE ALMM and SECI tender technical specifications, Ministry of New and Renewable Energy and Solar Energy Corporation of India.
- NREL Technical Report TP-5D00-74465, Best Practices for Operation and Maintenance of Photovoltaic and Energy Storage Systems.
- Sandia National Laboratories Report SAND2018-12700, Central vs. String Inverter Comparison for Utility-Scale PV.
- IEA PVPS Task 13 Report, Operation and Performance of Photovoltaic Systems.
