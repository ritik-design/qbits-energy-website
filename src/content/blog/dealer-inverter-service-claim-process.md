---
title: "How Dealers Handle Inverter Service Claims, Step by Step"
seoTitle: "Inverter RMA Process for Dealers, Step by Step"
excerpt: "A generic dealer playbook for an inverter fault: intake record, triage, safe site checks, evidence, RMA request, return, re-inspection and a claims tracker."
description: "Inverter RMA process for solar dealers in India: intake record, safe site checks, evidence pack, questions for any brand, claims tracker and agreement clauses."
category: "Business"
date: 2026-10-30
readTime: "22 min"
image: "/og/blog-dealer-inverter-service-claim-process.webp"
author: "Akash Hirapara"
keywords:
  - inverter rma process
  - solar inverter rma
  - dealer inverter service claim
  - inverter service claim process
  - solar dealer after sales service
  - inverter fault claim checklist
relatedSlugs:
  - solar-inverter-troubleshooting
  - inverter-warranty-service-checklist-bulk-buyers
  - solar-dealer-agreement-checklist
  - replace-failed-solar-inverter-compatibility-checklist
  - electrical-contractor-licence-solar-installers
  - ci-solar-om-contract-inverter-scope
---

**A sound inverter RMA process for a dealer is one fixed sequence: record the unit, triage remotely, check the site safely, collect evidence, ask for the RMA in writing, pack and ship, review the brand's report, then close the case.** Closure includes the customer and the power distribution company (DISCOM). The sequence is the same whichever brand's name is on the unit. What changes is who answers at each step and how long each step takes. Ask for those answers before you sign, not after the first failure.

RMA stands for return material authorisation: the brand's permission, usually with a reference number, to send a unit back for inspection, repair or swap. This guide is a generic checklist. It states no brand's warranty term, remedy, response time or return process, and it does not say that Qbits runs any of the steps below. Treat every "ask the brand" line as a question to put to any brand you stock, in writing, before you sign a dealer agreement. Statutory points were read from the primary text as of **30 October 2026**.

> **Short version**
> - Open a record the day the customer calls. The serial number, invoice date, installation date and commissioning report decide whether a claim can start.
> - Triage remotely first, then check the site with a licensed person. Never open the inverter enclosure and never pull a live DC connector.
> - Separate an installation or grid cause from a unit fault with readings, not opinion. A claim sent without that separation is the one most likely to bounce.
> - Ask the brand for the RMA form, evidence list, packing rule, return address, swap options and turnaround expectation in advance. Do not assume any of them.
> - Track every case by stage and by who holds the clock. One overall "turnaround" number hides the delay.

## The inverter RMA process at a glance

| Step | What the dealer does | Output to keep |
| --- | --- | --- |
| 1. Intake | Logs the call and builds the unit record | Case ID and unit record |
| 2. Remote triage | Reads the portal, the alarm and the fault code | Triage note and first hypothesis |
| 3. Site check | A licensed person checks isolators, readings, earthing, environment and comms | Dated reading sheet |
| 4. Evidence | Photographs and log exports | Evidence pack |
| 5. Domain call | Decides installation, grid, monitoring or unit | Written reason |
| 6. RMA request | Sends the brand the evidence and asks for the RMA | RMA reference and instructions |
| 7. Pack and ship | Removes, packs and ships the failed unit | Dispatch proof and packing photos |
| 8. Report loop | Reads the brand's inspection report and replies | Report, accepted or disputed in writing |
| 9. Return to service | Refits or installs the swap and retests | Test record |
| 10. Close | Informs the customer, updates DISCOM and records | Closure note |

The rest of this guide takes these steps in order, then covers the tracker, escalation and the agreement clauses.

## Step 1: Open the unit record at intake

The first call is usually "inverter is not working." Convert that into a record before anyone drives to site.

