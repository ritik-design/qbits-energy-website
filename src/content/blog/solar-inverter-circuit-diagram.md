---
title: 'Solar Inverter Circuit Diagram Explained: From DC Strings to AC Grid'
excerpt: 'A solar inverter circuit diagram at both levels: the array-to-grid single line diagram, the MPPT and IGBT stages inside, and the protection circuits.'
description: 'Read a solar inverter circuit diagram at both levels. The array-to-meter single line diagram, the internal MPPT boost and IGBT bridge signal path, transformer and transformerless topology, and the protection circuits that trip on Indian grids.'
category: Technical
date: 2026-07-23
updatedDate: 2026-09-24
readTime: 13 min
image: /blog-images/solar-inverter-circuit-diagram.svg
author: Keyur Rakholiya
keywords:
- solar inverter circuit diagram
- string inverter circuit
- inverter block diagram
- mppt boost converter
- igbt h-bridge inverter
- dc link capacitor
- solar single line diagram
- transformerless inverter topology
faqs:
- q: "Is a solar inverter circuit diagram the same as a home solar wiring diagram?"
  a: "No. They are different drawings. A wiring diagram shows physical conductors, terminals, sizes, and routes for one installation. A circuit diagram is functional. At system level it is the single line diagram from array to grid, and at component level it is the power electronics topology inside the box. A DISCOM application needs the single line diagram, not the internal topology."
- q: "What order do the blocks go in inside a string inverter?"
  a: "The DC side comes first, with input terminals plus voltage and current sensing, then an input filter, then the MPPT converter stage. Energy buffers in the DC link capacitor. The switching bridge chops that DC into a pulse train, the output filter turns the pulse train into a sine wave, and the grid relay connects the filtered output to the AC terminals. A control board watches every stage and drives the gates."
- q: "What does the MPPT circuit actually do in the diagram?"
  a: "It is a DC to DC converter with a control loop, not a sensor. The converter changes its switching duty cycle, which changes the voltage the array is held at. The loop measures array voltage and current, multiplies them to get power, and keeps stepping in whichever direction raised power. That is why the array operating voltage drifts all day instead of sitting at one fixed value."
- q: "Does a transformerless inverter still have ground fault protection?"
  a: "Yes, but a different kind. With no transformer there is no galvanic isolation between array and grid, so a simple ground fault detector and interrupter is not sufficient. IEC 62109-2 requires a residual current monitoring unit that watches total residual current and also reacts to sudden step changes in it, with shorter trip times as the step grows. Confirm the exact values against the current edition."
- q: "How many switching devices does a three-phase inverter stage need?"
  a: "A standard two-level three-phase bridge uses six controlled switches, arranged as three half-bridge legs of two devices each. A single-phase H-bridge uses four, in two legs. Multi-level topologies use more devices per leg to produce a cleaner waveform. The device count has nothing to do with how many MPPT inputs the model offers."
- q: "Can I repair an inverter using a circuit diagram from the internet?"
  a: "No. A generic topology diagram is a teaching aid, not a service schematic. It carries no component values, no board layout, no test point references, and no discharge procedure. DC link capacitors and PV conductors can hold hazardous energy after shutdown. Board-level work belongs to a qualified technician working from the manufacturer's own service documentation."
- q: "Which standards govern the protection circuits drawn in the diagram?"
  a: "Several apply together. IEC 62109-1 and IEC 62109-2 cover safety of power converters used in photovoltaic systems, including residual current monitoring. IEC 62116, adopted in India as IS 16169, defines the anti-islanding test procedure. IS 17387 covers inverter grid interconnection in India. Read the actual settings from the model manual and the applicable DISCOM interconnection conditions."
- q: "Does the number of MPPTs tell me how many strings I can connect?"
  a: "Not by itself. The MPPT count tells you how many independent tracking inputs exist. The limit on strings comes from the maximum input current per MPPT and the maximum DC voltage. A dual-MPPT model rated 20 A per input will not accept two parallel strings on one input if their combined short-circuit current exceeds that figure. Read both numbers off the datasheet."
- q: "Why does the single line diagram show isolators on both the DC and AC side?"
  a: "Because both sides must be capable of being made safe independently. A DC isolator separates the array from the inverter while the grid supply is still live. An AC isolator separates the inverter from the distribution board and the grid. Maintenance, fault finding, and emergency access all depend on having both present and correctly placed."
