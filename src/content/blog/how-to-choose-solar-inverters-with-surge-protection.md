---
title: "How to Choose Solar Inverters with Surge Protection"
excerpt: "How to specify surge-protected solar inverters in India: DC and AC SPD types, the ratings to read from a datasheet, certification, warranty wording and a site risk-assessment method for Indian EPCs."
description: "How to specify surge-protected solar inverters in India: DC/AC SPD requirements, Type 1 vs Type 2, kA ratings, and certification standards to check."
category: "Buying Guide"
date: 2026-04-08
readTime: "12 min"
image: "/og/blog-how-to-choose-solar-inverters-with-surge-protection.webp"
author: "Keyur Rakholiya"
updatedDate: 2026-10-14
keywords:
  - surge protection solar inverter india
  - DC SPD AC SPD inverter
  - lightning protection solar
  - Type 1 Type 2 SPD
  - monsoon inverter protection
  - IEC 61643
faqs:
  - q: "What SPD ratings are the minimum acceptable for Indian installations?"
    a: "There is no single minimum that applies to every site, and we found no Indian standard that sets one for rooftop solar, so we quote no kA figure. SPD ratings should come from a risk assessment for the site and from the inverter's own specification: choose a DC SPD whose maximum continuous operating voltage is above the array's maximum open-circuit voltage at the coldest temperature, whose voltage protection level (Up) is below the withstand level of the equipment it protects, and whose nominal and maximum discharge currents suit the site's exposure and any external lightning protection system. Ask the manufacturer or designer to show these values against IEC 61643-31 (DC) and IEC 61643-11 (AC)."
  - q: "How often should SPDs be inspected and replaced?"
    a: "Follow the SPD manufacturer's published guidance for the specific module, because intervals depend on the product and the site. As a practice, check the status indicator at every service visit, replace an SPD whose indicator shows it has operated, and inspect more often after a nearby lightning event or a grid disturbance. A spent SPD cannot protect against the next surge event. We found no sourced replacement interval that applies to every product, so none is quoted."
  - q: "What protection level suits high-rainfall monsoon regions?"
    a: "Base the choice on a lightning risk assessment for the site rather than on the region's rainfall. Where the assessment or the site design calls for protection against direct strikes, such as an external lightning protection system, a Type 1 (10/350 microsecond) device may be needed at the entry in addition to Type 2 (8/20 microsecond) devices that protect against induced surges. Ask your designer to document the risk assessment and the SPD types chosen. We found no sourced lightning-density figure by Indian region that we could use for sizing, so we publish none."
  - q: "Can I retrofit external SPDs to older inverters without integrated protection?"
    a: "Yes, but proper specification and installation matter significantly. Use SPDs tested to the relevant part of IEC 61643, sized for the specific inverter DC and AC ratings, installed close to the inverter terminals with short, low-impedance connections to earth. Whether an integrated SPD is better than an external one depends on the exact products, so compare the datasheets and the warranty wording rather than assuming. Check with the inverter manufacturer that an added SPD does not affect the warranty."
  - q: "What are the red flags on inverter datasheets indicating weak surge protection?"
    a: "Red flags include missing or unclear SPD specifications in the datasheet, a requirement to buy SPDs separately without saying so, SPDs from unverifiable suppliers without test reports, no stated Up, In or Imax values, no status indication, and vague warranty wording about surge events. These do not prove poor protection, but each one is a reason to ask for the controlling document before ordering."
  - q: "How does inadequate surge protection affect inverter warranty claims?"
    a: "It can, because manufacturers commonly exclude damage from events outside the stated conditions, and some warranty documents list surge or lightning among the exclusions. Read the warranty text for surge, lightning and grid-event wording, ask whether integrated SPDs are covered and whether external SPDs or earthing must be installed to a stated specification, and keep photographs and test records from commissioning in case of a claim."
  - q: "What's the difference between Type 1, Type 2, and Type 3 SPDs?"
    a: "Type 1 SPDs are tested with the 10/350 microsecond waveform that represents direct lightning current and are used where a lightning protection system or direct-strike exposure requires it, usually at the service entry. Type 2 SPDs are tested with the 8/20 microsecond waveform for induced surges and switching events and are the type commonly fitted in inverters and distribution boards. Type 3 SPDs provide fine protection for sensitive equipment close to the load. Which types a given installation needs comes from the risk assessment and the design."
  - q: "Should DC and AC SPDs be on the same module or separate?"
    a: "They protect different circuits with different voltages and waveform characteristics, so a PV installation normally has DC SPDs rated to IEC 61643-31 on the DC side and AC SPDs rated to IEC 61643-11 on the AC side. DC SPDs sit between the array and the inverter input, and AC SPDs sit between the inverter output and the grid connection. Ask the manufacturer or designer how each side is protected, whether inside the inverter or in the DCDB and ACDB."
  - q: "What surge protection is needed for the panel array beyond inverter-level SPDs?"
    a: "For larger systems or high-exposure sites, array-level protection can add a further layer: bonding and earthing of the mounting structure, string-level or combiner-box SPDs and, where the risk assessment calls for it, an external lightning protection system. The design is project-specific and should be reviewed with the EPC during system design rather than retrofitted later."
