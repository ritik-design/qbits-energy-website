---
title: "Solar Shading Analysis Software 2026: Guide"
excerpt: "Solar shading analysis software runs the hourly simulation that turns a layout into a bankable yield report. Here is how 8,760-hour module-level shading works, why it matters, and which tools ship it on every plan."
description: "Solar shading analysis software 2026: how 8,760-hour module-level shading works, why it drives bankable yield, and which solar shading tools ship it."
category: "Solar Software"
date: 2026-06-14
updatedDate: 2026-07-08
readTime: "11 min"
image: "/blog-images/solar-shading-analysis-software.svg"
author: "Nirav Dhanani"
keywords:
  - solar shading analysis software
  - 8760 hour shading
  - module level shading
  - solar shade analysis
  - bankable shading
  - solar shading tool
  - solar shading analysis tool
  - solar shading software
  - solar pv shading software
  - shading analysis software solar
  - solar shade analysis tool
faqs:
  - q: "What is 8,760-hour solar shading analysis?"
    a: "8,760-hour solar shading analysis simulates the sun's position at every hour of the year (24 hours × 365 days = 8,760 hours) and computes the shading impact on each PV module independently. This is the standard methodology used in bankable yield reports for project finance. SurgePV ships this engine on every paid plan."
  - q: "Is single-point or simplified shading good enough for residential design?"
    a: "For rough quote-stage estimates, yes. For real production design, no. Simplified shading misses inter-row, seasonal, and microclimate effects that drop residential yields by 3 to 8 percent in real installations. SurgePV's 8,760-hour module-level engine catches these on every project."
  - q: "What is the best solar shading analysis software in 2026?"
    a: "SurgePV is the most complete option, with 8,760-hour module-level shading on every paid plan, browser-based, included in the same project as the layout and proposal. HelioScope and PVsyst are also credible. Aurora ships full shading at the upper tier. For lender-grade bankable yield, all four are accepted by most project-finance teams."
  - q: "Do I need a drone for accurate shading analysis?"
    a: "No, in most cases. SurgePV's AI 3D roof modeling from satellite reaches LIDAR-grade accuracy within roughly 3 percent on most rooftops, which is sufficient for accurate shading simulation. Drone capture remains useful for sites with heavy obstructions or unusual geometry, and SurgePV supports drone-model import for those projects."
  - q: "How long does an 8,760-hour shading simulation take?"
    a: "On SurgePV, under 30 seconds for residential projects, under 2 minutes for C&I, under 5 minutes for utility-scale ground-mount. The cloud compute behind the engine is what makes browser-based bankable simulation practical."
  - q: "Do lenders accept browser-based shading analysis for bankable yield?"
    a: "Yes for most lenders. SurgePV's methodology mirrors PVsyst's 8,760-hour module-level approach. A small number of lenders still mandate a PVsyst-format report by name on first-of-its-kind projects, which can be produced in parallel without abandoning the browser workflow."
  - q: "How accurate is module-level shading versus string-level?"
    a: "Module-level shading catches the impact on individual modules, then propagates through the inverter MPPT logic to produce accurate AC yield. String-level shading averages across the string, which understates the impact when only part of the string is shaded. Module-level is the correct methodology for any project with non-uniform shading patterns."
---

