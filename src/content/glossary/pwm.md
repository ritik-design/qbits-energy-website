---
term: "PWM"
title: "PWM: Definition, Meaning, How It Works, Benefits & Applications in Solar"
description: "PWM (Pulse Width Modulation) is the switching technique behind solar charge controllers and inverters. Full guide to working, MPPT comparison, applications."
category: "MPPT and Strings"
categorySlug: "mppt-strings"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is pwm
  - pwm full form
  - pwm charge controller
  - pwm vs mppt
  - pulse width modulation solar
  - pwm working
shortDefinition: "PWM stands for Pulse Width Modulation, a switching technique where a transistor is rapidly turned on and off to control average voltage or current. In solar, PWM refers to the charge controller topology that connects panel to battery directly through a switch, without DC-DC conversion."
quickFacts:
  industry: "Solar Power Electronics"
  primaryUse: "Battery charging in small solar systems and the switching technique in inverters"
  commonUsers: "Solar lantern manufacturers, small home lighting systems, basic charge controllers"
  relevantStandards: "IEC 62509, IS 16270, MNRE standalone PV specifications"
  relatedTechnologies: "MPPT, charge controller, sine wave inversion, IGBT, MOSFET"
relatedTerms:
  - { slug: "mppt", term: "MPPT" }
  - { slug: "charge-controller", term: "Charge Controller" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "battery-soc", term: "Battery SOC" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "lithium-ion-battery", term: "Lithium Ion Battery" }
  - { slug: "sine-wave-inverter", term: "Sine Wave Inverter" }
  - { slug: "modified-sine-wave", term: "Modified Sine Wave" }
  - { slug: "solar-lantern", term: "Solar Lantern" }
  - { slug: "open-circuit-voltage", term: "Open Circuit Voltage" }
  - { slug: "duty-cycle", term: "Duty Cycle" }
faqs:
  - q: "What is PWM in simple words?"
    a: "PWM is a switching technique that turns a transistor on and off many times a second. By varying how long the switch is on each cycle, you control the average voltage or current delivered. In solar, it shows up in charge controllers and inverters."
  - q: "What is the full form of PWM?"
    a: "Pulse Width Modulation."
  - q: "PWM vs MPPT charge controller, which is better?"
    a: "MPPT extracts 15 to 30 percent more energy from the same panel and is the right choice for any modern installation. PWM is cheaper, simpler and still used in low-cost lighting and small rural systems."
  - q: "How does a PWM charge controller work?"
    a: "It connects the panel directly to the battery through a switch. The switch pulses on and off rapidly to regulate charging current. There is no DC-DC conversion, so the panel is forced to operate at the battery voltage."
  - q: "Why is PWM less efficient than MPPT?"
    a: "Because the panel is held at battery voltage instead of its maximum power point voltage. A 36-cell panel with Vmp around 17 V charging a 12 V battery wastes 15 to 30 percent of available power."
  - q: "Can PWM charge any battery?"
    a: "Only if panel Vmp matches the battery voltage class. A 12 V battery needs a 36-cell, 17 V panel. A 24 V battery needs a 72-cell, 34 V panel. Higher panel voltages cannot be used with PWM."
  - q: "Is PWM used in inverters too?"
    a: "Yes, but as a switching technique, not a charge controller. Modern solar inverters chop the DC bus into AC using PWM at 16 to 50 kHz. The output filter smooths this into a sine wave."
  - q: "Where is PWM still used in solar?"
    a: "In solar lanterns, small home lighting kits, rural lighting systems and applications where cost outweighs yield. PWM remains common at 50 to 200 W power levels."
  - q: "What is duty cycle in PWM?"
    a: "Duty cycle is the fraction of each switching period that the transistor is on. A 50 percent duty cycle means the switch is on for half of each cycle. Varying duty cycle varies average output."
  - q: "Does PWM produce a clean sine wave?"
    a: "PWM by itself produces a chopped square wave. An LC filter on the output smooths this into a sine wave. Without filtering, the PWM signal is unsuitable for sensitive AC loads."
  - q: "Why do inverters switch at high frequency?"
    a: "Higher switching frequency allows smaller filter components, lower THD and faster control response. The trade-off is higher switching losses in the transistors. Typical solar inverters switch at 16 to 50 kHz."
  - q: "Is PWM the same as square wave?"
    a: "No. PWM produces a square wave whose pulse width varies. The average of a varying-width pulse train can approximate any waveform. A simple square wave inverter has constant pulse width and approximates a sine wave poorly."
  - q: "What is the efficiency of a PWM charge controller?"
    a: "The switching efficiency is 95 to 99 percent. The overall efficiency from panel to battery is lower, 70 to 85 percent, because the panel operates below its MPP."
  - q: "Can PWM control AC loads?"
    a: "Not directly. PWM controls DC voltage. For AC load control you use phase-cut dimming, AC PWM or a VFD with internal DC link and PWM output stage."
  - q: "What is the price of a PWM charge controller in India?"
    a: "Approximate 2026 prices: 10 A 12 V ₹400 to ₹900, 20 A 12/24 V ₹800 to ₹1,800, 30 A 12/24 V ₹1,200 to ₹2,500. Modern MPPT alternatives start around ₹2,500 to ₹4,500."
