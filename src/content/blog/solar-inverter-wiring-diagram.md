---
title: "Solar Inverter Wiring Diagram for Indian Homes 2026: Panels to Meter Board"
excerpt: "A complete solar inverter wiring diagram for Indian homes: DC strings to inverter, SPD and earthing, AC to the distribution board, and net meter setup."
description: "Understand the full solar inverter wiring diagram for an Indian home: DC string wiring, isolators, SPD and earthing, AC output to the DB, net meter connection, cable sizing, and the sign-off checklist."
category: "Technical"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "18 min"
image: "/blog-images/solar-inverter-wiring-diagram.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter wiring diagram
  - solar inverter wiring diagram india
  - solar system wiring diagram
  - solar inverter connection diagram
  - solar earthing diagram
  - dc ac wiring solar inverter
  - net meter wiring connection
faqs:
  - q: "What are the main parts of a solar inverter wiring diagram?"
    a: "A residential solar inverter wiring diagram has five main parts. First, the DC side: solar panels wired in series strings, MC4 connectors, a DC combiner or surge protection device, and a DC isolator. Second, the inverter itself, which converts DC to AC. Third, the AC side: an AC isolator, AC surge protection, and an MCB or RCCB in the distribution board. Fourth, the earthing system: two or three earth pits bonded to the panel frames, inverter chassis, and lightning arrester. Fifth, the net meter, a bidirectional meter installed between the distribution board and the grid supply by your DISCOM."
  - q: "What size cable is used from solar panels to the inverter in India?"
    a: "Most Indian residential rooftop systems use 4 sq mm single-core DC solar cable from the panel strings to the inverter, and 6 sq mm where string runs are long or current is higher. The cable must be rated for 1.5 kV DC, UV resistant, and heat resistant up to 120 degrees Celsius, conforming to EN 50618 or IS 17293. Ordinary house wiring cable must never be used on the DC side because rooftop temperatures and DC voltage stress will degrade its insulation within a few years."
  - q: "How many earthing pits are required for a home solar system?"
    a: "Best practice under IS 3043 is three separate earth pits for a rooftop solar system: one for the panel frames and mounting structure, one for the inverter and AC equipment including the surge protection device, and one dedicated pit for the lightning arrester where one is installed. Where no lightning protection system exists, a minimum of two pits is acceptable. Each pit should measure below 5 ohms of earth resistance, and 1 ohm or less is preferable for the pit serving the inverter."
  - q: "Can I do solar inverter wiring myself in India?"
    a: "No. Solar inverter wiring involves DC voltages up to 600 V that stay live whenever the sun is out, and AC work inside your distribution board that connects to the grid. In India this work must be done by a licensed electrician, and for PM Surya Ghar subsidised systems it must be done by an MNRE empanelled vendor whose installation will be inspected by the DISCOM. This guide is written to help you understand and verify the work, not to do it yourself."
  - q: "What is a DC isolator and why is it mandatory in solar wiring?"
    a: "A DC isolator is a load-rated switch installed between the solar panel strings and the inverter. It lets a technician fully disconnect the DC supply before servicing the inverter. It is mandatory because DC current sustains an arc far more stubbornly than AC, so an ordinary switch or MCB used as a DC disconnect can weld shut or catch fire. IS 16221 and the inverter manufacturer's installation manual both require a correctly rated DC isolator, typically mounted within reach of the inverter."
  - q: "How is a net meter wired in a solar system?"
    a: "The net meter is a bidirectional meter that sits between your home's distribution board and the DISCOM grid supply. The inverter's AC output feeds the loads in your home through the distribution board first, and any surplus flows backward through the net meter to the grid. The meter records import and export separately. The DISCOM installs and seals the net meter after inspecting your system, and it is the only part of the wiring the homeowner or installer is not permitted to touch."
  - q: "What should I check before signing off a solar installation?"
    a: "Before signing off, verify five things. First, the DC cables are proper solar-rated cable in conduit, not ordinary house wire. Second, a DC isolator and surge protection devices are installed on both the DC and AC sides. Third, the earth pits are physically present and the installer gives you a measured earth resistance reading below 5 ohms. Fourth, all MC4 connectors are crimped with the matching tool, not twisted and taped. Fifth, the system passes DISCOM inspection and the net meter is installed and sealed before final payment is released."
  - q: "Why does my inverter trip during the monsoon and is it a wiring problem?"
    a: "Monsoon tripping is most often an insulation or earthing problem, not an inverter fault. Water entering a poorly crimped MC4 connector or a cracked cable sheath creates a leakage path to earth, and the inverter's residual current monitoring shuts the system down, which is exactly what it should do. Undersized or high-resistance earthing makes this worse because fault currents cannot clear cleanly. If your inverter shows insulation or ground fault errors after rain, ask your installer for an insulation resistance test on the DC strings before anything else."
