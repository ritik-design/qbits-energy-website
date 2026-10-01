---
title: "Solar Inverter Components: What Each Part Does and How It Fails"
excerpt: "Solar inverter components explained part by part: what each one does, how it fails in Indian conditions, and what its quality means for the buyer."
description: "Component-level guide to solar inverter parts: SPDs, DC link capacitors, IGBTs, magnetics, cooling, the control board, the grid relay, glands and comms."
category: "Technology"
date: 2026-04-08
updatedDate: 2026-09-24
readTime: "18 min"
image: "/og/blog-solar-inverter-components.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter components
  - DC link capacitor
  - IGBT inverter
  - surge protection device
  - inverter cooling fan
  - inverter grid relay
faqs:
  - q: "Which solar inverter component fails first?"
    a: "In hot installations, the DC link electrolytic capacitors are usually the first part to degrade. They dry out slowly rather than failing suddenly, so the symptom is a gradual rise in output ripple and nuisance faults, not an instant shutdown. Fans and surge protection devices are the other two parts that wear out on a predictable clock. All three are consumables, which is why mounting location matters more than the brand sticker on the box."
  - q: "Why are capacitors the biggest driver of inverter lifespan?"
    a: "Electrolytic capacitors carry a liquid electrolyte that evaporates faster as temperature rises. A general engineering rule of thumb holds that rated endurance roughly halves for every 10°C rise above the operating point, and roughly doubles for every 10°C below it. That makes the internal temperature of the capacitor, which depends on ambient heat, mounting and airflow, the dominant variable. Two identical inverters on the same roof can differ by years purely on where they were mounted."
  - q: "Is a surge protection device a permanent part of the inverter?"
    a: "No. An SPD built around metal oxide varistors is a consumable. Every surge it clamps degrades the varistor slightly, so its clamping ability erodes over time even when nothing visibly fails. Good SPDs have a status window or a remote signalling contact so the degraded state is visible during maintenance. Treat SPD inspection as a scheduled task, not a one-time install item."
  - q: "What makes an inverter a write-off instead of a repair?"
    a: "Damage to the power stage is normally what ends a unit. A shorted switching module usually takes the gate drive circuitry and often the control board with it, so the repair approaches the cost of a replacement unit. Fans, external SPD cartridges, communication dongles and sometimes the display are field replaceable. Anything potted, heatsink bonded or integrated into a single main board is a factory job at best."
  - q: "Does an IP66 rating mean the inverter cannot let water in?"
    a: "It means the enclosure passed a dust and water jet test as a sealed assembly in a laboratory. It says nothing about how the unit was installed. Most real ingress happens at cable glands that were not torqued onto a cable within their clamping range, at unused gland holes left open, and at conduit entries sealed with tape instead of a proper fitting. A badly fitted gland defeats an IP66 rating completely."
  - q: "How often does the grid relay inside an inverter operate?"
    a: "Once for every disconnection and reconnection event, plus its self test cycles. On a weak rural feeder with frequent voltage excursions, that can mean several operations a day. Relay and contactor datasheets publish two separate endurance figures, mechanical and electrical, and the electrical figure is far lower because arcing erodes the contacts. Ask the manufacturer for the electrical endurance count and whether the relay sits on a replaceable board."
  - q: "Do inverter firmware updates actually matter?"
    a: "Yes, because grid protection behaviour, MPPT tracking logic and fault handling all live in firmware rather than in hardware. A grid code revision or a DISCOM specific setting can often be handled by an update instead of a hardware change. The risk is that a failed update can leave a unit unusable, so updates should be done by the service channel with stable power and stable communications, not casually over a weak mobile link."
  - q: "Should I choose an inverter based on its component brand list?"
    a: "Brand lists are a weak proxy. A well known capacitor running hot in a badly ventilated enclosure will fail before a lesser known part rated for 125°C with good airflow around it. The numbers that carry information are the temperature rating, the rated endurance hours, the derating curve against ambient temperature, and the service architecture behind the unit. Ask for those, in writing, for the exact model quoted."
  - q: "What component information should a manufacturer give me?"
    a: "At minimum: the capacitor technology and temperature class in the DC link, the cooling method and whether fans are field replaceable, the SPD type and whether it is replaceable, the grid relay electrical endurance count, the enclosure IP rating with the gland specification, and the published derating curve. A manufacturer that cannot answer these for a specific model number is telling you something. Get the answers attached to the quotation rather than to a generic brochure."
