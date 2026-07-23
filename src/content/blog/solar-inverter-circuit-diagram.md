---
title: "Solar Inverter Circuit Diagram Explained: From DC Strings to AC Grid"
excerpt: "Solar inverter circuit diagram explained block by block: DC input, MPPT boost, DC link, IGBT H-bridge, output filter, grid relay, and control board."
description: "A block-by-block walkthrough of a string solar inverter circuit diagram, covering the DC input stage, MPPT boost converter, DC link, IGBT inverter bridge, output filter, grid relay, and control board, plus hybrid differences and common failure points."
category: "Technical"
date: 2026-07-23
updatedDate: 2026-07-23
readTime: "17 min"
image: "/blog-images/solar-inverter-circuit-diagram.svg"
author: "Keyur Rakholiya"
keywords:
  - solar inverter circuit diagram
  - string inverter circuit
  - inverter block diagram
  - mppt boost converter
  - igbt h-bridge inverter
  - dc link capacitor
faqs:
  - q: "What are the main circuit blocks in a solar inverter?"
    a: "A modern transformerless string inverter has seven main circuit blocks. They are the DC input and EMC filter stage, the MPPT boost converter stage, and the DC link capacitor bank. Then come the IGBT H-bridge inverter stage, the output LC filter, the grid relay and metering stage, and the control board with gate drivers. Power flows left to right from the solar strings to the grid connection. The control board sits across all blocks, measuring voltages and currents and issuing PWM gate signals."
  - q: "What does the MPPT stage do in an inverter circuit?"
    a: "The MPPT stage is a DC-DC boost converter that does two jobs at once. It raises the solar string voltage (typically 200 to 500 V) up to a stable DC link voltage of about 360 to 400 V. At the same time, it continuously adjusts its switching duty cycle to hold the panels at their maximum power point as sunlight and temperature change. Each independent input on a dual-MPPT inverter has its own boost circuit, inductor, and control loop."
  - q: "What is the DC link in a solar inverter?"
    a: "The DC link is a bank of capacitors sitting between the MPPT boost stage and the inverter bridge. It acts as an energy buffer that decouples the slowly changing solar input from the fast-switching AC output stage. The DC link holds a regulated voltage, usually 360 to 400 V in a single-phase inverter, and absorbs the twice-line-frequency power ripple. Electrolytic capacitors are common, while premium designs use film capacitors for longer service life."
  - q: "How does the H-bridge turn DC into AC in an inverter?"
    a: "The H-bridge uses four power switches (IGBTs or MOSFETs) arranged in two legs. The control board drives them with pulse width modulation at 16 to 20 kHz. The bridge output is then a high-frequency square wave whose average value follows a 50 Hz sine wave. An LC filter between the bridge and the grid terminal removes the switching frequency, leaving a clean sinusoidal current. Topologies like HERIC and H5 add extra switches to cut losses and leakage current."
  - q: "How is a hybrid inverter circuit different from an on-grid inverter circuit?"
    a: "A hybrid inverter keeps every block of an on-grid inverter and adds three more. First, a bidirectional DC-DC converter connects the battery bank to the DC link, allowing charge and discharge. Second, a backup output port with its own relay feeds critical loads when the grid is down. Third, a more capable control board talks to the battery BMS over CAN and manages islanded operation. The extra hardware is why a hybrid inverter costs more and cannot be retrofitted into an on-grid unit."
  - q: "Which part of a solar inverter circuit fails most often?"
    a: "Field data and teardown studies consistently point to three wear items: cooling fans, DC link electrolytic capacitors, and the IGBT power stage. Electrolytic capacitor life roughly halves for every 10 degree Celsius rise in operating temperature, according to Sandia National Laboratories reliability research (2011). Surge damage on the DC input protection devices is also common after lightning events. The control board and grid relays fail less often but cause a full shutdown when they do."
  - q: "Why do solar inverters not need a big transformer anymore?"
    a: "Older inverters used a 50 Hz isolation transformer on the output, which added weight and cost and wasted 2 to 4 percent of the energy as heat. Modern transformerless designs replace it with smart bridge topologies (H5, HERIC) that control common-mode voltage electronically and keep leakage current within safety limits. The result is peak efficiency around 98 percent instead of 94 to 96 percent. Grid isolation is handled by residual current monitoring and redundant relays instead, as permitted by IEC 62109."
