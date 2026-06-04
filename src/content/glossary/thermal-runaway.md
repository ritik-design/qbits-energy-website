---
term: "Thermal Runaway"
title: "Thermal Runaway: Definition, Risk & Battery Safety"
description: "Thermal runaway is uncontrolled battery overheating. Full guide to safety and Indian applications."
category: "Batteries"
categorySlug: "batteries"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - thermal runaway
  - battery fire
  - lithium ion fire
  - battery safety
  - lfp safety
shortDefinition: "Thermal runaway is uncontrolled self-heating of a battery cell, where temperature increases trigger more heat-releasing reactions, leading to fire or explosion. LFP highly resistant (270°C threshold). NMC more vulnerable (150-180°C). Critical safety concern in lithium-ion storage."
quickFacts:
  industry: "Battery Safety"
  primaryUse: "Safety risk assessment"
  commonUsers: "Manufacturers, regulators, EPCs"
  relevantStandards: "IEC 62619, IS 16893, UL 9540A"
  relatedTechnologies: "BMS, thermal management"
relatedTerms:
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "lfp-battery", term: "LFP Battery" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "bms", term: "BMS" }
  - { slug: "iec-62619", term: "IEC 62619" }
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "battery-dod", term: "Battery DOD" }
  - { slug: "c-rate", term: "C-Rate" }
  - { slug: "calendar-life", term: "Calendar Life" }
  - { slug: "cycle-life", term: "Cycle Life" }
  - { slug: "deep-discharge", term: "Deep Discharge" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
faqs:
  - q: "What is thermal runaway in simple words?"
    a: "A battery overheating uncontrollably, where the heat triggers more chemical reactions that release more heat, leading to fire or explosion."
  - q: "Are LFP batteries safe?"
    a: "LFP is the safest commercial lithium chemistry. Thermal runaway threshold above 270°C. Vents but rarely flames."
  - q: "What about NMC?"
    a: "NMC threshold 150-180°C. More energy density but higher fire risk. Used in EVs where energy/weight matters."
  - q: "What causes thermal runaway?"
    a: "Overcharging, over-discharging, internal short circuit, external short circuit, mechanical damage, manufacturing defects, exposure to fire."
  - q: "How is thermal runaway prevented?"
    a: "BMS protection (over-voltage, over-current, over-temperature cutoffs), thermal management (cooling), safe cell design, cell quality, mechanical protection."
  - q: "Has LFP caught fire?"
    a: "Extremely rarely under normal operation. Manufacturing defects or extreme abuse can cause incidents."
  - q: "Are NMC fires more common?"
    a: "Yes statistically. EV fires more associated with NMC. LFP fires very rare."
  - q: "What is propagation?"
    a: "When one cell's thermal runaway triggers neighbouring cells. Pack design prevents this."
  - q: "What is UL 9540A test?"
    a: "Standardised fire test for battery storage systems. Determines fire behaviour and suppression requirements."
  - q: "Is LFP safer than lead acid?"
    a: "Different risks. Lead acid: acid leakage, hydrogen gas. LFP: minimal fire risk, no acid. LFP generally considered safer for indoor installation."
  - q: "What is the impact of high temperature?"
    a: "Accelerates calendar aging. Approaches runaway threshold. Forced ventilation or cooling essential in Indian summers."
  - q: "Can BMS prevent runaway?"
    a: "Yes for normal operation issues. Cannot prevent damage from severe mechanical or thermal abuse."
  - q: "How fast does runaway happen?"
    a: "From trigger to peak: seconds to minutes. Propagation through pack: minutes to hours."
  - q: "What is fire suppression?"
    a: "Water deluge, aerosol, gas-based systems. LFP fires need different approach than typical fires."
  - q: "Are Indian battery cabinets safe?"
    a: "ALMM-listed packs meet IS 16893 safety. Outdoor cabinet design includes thermal management and runaway prevention."
---

## What is thermal runaway

Thermal runaway is uncontrolled self-heating of a battery cell, where rising temperature triggers exothermic chemical reactions that release additional heat, further increasing temperature in a positive feedback loop. Without intervention, thermal runaway leads to cell venting, fire and potential explosion. In lithium-ion batteries, thermal runaway is the most serious safety concern.

The chain reaction:
1. Initial trigger (mechanical, electrical, thermal abuse)
2. Internal short circuit or chemical decomposition begins
3. Heat released raises cell temperature
4. Higher temperature accelerates decomposition reactions
5. More heat released
6. Threshold crossed: rapid temperature rise
7. Venting of flammable electrolyte
8. Ignition and propagation

Different lithium chemistries have different thermal runaway thresholds:
- LFP (Lithium Iron Phosphate): 270°C - safest commercial chemistry
- NMC (Nickel Manganese Cobalt): 150-180°C
- LCO (Lithium Cobalt Oxide): 130-160°C
- LTO (Lithium Titanate): Very stable, rare runaway

For Indian solar storage, LFP's superior thermal stability makes it the dominant choice. NMC reserves the EV market where energy density justifies the higher risk profile.

## Why thermal runaway matters

Safety. Primary safety concern in lithium-ion storage.

Insurance. Insurers assess thermal runaway risk.

Installation. Indoor vs outdoor placement depends on risk.

Cabinet design. Ventilation and fire suppression considerations.

Customer trust. Adoption depends on safety confidence.

## Thermal runaway thresholds

| Chemistry | Onset temperature | Outcome |
|---|---|---|
| LFP | 270°C | Vents, rarely flames |
| NMC | 150-180°C | Vents and flames |
| NCA | 150°C | Aggressive flames |
| LCO | 130-160°C | Aggressive flames |
| LTO | 380°C+ | Very stable |
| Sodium-ion | 250-300°C | Similar to LFP |
| Vanadium flow | n/a | No risk (aqueous) |

## Technical deep dive

### Trigger mechanisms

| Trigger | Description |
|---|---|
| Overcharge | Excess voltage drives reaction |
| Over-discharge | Plating and crystal damage |
| External short | High current heating |
| Internal short | Cell defect causing internal current |
| Crush | Mechanical separator damage |
| Penetration | Direct external short |
| Overheat | Thermal trigger |
| Fire exposure | External heat |

### LFP vs NMC failure behaviour

| Aspect | LFP failure | NMC failure |
|---|---|---|
| Onset temperature | 270°C | 150-180°C |
| Energy release | Modest | High |
| Flame visibility | Rare | Common |
| Gas evolution | Mostly oxygen | Oxygen + flammables |
| Propagation risk | Low | High |
| Suppression | Standard fire methods | Specialised |

### BMS thermal protection

| Protection | Threshold |
|---|---|
| Over-temperature charge | 50°C |
| Over-temperature discharge | 60°C |
| Cell temperature monitoring | Continuous |
| Cell-to-cell temperature variation | Alarm if >5°C |
| Emergency shutdown | Automatic |

### UL 9540A test outcomes

| Pass criteria | Description |
|---|---|
| No propagation between cells | Cell-level isolation maintained |
| Limited gas evolution | Quantified |
| No external fire spread | Cabinet contains event |
| Smoke and toxicity within limits | Hazard assessment |

## Real-world applications

Battery cabinet safety design.

Insurance underwriting.

Building code compliance.

Site safety planning.

Customer safety education.

## Best practices

Use only IEC 62619 / IS 16893 certified cells.

Choose LFP for stationary residential storage.

Implement BMS with temperature monitoring and cutoffs.

Maintain cabinet ambient below 30°C.

Locate cabinets away from flammables.

Plan fire suppression appropriate to chemistry.

Document UL 9540A test results.

## Indian market context

LFP dominates Indian residential and small commercial storage.

ALMM and IS 16893 certification ensures basic safety.

Major Indian brands (Goodwe Storage, Sungrow, Pylon Tech, BYD) ship LFP with BMS protection.

EV LFP adoption (Ola Electric, BYD) supported by safety profile.

Cabinet design standards developing through IS 16893 framework.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62619 | Industrial lithium safety |
| IS 16893 | Indian stationary storage |
| UL 1973 | US stationary safety |
| UL 9540A | Fire test methodology |
| AIS 156, 038 | Indian EV battery safety |

## Key takeaways

Thermal runaway is uncontrolled battery overheating leading to fire or explosion. LFP highly resistant (threshold 270°C); NMC more vulnerable (150-180°C). LFP dominant in Indian stationary storage due to safety. BMS protection, thermal management and proper cabinet design prevent occurrence. UL 9540A testing provides quantified fire risk assessment. Indian regulations through IEC 62619 / IS 16893 establish minimum safety.

## Need thermally safe storage solutions?

QBits Energy supplies IS 16893 certified LFP battery systems with BMS protection and thermal management designed for Indian climate conditions.

## Sources

- IEC 62619, Industrial lithium safety.
- IS 16893, Indian stationary storage.
- UL 1973, UL 9540A, US safety standards.
- AIS 156, AIS 038, Indian EV safety.
- NREL Battery Safety Studies.
- Sandia National Laboratories thermal runaway research.
- BloombergNEF Battery Safety Reports.
- IEA Battery Storage Safety publications.
- Manufacturer LFP safety documentation.
