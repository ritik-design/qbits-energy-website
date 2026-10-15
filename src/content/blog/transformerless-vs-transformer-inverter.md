---
title: "Transformerless vs Transformer Solar Inverters"
excerpt: "Transformerless inverters typically list higher peak efficiency than transformer-based designs, and are widely used in modern Indian solar projects. Here is what every EPC needs to know."
description: "EPC guide: transformerless vs transformer-based solar inverters, efficiency, weight, safety, BIS IS 16169 compliance, and when each design wins."
category: Technology
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "16 min"
image: "/og/blog-transformerless-vs-transformer-inverter.webp"
author: "Keyur Rakholiya"
keywords:
  - transformerless inverter
  - transformer-based inverter
  - solar inverter efficiency india
  - galvanic isolation solar inverter
  - BIS IS 16169 transformerless
faqs:
  - q: "What is a transformerless inverter?"
    a: "A transformerless inverter converts solar DC power to grid-compatible AC power without using a bulky low-frequency transformer. It relies instead on high-frequency switching circuits and software-driven DC injection monitoring to meet grid-connection safety requirements. The absence of the transformer reduces weight by 20–40%, improves peak efficiency to 97–99%, and lowers manufacturing cost - which is why most modern residential and C&I on-grid inverters shipped in India today are transformerless designs."
  - q: "Is a transformerless inverter less safe than a transformer-based inverter?"
    a: "No. The misconception arises because transformers provide galvanic isolation - a physical barrier between the DC solar circuit and the AC grid. Modern transformerless inverters replicate this protection electronically: continuous DC injection monitoring per IEC 62109-1 and IEC 62109-2 trips the inverter within milliseconds if DC leakage exceeds 1 A. BIS IS 16169 and CEA 2010 Regulations both permit transformerless designs, provided these monitoring circuits meet standard thresholds. For grid-tied rooftop systems in India, a compliant transformerless inverter is equally safe."
  - q: "Why are most modern solar inverters transformerless?"
    a: "The efficiency advantage is the primary driver. A 2–4 percentage-point gain in conversion efficiency - from roughly 95% for transformer-based to 98% for transformerless - compounds over a 25-year system life. On a 10 kW rooftop in Pune with 5.5 peak sun hours, that gap translates to roughly 4,000–8,000 additional kilowatt-hours delivered over the system's lifetime. Added benefits include 30–50% weight reduction (critical for rooftop structural loads), smaller physical footprint, and lower bill-of-materials cost passed through to the EPC margin."
  - q: "Does a transformerless inverter void the solar panel warranty?"
    a: "Not by itself, but it is a system-design question worth checking rather than assuming. A transformerless inverter has no galvanic isolation between the array and the grid, which matters for module types whose manufacturer requires a specific array grounding arrangement, and it is relevant to potential induced degradation on some designs. Most current crystalline silicon modules are specified for use with transformerless inverters. The decisive document is the module manufacturer's installation manual, which states the system voltage and grounding requirements that keep its warranty intact, so read that alongside the inverter manual before finalising the pairing."
  - q: "Are transformerless inverters ALMM-listed in India?"
    a: "No inverter is ALMM-listed, whether transformerless or transformer-based, because MNRE's ALMM lists cover solar PV modules (List-I) and cells (List-II) only. For an inverter, ask the seller for the exact model's BIS registration and current certificates, and for subsidised or tender projects confirm the requirements with the DISCOM or the tender authority."
  - q: "When should an EPC specify a transformer-based inverter instead?"
    a: "Transformer-based inverters remain the preferred choice in three specific scenarios: (1) industrial sites with sensitive medical or laboratory equipment requiring hard galvanic isolation between the DC solar array and AC load circuits; (2) older DISCOM tender specifications written before 2018 that explicitly mandate galvanic isolation; and (3) floating solar or offshore installations where leakage current to water is a primary concern. For standard commercial rooftop, industrial rooftop, and residential projects in India, a certified transformerless design is preferred."
  - q: "What is galvanic isolation in a solar inverter?"
    a: "Galvanic isolation is a physical separation between two electrical circuits that prevents direct current flow between them while still allowing energy transfer - achieved in transformer-based inverters by the magnetic coupling of the transformer windings. It blocks DC voltage from appearing on the AC output, which protects grid equipment and personnel. In transformerless inverters, the same protection is achieved electronically through residual current monitoring, which continuously measures leakage current between the DC array and AC grid, and disconnects the inverter if the threshold defined in IEC 62109 is exceeded."
  - q: "What efficiency should I expect from a transformerless inverter in Indian conditions?"
    a: "Under Indian operating conditions, with ambient temperatures of 35–45 °C and grid voltage that varies by site (the allowed AC range depends on the model and the DISCOM's connection conditions, so read it from the exact datasheet), a well-designed transformerless inverter achieves 96.5–98.5% European (EU) weighted efficiency. Peak efficiency measured at the datasheet test point (25 °C, nominal voltage) typically reads 97.5–99%. The efficiency advantage over transformer-based designs (which typically peak at 94–96%) is most pronounced at partial-load conditions (20–80% of rated power), which represent the majority of actual operating hours in Indian residential and C&I installations."
  - q: "Do transformerless inverters require special earthing arrangements?"
    a: "Yes, and this is the most commonly mishandled installation step. The negative DC terminal must NOT be earthed at the array end in a transformerless inverter system - unlike some older transformer-based designs where DC negative earthing was standard practice. Instead, the protective earth (PE) conductor must bond the module frames and inverter enclosure to the site earth electrode. The inverter's internal residual current device then monitors the circuit. Installers should follow the earthing diagram in the inverter manual and verify leakage current at commissioning, as specified in IEC 62109 and the CEA 2010 Technical Standards."
