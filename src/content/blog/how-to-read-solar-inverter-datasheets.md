---
title: "How to Read a Solar Inverter Datasheet for a BOQ or Tender"
seoTitle: "How to Read an Inverter Datasheet for BOQs and Tenders"
excerpt: "Turn an exact-model inverter datasheet into checked design inputs, BOQ line items, a tender compliance matrix, and a traceable technical submission."
description: "A practical EPC workflow for reading solar inverter datasheets, checking model limits, writing BOQ line items, and proving tender compliance."
category: "EPC"
date: 2026-05-11
updatedDate: 2026-09-26
readTime: "15 min"
image: "/og/blog-how-to-read-solar-inverter-datasheets.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter datasheet
  - inverter specifications
  - inverter BOQ
  - solar tender technical submission
  - tender compliance matrix
  - MPPT range
  - EPC procurement
faqs:
  - q: "What should an EPC check first on an inverter datasheet?"
    a: "Check the exact model designation, document revision, and issue date. A capacity label such as 5 kW can refer to several products with different MPPT counts, voltage windows, current limits, and optional accessories. Every later calculation and tender response depends on the document covering the offered SKU."
  - q: "What is the difference between start-up voltage and the MPPT range?"
    a: "Start-up voltage is the threshold at which the inverter begins operating. The MPPT range is the window within which it can actively track the array's maximum power point. A string can exceed start-up voltage and still sit outside the useful tracking window, so the two figures are not interchangeable."
  - q: "Is an inverter datasheet the same as a BOQ specification?"
    a: "No. A datasheet describes product limits and options. A BOQ must identify the exact offered model, quantity, selected accessories, included documents, and project-specific scope. Copying a family brochure into the BOQ can leave optional items, meters, communication devices, or warranty documents undefined."
  - q: "How should a datasheet value appear in a tender compliance matrix?"
    a: "Record the tender clause, the requirement, the exact offered value, the source file and page or table, and a status such as comply, deviation, clarification required, or not applicable. Do not mark a row compliant when the datasheet omits the value or covers only a related model."
  - q: "Does 98.1 percent maximum efficiency mean 98.1 percent annual efficiency?"
    a: "No. Maximum efficiency is the highest published conversion point under stated conditions. Annual conversion depends on the full efficiency curve, loading, operating voltage, temperature, tracking behaviour, clipping, standby consumption, and availability. Compare like-for-like efficiency measures for the exact models."
  - q: "Is a standards list on a datasheet the same as a certificate?"
    a: "No. A standards list states what the document associates with the product. Tender proof may require a current certificate or registration that names the exact model, standard and edition, issuing body, scope, and validity. Verify the required evidence through the issuing authority where a public check exists."
  - q: "What should an EPC do when a required value is absent from the datasheet?"
    a: "Mark it as clarification required, request controlled written evidence for the exact model, and keep the tender response open. Do not infer the value from another family, a sales presentation, or a similar capacity model."
relatedSlugs:
  - inverter-suppliers-india
  - inverter-procurement-india
  - solar-inverter-sizing
---

A solar inverter datasheet does not become a compliant BOQ merely because it is attached to a bid. An EPC engineer has to translate it through four controlled records: the design input sheet, the BOQ, the tender compliance matrix, and the technical-submittal index.

Each record must point back to the exact model and document revision. If the offered model changes, the chain must be checked again. That is the practical difference between reading a datasheet and using one.

> **Quick answers**
>
> - Start with the exact model, document revision, and issue date.
> - Treat maximum DC voltage, MPPT range, and start-up voltage as different limits.
> - Run the string and current checks before writing the BOQ.
> - Name selected accessories. Never convert an optional feature into included scope.
> - Answer each tender clause with an exact value and an evidence location.
> - Use "clarification required" when the supporting document is silent.
> - Check the datasheet, BOQ, quotation, and compliance matrix against each other before submission.

**Short version.** Read the exact-model datasheet, extract only the values needed by the design and tender, complete the engineering checks, and then write the BOQ around the selected configuration. The final compliance matrix should show where every offered value came from. A family name, capacity label, or unchecked "complies" entry is not traceable evidence.

## Build the document register before reading specifications

The first task is document control, not electrical calculation. Create a register for the files that govern the offer.

