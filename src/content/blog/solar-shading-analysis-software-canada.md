---
title: "Solar Shading Analysis Software Canada: 2026 Guide"
excerpt: "At Canadian latitudes the December sun sits under 20 degrees, so shadows run three times longer than in June. Shading analysis software has to model winter, not annual averages."
description: "Solar shading analysis software Canada 2026: winter sun angles, snow cover, inter-row spacing on ground mount, and why provincial net metering changes what a shading loss costs."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "10 min"
image: "/blog-images/solar-shading-analysis-software-canada.svg"
author: "Keyur Rakholiya"
keywords:
  - solar shading analysis software canada
  - shading analysis canada
  - canadian solar shading software
  - winter shading solar canada
  - solar shade analysis canada
  - pv shading software canada
faqs:
  - q: "Why does shading analysis matter more in Canada than in southern markets?"
    a: "Because of solar altitude. At Canadian latitudes the sun sits below roughly 20 degrees at solar noon in late December, compared with 50 degrees or more in June. Shadow length scales inversely with the tangent of that angle, so a winter shadow can run three times the length of its summer equivalent from the same obstruction. An annual-average shading model spreads that concentrated winter loss across twelve months and understates it badly in the months when it actually occurs."
  - q: "Does snow cover need to be in the shading model?"
    a: "It needs to be in the loss chain, though it is technically a separate loss from geometric shading. Snow sitting on modules blocks irradiance uniformly rather than casting a geometric shadow, so it behaves more like heavy soiling than like an obstruction. What matters for design is that snow losses concentrate in the same months as the worst shading losses, so the two compound. A tool that models one and ignores the other will overstate winter output."
  - q: "How does provincial net metering change what a shading loss is worth?"
    a: "Substantially, because the value of a lost kilowatt-hour depends on what that kilowatt-hour would have earned. In Ontario at roughly $0.14 to $0.15 retail credit, a shaded kWh in shoulder season costs close to full retail. In Manitoba at $0.04390 per kWh net billing, a shaded kWh that would have been exported costs about a third as much, while a shaded kWh that would have been self-consumed still costs full retail. So the same shading loss has different financial weight depending on province and on when it occurs."
  - q: "What inter-row spacing should Canadian ground-mount use?"
    a: "There is no single number, because the correct spacing is an economic optimisation rather than a geometric rule. The traditional approach sizes rows to avoid shading at winter solstice, which at Canadian latitudes demands very wide spacing and wastes land. The better method simulates several spacings across all 8,760 hours, prices the resulting energy at the provincial export and import rates, and picks the spacing where marginal land cost exceeds marginal energy value. That answer differs between Alberta and Ontario on identical terrain."
  - q: "Is satellite-derived 3D accurate enough for Canadian shading analysis?"
    a: "For most rooftops, yes. AI 3D roof modelling from high-resolution satellite imagery benchmarks within roughly 3 percent of LIDAR ground truth on residential and small commercial roofs, which is sufficient for module-level shading. The cases that still justify drone capture are heavily obstructed sites, complex industrial roofs with extensive plant, and projects where an as-built model is contractually required."
  - q: "Which software handles Canadian shading analysis best?"
    a: "SurgePV, because it runs 8,760-hour module-level shading on every plan alongside the provincial net metering libraries needed to price the loss correctly, at $1,299 to $1,899 per user per year. PVsyst remains the bankable reference where a lender names it and handles high-latitude geometry well. HelioScope is credible for commercial rooftops. Tools that model shading at array level or on monthly averages should not be used for Canadian design."
  - q: "Does shading change the case for optimisers in Canada?"
    a: "It strengthens it on obstructed roofs, and the effect is seasonal. Because winter shadows are long and low, a single obstruction can affect several modules across multiple strings for much of the day in December and January. Module-level power electronics break the series constraint that causes that cascade. Whether the extra hardware pays is a calculation rather than a rule, and it requires a tool that can simulate the same roof with and without optimisers."
featured: false
---

Canadian solar [shading analysis](/glossary/shading-analysis/) is a winter problem wearing an annual disguise. At Canadian latitudes the sun sits below roughly 20 degrees at solar noon in late December, against 50 degrees or more in June. Because shadow length scales inversely with the tangent of solar altitude, the same chimney that casts a 2 metre shadow in summer casts something closer to 6 metres in midwinter. Any model that reports an annual shading percentage averages that concentrated loss across twelve months and hides it. This guide covers what [shading analysis](/glossary/shading-analysis/) has to do differently in [Canada](/blog/solar-software-canada/), and which tools do it.