---

An inverter datasheet tells you what the box does on a good day. It says very little about which part inside it will fail first, or when.

That matters because inverters rarely die all at once. They die one component at a time. A capacitor dries out. A fan bearing seizes. A cable gland lets monsoon water in. A relay switches one time too many. Each has a different symptom, a different repair cost, and a different amount of warning.

This guide walks the inside of a string inverter part by part. For each component you get three things: what the part does, how it fails in Indian operating conditions, and what its specification tells a buyer about the unit as a whole.

Scope note. This is about the parts, not the circuit. The signal path and topology are covered in the [solar inverter circuit diagram guide](/blog/solar-inverter-circuit-diagram/). External cabling sits in the [wiring diagram guide](/blog/solar-inverter-wiring-diagram/), and battery side cabling in the [battery connection diagram](/blog/inverter-battery-connection-diagram/). Read those for how things connect. Read this one for what the things are.

> **TL;DR**
> - DC link capacitors set the practical service life of most inverters, because electrolyte loss tracks temperature far more strongly than load.
> - A general engineering rule of thumb holds that capacitor endurance roughly halves per 10°C rise, which makes mounting location a design decision, not a site convenience.
> - A surge protection device is a consumable. Metal oxide varistors degrade with every surge they clamp.
> - Fans and the grid disconnect relay are the other two wear items with finite operation counts.
> - Most real water ingress happens at cable glands, not through the enclosure. A badly fitted gland defeats an IP66 rating entirely.
> - Fans, external SPD cartridges and comms dongles are field replaceable. A failed power stage usually makes the unit a swap.

**Short version.** A solar inverter is built from a DC input and surge protection stage, DC link capacitors, semiconductor switches, magnetics, a cooling system, a control board running firmware on a digital signal processor, sensors, a grid disconnect relay, a sealed enclosure, and communication hardware. The capacitors, fans, SPD and relay are consumables with finite lives. Everything else usually outlives them, provided the unit stays cool and sealed.

## What is inside a solar inverter, in the order power flows

Direct current arrives from the array at the DC input terminals. It passes a surge protection stage, then charges a bank of DC link capacitors that hold a stable voltage. Semiconductor switches chop that DC voltage into pulses thousands of times a second. Magnetics smooth the pulses into a sine wave. A relay connects that output to the grid. A control board supervises the whole sequence, and a sealed enclosure with cooling hardware keeps all of it alive.

Every block in that chain is a physical part with its own failure behaviour, and those behaviours differ sharply. Four of them are consumables: the SPD, the DC link electrolytics, the fans and the grid relay. That is the practical value of learning the parts rather than the circuit. It tells you which items belong on a maintenance schedule and which ones you will only ever replace as a whole unit.

## The DC input stage and surge protection: an SPD is a consumable

The DC input stage takes the array feed, provides a load break DC isolator, and clamps voltage spikes before they reach anything expensive. The clamping is done by a [surge protection device](/glossary/spd/), which in most inverters is built from metal oxide varistors, usually shortened to MOVs.

A varistor is a voltage dependent resistor. Below its clamping threshold it behaves like an insulator. Above it, resistance collapses and the surge energy is diverted to earth.

That process is destructive. Every clamping event degrades the varistor slightly. Leakage current creeps up, the clamping voltage drifts, and the part eventually fails open, leaving the inverter unprotected without warning, or fails short, tripping the disconnector.

So an SPD is a consumable, not a permanent fitting. A good one shows its own state through a mechanical status window or a remote signalling contact. Check that window at every service visit.

Three things to establish before purchase:

1. Is DC side surge protection built in, or does the installer add an external unit in the DC combiner box?
2. Is the SPD module replaceable in the field, or soldered to the input board?
3. Does the SPD report its degraded state, and does the monitoring system surface that?

