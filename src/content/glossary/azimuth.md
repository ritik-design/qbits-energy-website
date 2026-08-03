---
term: "Azimuth"
title: "Azimuth: Definition, Optimisation & Solar PV Applications"
description: "Azimuth is the horizontal orientation of solar panels. Full guide to true south, magnetic declination and Indian solar applications."
category: "System Layout"
categorySlug: "system-layout"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is azimuth
  - solar azimuth
  - panel orientation
  - true south solar
  - azimuth angle india
shortDefinition: "Azimuth angle is the horizontal compass direction a solar panel faces, measured clockwise from north. For northern hemisphere installations including India, panels should face due south (180° azimuth) for maximum annual energy. Deviations cost 1 to 8 percent in yield."
quickFacts:
  industry: "Solar PV Design"
  primaryUse: "Orientation optimisation for maximum solar capture"
  commonUsers: "Designers, installers, EPCs"
  relevantStandards: "MNRE design guidelines, IEC 61724"
  relatedTechnologies: "Magnetic declination correction, GPS-based orientation"
relatedTerms:
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "dni", term: "DNI" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "shading-analysis", term: "Shading Analysis" }
  - { slug: "site-survey", term: "Site Survey" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "mounting-structure", term: "Mounting Structure" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "string-sizing", term: "String Sizing" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "self-consumption", term: "Self Consumption" }
faqs:
  - q: "What is azimuth in simple words?"
    a: "The direction your solar panel faces, like a compass bearing. Due south is best for India and the rest of the northern hemisphere."
  - q: "What azimuth is best for India?"
    a: "180° (due south) for maximum annual yield."
  - q: "What is the convention for measuring azimuth?"
    a: "Clockwise from north. North = 0°, east = 90°, south = 180°, west = 270°."
  - q: "Can I install panels facing east or west?"
    a: "Yes, but with yield loss. East or west alone: 15 to 20 percent yield loss. East-west split with two MPPTs: similar to single south-facing."
  - q: "What is magnetic declination?"
    a: "The angle between magnetic north (compass) and true north. India ranges from -1° in west to +2° in east. Usually small enough to ignore in design."
  - q: "How does azimuth affect generation profile?"
    a: "South: noon peak. East: morning peak. West: afternoon peak. East-west: twin peaks."
  - q: "Should I use east-west for self-consumption?"
    a: "Yes if your load profile peaks in morning and evening. East-west spreads generation across the day."
  - q: "What azimuth for rooftop with parapet?"
    a: "Stay south where possible. If south face has parapet shading, east-west is the next best option."
  - q: "Does azimuth depend on hemisphere?"
    a: "Northern hemisphere: south. Southern hemisphere: north. Equator: tilt becomes the dominant factor."
  - q: "How is azimuth measured at site?"
    a: "Magnetic compass plus declination correction, or GPS-based orientation tool."
  - q: "Does shading change optimum azimuth?"
    a: "Yes. Heavy morning shading favours west-facing; heavy evening shading favours east-facing."
  - q: "What is the typical Indian utility plant azimuth?"
    a: "Due south for fixed-tilt. Trackers rotate east to west through the day."
  - q: "Does azimuth affect CUF?"
    a: "Yes. South-facing CUF is highest. Other orientations reduce CUF proportionally to yield loss."
  - q: "Can panels face different directions in one array?"
    a: "Yes, with separate MPPT inputs per orientation group."
  - q: "Is true south same as solar south?"
    a: "Solar south refers to the sun's path zenith projection, which equals true south at solar noon."
author: "Nirav Dhanani"
---

## What is azimuth

Azimuth angle is the horizontal compass direction a solar panel faces, measured in degrees clockwise from north. North is 0°, east is 90°, south is 180° and west is 270°. For solar panels in the northern hemisphere, facing due south (180°) captures the maximum amount of solar energy over the year because the sun spends the majority of its arc in the southern sky.

> **TL;DR**
> - Due south (180°) is the optimal azimuth for northern hemisphere sites, including all of India.
> - A ±15° deviation from south costs only about 1 percent of annual yield, but ±90° (due east or west) costs 18 to 22 percent.
> - East-west split arrays paired with two MPPTs recover to 95 to 98 percent of due-south yield while better matching morning and evening load.
> - Utility fixed-tilt plants are always built south-facing; single-axis trackers vary azimuth continuously through the day.
> - Magnetic declination across India ranges from -1° to +2°, small enough that compass-based orientation is usually accurate without correction.

Azimuth and [tilt](/glossary/tilt-angle/) together fully define a panel's orientation. The right combination of tilt and azimuth maximises annual energy capture at a given location. Deviation from optimum azimuth costs 1 to 20 percent in annual yield depending on the deviation magnitude and site latitude.

For Indian rooftops, panels often cannot face due south because of roof geometry, parapet shading or aesthetic constraints. East-west splits are common compromises. Utility-scale fixed-tilt installations are always south-facing. Tracker plants vary azimuth throughout the day.

## Why azimuth matters

[Annual yield](/blog/solar-yield-india/). Right azimuth maximises captured energy.

Generation profile. Different azimuths produce different daily output curves.

Self-consumption. East-west splits match evening load profiles.

[Bifacial](/glossary/bifacial-module/) gain. Symmetrical south-facing maximises rear-side reflected light.

