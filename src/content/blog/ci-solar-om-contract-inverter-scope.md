---
title: "What a C&I Solar O&M Contract Must Cover for Inverters"
seoTitle: "Solar O&M Contract Scope for Inverters: Checklist"
excerpt: "Clause by clause, what a C&I solar O&M contract should say about inverters: maintenance, restoration, availability and PR, spares, data, LDs and handover."
description: "Solar O&M contract scope for inverters: preventive schedule, restoration clock, availability vs PR, spares, data, LD caps and handover, with SECI examples."
category: "Maintenance"
date: 2026-10-30
readTime: "23 min"
image: "/og/blog-ci-solar-om-contract-inverter-scope.webp"
author: "Keyur Rakholiya"
keywords:
  - solar o&m contract scope
  - solar o&m contract India
  - inverter o&m clauses
  - solar plant availability commitment
  - c&i solar o&m checklist
  - solar o&m liquidated damages
relatedSlugs:
  - inverter-maintenance-india
  - ceig-inspection-solar-plant-inverter-checks
  - inverter-warranty-service-checklist-bulk-buyers
  - replace-failed-solar-inverter-compatibility-checklist
  - solar-inverter-summer-derating-india
  - solar-inverter-commissioning-in-india
---

A solar operation and maintenance (O&M) contract protects a commercial and industrial (C&I) plant owner only if its scope turns "keep the inverters running" into clauses that can be measured, evidenced and enforced. For the inverter side, that means twelve things written down:

1. A preventive maintenance schedule.
2. A restoration clock for faults.
3. A performance metric with exclusions.
4. A spares rule.
5. Data access.
6. A warranty-claim process.
7. Statutory duties.
8. Who proves the cause of cleaning and derating losses.
9. Penalties with a cap.
10. Insurance.
11. A rule for changing the inverter model.
12. A handover.

A gap in any one of them tends to show up later as an argument about whose fault a stopped inverter was.

This post is for an owner or asset manager signing or reviewing an O&M contract for a rooftop plant of roughly 100 kW to a few MW. It does not repeat the field checklists in the inverter maintenance guide or the claim steps in the [warranty and service checklist](/blog/inverter-warranty-service-checklist-bulk-buyers/). It covers what the contract itself must say, and shows how real tender documents word it.

> **What this post rests on**
>
> - Three tender documents from the Solar Energy Corporation of India (SECI), all opened in full and read for this post. These are a 100 kW rooftop request for proposal (RfP) dated 28 August 2026, a model rooftop tender dated October 2015, and the O&M agreement annexed to a 300 MW ground-mounted tender (undated).
> - The Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023, read in the gazette text.
> - Our own arithmetic, labelled illustrative. We did not read a private C&I O&M contract, and we quote no market rate for O&M fees or response times.

## What the tender documents do and do not tell you

Government tenders are useful because their text is public and specific. They are also not your contract. Read the three sources below as examples of clause structure, not as market norms for private C&I plants.

| Source | What it is | Why it is useful here |
| --- | --- | --- |
| SECI RfP, 100 kW rooftop at the NIWE campus, capex mode, Tender No. SECI/C&P/OP/15/0006/25-26, 28 Aug 2026 | EPC plus five years of comprehensive O&M, for a government campus | Rooftop scale, current, names a fault-rectification period and a per-unit penalty for generation shortfall |
| SECI-hosted Model Tender Document for rooftop PV (ULBs and DISCOMs), October 2015 | A template for city and DISCOM rooftop programmes | Defines PR and where it is measured; puts inverter replacement and spares on the bidder |
| SECI Annexure H, O&M Agreement for a 300 MW ground-mounted plant (undated) | A full O&M agreement for a utility-scale plant | The most complete clause set for liquidated damages, caps, spares, data, handover and change control |

Two limits matter. The 300 MW annexure is utility-scale, so its monthly earthing tests and 10-year term will be heavier than a rooftop needs. And all three are drafted by a buyer with procurement muscle. A single C&I owner can ask for the same clauses, but should expect the price to move with them.

## 1. Preventive maintenance: a schedule, not a promise

"Periodic maintenance" is not a scope. Ask the provider to attach a dated schedule, per inverter, with the evidence each visit produces. The 2026 SECI rooftop RfP asks for a preventive schedule based on the original equipment maker's (OEM) own recommendations and good engineering practice. That is the right starting rule: the inverter maker's manual sets the minimum, and your site conditions tighten it.