featured: false
seoTitle: 'Solar Inverter Circuit Diagram: SLD and Internal Topology'
relatedSlugs:
- solar-inverter-wiring-diagram
- inverter-battery-connection-diagram
- solar-inverter-error-codes-guide
- how-to-read-solar-inverter-datasheets
- solar-inverter-components
---

Two very different drawings answer to the name solar inverter circuit diagram. Installers and DISCOM officials mean the system single line diagram, the one-line path from array to meter. Engineers and students mean the power electronics inside the box.

Most explanations pick one and drop the other, and that gap causes problems on site. Somebody who has studied an H-bridge schematic still cannot commission a rooftop system. Somebody who has studied a wiring layout still cannot explain why the inverter trips at 11 am. Neither drawing is a service schematic, though plenty of topology diagrams circulate as if they were.

This guide covers both. It walks the single line diagram block by block, then follows the internal signal path from the DC terminals to the grid relay. It covers what the maximum power point tracker computes and what changes when a transformer is present. It covers how a three-phase output stage differs, and which protection circuit catches which fault. It ends with a worked string calculation and the misreadings that become wiring errors. For the project connection layout, use the [complete-system wiring guide](/blog/solar-inverter-wiring-diagram/).

> **TL;DR**
> - The single line diagram runs array, DC isolator, DC surge protection, inverter, AC isolator, distribution board, meter, grid.
> - The internal order is fixed: DC input and sensing, MPPT converter, DC link capacitor, switching bridge, output filter, grid relay.
> - Perturb and observe tracking steps the converter duty cycle, measures array power, and keeps the direction that raised it.
> - A transformerless inverter has no galvanic isolation, so IEC 62109-2 requires residual current monitoring instead of a ground fault interrupter.
> - A two-level three-phase bridge needs six controlled switches. A single-phase H-bridge needs four.
> - IEC 62116, adopted in India as IS 16169, defines the anti-islanding test. IS 17387 covers inverter grid interconnection.
> - MPPT count is a count of tracking inputs, not devices. The QB 4/5/6 KTLD is dual-MPPT, rated 20 A input per MPPT, according to the Qbits product specification.

**Short version.** A solar inverter circuit diagram exists at two levels. The system single line diagram runs array, DC isolator, surge protection, inverter, AC isolator, distribution board, meter, and grid. The internal diagram runs DC input and sensing, MPPT boost converter, DC link capacitor, IGBT bridge, output filter, and grid relay. Protection circuits sit across both levels. Read numeric settings from the model manual.

## The system single line diagram, block by block

A rooftop [single line diagram](/glossary/single-line-diagram/) is usually eight to eleven blocks. It is deliberately simple. One line stands for a whole circuit, so a DISCOM engineer or safety inspector can check the isolation, protection, and metering sequence without counting conductors.

| Order | Block | Why it is in the drawing |
| --- | --- | --- |
| 1 | PV array in strings | Sets the maximum DC voltage |
| 2 | String fuses or combiner box | Stops reverse current between parallel strings |
| 3 | DC isolator | Separates the inverter with the array in sunlight |
| 4 | DC surge protection device | Diverts transients before the input stage |
| 5 | Inverter | Where DC-side and AC-side rules meet |
| 6 | AC isolator | Maintenance and DISCOM access |
| 7 | Distribution board protection | Overcurrent and residual current protection |
| 8 | AC surge protection device | Clamps transients from the grid side |
| 9 | Bidirectional or net meter | Records import and export separately |
| 10 | Grid service connection | Sets phase configuration and fault level |
| 11 | Earthing and bonding | Makes the other protection work at all |

Read the sequence, not the boxes. Isolation always sits between a source and the equipment it feeds. A [surge protection device](/glossary/spd/) always sits on the equipment side of an isolator, so it stays connected when the circuit is live. Drawn on the wrong side, it is useless.

## Inside the inverter: the DC to AC signal path in order

The internal order barely varies between string inverters. Energy moves forward through the stages while the control board watches all of them. Follow the path once and error codes start making sense. Most codes name the stage that detected the problem, not the stage that caused it.

