---
title: "Solar Inverter Selection Scorecard for EPCs"
excerpt: "A documented EPC scorecard for screening solar inverters against site limits, array design, grid requirements, service terms and lifecycle cost."
description: "Use a solar inverter selection scorecard to screen technical limits, compare evidence, assess support and document an EPC procurement decision."
category: "Buying Guide"
date: 2026-03-16
updatedDate: 2026-09-23
readTime: "11 min"
image: "/blog-images/solar-inverter-selection.svg"
author: "Nirav Dhanani"
keywords:
  - solar inverter selection
  - inverter selection criteria epc
  - EPC inverter procurement
  - inverter selection scorecard
  - solar inverter evaluation
faqs:
  - q: "Should an EPC score every inverter before checking technical limits?"
    a: "No. Treat electrical, environmental, grid and project requirements as pass-or-fail gates first. Score only the models that satisfy every mandatory limit. A high commercial score cannot compensate for an incompatible MPPT window, insufficient current capacity, unsuitable output phase or missing project evidence."
  - q: "Is the highest-efficiency inverter always the best selection?"
    a: "No. Compare efficiency under documented conditions, but also check array compatibility, temperature behaviour, grid requirements, service terms and the cost of operating the exact project. A headline maximum-efficiency figure does not establish annual energy or project suitability by itself."
  - q: "What evidence should an EPC request from an inverter supplier?"
    a: "Request the current model datasheet and manual, model-specific certificates or registrations required for the project, written warranty and service terms, monitoring documentation, accessory list and commercial quote. Record document versions so the approved evidence can be matched to delivered equipment."
  - q: "How should warranty be scored?"
    a: "Score the written remedy, exclusions, registration, labour and transport responsibilities, claim route and service capacity, not the headline duration alone. Apply the same questions to every bidder and mark any missing term as unverified until the supplier provides the controlling document."
  - q: "Can one scorecard be reused for every project?"
    a: "Reuse the structure, not the thresholds or weights. Each project's array, grid connection, environment, monitoring obligations, client priorities and contract terms should set its own pass-or-fail limits and scoring weights before supplier responses are opened."
featured: false
---

**A useful solar inverter selection scorecard starts with pass-or-fail engineering limits, then compares the surviving models on documented commercial and service criteria.** This order prevents an attractive price, warranty headline or feature list from hiding a mismatch in voltage, current, phase, environment or grid requirements.

The framework below is for EPC procurement teams. It does not replace the project electrical design, the applicable DISCOM process, or an engineer's review of the exact equipment and installation.

## What should an EPC define before comparing inverters?

**Define the project requirements before asking suppliers to score themselves.** Record the array design envelope, AC connection, environmental conditions, operating objective, monitoring obligations, service expectations and commercial evaluation period. Without this baseline, every bidder can appear compliant by answering a different version of the project.

Create a project requirement sheet with these inputs:

| Requirement group | Project input to record | Evidence used to set it |
| --- | --- | --- |
| PV array | Module model, string layout, voltage and current envelope | Current module data and design calculations |
| AC connection | Rated output, phase, voltage and utility requirements | Approved single-line diagram and connection documents |
| Site | Ambient conditions, enclosure location, altitude and exposure | Site survey and project specification |
| Operation | Export, self-consumption, backup or plant-control objective | Client brief and approved control philosophy |
| Monitoring | Signals, communications, portal access and data handover | O&M and client reporting requirements |
| Support | Response path, spares, training and escalation | Procurement and O&M plan |
| Commercial | Quote scope, warranty, service and evaluation period | Tender and contract documents |

Freeze this sheet before supplier scoring. If a project requirement changes, record the change and recheck every candidate against the same revision.

## Which criteria should be pass or fail?

**Any criterion that can make the design unsafe, non-compliant or inoperable belongs in the pass-or-fail screen.** Typical gates cover DC voltage and current, MPPT compatibility, AC output and phase, environmental limits, required grid evidence, protection interfaces and approved battery pairing where storage is included.

