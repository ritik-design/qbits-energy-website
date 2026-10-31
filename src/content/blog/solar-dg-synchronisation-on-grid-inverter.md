---
title: "Solar and DG Synchronisation with On-Grid Inverters"
seoTitle: "Solar DG Synchronization with On-Grid Inverters"
excerpt: "How to run solar with a diesel generator: four architectures, DG minimum load, reverse power, ATS design, a worked 250 kVA sizing and commissioning tests."
description: "Solar DG synchronization for Indian factories: four architectures, DG minimum load, reverse power, ATS design, a worked 250 kVA sizing and tests."
category: "Guide"
date: 2026-10-30
readTime: "17 min"
image: "/og/blog-solar-dg-synchronisation-on-grid-inverter.webp"
author: "Keyur Rakholiya"
keywords:
  - solar dg synchronization
  - solar dg synchronisation
  - solar diesel generator hybrid
  - on-grid inverter with diesel generator
  - dg sync controller solar
  - solar dg reverse power protection
  - solar dg minimum load
  - solar ats changeover design
relatedSlugs:
  - anti-islanding-protection-solar-inverters
  - best-zero-export-solar-inverters
  - solar-inverter-for-factory
  - solar-vs-diesel-generator-india
  - solar-inverter-commissioning-in-india
  - how-to-read-solar-inverter-datasheets
---

Solar DG synchronisation (also searched as solar DG synchronization) means running solar inverters and a diesel generator (DG) on the same bus without harming either. A plain on-grid inverter is built to follow the utility and to stop when the utility goes away. Put it on a bus that only a DG energises and one of three things happens: it stays off, it runs unpredictably, or it pushes power into the generator. None of these is a design.

To run solar and a DG together, something has to limit the PV output to what the generator can safely take, and it has to react faster than a load can trip. This post covers the four architectures in use, the three DG limits that set the solar cap (minimum load, reverse power, frequency and voltage tolerance), the transfer-switch layout, what the inverter datasheet must state, one worked sizing for a 250 kVA set, and the tests to run at commissioning. It is an engineering guide for C&I EPC teams, written from published standards and vendor documents, not from Qbits site data.

## Why a plain on-grid inverter and a DG do not mix

Two requirements pull in opposite directions.

First, the inverter must not energise a dead utility line. Regulation 11(6) of the CEA Connectivity Regulations (2013, amended 2019) requires a distributed generation resource running in parallel with the electricity system to cease to energise it within two seconds of an unintended island forming, and to wait at least 60 seconds of stable voltage and frequency before reconnecting. The [anti-islanding guide](/blog/anti-islanding-protection-solar-inverters/) covers the detection methods and the standards in full.

Second, a generator bus is not the utility. It is a smaller source with a governor and a voltage regulator, and the engine cannot absorb power. The 2013 regulations are about connection to the licensee's electricity system. They say nothing about how an inverter should behave on a private DG bus, so this part is practice, not regulation.

What an inverter does when a DG energises the bus depends on the model and its settings. SMA's own technical information for its PV-diesel systems says its inverters "always have to follow a reference grid" and self-synchronise to it, which shows a genset can serve as that reference when the system is engineered for it.

A generic on-grid inverter with default settings gives no such assurance. Its anti-islanding logic may trip on a weak DG, or it may connect and then hunt as the DG's frequency moves. Plan for the safe case: unless you have a written, model-specific DG-mode procedure, interlock the inverter off whenever the DG is the source.

Note also what IEC 62116 does and does not cover. Its 2014 edition scopes itself as a test procedure for islanding prevention measures used with utility-interconnected PV systems, run in a laboratory circuit against one resonant load. A passing report proves the anti-islanding function. It says nothing about parallel running with a generator.

## Solar DG synchronization: the four architectures in use