| Controlled record | Minimum fields to capture | Why it matters |
| --- | --- | --- |
| Tender and addenda | Tender reference, clause, revision, addendum, issue date | Establishes the actual requirement |
| Inverter datasheet | Manufacturer, exact model, file name, revision, issue date | Establishes published product values |
| Module datasheet | Manufacturer, exact model, revision, electrical coefficients | Supplies the array inputs |
| Calculation sheet | Project, design temperatures, assumptions, checker, version | Shows how the selected string layout was tested |
| BOQ | Line number, exact model, quantity, unit, included accessories | Defines the offered supply |
| Compliance matrix | Clause, requirement, offered value, source location, status | Connects the offer to the tender |
| Submittal index | File name, document type, model scope, revision, page count | Makes the evidence pack auditable |

Keep the manufacturer file unchanged and work from a separate extraction sheet. Renaming a downloaded PDF for filing is fine, but retain its original title and revision in the register.

## Pass one: confirm which product the document covers

Start with the model designation. A label such as "5 kW inverter" is not a model because several products can share that nominal power while using different tracking architectures, voltage limits, current limits, phases, and accessories.

Check all four locations:

1. the model row in the datasheet;
2. the supplier quotation;
3. the proposed BOQ line; and
4. the nameplate expected at delivery.

The revision matters for the same reason. If a supplier replaces the datasheet during clarification, record the change and rerun every affected check. Do not combine values from two revisions into one offered specification.

## Read the three DC voltage figures separately

These three fields answer different engineering questions.

**Maximum DC voltage** is an equipment ceiling. Compare it with the string open-circuit voltage at the lowest design temperature, using the exact module's voltage-temperature coefficient.

**MPPT voltage range** is the window in which Maximum Power Point Tracking can operate. Check that the string operating voltage remains within the usable window at the relevant hot and cold operating conditions.

**Start-up voltage** is the threshold at which the inverter can begin operating. It is not the minimum design voltage and it does not replace the MPPT check.

Use project inputs rather than a universal module count:

    Corrected string voltage =
    module voltage at STC
    x number of modules in series
    x [1 + (temperature coefficient in %/degree C / 100)
    x (design cell temperature - 25 degree C)]

Use module Voc and its voltage-temperature coefficient for the cold-voltage
check. Use module Vmp and the corresponding coefficient for the hot operating
check. Keep the sign printed on the module datasheet.

Record the selected minimum and maximum design temperatures, the temperature basis, the exact coefficient, and any design factor required by the governing specification. The [string sizing calculator](/string-sizing-calculator/) can screen a layout, but the signed project calculation must use the current module and inverter documents.

## Check current per tracker, not only total DC power

Voltage compliance does not prove current compliance. Record:

- maximum input current for each MPPT;
- short-circuit current limit, if the exact datasheet publishes one;
- permitted strings per MPPT;
- proposed module operating current and short-circuit current;
- parallel strings assigned to each tracker; and
- the design factor required by the project specification.

Do not divide a family-level current value across trackers unless the datasheet explicitly defines it that way. "20/20 A", "40 A total", and "20 A per MPPT" are different statements.

For each tracker, record the current check explicitly:

    Tracker design current =
    module current
    x parallel strings on that tracker
    x the design factor required by the governing specification

State whether the check uses operating current or short-circuit current. They
answer different requirements.

## Work through one exact datasheet

The current [QB 4/5/6 KTLD datasheet](/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf) separates the QB-4KTLD, QB-5KTLD, and QB-6KTLD models. The table below uses only values printed in that file, checked on 26 September 2026.

| Datasheet field | Published value | Engineering use |
| --- | --- | --- |
| Model range | QB-4KTLD, QB-5KTLD, QB-6KTLD | Select one exact offered model |
| Maximum DC voltage | 550 V | Check corrected cold string Voc |
| MPPT voltage range | 80 to 550 V | Check operating voltage across design conditions |
| Start-up voltage | 50 V | Starting threshold only |
| Maximum DC input current | 20/20 A | Check proposed current on each tracker |
| Number of MPPTs | 2 | Assign strings to two independent trackers |
| Maximum strings per MPPT | 1/1 | Do not assume extra parallel inputs |
| Rated AC output | 4,000 W, 5,000 W, or 6,000 W by model | Match the exact SKU to the AC design |
| Maximum output | 4.4 kVA, 5.5 kVA, or 6.6 kVA by model | Keep apparent power distinct from rated active power |
| Maximum efficiency | 98.1 percent | Peak value, not annual conversion |
| European efficiency | 97.5 percent | Compare only with the same metric |
| Display | LED, with LCD optional | State the selected display in the offer |
| Communication | Wi-Fi, with RS485 or GPRS optional | Add the selected interface to scope |
| Protection class | IP66 | Check installation instructions separately |

