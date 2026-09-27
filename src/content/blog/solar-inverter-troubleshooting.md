---
title: 'Solar Inverter Troubleshooting: 15 Symptoms and Next Steps'
excerpt: "Solar inverter troubleshooting in order: safe isolation, status lights, a triage ladder, and how to tell an inverter fault from an array fault."
description: Diagnose solar inverter symptoms safely and in the right order. Read the status indicators, run the triage ladder, separate inverter from array from grid from monitoring, then collect the evidence support will ask for.
category: Maintenance
date: 2026-03-13
updatedDate: 2026-09-24
readTime: 11 min
image: /blog-images/solar-inverter-troubleshooting.svg
author: Keyur Rakholiya
keywords:
- solar inverter troubleshooting
- inverter error codes
- solar inverter not working
- inverter overheating
- hybrid inverter troubleshooting
faqs:
- q: What should I check first if a solar inverter seems off?
  a: Check the clock and the sky before you check the inverter. A unit that shows zero output after sunset is behaving correctly. From a safe viewing position, record the exact model, serial number, the display or LED pattern, and the monitoring timestamp. Then decide which of four things is failing, the inverter, the array, the grid, or the monitoring link, because each one routes to a different fix.
- q: Is it safe for a homeowner to open a solar inverter?
  a: No. The DC side of a solar array is live whenever there is daylight, and it stays live even after you switch off the AC breaker and the grid supply. Opening the enclosure exposes DC terminals that a normal household switch does not de-energise. Every task behind a cover or a screwed panel belongs to a licensed electrician.
- q: Can I reset an inverter to clear an unknown grid fault?
  a: One reset is diagnostic information. Repeated resets are not a repair. If the same code returns, the protection system is doing its job and the cause is still present. Record the code and the time, then have a licensed electrician measure the cause against the exact model manual. Never change voltage, frequency, or anti-islanding thresholds to stop an alarm.
- q: Does an offline monitoring app mean the inverter stopped generating?
  a: Not necessarily. A logger, router, SIM, or cloud outage can leave the app blank while the inverter runs normally and keeps exporting. Compare the app's last-update timestamp against the inverter's own local display. If the local display shows live power and the app does not, you have a monitoring fault, not a generation fault.
- q: How do I tell an inverter fault from a solar panel fault?
  a: Compare the MPPT inputs against each other. If two inputs carry similar DC voltage but very different DC current, the problem is almost always on the array side, such as soiling, shade, a loose connector, or a blown string fuse. If DC voltage is present and healthy but the inverter produces no AC output at all, suspect the inverter or its grid interface. A licensed electrician must take those readings.
- q: What evidence should I collect before calling inverter support?
  a: Collect the model number and serial number from the unit's rating label, the exact error code with the date and time it appeared, screenshots of the monitoring app around the event, and clear photographs of the display and the rating label. Note the weather and anything that changed recently, such as a firmware update, a new appliance, or grid work in your area. Good evidence usually removes one site visit from the process.
- q: What warranty does Qbits offer on its solar inverters?
  a: Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. Warranty cover applies to the product, not to the wider installation, so array wiring, earthing, and DISCOM-side problems are handled separately. Your written warranty document and purchase contract govern the actual entitlement.
- q: Which inverter faults are genuinely urgent?
  a: Treat smoke, a burning smell, audible arcing, visible scorching, water inside an enclosure, or a repeatedly tripping breaker as urgent. Stop troubleshooting, keep people away, and follow the site isolation procedure with qualified help. Insulation resistance, ground fault, and arc fault alarms also warrant a stop, because they indicate a possible electrical safety defect rather than a performance issue.
- q: How often should a rooftop solar inverter be serviced?
  a: Most inverter problems in India are environmental, so a pre-monsoon and a pre-summer check covers the majority of cases. Each check should cover ventilation clearance, heat sink cleanliness, cable entry seals, earthing continuity, and a review of the monitoring history for warnings that never became faults. Logging derating events before they become shutdowns is the cheapest maintenance there is.
seoTitle: 'Solar Inverter Troubleshooting: Symptom Checklist'
relatedSlugs:
- solar-inverter-error-codes-guide
- solar-inverter-low-output-causes-india
- solar-inverter-wifi-not-connecting-fix
---

Most rooftop solar troubleshooting goes wrong in the first five minutes. The owner sees a blank app, assumes the inverter has failed, and calls the installer. Two days later an engineer arrives and finds a router that changed its Wi-Fi password. Meanwhile a genuine insulation fault on the next roof gets reset four times because the beeping was annoying.