| Architecture | What runs during a DG event | What you add | Typical use | Main limit |
| --- | --- | --- | --- | --- |
| 1. Plain on-grid with changeover | Nothing solar. Inverters are off | ATS interlock and an inhibit signal to the inverters | Plants where outages are rare or DG hours are few | Solar is lost exactly when diesel is burning |
| 2. DG-synchronised (DG sync controller) | PV at a limit set by the controller | Controller, DG-side meter or CT, limit signal to every inverter, DG protection relay | Factories with long DG hours and a stable essential load | Needs inverters that accept an external limit; fast control is mandatory |
| 3. Hybrid with a grid-forming battery inverter | PV follows a voltage the battery inverter creates | Battery bank, grid-forming hybrid or storage inverters, DG input control | Sites that also want backup of critical loads without a DG start | Battery cost and size; small hybrids do not scale to factory loads |
| 4. Microgrid controller | PV, DG, battery and loads dispatched together | Supervisory controller, protection relays, communication to every asset | Large or multi-DG sites, high PV share | Engineering effort; commissioning is a project in itself |

**1. Plain on-grid with changeover.** This is the simplest and most common. The ATS moves the load to the DG, the inverters trip on loss of grid, and the PV array sits idle until the grid is back and the 60-second reconnect delay has passed. No synchronisation is needed because there is no parallel running. The only design duties are that the DG can never back-feed the utility, and that the inverters cannot energise the DG bus by accident.

**2. DG-synchronised.** The inverters run on the DG bus, but a controller caps their output. It reads DG power (and usually the grid status), subtracts the DG minimum load and a reserve, and sends a power limit to each inverter. It must also cut PV output fast when the load drops suddenly. SMA's Fuel Save Controller is one published example of this pattern: it receives genset data over Modbus/TCP and sends setpoints to the inverters. Other vendors publish similar controllers. The architecture is generic, but the interface is specific to each inverter and controller pairing.

**3. Hybrid with a grid-forming battery inverter.** A battery inverter creates the bus voltage and frequency, and the PV inverters follow it, so the DG becomes optional rather than the reference. This is a different product class. Qbits lists hybrid inverters of 3 to 12 kW for 48 V batteries. That range suits homes and shops. Whether any model can parallel to a factory scale, or accept a DG input, must be read from its own catalogue page.

**4. Microgrid controller.** A supervisory controller sees every source and load, and runs a dispatch rule. It is the right tool when there are several DGs, a battery, or a PV share high enough that a simple limiter cannot hold the bus stable. For one DG and one PV plant, architecture 2 is usually enough.

## Three DG limits that set the solar cap

### 1. Minimum load and wet stacking

A diesel engine run lightly for long periods does not burn fuel cleanly. Caterpillar's white paper on generator set underloading says that running a diesel set below 30 percent of rated output for extended periods "impacts the unit negatively". The most common consequence is exhaust slobber, also called wet stacking: a black, oily liquid that leaks from exhaust joints because low load keeps the cylinder cool and lets unburned fuel and oil through.

The paper also notes deposits behind the piston rings in long light-load running. Its remedy is to load the set to at least 30 percent for about 30 minutes for every four hours of light-load operation.

That is one vendor's published guidance, and set makers differ, so take the figure from your own DG's manual. The practical rule used in PV-diesel designs is the one in SMA's functional description: most gensets should not run below a certain power level, and a generously sized PV plant could unload them below it, so the controller reduces PV output (SMA says typically within five to seven seconds, with an adjustable rate). Treat "30 percent of kW rating" as a common starting value, not a standard.

Solar therefore cannot be allowed to take the DG down to idle. The DG minimum load is the first term in the cap.

### 2. Reverse power

If PV output exceeds the load on the DG bus, the surplus flows back into the generator. An engine cannot absorb it, so the set is effectively motored by the alternator. Gensets are normally protected by a reverse-power relay or controller function, which trips the set. A trip while the grid is down blacks out the factory.

The danger is a sudden load drop: a large motor trips or a feeder is shed while PV is at its cap. The controller's ramp-down must beat the DG's relay. SMA's document describes two layers. Normal changes follow an adjustable power adaption rate, and if that is too slow, the controller forces an immediate inverter shutdown, which SMA states takes under 2.5 seconds. Those are one vendor's figures. Take your own from the controller's manual and the DG relay's setting, and set the controller to act before the relay.