> **TL;DR**
> - December solar noon altitude at Canadian latitudes runs under 20 degrees, producing shadows roughly three times summer length from the same obstruction.
> - Annual-average shading figures conceal losses that concentrate almost entirely into four months.
> - Snow losses land in the same months and compound with shading, so both belong in the loss chain.
> - The financial cost of a shaded kWh varies by province, from about $0.04390 in Manitoba to roughly $0.145 in Ontario.
> - Inter-row spacing on ground mount is an economic optimisation, not a winter-solstice geometry rule.
> - [SurgePV](https://surgepv.com/) runs 8,760-hour module-level shading with provincial libraries at $1,299 to $1,899 per user per year. [Book a free demo](https://surgepv.com/demo).

**Short version.** Solar [shading analysis software](https://heavendesigns.in/blog/solar-shading-analysis-software/) for Canadian projects has to run 8,760 hourly steps at module level, because Canadian shading losses concentrate into the winter months when the sun is low and consumption is high. An annual percentage is not a useful output here. The tool also has to price the loss against the correct provincial [net metering](/glossary/net-metering/) rule, since a shaded kilowatt-hour is worth roughly three times more in Ontario than in Manitoba.

The general methodology is covered in our [solar shading analysis software](/blog/solar-shading-analysis-software/) guide. This page covers what changes at Canadian latitudes. For the wider platform comparison see [best solar design software Canada](/blog/solar-design-software-canada/).

<div class="inline-cta">
<h3>Run winter shading on a real Canadian roof</h3>
<p>A SurgePV engineer takes one of your addresses, runs 8,760-hour module-level shading, and shows the December and January losses separately from the annual figure.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## The Geometry: Why Canadian Shadows Are Different

Shadow length from an obstruction of height h is approximately h divided by the tangent of the solar altitude angle. That relationship is not linear, and it turns punishing at low angles.

| Solar altitude | Shadow length from a 2 m obstruction |
| --- | --- |
| 60 degrees, southern summer noon | 1.2 m |
| 45 degrees | 2.0 m |
| 30 degrees | 3.5 m |
| 20 degrees, Canadian midwinter noon | 5.5 m |
| 15 degrees | 7.5 m |
| 10 degrees, winter mid-morning | 11.3 m |

The bottom rows are the Canadian design problem. An obstruction that is irrelevant in July governs the array for much of the winter day, and the hours either side of noon are worse than noon itself.

> **What most Canadian shading reports get wrong.** They present one annual shading loss percentage. On a roof with a significant south-side obstruction, that single figure might read 6%, while the actual profile is close to 1% from May to August and above 20% from November to February. The customer sees 6% and budgets for a smooth year. The system delivers a winter that looks broken.

The correct output is monthly. A shading report that cannot break loss down by month is not describing a Canadian installation.

## Snow, And Why It Compounds

Snow on modules is not geometric shading. It blocks irradiance broadly across the module surface rather than casting a shadow from an obstruction, which makes it behave more like heavy soiling in the electrical model.

What matters for design is timing. Snow losses and low-sun shading losses land in the same months, so they compound rather than alternate. A tool that models geometric shading well and treats snow as a flat annual derate will produce a plausible annual number and a wrong winter profile.

Two design responses follow. Steeper tilt sheds snow faster and also improves winter sun capture, which is why Canadian tilt optimisation often lands steeper than a pure annual-yield calculation suggests. And where the array is already shaded in winter, the marginal value of clearing snow falls, because the modules would be underperforming regardless.

## Pricing The Loss: Province Decides What Shading Costs

A shading loss is only as expensive as the energy it destroys, and Canadian export rates vary by more than three to one.

| Province | Export credit | What a shaded exported kWh costs |
| --- | --- | --- |
| Ontario | Retail, roughly $0.145 | High |
| BC Hydro | 10 cents per kWh from July 2026 | Moderate |
| Saskatchewan | 7.5 cents to March 2029 | Moderate |
| Manitoba | $0.04390 net billing | Low |
| Alberta | Retail below 150 kW, monthly settlement | High, but no seasonal carry |

There is a subtlety worth carrying into customer conversations. A shaded kilowatt-hour that would have been self-consumed always costs full retail, regardless of province. A shaded kilowatt-hour that would have been exported costs only the export rate. So in Manitoba, shading that hits midday surplus is relatively cheap, while shading that hits morning or evening on-site demand is expensive. In Ontario the two converge.

That means the same physical obstruction has a different remediation budget depending on province and on which hours it affects. Tree trimming that pays in Ontario may not pay in Manitoba. Only an hourly model that knows the tariff can tell you which. Our [best solar design software Canada](/blog/solar-design-software-canada/) guide covers the provincial libraries in full.

## Inter-Row Spacing On Canadian Ground Mount

The traditional rule sizes row spacing to avoid shading at winter solstice. At Canadian latitudes that demands very wide rows and wastes a great deal of land, and on the Prairies where ground-mount is common the land is the project.

The better approach treats spacing as an optimisation. Simulate three or four candidate spacings across all 8,760 hours, price the resulting energy at the actual provincial rates, and compare marginal land and racking cost against marginal energy value. Accepting some winter-morning inter-row shading is frequently the correct answer, because those hours are low-value and the land saving is real.

That calculation cannot be done with a geometric rule or a solstice diagram. It needs a simulation engine and a tariff model in the same tool. Our [PV yield simulation software](/blog/pv-yield-simulation-software/) guide covers the underlying methodology.

<div class="inline-cta">
<h3>Optimise row spacing against the provincial tariff</h3>
<p>SurgePV simulates candidate spacings across 8,760 hours and prices the output at your province's actual export and import rates, so the spacing decision is economic rather than geometric.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Worked Example: Chimney Shadow On A Toronto Rooftop

An illustrative calculation showing why the monthly profile matters, not a specific customer project. Inputs: 8 kW array, 1,150 kWh per kW specific yield, single 2 m chimney on the south slope, Ontario retail credit at $0.145.

| Month | Unshaded output | With chimney shading | Loss | Loss value at $0.145 |
| --- | --- | --- | --- | --- |
| June | 1,150 kWh | 1,139 kWh | 1% | $2 |
| September | 820 kWh | 779 kWh | 5% | $6 |
| December | 300 kWh | 231 kWh | 23% | $10 |
| January | 340 kWh | 269 kWh | 21% | $10 |
| Annual | 9,200 kWh | 8,694 kWh | 5.5% | $73 |

The annual figure reads 5.5%, which sounds tolerable. The December figure is 23%. A customer who was told "about 5%" and then watches a December bill that barely moves has been misinformed, even though the annual number was accurate.

The second insight is the remediation maths. At $73 a year of lost value, trimming or relocating around the chimney has a small budget in Ontario. In Manitoba the same physical loss would be worth substantially less again. The honest recommendation is often to accept the shading and set expectations, rather than to sell a mitigation that does not pay.

## Who Should Choose What

- **Choose SurgePV** if you want 8,760-hour module-level shading with provincial tariff libraries in the same tool, so losses are priced as well as computed.
- **Choose PVsyst** where a lender names it, and for high-latitude ground-mount where its geometry handling is well trusted.
- **Choose HelioScope** for commercial rooftop engineering where someone else builds the customer document.
- **Avoid any tool that reports only an annual shading percentage.** In Canada that number conceals the months that matter.

<div class="inline-cta">
<h3>Monthly shading profiles priced against your province</h3>
<p>8,760-hour module-level shading, snow and soiling in the same loss chain, provincial net metering libraries and white-label proposals from $1,299 per user per year.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://www.surgepv.com/solar-compliance/canada" target="_blank" rel="noopener noreferrer">Canada compliance library</a></p>
</div>

## The Bottom Line

Canadian shading analysis is about December, and the annual average is the wrong unit of measurement.

- **Report shading monthly, not annually.** A 5% annual loss can be a 23% December loss, and the customer experiences the second one.
- **Price the loss against the province.** A shaded kWh is worth roughly three times more in Ontario than in Manitoba, and that decides whether mitigation pays.
- **Run a real roof before deciding.** [Book a free SurgePV demo](https://surgepv.com/demo) and bring a Canadian address, or reach the Qbits team [here](/contact-us/) for inverter and optimiser specification against the finished design.
