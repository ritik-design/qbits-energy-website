---
term: "SPD"
title: "SPD (Surge Protection Device): Definition, Types & Solar Applications"
description: "SPDs protect electrical systems from voltage surges and lightning strikes. Full guide and Indian solar applications."
category: "Protection"
categorySlug: "protection"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is spd
  - surge protection device
  - solar spd
  - lightning protection solar
  - dc spd
shortDefinition: "A Surge Protection Device (SPD) limits transient overvoltages from lightning or switching events by diverting surge current to earth. SPDs are mandatory on both DC and AC sides of solar installations in Indian thunderstorm zones."
quickFacts:
  industry: "Electrical Protection"
  primaryUse: "Surge and lightning protection"
  commonUsers: "EPCs, installers, customers"
  relevantStandards: "IS 16480, IEC 61643, IEC 60364-4-44"
  relatedTechnologies: "MOV, gas discharge tube, lightning protection"
relatedTerms:
  - { slug: "mcb", term: "MCB" }
  - { slug: "rccb", term: "RCCB" }
  - { slug: "fuse", term: "Fuse" }
  - { slug: "earthing", term: "Earthing" }
  - { slug: "lightning-protection", term: "Lightning Protection" }
  - { slug: "lightning-arrestor", term: "Lightning Arrestor" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "combiner-box", term: "Combiner Box" }
  - { slug: "dc-cable", term: "DC Cable" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "isolator", term: "Isolator" }
  - { slug: "distribution-board", term: "Distribution Board" }
faqs:
  - q: "What is SPD in simple words?"
    a: "A device that diverts dangerous voltage spikes (from lightning or switching) safely to earth, protecting your inverter, panels and appliances."
  - q: "What does SPD stand for?"
    a: "Surge Protection Device. Also called transient voltage surge suppressor (TVSS)."
  - q: "Are SPDs required for solar?"
    a: "Yes for Indian installations. CEA Measures and IS 17387 require SPD on both DC and AC sides for grid-tied systems."
  - q: "What are SPD types?"
    a: "Type 1: tested with 10/350 µs lightning waveform, used at service entry. Type 2: tested with 8/20 µs waveform, used at sub-distribution. Type 3: appliance-level. Most solar use Type 2."
  - q: "Do I need both DC and AC SPDs?"
    a: "Yes. Indian solar systems use SPDs on both sides because surges can enter from either path."
  - q: "Where do SPDs go in a solar system?"
    a: "DC SPD inside combiner box or inverter input. AC SPD at the inverter output or distribution board."
  - q: "Can SPD prevent direct lightning strikes?"
    a: "No. SPD handles indirect surges and conducted transients. Direct strikes need lightning protection system (LPS)."
  - q: "How does an SPD work?"
    a: "Metal oxide varistor (MOV) inside has very high impedance at normal voltage, but drops to low impedance when voltage exceeds threshold, shunting current to earth."
  - q: "Does SPD wear out?"
    a: "Yes. Each surge consumes some of the MOV's life. Indicator window changes colour at end of life. Replace immediately."
  - q: "How often should SPD be replaced?"
    a: "Replace when indicator shows red (or fault status). Otherwise typically every 5 to 10 years preventively in lightning-prone areas."
  - q: "Are SPDs BIS-certified?"
    a: "Yes. IS 16480 covers SPD certification in India."
  - q: "What is SPD discharge capacity?"
    a: "Imax (8/20 µs): maximum surge current SPD can handle once. In (8/20 µs): nominal surge current SPD can handle multiple times."
  - q: "Do off-grid systems need SPDs?"
    a: "Yes if installed in lightning-prone areas. Same logic applies."
  - q: "What is the typical cost of SPDs?"
    a: "₹500 to ₹3,000 per SPD for residential, ₹3,000 to ₹15,000 for C&I, depending on class and discharge capacity."
  - q: "Does SPD need earthing?"
    a: "Yes, mandatory. The whole purpose is to divert surge current to earth. Without earthing, SPD is non-functional."
---

## What is an SPD

A Surge Protection Device (SPD) is an electrical device designed to limit transient overvoltages and divert surge currents to ground, protecting downstream equipment from damage. SPDs are essential for solar installations in lightning-prone areas, which includes most of India.

SPDs use voltage-limiting components, most commonly metal oxide varistors (MOVs), gas discharge tubes (GDTs) or silicon avalanche diodes. Under normal voltage, the SPD presents very high impedance and draws negligible current. When voltage exceeds the clamping threshold, impedance drops dramatically, allowing surge current to flow to earth instead of damaging equipment.

For Indian solar installations, CEA Measures Relating to Safety and IS 17387 require SPD on both the DC side (between PV modules and inverter) and the AC side (between inverter and grid). Indian thunderstorm activity makes SPD non-optional for plant longevity.

## Why SPDs matter

Equipment protection. Inverters, panels, batteries and connected appliances cost lakhs to crore. SPDs cost a few thousand and prevent catastrophic loss.

Insurance compliance. Insurers require SPD-protected installations for claim coverage.

Regulatory compliance. CEA Measures Relating to Safety and IS 17387 mandate SPDs.

System availability. Surge damage causes long downtime for repairs. SPDs prevent the damage.

Investment protection. Solar is a 25-year asset. SPD is the cheapest way to protect that investment.

## How an SPD works

Under normal voltage conditions, the MOV (most common SPD technology) presents very high impedance (megaohms). Negligible current flows through the SPD; downstream equipment receives clean power.

