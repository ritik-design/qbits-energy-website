---
title: "Solar Inverter Failure: Safe First Actions"
excerpt: "What to do when a solar inverter stops: safe first actions, how to tell a grid problem from an equipment fault, what to record, and who to call."
description: "Solar inverter stopped or showing a fault? Safe first steps, what to record before calling service, how to rule out grid issues and when to escalate."
category: "Maintenance"
date: 2026-09-23
updatedDate: 2026-10-14
readTime: "12 min read"
image: "/images/hybrid.webp"
author: "Qbits Editorial"
keywords:
  - "solar inverter reliability"
  - "solar inverter failure"
  - "inverter downtime"
  - "solar inverter not working"
faqs:
  - q: "What should I do first when my solar inverter stops working?"
    a: "Look and smell first. If there is smoke, a burning smell, water or visible damage, keep people away and call a qualified professional. Otherwise check whether the building has mains supply, because an on-grid inverter disconnects during a power cut by design. Then photograph the display and LEDs, check that the AC breaker and isolators are where your installer left them, and compare the monitoring app with the local display. Do not open the enclosure."
  - q: "Is my inverter faulty or is it a grid problem?"
    a: "Check the supply first. If other appliances have no power, the grid is down and the inverter is behaving correctly. If supply is present, read the message. Grid voltage, frequency and no-grid messages describe the grid side, but repeated trips can still come from a long or undersized AC cable, so keep timestamps and displayed voltages and let the installer measure at the inverter and at the meter."
  - q: "Can I reset my solar inverter myself?"
    a: "A single restart is reasonable for a one-off grid or low-light message, following your manual. Record the message first. Do not repeatedly reset isolation, residual current or arc faults, and do not keep restarting a fault that returns. Repeated resets erase the event history a technician needs and can hide an unsafe condition."
  - q: "How long should an inverter repair take?"
    a: "There is no universal deadline. The time depends on the fault, parts, location, the service route and the written terms for your model. Ask the service provider for the next step and its timing in writing, keep the ticket number, and follow up against that."
  - q: "Will the warranty cover my inverter failure?"
    a: "It depends on the written warranty for your exact model. Qbits public datasheets describe an expandable warranty but do not define the base term, remedy, registration deadline or exclusions, so request the current written warranty for your model before assuming what is covered. Faults caused by installation errors, water ingress or grid events may be treated differently from component faults."
  - q: "How do I know if my inverter is running but losing output?"
    a: "Compare the app's power curve against a clear day from earlier months. A curve that peaks lower, flattens early or shows one MPPT input at near zero in good light points to soft downtime. The display may look normal throughout. The low output guide covers causes such as shading, soiling, a dropped string and thermal derating."
  - q: "Is a repair or a replacement more likely?"
    a: "The service provider decides after diagnosis. A fan, connector or wiring fault is often repaired on site, while serious damage to power electronics from water, surge or burning can lead to replacement. Ask for the root cause in writing, because replacing the inverter does not fix a wet junction box, a poor earth or a string design error."
  - q: "What does a day of inverter downtime cost?"
    a: "Multiply the energy the system would have produced by the value of that energy to you. As an assumed illustration, a 5 kW system producing about 20 kWh on a clear day, valued at 7 rupees per kWh, loses about 140 rupees a day. Use your own tariff and output. The larger cost is usually late detection, which is why alerts and a quick look at the app matter."
  - q: "Can a brand-level reliability score identify the most reliable inverter?"
    a: "Not without comparable field data, exposure, model mix, climate, installation quality, failure definition and observation period. Use the exact product documents and project evidence, and ask for the context listed in the reliability evidence table above."
---
A stopped inverter feels like an emergency, and the first instinct, pressing reset again and again, is usually the wrong one. This guide gives the order of work that protects people first, evidence second and generation third: what to check from the ground, how to tell a grid problem from an equipment problem, what to record, who to call, and what a downtime day actually costs. It also covers the quieter cases where an inverter keeps running but loses output, because those cost as much as a clean stop.

Responding to a fault cannot be reduced to a brand score or a universal recovery deadline. Reliability depends on the exact model, the installation, the grid, the environment, maintenance, firmware, and how a "failure" is defined and counted. Comparable, independently audited field data is not available for the brands discussed on this site, so this guide gives a method, not a statistic.

