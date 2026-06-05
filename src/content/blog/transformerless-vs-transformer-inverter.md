---
title: "Transformerless vs Transformer-Based Solar Inverters — Decoded"
excerpt: "Transformerless inverters deliver 97–99% efficiency vs 94–96% for transformer-based designs, and dominate modern Indian solar projects. Here is what every EPC needs to know."
description: "EPC guide: transformerless vs transformer-based solar inverters — efficiency, weight, safety, BIS IS 16169 compliance, and when each design wins on Indian projects."
category: Technology
date: 2026-06-05
readTime: "16 min"
image: "/blog-images/solar-inverter-components.svg"
author: "Qbits Editorial"
keywords:
  - transformerless inverter
  - transformer-based inverter
  - solar inverter efficiency india
  - galvanic isolation solar inverter
  - BIS IS 16169 transformerless
faqs:
  - q: "What is a transformerless inverter?"
    a: "A transformerless inverter converts solar DC power to grid-compatible AC power without using a bulky low-frequency transformer. It relies instead on high-frequency switching circuits and software-driven DC injection monitoring to meet grid-connection safety requirements. The absence of the transformer reduces weight by 20–40%, improves peak efficiency to 97–99%, and lowers manufacturing cost — which is why most modern residential and C&I on-grid inverters shipped in India today are transformerless designs."
  - q: "Is a transformerless inverter less safe than a transformer-based inverter?"
    a: "No. The misconception arises because transformers provide galvanic isolation — a physical barrier between the DC solar circuit and the AC grid. Modern transformerless inverters replicate this protection electronically: continuous DC injection monitoring per IEC 62109-1 and IEC 62109-2 trips the inverter within milliseconds if DC leakage exceeds 1 A. BIS IS 16169 and CEA 2010 Regulations both permit transformerless designs, provided these monitoring circuits meet standard thresholds. For grid-tied rooftop systems in India, a compliant transformerless inverter is equally safe."
  - q: "Why are most modern solar inverters transformerless?"
    a: "The efficiency advantage is the primary driver. A 2–4 percentage-point gain in conversion efficiency — from roughly 95% for transformer-based to 98% for transformerless — compounds over a 25-year system life. On a 10 kW rooftop in Pune with 5.5 peak sun hours, that gap translates to roughly 4,000–8,000 additional kilowatt-hours delivered over the system's lifetime. Added benefits include 30–50% weight reduction (critical for rooftop structural loads), smaller physical footprint, and lower bill-of-materials cost passed through to the EPC margin."
  - q: "Does a transformerless inverter void the solar panel warranty?"
    a: "Not when the system is earthed correctly. The concern relates to potential-induced degradation (PID), which can occur in some crystalline silicon modules when the panel frame is not at the same potential as the negative DC terminal. Proper system earthing — connecting the module frame to the inverter's protective earth terminal per IEC 62109 — eliminates this risk. All Qbits TLS series inverters include built-in residual current monitoring and comply with IEC 62109, making PID mitigation straightforward when the installer follows the commissioning checklist."
  - q: "Are transformerless inverters ALMM-listed in India?"
    a: "Yes. The ALMM (Approved List of Models and Manufacturers) maintained by MNRE does not discriminate by inverter topology. Both transformerless and transformer-based inverters can be listed, provided they pass the requisite BIS and IEC certification tests. The Qbits TLS series — a transformerless design — is ALMM-listed, making it eligible for use in government-subsidised rooftop projects under PM Surya Ghar Muft Bijli Yojana and other MNRE-funded schemes."
  - q: "When should an EPC specify a transformer-based inverter instead?"
    a: "Transformer-based inverters remain the preferred choice in three specific scenarios: (1) industrial sites with sensitive medical or laboratory equipment requiring hard galvanic isolation between the DC solar array and AC load circuits; (2) older DISCOM tender specifications written before 2018 that explicitly mandate galvanic isolation; and (3) floating solar or offshore installations where leakage current to water is a primary concern. For standard commercial rooftop, industrial rooftop, and residential projects in India, a certified transformerless design is preferred."
  - q: "What is galvanic isolation in a solar inverter?"
    a: "Galvanic isolation is a physical separation between two electrical circuits that prevents direct current flow between them while still allowing energy transfer — achieved in transformer-based inverters by the magnetic coupling of the transformer windings. It blocks DC voltage from appearing on the AC output, which protects grid equipment and personnel. In transformerless inverters, the same protection is achieved electronically through residual current monitoring, which continuously measures leakage current between the DC array and AC grid, and disconnects the inverter if the threshold defined in IEC 62109 is exceeded."
  - q: "What efficiency should I expect from a transformerless inverter in Indian conditions?"
    a: "Under Indian operating conditions — ambient temperatures of 35–45 °C, grid voltages ranging from 180 to 270 V — a well-designed transformerless inverter achieves 96.5–98.5% European (EU) weighted efficiency. Peak efficiency measured at the datasheet test point (25 °C, nominal voltage) typically reads 97.5–99%. The efficiency advantage over transformer-based designs (which typically peak at 94–96%) is most pronounced at partial-load conditions (20–80% of rated power), which represent the majority of actual operating hours in Indian residential and C&I installations."
  - q: "Do transformerless inverters require special earthing arrangements?"
    a: "Yes, and this is the most commonly mishandled installation step. The negative DC terminal must NOT be earthed at the array end in a transformerless inverter system — unlike some older transformer-based designs where DC negative earthing was standard practice. Instead, the protective earth (PE) conductor must bond the module frames and inverter enclosure to the site earth electrode. The inverter's internal residual current device then monitors the circuit. Installers should follow the earthing diagram in the inverter manual and verify leakage current at commissioning, as specified in IEC 62109 and the CEA 2010 Technical Standards."
