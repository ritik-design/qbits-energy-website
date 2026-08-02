---
title: "Solar Shading Analysis Software Ireland: 2026 Guide"
excerpt: "More than half of Ireland's annual irradiance arrives as diffuse light, so a shading model built on direct beam geometry overstates the loss. Irish shading analysis needs a sky model, not a shadow diagram."
description: "Solar shading analysis software Ireland 2026: why high diffuse fraction changes shading loss, 53 degrees north winter sun, chimney and dormer obstructions, and pricing loss against the Clean Export Guarantee."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "10 min"
image: "/blog-images/solar-shading-analysis-software-ireland.svg"
author: "Keyur Rakholiya"
keywords:
  - solar shading analysis software ireland
  - shading analysis ireland
  - irish solar shading software
  - solar shade analysis ireland
  - pv shading software ireland
  - diffuse shading model ireland
faqs:
  - q: "Why does diffuse light matter so much for Irish shading analysis?"
    a: "Because it is the majority of the resource. In a cloudy maritime climate a large share of annual irradiance arrives as diffuse light scattered across the whole sky dome rather than as a direct beam from the sun's position. Geometric shading tools trace a shadow from the sun's position and treat anything inside it as lost, which is roughly correct in a desert and materially wrong in Ireland. A module in geometric shadow on an overcast Irish afternoon is still receiving most of the diffuse light available to an unshaded module. Tools that separate direct from diffuse produce noticeably lower and more accurate Irish shading losses."
  - q: "Does that mean shading is not a problem in Ireland?"
    a: "No, it means the loss has a different shape. Diffuse light softens the penalty on overcast hours, but Ireland still gets clear days, and those clear days carry a disproportionate share of annual generation. Shading on a bright June afternoon costs real energy. What changes is that an obstruction's annual cost is lower than pure geometry suggests, while its cost during the sunniest hours is undiminished. You need both numbers, not one."
  - q: "What obstructions actually cause Irish rooftop shading?"
    a: "Chimneys and dormers, overwhelmingly. Irish housing stock has more chimney stacks per roof than most newer markets, they are often tall, and they frequently sit on or near the south-facing slope. After that come neighbouring gable ends on terraced and semi-detached rows, mature garden trees, and hedgerows on rural sites. Very few Irish residential projects are shaded by anything as simple as a single clean obstruction, which is why manual estimation performs badly here."
  - q: "How does the Clean Export Guarantee change what shading costs?"
    a: "It creates an asymmetry. A shaded kilowatt-hour that would have been consumed in the house costs full retail, which in Ireland is high by European standards. A shaded kilowatt-hour that would have been exported costs only the Clean Export Guarantee rate, which is meaningfully lower and varies by supplier. Because Irish domestic export rates sit well below import rates, shading that hits midday surplus is comparatively cheap and shading that hits morning or evening demand is expensive. Only an hourly model that also knows the household load profile can tell you which one you have."
  - q: "Is a solstice shadow diagram good enough for Irish design?"
    a: "No. A solstice diagram shows a single day at a single sun position and says nothing about how much of the year that condition applies, nothing about diffuse light, and nothing about which strings are affected. It is a sales illustration. Irish design needs 8,760 hourly steps at module level, because the answer depends on accumulating many partially shaded hours rather than on one worst case."
  - q: "Which software handles Irish shading analysis best?"
    a: "SurgePV, because it runs 8,760-hour module-level shading with a separated direct and diffuse sky model and prices the result against Irish import and export rates, at $1,299 to $1,899 per user per year. PVsyst remains the reference where a lender or a large commercial client names it. HelioScope is credible for commercial rooftops. Avoid anything that reports a single annual shading percentage from a geometric shadow trace, because in Ireland that method overstates the loss."
  - q: "Do optimisers pay on shaded Irish roofs?"
    a: "More often than on comparable roofs in sunnier markets, because Irish roofs tend to be small, complex and multi-faceted, and because chimney obstructions commonly affect several modules across strings. That said, it remains a calculation rather than a rule. The lower absolute yield in Ireland means the energy recovered by module-level power electronics is worth less than the same percentage recovery in Spain, which pushes back against the hardware cost. Simulate the same roof with and without optimisers and compare."
featured: false
---

