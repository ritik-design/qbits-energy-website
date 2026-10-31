---
title: "CEIG Inspection for Solar: Inverter-Side Checks"
seoTitle: "CEIG Approval for Solar Plants: Inverter-Side Checks"
excerpt: "The 10 kW CEIG threshold is a state rule, not a central one. See what the 2023 safety regulations say about inverters, earthing and isolation."
description: "CEIG approval for solar is set state by state. See what CEA's 2023 safety rules require of the inverter, which states cite 10 kW, and the evidence file."
category: "EPC"
date: 2026-10-30
readTime: "13 min"
image: "/og/blog-ceig-inspection-solar-plant-inverter-checks.webp"
author: "Keyur Rakholiya"
keywords:
  - ceig approval solar
  - ceig inspection solar plant
  - electrical inspector approval solar
  - ceig above 10 kw
  - solar inverter earthing inspection
  - cea safety regulations 2023 solar
  - self certification solar plant
relatedSlugs:
  - solar-inverter-rfq-template-epc
  - solar-inverter-regulations-india-2026-bis-iec-compliance
  - discom-approval-solar-inverter-net-metering
  - anti-islanding-protection-solar-inverters
  - solar-inverter-commissioning-in-india
  - net-meter-approval-timeline
faqs:
  - q: "What is the full form of CEIG?"
    a: "CEIG usually stands for Chief Electrical Inspector to Government, the head of a state's Electrical Inspectorate. The central 2023 safety regulations use the term Electrical Inspector, and each state appoints and directs its inspectors by its own order."
  - q: "What is a CEIG certificate for a solar plant?"
    a: "It is the written approval or safety certificate that a state Electrical Inspector gives after inspecting the installation, where the state's rules require inspection. Where a state allows self-certification, the matching record is the self-certification report sent to the Electrical Inspector in the Schedule II form. Names and formats differ by state."
---

There is no single national "above 10 kW" rule for [CEIG](/glossary/ceig/) approval of a solar plant. CEIG means Chief Electrical Inspector to Government, the state's head electrical inspector. The Central Electricity Authority's (CEA) 2023 safety regulations leave two numbers to each state government:

- the generating capacity above which an Electrical Inspector must inspect a plant before commissioning;
- the voltage above which inspection replaces self-certification.

Some states have set the capacity at 10 kW. Others have not, and at least one has reportedly set it at 1 MVA.

So the first job for an EPC engineer is to find the state notification for your plant. The second is to prepare for the part of the inspection that is the same in every state. That is the inverter-side safety text in the central regulations: regulation 121, plus the earthing, isolation and testing rules around it. This post covers both, and states plainly what we could and could not verify.

It is the inspector-side companion to two other posts. The [RFQ template](/blog/solar-inverter-rfq-template-epc/) tells you to list the CEIG requirement as its own line. The [inverter regulations guide](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) covers product conformity (BIS and QCO), which is a different question from project approval.

> **What this is built on**
>
> - The CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, gazetted 8 June 2023. Every clause cited below was read in the gazette text.
> - The CEA Technical Standards for Connectivity of the Distributed Generation Resources Regulations, 2013 as amended in 2019. We read the grid-behaviour clauses from a CBIP consolidated copy.
> - One state order read in full (Andhra Pradesh G.O.Ms.No. 17, 11 March 2026), one state portal FAQ (Tamil Nadu), and Gujarat's net-metering regulations as consolidated by CBIP.
> - **Limits:** the live cea.nic.in link for the 2023 gazette returned 404 on 30 October 2026. We read an archived copy of the same gazette PDF instead. We did not read any state inspectorate's own solar checklist. Rajasthan's threshold comes from news summaries, not from the order.

## Where does the 10 kW CEIG approval threshold for solar come from?

The 2023 regulations do not contain a 10 kW figure. Three clauses decide who inspects:

