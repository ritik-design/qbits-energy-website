---
term: "Battery DOD"
title: "Battery DOD (Depth of Discharge): Definition, Cycle Life & Solar Sizing"
description: "DOD is how deeply a battery is discharged in each cycle. Full guide to DOD vs cycle life and solar storage sizing."
category: "Batteries"
categorySlug: "batteries"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is battery dod
  - depth of discharge
  - dod cycle life
  - usable battery capacity
  - lfp dod
shortDefinition: "Depth of Discharge (DOD) is the percentage of a battery's capacity that has been discharged from full. Higher DOD per cycle means more usable energy but shorter cycle life. DOD discipline is one of the most important design choices in solar storage."
quickFacts:
  industry: "Battery Storage Engineering"
  primaryUse: "Battery sizing and lifecycle planning"
  commonUsers: "EPCs, EMS designers, customers, manufacturers"
  relevantStandards: "IEC 61960, IEC 62619, IS 16893"
  relatedTechnologies: "BMS, LFP, NMC, lead acid"
relatedTerms:
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "cycle-life", term: "Cycle Life" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "bms", term: "BMS" }
  - { slug: "usable-capacity", term: "Usable Capacity" }
  - { slug: "round-trip-efficiency", term: "Round Trip Efficiency" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "c-rate", term: "C-Rate" }
  - { slug: "soh", term: "State of Health" }
faqs:
  - q: "What is DOD in simple words?"
    a: "How empty you let your battery get in each cycle. 80 percent DOD means you used 80 percent of the capacity and left 20 percent untouched."
  - q: "What is the relationship between DOD and SOC?"
    a: "DOD + SOC = 100 percent. If SOC is 30 percent, DOD for that cycle is 70 percent."
  - q: "What is the recommended DOD for LFP?"
    a: "80 to 90 percent for daily cycling. LFP tolerates deep cycling without significant cycle life impact."
  - q: "What is the recommended DOD for lead acid?"
    a: "50 percent for tubular flooded in daily cycling. Going beyond drops cycle life dramatically."
  - q: "Why does deeper DOD reduce cycle life?"
    a: "More mechanical stress on the electrode structure, more thermal stress, more chance of side reactions. The relationship is non-linear and chemistry-specific."
  - q: "How does DOD affect battery sizing?"
    a: "Required nominal capacity = required usable kWh / DOD / round-trip efficiency. For 6 kWh usable at 80 percent DOD with 92 percent efficiency, nominal = 6 / 0.8 / 0.92 = 8.15 kWh."
  - q: "Can I cycle below recommended DOD?"
    a: "Yes, the BMS allows it, but you sacrifice usable energy in exchange for marginally longer life. Most users prefer to size for the recommended DOD."
  - q: "What is usable capacity?"
    a: "Nominal capacity multiplied by recommended DOD. A 10 kWh nominal LFP pack at 90 percent DOD has 9 kWh usable."
  - q: "Does DOD affect warranty?"
    a: "Yes. Battery warranties typically specify cycle count at a given DOD. Operating at higher DOD invalidates the cycle warranty terms."
  - q: "Is DOD the same as state of discharge?"
    a: "Yes, terms are interchangeable. DOD is the standard term in batteries."
  - q: "What is partial DOD cycling?"
    a: "Cycling between, say, 50 percent SOC and 80 percent SOC, never reaching 0 or 100. Partial cycling extends cycle life dramatically."
  - q: "Why do EVs use 80 percent charge limits?"
    a: "To keep DOD lower and extend calendar life of NMC batteries. LFP EVs do not need this discipline."
  - q: "Can DOD be set in the inverter?"
    a: "Yes, modern hybrid inverters allow user-configurable minimum SOC, which sets the effective DOD."
  - q: "What is rainflow counting?"
    a: "An algorithm for counting partial cycles. Used in cycle life estimation when actual cycles are not full DOD."
  - q: "Should I keep the battery at 100 percent SOC always?"
    a: "For lead acid yes (with float charging). For LFP, periodic full charge is good. For NMC, prolonged 100 percent storage accelerates calendar ageing."
