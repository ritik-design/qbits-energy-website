---
title: "Energy Toolbase Review 2026: Storage Economics Modelling, Assessed"
excerpt: "An honest Energy Toolbase review for 2026. Published pricing, why its tariff and storage dispatch modelling is genuinely strong, and where it stops."
description: "Energy Toolbase review 2026: ETB Developer pricing from $299 per user per month, a 120,000-plus utility rate database, storage dispatch economics, real limitations, and the alternatives worth testing."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/energy-toolbase-review.svg"
author: "Akash Hirapara"
keywords:
  - energy toolbase review
  - energy toolbase pricing
  - etb developer review
  - energy toolbase vs aurora
  - storage economics software
  - energy toolbase alternative
faqs:
  - q: "What is Energy Toolbase actually for?"
    a: "Energy Toolbase is economic modelling and proposal software for solar and energy storage projects, not a 3D array design platform. Its core product, ETB Developer, takes a load profile and a utility tariff and works out what a solar plus storage system saves. The company states its rate database tracks more than 120,000 verified utility rates. If your hard problem is proving savings under a complex commercial tariff, this is the tool. If your hard problem is laying modules on a roof, it is not."
  - q: "How much does Energy Toolbase cost in 2026?"
    a: "Energy Toolbase publishes ETB Developer pricing on its own site. The Individual plan is listed at $299 per user per month billed annually for one user, capped at 10 solar and storage proposals. The Business plan is listed at $333 per user per month billed annually and includes five users, unlimited proposals, custom tariff editing, and white-labelled proposals. Energy Toolbase notes that Business tier pricing is subject to change based on customer requirements or market conditions, and ETB Consulting is quoted custom."
  - q: "Is Energy Toolbase good at solar design?"
    a: "Design is not what it sells. ETB Developer is built around financial modelling and proposals, and Energy Toolbase describes design coverage through third-party PV layout tool integration on the Business tier rather than through a native 3D modelling engine. That is a deliberate scope decision, not a defect. Teams that need LIDAR roof capture, obstruction modelling, and module-level shading generally run Energy Toolbase alongside a design tool, or pick a platform that does both."
  - q: "What is Energy Toolbase genuinely best at?"
    a: "Utility tariff depth and storage dispatch economics. It models time-of-use rates, tiered rates, real-time pricing, and demand ratchets, and it maintains net metering variants including NEM, VNEM, and NEMA. Its storage simulations dispatch a battery against a real load profile to estimate demand charge reduction, time-of-use arbitrage, and grid programme revenue. For a commercial and industrial proposal where most of the savings come from demand charges, that modelling is the whole argument."
  - q: "Is Energy Toolbase worth it for residential solar?"
    a: "Usually not on its own. Residential payback in most markets is a simpler calculation than a commercial demand-charge structure, so you are paying for tariff depth you will not exercise. At $299 per user per month on the Individual plan with a 10-proposal cap, a residential seller quoting dozens of homes a month will hit the cap or the cost ceiling quickly. Residential teams are usually better served by a platform that bundles design and proposals in one seat."
  - q: "How does Energy Toolbase compare to Aurora Solar and HelioScope?"
    a: "They solve different halves of the job. Aurora is strongest at US residential remote roof assessment and the customer-facing sales close. HelioScope is strongest at commercial array layout and yield reporting. Energy Toolbase is strongest at the money: tariffs, demand charges, and battery dispatch. Comparing them on a single feature list is misleading, because a C&I storage team often needs a layout tool and an economics tool, and Energy Toolbase is the economics half."
  - q: "Does Energy Toolbase work outside the United States?"
    a: "Energy Toolbase markets a global utility rate library, and the Business tier allows custom tariff editing, so a determined user can build a tariff that does not ship in the database. The practical caveat is that its rate depth, net metering programme coverage, and incentive library are strongest where its customers are, which is the United States. Before buying for a non-US market, ask the vendor to load your actual utility tariff and your actual incentive scheme during the trial, and check the result against your own spreadsheet."
  - q: "What is the best Energy Toolbase alternative?"
    a: "It depends which half you need. If you want design and proposals and tariff modelling in one licence, SurgePV runs $1,299 to $1,899 per user per year depending on team size and covers multiple markets rather than one. If you need array layout and yield for large commercial roofs, HelioScope is the better engineering pairing. If your problem is genuinely only complex C&I tariff and storage dispatch economics, the honest answer is that Energy Toolbase is hard to replace, and you should keep it."
featured: false
---

