---
term: CUF
title: 'CUF (Capacity Utilisation Factor) in Solar: Formula and Example'
description: Capacity utilisation factor compares energy generated with nameplate capacity over the same period. Learn the formula, a checked 1 MW example and what changes a solar CUF.
category: Performance
categorySlug: performance-efficiency
priority: P0
updatedDate: 2026-09-23
keywords:
- what is cuf
- capacity utilisation factor
- solar cuf calculation
- solar plant load factor
shortDefinition: Capacity Utilisation Factor (CUF) is energy generated during a period divided by the energy a plant would generate if its stated capacity operated continuously for every hour in that period.
quickFacts:
  industry: Solar project performance
  primaryUse: Comparing actual or modelled energy with a stated capacity and period
  commonUsers: Developers, owners, analysts and lenders
  relatedTechnologies: Yield models, irradiance, availability and performance ratio
relatedTerms:
- { slug: pr, term: Performance Ratio }
- { slug: solar-yield, term: Solar Yield }
- { slug: peak-sun-hours, term: Peak Sun Hours }
- { slug: p50-p90, term: P50 and P90 }
faqs:
- q: What is the CUF formula?
  a: CUF (%) equals energy generated divided by rated capacity times the hours in the same period, multiplied by 100. Use matching energy and capacity units.
- q: What is CUF for a 1 MW plant producing 1,752 MWh in a 365-day year?
  a: The denominator is 1 MW times 8,760 hours, or 8,760 MWh. The CUF is 1,752 divided by 8,760, or 20%.
- q: Is CUF the same as performance ratio?
  a: No. CUF compares energy with a continuous nameplate-output maximum; performance ratio compares measured or modelled output with irradiance-adjusted reference energy under a defined method.
- q: Does a higher CUF always mean a better inverter?
  a: No. Irradiance, capacity basis, DC/AC ratio, outages, curtailment and other system losses also affect CUF.
author: Nirav Dhanani
---

## What is CUF?

**Capacity Utilisation Factor (CUF)** expresses a solar plant's actual or modelled energy as a share of the energy it would generate if it operated at its stated capacity continuously throughout the same period. Some Indian reports call a related measure *plant load factor* (PLF); compare the exact definition and capacity basis before treating two published percentages as identical.

CUF is a useful summary for energy budgets and project comparisons. It is **not** an inverter efficiency figure or a stand-alone quality score. Weather, site design, curtailment and maintenance all affect the numerator.

## Formula and worked example

**CUF (%) = 100 × energy generated ÷ (rated capacity × hours in period)**

For a **1 MW** plant generating **1,752 MWh** during a 365-day year, the continuous-output reference is **1 MW × 8,760 hours = 8,760 MWh**. CUF is **1,752 ÷ 8,760 × 100 = 20%**. The example is arithmetic, not a claim that 20% is a national average or a guaranteed result for an Indian plant.

For a monthly comparison, use that month's actual hours. For a leap year, use 8,784 annual hours. State whether “capacity” means the AC export rating or the DC module nameplate; a different denominator changes the percentage even if annual energy is unchanged.

## What changes a solar project's CUF?

| Factor | How it affects the comparison |
| --- | --- |
| Solar resource and weather | Changes energy available at the site |
| Orientation, shading and soiling | Reduce or redistribute production from the array |
| DC/AC ratio and clipping | Change the shape of AC output and the chosen capacity basis |
| Inverter and grid availability | Remove generating hours during faults or curtailment |
| Period and measurement point | Change which hours and energy are counted |

There is no honest single “good Indian CUF” independent of these conditions. A project should compare measured energy against its dated design estimate for the same boundary and period. The [irradiance guide](/blog/solar-irradiance-data-india-statewise/) explains resource inputs; the [inverter-sizing guide](/blog/solar-inverter-sizing/) explains why AC and DC ratings differ.

## CUF versus performance ratio

CUF's denominator assumes full nameplate output for every hour. [Performance ratio](/glossary/pr/) uses an irradiance-adjusted reference to assess how much of the available solar resource the system converted under a specified method. A low CUF can reflect a low-sun location without proving that equipment is faulty. A good performance ratio does not guarantee high annual energy if resource or plant availability is low.

For financing, ask which energy forecast and assumptions underlie a [P50 or P90 estimate](/glossary/p50-p90/). For operations, keep the meter boundary, curtailment record and maintenance events alongside CUF. The previous version's universal CUF bands, bifacial gains and PPA penalty claims were removed because they did not describe a defined project or cited contract.