| Task | Where the interval comes from | Evidence to ask for |
| --- | --- | --- |
| Visual check of enclosure, glands, cable entries, labels, corrosion, insects and rodents | Maker's manual; tighten for dusty, coastal or rodent-prone roofs | Dated photo set per inverter, tied to serial number |
| Thermal imaging of inverter terminations, AC breaker and busbar | The 300 MW annexure lists thermal imaging once a year, but for PV modules only. Use annual as a starting point for terminations, then adjust | Thermograms with load level, ambient temperature and the hottest-point reading; flag any rise above the agreed limit |
| Torque check of DC and AC terminations | The annexure lists annual bolt tightening for exposed structures. For terminations, follow the maker's torque values | Torque record: terminal, value applied, tool ID and calibration date |
| Cleaning of air filters and fans, where the model has them | Maker's manual; depends on site dust | Before and after photos; list which inverters have filters or fans so the clause does not cover units that do not |
| DC isolator and AC isolator operation and condition | Maker's manual and the installer's commissioning record | Operation test result, contact condition, any heat marking |
| Surge protective device (SPD) status check | Maker's manual; also after a nearby lightning event | Indicator status or cartridge test per SPD; list of replaced cartridges |
| Firmware and settings | Only when the brand releases a fix that applies to your model | Release note, approval letter, settings export before and after |
| Earthing resistance | The annexure measures plant and each pit monthly. For a rooftop, set the interval with your inspector's direction | Test report with date, soil condition, instrument ID and calibration |

Three points deserve their own words in the contract.

**Firmware and settings need an approval chain.** The 300 MW annexure bars the contractor from changing equipment or software settings. This covers any change that hurts safety, affects warranties, conflicts with the contract or bypasses protective equipment. It also requires the OEM's and the employer's approval before any change, plus an alteration report afterwards. Copy that logic. Protection and grid settings are tied to your interconnection approval, so an "improvement" by the O&M provider can quietly breach it. The [commissioning checklist](/blog/solar-inverter-commissioning-in-india/) lists which settings to record at handover so there is something to compare against.

**Scheduled outages need a window.** The same annexure makes the contractor send an annual maintenance calendar and prefer non-sunny hours for long stoppages. For a factory that earns its saving between 9 am and 5 pm, write that in.

**Missed preventive visits need a consequence.** The annexure penalises non-compliance with the preventive schedule at Rs 1,000 per day beyond 48 hours, capped at 5% of the annual O&M value. The sum is small by design. Its value is that skipped visits become visible on an invoice.

## 2. Corrective maintenance: define the clock before you set the number

Most disputes are about when the clock starts and stops, not about the target. Define these timestamps in the contract.

1. **Fault start.** The time the monitoring portal first logged the alarm, not the time someone phoned. If the portal is down, say what replaces it.
2. **Acknowledgement.** The provider confirms receipt and starts remote diagnosis.
3. **On-site arrival.** Needed only when remote diagnosis fails.
4. **Restoration.** The inverter is exporting again, or a temporary swap is in place. Define which counts.
5. **Closure.** Root cause recorded and the portal alarm cleared.

Then list what pauses the clock: no access to the roof, an owner-directed shutdown, grid outage, and a spare part with the brand under an agreed lead time. Anything not on the list does not pause it.

Tender documents give the shape. The 2026 SECI rooftop RfP requires a fault to be rectified within three days of occurrence. It also requires a complaint logbook with a unique complaint number, time of closure and a root cause analysis (RCA) for each complaint. The 300 MW annexure asks for notice of emergencies verbally at once, with written notice following within three days.

Those are the structures to ask for: one restoration period for ordinary faults, a faster notice for safety events, and a logged RCA. Whether your plant can bear a given target depends on roof access, brand lead times and where the technicians sit. Set the number against your own site and do not copy it.

A useful variant is two priority classes. A fault that stops one inverter out of eight is not the same as a fault that stops the plant. Tie the faster class to the share of capacity lost.

## 3. Performance commitments: availability, PR and CUF are different promises

The three common commitments are availability, performance ratio (PR) and capacity utilisation factor (CUF). They measure different things and put the risk on different parties. Choose by asking what the provider actually controls.