Most solar software arguments are about geometry. Whose roof model is more accurate, whose shading engine is faster, whose 3D view looks better in a sales meeting. Energy Toolbase sits outside that argument almost entirely, and that is the single most useful thing to understand before you evaluate it. It is an economics platform. It exists to answer the question of what a solar plus storage system is worth under a specific utility tariff, on a specific load profile, with a specific battery dispatch strategy. This review covers what Energy Toolbase costs according to its own published pricing, where its modelling is genuinely ahead of the field, where its scope stops, and who should buy it. We have judged it against what it claims to be, not against a design platform it never set out to become.

> **TL;DR**
> - Energy Toolbase publishes ETB Developer pricing: $299 per user per month billed annually on the Individual plan, and $333 per user per month billed annually on the Business plan, which includes five users.
> - The Individual plan is capped at 10 solar and storage proposals. Business is unlimited and adds custom tariff editing and white-labelled proposals.
> - Its real strength is economic modelling: a rate database the company states tracks more than 120,000 verified utility rates, plus demand charge, time-of-use, and battery dispatch simulation.
> - It is not a 3D array design platform, and does not present itself as one. Layout comes through third-party design tool integration.
> - For a commercial and industrial storage proposal it is often the right tool. As a general design platform it is the wrong one.

**Short version.** Energy Toolbase is solar and storage economic modelling software, priced from $299 per user per month billed annually. It is genuinely strong at complex US commercial utility tariffs, demand charge analysis, and battery dispatch economics, which is exactly what a C&I storage proposal turns on. It is not a design tool, its coverage is deepest in the United States, and its scope is narrower than a full design platform.

If you are earlier in the shortlist and still comparing whole categories, the [solar design software pricing comparison](/blog/solar-design-software-pricing/) puts annual costs side by side, and the [solar plus storage design software guide](/blog/solar-plus-storage-design-software/) covers which tools model batteries properly at all.

## What Energy Toolbase Is

Energy Toolbase is a four-part platform. ETB Developer is the modelling and proposal product most buyers mean when they say Energy Toolbase. ETB Controller is the software layer that runs dispatch on deployed storage assets. ETB Monitor handles real-time monitoring of live solar and storage systems. ETB Consulting is a paid services arm for tariff optimisation, sizing, and financial analysis.

That structure tells you what the company is. It follows a storage project from the savings model at proposal stage through to the control logic that actually captures those savings on site. Very few software vendors in this market own both ends of that. It is a coherent product strategy rather than a feature pile.

ETB Developer itself takes three inputs: an interval load profile, a utility tariff, and a proposed system. It returns a bill-before and bill-after comparison, a cash flow across the deal structure, and a customer-facing proposal. Energy Toolbase states that more than 3 million proposals have been generated on the platform.

## Energy Toolbase Pricing in 2026

Energy Toolbase publishes ETB Developer pricing on its own pricing page, which is more transparency than several competitors offer.

| Plan | Published price | Users | Notable inclusions |
| --- | --- | --- | --- |
| ETB Developer Individual | $299 / user / month, billed annually | 1 | Up to 10 solar and storage proposals, Acumen AI simulations, global utility rate library, 50-plus net metering programmes, 200-plus incentive and rebate programmes |
| ETB Developer Business | $333 / user / month, billed annually | 5 included | Everything in Individual plus unlimited proposals, custom utility tariff editing, white-labelled proposals, third-party PV layout tool integration, Green Button usage data import |
| ETB Consulting | Not published | n/a | Tariff optimisation, sizing, financial analysis, demand response revenue modelling |
| SurgePV Individual | $1,899 / user / yr | 1 | Design, shading, financial modelling, proposals in one licence |
| SurgePV 3-User Team | $1,499 / user / yr | up to 3 | Same |
| SurgePV 5-User Team | $1,299 / user / yr | up to 5 | Same |

Two things about that table are worth pausing on.

First, Energy Toolbase notes that Business tier pricing is subject to change based on customer requirements or market conditions. Treat the listed figure as a starting point and get a written quote for your seat count.

Second, the annual arithmetic is blunt. The Individual plan at $299 per month is roughly $3,588 per user per year. That is a serious line item for a single seat, and it buys economics rather than design. Anyone comparing it against a design platform on price alone is comparing two things that do different jobs.

The 10-proposal cap on the Individual plan is the detail that catches people out. It is fine for a consultant producing considered commercial models. It is not fine for anyone running proposal volume, which is what the Business tier exists for.

<div class="inline-cta">
<h3>Compare an economics tool against an all-in-one on your own project</h3>
<p>Bring a real commercial job with its tariff and load profile. A SurgePV engineer builds the design, the shading, and the financial model in one session so you can see what sits in a single licence.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Where Energy Toolbase Is Genuinely Strong