author: "Keyur Rakholiya"
---

## What is PWM

PWM stands for Pulse Width Modulation. It is a switching technique where a transistor or switch is rapidly turned on and off, and the relative on-time is varied. The average voltage or current delivered over many cycles approximates the desired output.

PWM appears in two distinct roles in solar systems. As a charge controller topology, PWM refers to a controller that connects the PV array directly to the battery through a switch, with the switch pulsing on and off to regulate charging current. As an inverter modulation technique, PWM refers to the high-frequency switching of IGBT or MOSFET devices to chop a DC bus into a synthesised AC waveform.

This article focuses primarily on PWM as a charge controller topology, with a section on PWM as the inversion technique inside modern solar inverters. Both meanings appear in solar engineering documents, and confusion between them is one of the most common mix-ups in installer training.

## PWM explained simply

For charge controllers: imagine a wire between your solar panel and your battery, with a switch in the middle. PWM flips the switch on and off many times a second. By varying how long the switch is on, the controller regulates how much current reaches the battery. The panel is forced to work at the battery voltage, which is usually lower than where the panel would naturally produce the most power.

For inverters: imagine the same switch, but operating at 20,000 times a second. By varying the on-time pattern, the inverter chops a constant DC voltage into a sequence of pulses whose average traces out a sine wave. A filter smooths the pulses into the clean AC that runs your home.

Same trick, different scale. The first is a coarse on-off pattern at hundreds of hertz, the second a high-frequency pattern at tens of kilohertz.

## Why PWM matters

Charge controller cost. PWM controllers are 3 to 5 times cheaper than MPPT controllers at the same current rating. For solar lanterns, small home lighting and entry-level rural systems, this cost difference matters more than the yield gain.

Inverter modulation. PWM is the fundamental modulation technique in every modern solar inverter. Without PWM there is no chopped DC bus and no synthesised sine wave.

Motor drive control. PWM at the heart of every VFD allows variable-frequency, variable-voltage output for AC motor speed control, including in solar pumping.

Power converters. DC-DC converters of all kinds, including the boost converter inside MPPT itself, use PWM to control duty cycle.

LED dimming. PWM dimming is the standard for solar streetlights and LED drivers. Other techniques like analogue dimming are noisier and less efficient.

## How PWM works

### As a charge controller

1. The PV array is connected to the battery through a power switch, typically a MOSFET.
2. A voltage sensor measures battery voltage.
3. A controller compares the measured voltage to a target setpoint for the current charge stage (bulk, absorption or float).
4. If battery voltage is below the target, the switch stays on, current flows freely.
5. As battery voltage approaches the target, the controller starts pulsing the switch on and off.
6. The pulse width shrinks as the battery approaches full charge, tapering current.
7. In float stage, the pulse width is just enough to maintain battery voltage against self-discharge.

There is no DC-DC conversion. The panel voltage is pulled down to the battery voltage during the on-time of each pulse. Power transfer happens at battery voltage, current times battery voltage, not at panel Vmp.

### As an inverter switching technique

1. The DC bus inside the inverter is held at a fixed voltage, typically 380 to 800 V for grid-tie inverters.
2. An H-bridge of four IGBT or SiC switches connects the DC bus to the AC output.
3. A controller modulates the switching pattern at 16 to 50 kHz.
4. The duty cycle varies sinusoidally across the AC cycle, producing a chopped output whose average traces a sine wave.
5. An LC or LCL filter smooths the chopped output into a clean sine wave.
6. The fundamental frequency of the AC output is set by the modulation envelope, typically 50 Hz for India or 60 Hz for the US.

The carrier frequency of the PWM, the switching frequency, sets the inverter's losses, EMI signature and filter size.

## Technical deep dive

### Duty cycle and average output

Average output voltage = D × Vbus, where D is the duty cycle from 0 to 1.

