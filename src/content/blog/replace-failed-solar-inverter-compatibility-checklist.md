---
title: "Replacing a Failed Solar Inverter: Compatibility Checklist"
seoTitle: "Solar Inverter Replacement: Compatibility Checklist"
excerpt: "Replacing a dead inverter on a plant that is a few years old: check the array voltage, MPPT mapping, grid settings, DISCOM intimation, comms and earthing first."
description: "Solar inverter replacement checklist for O&M and EPC teams: string voltage on aged arrays, MPPT mapping, grid settings, DISCOM intimation, earthing, paperwork."
category: "Maintenance"
date: 2026-10-30
readTime: "19 min"
image: "/og/blog-replace-failed-solar-inverter-compatibility-checklist.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter replacement
  - replace failed solar inverter
  - inverter replacement checklist
  - replacement inverter compatibility
  - old solar plant inverter replacement
  - inverter replacement net metering
relatedSlugs:
  - when-to-replace-solar-inverter
  - solar-string-sizing-ocp-india
  - how-to-read-solar-inverter-datasheets
  - solar-inverter-commissioning-in-india
  - inverter-warranty-service-checklist-bulk-buyers
  - discom-approval-solar-inverter-net-metering
---

Solar inverter replacement is not a like-for-like swap on the kilowatt label. The new unit has to fit three things the old one already settled:

- the array you built years ago;
- the grid connection you were approved on;
- the cabinet, cables and software around it.

This guide is the matching exercise for an O&M (operation and maintenance) or EPC (engineering, procurement and construction) team once the repair-or-replace decision has been made.

> **What you get below**
>
> - An evidence list to capture from the dead unit before it leaves the wall.
> - A master table of what must match and what must only be re-checked.
> - A worked string check on an aged array, with the numbers shown.
> - What two state documents and the CEA connectivity rules say about replacing an inverter, and what they leave open.
> - A copy-ready checklist in four stages.

## Where this guide sits

Three existing posts cover neighbouring ground. Use them for what they own and come back here for the matching.

| If your question is | Read |
| --- | --- |
| Should we repair or replace this unit | [Repair or replace a solar inverter](/blog/when-to-replace-solar-inverter/) |
| How do I read the replacement's datasheet | [How to read solar inverter datasheets](/blog/how-to-read-solar-inverter-datasheets/) |
| How do I test and hand over the new unit | [Solar inverter commissioning in India](/blog/solar-inverter-commissioning-in-india/) |
| Who owes what under warranty | [Solar inverter warranty claim process](/blog/solar-inverter-warranty-claim/) |
| Which parts of the old plant must the new inverter be matched to | This post |

## Step 0: find out why the old unit failed

Do this before you order anything. A new inverter wired to the same fault can fail the same way. Switch off and isolate by your site procedure, then look for causes that survive the swap:

- **DC side.** Insulation resistance of each string and the array, a damaged connector, a string with a ground fault, a combiner box with heat marks.
- **Surge.** A tripped or discoloured surge protective device (SPD) on the DC or AC side. A surge is one possible cause, not a diagnosis, so record what you see rather than assume.
- **Environment.** Water or insects inside the enclosure, a blocked fan or heat-sink, direct sun on the cabinet, a loose AC terminal.
- **Grid.** Logged over-voltage trips before the failure. If the feeder voltage was running high, a replacement with the same settings will trip the same way.

### Capture this from the old unit

If the unit still powers its display, or the portal still holds history, copy the following before removal. Nothing here needs the enclosure opened.

| Item | Why the replacement needs it |
| --- | --- |
| Nameplate photo: model, serial number, rated AC output, maximum DC voltage, date code | Matches the DISCOM file, the warranty claim and the e-waste record |
| Protection and grid settings: over and under voltage, over and under frequency, reconnection delay, power factor or reactive power mode, export limit | The new unit must be set to the same values or to what the DISCOM now asks for |
| Firmware version and communication settings: Modbus address, baud rate, logger ID | A logger or SCADA map often keys on these |
| String-to-input map: which string landed on which MPPT input, string length, orientation | The new unit may have a different number of inputs |
| Last 12 months of generation | Baseline to prove the new unit restores output |
| Fault log and last fault code | Evidence for the warranty or service claim |

## Solar inverter replacement: what must match and what to re-check

The master compatibility table lists nine areas. "Match" means the new unit must equal the old one or the existing design. "Re-check" means a different value may be fine, but you must calculate it.

