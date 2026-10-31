---
title: "Allocating MPPTs Across Multiple Factory Sheds"
seoTitle: "MPPT Allocation for Multiple Roofs: Factory Sheds"
excerpt: "Assign strings from sheds with different tilt, azimuth, shade and string length to MPPT inputs. Modelled mismatch losses and a four-shed worked allocation."
description: "MPPT allocation for multiple roofs: how an EPC designer assigns strings from factory sheds to inverter inputs, with modelled loss and a worked example."
category: "EPC"
date: 2026-10-30
readTime: "20 min"
image: "/og/blog-mppt-allocation-multiple-factory-sheds.webp"
author: "Keyur Rakholiya"
keywords:
  - "mppt allocation multiple roofs"
  - "mppt allocation factory sheds"
  - "string allocation multi mppt inverter"
  - "east west and south strings on one mppt"
  - "unequal string length one mppt"
  - "saw tooth roof solar string design"
  - "factory rooftop solar string design"
relatedSlugs:
  - "how-many-inverters-for-hundred-kw-to-one-mw-rooftop"
  - "best-twenty-to-thirty-kw-on-grid-inverter-small-factories"
  - "dual-mppt-vs-single-mppt"
  - "solar-string-sizing-ocp-india"
  - "east-west-roof-solar-design"
  - "solar-inverter-for-factory"
---

**MPPT allocation across multiple roofs follows one order: first by module type and string length, then by shade, then by orientation and tilt, and only then by whichever inverter is nearest.** Module type and string length are hard rules, because breaking them costs real power or breaks the design. Shade and orientation are softer. In our illustrative model, a pair of identical strings facing different ways lost under 1% of power on one tracker. Strings of 16 and 14 modules lost 3.5%, and a shaded string cost up to 18% (details below).

This post is about the allocation step for a factory with several sheds. The inverter count and unit size are a separate choice, covered in [how many inverters a rooftop needs](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/). Why a second tracker helps at all is in [dual versus single MPPT](/blog/dual-mppt-vs-single-mppt/), and the voltage arithmetic for one string is in the [string sizing worksheet](/blog/solar-string-sizing-ocp-india/).

Here the question is what to do when sheds A, B, C and D each want something different from the same inverter. Ceramic units and malls with stepped roofs face the same problem.

Short version:

| Question | Short answer |
| --- | --- |
| Can two module types share one MPPT? | No. Give each its own input. |
| Can strings of different length share one MPPT? | No. Modelled loss runs from 1% to 11%, and a short string can end up carrying reverse current. |
| Can a shaded string share with a clear one? | Avoid it. The loss depends on the shadow, and the tracker can settle on the wrong peak. |
| Can east and west strings share one MPPT? | Yes, if everything else matches and you are short of inputs. Cost and conditions below. |
| What decides how many strings fit one MPPT? | The input current printed on the datasheet, not only the string count printed beside it. |
| When does a shed get its own inverter? | When its group count, cable run or metering point outgrows the shared unit. Table at the end. |

## What happens when strings of different kinds share a tracker

One MPPT holds one operating voltage for everything wired to it. Strings in parallel are forced to the same voltage, and each string's current is whatever its own I-V curve gives at that voltage. Two things then decide the cost: how far apart the strings' own best voltages are, and whether the combined P-V curve has more than one peak.

We modelled it so the numbers are not folklore. The model is a single-diode module fitted to an illustrative 600 Wp module (Voc 49.5 V, Vmp 41.5 V, Isc 15.4 A, Imp 14.5 A) with 78 cells and three bypass substrings, at 25 degrees C cell temperature, with an ideal tracker that finds the global maximum. Each case compares two strings of the stated kind on one input against the same two strings on separate inputs. It is a snapshot of instantaneous power, not annual energy, and not a measurement of any product. Treat it as illustrative.

