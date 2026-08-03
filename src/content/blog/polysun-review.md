---
title: "Polysun Review 2026: Multi-Energy System Simulation, Assessed"
excerpt: "An honest Polysun review for 2026. What Vela Solaris built, why coupled PV plus thermal plus heat pump simulation matters, and who should not buy it."
description: "Polysun review 2026: Vela Solaris' multi-energy simulation tool for PV, solar thermal, heat pumps and hot water. Editions, unpublished pricing, real strengths, limitations, and alternatives."
category: "Solar Software"
date: 2026-08-03
updatedDate: 2026-08-03
readTime: "12 min"
image: "/blog-images/polysun-review.svg"
author: "Keyur Rakholiya"
keywords:
  - polysun review
  - polysun software
  - vela solaris polysun
  - polysun pricing
  - polysun vs pvsyst
  - multi energy simulation software
faqs:
  - q: "What is Polysun used for?"
    a: "Polysun is energy system simulation software from Vela Solaris that models photovoltaics, solar thermal collectors, heat pumps, hot water storage, hybrid PVT panels, and heat networks in a single coupled simulation. Instead of treating the PV array as the whole system, it treats it as one component in a building's energy supply and simulates how generation, storage, and heating demand interact over the year. That makes it a design tool for integrated energy systems rather than a rooftop PV quoting tool."
  - q: "How much does Polysun cost?"
    a: "Vela Solaris does not publish a price list on its public pricing page. The page lists the editions, Polysun Standard, Polysun Designer, Polysun SPT, and Polysun Enterprise and API, along with student and educational licences, and offers a 30-day free trial plus purchase or lease options, but it directs buyers to the online shop or to contact the company for actual figures. Any specific number you see quoted on a third-party download site should be treated as unverified. Ask Vela Solaris directly for a quote against the edition and seat count you need."
  - q: "Is Polysun better than PVsyst?"
    a: "They answer different questions. PVsyst is the reference for bankable PV yield simulation and is the tool lenders and independent engineers most often name in contracts. Polysun is the stronger tool when the PV array has to be simulated together with a heat pump, solar thermal loop, and hot water store, which is not something PVsyst is positioned to do. If your deliverable is a financing-grade PV yield report, use PVsyst. If your deliverable is a coupled heating and electricity system design, use Polysun."
  - q: "Can Polysun simulate heat pumps and solar thermal together with PV?"
    a: "Yes, and that is its defining capability. Vela Solaris lists photovoltaics, solar thermal, heat pumps, hot water, hybrid PVT panels, waste heat recovery, and district heat networks as modelled technologies within the same platform. The value is in the coupling rather than the checklist. You can see how PV self-consumption changes when a heat pump runs on a cold morning, or how a thermal store shifts load, which is outside what most PV-only design tools are built to represent."
  - q: "Who is Polysun designed for?"
    a: "Engineers, building services consultants, and energy planners who design integrated systems, particularly in German-speaking Europe and the wider European retrofit market where heating is inside the project scope. It also suits researchers, universities, and manufacturers validating system concepts. It is not designed for a residential PV sales team that needs to produce a branded customer proposal in twenty minutes."
  - q: "Is Polysun a good tool for a rooftop PV installer?"
    a: "Usually not, and that is a scope mismatch rather than a fault. A volume rooftop installer needs fast address-to-proposal throughput, a customer-facing document, and a workflow the whole sales team can run. Polysun is built to answer engineering questions about coupled energy systems, which means more depth than that job requires and a longer path to a signable quote. Vela Solaris does offer Polysun SPT aimed at PV yield prediction and self-consumption, so test that edition specifically before ruling the product out."
  - q: "Does Polysun run in the cloud or on the desktop?"
    a: "The core product is a desktop application, with Vela Solaris offering a separate Polysun API for building cloud-based business models and configurable company versions as stand-alone or online deployments. For a distributed team that expects browser access, shared project libraries, and no local installs, the desktop orientation is a practical consideration. Confirm the current deployment options with the vendor, because the API and company-version offerings change what is possible."
  - q: "What are the best Polysun alternatives?"
    a: "It depends on which half of the job you care about. SurgePV at $1,299 to $1,899 per user per year covers PV design, shading, financial modelling, and branded proposals in one licence for teams whose deliverable is a quote. PV*SOL is the closest peer for detailed European PV design with strong shading and component libraries. PVsyst remains the answer when a lender specifies bankable yield output by name. None of the three replaces Polysun's coupled thermal and heat pump simulation."
featured: false
---