| Area | Match or re-check | What decides it | Where it is covered below |
| --- | --- | --- | --- |
| AC phase and voltage | Match | Sanctioned connection and existing AC cable and breaker | AC side |
| AC current and protection | Re-check | New unit's maximum AC output current against the existing breaker, cable and RCD | AC side |
| Grid protection settings | Match, then confirm | CEA defaults and any narrower range your DISCOM prescribes | AC side |
| Array voltage window | Re-check | Cold open-circuit voltage and hot operating voltage of the old modules | String check |
| MPPT count and input current | Re-check | Number of strings, their orientation, current per input | String check |
| DISCOM paperwork | Ask in writing | State regulation and your DISCOM's own rules | DISCOM section |
| Monitoring and communication | Re-check | Logger, protocol, register map, portal account | Monitoring |
| Earthing and surge protection | Re-check | Existing earth pits, bonding and SPDs | Earthing and SPD |
| Mounting and cable entry | Re-check | Footprint, weight, clearances, gland size, DC connector type | Mounting |

## AC side: phase, current, settings

**Phase and voltage must match the existing connection.** A single-phase plant stays single-phase; a three-phase plant stays three-phase at the same line voltage. A replacement that changes the phase or the connection arrangement is a modification of the plant, not a replacement. Treat it that way and take it to the DISCOM first.

**Rated output can differ, but the downstream equipment cannot be ignored.** If the new unit's maximum AC output current is higher than the old one, the existing AC breaker, cable and RCD were sized for the old current. Check them, using the [AC cable sizing worked examples](/blog/solar-ac-cable-sizing-inverter-to-acdb/) for the method. If the new unit is rated lower, check whether the array is now clipped more often (the DC to AC ratio rises) and whether the export or sanctioned capacity on the DISCOM file still matches.

**Grid settings are a compliance item, not a factory default.** For distributed generation connecting below 33 kV, the CEA (Central Electricity Authority) connectivity regulations (2013, amended 2019) set these protective functions:

- over and under voltage trip above 110% and below 80%, clearing up to two seconds;
- over and under frequency trip at 50.5 Hz and below 47.5 Hz, clearing up to 0.2 seconds;
- reconnection only after voltage and frequency have been stable for at least sixty seconds;
- cessation of energising within two seconds of an unintended island.

The same regulation says the licensee may prescribe a narrower range. We read the consolidated text published by CBIP on 30 October 2026. Confirm there is no newer amendment.

In practice: set the new unit from the settings you captured in Step 0, then compare them with the DISCOM's current requirement. Confirm the unit lets you adjust protection settings and lock them. Some families publish an adjustable grid range in the datasheet. One Qbits single-phase family lists 90 to 290 Vac adjustable. The exact range is model-specific, so read it for the model you are quoting.

## DC side: a worked string check on an aged array

This is the check that most often decides whether a candidate inverter is a fit at all. The array is old, the inverter is new, and the voltage ceiling and window have moved.

**Illustrative inputs.** These are assumptions to show the arithmetic, not a recommended design and not data from any real plant.

- Module (illustrative 60-cell class): Voc 38.0 V, Vmp 31.0 V, Isc 9.2 A, at 25 °C.
- Temperature coefficients (assumed): Voc minus 0.30 percent per °C, Vmp minus 0.40 percent per °C.
- Site: lowest expected cell temperature 5 °C at sunrise, highest cell temperature 70 °C.
- Old design: 18 modules per string, 3 strings, 54 modules in total (14.58 kWp at 270 Wp). Strings 1 and 2 were paralleled on MPPT input A, string 3 on input B.

**Cold voltage, for the maximum DC limit.**

- Voc per module at 5 °C: 38.0 V x (1 + 0.003 x 20) = 40.28 V.
- Voc of an 18-module string: 18 x 40.28 V = 725.0 V.

**Hot voltage, for the bottom of the MPPT window.**

- Vmp per module at 70 °C: 31.0 V x (1 - 0.004 x 45) = 25.42 V.
- Vmp of an 18-module string: 18 x 25.42 V = 457.6 V.

**Cold operating voltage, for the top of the MPPT window.**

- Vmp per module at 5 °C: 31.0 V x (1 + 0.004 x 20) = 33.48 V.
- Vmp of an 18-module string: 18 x 33.48 V = 602.6 V.

Now test the same string against ceiling classes taken from the published specifications in the Qbits product data. This is a selection exercise on voltage only. A 5 kW single-phase unit is not a candidate for a 14.58 kWp three-phase plant, and a 225 kW unit is not a candidate either. The rows only show how the ceiling decides.

