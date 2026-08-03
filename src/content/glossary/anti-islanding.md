---
term: "Anti-Islanding"
title: "Anti-Islanding: Definition, Meaning, How It Works, Benefits & Applications"
description: "Anti-islanding is the inverter protection that disconnects solar export during a grid outage. Full guide to detection methods, standards and Indian rules."
category: "Protection"
categorySlug: "protection"
priority: "P0"
updatedDate: 2026-07-08
keywords:
  - what is anti-islanding
  - anti-islanding protection
  - islanding detection
  - iec 62116
  - solar inverter safety
  - grid disconnection solar
shortDefinition: "Anti-islanding is the protection function in a grid-tied solar inverter that detects a utility grid outage and disconnects the inverter from the grid within milliseconds. It prevents the inverter from energising a dead grid line and is mandated by IEC 62116 and CEA grid standards in India."
quickFacts:
  industry: "Solar Inverter / Grid Safety"
  primaryUse: "Disconnecting solar export during a grid outage"
  commonUsers: "Inverter manufacturers, DISCOMs, EPCs, installers, utility lineworkers"
  relevantStandards: "IEC 62116, IEEE 1547, UL 1741, IS 17387, CEA Grid Code"
  relatedTechnologies: "Passive and active detection methods, frequency drift, voltage drift, on grid inverter"
relatedTerms:
  - { slug: "solar-inverter", term: "Solar Inverter" }
  - { slug: "on-grid-inverter", term: "On Grid Inverter" }
  - { slug: "hybrid-inverter", term: "Hybrid Inverter" }
  - { slug: "string-inverter", term: "String Inverter" }
  - { slug: "central-inverter", term: "Central Inverter" }
  - { slug: "frt", term: "Fault Ride Through" }
  - { slug: "grid-code", term: "Grid Code" }
  - { slug: "phase-locked-loop", term: "Phase Locked Loop" }
  - { slug: "net-metering", term: "Net Metering" }
  - { slug: "frequency-response", term: "Frequency Response" }
  - { slug: "discom", term: "DISCOM" }
  - { slug: "smart-inverter", term: "Smart Inverter" }
  - { slug: "almm-list", term: "ALMM List" }
  - { slug: "bis-certification", term: "BIS Certification" }
faqs:
  - q: "What is anti-islanding in simple words?"
    a: "It is the safety feature that tells your solar inverter to switch off when the utility grid goes down. Without it, your inverter could keep pushing power into a wire that linemen think is dead, and someone could get electrocuted."
  - q: "Why is anti-islanding required?"
    a: "To protect utility lineworkers who are repairing the grid. They expect the line to be dead when the supply is off. A solar inverter still feeding the line can deliver a fatal shock."
  - q: "How fast must anti-islanding act?"
    a: "Within 2 seconds under IEC 62116. Most modern inverters disconnect within 100 to 500 ms. The CEA grid code allows a maximum of 2 seconds."
  - q: "Can anti-islanding fail?"
    a: "Rarely. Modern inverters use multiple detection methods running in parallel. The failure rate is below 1 in a million events. Multiple inverters on the same site act as cross-checks."
  - q: "Do off grid inverters need anti-islanding?"
    a: "No. Off grid inverters are not connected to the utility grid, so there is nothing to disconnect from. Anti-islanding is purely a grid-tie requirement."
  - q: "What is islanding?"
    a: "Islanding is a condition where a portion of the grid keeps running on local generation while disconnected from the main supply. An undetected island is dangerous. A controlled island is the intended behaviour of a hybrid inverter during backup."
  - q: "What is the difference between passive and active anti-islanding?"
    a: "Passive methods detect islanding from voltage, frequency or phase changes alone. Active methods inject a small disturbance and watch for the grid's response. Modern inverters combine both."
  - q: "How does an inverter detect grid loss?"
    a: "It monitors voltage, frequency and phase at the AC terminals. A real grid holds voltage and frequency steady. A lost grid drifts immediately. Active methods inject a small frequency drift and see if the grid corrects it."
  - q: "Is anti-islanding the same as fault ride-through?"
    a: "No. Anti-islanding disconnects during full grid loss. Fault ride-through keeps the inverter connected during brief voltage dips so the grid recovers faster."
  - q: "Does a hybrid inverter trigger anti-islanding?"
    a: "Yes, on the grid-tie side. When the grid is lost, the inverter trips its grid contactor in milliseconds, then forms an internal island to power local loads from battery."
  - q: "What is the non-detection zone (NDZ)?"
    a: "The NDZ is the load and source condition where a passive method cannot detect islanding because voltage and frequency happen to stay within normal range. Active methods are designed to shrink the NDZ to near zero."
  - q: "What happens if anti-islanding fails?"
    a: "The inverter continues to export power into a dead grid. Risks include lineman electrocution, equipment damage on grid recovery, and reverse-phase reconnection that can destroy motors."
  - q: "Is anti-islanding tested at inverter commissioning?"
    a: "Yes. DISCOM commissioning involves an anti-islanding test where grid power is interrupted while the inverter is running, and the disconnect time is measured."
  - q: "How is anti-islanding tested under IEC 62116?"
    a: "An RLC test load tuned to resonance at 50 Hz is connected. The inverter feeds into the load while the grid is connected. The grid is then disconnected. The inverter must disconnect within 2 seconds across multiple load and power conditions."
  - q: "Are there exemptions from anti-islanding in India?"
    a: "No. All grid-connected solar inverters sold in India must comply with IEC 62116 or IS 17387, which embeds equivalent requirements."
