---
title: "PVsyst Review 2026: Still the Bankable Standard, But For Whom?"
excerpt: "An honest PVsyst review for 2026. What the licence costs, why lenders name it in contracts, where it genuinely leads, and the buyers it does not fit."
description: "PVsyst review 2026: per-seat desktop licensing around the EUR 500 range, bankable P50/P75/P90 output, deep loss modelling, and the limits that matter for installers who need proposals."
category: "Solar Software"
date: 2026-08-02
updatedDate: 2026-08-02
readTime: "12 min"
image: "/blog-images/pvsyst-review.svg"
author: "Keyur Rakholiya"
keywords:
  - pvsyst review
  - is pvsyst worth it
  - pvsyst pricing
  - pvsyst pros and cons
  - pvsyst software review
  - pvsyst for installers
faqs:
  - q: "Is PVsyst worth it in 2026?"
    a: "For bankable simulation work, yes. PVsyst remains the reference tool for P50, P75, and P90 yield reports, and its per-seat licence sits in a modest price band relative to what a financing decision is worth. The value case collapses only when you expect it to run a business. It is not positioned as a proposal or customer-document tool, and as of writing it does not ship local tariff economics, so a volume residential installer buying PVsyst as their only tool has bought half a workflow. Confirm current scope with the vendor."
  - q: "How much does a PVsyst licence cost?"
    a: "PVsyst sells per-seat desktop licences, and the Standard tier is commonly reported in the region of EUR 500 per user per year, with a Premium tier priced on request for larger scopes and enhanced support. Vendor pricing and tier structure change, so treat that figure as an order of magnitude and confirm the current number on PVsyst's own site before you budget. The licence is tied to a machine, which matters more than the price for teams who share work."
  - q: "Why do lenders and offtakers ask for PVsyst by name?"
    a: "Because it removes an argument. PVsyst has been used for bankable energy assessments for two decades, its loss model is documented, and technical advisors on both sides of a financing deal already know how to read its report. When a term sheet names a tool, it is buying a shared reference rather than claiming that other engines are wrong. That contractual habit is the single strongest reason PVsyst still sits in the stack of most utility-scale developers."
  - q: "What is PVsyst genuinely best at?"
    a: "Loss modelling depth and geometric honesty. You can specify soiling by month, module mismatch, IAM, thermal behaviour, DC and AC wiring losses, and unavailability, then see each one accounted separately in the loss diagram. Its near and far shading treatment, including horizon profiles, holds up at high latitude and on complex terrain where simpler tools smooth the problem away. For utility-scale ground mount, that combination is hard to beat."
  - q: "What are the real limitations of PVsyst?"
    a: "Four stand out, all of them scope rather than quality. It is a desktop application licensed per machine, so live shared editing is not part of the model the way it is in cloud tools. It is not positioned as a proposal or customer-facing document tool. As of writing it is not sold with tariff or incentive libraries, so local payback economics are built by hand outside the tool; confirm current scope with the vendor. And the learning curve is steep enough that onboarding a junior engineer to trustworthy output takes weeks rather than days."
  - q: "Can PVsyst replace a proposal tool for a solar installer?"
    a: "In our view no, and it is not positioned as one. PVsyst produces an engineering report for a technical reader. A homeowner or a facilities manager needs a document with savings, financing options, and a signature line. Installers who buy PVsyst alone end up rebuilding that document in slides or a spreadsheet for every job, which is where their real time goes. The honest pattern is to pair PVsyst with a proposal platform, or to use a platform that covers both."
  - q: "Is PVsyst good for residential solar?"
    a: "It is accurate for residential, but it is slow for it. A rooftop job with a couple of orientations does not need month-by-month soiling inputs and a hand-built horizon profile, and the time cost per project is what hurts when you quote fifty homes a month. Residential teams generally get more from a tool that models the roof from imagery in a minute and outputs a branded proposal at the end of the same session."
  - q: "What are the best alternatives to PVsyst?"
    a: "It depends on the gap you are filling. SurgePV runs $1,299 to $1,899 per user per year and covers design, simulation, financial modelling with tariff libraries, and branded proposals in one browser-based licence. HelioScope is a common pick for commercial and industrial engineering where layout iteration speed matters. PV*SOL suits European residential teams who want desktop detail with report output. None of them removes a contractual requirement that names PVsyst specifically."
