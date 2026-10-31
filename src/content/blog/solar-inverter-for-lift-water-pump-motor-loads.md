---
title: "Solar Inverter for Homes with a Lift or Water Pumps (Motor Loads)"
seoTitle: "Solar Inverter for a Lift or Water Pump at Home"
excerpt: "On-grid solar does not run your lift or pump in a power cut. Learn starting current, hp to kVA, phase checks and how to size a backup inverter for a motor."
description: "Solar inverter for lift and water pump at home: why on-grid solar leaves motors on the grid, starting current, hp to kVA conversion and a backup sizing check."
category: "Guide"
date: 2026-10-30
readTime: "16 min"
image: "/og/blog-solar-inverter-for-lift-water-pump-motor-loads.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter for lift
  - solar inverter for water pump at home
  - solar inverter motor load
  - hybrid inverter for borewell pump
  - solar inverter starting current motor
  - will solar run my lift in power cut
relatedSlugs:
  - solar-inverter-power-cut-backup
  - solar-inverter-for-water-pump
  - single-vs-3-phase-inverter
  - best-three-phase-hybrid-inverter-homes-shops
  - solar-inverter-for-ac
  - read-net-meter-bill-after-going-solar
---

**An ordinary on-grid solar inverter does not run your lift or water pump in a power cut.** It also does not need to be sized for their starting current in the day. With on-grid solar, the lift and the pump keep drawing from the grid exactly as before. Only when you want a hybrid (battery backup) inverter to run a motor during an outage does the motor's starting current decide the purchase.

So the first question is not "which inverter starts a lift?" It is "do I want the lift or pump to run when the grid is off?" This post helps you answer that. If the answer is yes, it then helps you check the numbers.

> **What this is built on**
>
> - The starting-current range comes from one pump maker's own instructions (Grundfos SP/SPE, US edition, read on 30 October 2026). It is not a rule for every pump, and it says nothing about lift motors.
> - The lift rescue-device rule is clause 8.4.5 of National Building Code of India 2016, Part 8, Section 5, which we opened and read.
> - Qbits figures come from the Qbits hybrid catalogue pages for the QBH single-phase and three-phase families, as printed. Those pages do not print any motor-starting rating.
> - Sizing examples are **illustrative**. We did not test any inverter with any motor.

## What happens to a lift or pump with each type of solar inverter?

| Your setup | Grid on, sun up | Grid on, night | Grid off |
| --- | --- | --- | --- |
| On-grid inverter only | Lift and pump run. They draw from solar and grid together, and the grid supplies the start-up surge | Run from the grid | Stopped. The inverter shuts off by design, so nothing is powered |
| Hybrid inverter with a backup board that includes the motor | Runs from the grid, solar or both | Runs from the grid | Runs from battery and solar, but only if the inverter and battery can supply the motor's start |
| Hybrid inverter, motor kept off the backup board | Runs as above | Runs from the grid | Motor stops. Lights, fans and fridge on the backup board keep running |
| Dedicated solar pump drive (separate from the house inverter) | Pump runs from its own panels | Does not run | Runs while sunlight lasts |

The first row surprises many people. A grid-tied inverter stops sending power when the grid fails, to protect the line workers. Our [power cut backup guide](/blog/solar-inverter-power-cut-backup/) explains why panels in the sun still leave the house dark.

In that first row, the pump's start-up surge does not pass through the inverter. The motor is on the same distribution board as the inverter. The grid connection supplies the extra current for that first fraction of a second, and the inverter just adds its output to the board. This is why a 5 kW on-grid inverter can sit beside a 3 kW pump without any starting-current worry from the inverter side. The pump motor, the cable and the main breaker still have to be healthy, as before.

One caution. If an installer proposes to wire the pump through the inverter's own backup output, you are in the hybrid case, not the on-grid case. Read on.

## Why is a motor's starting current higher than its running current?

An induction motor draws far more current in its first moments than when it is running. Most pumps and lift machines use this type of motor. The extra current at start is also called inrush or locked-rotor current.

One named source gives a range. Grundfos's installation and operating instructions for its SP and SPE submersible pumps (literature 5840206, English US edition, motors on 60 Hz) say that direct-on-line starting current is between 4 and 6.5 times the full-load current. They call it locked-rotor current. They add that the motor's run-up time is extremely short, a maximum of 0.1 second. This is Grundfos's statement about its own submersible motors. A different pump, a single-phase motor or a lift machine can sit outside that range. The real figure lives on the nameplate or in the maker's catalogue.

The short duration matters. A pump motor reaches speed in a fraction of a second. A lift machine with a drive ramps up more slowly, but the supply sees the drive's input current, not the motor's locked-rotor current. That is a question for the lift maker.

For this post we use 4 to 6.5 times as an **illustrative** range in the worked examples. We do not apply it to lifts as a fact. We use it to show how the arithmetic behaves.