author: "Keyur Rakholiya"
---

## What is anti-islanding

Anti-islanding is the protection function in a [grid-tied solar inverter](/glossary/on-grid-inverter/) that detects a loss of the utility grid and rapidly disconnects the inverter's AC output. It prevents the inverter from continuing to energise a section of the distribution network after the upstream feeder has been switched off, isolated by a protection device, or damaged. Our [anti-islanding protection guide](/blog/anti-islanding-protection-solar-inverters/) walks through the Indian compliance side of this in more depth.

> **TL;DR**
> - Anti-islanding is the inverter safety function that detects a utility grid outage and disconnects the inverter's AC output, typically within 100 to 500 ms and always inside the IEC 62116 limit of 2 seconds.
> - It exists to protect utility lineworkers from being shocked by a rooftop solar inverter that keeps feeding a line the DISCOM believes is dead.
> - India makes it mandatory under IEC 62116, IS 17387 and the CEA grid code, and DISCOMs verify it at commissioning.
> - Modern inverters combine passive detection (voltage, frequency, phase) with active detection (small injected disturbances) to shrink the non-detection zone.
> - Off-grid inverters do not need anti-islanding since they are never connected to the utility grid.
> - Disabling anti-islanding to stop nuisance tripping is illegal and voids warranty.

The hazard it addresses is direct and physical. When a feeder is de-energised by the DISCOM for maintenance, fault clearance or a downed line, the lineworker assumes the section is dead. If a solar inverter on a customer's roof continues to push power into that section, the line stays live. The lineman touches it and is electrocuted. Anti-islanding is the layer of protection that keeps this from happening.

In India, anti-islanding compliance under IEC 62116 or IS 17387 is mandatory for every grid-connected solar inverter. The CEA Technical Standards for Connectivity to the Grid 2019 enshrine this requirement and DISCOMs verify it during commissioning.

## Anti-islanding explained simply

Picture a section of road that the road department has closed for repairs. They have put up barricades. They expect the road to be empty. If a car somehow keeps driving into that section, the workers could be hit.

The same logic applies to a power line. When the grid is off, the utility lineworker expects it to be off. If a rooftop solar inverter keeps pushing power, the line stays live and unsafe. Anti-islanding is the rule that says: when the main grid disappears, your inverter must stop within seconds, automatically, every time.

There is no override switch. There is no "I am sure no one is working on the line" exception. The inverter trips on grid loss as a matter of design.

## Why anti-islanding matters

Lineworker safety. The first and most important reason. India's distribution network sees thousands of lineworker fatalities a year already. Solar-driven islanding would add to that number without anti-islanding.

Equipment safety on reclose. When the grid is restored, an islanded inverter is rarely in phase with the returning grid. The phase mismatch destroys motors, transformers and the inverter itself.