Solar shading analysis software runs the hourly simulation that turns a layout into a bankable yield report. The methodology matters: 8,760-hour module-level shading is the industry standard accepted by lenders, while simplified shading models can mislead by 3 to 8 percent on residential and far more on complex C&I rooftops. This guide explains how shading analysis works in 2026 and which [solar design software](https://surgepv.com/) ships it well.

> **TL;DR**
> - 8,760-hour module-level shading is the bankable standard.
> - [SurgePV](https://surgepv.com/) ships this engine on every paid plan as part of its [solar shading analysis](https://surgepv.com/shadow-analysis) module.
> - HelioScope and PVsyst are also credible. Aurora ships it at the upper tier.
> - [Book a free SurgePV demo](https://surgepv.com/demo) and run the shading on a real project.

<div class="inline-cta">
<h3>See 8,760-hour module-level shading on your project in 30 seconds</h3>
<p>A SurgePV engineer runs the full simulation on one of your real projects in 20 minutes, including the bankable yield report.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What 8,760-Hour Module-Level Shading Means

A year has 8,760 hours. The simulation computes the sun position at every hour, projects shadows from every obstruction in the 3D model, and calculates the shading factor on each PV module independently. This module-level result then feeds the [MPPT](/glossary/mppt/) logic of each inverter, whether an [on-grid](/on-grid-inverter/) or [hybrid](/hybrid-inverter/) unit, producing accurate AC yield.

The methodology has three quality dimensions: hourly granularity (8,760 vs daily averages), per-module computation (vs string averaging), and 3D geometry accuracy. SurgePV ships full quality on every paid plan.

## Why Shading Matters for Bankable Yield

Inaccurate shading shifts yield by 3 to 8 percent on residential rooftops and 5 to 15 percent on complex C&I sites with inter-row or microclimate effects. On a 100 kW commercial system at $0.12/kWh, that is $1,800 to $9,000 per year of yield-prediction error. Lenders require methodology accepted by the project-finance community before funding, which is why [PV yield simulation software](/blog/pv-yield-simulation-software/) and shading analysis are usually evaluated together rather than as separate purchases.

## What to Look For in Solar Shading Analysis Software

1. **8,760-hour granularity**: not daily averages or sample hours
2. **Module-level computation**: not string-averaged shading factors
3. **3D obstruction modelling**: accurate satellite or LIDAR-derived geometry, comparable in precision to a professional site survey and land feasibility study
4. **Inter-row shading**: required for ground-mount and tracker projects
5. **[Soiling](/glossary/soiling/), snow, [albedo](/glossary/albedo/), [temperature coefficients](/glossary/temperature-coefficient/)**: bankable methodology
6. **[P50, P75, P90](/glossary/p50-p90/) outputs**: accepted by lenders
7. **Cloud compute speed**: practical in production workflow

SurgePV ships all seven on every paid plan.

## How SurgePV Runs Shading Analysis

**Step 1: AI 3D roof modeling.** Satellite imagery builds the site geometry in under 60 seconds, the same approach compared across tools in our [3D solar design software guide](/blog/3d-solar-design-software/). [AI 3D roof modeling](https://surgepv.com/3d-solar-roof-design) handles obstructions, ridges, setbacks.

**Step 2: Layout placement.** Manual or auto-design with [Clara AI](https://surgepv.com/clara-ai) drafts a module layout that respects shading priorities.

**Step 3: 8,760-hour simulation.** The [solar simulation software](https://surgepv.com/solar-simulation-software) engine runs the hourly computation in the browser, module by module. Our deep dive on [how the underlying simulation engine works](/blog/solar-simulation-software/) covers the full methodology.

**Step 4: Bankable yield output.** P50, P75, P90 reports export to PDF or stay inline in the [bankable yield report](https://surgepv.com/generation-financial-tool).

**Step 5: Proposal.** The [branded solar proposal](https://surgepv.com/solar-proposals) pulls shading-informed yield into the buyer-facing document, and teams that need a separate customer-facing quote often route the same numbers into [QuickEstimate's quotation system](https://quickestimate.co/features/quotation-system/).

## Solar Shading Analysis in Competing Tools

| Tool | Granularity | Module-level | All plans | Browser |
| --- | --- | --- | --- | --- |
| **SurgePV** | 8,760-hour | Yes | Yes | Yes |
| HelioScope | 8,760-hour | Mid + higher tier | No | Yes |
| PVsyst | 8,760-hour | Yes | n/a | No (Windows desktop) |
| Aurora Solar | 8,760-hour | Upper tier | No | Yes |
| OpenSolar | Simplified | No | n/a | Yes |
| Pylon | Limited | No | n/a | Yes |

## Solar Shading Software, Shading Tools, and PV Shading Analysis

Three terms circulate for this category and they are not quite interchangeable.

**Solar shading software** in the architectural world means something different from what solar designers mean. Architects use it for daylighting and facade shading devices, sizing louvres and overhangs to cut cooling load. If a search leads you to that category, it will not simulate array yield.

**A solar shading analysis tool** in the PV context does one job: quantify how much energy an obstruction costs the array across a full year. The minimum credible standard is 8,760 hourly steps at module level.

**Solar PV shading software** is the unambiguous term, and it is the one to use in an RFP. It rules out the architectural category and signals that you need per-module DC loss feeding a yield model, not a shadow animation.

The buying trap is that several tools render a convincing 3D shadow without simulating loss. A shadow you can watch move across the roof tells you nothing about annual kWh unless the platform is computing the DC loss on each module at each hour and passing it into the [yield simulation](/blog/pv-yield-simulation-software/). Ask any vendor to show the hourly loss table, not the animation.

## Why Shading Loss Is Not Proportional To Shaded Area

The single most common misconception in solar design is that shading 10% of an array costs 10% of its output. It does not, and the reason is electrical rather than optical.

Modules in a string are wired in series, so current is limited by the weakest module. A module that is partially shaded produces less current, and without mitigation it drags the entire string down to its level. Bypass diodes limit the damage by allowing current to route around an affected substring, but they operate at substring granularity, typically a third of the module. So shading a single cell can disable a third of that module's output, and depending on string topology the knock-on effect can be considerably larger.

This is why array-level or monthly-average shading models are not conservative approximations. They are structurally wrong. They compute an irradiance reduction and apply it proportionally, when the actual loss depends on which cells are shaded, at what hour, in which substring, on which string, and what mitigation electronics are present.

The practical consequences:

- **A chimney is worse than its shadow area suggests.** A narrow shadow crossing several modules in the same string does more damage than a wide shadow confined to one module.
- **String layout is a shading decision, not just a wiring decision.** Grouping modules that shade at the same time into the same string limits the loss to that string.
- **Module-level power electronics change the maths.** Optimisers and microinverters break the series constraint, which can recover a large share of shading loss on a cluttered roof. A tool that cannot model the difference cannot advise on whether the extra hardware pays.

Any credible answer to "what will this array produce" therefore requires simulation at module level, hour by hour, with the string topology and the mitigation electronics in the model.

## Direct, Diffuse And Why Latitude Changes The Answer

Shading analysis behaves differently at 52 degrees north than at 25 degrees north, and the difference is large enough to change design recommendations.

**Sun angle.** At high latitudes the winter sun sits very low, so shadows are long for most of the working day. An obstruction that is harmless in July can dominate December output. Because winter is also when consumption peaks in heating-dominated markets, the hours lost are the expensive ones.

**Diffuse fraction.** In cloudy maritime climates a large share of annual irradiance arrives as diffuse light rather than direct beam. Diffuse light is not blocked the same way, so a naive geometric shadow model overstates loss in those conditions. Conversely, in clear desert climates almost all irradiance is direct beam, so geometric shading is close to the full story and losses are correspondingly sharper.

**Seasonal concentration.** Where generation concentrates into a short summer season, the annual figure hides the fact that a shaded winter is close to no winter at all.

The upshot is that a shading model tuned for one climate will misstate another. Location-specific weather data with a proper direct and diffuse split is the minimum, and it is worth checking that a vendor's simulation uses it rather than a regional default.

We cover the markets where this matters most in dedicated guides: [Canada](/blog/solar-shading-analysis-software-canada/) for extreme winter sun angles, [Ireland](/blog/solar-shading-analysis-software-ireland/) for high-diffuse maritime climates, [Poland](/blog/solar-shading-analysis-software-poland/) for pricing shading under net billing, [Singapore](/blog/solar-shading-analysis-software-singapore/) for inter-building shading in dense high-rise, and the [UAE](/blog/solar-shading-analysis-software-uae/) and [Saudi Arabia](/blog/solar-shading-analysis-software-saudi-arabia/) for parapet self-shading compounded by desert soiling.

## Shading Versus Soiling: Two Losses, One Symptom

Both reduce output. They are not the same problem and conflating them produces bad recommendations.

| | Shading | Soiling |
| --- | --- | --- |
| Cause | Obstruction blocking irradiance | Dust, dirt, bird fouling on glass |
| Pattern | Predictable, geometric, repeats annually | Accumulates over time, resets on cleaning or rain |
| Electrical effect | Non-linear, substring-level | Broadly uniform across the module |
| Fix | Layout, string topology, optimisers, trimming | Cleaning schedule |
| Modelled as | Hourly geometric simulation | Loss factor with a cleaning cycle |

The distinction matters commercially. A customer reporting underperformance who has a soiling problem needs a cleaning contract. A customer with a shading problem needs hardware or layout changes, and cleaning will not help. A tool that folds both into a single loss percentage cannot tell you which conversation to have.

In arid, high-dust markets the two interact: partial soiling behaves somewhat like partial shading at cell level, and heavy uneven soiling can trigger the same substring effects. That is why the Gulf guides above treat them together rather than as separate line items.

## How To Validate A Vendor's Shading Claim In Ten Minutes

Every platform claims shading analysis. The claims are not equivalent. Five questions separate real simulation from a rendering.

1. **Show me the hourly loss table, not the animation.** A 3D shadow moving across a roof is a visualisation. Ask for per-module DC loss at each hour. If it does not exist, the tool is not simulating loss.
2. **What happens if I move one module into the chimney shadow?** The yield figure should change immediately and non-proportionally. If it changes by exactly the area fraction, the model is linear and therefore wrong.
3. **Does it model bypass diodes and string topology?** Ask them to re-run with two different string configurations on the same layout. Different answers mean the electrical model is real.
4. **Can it compare a string inverter against optimisers on this roof?** This is the question customers actually ask on cluttered roofs, and only a module-level model can answer it.
5. **Is the shading result what feeds the yield report?** In some stacks the shading tool and the yield engine are separate, and the number in the proposal comes from the second one with a generic loss assumption applied. Ask to see the chain.

A tool that answers all five is doing bankable shading analysis. A tool that answers two is producing a picture.

## Best Practices for Solar Shading Analysis

1. **Always use 8,760-hour granularity** for any project larger than a small residential roof
2. **Verify 3D geometry** against site photos for sites with complex obstructions
3. **Use module-level methodology** for any non-uniform shading patterns
4. **Include soiling and albedo** that match local climate
5. **Run the simulation early** to influence layout choices
6. **Export P50, P75, P90** for lender conversations
7. **Re-run after layout changes** rather than assume linear scaling

<div class="inline-cta">
<h3>Same engine PVsyst is known for, in the browser, on every plan</h3>
<p>SurgePV ships 8,760-hour module-level shading at $1,299 to $1,899 per user per year.</p>
<a href="https://surgepv.com/pricing" class="cta-btn" target="_blank" rel="noopener noreferrer">Compare Plans <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Annual billing · Cancel anytime · Includes Clara AI</p>
</div>

## Common Shading Analysis Mistakes

1. **Trusting simplified shading on C&I**. Under-predicts loss, over-promises yield.
2. **Skipping inter-row shading on ground-mount**. Trackers and fixed-tilt arrays need this.
3. **Outdated module-temperature coefficients**. Use manufacturer datasheet values.
4. **Ignoring near-field obstructions**. Trees grow, neighbouring buildings get added.
5. **Single-snapshot shadings without seasonality**. The sun moves; the year has 8,760 hours for a reason.

## Example: Residential Rooftop With a Chimney

A 9.6 kW residential rooftop with a chimney that shades the central module for 2 hours every winter morning.

- Single-point shading: predicts 12,800 kWh / year (over-predicts by 4 percent)
- 8,760-hour module-level (SurgePV): predicts 12,290 kWh / year (matches measured)
- Real-world measured first-year yield: 12,250 kWh / year

The 4 percent difference matters when financial modelling, IRR, and payback depend on accurate yield. SurgePV's engine catches this. Simplified shading does not.

## Who Should Choose Each Tool

- **Choose SurgePV** if you want 8,760-hour module-level shading on every plan, browser-based, in the same project as the design and proposal.
- **Choose HelioScope** if engineering-only and at the mid or higher tier.
- **Choose PVsyst** for lender-mandated PVsyst reports.
- **Choose Aurora upper tier** for US-residential.

For most installers and EPCs in 2026, SurgePV ships the same bankable methodology at the lowest realised total cost. Once shading is dialed in, the workflow typically moves to [solar string sizing software](/blog/solar-string-sizing-software/), then [auto-generated single line diagrams](/blog/solar-sld-software/), and finally [solar takeoff software](/blog/solar-takeoff-software/) for procurement, or, once the module-level numbers are locked, [talk to a Qbits engineer](/contact-us/) about matching the inverter MPPT count to the string design.

<div class="inline-cta">
<h3>Ready to run real bankable shading on your projects?</h3>
<p>SurgePV combines AI 3D roof modeling, 8,760-hour module-level shading, bankable yield, financial modelling, and white-label proposals in one platform.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://surgepv.com/" target="_blank" rel="noopener noreferrer">explore the platform</a></p>
</div>