An integrated but non replaceable SPD is still a reasonable design. It just means the protection level falls over time and nobody can restore it without replacing a board.

## DC link capacitors: the biggest single driver of inverter life

The DC link capacitors sit between the input stage and the switching stage. They hold the bus voltage steady while the switches draw current in short bursts, and they absorb the ripple current that switching produces. Without them the bus voltage would collapse and rise thousands of times a second.

Two families are in use. Aluminium electrolytics give large capacitance in a small volume at low cost. Film capacitors, usually metallised polypropylene, give less capacitance per rupee and per litre, but carry no liquid electrolyte, so they do not dry out.

| Property | Aluminium electrolytic | Metallised film |
| --- | --- | --- |
| Capacitance density | High | Lower |
| Wear-out mechanism | Electrolyte evaporation | Self-healing metallisation loss |
| Temperature sensitivity | High | Much lower |
| Typical failure mode | Capacitance loss, rising ESR | Capacitance loss, usually slower |
| Visible warning | Bulging can, vent opening, leakage | Usually none |
| Cost per microfarad | Low | High |

That table is the whole argument. An electrolytic loses electrolyte through its seal as vapour, and the rate of that loss is governed by temperature. The rule of thumb used across power electronics design is Arrhenius based: rated endurance roughly halves for every 10°C rise in the part's internal temperature, and roughly doubles for every 10°C fall. Treat it as a general engineering principle for ranking designs, not as any manufacturer's prediction for a specific unit.

### Worked example: what 20°C of mounting difference costs

Inputs. A DC link electrolytic rated for 5,000 hours of endurance at its 105°C limit. The 10°C rule above.

Formula. Life = rated hours multiplied by 2 raised to the power of (rated temperature minus actual temperature) divided by 10.

Case A, unit mounted in shade with free airflow, capacitor sits at 75°C. 5,000 multiplied by 2 raised to the power of 3, giving **40,000 powered hours**.

Case B, same unit on a west facing wall in direct afternoon sun, capacitor sits at 95°C. 5,000 multiplied by 2 raised to the power of 1, giving **10,000 powered hours**.

A 20°C difference in where the installer hung the box is a 4x difference in expected capacitor endurance. This is arithmetic from a published rule of thumb, not field data, and inverters do not run at full load continuously, so the absolute hours are indicative. The ratio is the point.

Ask whether the DC link uses film, electrolytics, or a mix, and ask for the temperature class and rated endurance hours. Then read the [inverter overheating guide](/blog/inverter-overheating/), because the mounting decision is usually worth more than the component upgrade.

## IGBTs, MOSFETs and the switching stage

The switching stage converts DC to AC by turning the bus voltage on and off in a controlled pattern. MOSFETs dominate at lower voltages and higher switching frequencies, which suits small single phase units. IGBTs, or insulated gate bipolar transistors, handle higher voltages and currents efficiently, which suits three phase and commercial units.

Both lose energy two ways. Conduction loss is the voltage drop across the device while it is on. Switching loss is energy burned during each transition, and it scales with switching frequency. Higher frequency allows smaller magnetics but makes more heat, so the designer trades component size against thermal load.

Those losses are why efficiency numbers matter physically and not just commercially. At 98% efficiency a 5 kW unit dissipates about 100 W of heat inside a sealed box at full output. At 99%, a 320 kW unit still dissipates about 3.2 kW. Large units cannot rely on passive cooling for that reason alone.

Qbits publishes efficiency per SKU group rather than one headline figure. The QB 1.5 to 4.0KTLS single phase group is listed at 98% maximum, the QB 20 to 30KTLC three phase group at 98.8%, and the QB 225/320K-EHV utility unit at 99.02%.

The dominant long term failure mechanism here is not overload. It is thermal cycling. Every time the die heats and cools, the materials in the package expand by different amounts. Over hundreds of thousands of cycles the aluminium bond wires connecting the die to the package work-harden and lift, and the solder layer beneath the die develops voids. Thermal resistance rises, which raises die temperature, which accelerates the same process. A daily solar profile drives exactly that cycle: warm at sunrise, cycling with every passing cloud, cool at sunset. Stable thermal design matters more here than peak current rating.

