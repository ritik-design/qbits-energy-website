---
title: "Wi-Fi Solar Inverter Guide"
excerpt: "Wi-Fi solar inverter hardware: what the dongle is, RS485 vs cellular, antenna placement, polling intervals, and what to specify in the quote."
description: "A hardware and buying guide to Wi-Fi solar inverter monitoring in India. Covers the dongle and its communication port, RS485 daisy-chains, cellular and SIM questions, antenna placement, polling resolution, local versus cloud access, and the exact wording to put in a quotation."
category: "Technology"
date: 2026-09-23
updatedDate: 2026-09-24
readTime: "18 min read"
image: "/images/hybrid.webp"
author: "Qbits Editorial"
keywords:
  - "solar inverter monitoring"
  - "solar inverter app"
  - "inverter WiFi monitoring"
  - "solar inverter dongle"
  - "RS485 solar inverter"
faqs:
  - q: "Is the Wi-Fi dongle included with a solar inverter?"
    a: "Often it is not. On many inverter ranges the Wi-Fi stick, RS485 module or cellular logger is a separately ordered accessory that plugs into a communication port on the underside of the unit. The inverter will run, export and earn net-metering credit without it. Ask your supplier to confirm in writing that the communication accessory, its mounting and its commissioning are inside the quoted price."
  - q: "What communication options do Qbits inverters list?"
    a: "The Qbits product data lists Wi-Fi as the communication interface on the on-grid TLS, TLD and TLC series, with optional RS485 or GPRS. The QBH hybrid entries list Wi-Fi monitoring with a note to verify the battery interface, and the larger QBH entries list remote monitoring with the interface to be verified. Ethernet is not listed for any series in that data, so do not assume it. Confirm the exact interface for the SKU on your quotation."
  - q: "Do the Qbits monitoring apps prove my inverter can be monitored?"
    a: "No. Qbits has live app listings on Google Play under the package io.aotai.qbit and on the App Store under id 6745775491. An app listing only proves that an application exists and is published. It does not prove that a given SKU ships with a logger, that a specific screen is populated on your model, or that the account has been handed to you. Verify on the installed unit with live site data."
  - q: "Why would an installer choose RS485 over Wi-Fi?"
    a: "RS485 is a wired differential bus, so it tolerates electrical noise, long runs and metal-walled plant rooms far better than a 2.4 GHz radio. It also lets several inverters share one physical chain into a single data logger, which is how multi-inverter and commercial and industrial sites are normally built. Wi-Fi gives you one radio per inverter and one more thing to lose when the router changes. Most professional multi-inverter designs use RS485 into a logger, with the logger holding the internet link."
  - q: "How much mobile data does a cellular solar logger use?"
    a: "Far less than people expect, but the real figure comes from the vendor, not from a guess. At a 5-minute upload interval a logger sends roughly 8,640 records a month. If each record plus protocol overhead were about 1 kB, that is under 10 MB a month. Ask the supplier for the documented monthly consumption, who owns the SIM, who pays for renewal, and what happens to your dashboard when the plan lapses."
  - q: "What polling interval should I ask for?"
    a: "For a residential rooftop a 5-minute interval is normally enough to see daily yield, shading patterns and hard faults. It is not enough to investigate a transient, because a grid event that clears in about 2 seconds leaves almost no trace in a 5-minute average. If you need event-level detail, ask whether the inverter logs faults with its own timestamps independently of the upload interval, and whether that log can be read locally."
  - q: "Why does Modbus TCP or SunSpec matter on a home system?"
    a: "It matters if you might later add a battery, an EV charger or a home energy management controller. An open protocol lets a third-party controller read the inverter directly over the local network, without waiting for a cloud integration that may never arrive. A cloud-only dongle makes your inverter a closed appliance. Ask whether local Modbus TCP or a SunSpec information model is exposed, and request the register map."
  - q: "What happens when a monitoring dongle fails?"
    a: "You lose data, not generation. A dongle failure does not stop the inverter exporting, and the inverter keeps its own internal counters and fault log. Treat the dongle as a consumable that is cheaper and quicker to swap than an inverter, and keep the model number, the plant account details and the supplier contact in your handover file. Check whether the accessory carries its own warranty term separate from the inverter."
  - q: "Where should the antenna go if the inverter is outside?"
    a: "As close to a clear line of sight to the router as the cable allows. Inverters are usually mounted on an outside wall or in a shaded utility area, and the router sits inside behind at least one masonry wall. The practical fixes, in order of cost, are moving the router, adding a mesh node or access point near the inverter wall, running Ethernet to that access point, using an external or extension antenna where the accessory supports one, or switching to a cellular logger."