Irish solar shading analysis has a counterintuitive property: most tools overstate the loss. In a cloudy maritime climate a large share of annual irradiance arrives as diffuse light scattered across the whole sky, not as a direct beam from the sun's position. A shading model that traces a geometric shadow and writes off everything inside it is describing a desert. On an overcast Dublin afternoon a module sitting in geometric shadow is still collecting most of the light an unshaded module collects. This guide covers what shading analysis has to do differently in Ireland, and which tools do it properly.

> **TL;DR**
> - Diffuse light dominates the Irish annual resource, so direct-beam geometric shading models overstate losses.
> - The correct engine separates direct from diffuse and shades each differently.
> - Ireland sits above 51 degrees north, so winter sun is very low and shadows run long even when they cost little.
> - Chimneys and dormers on older housing stock are the dominant residential obstruction, and they are rarely simple.
> - Export under the Clean Export Guarantee is worth well below retail, so shading that hits self-consumption costs far more than shading that hits surplus.
> - [SurgePV](https://surgepv.com/) runs 8,760-hour module-level shading with a split sky model at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** Solar shading analysis software for Irish projects has to model diffuse and direct irradiance separately, run 8,760 hourly steps at module level, and price the resulting loss against the gap between Irish retail rates and Clean Export Guarantee rates. A single annual shading percentage produced by a geometric shadow trace is the wrong output twice over: wrong in magnitude, because it ignores diffuse, and wrong in usefulness, because it does not say which hours were hit.

The general methodology is covered in our [solar shading analysis software](/blog/solar-shading-analysis-software/) guide. This page covers what changes in Ireland. For the wider platform comparison see [best solar design software Ireland](/blog/solar-design-software-ireland/).

<div class="inline-cta">
<h3>Run a real Irish roof with a split sky model</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour module-level shading with direct and diffuse handled separately, and shows you how much the geometric-only figure overstates it.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Why Geometric Shading Models Overstate Irish Losses

A shading engine has to answer two separate questions for every module in every hour. Is the direct beam from the sun's current position blocked? And how much of the sky dome, from which diffuse light arrives, is obscured?

In a clear-sky climate the first question dominates, because most of the energy is in the beam. In Ireland it does not. Diffuse light arrives from the whole visible sky, so an obstruction that completely blocks the sun still leaves the module receiving light from every part of the sky the obstruction does not cover.

The practical consequence is a systematic bias. A tool that answers only the first question reports a shading loss that can be substantially higher than the real one, and the error is largest exactly where Irish designers need accuracy: modest obstructions on modest roofs, where the difference between a 9% loss and a 6% loss decides whether the project is sold.

> **A note on direction of error.** Overstating shading loss is not the safe conservative choice people assume. It kills viable projects, it makes your yield estimates look pessimistic against a competitor using a better engine, and when the system overperforms the customer concludes your numbers are guesswork. Accuracy is the goal in both directions.

## Latitude: Long Shadows That Often Cost Little

Ireland sits above 51 degrees north, with Dublin near 53. Shadow length scales inversely with the tangent of solar altitude, so Irish winter shadows are long.

| Solar altitude | Shadow length from a 2 m chimney |
| --- | --- |
| 55 degrees, Irish summer noon | 1.4 m |
| 40 degrees | 2.4 m |
| 25 degrees | 4.3 m |
| 15 degrees, Irish midwinter noon | 7.5 m |
| 10 degrees | 11.3 m |

Here is where Ireland diverges from Canada, which has similar geometry. Those long Irish winter shadows fall across hours that are both dim and heavily diffuse, so the energy behind them is small and the shadow itself is soft. The same table in a continental climate with clear cold winters describes a serious loss. In Ireland it mostly describes a dramatic-looking diagram attached to very few kilowatt-hours.

That is why the annual weighting matters more than the worst-case geometry. The hours that carry Irish generation are bright spring and summer days, and shading analysis should be judged on how well it handles those.

## Chimneys, Dormers And Why Manual Estimation Fails

Irish residential roofs are awkward. Older housing stock carries more chimney stacks than newer markets, those stacks are often tall enough to shade a meaningful area, and terraced and semi-detached rows put neighbouring gable ends close to the array. Add dormers, hips, valleys and mature garden trees and very few Irish roofs present a single clean obstruction.

Manual estimation handles one obstruction acceptably and multiple interacting obstructions badly, because shadows overlap and move at different rates through the day. The failure is not a small percentage error. It is that the installer picks a string layout that puts modules affected by different obstructions on the same string, and the series constraint then propagates each shadow further than it needs to go.

This is the argument for module-level modelling in Ireland, and it is an argument about layout rather than about reporting. The point of knowing which modules are shaded in which hours is to wire the array so that the shadows do not compound. Our [3D solar design software](/blog/3d-solar-design-software/) guide covers the modelling side of this.

## Pricing The Loss Against The Clean Export Guarantee

Irish retail electricity is expensive and Irish export compensation is not. Under the Clean Export Guarantee, exported units are paid at a supplier-set rate that sits well below the import price a household pays.

That gap creates a strong asymmetry in what shading costs:

- A shaded kilowatt-hour that **would have been self-consumed** costs full retail. This is the expensive case.
- A shaded kilowatt-hour that **would have been exported** costs only the export rate. This is comparatively cheap.

So the financial cost of an obstruction depends on when its shadow falls relative to household demand. A chimney that shades the array between eleven and two, when a typical unoccupied house is exporting almost everything, destroys cheap kilowatt-hours. A tree that shades the array from four in the afternoon, as the household comes home and demand rises, destroys expensive ones.

Two obstructions with identical annual shading percentages can therefore differ by a factor of two or more in what they actually cost. No geometric tool can distinguish them. It requires an hourly simulation that carries a load profile alongside the generation profile, which is also the calculation that decides whether battery storage is worth adding. Our [best solar design software Ireland](/blog/solar-design-software-ireland/) guide covers the tariff and grant side in full.

<div class="inline-cta">
<h3>Price shading against Irish import and export rates</h3>
<p>SurgePV runs the shaded and unshaded array against an hourly load profile, so you see whether an obstruction is destroying retail-value units or export-value units before you quote a mitigation.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Worked Example: Chimney On A Dublin Semi

An illustrative calculation showing the gap between modelling methods, not a specific customer project. Inputs: 4 kW array on a south-west facing slope, a single 1.8 m chimney stack on the same slope, and a household that exports most midday generation.

| Model | Reported annual shading loss | Comment |
| --- | --- | --- |
| Geometric direct-beam only | 11.2% | Treats every shadowed hour as fully lost |
| Split direct and diffuse | 7.1% | Credits diffuse light reaching shaded modules |
| Split, plus optimised string layout | 5.4% | Keeps chimney-affected modules off shared strings |
| Split, plus module-level power electronics | 4.0% | Breaks the series constraint entirely |

The first row is what a shadow-trace tool reports and it is wrong by a wide margin. The second row is the honest baseline. The third row costs nothing but attention, and it is the single highest-return change on this roof. The fourth row costs hardware, and on a 4 kW Irish array the extra 1.4 percentage points recovered has to be weighed against that cost rather than assumed to justify it.

The lesson for quoting is that two of the four rows are free. Choosing a better engine and wiring the array with the shadow map in front of you recovers more than half the apparent loss before anyone sells a single optimiser.

## Who Should Choose What

- **Choose SurgePV** if you want 8,760-hour module-level shading with a separated sky model and Irish tariff pricing in one tool.
- **Choose PVsyst** where a lender or a large commercial client names it, and for detailed research-grade sensitivity work.
- **Choose HelioScope** for commercial rooftop engineering where the customer document is produced elsewhere.
- **Avoid pure geometric shadow tools.** In Ireland they overstate losses and cost you projects that were viable.

<div class="inline-cta">
<h3>Shading analysis built for a cloudy climate</h3>
<p>Split direct and diffuse sky modelling, 8,760-hour module-level shading, Irish import and export rate libraries and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/ireland" target="_blank" rel="noopener noreferrer">Ireland compliance library</a></p>
</div>

## The Bottom Line

Irish shading analysis is a sky-model problem before it is a geometry problem.

- **Use an engine that splits direct and diffuse.** Geometric-only tools systematically overstate Irish losses and kill viable projects.
- **Fix the string layout before selling hardware.** On complex Irish roofs, wiring around the shadow map is free and recovers more than most people expect.
- **Price the loss against the export gap.** Shading that hits self-consumed hours costs several times more than shading that hits exported surplus.
- **Run a real roof before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring an Irish address, or reach the Qbits team [here](/contact-us/) for inverter and optimiser specification against the finished design.
