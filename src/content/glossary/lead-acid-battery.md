---
term: "Lead Acid Battery"
title: "Lead Acid Battery: Definition, Types, Working & Solar Applications"
description: "Lead acid batteries are the oldest rechargeable battery technology. Full guide to types, working, sizing and Indian solar applications."
category: "Batteries"
categorySlug: "batteries"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is lead acid battery
  - tubular battery solar
  - vrla battery
  - flooded lead acid
  - lead acid vs lithium
shortDefinition: "A lead acid battery is a rechargeable electrochemical cell using lead electrodes and sulphuric acid electrolyte. Variants include flooded (tubular), VRLA AGM and VRLA gel. Cheapest battery chemistry, with 500 to 1,500 cycle life. Still used in Indian off-grid solar, UPS and automotive starting applications."
quickFacts:
  industry: "Energy Storage / Solar Off-Grid"
  primaryUse: "Cost-sensitive off-grid solar storage and UPS"
  commonUsers: "Rural off-grid customers, UPS users, automotive"
  relevantStandards: "IS 13369, IS 1652, IEC 60896, IEEE 1188"
  relatedTechnologies: "Tubular, AGM, gel, flat plate"
relatedTerms:
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "battery-dod", term: "Battery DOD" }
  - { slug: "cycle-life", term: "Cycle Life" }
  - { slug: "charge-controller", term: "Charge Controller" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "pwm", term: "PWM" }
  - { slug: "deep-discharge", term: "Deep Discharge" }
  - { slug: "equalisation", term: "Equalisation Charging" }
  - { slug: "specific-gravity", term: "Specific Gravity" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
  - { slug: "ups", term: "UPS" }
faqs:
  - q: "What is a lead acid battery in simple words?"
    a: "A rechargeable battery using lead plates dipped in sulphuric acid. The oldest commercial rechargeable battery, still widely used because it is cheap and reliable for short-duration backup."
  - q: "What are the types of lead acid?"
    a: "Flooded (tubular and flat plate), VRLA AGM, VRLA gel. Tubular flooded is the most common in Indian off-grid solar."
  - q: "How long do lead acid batteries last?"
    a: "Tubular flooded: 5 to 7 years at 50 percent DoD daily. AGM: 4 to 6 years. Automotive starting batteries: 2 to 4 years (not designed for cycling)."
  - q: "Lead acid vs lithium, which is better?"
    a: "Lithium for almost all modern solar storage. Lead acid only for cost-sensitive small systems or where battery is rarely cycled (UPS standby)."
  - q: "Can I use a car battery for solar?"
    a: "No. Automotive starting batteries are designed for high-current short bursts, not deep cycling. They fail in 3 to 6 months under daily solar cycling."
  - q: "Do lead acid batteries need water?"
    a: "Flooded types yes, monthly to quarterly check and top-up with distilled water. VRLA AGM and gel are sealed and need no watering."
  - q: "What is equalisation?"
    a: "A periodic controlled overcharge to balance individual cell voltages and prevent sulphation. Applied monthly to flooded lead acid."
  - q: "What is sulphation?"
    a: "Crystallisation of lead sulphate on plates during low SOC operation. Reduces capacity. Slow build-up causes early battery failure."
  - q: "What is the typical capex of lead acid batteries in India?"
    a: "Approximate 2026 prices: tubular ₹8,000 to ₹15,000 per kWh nominal, VRLA AGM ₹12,000 to ₹20,000 per kWh."
  - q: "What is the round-trip efficiency of lead acid?"
    a: "75 to 85 percent battery alone. System round-trip including inverter losses lands at 65 to 78 percent."
  - q: "Is lead acid environmentally friendly?"
    a: "Lead is toxic but extensively recyclable. India's recycling rate for lead acid batteries is among the highest in the world at over 95 percent."
  - q: "Why does my lead acid battery die so fast?"
    a: "Most common reasons: chronic deep cycling below 50 percent SOC, missed top-up, missed equalisation, high temperature, low-quality battery."
  - q: "Can I mix lead acid and lithium?"
    a: "Not in the same bank. Different voltage profiles cause balancing issues and rapid degradation of the lead acid bank."
  - q: "What is specific gravity?"
    a: "The relative density of the electrolyte, measured with a hydrometer. Indicates state of charge. 1.265 to 1.275 for fully charged tubular at 27°C."
  - q: "What temperature is best for lead acid?"
    a: "20 to 25 degrees Celsius. Every 10-degree rise above 25°C halves lead acid life."
author: "Nirav Dhanani"
---

## What is a lead acid battery

A lead acid battery is a rechargeable electrochemical cell using lead metal and lead dioxide electrodes immersed in dilute sulphuric acid electrolyte. Invented by Gaston Planté in 1859, it is the oldest commercial rechargeable battery and remains in widespread use for automotive starting, uninterruptible power supplies, telecom backup and cost-sensitive solar off-grid systems.

For Indian solar, lead acid is the legacy chemistry that powered the rural off-grid revolution from 2000 to 2020. Tubular flooded lead acid was the workhorse for solar home systems, telecom towers and small commercial backup. From 2022 onward, [LFP](/glossary/lfp-battery/) has displaced lead acid in most new installations, but lead acid remains relevant in cost-sensitive segments and in automotive applications.

Major Indian manufacturers include Exide, Amara Raja, HBL Power Systems, Su-kam, Luminous and Tata Green Batteries (see our [Exide vs Amaron battery comparison](/blog/exide-vs-amaron-solar-battery-india/) for a head-to-head). India's lead acid recycling industry is one of the most mature globally, recovering over 95 percent of lead content.

> **TL;DR**
> - Lead acid batteries use lead electrodes in sulphuric acid electrolyte and cost roughly ₹8,000 to ₹15,000 per kWh, the cheapest chemistry available.
> - Tubular flooded lead acid delivers 5 to 7 years of service at 50 percent depth of discharge, with 800 to 1,500 cycles.
> - Round-trip efficiency is 75 to 85 percent, well below LFP's 92 to 95 percent.
> - India recycles over 95 percent of lead content, one of the highest recovery rates globally.
> - LFP has displaced lead acid in most new daily-cycling solar installations since 2022, but lead acid remains standard for UPS standby and cost-sensitive rural off-grid systems.

## Lead acid battery explained simply

A lead acid battery has lead plates in a sulphuric acid bath. When you charge it, the acid concentration rises and the plates store energy. When you use it, the plates react with the acid to release current. It is heavy, low-energy-density and needs occasional water top-up, but it is cheap and well understood.

For a small rural home with two hours of evening load, a tubular lead acid still makes sense at the lowest upfront cost. For a daily-cycling hybrid solar system with reliable backup needs, LFP wins on lifecycle cost.

## Why lead acid still matters

Cost. Lowest upfront cost per kWh of any commercial chemistry (see our [solar battery price guide](/blog/solar-battery-price-guide-india-2026/) for current ranges).

Indian manufacturing maturity. Decades of domestic supply chain, recycling and service network.

Recycling. Over 95 percent of lead content is recovered and reused.

Niche fit. UPS standby, automotive starting, cost-sensitive small solar.

Lower thermal runaway risk than NMC lithium.

## How lead acid works

Discharging:
1. At the negative electrode (lead sponge), Pb + SO4²⁻ → PbSO4 + 2e⁻
2. At the positive electrode (lead dioxide), PbO2 + 4H⁺ + SO4²⁻ + 2e⁻ → PbSO4 + 2H2O
3. Lead sulphate forms at both electrodes.
4. Acid concentration decreases.

Charging reverses the reactions, dissolving lead sulphate back into lead and lead dioxide.

The reaction is reversible up to a point. Repeated deep discharge, missed top-up, or chronic low SOC cause hardened sulphate that does not dissolve back, permanently reducing capacity.

## Technical deep dive

### Variants

| Type | Construction | Use case |
|---|---|---|
| Tubular flooded | Tubular positive plate, flat negative | Indian off-grid solar, UPS |
| Flat plate flooded | Flat plates both sides | Automotive starting |
| VRLA AGM | Absorbed glass mat separator, recombinant | Sealed UPS, telecom |
| VRLA gel | Gelled electrolyte | Premium sealed applications |

### Cell voltage

Nominal: 2.0 V per cell. A 12 V battery has 6 cells. A 48 V bank has 24 cells.

Float voltage: 2.25 V/cell typical, 13.5 V for a 12 V battery.
Bulk voltage: 2.4 V/cell, 14.4 V for 12 V.
Equalisation: 2.5 to 2.6 V/cell, 15 to 15.5 V for 12 V.

### Cycle life vs DoD

| DoD | Approximate cycles |
|---|---|
| 100% | 250 to 400 |
| 80% | 350 to 550 |
| 50% | 800 to 1,500 |
| 30% | 1,500 to 3,000 |

For solar service, 50 percent [depth of discharge](/glossary/battery-dod/) is the practical sweet spot for tubular flooded, and it directly sets the pack's usable [cycle life](/glossary/cycle-life/).

### Specific gravity

| State | Specific gravity at 27°C |
|---|---|
| Full charge | 1.265 to 1.275 |
| 50% SOC | 1.225 |
| Discharged | 1.155 to 1.180 |

Hydrometer reading is the most reliable [state of charge](/glossary/battery-soc/) indicator for flooded lead acid.

## Real-world applications

Rural off-grid solar. Tubular flooded packs of 200 to 1,000 Ah at 12 or 24 V, often paired with an [off-grid inverter](/glossary/off-grid-inverter/) and installed as part of turnkey residential solar installations in unelectrified or low-reliability areas.

UPS systems. Indoor flat plate or VRLA AGM, designed for standby with occasional discharge (see our [UPS](/glossary/ups/) glossary entry for how these systems differ from solar inverters).

Telecom backup. Historically VRLA AGM, increasingly being replaced by LFP.

Automotive starting. Flat plate flooded, designed for short high-current bursts.

Inverter home backup. Tubular flooded packs in residential power backup systems.

Solar streetlights (older). Sealed maintenance-free batteries, mostly replaced by LFP in new deployments.

## Advantages

Lowest upfront cost.

Mature Indian manufacturing and recycling.

Robust under heavy current draws.

Tolerant to brief overcharging.

Well-understood failure modes.

Wide ambient operating range for short cycles.

## Limitations

Short cycle life under deep cycling.

Heavy. Energy density 30 to 50 Wh/kg against 90 to 160 for LFP.

Maintenance required for flooded types.

Performance degrades sharply above 30 degrees Celsius.

[Round-trip efficiency](/glossary/round-trip-efficiency/) 75 to 85 percent against 92 to 95 for LFP.

Lead toxicity requires careful handling.

## Common problems

Premature failure. Almost always traceable to chronic deep cycling below 50 percent SOC, missed top-up, or high temperature — see [how long solar batteries actually last in Indian conditions](/blog/how-long-solar-batteries-last-india/) for typical failure timelines.

Sulphation. Hardened lead sulphate on plates that does not dissolve. Battery shows full voltage but no capacity.

Acid stratification. Heavy acid sinks to the bottom. Equalisation mixes it back.

Plate shedding. Active material falls off, accumulates at the bottom, eventually shorts cells.

Negative grid corrosion. End-of-life failure mode for flooded.

Thermal runaway in VRLA at high temperature.

## Best practices

Choose deep-cycle tubular for solar, not automotive starting batteries.

Set the charge controller to the right chemistry profile.

Monthly top-up with distilled water for flooded.

Quarterly equalisation cycle.

Maintain ambient temperature below 30 degrees Celsius.

Cycle within 50 percent DoD for best life.

Annual specific gravity check on each cell.

Replace as a bank, not individual cells.

## Comparison: lead acid vs LFP vs NMC

Modern [lithium-ion battery](/glossary/lithium-ion-battery/) chemistries outperform lead acid on nearly every metric except upfront cost. For a full head-to-head on real-world Indian pricing and lifespan, see our [lithium vs lead-acid battery comparison](/blog/lithium-vs-lead-acid-solar-battery/).

| Feature | Tubular lead acid | LFP | NMC |
|---|---|---|---|
| Cycles at 80% DoD | 350 to 550 | 4,500 to 6,000 | 2,000 to 4,000 |
| Energy density (Wh/kg) | 30 to 50 | 90 to 160 | 150 to 250 |
| Round-trip efficiency | 75 to 85% | 92 to 95% | 93 to 96% |
| Upfront cost (₹/kWh) | 8,000 to 15,000 | 40,000 to 70,000 | 50,000 to 90,000 |
| Lifecycle cost (₹/kWh-cycle) | 15 to 30 | 6 to 12 | 10 to 18 |
| Best fit | Rural off-grid, UPS standby | Daily-cycling solar | High-density EV |

## Indian market context

Tubular flooded lead acid is still the default in rural and small home off-grid solar under MNRE solar lantern and home system programmes.

Telecom operators have shifted most new tower deployments to LFP. Existing lead acid banks are being phased out as they reach end of life.

Recycling is mandated under Battery Waste Management Rules 2022, with extended producer responsibility on manufacturers.

Major brands include Exide, Amara Raja, HBL, Su-kam, Luminous and Tata Green Batteries; our [best solar battery brands in India](/blog/best-solar-battery-brands-india-2026/) roundup compares them across chemistries. Correctly sizing whichever bank you choose matters as much as the brand — [SurgePV's battery sizing guide](https://surgepv.com/hub/energy-storage/battery-sizing/) walks through the calculation.

For PM Surya Ghar net-metered systems, batteries are not subsidised; both lead acid and LFP can be used for backup as user choice.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 13369 | Stationary lead acid batteries with tubular positive plates |
| IS 1652 | Stationary cells and batteries |
| IS 1146 | Lead acid storage batteries general |
| IEC 60896 | Stationary lead acid batteries |
| IEEE 1188 | Maintenance for VRLA |
| Battery Waste Management Rules 2022 | Recycling and EPR |

## Common mistakes

Using automotive starting batteries for solar cycling.

Chronic operation below 50 percent SOC.

Skipping water top-up for flooded.

Skipping monthly equalisation.

Mounting in unventilated hot enclosures.

Mixing old and new batteries in the same bank.

Setting charge controller to wrong chemistry profile.

## Key takeaways

Lead acid is the legacy chemistry for cost-sensitive solar storage. Tubular flooded delivers 5 to 7 years of service at 50 percent DoD with proper maintenance. LFP has displaced lead acid in most new daily-cycling solar applications because of better lifecycle economics. Lead acid retains relevance in UPS standby, automotive starting and the lowest-cost rural off-grid segment.

## Need help choosing between lead acid and lithium?

QBits Energy supplies both lead acid and LFP storage solutions for Indian customers, with sizing studies that match total lifecycle cost to use case.

## Further reading

For how Lead Acid Battery plays out in real projects, these guides go deeper:

- [Lithium vs Lead-Acid Solar Battery for Indian Homes](/blog/lithium-vs-lead-acid-solar-battery/)
- [Best Solar Battery Brands in India 2026](/blog/best-solar-battery-brands-india-2026/)
- [How Long Do Solar Batteries Last in India?](/blog/how-long-solar-batteries-last-india/)
- [Solar Battery Price Guide India 2026](/blog/solar-battery-price-guide-india-2026/)

## Sources

- IS 13369, IS 1652, IS 1146, Bureau of Indian Standards.
- IEC 60896, IEEE 1188, international lead acid standards.
- Battery Waste Management Rules 2022, Ministry of Environment, Forest and Climate Change.
- Exide, Amara Raja, HBL Power Systems product documentation.
- BloombergNEF Battery Price Survey 2024.
- Linden's Handbook of Batteries (Reddy, T., editor), McGraw-Hill.
- Berndt D., Maintenance-Free Batteries, Wiley.
- IEA Energy Storage Outlook 2024.
- IRENA Battery Storage for Renewables.