| Field | Why it matters later |
| --- | --- |
| Customer name, address and phone | Site visit and customer communication |
| Site type and rated plant size | Residential, commercial or industrial routes differ |
| Inverter model and serial number | A claim cannot start without both. Photograph the nameplate, do not copy it from memory |
| Invoice date and invoice number | A brand may start cover from invoice, dispatch or commissioning. You will not know which until you read the document |
| Installation date and commissioning date | Shows the unit's age in service, and whether the commissioning report exists |
| Commissioning report and earth test record | The first thing a brand's engineer will ask whether the fault is installation-related |
| Fault description in the customer's words, with date and time first noticed | The timestamp matters more than the description |
| Monitoring account owner | Who can export the log |
| Firmware version and last settings change | Often missing, and expensive to find after a reset |

Two habits save weeks. First, give the case a number at the first call and quote it in every message. Second, tell the customer at once what you can and cannot promise. The [dealer agreement checklist](/blog/solar-dealer-agreement-checklist/) warns against telling a customer that a brand remedy exists unless the controlling document and the signed agreement say so. At intake, the safe sentence is: "We are recording the fault and will tell you the next step once the brand has seen the evidence."

## Step 2: Triage remotely before anyone visits

Most of the information a site visit would collect is already in the monitoring portal, the display and the customer's photos. Spend the first hour there.

1. **Ask for a photo of the display** and the status indicators, taken without clearing anything. The timestamp of the first fault is the part that matters.
2. **Read the alarm or fault code against the manual for that exact model.** Codes are brand and model specific. Our [error code guide](/blog/solar-inverter-error-codes-guide/) explains the general families, and the model's manual decides the meaning.
3. **Open the portal history** for the day of the event and a comparable normal day.
4. **Run the clock test.** A symptom that follows the time of day, the weather or the neighbourhood load points at the grid or heat. It does not point at a failed part.
5. **Compare the display with the app.** Live AC power on the unit's own display and a blank app means the unit is generating. The monitoring link is what is broken.
6. **Ask what changed**: a new appliance, a firmware update, recent maintenance, work by the DISCOM on the feeder.

Our [troubleshooting guide](/blog/solar-inverter-troubleshooting/) covers the four fault domains, the triage ladder and why resetting a unit is a diagnostic step, not a repair. Do not reset before you have logged the fault, because a reset can remove the code and the timestamp you need.

Write one line at the end: "Hypothesis: grid, array, monitoring or unit, and why." You will test it on site.

## Step 3: The site check a dealer can do safely

Work on a live solar plant is electrical work. Regulation 31(1) of the Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023 limits who may do it. No electrical installation work, "including additions, alterations, repairs and adjustments to existing installations", may be carried out on a consumer's premises for the purpose of supply except by an electrical contractor licensed by the State Government, under the direct supervision of a person holding a certificate of competency. The work must also be done by a person holding a permit issued or recognised by the State Government. Regulation 31(2) says work done in breach may not be energised or connected to a supplier's works. The regulation carves out only small replacements of lamps, fans, fuses, switches and domestic appliances up to 250 V that do not alter capacity or character.

The regulation does not mention solar by name, and what binds you is how your state reads it. Our reading is that removing and refitting an inverter is a repair or alteration. The person who does it should therefore be licensed and permitted in your state. The [licence guide](/blog/electrical-contractor-licence-solar-installers/) lists what eight state texts say and what to ask your board in writing. This is not legal advice.

Keep the site check to the items below. Everything here is done by that licensed team, with instruments rated for DC, without opening the inverter's sealed enclosure.