| Candidate class (listed model) | Maximum DC and MPPT window as listed | Most modules per string (cold Voc) | 18-module string |
| --- | --- | --- | --- |
| 550 V class (QB 4/5/6 KTLD) | 550 V maximum DC; 80 to 550 V MPPT | 13 | Fails: 725.0 V is over 550 V |
| 1100 V class ([QB 5 to 17 KTLC](/our-products/QB-6-17KTLC/)) | 1100 V maximum DC; 180 to 1000 V MPPT | 27 | Passes: 725.0 V cold Voc, 457.6 V hot Vmp, 602.6 V cold Vmp, all inside the limits |
| 1500 V class (QB 225/320K-EHV) | 1500 V maximum DC; 500 to 1500 V MPPT | 37 | Fails on the window: 457.6 V hot Vmp is under 500 V |

Three lessons sit in those rows.

1. **A lower ceiling forces re-stringing.** On the 550 V class the string must drop to 13 modules or fewer. That changes the string count, the MPPT map and the combiner wiring, which is a design job, not a swap.
2. **A higher ceiling can fail from below.** The 1500 V row passes the maximum-voltage test. It then drops out of the MPPT window on a hot afternoon.
3. **Passing needs all three voltage numbers.** Maximum DC voltage, MPPT window and the start-up voltage are different limits. The [datasheet reading guide](/blog/how-to-read-solar-inverter-datasheets/) separates them.

### What changes because the array is old

- **Maximum voltage: use the nameplate Voc.** Ageing is normally described as a loss of power and current. Do not take credit for a lower Voc when you test the ceiling. If you want to know the real value, measure the open-circuit voltage of each string on site at a known temperature. Use the higher of the measured and nameplate figures.
- **Operating window: use measured values where the margin is thin.** Aged modules can sit below nameplate Vmp. If the string is close to the bottom of the window, test with a lower Vmp. For illustration only, take Vmp 5 percent below the nameplate-derived figure: 457.6 V x 0.95 = 434.7 V. That still clears 180 V on the 1100 V class and fails 500 V on the 1500 V class by more.
- **Mixed or replaced modules.** If some modules were swapped during the plant's life, strings can differ in Voc and Isc. Strings with different modules or lengths should not share an MPPT input.
- **Connectors.** Check that the DC connector on the new inverter mates with the connector on your string cables. Do not rely on "compatible" wording alone; ask for the connector maker's mating statement, and replace both halves with one type if in doubt.

### MPPT count and input current

The old inverter and the new one may have a different number of MPPT inputs. In the example, three strings go onto two inputs, so one input carries two strings in parallel.

- **Parallel current.** Two strings of 9.2 A Isc each give 18.4 A on that input. Compare this with the new unit's input current and short-circuit current ratings. The listed limit differs between models. For example, the single-phase QB 4/5/6 KTLD lists 20 A input per MPPT, while the TLC families' per-input figures are in their datasheets. Read the figure for the exact model, not a family average.
- **Orientation.** Put strings with the same tilt and azimuth on the same input. If the old plant had east and west strings on separate inputs, a replacement with fewer inputs forces a compromise.
- **Shading.** A shaded string dragging an unshaded one down on a shared input costs energy. Counting inputs is the first step, mapping strings the second.
- **DC to AC ratio.** If the replacement is smaller or larger than the old unit, recalculate the ratio before ordering.

## DISCOM paperwork: what the documents say and what they do not

There is no national rule that says "a replacement inverter needs approval" or "does not". The rule sits in your state regulation and your DISCOM's procedure. Here is what we could read at primary sources, as of 30 October 2026.

| Source | What it says about replacing a failed part | Limits of what we read |
| --- | --- | --- |
| Gujarat: GERC net metering rooftop solar regulations, regulation 16.1 as inserted by the Third Amendment, Notification No. 02 of 2022 | When a module, inverter or other part is damaged or not working, the owner may replace it. If a part of the earlier capacity is no longer available, a part that is available at the time may be fitted. The owner must intimate the licensee immediately; the licensee verifies the replacement within 30 days of the application, failing which it is deemed approved | Read from a Wayback copy of the GERC PDF because the live host would not verify. Later amendments not checked |
| Odisha: net metering standard operating procedure hosted by TP Southern Odisha Distribution Limited, section XVI | Same pattern: owner may repair or replace damaged modules or inverters, must intimate the licensee immediately, and the licensee verifies within 30 days or the replacement is treated as deemed approved. Any enhancement of capacity needs prior permission, failing which it is treated as unauthorised capacity addition | The copy is undated and does not name its issuing authority on its face. Confirm it is current with TPSODL. Its application form also records the inverter make and type, so a changed make changes a record the DISCOM holds |
| CEA connectivity regulations (2013, amended 2019), regulation 11 | Protection features and control diagrams are agreed with the licensee before first synchronisation. Drawings and diagrams must be amended whenever changes are made in the generating resource or interconnection facility | A plain reading of "changes" covers a new inverter model. Your DISCOM may apply it differently |