This is the part of the review that matters most, because the strengths here are real and specific rather than marketing gloss.

**The utility rate database.** Energy Toolbase states it tracks more than 120,000 verified utility rates, with hundreds of rates updated and added weekly, maintained by an in-house rates team rather than scraped and left to rot. Anyone who has tried to keep a tariff library current knows why this is hard. Rates change, ratchets change, riders get added, and a stale tariff quietly makes every proposal wrong. Paying someone else to own that problem is a legitimate reason to buy software.

**Demand charge modelling.** On a commercial building, demand charges are frequently a larger share of the bill than energy charges, and they are the part solar alone barely touches. Energy Toolbase models them properly, including ratchets, which are the provision that makes a single bad peak expensive for the following eleven months. A model that ignores ratchets will overstate savings, and plenty of spreadsheets do exactly that.

**Time-of-use and rate structure coverage.** The platform handles time-of-use, tiered rates, real-time pricing, and demand ratchets, and covers net metering variants including NEM, VNEM, and NEMA. Virtual net metering in particular is a structure that design-led tools rarely surface as a first-class input, so it is worth testing explicitly in any trial.

**Storage dispatch economics.** This is the flagship capability. Energy Toolbase simulates how a battery would actually be dispatched against the load profile and the tariff, using what it describes as digital twin algorithms, and stacks the value streams: peak shaving, time-of-use arbitrage, demand response participation, and grid programme revenue. That value stacking is the difference between a storage project that pencils and one that does not.

**The proposal is credible to a commercial buyer.** A C&I customer's finance team will interrogate the savings number. An output that shows the tariff, the load profile, the dispatch, and the resulting bill delta survives that interrogation better than a savings figure with no visible derivation. Credibility in front of a CFO is a product feature.

> **What most buyers get wrong.** They evaluate Energy Toolbase by opening it and looking for a 3D roof. That is like judging a mortgage calculator on its photography. Load a real interval meter file and a real commercial tariff instead, and see whether the bill-before figure matches an actual bill you already have. That single test tells you more than a week of feature comparison.

## Where Energy Toolbase Stops

None of what follows is a criticism of the product failing at something it promised. These are scope boundaries, and knowing them is how you avoid buying the wrong tool.

**Design and layout depth.** Energy Toolbase is not competing with Aurora on remote roof capture or with HelioScope on large array layout, and it does not claim to be. Business tier coverage of layout is described as third-party PV layout tool integration. In practice that means a C&I team running Energy Toolbase usually carries a second licence for design, and the two products must agree on system size, orientation, and production. Every handoff between two tools is a place where a number quietly stops matching. Our [HelioScope review](/blog/helioscope-review/) and [Aurora Solar review](/blog/aurora-solar-review/) cover what those design platforms actually deliver.

**United States centre of gravity.** The rate library is marketed as global, and custom tariff editing on the Business tier lets you build what is missing. But the net metering programme coverage, the incentive and rebate library, and the demand response programme modelling are deepest where the customer base is, which is North America. Outside that, you are more likely to be the person building the tariff than the person selecting it. That is workable, and it is also work you are paying a premium not to do.

**Narrower scope than a full platform.** Energy Toolbase covers economics and proposals extremely well and leaves design, permitting documentation, and detailed engineering to others. For a specialist storage developer that focus is a virtue. For a general contractor doing a mixed pipeline of residential rooftops and the occasional commercial job, it means paying for one deep capability and then paying again for everything around it.

**Cost per seat for occasional users.** At $299 per user per month, a project manager who opens a model twice a month is expensive. Economics tools tend to have a small number of genuine power users and a long tail of people who want to look at the output, and per-seat pricing does not distinguish between them.

| Dimension | Energy Toolbase strength | Where it stops |
| --- | --- | --- |
| Utility tariffs | 120,000-plus verified rates, in-house rates team | Depth concentrated in the US market |
| Demand charges | Ratchets and TOU handled properly | Only matters if your pipeline is commercial |
| Storage economics | Dispatch simulation with stacked value streams | Requires a real interval load profile to be useful |
| Proposals | Unlimited and white-labelled on Business | Capped at 10 on Individual |
| Array design | Third-party PV layout tool integration on Business | Not positioned as a native 3D design engine |
| Asset lifecycle | Controller and Monitor extend past the proposal | Separate products, quoted separately |
| Pricing | Published openly, which is rare | $3,588 per user per year on Individual |

<div class="inline-cta">
<h3>See tariff modelling and array design inside one licence</h3>
<p>SurgePV combines 3D layout, 8,760-hour shading, tariff and financial modelling, and branded proposals in a single seat, across multiple markets rather than one.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Who Should Buy Energy Toolbase