The fix is not more electrical knowledge. It is order. Troubleshooting works when you establish safety first, then read the status indicators, then place the symptom on a triage ladder. Only then do you decide whether the inverter, the array, the grid, or the monitoring link is at fault.

This guide is that triage layer. It covers the safety rules that come first, how to read status lights and codes, and a ladder that sorts symptoms into four states. A symptom table then routes each case to the right next step. It also teaches the most useful skill here: separating an inverter fault from an array, grid, or monitoring fault. Finally, the evidence to gather before you call support.

> **TL;DR**
> - The DC side of a solar array stays live in daylight regardless of your AC breaker, so the enclosure is never a homeowner task.
> - Four states, not fifteen symptoms: generating normally, generating less than expected, faulting intermittently, or dead. Each state has a different first move.
> - Similar DC voltage with very different DC current across two MPPT inputs points at the array, not the inverter.
> - A blank monitoring app proves nothing about generation. Compare the app timestamp against the local display.
> - Repeated resets are not a repair, and changing grid protection thresholds to silence an alarm is a safety defect.
> - Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model.

**Short version.** Work in this order. Confirm nothing is smoking, arcing, or wet, and leave every cover closed. Note the time, the weather, the exact model, and the displayed code. Decide which of four states applies: normal, low, intermittent, or dead. Use the MPPT readings to separate an inverter fault from an array, grid, or monitoring fault. Then collect evidence and escalate.

## Safety comes before diagnosis, and DC is the reason

A solar array is a generator you cannot switch off. Sunlight on the modules produces DC voltage at the inverter's input terminals. That voltage is present whether the grid is up, the AC breaker is off, or the inverter is dead. Switching off the AC side does not de-energise the DC side. That single fact rules out most of what people want to try.

Three rules follow, and they are not negotiable.

1. **Never open the enclosure.** Anything behind a screwed cover, including terminal blocks, fan assemblies, and the DC input chamber, is licensed electrician territory.
2. **Never unplug a DC connector under load.** DC does not self-extinguish an arc the way AC does. Pulling an MC4 connector on a live string can strike a sustained arc.
3. **Never defeat a protection device.** If a breaker, fuse, or residual current device keeps operating, it is reporting a fault, not malfunctioning.

Correct isolation, performed by a qualified person, runs from the grid inwards. Open the AC isolator, then the DC isolator. Then prove the circuit dead at the point of work. Doing DC first leaves the inverter feeding the AC side. Earthing and isolation practice sits in IS 732:2019 and IS 3043:2018 (Bureau of Indian Standards). Supply safety obligations sit in the Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023.

Stop entirely if you see smoke, smell burning, hear arcing, see scorch marks, or find water inside any enclosure.

## How to read the status indicators without guessing

Every string inverter talks in three layers: indicator lights, the display or app code, and the event log. Lights give the broad state. Codes name the event. The log says whether the event is new, recurring, or constant. Reading them in that order saves a wasted call.

Broad states are consistent across brands even when the exact colours are not.

| Indicator state | What it usually means | Your first move |
| --- | --- | --- |
| Steady green or "normal" | Grid-connected and exporting | Compare today's kWh against a similar past day |
| Slow flashing or "standby" | Waiting for enough DC voltage or grid stability | Note the time and irradiance; dawn and dusk standby is normal |
| Amber or "warning" | Operating with a limit applied, such as heat derating | Read the event log; a warning today is a fault next summer |
| Red or "fault" | Protection has disconnected the unit | Record the exact code and timestamp before any reset |
| Nothing at all | No DC and no AC, or an internal supply failure | Confirm it is daylight, then treat it as the dead branch of the ladder |

Two cautions. An identical phrase can mean different things across brands and firmware revisions, so the current manufacturer manual defines your code, not a generic list. Our [error code reference](/blog/solar-inverter-error-codes-guide/) explains how code families are structured. And a warning state is the most under-used signal in Indian rooftop solar, because derating warnings accumulate for months before a summer shutdown.

## The triage ladder: four states, four different first moves

Fifteen symptoms is too many to hold in your head. Four states is not. Place the system on this ladder first, because the state decides whether you are chasing performance or chasing a defect.

**Step 1. Is it generating at all right now?** Check in daylight, ideally between 11am and 2pm on a clear day. If AC power is above zero, you have a performance question, not a failure. Go to step 2. If it is zero in good sun, jump to step 4.