### 3. Frequency and voltage tolerance

The utility is stiff. A DG is not. ISO 8528-5 groups generating sets into performance classes G1 to G3, plus a user-defined G4. According to the table in Kohler's white paper on the standard, the permitted steady-state frequency band is within plus or minus 2.5 percent for G1, 1.5 percent for G2 and 0.5 percent for G3. On a 50 Hz set that is about 1.25, 0.75 and 0.25 Hz. The transient limits are wider: for G3 diesel, Kohler lists frequency limits of minus 7 and plus 10 percent for a sudden load step or rejection.

Now compare that with the inverter side. The CEA regulation sets outer trip limits of 50.5 Hz (over) and 47.5 Hz (under), clearing within 0.2 seconds, and allows the licensee to prescribe a narrower window. A G1 set at the edge of its band, or any set after a large load rejection, can reach the over-frequency trip. That is not a defect: the inverters are doing their job.

The cost is that when they trip, their output vanishes in one step and the DG sees a sudden load increase. Setting the PV share low enough that this step is survivable is a design decision, covered in the sizing example below.

SMA's technical information gives a rough guide for its own system: the effect of PV on a genset network is very low at a PV penetration of 10 to 15 percent of the gensets' rated apparent power, and above 20 percent special control mechanisms are needed, with a controller holding stable operation up to 60 percent. Read this as one vendor's engineering statement for its own equipment, not a rule for any inverter.

## Transfer-switch and ATS design

Whatever the architecture, the ATS is the point where safety is won or lost.

- **Open transition only, unless the DISCOM has approved paralleling.** The ATS breaks the grid path before it makes the DG path. Closed-transition transfer, where the DG briefly parallels with the utility, needs a synchronising check and utility approval, and it moves you out of this post's scope.
- **Mechanical and electrical interlock.** The grid breaker and the DG breaker must not be closable together. Use a mechanical interlock where the switchgear allows it, plus the control interlock.
- **Where the PV connects matters.** If the inverters tie in on the utility side of the changeover, the DG never sees them and architecture 1 is automatic. If they tie in on the load side, the DG bus is the PV bus too, and you need either an inhibit signal or architecture 2. Draw the single-line diagram before you pick the inverter.
- **An inhibit contact from the ATS.** When the ATS is on the DG, send a signal that trips the inverter's AC breaker or stops the inverters (architecture 1), or tells the DG sync controller to move to DG mode (architecture 2). A dry contact from the ATS is common practice. It is not a regulation.
- **Retransfer.** When the grid returns and the ATS moves back, the bus is dead for an instant. The inverters trip and then wait for the 60-second reconnect period. Expect the load to be fully on the grid for that minute, with no solar.
- **No back-feed to the utility.** The DG must never energise the DISCOM side. This is a life-safety point for the lineman, and it is why the interlock matters more than any control logic.

We could not retrieve the text of the CEA Safety Regulations, 2023 for a clause on standby sets and changeover. Check the regulation, the electrical inspector (CEIG) and your DISCOM's supply code for the installation, as this post does not state their requirements.

## What the inverter datasheet must state

Ask for the following in writing before you choose a model for a DG site. If a line is missing from the datasheet, it is a question for the vendor, not an assumption.

| Item | What to look for | Why it matters on a DG bus |
| --- | --- | --- |
| Anti-islanding standard and report | The standard and edition (IEC 62116 or the Indian adoption), and the test report for this model | Proves the anti-islanding function, not DG behaviour |
| Export or power limit control | A stated function that limits output to a set value or to a measured quantity | The mechanism that holds PV below the DG minimum load |
| External communication and limit interface | Which of RS485 with Modbus, Ethernet, a dry contact or an analogue input, with the register or signal map | How the DG controller reaches each inverter |
| Response time of the limit | Seconds from command to new output, and the ramp rate | Must be faster than the reverse-power relay |
| Behaviour on loss of communication | Fail-safe output (zero or a stored limit) | A lost link must not leave PV at full power |
| Ride-through | Low and high voltage and frequency ride-through, with the curve | Decides whether PV rides through a DG disturbance or drops out |
| Frequency and voltage window | Operating range and the trip settings you can change | A DG band can exceed a tight grid-code setting |
| Restart delay | The reconnection delay and whether you can set it | CEA regulation 11(6) requires at least 60 seconds on the utility side |
| Reactive power capability | Power factor range and whether it can be commanded | The DG supplies the reactive power PV does not |