featured: false
---

PVsyst occupies an unusual position in solar software. Almost nobody argues that it is pleasant to use, and almost nobody argues that it is wrong. It has been the reference simulator for bankable energy assessments for two decades, which means its output shows up in term sheets, technical due diligence packs, and power purchase agreements as a named requirement rather than a preference. This review looks at what PVsyst costs in 2026, what it genuinely does better than anything else, where the fit breaks down, and which buyers should shortlist something else. The conclusion is less about quality than about scope, because the most common mistake with PVsyst is not buying a bad tool. It is buying a good tool and expecting it to do a job it was never built for.

> **TL;DR**
> - PVsyst is sold as a per-seat desktop licence, with the Standard tier commonly reported around the EUR 500 per user per year mark. Confirm current pricing with the vendor.
> - It is the reference tool for bankable P50, P75, and P90 yield, with loss modelling and shading geometry that hold up under lender scrutiny.
> - It is not positioned as a proposal or customer-document tool, and as of writing is not sold with tariff or incentive libraries, so local economics are built by hand. Confirm current scope with the vendor.
> - It is a desktop product licensed per machine, which suits a specialist and frustrates a collaborative team.
> - Buy it if a lender names it or you do bankable studies. Pair it with something else if you also need to sell.

**Short version.** PVsyst is a desktop photovoltaic simulation tool, priced per seat in roughly the EUR 500 range annually, that produces the bankable P50, P75, and P90 yield reports lenders and offtakers accept. It is excellent at loss modelling, shading geometry, and utility-scale ground mount. It is not positioned as a customer-document or local-tariff tool, so in our view it is the right engineering tool and the wrong sole tool for a sales-driven installer.

## What PVsyst Actually Is

PVsyst is a Windows desktop application developed in Switzerland for detailed photovoltaic system simulation. You define a site with its meteorological data, build the system with real module and inverter models, describe the geometry including tilt, azimuth, row pitch, and surrounding obstructions, then set the loss parameters that translate nameplate capacity into delivered energy.

What comes out is a report with an hourly simulation behind it, a full loss diagram, and probability-weighted annual yield figures. The P50 is the central estimate. The P90 is the figure a lender sizes debt against, because it is the output exceeded in 90 percent of years. That single number is why the tool exists in the form it does.

Everything about the interface reflects its origin as an engineering instrument rather than a commercial product. It assumes you know what an incidence angle modifier is, and it does not hide the assumption. That is a design choice, and for its intended user it is the correct one.

## Why Lenders and Offtakers Name It in Contracts

This is the part of PVsyst's position that has nothing to do with software quality, and it is the most durable part.

When a bank lends against twenty years of generation, the yield estimate is the asset. Both sides need a number that neither side can accuse the other of manufacturing. PVsyst has been used long enough that technical advisors, independent engineers, and lender credit teams all read its report format fluently. They know which loss lines to interrogate and what a plausible soiling assumption looks like in a given climate.

So when a term sheet says PVsyst, it is buying an absence of argument, not a claim that other engines are inaccurate. Understanding that distinction matters when you evaluate alternatives, because it tells you which requirements are technical and can be met by a different tool, and which are contractual and cannot be met by anything except the named product.

The practical test is simple. Read the actual document. Some agreements require a bankable energy yield assessment with stated methodology, which several tools satisfy. Others name PVsyst explicitly. Only the second kind removes your choice.

## PVsyst Pricing in 2026

PVsyst sells per-seat desktop licences rather than cloud subscriptions. The Standard tier is widely reported in the region of EUR 500 per user per year, with a Premium tier priced on request for larger scopes and enhanced support. Vendors change tiers and pricing, so verify the current figure on PVsyst's own site before you commit budget. Our [PVsyst price breakdown](/blog/pvsyst-price/) goes through the tiers and the surrounding costs in more detail.