- **Regulation 34** says the capacity above which generating units, including renewable ones, must be inspected before commissioning "shall be as per the notification issued by the Appropriate Government". The Appropriate Government for a rooftop plant is the state.
- **Regulation 45(2)** leaves the voltage above which the Electrical Inspector inspects to a state notification as well. Installations at or below that "notified voltage" are inspected, tested and self-certified by the owner before supply starts.
- **Regulation 45(3)** then applies two separate triggers. An installation above the notified voltage must be inspected by the Electrical Inspector. So must all the apparatus of generating units above the capacity set under regulation 34.

That second trigger matters. A low-voltage rooftop plant can sit well below the notified voltage and still be inspected. That happens when the state has fixed a capacity threshold and the plant is above it. Advice that says inspection depends on voltage alone misses regulation 34.

What the states have actually done, from the sources we could open:

| State | What we found | Source type | Status |
| --- | --- | --- | --- |
| Andhra Pradesh | Capacity above which an Electrical Inspector inspects before commissioning: 10 kW. Notified voltage for self-certification: 33 kV. Solar units under PM Surya Ghar are to be self-certified, with a protection scheme that stops any injection into the grid when the network supply is off. | G.O.Ms.No. 17, 11-03-2026 (full text read) | Verified in the order |
| Tamil Nadu | The portal FAQ says the Assistant Executive Engineer inspects installations of 10 kW and CEIG inspects those above 10 kW, and that CEIG approval is compulsory above 10 kW. | TANGEDCO/TNPDCL solar rooftop portal FAQ (page undated, read 30 Oct 2026) | Verified on the portal. We did not read the state order behind it |
| Gujarat | The GERC rooftop net-metering regulations list Chief Electrical Inspector approval of the single line, earthing and wiring diagrams as an application step, and CEI installation-charging approval at completion. The consolidated copy we read shows no size cut-off for that step. | GERC Notification 5/2016, CBIP consolidated copy | Check the latest GERC amendments and CEI circulars |
| Rajasthan | Reported order of 23 April 2026: generating units up to 1 MVA may be self-certified or inspected, depending on the option chosen on the department portal. Inspector certification is mandatory above 1 MVA. | News and compliance summaries only | Order not read. Treat as unconfirmed |

Karnataka and Maharashtra are missing from the table on purpose. We found conflicting secondary reports for both. We could not open an inspectorate page, so we state nothing for them.

Two practical points follow from the table:

1. **"Above 10 kW" is not a safe default.** It matches the two states we could verify, Andhra Pradesh and Tamil Nadu. It differs in Rajasthan as reported, and it is absent from the Gujarat text we read.
2. **Below the threshold is not "no checks".** Under regulation 45(1) a self-certified installation must still be inspected and tested. The report must reach the Electrical Inspector's office in the Schedule II format. Supply may start only after the report is received. The report is deemed received if the office has not acknowledged it within three working days.

Also settle the unit before you design to a threshold. The sources we read say "10 KW". They do not say whether that is the inverter's AC rating or the module DC capacity (kWp). The regulation text only says "capacity". Ask the inspectorate in writing, and design the plant on the answer.

## What the inspector can check on the inverter side

Regulation 121 sets the safety requirements for solar installations. It is general text in the central regulations, so the same clauses sit behind any state's checklist. An inspector's own form will be state-specific. The items below are the inverter-relevant ones in the regulation. Each can be traced to a drawing, a datasheet line or a site photograph.

| Clause | What it requires (paraphrased) | Evidence to have ready |
| --- | --- | --- |
| 121(1)(vii) | The solar inverter unit is installed in the periphery of the building and near the solar panels. DC cable is UV protected or run in UV-protected pipe | Layout drawing with inverter position and DC cable route; the datasheet's ingress rating and operating range for that location |
| 121(1)(vi) | Three AC phases, and the DC positive and negative conductors, are marked with different colours | Photographs of both sides of every inverter after termination |
| 121(1)(viii) | A manual disconnection switch isolates the system from the grid, located outside the AC combiner box | SLD showing the isolator, with its rating and position on the drawing |
| 121(1)(ix) | Protection on both input and output for overload, surge current, surge voltage, short circuit, high temperature, over and under voltage, over and under frequency, reverse polarity and lightning | A table mapping each item to the inverter datasheet or to an external device (fuse, MCB, SPD) with its rating |
| 121(2)(ii) | The inverter cabinet frame is connected to the earthing bus bar through its earth terminals using flexible braided copper wire | Close-up photograph of the earth lug and braid on each inverter |
| 121(2)(iii) to (v) | All metal casings, array structures, inverters and control systems are earthed. Earth strips are welded, not bolted, and there are enough interconnected earth pits | Earthing layout, pit count, and earth resistance and continuity records |
| 121(3)(i) to (iv) | Lightning arresters per standard; surge protective device with arc-extinguishing capability in each combiner box; overcurrent protection on combiner box inputs; isolation on its output | SLD and BOM lines for each device, with the standard each is rated to |
| 121(3)(v) | Earth fault protection and insulation monitoring for arrays and inverters | The datasheet line that shows earth fault or insulation monitoring for the exact model, or the external relay that provides it |