## How do you convert motor horsepower to kW and kVA?

Motor nameplates in India often show horsepower (hp). Inverters are rated in watts (W) or volt-amperes (VA). Three steps connect them.

1. **Shaft power in kW** = hp x 0.746. A 1 hp motor delivers 0.746 kW at the shaft.
2. **Electrical input in kW** = shaft kW / efficiency. The motor wastes some power as heat, so the supply gives more than the shaft receives.
3. **Apparent power in kVA** = input kW / power factor. Power factor is how well the motor uses the current it draws. Motors are below 1.

Then the current:

- Single-phase: current (A) = kVA x 1000 / volts
- Three-phase: current (A) = kVA x 1000 / (1.732 x line voltage)

An inverter's backup output is limited by both watts and the current it can carry. Watts alone is not enough for a motor.

Why does this matter? A motor at start has a poor power factor, so it draws a lot of current for each watt of useful work. The inverter must carry that current. The battery, on the other hand, mostly supplies real power. They are two separate checks.

## Is your pump or lift single-phase or three-phase?

Check before you size anything. A single-phase connection has one live wire and a neutral, and a three-phase connection has three live wires and a neutral. Look at your electricity meter and bill, or ask your electrician. The [single-phase versus three-phase guide](/blog/single-vs-3-phase-inverter/) shows how to check and why it matters for solar.

- **Borewell and surface pumps** at homes can be single-phase or three-phase. The nameplate says which. Do not guess from hp.
- **Home lifts** may need a three-phase supply, so check the connection before you assume otherwise. The lift panel's nameplate and the lift maker's data tell you the supply it needs.
- **A hybrid inverter's output phase must match the motor.** A single-phase hybrid cannot run a three-phase motor. For three-phase backup, look at three-phase hybrid models. Our [three-phase hybrid datasheet comparison](/blog/best-three-phase-hybrid-inverter-homes-shops/) reads six of them on the same fields.

## Can a soft starter or drive cut the starting current?

Yes, three methods do, and each has a trade-off. Direct-on-line (DOL) is the plain switch-on: the motor sees full voltage at once and draws its full starting current. The table shows the other three.

| Method | What it does | Trade-off |
| --- | --- | --- |
| Soft starter | Raises the voltage over a few seconds, so the current rises gently | Adds a box and a setting to get right. Check the pump or lift maker allows it |
| Star-delta starter | Starts the motor in star, then switches to delta. In star the line current is about one third of the DOL value, from standard motor theory | Needs a motor with six terminals. The motor also has less torque while starting |
| Variable frequency drive (VFD) | Starts at a low frequency and ramps up, so the supply current at start is kept low | Costs more. The pump maker sets the rules. Grundfos's instructions for its three-phase submersible motors, for example, call for an output sine-wave filter and a minimum running frequency of 30 Hz. Ask your pump maker for its own |

For a backup inverter, the lower the starting current, the smaller the surge it must be able to supply. That is why it is worth asking about a soft starter or a VFD before asking for a bigger inverter. Whether a given lift or pump can take one of these is the maker's call, not the inverter dealer's.

## What makes a home lift different from a pump?

A home lift adds three things a pump does not.

**1. A rescue device is already part of the lift.** Clause 8.4.5 of NBC 2016, Part 8, Section 5 says a battery operated Automatic Rescue Device (ARD) shall be provided on all lifts. Its job is to take the lift to the nearest possible landing in case of power failure, including failure of one or more phases. The clause makes it optional for a lift that has a backup generator with an automatic mains failure panel. It also asks for an indicator inside the car and batteries enough for at least three rescue operations without recharging. It asks too for a car light and at least one fan until the rescue ends. We read the clause text. Whether it binds your lift depends on your local rules and the lift's standard. Ask the lift maker which ARD your lift has.

This changes the question. The lift's safety in a cut already comes from its own ARD. Running the lift for normal trips during a cut is a convenience, and the house inverter is not what makes it safe.

**2. A lift going down can send power back.** Some lift drives are regenerative. That means they can send power back to the supply when a heavy car goes down or a light car goes up. We could not open a primary lift-maker document on what a battery-backed inverter does with that returned power. So we state no risk and no fix. Ask the lift maker: "Does this drive regenerate? What happens if it is fed from a battery inverter on backup? Do you approve it?" Get the answer in writing before the lift goes on a backup board.

**3. The lift's controller has its own input rating.** Ask the lift maker for the panel's input rating in kVA and its peak input current at start. The inverter sees that figure, not the motor's horsepower.

## How do you size a backup inverter for a motor?

Do this only if you decided the motor must run in a cut. Make five checks, in order.

