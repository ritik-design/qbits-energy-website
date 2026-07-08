---
title: "Real Unit Economics of an Indian Solar Installer"
excerpt: "What does a solar EPC business actually earn per kW installed? Revenue, gross margin, customer acquisition cost, after-sales cost, and cash cycle, the numbers most installers do not talk about."
description: "What a solar EPC business actually earns per kW installed: revenue, gross margin, customer acquisition cost, after-sales cost, and cash cycle."
category: "Industry"
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "11 min"
image: "/blog-images/solar-epc-india.svg"
author: "Keyur Rakholiya"
keywords:
  - solar installer unit economics india
  - solar epc gross margin india
  - solar installer business india
  - solar installation cost per kw india
  - solar epc profitability india
faqs:
  - q: "What is the typical gross margin for a residential solar EPC installer in India?"
    a: "Gross margin for residential solar EPC in India varies by system size and geography, but the honest range for a well-run installer is 18–28% on the total project value. Small residential systems (3–5 kW) tend to have lower gross margins (15–20%) because the fixed cost of site survey, design, and installation is spread over a smaller revenue base. Larger residential systems (8–10 kW) and small commercial systems (20–50 kW) achieve better margins (22–28%) because the variable revenue scales with kW while some fixed costs remain constant. Margins below 15% are not viable for a business with a proper service team - they indicate a race-to-the-bottom pricing strategy that typically leads to poor after-sales service."
  - q: "What does it cost to acquire a residential solar customer in India?"
    a: "Customer acquisition cost (CAC) for residential solar in India depends heavily on the acquisition channel. Referrals from existing customers typically cost ₹5,000–₹15,000 per installation (primarily the cost of the referral incentive paid). Digital leads (Google, Facebook) cost ₹8,000–₹25,000 per closed installation, accounting for the lead-to-closure conversion rate of 8–15%. Door-to-door canvassing costs ₹15,000–₹40,000 per installation when fully loaded with canvasser salaries and supervision. Most successful residential solar installers in India target a blended CAC of ₹12,000–₹20,000 per installation. At a 3 kW residential system revenue of ₹1.5–2.0 lakh, CAC should not exceed 10–12% of revenue."
  - q: "How does the PM Surya Ghar subsidy affect an installer's cash cycle?"
    a: "The [PM Surya Ghar Muft Bijli Yojana](https://pmsuryaghar.gov.in/) subsidy significantly extends the cash cycle for compliant installers. Under the scheme, the installer completes the installation, receives a commissioning certificate from the DISCOM, then submits the subsidy claim on the national portal. Subsidy disbursement from MNRE to the installer's account typically takes 30–75 days after claim submission. During this period, the installer has fronted the full cost of the installation but received only the net-of-subsidy payment from the customer. For an installer doing 10 residential installations per month with ₹78,000 subsidy per installation, the receivables cycle can tie up ₹8–10 lakh in working capital at any given time. This cash cycle burden is one of the most common reasons smaller installers struggle to scale under the PM Surya Ghar scheme."
  - q: "What is the most profitable segment for a small solar EPC business in India?"
    a: "For a small-to-medium solar EPC business in India, the 20–50 kW commercial and industrial segment typically offers the best risk-adjusted profitability. Systems in this range have higher absolute revenue per project (₹10–25 lakh), better gross margin than small residential (22–28%), manageable project complexity compared to large C&I (100 kW+), and lower customer acquisition cost than residential (one commercial customer vs multiple residential). The commercial segment also typically has better-quality decision-makers - facility managers and CFOs who make data-driven decisions, versus residential buyers who are price-sensitive and prone to post-purchase regret if savings are below expectation."
  - q: "What is the after-sales service cost burden for solar installers in India?"
    a: "After-sales service is the hidden cost that destroys solar EPC profitability when not accounted for. For a 5 kW residential system, the after-sales cost over the first 3 years (the most service-intensive period) typically runs ₹4,000–₹12,000 per installation, covering: one or two site visits for inverter fault investigation, panel cleaning guidance or first cleaning visit, net meter billing discrepancy resolution, and DISCOM documentation follow-up. Installers who do not provision for after-sales cost in their project margin end up with negative-margin customers within 2 years. The correct model is to include an after-sales provision of 5–7% of project revenue in the gross margin calculation."
  - q: "Should a solar installer focus on volume or margin?"
    a: "The volume-vs-margin question is a false choice for most solar installers at the scale relevant to this discussion (under 5 MW/year). Volume without margin destroys a business - a 10% gross margin business that doubles volume still has negative cash flow after overheads and working capital cost. The correct model is to target gross margins of 22–28%, build a service reputation that generates referrals (reducing CAC), and grow volume organically through referral rather than price competition. [CERC's grid connectivity regulations](https://cerc.gov.in/) also require compliance documentation that only trained installers can complete - another reason that quality cannot be compromised for volume. Installers who try to win volume through aggressive pricing typically reach a ceiling where their after-sales burden makes each new installation less profitable than the last."