| Metric | What it measures | What the provider controls | Typical exclusions | Where it goes wrong |
| --- | --- | --- | --- | --- |
| Inverter availability | Share of daylight operating hours each inverter was ready to export | Most of it: fault response, spares, preventive work | Grid outage, owner shutdown, force majeure, agreed maintenance windows | Averaged across a plant it hides one long outage. Define the window and weight by capacity |
| Performance ratio (PR) | Output against what the installed capacity should give at the measured irradiance | Partly: availability, cleaning, wiring faults. Not module design or shade | Same as above, plus irradiance sensor faults | Needs a calibrated irradiance sensor. No sensor, no honest PR |
| CUF or annual generation | Annual energy against rated capacity | Least: weather swings the answer year to year | Grid non-availability, force majeure, curtailment | A weak year can trigger a penalty with no provider fault, unless a band or relaxation is written in |

The SECI documents define these in practice.

- **PR.** The 2015 model tender defines PR as the ratio of plant output to installed capacity, corrected for measured radiation. It is measured output in kW divided by installed capacity in kW, multiplied by 1000 W/m2 over measured radiation. It says PR is measured at inverter output level during peak radiation. The 300 MW annexure instead calculates annual PR as the mean of monthly PRs.
- **CUF.** The 2026 rooftop RfP has the bidder declare an annual CUF (not below 19% in that tender) and maintain generation within +10% and -15% of the declared value. The lower limit is relaxed for force majeure and for grid non-availability during generation hours. The client must certify the grid relaxation. A hindrance register must be kept. The penalty is INR 4.00 per kWh of shortfall energy, recovered first from O&M payments and then from the performance security. That figure belongs to that tender, as written on 28 August 2026, and is not a market rate. Read more on the metric itself in the [CUF glossary entry](/glossary/cuf/).
- **Availability.** The 300 MW annexure reviews a "Measured Average Availability" every quarter. It counts downtime during an owner-requested inspection as unavailable time only if the contractor fails to provide staff for the visit (capped at eight hours per visit). The calculation procedure sits in a test annexure that was not in the file we read, so we cannot quote its formula.

Two exclusions are worth wording tightly. **Grid outage:** make the provider's proof a utility outage record or a log of the inverter's grid-fault state, not the provider's word. **Curtailment:** if your DISCOM or your own load controller limits export, the energy not produced is not a provider failure. Write that it is excluded and who records it.

### A worked availability calculation (illustrative)

The numbers below are invented to show how exclusions change the result. They are not from any plant.

**Assumptions:** five identical 100 kW inverters and a 30-day month. The defined generation window is 10 hours a day, so 300 hours per inverter and 1,500 inverter-hours in all.

| Event in the month (illustrative) | Inverters hit | Hours in window | Inverter-hours | Counted against the provider? |
| --- | --- | --- | --- | --- |
| Grid outage | All five | 9 | 45 | No, excluded |
| Owner shutdown for building work | Inverter 5 | 4 | 4 | No, excluded |
| Agreed preventive maintenance window | Inverter 1 | 6 | 6 | No, excluded |
| Fan fault, restored after one working day | Inverter 3 | 14 | 14 | Yes |

- Excluded inverter-hours: 45 + 4 + 6 = 55.
- Denominator after exclusions: 1,500 - 55 = 1,445 inverter-hours.
- Available hours: 1,445 - 14 = 1,431.
- **Availability = 1,431 / 1,445 = 99.03%.**

Without the exclusions the same month reads (1,500 - 69) / 1,500 = 95.4%. The grid outage and the owner's own shutdown would then count against the provider. The rule you write for exclusions matters as much as the percentage you set.

Time-based availability also hides how much energy a fault costs. If inverter 3 would have averaged 70 kW through those 14 hours, the loss is 980 kWh. At an illustrative Rs 8 per kWh of avoided grid power, that is Rs 7,840. This is why the restoration clock in section 2 and the spares rule in section 5 usually protect more money than the percentage target does. If inverter sizes differ, weight each by rated capacity.

## 4. Data and monitoring: who owns the portal, who can see what

The O&M provider will use the monitoring data to prove its own performance. Make sure you can check it.