One caution on brand lists. Qbits uses the phrase "German IGBT Technology" on its own material. Read that as a marketing phrase rather than a bill of materials, and apply the same discount to every competing brand's equivalent line. If the switching device matters to your decision, ask for the part number and datasheet against the exact model quoted, then evaluate the answer rather than the slogan.

## Magnetics: inductors, transformers and where the hum comes from

After switching, the output is a train of pulses, not a sine wave. Output filter inductors, sometimes with capacitors in an LCL arrangement, do the smoothing. They store energy in a magnetic core and release it between pulses, averaging the pulse train into a usable waveform.

Most modern grid-tied string inverters are [transformerless](/glossary/transformerless-inverter/) designs, so there is no bulky 50 Hz iron transformer inside. Hybrid units and some designs still carry high frequency transformers for isolation, which are far smaller.

Magnetics rarely fail outright. When they do, the cause is usually insulation breakdown after prolonged overheating, or corrosion of winding terminations in humid air. The more common complaint is not failure at all. It is noise.

Magnetostriction makes a core physically change dimension with the magnetic field, and loose windings vibrate. At audible switching frequencies you hear a hum or whine that changes with output power. Good manufacturing controls this by impregnating and potting the windings so nothing moves. A unit that buzzes on a bedroom wall is usually a mounting and impregnation issue rather than a fault, and the [solar inverter noise guide](/blog/solar-inverter-noise/) covers how to separate the two.

So if the inverter will sit indoors, ask for the published noise figure in dB at one metre for that specific model, and ask about the recommended mounting surface. A hollow drywall partition turns into a soundboard.

## The cooling system, and why IP66 and heat management pull against each other

Every watt of loss inside the enclosure has to leave as heat, and there are only two routes. Natural convection moves it through an external finned heatsink with no moving parts. Forced air adds fans to push more air across the fins, raising the power density a given enclosure can support.

Here is the tension nobody explains at quotation stage. A sealed enclosure protects electronics from dust and monsoon water, but sealing also blocks the easiest heat path. A sealed inverter must therefore move all its heat through the casting to an external heatsink, and any fans must sit outside the sealed volume or move air through an isolated duct. That is why enclosure design and thermal design are the same conversation.

Qbits lists IP66 protection for every series in its product data, including all three QBH hybrid entries. IP66 means dust tight and protected against powerful water jets. For what the second digit changes in practice, see the [IP65 versus IP66 comparison](/blog/ip65-vs-ip66-solar-inverters-weather-protection-guide/).

Fans deserve separate attention because they are the clearest wear item in the box.

- Fan bearings have a rated life in operating hours at a stated temperature, and that life shortens with heat just as capacitor life does.
- A fan that is slowing, not stopped, is the dangerous case. Airflow drops, internal temperature rises, the unit derates quietly, and nobody notices until generation is visibly down.
- Dust loading on the heatsink fins produces the same effect with no moving part failing at all.

Ask three questions. Is the fan field replaceable without opening the sealed power section? Does the monitoring system report fan speed or a fan fault code, rather than only the derate that follows? And what does the derating curve show at 45°C ambient, which is the number that matters across most of India, not the laboratory rating at 25°C?

## The control board: DSP, firmware, sensors and the grid relay

The control board decides everything. A digital signal processor, usually called a DSP, runs the MPPT search, generates the switching pattern, reads every sensor, and decides when to disconnect. Gate driver circuits translate its low power commands into the current needed to switch the power devices.

Sensors feed that decision making: current sensors on the DC and AC sides, voltage dividers on the bus and the grid, and temperature sensors on the heatsink and near the magnetics. Sensor drift is an under-diagnosed fault because it does not announce itself. It produces slightly wrong MPPT behaviour, or nuisance trips that look like grid problems but originate inside the box.

The output relay or contactor physically opens the connection to the grid. It is electromechanical, so it is the only major moving part in the power path, and it has a finite operation count.

