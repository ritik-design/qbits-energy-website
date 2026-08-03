---
title: "Inverter Battery Connection Diagram and Sizing Guide for Hybrid Solar"
excerpt: "Inverter battery connection guide for hybrid solar: 48 V diagram, BMS CAN/RS485 wiring, cable and fuse sizing, and mistakes that kill batteries."
description: "How batteries connect to a hybrid solar inverter: 48 V DC bus, BMS communication over CAN and RS485, series and parallel battery banks, cable and fuse sizing, lead-acid vs lithium wiring, and common wiring mistakes."
category: "Technical"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "18 min"
image: "/blog-images/inverter-battery-connection-diagram.svg"
author: "Keyur Rakholiya"
keywords:
  - inverter battery connection
  - inverter battery connection diagram
  - hybrid inverter battery wiring
  - 48v battery connection diagram
  - bms communication cable inverter
  - battery cable fuse sizing 48v
faqs:
  - q: "How do I connect a battery to a hybrid solar inverter?"
    a: "A lithium battery connects to a hybrid inverter through two paths. The first is a heavy DC power cable pair with a fuse or DC breaker on the positive line. The second is a BMS communication cable (CAN bus or RS485) between the battery's master module and the inverter's BMS port. A lead-acid bank uses the same DC power path but no communication cable; the inverter charges it using fixed voltage profiles instead. Both connections must be made with the inverter powered down, and DC polarity must be verified with a multimeter first."
  - q: "What cable size do I need for a 48 V battery to a 5 kW inverter?"
    a: "A 5 kW inverter on a 48 V battery bus draws roughly 110 to 125 A DC at full load. For cable runs under 2 metres, 35 mm2 copper is the common minimum. For continuous full-load operation, 50 mm2 is the safer choice. The DC fuse or breaker should be rated around 1.25 times the maximum continuous current, typically 125 to 160 A for this class of inverter. Always confirm against the inverter manual, because manufacturers publish their own minimum cable and fuse tables."
  - q: "What is the difference between CAN and RS485 for battery communication?"
    a: "CAN (Controller Area Network) and RS485 are the two physical-layer protocols a battery BMS uses to talk to a hybrid inverter. CAN is the more common choice for lithium batteries such as Pylontech, Dyness, and BYD because it handles multi-module addressing and error checking natively. RS485 is a simpler two-wire serial bus (A+ and B- lines) used by some inverters and older battery models. The inverter and battery must speak the same protocol on the same port. A CAN battery cannot report its state of charge over an RS485-only connection."
  - q: "Why does my inverter show the wrong battery percentage?"
    a: "Wrong state of charge readings almost always trace back to BMS communication problems, not a faulty battery. Common causes include a mismatched protocol selection in the inverter settings, wrong dip-switch positions on the battery, or a comms cable plugged into the wrong port. A missing termination resistor on a multi-module chain causes similar symptoms. If the inverter falls back to voltage-based estimation, the reading drifts badly. Lithium iron phosphate batteries make this worse, because their voltage curve is nearly flat between 20% and 80% charge."
  - q: "Can I mix lead-acid and lithium batteries on the same inverter?"
    a: "No. Mixing lead-acid and lithium on the same DC bus is unsafe and damages both chemistries. Lead-acid needs absorption charging around 57.6 V on a 48 V bank, while LiFePO4 is fully charged near 54 to 56 V and is damaged by equalisation cycles. Even mixing old and new lead-acid strings is bad practice because the weaker string drags down the stronger one. Mixing different lithium brands is possible only when both use compatible BMS protocols and the inverter supports it, which is rare in practice."
  - q: "Do I need a fuse between the battery and the inverter?"
    a: "Yes. Every manufacturer manual for hybrid inverters requires a DC over-current protection device between the battery and the inverter. Growatt's installation manuals state this explicitly as a safety and regulatory requirement. The fuse protects the cable and the battery against short-circuit currents that can reach thousands of amps from a lithium bank. It should sit on the positive cable, as close to the battery terminal as practical, and be rated to the cable's ampacity."
  - q: "How many lithium batteries can I connect in parallel to one inverter?"
    a: "Most 48 V lithium modules support 8 to 16 units in parallel on one string. Pylontech US5000 modules scale to 16 per string (about 76.8 kWh), and larger banks need a communications hub such as the LV-HUB to manage multiple strings. The practical limit is usually the inverter, not the battery. Check the maximum battery charge and discharge current the inverter can use. A bank that can deliver 300 A is wasted on an inverter that draws 100 A. Never mix low-voltage and high-voltage series modules in one bank."
  - q: "Who should do the battery wiring on a hybrid solar system?"
    a: "Battery DC wiring should be done by a licensed electrician or a trained solar installer. A 48 V battery bank can deliver enough short-circuit current to melt tools, weld terminals, and start fires, and the arc-flash risk is real even at nominal 48 V. Incorrect crimping, wrong torque on terminals, and reversed polarity also void battery warranties. This guide explains the design and sizing logic so you can verify your installer's work, not so you can do the wiring yourself."