---

Every EPC project manager in India has fielded this question at least once during a client technical review: "Why does this inverter not have a transformer — is it cutting corners?" The confusion is understandable. For decades, the transformer was the defining component of a power conversion unit. Removing it feels counterintuitive.

The reality is more nuanced. Transformerless design is not a cost-cutting measure — it is an engineering evolution that trades a bulky magnetic component for a more sophisticated control architecture. Understanding that distinction, and knowing precisely when each topology is the right specification, is what separates an informed EPC from one that over-specifies (and erodes margin) or under-specifies (and faces a site rejection from the DISCOM).

> **Direct answer.** A transformerless inverter delivers 97–99% peak efficiency versus 94–96% for transformer-based designs, weighs 30–50% less, and is fully permitted under BIS IS 16169 and IEC 62109 for Indian grid-tied installations. The "4-Spec Comparison for Indian EPCs" framework — covering efficiency, weight, safety compliance, and tender eligibility — is the fastest way to choose the right topology for each project.

The [galvanic isolation](/glossary/anti-islanding/) question is where most of the anxiety lives, and it deserves a direct answer before any technical comparison: modern transformerless inverters do not skip safety — they shift safety from hardware to software, and international standards confirm the outcome is equivalent.

## What the Transformer Actually Does in a Solar Inverter

To decode the transformerless debate, start with the function the transformer performs in a conventional design.

A [solar inverter](/glossary/solar-inverter/) converts the DC output of a photovoltaic array into 50 Hz AC power compatible with the Indian grid. In a transformer-based inverter, the conversion happens in two stages. First, high-frequency switching circuits create an intermediate AC signal. Second, a low-frequency (50 Hz) step-up transformer boosts the voltage to grid level and simultaneously provides galvanic isolation — a physical break between the DC solar circuit and the AC grid.

That physical break is valuable. It means that no direct current can flow from the solar array into the AC grid regardless of circuit conditions. It also means the inverter is inherently tolerant of DC-to-earth faults on the array side, because the transformer windings are not referenced to ground in the same way.

The downsides are equally concrete:

- **Weight** — A 5 kW transformer-based inverter typically weighs 18–28 kg. The transformer alone accounts for 8–15 kg of that total.
- **Volume** — The transformer occupies 30–50% of the inverter cabinet's internal volume, constraining thermal management and layout.
- **Efficiency loss** — Core losses in the transformer (eddy currents and hysteresis) dissipate 1–3% of the rated power as heat, regardless of the load level. This "iron loss" is always-on.
- **Cost** — Silicon steel laminations, copper windings, and the labour to assemble them add ₹1,500–₹4,000 to the bill of materials for a 5–10 kW unit.

These are not trivial penalties on a project where 50–200 inverter units are being specified.

## How a Transformerless Inverter Achieves the Same Grid Output

A transformerless inverter eliminates the bulky 50 Hz transformer entirely. Instead, it uses a high-frequency DC-DC boost stage (operating at 16–100 kHz) to raise the panel voltage to the DC bus level required for the inverter output bridge, followed directly by a grid-tied inverter bridge. The entire conversion chain runs at semiconductor switching speeds rather than mains frequency — which is why the magnetic components can be tiny (microhenry-range inductors rather than multi-kilogram laminated cores).