> **Safety first:** Solar PV conductors can remain energised in daylight, and inverter internals can hold hazardous voltage after shutdown. Do not open the enclosure or improvise electrical tests. Follow the manual for your exact model and use a qualified technician for anything beyond looking, photographing and switching off at the main AC breaker.

## The first 15 minutes: safe actions in order

Do these from the ground, in this order, and stop at the first step that finds the cause.

1. **Look and smell before you touch.** Burning smell, smoke, scorch marks, water on or around the inverter, damaged cable insulation or a swollen enclosure mean stop here. Keep people away, switch off at the AC breaker only if you can reach it without going near the damaged equipment, and call a qualified professional.
2. **Check whether the building has mains supply.** An on-grid inverter must disconnect when the grid fails, so a power cut stops it by design. This is the most common reason an inverter "is not working". If the house has no supply, wait for the DISCOM to restore it. The inverter will reconnect after its start-up checks, which take some time.
3. **Read the display and LEDs.** Photograph the full message and the LED pattern before changing anything. Do not repeat a reset until you have recorded it, because clearing the screen can erase the first piece of evidence a service engineer needs.
4. **Check the switches you own.** Confirm that the AC breaker and, where you have access, the DC isolator are in the positions your installer left them. A tripped breaker or an isolator turned off during cleaning looks like a dead inverter. Do not close a breaker that has tripped more than once without finding out why.
5. **Check the time and the light.** An inverter produces nothing at night and little before sunrise or under heavy cloud. A low-light message at dawn is not a fault.
6. **Open the monitoring app.** Compare its status with the local display. An app can show "offline" while the inverter generates normally, which is a communication problem, not a failure. The [Wi-Fi troubleshooting guide](/blog/solar-inverter-wifi-not-connecting-fix/) covers that case.
7. **Note what changed recently.** Storms, electrical work, a new appliance, a grid outage, cleaning, or a heat wave. Recent events narrow the cause quickly.

## What not to do

- Do not open the inverter or a DC enclosure, and do not unplug rooftop PV connectors. Switching off the AC side does not make illuminated PV conductors safe.
- Do not reset isolation, residual current or arc fault messages. They point to an insulation problem in a circuit that is energised whenever the sun shines. See the [error codes guide](/blog/solar-inverter-error-codes-guide/).
- Do not raise grid voltage or frequency limits to stop trips. Those settings belong to the approved configuration under the utility's conditions.
- Do not bypass a tripped protective device, and do not send an untrained person onto the roof.
- Do not wait for the next sunny day to see "if it fixes itself" when there is a safety indicator.

## Separate external conditions from equipment faults: the diagnosis ladder

A stopped inverter may be responding to a grid outage, grid voltage or frequency outside its permitted window, an open isolator, a protection-device trip, insufficient irradiance, a communication failure, a DC-side fault, overheating or an internal condition. Work down the ladder. Each rung rules out one family of causes.

| Rung | Question | What you can check | If yes, next step |
| --- | --- | --- | --- |
| 1. Supply | Does the building have mains supply? | Other appliances, the meter | Wait for the DISCOM. Report a long outage |
| 2. Switches | Are the AC breaker and isolators on? | Position of breakers and the DC isolator | Restore only if nothing tripped repeatedly |
| 3. Light | Is there enough sunlight to start? | Time of day, weather | Normal behaviour at low light |
| 4. Message | Does the display show a fault? | Photograph the text and LEDs | Group it: grid, DC, insulation, temperature, communication |
| 5. Pattern | Is it one event or recurring? | App event history | Recurring faults need the installer |
| 6. Environment | Heat, water, dust, vermin? | Look from outside only | Clear clearances and vents. Anything wet means stop |
| 7. Output | Is it running but low? | App power curve against a clear day | See the [low output guide](/blog/solar-inverter-low-output-causes-india/) |

If the ladder ends at a message you cannot place, the [troubleshooting guide](/blog/solar-inverter-troubleshooting/) lists 15 common problems with the safe check for each, and the [error codes guide](/blog/solar-inverter-error-codes-guide/) explains how to group a fault code when you do not have the manual. A unit that repeatedly stops and restarts has its own page: [solar inverter keeps switching off](/blog/solar-inverter-keeps-switching-off-fix/).