Indian grid protection settings come from the Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013, notification 12/X/STD(CONN)/GM/CEA dated 30.09.2013 as amended on 06.02.2019. Regulation 11(6) requires the inverter to trip above 110% or below 80% of nominal voltage with clearing up to 2 seconds, to trip at 50.5 Hz and above or 47.5 Hz and below with clearing up to 0.2 seconds, to cease energising within 2 seconds of unintended island formation, and to remain stable for 60 seconds before reconnecting. DC injection is limited to 0.5% of full rated output current. The regulation allows a DISCOM to prescribe a narrower range, so your local settings may be tighter.

Read that as a duty cycle specification for the relay. On a weak feeder where voltage wanders past those limits several times a day, the relay racks up operations quickly. Relay and contactor datasheets publish mechanical endurance and electrical endurance separately, and the electrical figure is much lower, because switching current under load erodes the contacts through arcing. So the question is specific: what is the electrical endurance operation count of the grid relay, and is it on a board a service engineer can replace?

Firmware behaves like a component too. Protection thresholds, MPPT algorithms, fault codes and reconnection logic all live in software. A grid code revision or a DISCOM specific requirement can often be met with an update rather than new hardware, which extends the useful life of the box. The risk is a failed update leaving a unit unusable, which is why updates belong to the service channel under stable power and stable communications. The [firmware update guide](/blog/solar-inverter-firmware-update-india/) covers the procedure.

## Enclosure, gaskets, glands and communication hardware

The enclosure is normally a die cast aluminium shell that doubles as the heatsink, closed with a moulded gasket and sealed at every penetration. Safety construction requirements for inverters are covered by IS 16221 (Part 2):2015, the Indian adoption of IEC 62109-2:2011.

Here is where field experience diverges from the datasheet. Ingress almost never happens through the enclosure body. It happens at the openings people make in it. The usual entry points, in rough order of frequency:

1. A cable gland tightened onto a cable outside its clamping range, so the seal never grips.
2. An unused gland knockout left open or covered with tape instead of a blanking plug.
3. Conduit terminated at the box without a proper sealed fitting.
4. Cables entering from above and running water down into the gland, with no drip loop.
5. A gasket pinched or twisted after the cover was opened for service and closed in a hurry.

That is the practical meaning of an IP rating. IP66 describes the enclosure as tested, sealed, in a laboratory. It describes your installation only if the person who closed it up used the correct glands and torqued them properly. The rating belongs to the finished assembly on your wall, not to the brochure.

Communication hardware is the last block. Qbits lists Wi-Fi with optional RS485 or GPRS across its on-grid and hybrid series, with a Bluetooth app additionally on the QB 225/320K-EHV. Physically this is a small radio module or a plug in dongle, and it is among the least reliable parts in the system, because it depends on site Wi-Fi, mobile coverage and a router somebody may have changed.

The implication is about diagnosis, not power. A dead dongle is not a dead inverter, and production usually continues while the app goes blank. Before raising a warranty claim, confirm on the local display or LED whether the unit is generating. The real cost of a comms outage is the gap it leaves in the fault log, which makes a later warranty conversation harder to evidence.

## Component to failure symptom, and what is field replaceable

This is the table worth saving. It maps what you observe to the part most likely responsible, and says whether a service engineer can fix it on site.

| Symptom | Most likely component | Field replaceable? |
| --- | --- | --- |
| Slow decline in yield over years, rising fault frequency | DC link electrolytic capacitors | No, factory or swap |
| Sudden shutdown after a storm, no display | SPD failed short, or input stage damage | SPD sometimes, input stage rarely |
| Derating on hot afternoons only | Fan slowing, blocked heatsink fins, or mounting | Usually yes |
| Hum or whine that tracks output power | Output inductor impregnation or mounting | Usually no, often not a fault |
| Frequent grid trips with no visible grid problem | Sensor drift or firmware thresholds | Firmware yes, sensors no |
| Repeated connect and disconnect, clicking | Grid relay contacts degrading | Depends on board design |
| Water marks or corrosion inside the box | Cable gland, blanking plug or gasket | Yes, and should be corrected |
| App offline, LEDs show normal generation | Communication dongle or site network | Yes |
| Loud bang, burnt smell, dead unit | Power stage failure | No, write-off |