| Check | What to record | What it separates |
| --- | --- | --- |
| AC and DC isolator positions | On or off, and whether any tripped by itself | An isolator that tripped is an installation or protection finding, not a unit fault |
| DC voltage per string | Voltage at each maximum power point tracker (MPPT) input, with time, and the string length | A correct, stable voltage on each input points away from the tracker |
| DC current per MPPT (where the display or a clamp reads it) | Current, with irradiance noted | Current on one input at half the other, with matching voltage, points at the array |
| Grid voltage and frequency | Display reading, plus a meter reading at the AC isolator or AC distribution box (ACDB) | Out-of-window readings, or trips that follow load, point at the grid |
| Earthing | Visual check of the inverter's earth bond, and the commissioning earth test record | A loose or missing earth is an installation finding |
| Ambient temperature and sun on the cabinet | Reading in the shade and a photo of the mounting | Heat derating and shutdowns that vanish after sunset point at the environment |
| Ventilation and clearances | Blocked fins, fan, dust, insects, water marks, clearances against the manual | A clogged heat path is a maintenance cause |
| Firmware version | Number shown on the display or the app | Needed on the RMA form. Do not update it before logging it |
| Communications | Wi-Fi, RS485 or GPRS status, router and SIM state | A dead logger is not an inverter fault |

Three rules from the troubleshooting guide carry over. Never open the enclosure. Never unplug a DC connector under load, because DC arcs do not self-extinguish. Never defeat a protection device. Isolation runs from the grid inwards: AC isolator first, then DC isolator, then prove the point of work dead. Stop and report at once if you see smoke, scorch marks, a burning smell, arcing or water inside any enclosure.

Regulation 121 of the same regulations lists solar-specific safety requirements, which this check touches. They include a manual disconnection switch to isolate the system from the grid, situated outside the AC combiner box (121(1)(viii)). They also include earthing of the inverter cabinet frame with flexible braided copper wire (121(2)(ii)), and earth fault protection and insulation monitoring for arrays and inverters (121(3)(v)). If your site check finds one of these missing, that is an installation finding, and it belongs in your report whatever else you find.

## Step 4: Build the evidence pack

A claim is only as strong as the evidence attached to it. Collect all of this before you write to the brand, and store it in one folder per case.

| Evidence | Detail |
| --- | --- |
| Nameplate photo | Model, serial, rating, date code, all legible |
| Display photo | Fault state, with date and time visible |
| Whole-unit and mounting photos | Showing location, clearances, cable entry and exposure to sun and water |
| Reading sheet | Isolator states, DC readings per string, AC voltage and frequency, with times |
| Event log export | From the portal or the unit, including warnings, not only faults |
| Portal screenshots | The day of the fault and a normal day |
| Commissioning report and earth test | From installation |
| Invoice and delivery proof | Matching the serial number |
| Change history | Firmware updates, settings changes, nearby DISCOM work |
| Actions already taken | Resets, restarts, anything touched, with times |

Two things stay out of any ticket: passwords or one-time codes, and a photo of a code you have already cleared. Name files with the case ID and the date so you can find them in a dispute.

## Step 5: Installation, grid, monitoring or unit

This is the decision that determines whether a claim goes ahead. Make it on readings, and write the reason down.

| Domain | Typical signature | Next move |
| --- | --- | --- |
| Installation or array | Current asymmetric between inputs with normal voltage, loose terminal, missing or poor earth, wet DC connector, blocked heat path, tripped isolator | Fix on site. Do not claim |
| Grid | Voltage or frequency trips that follow time of day or neighbours' load, other appliances affected | Log AC voltage and frequency across a day and take it to the DISCOM. Do not claim until the supply is stable |
| Monitoring | Display healthy and exporting, app blank, data gaps without a production gap | Fix the router, SIM or portal. Do not claim |
| Unit | Healthy, stable DC input but wrong or no AC output, internal fault codes, a hard fault that survives a clean restart, or physical damage inside the unit that you can see without opening it | Proceed to the RMA request |

If both an installation finding and an apparent unit fault exist, fix the installation finding first and retest. A claim that ignores an obvious installation defect gives the brand a reason to reject it. It can also send the wrong unit through a long return loop.

A worked reading from our troubleshooting guide shows the logic. Take two strings whose stable voltage matches the calculation. If one input carries about half the current of the other, the array is the suspect, not the tracker. A tracker that cannot hold its power point looks different: voltage wanders or collapses while current stays low. Use that method with your own numbers. It is arithmetic on readings, not a field result from any brand's installations.