When a voltage surge exceeds the MOV's clamping threshold (typically 600 V to 1.5 kV for low-voltage applications):

1. MOV impedance drops to milliohms within nanoseconds.
2. Surge current flows through the SPD to earth.
3. Voltage across the protected equipment is clamped at the residual voltage of the SPD.
4. Energy dissipated in the SPD reduces its remaining life slightly.

A status indicator (window or LED) shows the SPD's health. Red indicates end of life; replace immediately.

## Technical deep dive

### SPD types

| Type | Surge waveform | Use location |
|---|---|---|
| Type 1 | 10/350 µs lightning current | Service entry, near LPS down-conductors |
| Type 2 | 8/20 µs surge current | Sub-distribution boards |
| Type 3 | Combination waveform | Appliance-level, sensitive electronics |
| Type 1+2 | Combined | Compact installations |

Most solar installations use Type 2. Service entry to lightning-protected buildings adds Type 1.

### SPD ratings

| Parameter | Description |
|---|---|
| Uc | Maximum continuous operating voltage |
| Up | Voltage protection level (residual voltage) |
| In | Nominal discharge current (8/20 µs) |
| Imax | Maximum discharge current (8/20 µs) |
| Iimp | Impulse discharge current (10/350 µs, Type 1) |

### Typical Indian residential SPD selection

| Location | SPD type | Uc | In |
|---|---|---|---|
| DC side, combiner box | Type 2 | 1000 V DC | 20 kA |
| AC side, inverter output | Type 2 | 275 V AC | 20 kA |
| Service entry (with LPS) | Type 1+2 | 275 V AC | 25 kA (Imax) + 12.5 kA (Iimp) |

### MOV vs GDT

| Technology | Pros | Cons |
|---|---|---|
| MOV | Fast response, low cost | Wears out with each surge |
| GDT | Long life, high discharge capacity | Slow response, voltage follow-through |
| Hybrid | Combines both | Higher cost |

## Real-world applications

Solar inverter DC input protection.

Solar inverter AC output protection.

Combiner box on utility plants.

Distribution panel at building entry.

Telecom tower equipment protection.

EV charger protection.

## Common SPD problems

End of life not noticed. Indicator window goes red but no one looks at it.

Inadequate earthing nullifying SPD function.

Wrong type (Type 3 where Type 2 is needed).

SPD installed but not connected to earth.

Insufficient discharge capacity for site lightning exposure.

Cascading failures when one stage of SPD fails.

## Best practices

Install Type 2 SPD on both DC and AC sides.

Verify earthing resistance below 5 ohms.

Place SPD as close to protected equipment as possible.

Use SPDs with status indicators.

Annual visual inspection of indicators.

Replace SPDs immediately when end-of-life indicated.

Coordinate Type 1 with Type 2 if both used.

Use back-up fuse to disconnect failed SPD.

## Comparison: SPD types

| Type | Test current | Application | Solar use |
|---|---|---|---|
| Type 1 | 10/350 µs, kA-scale | Service entry, direct lightning current | Buildings with LPS |
| Type 2 | 8/20 µs, kA-scale | Sub-distribution | Standard solar |
| Type 3 | 8/20 µs and 1.2/50 µs combo | Appliance-level | Sensitive electronics |

## Indian market context

Major Indian SPD brands include Phoenix Contact, ABB, Schneider Electric, Siemens, Havells, OBO, Citel, DEHN and Mersen.

ALMM does not list SPDs. BIS certification under IS 16480 applies.

CEA Measures Relating to Safety 2023 references SPD installation.

Indian thunderstorm density (especially north-east and central India) drives SPD demand.

PM Surya Ghar residential installations include SPD on both DC and AC sides in most installer specifications.

## Standards and certifications

| Standard | Scope |
|---|---|
| IS 16480 | Indian SPD standard |
| IEC 61643 series | International SPD standard |
| IEC 60364-4-44 | Protection against voltage disturbances |
| IS 17387 | Inverter grid interconnection (references SPD) |
| CEA Measures Relating to Safety 2023 | Indian safety regulations |

## Common mistakes

Skipping DC SPD to save cost.

Installing SPD without proper earthing.

Wrong Uc value (clamping voltage too high for the system).

Inadequate discharge capacity for site exposure.

Not replacing end-of-life SPDs.

Mixing brands or generations without coordination.

Treating SPD as a one-time install instead of consumable.

## Key takeaways

SPDs are mandatory protection devices for Indian solar installations. Type 2 SPDs on both DC and AC sides protect against indirect lightning and switching surges. They wear out and must be replaced when end-of-life is indicated. Proper earthing is essential for SPD function. The cost of SPDs is negligible compared to the inverter and module investment they protect.

## Need lightning-safe solar installation?

QBits Energy designs and installs Indian solar systems with appropriately specified SPDs, earthing and lightning protection coordination across all customer segments.

## Sources

- IS 16480, Indian Standard for surge protection devices.
- IEC 61643 series, International SPD standard.
- IEC 60364-4-44, Protection against voltage disturbances.
- IS 17387, Inverter grid interconnection.
- CEA Measures Relating to Safety and Electric Supply Regulations 2023.
- IEC 62305 series, Lightning protection.
- Manufacturer technical documentation from Phoenix Contact, ABB, Schneider, Siemens, Havells, OBO, Citel, DEHN.
- IEEE C62 series on surge protection.