1. **DC input terminals and sensing.** Transducers read voltage and current per MPPT input, feeding tracking, insulation checks, and input limit protection.
2. **Input filter and blocking.** Keeps switching noise out of the array wiring and stops current flowing back into a shaded string.
3. **MPPT converter stage.** Usually a boost converter: inductor, controlled switch, diode. It raises array voltage to what the DC link needs, and so sets the voltage the array is held at.
4. **DC link capacitor.** A bulk bank holds the intermediate voltage steady and absorbs the pulsating demand of the AC side. It also stores hazardous energy after shutdown.
5. **Switching bridge.** Insulated gate bipolar transistors in an H-bridge for single-phase, or three legs for three-phase. Gate signals chop the DC link into a pulse width modulated train whose average follows a sine reference. Qbits markets this stage under the phrase German IGBT Technology and names no device supplier.
6. **Output filter.** An inductor and capacitor network, often LCL. It strips the switching frequency and leaves the sine wave, which keeps harmonic distortion inside limits.
7. **Grid relay.** A contactor between filtered output and AC terminals. Opening it is how the inverter disconnects, so every protection decision ends here.
8. **Control and gate drive.** Builds the sine reference, synchronises to the grid waveform, runs protection logic.

Power flows from stage 1 to stage 7, but stage 8 can stop any of it. A hybrid model adds a bidirectional battery converter on the DC link and a separate backup contactor. That is why hybrid diagrams look busier without changing the path.

## What the MPPT circuit does, and how perturb and observe tracking works

A maximum power point tracker is a DC to DC converter plus a search algorithm, not a sensor. The converter duty cycle sets the array operating voltage, and the algorithm hunts for the voltage yielding the most power. Irradiance and cell temperature move all day, so the answer moves and the search never stops.

Perturb and observe, also called hill climbing, is the classic method:

1. Measure array voltage and current, and multiply them to get present power.
2. Change the duty cycle by a small step in one direction.
3. Measure power again and compare against the previous value.
4. If power rose, step again the same way. If it fell, reverse direction.

That explains something people misread in live data. Array voltage oscillates in a narrow band rather than sitting still, and the oscillation is the search, not a fault. A large step finds the peak faster but wastes more energy hunting around it, so firmware varies the step size.

Partial shading is the known weakness. It can create more than one local power peak, and a simple hill climb can settle on the wrong one. That is the reason for [independent MPPT inputs](/blog/dual-mppt-vs-single-mppt/). Qbits publishes single-phase on-grid models from single-MPPT units up to the dual-MPPT QB 4/5/6 KTLD. That model is rated 20 A input per MPPT. Its tracking window is 80 V to 550 V, with 550 V maximum DC, according to the Qbits product specification.

## Transformer versus transformerless topology, and the isolation consequence

This is the biggest branch in inverter topology, and the consequence is isolation rather than efficiency. A transformer puts a magnetic barrier between array and grid, so no conductive path exists between them. A [transformerless inverter](/blog/transformerless-vs-transformer-inverter/) removes that barrier, which changes what the protection circuits must do.

| Aspect | With transformer | Transformerless |
| --- | --- | --- |
| Galvanic isolation | Present | Absent |
| Weight and volume | Higher | Lower |
| Conversion losses | Extra magnetic and copper loss | No transformer loss |
| Earth fault method | Ground fault interrupter workable | Residual current monitoring per IEC 62109-2 |
| Array earthing | One pole earthed in some designs | Array floats relative to earth |
| Leakage sensitivity | Lower | Sensitive to module capacitance and damp |

The tradeoff is usually framed as efficiency against safety. That framing is wrong. A transformerless design is not less safe, it is differently protected, with the magnetic barrier replaced by continuous monitoring of insulation resistance and residual current. What actually suffers is tolerance for poor installation. Wet conduit or a badly bonded frame produces leakage that a transformerless inverter detects and refuses to start against. An isolated design may run straight through the same defect. The fault is real in both cases. Only one topology tells you.

## Single-phase and three-phase output stages are not the same circuit

The output stage changes with the phase configuration, and so does the waveform. A single-phase inverter feeds one live conductor and neutral. A three-phase inverter feeds three live conductors at 120 degrees apart. Device count, DC link stress, and filter design all follow from that.