Two things follow.

**Intimate first, in writing.** In both states that we could read, the owner intimates and the licensee verifies within 30 days. A written intimation from your side starts that clock. Send the new model, its datasheet and test or conformity documents, and ask for the verification date.

**A change of capacity is a separate question.** Neither state text covers a replacement with a different kW rating when the module count has not changed. Gujarat's addition clause is written around added solar modules; Odisha's is written around "enhancement in capacity". So a larger inverter is a grey case. Ask, and do not assume.

Rooftop consumers on net metering are the cases we read. Open-access, group captive and large C&I plants may be governed by other documents. Plants installed under a subsidy or a government scheme may carry vendor or maintenance conditions that are not in the net metering text. An inverter-side O&M contract should say who handles a model change. Ask your DISCOM for the document that governs your connection, and put these questions in the letter:

1. Does replacing the inverter with a different make or model need intimation, approval or an inspection in our case, and under which regulation or circular?
2. If the replacement has a different rated AC output, does that count as a capacity change?
3. Which conformity documents (BIS or IEC) do you want for the new model?
4. Do you want harmonic and DC injection measurements repeated after the swap? The CEA regulation requires them before commissioning and once a year.
5. Do you need an amended single line diagram, and who signs it?

The [DISCOM verification sequence](/blog/discom-approval-solar-inverter-net-metering/) shows how to word the model name and DISCOM name so the answer can be checked. For plants above the state's threshold, ask whether an electrical inspector must see the change. The [CEIG inspection guide](/blog/ceig-inspection-solar-plant-inverter-checks/) explains why that threshold is a state question.

## Send your string sheet to Qbits

Qbits sells inverters and publishes this guide, so treat the families in this post as selection examples. We do not claim that any Qbits model is a drop-in replacement for any named brand or model. What we can do is test your sheet. [Send your filled string map, module data and AC details with a project quote request](/contact-us/). The technical team then matches a model to your design instead of starting with questions. Quotes are per model and quantity.

## Monitoring and communication

A new inverter often arrives with a different data model.

- **Portal and account.** A new unit usually means a new device ID and possibly a different platform. Decide who owns the account, and who sees alarms.
- **Wi-Fi or wired.** The Qbits families used as examples here list Wi-Fi with optional RS485 or GPRS. If the old plant reported over RS485 to a data logger, confirm the new unit's interface and whether the logger supports its register map.
- **Register map.** If a SCADA or energy management system reads the old inverter's registers, the new unit's map will differ. Get the new communication protocol sheet before ordering, not after; the [RS485, Modbus and SCADA guide](/blog/inverter-modbus-rs-scada-integration-ci-om/) lists what that document must contain.
- **Meter and export control.** If the old unit was part of an export-limiting arrangement with a meter or CT, replicate it and re-test.
- **History.** Keep the old portal's data export. Your baseline for the new unit's performance depends on it.

## Earthing and surge protection

Re-use of the existing earthing and SPDs is where a replacement can look finished and not be safe. The CEA safety regulations (2023), regulation 121, require, among other things:

- the inverter cabinet frame connected to the earthing bus through earthing terminals using flexible braided copper wire;
- all metal casing and shielding of the plant, array structures, equipment, inverters and control systems earthed;
- protection deployed on both input and output against overload, surge current, surge voltage, short circuit, high temperature, over and under voltage, over and under frequency, reverse polarity and lightning;
- every combiner box with a suitable SPD with arc extinguishing capability;
- earth fault protection and insulation monitoring for arrays and inverters.

We read these from a Wayback copy of the gazette notification of 8 June 2023, as the live CEA URL did not open. For the replacement, that translates into five checks:

1. Earth resistance and earth continuity from the inverter frame to the earth bus, with the date and instrument recorded.
2. SPD indicators on DC and AC: replace any that show operated, and do not reuse a cartridge that has absorbed a surge.
3. Bonding of the new unit's frame with the braided copper, as well as the AC protective earth.
4. Insulation-monitoring or earth-fault behaviour on the new unit tested with the real array.
5. A look at the lightning protection path if the failure date matched a storm.