featured: false
---

Open a 5 kW string inverter and you will not find a mysterious black box. You will find a chain of well-understood power electronic blocks, each with one clear job. Solar power enters as variable DC from the panel strings and leaves as grid-synchronised 230 V, 50 Hz AC. The solar inverter circuit diagram is simply the map of that journey.

Most explanations of inverters stop at "it converts DC to AC." That is true but useless when you want to size a system, read a datasheet, or diagnose a fault code at 2 PM on a May afternoon. This guide goes one level deeper. We walk through every block in the power path of a modern transformerless string inverter. That covers the DC input and EMC stage, the MPPT boost converter, the DC link, the IGBT H-bridge, the output filter, the grid relay, and the control board.

For each block we cover what it does, the components you would see on the schematic, and what typically fails there. We also show how a hybrid inverter's circuit diagram differs from a pure on-grid design. If you want the component-level view instead, our guide to [solar inverter components](/blog/solar-inverter-components/) pairs well with this post. For the energy flow story without the schematics, see [how a solar inverter works](/blog/how-does-a-solar-inverter-work/).

> **TL;DR**
> - A string inverter is 7 blocks in series: DC input/EMC, MPPT boost, DC link, H-bridge, output filter, grid relay, control board.
> - The MPPT boost stage lifts string voltage (200 to 500 V) to a regulated DC link of 360 to 400 V.
> - Four IGBTs switching at 16 to 20 kHz rebuild a 50 Hz sine wave through PWM; the LC output filter strips the switching ripple.
> - Modern transformerless designs reach about 98% peak efficiency, according to an Aalborg University topology review (2020).
> - Grid standards cap injected current distortion at 5% THD, per IEC 61727 (2004), which is why the output filter matters.
> - Fans, DC link electrolytic capacitors, and IGBTs are the top three field failure items, according to Sandia National Laboratories (2011).
> - A hybrid inverter adds a bidirectional battery DC-DC converter, a backup relay port, and a BMS-capable control board.

**Short version.** A solar inverter circuit diagram shows seven blocks in series. Solar strings feed a DC input and EMC filter stage. An MPPT boost converter raises the string voltage to a stable 360 to 400 V DC link. An IGBT H-bridge chops that DC into a pulse-width-modulated waveform, and an LC filter turns it into clean 50 Hz AC. Grid relays connect the output to the utility only when voltage, frequency, and phase all match. A control board measures everything and drives every switch.

## How to Read a Solar Inverter Circuit Diagram

A solar inverter circuit diagram is a block diagram at heart. Even a detailed manufacturer schematic groups into the same seven functional blocks, connected in one direction of power flow.

The convention is simple. DC enters from the left, AC exits to the right. High-power semiconductors (boost switches, bridge IGBTs) sit on a shared heatsink. The control board draws thin signal lines to every block, carrying sensor readings in and gate-drive pulses out.

Three symbol families do most of the work:

- **Semiconductors**: IGBTs and MOSFETs drawn as switches, plus diodes for freewheeling and rectification.
- **Passives**: inductors for the boost stage and output filter, capacitors for the DC link and EMC suppression.
- **Protection and switching**: fuses, surge protection devices (SPDs), relays, and current sensors.

One caution before reading any real schematic. The DC link and string inputs carry lethal voltages up to 1,000 V on the DC side. Everything described here is for understanding, not for opening the enclosure. Internal inspection belongs to the manufacturer's service team.

## The Full Block Diagram

Here is the complete power path of a typical single-phase transformerless string inverter, the architecture behind most residential units sold in India today.

```
 PV String 1 ----+--> [DC Input / EMC Filter] --> [MPPT Boost 1] --+
 PV String 2 ----+--> [DC Input / EMC Filter] --> [MPPT Boost 2] --+
                                                                    |
                                                    [DC LINK 360-400 V]
                                                                    |
                                              [IGBT H-Bridge (PWM 16-20 kHz)]
                                                                    |
                                              [LC Output Filter] ---+
                                                                    |
                                      [Grid Relay + Metering] ------+--> 230 V AC Grid

      [Control Board] === gate drives, sensors, MPPT loops, grid sync, protections ===
```

Two strings enter on the left, each with its own input filter and boost stage. That is what "dual MPPT" means physically: two independent boost converters sharing one DC link. Single-MPPT units simply have one input chain.