featured: false
---

Most battery problems we see in the field are not battery problems. They are wiring problems. A [hybrid inverter](https://www.surgepv.com/blog/hybrid-inverter-guide) and its battery bank look simple on a datasheet: two thick cables, one thin cable, done. In practice, the inverter battery connection is where more systems lose years of battery life than anywhere else. Undersized cables run hot and sag under load. A missing fuse turns a short circuit into a fire risk. A dip switch left in the wrong position means the inverter never learns the battery's real state of charge. The system then overcharges or undercharges the bank every single day.

India's residential storage market is growing fast as hybrid systems become the default choice in power-cut states. Yet the DC side of these installs gets a fraction of the attention the panels and the inverter brand receive. The DC side is the part between the battery terminals and the inverter's battery port. This guide fixes that. It walks through the full connection diagram for a 48 V hybrid system. It explains how BMS communication over CAN and RS485 actually works. It gives you a cable and [fuse sizing](https://www.surgepv.com/blog/solar-fuse-sizing) table. And it lists the wiring mistakes that kill batteries early. Everything here applies whether you are planning a new hybrid install or auditing one already on your wall.

> **TL;DR**
> - A 5 kW [hybrid inverter](/glossary/hybrid-inverter/) on a 48 V battery bus draws roughly 110 to 125 A DC at full load. Size cable and fuse for current, not voltage.
> - Lithium batteries connect through two paths: fused DC power cables, plus a BMS comms cable (CAN or RS485) to the inverter.
> - BMS protocol compatibility is a hard gate. Without it, the battery runs blind on voltage-based charging.
> - For a 48 V 5 kW system on short cable runs, use 35 to 50 mm2 copper and a 125 to 160 A DC fuse.
> - Series connections raise voltage; parallel connections raise capacity and current. A 48 V bank is four 12 V lead-acid blocks in series, or one 48 V lithium module.
> - Manufacturer manuals require a DC over-current device between battery and inverter. Skipping it voids warranties and creates a fire risk.

**Short version.** An inverter battery connection on a hybrid solar system has two parts. The first is a DC power path: thick positive and negative cables, a fuse or DC breaker on the positive line, and a battery isolator. The second is a data path: a CAN or RS485 cable linking the lithium battery's BMS to the inverter. Get the current rating, the fuse size, and the protocol right, and the battery delivers its full cycle life. Get any one wrong and the bank degrades early or fails unsafe.

If you are still deciding whether your home needs a battery at all, the [battery sizing guide for hybrid solar](/blog/battery-sizing-hybrid-solar/) covers capacity math. This post assumes the decision is made and focuses on the wiring itself. The broader system-level layout, including panel strings and AC wiring, is in our [solar inverter wiring diagram](/blog/solar-inverter-wiring-diagram/) explainer.

## What an Inverter Battery Connection Actually Involves

An inverter battery connection is the complete electrical and data interface between a battery bank and the inverter's battery terminals. It is more than two cables. A correct connection has five components, and every one of them has a sizing or configuration decision attached.

1. **Positive DC cable** from the battery's positive terminal, through a fuse or DC breaker, to the inverter's BAT+ terminal.
2. **Negative DC cable** from the battery's negative terminal to the inverter's BAT- terminal, usually without a fuse on this leg.
3. **Battery isolator** (a DC-rated switch) so the bank can be fully disconnected for service.
4. **BMS communication cable** between the lithium battery's master module and the inverter's BMS port, using CAN bus or RS485.
5. **Earthing and protection bonding** per the inverter manual and local electrical code.

Lead-acid banks skip item four entirely. There is no data path. The inverter charges the bank from fixed voltage setpoints configured for AGM, flooded, or gel profiles. That simplicity is also the weakness: the inverter is guessing the battery's condition from voltage alone.

The fuse placement matters. It belongs on the positive cable, as close to the battery as practical, so a short anywhere along the run is protected. A separate DC over-current protector between battery and inverter is an explicit requirement in manufacturer installation manuals, including the Growatt SPF series manual, 2023.

## Inverter Battery Connection Diagram: The 48 V Hybrid Layout

Here is the full connection layout for a typical 5 kW hybrid inverter with a 48 V lithium battery bank. Lead-acid differences are covered later in this guide.

```
                        PV STRING 1                PV STRING 2
                            |                          |
                            v                          v
                    +---------------------------------------+
                    |         HYBRID INVERTER (5 kW)        |
                    |                                       |
                    |   MPPT 1      MPPT 2      GRID/LOAD   |----> AC to main DB
                    |                                       |      (grid in / backup out)
                    |              BAT+  BAT-               |
                    |               |     |                 |
                    |          [BMS PORT]                   |
                    |               ^                       |
                    +---------------|-----------------------+
                                    |
                    CAN / RS485 comms cable (to master battery)
                                    |
        BAT- ----------------+      |      +---- FUSE (125-160 A DC) ---- BAT+
                             |      |      |
                    +--------v------|------v--------+
                    |        BATTERY ISOLATOR       |
                    +--------|-------------|--------+
                             |             |
                    +--------v-------------v--------+
                    |     48 V LITHIUM BANK (LFP)   |
                    |  +---------+   +---------+    |
                    |  | Module 1|===| Module 2|    |   parallel links,
                    |  | (MASTER)|   | (slave) |    |   master on first position
                    |  +----+----+   +---------+    |
                    |       |                       |
                    |   comms daisy chain           |
                    |   (CAN in / CAN out,          |
                    |   terminator on last module)  |
                    +-------------------------------+
```

Three things to notice in this diagram. First, the fuse sits on the positive leg, battery side of the isolator. Second, the BMS cable lands on the master module only; slaves chain off the master. Third, the last module in a multi-module chain needs a termination resistor. Without it, the CAN bus reflects signals and throws intermittent comms errors.

The DC cable run should be as short as possible, ideally under 2 metres. Every extra metre adds resistance. At 110 A, small resistances become real voltage drop and real heat.

## The 48 V DC Bus and Why Current Matters More Than Voltage

The 48 V bus is the standard battery voltage for single-phase hybrid inverters from 3 kW to about 8 kW. Most wiring guides fail readers because they talk about voltage when the dangerous number is current.

The math is simple. A 5 kW inverter drawing full load from a 48 V bank needs:

- Power divided by voltage: 5,000 W / 48 V = 104 A before losses.
- At 90% inverter efficiency on battery: roughly 115 A continuous.
- With surge allowance for motor starts: plan for 125 to 160 A peaks.

A 12 V home inverter pulling the same 5 kW would need over 400 A. That is why serious hybrid systems moved to 48 V. Larger three-phase hybrids go further, using high-voltage battery stacks at 100 to 600 V DC to keep currents low. Victron Energy's Wiring Unlimited guide recommends sizing DC cable and fuse from the product manual. It also treats voltage drop limits on battery runs as non-negotiable, according to Victron Energy, 2024.

Current is what sizes your cable, your fuse, and your terminals. A loose crimp that is invisible at 10 A becomes a glowing hot spot at 115 A. This is why torque specifications on battery terminals exist. It is also why we insist installers use a torque wrench, not feel.

## BMS Communication: CAN and RS485 Explained

The **battery management system** (BMS) inside a lithium battery monitors cell voltage, temperature, and current. It can disconnect the battery if anything goes out of range. When it talks to the inverter, the system becomes closed-loop. The battery tells the inverter its exact state of charge, its allowed charge current, and its limits. The inverter obeys. Our [BMS in hybrid solar inverters](/blog/bms-hybrid-solar-inverter-explained/) explainer covers the control logic. Here we cover the wiring side.

The two physical protocols you will meet:

- **CAN bus**: a two-wire differential pair (CAN-H, CAN-L) with addressing and error checking built in. Most 48 V lithium batteries in India (Pylontech, Dyness, BYD's LV range, and Qbits-supported LFP packs) use CAN as their primary inverter link.
- **RS485**: a simpler two-wire serial bus (A+ and B-). Some inverters and older battery models use it. On Solis inverters, the RS485 A+ and B- lines land on specific numbered terminals of the comms connector, according to Solis technical support documentation, 2025.

Wiring rules that apply to both:

1. The comms cable connects to the master battery only. In a multi-module bank, the master collects data from slaves over its internal daisy chain.
2. Match the port. A CAN battery plugged into an RS485-only port reports nothing.
3. Set the dip switches or protocol selector on the battery to match the inverter brand. Pylontech US5000 modules support both CAN and RS485 and require brand-specific dip-switch settings, according to Pylontech product documentation, 2025.
4. Fit the termination resistor on the last module of a CAN chain. Most Pylontech-style modules include one in the box.
5. Keep the comms cable away from the DC power cables. Run it separated or shielded. DC cables carrying 115 A induce noise that corrupts data frames.

The [BMS glossary entry](/glossary/bms/) defines the core terms if the vocabulary is new.

## Why BMS Protocol Compatibility Decides Your Battery Shortlist

Here is the part most buying guides skip. A lithium battery is only as smart as its conversation with the inverter. If the inverter's firmware does not include your battery's BMS protocol, the pair cannot do closed-loop control. The system falls back to voltage-based charging. That is a bad deal for lithium.

The reason is the LiFePO4 voltage curve. Between roughly 20% and 80% state of charge, an LFP cell's voltage barely moves. A voltage-based inverter looking at a 51 V reading cannot tell whether the battery is at 30% or 70%. The practical consequences:

- State of charge display drifts and becomes useless within weeks.
- Charge cutoffs happen at the wrong time, wasting solar or overcharging.
- The BMS cannot tell the inverter to reduce charge current in cold or hot conditions.

This is why we treat the battery compatibility list as a purchase gate, not a nice-to-have. Before buying any lithium battery, confirm three things. First, the inverter brand appears on the battery maker's compatibility list. Second, the battery brand appears in the inverter's BMS protocol menu. Third, your installer has commissioned that exact pair before. Our [Pylontech battery review for India](/blog/pylontech-battery-india-review/) lists which inverter families Pylontech supports. The [LiFePO4 vs NMC comparison](/blog/lifepo4-vs-nmc-solar-battery-india/) explains why LFP won this market, and protocol support is part of that story.

> **What most installers get wrong:** they commission the battery in user-defined voltage mode because it is faster than configuring the BMS link. The system works on day one. Six months later the customer complains the battery percentage is fiction and the bank is losing capacity. Always demand a closed-loop BMS connection and verify it in the inverter's monitoring data before the installer leaves.

## Series and Parallel Battery Banks: Wiring Rules

Series and parallel wiring sound like school physics, but the rules have teeth when a bank is involved.

**Series connections raise voltage; capacity (Ah) stays the same.** Four 12 V 150 Ah lead-acid batteries in series make a 48 V 150 Ah bank (7.2 kWh). In a series string, every battery must be the same model, same age, and same state of charge at install. One weak block drags the whole string down and gets reverse-stressed on every cycle.

**Parallel connections raise capacity and current; voltage stays the same.** Two 48 V 100 Ah lithium modules in parallel make a 48 V 200 Ah bank. At 95% depth of discharge, that is about 9.6 kWh usable. Pylontech US5000 modules scale to 16 units per string, roughly 76.8 kWh, according to Pylontech documentation, 2025.

Parallel wiring has its own discipline:

1. All modules must be the same model and firmware. Mixing low-voltage and high-voltage series modules in one bank is prohibited by battery makers.
2. Cable lengths from each module to the common connection point should be equal. Unequal lengths mean unequal resistance, and the closest module works hardest.
3. For banks of three or more modules, use a busbar rather than daisy-chaining power cables. A busbar gives every module an identical electrical path.
4. Charge all modules to a similar state of charge before paralleling. Connecting a full module to an empty one causes a large equalisation current the moment the breaker closes.
5. The BMS master must be the module in the first position, per the battery maker's manual.

One more rule that surprises people: parallel lead-acid strings age badly. Each string should be identical and ideally no more than two strings deep. Beyond that, imbalance is near certain, and lithium becomes the better answer on lifetime cost. The [lithium vs lead-acid solar battery](/blog/lithium-vs-lead-acid-solar-battery/) comparison runs those numbers.

## Cable and Fuse Sizing Table for 48 V Hybrid Systems

This table covers the common residential hybrid sizes on a 48 V bus. It assumes copper cable, runs under 2 metres, and ambient temperatures typical of an Indian utility room. Use it to check a quote. The inverter and battery manuals always win if they disagree.

| Inverter size | Max DC current (approx.) | Copper cable size | DC fuse / breaker | Notes |
| --- | --- | --- | --- | --- |
| 3 kW hybrid | 70 A | 25 mm2 | 100 A | Fine for light loads, short runs |
| 5 kW hybrid | 110 to 125 A | 35 to 50 mm2 | 125 to 160 A | The most common residential case |
| 6 kW hybrid | 135 to 150 A | 50 mm2 | 160 to 200 A | Check inverter manual minimum |
| 8 kW hybrid | 180 to 200 A | 70 mm2 or busbar | 200 to 250 A | Consider higher-voltage battery instead |

Sizing rules behind the table:

- Fuse rating is roughly 1.25 times the maximum continuous DC current. It must never exceed the cable's safe ampacity or the battery's BMS discharge limit.
- Use fine-strand copper battery cable with proper crimped lugs. Solid wire and CCA (copper-clad aluminium) are not acceptable on battery runs.
- The fuse or breaker must be DC-rated. AC breakers can fail to interrupt a DC arc.
- If the run exceeds 2 metres, go up one cable size. Voltage drop on a battery run should stay under 2%.

For what the battery side of this budget looks like in rupees, the [solar battery price guide](/blog/solar-battery-price-guide-india-2026/) tracks current LFP and lead-acid pricing in India. The [hybrid inverter price guide](/blog/hybrid-inverter-price-india/) covers the inverter end.

## Lead-Acid vs Lithium Wiring: What Changes

The DC power path looks identical for both chemistries: positive through a fuse, negative direct, isolator in between. Everything else changes.

| Aspect | Lead-acid bank | Lithium (LFP) bank |
| --- | --- | --- |
| Nominal 48 V built as | Four 12 V blocks in series | One 48 V (51.2 V) module |
| Comms cable to inverter | None | CAN or RS485, mandatory for closed-loop |
| Charge control | Fixed voltage profiles (AGM / flooded / gel) | BMS commands current and voltage limits |
| Equalisation charge | Periodic high-voltage cycle (flooded only) | Never; damages LFP cells |
| Parallel expansion | Two strings max, imbalance risk | Up to 16 modules with master-slave BMS |
| Ventilation | Required for flooded (hydrogen gas) | Standard room, no venting needed |
| Temperature sensitivity | Capacity drops sharply below 15 °C | Charging restricted near 0 °C by BMS |

Two wiring-specific traps stand out. First, a retrofit where lithium replaces lead-acid but the installer leaves the inverter on a flooded profile with equalisation enabled. The first equalisation cycle can push the LFP bank past its voltage ceiling and trip the BMS, or worse. Second, series lead-acid strings need interlink cables of equal length and gauge. The take-off to the inverter should be diagonal: positive from one end of the string, negative from the opposite end. This balances resistance across all blocks.

## Wiring Mistakes That Kill Batteries

These are the failures we see most often in service calls, ranked roughly by how much damage they do.

**Mistake 1: No fuse, or the fuse on the wrong leg.** A lithium bank can dump thousands of amps into a short. Without a DC-rated fuse near the battery, a shorted cable is a fire. A fuse on the negative leg only leaves the positive run unprotected.

**Mistake 2: Undersized cable.** A 16 mm2 cable on a 5 kW inverter will not fail on day one. It will run warm for years, waste energy as heat, and cook its own insulation. Voltage sag under load also makes the inverter report false low-battery cutoffs.

**Mistake 3: Loose or poorly crimped lugs.** At 115 A, a loose terminal is a heater. Crimps must be done with a proper hex crimper, and terminal bolts torqued to the manual's spec. Heat-shrink every lug.

**Mistake 4: Wrong BMS protocol or dip switches.** The inverter shows 100% forever, or 0%, or nothing. The battery charges blind and ages early. Verify live state-of-charge data in the monitoring app before sign-off.

**Mistake 5: Daisy-chaining power cables across many parallel modules.** The first module carries the most current and dies first. Use a busbar for banks of three or more.

**Mistake 6: Mixing old and new batteries.** In lead-acid strings, a new block paired with two-year-old blocks inherits their wear pattern within months. Replace strings as a set.

**Mistake 7: Reversed polarity during install.** Even a momentary reverse connection can destroy the inverter's battery stage. Verify with a multimeter at the inverter end before closing the breaker.

**Mistake 8: Comms cable routed with DC power cables.** Induced noise causes intermittent comms dropouts, and each dropout can trigger a fault shutdown. Separate the runs.

A note on safety, stated plainly: battery DC wiring is work for a licensed electrician or a trained solar installer. A 48 V bank will not shock you the way AC mains can. But its short-circuit current will weld a spanner to a terminal and spray molten metal. Use this guide to check your installer's work, not to replace one.

## Conclusion: Get the DC Side Right the First Time

The inverter battery connection is a small part of a hybrid solar quote and a large part of its outcome. The pattern is consistent across the installs we audit. Systems with correct cable sizing, a proper DC fuse, and a verified closed-loop BMS link deliver their rated cycle life. Systems with shortcuts on the DC side lose capacity years early. The warranty claim that follows often fails because the installation did not follow the manual.

The checklist is short enough to fit on one page. Match the protocol. Size for current. Fuse the positive leg near the battery. Keep runs short. Verify live BMS data at commissioning. Whether you are specifying a new system or auditing an existing one, those five checks cover most of what goes wrong.

- Before signing a quote, ask your installer to state the cable size, fuse rating, and BMS protocol setting in writing. Cross-check them against this guide and the inverter manual.
- If you already have a hybrid system, open your monitoring app and confirm the battery reports live state of charge. If it does not, the BMS link needs attention before anything else.
- Planning a new hybrid system or upgrading to lithium storage? [Talk to a Qbits engineer](/contact-us/) for a protocol-verified, correctly fused battery and inverter pairing sized to your load.