author: "Nirav Dhanani"
---

## What is battery DOD

Depth of Discharge (DOD) is the percentage of a battery's nominal capacity that has been discharged from full. It is the inverse of State of Charge: SOC + DOD = 100 percent at any moment. The term is used in two senses: instantaneous DOD (right now) and cycle DOD (the deepest point in a charge-discharge cycle).

For solar storage design, the relevant metric is cycle DOD. Sizing decisions, warranty terms and cycle life predictions all use cycle DOD. A 10 kWh nominal battery sized for 80 percent DOD provides 8 kWh of usable energy per cycle.

DOD is the single most important design choice in battery sizing after capacity itself. Choosing the right DOD for the chemistry balances upfront capex against cycle life and lifecycle cost.

## DOD explained simply

If your battery holds 10 kWh when full and you discharge it down to 2 kWh, you used 80 percent. That is 80 percent DOD. Cycle life depends on how deep you go each cycle.

For lead acid, going deeper than 50 percent per cycle damages the battery quickly. For LFP, you can comfortably do 80 to 90 percent every day. Different chemistries, different DOD habits.

## Why DOD matters

Battery sizing. Larger nominal capacity is needed at lower DOD to deliver the same usable energy.

Cycle life. Deeper DOD means fewer cycles before end of life. The relationship is non-linear and chemistry-specific.

Lifecycle cost. Lower DOD extends life but costs more upfront. Sweet spot depends on energy throughput needs.

Warranty terms. Manufacturers specify cycle warranties at a given DOD. Operating beyond invalidates terms.

User experience. Apparent runtime depends on usable capacity, which depends on DOD configuration.

## How DOD affects cycle life

Cycle life is the number of full charge-discharge cycles before capacity drops to a specified threshold, typically 80 percent of original. At lower DOD, more cycles are possible.

For LFP, an approximate relationship:

Cycles ≈ 6000 × (1 / DOD)^0.5

At 100 percent DOD: 6,000 cycles.
At 80 percent DOD: 6,700 cycles.
At 50 percent DOD: 8,500 cycles.
At 30 percent DOD: 11,000 cycles.

For lead acid the dependence is much steeper:

At 100 percent DOD: 250 cycles.
At 50 percent DOD: 1,200 cycles.
At 30 percent DOD: 2,500 cycles.

## Technical deep dive

### DOD sizing formula

Required nominal kWh = usable kWh / (DOD × η_rt)

Example: A residence needs 6 kWh usable per day, designs for 80 percent DOD on LFP at 92 percent round-trip:
Nominal = 6 / (0.80 × 0.92) = 8.15 kWh
Round up to nearest commercial size, typically 10 kWh nominal.

### DOD vs Calendar ageing trade-off

Beyond cycle life, calendar ageing happens whether the battery is cycled or not. Calendar ageing is faster at high SOC and high temperature.

For lithium-ion, holding the battery at 100 percent SOC accelerates calendar ageing. Operating at 80 to 90 percent average SOC balances cycle life and calendar life.

### Partial DOD cycling

Real-world solar storage rarely sees full DOD. Typical residential cycles:
- Daytime charge from 30 to 95 percent (65 percent DOD)
- Evening discharge from 95 to 30 percent (65 percent DOD)

Cumulative cycle equivalents are computed via rainflow counting.

### DOD and round-trip efficiency

Round-trip efficiency varies slightly with DOD. Higher DOD includes lower-SOC operation, where coulombic and voltage efficiency dip slightly.

| Chemistry | Round-trip at 50% DOD | Round-trip at 100% DOD |
|---|---|---|
| LFP | 94% | 92% |
| NMC | 95% | 93% |
| Lead acid | 85% | 75% |

## Real-world applications

Residential storage sizing for hybrid solar.

Telecom backup with deep discharge during long outages.

EV range planning (DOD = trip energy / battery capacity).

Industrial peak shaving with shallow cycling.