The sections below walk through each block. The differences between [string and MPPT voltage behaviour](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/) become obvious once you see where each voltage lives in the chain.

## Block 1: DC Input and EMC Filter Stage

The first block conditions the raw power coming from the roof. It has three jobs: protect, filter, and measure.

Protection comes first. Each string input passes through a fuse and a Type II surge protection device. The SPD clamps lightning-induced spikes before they reach the semiconductors. After a nearby lightning strike, a failed SPD is the most common board-level damage we see in service returns.

Filtering comes next. Common-mode chokes and X/Y capacitors form the electromagnetic compatibility (EMC) filter. This filter works in both directions. It keeps the inverter's own switching noise from travelling back up the DC cables, and it stops cable-borne noise from upsetting the control electronics.

Measurement closes the block. Voltage sensors and a residual current monitoring unit (RCMU) watch each input. The RCMU detects DC leakage to earth and trips the inverter if it exceeds safety limits. In a transformerless design this sensor replaces the galvanic isolation an old transformer used to provide, as covered in our [transformerless vs transformer inverter](/blog/transformerless-vs-transformer-inverter/) comparison.

## Block 2: MPPT Boost Converter Stage

This block is where the "solar" intelligence lives. The boost converter does two jobs simultaneously, and understanding both explains half of inverter behaviour.

Job one is voltage conversion. A solar string of 10 to 14 panels produces 200 to 500 V depending on temperature and irradiance. The H-bridge needs a stiff 360 to 400 V bus to make 230 V AC. The boost converter (an inductor, a fast switch, and a diode) lifts whatever the string delivers up to that fixed rail.

Job two is maximum power point tracking. The control board adjusts the boost switch's duty cycle thousands of times per second. Each adjustment changes the load the string sees, and the algorithm hunts for the operating point where voltage times current peaks. The [inverter MPPT](/blog/inverter-mppt/) post explains the tracking algorithms; here the point is the hardware that executes them.

Each MPPT input is one full boost circuit. That is why shading one string of a dual-MPPT inverter does not drag down the other. The two boost stages hold their own strings at their own best points. The [MPPT glossary entry](/glossary/mppt/) defines the term if you want the short version.

Failure-wise, this block runs hot. The boost switch and inductor handle full string power continuously, which is why they bolt directly to the heatsink.

## Block 3: The DC Link

Between the boost stage and the bridge sits the DC link, a bank of capacitors holding the regulated 360 to 400 V rail. It looks passive on the diagram. It is not.

The DC link is an energy buffer. Solar input changes slowly with clouds and temperature. The bridge, meanwhile, draws power in 100 Hz gulps (twice the line frequency, because AC power pulses each half-cycle). The capacitor bank smooths that mismatch, charging and discharging every 10 milliseconds.

Capacitor choice is a reliability decision. Aluminium electrolytic capacitors are cheap and compact but age with heat. Electrolytic capacitor life roughly halves for every 10 degrees Celsius of additional operating temperature, according to Sandia National Laboratories reliability research (2011). Film capacitors cost more but last far longer, which is why premium and commercial inverters increasingly use them.

A simple sizing intuition: a 5 kW single-phase inverter typically carries 1,000 to 2,000 microfarads of DC link capacitance. Too little, and bus voltage ripple grows, stressing the IGBTs and distorting the output current.

When an older inverter starts showing bus-voltage fault codes on hot afternoons, tired DC link capacitors are the usual suspect.

## Block 4: The IGBT H-Bridge Inverter Stage

This is the block that actually makes AC. Four insulated-gate bipolar transistors (IGBTs) sit in two legs, and antiparallel diodes across each switch carry current during freewheeling intervals.

The control board drives the four gates with pulse width modulation at 16 to 20 kHz. The bridge output is a high-frequency square wave whose pulse widths vary sinusoidally, so its local average traces a 50 Hz sine. That raw waveform then feeds the output filter.

Two design choices define this stage's quality:

- **Switch technology.** Silicon IGBTs dominate residential string inverters. Silicon carbide (SiC) MOSFETs switch faster with lower losses and appear in newer high-efficiency and hybrid designs.
- **Topology.** A plain H-bridge with bipolar PWM wastes energy and creates leakage current problems. Modern transformerless units use H5 or HERIC variants, which add switches to disconnect the DC side during freewheeling. HERIC and H5 designs reach the highest single-phase efficiencies, around 98% peak, according to an Aalborg University review of transformerless topologies (2020).

