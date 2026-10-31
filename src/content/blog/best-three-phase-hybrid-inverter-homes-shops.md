---
title: "Best Three-Phase Hybrid Inverter for Homes and Shops"
seoTitle: "Best Three-Phase Hybrid Inverter: 6 Models Compared"
excerpt: "Six three-phase hybrid inverters read from their own datasheets on battery current, backup rating and PV input, with a worked 8 kW shop backup check."
description: "Three phase hybrid inverter comparison for installers: why a 48 V battery draws about eight times the current of 400 V, six datasheets, an 8 kW shop check."
category: "Comparison"
date: 2026-10-30
readTime: "23 min"
image: "/og/blog-best-three-phase-hybrid-inverter-homes-shops.webp"
author: "Keyur Rakholiya"
keywords:
  - "three phase hybrid inverter"
  - "best three phase hybrid inverter india"
  - "three phase hybrid inverter 48V battery"
  - "10 kW hybrid inverter three phase"
  - "three phase hybrid inverter for shop backup"
relatedSlugs:
  - "best-hybrid-solar-inverter-india-2026"
  - "single-vs-3-phase-inverter"
  - "battery-sizing-hybrid-solar"
  - "bms-hybrid-solar-inverter-explained"
---

**The best three-phase hybrid inverter is the one whose battery current, backup rating and phase handling fit the loads you must keep running. Settle battery voltage first.** A 48 V battery carries about 208 A to deliver 10 kW. A 400 V battery carries 25 A for the same power. That one fact changes the cable, the fuse, the busbar and the number of packs wired in parallel. It is why a 48 V three-phase hybrid and a high-voltage one are not like-for-like products.

**Disclosure.** Qbits wrote this page and sells one of the six inverters in it, the QBH 5/6/7/8/10/12KS48P3 family. Every model is read on the same rows, taken from its own maker's current document, and the columns run alphabetically by brand, so there is no ranking. We tested no unit. Price, stock, certificates, warranty terms, India service route and DISCOM acceptance for the unit you are quoted are unknown to us. We read all six documents on 30 October 2026.

This page covers three-phase units. For a single-phase 5 kW home with a battery, read [the single-phase hybrid comparison](/blog/best-hybrid-solar-inverter-india-2026/) first. The 10 kW class is used below because it is the column all six brands publish.

## What should you check before buying a three-phase hybrid inverter?

Ten checks apply to every shortlisted model, and they come before brand or price.

1. **Which loads are three-phase.** In most homes and shops the backup list is mostly single-phase (lights, fans, fridge, counters, a split AC). Only motors, some pumps and a few machines need a true three-phase supply. A three-phase hybrid with a three-phase backup output still has to share single-phase loads across the three phases. Our [single-phase versus three-phase guide](/blog/single-vs-3-phase-inverter/) covers the connection and phase-wise netting side.
2. **Battery voltage class.** A 48 V (low-voltage) design or a hundreds-of-volts (high-voltage) design. The next section shows the arithmetic.
3. **Battery chemistry and BMS communication.** The sheet should print the chemistry, the voltage window and the communication port to the battery management system. A voltage match alone is not compatibility. See the [BMS and hybrid inverter guide](/blog/bms-hybrid-solar-inverter-explained/).
4. **Battery current limit against your load.** Compare the datasheet's maximum charge and discharge current with the current your backup load pulls. Include the low-voltage end of the discharge.
5. **Backup output.** Rated output, overload or peak rating and for how long, switch-over time, and how an unbalanced load is handled. Read whether a figure is per phase or total.
6. **PV input.** MPPT count, voltage window, and the current each tracker can carry against your module's current.
7. **Grid-tie rules, export control and DISCOM acceptance.** Covered in its own section below.
8. **DC to AC ratio.** How much PV the sheet allows against the AC rating. This matters when the battery is charged from PV during a cut.
9. **Enclosure, cooling, noise and weight.** IP rating, thermal derating, fan noise in a shop, and what two people can lift onto a wall.
10. **Monitoring and service route.** What interface the sheet prints, and who attends a fault. No datasheet answers the second. Get it in writing.

## Why 48 V gets heavy at 10 to 12 kW

