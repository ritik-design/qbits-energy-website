---
term: "Modified Sine Wave"
title: "Modified Sine Wave: Definition, Drawbacks & Solar Applications"
description: "Modified sine wave is a stepped AC approximation. Full guide to limitations and why pure sine is preferred."
category: "Inverter Types"
categorySlug: "inverter-types"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - modified sine wave
  - quasi sine wave
  - stepped wave inverter
  - modified vs pure sine
  - cheap inverter
shortDefinition: "Modified sine wave (MSW), also called quasi-sine or stepped wave, is a low-cost AC output that approximates sine wave through square-wave steps. THD typically 30-50 percent. Acceptable for resistive loads but damages sensitive electronics, motors and modern appliances. Largely obsolete in modern solar."
quickFacts:
  industry: "Solar Inverters (Legacy)"
  primaryUse: "Cost-sensitive small inverters"
  commonUsers: "Budget UPS, cheap off-grid"
  relevantStandards: "IEC 62109 (limited)"
  relatedTechnologies: "Square wave, simple H-bridge"
relatedTerms:
  - { slug: "pure-sine-wave", term: "Pure Sine Wave" }
  - { slug: "sine-wave-inverter", term: "Sine Wave Inverter" }
  - { slug: "off-grid-inverter", term: "Off Grid Inverter" }
  - { slug: "thd", term: "THD" }
  - { slug: "harmonics", term: "Harmonics" }
  - { slug: "pwm", term: "PWM" }
  - { slug: "voltage", term: "Voltage" }
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "ups", term: "UPS" }
  - { slug: "lead-acid-battery", term: "Lead Acid Battery" }
  - { slug: "power-factor", term: "Power Factor" }
  - { slug: "ac-cable", term: "AC Cable" }
faqs:
  - q: "What is modified sine wave in simple words?"
    a: "A cheap, rough AC output that looks like a stepped square wave instead of a smooth sine. Works for some basic loads but damages sensitive electronics."
  - q: "What is the THD of modified sine?"
    a: "Typically 30-50 percent. Very high compared to pure sine's 3 percent."
  - q: "What loads work on modified sine?"
    a: "Resistive loads: incandescent bulbs, heaters. Some motors will work but with reduced life."
  - q: "What loads don't work?"
    a: "Modern LEDs with PFC, computers, audio gear, microwaves, inverter ACs, sensitive electronics."
  - q: "Why does MSW damage equipment?"
    a: "The sharp steps in the waveform contain high-frequency harmonics that stress capacitors, magnetics and switching power supplies in modern electronics."
  - q: "Are MSW inverters still sold in India?"
    a: "Limited to cheap small UPS and budget off-grid. ALMM-listed solar inverters are all pure sine."
  - q: "Is square wave same as MSW?"
    a: "Square wave is the simplest. MSW adds a zero-voltage step between positive and negative half-cycles."
  - q: "What is the cost difference?"
    a: "MSW inverters historically cost 30-50 percent less than pure sine. The gap has nearly disappeared in solar."
  - q: "Can MSW run a fridge?"
    a: "Many older fridges work. Modern inverter-controlled fridges should not be used on MSW."
  - q: "Why was MSW common?"
    a: "Cost. Pure sine required PWM and filters; MSW could be done with simple H-bridge switching. Modern electronics has made pure sine cheap."
  - q: "Are home UPS MSW or pure sine?"
    a: "Budget home UPS may be MSW. Branded UPS for computers should be pure sine."
  - q: "Does MSW affect efficiency?"
    a: "Inverter efficiency for MSW is similar to pure sine, but load efficiency is lower due to harmonic losses."
  - q: "Will MSW damage a power factor corrected supply?"
    a: "Yes. PFC circuits cannot handle the high-frequency content in MSW."
  - q: "Are solar grid-tie inverters MSW?"
    a: "No. Grid-tie requires pure sine for grid synchronisation."
  - q: "Is MSW used in EV chargers?"
    a: "No. EV chargers require pure sine."
---

## What is modified sine wave

Modified sine wave (MSW), also called quasi-sine or stepped sine, is a low-cost AC output waveform that approximates a true sine wave through a sequence of square-wave steps. The waveform typically rises from zero to a positive flat level, holds, drops to zero, then to a negative flat level, and back to zero. The result looks like a stepped rectangle rather than a smooth curve.