**Step 2. Is it generating less than expected?** Compare against a comparable day, never against the nameplate rating. A 5 kW inverter almost never produces 5 kW, and that is design, not failure. Soiling, shade, cable losses, temperature, and deliberate DC oversizing all reduce output legitimately. The [low output diagnosis guide](/blog/solar-inverter-low-output-causes-india/) ranks the causes by likelihood.

**Step 3. Is it faulting intermittently?** Intermittent is the most informative state, because the timing carries the diagnosis. Midday clusters suggest heat or overvoltage. Dawn faults suggest low DC voltage start-up behaviour. Faults after rain suggest moisture ingress. Faults that track a neighbour's motor load suggest the feeder.

**Step 4. Is it dead?** No display, no AC output, no app data, in full sun. This is the only state that usually needs a site visit. Before booking one, confirm the AC breaker position, confirm DISCOM supply is present, and confirm no firmware update is in progress.

The ladder matters because steps 2 and 3 get misdiagnosed as step 4. An owner who reports "inverter dead" when the real state is "derating at 2pm in May" gets the wrong engineer with the wrong parts.

## Symptom, likely cause, and the correct next step

This table is a routing device, not a diagnosis. One displayed phrase can have several causes, and the manufacturer manual for your exact model and firmware supplies the definition.

| Symptom | What it may indicate | Correct next step |
| --- | --- | --- |
| No display in daylight | No DC, no AC, or internal supply failure | Confirm breaker positions and grid presence, then escalate |
| Display on, zero AC output | Night, standby, protection event, or PV-side loss | Record time, local status, and exact code |
| Output lower than expected | Soiling, shade, temperature, clipping, or a real fault | Compare like-for-like days using the [low output guide](/blog/solar-inverter-low-output-causes-india/) |
| Grid over-voltage trip | Weak or long feeder, high local export, or wiring voltage rise | See [grid overvoltage](/blog/solar-inverter-grid-overvoltage/) and involve the DISCOM |
| Grid under-voltage trip | Utility-side voltage condition, not automatically a PV defect | Log frequency and duration; do not alter thresholds |
| Frequency error | Grid interface limit or measurement issue | Record the reading and code; leave grid settings alone |
| Insulation resistance or Riso fault | Moisture, damaged DC insulation, or a degraded cable run | Stop. This needs a licensed electrician with an insulation tester |
| Ground fault or GFDI alarm | Possible earth path on the DC side | Stop and read the [ground fault guide](/blog/solar-inverter-ground-fault-guide/) before touching anything |
| Arc fault alarm | Possible dangerous DC arc, or detection sensitivity | Keep clear of the array circuit and arrange inspection |
| Heat derating or over-temperature | Ambient heat, blocked ventilation, or fan failure | Check clearances visually; see [inverter overheating](/blog/inverter-overheating/) |
| Nuisance tripping on and off | Protection reacting to a marginal condition | Log the pattern with timestamps before any reset |
| Repeated breaker trip | Wiring, protection coordination, or equipment fault | Do not keep resetting; escalate immediately |
| Noise or beeping at night | Alarm, standby, or auxiliary power behaviour | Record the pattern; see [night beeping](/blog/solar-inverter-beeping-at-night-fix/) |
| App offline or Wi-Fi lost | Logger, router, SIM, account, or cloud issue | Compare local display first, then use the [Wi-Fi fix guide](/blog/solar-inverter-wifi-not-connecting-fix/) |
| Missing historical data | Account binding, logger upload, or platform issue | Note the last good timestamp and contact platform support |

Read across the whole row. The value of the table is that it pairs a plausible cause with an action that does not make things worse.

## Inverter fault, array fault, grid fault, or monitoring fault

This is the most valuable distinction on the page. Four systems produce overlapping symptoms and route to four different people: the inverter brand, the installer, the DISCOM, and the monitoring platform. Getting it wrong costs weeks.

| Fault domain | Signature | Who owns the fix |
| --- | --- | --- |
| Inverter | Healthy DC voltage and current present, but no or wrong AC output; internal codes; a hard fault that survives a clean restart | Inverter manufacturer, under warranty |
| Array | DC current low or asymmetric between MPPTs while DC voltage is normal; output tracks soiling, shade, or rain | Installer or EPC |
| Grid | Voltage or frequency codes that correlate with time of day or neighbourhood load; other appliances also affected | DISCOM, with installer support |
| Monitoring | Local display healthy and exporting, app blank or stale; data gaps with no matching production gap | Platform support or router owner |

Three quick tests separate them without opening anything.