- **Portal ownership.** The plant owner holds the administrator account (in a multi-tenant complex, the connection holder). The provider gets an operator role. If the provider registered the plant under its own login, the contract should force a transfer at any time on request.
- **Data export.** Raw data (power, voltage, fault codes, timestamps), not only charts, available in an open file format on request and at handover.
- **Local access.** The Qbits product data lists Wi-Fi with optional RS485 or GPRS communication for its on-grid families. Whether a given plant has RS485 depends on what was ordered. Decide before the contract is signed who may connect a data logger or a supervisory control and data acquisition (SCADA) system to it. The [RS485 and Modbus guide](/blog/inverter-modbus-rs-scada-integration-ci-om/) covers the wiring and register map asks. Also ask the brand in writing what that does to the warranty position.
- **Alarm routing.** Name the people and channels that receive each alarm class, and who must acknowledge it. An alarm that goes only to the provider cannot be audited by you.
- **Reporting cadence.** The 300 MW annexure requires a monthly performance report by the fifth day of the following month. It also requires daily and monthly generation reports, and owner access to all SCADA data at any time. Records are kept for 60 months and handed over at expiry. Put the same four items in a rooftop contract.
- **Irradiance and meter data.** If PR is a commitment, the sensor's ownership, cleaning and calibration need a clause. The annexure lists daily pyranometer cleaning and calibration to keep a valid certificate.

If you are choosing inverters for a plant that will sit under an O&M contract, settle the communication option and the data-access rights at the ordering stage. The [Qbits C&I solutions page](/c-i-solution/) is the place to start that conversation.

## 5. Spares and consumables: who holds what, and the cost of waiting

Write three lists: consumables the provider supplies as part of the fee, common spares held on site, and major spares (an inverter, or its power or control board) that need an order.

The three SECI documents agree on the principle: the contractor owns the spares duty, and spares for the O&M term are part of the price. The 2015 model tender names inverter control logic cards and IGBT (power transistor) driver cards in its spares list, with a minimum set kept at the plant and replenished after use.

The 2026 rooftop RfP asks for four things. It wants a list of recommended spares with supplier details and indicative prices. It wants a stock held without extra cost, and a replenishment of mandatory spares before the O&M period ends. It also wants a recommended-spares list built from mean time between failures in the penultimate year. The 300 MW annexure lets the contractor use refurbished parts only with the owner's written approval, only on the same warranty as new parts, and only if each use is logged.

Three questions decide your clause:

1. **Swap or repair?** A swap restores generation fastest. Repair on site costs less per event but lasts longer. Write which is the default and who approves the other.
2. **Who holds the major spare?** The cost of holding a spare unit against the cost of waiting settles it. Illustrative: one 100 kW inverter averaging 70 kW over a 10-hour window loses about 700 kWh a day, roughly Rs 5,600 at Rs 8 per kWh. A 15-day brand lead time then costs about Rs 84,000. Compare that with the price of a spare unit. For a plant of several inverters of one model, one shared spare is the usual thing to price. For a single inverter, lead time decides it.
3. **What is the lead time?** Ask for the brand's current lead time for the exact model in writing, and decide whether the clock pauses during it.

## 6. The warranty interface: process only

The O&M provider is usually not the warrantor. The inverter brand is. The contract has to say how the two meet. This post does not state any brand's warranty terms; those sit in the brand's own documents and the [warranty and service checklist](/blog/inverter-warranty-service-checklist-bulk-buyers/) shows which to collect.

Write these steps into the contract:

1. The provider is authorised, by a letter from you, to log claims in your name.
2. It logs a claim within an agreed time of fault confirmation.
3. It attaches serial number, fault code screenshot, log export, photos of the unit and the commissioning record.
4. It keeps the ticket number, the brand's response times and the dispatch record, and shares them monthly.
5. It does not open a sealed unit, replace boards or change settings unless the brand has approved it in writing. The 2026 SECI RfP makes a similar point in another way. The major-equipment maker's warranties are to run in the employer's name, and must be transferred to the employer on termination if they sit with the contractor.
6. Whether the clock for the O&M restoration target pauses while the brand acts is decided now, not during the fault.

## 7. Safety and statutory duties

The duties below come from the Central Electricity Authority (CEA) Measures relating to Safety and Electric Supply Regulations, 2023 (gazette of 8 June 2023). They sit with the owner, and the contract can assign the work but not the duty. We read the regulation text; this is not legal advice.