## Mounting, footprint and cable entry

Compare dimensions, weight and ventilation before the unit arrives, and take the measurements on site.

| Check | What goes wrong if skipped |
| --- | --- |
| Footprint and mounting hole pattern against the existing bracket or wall plate | New holes in a waterproofed wall or a plate that does not fit |
| Weight against the wall or frame | Fixings pulling out |
| Clearance above, below and beside for heat | Output derating in summer |
| Cable entry side and gland size against the outer diameter of the AC cable | Open cable entries; IP rating lost. A published IP66 rating applies to the unit as shipped |
| DC and AC cable length to the new terminals | Cables that no longer reach, or sit under strain |
| Direct sun and rain exposure | Cabinet temperature and ingress |
| Location relative to the array | Regulation 121 asks for the inverter near the panels with UV-protected DC routing |

## The old unit's documents and warranty

Process only. Warranty terms are model-specific and you should read them for the exact unit.

- **Is the old unit still in its warranty period?** If so, the replacement may be an OEM claim, not a purchase. Check the written terms and the registration record before you buy.
- **Who owes the work?** The seller, the EPC and the OEM can each owe different parts. The [warranty claim guide](/blog/solar-inverter-warranty-claim/) shows how to separate them.
- **Evidence pack.** Invoice, nameplate photo, serial, fault log, photos of the failure and a service record.
- **Disposal.** Record how the old unit leaves the site. Ask whether e-waste rules apply and get the handover in writing.
- **New unit's file.** Keep the datasheet revision, model code on the nameplate and the written warranty for the new unit together with the DISCOM letter.

## Using Qbits families as selection examples

These are published values from the Qbits product data. They are for matching exercises, not a statement of fit for your plant. Read the current datasheet and certificates for the exact model.

| Family | Phase | MPPTs | MPPT window | Maximum DC | Communication |
| --- | --- | --- | --- | --- | --- |
| QB 4/5/6 KTLD | Single | 2 | 80 to 550 V | 550 V | Wi-Fi; optional RS485 or GPRS |
| QB 5 to 17 KTLC | Three | 2 | 180 to 1000 V | 1100 V | Wi-Fi; optional RS485 or GPRS |
| QB 20 to 30 KTLC | Three | 2 | 180 to 1000 V | 1100 V | Wi-Fi; optional RS485 or GPRS |
| QB 30 to 40 KTLC-Pro | Three | 3 | 200 to 1000 V | 1100 V | Wi-Fi; optional RS485 or GPRS |
| QB 40 to 50 KTLC-Plus | Three | 4 | 200 to 1000 V | 1100 V | Wi-Fi; optional RS485 or GPRS |

Datasheets are on the [datasheets page](/download-datasheets/). If your old plant used more strings than a candidate has inputs, go up to the family with more MPPTs rather than forcing strings together.

## Checklist to copy

**Before ordering**

- [ ] Root cause of the failure recorded, and external causes cleared.
- [ ] Nameplate, serial, settings, firmware and string map captured from the old unit.
- [ ] Phase, AC voltage and AC current checked against breaker, cable and RCD.
- [ ] Cold Voc, hot Vmp and cold Vmp calculated for every string, with the site's temperatures.
- [ ] MPPT inputs, parallel current and string orientation mapped.
- [ ] Written question sent to the DISCOM (five questions above) and answer filed.
- [ ] Datasheet, conformity documents and written warranty for the exact model in hand.

**On receipt**

- [ ] Model code identical on nameplate, datasheet, quote and DISCOM letter.
- [ ] Footprint, glands, DC connector type and clearances confirmed against site.

**Before energising**

- [ ] Earth continuity and resistance recorded; SPDs checked.
- [ ] String open-circuit voltage measured and compared with the calculation.
- [ ] Protection settings entered and locked; DISCOM-prescribed range applied.
- [ ] Communication, portal account and any SCADA map tested.

**After commissioning**

- [ ] Commissioning record, amended single line diagram and settings sheet filed.
- [ ] DISCOM verification or acknowledgement date noted.
- [ ] Generation compared with the old baseline after the first month.
- [ ] Old unit's disposal recorded.

## Your next step

Fill the string table in this guide for your plant, one row per string, and send it to your DISCOM with the model you propose. When you want a model matched to it, [request a project quote from Qbits](/contact-us/) and attach the table, the module datasheet and your AC details.