Use the exact proposed model, not a family name. Check at least:

- Maximum DC voltage against the calculated cold-condition string voltage.
- MPPT operating window against expected string operating voltage.
- Per-input and per-MPPT current limits against the module and string arrangement.
- Rated and maximum AC output against the project design and connection.
- Phase, voltage and frequency compatibility.
- Temperature, altitude and enclosure limitations for the intended mounting location.
- Required protection functions and interfaces in the approved design.
- Model-specific certificates, registrations or test evidence required by the tender or current connection process.
- Battery voltage, current, BMS and model compatibility for a hybrid design.

The [datasheet-reading guide](/blog/how-to-read-solar-inverter-datasheets/) explains how to separate maximum DC voltage, MPPT range and start-up voltage. Use the [string-sizing calculator](/string-sizing-calculator/) only as an initial screen, then verify the design against current module and inverter documents.

## How should an EPC compare models that pass?

**Score only the compliant models, using criteria and weights agreed before commercial bids are opened.** A practical matrix can cover design fit, evidence quality, monitoring, service, warranty, supply execution and total cost. Add notes and document references beside every score so another reviewer can reproduce the decision.

Use a scale such as `0 = no acceptable evidence` through `5 = fully meets the documented requirement`. The scale is a procurement convention, not a product-performance claim. Define what each score means for each criterion before evaluation.

| Scored criterion | What to compare | Evidence to retain |
| --- | --- | --- |
| Design fit | Margin to project limits and layout flexibility | Design sheet and exact model datasheet |
| Evidence quality | Scope, revision and model match | Certificate, report or registry record |
| Monitoring | Required signals, hardware, access and export | Manual, demo record and quoted accessories |
| Commissioning | Tools, instructions and acceptance support | Manual and support commitment |
| Warranty | Remedy, exclusions, costs and claim steps | Controlling written policy |
| Service | Escalation, diagnosis, spares and responsibilities | Service schedule or contract |
| Supply | Lead time, substitutions and version control | Quote and purchase terms |
| Ownership cost | Acquisition, service, downtime and replacement inputs | TCO worksheet and supporting quotes |

Do not award points for an adjective such as “smart,” “premium” or “AI-powered.” Score the observable function the project needs, the evidence that it exists, and who must provide the hardware or subscription.

## How should efficiency and thermal behaviour be assessed?

**Compare efficiency and thermal behaviour under stated conditions, not through one headline percentage.** Record the efficiency metric, test basis, load range and any temperature or altitude derating that affects the site. Model expected energy with consistent assumptions if the difference matters to the procurement decision.

Maximum efficiency is not annual yield. Likewise, an operating temperature range does not prove that full output is available throughout that range. Request the applicable derating curve or manual and check whether the proposed mounting conditions preserve ventilation and required clearances.

If an energy-value comparison is included, keep the model inputs, loss assumptions and tariff basis in the decision file. Do not convert a datasheet difference into a lifetime saving without a reviewed energy model.

## How should enclosure and site conditions be scored?

**Match the documented enclosure and environmental limits to the surveyed installation, rather than declaring one IP rating universally sufficient.** Rain exposure, dust, salt, direct sun, flooding risk, ventilation, altitude and maintenance access can change the mounting decision even when two products carry the same headline enclosure rating.

The [IP65 versus IP66 guide](/blog/ip65-vs-ip66-solar-inverters-weather-protection-guide/) explains what an ingress code does and does not establish. The EPC should also check the manual's mounting orientation, clearances, connector requirements and any restrictions for corrosive environments. An IP code does not replace those installation instructions.

## What should be checked in warranty and service terms?

**Read the controlling warranty and service documents for the exact model.** Compare when coverage starts, registration requirements, covered faults, remedy, exclusions, diagnostic steps and responsibility for labour, removal, transport and reinstallation. A duration shown in a brochure cannot answer those questions on its own.

