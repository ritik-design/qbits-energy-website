---
title: 'Anti-Islanding Protection in Solar Inverters'
excerpt: Why your solar inverter shuts down in a power cut, how passive and active anti-islanding detection work, and the CEA trip limits that apply in India.
description: Anti-islanding protection stops a grid-tied solar inverter from energising a dead utility line. Detection methods, non-detection zones, CEA and IEC limits, and site testing.
category: Technology
date: 2026-06-05
updatedDate: 2026-09-24
readTime: 13 min
image: /blog-images/solar-inverter-certifications.svg
author: Keyur Rakholiya
keywords:
- anti islanding solar inverter
- anti islanding protection india
- IEC 62116 solar inverter
- solar inverter grid safety india
- why does solar inverter stop in power cut
- non-detection zone inverter
faqs:
- q: What is anti-islanding protection in a solar inverter?
  a: It is the protective function that forces a grid-connected inverter to stop energising the utility line once grid supply is lost. The inverter watches voltage, frequency and other signals at its terminals, decides the grid is gone, and shuts its output down. In India the Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations, 2013 require the resource to cease energising the system within two seconds of an unintended island forming. It protects utility line workers and network equipment, not your appliances.
- q: Why does my solar system stop working during a power cut?
  a: A standard grid-tied inverter is designed to shut down when the grid fails. That is anti-islanding protection working correctly, not a fault. Keeping the inverter running would energise a line that utility staff have isolated and believe is dead. If you want power during an outage you need a hybrid inverter with a battery and an approved transfer arrangement, which isolates the house from the utility before it re-energises the backup circuit.
- q: Can anti-islanding protection be disabled to get backup power?
  a: No. The function is part of the grid interface the inverter was type-tested against, and disabling it breaks the connection agreement with your DISCOM. It also creates a direct electrocution risk for anyone working on the feeder. The legitimate route to backup is a hybrid inverter with battery storage and a transfer arrangement that separates the backup circuit from the utility. Any installer offering to turn anti-islanding off should be refused.
- q: What is the non-detection zone?
  a: The non-detection zone is the band of operating conditions where inverter output and local load are so closely matched that voltage and frequency barely move after the grid disappears. Passive protection then has nothing unusual to sense. Active methods shrink the zone by deliberately perturbing the output and watching for a runaway response, but no method eliminates it in every network condition. This is why the standards mandate a clearing time rather than a detection guarantee.
- q: Is IEC 62116 the same as a trip-time setting?
  a: No. IEC 62116:2014 is a test procedure for islanding-prevention measures on utility-interconnected photovoltaic inverters, not a table of grid settings. It defines the test circuit, an RLC load resonant at the nominal frequency and matched to the unit under test, and a measured run-on time. Your actual trip thresholds come from the applicable grid code, the CEA regulations, and any narrower range your DISCOM prescribes.
- q: Which Indian standard covers anti-islanding testing?
  a: IS 16169:2019 is the Indian adoption of IEC 62116:2014 and covers the test procedure for islanding prevention measures. Under the Ministry of New and Renewable Energy Solar Systems, Devices and Components Goods Order, 2025, the applicable version moved from IS 16169:2014 to IS 16169:2019 for BIS registration. Inverter safety is covered separately by IS 16221 (Part 2):2015, identical to IEC 62109-2:2011. Ask your supplier for reports against the exact model you are buying.
- q: Do multiple inverters on one feeder weaken anti-islanding?
  a: They can. Certification testing under IEC 62116 puts a single inverter against a single resonant load, so it does not reproduce a feeder carrying several inverters from different vendors. Each unit's active perturbation becomes a smaller share of total island power, and schemes from different manufacturers can push frequency in opposing directions and partly cancel. Utilities therefore apply their own screening rules rather than relying only on a product certificate.
- q: My inverter keeps tripping on grid faults. Should I widen the trip settings?
  a: No. Grid protection limits come from the applicable grid code and the DISCOM, and only an authorised service engineer should touch a grid profile. Repeated trips on a weak feeder usually trace to AC cable voltage rise, loose terminations, an earthing problem, transformer loading, or firmware. Record the exact model, the displayed event code and the measured voltage at the AC terminals, then raise it through the service route instead of adjusting thresholds.