| Parameter | Single-phase stage | Three-phase stage |
| --- | --- | --- |
| Bridge arrangement | H-bridge, two legs | Three legs, one per phase |
| Controlled switches, two-level | 4 | 6 |
| Instantaneous output power | Pulsates at twice line frequency | Constant across three phases |
| DC link capacitance | Larger, to absorb the pulsation | Smaller for the same rating |
| Typical service | Residential | Commercial and industrial |

The DC link row is the one designers care about. Single-phase power pulsates, so the capacitor bank rides through every half cycle and those designs carry proportionally more capacitance. That is one reason larger ratings are almost always three-phase. The [phase comparison guide](/blog/single-vs-3-phase-inverter/) covers selection. Qbits publishes single-phase on-grid models in the TLS and TLD series and three-phase models in the TLC series, listed on the [on-grid inverter page](/on-grid-inverter/).

## The protection circuits and the fault each one catches

Protection is where a block diagram earns its keep during troubleshooting. Each function watches one class of fault and has one action available: open the grid relay, or refuse to close it. Knowing which circuit watches what turns a vague fault display into a short list.

| Protection function | What it detects | Reference standard |
| --- | --- | --- |
| Anti-islanding | Grid supply lost while exporting | IEC 62116, in India IS 16169 |
| Insulation resistance check | Low array-to-earth resistance | IEC 62109-1 and 62109-2 |
| Residual current monitoring | Standing and step residual current | IEC 62109-2 |
| Over and under voltage trip | Grid voltage outside the window | IS 17387, DISCOM conditions |
| Over and under frequency trip | Grid frequency outside the window | IS 17387, CEA standards |
| DC injection limit | DC component in the AC output | IEC 61727 and IS 17387 |
| Surge protection | Lightning and switching transients | IEC 62109-1, wiring codes |
| Over temperature derating | Heatsink and ambient temperature | Model specification |

[Anti-islanding](/blog/anti-islanding-protection-solar-inverters/) carries the life safety purpose. If DISCOM supply disappears while a lineman is working, an inverter that keeps energising the feeder creates an unexpected live circuit.

Residual current monitoring surprises installers. IEC 62109-2 requires the unit to react to sudden step increases in residual current, not only a standing value. Trip time shortens as the step grows. So a marginal earth fault can pass a start-up check and still trip hours later when humidity rises. The [ground fault guide](/blog/solar-inverter-ground-fault-guide/) sets out the diagnostic sequence.

## Why Indian grid conditions drive the protection settings

The circuit is the same worldwide. The settings are not. Indian low voltage distribution delivers a wider voltage spread and larger frequency excursions than the grids many inverter platforms were originally tuned for. The trip windows, and the ride-through behaviour between them, have to match that.

Two documents govern the numbers. The Central Electricity Authority publishes the Technical Standards for Connectivity of the Distributed Generation Resources Regulations, and IS 17387 covers inverter grid interconnection in India. Those two, the DISCOM conditions, and the model manual are the only valid sources for a setting.

The hardware side shows up in a published specification. The Qbits QB 4.2/4.6/5/5.4/6KTLS single-phase family lists a 90 Vac to 290 Vac adjustable grid range, according to the Qbits product specification. The acceptance window is a firmware parameter, not a fixed circuit property. Two rules follow.

1. A wide adjustable range is a capability, not a licence. The commissioned setting must stay inside what the CEA regulation, IS 17387, and the DISCOM allow.
2. Widening a trip window to stop nuisance tripping hides the cause. Repeated noon overvoltage trips usually mean a weak feeder, a long AC cable, or a loose connection.

The [India grid tuning guide](/blog/tuning-inverters-indian-grid/) works through that diagnosis. The TLS, TLD, and TLC on-grid series are specified as IP66 enclosures, according to the Qbits product specification, and IP ratings are defined by IEC 60529.

## How to read a manufacturer single line diagram before an installation

A manufacturer diagram is a design input, not decoration. Read it in a fixed order and it tells you what to buy and what to check. Skip the order and you find the gap after the cable is cut. Work through these steps with the datasheet open.