| Case, two strings on one tracker | What differs | Power lost against separate trackers |
| --- | --- | --- |
| Both 16 modules | Irradiance 1000 against 800 W per sq m | 0.0% |
| Both 16 modules | Irradiance 1000 against 600 W per sq m | 0.04% |
| Both 16 modules | Irradiance 1000 against 200 W per sq m | 0.6% |
| 16 and 15 modules | String length | 0.95% |
| 16 and 18 modules | String length | 2.8% |
| 16 and 14 modules | String length | 3.5% |
| 16 and 12 modules | String length | 10.9% |
| 16 modules each | One substring of one module shaded to 200 W per sq m | 0.1% |
| 16 modules each | Three modules in one string at 200 W per sq m | 7.5% |
| 16 modules each | One substring of every module in one string at 200 W per sq m (a shadow along a row edge) | 18.0% |

Three readings follow from the table.

**A difference in irradiance alone costs little.** A module's best voltage moves only slightly with irradiance, so two matched strings in different light still agree on a voltage. This is why an east and a west string can share a tracker at small penalty, and why the loss for orientation depends on string voltage matching rather than on how different the angles are.

**A difference in voltage costs a lot.** A 12 module string has a hot open-circuit voltage of about 532 V on this module. The 16 module string next to it operates near 595 V when hot. The short string is held above its own open-circuit voltage, so it produces nothing and is pushed into reverse current. That is why unequal lengths belong on separate inputs.

**Shade costs most, and it can trap the tracker.** In the three-module case the combined curve has two peaks, at 554 V (16.0 kW) and 670 V (11.7 kW). A tracker that settles on the second peak delivers about a third less than separate trackers would (17.3 kW). In the row-edge shadow case the peaks are 450 V (13.0 kW) and 670 V (11.6 kW). Whether a particular inverter's scan finds the higher peak depends on its algorithm, which no datasheet in this post prints. Keep shaded strings off shared inputs and the question does not arise.

Two published sources frame the same rules. SMA's planning documentation, on what it calls polystring operation, allows strings of different orientation in parallel on one tracker. The conditions are the same number of modules in series, the same technology and the same MPP voltage for strings in parallel, and one orientation for every module within a string. It recommends one module type per tracker. It also points to a specialist article on the mismatch trade-off, which we could not open, so we use no figure from it.

The PVsyst help page on power sharing gives two ways to spread mixed orientations over inputs: one orientation per set of inputs to minimise mismatch, or both orientations on each input. It quantifies neither. Neither source gives a loss percentage, which is why the table above is our own arithmetic. Check your inverter maker's own conditions, because they govern the warranty conversation, not this post.

## MPPT allocation rules for multiple roofs: hard and soft

Hard rules first. Break one and the design is wrong, not merely less efficient.

1. **One module model per input.** Different Vmp and Isc pull the tracker between two optima.
2. **One string length per input.** Equal module count, so equal voltage at every temperature.
3. **Current within the printed input rating.** Strings in parallel add current. Sum the Imp of every string on the input and compare it to the datasheet's maximum DC input current. Compare the sum of Isc as well, and if the sheet prints no short-circuit rating, ask for it in writing.
4. **Voltage inside the window.** Cold Voc under the maximum DC voltage, hot Vmp above the bottom of the MPPT window, with the start-up voltage cleared on a dull morning. The method is in the [string sizing worksheet](/blog/solar-string-sizing-ocp-india/).
5. **No more strings than the input accepts.** The Qbits sheets print a maximum strings per MPPT beside the current row. The sheet does not say whether that is a connector limit or a current limit, so apply both.

Soft rules next. Break them knowingly and only when you are short of inputs.

6. **Keep shaded strings off shared inputs.** Give a shaded string its own, or move it to a unit where an input is spare.
7. **One orientation and tilt per input.** Relax this first, because the modelled cost is smallest, and relax it only for strings that satisfy rules 1 to 5.
8. **Keep each input's strings on the same shed where you can.** It keeps cables short and makes a fault easy to find.

## Worked example: a four-shed factory