Power quality. An island has no voltage or frequency regulation beyond what the inverter provides. Voltage drift damages connected appliances.

Public safety. A downed line that should be dead but is fed from a rooftop solar inverter remains a public electrocution hazard.

Regulatory compliance. Without IEC 62116 anti-islanding compliance, the inverter cannot be ALMM-listed, cannot be BIS-certified, and cannot be commissioned by any Indian DISCOM.

## How anti-islanding works

Modern inverters use multiple detection layers running in parallel.

1. The inverter continuously samples grid voltage, frequency and phase at its AC output terminals.
2. A passive layer trips on out-of-range voltage or frequency. Typical settings are voltage 0.85 to 1.10 pu and frequency 47.5 to 51.5 Hz.
3. An active layer injects a small periodic disturbance, often a slight frequency drift or reactive power pulse.
4. The control loop watches the grid's response. A real grid corrects the disturbance through its inertia. A dead island does not.
5. If the disturbance grows unchecked, the active method declares islanding and trips the grid contactor.
6. The AC contactor opens, isolating the inverter from the grid.
7. The inverter logs the event with timestamp and waveform data.

The full cycle from grid loss to contactor open takes 100 to 500 ms in typical residential inverters, well inside the 2 second limit set by IEC 62116.

## Technical deep dive

### Detection methods

| Category | Method | How it works | Pros | Cons |
|---|---|---|---|---|
| Passive | Under/over voltage | Trip on V outside 0.85 to 1.10 pu | Simple | Large NDZ when load matches generation |
| Passive | Under/over frequency | Trip on f outside 47.5 to 51.5 Hz | Simple | NDZ near resonance |
| Passive | Rate of change of frequency (ROCOF) | Trip on df/dt above 0.5 Hz/s | Faster than voltage drift | False trips on grid disturbances |
| Passive | Phase jump | Trip on sudden phase angle change | Effective for unbalanced loads | Hard to set threshold |
| Active | Slip mode frequency shift | Slowly drift output frequency, watch grid resistance | Very small NDZ | Coordination issues with multiple inverters |
| Active | Active frequency drift with positive feedback | Inject frequency drift in same direction as small natural drift | Reliable, low NDZ | Slight power quality impact |
| Active | Reactive power variation | Inject small reactive power pulses, watch voltage response | Effective | Slight power factor variation |
| Active | Impedance estimation | Inject small current step, measure voltage step | Detects grid impedance directly | Adds harmonics |

### Non-detection zone

The NDZ is the region in load-power space where a passive method cannot distinguish island from connected operation. The classic NDZ is defined by:

- The local load consumes exactly the inverter's output power.
- The load is resonant at the grid frequency.
- Voltage and frequency remain inside the inverter's trip thresholds.

Active methods shrink the NDZ to near zero, at the cost of injecting a small disturbance into normal operation.

### Multiple inverters

When several inverters share a feeder, their active methods can interfere. Frequency drift injected by one is corrected by another. The IEC 62116 test procedure includes a multi-inverter case to verify performance.

### IEC 62116 test setup

The standard test connects the inverter through a resonant RLC load tuned to 50 Hz. The grid is disconnected by opening a switch. The inverter must disconnect within 2 seconds. The test is repeated across multiple combinations of inverter power, load quality factor and reactive power.

## Real-world applications

Residential rooftop solar. Every grid-tied home solar inverter in India has anti-islanding. It is invisible until a grid outage, when the inverter shuts off automatically.

Commercial and industrial solar. C&I inverters with multiple [MPPTs](/glossary/mppt/) and three-phase output have the same requirement.

Utility-scale solar. [Central inverters](/glossary/central-inverter/) and [string inverters](/glossary/string-inverter/) in solar parks have anti-islanding, although the priority shifts toward fault ride-through and reactive power support.

Hybrid systems. The grid-tie side of a [hybrid inverter](/glossary/hybrid-inverter/) has anti-islanding. The off-grid backup side forms an intentional island after the grid is confirmed lost.

Microgrids. Intentional islanding is allowed for microgrids designed to operate disconnected, with separate protection coordination.