featured: false
---

Most homeowners who search for a solar inverter wiring [diagram](/blog/inverter-battery-connection-diagram/) are not planning to wire anything themselves. They are about to spend ₹2 Lakh to ₹4 Lakh on a rooftop system, and the installer has promised to finish in two days. What they want to know is what should actually be on their roof and inside their meter room before they sign the completion certificate. That instinct is correct. In our commissioning work across residential installs, most first-year failures trace back to wiring and earthing shortcuts. They are not caused by faulty inverters or panels.

This guide walks the complete wiring path of a typical Indian home solar system. It runs from the panel strings on the roof to the bidirectional net meter on your wall. It covers the DC side, the AC side, surge protection, earthing pits, cable sizing, and the checks to run before you release the final payment. One boundary is firm: this is an explainer for understanding and verification. All wiring must be done by a licensed electrician, and for subsidised systems by an MNRE empanelled vendor. DC strings carry up to 600 V whenever the sun is out. There is no safe DIY version of this work.

> **TL;DR**
> - A home solar wiring diagram has 5 zones: DC strings, inverter, AC distribution, earthing, and the net meter.
> - DC strings on Indian rooftops run at up to 600 V DC and must use 1.5 kV rated solar cable, never house wire.
> - Most 3 kW to 5 kW homes use 4 sq mm DC cable and 6 to 10 sq mm AC cable, per typical IS 8130 copper ratings.
> - IS 3043 best practice is 3 earth pits: array, inverter plus AC, and lightning protection, each below 5 ohms.
> - A DC isolator and surge protection on both DC and AC sides are mandatory under IS 16221 for subsidised systems.
> - The net meter is installed and sealed by the DISCOM only, after inspection, per CEA connectivity regulations.
> - Wiring and earthing defects are the top cause of first-year inverter faults we see in residential RMA inspections.

**Short version.** A solar inverter wiring diagram for an Indian home shows five connected zones. Panels wired in series strings feed a DC isolator and DC surge protector, then the inverter. The inverter's AC output passes through an AC isolator, surge protector, and MCB into the home distribution board. A bidirectional net meter between the board and the grid records import and export. Two or three earth pits bond the panel frames, inverter chassis, and lightning arrester.

If you want the component-level view inside the inverter itself, the [solar inverter circuit diagram](/blog/solar-inverter-circuit-diagram/) post is the sibling to this one. This post stays at the system level: every cable, switch, and earth wire between the roof and the meter board.

## What a Solar Inverter Wiring Diagram Actually Shows

A wiring diagram is a map of conductors and protective devices, not a plumbing sketch. It shows which cable goes where, what protection sits on each segment, and where the system is bonded to earth.

For a grid-connected Indian home, the diagram covers five zones. Zone one is the DC array: panels, string wiring, and MC4 connectors. Zone two is DC protection: the combiner or surge protection device and the DC isolator. Zone three is the inverter. Zone four is AC protection and the distribution board. Zone five is the net meter and the grid connection, plus the earthing network that runs underneath all of it.

The diagram matters because every zone has a failure mode that a homeowner can spot. Missing DC isolator, wrong cable type, one shared earth pit, no SPD before the monsoon. Each is visible if you know what to look for. That is the practical use of understanding the diagram.

## The Complete Wiring Path: Panels to Meter Board

Here is the full path of a typical 3 kW to 5 kW single-phase rooftop system, which covers the large majority of Indian homes under PM Surya Ghar. The same layout scales to larger homes with a three-phase inverter.

