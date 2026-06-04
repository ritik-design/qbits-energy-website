---
term: "Shading Analysis"
title: "Shading Analysis: Definition, Tools & Solar Applications"
description: "Shading analysis quantifies yield loss from obstructions. Full guide to tools, methods and Indian rooftop applications."
category: "System Layout"
categorySlug: "system-layout"
priority: "P1"
updatedDate: 2026-06-04
keywords:
  - what is shading analysis
  - solar shading
  - shade analysis
  - solar shadow study
  - shading loss
shortDefinition: "Shading analysis is the process of quantifying solar yield loss from obstructions like trees, buildings, parapets and inter-row shadows. It uses sun-path geometry, site obstruction mapping and software tools like PVsyst, Helioscope, Pathfinder or SunEye. Critical for rooftop and complex-terrain solar plants."
quickFacts:
  industry: "Solar Plant Design"
  primaryUse: "Quantifying shading yield loss"
  commonUsers: "Designers, EPCs, surveyors"
  relevantStandards: "MNRE design guidelines, IEC 61724"
  relatedTechnologies: "PVsyst, Helioscope, Solar Pathfinder, SunEye, drone surveys"
relatedTerms:
  - { slug: "tilt-angle", term: "Tilt Angle" }
  - { slug: "azimuth", term: "Azimuth" }
  - { slug: "site-survey", term: "Site Survey" }
  - { slug: "ghi", term: "GHI" }
  - { slug: "mppt", term: "MPPT" }
  - { slug: "micro-inverter", term: "Micro Inverter" }
  - { slug: "dc-optimiser", term: "DC Optimiser" }
  - { slug: "bypass-diode", term: "Bypass Diode" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "pr", term: "Performance Ratio" }
  - { slug: "row-spacing", term: "Row Spacing" }
  - { slug: "hot-spot", term: "Hot Spot" }
faqs:
  - q: "What is shading analysis in simple words?"
    a: "Figuring out how much sun your panels will lose to shadows from trees, buildings, parapets and other panels. Better analysis means better yield projection."
  - q: "Why does shading matter so much?"
    a: "A small shadow on one cell can cut the whole string output by 30 to 90 percent without bypass diodes. Modern modules have bypass diodes to mitigate but not eliminate the loss."
  - q: "What tools are used for shading analysis?"
    a: "PVsyst, Helioscope, SAM, Aurora Solar, SunEye, Solar Pathfinder, Skelion (SketchUp plugin)."
  - q: "How much shading is acceptable?"
    a: "Annual shading loss below 3 to 5 percent is acceptable for most projects. Above 10 percent triggers design changes."
  - q: "What is winter shading?"
    a: "Shadows from southern obstructions at low winter sun angles. Often the worst case for Indian rooftops."
  - q: "What is inter-row shading?"
    a: "Shadows from front-row panels on rear rows. Depends on tilt and row pitch."
  - q: "What is the 3D sun-path diagram?"
    a: "A polar plot showing sun's altitude and azimuth throughout the year at a given location. Used to identify shading obstructions."
  - q: "Can microinverters help with shading?"
    a: "Yes. Module-level conversion isolates shaded panels from the rest. Recovers 50 to 80 percent of shading loss."
  - q: "Can DC optimisers help?"
    a: "Yes. Module-level DC optimisation provides similar shading recovery as microinverters."
  - q: "What is bypass diode?"
    a: "Diode in module junction box that allows current to bypass shaded cells. Limits hot-spot risk but still reduces total module output."
  - q: "How does shading affect string design?"
    a: "Shaded string components should be on a separate MPPT. Splitting strings reduces system-wide shading impact."
  - q: "What is fish-eye shading photo?"
    a: "Wide-angle photo capturing the entire sky dome from panel location. Used to identify obstructions."
  - q: "Can drones do shading surveys?"
    a: "Yes. Drone surveys map rooftop obstructions and adjacent buildings. Combined with software for full shading analysis."
  - q: "What is partial shading?"
    a: "Shadow covering only part of a panel or string. Causes complex I-V curve with multiple local maxima."
  - q: "How is shading documented?"
    a: "Annual shading loss percentage, monthly shading patterns, and shadow geometry diagrams."
---

## What is shading analysis

Shading analysis is the process of quantifying solar PV yield loss caused by obstructions blocking direct sunlight reaching the array. Obstructions include trees, neighbouring buildings, chimneys, parapets, water tanks, satellite dishes, mounting frames and inter-row shadows from other panels. Shading analysis uses sun-path geometry combined with three-dimensional obstruction mapping to compute the time-dependent shading pattern across the year.

Shading impact on PV is non-linear. A small shadow on one cell can cut a series-connected string's output by 30 to 90 percent without bypass diode protection. Modern modules include bypass diodes that limit this loss, but partial shading still causes significant yield reduction. System-level mitigation includes string splitting across MPPT inputs, microinverters and DC optimisers.

For Indian rooftop solar, shading analysis is essential because urban rooftops are crowded with obstructions. Trees in residential settings, chimneys, neighbouring buildings, water tanks and parapets all contribute to shading loss. Utility-scale installations care about inter-row shading from system geometry.

## Why shading analysis matters

Yield accuracy. Without shading analysis, P50 yield estimates are systematically optimistic.

Design optimisation. Module placement, tilt and string layout decisions depend on shading patterns.

Equipment selection. Heavy shading favours microinverters or DC optimisers.

Customer expectations. Honest shading projections prevent disappointment after commissioning.

PPA accuracy. PPA generation commitments should be based on shading-corrected yield.