---

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

Every EPC project manager in India has fielded this question at least once during a client technical review: "Why does this inverter not have a transformer, is it cutting corners?" The confusion is understandable. For decades, the transformer was the defining component of a power conversion unit. Removing it feels counterintuitive.

The reality is more nuanced. Transformerless design is not a cost-cutting measure, it is an engineering evolution that trades a bulky magnetic component for a more sophisticated control architecture. Understanding that distinction, and knowing precisely when each topology is the right specification, is what separates an informed EPC from one that over-specifies (and erodes margin) or under-specifies (and faces a site rejection from the DISCOM).

> [!KEYTAKEAWAYS]
> - Transformerless inverters deliver 97-99% peak efficiency versus 94-96% for transformer-based designs, and weigh 30-50% less.
> - The BIS standards for grid inverters (IS 16169, the adoption of IEC 62116, and IS 16221, the adoption of IEC 62109) permit both topologies; transformerless designs replace the transformer's physical galvanic isolation with electronic DC injection and residual current monitoring, and the CEA connectivity regulations limit DC injection to 0.5% of rated output current.
> - The 4-Spec Comparison framework (efficiency delta, structural weight budget, tender compliance posture, DC injection protection verification) is the fastest way for an EPC to choose the right topology for a project.
> - Transformer-based units remain the right call for sites needing hard galvanic isolation, such as sensitive medical or lab equipment, pre-2018 DISCOM tenders that mandate isolation, and floating solar near water.
> - MNRE's current ALMM page publishes PV module and cell lists, not an inverter list. Obtain current model-specific inverter certificates and confirm the applicable scheme and DISCOM requirements separately.