The replaceability column determines your actual downtime. Fans, external SPD cartridges, communication dongles and sometimes display boards are practical field swaps. Anything bonded to the heatsink, potted in compound or integrated into a single main board is a factory repair or a unit replacement.

A failed power stage is almost always a write-off. When a switching device shorts, it usually takes the gate drive circuitry with it, and often the control board too. Repair labour plus parts then approaches the cost of a new unit, which is why manufacturers design replacement rather than repair into their warranty process.

## What component quality actually buys you, and what it does not

This section disagrees with most component articles, including the earlier version of this one.

The common claim is that a premium component brand list predicts a long life. That is a weak proxy. A well regarded capacitor running at 95°C in a badly ventilated enclosure on a west wall will fail before a less famous part rated to 125°C with proper airflow around it. Thermal design and installation dominate the brand name.

What a component specification genuinely tells you is narrower:

- **Temperature class and rated endurance hours** on the DC link. These are numbers, comparable across brands.
- **Capacitor technology.** Film in the DC link is a deliberate, more expensive design decision aimed at hot climates.
- **The published derating curve.** It shows what the manufacturer expects the thermal design to deliver at Indian ambient temperatures.
- **Replaceability of the wear items.** This drives downtime and lifetime service cost more than initial component grade does.

Warranty terms are the second signal, and they need reading carefully. A long warranty is a statement about the manufacturer's own failure-rate model and balance sheet, not proof about any individual part. What matters is the interaction between term, coverage and service reach.

Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. So obtain the current written warranty for the exact model quoted, and read the exclusions rather than the headline. The [inverter warranty guide](/blog/solar-inverter-warranty/) covers what those documents usually leave out.

Three exclusions repeatedly turn into disputes: damage attributed to surge or lightning, damage attributed to water ingress, and consumables. All three map onto the components in this article. If SPDs, glands and fans are excluded, the manufacturer has told you which parts it expects to wear out.

## What to ask a manufacturer about components

Send these against a specific model number, not a brochure, and ask for written answers attached to the quotation.

1. What capacitor technology is used in the DC link, electrolytic, film, or a mix? What is the temperature class and rated endurance hours?
2. What is the cooling method for this model, natural convection or forced air? If forced air, is the fan field replaceable without opening the sealed power section?
3. Please share the derating curve against ambient temperature for this model.
4. Is DC side surge protection integrated? Is the SPD replaceable, and does it signal its own degraded state?
5. What is the electrical endurance operation count of the grid disconnect relay, and is it on a serviceable board?
6. What is the enclosure IP rating for this model, and what gland types and clamping ranges are specified for the DC and AC entries?
7. How is firmware updated in the field, who performs it, and what happens if an update is interrupted?
8. Which parts are field replaceable by an authorised engineer, and which failures require a unit replacement?
9. Please provide the current written warranty terms, including exclusions for surge, water ingress and consumables.

A manufacturer that can answer all nine for a named model is running real engineering documentation. One that answers with brand names and adjectives is not. To compare answers across units, the [Qbits on-grid and hybrid range](/our-products/) publishes efficiency, MPPT count, voltage range and protection rating per SKU group, which is the level of detail these questions should be aimed at.

## The Bottom Line

An inverter is a collection of parts with very different lifespans, sharing one sealed box and one thermal budget. The capacitors, fans, SPD and relay wear out. The rest usually does not, as long as the box stays cool and sealed. Almost everything a buyer controls sits in mounting, ventilation and gland workmanship, which is why those decisions deserve more attention than the component brand list on a brochure.

Three things to do with this:

- **Pick the mounting location like it is a component choice.** Shade and airflow buy more capacitor life than any upgrade on the bill of materials, as the worked example above shows.
- **Put the wear items on a maintenance schedule.** Inspect the SPD status window, check fan operation and heatsink dust, and look for water marks or corrosion inside the enclosure at every service visit.
- **Send the nine component questions before you sign.** To get them answered against specific Qbits model numbers, [talk to the Qbits team](/contact-us/) and ask for the written specification and warranty terms for the exact SKU you are quoting.