Off-grid sizing accounting for cloudy day autonomy.

## Advantages of disciplined DOD

Extends battery life.

Reduces lifecycle cost per kWh delivered.

Preserves warranty validity.

Provides headroom for unexpected high-load events.

## Limitations

Over-conservative DOD wastes battery capacity.

Customer education needed to avoid intuitive 'use all of it' approach.

EMS must enforce DOD limits through SOC cutoffs.

DOD discipline is harder to maintain in inverter modes that prioritise self-consumption over battery health.

## Common problems

Customer using full DOD to maximise short-term backup, killing the battery in 18 months.

Inverter EMS configured for higher DOD than the battery warranty allows, voiding cycle warranty.

Mismatched DOD assumption between EPC and customer expectations.

Calendar ageing ignored in sizing for low-cycle applications.

DOD different on different days due to load variability, complicating cycle counting.

## Best practices

Configure inverter minimum SOC to match manufacturer's recommended DOD.

Size battery for design DOD, not nominal capacity.

Document DOD in the EPC specification.

Train the user on what DOD means for their warranty.

Use EMS modes that respect DOD limits.

Audit actual DOD distribution against design assumption annually.

## Comparison: typical DOD recommendations

| Chemistry | Cycle DOD recommendation | Calendar life consideration |
|---|---|---|
| LFP | 80 to 90% | Periodic full charge is fine |
| NMC | 70 to 80% | Avoid sustained 100% SOC |
| Lead acid (tubular) | 50% | Float charging preferred |
| Lead acid (AGM) | 50% | Float charging preferred |
| Vanadium flow | 100% | No DOD limit |
| Sodium-ion | 80 to 90% | Similar to LFP |

## Indian market context

Indian residential hybrid systems typically design for 80 percent DOD on LFP and 50 percent DOD on tubular lead acid.

Telecom backup systems are designed for occasional 100 percent DOD events during long outages, accepting cycle life impact.

Inverter compatibility lists from major brands document the assumed DOD for warranty compliance.

PM Surya Ghar does not subsidise batteries, so customer choice of DOD is governed only by manufacturer warranty and EPC recommendation.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61960 | Performance of secondary lithium cells |
| IEC 62619 | Safety of secondary lithium cells |
| IS 16893 | Indian stationary battery storage |
| IEEE 1188 | VRLA maintenance |
| Manufacturer warranty documents | Cycle count at specified DOD |

## Common mistakes

Sizing the battery to nominal capacity instead of usable capacity at design DOD.

Allowing customer-set EMS strategies that exceed recommended DOD.

Comparing batteries by nominal capacity alone, ignoring DOD warranty terms.

Forgetting calendar ageing when DOD is shallow.

Mixing partial DOD cycling with rainflow counting incorrectly.

Not auditing actual DOD distribution post-installation.

## Key takeaways

DOD is the depth of each charge-discharge cycle, expressed as a percentage of nominal capacity. LFP tolerates 80 to 90 percent DOD daily. Lead acid requires 50 percent or shallower DOD for reasonable cycle life. Sizing for the correct DOD, configuring the inverter accordingly, and respecting warranty terms are the disciplines that decide actual battery life.

## Need DOD-correct battery sizing?

QBits Energy sizes solar storage systems by usable kWh at appropriate DOD, matched to chemistry, inverter compatibility and warranty terms.

## Sources

- IEC 61960:2017, Performance requirements for secondary lithium cells.
- IEC 62619:2017, Safety requirements for secondary lithium cells.
- IS 16893, Indian Standard for stationary battery storage.
- Manufacturer warranty documents from Pylon Tech, BYD, Goodwe, Sungrow, Solis, Tata Green.
- Plett G. L., Battery Management Systems, Volume I and II, Artech House.
- Reddy T. B., Linden's Handbook of Batteries, McGraw-Hill.
- NREL Technical Report TP-7A40-83933, 2024 Battery Storage Cost Projections.
- BloombergNEF Battery Storage Outlook 2024.
- IEA Energy Storage Outlook 2024.