| Tool | Typical published price | What the licence includes |
| --- | --- | --- |
| PVsyst Standard | Around EUR 500 / user / yr (verify) | Full simulation, loss modelling, bankable yield report |
| PVsyst Premium | On request | Larger scopes, enhanced support |
| SurgePV Individual | $1,899 / user / yr | Design, simulation, financials, proposals |
| SurgePV 3-User Team | $1,499 / user / yr | Same, up to 3 seats |
| SurgePV 5-User Team | $1,299 / user / yr | Same, up to 5 seats |
| HelioScope | Reported $99 to $300+ / user / mo (verify) | Simulation and C&I layout, not positioned as a proposal tool |
| PV*SOL | EUR 585 to 845 / seat / yr list, Valentin shop 2026 | Desktop simulation with branded technical reports |

On the headline number PVsyst is inexpensive, and it is worth saying that plainly. A licence costing a few hundred euros that unlocks project finance on a 50 MW asset is not where anyone should be optimising.

The cost that matters is not the licence. It is everything the licence does not cover, which we get to below.

<div class="inline-cta">
<h3>See what design, simulation, and proposals in one licence looks like</h3>
<p>Bring a project you already ran in PVsyst. A SurgePV engineer rebuilds it in the browser, runs the 8,760-hour simulation, and ends with a branded client document in the same session.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What PVsyst Genuinely Does Better Than Anything Else

These are real strengths, and none of them are close calls.

**Loss modelling you can audit line by line.** PVsyst's loss diagram separates each degradation step from irradiance on the horizontal plane through to energy at the grid meter. Soiling can be specified by month. Mismatch, incidence angle modifier, thermal behaviour, ohmic wiring losses on both DC and AC sides, inverter clipping, transformer losses, and system unavailability each appear as their own line. When a technical advisor challenges a number, you can point at the specific input that produced it. Tools that collapse these into a single derate factor cannot do that.

**Shading geometry that survives difficult sites.** Near shading from structures and far shading from a horizon profile are handled as distinct problems, which is correct because they behave differently. On a high-latitude project where the sun sits low for much of the year, or a hillside where the terrain itself is the obstruction, that separation stops the model from quietly overestimating. This is one of the clearest technical gaps between PVsyst and the simpler end of the market.

**Utility-scale and ground mount depth.** Row pitch, backtracking behaviour for single-axis trackers, bifacial gain, and inter-row losses are treated as first-class inputs rather than approximations. For a developer working on hundreds of megawatts of ground mount, that is exactly where the money is. Our [utility-scale solar design software](/blog/utility-scale-solar-design-software/) guide covers how the category compares on this workflow.

**A component database engineers trust.** Module and inverter models are parameterised rather than reduced to a datasheet headline, and users can build and check their own entries. That matters when the equipment on the project is newer than the library.

**Institutional credibility.** This is not a feature, but pretending it does not exist would be dishonest reviewing. PVsyst output moves faster through diligence than output nobody on the credit committee has seen before. That has commercial value independent of the math.

## Where PVsyst Stops Fitting

**It is desktop and licensed per machine.** Live shared editing of one project by two engineers is not part of how the product is sold, as of writing. In practice version control is filenames on a shared drive, and the person with the licence is the bottleneck when they are on leave. For a solo consultant this is irrelevant. For a ten-person engineering team it is a daily tax.

**It is not positioned as a proposal or customer-document tool.** In our view this is the most consequential scope limit for a sales-driven business. PVsyst produces an engineering report for a technical reader, not a document aimed at a homeowner, a factory owner, or a procurement committee. Installers using PVsyst alone generally rebuild that document somewhere else, job after job. Product scope changes, so confirm the current position with the vendor.

**Tariff and incentive libraries are not part of the package, as of writing.** PVsyst tells you how many kilowatt hours the array will make. It is not sold as a tool that knows what those kilowatt hours are worth in Gujarat under PM Surya Ghar, in California under a time-of-use rate, or in Germany under the current feed-in structure. All of that economics work happens in a spreadsheet outside the tool, which means the financial model and the energy model can drift apart without anyone noticing.