Three neighbouring clauses are easy to forget because they are not under "solar":

- **Regulation 43** sets the earthing rules for systems from 50 V to 650 V. DC systems follow the relevant standards. Earthing systems are tested before the equipment is energised. Earth fault loop impedance must be low enough for the protective device to operate.
- **Regulation 44** requires a residual current device in an installation, with the rating and trip time per the relevant standards. Its second proviso exempts supply lines whose protective devices are effectively bonded to the neutral of the supply transformer. Ask how your inspectorate reads this for a solar AC circuit before you assume either way.
- **Regulation 48(1)** covers the maker's test certificates. Before the Electrical Inspector approves an installation under regulation 45, they "shall, if required, be produced" for type, acceptance and routine tests. For an inverter, expect a request for the datasheet and the test-report references, not for a re-test.

### Inspector checks versus DISCOM checks

CEIG approval is a safety approval. Grid interconnection is the DISCOM's. The values that decide whether an inverter may run in parallel with the grid sit in the CEA connectivity regulations for distributed generation (below 33 kV):

| Item | Value in the regulation (2013, amended 2019) |
| --- | --- |
| DC injection | Not above 0.5% of full rated output at the interconnection point |
| Voltage trip | Above 110% or below 80%, clearing within two seconds. The licensee may prescribe a narrower range |
| Frequency trip | At 50.5 Hz and 47.5 Hz, clearing within 0.2 seconds. The licensee may prescribe a narrower range |
| Reconnection | Only after voltage and frequency stay within limits for at least 60 seconds |
| Islanding | Cease to energise within two seconds of an unintended island forming |
| Isolating switch | Where the licensee requires it above a particular capacity: visible break, lockable open, reachable 24 hours by the licensee, at least 2.44 m above ground |

An inspector may still ask for these. Gujarat's regulations, for example, require the inverter to have anti-islanding and a second line of protection such as a no-volt relay. They also put back-feeding liability on the generator "based on the issue decided by the Chief Electrical Inspector".

The [anti-islanding guide](/blog/anti-islanding-protection-solar-inverters/) explains how these functions are tested. Part D of the RFQ template lists the full CEA clause set. For the DISCOM (distribution company) side of approval, read [how DISCOM acceptance of an inverter is decided](/blog/discom-approval-solar-inverter-net-metering/).

## The inverter evidence file for an inspection

Build one folder per plant before you book the inspection. Each item answers a question an inspector or DISCOM engineer is entitled to ask.

**Drawings (usually approved first)**

- [ ] Single line diagram showing each inverter, isolators, combiner boxes, surge protective devices (SPDs), RCD or earth fault devices, the point of connection and the earthing. The [single line diagram entry](/glossary/single-line-diagram/) lists what it should show
- [ ] Earthing layout with pit positions, strip sizes and the connection from each inverter frame
- [ ] Plan showing inverter location against the building periphery and panel arrays

**Per inverter model**

- [ ] The datasheet for the exact model, with its issue date, not a family brochure
- [ ] A protection map: each item in regulation 121(1)(ix) against the datasheet line or the external device
- [ ] References to the test reports behind the standards the datasheet cites. Gujarat's completion step explicitly asks for IEC certificates or test reports for inverters
- [ ] Grid protection settings as commissioned, with the values in the table above, from a screen capture or printout

**On site**