seoTitle: 'Anti-Islanding Protection in Solar Inverters: How It Works'
relatedSlugs:
- solar-inverter-regulations-india-2026-bis-iec-compliance
- solar-inverter-error-codes-guide
- on-grid-vs-hybrid
---

Your panels are in full sun. The grid goes out. Your rooftop system shuts down with it and the house goes dark. Nothing is broken. That is anti-islanding protection doing exactly what Indian regulation requires.

**Anti-islanding protection** forces a grid-connected solar inverter to stop energising the utility line once the grid disappears. Without it, your inverter would keep pushing power into a cable that a line worker has isolated and believes is dead. It is not a fault, not a warranty issue, and not something an installer can legitimately switch off.

India makes this mandatory. The Central Electricity Authority requires cessation within two seconds of an unintended island forming, and every grid-tied inverter sold here is type-tested against IS 16169:2019, the Indian adoption of IEC 62116:2014.

Below: how detection works, why the non-detection zone never closes, the verified CEA trip limits, why a hybrid can legally keep your lights on, and what to do about nuisance trips. Every standard number was checked against the issuing body.

> **TL;DR**
> - Anti-islanding stops a grid-tied inverter from energising a disconnected utility line. It protects line workers, never your appliances.
> - CEA Connectivity Regulations, 2013, Regulation 11(6)(e): cease energising within two seconds of an unintended island forming.
> - It also trips voltage above 110% or below 80% of nominal, and frequency at 50.5 Hz and above or 47.5 Hz and below. The licensee may prescribe narrower.
> - Passive methods (voltage, frequency, ROCOF, vector shift) go blind inside the non-detection zone. Active methods shrink it at a cost in power quality.
> - IEC 62116:2014, adopted as IS 16169:2019, tests one inverter against one resonant RLC load, not a real feeder. A hybrid inverter can still keep a house energised, because a transfer arrangement separates the backup circuit first.

**Short version.** Anti-islanding protection makes a grid-connected solar inverter stop feeding the utility network within seconds of losing the grid. Detection combines passive sensing of voltage and frequency with active perturbation of the inverter output. Indian rules require cessation within two seconds of an unintended island forming, under CEA Regulation 11(6)(e), with type testing to IS 16169:2019.

## What an island is, and why it is dangerous

An island is a section of distribution network cut off from the utility supply but still live, energised by generation on that section. A breaker opened or a fuse blew, and a rooftop inverter keeps exporting into copper that should be dead.

The CEA regulations define an **unintended island** as a part of the electricity system that stays energised by distributed generation after isolation. Deliberate islanding exists in microgrid design as an approved arrangement; [anti-islanding](/glossary/anti-islanding/) prevents the accidental version. Islands survive longer than intuition suggests: a 5 kW inverter feeding roughly 5 kW of local load has no reason to stop.

Two hazards follow. The first is shock risk. Crews work a dead line by isolating, testing, and earthing it. A rooftop inverter backfeeding through the distribution transformer puts 11 kV back on the high-voltage side, so a worker following correct procedure can still be exposed.

The second is out-of-phase reclosure. Indian feeders use automatic reclosers that restore supply after a transient fault, assuming the section is dead. A surviving island has drifted out of phase by then. Closing two unsynchronised sources produces a large transient torque and current, damaging motors, transformer windings, and inverters.

## Passive detection methods and where they go blind

Passive methods watch the inverter's own terminals for something abnormal. They add no distortion and no cost, so every inverter carries them. Their weakness is structural: if the grid's departure does not move the measured quantity, the method sees nothing. After the grid opens, inverter real power must equal island real load, forcing voltage to a new value; reactive mismatch moves frequency. Small mismatches mean small movements.