1. **Running load.** Motor input kVA plus everything else on the backup board, compared with the inverter's rated backup output.
2. **Starting load.** Take the starting current from the pump or lift maker, not a guess. Convert it to kVA. Compare it with the inverter's overload or peak figure and how long that lasts.
3. **Output current.** Compare the starting current in amperes with the maximum output current on the sheet. A sheet that prints no peak in amperes leaves you to ask.
4. **Battery current.** The battery's maximum discharge current in amperes, at its low-voltage end, against the real power the load takes. Our [battery sizing guide](/blog/battery-sizing-hybrid-solar/) covers the energy side.
5. **Phase.** A single-phase motor needs single-phase output. A three-phase motor needs a three-phase output, with the load spread as the sheet allows.

Datasheets print continuous and overload figures, and many motor-start questions are left open. A line like "more than 200% for 15 seconds" says how much and for how long. It does not say whether a motor's start current, which has a poor power factor, is covered. Ask the supplier in writing for the surge rating and the test condition.

## Worked example: a 1 hp pump and a lift

**Illustrative only.** The efficiencies, power factors and multipliers below are assumptions made to show the arithmetic. Your nameplate and the makers' data replace them.

### A 1 hp single-phase pump, 230 V

**Assumptions.** Efficiency 0.60, running power factor 0.75, starting current 4 to 6.5 times running (the Grundfos range, used here only as an illustration), starting power factor 0.4.

| Step | Working | Result |
| --- | --- | --- |
| Shaft power | 1 x 0.746 | 0.746 kW |
| Input power | 0.746 / 0.60 | 1.24 kW |
| Apparent power | 1.24 / 0.75 | 1.66 kVA |
| Running current | 1,660 / 230 | 7.2 A |
| Starting current, 4x and 6.5x | 7.2 x 4 and 7.2 x 6.5 | 28.8 A and 46.8 A |
| Starting kVA | 28.8 x 230 and 46.8 x 230 | 6.6 kVA and 10.8 kVA |
| Real power at start | 6.6 x 0.4 and 10.8 x 0.4 | 2.65 kW and 4.30 kW |
| Battery current at start, 48 V, 93% conversion | 2,650 / 0.93 / 48 and 4,300 / 0.93 / 48 | about 59 A and 96 A |

Now the Qbits single-phase hybrid sheet. For the QBH-5KS48P the catalogue prints four figures. Rated off-grid output is 5,000 W. Maximum output is "more than 200%" for 15 seconds. Maximum output current is 23 A. The battery limit is 120 A.

- **Running:** 1.66 kVA is well inside 5,000 W, leaving room for a fridge and fans.
- **Starting kVA:** 6.6 kVA is under the 10 kVA that 200% of the 5,000 rated output implies. 10.8 kVA is above it.
- **Starting amperes:** 28.8 A to 46.8 A is 1.25 to 2.0 times the 23 A maximum output current. The sheet prints no peak in amperes.
- **Battery:** 59 A and 96 A are inside 120 A on these assumptions.

So on paper, a 1 hp pump started direct-on-line sits on the edge of that sheet's printed limits. A soft starter or a VFD would bring it comfortably inside. That is arithmetic on printed figures. It is not a statement that this inverter will start a pump. The sheet says nothing about motors, so ask for the surge rating in writing.

A pump that runs 30 minutes to fill the overhead tank uses 1.24 kW x 0.5 h = 0.62 kWh at the load. That is about 0.67 kWh from the battery at 93%. That energy is small beside the start-up current question.

### A 5.5 kW three-phase lift motor, 400 V

**Assumptions.** Efficiency 0.85 and power factor 0.80 at running load. There are two start cases. One is direct-on-line at 4 to 6.5 times running current (again only an illustration). The other is a drive that limits the supply current to 1.5 times running current. A lift's real value must come from the lift maker.

| Step | Working | Result |
| --- | --- | --- |
| Input power | 5.5 / 0.85 | 6.47 kW |
| Apparent power | 6.47 / 0.80 | 8.09 kVA |
| Running current | 8,090 / (1.732 x 400) | 11.7 A |
| Start, direct-on-line, 4x to 6.5x | 11.7 x 4 and 11.7 x 6.5 | 46.7 A and 75.9 A |
| Start kVA, direct-on-line | 1.732 x 400 x 46.7 and x 75.9 | 32.4 kVA and 52.6 kVA |
| Start, with a drive limit of 1.5x | 11.7 x 1.5 | 17.5 A, 12.1 kVA |
| Battery current, running, 48 V | 6,470 / 0.93 / 48 | about 145 A |
| Battery current, drive start, 48 V | 145 x 1.5 | about 217 A |

Now compare with the Qbits three-phase hybrid sheet. It prints rated off-grid outputs of 10,000 W and 12,000 W for the 10K and 12K models. It prints a peak of "more than 200%" for 15 seconds, and battery limits of 210 A and 250 A.

