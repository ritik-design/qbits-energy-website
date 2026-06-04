---
term: "Plane of Array"
title: "Plane of Array (POA) Irradiance: Definition & Solar Yield"
description: "POA is irradiance on tilted PV surface. Full guide to calculation and Indian solar applications."
category: "Solar Resource"
categorySlug: "solar-resource"
priority: "P2"
updatedDate: 2026-06-04
keywords:
  - plane of array
  - poa irradiance
  - tilted surface irradiance
  - poa vs ghi
  - global tilted irradiance
shortDefinition: "Plane of Array (POA) irradiance is the solar radiation hitting the actual tilted surface of PV modules, expressed in W/m². Calculated from GHI, DNI, DHI and ground-reflected components through sky models. POA is the direct input to PV yield calculation, distinct from horizontal GHI."
quickFacts:
  industry: "Solar Resource"
  primaryUse: "PV yield calculation input"
  commonUsers: "Designers, yield modellers"
  relevantStandards: "IEC 61724"
  relatedTechnologies: "Sky models, PVsyst, SAM"
relatedTerms:
  - { slug: "ghi", term: "GHI" }
  - { slug: "dni", term: "DNI" }
  - { slug: "dhi", term: "DHI" }
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "albedo", term: "Albedo" }
  - { slug: "irradiation", term: "Irradiation" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "peak-sun-hours", term: "Peak Sun Hours" }
  - { slug: "shading-analysis", term: "Shading Analysis" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "module-efficiency", term: "Module Efficiency" }
faqs:
  - q: "What is POA in simple words?"
    a: "The amount of sunlight actually hitting your tilted solar panels. Different from horizontal GHI because panels are tilted at an angle facing the sun."
  - q: "POA vs GHI?"
    a: "GHI: irradiance on horizontal surface. POA: irradiance on tilted module surface. For south-tilted Indian panels, POA is 5-15 percent higher than GHI."
  - q: "How is POA calculated?"
    a: "Combination of direct beam (DNI projected onto tilted plane) + diffuse sky (DHI on tilted plane through sky models) + ground reflected (GHI × albedo × view factor)."
  - q: "What sky models are used?"
    a: "Isotropic, Hay, Perez. Perez is most accurate, default in PVsyst and SAM."
  - q: "Does POA matter for PR?"
    a: "Yes. PR is calculated using POA irradiation, not GHI. POA-based PR isolates plant quality from weather more accurately."
  - q: "How is POA measured?"
    a: "Pyranometer mounted in plane of array on the actual tilt. Standard for utility plant monitoring."
  - q: "What is the typical POA gain over GHI?"
    a: "Indian latitude tilt 20-28°: POA is 8-12 percent higher than GHI on annual basis."
  - q: "Does azimuth affect POA?"
    a: "Yes. South-facing maximises POA. East/west reduces POA by 15-20 percent."
  - q: "What is rear-side POA?"
    a: "For bifacial modules, irradiance hitting the rear surface. Calculated from albedo and view factors."
  - q: "Is POA same as global tilted?"
    a: "Yes. GTI (Global Tilted Irradiance) is interchangeable with POA."
  - q: "How is POA used in yield?"
    a: "Annual yield = POA × Module area × Module efficiency × PR × number of modules."
  - q: "Does shading affect POA?"
    a: "Yes. Shading subtracts from POA at affected times."
  - q: "What is the accuracy of POA from GHI?"
    a: "±3-5 percent typical with Perez model and good GHI/DNI/DHI inputs."
  - q: "Is POA in commercial databases?"
    a: "Solargis and NSRDB provide POA estimates for specified tilt/azimuth."
  - q: "Does POA change with seasons?"
    a: "Yes. Higher in summer, lower in winter, with seasonal variation depending on tilt and latitude."
---

## What is Plane of Array irradiance

Plane of Array (POA) irradiance, also called Global Tilted Irradiance (GTI), is the solar radiation hitting the actual tilted surface of PV modules. Unlike GHI which measures irradiance on horizontal, POA accounts for the panel's specific tilt and azimuth orientation. POA is the direct input to PV power calculation.

POA combines three components:
1. Direct beam: DNI projected onto the tilted plane
2. Diffuse: DHI on tilted plane (calculated through sky models)
3. Ground-reflected: GHI multiplied by albedo and view factor from the array to the ground