1. **Identify the exact model, not the family.** One series name covers several ratings with different voltage windows and current limits.
2. **Find the maximum DC input voltage.** An absolute damage threshold, not a trip point.
3. **Find the MPPT tracking window separately.** It is narrower. A string below the tracking floor produces nothing.
4. **Count MPPT inputs and read the current limit per input.** Both constrain how strings are grouped.
5. **Check phase configuration and nominal AC voltage,** including the neutral arrangement.
6. **Locate the earthing requirement.** Confirm whether any DC pole is earthed, then follow IS 3043.
7. **List the external protection the diagram assumes.** Isolators and surge devices are often drawn but not supplied.
8. **Note the exclusions.** Cable sizing, conduit, clearances, and commissioning tests come from installation codes.

Steps 2, 3, and 4 are where money is lost, and they are arithmetic.

## Worked example: turning diagram limits into a string count

This uses published inverter limits and assumed module parameters. It is arithmetic, not field data. Substitute real module values before designing anything.

**Inverter limits.** QB 4/5/6 KTLD, single-phase on-grid, dual-MPPT. Tracking window 80 V to 550 V, 550 V maximum DC, 20 A input per MPPT, according to the Qbits product specification.

**Assumed module, for illustration only.** Open circuit voltage at standard test conditions 41.5 V. Temperature coefficient of open circuit voltage minus 0.27% per degree Celsius. Short circuit current 13.8 A.

**Step 1. Correct open circuit voltage to the coldest expected cell temperature.** Standard test conditions define cell temperature as 25 degrees Celsius. Take a coldest expected cell temperature of 0 degrees Celsius, a drop of 25 degrees.

Voltage rise = 25 × 0.27% = 6.75%

Corrected open circuit voltage = 41.5 × 1.0675 = 44.3 V per module

**Step 2. Divide by the maximum DC voltage.**

550 ÷ 44.3 = 12.4 modules

Round down. Maximum series count is 12 modules. Rounding up to 13 gives 576 V, which breaches the 550 V limit on a cold morning and can damage the input stage.

**Step 3. Check the tracking floor when hot.** String voltage falls as cells heat up. A 12 module string still clears the 80 V tracking floor at peak summer cell temperature. On very short strings this check binds first.

**Step 4. Check current per MPPT input.** One string at 13.8 A short circuit current sits under the 20 A limit. Two strings in parallel on one input give 27.6 A, which exceeds it. So this model takes one string per MPPT with this module, giving two strings, not four.

Step 4 is what people get wrong from the diagram alone. Two MPPT symbols look like an invitation to parallel strings, and the current limit says otherwise. Run real module data through the [string sizing calculator](/string-sizing-calculator/) before committing to a layout.

## Six misreadings that cause real wiring errors

Most circuit diagram mistakes are not arithmetic. They are misreadings of what a symbol promises. These six recur, and each produces a physical error on site.

1. **Treating the tracking window as the voltage limit.** Size against the damage threshold on the coldest morning, then check normal operation sits inside the tracking window.
2. **Reading MPPT count as string capacity.** Two inputs do not mean four strings. Maximum input current per MPPT decides that.
3. **Assuming the diagram supplies the protection it draws.** Isolators, surge devices, fuses, and earthing are site-supplied items drawn for completeness.
4. **Putting surge protection on the wrong side of an isolator.** A device that disconnects when the isolator opens protects nothing during maintenance.
5. **Treating a nameplate rating as continuous output.** Output derates with heatsink temperature, and clipping limits the AC side when the array is oversized. Both are normal.
6. **Assuming any internal diagram is a service schematic.** It has no component values, no test points, and no discharge sequence.

The contrarian point across all six: a good circuit diagram is mostly a list of constraints, not a picture of a machine. Read it for the limits it imposes.

## The Bottom Line

A solar inverter circuit diagram is two drawings with one name. The single line diagram proves the isolation, protection, and metering sequence from array to grid. The internal topology diagram explains why an inverter behaves as it does on a given roof. Neither is a repair manual, and protection circuits are standardised in intent but local in setting.

- Before ordering cable, read the maximum DC voltage, tracking window, MPPT count, and current limit per MPPT off the exact model datasheet. Then run the cold-morning string calculation.
- Before commissioning, confirm voltage and frequency settings against the CEA regulation, IS 17387, and the DISCOM conditions, and record them in the commissioning document.
- For the single line diagram on a specific Qbits rating, [contact the Qbits technical team](/contact-us/) with your site phase configuration and array layout.