This is illustrative, not a real plant. The module is the 600 Wp class used above. Design extremes are 5 degrees C cold and 65 degrees C hot cell temperature, with a temperature coefficient of minus 0.26% per degree C on both voltages. Array area counts each module as 2.6 sq m.

| Shed | Roof | Tilt | Azimuth | Modules | Strings | Array area | DC |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | Main bay, one plane | 10 degrees | South, 180 | 110 | 6 of 16 and 1 of 14 | 286 sq m | 66.0 kWp |
| B | Saw-tooth, south-facing slopes | 25 degrees | South, 180 | 112 | 7 of 16 | 291 sq m | 67.2 kWp |
| C | East-west gable pair | 10 degrees each | East 90, west 270 | 64 | 2 east and 2 west, of 16 | 166 sq m | 38.4 kWp |
| D | Low bay beside a taller block | 10 degrees | South, 180 | 48 | 3 of 16, one shaded in the afternoon | 125 sq m | 28.8 kWp |
| Total | | | | 334 | 21 | 868 sq m | 200.4 kWp |

**String voltages.** A string of 16 reads 833 V at cold Voc and 595 V at hot Vmp. The short string of 14 reads 729 V and 521 V. Both clear the 200 V bottom of the window and stay under 1100 V. The longest string the 1100 V ceiling allows on this module is 21 modules, at 1,094 V.

**The inverter.** The Qbits QB-70/75/80/90/100/110KTLC-Pro datasheet, read on 30 October 2026, prints two MPPT counts in two merged cells: 6 for the 70 and 75 kW models and 8 for the 80 to 110 kW models. The printed 8 sits off-centre in its cell, under the 90 to 110 kW columns, so confirm the MPPT count of an 80 kW unit in writing. The 90 kW unit used below has 8 either way. It prints a maximum of 2 strings per MPPT, a 200 to 1000 V MPPT range, 1100 V maximum DC and 180 V starting voltage. The 90 kW column prints 135 kW maximum DC input power and 144 A maximum output current. The sheet prints no short-circuit current per MPPT and no string-monitoring row.

Its maximum DC input current row is the line that matters most. For the 8-MPPT models it prints 40/40/20/20/40/40/20/20 A, and for the 6-MPPT models 40/40/20/40/40/20 A. The row is labelled maximum DC input current, and on every Qbits sheet we compared the number of values equals the number of MPPTs (40/40/20A for the 3-MPPT 33 to 40 kW sheet, 40/40A for the 2-MPPT 30 kW model). So each value is one MPPT's rating, and we read them as MPPT 1, 2, 3 and so on in order. The sheet does not say which physical terminal is which, so confirm in writing which terminals carry 40 A and which carry 20 A before you wire.

That current row changes the arithmetic. Two strings of this module draw 29.0 A at Imp and 30.8 A at Isc, which a 40 A input carries and a 20 A input does not. One string draws 14.5 A and 15.4 A, which a 20 A input carries. So on this module a 20 A input is a one-string input, whatever the "2 strings per MPPT" line says.

**Counting inputs.** Group the strings by the hard rules, then by the soft ones:

| Group | Strings | Needs |
| --- | --- | --- |
| South 10 degrees, 16 modules (A six, D two clear) | 8 | 4 pairs |
| South 10 degrees, 14 modules (A) | 1 | 1 single |
| South 25 degrees (B) | 7 | 3 pairs and 1 single |
| East 10 degrees (C) | 2 | 1 pair |
| West 10 degrees (C) | 2 | 1 pair |
| South 10 degrees, shaded (D) | 1 | 1 single |

That is nine pairs and three singles. An 8-MPPT unit has four 40 A inputs (MPPT 1, 2, 5 and 6 in the printed order), so one unit cannot carry this plant at all: at this module it takes 12 strings against 21 needed. Two units have eight 40 A inputs between them, one short of nine pairs. The ninth pair has to split into two singles on two 20 A inputs.