Use the same claim scenario with each supplier. For example: the installed unit reports a recurring fault after commissioning, remote checks do not resolve it, and site attendance is needed. Ask who opens the case, which records are required, who visits, which costs are covered and what happens if replacement stock is unavailable.

The [solar inverter warranty guide](/blog/solar-inverter-warranty/) provides a document checklist. Retain the policy version with the purchase file instead of relying on a web-page summary that may later change.

## How should monitoring and support be evaluated?

**Test the monitoring and support workflow against the O&M team's actual job.** Confirm commissioning access, user roles, alarm detail, data export, connectivity hardware, subscription terms, firmware responsibilities and the route for technical escalation. A feature list is not a completed workflow test.

Ask the supplier to demonstrate a normal commissioning sequence and a fault escalation. Record whether extra gateways, SIMs, licences or mobile permissions are needed. Check what the client receives at handover and how access transfers if the original EPC no longer maintains the plant.

Support can be scored only from defined evidence. Named contacts, documented hours, escalation steps, training material and spare-parts commitments are more useful than an unqualified promise of “fast service.”

## How should total cost affect inverter selection?

**Compare total cost using the same scope, period and assumptions for every compliant model.** Include installed acquisition cost, required accessories, commissioning, planned service, monitoring fees, expected downtime exposure, warranty responsibilities and replacement scenarios. Keep uncertain inputs visible instead of disguising them inside one confident total.

The [inverter TCO worksheet](/blog/inverter-tco/) provides the input structure. Run sensitivity cases for the inputs that can change the decision, such as service visits, downtime value, replacement timing or discount rate. A lower purchase price should win only if the comparable evidence supports the lower ownership cost or the client has explicitly prioritised capital cost.

## A solar inverter selection scorecard template

Complete the pass-or-fail section first. Reject or resolve every failure before weighted scoring.

### Technical gate

| Gate | Required value or document | Candidate result | Evidence reference | Pass/fail |
| --- | --- | --- | --- | --- |
| Exact model and revision |  |  |  |  |
| Maximum DC voltage |  |  |  |  |
| MPPT voltage range |  |  |  |  |
| Input current limits |  |  |  |  |
| AC rating and phase |  |  |  |  |
| Environmental limits |  |  |  |  |
| Grid and project evidence |  |  |  |  |
| Storage compatibility, if applicable |  |  |  |  |

### Weighted comparison

| Criterion | Project weight | Candidate score | Weighted result | Evidence and notes |
| --- | --- | --- | --- | --- |
| Design fit |  |  |  |  |
| Evidence quality |  |  |  |  |
| Monitoring and commissioning |  |  |  |  |
| Warranty and service |  |  |  |  |
| Supply execution |  |  |  |  |
| Total cost of ownership |  |  |  |  |

Have engineering approve the technical gate, O&M review monitoring and support, and procurement confirm the commercial comparison. Record the chosen model, rejected alternatives, open conditions and approvers in the decision note.

## What should happen before a purchase order is released?

**Before release, match the selected model and every promised accessory to the final design, quote and evidence file.** Resolve qualifications, approve substitutions formally, attach the controlling warranty and define commissioning and handover records. The purchase order should not rely on a scorecard entry that the contract does not preserve.

The final file should include the approved single-line diagram, array calculations, exact SKU, current datasheet and manual, required compliance evidence, monitoring scope, warranty, service terms, delivery conditions and acceptance tests. [Download current Qbits datasheets](/download-datasheets/) or [request a model-specific technical review](/contact-us/) before procurement.

**Sources checked 23 September 2026:** the current Qbits datasheet library, Qbits product inventory and the linked Qbits technical guides. Product, certificate, warranty and support statements must be reconfirmed for the exact quoted model and project. Engineering, procurement and contract owners should approve the final scorecard before purchase.