## Advantages of anti-islanding

Saves lives. The primary justification.

Prevents equipment damage during grid reconnection.

Protects the public from inadvertently energised downed lines.

Enables higher rooftop solar penetration. DISCOMs are willing to allow more rooftop solar when they trust the disconnect protection.

Standardised globally. The same inverter passes IEC 62116, IEEE 1547 and UL 1741 anti-islanding tests, simplifying global supply chains.

## Limitations

Nuisance tripping during normal grid disturbances. Voltage dips, frequency excursions and momentary phase jumps can trigger unwanted trips. Fault ride-through requirements partly mitigate this.

Multi-inverter coordination challenges. Active methods from multiple inverters can cancel each other. Standards address this through test procedures, but real-world conflicts still appear.

Power quality cost. Active injection of small disturbances costs a fraction of a percent in efficiency and adds harmonics.

NDZ residuals. Passive methods alone leave a small NDZ. Active methods reduce but do not eliminate it.

Coordination with reclosers. Utility reclosers expect a fault to clear during dead time. An islanded inverter can confuse the recloser logic.

## Common problems

Frequent unexpected trips. Investigate whether the grid actually went out of trip window. Often the grid did move briefly out of voltage or frequency bounds and the inverter did its job.

Inverter not reconnecting after grid restore. The standard reconnection delay is 60 to 300 seconds. The inverter holds off until it confirms steady grid voltage and frequency.

Anti-islanding test fails at [commissioning](/blog/solar-inverter-commissioning-in-india/). The inverter took longer than 2 seconds. Possible causes are firmware misconfiguration, undersized AC contactor, or a software bug. [Update the firmware](/blog/solar-inverter-firmware-update-india/).

False trip during cloud passage. Cloud edges can cause inverter active power to swing, which can cross a passive detection threshold. Modern firmware handles this, older firmware may need an update.

Multiple inverters on the same feeder all tripping simultaneously. One inverter detects islanding, trips, the others see the drop and trip cascade. Normal and acceptable.

Inverter reconnecting too quickly. Some firmware reconnects in less than 60 seconds, against CEA expectations. Configure to 60 seconds minimum.

## Best practices for anti-islanding

Use only inverters certified to IEC 62116 or IS 17387 in India. Verify on the certificate, not the brochure.

Verify anti-islanding test results at commissioning. Get the trip time in writing on the commissioning report.

Set reconnection delay to 300 seconds where DISCOM rules permit. This avoids cascade reconnect oscillations.

Update inverter firmware annually. Anti-islanding logic gets steady refinement.

Coordinate with DISCOM upstream protection settings. Some Indian DISCOMs require specific frequency and voltage trip windows narrower than IEC defaults.

Log anti-islanding events for at least 90 days. Patterns in trip events expose grid quality issues that may need DISCOM attention.

Avoid mixing inverter brands on small sites unless tested for multi-inverter compatibility.

## Comparison: anti-islanding vs related protections

| Protection | Function | When it acts |
|---|---|---|
| Anti-islanding | Disconnect on grid loss | Grid fully gone |
| Under/over voltage | Trip on voltage outside band | Grid voltage abnormal but present |
| Under/over frequency | Trip on frequency outside band | Grid frequency abnormal but present |
| Fault ride-through | Stay connected through brief dips | Brief grid disturbance |
| Loss of mains | Same as anti-islanding, UK terminology | Grid lost |
| Reverse power | Trip on power flow direction | DG site, anti-export |

## Indian market context

India's CEA Technical Standards for Connectivity to the Grid 2019 require anti-islanding compliance for all distributed solar inverters. [ALMM listing](/glossary/almm-list/) requires IEC 62116 type test evidence or equivalent IS 17387 compliance. [BIS certification](/glossary/bis-certification/) under IS 16221 and IS 17387 covers the safety and grid interconnection aspects.

[DISCOM](/glossary/discom/) commissioning protocols include a witnessed anti-islanding test. The test is typically performed by opening the customer's main switch with the inverter running at moderate load and confirming the inverter trips within 2 seconds.