---

An inverter that says "Wi-Fi enabled" on the brochure is not the same as an inverter that arrives monitored. The radio usually lives in a small removable stick, and on many ranges that stick is an accessory you have to order. The inverter will still export power without it. It will still earn net-metering credit. You simply will not be able to see any of it.

This guide covers the hardware and the buying decision, not the troubleshooting. It explains what the dongle is and where it plugs in. It compares Wi-Fi, RS485, cellular, Ethernet and Bluetooth, and what each one is for. It explains why professional multi-inverter jobs still run a wired bus into a data logger. It covers the SIM and data-plan questions that surface only after commissioning. It covers antenna placement, since the inverter is usually outside and the router is not. It shows how polling interval decides what you can ever investigate. It ends with the exact lines to put in a quotation.

If your dongle is already fitted and refusing to connect, start with the [Wi-Fi connection fault ladder](/blog/solar-inverter-wifi-not-connecting-fix/) instead. If it is connected and you want to read the curves, see [how to read the monitoring app](/blog/solar-inverter-app-monitoring/).

> **TL;DR**
> - The Wi-Fi radio is normally a plug-in stick on a dedicated communication port. On many ranges it is a separately ordered accessory, not a fitted part.
> - The Qbits product data lists Wi-Fi on the on-grid TLS, TLD and TLC series with optional RS485 or GPRS. The QBH hybrid entries list Wi-Fi monitoring with the battery interface to be verified. Ethernet is listed nowhere.
> - RS485 remains the professional choice above one inverter, because several units share one wired chain into a single logger with one internet link.
> - A grid trip clears in up to 2 seconds under Central Electricity Authority Regulation 11(6). A 5-minute logging interval cannot show you that.
> - Cellular loggers solve no-broadband sites, then raise three questions: SIM ownership, renewal, and what the dashboard does when the plan lapses.
> - Ask for local Modbus TCP or a SunSpec information model if a battery, EV charger or energy management controller might be added later.
> - A dongle is a consumable. Losing one costs you data, not generation, and replacing one is far cheaper and faster than replacing an inverter.

**Short version.** A Wi-Fi solar inverter is an ordinary grid inverter plus a small communication module. That module plugs into a port on the unit and forwards readings to a cloud account. It is frequently an optional accessory, not a fitted part. Specify it by name in the quotation. Use RS485 into a logger for multi-inverter sites, and confirm commissioning on live site data before handover.

## What a monitoring dongle physically is

A monitoring dongle is a sealed plastic stick, usually 60 to 120 mm long. Inside sit a small radio or modem, a microcontroller, and a connector keyed to one specific inverter socket. It draws power from that socket and has no independent supply.

The socket is a dedicated **communication port**, normally on the underside of the inverter beside the DC and AC glands, often behind a screwed blanking cap. Removing the cap and pushing the stick home is a 30 second job. Finding out that no stick was supplied is the part that costs a week.

The dongle does three things. It speaks the inverter's internal serial protocol. It holds a small buffer of readings. It pushes those readings to a server. It measures nothing itself, so every number in the app is a value the inverter calculated and handed over.