Buy it if most of these describe you.

- Your pipeline is commercial and industrial, and demand charges are the main saving you sell.
- You are proposing solar plus storage, and the battery has to be justified on dispatch economics rather than on backup sentiment.
- You sell in the United States, where the rate and incentive library is deepest.
- Your customers have interval meter data, so the model has something real to work on.
- Your buyer's finance team will audit the savings number, and you need a derivation you can defend.
- You already have a design tool you are happy with, so the missing layout engine costs you nothing.

For that buyer, $3,588 a year per seat is easy to justify. One correctly modelled demand charge saving on one commercial project pays for it. Arguing against Energy Toolbase for a C&I storage developer would be dishonest.

## Who Should Not Buy Energy Toolbase

- **Residential-only installers.** Household payback rarely needs this much tariff machinery, and the per-seat cost is a large share of a small overhead.
- **Teams whose bottleneck is design throughput.** If your problem is producing layouts faster, an economics tool does not touch it.
- **Anyone wanting one licence for the whole workflow.** Energy Toolbase is deliberately one layer of the stack, so budget for a second tool.
- **Teams selling outside North America without validating tariffs first.** The custom tariff editor makes it possible, but possible and effortless are different things.
- **Occasional users.** If only one or two people will build models regularly, licence exactly those people and export outputs to everyone else.

## Alternatives Worth Comparing

**SurgePV, when you want design and economics in one licence.** SurgePV runs $1,299 to $1,899 per user per year depending on team size, and puts 3D design, 8,760-hour shading, financial and tariff modelling, and white-label proposals in a single seat. It is built across multiple markets rather than one, covering NEC, IEC, AS/NZS, and IS code alongside net metering, feed-in tariff, and subsidy structures such as PM Surya Ghar. The honest trade-off is scope depth against breadth: for the most complex US commercial tariff and battery dispatch work, Energy Toolbase's rates team and dispatch simulation are a deeper specialism. For a team that needs a competent tariff model and a full design workflow without paying for two products, the arithmetic favours SurgePV.

**HelioScope, for commercial array engineering.** If the hard part of your job is laying out a 900 kW rooftop and producing a yield report that survives review, HelioScope is the pairing most C&I teams reach for. It is not positioned as a utility tariff modelling tool, which is precisely why the two are often bought together rather than against each other. The [HelioScope pricing breakdown](/blog/helioscope-pricing/) covers what that second licence adds.

**Aurora Solar, for US residential sales.** Aurora's remote roof assessment and customer-facing presentation are aimed at a different buyer entirely. If your pipeline is homeowners rather than facility managers, Aurora is the more relevant comparison and Energy Toolbase is probably over-specified for you.

For the wider market view, the [commercial solar design software guide](/blog/commercial-solar-design-software/) covers the C&I tool stack, and the [US market guide](/blog/solar-design-software-usa/) explains how NEC, the ITC, and utility structures are handled across platforms.

## Verdict

Energy Toolbase is a good product that is easy to misjudge, because most people evaluate solar software on design and this is not design software. Judged on what it sets out to do, it is one of the strongest economic modelling tools in the industry. The utility rate database, the demand charge handling including ratchets, and the battery dispatch simulation with stacked value streams are genuinely ahead of what general design platforms offer, and the fact that Energy Toolbase publishes its pricing openly is a point in its favour in a market full of "contact sales".

The limits are limits of scope, not of quality. Array layout is handled through third-party integration rather than a native 3D design engine, the depth is concentrated in the United States, and $299 to $333 per user per month is a real cost for one layer of a workflow that needs several. A specialist C&I storage developer will find that trade worth making without hesitation. A general installer running mixed residential and commercial work will find themselves buying two products where one might do.

So the recommendation splits cleanly. If complex commercial tariffs and battery dispatch economics are the hardest part of your proposals, buy Energy Toolbase and pair it with a design tool. If you need one licence covering design, shading, tariffs, and proposals across more than one market, SurgePV at $1,299 to $1,899 per user per year is the better shape for that business.

Three things to do next:

- Load one real interval meter file and one real commercial tariff into a trial, and check the bill-before figure against an actual invoice.
- Price your true seat mix, separating people who build models from people who only read them.
- Decide whether you are buying one layer of a stack or a whole workflow, because that answer settles the shortlist on its own.

<div class="inline-cta">
<h3>Run the comparison on a real commercial project</h3>
<p>Twenty minutes, one job with its tariff and load profile, built end to end. If a specialist economics tool still wins on your work, you will know exactly why.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