---

Most conversations about solar in India focus on the customer's perspective: bill reduction, subsidy, payback period. For EPC teams looking to understand the customer's financial framework during a commercial sale, the [solar IRR and payback guide for C&I](/blog/solar-irr-payback-ci-india/) provides the financial model most C&I buyers use internally. Industry data on solar EPC market growth is tracked by [MNRE's annual report](https://mnre.gov.in/) and [IEEFA India](https://ieefa.org/), both useful sources for market context in sales conversations. This post is about the installer's perspective, specifically, the unit economics of running a solar EPC business in India.

> **TL;DR**
> - Target gross margin for a well-run residential solar EPC in India is 22–28% at the project level; net operating margin after CAC, after-sales, and overhead is typically 5–8%.
> - Blended customer acquisition cost should stay under ₹15,000–₹20,000 per installation; referrals are the cheapest channel at ₹5,000–₹12,000.
> - After-sales cost over the first 3 years typically runs ₹5,000–₹12,000 per 5 kW installation and should be provisioned at 5–7% of project revenue.
> - The PM Surya Ghar subsidy cycle creates a 60–100 day cash gap of roughly ₹78,000 per installation, which usually requires a working capital line.
> - Adding 20–50 kW commercial and industrial projects to a residential-heavy portfolio materially improves net margin, since team time scales roughly 3x rather than 30x for a project 30 times the size.
> - Inverter brand choice affects unit economics directly: strong remote diagnostics, fast RMA, and ALMM compliance reduce after-sales cost and protect subsidy claims.

I am writing this because I spend time with EPC partners across India, and I hear the same questions repeatedly: "What should my margin be?", "How do I think about customer acquisition cost?", "Why am I not making money despite installing 10 systems a month?". The answers are rarely comfortable, but they are knowable.

These are not benchmark numbers from a consulting report, they are derived from real conversations with operational solar installers in India. The ranges are honest and the uncomfortable parts are included. Installers who are formalising a scrappy operation into a repeatable one often find it worth adopting a proper [solar business software stack](https://surgepv.com/hub/solar-business/software-stack/) around the same time they start taking these numbers seriously.

> **The direct version.** A well-run residential solar EPC business in India should target 22–28% gross margin. After customer acquisition cost (₹12,000–₹20,000/installation), after-sales provision (5–7% of revenue), and overhead, net operating margin is typically 8–14%. Cash is tight because the PM Surya Ghar subsidy cycle adds 60–90 days of receivables. The installers who survive long-term are the ones who understand these numbers before they become a problem.

## Revenue Structure: What Installers Actually Charge

For a 3 kW residential system in 2025–26, the market-clearing price in most Indian cities is ₹1.3–1.7 lakh (after subsidy adjustment). Before subsidy, the gross [system capex](/glossary/capex/) is approximately ₹2.0–2.4 lakh.

**Breakdown of revenue components:**

| Component | 3 kW Residential | 5 kW Residential | 20 kW Commercial |
| --- | --- | --- | --- |
| Equipment (panels + inverter) | ₹80,000–₹95,000 | ₹1,30,000–₹1,50,000 | ₹5,20,000–₹5,80,000 |
| Mounting structure | ₹18,000–₹24,000 | ₹28,000–₹35,000 | ₹80,000–₹1,00,000 |
| DC/AC cables and protection | ₹10,000–₹14,000 | ₹15,000–₹20,000 | ₹40,000–₹60,000 |
| Installation labour | ₹12,000–₹18,000 | ₹18,000–₹24,000 | ₹40,000–₹60,000 |
| DISCOM/approval costs | ₹5,000–₹8,000 | ₹6,000–₹10,000 | ₹15,000–₹25,000 |
| **Total cost of project** | **₹1,25,000–₹1,59,000** | **₹1,97,000–₹2,39,000** | **₹6,95,000–₹8,25,000** |
| **Quoted project revenue** | **₹1,60,000–₹2,00,000** | **₹2,50,000–₹3,00,000** | **₹9,00,000–₹11,00,000** |
| **Gross margin (project level)** | **22–26%** | **21–25%** | **23–29%** |

These are loaded costs, including the installer's project management time, vehicle cost for site visit, and a provision for warranty work. Installers who show 30–35% margin by excluding these hidden costs are mis-measuring their profitability.

## The Cost of Customer Acquisition

Customer acquisition cost (CAC) is the most underestimated line item in solar EPC unit economics. Many installers think they have a 25% gross margin business and cannot understand why they are not profitable, then discover their CAC is consuming 15–20% of project revenue. Installers running multiple acquisition channels at once usually need real [lead management](https://quickestimate.co/features/lead-capture/) to see which channel's blended CAC is actually working, rather than guessing from memory at the end of the month.

**CAC by channel (residential solar, India):**

| Channel | Lead Cost | Conversion Rate | CAC per Installation |
| --- | --- | --- | --- |
| Referral (existing customer) | ₹2,000–₹5,000 referral incentive | 40–60% | ₹5,000–₹12,000 |
| Word of mouth (no incentive) | Marketing overhead allocation | 70–80% | ₹3,000–₹8,000 |
| Google Ads (search) | ₹800–₹2,000/lead | 8–15% | ₹8,000–₹25,000 |
| Facebook/Instagram Ads | ₹400–₹1,200/lead | 5–10% | ₹8,000–₹24,000 |
| Door-to-door canvassing | Canvasser salary allocation | 3–8% | ₹20,000–₹40,000 |
| PM Surya Ghar portal leads | ₹0 direct cost | 15–25% | ₹5,000–₹15,000 (platform + follow-up) |

**Blended CAC target:** For a residential-focused installer, blended CAC should not exceed ₹15,000–₹20,000 per installation. Above ₹20,000, CAC alone consumes 10–13% of a 3 kW project's revenue, making the business mathematically difficult to sustain with a proper service team.

The most profitable acquisition channel is referrals from satisfied existing customers. Installers who invest in after-sales service quality find that referral rates improve over time, driving CAC down. This is a flywheel that takes 2–3 years to build, which is why installers who cut after-sales service to save money in year 1 end up with declining referral rates and rising CAC in year 3.

## The After-Sales Cost Trap

After-sales service is where the unit economics become uncomfortable for most installers.

Consider the following common after-sales scenarios for a 5 kW residential system in the first three years:

| Scenario | Frequency | Cost per Event |
| --- | --- | --- |
| Customer calls about monitoring app not working | Once per 5 installations/year | ₹500 (phone support) |
| Customer reports low generation - site visit required | Once per 10 installations/year | ₹2,000–₹4,000 (technician visit) |
| Inverter fault - warranty replacement coordination | Once per 20 installations/year | ₹3,000–₹6,000 (logistics, reinstallation) |
| DISCOM net meter billing discrepancy - document support | Once per 8 installations/year | ₹800–₹1,500 (staff time) |
| Panel cleaning guidance or first cleaning visit | Once per 4 installations/year | ₹1,000–₹2,000 |
| **Loaded after-sales cost per installation (3 years)** | | **₹5,000–₹12,000** |

For a 3 kW system at ₹1.8 lakh project revenue, ₹5,000–₹12,000 in after-sales cost is 2.8–6.7% of revenue. Most installers provision 0% for this in their margin calculation.

The correct approach: **build 5–7% of project revenue as an after-sales provision into your margin model.** If after-sales cost turns out to be lower (because the inverter brand has good remote diagnostics and your installation quality is high), that 5–7% drops to net margin. If after-sales is higher, you are covered.

Installers who use inverter brands with strong remote diagnostic capability (where faults can be diagnosed via the monitoring app rather than a site visit) systematically have lower after-sales cost. This is one of the real reasons inverter brand quality matters to EPC profitability, beyond just the product margin.

## The PM Surya Ghar Cash Cycle Problem

PM Surya Ghar Muft Bijli Yojana has been transformative for residential solar volumes in India. It has also created a cash cycle problem that is quietly strangling smaller installers.

Here is how the cash cycle works for a compliant installer:

1. **Day 1:** Installer quotes customer net-of-subsidy. Customer pays net-of-subsidy amount (say ₹1.2 lakh for a 3 kW system, with ₹78,000 subsidy outstanding).
2. **Day 10–30:** Installation is completed. Installer has spent the full ₹2.0 lakh cost but collected only ₹1.2 lakh.
3. **Day 30–45:** DISCOM inspection and commissioning certificate issued.
4. **Day 45–60:** Installer submits subsidy claim on PM Surya Ghar portal.
5. **Day 90–130:** MNRE disburses ₹78,000 to installer's account.

**Cash gap period: 60–100 days, ₹78,000 per installation.**

For an installer doing 10 installations per month, this is ₹7.8 lakh in outstanding subsidy receivables at any point, money they have spent but not yet collected. This requires working capital: either from the installer's own reserves or from short-term borrowing at 12–18% annual interest.

The working capital cost of the subsidy receivables cycle adds approximately 2–3% to the effective cost of each PM Surya Ghar installation. Installers who do not account for this discover that their PM Surya Ghar margin is lower than their non-subsidy margin, which is counterintuitive but financially accurate.

**Practical implication:** Solar installers who want to scale under PM Surya Ghar need a working capital line, either from a bank, from their distributor's extended credit terms, or from a partner NBFC. Scaling without this will create cash crunches at predictable intervals. The [PM Surya Ghar subsidy amount guide](/blog/pm-surya-ghar-subsidy-amount/) includes the expected disbursement timeline that EPC businesses can use to model their working capital requirements. For a step-by-step walkthrough of the portal submission, see the [PM Surya Ghar application guide](/blog/pm-surya-ghar-apply-online/).

## What Net Margin Actually Looks Like

Taking the numbers together for a 3 kW residential system at ₹1.8 lakh project revenue (typical market price, inclusive of subsidy):

| P&L Line Item | Amount | % of Revenue |
| --- | --- | --- |
| Project revenue (gross) | ₹1,80,000 | 100% |
| Equipment + materials cost | ₹1,05,000 | 58% |
| Installation labour | ₹15,000 | 8% |
| DISCOM and approval costs | ₹6,000 | 3% |
| **Gross profit (project level)** | **₹54,000** | **30%** |
| CAC provision (blended) | ₹15,000 | 8% |
| After-sales provision (6%) | ₹10,800 | 6% |
| Working capital cost (PM Surya Ghar) | ₹4,000 | 2% |
| **Contribution margin** | **₹24,200** | **13.4%** |
| Overhead allocation per project (staff, office, vehicles) | ₹10,000–₹15,000 | 6–8% |
| **Net operating margin per installation** | **₹9,200–₹14,200** | **5–8%** |

A 5–8% net operating margin on ₹1.8 lakh is ₹9,000–₹14,000 per installation. For an installer doing 8 residential installations per month, this is ₹72,000–₹1,12,000/month of net operating income, which is a viable but not comfortable business.

The installers who build to 20–30 installations per month with a strong referral engine and low CAC, using high-quality inverters that reduce after-sales cost, move their net margin to 8–12% and build a genuinely profitable business.

## The Segment Mix That Changes the Math

The single most effective way to improve EPC unit economics is to add commercial installations to a residential-heavy portfolio.

For a 30 kW commercial system at ₹15 lakh project revenue:

| P&L Line Item | Amount | % of Revenue |
| --- | --- | --- |
| Equipment + materials + labour | ₹10,50,000 | 70% |
| **Gross profit** | **₹4,50,000** | **30%** |
| CAC (commercial lead, lower conversion cost) | ₹35,000 | 2.3% |
| After-sales provision (4% - commercial clients manage monitoring themselves) | ₹60,000 | 4% |
| **Contribution margin** | **₹3,55,000** | **23.7%** |
| Overhead allocation | ₹60,000 | 4% |
| **Net operating margin** | **₹2,95,000** | **~20%** |

One 30 kW commercial installation generates the net operating income of approximately 30 residential installations. The installer's team spends approximately 3× the time on a commercial project, not 30×. This is why EPC businesses that add commercial capability systematically outperform pure residential operations.

## What This Means for How Installers Should Choose Their Inverter Brand

The inverter brand decision is not just a product quality decision, it directly affects unit economics:

**Remote diagnostics reduce after-sales cost.** An inverter brand with strong cloud monitoring and remote fault diagnosis means fewer site visits for common faults, for what good monitoring looks like in practice, see the [solar monitoring app guide](/blog/how-to-read-solar-monitoring-app-india/). If remote support resolves 60% of customer calls without a technician visit, the after-sales cost drops from 6% of revenue to 3–4%.

**Warranty replacement process affects cash.** When an inverter fails under warranty, the installer typically replaces it from their own stock and waits for the replacement unit from the manufacturer. If the replacement cycle is 30 days, the installer is carrying ₹40,000–₹80,000 of additional inventory per failure. Manufacturers with fast RMA (return merchandise authorisation) processes (replacement within 5–7 days) reduce this inventory burden; the [solar inverter warranty claim guide](/blog/solar-inverter-warranty-claim/) walks through what a fast RMA process actually looks like step by step.

**Brand margin varies.** Premium inverter brands that support structured distributor margins allow installers to earn 12–18% margin on equipment versus 6–10% on commoditised equipment. A ₹70,000 inverter at 15% margin contributes ₹10,500 to gross profit; a ₹60,000 inverter at 7% margin contributes ₹4,200. The premium product with better margin can be better for the installer's P&L even at higher equipment cost.

**ALMM listing is non-negotiable for PM Surya Ghar.** [MNRE's ALMM list](https://mnre.gov.in/) is updated quarterly. Installers who use non-ALMM-listed equipment for PM Surya Ghar installations face subsidy rejection. Each rejected claim is a ₹78,000 receivable that does not arrive, and a customer who is rightfully upset. ALMM listing must be verified before procurement, not discovered at claim submission, which is exactly the kind of check that belongs in a documented [inverter procurement](/blog/inverter-procurement-india/) process rather than left to individual site managers' memory. The [MNRE ALMM list](https://mnre.gov.in/) is updated quarterly, check the current version before specifying equipment for a PM Surya Ghar project.

## The Honest Summary

Running a solar EPC business in India is viable but not easy. [MNRE's annual installation reports](https://mnre.gov.in/) show rooftop solar additions accelerating, the market is growing, and well-positioned EPC businesses will grow with it. The gross margins are real, 22–28% at project level is achievable. The challenges are in the layers below gross margin: customer acquisition cost, after-sales burden, and working capital tied up in subsidy receivables.

The installers who build durable businesses share three characteristics:

1. **They measure their CAC and after-sales cost.** Not as a calculation once a year, but as a rolling metric on every project, tracked through [sales reports and analytics](https://quickestimate.co/features/sales-reports/) rather than reconstructed from memory at tax time.

2. **They invest in after-sales quality.** Because referrals are the cheapest acquisition channel, and referrals come from satisfied customers, and satisfied customers require good after-sales.

3. **They choose inverter brands that reduce their operational cost.** Remote diagnostics, fast RMA, and ALMM compliance are not premium features, they are cost-reduction tools.

Qbits' distributor and EPC partner program is built around this reality, supporting partners with the remote diagnostic tools, RMA process, and margin structure that makes the unit economics work. If you are an EPC installer or distributor interested in what this partnership looks like in practice, [talk to our commercial team](/contact-us/) or review the [authorised service partner network](/authorized-service-partners/). For a sense of what a similar arrangement looks like from the installation side, see what it takes to become a channel partner with a solar EPC and equipment network.

For technical references, the [solar EPC bid evaluation guide](/blog/how-to-evaluate-solar-epc-bids/) and [solar CAPEX vs OPEX guide](/blog/solar-capex-vs-opex-business-india/) cover the customer-facing financial frameworks that EPC teams use to close commercial deals.