That matters for diagnosis. The dongle is a courier, so a missing figure in the app is usually a missing figure at the inverter, not a lost packet.

## The purchase surprise: it is an accessory, not a fitting

This is the single most common unpleasant discovery on a new rooftop. The datasheet line reads "Wi-Fi" under communication. The buyer reads that as included. The accessory column of the price list says otherwise.

Manufacturers do this deliberately. One inverter platform is sold into markets that want Wi-Fi, markets that want cellular, and commercial jobs that want a wired bus. So the port is standard and the module is ordered to suit.

The Qbits product data lists communication as Wi-Fi with optional RS485 or GPRS. That applies across the on-grid single-phase TLS and TLD ranges and the three-phase TLC ranges. The three QBH hybrid entries read differently. The 3 to 6 kW single-phase family lists Wi-Fi monitoring with the battery interface to be verified. The 7 to 8 kW single-phase and 5 to 12 kW three-phase families list remote monitoring with the interface to be verified. Those are the words in the product data, and "verify" is doing real work there.

Qbits also has live monitoring apps, on Google Play under the package `io.aotai.qbit` and on the App Store under id 6745775491. An app listing proves that an application exists. It does not prove that the SKU on your quotation ships with the logger that feeds it. Ask, and ask in writing.

## Interface options compared, and what each is for

**Answer capsule.** There are five interfaces in common use and they are not competing for the same job. Wi-Fi suits a single residential inverter near a router. RS485 suits anything with more than one inverter. Cellular suits sites with no usable broadband. Ethernet suits plant rooms with structured cabling. Bluetooth is a commissioning and local-display tool, not a monitoring channel.

| Interface | What it is for | What it needs | Practical limit | Where it fails |
| --- | --- | --- | --- | --- |
| Wi-Fi | One inverter, one home router | 2.4 GHz SSID, password, decent signal at the inverter wall | One inverter per radio | Masonry walls, router or password changes, 5 GHz-only networks |
| RS485 | Multi-inverter and commercial sites | Shielded twisted pair, unique address per inverter, a data logger | Commonly quoted as 32 unit loads and about 1,200 m at low baud under the TIA/EIA-485-A standard | Wrong polarity, missing termination, duplicated addresses |
| Cellular (GPRS or 4G) | Sites with no broadband, remote plant | SIM, active data plan, network coverage at the unit | One logger per SIM | Coverage inside a plant room, silent plan expiry |
| Ethernet | Plant rooms with structured cabling | A spare port and a cable run to the inverter | Standard 100 m per run | Not offered on every range, including the Qbits data |
| Bluetooth | Local commissioning, phone-side setup | A phone within a few metres | Line of sight, metres not rooms | Treated as remote monitoring when it is not |

In the Qbits product data, Bluetooth appears in exactly one place. It sits in the display field of the QB 225/320K-EHV utility-scale entry, which reads LED and Bluetooth app with optional LCD. Bluetooth is not listed as a communication interface on any series, and Ethernet is not listed at all. Do not design around either without written confirmation for your SKU.

For a broader view of what the electronics can do once connected, see [what a smart solar inverter actually adds](/blog/smart-solar-inverter/).

## Why RS485 is still the professional choice above one inverter

Give a commercial electrician a choice between eleven Wi-Fi sticks and one wired chain, and the chain wins every time. The reason is not nostalgia. RS485 is a differential bus, which means it carries each bit as the voltage difference between two wires. Noise that hits both wires equally cancels out.

That property is why it survives next to switching inverters, contactors and long cable trays. A 2.4 GHz radio in the same room is fighting the same noise with none of the immunity.

The second reason is topology. One RS485 chain can serve many inverters, and the whole chain terminates at a single data logger that holds the one internet connection for the site. Eleven radios means eleven things that can drop off your dashboard independently.

A daisy-chain is built like this:

1. Locate the RS485 terminals or connector on each inverter, usually A and B, sometimes labelled D+ and D-.
2. Run shielded twisted pair from the logger to inverter 1, then from inverter 1 to inverter 2, and so on. Do not run separate spurs back to the logger.
3. Keep polarity consistent at every unit. A to A, B to B, all the way down. One crossed pair kills the whole chain, not one inverter.
4. Ground the cable shield at one end only, to avoid a ground loop along the run.
5. Set a unique slave address on each inverter through its own menu. Two inverters sharing address 1 will produce garbage or silence.
6. Fit the termination resistor at the far end of the chain if the hardware requires it, and only at the far end.
7. Match baud rate and parity across every device on the bus.
8. Poll each address from the logger and confirm all units answer before you close any enclosure.

If you are sizing the array that sits behind that chain, the [string sizing calculator](/string-sizing-calculator/) handles the DC side. For the commissioning sequence around it, see the [India commissioning walkthrough](/blog/solar-inverter-commissioning-in-india/).

## Cellular loggers, and the SIM questions nobody asks

**Answer capsule.** A cellular logger carries its own modem and SIM and needs no site broadband at all. That makes it the obvious answer for farm pumps, remote plant, tenanted premises and any roof where the owner will not share Wi-Fi credentials. It also introduces an ownership question that almost nobody asks before install, and that surfaces roughly a year later when the data stops.

Ask these five before you approve the accessory:

1. Who owns the SIM, the supplier or you? A supplier-owned SIM means your dashboard depends on their billing relationship.
2. Is the first period of data bundled, and for how long? Twelve months is common. Twelve months from despatch is not the same as twelve months from commissioning.
3. What is the renewal route and cost, and who receives the reminder?
4. What does the system do when the plan lapses? A logger that buffers and backfills is a very different outcome from one that silently drops a fortnight.
5. Which networks does the module support at your pin code? The Qbits product data lists the optional cellular route as GPRS. GPRS is a 2G-era label, so confirm which radio generation the current accessory actually uses and which Indian operators it will attach to at your site.

Where the monitoring data is hosted is a separate and increasingly regulated question. Our note on [inverter data localisation rules](/blog/mnre-inverter-data-localization-rules/) covers that ground.

## Antenna and placement: the inverter is outside, the router is not

Almost every rooftop system has the same geometry problem. The inverter is mounted on an outside wall, under a shade, or in a utility area chosen for heat and water reasons. The router is inside, in the living room, behind one or two masonry walls and possibly a floor slab.

A 2.4 GHz signal loses real strength through reinforced concrete. Metal cupboards and metal inverter enclosures make it worse. The dongle is then asked to hold a link on a signal the installer never measured.

Measure it before you commit. Stand at the inverter with a phone and check the signal on the SSID the dongle will use. If the phone struggles there, the dongle will fail there.

The remedies, cheapest first:

| Remedy | What it costs | When to use it |
| --- | --- | --- |
| Move or re-orient the router | Nothing | Signal is marginal, not absent |
| Add a mesh node or access point on the inner face of the inverter wall | One device | One wall between router and inverter |
| Run Ethernet to that access point | Cable and labour | Multiple walls, or a detached plant room |
| External or extension antenna on the dongle | Accessory cost, if supported | Dongle sits inside a metal enclosure |
| Switch to a cellular logger | Logger plus data plan | No usable Wi-Fi at the inverter at all |

Two placement rules save most of the pain. Do not bury the dongle inside a metal enclosure with the door shut. And do not mount the inverter behind a water tank or a steel shade sheet that sits directly between it and the house.

## Dongle or data logger: the distinction that matters

The two words get used interchangeably and they are not the same device. A dongle serves one inverter, has no user interface, stores very little, and speaks only to the manufacturer's cloud. A data logger serves many inverters and polls them over RS485. It usually holds days of history and often has a web page of its own. It can commonly forward data to more than one destination.