| Passive method | What it senses | Where it goes blind |
| --- | --- | --- |
| Over and under voltage (27/59) | RMS voltage shift from an active power mismatch | Output nearly equals local real load |
| Over and under frequency (81O/81U) | Frequency shift from a reactive power mismatch | Island load close to resonant at 50 Hz |
| ROCOF (81R), rate of change of frequency | Frequency slope over a few cycles | Shallow slope at small mismatch; trips on real grid events |
| Vector shift | Step change in voltage phase angle at separation | Small mismatch gives a phase step below setting |

**ROCOF** measures df/dt rather than f, so it reacts before frequency drifts far enough to hit a fixed threshold. That speed is also its problem: a large generator tripping elsewhere produces a genuine slope, and a sensitive ROCOF element then disconnects a healthy plant.

**Vector shift** watches the duration of each voltage cycle. At separation the load angle jumps, shortening or lengthening one cycle. Fast, no injection needed, and fooled by motor starts, capacitor switching, and nearby fault clearance.

## Active detection methods and the power quality tradeoff

Active methods stop waiting and start pushing. The inverter perturbs its output in a way a stiff grid absorbs without reacting, then watches. An island cannot absorb it, so the disturbance grows until a conventional trip fires. Detection is bought with distortion, so vendors trade perturbation size against harmonics, flicker, and stability on weak networks.

| Active method | Mechanism | Cost it imposes |
| --- | --- | --- |
| Active frequency drift (AFD) | Short zero-current dead time each half cycle nudges island frequency one way | Odd-harmonic current distortion, always present |
| AFD with positive feedback (Sandia frequency shift) | Chopping fraction scales with measured frequency error, so deviation amplifies itself | Higher distortion; gain can destabilise a weak feeder |
| Slip-mode frequency shift (SMS) | Current-to-voltage phase angle made a function of frequency, positive feedback on phase | Weakens against high quality factor resonant loads |
| Impedance injection | Injects a non-fundamental current and reads the voltage response to estimate source impedance | Signals from parallel inverters collide |

Positive feedback is the key idea. Plain AFD pushes with fixed force and a stubborn load holds it in place. A positive-feedback scheme raises its push in proportion to how far frequency has moved, so the island runs away from stability instead of settling into it.

## The non-detection zone, and why inverters mask each other

The **non-detection zone**, or NDZ, is the band of real and reactive power mismatch where a scheme fails to trip in time. It is a property of every method, not a product defect, and shrinking it for one load condition usually widens it for another. The arithmetic, using round numbers rather than field data:

**Worked example: passive under-voltage inside the NDZ**

- Nominal voltage: 230 V
- Local resistive load on the island: 5,200 W
- Inverter output: 5,000 W
- Load resistance: R = V squared / P = (230 x 230) / 5,200 = 10.17 ohm
- Island voltage: V = square root of (P x R) = square root of (5,000 x 10.17) = 225.5 V

The mismatch is 200 W in 5,200 W, or 3.8%, and it moves voltage just 1.9%. The CEA under-voltage limit sits at 80% of nominal, or 184 V, so passive under-voltage protection has nothing to report. If the load's inductive and capacitive parts also cancel near 50 Hz, frequency does not move either.

Now put several inverters on one feeder. Each unit's perturbation becomes a smaller share of total island power. Worse, positive-feedback schemes from different vendors use different gains and signs of drift, so one pushes frequency up while another pushes it down and the two partly cancel.

Certification does not cover this. Clause 6.1 of IEC 62116:2014 states the test uses an RLC load resonant at the nominal frequency and matched to a single unit under test. One inverter, one load. Your feeder is not that.

## The standards that actually apply in India

Four documents matter and they do different jobs. People conflate them, then quote a trip time from a test standard that contains none.