For inverters, D varies sinusoidally with time. The peak of the AC waveform corresponds to D near 1, and the zero crossing corresponds to D near 0.5 for bipolar modulation.

### Charge stages in PWM controllers

| Stage | Description | Typical voltage (12 V lead acid) |
|---|---|---|
| Bulk | Maximum current, voltage rising | Up to absorption setpoint |
| Absorption | Constant voltage, current tapering | 14.4 to 14.7 V |
| Float | Maintenance charge, low current | 13.4 to 13.8 V |
| Equalisation (lead acid only) | Periodic overcharge to balance cells | 15.0 to 15.5 V, monthly |

LFP batteries do not need absorption-float cycling like lead acid. PWM controllers in LFP mode hold a constant voltage near 14.0 V for a 12 V LFP pack and rely on the BMS for cell balancing.

### PWM efficiency in charge controllers

The switching efficiency is high, 95 to 99 percent. The overall yield efficiency from panel to battery is lower:

η_PWM_yield = (Vbatt / Vmp) × η_switching

For a 36-cell panel at Vmp 17.5 V charging a 12.6 V battery:
η_PWM_yield = (12.6 / 17.5) × 0.98 = 70.5 percent

The MPPT alternative at 98 percent conversion efficiency captures the panel's full power and delivers it at battery voltage, yielding closer to 96 percent. The gap is the energy lost to operating below Vmp. For selection criteria across MPPT inverter options, see [Inverter MPPT: 8 Critical Selection Factors (2026)](/blog/inverter-mppt/).

### Inverter PWM techniques

| Technique | Notes |
|---|---|
| Sinusoidal PWM (SPWM) | Most common. Sinusoidal modulating signal vs triangular carrier. |
| Space Vector PWM (SVPWM) | Used in three-phase inverters. Higher utilisation of the DC bus. |
| Hysteresis PWM | Switches based on current error band. Simple but variable frequency. |
| Selective Harmonic Elimination | Pre-computed switching angles to cancel specific harmonics. Used in multilevel inverters. |
| Multilevel PWM | Carrier-based or phase-shifted carrier PWM for NPC, T-type and modular multilevel converters. |

## Real-world applications

Solar lanterns and home lighting kits. PWM controllers in the 1 to 10 A range, often integrated with the LED driver.

Small DC home systems. Rural solar home systems in the 50 to 200 W range with one or two LED bulbs, a mobile charger and a DC fan.

Street lighting. Solar streetlights with integrated PWM controllers manage battery charging and LED dimming.

Solar pumps. VFDs in solar pump controllers use PWM to vary motor frequency. The pump runs faster in strong sun, slower in weak sun, without any battery.

UPS inverters. Home UPS inverters use PWM modulation to chop battery DC into AC at 50 Hz with low THD.

Variable speed drives. Industrial motor drives use PWM at 4 to 16 kHz to control three-phase motor speed.

## Advantages of PWM charge controllers

Low cost. The dominant reason PWM persists in low-power solar.

Simple electronics. Easier to repair in the field, fewer failure modes.

High switching efficiency. The losses inside the switch itself are minimal.

Wide tolerance to panel variation. Different panel sub-types in a small array still work, since voltage is set by the battery.

## Limitations of PWM charge controllers

Yield. 15 to 30 percent lower than MPPT for the same array.

Panel-battery voltage matching. A 12 V battery requires a 36-cell, 17 V panel. Modern 60 and 72-cell panels at 30 to 40 V cannot be paired with PWM 12 V controllers without wasteful series-parallel reconfiguration.

Battery wear. Without absorption-float-equalisation discipline, PWM controllers can undercharge or overcharge batteries. Quality matters.

No multi-MPPT. A PWM controller cannot manage two strings of different sizes or orientations; see [Dual MPPT vs Single MPPT, When You Actually Need It](/blog/dual-mppt-vs-single-mppt/) for when that limitation actually matters.

## Common problems

Battery undercharged. A 12 V battery on a hot afternoon with a panel running near short-circuit current never reaches absorption voltage. The user thinks the panel is dead.

Battery overcharged. A controller with the wrong setpoints can boil lead acid electrolyte and destroy a battery in weeks.

Panel mismatched to controller voltage class. A 24 V panel on a 12 V controller leaves half the power on the table. A 12 V panel on a 24 V controller cannot charge at all.

Heat damage. PWM controllers without heat sinks fail in summer attics. Most low-end controllers do not derate gracefully.

EMI. Switching noise from PWM can interfere with radios and other electronics. Filtering on power and ground rails mitigates this.