1. **The clock test.** Does the symptom correlate with time of day or weather? Time-correlated symptoms point at grid or thermal causes, not a failed component.
2. **The local display test.** If the unit's own display shows live AC power while the app shows nothing, generation is fine and the monitoring link is broken.
3. **The symmetry test.** On a multi-MPPT inverter, compare the inputs against each other. Asymmetry is the array's signature.

## Worked example: separating an array fault from an inverter fault

This is arithmetic on assumed readings, shown to demonstrate the method. It is not field data from an installation.

A dual-MPPT inverter carries two strings of 10 Adani ASB-M10-144-580 modules. The datasheet rates each module at Vmp 43.98 V and Imp 13.19 A at standard test conditions. Its Voc temperature coefficient is -0.24 percent per degree C. Assume a hot afternoon, cell temperature near 55 C, plane-of-array irradiance near 700 W/m2.

Expected string voltage:

- Temperature correction = -0.24% x (55 - 25) = -7.2%
- Vmp per module = 43.98 x 0.928 = 40.8 V
- Vmp per string of 10 = 408 V

Expected string current:

- Imp scales roughly with irradiance = 13.19 x (700 / 1000) = 9.2 A

Now the readings an electrician takes at the inverter:

| Input | DC voltage | DC current | DC power |
| --- | --- | --- | --- |
| MPPT 1 | 407 V | 9.1 A | 3.70 kW |
| MPPT 2 | 405 V | 4.6 A | 1.86 kW |

Read the result. Voltage on both inputs sits within 0.5 percent of each other, and within 1 percent of the calculated 408 V. Module count, wiring polarity, and the temperature assumption are therefore sound on both strings. Current on MPPT 2 is almost exactly half of MPPT 1. That is an array-side signature. A sub-string in a parallel pair has dropped out, a string fuse has cleared, a connector has degraded, or half the string is shaded.

An inverter-side MPPT failure looks different. The tracker cannot hold the maximum power point, so voltage wanders or collapses towards open-circuit while current stays low. Voltage that is correct and stable exonerates the tracker.

## What a homeowner may safely do, and what needs an electrician

The boundary is simple. If it needs a tool, a cover, or a meter, it is not yours. Observation, recording, and the AC breaker you already use are yours.

Safe for a homeowner, from outside every enclosure:

1. Read and photograph the display, LEDs, and rating label.
2. Note the date, clock time, weather, and what changed recently.
3. Check whether grid supply is present elsewhere in the building.
4. Look, from a safe distance, for blocked ventilation, nesting, or vegetation against the heat sink.
5. Check whether the monitoring router or SIM is working.
6. Perform one, and only one, documented restart using the AC isolator if the manual permits it.

Requires a licensed electrician, without exception:

1. Any DC measurement, including string voltage, string current, and insulation resistance.
2. Any work behind a cover, including internal heat sink cleaning and fan replacement.
3. Any connector, gland, fuse, or terminal work.
4. Any ground fault, arc fault, or insulation resistance investigation.
5. Any change to grid protection settings, which follow the DISCOM connection standard rather than a preference.
6. Any repeated breaker trip.

Rule 1 deserves a plain explanation. String voltages on a residential array routinely exceed 400 V DC and climb further in cool weather. That is not a household measurement.

## The contrarian bit: resetting is diagnosis, not repair

Resetting an inverter is the most common troubleshooting action in Indian rooftop solar, and usually the least useful. Three myths keep it alive.

**Myth 1: if the reset clears it, it was a glitch.** Usually it only means the trigger condition has passed. A midday overvoltage trip clears itself by evening. Nothing was fixed, and it returns tomorrow at the same hour. The useful data point is the pattern, not the clearance.

**Myth 2: widening the grid protection window stops the tripping.** It does, and that is the problem. Voltage and frequency windows exist so the unit disconnects when the grid leaves safe limits, and anti-islanding behaviour protects anyone working on a dead line. Widening them to keep exporting into a weak feeder turns a reported fault into an unreported hazard. It can also void warranty cover and breach your connection agreement.

**Myth 3: repeated beeping is only a nuisance alarm.** Sometimes it is standby behaviour. Sometimes it is a battery or auxiliary supply condition that worsens quietly. Pattern and timing decide, which is why you log them.

One documented restart is a legitimate test. The second identical restart overwrites evidence the engineer needs.

## Evidence to collect before you call support

Support quality tracks evidence quality. A ticket with a code, a timestamp, and a photograph of the rating label often resolves without a visit. A ticket that says "not working" guarantees one.

Collect all of the following:

1. **Model and serial number**, photographed from the rating label rather than typed from memory.
2. **The exact error code or displayed phrase**, with the date and clock time it first appeared.
3. **Monitoring screenshots** covering the day of the event and a comparable normal day.
4. **A clear photograph of the display** showing the fault state.
5. **The event log extract**, if your app exports one, including warnings and not just faults.
6. **Environmental context**: ambient temperature, weather, and time of day.
7. **Change history**: firmware updates, new appliances, recent maintenance, DISCOM work in the area.
8. **String voltages and currents per MPPT**, only if a licensed electrician has already attended.

Two things to keep out of the ticket. Never send passwords, OTPs, or portal credentials through a public support channel or a WhatsApp group. And do not photograph a code you have already cleared, because the timestamp is the part that matters.

For Qbits units, the [datasheet library](/download-datasheets/) confirms the model and its rated specifications, and the [authorised service partner network](/authorized-service-partners/) is the route for on-site attention. Qbits publishes 2100+ authorised service partners across 33 states and UTs.

## Warranty and RMA, at a high level

Know what a product warranty covers before you file. It covers the inverter. It does not cover the installation around it. Array wiring, earthing defects, mounting, DISCOM voltage conditions, and monitoring routers go to the installer or the utility instead. That division is the commonest reason a claim stalls.

Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. Ask what happens once a claim is approved, and get the committed action in writing, because no current published service level establishes it. Your written warranty document and purchase contract govern the actual entitlement, including proof of purchase and commissioning records.

The process runs in a predictable order.

1. Identify the unit and confirm it is within the warranty period, using invoice and commissioning records.
2. Raise the claim with model, serial number, code, timestamp, and photographs.
3. Cooperate with remote diagnosis, which often resolves configuration and monitoring cases.
4. Accept a site inspection if requested, since it establishes whether the cause is the product or the installation.
5. Receive the approval decision, after which replacement logistics begin.
6. Keep the faulty unit available, because returning the defective item is normally a condition of replacement.

Our [warranty claim walkthrough](/blog/solar-inverter-warranty-claim/) covers the documentation in detail, including what a rejected claim usually lacks. The hybrid range carries extra battery-side considerations, so check your [hybrid inverter](/hybrid-inverter/) specification before assuming a battery symptom is an inverter fault.

## Preventive maintenance that actually reduces faults

Most rooftop inverter faults in India are environmental, not electronic. Heat, dust, monsoon moisture, and rodents produce more tickets than component failure. That makes prevention unusually effective here, and it is mostly inspection rather than intervention.

| Interval | Task | Why it prevents a fault |
| --- | --- | --- |
| Monthly | Review the monitoring log for warnings, not just faults | Derating warnings precede summer shutdowns by months |
| Monthly | Compare monthly kWh against the same month last year | Catches gradual array losses before they look like a failure |
| Pre-summer | Confirm ventilation clearance and shade over the enclosure | Ambient heat plus restricted airflow is the top derating cause |
| Pre-monsoon | Inspect cable entries, glands, and conduit seals from outside | Water ingress is what turns into insulation resistance faults |
| Pre-monsoon | Check for rodent damage and nesting near cable runs | Chewed DC insulation causes ground and arc fault alarms |
| Annually | Electrician check of earthing continuity and terminal torque | Loose terminals heat, and heat is what fails connections |
| Annually | Verify firmware status with the brand before updating | An interrupted update can leave a unit in a non-operating state |

Two items beat the rest of the list. Keep the heat sink clear and unshaded, because derating is the most common avoidable loss. And treat the monitoring history as a maintenance record, not a curiosity. Our [maintenance guide for Indian conditions](/blog/inverter-maintenance-india/) sets out the full schedule.

## The Bottom Line

Troubleshooting a solar inverter is a routing problem, not an electrical one. Establish safety, read the state, place it on the ladder, then decide which of four systems owns the fault. That decision is usually the whole job. Getting it right is the difference between a five-minute app fix and a two-week misdirected ticket.

- **Run the ladder before you call anyone.** Generating, low, intermittent, or dead. Each state has a different first move, and reporting the wrong one sends the wrong engineer.
- **Use the symmetry test to place the fault.** Similar DC voltage with very different DC current across MPPT inputs means the array, not the inverter. Only a licensed electrician takes those readings.
- **Bring evidence to the ticket.** Model, serial, exact code, timestamp, screenshots, photographs. For Qbits equipment, confirm the model in the datasheet library, then [contact the Qbits team](/contact-us/) with the record in hand.