**The allocation.** Unit 1 takes sheds A and D, which are next to each other. Unit 2 takes B and C. The west slope of shed C is the pair that splits, because unit 2 would otherwise need five 40 A inputs.

| Unit and input | Input rating | Strings | Group | Imp sum | Isc sum | Cold Voc | Hot Vmp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1, MPPT 1 | 40 A | A1, A2 | South 10 | 29.0 A | 30.8 A | 833 V | 595 V |
| 1, MPPT 2 | 40 A | A3, A4 | South 10 | 29.0 A | 30.8 A | 833 V | 595 V |
| 1, MPPT 3 | 20 A | A7 (14 modules) | South 10, short | 14.5 A | 15.4 A | 729 V | 521 V |
| 1, MPPT 4 | 20 A | D3 | South 10, shaded | 14.5 A | 15.4 A | 833 V | 595 V |
| 1, MPPT 5 | 40 A | A5, A6 | South 10 | 29.0 A | 30.8 A | 833 V | 595 V |
| 1, MPPT 6 | 40 A | D1, D2 | South 10 | 29.0 A | 30.8 A | 833 V | 595 V |
| 1, MPPT 7 and 8 | 20 A | Spare | | | | | |
| 2, MPPT 1 | 40 A | B1, B2 | South 25 | 29.0 A | 30.8 A | 833 V | 595 V |
| 2, MPPT 2 | 40 A | B3, B4 | South 25 | 29.0 A | 30.8 A | 833 V | 595 V |
| 2, MPPT 3 | 20 A | B7 | South 25, odd string | 14.5 A | 15.4 A | 833 V | 595 V |
| 2, MPPT 4 | 20 A | C west 1 | West 10 | 14.5 A | 15.4 A | 833 V | 595 V |
| 2, MPPT 5 | 40 A | B5, B6 | South 25 | 29.0 A | 30.8 A | 833 V | 595 V |
| 2, MPPT 6 | 40 A | C east 1, 2 | East 10 | 29.0 A | 30.8 A | 833 V | 595 V |
| 2, MPPT 7 | 20 A | C west 2 | West 10 | 14.5 A | 15.4 A | 833 V | 595 V |
| 2, MPPT 8 | 20 A | Spare | | | | | |

Every row is below its input rating on both Imp and Isc, every cold Voc is below 1100 V and every hot Vmp is well above 200 V. Thirteen of sixteen inputs are used.

**The result.** Unit 1 carries 158 modules (94.8 kWp) and unit 2 carries 176 modules (105.6 kWp), against 90 kW AC each. That is a DC to AC ratio of 1.05 on unit 1, 1.17 on unit 2 and 1.11 for the plant (200.4 kWp on 180 kW AC). Both units are inside the 135 kW maximum DC input power the sheet prints.

If the owner wants a higher ratio, the three spare 20 A inputs take one string each, 28.8 kWp more and a plant ratio of 1.27. That is headroom to price, not a recommendation, and how far to oversize is a separate decision.

If you have a shed list of your own and want the input count checked against a Qbits unit, [send it to Qbits](/contact-us/).

Notice what the example did not need. It never put east with west, never mixed shed A's short string with a full one and never put the shaded string beside a clear one. It had enough inputs to keep all three rules. The next sections cover what to do when it does not.

## Shed layouts that change the allocation

**North-south saw-tooth roofs.** Each tooth has a sloping face and a steep or glazed face. Put modules only on the face that gets the sun, and keep them as one group: same tilt, same azimuth, same string length across all the teeth on that shed, which is how shed B in the example was treated.

Check two things before you wire. First, the ridge of one tooth can shade the lowest row of the next slope when the sun is low, so run a shading study and decide whether the bottom module row goes on a string of its own or is left empty. Second, some saw-tooth roofs slope both ways. A north-facing slope is a different plane with a different, weaker profile, so it needs its own input or no modules.