The [datasheet reading guide](/blog/how-to-read-solar-inverter-datasheets/) explains how to treat a datasheet line against a type-test report. The [fault ride-through](/glossary/fault-ride-through/) entry defines that term. For the communication row, the [RS485 and Modbus integration guide](/blog/inverter-modbus-rs-scada-integration-ci-om/) explains what a register map must contain.

## What the Qbits documents do and do not say

Qbits sells inverters, not DG controllers. Here is what the public record shows, as of 30 October 2026.

- The Qbits product data lists the communication option for the on-grid families as Wi-Fi with optional RS485 or GPRS. For the hybrid families it says to verify the battery interface.
- The public datasheets we reviewed list islanding protection and name IEC 62116 among the standards. The QB-70-110KTLC-Pro datasheet, for example, lists a 400 Vac rated grid voltage with a 310 to 480 Vac range, a 45 to 55 Hz frequency range at 50 Hz, an adjustable power factor of 0.8 lead to 0.8 lag, and an RS485 or GPRS option.
- None of them states DG synchronisation, export or power limiting, a dry-contact or Modbus DG interface, or compatibility with any named DG controller.

So this post does not claim any Qbits model supports a DG-synchronised design. If your project needs one, treat it as an open item: confirm it in the datasheet and the user manual for the exact model, and put the question in your quote request. The list in the section above is the list to send. A listed RS485 option shows a physical port, not that a DG controller can send a power limit through it.

## A worked sizing: 250 kVA DG at a factory

This example is illustrative. The numbers are assumed for the arithmetic and are not from a Qbits project.

**Assumptions**