| Document | What it governs | Version verified |
| --- | --- | --- |
| [IEC 62116](https://webstore.iec.ch/en/publication/6479) | Islanding-prevention test procedure for grid-tied PV inverters | Edition 2.0, 2014-02, supersedes 2008 |
| IS 16169 | Indian adoption of IEC 62116:2014 | 2019 revision, replacing 2014 for BIS registration |
| IS 16221 (Part 2) | Inverter safety, identical to IEC 62109-2:2011, used with Part 1 | 2015; separate from anti-islanding |
| [CEA Connectivity Regulations](https://cea.nic.in/regulations-category/connectivity-of-distributed-generation-resources/?lang=en) | The binding Indian interconnection requirement | 2013, notified 30.09.2013; First Amendment 06.02.2019 |

IEC 62116:2014 scopes itself as "a test procedure to evaluate the performance of islanding prevention measures used with utility-interconnected PV systems". That is the whole claim: a laboratory method, not a grid code.

The applicable BIS standard moved to IS 16169:2019 under the Solar Systems, Devices and Components Goods Order, 2025, notified by the Ministry of New and Renewable Energy on 27 January 2025, per the [Press Information Bureau release](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2097219&reg=48&lang=2) and the [BIS changeover guidelines](https://www.crsbis.in/BIS/app_srv/tdc/gl/docs/changeover_guidelines_IS_16169_V2_final.pdf). Treat a report against the 2014 edition as a question to ask. Our guide to [Indian inverter regulations and BIS compliance](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) covers the registration chain; the [BIS certification](/glossary/bis-certification/) glossary entry explains what a CRS registration means.

[IEEE 1547-2018](https://standards.ieee.org/standard/1547-2018.html), amended by IEEE 1547a-2020, says the same in Clause 8.1.1: detect, cease to energize, and trip within two seconds of formation. The NREL primer notes the operator may extend that to five seconds, [catalogued on OSTI](https://www.osti.gov/biblio/1862659). India does not run on IEEE 1547, but the figure matches the CEA rule.

## Trip thresholds and clearing times

These come from Regulation 11(6) of the CEA Connectivity Regulations, 2013 as amended in 2019. Treat them as the outer envelope, not your site settings.

| Protective function | Limit in the regulation | Clearing time |
| --- | --- | --- |
| Over and under voltage | Above 110% or below 80% of nominal | Up to two seconds |
| Over and under frequency | 50.5 Hz and above, 47.5 Hz and below | Up to 0.2 seconds |
| Unintended island | Cease to energise the electricity system | Within two seconds of island formation |
| Reconnection after a trip | Voltage and frequency inside limits and stable | At least sixty seconds before reconnecting |
| DC injection | Not greater than 0.5% of full rated output | Continuous limit |

Read the proviso on the voltage and frequency rows: the appropriate licensee "may prescribe a narrower range" for both. That is why two compliant installations in different states carry different settings.

In practice your [DISCOM](/glossary/discom/) sets the grid profile, usually narrower, and some utilities require an external protection relay above a defined capacity. Confirm it before commissioning, not after. Shipped settings belong in product documentation; the [Qbits datasheet library](/download-datasheets/) is where you identify which document covers the exact model.

## Hybrid inverters, backup mode, and the transfer switch

A hybrid inverter can keep a house lit during an outage and still comply, because it is not energising the utility circuit. The requirement is precise: stop energising the electricity system, meaning the utility network. It says nothing about a circuit physically separated from that network first.

Inside a hybrid sits a transfer arrangement, usually relays or contactors, between grid input and backup output. On grid loss the sequence runs: detect, stop exporting, open the grid-side contacts, verify separation, then restart the backup output from the battery and available PV. It is break before make.

Two consequences. Backup loads see a real interruption, not a glitch-free handover. Qbits states UPS switching within 10 seconds for the relevant hybrid models; the figure is model-specific, so confirm it on that datasheet. Only loads wired to the backup output are covered, and a wall socket proves nothing about the changeover.

So both architectures stop energising the utility circuit inside the clearing time. Only the hybrid then opens its grid-side contacts and keeps designated backup loads running, within battery and output limits.

The [on-grid versus hybrid comparison](/blog/on-grid-vs-hybrid/) sets out the decision criteria, and the guide to [inverter behaviour in a power cut](/blog/solar-inverter-power-cut-backup/) covers what a homeowner experiences. Specifications sit on the [hybrid inverter](/hybrid-inverter/) page.

## How anti-islanding is verified at commissioning

Anti-islanding is not something you eyeball. Evidence lives in two places, a type-test report for the model and a site record for the installation, and neither substitutes for the other.

1. Identify the exact model and firmware on the nameplate and display, then match both to the test report. A family brochure may not cover every revision sold.
2. Collect the islanding test report against IS 16169:2019 or IEC 62116:2014, and confirm the edition and models covered.
3. Collect the separate safety report against IS 16221 (Part 2):2015, used with Part 1.
4. Confirm the loaded grid profile matches what the DISCOM approved, and photograph the settings screen.
5. Run the utility-witnessed disconnection test if required. Open the main incomer and record the time from loss of supply to cessation of output.
6. Confirm the reconnection delay, then record everything with date, meter readings, and names of those present.

IEC 62116:2014 calls the quantity in step 5 the **run-on time**: the interval between opening of the test switch and cessation of output current. On site you measure the same thing with cruder instruments. Our [commissioning walkthrough](/blog/solar-inverter-commissioning-in-india/) covers the wider checklist.

## Nuisance tripping on weak Indian feeders

Repeated trips on a site that otherwise generates fine are usually a network problem, not an inverter defect. Rural and semi-urban feeders run long, sit lightly loaded at midday, and hang off transformers with wide tap ranges.

Two mechanisms dominate. AC-side voltage rise comes first: the inverter exports through cable impedance, so terminal voltage exceeds the voltage at the pole transformer, and the gap grows with cable length and export current. The inverter sees an over-voltage a meter at the transformer would not show. Second, genuine frequency events, which ROCOF and vector shift react to whether or not an island exists.

| Item | Adjustable on site? | Notes |
| --- | --- | --- |
| Anti-islanding algorithm | No | Fixed in firmware, tied to the type-test report |
| Grid protection profile | Service engineer only, with DISCOM approval | Changing it unapproved breaks the connection agreement |
| AC cable size and run length | Yes, at design or by rework | Most common fixable cause of voltage-rise tripping |
| Terminations and earthing | Yes | Loose or corroded joints mimic grid events |
| Transformer tap and feeder loading | Utility only | Raise with the DISCOM, with logged measurements |
| Firmware version | Via service | Grid-tuning improvements arrive this way |

Do not widen trip thresholds to stop the symptom. It hides a wiring fault and can push the site outside the approved envelope. The [grid over-voltage guide](/blog/solar-inverter-grid-overvoltage/) gives the measurement sequence; the [error code reference](/blog/solar-inverter-error-codes-guide/) maps a displayed event to the right service route.

## Five things anti-islanding does not do

The function does not exist to help the system owner. It protects people outside your property boundary, and does so by making your system less useful during an outage.

**Myth 1: it protects your home during a power cut.** It does the opposite. It is the reason a standard grid-tied system goes dark.

**Myth 2: it can be switched off for backup.** Disabling it violates the interconnection requirement and creates a live-line hazard for utility crews. The legitimate route is a hybrid with a transfer arrangement.

**Myth 3: hybrid inverters do not have anti-islanding.** They do, and they must. The transfer arrangement is what lets them supply a backup circuit safely.

**Myth 4: it protects the inverter from surges and lightning.** A different function entirely. Surge protection devices and earthing handle that.

**Myth 5: a test certificate proves your feeder is safe.** It proves one inverter passed a defined test against one resonant load. It says nothing about the seven other inverters on the same transformer. Nor does frequent tripping mean your unit is defective; on a weak feeder it is usually reporting a real condition.

## The Bottom Line

Anti-islanding protection is a safety obligation the inverter carries for the utility. It senses the grid's absence, probes actively when sensing is ambiguous, and shuts down inside a clearing time set by regulation. In India that is two seconds from formation of an unintended island, under Regulation 11(6)(e) of the CEA Connectivity Regulations, 2013. No method is perfect, which is why utilities layer their own screening on top of certification.

Three things to do next:

- Pull the islanding test report for the exact model and firmware on your site, confirm it cites IS 16169:2019 or IEC 62116:2014, and file it with the commissioning record.
- Confirm the grid profile loaded into the inverter matches what your DISCOM approved, and photograph the settings screen at handover.
- If you are specifying a system now, or need documented grid settings for a model, [talk to the Qbits technical team](/contact-us/) before you finalise the interconnection application.