The IGBTs are the most stressed semiconductors in the machine. They switch full power thousands of times per second at heatsink temperatures that reach 60 to 80 degrees Celsius in an Indian summer. Early reliability work flagged the IGBT module as a leading suspect in inverter failures, according to Sandia National Laboratories (2010). A 2025 field study of catastrophic inverter destruction at the Kopli Solar Park in Estonia confirmed the pattern. That study traced failures to thermal stress and gate-drive problems in the power stage, according to Kull and colleagues (2025).

## Block 5: Output Filter, Grid Relay, and Control Board

The last stretch of the power path turns a PWM waveform into grid-quality electricity and connects it safely.

**Output LC filter.** Inductors and capacitors between the bridge and the AC terminals remove the 16 to 20 kHz switching content. What remains is sinusoidal current. Grid codes are strict here: injected current must stay below 5% total harmonic distortion, per IEC 61727 (2004). The filter is what keeps the [harmonics](/glossary/harmonics/) inside that limit.

**Grid relays.** Two relays in series connect the inverter to the grid. Redundancy matters: each relay is tested for welded contacts at every start-up. The inverter closes the relays only after confirming grid voltage, frequency, and phase are all inside the allowed window. When the grid fails, the relays open within a fraction of a second. That is [anti-islanding protection](/blog/anti-islanding-protection-solar-inverters/), executed by this exact hardware, and the [anti-islanding glossary entry](/glossary/anti-islanding/) covers the grid-safety logic.

**Metering.** Voltage and current sensors at the AC terminal measure exported energy and close the control loops. The generation figure on your monitoring app originates here.

**Control board.** The digital signal processor (DSP) runs the whole machine: MPPT loops, PWM generation, grid synchronisation via a phase-locked loop, protection logic, and communications. Gate-driver circuits translate its 3.3 V logic into the 15 V pulses that switch the IGBTs. When any sensor reports an out-of-range value, this board issues the fault code you see on the display.

| Block | Key components | Input | Output | Primary job |
| --- | --- | --- | --- | --- |
| DC input / EMC | Fuses, SPDs, chokes, RCMU | 200-500 V string DC | Clean DC | Protect and filter |
| MPPT boost | Inductor, switch, diode | Variable DC | Boosted DC | Track MPP, raise voltage |
| DC link | Electrolytic/film capacitors | Boosted DC | 360-400 V rail | Buffer and smooth |
| H-bridge | 4 IGBTs + diodes | 360-400 V DC | PWM waveform | Create 50 Hz AC shape |
| Output filter | Inductors, capacitors | PWM waveform | Sine AC | Remove switching ripple |
| Grid relay | 2 series relays, sensors | Sine AC | Grid connection | Safe synchronised connect |
| Control board | DSP, gate drivers | Sensor signals | Gate pulses | Supervise everything |

## On-Grid vs Hybrid: How the Circuit Diagram Changes

A hybrid inverter's circuit diagram contains every block above, plus three additions. These additions are hardware, not software, which is why an on-grid unit can never be upgraded to hybrid in place.

**Addition 1: bidirectional battery DC-DC converter.** This block connects the battery bank to the DC link. Residential units use 48 V nominal banks or high-voltage 100 to 600 V packs. It is a buck-boost converter that runs in both directions. Buck mode charges the battery from the DC link; boost mode discharges the battery into the DC link. It needs its own inductor, switches, and current sensors.

**Addition 2: backup (EPS) output port with its own relay.** A second AC output feeds critical loads during outages. A transfer relay disconnects this port from the grid side when islanding, so the backed-up circuits stay live while the grid terminals open. Changeover in under 20 milliseconds keeps most appliances running.

**Addition 3: a heavier control board.** The hybrid DSP must talk to the battery management system over CAN bus. It also runs charge and discharge schedules, and it switches between grid-following and grid-forming control when islanded. Grid-forming control is the defining capability of backup-capable machines: the inverter itself sets the voltage and frequency reference.

The [on-grid vs hybrid](/blog/on-grid-vs-hybrid/) post covers the purchase decision. The circuit point is simpler: a hybrid is an on-grid inverter with a second DC-DC stage and a second relay path. Everything else is shared.