Current is power divided by voltage: **I = P / V.** For the same power, a tenth of the voltage means ten times the current. Conductor heating rises with the square of current.

| Battery power | At 48 V | At 400 V | At 600 V |
| --- | --- | --- | --- |
| 5 kW | 104 A | 12.5 A | 8.3 A |
| 8 kW | 167 A | 20 A | 13.3 A |
| 10 kW | 208 A | 25 A | 16.7 A |
| 12 kW | 250 A | 30 A | 20 A |

The datasheets agree with this arithmetic. The Qbits sheet prints 250 A for the 12 kW model and 210 A for the 10 kW model. Growatt prints 25 A at 10 kW on its 100 to 550 V battery range. Huawei prints 16.7 A at 10 kW on its 600 to 980 V range. The 400 V and 600 V columns are illustrative nominal voltages chosen to match those printed currents.

What this means on the wall:

- **Cable size.** A 200 A DC run needs a cable several times the cross-section of a 25 A run. The table below shows only voltage drop on a short copper run: 2 m each way, resistivity about 0.0172 ohm mm2 per m, 195 A, illustrative. The current-carrying limit of the cable under your installation method comes from the cable maker's table and is not reproduced here.

| Cable (copper, 4 m loop) | Resistance | Voltage drop at 195 A | Drop as share of 48 V | Heat in the cable |
| --- | --- | --- | --- | --- |
| 25 mm2 | 2.75 milliohm | 0.54 V | 1.1% | 105 W |
| 50 mm2 | 1.38 milliohm | 0.27 V | 0.6% | 53 W |
| 70 mm2 | 0.98 milliohm | 0.19 V | 0.4% | 38 W |

For contrast, 21.5 A at 400 V through a 6 mm2 cable over the same run drops about 0.25 V, which is 0.06% of 400 V. Every termination is also a heat source at 200 A, so crimp quality and torque matter more than they do on a high-voltage battery.

- **Fuse and breaker.** The protection device must be rated for DC at the battery voltage. Its interrupting rating must suit the battery's short-circuit capability, and its size must sit above the inverter's maximum battery current but below the cable's limit. An AC breaker is not a substitute. Get the required value from both the inverter and the battery maker, since neither datasheet below prints it.
- **Busbar and parallel packs.** Suppose one battery pack supports 100 A continuous (an assumption for illustration). A 195 A discharge then needs at least two packs in parallel, and the busbar joining them carries the full 195 A. Ask the battery maker for the continuous current per pack and for the approved parallel arrangement.
- **Surge.** A motor start or an overload multiplies the current. A 200% peak on an 8 kW load at 93% efficiency would ask for about 360 A from a 48 V battery. Ask whether the peak figure on the sheet is met from the battery, from PV, or from both.

None of this makes 48 V unsuitable. A short, thick, well-made run works. It means the installer, not the inverter, carries more of the risk at 10 to 12 kW. For the retrofit side of the question, see [adding a battery to a solar system later](/blog/add-battery-to-solar-system-later/).

## Six three-phase hybrids, read on the same fields

We chose six exact models whose own documents publish a 10 kW class three-phase hybrid column. Three have 48 V (low-voltage) battery ports and three have high-voltage ports. Other credible models exist, and leaving one out is not a verdict on it. Everything in a competitor's column is that brand's own claim, not ours.

**Documents read:**

- **Deye:** the datasheet section of the SUN-5K to 12K-SG04LP3-EU installation manual on deyeinverter.com, file named 240203 (February 2024). This is the EU variant. Deye India variants and their sheets may differ.
- **GoodWe:** ET LV Series 5 to 20 kW sheet on en.goodwe.com, page code 20251121 V2.1.
- **Growatt:** SPH 4000-10000TL3 BH-UP datasheet linked from the product page on en.growatt.com. No date printed; the file was created in March 2025.
- **Huawei:** SUN2000-3/4/5/6/8/10KTL-M1 High Current Version sheet on solar.huawei.com, version 01-202411.
- **Qbits:** the QBH-5/6/7/8/10/12KS48P3 page of the Qbits hybrid catalogue on qbitsenergy.com. No date printed.
- **Sungrow:** SH5.0/10RT datasheet version 15 on info-support.sungrowpower.com, the 2023 Australian edition.

