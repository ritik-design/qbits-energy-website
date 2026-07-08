---
term: "Pure Sine Wave"
title: "Pure Sine Wave: Definition, Applications & Solar Inverter Quality"
description: "Pure sine wave is the cleanest AC output waveform. Full guide to load compatibility and solar applications."
category: "Inverter Types"
categorySlug: "inverter-types"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - pure sine wave
  - sine wave inverter
  - pure vs modified sine wave
  - clean ac output
  - pure sine wave solar
shortDefinition: "Pure sine wave is a smooth sinusoidal AC output waveform identical in shape to grid power. All modern grid-tie, hybrid and quality off-grid inverters produce pure sine wave. Compatible with all AC loads including motors, electronics and sensitive equipment."
quickFacts:
  industry: "Solar Inverters"
  primaryUse: "High-quality AC output for all load types"
  commonUsers: "Inverter customers, EPCs"
  relevantStandards: "IEC 62109, IS 17387, IEEE 519"
  relatedTechnologies: "PWM, LCL filter, grid synchronisation"
relatedTerms:
  - { slug: "modified-sine-wave", term: "Modified Sine Wave" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "pwm", term: "PWM" }
  - { slug: "thd", term: "THD" }
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "sine-wave-inverter", term: "Sine Wave Inverter" }
  - { slug: "ac-cable", term: "AC Cable" }
  - { slug: "ups", term: "UPS" }
  - { slug: "ev-charger", term: "EV Charger" }
  - { slug: "almm-list", term: "ALMM List" }
faqs:
  - q: "What is pure sine wave in simple words?"
    a: "AC electricity that comes out as a smooth wave, exactly like what the grid provides. Safe for all electronic devices."
  - q: "Pure vs modified sine wave?"
    a: "Pure: smooth sinusoidal. Modified: stepped or square-wave approximation. Pure is required for sensitive electronics, motors and most modern appliances."
  - q: "What loads need pure sine wave?"
    a: "Motors, fridges, AC, microwaves, electronics with PFC, computers, LED drivers, audio equipment, medical devices."
  - q: "Are all solar inverters pure sine?"
    a: "All grid-tie and hybrid inverters: yes. Modern off-grid: yes. Cheap UPS and older off-grid: may be modified sine."
  - q: "Does THD matter for pure sine?"
    a: "Yes. Pure sine should have THD under 3 percent. Modified sine has THD of 40+ percent."
  - q: "Can pure sine inverter run any load?"
    a: "Yes within its kVA rating. Pure sine is compatible with all AC loads."
  - q: "What is the cost premium?"
    a: "Pure sine inverters historically cost 30-50 percent more than modified sine. The premium has collapsed; pure sine is now the standard."
  - q: "What is pure sine wave UPS?"
    a: "UPS with pure sine output, safe for computers and electronics during grid outages."
  - q: "Do solar grid-tie inverters produce pure sine?"
    a: "Yes. Grid synchronisation requires matching the grid's pure sinusoidal waveform."
  - q: "What is the frequency?"
    a: "50 Hz in India. The pure sine completes one cycle every 20 milliseconds."
  - q: "Are microinverters pure sine?"
    a: "Yes. Microinverters produce grid-quality pure sine AC at the panel level."
  - q: "Can pure sine inverters be paralleled?"
    a: "Yes, with appropriate sync control. Common in C&I and utility installations."
  - q: "Does pure sine handle inductive loads?"
    a: "Yes within surge capability. Inductive loads like motors and compressors run smoothly on pure sine."
  - q: "Is pure sine necessary for LED lighting?"
    a: "Modern LED drivers with PFC need pure sine. Cheap LED bulbs may work on modified but with reduced life."
  - q: "What is the typical THD of pure sine?"
    a: "Modern pure sine inverters: less than 3 percent. Premium designs under 1 percent."
author: "Nirav Dhanani"
---

## What is pure sine wave

Pure sine wave, also called true [sine wave](/glossary/sine-wave-inverter/) or sine wave AC, is a smooth sinusoidal alternating current waveform identical in mathematical shape to the AC supplied by the utility grid. The waveform follows the equation v(t) = Vmax × sin(2πft), where f is the fundamental frequency (50 Hz in India) and Vmax is the peak voltage.

> **TL;DR**
> - Pure sine wave is a smooth sinusoidal AC waveform, identical in shape to grid power, with THD typically under 3 percent.
> - All modern grid-tie, hybrid and quality off-grid inverters produce it using high-frequency PWM switching followed by an LCL filter.
> - It is required for grid synchronisation, since a grid-tie inverter cannot match the grid's voltage and phase on a stepped or square waveform.
> - Modified sine wave, with THD of 30 to 50 percent, damages motors, PFC power supplies and modern LED drivers.
> - The cost premium of pure sine over modified sine has largely collapsed, and it is now the standard for all credible inverters.
> - Every ALMM-listed Indian solar inverter, including those used for PM Surya Ghar residential installations, produces pure sine output.