Modified sine wave was the dominant low-cost inverter output in the 1990s and 2000s when pure sine wave inverters were expensive. The simpler H-bridge switching topology produced MSW directly without needing high-frequency PWM and output filtering. As power electronics costs fell, pure sine became the affordable default, relegating MSW to budget UPS and cheap off-grid inverters.

For Indian solar, MSW is essentially obsolete. ALMM-listed inverters are all pure sine wave. The term mainly appears as a warning: customers should avoid MSW inverters because they damage sensitive electronics, reduce motor life and produce excessive heat in connected loads.

## Why MSW matters

Legacy installations. Older systems may still use MSW.

Cost warning. MSW inverters still sold in budget markets.

Load compatibility issues. Customers may not realise their cheap UPS is MSW.

Educational. Understanding MSW illustrates why pure sine is preferred.

## How MSW is produced

1. DC bus connected to load through H-bridge.
2. H-bridge switches in three states: positive, zero, negative.
3. Switching at 100 Hz (twice the 50 Hz fundamental).
4. No high-frequency PWM, no output filter.
5. Resulting waveform: stepped rectangular pulses.

## Technical deep dive

### Waveform structure

| Phase of cycle | MSW output |
|---|---|
| 0-30° | 0 V |
| 30-150° | +Vpeak |
| 150-180° | 0 V |
| 180-210° | 0 V |
| 210-330° | -Vpeak |
| 330-360° | 0 V |

The on-time at peak voltage is adjusted so the RMS equals 230 V despite the lower peak.

### THD comparison

| Waveform | THD |
|---|---|
| Pure sine | <3% |
| Modified sine | 30-50% |
| Square wave | 48% |

### Load compatibility issues

| Load | MSW issue |
|---|---|
| Computer power supply | Excessive heating in PFC capacitor |
| Inverter AC | Compressor controller damage |
| Modern LED driver | Premature failure |
| Motor (single-phase) | Audible humming, 10-30% lower efficiency, reduced life |
| Microwave | 20-30% lower output power |
| Audio equipment | Audible buzz |
| Sensitive electronics | Erratic operation or damage |

### MSW vs square wave

| Aspect | MSW | Square wave |
|---|---|---|
| Zero crossing | Yes | No |
| THD | 30-50% | ~48% |
| Load compatibility | Limited | Worst |
| Use today | Cheap budget | Effectively obsolete |

## Real-world applications

Cheap home UPS (legacy).

Budget off-grid lighting kits.

Some older solar lanterns.

Industrial machinery designed for it.

## Limitations

Damages modern electronics.

Reduces motor and appliance life.

Cannot grid-synchronise.

Higher harmonic distortion.

Audible noise on connected loads.

Power factor correction issues.

## Indian market context

ALMM-listed inverters are all pure sine wave.

MSW inverters persist in budget non-ALMM market.

Some legacy home UPS systems still MSW.

Customer education needed to avoid cheap MSW purchases.

PM Surya Ghar disbursement requires pure sine ALMM-listed inverters.

## Common problems

Customer buying MSW inverter unknowingly.

LED life dropping to months on MSW.

Computer power supply failing after months of MSW operation.

Motor noise and reduced AC cooling.

## Best practices

Avoid MSW for any modern application.

Verify pure sine in purchase orders.

Specify THD limit under 5 percent.

Use ALMM-listed inverters for guaranteed pure sine.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62109 | Inverter safety (covers both) |
| IS 13369 | Solar lantern (limited MSW use) |
| MNRE standalone PV specs | Pure sine for credible projects |

## Key takeaways

Modified sine wave is a low-cost AC waveform that approximates sine through square-wave steps. It is largely obsolete in modern solar, persisting only in budget UPS and cheap off-grid inverters. THD of 30-50 percent damages modern electronics, motors and appliances. All ALMM-listed Indian solar inverters produce pure sine wave. Customers should verify pure sine before purchase and avoid MSW for any modern application.

## Need quality pure sine inverters?

QBits Energy supplies only ALMM-listed pure sine wave solar inverters for residential, C&I and utility solar across India.

## Sources

- IEC 62109, Inverter safety.
- IS 17387, Indian grid interconnection.
- MNRE Standalone Solar PV Specifications.
- IEEE 519, Harmonic limits.
- IEC 60068, EMC for inverters.
- Mohan N., Power Electronics, Wiley.
- Manufacturer documentation distinguishing MSW from pure sine.
- IEA PVPS Task 14 publications.