The [QB 4.6/5/6 KTLS datasheet](/datasheets/products/QB_Data-Sheet_4.6-6.0-kw_1MPPT_1Phs.pdf) overlaps in capacity but describes a single-MPPT family. A tender response that says only "Qbits 5 kW" does not distinguish these products.

## Convert extracted values into a design input sheet

Do not copy every row of the datasheet into the BOQ. First sort the values by what they control.

| Input group | Examples | Resulting project record |
| --- | --- | --- |
| Array compatibility | Maximum DC voltage, MPPT window, current per tracker, input count | String schedule and calculation |
| AC connection | Rated active power, maximum apparent power, phase, voltage, frequency | SLD and AC equipment schedule |
| Site environment | Temperature range, derating information, IP class, altitude | Mounting and environmental check |
| Controls | Power factor range, export control, communications, monitoring | Control narrative and accessory list |
| Installation | Dimensions, mass, clearances, connector and cable requirements | Layout, structure, and installation BOQ |
| Evidence | Standards list, certificates, manual, warranty terms | Technical-submittal index |

If a field affects design but is missing, stop that part of the design at "clarification required". A related model's value is not a substitute.

## Write the BOQ around the selected configuration

A useful inverter BOQ line answers six questions:

1. What exact model is offered?
2. How many units are included?
3. What electrical configuration is selected?
4. Which optional accessories are included?
5. Which supporting documents or services are in scope?
6. Which items are explicitly excluded or supplied elsewhere?

For example, a working line might begin:

    Solar string inverter, Qbits QB-5KTLD, 5,000 W rated AC output,
    230 V single phase, two independent MPPTs, IP66, quantity [project value],
    including [selected communication interface and project accessories].

This is a drafting example, not a complete procurement specification. The bracketed items must be replaced with the actual project scope.

Check these accessory questions before issuing the BOQ:

- Is the required Wi-Fi, RS485, GPRS, Ethernet, or other interface included in the quoted SKU?
- Does the project require an external meter, current transformer, data logger, or export-control device?
- Are DC connectors, communication cables, and termination hardware included or supplied elsewhere?
- Are external DC and AC protection devices separate BOQ lines?
- Does monitoring require an account, gateway, licence, or commissioning step?
- Are the installation manual, drawings, certificates, and written warranty terms included in the document package?

The datasheet may establish that an option exists. Only the quotation and agreed scope establish that it is included.

## Build the tender compliance matrix clause by clause

Do not write "complies" against a section heading. Break each requirement into a row that can be verified.

| Tender clause | Requirement | Offered value | Evidence | Status | Comment |
| --- | --- | --- | --- | --- | --- |
| [clause] | Exact model identification | QB-5KTLD | Datasheet, model table | Comply | Same model used in BOQ and quote |
| [clause] | Maximum DC voltage | 550 V | Datasheet, input table | Compare with requirement | Engineering check attached |
| [clause] | MPPT arrangement | 2 independent MPPTs | Datasheet, input table | Compare with requirement | String schedule attached |
| [clause] | Communication interface | Wi-Fi; RS485 or GPRS shown as optional | Datasheet, system data | Clarification required | Quote must name selected interface |
| [clause] | Certificate for exact model | [document reference] | Certificate and authority check | Open until verified | Datasheet standards list is not the certificate |

Use a controlled status vocabulary:

- **Comply:** the offered value meets the clause and the evidence is attached.
- **Deviation:** the offer differs from the requirement and the difference is disclosed.
- **Clarification required:** the available evidence is incomplete or ambiguous.
- **Not applicable:** the clause does not apply, with the reason recorded.

If a requirement says "minimum", "maximum", "rated", or "at least", preserve that comparison in the matrix. Do not replace a rated value with a maximum value because the larger number looks favourable.

## Separate standards references from compliance evidence