---

Selecting solar inverters with adequate [surge protection](https://heavendesigns.in/glossary/spd-surge-protection/) is an important decision for installations across India, where grid voltage fluctuations, switching transients and monsoon-season lightning can threaten equipment and project returns. This guide gives a specification method based on how SPDs are rated and tested, rather than on rule-of-thumb kA tiers, because we found no Indian standard or sourced study that supports a single set of numbers for every site.

> [!KEYTAKEAWAYS]
> - Choose SPDs from a site risk assessment and the inverter's own ratings, not from a generic kA tier: ask for the Up (voltage protection level), In (nominal discharge current) and Imax (maximum discharge current) values and the continuous operating voltage on the datasheet.
> - Type 2 SPDs (8/20 microsecond waveform) protect against induced surges and switching events; Type 1 (10/350) is for direct-strike exposure where a lightning protection system or the risk assessment requires it; Type 3 is fine protection near sensitive equipment.
> - Certification should trace to IEC 61643 (DC: 61643-31, AC: 61643-11) with test reports for the exact SPD or inverter model, not only a supplier datasheet.
> - Read the warranty for surge, lightning and grid-event wording, and keep commissioning records.
> - We found no sourced figure for how much surge protection extends or shortens inverter life, so none is quoted.

This guide covers why surge protection matters, DC and AC SPD types and design, a six-criterion selection framework, certification requirements, warranty implications, common red flags, and inverter selection criteria for surge-resilient operation.

## Why Surge Protection Matters in India

Conditions that stress inverter electronics in many Indian installations include:

- **Lightning exposure** that varies widely by region and site; ask the designer for a site-specific assessment
- **Grid voltage fluctuations** during peak demand or DG transitions
- **Switching transients** from substation and feeder switching and from large motor loads
- **Monsoon humidity**, which can increase the conductivity of any compromised insulation
- **Weak earth conditions**, such as rocky terrain and dry-season earth resistance variations, which affect surge dissipation

Surge damage can affect panels, monitoring systems and connected loads as well as the inverter, and warranty terms may exclude failures attributed to events outside the stated conditions.

For any Indian installation, surge protection is a core engineering decision, not a discretionary feature.

## SPD Types and Design

### Type classification per IEC 61643

Table: SPD types per IEC 61643, with surge waveform and application

| SPD Type | Surge waveform | Application |
| --- | --- | --- |
| **Type 1** | 10/350 microsecond | Direct lightning current, where an external lightning protection system or the risk assessment requires it |
| **Type 2** | 8/20 microsecond | Induced surges and switching events; commonly fitted in inverters and distribution boards |
| **Type 3** | 1.2/50 microsecond | Fine protection for sensitive electronics at equipment level |

### DC and AC SPDs serve different functions

Table: What DC, AC and integrated SPDs each protect

| SPD location | What it protects |
| --- | --- |
| **DC SPDs** | Guard solar array inputs against lightning-induced surges from the rooftop array |
| **AC SPDs** | Protect the grid connection against utility-side transients and switching surges |
| **Integrated SPDs** | Factory-installed inside the inverter; ask for their ratings and test reports |

On installations that separate the protection hardware from the inverter, DC and AC SPDs are typically housed within the ACDB/DCDB assembly alongside fuses and isolators, which adds connection points that must be installed correctly.

### Integrated vs external SPDs

Table: Integrated SPDs compared with external add-on SPDs, as questions to ask

| Aspect | Integrated | External add-on |
| --- | --- | --- |
| Ratings | Ask for Up, In and Imax on the datasheet | Ask for Up, In and Imax on the SPD datasheet |
| Connection points | Built into the inverter circuit | Additional terminals and cables to install correctly |
| Warranty coverage | Check whether it is covered under the inverter warranty | Check whether it is covered and whether it affects the inverter warranty |
| Monitoring | Ask whether status is shown | Ask whether status is shown |
| Installation cost | Included in the inverter quote | Additional material and labour |

Neither option is better by default: compare the exact products' datasheets and warranty wording.

## The Six-Criterion Selection Framework

### 1. Evaluate Technical Ratings

Table: SPD ratings to read from the datasheet and what each one means

| Parameter | What it means | What to check |
| --- | --- | --- |
| Continuous operating voltage (Uc / Ucpv) | The highest voltage the SPD can sit across continuously | For DC, above the array's maximum open-circuit voltage at the coldest temperature |
| Voltage protection level (Up) | The residual voltage that passes through to the protected equipment; lower is better | Below the withstand level of the inverter input or output it protects |
| Nominal discharge current (In) | The surge current the SPD withstands repeatedly (8/20 microsecond) | Matches the site's exposure and the designer's assessment |
| Maximum discharge current (Imax) | The maximum single-event surge the SPD can absorb | Matches the site's exposure and the designer's assessment |
| Impulse current (Iimp) | The 10/350 microsecond current of a Type 1 device | Needed only if a Type 1 device is specified |

We publish no minimum kA tier because none is set by a standard we could cite and the right value depends on the site.

### 2. Certification and Compliance

Required certification documentation:

- **IEC 61643** testing for SPD components (DC: IEC 61643-31, AC: IEC 61643-11)
- **[BIS registration](/glossary/bis-certification/)** for the inverter, as the exact model's registration requires
- **Test reports** for the SPD or the inverter's protection, from an accredited laboratory
- **Manufacturer datasheet** with explicit Uc, Up, In and Imax values published

### 3. Integrated SPD System Design

- Ask whether the SPD is factory-fitted and which circuits it protects
- Ask whether the SPD is covered under the same warranty as the inverter
- Ask whether the SPD is field-replaceable
- Ask for the installation manual's earthing requirements

### 4. Monitoring and Failure Indication

- **Visual indicators**, such as a green/red status window showing the SPD's operational state
- **Remote monitoring** of SPD health through the inverter monitoring platform, if the model offers it
- **Alerts** when replacement is needed after activation, if the model offers them
- **Replacement workflow**: whether the SPD is a field-replaceable module

> [!IMPORTANT] A spent SPD gives no protection
> A spent SPD provides no protection. Status indication and routine checks help ensure a degraded SPD is replaced before the next surge event.

### 5. Site Risk Assessment

Rather than a regional table, which would need lightning-density data we could not source, use a site-specific assessment:

- Ask the designer for a lightning risk assessment (the IEC 62305 series covers risk assessment and lightning protection) for the building and the array
- Record whether an external lightning protection system is present, because it affects the Type 1 decision
- Note the line lengths between the array and the inverter, and between the inverter and the service entry
- Note the earthing arrangement and measured earth resistance
- Specify for the highest exposure the assessment identifies, not average conditions

### 6. Warranty Coverage for Surge-Related Damage

Verify the inverter warranty terms for surge, lightning and grid-event wording. The [model-specific written warranty](/blog/12-year-solar-inverter-warranty/) is only meaningful if the terms say what is covered, and the [honest truth about solar inverter warranty terms](/blog/solar-inverter-warranty/) explains how to spot the difference:

- **Look for**: explicit wording on surge events and the conditions attached
- **Check**: whether integrated SPDs are covered under the same warranty as the inverter
- **Check**: whether external SPDs or earthing to a stated specification are a condition of cover
- **Document**: installation per the manufacturer's specification, with photographic evidence at commissioning

## Red Flags to Avoid

Treat any of these as a reason to ask for the controlling document before ordering:

> [!WARNING] Ask for the document if any of these appear
> - **Missing or unclear SPD specifications** anywhere in the datasheet
> - **A requirement to purchase SPDs separately** that is not stated up front
> - **SPD components from unverifiable suppliers** without test reports
> - **No stated Uc, Up, In or Imax values**
> - **No SPD monitoring or failure indication** mechanism
> - **Generic component datasheets** without project-specific test data
> - **Vague warranty terms** around surge-related events

## Installation Best Practices for Maximum Protection

Even good SPDs underperform with poor installation. Apply these practices:

- **Short, low-impedance connections** between the SPD and the earth bar; IEC 60364-5-53 recommends keeping the total lead length short, preferably under about 0.5 m
- **Heavy-gauge earth conductor** to the dedicated earth electrode ([earthing](/glossary/earthing/) design matters as much as SPD selection)
- **Mounting orientation** per the manufacturer's specification
- **Cable routing** that minimises loop area between the SPD and the protected equipment
- **Earth resistance** verified and recorded against the value the designer and the standards specify for the site
- **Photographic documentation** of all SPD installations at commissioning for warranty defence

For larger commercial and industrial sites, SPD placement and earthing layout are usually captured in the project's electrical drawings and CEIG documentation before installation begins, so the protection scheme is reviewable rather than improvised on site.

## Maintenance and Replacement

Table: SPD maintenance activities and how to set the interval

| Activity | How to set the interval |
| --- | --- |
| Visual inspection (status indicator check) | At every service visit, and after a nearby lightning event or a grid disturbance |
| Performance test | Per the SPD manufacturer's guidance for the module |
| Replacement after activation | As soon as the indicator shows the SPD has operated |
| Scheduled replacement (no activation) | Per the SPD manufacturer's guidance for the module |
| Earth resistance verification | Per the designer's specification and the site's exposure |

EPCs running this schedule across a large installed base often fold SPD checks into a broader O&M and turnkey installation programme so inspection cadence stays consistent site to site rather than depending on individual technician memory.

## Inverter Selection Criteria for Surge-Resilient Operation

When specifying inverters for any Indian installation, ask for:

> [!CHECKLIST] Ask for these when specifying an inverter
> - **Stated DC and AC SPD arrangement**: integrated or external, and the type of each
> - **IEC 61643 test reports** for the SPD components or the assembly
> - **Uc, Up, In and Imax values** matched to the array voltage and the site's risk assessment
> - **Visual or remote SPD status monitoring**
> - **Field-replaceable SPD modules**, if in-life serviceability matters
> - **Warranty terms** that address surge-related failures within the installation specification
> - **The AC voltage window** and grid-code setting, so that ordinary voltage swings do not cause avoidable trips

## Where Qbits Fits

Surge-protection design varies by Qbits model, and the public datasheets do not describe one design for every model. For the exact SKU, request the installation manual and documentation for internal DC and AC protection, SPD type, nominal and maximum discharge current, voltage protection level, status indication and replacement method. Also confirm which external SPDs the site design requires.

Surge-related warranty coverage, test-report availability and monitoring alerts are not stated in the public datasheets, so ask Qbits or the seller for the controlling documents. Do not infer them from the enclosure rating or a generic brand feature list.

Related guides:

- **[Essential vs Advanced Solar Inverter Features India](/blog/essential-vs-advanced-solar-inverter-features/)** - feature comparison framework
- **[IP65 vs IP66 Solar Inverters India Guide](/blog/ip65-vs-ip66-solar-inverters-weather-protection-guide/)** - weather protection deep dive
- **[How to Evaluate Solar Inverter Reliability, Quality & Testing](/blog/how-to-evaluate-solar-inverter-reliability/)** - reliability framework
- **[Solar Inverter Commissioning India Guide](/blog/solar-inverter-commissioning-in-india/)** - commissioning protocol
- **[Inverter Voltage: String vs MPPT in Solar Inverters India](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/)** - voltage design framework
- **[Inverter TCO India Guide](/blog/inverter-tco/)** - total cost of ownership framework

[Contact Qbits](/contact-us/) with the site, load, equipment and document details relevant to this guide. Confirm the responsible party, deliverable, commercial scope and response time after submission.

## Closing

Surge protection is a core engineering decision in India. Specify DC and AC SPDs from a site risk assessment and the inverter's own ratings, demand test reports and warranty wording that address surge-related failures, and verify status indication so that spent SPDs are replaced before the next event. Apply this framework consistently and surge-related failures become easier to prevent and to document.