```
 SOLAR PANELS (String 1)        SOLAR PANELS (String 2)
  [P]-[P]-[P]-[P]-[P]           [P]-[P]-[P]-[P]-[P]
        |  MC4 (+) (-)                  |
        |  4 sq mm DC solar cable       |
        +---------------+---------------+
                        |
                 [DC SPD / Combiner]
                        |
                  [DC ISOLATOR]          <--- mandatory, load-rated DC switch
                        |
              +---------------------+
              |      INVERTER       |  <--- MPPT input, DC to AC conversion
              +---------------------+
                        |
                  [AC ISOLATOR]
                        |
                    [AC SPD]
                        |
            +-------------------------+
            |   DISTRIBUTION BOARD    |  <--- MCB / RCCB, feeds home loads
            +-------------------------+
                        |
              [BIDIRECTIONAL NET METER]  <--- installed + sealed by DISCOM
                        |
                   GRID SUPPLY

 EARTHING (independent of the power path):
  Pit 1: panel frames + mounting structure
  Pit 2: inverter chassis + SPD earth + AC equipment
  Pit 3: lightning arrester (if installed)
  Target: below 5 ohms each, per IS 3043
```

Read it as two parallel systems. The power path runs left to right, panels to grid. The earthing system runs underneath and touches the array frame, the inverter chassis, and the surge devices. Both must be complete. A system with perfect power wiring and weak earthing will still trip every monsoon and will fail DISCOM inspection.

The sections below walk each zone in order.

## DC Side Wiring: Strings, MC4 Connectors, and the DC Isolator

The DC side starts at the panels. Panels are wired in series to form a string. This raises the voltage to the inverter's operating window, typically 200 V to 550 V for a residential string inverter. String length is set by the panel voltage, the coldest local temperature, and the inverter's maximum input voltage. The [solar string sizing and overcurrent protection](/blog/solar-string-sizing-ocp-india/) guide covers that calculation.

Three things on the DC side deserve a homeowner's attention.

**Cable type.** The run from the roof to the inverter must be single-core DC solar cable rated for 1.5 kV DC. It must also be UV resistant and heat resistant to 120 degrees Celsius, conforming to EN 50618 or IS 17293. Ordinary PVC house wire fails on rooftops: UV cracks the insulation, and DC stress accelerates the damage. Most residential strings use 4 sq mm, sometimes 6 sq mm for longer runs. The [DC cable](/glossary/dc-cable/) glossary entry explains the construction.

**MC4 connectors.** Every panel-to-panel and panel-to-cable joint uses an [MC4 connector](/glossary/mc4-connector/) crimped with the matched crimping tool. Hand-twisted joints wrapped in tape are the single most common cause of DC arc faults and rooftop solar fires. On inspection day, look at the connectors: they should be factory-matched pairs, fully clicked, with no tape anywhere on the DC side.

**DC isolator.** Between the strings and the inverter sits a load-rated [DC isolator](/glossary/isolator/), a switch built to break DC current under load. IS 16221 and every inverter installation manual require it. DC sustains an arc far more stubbornly than AC, so a repurposed AC switch used here can weld shut or burn. Confirm the isolator is present, mounted near the inverter, and labelled.

> **What most homeowners get wrong.** They inspect the panels and the inverter brand. Then they ignore the two items that actually fail first: the DC cable and the MC4 joints. A ₹2.5 Lakh system can be compromised by ₹200 worth of bad connectors.

## Surge Protection and Earthing on the DC Side

India's monsoon season makes surge protection a structural requirement, not an accessory. Lightning does not need to strike your roof. A strike within a kilometre induces a surge in the array wiring that travels straight into the inverter's DC input stage.

A [surge protection device (SPD)](/glossary/spd/) on the DC side clamps that surge to earth before it reaches the inverter. For rooftop residential systems, Type 2 SPDs on both the DC and AC sides are the standard expectation under IS 16221 and IS/IEC 62305 practice. In high-lightning districts, a lightning arrester with its own dedicated earth pit follows IS 2309.