> **Direct answer.** A [transformerless inverter](https://www.surgepv.com/blog/transformer-vs-transformerless-solar-inverter) typically has higher peak efficiency and lower weight than transformer-based designs (compare the datasheets of the exact models), and is permitted under the BIS inverter standards (IS 16169 and IS 16221, which adopt IEC 62116 and IEC 62109) for Indian grid-tied installations when the exact model is certified. The "4-Spec Comparison for Indian EPCs" framework (covering efficiency, weight, safety compliance, and tender eligibility) is the fastest way to choose the right topology for each project.

The [galvanic isolation](/glossary/anti-islanding/) question is where most of the anxiety lives, and it deserves a direct answer before any technical comparison: modern transformerless inverters do not skip safety, they shift safety from hardware to software, and international standards confirm the outcome is equivalent.

## What the Transformer Actually Does in a Solar Inverter

To decode the transformerless debate, start with the function the transformer performs in a conventional design.

A [solar inverter](/glossary/solar-inverter/) converts the DC output of a photovoltaic array into 50 Hz AC power compatible with the Indian grid. In a transformer-based inverter, the conversion happens in two stages. First, high-frequency switching circuits create an intermediate AC signal. Second, a low-frequency (50 Hz) step-up transformer boosts the voltage to grid level and simultaneously provides galvanic isolation, a physical break between the DC solar circuit and the AC grid.

That physical break is valuable. It means that no direct current can flow from the solar array into the AC grid regardless of circuit conditions. It also means the inverter is inherently tolerant of DC-to-earth faults on the array side, because the transformer windings are not referenced to ground in the same way.

The downsides are equally concrete:

- **Weight**: A 5 kW transformer-based inverter typically weighs 18–28 kg. The transformer alone accounts for 8–15 kg of that total.
- **Volume**: The transformer occupies 30–50% of the inverter cabinet's internal volume, constraining thermal management and layout.
- **Efficiency loss**: Core losses in the transformer (eddy currents and hysteresis) dissipate 1–3% of the rated power as heat, regardless of the load level. This "iron loss" is always-on.
- **Cost**: Silicon steel laminations, copper windings, and the labour to assemble them add ₹1,500–₹4,000 to the bill of materials for a 5–10 kW unit.

These are not trivial penalties on a project where 50–200 inverter units are being specified.

## How a Transformerless Inverter Achieves the Same Grid Output

A transformerless inverter eliminates the bulky 50 Hz transformer entirely. Instead, it uses a high-frequency DC-DC boost stage (operating at 16–100 kHz) to raise the panel voltage to the DC bus level required for the inverter output bridge, followed directly by a grid-tied inverter bridge. The entire conversion chain runs at semiconductor switching speeds rather than mains frequency, which is why the magnetic components can be tiny (microhenry-range inductors rather than multi-kilogram laminated cores).

The efficiency improvement is a direct consequence of removing the iron losses. Where a transformer-based design dissipates 1–3% in core losses alone, a transformerless design's total conversion losses (switching losses, conduction losses, inductor copper losses, and filter losses) typically sum to 1–3%, inclusive of everything. The net result is a peak efficiency of 97–99% versus 94–96%.

The [inverter efficiency](/glossary/inverter-efficiency/) gain is not uniform across the load curve. It is most pronounced at partial loads:

Table: Transformer-based vs transformerless inverter efficiency at different load levels (typical datasheet ranges; compare the exact models)

| Load Level | Transformer-Based Efficiency | Transformerless Efficiency | Advantage |
| --- | --- | --- | --- |
| 10% load | 88–91% | 93–96% | +5 percentage points |
| 25% load | 93–95% | 96–98% | +3 percentage points |
| 50% load | 94–96% | 97–98.5% | +2–3 percentage points |
| 100% load | 94–96% | 97–99% | +2–3 percentage points |

This matters because Indian solar systems rarely operate at 100% rated capacity. Morning ramp-up, afternoon cloud transients, and seasonal irradiance variation mean the inverter spends a significant portion of operating hours at 20–70% of nameplate output. The transformerless efficiency advantage applies across all of those hours.

## The 4-Spec Comparison for Indian EPCs

### The Named Framework

Rather than evaluating transformerless versus transformer-based on a single axis, experienced Indian EPCs apply a four-dimensional screen to each project. Here is that framework, laid out as a decision tool:

1. **Efficiency delta over project life**: Quantify the annual generation difference at the site's peak sun hours and panel wattage. A 2% efficiency gain on a 100 kW C&I project at 5 peak sun hours yields roughly 3,650 kWh/year additional generation. At ₹7.5/unit, that is ₹27,375/year, or roughly ₹6.8 Lakh over a 25-year project life. Before taxes and discounting, that is real margin the client captures.

2. **Structural weight budget**: Rooftop structural engineering assessments in India typically allow 15–25 kg/m² for all rooftop loads. A transformerless inverter at 9–14 kg versus a transformer-based unit at 18–28 kg frees up load budget that matters on older RCC rooftops (pre-2000 construction) and industrial tin-sheet structures.

3. **Compliance posture for the tender**: Confirm the DISCOM's technical specification and the client's internal engineering standard. Most post-2018 tender documents permit transformerless designs under BIS IS 16169. Some pre-2018 public-sector tenders still specify "galvanic isolation" explicitly, those require a transformer-based unit or a formal derogation.

4. **DC injection protection verification**: For a transformerless inverter, confirm the model's DC injection monitoring threshold and response time. The CEA connectivity regulations limit DC injection to 0.5% of full rated output current, and the model's IEC 62109-2 and IS 16169 test reports should show its protection behaviour. Request the test certificate, not just the manufacturer's data sheet claim.

This four-spec check can be run in 20 minutes per project and eliminates the vast majority of specification errors before procurement.

## Safety Deep-Dive: Galvanic Isolation vs Electronic Protection

The safety concern about transformerless inverters deserves a detailed treatment, because it is the objection most frequently raised in client technical reviews and DISCOM interface meetings.

**What galvanic isolation actually protects against:**

In a transformer-based inverter, the transformer winding creates a physical barrier. No DC current can flow from the solar array into the AC grid, regardless of circuit conditions. This matters because:

- DC current injected into the AC grid can saturate distribution transformers and degrade their insulation life.
- DC in AC circuits interferes with residual current devices (RCDs/ELCBs) that protect human life on the AC side.
- Leakage from a faulted DC circuit is contained on the DC side and cannot propagate to exposed metal on the AC side.

**How transformerless inverters replicate this protection:**

A certified transformerless inverter per [IEC 62109](/glossary/iec-62109/) uses continuous residual current monitoring between the DC circuit and the protective earth. The monitoring circuit measures the differential current, any imbalance between current flowing out on the DC positive conductor and returning on the DC negative conductor indicates leakage to earth. If leakage exceeds the threshold, the inverter disconnects from the grid within milliseconds.

> **0.5%.** The maximum DC injection, as a share of full rated output current, that the CEA Technical Standards for Connectivity of the Distributed Generation Resources allow a grid-connected inverter to put into the AC grid. A transformerless inverter has no transformer to block DC, so it must monitor and limit it electronically. *Source - [CEA Technical Standards for Connectivity of the Distributed Generation Resources](https://cea.nic.in/old/reports/committee/norms/norms_dg_resource.pdf), Regulation 11(6) as amended in 2019.*

The [CEA Technical Standards for Connectivity of the Distributed Generation Resources](https://cea.nic.in/old/reports/committee/norms/norms_dg_resource.pdf), notified under the Electricity Act 2003, specifically address this requirement and permit transformerless designs provided the monitoring circuits meet the threshold. [BIS IS 16169](/glossary/bis-certification/) (the Indian standard harmonised with IEC 62109) carries the same provision.

**The residual risk:** Electronic protection can theoretically fail if the monitoring circuit itself has a fault. Transformer isolation is passive and cannot fail electronically. This is the genuine engineering argument for transformer-based designs in critical applications, not that transformerless is inherently less safe for standard installations, but that the fault-tolerance profile differs.

## Efficiency and Weight: The Numbers That Move Projects

The efficiency argument is often presented qualitatively ("transformerless is more efficient"). For EPCs preparing project feasibility reports, quantified numbers are more useful.

**Efficiency translation at scale:**

Consider a 50 kW C&I rooftop in Coimbatore with 5.2 peak sun hours/day and 330 days/year of productive generation:

> [!EXAMPLE] 50 kW C&I rooftop in Coimbatore
> - Annual DC generation from panels: 50 kW × 5.2 h × 330 days = 85,800 kWh
> - Transformer-based inverter at 95% efficiency: 81,510 kWh AC delivered
> - Transformerless inverter at 98% efficiency: 84,084 kWh AC delivered
> - Annual difference: 2,574 kWh
> - At ₹7.5/unit savings rate: ₹19,305/year additional value
> - Over 25 years (without degradation): ₹4.8 Lakh incremental benefit

This is before factoring in [solar yield](/glossary/solar-yield/) degradation, which affects both topologies equally, or the lower maintenance cost of a transformerless unit (no transformer oil to check, no magnetic core to inspect).

**Weight and rooftop load:**

- **Transformer-based 10 kW unit**: 22–30 kg typical
- **Transformerless 10 kW unit**: 11–16 kg typical
- **Weight saving**: 10–15 kg per inverter

On a project with 10 inverters (100 kW system), this is 100–150 kg of load reduction. For an older factory roof in Surat or a pre-2000 residential complex in Hyderabad, that margin may determine whether the project is structurally feasible without costly reinforcement.

## Indian Regulatory Context: BIS, IEC, and DISCOM Tender Requirements

India's regulatory framework for grid-tied inverters is now firmly aligned with international standards that explicitly accommodate transformerless designs.

> **171.05 GW.** India's cumulative installed solar capacity on 30 September 2026, of which 33.41 GW was grid-connected rooftop solar. As inverter volumes scale, the efficiency and weight advantages of transformerless designs matter across more systems. *Source - MNRE capacity data for 30 September 2026, as reported by [Saur Energy](https://www.saurenergy.com/solar-energy-news/india-adds-2456-gw-renewable-energy-capacity-in-h1-fy-2026-27-12637483), 8 October 2026.*

### BIS IS 16169

IS 16169:2019 is the Indian adoption of IEC 62116 (the anti-islanding test method), and inverter safety sits separately under IS 16221 (Part 2):2015, which adopts IEC 62109-2:2011. Neither standard distinguishes between transformer-based and transformerless topologies, it specifies performance and safety outcomes, not internal architecture.

EPCs can confirm IS 16169 compliance from the BIS Test Certificate issued by a [BIS-recognised laboratory](https://bis.gov.in/). For any Qbits model, ask for the exact model's current BIS registration and test certificates, because the public datasheets do not replace them.

### IEC 62109

[IEC 62109-1](/glossary/iec-62109/) (general) and IEC 62109-2 (grid-connected systems) are the parent international standards. Part 2 covers inverters, including protections that matter for designs without galvanic separation, such as isolation resistance monitoring and residual current detection; read the clause numbers and trip thresholds from your copy of the standard and from the model's test report. DC injection limiting is set separately by the grid connection rules (the CEA regulations cited above). A device with a test report to IEC 62109-2 has been tested against the standard's requirements for its scope.

### DISCOM Tender Specifications

This is where the India-specific complexity enters. State DISCOMs write their own technical specifications for net-metering and grid-tied system approvals, and these documents vary significantly:

- **Post-2018 DISCOM specs** (most states, including MH, GJ, KA, TN, RJ): Reference IS 16169 or IEC 62109 directly. Transformerless permitted.
- **Pre-2018 DISCOM specs** (some PSU clients, CPWD, Railways older tenders): May include language like "inverter shall incorporate galvanic isolation between DC and AC circuits." Transformerless not compliant without a derogation.
- **PM Surya Ghar projects**: Check the current scheme and DISCOM documents for inverter requirements. MNRE's ALMM page publishes PV module and cell lists, not a transformerless-inverter list.

Before specifying a transformerless inverter on any tender-driven project, the EPC should extract the relevant inverter specification clause and verify alignment. A 10-minute document review at proposal stage avoids a costly mid-project substitution.

## Comparing the Two Topologies: H3 Profiles

### Transformer-Based Inverters

Transformer-based inverters dominated the Indian market through the mid-2010s and remain in active use for specific applications. Their defining characteristics:

- **Efficiency**: 94–96% peak, with iron losses reducing this to 91–94% at partial load.
- **Weight**: 18–35 kg for 5–10 kW units; wall-mounting requires heavier brackets.
- **Galvanic isolation**: Inherent, no active monitoring required to achieve DC-AC separation.
- **DC PV earthing**: Compatible with both grounded and ungrounded array configurations.
- **Rooftop suitability**: Higher structural load; may require engineering assessment on lightweight structures.
- **Cost**: ₹1,500–₹4,000 higher bill of materials per unit due to transformer components (5–10 kW units, as above).

### Transformerless Inverters

Transformerless designs represent the dominant share of new inverter shipments in India from 2020 onward, across residential (1.5–10 kW) and C&I (10–100 kW) segments:

- **Efficiency**: 97–99% peak, 96–98% at 25% partial load.
- **Weight**: 9–16 kg for 5–10 kW units; can be mounted on thinner bracket sets.
- **Safety compliance**: Achieved via active residual current monitoring per IEC 62109-2.
- **DC earthing**: Module frames must be earthed; DC negative terminal must NOT be earthed separately.
- **Commissioning requirement**: Leakage current verification at installation is mandatory.
- **PID sensitivity**: Requires correct module-frame earthing to prevent potential-induced degradation on crystalline silicon panels.

### Hybrid Designs (HF Transformer Isolation)

Some inverter manufacturers offer a middle path: a high-frequency (HF) transformer that provides galvanic isolation without the weight and efficiency penalty of a 50 Hz unit. These designs are heavier than true transformerless but lighter and more efficient than low-frequency transformer-based units. They are relatively uncommon in the Indian residential market but appear in some off-grid and backup-priority hybrid configurations.

## Decision Matrix: Transformer vs Transformerless for Indian Projects

Use this table as a quick specification guide. When the answer in the "Transformerless" column is Yes or Prefer, default to transformerless. When the answer is No or Evaluate, engage the client's structural and electrical engineers before specifying.

Table: Transformer-based vs transformerless inverter by project type

| Project Parameter | Transformer-Based | Transformerless |
| --- | --- | --- |
| Standard residential rooftop (1.5–10 kW) | ✗ Overspecified | ✓ Preferred |
| C&I rooftop (10–500 kW) | ✗ Efficiency penalty | ✓ Preferred |
| Pre-2018 PSU tender with isolation clause | ✓ Required | ✗ Non-compliant |
| PM Surya Ghar subsidy project | Verify current project requirements | Verify current project requirements |
| Medical equipment / hospital critical load | ✓ Preferred | Evaluate case-by-case |
| Floating solar / water-body adjacent | ✓ Preferred | Evaluate case-by-case |
| Lightweight tin-sheet industrial roof | ✓ Risk (weight) | ✓ Preferred (lighter) |
| Export-heavy grid-tied C&I | ✗ Efficiency penalty | ✓ Preferred |
| Off-grid / battery-first hybrid | ✓ Compatible | ✓ Compatible |

**Pros and Cons summary:**

Table: Pros and cons of transformer-based and transformerless inverters

| | Pros | Cons |
| --- | --- | --- |
| **Transformer-Based** | ✓ Hard galvanic isolation ✓ Compatible with grounded arrays ✓ Meets pre-2018 tender specs | ✗ 2–4% lower efficiency ✗ 30–50% heavier ✗ Higher material cost ✗ Larger footprint |
| **Transformerless** | ✓ Higher peak efficiency (per datasheet) ✓ Lighter and compact ✓ Lower cost ✓ Meets IS 16169/IEC 62109 when the exact model is certified | ✗ Requires correct earthing ✗ Not suited for pre-2018 isolation-clause tenders ✗ PID risk if earthing is incorrect |

## Common Specification Mistakes EPCs Make: and How to Avoid Them

The specification errors seen most frequently in Indian EPC projects cluster around five misunderstandings. Recognising them before the proposal stage saves both margin and relationships.

**Mistake 1: Defaulting to transformer-based because "it is safer"**

This conflates safety outcome with topology. A certified transformerless inverter meeting IEC 62109-2 achieves the same DC injection protection as a transformer-based design, the mechanism differs, the protection level does not. Read the [solar inverter certifications](/blog/solar-inverter-certifications/) post for a full breakdown of what each certification actually tests.

**Mistake 2: Not checking the DISCOM tender document for isolation language**

The phrase "galvanic isolation" in a technical specification is a hard constraint, not a preference. Missing it at proposal stage means a mid-project substitution that costs the EPC the margin difference between the two topologies plus any schedule penalty.

**Mistake 3: Earthing the DC negative terminal in a transformerless system**

This is the most dangerous installation error in transformerless systems. Earthing the DC negative terminal in a transformerless inverter bypasses the residual current monitoring circuit, disabling the primary safety protection mechanism. It can also cause DC current to flow through the AC earthing network, tripping RCDs on the AC side.

> [!WARNING] Do not earth the DC negative terminal
> On a transformerless inverter, earthing the DC negative terminal defeats the residual current monitoring. Bond the module frames to protective earth and leave the DC negative floating. The [solar inverter grounding](/blog/solar-inverter-grounding/) post covers correct earthing practice in detail.

**Mistake 4: Using efficiency at peak load to compare models**

Peak efficiency (published on the datasheet) is measured at a specific voltage and load point, typically 100% load at nominal MPPT voltage. The EU-weighted efficiency, which blends measurements across multiple load points (5%, 10%, 20%, 30%, 50%, 100%), is a far better predictor of real-world generation. Always compare EU-weighted efficiency figures when evaluating transformerless models, particularly for Indian sites with variable irradiance. Consult the [solar inverter sizing](/blog/solar-inverter-sizing/) guide for how to factor efficiency curves into a DC oversizing calculation.

**Mistake 5: Skipping leakage current verification at commissioning**

IEC 62109-2 and IS 16169 require the installer to verify that the inverter's residual current monitoring is functioning correctly at commissioning. This is typically done by measuring ground leakage current with a clamp meter at the earth conductor between the inverter PE terminal and the site earth electrode, confirming it is below the trip threshold. Skipping this step means the monitoring circuit's health is unknown, and a latent fault could persist undetected. See the [solar inverter commissioning](/blog/solar-inverter-commissioning-in-india/) guide for the complete commissioning checklist.

## ALMM, PM Surya Ghar, and What Transformerless Means for Subsidised Projects

> **₹78,000.** The maximum central subsidy under PM Surya Ghar Muft Bijli Yojana for a 3 kW residential system, disbursed directly to the beneficiary's bank account after DISCOM verification of installation. *Source - [MNRE PM Surya Ghar Portal](https://pmsuryaghar.gov.in/), 2026.*

MNRE's current ALMM page publishes PV module and cell lists, not an inverter list. Verify the exact proposed module and cell models against the current orders, and check inverter certificates and DISCOM requirements separately.

For PM Surya Ghar projects specifically, the efficiency advantage of transformerless inverters directly increases the annual generation delivered to the subsidy beneficiary, improving the project's performance ratio and reducing the likelihood of complaints during the DISCOM-mandated post-installation inspection period.

## Where Qbits Fits

- **[Hybrid Inverters](/hybrid-inverter/)**: Review current QBH model documents and confirm the exact battery, firmware, PV, backup-output, transfer, communication, warranty and project requirements in writing.
- **[Solar Inverter Sizing Calculator](/string-sizing-calculator/)**: enter panel Voc, Vmp, and site temperature range; the tool confirms string count and MPPT compatibility before you commit to a BOM.
- **[Download Datasheets](/download-datasheets/)**: Start with the public model specifications, then request any required manual, certificate, test report or warranty document for the exact SKU.

[Contact Qbits](/contact-us/) with the exact model, site inputs and documents relevant to the request. Confirm the responsible party, deliverable, fees and response time after submission.

## Making the Final Call: A Practical Checklist for EPCs

Before submitting a project proposal with a transformerless inverter specified, run through this six-point confirmation:

> [!CHECKLIST] Six-point check before you specify a transformerless inverter
> - **Tender document reviewed**: No explicit "galvanic isolation" or "isolation transformer" clause in the inverter specification section.
> - **Certificates confirmed**: The exact model's BIS registration and current certificates are on file. MNRE publishes no ALMM list for inverters, but subsidy-linked projects (PM Surya Ghar, state MNRE schemes) still need the DISCOM's requirements checked.
> - **IEC 62109-2 certificate verified**: DC injection monitoring threshold and response time documented in the certification report.
> - **Earthing design reviewed**: Earthing drawing shows module frames bonded to PE; DC negative terminal is floating (not earthed).
> - **EU-weighted efficiency used for yield estimate**: Not peak efficiency from the datasheet header.
> - **Commissioning checklist includes leakage current test**: Assigned to a named team member with a measurement target (typically < 30 mA at operating temperature).

With this checklist complete, the transformerless specification is defensible at client review, bankable for project finance, and compliant for DISCOM interconnection approval.

For EPCs managing high-volume residential deployments under [PM Surya Ghar](/blog/pm-surya-ghar-yojana-complete-guide/), the efficiency advantage of transformerless inverters accumulates into a meaningful performance improvement across the portfolio, not just on individual projects. Understanding the [how a solar inverter works](/blog/how-does-a-solar-inverter-work/) at the circuit level makes the transformerless advantage intuitive rather than a matter of trust in the manufacturer's claims.

The transformer served Indian solar well for the first generation of grid-tied systems. The transformerless design is the architecture that will carry the next 100 GW.