**East-west gable pairs.** Treat the two slopes as two groups when you have inputs to spare, as unit 2 did with shed C. When you do not, east and west strings of equal length and one module model can share an input, with the modelled cost in the first table and the maker's conditions to confirm.

The two slopes do not peak at the same hour, so the summed current of a mixed pair is usually below the sum of both strings' Imp. Do not use that to overload an input. The datasheet rating is what the input is rated to carry, and we have not modelled the hours when both slopes are bright. The [east-west roof design guide](/blog/east-west-roof-solar-design/) covers the yield side.

**Shade from adjacent sheds and ventilators.** Map each shadow by season and hour. A shadow that crosses one module's corner behaves like the 0.1% case. A shadow that runs along the edge of a row, which is what a taller neighbouring wall or a line of ridge ventilators casts, behaves like the 18% case, because it takes the same substring in every module of a string. Redraw the strings so that a shadow falls along the length of a string and not across it, or give the shaded string its own input. The [shadow effect guide](/blog/solar-panel-shadow-effect-generation/) explains the bypass-diode behaviour behind the table.

**Uneven string counts.** Seven strings of the same kind do not split into pairs. You have four ways out:

| Option | Inputs used | Cost |
| --- | --- | --- |
| 3 pairs and 1 single (used for shed B) | 4 | Needs one 20 A input or an input with only one string connected |
| 2 pairs and 3 singles | 5 | Uses scarce 40 A inputs less, uses more inputs |
| Pair the odd string with a matching group from another shed | 4 | Only if tilt, azimuth, module and length match and the cable run is acceptable |
| Redesign to 6 or 8 strings | 3 or 4 | Costs or adds 9.6 kWp on this module |

The odd short string, such as shed A's 14 modules, is not the same problem. It cannot pair with a 16-module string at all, and it needs its own input however many strings there are.

## DC combiner or direct input

On the Qbits sheet, each input takes up to two strings, so a combiner box is not needed to fit two strings. A combiner earns its place for a different reason: to carry several strings of one group down a single shared cable from a remote shed, where a pair of long string cables would cost more. In that case the combined current must still stay inside the rating of the one input it lands on, so a combiner does not raise the limit.

Whether the connector or the current is the limit behind "2 strings per MPPT" is not stated on the sheet, so ask. Fusing and disconnect requirements for a combiner are a protection-design matter for the project and its inspector, not something this post settles.

## Cable runs differ per shed

Shed C might sit 150 m from the electrical room while shed A sits 30 m away. String cables are paid for in generation as well as copper. At 14.5 A on a 16 module string, a two-way run in 6 sq mm copper at 70 degrees C loses the following share of the string's 9.6 kWp rating (a calculation from copper resistivity of 0.01724 ohm sq mm per m at 20 degrees C and a rise of 0.393% per degree C, not a datasheet figure):

| One-way run | 6 sq mm | 10 sq mm |
| --- | --- | --- |
| 30 m | 0.45% | 0.27% |
| 80 m | 1.20% | 0.72% |
| 150 m | 2.26% | 1.36% |

A 2.3% loss on one run is a design decision, not a rounding error. Upsizing the cable is the cheapest fix. If the run is still long, a unit at the shed turns long DC runs into one AC run, whose sizing is covered in [AC cable sizing from inverter to ACDB](/blog/solar-ac-cable-sizing-inverter-to-acdb/). Draw both before you choose.

## Monitoring granularity follows the allocation

The inverter measures per MPPT, not per string, and the Qbits sheets we read print no string-level row. Whether the app shows per-MPPT current is not printed either, so confirm it. Allocation therefore sets how finely a fault shows.

Two strings on one input look like one reading, so a dead string reads as half the current of a sibling input, and only if a sibling input of the same group exists. Four identical pairs like unit 1's first four inputs compare against each other. A single on its own input, like the shaded string D3, compares only against a model. If an O&M contract depends on string-level data, say so at specification time and price a monitoring device or smart combiner for it. A mixed east-west pair is hardest to read: both strings and both orientations sit in one number.

