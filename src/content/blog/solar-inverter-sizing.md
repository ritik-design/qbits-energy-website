---
title: 'Solar Inverter Sizing: AC, DC and Battery Limits'
excerpt: Panel kWp does not pick your inverter. The four checks that actually decide it, with temperature corrected string voltage worked through.
description: How to size a solar inverter in India. AC output, permitted DC power, temperature corrected string voltage and current, plus separate battery sizing.
category: Guide
date: 2026-03-20
updatedDate: 2026-09-23
readTime: 9 min
image: "/og/blog-solar-inverter-sizing.webp"
author: Nirav Dhanani
keywords:
- solar inverter sizing
- DC oversizing ratio
- inverter capacity calculation
- string voltage temperature correction
- high-wattage panel compatibility
faqs:
- q: What size inverter do I need for 5.5 kWp of panels?
  a: The kWp figure alone cannot answer this. You need the AC output the site requires, the connection phase, the inverter's permitted DC input power, and the temperature corrected string voltage and current for the specific modules. Two 5.5 kWp arrays with different module models and string layouts can require different inverters.
- q: Can the inverter AC rating be smaller than the panel DC rating?
  a: Yes, and it often is. DC array capacity and AC output are different quantities, and a modest degree of DC oversizing is a normal design choice because arrays rarely produce their rated output. The permitted relationship is set by the inverter's maximum DC input power and the manufacturer's stated limits, not by a general rule.
- q: Why does cold weather matter for string voltage?
  a: Module open circuit voltage rises as temperature falls. The highest voltage the inverter will ever see occurs on the coldest bright morning, not in summer. If that figure exceeds the inverter's maximum DC voltage the equipment can be damaged, so string length is checked against the lowest expected temperature.
- q: Does inverter size determine backup duration?
  a: No. Inverter rating is power, measured in kW, which is a rate. Backup duration comes from energy, measured in kWh, stored in the battery. A larger inverter does not extend runtime. It only raises the maximum load you can supply at once.
- q: What is DC oversizing and is it safe?
  a: It means installing more DC array capacity than the inverter's AC rating. It is a deliberate and common design choice, since clipping a small amount of peak output can be worth the extra generation across the rest of the day. It must stay within the inverter's maximum DC input power and voltage limits.
- q: Can I just match inverter kW to panel kWp?
  a: It is a starting point and nothing more. That rule ignores phase, sanctioned connection, string voltage limits, per tracker current limits, roof orientation and any backup requirement. A design that satisfies the rule can still be unbuildable or unapprovable.
seoTitle: 'Solar Inverter Sizing: AC, PV and Battery Limits'
relatedSlugs:
- string-sizing-calculator
- single-vs-3-phase-inverter
- battery-sizing-hybrid-solar
---

> **Quick answers**
>
> - Array kWp and inverter kW are different quantities on different sides of the system.
> - The coldest morning sets the maximum string voltage, not the hottest afternoon.
> - Per tracker current limits constrain string layout independently of total power.
> - Sanctioned connection and phase can override the design before it is built.
> - Some DC oversizing is normal, bounded by the inverter's maximum DC input.
> - Battery runtime is an energy calculation and entirely separate from inverter rating.

**Short version.** Size from four inputs: the AC output the site needs, the DC power the model permits, the temperature corrected string voltage and current, and any backup load. A rule matching inverter kW to panel kWp skips the three checks that actually cause failures.

## The four checks

| Check | Input needed | What it settles |
| --- | --- | --- |
| AC output | Connection phase, sanctioned load, utility arrangement | The continuous AC rating and phase |
| DC power | Module count and rated Wp | Whether array size is within the permitted input |
| String voltage and current | Module Voc, Vmp, Isc, Imp and site temperature extremes | Legal string length and layout per tracker |
| Backup, if required | Essential load watts, run hours, battery model | Supported output, current and usable energy |

These interact. A string layout that satisfies voltage may exceed per tracker current. An array within DC limits may need a different tracker arrangement because the roof faces two directions. The [MPPT guide](/glossary/mppt/) covers that distinction.

## Why kWp does not pick the inverter

Ten 550 W modules give **10 times 550, which is 5,500 Wp**, or **5.5 kWp** of rated DC capacity.

That figure is measured at standard test conditions, which an Indian rooftop rarely sees. Real output is usually below rated, which is why installing somewhat more DC capacity than the inverter's AC rating is a normal design choice rather than an error. The upper bound is the inverter's maximum permitted DC input power and voltage, stated on the datasheet.