## Common Failure Points, Block by Block

Every block has a characteristic failure signature. Knowing the map turns a cryptic fault code into a short diagnosis list. Our [solar inverter failure](/blog/solar-inverter-failure/) guide covers the symptom side; this table is the circuit side.

| Block | Common failure | Typical symptom | Root cause |
| --- | --- | --- | --- |
| DC input / EMC | Blown SPD or fuse | No generation after storms | Lightning surge |
| MPPT boost | Boost switch or inductor damage | Persistent input overcurrent fault | Thermal stress, cable faults |
| DC link | Aged electrolytic capacitors | Bus voltage ripple faults on hot days | Heat aging over years |
| H-bridge | IGBT module failure | Instant shutdown, isolation fault | Thermal cycling, gate-drive faults |
| Output filter | Degraded filter capacitor | High THD warning, grid disconnects | Harmonic overload |
| Grid relay | Welded or worn contacts | Relay fault at start-up self-test | Repeated switching under load |
| Control board | Failed auxiliary power supply | Dead display, no start | Surge through AC side |
| Cooling | Fan bearing wear | Overtemperature derating at noon | Dust, heat, age |

Three patterns stand out from service experience:

1. **Heat is the master variable.** Capacitors, IGBTs, and fans all age faster in hot enclosures. An inverter shaded from direct sun and mounted with clear airflow outlasts an identical unit baked on a west wall.
2. **Storm damage enters through the cables.** The DC input stage absorbs what the roof wiring collects. Surge protectors are sacrificial; a failed SPD did its job.
3. **Start-up self-tests catch the rest.** Relay weld checks and insulation tests at dawn catch hardware problems before the power stage energises. An inverter that refuses to start is usually protecting itself correctly.

For a fault-code walkthrough, the [solar inverter troubleshooting](/blog/solar-inverter-troubleshooting/) post maps symptoms to checks you can do without opening the unit.

### What Most People Get Wrong About Inverter Circuits

> **What most people get wrong.** The most common misconception is that the inverter stage does the hard work and everything else is plumbing. In practice, the DC-DC MPPT stage and the DC link decide how much energy reaches the bridge at all. A cheap boost stage loses 1 to 2 percent before conversion even begins. Undersized DC link capacitors distort the output years before the IGBTs wear out.

Two more myths are worth correcting.

**Myth: the circuit diagram shows a transformer.** Modern residential string inverters are transformerless. Isolation is handled electronically by the RCMU and redundant relays, per IEC 62109 safety design. If a schematic for a current-generation unit shows a large 50 Hz transformer, it is either an old design or an off-grid machine. The [transformerless inverter glossary entry](/glossary/transformerless-inverter/) covers the safety mechanism.

**Myth: more blocks mean more failure risk.** A hybrid inverter has more blocks, yet its per-block stress is often lower. The battery converter absorbs power swings that an on-grid unit pushes into the grid relay and DC link. Failure risk follows thermal design and component quality, not block count.

The tradeoff that is real: every additional stage costs efficiency. Each power conversion burns 1 to 3 percent. That is why hybrid round-trip efficiency through the battery path lands around 90 to 95 percent, even when the grid-tied path hits 97 percent. System designers therefore think in [inverter efficiency](/glossary/inverter-efficiency/) terms per path, not per machine.

## The Bottom Line

A solar inverter circuit diagram is seven blocks in a line. Power moves through DC input and EMC filtering, MPPT boost conversion, the DC link, and the IGBT H-bridge. Then it passes the output filter, the grid relays, and the control board. Solar DC enters at string voltage and gets lifted to a 360 to 400 V rail. It is then chopped into PWM at 16 to 20 kHz and filtered into a sine wave. The grid relays release it to the grid only when every safety check passes.

Once you hold that map, datasheets become readable, fault codes become diagnosable, and the on-grid versus hybrid question reduces to three extra blocks.

Next steps:

- If you are comparing hardware, read the [solar inverter components](/blog/solar-inverter-components/) guide for the part-level view that complements this circuit-level one.
- If your inverter is showing fault codes, start with the [solar inverter troubleshooting](/blog/solar-inverter-troubleshooting/) checklist before calling for service.
- If you want an inverter engineered for Indian grids and Indian heat, backed by a 12-year full replacement warranty, [talk to a Qbits engineer](/contact-us/).