## Five kinds of downtime, and why they are not equal

"Downtime" covers more than a stopped inverter. Naming the kind helps you decide how urgent it is.

- **Hard downtime.** The inverter has stopped and needs service. Generation is zero.
- **Soft downtime.** The inverter runs but at reduced output, for example thermal derating or an MPPT input that has dropped out. It is easy to miss because the display looks normal.
- **Nuisance downtime.** Trip-and-restart cycles from grid disturbances. Each trip is the protection working, but repeated trips cost generation and can point to a weak feeder or a long AC cable.
- **Scheduled downtime.** Planned maintenance. It is a cost you choose, and it prevents the other kinds.
- **Hidden downtime.** A gradual loss of output that nobody notices without comparing against earlier months or a clear-day baseline.

Hidden and soft downtime are why a monitoring app matters. The [monitoring app guide](/blog/solar-inverter-app-monitoring/) explains what to watch.

## Why inverters stop: five cause groups

Causes fall into five groups. None of them has a universal frequency, because the mix depends on the product and the site.

1. **Component ageing.** Heat ages capacitors and fans, and thermal cycling stresses power semiconductors. This is a long-horizon cause. The [circuit diagram guide](/blog/solar-inverter-circuit-diagram/) shows where each part sits.
2. **Grid conditions.** Voltage and frequency excursions, switching transients and lightning-induced surges. Many apparent "inverter failures" are the inverter correctly disconnecting from a poor supply, and [anti-islanding](/glossary/anti-islanding/) is the reason an on-grid unit stops during a power cut.
3. **Environment.** Dust that blocks cooling, moisture entering through damaged seals or cable entries, salt air near the coast, and high ambient temperature. Chronic overheating is covered in the [inverter overheating guide](/blog/inverter-overheating/).
4. **Installation quality.** Loose terminations that heat up over time, poor ventilation, undersized cables with high voltage drop, weak earthing that reduces surge protection, and string design that suits summer but not a cold morning.
5. **Missed maintenance.** Skipped inspections, ignored monitoring alerts and deferred cleaning let small issues grow.

## What a downtime day costs: the arithmetic

You can estimate your own loss without relying on anyone's averages. The loss for a day is the energy the system would have produced multiplied by the value of that energy to you.

**Illustration with assumed numbers, not field data.** Take a 5 kW system that would produce about 20 kWh on a clear day, and a unit value of ₹7 per kWh, either the avoided purchase price or the export credit under your arrangement. Lost value for one day is 20 × 7 = ₹140. Ten days of unnoticed downtime is ₹1,400. For a larger system the arithmetic is the same and the number scales with kW. Your own tariff, your net-metering terms and your seasonal output change the figure, so substitute real values.

The practical point is the detection time. A fault discovered on the day costs a day. A fault discovered at the next bill can cost weeks, which is why alerts and a habit of glancing at the app matter more than any single hardware choice.

## What to record before you call anyone

A good fault report shortens every later step. Record these before changing the system:

1. Model name and serial number from the label.
2. Exact message and LED pattern, photographed.
3. Time of the fault and what generation looked like in the hours before.
4. Grid status: was there a power cut, voltage problem or storm?
5. Recent work on the system: cleaning, electrical work, new loads.
6. Anything unusual: sound, smell, heat or visible damage.
7. The array layout if you know it: modules per string and number of strings.
8. Your location and contact details.

Manufacturers ask for much the same list. A Growatt manual, for example, asks for serial number, model, error message, grid voltage, DC input voltage, whether the failure can be reproduced, whether it happened before and the ambient conditions. A Solis manual asks for serial number, dealer, installation date, a description including LED status, the array configuration and contact details. Having it ready turns a first call into a diagnosis.

## Safe escalation path