A standards list on a product sheet is a useful index. It is not automatically the document a tender asks you to submit.

For each requested registration, certificate, or report, record:

- exact model or family scope;
- standard and edition;
- document or registration number;
- issuing body or laboratory;
- issue and expiry dates where applicable;
- limitations, annexures, and covered variants; and
- the public verification route, if one exists.

The [BIS Compulsory Registration Scheme portal](https://www.crsbis.in/BIS/) provides public registration-search functions. Use the applicable authority's record as evidence instead of treating a logo or standards list as proof.

## Assemble the technical-submission index

The index should tell a reviewer where each answer sits. Include only the documents the tender requires, but account for likely dependencies:

1. completed technical schedules and compliance matrix;
2. exact-model datasheet;
3. string-sizing and current calculations;
4. single-line diagram and equipment schedule;
5. general arrangement, dimensions, and mounting information;
6. current certificates or registrations requested by the tender;
7. installation and commissioning manuals where requested;
8. selected communication, meter, and export-control documents;
9. written warranty and service terms;
10. manufacturer or channel authorisation where required; and
11. deviation schedule and clarification responses.

Use page references in the compliance matrix. A reviewer should not have to search a full catalogue for one value.

## Give hybrid models a separate engineering pass

For a hybrid inverter, add the battery and backup-side fields to the extraction sheet:

- supported battery-voltage range;
- maximum charge and discharge current by model;
- approved chemistry and exact battery compatibility;
- BMS protocol and communication hardware;
- continuous backup output;
- surge output with stated duration;
- transfer behaviour;
- parallel-operation rules; and
- generator input or control requirements where applicable.

The current [QBH 3 to 6 kW single-phase catalogue](/datasheets/products/Qbits-Hybride-Inverter-Catalogue-1.pdf) lists maximum battery charge and discharge current from 75 A to 120 A across its variants. The 120 A value does not describe the QBH-3KS48P, which lists 75 A. This is why a family maximum cannot be copied into every BOQ line.

Battery compatibility also requires more than a voltage match. Obtain the current written compatibility evidence for the exact inverter, battery, firmware, and BMS combination.

## Read efficiency, environment, and commercial documents honestly

Maximum efficiency is the highest published conversion point under stated conditions. Weighted efficiency applies defined load weightings. Keep the measurement names separate and compare the same metric between models.

If the values will become bid requirements, use the [peak versus weighted inverter efficiency tender guide](/blog/peak-vs-weighted-inverter-efficiency/) to define the metric, method, test conditions, evidence, and acceptance rule before issuing the schedule.

An ingress protection class describes resistance to dust and water. It does not replace the installation manual's temperature, clearance, exposure, and mounting requirements.

Warranty scope also sits outside a headline specification. The current Qbits public datasheets describe an expandable warranty but do not establish the base term, remedy, registration deadline, labour allocation, freight allocation, or exclusions. Obtain the current written terms for the exact quoted model before the tender response promises any of them.

## Run the four-document consistency check

Before submission, compare the datasheet, BOQ, supplier quotation, and compliance matrix side by side.

| Final check | Pass condition |
| --- | --- |
| Model identity | The same exact model appears in all four records |
| Quantity | Unit totals agree with the design and price schedule |
| Electrical values | Rated and maximum values are not interchanged |
| MPPT and inputs | Tracker count, current, and string allocation agree |
| Accessories | Every optional item marked included appears in the quotation and BOQ |
| Documents | Certificates, manuals, and warranty files cover the offered model |
| Deviations | Every known difference is disclosed in the required schedule |
| Revision control | The submission index records the final file version |
| Calculations | Inputs, formulae, assumptions, author, and checker are visible |
| Source traceability | Every tender response points to an attached evidence location |

The most damaging error is often not a bad calculation. It is a correct calculation attached to a different model than the one priced.

Start with the [Qbits datasheet library](/download-datasheets/), select the exact model family, and build the document register before writing the BOQ. Request model-specific manuals, certificates, compatibility confirmations, and written warranty terms separately when the datasheet does not establish them.

**Sources checked 26 September 2026:** current Qbits QB 4/5/6 KTLD, QB 4.6/5/6 KTLS, and QBH 3 to 6 kW single-phase product documents; the Qbits datasheet library; the live Qbits product data; and the BIS CRS public portal.