| Check | QBH-10KS48P3 | QBH-12KS48P3 |
| --- | --- | --- |
| Running 8.09 kVA against rated output | Inside 10,000 W | Inside 12,000 W |
| Direct-on-line start, 32.4 to 52.6 kVA, against the 200% peak (20 kVA and 24 kVA) | Over | Over |
| Drive start, 12.1 kVA, against the 200% peak | Inside | Inside |
| Battery at the drive start, about 217 A | Over 210 A | Inside 250 A |

Two readings follow. First, a lift motor started direct-on-line does not fit either model on these assumptions. That is a good reason to ask the lift maker what the controller draws at start. Second, even with a drive, the battery's current limit can bind before the inverter's peak does. The sheet prints one battery current figure and does not say whether a short peak above it is allowed. Ask.

This table says nothing about regeneration, the ARD, the phase balance on the backup board or the battery's own limit. The three-phase sheet also prints no unbalanced-load rating and no per-phase versus total statement.

To see which Qbits families suit homes, open the [residential solar page](/residential-solution/). Then bring your motor's nameplate and the lift panel's input rating to the conversation.

## What do the Qbits datasheets print about backup and surge?

The table holds only the facts we read from the catalogue pages on 30 October 2026. Both are undated image PDFs.

| Item | QBH single-phase family | QBH three-phase family |
| --- | --- | --- |
| Models | QBH-3KS to 6KS48P | QBH-5KS to 12KS48P3 |
| Rated off-grid output | 3,000 to 6,000 W by model | 5,500 to 12,000 W by model |
| Maximum off-grid output | More than 200% for 15 seconds | More than 200% for 15 seconds |
| Maximum off-grid output current | 14 to 27 A by model | 8.3 to 20 A by model |
| Battery | 48 V rated, 75 to 120 A by model, lithium or lead-acid | 48 V rated, 120 to 250 A by model, lithium or lead-acid |
| Switch-over time | No row in the data table | No row in the data table |
| Motor-start rating | Not printed | Not printed |
| Compatible battery list | Not printed | Not printed |

The single-phase headline reads "Off-grid peak power of twice of rated power within 15 seconds", which we repeat as printed. The data table has no switch-over row. A motor feels any gap while the inverter changes over, so ask Qbits for the switch-over time in writing, with the test condition, before you rely on backup for a motor.

We do not claim that any Qbits model starts a lift or a pump motor. The sheets do not say so. For the three-phase family, see the [product page](/our-products/QBH-5-12KS48P3/). For the single-phase family, see the [QBH 3KS to 6KS48P page](/our-products/QBH-3-6KS48P/). Each carries the datasheet. Pricing is by quote.

## Should you run the pump at midday, on solar?

Yes, with an on-grid system a pump uses solar best when it runs while the panels produce. If you fill an overhead tank, a timer or smart plug can start the pump around late morning to early afternoon. The house then uses solar at once, and the grid tops up the start-up surge.

How much this saves depends on your billing. Under net metering, units you export are credited against units you import, so the clock time matters less than the monthly total. Our [net meter bill guide](/blog/read-net-meter-bill-after-going-solar/) shows how to read that credit. If your DISCOM bills by time of day, ask which hours cost more. Do not assume a rule for your state without checking your own tariff.

A **dedicated solar pump** is a different system. It has a pump drive that takes power from its own panels and drives a suitable motor. It does not use the house inverter, and it does not run at night or in cloud unless it has other power. Our [water pump inverter guide](/blog/solar-inverter-for-water-pump/) covers pump drives and sizing in more depth. Here the point is only that it is separate from the house inverter.

## Questions to ask before you buy

For the installer:

- Will the lift and pump stay on the grid side, or go on the inverter's backup board? Why?
- If they go on backup, what is the surge rating of the exact model, in amperes and kVA, for how many seconds? Please write it down.
- Has this exact inverter and battery been used with a motor of this size? Show the commissioning record, not a promise.
- What is the battery's maximum discharge current, and does it allow a short peak?
- Who tests the motor start during a real changeover, and when?

For the pump maker or dealer:

- What is the starting current at my voltage? Is the motor single-phase or three-phase?
- Can I fit a soft starter or a VFD? Which one do you approve?

For the lift maker:

- What is the controller's input rating in kVA and the peak current at start?
- Is the drive regenerative? Is it approved for a battery inverter on backup?
- What ARD does the lift have, and what does it do during a cut?

## Your next step

Write down the nameplate data for each motor: hp or kW, volts, phase, rated current and the starter type. Then decide whether each one needs to run in a cut. If the answer is no, choose an on-grid system and keep the motors on the grid side. You are done with this topic. If the answer is yes, ask for the written surge rating, battery current and test record before you buy.

To compare Qbits inverter families for your home, start at the [residential solar page](/residential-solution/). To find a service partner near you and confirm what they cover, use the [authorized service partners directory](/authorized-service-partners/).