For Indian solar installations at latitude-equivalent tilt, POA typically exceeds horizontal GHI by 8-12 percent on annual basis. South-facing tilted panels capture significantly more energy than horizontal because they better match the sun's path.

## Why POA matters

Yield prediction. POA directly drives PV power output.

PR calculation. PR normalises actual generation against POA-derived expectation.

Bifacial analysis. Rear-side POA is critical for bifacial gain.

Plant design. Tilt and azimuth optimisation maximises POA.

Performance benchmarking. POA-based PR is more accurate than GHI-based.

## POA equation

POA = DNI × cos(θ) + DHI × f_diffuse(tilt) + GHI × albedo × f_ground(tilt)

Where:
- θ is the angle of incidence between sun and panel normal
- f_diffuse is the sky diffuse view factor
- f_ground is the ground view factor

## Technical deep dive

### Sky models for diffuse component

| Model | Accuracy | Use |
|---|---|---|
| Isotropic | ±5-10% | Simple |
| Hay | ±3-5% | Standard for cloudy |
| Perez | ±2-4% | Default for PVsyst, SAM |
| Klucher | ±3-5% | Alternative |

Perez model accounts for circumsolar and horizon brightening effects.

### POA gain over GHI by tilt

For Delhi (28° latitude), south-facing:

| Tilt | Annual POA/GHI ratio |
|---|---|
| 0° (horizontal) | 1.00 |
| 15° | 1.07 |
| 28° (latitude) | 1.12 |
| 35° | 1.13 |
| 45° | 1.11 |
| 60° | 1.04 |
| 90° (vertical) | 0.70 |

### Bifacial POA

For bifacial modules:
- Front POA: standard calculation
- Rear POA: complex calculation involving ground albedo, view factors, inter-row shading
- Total POA = Front POA + Rear POA × bifaciality factor

Bifacial POA gain: 5-25 percent depending on albedo and clearance.

### Tracker POA

Single-axis trackers continuously adjust tilt and azimuth to track the sun:
- Tracker POA: 1.25-1.35× horizontal GHI
- Fixed POA at latitude: 1.10-1.15× horizontal GHI
- Tracker yield gain: ~15-25%

## Real-world applications

Yield prediction software inputs.

Plant performance monitoring.

PR calculation.

Bifacial analysis.

Tracker yield prediction.

## Comparison: GHI vs POA

| Aspect | GHI | POA |
|---|---|---|
| Surface | Horizontal | Tilted to match modules |
| Measurement | Standard | Specific to installation |
| Use | Resource benchmarking | Direct yield input |
| Indian gain at optimum tilt | Baseline | +10-15% |

## Best practices

Use POA for PR calculation, not GHI.

Install in-plane pyranometers on utility plants.

Use Perez sky model for highest accuracy.

Apply realistic albedo for ground reflection.

Document tilt and azimuth assumptions in yield reports.

## Indian market context

Indian utility plants typically install in-plane pyranometers for accurate PR.

PVsyst, SAM and PVGIS provide POA calculation.

Bifacial yield models include detailed rear-side POA.

NIWE and Solargis provide tilt-specific POA estimates.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61724 | Performance monitoring including POA |
| ISO 9060 | Pyranometer classification |
| Perez et al. sky model | Diffuse calculation |

## Key takeaways

POA (Plane of Array) irradiance is the solar radiation hitting the actual tilted PV surface, calculated from GHI, DNI, DHI and ground-reflected components. POA is 8-12 percent higher than GHI for Indian latitude tilt. POA-based PR provides accurate plant quality assessment. Bifacial modules require additional rear-side POA calculation. Standard for PV yield modelling in PVsyst, SAM and bankable yield reports.

## Need POA-based yield modelling?

QBits Energy provides POA-based bankable yield modelling for Indian residential, C&I and utility solar projects.

## Sources

- IEC 61724, Performance monitoring.
- Perez R., et al., Modelling daylight availability, Solar Energy 1990.
- ISO 9060, Pyranometer classification.
- PVsyst software documentation.
- NREL System Advisor Model (SAM).
- NIWE Solar Resource Atlas.
- Solargis Solar Resource Database.
- IEA PVPS Task 16 publications.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