## When to give up an input and use a separate inverter

Allocating by MPPT is cheaper until one of the following is true. Then give the shed its own inverter.

| Condition | Why it breaks sharing | Next step |
| --- | --- | --- |
| The shed is far, and DC loss at a sensible cable size is high | 150 m runs lose 1.4% to 2.3% in the table above | Put a unit at the shed and run one AC cable |
| The shed's groups use more inputs than the unit has left | Mixed groups cost 1% to 18% | Add a small unit for that shed |
| The shed has a separate meter or sanctioned supply | Metering and the DISCOM connection decide, not the DC design | Own inverter on that connection |
| The shed's module type or string length differs from the rest | Rules 1 and 2 are hard | Own inverter if the group is large enough to justify one |
| The shed will expand later and needs its own capacity | Spare inputs run out | Plan a unit sized for the future load |
| You want a fault on one shed not to take the others offline | One trip takes every shed on the unit | Own inverter, at the price of more units |

The example shows one version of this. Shed C's four strings are 38.4 kWp, and the QB-20/23/25/28/30KTLC sheet covers them. For the 30 kW model it prints 2 MPPTs, 2 strings per MPPT and 45 kW maximum DC input power. East pair on one tracker, west pair on the other, each 29.0 A.

The sheet prints "40/40A" for the 30 kW column and no short-circuit rating, and the [20 to 30 kW comparison](/blog/best-twenty-to-thirty-kw-on-grid-inverter-small-factories/) explains how that reading was made. That unit would run at a DC to AC ratio of 1.28 (38.4 kWp on 30 kW) and it takes four strings off unit 2, so rerun the allocation before you adopt it. On plants of several megawatts the same question becomes a choice of architecture, which the [string vs central inverter](/blog/string-vs-central-inverter-india/) post works through.

## Decision table

| Situation | Allocation |
| --- | --- |
| Same module, same length, same orientation and tilt, no shade | Parallel on one input, up to the current rating |
| Same module and length, east and west, short of inputs | One east and one west string on an input is acceptable, with the loss and the maker's conditions checked |
| Same module and length, different tilt, same azimuth | Judged like east and west from the irradiance rows (tilt itself was not modelled): acceptable if short of inputs, separate if not |
| Different string lengths | Separate inputs |
| Different module models | Separate inputs |
| One shaded string among clear ones | Separate input for the shaded string |
| Shadow along the edge of a row | Redraw strings along the shadow or give them separate inputs |
| Odd number of identical strings | Pairs plus one single, or redesign the count |
| Input current would exceed the printed rating | Fewer strings per input |
| Group is far from the inverter | Upsize cable, or a unit at the shed |

## What this post could not check

The mismatch table comes from our own single-diode model, run for one illustrative module at 25 degrees C cell temperature with an ideal tracker. It is not annual energy and not a measurement of any product, and a real tracker may sit on a lower peak than the model's global maximum. We could not open SMA's specialist article on polystring mismatch, so we cite no figure from it. We did not model temperature differences between roof slopes or tilt differences.

The Qbits current rows are read as one value per MPPT in order, but the sheets do not say which physical terminal is which. No short-circuit current per MPPT, string monitoring row or maker's rule on mixed orientations is printed on the sheets we read, so ask for them in writing. We did not review DISCOM limits, sanctioned load or CEIG requirements for your site; the [inverter count guide](/blog/how-many-inverters-for-hundred-kw-to-one-mw-rooftop/) links to the posts that cover them.

## Your next step

List your sheds with tilt, azimuth, module model, string length, shade and cable run, and group them by the hard rules. Count the pairs and singles each group needs. Then check that count against the input rating row of each inverter you are considering, as well as its MPPT count.

If you want that allocation checked against a Qbits unit, [send the shed list to Qbits](/contact-us/). Quotes are per model and quantity. The unit used in the worked example is the [QB-70/75/80/90/100/110KTLC-Pro](/our-products/QB-70-110KTLC-Pro/).