Plant layout. Azimuth determines row spacing and inter-row shading.

## How azimuth affects yield

| Azimuth deviation from south | Annual yield loss |
|---|---|
| 0° (due south) | 0% |
| ±15° (SSE or SSW) | 1% |
| ±30° (SE or SW) | 4% |
| ±45° (ESE or WSW) | 8% |
| ±60° | 13% |
| ±90° (E or W) | 18 to 22% |
| 180° (due north) | 35 to 40% |

## Technical deep dive

### East-west configuration

| Strategy | Total annual yield vs south |
|---|---|
| Pure south | 100% |
| Pure east | 80 to 82% |
| Pure west | 80 to 82% |
| 50/50 east + west with two MPPTs | 95 to 98% |
| South + east + west | 99 to 100% (more panels needed) |

### Magnetic declination across India

| Region | Declination |
|---|---|
| Kashmir (Jammu) | +1° |
| Delhi | 0° |
| Mumbai | -1° |
| Chennai | -1° |
| Kolkata | 0° |
| Guwahati | +1° |
| Port Blair (A&N) | -1° |

Small magnitudes mean compass-based orientation is accurate enough for most installations without explicit correction.

### Generation profile by azimuth

| Azimuth | Peak time | Profile |
|---|---|---|
| South (180°) | Solar noon | Bell curve, peaks at noon |
| East (90°) | 9 to 10 am | Morning weighted |
| West (270°) | 2 to 3 pm | Afternoon weighted |
| East + West | Twin peaks | Spreads across day |

### Tracker azimuth

Single-axis trackers tilt East to West. Azimuth at any moment depends on solar position. The fixed tilt axis is typically horizontal north-south.

## Real-world applications

Utility ground-mount fixed-tilt: south-facing.

Single-axis trackers: east-to-west rotation.

[Residential rooftops](https://surgepv.com/residential-solar-design/): south where possible, east-west when not.

Carports: aligned to structural axis, often east-west.

Floating solar: south-facing on rectangular pontoons.

Building-integrated PV (BIPV): determined by facade orientation.

## Common azimuth problems

Magnetic compass error in dense urban environments (steel structures).

Misorientation during installation, [costing yield](/blog/maximize-solar-output-indian-climate/).

[Shaded south face](/glossary/shading-analysis/) forcing east-west compromise.

East-west arrays without separate [MPPTs](/glossary/mppt/) causing mismatch loss.

False north reference from old building drawings.

## Best practices

Use GPS or a surveying tool for orientation when accuracy matters.

Apply magnetic declination correction if compass-based.

Prefer south where geometry permits.

Use east-west splits with [multi-MPPT inverters](/blog/dual-mppt-vs-single-mppt/) when south is not viable.

Document azimuth on the [single-line diagram](/glossary/single-line-diagram/).

Verify azimuth at installation against design.

## Indian market context

Indian utility plants are always south-facing for fixed-tilt designs.

Tracker plants are now standard for utility-scale, with daily azimuth tracking.

Rooftop residential installations frequently use east-west splits where south face has parapet shading or chimneys.

[PM Surya Ghar](/glossary/pm-surya-ghar/) systems are designed with site-specific azimuth optimisation.

C&I rooftops often follow shed roof orientations, accepting yield trade-off.

## Standards and certifications

| Standard | Scope |
|---|---|
| MNRE design guidelines | Orientation recommendations |
| IEC 61724 | Performance monitoring |
| ISO 31-3 | Quantities and units, angles |

## Common mistakes

Using uncorrected magnetic compass in steel-frame buildings.

Mixing east-facing and west-facing strings on same MPPT.

Ignoring shading impact on optimum azimuth.

Assuming due south on misaligned plot.

Not documenting actual installed azimuth.

## Key takeaways

Azimuth angle is the compass direction a solar panel faces. Due south (180°) is optimum for India. Deviations of ±15° cost only 1 percent of yield, but ±45° or more begins to cost 8 to 20 percent. East-west splits with separate MPPTs are an effective compromise on parapet-constrained rooftops. Tracker plants vary azimuth throughout the day for maximum capture.

## Need azimuth-optimised solar design?

QBits Energy designs solar installations with proper azimuth analysis and MPPT allocation for residential, C&I and utility plants across India.

## Further reading

For how Azimuth plays out in real projects, these guides go deeper:

- [East-West Roof Solar Design in India 2026: When It Beats South-Facing](/blog/east-west-roof-solar-design/)
- [Solar Inverter Low Output, 12 Causes and Fixes India](/blog/solar-inverter-low-output-causes-india/)
- [Dual MPPT vs Single MPPT, When You Actually Need It](/blog/dual-mppt-vs-single-mppt/)
- [Ghar Mein Solar Panel Kaise Lagwayein: Hindi Guide](/blog/ghar-mein-solar-panel-kaise-lagwayein/)

## Sources

- MNRE Design Guidelines for Solar PV Plants.
- IEC 61724-3, Performance evaluation.
- NREL System Advisor Model (SAM) documentation.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
- World Magnetic Model 2025, NOAA/NCEI and BGS.
- NIWE Solar Resource Atlas.
- IEA PVPS Trends in Photovoltaic Applications 2024.
- Sandia National Laboratories azimuth optimisation studies.
- ITRPV Roadmap.