Most solar [design software](https://quickestimate.co/blog/solar-design-software-pricing) makes the same assumption before you draw a single module: the system is a PV array, and everything else is context. [Polysun](/blog/polysun-alternative/) does not make that assumption. Vela Solaris built it to simulate photovoltaics, solar thermal collectors, heat pumps, and hot water storage together in one coupled model, which is a genuinely different starting point and produces a genuinely different tool. This review covers what Polysun is, what Vela Solaris actually publishes about pricing, where the software earns its reputation, where it stops fitting the buyer, and which alternatives are worth putting beside it. The short framing to carry through: Polysun is the right tool when a project couples PV with heating, and an unusual choice for a plain rooftop PV quote.

> **TL;DR**
> - Polysun simulates PV together with solar thermal, heat pumps, hot water, hybrid PVT panels, and heat networks in one coupled model, which is outside the scope of most PV design tools.
> - Vela Solaris does not publish prices. The pricing page lists editions and a 30-day free trial and directs buyers to the shop or to contact sales.
> - Four editions are listed: Polysun Standard, Polysun Designer, Polysun SPT, and Polysun Enterprise and API, plus student and educational licences.
> - The engineering lineage is real. Vela Solaris is a 2006 spin-off of the SPF Institute for Solar Technology at the university in Rapperswil, Switzerland.
> - It is a poor fit for volume rooftop PV installers whose deliverable is a fast branded proposal, where SurgePV at $1,299 to $1,899 per user per year covers design plus proposals in one licence.

**Short version.** Polysun is Vela Solaris' simulation platform for integrated energy systems. It models photovoltaics alongside solar thermal, heat pumps, and hot water in a single coupled simulation, which is its real differentiator. Pricing is not published publicly. Buy it if you design systems where heating and electricity interact. Skip it if you sell straightforward rooftop PV and need proposals fast.

The distinction matters more in 2026 than it did five years ago, because the European retrofit market keeps pulling heating into projects that used to be PV-only. If you want the wider market view first, the [solar design software pricing comparison](/blog/solar-design-software-pricing/) puts the PV-focused platforms side by side, and the [Germany market guide](/blog/solar-design-software-germany/) covers the regulatory context Polysun's core users work in.

## What Polysun Is and Who Built It

Polysun is a simulation program for designing and calculating energy systems in buildings and districts. You assemble a system from components, PV modules and inverters, thermal collectors, heat pumps, storage tanks, controllers, loads, and Polysun simulates how that system behaves across a year.

Vela Solaris lists the modelled technologies explicitly on its own site: photovoltaic systems with 3D design, inverter and battery sizing, and yield calculation; solar thermal collectors; heat pumps sized against heating load; hot water; hybrid PVT panels; waste heat recovery; and district heat network design.

The company history explains why the software looks the way it does. Vela Solaris AG was founded in 2006 as a spin-off of the SPF Institute for Solar Technology at the University of Applied Sciences in Rapperswil, Switzerland, and the Polysun simulation lineage traces back through SPF development from the early 1990s. This is an academic thermal simulation codebase that grew a photovoltaic capability, not a PV sales tool that added a heating tab.

That origin is the single most useful fact for a buyer. It predicts the strengths, the depth of the thermal and hydraulic modelling, and it predicts the limitations, a workflow oriented toward engineering questions rather than closing a homeowner.

## Polysun Pricing in 2026

Vela Solaris does not publish prices. That is a statement of fact about the public pricing page, not a criticism.

The pricing page lists the product tiers, notes a 30-day free trial on each, and offers purchase or lease options, then routes the buyer to an online shop or a contact form for the actual number. There is no per-seat figure, no currency, and no billing period shown publicly.

| Edition | What Vela Solaris positions it for | Published price |
| --- | --- | --- |
| Polysun Standard | Customised energy system solutions with variant comparison | Not published |
| Polysun Designer | Full functionality for custom systems and controls | Not published |
| Polysun SPT | PV systems with yield prediction and self-consumption optimisation | Not published |
| Polysun Enterprise and API | Simulation performance API, cloud business models | Contact for quote |
| Polysun Designer Student | Non-commercial use, valid student ID required | Not published |
| Polysun Educational | Lecturers and universities | Not published |

A practical warning. Several third-party download aggregators and old software directories carry a dollar figure for Polysun. Those entries are stale and we could not verify any of them against Vela Solaris, so we are not repeating them here. Ask the vendor for a written quote against your edition and seat count, and ask specifically whether you are buying a perpetual licence or leasing, because the page offers both.

By way of a reference point on the PV side of the market, SurgePV publishes $1,299 to $1,899 per user per year depending on team size, covering design, shading, financial modelling, and proposals in one licence. That is a different product solving a different problem, but it is the number most PV teams will be comparing against when they evaluate anything.

<div class="inline-cta">
<h3>Compare an engineering tool against a proposal workflow</h3>
<p>If your bottleneck is turning designs into signed quotes rather than modelling a heat pump, bring one real job and see the whole address-to-proposal path in twenty minutes.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What Polysun Genuinely Does Well

**Coupled multi-energy simulation.** This is the differentiator and it is a real one. Most tools a solar designer touches, our own included, are positioned around the PV system and handle thermal demand, where they handle it at all, as an external load profile. Polysun simulates the PV array, the heat pump, the solar thermal loop, and the hot water store as one system with shared timesteps and shared control logic. You can ask what happens to self-consumption when the heat pump cycles on a January morning, and get an answer from the simulation rather than from a spreadsheet assumption. No amount of PV-only feature depth substitutes for that.

**Hydraulic and control detail.** The Designer edition is positioned around custom systems and controls, which reflects where the thermal lineage pays off. Storage stratification, collector loops, and controller strategies are first-class objects. Engineers who have tried to fake a buffer tank inside a PV tool will recognise how much work this removes.

**Fit for European retrofit projects.** In much of Europe, and especially the German-speaking market, the interesting projects are not new rooftops. They are existing buildings where an old gas boiler comes out, a heat pump goes in, PV goes on the roof, and someone has to prove the combination works before the money is committed. Polysun is built for exactly that question, and it is one of very few tools that can answer it end to end.

**Credible engineering depth.** The SPF origin and the long development history mean the thermal models were built and validated in a research setting. When you are defending a system concept to a client's technical reviewer, provenance carries weight.

**PVT and district heating coverage.** Hybrid PV thermal panels and heat network sizing are niche capabilities that few commercial PV design tools set out to cover. If your work touches either, the shortlist is short.

## Where Polysun Falls Short

**The PV-only proposal workflow is narrow.** If your output is a customer-facing document that closes a residential sale, Polysun is not aiming at you. It produces engineering results. Turning those into a branded, financed, signature-ready proposal is not what the product is optimised for, and pretending otherwise would misrepresent it.

**Desktop orientation.** The core product is a desktop application. Vela Solaris does offer a Polysun API for cloud business models and configurable company versions, but a distributed team that expects browser access, live shared projects, and zero local installs should confirm what is actually available before assuming it. Cloud-native competitors have set a different expectation, and this is where that shows.

**Learning curve.** A tool that lets you build arbitrary hydraulic schemes and control strategies is a tool you have to learn. Component-level system building rewards an engineer and frustrates a salesperson. Budget training time honestly, and do it during the 30-day trial rather than after the purchase order.

**Scope wider than most rooftop installers need.** This is the mirror image of the main strength. If heating is never in your scope, you are carrying modelling capability you will not open, plus the interface complexity that comes with it. That is a fit problem, not a quality problem.

**Opaque pricing slows evaluation.** Not publishing figures is a legitimate commercial choice for a product with six editions and enterprise deployments. It still means you cannot shortlist on budget without a sales conversation, which costs time when you are comparing five tools.

| Dimension | Polysun strength | Polysun limitation |
| --- | --- | --- |
| Multi-energy coupling | PV, thermal, heat pump, hot water in one model | Irrelevant if heating is out of scope |
| Thermal and hydraulic detail | Storage, loops, custom controls | Depth most PV teams never use |
| Engineering credibility | SPF research lineage since the 1990s | Financing documents more often name PVsyst |
| Proposal output | Detailed technical results | Not positioned as a fast branded sales document |
| Deployment | Desktop, plus API and company versions | Not browser-first for distributed teams |
| Pricing | Editions and free trial published | No figures on the public pricing page |
| Learning curve | Rewards engineers | Slow for sales-led teams |

Entries reflect publicly available Vela Solaris information at the time of writing. Confirm current scope and deployment options with the vendor.

> **What most buyers get wrong.** They compare Polysun against PVsyst or Aurora on PV features and conclude it is a weaker PV tool. That comparison answers the wrong question. Polysun's case rests entirely on whether your projects couple electricity and heat. If they do, the PV-only tools are not really on the shortlist. If they do not, Polysun is not really on it either.

## Who Should Buy Polysun

Buy Polysun if most of these describe you.

- You design integrated energy systems where PV, heat pumps, solar thermal, or thermal storage interact, and you have to prove the interaction works.
- You work in German-speaking Europe or the wider European retrofit market, where heating is routinely inside project scope.
- You are a building services consultant or energy planner rather than a PV sales organisation.
- You need to compare system variants on economics, self-consumption, or CO2 rather than on module count.
- You work on PVT panels, waste heat recovery, or district heat networks, where the alternatives thin out fast.
- You are in research or teaching and need a validated simulation environment.

For that buyer, Polysun does something the rest of the market does not, and the price question is secondary to the capability question.

## Who Should Not Buy Polysun

- **Volume rooftop PV installers.** Your constraint is throughput from address to signed quote. Polysun is not built to compress that path, and buying engineering depth will not fix a document problem.
- **Sales-led residential teams.** A tool that rewards component-level system building will not be adopted by a team that needs a five-minute quote in a customer's living room.
- **Anyone whose deliverable is a lender-specified yield report.** If the financing agreement names PVsyst, the question is contractual rather than technical.
- **Distributed teams that require browser-based collaboration by default.** Verify deployment options first; do not assume.
- **Projects with no thermal component at all.** You would be paying for the one thing that makes Polysun distinctive and never using it.

## Alternatives Worth Comparing

**SurgePV, for teams whose deliverable is a proposal.** SurgePV runs $1,299 to $1,899 per user per year depending on team size, with PV design, 8,760-hour module-level shading, financial modelling, and white-label proposals in a single licence. It is the value pick when the job is designing and selling PV systems quickly, because there is no second tool needed to produce the customer document. What it is not built to do is simulate a heat pump coupled to a thermal store, so it is a replacement for Polysun only when the thermal side was never the point. For the broader field, our [best solar design software roundup](/blog/best-solar-design-software/) covers the full shortlist.

**PV*SOL, for European PV detail.** PV*SOL is the closest peer on the European PV side, with strong shading analysis and deep component libraries, and it is familiar to the same German-speaking engineering audience Polysun serves. Teams sometimes run both, PV*SOL for PV detail and Polysun for the coupled system question. The [PV*SOL review](/blog/pvsol-review/) covers where it lands.

**PVsyst, for bankable PV simulation.** When a lender or independent engineer names a tool by contract, that tool is usually PVsyst. It is not a multi-energy platform and does not try to be. Use it for the financing deliverable and something else upstream. The [PVsyst review](/blog/pvsyst-review/) and the [PVsyst alternative comparison](/blog/pvsyst-alternative/) explain when substitution is possible.

The honest summary of the alternatives is that none of them competes with Polysun on its core claim. They compete with it on the projects where that claim does not apply, which is most rooftop PV work but a shrinking share of European retrofit work.

<div class="inline-cta">
<h3>Not sure which half of the problem you actually have</h3>
<p>If most of your projects are PV-only and the bottleneck is proposals, an engineering simulator is the wrong purchase. Twenty minutes on a real job will tell you which it is.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Verdict

Polysun is a well-built engineering tool with a clear and defensible reason to exist. Its coupled simulation of photovoltaics, solar thermal, heat pumps, and hot water is not a marketing distinction, it is a capability most of the PV software market does not attempt. The Swiss research lineage behind it is real, the technology coverage is unusually broad, and for the buyer designing integrated building energy systems there is very little that competes.

The limitations are almost all consequences of that scope. It is desktop-oriented, it takes time to learn, it is not positioned to produce fast branded sales proposals, and it carries far more capability than a rooftop PV quote requires. Criticising it for those things is criticising it for not being a product it never set out to be. The one criticism that stands on its own terms is the absence of published pricing, which forces a sales conversation before you can even shortlist on budget.

So the recommendation splits cleanly. If your projects couple PV with heating, Polysun belongs on your shortlist and probably at the top of it. Take the 30-day trial and get a written quote. If your projects are PV-only and your bottleneck is turning designs into signed contracts, buy for that instead, and SurgePV at $1,299 to $1,899 per user per year covers design and proposals in one licence without the thermal depth you would never open.

Three things to do next:

- Write down whether heating is inside your project scope on more than a quarter of jobs, because that answer decides the shortlist by itself.
- Run the 30-day trial on one real coupled project and one plain PV project, and time both.
- Request a written quote naming the edition, seat count, and whether it is purchase or lease, since none of that is public.

<div class="inline-cta">
<h3>Run the comparison on your own projects</h3>
<p>One real job, side by side against your current workflow. If a multi-energy simulator is what you need, you will see it immediately. If it is not, you will see that too.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