- **Periodic inspection and testing (regulation 32).** Installations above the "notified voltage" are inspected periodically by the Electrical Inspector. Those at or below it are self-certified by the owner, with a report filed in the prescribed form. The periodicity is "as directed by the Appropriate Government" and "shall not exceed five years". The state fixes the voltage and the interval, so ask your state inspectorate. The [CEIG inspection guide](/blog/ceig-inspection-solar-plant-inverter-checks/) explains the role of the Chief Electrical Inspector to Government (CEIG).
- **Owner's duty to maintain (regulation 32(8)).** The owner must maintain and operate the installation in a condition free from danger, as recommended by the maker or by the relevant standards.
- **Periodic tests (regulation 48(5)).** Apparatus, cables and supply lines must be kept in healthy condition and tested periodically as per relevant standards. This is the hook for the thermal, torque and insulation tests in section 1.
- **Solar-specific requirements (regulation 121).** These include a manual disconnection switch outside the AC combiner and protection on input and output (overload, surge, short circuit, high temperature, over and under voltage and frequency, reverse polarity, lightning). They also include the inverter cabinet frame earthed with flexible braided copper wire, SPDs in combiner boxes, and earth-fault protection with insulation monitoring for arrays and inverters. Your preventive schedule should show each item being checked.
- **Annual earth-resistance testing (regulation 43(x)).** As written, it applies to earthing systems "belonging to the supplier". It is not clearly an owner rule. Do not rely on it for an owner-held rooftop. Instead, ask the inspectorate and test at the interval the relevant standard and the state direction set.

Two practical clauses follow. First, the provider holds the competence needed to test safely, and shows its personnel's qualifications on request. Second, test reports are kept in a form that can go straight to the inspector.

## 8. Cleaning and inverter derating: who proves the cause

Cleaning is often a separate contract from the inverter work. That splits the blame for a low PR. Write down which party is accountable for the PR commitment and which proves a cause if it is missed. If cleaning is another contractor's, the inverter provider's commitment should be availability, not PR.

Derating is the second grey area. An inverter that reduces output in heat is behaving to its curve, not failing. Ask the provider to log derating events separately from faults, with ambient and heatsink temperature, so a hot-roof event is not recorded as a fault and not blamed on the unit. The [derating guide](/blog/solar-inverter-summer-derating-india/) explains how to read the curve. A blocked fan or filter, which is a maintenance miss, will look similar in the data, so the log must show the cause.

## 9. Penalties, liquidated damages and caps

Liquidated damages (LDs) work when they are proportional, capped and tied to an agreed cause. The 300 MW annexure is a good model of the structure.

- **LD formula.** For a PR shortfall of up to 5 percentage points, LD = (PRg - PRa) / 0.05 x 0.7 x annual O&M contract value. Here PRg is the committed PR and PRa the achieved PR. By our arithmetic a committed 81% and achieved 79% gives 0.02 / 0.05 x 0.7 = 28% of the annual O&M value. The same document caps total LDs at 70% of the annual O&M value. It deducts them from invoices, and reverses the deduction if the annual PR is later demonstrated.
- **Default trigger.** A full month of zero generation, other than force majeure and grid outages certified by the competent authority, is an event of default that forfeits the contract's performance security.
- **Overall cap.** The contractor's total liability for a year is limited to that year's O&M contract value, except for indemnity obligations, gross negligence and wilful misconduct.
- **Independent assessment.** Delay penalties and LDs are assessed independently of one another.

Notice the gap for you. A cap tied to the O&M fee may be far below the energy lost in a bad month, as the worked example shows. So do not rely on LDs to make you whole. Use them as a signal and put your real protection in the restoration clock, the spares rule and a right to step in. The annexure lets the employer appoint a replacement contractor, at the contractor's cost, when urgent protective work is not done. A rooftop owner can ask for the same.

## 10. Insurance

An O&M contract and an asset insurance policy cover different things, and both need to exist. Ask the provider for:

- certificates for workers' compensation and third-party liability, with your name as co-insured where the policy allows it;
- notice to you of any claim, and of any change to the cover;
- a clause that the provider will help build a claim file after an event.

The 2026 SECI RfP asks the contractor to keep insurance in force through the O&M period and to hand over policy copies. The 300 MW annexure goes further: it names the employer as co-insured and requires copies of the certificates. Your own policy for the plant, and what it will and will not pay for a failed inverter, is covered in the [solar insurance guide](/blog/solar-insurance-india/).

## 11. Changing the inverter model mid-contract

A failed unit may no longer be sold, so a different model becomes the replacement. That is a change to the installation, and the contract must treat it as one.

- **Statutory.** Regulation 45(6) says an owner who makes an addition or alteration shall not connect it to the supply until it has been approved in writing by the Electrical Inspector or self-certified by the owner, as the case may be. Treat a model change as an alteration and check with your inspectorate.
- **Technical.** String design, protection settings, communication and mounting all need rechecking. The [replacement compatibility checklist](/blog/replace-failed-solar-inverter-compatibility-checklist/) covers it.
- **Contractual.** The new model enters the preventive schedule, the spares list and the monitoring set-up. The provider should update all three and give you a revised schedule within an agreed time.
- **Approval.** No substitution without your written approval, with both models' datasheets attached.