If you cannot decide, say so in the request. "Cause not isolated; readings attached; asking for remote diagnosis" is an honest request, and it keeps you from claiming something you cannot show.

## Step 6: What to ask the brand for before you ever need an RMA

Ask for these in writing before you sign, then keep the reply with the agreement. Mark any unanswered line "not provided" and treat it as an unknown, not a yes. The [bulk-buyer warranty and service checklist](/blog/inverter-warranty-service-checklist-bulk-buyers/) sets out the same documents from the buyer's side.

| Ask the brand | What to record |
| --- | --- |
| The RMA form | The form itself, who may submit it, and which fields are mandatory |
| The evidence list | What the brand requires attached, and in which file formats |
| How a claim is raised | Channel, hours, ticket number rules, and a named contact for a stuck case |
| Who decides | The role that approves or rejects, and how the decision reaches you |
| Who ships the failed unit, and who pays | You, the customer, the brand or a carrier, for each direction |
| Packing | The brand's packing instruction, whether the original carton is required, and who supplies packing |
| Return address | The exact consignee and address for returns, and whether it differs from the dispatch address |
| Transport document | Which document the brand wants with the shipment. Ask your accountant about the tax treatment |
| Spare or swap options | Whether a unit can be sent before the failed one returns, repaired in place, or swapped from a dealer-held pool |
| Turnaround expectations | The time the brand expects for each stage, asked, not assumed |
| Status of the swapped unit | What serial number and what cover the replacement carries |
| No-fault-found handling | What happens, and what it costs, if the brand finds nothing wrong |
| Return of the failed unit | Whether it must come back, and who owns it after the decision |
| Escalation | A named role beyond the first contact and what response to expect |

Do not accept "standard process" or "as applicable." Ask for the answer, the version date and the person who gave it. Any number that you do not hold in writing is not a term.

If Qbits is on your shortlist, you can send the [partner application](/become-our-partner/) with your business details, and a review follows. The application sets no commercial terms and this guide describes none. Nothing above says that Qbits runs any of these steps. Put the questions in this table to Qbits as you would to any other brand, and rely only on what you receive in writing.

## Step 7: Send the RMA request and pack the unit

When the evidence points to the unit, send one complete request rather than a series of partial ones. Include the case ID, model and serial, invoice and installation dates, and the fault code and time. Add the reading sheet, photos, the log export, your domain call and the actions already taken. Attach the RMA form if the brand has one.

Then keep the case open. An RMA reference is not a decision. Note the date, the reference and the instruction you received, and ask for any unclear instruction to be restated in writing.

Packing and transport is where good claims turn into disputes, so treat it as a procedure.

1. **Isolate and remove with a licensed person.** AC isolator first, then DC. Mark the cables so refitting matches the original string map.
2. **Photograph the unit before packing:** nameplate, display, all faces and the cable glands, with the date.
3. **Pack to the brand's written packing instruction.** If none exists, ask for one before you ship. If the brand requires the original carton, say so at the RMA stage.
4. **Pad the corners, the heat sink fins and the connectors,** and keep the unit in the orientation the brand's packing instruction gives.
5. **Put the case ID and serial number on the outside and inside the carton**, and a copy of the RMA reference inside.
6. **Photograph the closed and sealed carton** with the label visible.
7. **Use a carrier that gives proof of pick-up and delivery,** and send the tracking number to the brand.
8. **Ask who insures the shipment.** If nobody does, decide before you ship.

On the return leg, open the carton with the carrier present, or record it on video, before you sign for it. If the carton is crushed, wet or open, write the damage on the carrier's delivery receipt and photograph it before you accept. Tell the brand the same day. The time allowed to report transit damage is a carrier and brand term, so ask for it in advance rather than assuming.

## Step 8: Close the inspection report loop