- The factory's connected load in grid mode is 400 kW.
- The DG is rated 250 kVA at 0.8 power factor, so 200 kW. (Check whether your set's kW rating is standby or prime.)
- In an outage the DG carries essential loads only, because 200 kW cannot carry 400 kW. Load shedding sets the essential load at 100 kW at the quietest point of the day and 150 kW at the busiest.
- DG minimum load is set at 30 percent of its kW rating, so 60 kW.
- The largest single block that can trip on the essential bus is 40 kW.
- The PV plant is 300 kW AC (assumed).

**Step 1: static cap (no fast controller).** PV must satisfy two limits at the quietest point (100 kW).

| Limit | Calculation | Result |
| --- | --- | --- |
| Keep the DG above minimum load | 100 kW minus 60 kW | 40 kW |
| Survive the largest block tripping with no reverse power | 100 kW minus 40 kW | 60 kW |
| Static cap | The lower of the two | 40 kW |

A fixed cap of 40 kW is 20 percent of the DG's kW rating, and 13 percent of the 300 kW plant.

**Step 2: dynamic cap (DG sync controller).** The controller follows the DG load, and the cap moves with it: load minus 60 kW. At 150 kW load the cap is 90 kW, which is 45 percent of the DG kW rating and 30 percent of the plant. At 100 kW load it falls back to 40 kW. This is only safe if the controller and the inverters respond faster than the largest load step. Otherwise fall back to the static cap.

**Step 3: check the DG's kVA as well as its kW.** Take the 150 kW case with the load at 0.9 power factor, so the reactive demand is about 72.6 kVAr. With PV at 90 kW, the DG supplies 60 kW and still all 72.6 kVAr. That is about 94 kVA, 38 percent of the 250 kVA set, at a power factor of about 0.64 lagging.

The set is nowhere near its kVA limit, but its power factor has dropped well below the 0.8 rating, which is a point for the alternator and AVR. A DG sync controller that handles reactive power, or an inverter that can supply some, changes this picture. Both are model-specific.

**Step 4: the loss-of-PV step.** If the 90 kW of PV trips on over-frequency, the DG goes from 60 kW to 150 kW in one step. The set is then at 75 percent of its rating, and the step itself is 45 percent of the rating. Check that the set can accept it, using its load acceptance data.

**What this tells you.** In DG mode this plant gets between 13 and 30 percent of its AC capacity, and only if the controller works. Do not size the plant for DG hours. Size it for the 400 kW grid-mode load, and treat the DG-mode output as a bonus. The economics of displacing diesel are in the [solar vs diesel generator comparison](/blog/solar-vs-diesel-generator-india/). Factory-level sizing is in the [factory inverter guide](/blog/solar-inverter-for-factory/).

If you want this arithmetic tested against your own single-line diagram, DG nameplate and essential-load profile, [send the project details to Qbits](/contact-us/). Quotes are per model and quantity.

## Commissioning tests

Run these in order, and record the readings. The wider checklist is in the [commissioning walkthrough](/blog/solar-inverter-commissioning-in-india/).

| Test | How | Pass looks like |
| --- | --- | --- |
| Interlock | Try to close grid and DG breakers together. Try to enable the PV breaker with the ATS on DG (architecture 1) | Not possible |
| Simulated outage, PV disabled | Open the grid incomer. Record the DG start, the ATS operation and the bus voltage and frequency | Stable bus. Inverters off |
| Reconnect delay | Restore the grid. Time the inverters' return | No restart before the configured delay (at least 60 seconds) |
| Minimum-load limit | In DG mode with PV enabled, hold a steady load and record DG kW | DG never falls below the set minimum load |
| Limit step | Change the limit and the load. Record how fast PV follows | Response inside the controller's stated time |
| Load rejection | Trip a known block with PV at its cap | No reverse-power trip. PV falls inside the stated time |
| Loss of communication | Remove the link to the inverters | PV falls to the fail-safe value |
| Over-frequency trip | Only if the DG can be moved safely: raise its frequency setting | Inverters trip, DG takes the step without tripping |
| Retransfer | Return the load to the grid | No back-feed, no DG trip |
| Anti-islanding | Open the main incomer in grid mode | Output ceases inside the time your DISCOM requires |

Record the DG's kW, kVA, voltage and frequency at each step, with the settings of the controller and the reverse-power relay, so that the next engineer can reproduce them. The [anti-islanding guide](/blog/anti-islanding-protection-solar-inverters/) explains the grid-side test, and the guide to [zero-export inverters](/blog/best-zero-export-solar-inverters/) covers the related grid-side export limit.

## What this post could not check

- **No Indian regulation text on DG parallel operation.** The CEA 2013 regulations (read as a consolidated copy on CBIP, not the gazette) cover connection to the electricity system. We found no clause there, and could not open the CEA Safety Regulations, 2023, so ATS, interlock and DG-mode points above are practice.
- **Vendor figures are theirs.** The Caterpillar 30 percent and 30-minutes guidance, the Kohler table of ISO 8528-5 classes and the SMA timings and penetration figures are each one source's published statement. We did not read ISO 8528-5 itself. Confirm against your own DG manual and controller documents.
- **Qbits support.** No DG synchronisation, export limit or DG-interface claim appears in the Qbits product data or in the public datasheets we read, so we make none.
- **Sizing numbers are illustrative.** The 250 kVA, 400 kW, 100 and 150 kW and 40 kW figures are assumptions for the arithmetic, not site data.
- **State and DISCOM rules.** We did not read any state grid code or DISCOM supply code on DG parallel operation. Ask the utility.

## Next step

Draw the single-line diagram first: where the DG, the ATS and the PV tie in. Pick the architecture from the DG hours and the essential load, then ask each inverter vendor for the datasheet items in the table above. When you have a shortlist, [send the project details to Qbits](/contact-us/) with the DG nameplate, the essential-load range and the question about a limit interface. Quotes are per model and quantity.