| Attribute | Dongle | Data logger |
| --- | --- | --- |
| Inverters served | 1 | Many, over one RS485 chain |
| Local interface | None | Usually a web page or display |
| Onboard history | Minutes to hours | Typically days |
| Extra inputs | None | Often an energy meter, sometimes sensors |
| Outputs | Vendor cloud | Vendor cloud, often Modbus TCP or a second endpoint |

The decision rule is simple. One inverter, good Wi-Fi, residential: a dongle is the right answer. Two or more inverters, an export limit to hold, or a commercial site with a revenue meter: a logger is the right answer. Trying to cover that with several dongles costs more in site visits than the logger saved. Export control in particular needs a device that reads a meter and writes a setpoint back to the inverters.

Battery systems add a third wire. Hybrid inverters usually talk to a lithium battery management system over [CAN bus](/glossary/can-bus/), which is a separate physical interface from your monitoring channel. That is exactly why the Qbits QBH entries carry the instruction to verify the battery interface.

## Polling interval and the resolution you actually get

**Answer capsule.** Polling interval decides what questions you can ever answer. A 5-minute interval is fine for yield, shading and hard faults. It is useless for transients, because averaging destroys the peak you were looking for. Ask for the interval in seconds, and ask separately whether the inverter timestamps its own fault log independently of the upload rate.

**Worked example: what a 5-minute average hides.**

Inputs, chosen to be illustrative:

- Steady output on a clear afternoon: 4.8 kW
- A cloud edge drops output to 1.0 kW for 60 seconds
- Logging interval: 300 seconds, reported as an average

Arithmetic: ((4.8 kW x 240 s) + (1.0 kW x 60 s)) / 300 s = (1,152 + 60) / 300 = **4.04 kW**

The log shows a 16% dip. The real instantaneous dip was 79%. Nothing in the record tells you which one happened.

Now take a grid event. Regulation 11(6) of the Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013 sets the trip envelope. Voltage: trip above 110% or below 80% of nominal, clearing up to 2 seconds. Frequency: trip at 50.5 Hz and above or 47.5 Hz and below, clearing up to 0.2 seconds. The regulation also allows a distribution company to prescribe a narrower range.

A 0.2 second event inside a 300 second average is 0.07% of the window. It is not visible. It is not even nearly visible. If you are investigating nuisance tripping, the cloud graph is the wrong instrument and the inverter's own event log is the right one.

**Worked example: cellular data volume.** At a 300 second interval a logger sends 12 records an hour, 288 a day, roughly 8,640 a month. If a record plus protocol overhead were about 1 kB, that is about 8.6 MB a month. The 1 kB is an assumption, to be replaced with the vendor's documented figure. It still shows the scale. A monitoring SIM needs a small plan, and anyone quoting a large one should explain why.

## Local access versus cloud-only, and why an open protocol matters

Most consumer dongles are cloud-only by design. The stick talks outward to the manufacturer's server, and your app talks to that same server. Nothing on your home network can read the inverter directly. That works until you want to do something the manufacturer did not plan for.

The moment you add a battery, an EV charger or a home energy management controller, you need one device to read another. Suppose the inverter exposes **Modbus TCP** on the local network, or implements a **SunSpec** information model. A third-party controller can then read it today, without waiting for a cloud integration that may never be built. If it does not, your options shrink to whatever partnerships the vendor signs.

Three questions to put in writing:

1. Is Modbus TCP available on the local network, and can I have the register map?
2. Is a SunSpec information model implemented, and which models?
3. If the manufacturer's cloud is unavailable, does local reading still work?

The honest counterpoint. For a plain 3 kW rooftop with no battery plan, cloud-only is perfectly adequate. Paying for a logger purely to get local Modbus is over-specifying. The test is whether anything else will ever need to read this inverter. If the answer is a maybe, pay the small premium now. Retrofitting an interface later means a site visit and possibly a different accessory.