The brand will usually test the unit and send a report or a decision. Read it as a dealer, not as a recipient.

| Check | Action |
| --- | --- |
| Is the serial number the one you sent? | If not, raise it the same day |
| Does it name a fault or a test result, or only a status? | Ask for the measured data behind a "no fault found" or "external cause" |
| Does it give a cause category? | Compare it with your domain call |
| If the cause is installation or grid, what evidence is cited? | Ask for the clause relied on and the test data |
| What remedy does it name, and who acts next? | Record the owner and date of the next action |
| Does it say what the replacement carries? | Ask, and keep the reply |

If the brand rejects the claim, ask for the written reason, the document clause and the technical report. Reply on evidence: attach the commissioning earth test, the logged grid readings and the photos, not a complaint about tone. If you disagree on a point of fact, ask for a joint inspection. You can also ask an independent licensed contractor for a second opinion, and the signed report becomes a dated record. Whether a joint inspection is possible depends on the brand's process, so ask for that in advance too.

## Step 9: Return to service and tell the customer

When the replacement or repaired unit arrives, install it by the same safe sequence. Restore the string map, apply the settings the site needs and record a test.

- **Check the nameplate.** Record the new serial number, model and firmware version.
- **Restore settings.** Match the protection and grid values from the old unit, or what the DISCOM now asks, and keep the sheet.
- **Test.** Record DC voltage per string, AC voltage and frequency, and the unit's output at a known irradiance.
- **Re-register.** Update the monitoring account and, where the brand requires it, the serial registration.

Give the customer a one-page service report. It lists the case ID, dates, findings, what was replaced, the new serial number, test results and the next step if the fault returns. Do not promise a cover term or a remedy that you do not hold in writing from the brand. Our [O&M contract guide](/blog/ci-solar-om-contract-inverter-scope/) lists the same steps for commercial plants, where the customer will usually want a signed closure.

### If the unit is replaced, the DISCOM may need to know

A new unit may be a different model or serial number from the one in the DISCOM's file. There is no national rule that says a replacement needs approval or does not, and the rule sits in your state regulation and your DISCOM's procedure. Our [replacement checklist](/blog/replace-failed-solar-inverter-compatibility-checklist/) reads what Gujarat and Odisha say about replacements and shows the questions to put to your DISCOM in writing. As a process step, send the written intimation with the new model, datasheet and test record before or at the swap. Ask for the verification date. A larger or different rated unit is a separate question, so ask before you fit it.

## Keep a claims tracker

A spreadsheet is enough. One row per case, with a date column for each stage, so that you can see where the case waits and who holds the clock.

| Column | Contents |
| --- | --- |
| Case ID | Your reference |
| Customer and site | Name, place, system size |
| Model and serial | From the nameplate |
| Invoice date and install date | For age in service |
| Fault code and date first seen | Timestamp from the display |
| Domain call | Installation, grid, monitoring or unit, with the reason |
| Date evidence complete | Dealer clock |
| Date RMA requested | Dealer clock |
| Brand reference | Ticket or RMA number |
| Date RMA authorised | Brand clock |
| Date shipped and carrier proof | Dealer clock |
| Date received by brand | Carrier clock |
| Date of inspection report and its finding | Brand clock |
| Date replacement dispatched | Brand clock |
| Date delivered and condition | Carrier clock |
| Date back in service | Dealer clock |
| Date customer informed, closure signed | Dealer clock |
| DISCOM intimation date and reply | Dealer clock |
| Open question and next action owner | For the weekly review |

Review the open rows every week. Any case with no movement for a period you set, say a week, goes to escalation.

### A worked example of stage clocks

The dates below are made up to show the method. They are not a turnaround time for any brand, including Qbits.