### Battery side

| Field | Deye SUN-10K-SG04LP3-EU | GoodWe GW10K-ET-L-G10 | Growatt SPH 10000TL3 BH-UP | Huawei SUN2000-10KTL-M1 | Qbits QBH-10KS48P3 | Sungrow SH10RT |
| --- | --- | --- | --- | --- | --- | --- |
| Battery class | Low voltage | Low voltage | High voltage | High voltage | Low voltage | High voltage |
| Battery voltage | 40 to 60 V | 40 to 60 V (48 V nominal) | 100 to 550 V | 600 to 980 V | 48 V rated, charge up to 60 V (configurable) | 150 to 600 V |
| Chemistry as printed | Lead-acid or Li-ion | LFP or lead-acid | Lithium or lead-acid | LUNA2000 batteries listed | Lithium or lead-acid | Li-ion |
| Max charge and discharge current | 210 A | 220 A | 25 A | 16.7 A | 210 A | 30 A (depends on the battery) |
| Max charge and discharge power | Not printed | 10 kW and 11 kW | 10 kW | 10 kW | Not printed | 10.6 kW and 10.6 kW |
| Battery inputs | Not printed | 1 | Not printed | Not printed | Not printed | Not printed |
| BMS communication as printed | RS485 and CAN | CAN | Not printed (RS485, CAN, USB listed as interfaces) | Not printed | Not printed | Not printed (CAN listed as a port) |
| Compatible batteries named on the sheet | None | GoodWe Lynx A G3, Lynx U G3, BAT 14 kWh | None | LUNA2000-5/10/15-S0, 7/14/21-S1 | None | None |

The Qbits sheet prints no BMS port, no compatible-battery list and no minimum voltage. Do not assume a battery works with the QBH range because it is rated 48 V. Ask Qbits for the compatible battery list and the BMS protocol in writing, and ask the battery maker to confirm the pairing too. The same goes for any other brand where "None" appears above: the sheet does not name an approved battery.

### PV side

| Field | Deye | GoodWe | Growatt | Huawei | Qbits | Sungrow |
| --- | --- | --- | --- | --- | --- | --- |
| MPPTs | 2 | 3 | 2 | 2 | 2 | 2 |
| Max input current per MPPT | 26 A and 13 A | 20 A each | 13.5 A each | 13.5 A each | 36 A and 18 A | 12.5 A and 25 A |
| Max short-circuit current per MPPT | 34 A and 17 A | 26 A each | 16.9 A each | 19.5 A | Not printed | 18 A and 36 A |
| Strings per MPPT | 2 and 1 | 1 each | 1 each | 1 each | Not printed | 1 and 2 |
| Max DC voltage | 800 V as read | 1000 V | 1000 V | 1100 V | 1000 V | 1000 V |
| MPPT window | 200 to 650 V | 150 to 850 V | 120 to 1000 V | 140 to 980 V (operating range) | 200 to 800 V | 200 to 950 V |
| Start-up voltage | 160 V | 180 V | 120 V | 200 V | 150 V | 250 V |
| Max or recommended DC power | 13 kW max | 20 kW max | 15 kW recommended | 15 kWp recommended (20 kWp with optimizers) | 20 kW max | 15 kW recommended |
| DC to AC ratio against 10 kW | 1.3 | 2.0 | 1.5 | 1.5 | 2.0 | 1.5 |
| Arc-fault protection | Integrated | Optional | Not listed | Yes | Not listed | Not listed |

Deye's row prints "550V (160V-800V)", which we read as nominal and limit. The Qbits sheet prints one "Maximum input current" cell per model, with an "MPPT number" row beside it. On the 10 kW and 12 kW models the cell reads 36/18 A against 2 MPPTs, and the sheet's feature list says "Up-to-36A maximum input current" and "Adaptable to 18A modules". We read it as tracker 1 at 36 A and tracker 2 at 18 A. The sheet does not say which physical input is the 36 A one.

### AC output and backup