The efficiency improvement is a direct consequence of removing the iron losses. Where a transformer-based design dissipates 1–3% in core losses alone, a transformerless design's total conversion losses — switching losses, conduction losses, inductor copper losses, and filter losses — typically sum to 1–3%, inclusive of everything. The net result is a peak efficiency of 97–99% versus 94–96%.

The [inverter efficiency](/glossary/inverter-efficiency/) gain is not uniform across the load curve. It is most pronounced at partial loads:

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

1. **Efficiency delta over project life** — Quantify the annual generation difference at the site's peak sun hours and panel wattage. A 2% efficiency gain on a 100 kW C&I project at 5 peak sun hours yields roughly 3,650 kWh/year additional generation. At ₹7.5/unit, that is ₹27,375/year — or roughly ₹6.8 Lakh over a 25-year project life. Before taxes and discounting, that is real margin the client captures.

2. **Structural weight budget** — Rooftop structural engineering assessments in India typically allow 15–25 kg/m² for all rooftop loads. A transformerless inverter at 9–14 kg versus a transformer-based unit at 18–28 kg frees up load budget that matters on older RCC rooftops (pre-2000 construction) and industrial tin-sheet structures.

3. **Compliance posture for the tender** — Confirm the DISCOM's technical specification and the client's internal engineering standard. Most post-2018 tender documents permit transformerless designs under BIS IS 16169. Some pre-2018 public-sector tenders still specify "galvanic isolation" explicitly — those require a transformer-based unit or a formal derogation.

4. **DC injection protection verification** — For a transformerless inverter, confirm the model's DC injection monitoring threshold and response time against IEC 62109-1 Clause 13.7. The standard requires the inverter to trip within 0.2 seconds if DC injection exceeds 0.5% of rated current (or 1 A, whichever is lower). Request the test certificate, not just the manufacturer's data sheet claim.

This four-spec check can be run in 20 minutes per project and eliminates the vast majority of specification errors before procurement.

## Safety Deep-Dive: Galvanic Isolation vs Electronic Protection

The safety concern about transformerless inverters deserves a detailed treatment, because it is the objection most frequently raised in client technical reviews and DISCOM interface meetings.

**What galvanic isolation actually protects against:**

In a transformer-based inverter, the transformer winding creates a physical barrier. No DC current can flow from the solar array into the AC grid, regardless of circuit conditions. This matters because:

- DC current injected into the AC grid can saturate distribution transformers and degrade their insulation life.
- DC in AC circuits interferes with residual current devices (RCDs/ELCBs) that protect human life on the AC side.
- Leakage from a faulted DC circuit is contained on the DC side and cannot propagate to exposed metal on the AC side.

**How transformerless inverters replicate this protection:**

A certified transformerless inverter per [IEC 62109](/glossary/iec-62109/) uses continuous residual current monitoring between the DC circuit and the protective earth. The monitoring circuit measures the differential current — any imbalance between current flowing out on the DC positive conductor and returning on the DC negative conductor indicates leakage to earth. If leakage exceeds the threshold, the inverter disconnects from the grid within milliseconds.

