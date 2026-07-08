---
title: "How Does a Solar Power System Work, From Panel to Meter"
excerpt: "How does a solar power system work? Sunlight hits PV panels, DC flows through the inverter converting to 230 V AC, powers appliances, and surplus exports via the net meter to the grid."
category: Guide
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "16 min"
image: "/blog-images/solar-inverter-components.svg"
author: "Keyur Rakholiya"
keywords:
  - how solar power system works
  - solar system components India
  - solar inverter DC to AC
  - solar panel to meter explained
  - how does solar energy work India
faqs:
  - q: "How does a solar power system work in simple terms?"
    a: "Sunlight strikes silicon solar panels and generates direct current (DC) electricity through the photovoltaic effect. The solar inverter converts that DC into 230 V AC electricity that your appliances use. Any surplus power flows through the net meter to the grid and earns you a credit. At night, you draw from the grid and your credit offsets the cost. The entire chain - panel, cable, inverter, distribution board, net meter - takes roughly 1–4 months to commission in India."
  - q: "What is the difference between watts and units (kWh) in solar?"
    a: "Watts (W) or kilowatts (kW) measure power - the rate of energy generation at a specific moment. Units or kilowatt-hours (kWh) measure energy - the total electricity produced over time. A 3 kW solar system generating at full capacity for 5 hours produces 15 kWh (15 units). Your electricity bill charges in units (kWh); your inverter nameplate shows kW capacity. Divide your monthly bill units by 30 to find your daily consumption and size your system accordingly."
  - q: "What does a solar inverter do?"
    a: "A solar inverter performs four critical jobs: it converts direct current (DC) from panels into alternating current (AC) for household use; it tracks the maximum power point (MPPT) to extract peak energy as sunlight conditions change throughout the day; it monitors and logs generation data for your monitoring app; and it provides anti-islanding protection - automatically disconnecting from the grid during power outages for safety. Inverter quality directly determines system lifetime and financial return."
  - q: "What is a combiner box in a solar system?"
    a: "A combiner box (also called a string combiner or array junction box) connects multiple solar strings in parallel and routes their combined DC output to a single set of cables leading to the inverter. It typically contains string fuses or circuit breakers for each string and a DC isolator for safety during maintenance. Residential systems above 3 kW commonly use a combiner box; smaller systems may connect strings directly at the inverter's DC input terminals."
  - q: "What is the net meter and how does it work?"
    a: "A net meter (or bidirectional meter) is installed by your DISCOM and records both power imported from the grid and power exported to it. Your electricity bill shows the difference - net consumption. When your solar system generates more power than you use during the day, the surplus units are exported and credited to your account. At night, when you draw from the grid, those credits reduce your bill. In most Indian states, excess credits can roll over month to month."
  - q: "How long does it take for a solar system to start working after installation?"
    a: "Physical installation of a 3 kW residential system takes 1–2 days. However, the system cannot legally generate and export power until the DISCOM installs a net meter and approves the connection - a process that takes 15 to 90 days depending on the state. In states like Gujarat and Rajasthan, DISCOM approval is typically completed within 30 days. In Kerala, it can take 60–90 days. The PM Surya Ghar portal has streamlined approvals for registered systems."
  - q: "What is MPPT and why does it matter?"
    a: "MPPT stands for Maximum Power Point Tracking - an algorithm inside the solar inverter that continuously adjusts the voltage at which it draws current from the panels to extract maximum available power. As cloud cover, panel temperature, and sun angle change throughout the day, the optimal operating voltage shifts. Without MPPT, the inverter would operate at a fixed voltage and waste 10–30% of available generation. All modern grid-tied inverters use MPPT; the number of MPPT channels determines how many independently oriented strings can be optimised simultaneously."
  - q: "Do solar panels generate DC or AC power?"
    a: "Solar panels generate direct current (DC) power. The DC output from each panel is typically 30–50 V per module; strings of modules reach 300–800 V DC. The solar inverter converts this DC into 230 V AC at 50 Hz - the standard form of electricity used by Indian homes and businesses. The DC wiring from panels to inverter requires UV-resistant, 1000 V-rated cables; the AC side uses standard electrical cabling."
---

You have seen solar panels on rooftops and heard the word "inverter" many times, but the complete picture (from the photon entering a panel to the unit appearing on your electricity bill) is rarely explained in one place. This guide walks through every stage of the solar energy journey, explains what each component does, and uses real numbers from the Indian grid so the picture is practical, not abstract.