Wrong battery chemistry setting. Lead acid setpoints on an LFP battery cause undercharging. LFP setpoints on a lead acid battery cause sulphation.

## Best practices for PWM applications

Match panel Voc and Vmp to the battery voltage class. For 12 V batteries, use 36-cell panels. For 24 V, use 72-cell panels.

Check the controller charge profile matches the battery chemistry. Most modern PWM controllers have a switch for lead acid, AGM, gel and LFP.

Use temperature compensation if the battery is in a hot environment.

Mount the controller in a ventilated location. Heat is the leading failure mode.

Use Class II SPDs upstream on PV side for installations in Indian thunderstorm zones.

Do not parallel two PWM controllers on the same battery. They will fight over voltage setpoints.

Reserve PWM for systems where the cost difference against MPPT is significant relative to the system value, typically below 200 W panel ratings.

## Comparison: PWM vs MPPT charge controllers

| Feature | PWM | MPPT |
|---|---|---|
| Conversion | Direct switch | DC-DC converter |
| Yield gain over fixed-voltage | None | 15 to 30% |
| Panel-battery voltage matching | Required | Flexible |
| Cost (10 A 12 V) | ₹400 to 900 | ₹2,500 to 4,500 |
| Max panel Voc | Battery class | Up to 100 V or more |
| Best fit | Solar lanterns, small home kits | Modern solar at all scales |

For a full side-by-side comparison of yield, cost and use cases, see [MPPT vs PWM Charge Controller, Why MPPT Wins Every Time](/blog/mppt-vs-pwm/).

## Indian market context

PWM controllers dominate the Indian solar lantern and small home lighting market, which has seen 80 million units shipped under various MNRE and state programmes since 2010. Companies like SELCO, Greenlight Planet, d.light and OMC Power use PWM controllers integrated inside their products.

MNRE specifications for solar lanterns and small home lighting systems under IEC 62257 reference PWM as an acceptable charging technique for panels below 50 W.

For grid-connected rooftop solar and any system using MPPT-capable inverters, PWM is not used.

Inverters certified under ALMM and BIS use PWM at the modulation stage. The grid-tie inverter market is universally PWM-based at the inversion stage.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62509 | Charge controller safety |
| IS 16270 | Indian solar charge controller specification |
| IEC 62257 | Small-scale renewable energy systems |
| IEC 62109 | Inverter safety, indirectly governs PWM hardware |
| MNRE standalone PV specs | Acceptable charge controller types |

## Common mistakes

Pairing a 60-cell panel with a PWM 12 V controller. The controller wastes 40 percent of available power.

Setting the controller to lead acid profile for an LFP battery. Undercharging within months.

Skipping temperature compensation in hot conditions. Lead acid batteries cook in summer.

Treating the PWM modulation in inverters as the same thing as a PWM charge controller. They share a technique but solve different problems.

Using cheap unbranded PWM controllers in lightning-prone areas without SPD upstream. Failure on first storm.

Using PWM where MPPT cost is justified. A ₹2,000 controller saving means ₹40,000 less energy over five years.

Mixing PWM and MPPT controllers on the same battery bank. Voltage setpoints conflict.

## Key takeaways

PWM is two things in solar engineering: a low-cost charge controller topology suitable for solar lanterns and small home kits, and the high-frequency switching technique that powers every modern solar inverter. The first is fading as MPPT prices fall. The second is fundamental to power electronics. Knowing which PWM is being discussed is half the battle in design reviews.

## Need help choosing between PWM and MPPT?

QBits Energy supports installers and EPCs on charge controller selection, panel-battery voltage matching, and inverter modulation tradeoffs for off grid and hybrid systems across India. Reach out for design support.

## Sources

- IEC 62509:2010, Battery charge controllers for photovoltaic systems: Performance and functioning.
- IS 16270, Indian Standard for solar PV charge controllers.
- IEC 62257 series, Recommendations for renewable energy and hybrid systems for rural electrification.
- IEC 62109-1, -2, Safety of power converters for use in photovoltaic power systems.
- Mohan N., Undeland T. M., Robbins W. P., Power Electronics: Converters, Applications, and Design, Wiley.
- Rashid M. H., Power Electronics Handbook, Butterworth-Heinemann.
- MNRE Specifications for Standalone Solar Applications and Solar Lanterns.
- Holmes D. G., Lipo T. A., Pulse Width Modulation for Power Converters: Principles and Practice, Wiley-IEEE Press.
- Sandia National Laboratories Report SAND98-1948, Charge Controller Performance Comparison.