## 12. Termination and handover

Handover is where a poor contract hurts most, because the provider's records are your plant's history. The 300 MW annexure makes the contractor, jointly with the employer, list outstanding deliverables before the contract ends. In its last quarter the contractor hands over the plant. The handover includes an inventory of spares, tools and consumables, a recommended-spares list with replacement records and mean time between failures, and all operating records. The 2026 SECI RfP adds that warranties held in the contractor's name must be transferred to the employer on termination.

For an inverter-side handover, ask for:

- as-built documents and the final single-line diagram;
- the current settings export for every inverter, and the one taken at commissioning;
- portal administrator access and a full raw-data export;
- the fault, complaint and RCA log, and the preventive visit records;
- the open warranty claims list, with ticket numbers;
- the spares inventory and its location;
- test reports, including earthing and thermal.

Put the handover items in the contract as conditions for the final payment.

## Solar O&M contract scope checklist for inverters

Use this table of 16 clauses as the checklist for the inverter scope of a solar O&M contract.

| Clause | What to specify | Evidence to ask for |
| --- | --- | --- |
| Covered assets | Every inverter by model and serial number, plus DC and AC isolators, SPDs, communication devices | Asset register signed at start |
| Preventive schedule | Tasks, intervals, who attends, outage windows | Annual calendar; dated visit reports with photos |
| Thermal and torque checks | Method, limits, records | Thermograms; torque log with tool ID |
| Firmware and settings | Approval chain: brand, then owner; export before and after | Approval letter; before and after settings files |
| Restoration clock | Start, pause and stop events; priority classes | Portal alarm log; complaint log with RCA |
| Performance metric | Availability, PR or CUF, window, weighting, exclusions | Monthly calculation with raw data attached |
| Irradiance and meter data | Owner, cleaning, calibration | Calibration certificates |
| Spares | Lists, holder, replenishment, refurbished parts rule | Spares register; lead time letter from the brand |
| Data and portal | Admin owner, export, alarm routing, report date | Admin screenshot; sample export; monthly report |
| Warranty process | Authority letter, claim time, evidence set, no unapproved repair | Claim log with brand ticket numbers |
| Statutory duties | Who tests, to which standard, who files | Test reports; self-certification copies |
| Cleaning and derating | Accountable party; separate derating log | Cleaning log; derating events with temperatures |
| LDs and caps | Formula, cap, offset, step-in right | Worked example attached to the contract |
| Insurance | Cover, co-insured status, claim support | Certificates; claim notice records |
| Model change | Written approval, inspector check, schedule update | Datasheets; approval; revised schedule |
| Termination and handover | Documents, settings, credentials, spares, warranty transfer | Handover pack signed by both parties |

## What this post could not check

We read three SECI tender documents and the CEA safety regulations. On 31 October 2026 the three SECI files still opened on seci.co.in. We re-read the 2026 RfP's three-day fault clause, 19% CUF floor and INR 4.00 per kWh penalty, and they match this post. We read no private C&I O&M contract, so we cannot say what market O&M fees, response targets or LD rates are.

- The 300 MW annexure is for a ground-mounted utility plant and carries no date in the file we read.
- The 2026 RfP covers a government campus in capex mode, and its penalty and restoration period are that tender's figures only.
- The availability test procedure that the 300 MW annexure points to was not in the file, so we give our own illustrative method.
- The old cea.nic.in link for the 2023 regulations returned HTTP 404 on 30 October 2026, so we read an archived copy of the gazette PDF for the English wording. On 31 October 2026 we opened the gazette file listed on CEA's current site, which carried the Hindi text. It confirmed the numbering and substance of regulations 32, 43(x), 45(6) and 48(5), and regulation 121 by its heading. A CEA amendment of 27 March 2026, in force from 1 April 2027, adds battery storage rules and does not change those regulations.
- We did not read any state notification for the notified voltage or the inspection interval, and we did not review the O&M terms of any brand.

Check these against your state's current orders and your lawyer's advice before signing.

## Next step: mark each clause as written, vague or missing

Take the clause table above and mark each row as written, vague or missing in the draft you hold. Fix the missing rows first, in this order: the restoration clock, the exclusions in the performance metric, data access and handover.

If you are still choosing the inverters the contract will cover, the [Qbits C&I solutions page](/c-i-solution/) is where to take that sizing and communication question. For a question on a specific model or a contract term, use [the contact page](/contact-us/).