> **TL;DR**
> - Solar power moves through 7 stages: PV panel to string to combiner box to inverter to distribution board to net meter to your electricity bill.
> - The inverter (Stage 4) converts DC to 230 V, 50 Hz AC at 97-98% efficiency and is the single highest-leverage quality decision in the system.
> - MPPT recovers 2-5% more annual energy than a fixed-voltage system by continuously tracking the panels' optimal operating point.
> - Anti-islanding protection shuts the inverter down automatically during a grid outage, a deliberate safety feature, not a malfunction.
> - Net metering credits surplus exported units against nighttime grid imports; your bill reflects only the net balance.
> - A well-sized 3 kW system in Karnataka generating 450-500 units/month can push a 400-unit/month household bill to near zero.

> **Direct answer.** A solar power system works through a 7-stage energy journey: sunlight strikes PV panels generating DC current → strings carry DC to a combiner box → DC cables route to the inverter → the inverter converts DC to 230 V AC → AC powers your appliances → surplus flows through the net meter to the grid → your bill shows only the net units consumed. The "Solar Energy Journey: 7 Stages" framework below explains each stage in plain language.

Understanding this journey helps you ask the right questions before buying and read your monitoring app correctly after installation. For the basics of what solar energy is, start with [what is solar energy, complete beginner's guide](/blog/what-is-solar-energy-india-beginners/).

## Stage 1: Sunlight Strikes the PV Panel

The journey begins on your rooftop. A solar photovoltaic (PV) panel is a laminated assembly of silicon cells (typically 60, 72, or 96 cells per panel) sealed under tempered glass and mounted in an aluminium frame. Each cell is a semiconductor junction that produces about 0.5–0.6 volts of direct current when photons of light strike it and free electrons from the silicon lattice.

Cells are connected in series within the panel, producing 30–50 V per module at 400–600 Wp (watt-peak) capacity for modern premium panels. The actual output at any moment depends on:

- **Irradiance**: the intensity of sunlight hitting the surface (W/m²); peak is 1,000 W/m² on a clear noon
- **Panel temperature**: output falls roughly 0.4–0.5% per °C above 25 °C; a panel at 55 °C produces ~12–15% less than at 25 °C
- **Soiling and shade**: even partial shading of one cell reduces the output of the entire string through a bypass diode mechanism

The type of panel (monocrystalline, polycrystalline, or bifacial) determines efficiency, cost, and degradation rate. Modern monocrystalline panels (PERC or TOPCon) dominate the 2026 market with 21–23% efficiency and 0.5% annual degradation, as confirmed by [IEC 61215](https://www.iec.ch/homepage) accelerated testing protocols that all ALMM-listed panels must pass. Quality panels from ALMM-listed manufacturers are the entry point for PM Surya Ghar subsidy eligibility, see the [ALMM list Phase III guide](/blog/almm-list-phase-iii-guide/) for details.

## Stage 2: Strings Carry DC to the Combiner Box

Individual panels are wired together in **strings**: series connections that add their voltages. A string of 12 × 400 Wp panels produces approximately 480 V DC. Multiple strings are wired in parallel at a **[combiner box](/glossary/combiner-box/)**, which combines their current output while maintaining the string voltage.

The combiner box serves three practical purposes:

- **Fusing or circuit-breaking each string**: protects against a short circuit in one string from affecting others
- **DC isolation**: provides a safety isolator for maintenance or emergency shutdown
- **Current aggregation**: routes the combined DC output in a single cable pair to the inverter

Residential systems of 3–6 kW may skip a dedicated combiner box and connect strings directly to the inverter's DC input terminals (most residential inverters accept 2–4 strings). Commercial systems above 10 kW almost always use a combiner box, typically packaged as part of a dedicated [ACDB/DCDB panel](https://heavengreenenergy.com/products/acdb-dcdb/) that also houses the AC-side protection.

The DC cables between panels, combiner box, and inverter must be rated for 1,000 V (or 1,500 V for larger systems), UV-resistant, and sized for the maximum short-circuit current of the array. Undersized DC cables are a leading cause of resistive losses and heat-related failures in improperly installed systems.

## Stage 3: DC Cables Route to the Solar Inverter

The DC cables from the combiner box (or directly from panel strings in small systems) run through conduit or cable trays to the solar inverter, typically mounted on a shaded wall near the distribution board or in a dedicated enclosure. The run length should be minimised, longer DC cable runs increase resistive losses and voltage drop.

At the inverter's DC input terminals, each string connects to a dedicated **[MPPT](/glossary/mppt/)** channel. An inverter with two MPPT channels can independently optimise two differently oriented strings (for example, one south-facing and one west-facing) without either string dragging down the other. For split-orientation rooftops common in Indian urban homes, dual-MPPT is a meaningful advantage.

> **5–6 kWh/m²/day.** Average solar irradiance across most of India, one of the highest levels in the world for a major economy. *Source - [NREL India Solar Resource Data](https://www.nrel.gov/international/ra_india.html), 2024.*

## Stage 4: The Inverter Converts DC to 230 V AC

This is the most technically complex stage. The solar inverter performs three simultaneous functions:

### DC-to-AC Conversion

The inverter uses high-frequency switching transistors (IGBTs or MOSFETs) to chop the DC input into a high-frequency signal, then filters and transforms that signal into a smooth 230 V, 50 Hz AC waveform, indistinguishable from grid power. Peak inverter efficiency for quality models reaches 97–98%, meaning less than 2% of DC input is lost as heat during conversion.

### Maximum Power Point Tracking (MPPT)

Every second, the inverter's MPPT algorithm sweeps the DC voltage across a range and identifies the operating point that delivers maximum power. As cloud cover moves in and out, panel temperature fluctuates, and the sun angle changes through the day, the optimal voltage shifts continuously. A good MPPT algorithm recovers 2–5% more energy annually than a fixed-voltage system.

### Grid Synchronisation and Anti-Islanding

The inverter monitors grid frequency and voltage in real time and synchronises its AC output to match exactly. When the grid fails (power cut), the inverter detects the loss of synchronisation within milliseconds and shuts down automatically, a safety requirement called **[anti-islanding protection](/glossary/anti-islanding/)** mandated by [IEC 62116](https://www.iec.ch/). This is why on-grid systems produce zero power during outages: it is a deliberate safety shutdown, not a malfunction.

For a deeper technical dive, see [how does a solar inverter work](/blog/how-does-a-solar-inverter-work/).

## Stage 5: AC Power Flows to Your Distribution Board

The inverter's AC output connects to your home's main distribution board (DB), the same board that houses your MCBs and RCCB. From the DB, AC power flows to every circuit in the house: lights, fans, air conditioner, refrigerator, washing machine, EV charger.

The solar contribution and grid supply share the same DB. When solar generation (say, 2.5 kW at 11 am) exceeds household consumption (say, 1.8 kW), the surplus 0.7 kW flows outward toward the net meter and then to the grid. When household consumption exceeds solar generation (evening, cloudy day), the shortfall is automatically supplemented from the grid, the transition is automatic with no switching lag.

**Understanding watts vs units (kWh):**

| Term | Unit | What it measures | Example |
| --- | --- | --- | --- |
| Power | Watts (W) / Kilowatts (kW) | Rate of electricity at a moment | "My system is generating 2.8 kW right now" |
| Energy | Watt-hours (Wh) / Kilowatt-hours (kWh) | Total electricity over time | "My system generated 14 units today" |
| "A unit" on your bill | 1 kWh | 1 kW drawn for 1 hour | 1 ton AC at full load for 1 hour |

Your electricity bill charges you in units (kWh). Your inverter nameplate shows kW capacity. To estimate daily generation: `System kW × [Peak Sun Hours](/glossary/peak-sun-hours/) = Units per day`. A 3 kW system in Karnataka getting 5 peak sun hours generates approximately 15 units per day.

## Stage 6: Surplus Power Flows Through the Net Meter

At the point where your home's AC wiring meets the DISCOM grid, the DISCOM installs a **[net meter](/glossary/net-metering/)**: a bidirectional smart meter that records power flow in both directions:

- **Import**: units drawn from the grid (night, cloudy days, high consumption periods)
- **Export**: surplus solar units fed to the grid (midday when panels peak and consumption is low)

The net meter sits at the boundary of your property. In India, net metering is regulated by state electricity regulatory commissions under guidelines from the [Ministry of New and Renewable Energy](https://mnre.gov.in/), which mandates that DISCOMs must facilitate net metering for rooftop solar under the PM Surya Ghar scheme. India's installed rooftop solar capacity crossed 15 GW in 2025, according to [Mercom India's Q4 2025 Solar Market Report](https://www.mercomindia.com/), driven largely by net-metering-enabled residential adoption. Most states allow net metering for residential systems up to 10 kW. For a complete walkthrough of the application process, see [how to apply for net metering in India](/blog/how-to-apply-net-metering-india/).

The financial mechanism: your monthly bill charges you for `(Import units) − (Export units)`. If export exceeds import in a month, the credit rolls forward to the next billing cycle in most states.

## Stage 7: Your Electricity Bill Reflects the Net Balance

The final stage is the bill itself. Before solar, your bill showed raw consumption. After solar, the bill shows:

- Units imported from grid (total)
- Units exported to grid (total)
- Net consumption = Import − Export
- Fixed charges (connection, demand charges, these do not change with solar)
- Taxes and duties

A well-sized solar system for a 3 BHK home consuming 400 units/month in Karnataka (where the system generates approximately 450–500 units/month) can reduce the net bill to near zero or even generate a credit balance. Read the [solar inverter app monitoring guide](/blog/solar-inverter-app-monitoring/) to understand the metrics your inverter reports daily.

## The Solar Energy Journey: 7 Stages

To recap the complete energy path described above, here is the named framework for easy reference.

### The Solar Energy Journey: 7 Stages

1. **Sunlight → PV cell**: Photons excite silicon electrons; each cell produces ~0.5 V DC at standard test conditions.
2. **PV cell → module → string**: 60–96 cells in series form a module (30–50 V); modules in series form a string (300–800 V).
3. **String → combiner box**: Parallel-connected strings aggregate current; fuses protect each string; DC isolator enables safe shutdown.
4. **Combiner box → inverter**: 1,000 V-rated DC cables carry current to the MPPT inputs; shorter runs mean fewer losses.
5. **Inverter → 230 V AC**: IGBT switching converts DC to a clean 230 V, 50 Hz AC waveform at 97–98% efficiency; anti-islanding shuts down during outages.
6. **Distribution board → appliances**: AC power flows to every circuit; solar and grid supply share the DB transparently.
7. **Net meter → DISCOM grid**: Surplus AC exports to the grid; import/export difference determines your monthly bill.

This framework is the complete answer to "how does a solar power system work", from the first photon to the last rupee on your bill.

## Component Quality: Why Each Stage Matters

The 7-stage journey above only delivers the promised financial returns if every component performs at specification. Here is what each quality decision affects:

| Component | Quality Gap | Impact on 25-Year Returns |
| --- | --- | --- |
| Solar panels | ALMM-listed vs uncertified | ₹80,000–₹1,50,000 in lost generation from higher degradation |
| DC cables | 1,000 V rated vs undersized | 3–5% resistive loss, potential fire risk from overheating |
| Inverter | MPPT efficiency + warranty depth | 2–4% generation loss; replacement cost ₹25,000–₹80,000 if it fails in Year 5 |
| Net meter | DISCOM-approved only | Non-approved meters may fail [interconnection inspection](https://heavendesigns.in/electrical-ceig-drawings/); restart the clock on approval |
| [Mounting structure](https://heavengreenenergy.com/products/mounting-structures/) | Hot-dip galvanised vs basic painted | 10–15 year lifespan difference in coastal/humid regions |

The inverter is the most consequential quality decision because it sits at Stage 4 (the heart of the system) and because its failure destroys generation from every other component while it is offline. A 12-year full-replacement warranty means a failed inverter in Year 7 costs you nothing but a service call. See [how to evaluate solar inverter reliability](/blog/how-to-evaluate-solar-inverter-reliability/) for the evaluation framework.

## Common Misunderstandings About How Solar Works

Several misconceptions about the solar energy journey persist in Indian homeowner communities.

- **"My panels generate AC power"**: False. Panels generate DC; the inverter produces AC. Confusing the two leads to incorrect cable sizing and potential safety hazards.
- **"A bigger panel always means more power"**: Not necessarily. A 500 Wp panel connected to an inverter MPPT input at the wrong voltage range will be clipped. System sizing (the match between panels, strings, and inverter) determines actual output, not panel wattage alone. Use the [string sizing calculator](/string-sizing-calculator/) to verify compatibility.
- **"The net meter exports all my solar power"**: Incorrect for most daytime hours. The DB draws from solar first; only the surplus after household consumption is exported. Self-consumption (using your own solar power directly) is the highest-value use because it offsets your full grid tariff; exports typically earn a lower feed-in rate.
- **"Inverters last 25 years like panels"**: Standard inverter warranties in India are 5–10 years; quality manufacturers offer 10–12 years. Plan for at least one inverter replacement over the 25-year panel lifespan unless the initial warranty is 12+ years.

## Where Qbits Fits in the 7-Stage Journey

Qbits inverters sit at Stage 4 (the conversion stage) which is where the financial returns of every other stage are either preserved or leaked. Qbits on-grid and hybrid inverters are engineered for Indian grid realities: 180–270 V input voltage tolerance, IGBT-based switching rated for 45 °C ambient temperature, and AI-powered WhatsApp monitoring that alerts you to Stage 2 string imbalances or Stage 5 distribution faults before they compound into losses.

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series, 1.5 kW to 50 kW; dual-MPPT options for split-orientation rooftops.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series with integrated battery management for households where Stage 7 (grid export) is not reliable due to outages.
- **[Authorized Service Partners](/authorized-service-partners/)**: Pincode-searchable network for the 72-hour RMA SLA when any stage of the journey develops a fault.

To discuss how the 7-stage journey applies specifically to your roof layout and consumption profile, [talk to a Qbits engineer](/contact-us/), most initial consultations happen via WhatsApp and take less than 15 minutes.