**A steep learning curve, and it is not accidental.** The tool exposes the assumptions instead of choosing them for you. That is the right call for bankable work and the wrong call for speed. Getting a new engineer to output you would defend in front of a lender is a matter of weeks of supervised work, not an afternoon of onboarding.

**Slow for high-volume residential.** Every input that makes PVsyst good on a 50 MW project is overhead on a 6 kW roof. Teams quoting dozens of homes a month cannot spend forty minutes per simulation, and the extra precision does not change the sale.

| Dimension | PVsyst strength | PVsyst limitation |
| --- | --- | --- |
| Yield methodology | Bankable P50, P75, P90 accepted by lenders | Requires expertise to configure defensibly |
| Loss modelling | Deep, auditable, line by line | Complexity is overhead on simple jobs |
| Shading | Near and far handled separately, strong at high latitude | Horizon and obstruction setup is manual |
| Project type | Excellent for utility-scale and ground mount | Slow for volume residential |
| Deployment | Stable, offline, no browser dependency | Desktop, per machine, no live collaboration |
| Customer output | Not the product's stated aim | Not positioned as a proposal or client-document tool |
| Local economics | Not the product's stated aim | No tariff or incentive libraries listed as of writing |
| Price | Low headline licence cost | Cost sits in the tools you buy around it |

Capability entries above reflect how each product was positioned publicly at the time of writing. PVsyst ships frequent releases, so check the current version notes before relying on any of them.

> **What most buyers get wrong.** They evaluate PVsyst against tools it is not competing with. The question is never whether PVsyst simulates better than a proposal platform, because it does. The question is what else you have to buy to run a business alongside it, and whether the combined workflow is one you can actually staff.

## The Honest Verdict on Scope: Two Tools Are Often Correct

Here is the part most comparison content gets wrong by trying to force a single winner.

PVsyst is the right tool for bankable simulation and the wrong tool as a business's only tool. Those two statements are compatible, and a lot of well-run teams have already resolved it by running both.

**Illustrative example, not a client case.** Consider a 25-person EPC with a mixed pipeline: mostly commercial rooftops in the 200 kW to 2 MW range, plus two or three financed ground-mount projects a year. Suppose they hold two PVsyst seats with their senior engineers, used only when a lender-facing yield assessment is required, which might be a handful of times a year. Everything else, meaning layout, shading checks, financial modelling against local tariffs, and the document that goes to the client, runs on a platform seat that every designer and seller has. On that split, the PVsyst licences are cheap and specialised, and the day-to-day platform carries the volume. The mistake would be buying PVsyst seats for all 25 people, or trying to close commercial deals with a loss diagram.

That is the shape of the answer for most companies with any bankable exposure at all. Buy PVsyst for the reports that need it. Do not buy it as the tool your whole team lives in.

<div class="inline-cta">
<h3>Keep PVsyst for the lender. Move the rest of the workflow somewhere faster</h3>
<p>SurgePV covers layout, 8,760-hour module-level shading, tariff-aware financial modelling, and white-label proposals in one browser-based licence, so the only jobs left in PVsyst are the ones a contract names.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## Who Should Buy PVsyst

- **Utility-scale developers.** Ground mount, trackers, bifacial gain, and terrain shading are where PVsyst is strongest, and the projects are large enough that simulation time per project is not a constraint.
- **Anyone whose lender or offtaker names it.** If the document says PVsyst, the evaluation is over. Buy the licence and move on.
- **Independent consultants doing bankable studies.** The output is the product, the client expects that format, and a single seat costs less than one day of billable time.
- **Technical due diligence and owner's engineer teams.** You need to reproduce and challenge someone else's model, which means working in the same tool they used.
- **Research and detailed engineering work.** Sensitivity on loss assumptions is exactly what the tool exposes.

## Who Should Not Buy PVsyst as Their Only Tool