Pure sine wave is the ideal AC output for all electrical loads. Modern grid-tie inverters, [hybrid inverters](/glossary/hybrid-inverter/) and quality [off-grid inverters](/glossary/off-grid-inverter/) all produce pure sine wave AC by using high-frequency [PWM](/glossary/pwm/) switching of IGBTs or MOSFETs followed by an LCL output filter that smooths the chopped waveform.

Pure sine differentiates from [modified sine wave](/glossary/modified-sine-wave/) (stepped square wave approximation) and square wave (raw switching), which are cheaper to produce but cause problems with sensitive electronics, motors and modern appliances. For Indian solar installations, all credible inverters produce pure sine wave; the term is most relevant for distinguishing quality off-grid inverters from cheap modified-sine alternatives.

## Why pure sine wave matters

Universal load compatibility. Pure sine drives any AC load safely.

Sensitive electronics. Computers, medical devices, audio gear require clean power.

Motor longevity. Inductive loads (fridges, ACs, pumps) run cooler and longer on pure sine.

LED life. Modern LED drivers with PFC need pure sine for rated life.

Grid synchronisation. Grid-tie inverters must produce pure sine to synchronise with utility.

Low THD. Pure sine has low harmonic distortion, meeting CEA grid code.

## How pure sine is produced

1. DC bus voltage held constant by control loop.
2. H-bridge of IGBTs/MOSFETs switches at high frequency (16-50 kHz).
3. Switching pattern varies (PWM) to trace sinusoidal envelope.
4. LCL filter smooths chopped output into clean sine wave.
5. [THD](/glossary/thd/) typically under 3 percent.

## Technical deep dive

### Waveform comparison

| Waveform | Peak voltage | RMS | THD |
|---|---|---|---|
| Pure sine | 325 V (230 Vrms) | 230 V | <3% |
| Modified sine | 325 V stepped | 230 V approx | 30-50% |
| Square wave | 230 V flat | 230 V | 48% |

### Load compatibility

| Load type | Pure sine | Modified sine |
|---|---|---|
| Incandescent bulb | Yes | Yes |
| Resistive heater | Yes | Yes |
| LED with simple driver | Yes | Reduced life |
| LED with PFC driver | Yes | Damage |
| CFL | Yes | Reduced life |
| Fan | Yes | Audible humming, reduced life |
| Refrigerator | Yes | Compressor stress |
| Air conditioner | Yes | Reduced life, controller damage |
| Computer | Yes | Power supply stress |
| Audio equipment | Yes | Audible buzz |
| Microwave | Yes | Reduced power, controller damage |
| Inverter AC | Yes | Damage to controller |
| Variable speed motor | Yes | Damage |

### Grid synchronisation requirement

Grid-tie inverters must match grid voltage, frequency and phase. This is only possible with pure sine output. Modified or square wave cannot synchronise to grid.

## Real-world applications

All grid-tie solar inverters.

Hybrid inverter backup output.

Quality off-grid inverters.

Pure sine [UPS](/glossary/ups/), covered further in [Solar Inverter vs UPS, What's the Real Difference?](/blog/solar-inverter-vs-ups/)

[EV charger](/glossary/ev-charger/) inverters.

Critical load supplies.

## Advantages

Universal load compatibility.

Long equipment life.

Low harmonic distortion.

Grid-compatible.

Standard for all credible solar inverters.

## Limitations

Slightly higher inverter cost than modified sine (largely irrelevant today).

Slightly higher inverter complexity.

## Common pure sine problems

Cheap inverters marketed as pure sine but actually quasi-sine.

THD higher than spec at light load.

Audible noise from inverter under light load.

Compatibility issues with very old equipment.

## Best practices

Verify pure sine claim with THD measurement.

Specify THD under 3 percent in purchase orders when sourcing [solar inverters](https://heavengreenenergy.com/products/solar-inverters/).

Use [ALMM-listed](/glossary/almm-list/) inverters for guaranteed pure sine.

Test with actual load profile before commissioning.

## Indian market context

All ALMM-listed inverters produce pure sine.

Cheap brand off-grid inverters in rural markets may still be modified sine.

[PM Surya Ghar](/glossary/pm-surya-ghar/) residential installations use pure sine exclusively.

Major brands clearly specify THD in datasheets.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109 | Inverter safety |
| IS 17387 | Indian grid interconnection |
| IEEE 519 | Harmonic limits |
| EN 50530 | Inverter efficiency |

## Key takeaways

Pure sine wave is the clean AC output produced by all modern solar inverters. It is universally compatible with all loads, has low THD under 3 percent, and is required for grid synchronisation. Modified and square wave are cheaper to produce but cause problems with sensitive electronics, motors and modern appliances. Indian ALMM-listed inverters produce pure sine wave universally.

## Need pure sine wave inverters?

QBits Energy supplies ALMM-listed pure sine wave grid-tie, hybrid and off-grid inverters for residential, C&I and utility solar across India.

## Sources

- IEC 62109, Inverter safety.
- IS 17387, Indian grid interconnection.
- IEEE 519, Harmonic limits.
- EN 50530, Inverter efficiency.
- Manufacturer datasheets from major inverter OEMs.
- Mohan N., Power Electronics, Wiley.
- IEEE Power Electronics Society publications.
- IEA PVPS Task 14 publications.
- Sandia National Laboratories inverter testing.