For large utility solar plants, anti-islanding is supplemented by upstream protection at the substation. CEA grid code, IEC 61400-27 and SECI PPA terms all reference anti-islanding compliance.

Common Indian inverter brands like Sungrow, Solis, Goodwe, [Growatt](/blog/growatt-solar-inverter-review-india/), Solax, Deye, Huawei, Sineng, Luminous and Tata Power Solar ship with IEC 62116 certified anti-islanding as standard.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 62116 | Anti-islanding test procedures |
| IEC 61727 | Utility-interface characteristics |
| IS 17387 | Indian grid-interconnection, embeds anti-islanding |
| IS 16221 | Indian inverter safety |
| IEEE 1547 | US grid-interconnection, includes anti-islanding |
| UL 1741 | US smart inverter, includes anti-islanding tests |
| CEA Grid Code 2019 | Indian distribution grid connection rules |
| MNRE ALMM | Lists inverters with verified anti-islanding compliance |

## Common mistakes

Disabling anti-islanding to stop nuisance trips. Illegal, dangerous and voids warranty.

Setting trip windows wider than CEA allows. The inverter may pass site tests but fail DISCOM commissioning.

Mixing inverter brands without checking multi-inverter coordination. Persistent nuisance trips.

Ignoring reconnection delay. Inverters reconnecting in under 60 seconds risk damage from grid disturbances.

Skipping the anti-islanding test at commissioning. The first time the grid actually drops, the inverter behaviour is unknown.

Buying a non-ALMM inverter for a subsidised system. Anti-islanding compliance is part of ALMM evaluation. Subsidy disbursement stalls.

Treating anti-islanding as overly conservative. Lineman fatalities from energised lines are a real and recurring issue, not a theoretical one.

## Key takeaways

Anti-islanding is the inverter protection that keeps the grid safe for lineworkers when distributed solar is on the network. It is mandatory under IEC 62116, IS 17387 and CEA grid code in India. Modern inverters use both passive and active detection layers, with disconnect times well under 2 seconds. Disabling it is never acceptable. Proper commissioning, firmware updates and DISCOM coordination ensure the protection works without nuisance tripping.

## Need help with grid-compliant solar inverter selection?

QBits Energy supplies BIS-certified, ALMM-listed inverters with verified anti-islanding compliance for Indian residential, commercial and utility solar. Reach out for selection support that matches your DISCOM and CEA requirements.

## Further reading

For how Anti-Islanding plays out in real projects, these guides go deeper:

- [Anti-Islanding Protection in Solar Inverters](/blog/anti-islanding-protection-solar-inverters/)
- [Solar Inverter Certifications: 9 Standards to Verify](/blog/solar-inverter-certifications/)
- [India-Grid-Tuned Solar Inverters, Explained](/blog/india-grid-tuned-inverters/)
- [How to Choose Solar Inverters with Surge Protection](/blog/how-to-choose-solar-inverters-with-surge-protection/)

## Sources

- IEC 62116:2014, Utility-interconnected photovoltaic inverters: Test procedure of islanding prevention measures, International Electrotechnical Commission.
- IS 17387:2019, Utility-interconnected photovoltaic inverters: Indian Standard, Bureau of Indian Standards.
- IEC 61727:2004, Photovoltaic systems: Characteristics of the utility interface, International Electrotechnical Commission.
- CEA Technical Standards for Connectivity to the Grid (Amendment) Regulations 2019, Central Electricity Authority of India.
- IEEE Std 1547-2018, Standard for Interconnection and Interoperability of Distributed Energy Resources with Associated Electric Power Systems Interfaces, IEEE.
- MNRE Approved List of Models and Manufacturers (ALMM), Ministry of New and Renewable Energy, Government of India.
- UL 1741 SB:2021, Inverters, Converters, Controllers and Interconnection System Equipment for Use With Distributed Energy Resources, Underwriters Laboratories.
- Ye Z., Kolwalkar A., Zhang Y., Du P., Walling R., Evaluation of anti-islanding schemes based on non-detection zone concept, IEEE Transactions on Power Electronics.
- NREL Technical Report TP-560-37408, Evaluation of Islanding Detection Methods for Photovoltaic Utility-Interactive Power Systems.