- **Residential installers doing volume.** The per-project time cost is the problem, and the extra precision does not change a homeowner's decision.
- **Small commercial and industrial installers who sell as well as engineer.** You need a document a buyer can read, and that is not what PVsyst is built to output.
- **Teams that need to collaborate on live projects.** Desktop, per-machine licensing works against you every day.
- **Anyone whose economics depend on local incentives.** Without a built-in tariff library, the financial model lives in a spreadsheet and drifts from the energy model.
- **Mac and Linux teams.** You are running a virtual machine to use it, which is a real ongoing cost in time and support.

## Alternatives Worth Comparing

**SurgePV, for design plus proposals in one licence.** SurgePV runs $1,299 to $1,899 per user per year depending on team size, covering layout, 8,760-hour module-level shading, financial modelling with country-specific tariff libraries, and white-label proposals in a single browser-based seat. The argument for it is not that it beats PVsyst at loss modelling depth on a tracker farm. It is that most of the work a solar business does every day is not that job, and PVsyst is not scoped to cover the rest. For teams evaluating a straight swap rather than a pairing, our [PVsyst alternative comparison](/blog/pvsyst-alternative/) works through where substitution is safe and where it is not.

**HelioScope, for commercial and industrial engineering.** If your pipeline is large rooftops and mid-scale ground mount and your bottleneck is layout iteration rather than lender acceptance, HelioScope is browser-based and, in our experience, faster to iterate in than PVsyst. It is not positioned as a proposal tool, so most teams pair it with separate quoting; confirm current scope with the vendor. The [HelioScope and PVsyst head-to-head](/blog/helioscope-vs-pvsyst/) covers the split in detail.

**PV\*SOL, for European residential detail.** Strong 3D rooftop handling, well established in Germany, and it does produce a branded project report you can hand to a client, which PVsyst is not positioned to do. It remains a desktop product with a regional centre of gravity. See the [PV\*SOL comparison](/blog/pvsol-alternative/) for where it fits.

For the wider market view, the [solar design software pricing comparison](/blog/solar-design-software-pricing/) lists annual cost across platforms, and our [Aurora Solar review](/blog/aurora-solar-review/) covers the residential-first end of the same market.

## Verdict

PVsyst is genuinely excellent, and this review should not be read as a hedged criticism. Its loss modelling is the most auditable in the category, its shading geometry holds up on the sites where other tools quietly fail, and its acceptance by lenders is earned rather than inherited. If you produce bankable yield assessments, you should own it, and the licence price is not the interesting part of that decision.

The honest limit is scope. PVsyst answers one question, which is how much energy this array will produce and how confident you can be in that figure. It is not scoped to answer what the energy is worth locally, and it is not built to produce something a customer signs. A business that only owns PVsyst has bought a very good engine and no vehicle.

For most installers, the better shape is a platform that carries design, local economics, and the client document, with PVsyst held in reserve for the contracts that name it. That is not a knock on PVsyst. It is what happens when a tool is built precisely for one job and stays disciplined about it.

Three things to do next:

- Read your actual financing documents and check whether they require a bankable assessment or specifically require PVsyst. Those are different constraints.
- Count how many hours a month your team spends rebuilding PVsyst output into customer-facing documents, and price that against a platform seat.
- Run one real project end to end in a combined design-and-proposal tool before deciding whether you need one licence or two.

<div class="inline-cta">
<h3>Find out which half of your workflow PVsyst is not covering</h3>
<p>Twenty minutes, one real project, from address to signed-ready proposal. If PVsyst plus a spreadsheet already does the job, you will know that too.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a></p>
</div>

## About This Comparison

Pricing, features and product positioning described here were checked in August 2026 using publicly available vendor information. Vendors change pricing, packaging and capabilities without notice, and several do not publish prices at all. Treat every figure as a starting point for your own enquiry rather than a quotation, and confirm current terms directly with each vendor before making a purchasing decision.

All product names, logos and trademarks are the property of their respective owners. Reference to them here is for identification and comparison only and does not imply any affiliation with, sponsorship by, or endorsement from those companies. SurgePV is a Qbits Energy product, so treat this as a vendor comparison written by an interested party and weigh it alongside independent sources and your own trial of the tools.

Where we could not verify a claim from a primary source we have said so in the text rather than repeating it. If you believe anything here is inaccurate or out of date, contact us and we will review and correct it.