The SPD is only as good as its earth path. An SPD connected to a high-resistance earth diverts the surge into the inverter instead of the soil. This is why earthing and surge protection must be inspected together, and why the [solar inverter grounding](/blog/solar-inverter-grounding/) guide treats them as one system. If your inverter has ever thrown a ground fault error after rain, the [solar inverter ground fault guide](/blog/solar-inverter-ground-fault-guide/) walks the diagnosis.

## AC Side Wiring: Inverter Output to the Distribution Board

The AC side starts at the inverter's output terminals. For a 3 kW to 5 kW single-phase home system, the inverter pushes up to roughly 22 A of AC current toward your home wiring.

The path runs from the inverter AC output, through an AC isolator mounted beside the inverter, and through an AC SPD. It then enters the distribution board, where a dedicated [MCB](/glossary/mcb/) or RCCB protects the circuit. From the distribution board, solar power feeds your home's loads first. Only the surplus travels onward to the net meter and the grid.

Two checks matter here. First, the AC cable size must match the inverter's rated output current with margin. Typical values are 6 sq mm copper for a 3 kW to 5 kW unit and 10 sq mm for larger. Second, the RCCB rating must match the inverter manufacturer's requirement, because transformerless inverters need a Type B or manufacturer-specified residual current device in some configurations. Both are in the inverter manual, and both appear on a competent installer's wiring schedule.

The AC wiring segment is where the [solar inverter installation cost](/blog/solar-inverter-installation-cost/) breakdown becomes readable. Cable, isolators, SPDs, MCBs, and conduit are real line items. A quote that omits them is a quote that will cut corners.

## The Net Meter Connection

The net meter is the point where your private wiring ends and the DISCOM's network begins. It is a bidirectional meter, installed between your distribution board and the grid supply, that records import and export separately. The [net metering](/glossary/net-metering/) glossary entry covers how the billing works.

The wiring logic is simple. Solar feeds your home first through the distribution board. Surplus flows backward through the net meter to the grid. At night, you import through the same meter. Your bill settles the difference.

Three rules are non-negotiable. First, the net meter is supplied, installed, and sealed by the DISCOM after a site inspection. Neither you nor your installer may touch the meter wiring. Second, the inverter must meet the grid interconnection technical standards notified under the CEA Technical Standards for Connectivity. This includes anti-islanding protection that shuts the inverter down during a grid outage. Third, subsidy disbursement under PM Surya Ghar happens only after net meter commissioning. The [how to apply for net metering in India](/blog/how-to-apply-net-metering-india/) post covers the application sequence and typical timelines.

## Cable Sizing Basics for Indian Homes

Cable sizing balances two constraints: the cable must carry the current without overheating, and the voltage drop over the run must stay small. For rooftop solar, the working targets are under 2% voltage drop on the DC side and under 2% on the AC side.

Copper conductors follow IS 8130, and current ratings below are typical values for PVC insulated single-core copper cable in conduit at Indian ambient temperatures. Treat them as orientation, not a design substitute: the installer's electrical engineer signs the final schedule.

| Cable size (copper) | Typical current rating | Common use in a home solar system |
| --- | --- | --- |
| 1.5 sq mm | 11 to 14 A | Lighting circuits only, never solar |
| 2.5 sq mm | 18 to 20 A | Small socket circuits, not solar |
| 4 sq mm | 24 to 30 A | Standard DC string cable, panels to inverter |
| 6 sq mm | 31 to 41 A | Longer DC runs; AC output for 3 to 5 kW inverters |
| 10 sq mm | 42 to 57 A | AC output for 5 to 8 kW inverters |
| 16 sq mm | 55 to 75 A | AC output for 8 to 10 kW three-phase systems |

Two practical rules follow from the table. First, DC cable must be solar-rated to 1.5 kV DC and heat resistant to 120 degrees Celsius, regardless of size. The 4 sq mm row in the table means solar cable, not house wire. Second, when in doubt, size up on the DC side. Cable costs a few thousand rupees across a whole system. Undersized cable wastes generation as heat every day for 25 years and is a fire risk in conduit.

A hypothetical example, labelled as such, follows. A 5 kW home in Ahmedabad with a 12 metre DC run on 4 sq mm solar cable loses well under 2% on the DC side. Stretching the same run to 25 metres on undersized 2.5 sq mm wire pushes the drop past 3% and runs the cable warm through May afternoons. The fix costs under ₹1,500 in cable. The loss compounds every summer.