- [ ] Insulation resistance and earth continuity records for DC and AC circuits, from calibrated instruments
- [ ] Earth resistance readings for each pit
- [ ] Photographs of colour coding, earth braid, isolator labelling and inverter ventilation clearance
- [ ] Contractor's completion report in the form your inspectorate asks for. Tamil Nadu's single-window checklist, for example, names a work completion report to IS 732. It also names the maker's test certificates "if applicable", for installations under 630 kVA. That list is generic, not solar-specific

The [commissioning record guide](/blog/solar-inverter-commissioning-in-india/) covers the same ground from the owner's side. Reuse its test records so you only measure once.

## Worked example: the same plant in four states

This is illustrative, against the sources as read on 30 October 2026. It is not advice for a live project.

Take a 100 kW rooftop plant on a factory's low-voltage three-phase service, such as a [plastic processing unit](/blog/solar-for-plastic-injection-moulding-units/). It is above 10 kW whether the figure is measured in AC kW or in kWp. The unit question does not change the answer here.

| State | What the sources say applies | What changes on the inverter side |
| --- | --- | --- |
| Andhra Pradesh | Above the 10 kW capacity in the G.O., so inspection by the Electrical Inspector before commissioning. The PM Surya Ghar self-certification proviso is for scheme solar units, which a factory plant is not | Full regulation 121 evidence file |
| Tamil Nadu | Above 10 kW, so CEIG approval is compulsory under the portal FAQ | Same file. Check whether drawings need approval before purchase |
| Gujarat | The CEI approves the single line, earthing and wiring diagrams as part of the application, then gives installation-charging approval at completion | Drawings first. IEC certificates or test reports for inverters at completion |
| Rajasthan | Reportedly within 1 MVA, so self-certification or inspector certification by choice, if the order is as reported | Still regulation 45(1) tests and forms. A factory owner may choose the inspector route for the record |

The inverter work is almost the same in all four. What changes is who signs, when, and how early the drawings must be approved. That is why the inverter evidence file should exist before the state is known.

If you are fixing the inverter schedule for a plant that needs inspector approval, [send the project details to Qbits](/contact-us/). Include the capacity, voltage level and state. Quotes are per model and quantity. The [datasheet library](/download-datasheets/) shows the MPPT, voltage and efficiency figures for each family. Qbits datasheets cite their standards, and the IP66 rating is published per family in the catalogue. We do not state here which Qbits model has which protection function. Take that from the exact model's datasheet.

## Questions to put to the inspectorate in writing

1. Is the capacity threshold measured on AC inverter rating, on kWp, or on kVA?
2. Is the plant above the notified voltage, and above the capacity notified under regulation 34?
3. If self-certification is allowed, may the owner use a Chartered Electrical Safety Engineer, and which Schedule II form applies?
4. Must drawings be approved before the inverters are ordered?
5. Does the inspectorate want test reports for the inverter, or the datasheet only?
6. How does it read regulation 44 (residual current device) for the AC side of a grid-tied inverter?
7. Does it apply regulation 121(1)(vii) strictly to inverters installed in an electrical room?

Written answers protect you if a site visit reads a clause differently from the portal.

## What this post could not check

- The live cea.nic.in copy of the 2023 gazette (404). We used an archived copy of the same PDF.
- Any state inspectorate's solar-specific checklist or form. Regulation 121 is the national text, not an inspector's form.
- Tamil Nadu's state order. We read the portal FAQ only. A secondary source states the order uses kVA rather than kW, which we could not confirm.
- Rajasthan's order text, and any Karnataka or Maharashtra threshold.
- Whether Gujarat's later amendments or CEI circulars add a size threshold to the CEI approval step.
- Whether the Andhra Pradesh G.O. has been amended after 11 March 2026.
- Fees and processing times. They vary by state and we found no verified current figure.
- Qbits product protection functions. They are per model. Read the datasheet.

## Next step

Pick the state notification first, then fill the evidence file above. Once you know the inverter capacity and voltage level, [send the project details to Qbits](/contact-us/) for a quote per model and quantity. Or start from the [datasheet library](/download-datasheets/) to fill your protection map.