| Stage | Day | Days in stage | Who holds the clock |
| --- | --- | --- | --- |
| Call logged | 0 | | |
| Evidence complete | 1 | 1 | Dealer |
| Brand triage outcome | 3 | 2 | Brand |
| RMA authorised | 6 | 3 | Brand |
| Failed unit shipped | 8 | 2 | Dealer |
| Received by brand | 11 | 3 | Carrier |
| Inspection report | 15 | 4 | Brand |
| Replacement dispatched | 17 | 2 | Brand |
| Delivered to site | 20 | 3 | Carrier |
| Back in service and closed | 22 | 2 | Dealer |

Add up by clock: dealer 1 + 2 + 2 = 5 days, brand 2 + 3 + 4 + 2 = 11 days, carrier 3 + 3 = 6 days, total 22 days. The customer sees one outage of 22 days. The tracker shows that half of it sat with the brand, nearly a third with the carrier, and about a fifth with the dealer. So ask a brand about turnaround per stage, not as one number, and cut your own days first.

## Escalation steps

Plan the ladder before the case, not during it.

1. **Stage chase.** Write to the case contact when a stage passes the time you were given, quoting the case ID and the date.
2. **Named escalation contact.** Use the role you asked for in Step 6. If there is none, ask for one in writing now.
3. **Written escalation.** Summarise the dated history in a short email: what you sent, what you were told, what is outstanding and what you need by when.
4. **Customer interim plan.** Tell the customer what you can do while the unit is away. Do not promise a loan unit or compensation unless you hold the right to do so.
5. **Independent report.** For a disputed cause, get a signed report from a licensed contractor who was not involved in the installation.
6. **Dispute clause.** The route in the signed agreement, such as mediation or a named forum, is the last step. Read it before you need it. For legal advice on consumer or contract remedies, ask a lawyer. This guide has not read the consumer statutes and gives no opinion on them.

## What to write into the dealer agreement about the process

Ask for the process clauses in writing, as a schedule to the agreement, not a verbal assurance. Use the [dealer agreement checklist](/blog/solar-dealer-agreement-checklist/) for territory, termination and stock clauses. For service claims, add:

- the single channel for raising a claim, its hours and the ticket rule;
- the RMA form and evidence list, attached as a schedule with a version date;
- stage definitions (acknowledgement, triage, decision, dispatch, delivery, recommissioning) and who owns each;
- which events pause a clock, defined now;
- who pays each cost item: diagnosis, site visit, removal and refitting, packing, freight both ways, insurance, recommissioning;
- packing and return-address instructions, and the time to report transit damage;
- swap or advance-replacement options, and what the replacement carries;
- ownership of the failed unit and its return or disposal;
- what happens on a no-fault-found result;
- a named escalation role and a monthly ticket list shared with you;
- how customer data you send is handled;
- notice of process changes, and what happens to open cases if the agreement ends or a model is discontinued.

A clause you cannot get is a risk to price, not a gap to fill with hope. If a brand will not put its process in writing, ask a second brand the same questions and compare what each will sign.

## Keep records for as long as you sell the unit

Hold every case folder and tracker row while you remain responsible to the customer. Also hold them until the agreement's own record period ends, which you should have asked about. Keep the evidence pack, the RMA reference, the report, the test record and the customer's signed closure. These records are also how you show the brand, the customer and your DISCOM that you followed a process.

## Before you stock any brand

1. Ask for the RMA form, evidence list, packing rule, return address, swap options and escalation contact in writing.
2. Ask the brand to answer each stage question in the table in Step 6 and keep the version date.
3. Check that your technicians are licensed and permitted in your state before they touch a plant.
4. Set up the unit record, evidence pack and tracker before the first sale, not after the first failure.
5. Agree what you will and will not tell a customer about brand remedies.
6. Test the process once with a dummy case, from intake to closure.

## Your next step

To put these questions to Qbits, start with the [partner application](/become-our-partner/). It begins a review of your business details. No commercial terms come with it, and this guide does not say how Qbits handles claims, so get each answer in writing before you rely on it. Whichever brand you choose, set your process first and claims will cost you less.