System ROI. Shading loss directly reduces revenue.

## How shading analysis works

1. Map site location and orientation.
2. Identify all obstructions (trees, buildings, structures) with height and position.
3. Generate 3D model in shading analysis software.
4. Compute sun-path geometry for the year.
5. Calculate shadow patterns hour by hour.
6. Quantify shading loss per module or per string.
7. Aggregate to annual shading loss percentage.

## Technical deep dive

### Shading loss components

| Component | Description |
|---|---|
| Direct shading | Direct beam blocked by obstruction |
| Diffuse shading | Sky dome partially obscured |
| Inter-row | Front rows shading rear rows |
| Self-shading | Panel framing on cell edges |
| Soiling | Treated separately, not strictly shading |

### Software tools

| Tool | Strength |
|---|---|
| PVsyst | Industry standard for utility solar |
| Helioscope | Cloud-based for C&I |
| Aurora Solar | Residential and small commercial |
| SAM (NREL) | Open-source detailed simulation |
| Solar Pathfinder | Hand-held field tool |
| SunEye | Field obstruction camera |
| Skelion (SketchUp) | 3D modelling integration |
| Drone-based | High-resolution rooftop survey |

### Hand calculation: maximum tree shading

For a tree of height H at distance D south of a south-facing array:
Shadow length at winter solstice = H / tan(altitude_min)

For Delhi (28° latitude), winter solstice noon altitude ≈ 38°:
Shadow length = H / tan(38°) = H × 1.28

A 10 m tree at 12 m south casts a 12.8 m noon shadow at winter solstice; array within this distance is partially shaded.

### Inter-row shading

Row pitch (m) to avoid noon winter shading:
Pitch = panel_height × cos(tilt) + panel_height × sin(tilt) / tan(altitude_min)

For 2.3 m panel, 25° tilt, Delhi:
Pitch = 2.3 × cos(25°) + 2.3 × sin(25°) / tan(38°) = 2.08 + 1.24 = 3.32 m

Most utility plants use 3.5 to 4 m pitch to balance shading and land use.

### Shading mitigation techniques

| Technique | Loss recovery |
|---|---|
| Bypass diodes (built-in) | Baseline |
| String splitting on multiple MPPTs | 30 to 50% |
| DC optimisers | 50 to 80% |
| Microinverters | 50 to 90% |
| Module relocation | Variable, can be 100% |

## Real-world applications

Residential rooftop solar planning.

C&I rooftop with chimney and parapet obstructions.

Carport design.

Utility plant inter-row spacing.

Floating solar (limited shading).

BIPV with adjacent building obstructions.

## Common shading problems

Water tank shading critical noon hours.

Tree growth over years increasing shading.

Neighbouring building expansion creating new shading.

Inter-row shading from undersized row spacing.

Self-shading from oversized panels close to parapets.

## Best practices

Conduct shading analysis at design stage with software.

Include conservative tree growth projection (10 to 15 years).

Consider seasonal sun paths, not just summer.

Avoid placing panels in regions with > 5 percent annual shading loss.

Use microinverters or DC optimisers where shading unavoidable.

Document shading loss in design report.

Update analysis if site changes.

## Comparison: shading mitigation

| Technique | Cost premium | Effectiveness | Use case |
|---|---|---|---|
| Module placement | None | Full | Clean site |
| String splitting | Low | Partial | Multi-orientation roof |
| DC optimisers | Medium | High | Moderate shading |
| Microinverters | High | Very high | Heavy shading, residential |
| Avoid shaded area | None | Full | Where space allows |

## Indian market context

Indian rooftop shading typically comes from water tanks, parapets, adjacent buildings, antennas and trees.

PM Surya Ghar installers often conduct visual shading assessment; formal software analysis is rare for residential.

C&I and utility projects use PVsyst or Helioscope for bankable shading analysis.

ALMM-listed modules ship with three bypass diodes per module standard; six-diode designs growing for premium installations.

Microinverter adoption (Enphase) is increasing in shading-heavy Indian residential markets.

## Standards and certifications

| Standard | Scope |
|---|---|
| IEC 61724-1 | Performance monitoring |
| MNRE design guidelines | Recommendations |
| Software vendor methodologies | PVsyst, Helioscope, SAM |

## Common mistakes

Skipping shading analysis on "clean" rooftops, missing seasonal obstructions.

Ignoring tree growth over project life.

Using summer-only analysis, missing winter sun angle issues.

Inadequate row spacing on ground-mount plants.

Mixed-orientation strings without per-MPPT separation.

Trusting brochure shading claims without site-specific analysis.

## Key takeaways

Shading analysis quantifies yield loss from obstructions. Software tools like PVsyst and Helioscope provide bankable analysis. Annual shading loss above 5 percent triggers design changes. Mitigation includes string splitting, DC optimisers and microinverters. Indian rooftops typically have non-trivial shading from tanks, parapets and trees, making shading analysis essential at the design stage.

## Need shading-corrected solar yield projections?

QBits Energy provides PVsyst-based shading analysis and yield modelling for residential, C&I and utility solar projects across India.

## Sources

- PVsyst software documentation.
- Helioscope software documentation.
- NREL System Advisor Model (SAM) documentation.
- IEC 61724-1, Performance monitoring.
- MNRE Design Guidelines for Solar PV Plants.
- Aurora Solar documentation.
- Duffie J. A., Beckman W. A., Solar Engineering of Thermal Processes, Wiley.
- ITRPV Roadmap on shading mitigation.
- IEA PVPS Task 13 Report on PV Performance.