What the kWp figure cannot tell you is how those modules are wired, what voltage the strings reach on a cold morning, what current each string carries, or whether your connection permits that AC output.

## String voltage is set by the coldest morning

This is the check that protects the equipment, and the one most often skipped.

Module open circuit voltage rises as temperature falls. The highest DC voltage an inverter will ever see occurs at first light on the coldest day of the year, when the array is cold and suddenly illuminated. If the calculated cold Voc for a string exceeds the inverter's maximum DC voltage, the design is unsafe regardless of how well it behaves in summer.

The calculation needs the module's open circuit voltage, its temperature coefficient for voltage, and the lowest expected module temperature at the site. Multiply the per module corrected voltage by the number of modules in series and compare with the inverter limit, keeping margin.

The opposite bound matters too. On the hottest afternoon, string voltage falls. It must stay above the bottom of the MPPT operating window, or the tracker cannot hold the string at its maximum power point and output suffers.

So string length is bounded at both ends: short enough to stay under maximum DC voltage when cold, long enough to remain inside the MPPT window when hot.

## Current limits constrain layout separately

Each tracker has a maximum input current. String current is driven by module short circuit current, and can exceed standard test figures under high irradiance conditions.

This limit is independent of power. A design can sit comfortably within the inverter's DC power rating and still exceed the current limit on one tracker because too many strings were paralleled onto it. Check current per tracker, not just total array power.

## A worked check against a real datasheet

The [Qbits QB-4/5/6KTLD datasheet](/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf) specifies **two MPPTs**, **20 A maximum input current per tracker**, **550 V maximum DC voltage** and an **80 to 550 V MPPT operating range**. Its **50 V start up voltage** is a separate figure describing when the inverter begins operating, not a design limit.

Against those numbers, the questions become concrete. What is cold Voc per module at your lowest expected temperature, and how many can go in series before approaching 550 V. What is hot Vmp per module, and does the string stay above 80 V. What is string current against the 20 A per tracker limit. And does the roof layout justify using both trackers independently.

Use the [string sizing calculator](/string-sizing-calculator/) as an initial screen, treating its stored model data and assumptions as something to verify against current project documents rather than as final design.

## DC oversizing and clipping

Installing more DC capacity than the inverter's AC rating is a deliberate design choice, not a mistake, and it is worth understanding before you push back on a quote that proposes it.

An array reaches its rated output only under conditions a rooftop rarely sees: full irradiance, clear sky, cool modules, clean glass. For most of the year it produces well below rated. Sizing the inverter to a peak that occurs for a few hours a year means paying for conversion capacity that sits idle the rest of the time.

Oversizing the DC side lifts output across the whole of the morning and evening, and across cloudy days, at the cost of clipping the top of a small number of peak hours. Clipping simply means the inverter holds at its maximum AC output while the array could briefly have delivered more.

Two boundaries apply. Total DC power must stay within the inverter's maximum permitted DC input, and string voltage must stay within the limits already described. Within those, the right ratio depends on orientation, tilt, local irradiance and tariff structure, which is why a single recommended figure would be misleading.

## AC output and the sanctioned connection

The array can be perfect and still fail here.

List the simultaneous loads or the planned grid connected output, and check the sanctioned connection on the electricity bill. Your permitted capacity is usually tied to sanctioned load rather than roof area, and a three phase inverter requires a three phase service. The [single versus three phase guide](/blog/single-vs-3-phase-inverter/) covers the consequences of getting this wrong.

A rooftop kWp figure is not permission to install a particular AC capacity or to export. That comes from the DISCOM.

## Battery sizing is a separate calculation

A hybrid inverter's 5 kW rating is a power ceiling. It does not mean a 5 kWh battery runs for one hour, and it has no bearing on runtime at all.

Battery energy is calculated from the load, the required runtime, the usable fraction of nameplate capacity and the conversion losses, then checked against the current limits of both the battery and the inverter. The [battery sizing worksheet](/blog/battery-sizing-hybrid-solar/) works through a full example.

## What to send an installer

Provide the electricity connection details including sanctioned load and phase, recent consumption data, the roof and module layout, the module datasheet, and any backup load list.

Ask in return for the exact inverter model designation, the string schedule with calculated cold and hot voltages, current per tracker, the protection design, and the utility approval path with responsibility identified.

A model selected by a nominal kW label alone is an incomplete answer. [Contact Qbits](/contact-us/) with those documents for a model specific equipment enquiry.