## Earthing Pits: How Many, How Deep, How Tested

Earthing is the least visible and most consequential part of the wiring diagram. IS 3043, the BIS code of practice for earthing, governs the design. CEA safety regulations also require adequate earthing of all generating equipment, according to the Central Electricity Authority (2010, amended 2023).

For a residential rooftop system, best practice is three earth pits:

1. **Array earth.** Bonds all panel frames and the mounting structure. Protects against insulation faults and induced voltages.
2. **Equipment earth.** Bonds the inverter chassis, the SPDs, and the AC distribution equipment. This pit should read 1 ohm or less where possible, since it protects sensitive electronics.
3. **Lightning earth.** A dedicated pit for the lightning arrester, kept separate so a strike's energy does not share a path with the electronics.

Where no lightning protection system exists, two pits are the acceptable minimum. Each pit is typically a GI pipe or copper bonded electrode set 2.5 to 3 metres deep with charcoal and salt backfill and a watering funnel. Every pit must be measured with an earth tester at handover, and the readings belong on your commissioning sheet. Below 5 ohms is the general DISCOM expectation, according to IS 3043 practice documented by the Bureau of Indian Standards.

The earthing requirement is not paperwork. Poor earthing is a leading cause of inverter failure and electric shock incidents in rooftop systems. That finding comes from the Ministry of New and Renewable Energy's quality and safety guidelines (MNRE, 2023). The [earthing](/glossary/earthing/) glossary entry covers electrode types if you want the terminology.

## Safety Rules and the Homeowner Sign-Off Checklist

Everything in this post sits under one legal frame. The CEA (Measures relating to Safety and Electric Supply) Regulations require electrical work to be done by qualified persons. State licensing rules also require a licensed electrician for this class of work. Your role as the homeowner is verification, not execution.

Safety rules the installer must follow, which you should see happening:

1. DC strings treated as live at all times in daylight. No open DC work at midday without isolation and insulated tools.
2. DC isolator off and tested before the inverter is touched.
3. Grid supply off at the main switch before any distribution board work.
4. No work on wet roofs or during rain.
5. All DC cable runs inside UV-stable conduit, clamped, with no cable resting on the roof sheet.

Your sign-off checklist before releasing final payment:

1. DC side uses solar-rated cable in conduit, with zero taped joints and factory-crimped MC4 connectors.
2. DC isolator present, labelled, and mounted within reach of the inverter.
3. SPDs present on both DC and AC sides, with their earth conductors connected.
4. Two or three earth pits physically verified, with measured readings below 5 ohms on the commissioning sheet.
5. AC isolator and correctly rated MCB or RCCB in the distribution board.
6. Inverter settings match the DISCOM's grid code, confirmed during [solar inverter commissioning](/blog/solar-inverter-commissioning-in-india/).
7. DISCOM inspection passed and the net meter installed and sealed.
8. Warranty cards, the wiring diagram as-built, and the commissioning report handed over.

Keep the as-built wiring diagram with your home documents. Every future service visit, and every [solar inverter troubleshooting](/blog/solar-inverter-troubleshooting/) call, starts from it.

Elsewhere in the Heaven Group network, see [earthing and lightning protection](https://heavendesigns.in/blog/solar-earthing-lightning-protection) and [string sizing maths](https://heavendesigns.in/blog/string-sizing-solar-inverters-math).

## Conclusion: The Bottom Line

A solar inverter wiring diagram is not an engineering curiosity. It is the receipt for everything you paid for: the right cable, the right protection, the right earthing, and a legal grid connection. Systems wired to IS 3043 and IS 16221, and commissioned to CEA connectivity standards, run quietly for decades. Systems that skip these items fail in the first three monsoons.

Three actions before your installation day:

- Ask your installer for the wiring diagram and cable schedule before work starts, and check it against the five zones in this guide.
- Be present for the earth pit measurement, and get the readings in writing on the commissioning sheet.
- If you are still comparing installers, or want a Qbits engineer to review a quote's wiring and protection scope, [request a review through our contact page](/contact-us/). We will walk it line by line.