> **1 A.** The maximum DC injection current permitted before an IEC 62109-compliant transformerless inverter must trip and disconnect from the grid, per IEC 62109-1 Clause 13.7 and the CEA Technical Standards for Connectivity of Distributed Generation Resources. *Source — [IEC 62109-1:2010, Safety for Power Converters for Use in Photovoltaic Power Systems](https://www.iec.ch/), International Electrotechnical Commission.*

The [CEA Technical Standards for Connectivity of the Distributed Generation Resources](https://cea.nic.in/old/reports/committee/norms/norms_dg_resource.pdf){target="_blank" rel="noopener"}, notified under the Electricity Act 2003, specifically address this requirement and permit transformerless designs provided the monitoring circuits meet the threshold. [BIS IS 16169](/glossary/bis-certification/) (the Indian standard harmonised with IEC 62109) carries the same provision.

**The residual risk:** Electronic protection can theoretically fail if the monitoring circuit itself has a fault. Transformer isolation is passive and cannot fail electronically. This is the genuine engineering argument for transformer-based designs in critical applications — not that transformerless is inherently less safe for standard installations, but that the fault-tolerance profile differs.

## Efficiency and Weight: The Numbers That Move Projects

The efficiency argument is often presented qualitatively ("transformerless is more efficient"). For EPCs preparing project feasibility reports, quantified numbers are more useful.

**Efficiency translation at scale:**

Consider a 50 kW C&I rooftop in Coimbatore with 5.2 peak sun hours/day and 330 days/year of productive generation:

- Annual DC generation from panels: 50 kW × 5.2 h × 330 days = 85,800 kWh
- Transformer-based inverter at 95% efficiency: 81,510 kWh AC delivered
- Transformerless inverter at 98% efficiency: 84,084 kWh AC delivered
- Annual difference: 2,574 kWh
- At ₹7.5/unit savings rate: ₹19,305/year additional value
- Over 25 years (without degradation): ₹4.8 Lakh incremental benefit

This is before factoring in [solar yield](/glossary/solar-yield/) degradation, which affects both topologies equally, or the lower maintenance cost of a transformerless unit (no transformer oil to check, no magnetic core to inspect).

**Weight and rooftop load:**

- **Transformer-based 10 kW unit**: 22–30 kg typical
- **Transformerless 10 kW unit**: 11–16 kg typical
- **Weight saving**: 10–15 kg per inverter

On a project with 10 inverters (100 kW system), this is 100–150 kg of load reduction. For an older factory roof in Surat or a pre-2000 residential complex in Hyderabad, that margin may determine whether the project is structurally feasible without costly reinforcement.

## Indian Regulatory Context: BIS, IEC, and DISCOM Tender Requirements

India's regulatory framework for grid-tied inverters is now firmly aligned with international standards that explicitly accommodate transformerless designs.

> **270 GW.** India's cumulative installed solar capacity target under the National Solar Mission, with rooftop solar accounting for a significant and growing share. As inverter shipment volumes scale, the efficiency and weight advantages of transformerless designs become proportionally more valuable to the national energy transition. *Source — [MNRE Annual Report 2024–25](https://mnre.gov.in/){target="_blank" rel="noopener"}, Ministry of New and Renewable Energy.*

### BIS IS 16169

IS 16169:2014 (amended 2023) is the Indian national standard for photovoltaic systems — grid interactive inverters. It is a direct adoption of IEC 62116 (anti-islanding) and incorporates the IEC 62109 safety requirements. The standard does not distinguish between transformer-based and transformerless topologies — it specifies performance and safety outcomes, not internal architecture.

EPCs can confirm IS 16169 compliance from the BIS Test Certificate issued by a [BIS-recognised laboratory](https://bis.gov.in/){target="_blank" rel="noopener"}. Qbits TLS series inverters carry current IS 16169 certification.

### IEC 62109

[IEC 62109-1](/glossary/iec-62109/) (general) and IEC 62109-2 (grid-connected systems) are the parent international standards. Part 2, Clause 4.3.3 explicitly addresses transformerless inverters and requires: continuous isolation resistance monitoring, DC injection current limiting, and protective shutdown with the specified response times. A device that meets IEC 62109-2 is considered safe for grid connection under the standard's scope.

### DISCOM Tender Specifications

This is where the India-specific complexity enters. State DISCOMs write their own technical specifications for net-metering and grid-tied system approvals, and these documents vary significantly:

- **Post-2018 DISCOM specs** (most states, including MH, GJ, KA, TN, RJ): Reference IS 16169 or IEC 62109 directly. Transformerless permitted.
- **Pre-2018 DISCOM specs** (some PSU clients, CPWD, Railways older tenders): May include language like "inverter shall incorporate galvanic isolation between DC and AC circuits." Transformerless not compliant without a derogation.
- **PM Surya Ghar MNRE specs**: Reference ALMM and IS 16169. Transformerless explicitly permitted for ALMM-listed models.

Before specifying a transformerless inverter on any tender-driven project, the EPC should extract the relevant inverter specification clause and verify alignment. A 10-minute document review at proposal stage avoids a costly mid-project substitution.

## Comparing the Two Topologies: H3 Profiles

### Transformer-Based Inverters

Transformer-based inverters dominated the Indian market through the mid-2010s and remain in active use for specific applications. Their defining characteristics:

- **Efficiency**: 94–96% peak, with iron losses reducing this to 91–94% at partial load.
- **Weight**: 18–35 kg for 5–10 kW units; wall-mounting requires heavier brackets.
- **Galvanic isolation**: Inherent — no active monitoring required to achieve DC-AC separation.
- **DC PV earthing**: Compatible with both grounded and ungrounded array configurations.
- **Rooftop suitability**: Higher structural load; may require engineering assessment on lightweight structures.
- **Cost**: ₹3,000–₹6,000 higher bill of materials per unit due to transformer components.

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

| Project Parameter | Transformer-Based | Transformerless |
| --- | --- | --- |
| Standard residential rooftop (1.5–10 kW) | ✗ Overspecified | ✓ Preferred |
| C&I rooftop (10–500 kW) | ✗ Efficiency penalty | ✓ Preferred |
| Pre-2018 PSU tender with isolation clause | ✓ Required | ✗ Non-compliant |
| PM Surya Ghar subsidy project | ✓ Eligible | ✓ Preferred (ALMM-listed) |
| Medical equipment / hospital critical load | ✓ Preferred | Evaluate case-by-case |
| Floating solar / water-body adjacent | ✓ Preferred | Evaluate case-by-case |
| Lightweight tin-sheet industrial roof | ✓ Risk (weight) | ✓ Preferred (lighter) |
| Export-heavy grid-tied C&I | ✗ Efficiency penalty | ✓ Preferred |
| Off-grid / battery-first hybrid | ✓ Compatible | ✓ Compatible |

**Pros and Cons summary:**

| | Pros | Cons |
| --- | --- | --- |
| **Transformer-Based** | ✓ Hard galvanic isolation ✓ Compatible with grounded arrays ✓ Meets pre-2018 tender specs | ✗ 2–4% lower efficiency ✗ 30–50% heavier ✗ Higher material cost ✗ Larger footprint |
| **Transformerless** | ✓ 97–99% efficiency ✓ Lighter and compact ✓ Lower cost ✓ Meets IS 16169/IEC 62109 ✓ ALMM-eligible | ✗ Requires correct earthing ✗ Not suited for pre-2018 isolation-clause tenders ✗ PID risk if earthing is incorrect |

## Common Specification Mistakes EPCs Make — and How to Avoid Them

The specification errors seen most frequently in Indian EPC projects cluster around four misunderstandings. Recognising them before the proposal stage saves both margin and relationships.

**Mistake 1: Defaulting to transformer-based because "it is safer"**

This conflates safety outcome with topology. A certified transformerless inverter meeting IEC 62109-2 achieves the same DC injection protection as a transformer-based design — the mechanism differs, the protection level does not. Read the [solar inverter certifications](/blog/solar-inverter-certifications/) post for a full breakdown of what each certification actually tests.

**Mistake 2: Not checking the DISCOM tender document for isolation language**

The phrase "galvanic isolation" in a technical specification is a hard constraint, not a preference. Missing it at proposal stage means a mid-project substitution that costs the EPC the margin difference between the two topologies plus any schedule penalty.

**Mistake 3: Earthing the DC negative terminal in a transformerless system**

This is the most dangerous installation error in transformerless systems. Earthing the DC negative terminal in a transformerless inverter bypasses the residual current monitoring circuit, disabling the primary safety protection mechanism. It can also cause DC current to flow through the AC earthing network, tripping RCDs on the AC side. The [solar inverter grounding](/blog/solar-inverter-grounding/) post covers correct earthing practice in detail.

**Mistake 4: Using efficiency at peak load to compare models**

Peak efficiency (published on the datasheet) is measured at a specific voltage and load point — typically 100% load at nominal MPPT voltage. The EU-weighted efficiency, which blends measurements across multiple load points (5%, 10%, 20%, 30%, 50%, 100%), is a far better predictor of real-world generation. Always compare EU-weighted efficiency figures when evaluating transformerless models, particularly for Indian sites with variable irradiance. Consult the [solar inverter sizing](/blog/solar-inverter-sizing/) guide for how to factor efficiency curves into a DC oversizing calculation.

**Mistake 5: Skipping leakage current verification at commissioning**

IEC 62109-2 and IS 16169 require the installer to verify that the inverter's residual current monitoring is functioning correctly at commissioning. This is typically done by measuring ground leakage current with a clamp meter at the earth conductor between the inverter PE terminal and the site earth electrode, confirming it is below the trip threshold. Skipping this step means the monitoring circuit's health is unknown — and a latent fault could persist undetected. See the [solar inverter commissioning](/blog/solar-inverter-commissioning/) guide for the complete commissioning checklist.

## ALMM, PM Surya Ghar, and What Transformerless Means for Subsidised Projects

The [ALMM list](/blog/almm-list-phase-iii-guide/) (Approved List of Models and Manufacturers) maintained by [MNRE](https://mnre.gov.in/almm-list/){target="_blank" rel="noopener"} is the gateway to PM Surya Ghar Muft Bijli Yojana subsidies for inverters. Both transformer-based and transformerless inverters can be listed — the ALMM does not mandate a topology.

> **₹78,000.** The maximum central subsidy under PM Surya Ghar Muft Bijli Yojana for a 3 kW residential system, disbursed directly to the beneficiary's bank account after DISCOM verification of installation. *Source — [MNRE PM Surya Ghar Portal](https://pmsuryaghar.gov.in/){target="_blank" rel="noopener"}, 2026.*

ALMM Phase III includes multiple transformerless models from Indian and international manufacturers. For an EPC sourcing ALMM-compliant inverters for PM Surya Ghar projects, the practical question is not "transformer or transformerless?" but "which ALMM-listed transformerless model gives the best efficiency, warranty, and service SLA combination?"

The [ALMM Phase III guide](/blog/almm-list-phase-iii-guide/) covers the listing requirements, application process, and how to confirm a specific model's current listing status — since listings are updated quarterly and a model can be added or removed.

For PM Surya Ghar projects specifically, the efficiency advantage of transformerless inverters directly increases the annual generation delivered to the subsidy beneficiary, improving the project's performance ratio and reducing the likelihood of complaints during the DISCOM-mandated post-installation inspection period.

## Where Qbits Fits

Qbits TLS series inverters are transformerless on-grid designs, engineered specifically for Indian grid conditions: 180–270 V grid voltage tolerance, 45 °C+ ambient temperature derating curves tested on Indian rooftops, and India-grid-tuned firmware that handles voltage sag and frequency excursions without nuisance tripping. They carry BIS IS 16169 certification, IEC 62109 compliance, and ALMM listing — meeting every requirement for PM Surya Ghar and standard net-metering projects. The 12-year full replacement warranty covers the inverter unit, not just parts, for the first third of the system's life.

- **[On-Grid Inverters](/on-grid-inverter/)** — TLS series from 1.5 kW to 50 kW; transformerless, ALMM-listed, IP66-rated for Indian weather.
- **[Hybrid Inverters](/hybrid-inverter/)** — HS and HT series with battery-ready architecture; suitable for sites needing backup alongside grid-tied operation.
- **[Solar Inverter Sizing Calculator](/string-sizing-calculator/)** — enter panel Voc, Vmp, and site temperature range; the tool confirms string count and MPPT compatibility before you commit to a BOM.
- **[Download Datasheets](/download-datasheets/)** — full technical specifications for every TLS and HS model, including EU-weighted efficiency curves and IP rating test certificates.

When you are ready to compare specific SKU specifications for your next project, the [on-grid inverter range](/on-grid-inverter/) lists every model with peak and weighted efficiency, MPPT input range, and weight. For projects where the DISCOM or tender document has specific compliance questions, [talk to a Qbits engineer](/contact-us/) — most technical queries are resolved within one business day, and the compliance documentation pack can be sent the same day for active tenders.

## Making the Final Call: A Practical Checklist for EPCs

Before submitting a project proposal with a transformerless inverter specified, run through this six-point confirmation:

- **Tender document reviewed** — No explicit "galvanic isolation" or "isolation transformer" clause in the inverter specification section.
- **ALMM status confirmed** — Model is on the current ALMM list if the project is subsidy-linked (PM Surya Ghar, state MNRE schemes).
- **IEC 62109-2 certificate verified** — DC injection monitoring threshold and response time documented in the certification report.
- **Earthing design reviewed** — Earthing drawing shows module frames bonded to PE; DC negative terminal is floating (not earthed).
- **EU-weighted efficiency used for yield estimate** — Not peak efficiency from the datasheet header.
- **Commissioning checklist includes leakage current test** — Assigned to a named team member with a measurement target (typically < 30 mA at operating temperature).

With this checklist complete, the transformerless specification is defensible at client review, bankable for project finance, and compliant for DISCOM interconnection approval.

For EPCs managing high-volume residential deployments under [PM Surya Ghar](/blog/pm-surya-ghar-yojana-complete-guide/), the efficiency advantage of transformerless inverters accumulates into a meaningful performance improvement across the portfolio — not just on individual projects. Understanding the [how a solar inverter works](/blog/how-does-a-solar-inverter-work/) at the circuit level makes the transformerless advantage intuitive rather than a matter of trust in the manufacturer's claims.

The transformer served Indian solar well for the first generation of grid-tied systems. The transformerless design is the architecture that will carry the next 100 GW.