| Field | Deye | GoodWe | Growatt | Huawei | Qbits | Sungrow |
| --- | --- | --- | --- | --- | --- | --- |
| On-grid rated and maximum output | 10 kW and 11 kW | 10 kVA and 11 kVA | 10 kVA and 10 kVA | 10 kW and 11 kVA | Maximum 11 kW (rated not printed) | 9.999 kW and 9.999 kVA |
| Max AC output current | 16.7 A at 220 V, 15.9 A at 230 V | 16.7 A at 220 V, 15.9 A at 230 V | 15.2 A | 16.9 A | 16.7 A | 15.2 A |
| Backup rated output | 10 kW | 10 kVA | 10 kW and 10 kVA | 3.3 kVA at 220 or 230 V, through a BackupBox-B1 | 10 kW | 9.999 kW and 9.999 kVA |
| Backup peak or overload | 2 times rated for 10 s | 20 kVA for 10 s | Not printed | Not printed | More than 200% for 15 s | 12 kW for 5 min |
| Switch-over time | Not in the sheet table | Under 4 ms (headline) | Under 10 ms | Not printed | Not printed | Under 20 ms |
| Unbalanced load as printed | Max unbalanced output current 22.7 A at 220 V, 21.7 A at 230 V | Unbalanced output up to 150% | 100% three-phase imbalance output (headline) | Not printed | Not printed | 100% power to unbalanced loads in backup mode (headline) |
| Max efficiency, European | 97.6%, 97.0% | 97.8%, 97.3% | 98.2%, 97.5% | 98.6%, 98.1% | 98% (a second "Max efficiency" row prints 94.5%), 97.5% | 98.4%, 97.9% |
| Export control named | Zero-export modes in the manual | Not on the sheet | Phase-level export limitation (headline) | Not on the sheet | Not on the sheet (the diagram shows a CT) | Not on the sheet |

The Huawei backup row is the one to read twice. The sheet prints a 3.3 kVA maximum backup output through the optional BackupBox-B1. On its own sheet it therefore does not carry an 8 kW three-phase shop load. It is a strong grid-tied hybrid with high-voltage batteries and a small backup.

The Qbits sheet prints the off-grid output in watts for models where the other brands print VA, and prints no per-phase statement. The 16.7 A figure equals 11,000 W divided by three phases at about 220 V, or 11 kW at 380 V line to line, the lower of the sheet's printed 380/400 V rated output voltage. It is probably per phase, but the sheet does not say. Confirm it in writing.

### Enclosure, noise and communication

| Field | Deye | GoodWe | Growatt | Huawei | Qbits | Sungrow |
| --- | --- | --- | --- | --- | --- | --- |
| IP rating | IP65 | IP66 | IP65 | IP65 | IP66 | IP65 |
| Cooling | Intelligent air cooling | Smart fan cooling | Natural | Natural | Intelligent forced air cooling | Natural convection |
| Noise | 55 dB or less | Under 45 dB | Not printed | Not printed | Under 55 dB | 30 dB(A) typical |
| Weight | 38 kg | 45.3 kg | 30 kg | 17 kg | 38 kg | 27 kg |
| Dimensions (W x H x D) | 422 x 658 x 254 mm | 756 x 551 x 258 mm | 505 x 453 x 198 mm | 525 x 470 x 146.5 mm | 475 x 683 x 256 mm | 460 x 540 x 170 mm |
| Operating temperature as printed | -40 to 60 °C, derating above 45 °C | -35 to 60 °C | -25 to 60 °C | -25 to 60 °C | -25 to 60 °C, derating above 45 °C | -25 to 60 °C |
| Communication as printed | RS485 and CAN to the BMS; the manual also shows a Modbus port and a WiFi port | WiFi, LAN, Bluetooth, 4G, RS485, CAN; Modbus RTU and TCP | RS485, CAN, USB; RF, WiFi or GPRS monitoring optional | RS485; WLAN and Ethernet through an optional dongle | No interface printed (the diagram shows a cloud and a router) | RS485, WLAN, Ethernet, CAN, 4 digital inputs, 1 digital output |

Notes on reading the tables:

- Deye prints arc-fault and surge-protection rows. GoodWe prints surge protection and an integrated DC switch. Sungrow prints surge protection and a battery overcurrent row. The Qbits sheet lists residual current, insulation resistance, reverse polarity, over-current, short-circuit and over-voltage protection, but no arc-fault, surge-protection or string-monitoring rows.
- Only Qbits and Deye print a thermal derating statement for ambient temperature (above 45 °C). Growatt, GoodWe, Huawei and Sungrow print an operating range without saying what happens near its top. Ask them.
- The Qbits sheet prints two different Indian Standard numbers (IS 16169 and IS 16221) in its standards rows. A standards list is not a certificate. Ask for the current certificate for the exact model.

## The Qbits family on its own sheet

The QBH 5/6/7/8/10/12KS48P3 family is a three-phase hybrid for a 48 V lithium or lead-acid battery. The sheet prints these figures by model:

| Model | Max charge and discharge current | Max DC input power | MPPTs and tracker current | Max on-grid output | Off-grid rated output |
| --- | --- | --- | --- | --- | --- |
| QBH-5KS48P3 | 120 A | 10 kW | 1, 18 A | 5.5 kW | 5.5 kW |
| QBH-6KS48P3 | 125 A | 12 kW | 1, 18 A | 6.6 kW | 6.6 kW |
| QBH-7KS48P3 | 150 A | 14 kW | 1, 18 A | 7.7 kW | 7.7 kW |
| QBH-8KS48P3 | 190 A | 16 kW | 2, 18/18 A | 8.8 kW | 8 kW |
| QBH-10KS48P3 | 210 A | 20 kW | 2, 36/18 A | 11 kW | 10 kW |
| QBH-12KS48P3 | 250 A | 24 kW | 2, 36/18 A | 13.2 kW | 12 kW |

Common to all six: 200 to 800 V MPPT window, 150 V start-up, 1000 V maximum DC, IP66, intelligent forced air cooling, under 55 dB and 38 kg. The operating range is -25 to 60 °C with derating above 45 °C, and the sheet prints derating above 2000 m altitude. It also prints an off-grid peak of more than 200% for 15 seconds and a PV oversizing ratio of 200%. Its diagram shows a generator input and a grid CT.

The sheet does not print a switch-over time, an unbalanced-load rating, per-phase versus total backup ratings, a BMS communication port, a compatible battery list, a short-circuit current per tracker, or a communication interface. Those are exactly the items to request before an order. The [QBH 5/6/7/8/10/12KS48P3 product page](/our-products/QBH-5-12KS48P3/) carries the datasheet.

## Which PV strings can each hybrid inverter take?

The modules below are illustrative, as in our other inverter comparisons. One is a 700 Wp class module with Imp 17.4 A. The other is a 545 Wp class module with Imp 13.0 A. The rule is strict. Strings per tracker times Imp must stay at or under the tracker's maximum input current, and the string count must not exceed what the sheet prints per tracker.

| Inverter | 700 Wp class (17.4 A): strings by tracker | 545 Wp class (13.0 A): strings by tracker |
| --- | --- | --- |
| Deye | 1 on the 26 A tracker, 0 on the 13 A tracker | 2 on the 26 A tracker, 1 on the 13 A tracker |
| GoodWe | 1, 1 and 1 | 1, 1 and 1 |
| Growatt | 0 and 0 (13.5 A is below 17.4 A) | 1 and 1 |
| Huawei | 0 and 0 | 1 and 1 |
| Qbits | 2 on the 36 A tracker and 1 on the 18 A tracker by current; strings per tracker and short-circuit current not printed | 2 on the 36 A tracker and 1 on the 18 A tracker by current; same caveat |
| Sungrow | 0 on the 12.5 A tracker, 1 on the 25 A tracker | 0 on the 12.5 A tracker (12.5 A is below 13.0 A), 1 on the 25 A tracker |

The honest reading is that the large-format modules now common in India fit some of these units and not others. Growatt's and Huawei's 13.5 A trackers cannot carry a 700 Wp class string, however good the rest of the sheet is. Check the module's short-circuit current too, and run your real module and your coldest site temperature through a string sizing calculator.

One voltage example: a 700 Wp class module with Voc 48.6 V reads about 51.1 V at 5 °C. A 16-module string then reads about 818 V cold. That is within a 1000 V maximum, and above an 800 V limit if Deye's row is a hard ceiling. Assumptions are illustrative and your module datasheet governs.