1. **Installer or EPC first, if you have one.** They know the as-built design, and many faults are string or wiring problems that need their drawings.
2. **The manufacturer's support channel.** For Qbits equipment, raise a request on the [Qbits support helpdesk](https://support.qbitsenergy.com/helpdesk/qbits-service-620){target="_blank" rel="noopener"} with the model, serial number, location and the fault as displayed. Ask for the fault code manual for your model if the display message is unclear. The [datasheet library](/download-datasheets/) confirms which product family you have, and the [on-grid inverter](/on-grid-inverter/) and [hybrid inverter](/hybrid-inverter/) pages describe the families. A hybrid unit also reports battery and backup-output messages that an on-grid unit never shows.
3. **A service partner near you.** The [authorized service partners directory](/authorized-service-partners/) lists partners by state and district. Confirm scope, coverage and any charges with the partner before work starts, because listings do not guarantee availability or response time.
4. **The DISCOM, for grid problems.** Repeated over-voltage or outages belong to the utility. Send them your timestamps and displayed voltage readings.
5. **Get a ticket number and a written diagnosis.** Use the ticket number in every follow-up. Ask what was found, what was done, and what warranty clause, if any, applies.

If there is a burning smell, smoke, water ingress, damaged cabling, repeated protective-device operation or a suspected insulation or arc fault, keep people away and have a qualified professional make the site safe before anything else.

### What the service ticket should show

| Field | What it should say | Why it matters |
| --- | --- | --- |
| Ticket reference | A unique number | Anchor for every follow-up |
| Fault as logged | Your exact message and symptom | Confirms the report was understood |
| Next step and timing | What happens next and by when, in writing | Lets you follow up against a stated commitment |
| Assigned partner or zone | Name or territory | Confirms the job is moving |
| Parts | Whether a part or a replacement unit is planned | Tells you what to expect on the visit |

Qbits does not publish a universal service deadline, so ask for the timing in writing for your case and keep it with the ticket.

## Repair or replacement: what decides it

The service provider decides after diagnosis, and the answer depends on the model, the fault and the written warranty for your unit. The factors that usually matter:

- **The fault.** A fan, connector or wiring defect is often repaired on site. Damage to power electronics from water ingress, a surge or burning may point to replacing the unit.
- **Repeat faults.** A unit with several different faults in a short period may be treated differently from a single isolated one.
- **Cause outside the inverter.** If the real cause is a string design error, a wet junction box or a poor earth, replacing the inverter will not fix it. Ask for the root cause in writing.
- **Warranty terms.** The public datasheets describe an expandable warranty but do not define the base term, the remedy, a registration deadline or exclusions. Obtain the current written warranty for your exact model, and read the [warranty claim guide](/blog/solar-inverter-warranty-claim/) before agreeing to chargeable work.

Photograph any physical damage before a technician arrives.

## Reliability evidence worth requesting

When someone quotes a failure rate, a "most reliable" label or a service promise, ask what sits behind it.

| Evidence | Minimum context needed |
| --- | --- |
| Failure rate | Population, models, installation dates, operating exposure and failure definition |
| Return rate | Sales denominator, observation period, exclusions and repeat returns |
| Downtime | Start and end rules, parts delay, installer delay and geography |
| Environmental tests | Standard, severity, laboratory, report and exact model coverage |
| Warranty data | Claim denominator, approval rules, remedy and unresolved claims |
| Service performance | Ticket population, percentile, geography and contractual target |

Without this context, labels such as "most reliable", "lowest RMA" or "fastest service" are marketing claims, not comparable evidence.

## Preventing the next stop

Most prevention is routine and inexpensive. A reasonable pattern, to be adapted to your manual and your installer's advice:

| Activity | Typical interval | Done by | What it catches |
| --- | --- | --- | --- |
| Look at the inverter and its surroundings | Monthly or quarterly | Owner, from outside | Blocked vents, dust, damage, wasp nests, water marks |
| Compare output with a clear-day baseline | Quarterly | Owner, via the app | Hidden downtime, a dropped string |
| Check terminations and DC connectors | Annual | Qualified technician | Loose or heated connections |
| Verify surge protection and earthing | Annual, before the monsoon | Qualified technician | Failed SPD, poor earth |
| Insulation resistance test | Annual | Qualified technician | Early insulation deterioration |
| Firmware updates | As the manufacturer releases them | Service channel | Known issues |

The [inverter maintenance guide](/blog/inverter-maintenance-india/), the [annual maintenance checklist](/blog/solar-annual-maintenance-checklist-india/) and the [pre-monsoon inspection checklist](/blog/pre-monsoon-solar-inspection-checklist/) give the detail. For anything that involves opening the unit or touching DC wiring, use a qualified technician and the manufacturer's service channel.