For a comparison of the platforms rather than the hardware, see our survey of [inverter monitoring systems in India](/blog/solar-inverter-monitoring-systems-in-india/). If you would rather receive alerts in a channel you already read, the [WhatsApp monitoring route](/blog/whatsapp-solar-monitoring/) covers that separately.

## What to specify at quotation time

**Answer capsule.** The fix for the accessory surprise is one paragraph in the quotation. Name the interface, name the accessory, state that commissioning and handover are included, and state who owns the account. Vague wording such as "Wi-Fi monitoring included" is what produces an argument at handover, because both sides can read it their own way.

Paste this into your enquiry and ask for it to be answered line by line:

1. Inverter model exactly as it will be invoiced, with the communication interface named.
2. The communication accessory named as a line item, with its part reference, stated as supplied and fitted.
3. Interface choice confirmed: Wi-Fi, RS485 into a logger, or cellular. For RS485, the logger model and the number of inverters on the chain.
4. For cellular: SIM ownership, bundled data period counted from commissioning, renewal cost and route.
5. Commissioning included, defined as the plant visible in the app with live site values while the installer is on site.
6. Account ownership in my name, with installer access granted by me rather than inherited.
7. Polling interval in seconds, and history retention period.
8. Local access: Modbus TCP or SunSpec availability, with the register map if applicable.
9. Warranty term for the accessory, stated separately from the inverter warranty.
10. Replacement route and lead time for the accessory, and who pays for the site visit.

On warranty, keep the two items apart. Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model. The public datasheets do not define the base term, remedy, registration deadline or exclusions. So obtain the current written warranty for the exact quoted model. An accessory very often carries its own shorter term, and assuming otherwise is a costly guess.

Ranges and interface options per series are set out on the [on-grid inverter page](/on-grid-inverter/) and the [hybrid inverter page](/hybrid-inverter/).

## Commissioning verification, and replacement when it fails

Do not sign the handover on a screenshot. Run this while the installer is still on the roof:

1. Open the app on your own phone, logged into your own account, not the installer's.
2. Confirm the serial number on screen matches the serial on the inverter label.
3. Compare instantaneous AC power in the app against the inverter display. They should agree within rounding.
4. Ask the installer to switch the AC isolator off, and confirm the app shows the plant offline within the documented delay.
5. Switch it back on and confirm recovery, and confirm nothing needs re-pairing.
6. Check that daily and cumulative energy totals are populated, not blank.
7. Trigger or simulate one alert and confirm it reaches the recipient you nominated.
8. Record the logger or dongle model, the plant ID, the account email and the password recovery route in your handover file.
9. Note who else holds installer or fleet-level access, and how that access is removed later.

Then treat the hardware realistically. A dongle sits on an outside wall in Indian summer heat, powered continuously, with a radio running all day. It will not last as long as the inverter. When it dies you lose visibility, not generation. The inverter keeps exporting, and keeps its own counters and fault log at the display.

That is why the handover file matters more than the dongle does. With the model number and the plant account details on record, a replacement is a small part and a short visit. Without them, a simple swap becomes an identification exercise and a new plant account. Your generation history then sits stranded under the old one.

## The Bottom Line

A Wi-Fi solar inverter is a normal inverter plus a small courier module. The module is the part that gets forgotten in the quotation. Pick the interface from the site, not the brochure. Wi-Fi for one inverter near a router. RS485 into a logger for anything multi-inverter. Cellular where broadband does not reach. Then write it down, so the accessory arrives, gets fitted, and gets commissioned with the account in your name.

- Ask one question before you sign anything: "Is the communication accessory a supplied, fitted and commissioned line item on this quotation?" Get it in writing.
- Choose RS485 into a data logger the moment the design has two inverters, an export limit, or a revenue meter. Retrofitting that decision costs a site visit.
- Send your inverter model and site layout to the [Qbits team](/contact-us/). Ask for the interface options and accessory part references for that exact SKU before you order.