## Worked example: a shop with an 8 kW three-phase backup load for 3 hours

**Illustrative only.** The numbers below are planning arithmetic, not a design.

**Assumptions.** Backup load 8 kW, treated as balanced across the three phases, for 3 hours. Battery-to-AC conversion 93% (deliberately below GoodWe's printed 95.5% peak figure). Usable battery fraction 80%. A 48 V nominal battery, and for contrast 400 V and 600 V high-voltage batteries.

| Step | Result |
| --- | --- |
| Energy the load needs | 8 kW x 3 h = 24 kWh |
| Energy drawn from the battery at 93% | 24 / 0.93 = 25.8 kWh |
| Nominal battery capacity at 80% usable | 25.8 / 0.80 = about 32 kWh |
| DC power at the battery | 8 / 0.93 = 8.6 kW |
| Battery current at 48 V | 8,600 / 48 = 179 A |
| Battery current at 44 V (late in discharge, assumed) | 8,600 / 44 = 195 A |
| Battery current at 400 V | 8,600 / 400 = 21.5 A |
| Battery current at 350 V (late in discharge, assumed) | 8,600 / 350 = 24.6 A |
| Battery current at 600 V | 8,600 / 600 = 14.3 A |
| AC line current, balanced, at 400 V line to line | 8,000 / (1.732 x 400) = 11.5 A |

The battery-side current at 48 V is about 15.5 times the AC line current. The cable, fuse and busbar must carry that gap.

**Do the inverters clear it?**

| Model | Backup rating against 8 kW | Battery current limit against 179 A and 195 A |
| --- | --- | --- |
| Qbits QBH-8KS48P3 | 8 kW rated, no margin | 190 A passes 179 A, fails 195 A |
| Qbits QBH-10KS48P3 | 10 kW rated | 210 A passes both |
| Deye 8K and 10K | 8 kW and 10 kW | 190 A passes 179 A only; 210 A passes both |
| GoodWe GW8K and GW10K | 8 kVA and 10 kVA | 175 A fails even 179 A; 220 A passes both |
| Growatt SPH 10000TL3 BH-UP | 10 kW | 25 A passes 21.5 A; 24.6 A leaves almost no margin |
| Sungrow SH10RT | 9.999 kW | 30 A passes (depends on the battery) |
| Huawei SUN2000-10KTL-M1 | 3.3 kVA backup, fails | Not the limit; the backup box is |

For an 8 kW backup load, the 10 kW model in each 48 V family clears the battery current at both voltages, and the 8 kW model sits at its limit. That is arithmetic on printed sheet figures, not a sizing approval.

**The unbalanced case.** If the 8 kW were all on one phase, as with one large single-phase machine, that phase would carry 8,000 / 230 = 34.8 A. Deye's printed maximum unbalanced output current on the 10K is 21.7 A at 230 V, about 5.0 kW on one phase. If Qbits's printed 16.7 A is per phase, one phase carries about 3.8 kW at 230 V. Either way, spread single-phase loads across the three phases at the backup distribution board, and ask each supplier for the per-phase and total rating in writing.

The battery energy figure is the same for every inverter. Only the current, and therefore the wiring, changes with voltage. For sizing the pack itself, see [how to size a battery for a hybrid inverter](/blog/battery-sizing-hybrid-solar/).

## Grid-tie rules, export control and DISCOM acceptance

A hybrid inverter that exports to the grid is still a grid-connected inverter, so the acceptance questions in the [DISCOM approval guide](/blog/discom-approval-solar-inverter-net-metering/) apply to it too. India has no national approved list. Acceptance is decided per DISCOM, per model and per revision, and a standards list on a sheet is not approval. Whether a battery changes anything in your state is a question for the DISCOM, in writing, before you quote. The [regulations and standards checklist](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) explains what BIS and ALMM do and do not cover.

On export control, the six sheets differ. Growatt's headline prints phase-level export limitation. Deye's manual describes zero-export modes to load and to a CT. GoodWe, Huawei, Qbits and Sungrow print no export-control function in the sheets we read, though all of them may offer one in firmware or with a meter. A CT or meter at the grid connection point, correct phase mapping and a commissioning test are part of the arrangement. Read the [zero-export inverter evidence review](/blog/best-zero-export-solar-inverters/) for the wider checklist, and do not assume zero export removes the need for approval.

## Which three-phase hybrid suits which shop or home?

The picks below are conditional readings of the documents. They do not rank quality or reliability, and we have not tested any unit.

**Deye SUN-10K-SG04LP3-EU** suits an installer who wants a 48 V design with BMS ports (RS485 and CAN) printed on the sheet, a stated three-phase unbalanced current and a manual that documents zero-export modes. It trades that for IP65, the lowest efficiency figure here (97.6%) and a 13 A second tracker that rules out large-format modules there.

**GoodWe GW10K-ET-L-G10** suits an installer who wants the most documented 48 V unit. The sheet prints CAN to the BMS, named GoodWe batteries, under 4 ms switching, up to 150% unbalanced output, three trackers carrying 20 A each, a quiet fan (under 45 dB) and IP66. It is the heaviest and largest here at 45.3 kg.

**Growatt SPH 10000TL3 BH-UP** suits an installer who has chosen a high-voltage battery and wants 25 A wiring, a 30 kg unit, under 10 ms switching and 100% imbalance output. Its 13.5 A trackers need modules at or below that current.

**Huawei SUN2000-10KTL-M1** suits a grid-tied home that wants a compact 17 kg unit, 98.6% peak efficiency, AFCI and Huawei's own batteries, and where backup is a small essential circuit only. India availability and service were not checked for this article.

**Qbits QBH-10KS48P3** suits an installer who wants a 48 V three-phase unit with a 210 A battery limit and 36/18 A trackers that carry large modules. It also prints a 200% PV ratio, IP66 and a derating statement above 45 °C. The gaps on its published sheet are the missing switch-over time, unbalanced-load rating, BMS port, compatible battery list, short-circuit current and communication interface. Its datasheet does not establish warranty terms or the service route. Ask Qbits for all of these in writing, as you would from any brand. Its [product page](/our-products/QBH-5-12KS48P3/) carries the datasheet.

**Sungrow SH10RT** suits an installer who has chosen a high-voltage Li-ion battery and wants the broadest communication list (RS485, WLAN, Ethernet, CAN and digital I/O). It is a quiet 27 kg natural-convection unit with 100% unbalanced backup power. The sheet read is the Australian edition. India variants may differ.

## What do the hybrid datasheets not tell you?

The six sheets are brand documents, and some are older than the unit you will be handed or cover another region. The Deye document is the EU variant and the Sungrow one is the Australian edition. Growatt and Qbits print no date, and the others print only a page code, version or copyright year. Nothing here covers price, stock, warranty length or remedy, certificate validity, DISCOM acceptance, firmware or battery approval. Request the same documents from every seller:

| Request | What it settles |
| --- | --- |
| Datasheet for the exact model code and region | The current limits of the unit in the quote |
| Compatible battery list and BMS protocol, in writing | Whether your battery is approved, not only rated 48 V |
| Maximum battery current and the required DC fuse and cable | The wiring at 10 to 12 kW |
| Switch-over time and unbalanced-load rating, per phase and total | Whether the backup suits your shop |
| Short-circuit current per MPPT | Whether your module passes the strict check |
| Current certificates for the model | Evidence your DISCOM may ask for |
| Written warranty and service terms | Term, remedy, freight, labour, who attends |
| Commissioning checklist | Phase rotation, battery settings, CT polarity and a backup test |

## Next step: size your backup battery current

List the loads that must run during a cut and split them by phase. Add them up, choose the backup duration, and run the battery arithmetic above at both 48 V and your lowest expected battery voltage. Then request the documents in the table from each shortlisted supplier.

If a 48 V three-phase unit suits the shop, open the [QBH 5/6/7/8/10/12KS48P3 product page](/our-products/QBH-5-12KS48P3/) for the datasheet. Then use [the contact page](/contact-us/) to ask Qbits for the compatible battery list, BMS protocol, switch-over time, unbalanced-load rating and written warranty and service terms for the model you are considering.
