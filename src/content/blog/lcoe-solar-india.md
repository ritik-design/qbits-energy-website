---
title: "LCOE of Solar in India: ₹4.8/kWh for a 50 kW C&I Plant"
excerpt: "LCOE of solar in India for a 50 kW C&I plant works out to about ₹4.8/kWh at a 9% discount rate (₹4.4 after depreciation), against ₹7–12/kWh on the grid. Formula, inputs and sensitivity table."
description: "LCOE of solar in India for a 50 kW C&I plant: about ₹4.8/kWh (₹4.4 after depreciation). Formula, inputs and a sensitivity table for CFOs."
category: "Industry"
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "18 min"
image: "/og/blog-lcoe-solar-india.webp"
author: "Akash Hirapara"
keywords:
  - lcoe solar india
  - levelised cost of energy solar india
  - c&i solar lcoe calculation
  - solar vs grid tariff india
  - accelerated depreciation solar india
faqs:
  - q: "What is LCOE and why does it matter for C&I solar buyers in India?"
    a: "LCOE stands for Levelised Cost of Energy - the total lifetime cost of a solar plant divided by the total lifetime kilowatt-hours it generates. For a C&I buyer, it converts a large upfront capital expense into a per-unit energy cost that can be compared directly to the grid tariff or diesel generator cost. In the baseline worked example in this post, a 50 kW plant has an LCOE of about ₹4.8/kWh, against a grid tariff of ₹9/kWh. Bankers and CFOs use LCOE because it accounts for financing costs, degradation, and O&M in a single comparable number."
  - q: "What is the LCOE of solar in India for a C&I installation in 2026?"
    a: "In the worked example in this post, a 50 kWp commercial rooftop plant at ₹55,000/kWp, 5.0 peak sun hours, 78% performance ratio and a 9% discount rate has an LCOE of about ₹4.8 per kWh (₹4.4 after the Year-1 depreciation tax shield). Changing one input at a time (CAPEX ₹45,000–65,000/kWp, 4.0–6.0 peak sun hours, discount rate 7–12%) keeps the result between roughly ₹4.0 and ₹6.0 per kWh, and extreme combinations of all three move it wider. That is below a typical all-in commercial grid tariff of ₹7–12/kWh and far below diesel generation, where fuel alone is ₹24–30/kWh at ₹95–104 per litre (October 2026). It is an illustrative model, not a quotation: replace the inputs with your own quote, roof and tariff."
  - q: "How does accelerated depreciation reduce LCOE for C&I buyers in India?"
    a: "Under the Income-tax depreciation rules, solar generating systems qualify for accelerated depreciation of 40% (written-down-value basis) in the first year, and the first-year rate is halved if the plant is used for fewer than 180 days in that financial year. On a ₹27.5 lakh investment at a 25% tax rate, 40% depreciation is ₹11 lakh and the tax shield is ₹2.75 lakh, which reduces net CAPEX to ₹24.75 lakh. Using that net CAPEX in the LCOE formula lowers the levelised cost by about 8.5%, from ₹4.79/kWh to ₹4.38/kWh on the baseline 50 kW plant. Depreciation and tax treatment depend on the company, so confirm them with your accountant."
  - q: "What discount rate should I use for LCOE calculation in India?"
    a: "For Indian SMEs and mid-market C&I buyers, the appropriate discount rate is the Weighted Average Cost of Capital (WACC) - typically 8–10% in 2026. If the project is financed through IREDA or a PSU bank green loan at 9–10.5% interest, use that borrowing cost adjusted for the equity-debt mix. Using a higher discount rate (12–14%) penalises long-duration assets like solar and should only apply when the company faces that actual cost of capital in its core business."
  - q: "Is LCOE the right metric for SMEs evaluating solar, or should they use payback period?"
    a: "Both metrics are complementary. Simple payback period (CAPEX ÷ annual savings) is easier to compute and is sufficient for projects under ₹50 lakh with straightforward financing. LCOE becomes essential when there is project debt involved, when the CA or CFO must produce IRR and NPV analysis for board sign-off, or when a bank requires Debt Service Coverage Ratio (DSCR) modelling. Projects above ₹1 crore almost always require LCOE and DSCR documentation for loan approval."
  - q: "How does panel degradation affect LCOE?"
    a: "Panel degradation - typically 0.5% per year for modern monocrystalline modules - reduces annual generation progressively over 25 years. A 50 kWp plant generating 71,175 kWh in Year 1 (5.0 peak sun hours, 0.78 performance ratio) produces about 63,100 kWh in Year 25 after compounded degradation. Using the flat Year 1 figure for all 25 years overstates lifetime generation by about 6%, which understates LCOE by about 4% once discounting is applied. A correct LCOE model always uses a degradation-adjusted generation series, not a flat annual figure."
  - q: "How does LCOE compare to a Power Purchase Agreement (PPA) rate?"
    a: "A PPA rate is the per-unit price an RESCO charges a C&I buyer in a zero-CAPEX arrangement. Indicative PPA rates for commercial rooftop installations are ₹4.5–6.5/kWh. A buyer with CAPEX access and a company WACC below 10% should calculate their own LCOE first - if their LCOE is about ₹4.4–4.8/kWh as in the worked example in this post, a PPA at ₹5.5/kWh leaves a thinner margin than the headline grid saving suggests, and the buyer must weigh that margin against the CAPEX, O&M and inverter-replacement risk a PPA transfers to the RESCO. The LCOE calculation is the benchmark against which a PPA offer should be judged. PPA rates vary by state, size and tenure, so treat the ₹4.5–6.5 range as indicative and get written offers."
  - q: "What inputs does a bank or project financier require for C&I solar loan approval?"
    a: "Lenders typically ask for the borrower's financial statements and credit history, the project's technical design and a bill of quantities, an itemised EPC or vendor quotation, the electricity bill and sanctioned load, the DISCOM or open-access approval status, the PPA or offtake terms if any, and the equipment datasheets and warranty documents. Requirements differ by bank, so get the lender's checklist before you finalise the quotation. Ask your vendor for model-wise datasheets and written warranty terms early, because lenders often want them with the application."
---

> **Qbits warranty and service terms:** Qbits' public datasheets describe an expandable warranty but do not give a base term, remedy, registration deadline, service response time or exclusions. Obtain the current written terms for the exact model and sale before relying on a headline claim.

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

Every month, finance managers at Indian factories, hospitals, and commercial buildings receive electricity bills that run ₹3–15 lakh. The question that lands on a CFO's desk is almost always the same: "Should we install solar, and if so, what does the electricity actually cost us over 25 years?" The answer requires one number, the [LCOE](/glossary/lcoe/), or Levelised Cost of Energy. LCOE of solar in India for a well-sized 50 kW C&I plant works out to about ₹4.8 per kWh on this post's baseline inputs (₹4.0–6.0 across realistic CAPEX, sunshine and discount-rate combinations). The grid charges ₹7–12 all-in. Diesel fuel alone costs ₹24–30. Solar wins on most sites, but the margin depends on your inputs, so it pays to build the model correctly.

> [!KEYTAKEAWAYS]
> - LCOE for a 50 kW C&I rooftop plant in India works out to about ₹4.8/kWh on the baseline inputs (₹4.0–6.0 across the sensitivity ranges), versus an all-in grid tariff of ₹7–12/kWh and diesel fuel alone at ₹24–30/kWh.
> - [Accelerated depreciation](https://www.heavengreenenergy.com/blog/accelerated-depreciation-solar) at 40% cuts effective LCOE by about 8.5% when only the Year-1 tax shield is counted, from ₹4.79/kWh to ₹4.38/kWh in the worked example. Confirm tax treatment with your accountant.
> - LCOE becomes a banking requirement once a project needs a term loan, crosses roughly ₹50–75 lakh in CAPEX, or applies for open access status.
> - Using flat annual generation instead of a degradation-adjusted series is the most common modelling error, overstating lifetime output by about 6%.
> - A long inverter warranty with a clear written remedy, where the document actually provides one, reduces the mid-life replacement provision in the DSCR model and strengthens project bankability.

> **Direct answer.** The LCOE of solar in India for a 50 kW C&I rooftop installation is about ₹4.8/kWh in the baseline example (₹4.0–6.0 across realistic inputs), calculated as total discounted lifetime cost (₹27.5 lakh CAPEX plus escalating O&M) divided by total discounted lifetime generation (71,175 kWh in Year 1, declining 0.5%/year over 25 years, at a 9% discount rate). That is roughly half of a ₹9/kWh commercial grid tariff and far below diesel generation, where fuel alone costs ₹24–30/kWh. The inputs are illustrative; swap in your own quote and tariff. The C&I LCOE Calculator (6 Inputs, One Number) gives any CFO or CA a defensible figure in under 30 minutes.

This post walks through the complete LCOE formula, real numbers for a 50 kWp commercial plant, the [accelerated depreciation](https://www.heavengreenenergy.com/blog/accelerated-depreciation-25-percent-vs-40-percent) adjustment that most finance managers miss, a full sensitivity analysis table, and the conditions under which LCOE analysis becomes a banking requirement rather than an optional exercise. Many of these facilities eventually hand the build itself to a commercial solar installation partner once the LCOE case is approved.

## What LCOE Means: The Formula Explained

[LCOE](/glossary/lcoe/) is defined as the ratio of the total discounted lifetime cost of a generating asset to the total discounted lifetime energy it produces. In mathematical form:

> [!FORMULA] LCOE
> LCOE = Σ (Cost_t / (1 + r)^t) ÷ Σ (Energy_t / (1 + r)^t)

Where:
- **Cost_t** = all costs in year *t* (CAPEX in year 0, O&M in years 1–25)
- **Energy_t** = electricity generated in year *t* (kWh)
- **r** = discount rate (the project's [WACC](/glossary/irr/) or cost of debt)
- **t** = year index from 0 to 25

The discount rate is critical because it adjusts future costs and future generation for the time value of money. A rupee saved in Year 15 is worth less than a rupee saved today. LCOE folds this time value calculation into a single flat rate, the breakeven tariff at which the plant would return exactly zero NPV over its life.

### Why LCOE Beats Simple Payback for C&I Projects

Simple payback (CAPEX ÷ annual savings) ignores three things that matter enormously at C&I scale: the cost of debt, panel degradation, and O&M escalation. A 50 kW plant with a 5-year payback does not produce the same financial outcome if the project is debt-financed at 10% versus equity-funded from cash reserves. LCOE captures the financing cost explicitly through the discount rate. For plant sizes above ₹50 lakh (where IREDA loans, PSU bank green-bond financing, or external commercial borrowing is involved) LCOE and DSCR are the required outputs. Simple payback is a residential homeowner's shortcut, not a finance manager's tool.

## The 6 Inputs for LCOE Solar India: A C&I Baseline

A 50 kWp rooftop installation on a commercial or industrial facility in peninsular India serves as the worked example. Every input below is an illustrative assumption, set from market ranges published in mid-2026. Replace each one with your own quote, roof data and tariff before using the result.

Table: Baseline inputs for the 50 kWp C&I worked example

| Input | Value | Notes |
| --- | --- | --- |
| System size | 50 kWp | Typical factory / commercial building |
| [CAPEX](/glossary/capex/) (₹/kWp) | ₹55,000/kWp | Upper-middle of the ₹44,000–60,000/kWp range installers published for 50 kW plants in 2026 (see note below) |
| Total CAPEX | ₹27.5 lakh | 50 × ₹55,000 |
| Annual [O&M](/glossary/opex/) | ₹37,500 | ₹750/kWp/year; escalating 3%/year |
| System life | 25 years | Standard PV module warranty horizon |
| Panel degradation | 0.5%/year | Monocrystalline standard |
| Discount rate (r) | 9% | Indian SME WACC; 8–10% range |
| Daily peak sun hours | 5.0 h | Peninsular India median |
| Gross generation before losses (Year 1) | 91,250 kWh | 50 × 5.0 × 365 |
| Performance ratio | 0.78 | Accounts for soiling, wiring, inverter losses (assumed) |
| Net generation (Year 1) | 71,175 kWh | 91,250 × 0.78 |

> [!NOTE] Where the ₹55,000/kWp CAPEX comes from
> Kondaas listed ₹22–28 lakh for a 50 kW commercial system (about ₹44,000–56,000/kWp, published 27 May 2026) and Fulminous listed ₹45–60 per watt for 50 kW (8 July 2026). Both are installer price lists, not tenders, and neither states its GST basis clearly. MNRE's benchmark of ₹50,000/kW for the first 2 kW and ₹45,000/kW beyond (13 February 2024) covers residential PM Surya Ghar systems only, not C&I. ₹55,000/kWp is therefore an illustrative planning figure; the sensitivity tables below run ₹45,000–65,000. Get at least two written quotes.

Using these inputs, the discounted lifetime generation across 25 years, applying 0.5% degradation and a 9% discount rate, totals approximately **672,600 kWh**. The discounted total cost is the ₹27.5 lakh CAPEX plus the discounted O&M series of about ₹4.73 lakh, or approximately **₹32.2 lakh**. Dividing: **LCOE ≈ ₹4.79/kWh**.

This figure is the baseline before accelerated depreciation, before any concessional financing and before any mid-life inverter replacement. At ₹4.79 per unit the plant undercuts a ₹8–10/kWh commercial tariff by about ₹3.2–5.2 per unit on every unit consumed from the rooftop. It does not undercut a ₹4.5–5/kWh tariff, so check your own bill before relying on the saving.

## The C&I LCOE Calculator: 6 Inputs, One Number

This is the named framework every CFO and CA can apply to any C&I solar proposal received from an EPC contractor or RESCO. Six inputs, verified in sequence, produce a defensible LCOE figure.

### The C&I LCOE Calculator: 6 Inputs, One Number

<!-- steps -->
1. **Net CAPEX after AD**: Start with the EPC quote in ₹/kWp. Multiply by system size in kWp to get gross CAPEX. Then subtract the Year 1 tax shield from 40% accelerated depreciation (Section 32, Income Tax Act): Tax Shield = Gross CAPEX × 40% × effective tax rate. Net CAPEX = Gross CAPEX − Tax Shield.

2. **Realistic annual generation**: Take system size in kWp × daily peak sun hours for your location × 365 days × performance ratio (0.75–0.80 for a well-maintained rooftop). Do not accept EPC generation claims above 1,600 kWh/kWp/year for most of India (the baseline here is 1,423 kWh/kWp/year); cross-check against NASA POWER or NREL's [Global Solar Atlas](https://globalsolaratlas.info/) data for your pincode.

3. **Degradation schedule**: Apply 0.5%/year compounded degradation to Year 1 generation. Year 2 = Year 1 × 0.995, Year 3 = Year 2 × 0.995, and so on. Sum the 25-year generation series. This is the denominator of your LCOE.

4. **O&M cost series**: Use ₹750–1,000/kWp/year as Year 1 O&M, escalating at 3–4% per year. This covers annual module cleaning, inverter AMC, string monitoring, earthing checks, and inverter board servicing. Add CAPEX to Year 0 of the cost series.

5. **Discount rate**: Use your company's WACC or the blended cost of debt if project-financed. Most Indian SMEs land between 8% and 10%. If unsure, use 9% as the mid-case.

6. **Discount the two series**: Apply the discount rate to both the cost series (numerator) and the generation series (denominator) year by year. Divide the sum of discounted costs by the sum of discounted generation. The result is your LCOE in ₹/kWh.

Any EPC contractor or financing institution that cannot show you a model with these six inputs is presenting an incomplete analysis. Request the spreadsheet, verify the generation assumption against an independent source, and confirm the discount rate matches your actual cost of capital, not a promotional rate shown to make the IRR look more attractive. CFOs who prefer to run the same six inputs interactively rather than in a spreadsheet can use a dedicated [solar financial modeling tool](https://surgepv.com/generation-financial-tool/).

## How Accelerated Depreciation Cuts Effective LCOE by About 8–9%

Accelerated depreciation is the single most valuable fiscal instrument available to C&I solar buyers in India, and it is systematically underused because most facility managers do not consult their CA before evaluating a solar proposal.

Under the Income-tax depreciation rules, solar power generating systems qualify for accelerated depreciation of 40% on a written-down-value basis (Section 32 of the 1961 Act, now carried into the Income-tax Act, 2025; confirm the current section and rate with your accountant). If the plant is used for fewer than 180 days in the financial year, the first-year rate is halved. For a profitable company paying about 25% tax, this creates a cash tax saving in the year of installation. The model here counts only the Year-1 shield and ignores the smaller shields from later-year depreciation, so it is conservative.

Table: Accelerated depreciation tax shield on the 50 kWp example (25% tax rate assumed)

| Scenario | Value |
| --- | --- |
| Gross CAPEX (50 kWp at ₹55,000/kWp) | ₹27,50,000 |
| Year 1 depreciation (40%) | ₹11,00,000 |
| Tax rate assumed | 25% |
| Year 1 tax shield | ₹2,75,000 |
| Net effective CAPEX | ₹24,75,000 |
| Reduction in effective CAPEX | 10.0% |
| Impact on LCOE (net CAPEX ₹24.75 lakh) | ₹4.79 → ₹4.38/kWh (-8.5%) |

The ₹2.75 lakh tax saving arrives in the same financial year as the installation, provided the company has taxable profit to absorb the depreciation. The net CAPEX reduction of 10% reduces the LCOE by about 8.5%, because CAPEX is about 85% of the total discounted cost in this model (₹27.5 lakh of ₹32.2 lakh).

For companies that cannot fully absorb the depreciation in Year 1 (because taxable profit is insufficient) the depreciation can be carried forward. This delays but does not eliminate the benefit, and the LCOE impact should be modelled with the actual timing of the tax shield to avoid overstating Year 1 savings.

The [solar inverter depreciation tax benefits](/blog/solar-inverter-depreciation-in-india/) guide covers the full interaction between plant life, depreciation schedules, and ITR filing in greater detail for companies with complex tax positions.

## LCOE Sensitivity Analysis: Where Your Number Will Land

LCOE is not a single fixed number. It varies with CAPEX (driven by the EPC market and imported module prices), the discount rate (driven by your financing structure), and local irradiance (driven by geography and roof orientation). The table below shows LCOE outcomes across the realistic range of each input for a 50 kWp C&I installation in India.

**Sensitivity to CAPEX (discount rate fixed at 9%, irradiance 5.0 PSH, 0.78 performance ratio, O&M ₹750/kWp escalating 3%):**

Table: LCOE sensitivity to CAPEX, as modelled in this article (9% discount rate, 5.0 PSH)

| CAPEX (₹/kWp) | Total CAPEX | LCOE (pre-AD) | LCOE (post-AD at 25% tax, Year-1 shield) |
| --- | --- | --- | --- |
| ₹45,000 | ₹22.5 lakh | ₹4.05/kWh | ₹3.71/kWh |
| ₹50,000 | ₹25.0 lakh | ₹4.42/kWh | ₹4.05/kWh |
| ₹55,000 | ₹27.5 lakh | ₹4.79/kWh | ₹4.38/kWh |
| ₹60,000 | ₹30.0 lakh | ₹5.16/kWh | ₹4.72/kWh |
| ₹65,000 | ₹32.5 lakh | ₹5.54/kWh | ₹5.05/kWh |

**Sensitivity to discount rate (CAPEX fixed at ₹55,000/kWp, irradiance 5.0 PSH):**

Table: LCOE sensitivity to discount rate, as modelled in this article (same CAPEX, 5.0 PSH)

| Discount Rate | LCOE (pre-AD) | LCOE (post-AD) |
| --- | --- | --- |
| 7% | ₹4.18/kWh | ₹3.84/kWh |
| 8% | ₹4.48/kWh | ₹4.11/kWh |
| 9% | ₹4.79/kWh | ₹4.38/kWh |
| 10% | ₹5.11/kWh | ₹4.67/kWh |
| 12% | ₹5.77/kWh | ₹5.26/kWh |

**Sensitivity to irradiance (CAPEX ₹55,000/kWp, discount rate 9%):**

Table: LCOE sensitivity to peak sun hours, as modelled in this article (same CAPEX, 9% discount rate, 0.78 performance ratio)

| Location / PSH | Annual Generation | LCOE (pre-AD) |
| --- | --- | --- |
| Northeast / Hilly (4.0 PSH) | 56,940 kWh | ₹5.99/kWh |
| Central India (4.5 PSH) | 64,058 kWh | ₹5.33/kWh |
| Peninsular median (5.0 PSH) | 71,175 kWh | ₹4.79/kWh |
| Rajasthan / Gujarat (5.5 PSH) | 78,293 kWh | ₹4.36/kWh |
| Peak desert zone (6.0 PSH) | 85,410 kWh | ₹3.99/kWh |

Moving one input at a time keeps LCOE between about ₹4.0 and ₹6.0/kWh. Stacking the worst case on all three (4.0 PSH, ₹65,000/kWp and a 12% discount rate) gives about ₹8.4/kWh, which is above the low end of the ₹7–12 commercial tariff range; the best case (6.0 PSH, ₹45,000/kWp, 7%) gives about ₹3.0/kWh. So solar beats a ₹9+ tariff in nearly every single-input case, but a low-sun site with high CAPEX and an expensive cost of capital needs to be checked against the actual tariff, not assumed.

## Comparing LCOE: Solar vs Grid vs Diesel in India

The LCOE comparison framework makes the three-way cost comparison explicit. A C&I facility typically draws power from a mix of grid supply, captive diesel generation (for backup or peak shaving), and increasingly from rooftop solar. Each source has a different effective cost per unit.

### Grid C&I Tariff

Commercial and industrial consumers in India face tariffs that include energy charges, demand charges (fixed per kVA of sanctioned load), fuel surcharges, wheeling charges (in open access), and power factor penalties. The all-in effective cost per kWh (accounting for demand charges prorated against actual consumption) ranges from **₹7 to ₹12/kWh** for most commercial establishments, and can reach ₹14/kWh in states with cross-subsidy surcharges on HT consumers. The [DISCOM](/glossary/discom/) tariff orders published annually by each State Electricity Regulatory Commission (SERC) set these rates.

### Diesel Generator Cost

A diesel generator set consuming fuel at ₹95–104/litre (retail on 14 October 2026: Delhi ₹95.20, Tamil Nadu ₹101.55, Hyderabad ₹104.23, per [CarDekho](https://www.cardekho.com/diesel-price)) and delivering 3.5–4.0 kWh per litre produces electricity at **₹24–30/kWh on fuel alone**, before maintenance and engine wear; part-load operation pushes the figure higher. A facility running a 50 kW DG set at full load for 8 hours daily burns about 100–114 litres, or roughly ₹9,500–12,000 per day in fuel. The complete [solar vs diesel generator](/blog/solar-vs-diesel-generator-india/) comparison (including IRR analysis and DG displacement calculations) is covered in a dedicated post for C&I buyers evaluating full DG replacement.

### Solar LCOE

As calculated above, a 50 kWp C&I plant in peninsular India produces power at about **₹4.8/kWh** on a levelised basis over 25 years (**₹4.0–6.0/kWh** across the single-input sensitivities), dropping to about **₹4.4/kWh** (**₹3.7–5.5**) after the Year-1 accelerated depreciation tax shield. The comparison is summarised below.

Table: Solar LCOE versus grid, diesel and PPA cost per kWh (2026), as stated in this article

| Energy Source | Cost per kWh (2026) | 25-Year Cost Basis |
| --- | --- | --- |
| Solar LCOE (C&I rooftop) | ₹4.0–6.0/kWh (baseline ₹4.8) | Discounted lifetime, post-AD: ₹3.7–5.5 |
| Grid - Commercial/Industrial | ₹7–12/kWh (indicative all-in range; use your own bill) | Illustrative 4–5%/year escalation |
| Diesel Generator (captive) | ₹24–30/kWh, fuel only | Diesel ₹95–104/litre on 14 Oct 2026 at 3.5–4.0 kWh/litre |
| PPA (RESCO, zero CAPEX) | ₹4.5–6.5/kWh (indicative) | Fixed or escalating as per PPA terms |

The solar LCOE is cheaper than the grid on most sites today, and the advantage can widen over time if grid tariffs and diesel prices escalate while the plant's cost per unit stays fixed at the time of installation. For illustration, a ₹9/kWh tariff escalating at 4–5% a year would reach about ₹12.8–14.0/kWh by 2035; actual escalation depends on your state's tariff orders.

> **₹2.56/kWh.** Average tariff of central-agency solar auctions (SECI, NTPC, PFC) from November 2023 to December 2024, per [Renewable Watch's tariff trends review](https://renewablewatch.in/2024/12/17/tariff-trends-review-of-renewable-energy-tender-auctions/) (17 December 2024). Utility-scale plants buy cheaper and finance at lower cost; the 50 kW rooftop baseline of about ₹4.8/kWh is higher for that reason.

## When LCOE Analysis Becomes a Banking Requirement

For most small C&I solar projects (a 20 kW school, a 30 kW clinic, a 50 kW shop floor) the finance manager can use a simple payback calculation and sign off. But above certain thresholds, LCOE analysis transitions from optional to mandatory. Understanding these thresholds determines how much modelling effort is justified.

### Project Finance and Term Loans

Any C&I solar project seeking a term loan from a bank, NBFC, or development finance institution (including IREDA) will require a formal energy yield assessment and an LCOE-based financial model as part of the loan appraisal package. The lender's credit team calculates Debt Service Coverage Ratio (DSCR): the ratio of annual project cash flow to annual debt service (principal + interest). Banks typically require a minimum DSCR of 1.2× - meaning the project must generate 20% more cash than required to service the debt, in every year of the loan tenure.

A DSCR model cannot be built without an LCOE model as its foundation. The generation series (with degradation), the O&M cost series (with escalation), and the discount rate are all shared inputs between the LCOE and DSCR calculations. [Inverter financing options in India](/blog/inverter-financing-options-in-india/) (including IREDA term loans, SBI Green Bond financing, and NBFC solar-specific products) all involve this documentation requirement.

### Board or CFO Sign-Off on Large Capital Expenditure

Most Indian companies require board or CFO approval for capital expenditure above ₹50–75 lakh. A solar project at this scale almost always requires a full financial model (LCOE, IRR, NPV, and sensitivity analysis) as part of the capital expenditure approval memorandum. The IRR (internal rate of return) is the discount rate at which the project's NPV equals zero. A 50 kWp plant with the inputs above, saving ₹9/kWh of grid power, delivers a pre-tax project IRR of about **21%** over 25 years (see the cash-flow section below), well above the 10–12% hurdle rate most Indian CFOs apply to capital projects. For context, IRENA's [Renewable Power Generation Costs in 2023](https://www.irena.org/Publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023) puts the global weighted-average LCOE of utility-scale solar PV at US$0.044/kWh. A 50 kW rooftop plant buys and finances at smaller scale, so its LCOE in India sits above that utility-scale benchmark, as the ₹4.8/kWh baseline does.

### Open Access Solar for Large Consumers

Industrial consumers with connected load above 1 MW seeking open access supply from a third-party solar developer (a growing structure in states like Gujarat, Maharashtra, Rajasthan, and Karnataka) must submit detailed LCOE models to the SERC or nodal agency as part of the open access application. The model must demonstrate that the arrangement is genuinely cheaper than DISCOM supply on a lifecycle basis, factoring in wheeling charges, transmission losses, and banking charges.

The [3-phase solar inverter](/blog/3-phase-solar-inverter/) specifications and harmonic performance data are a required part of the technical documentation in these applications, particularly for HT consumers with variable frequency drive loads.

## Where Finance Managers Get LCOE Wrong: 5 Common Errors

### Error 1: Using Flat Annual Generation

The most common modelling error is using a constant annual generation figure (say, 71,175 kWh) across all 25 years without applying panel [degradation](/glossary/degradation/). In the baseline example this overstates lifetime generation by about 6% (1,779,375 kWh against 1,676,595 kWh), understates LCOE by about 4% (₹4.61 against ₹4.79 per kWh) and lifts the IRR by about 0.6 percentage points (21.6% against 21.0%). Always apply 0.5%/year degradation to the generation series.

### Error 2: Ignoring O&M Escalation

O&M costs for a solar plant are not fixed in nominal terms. Labour costs, cleaning consumables, and inverter AMC contracts typically escalate at 3–5% per year. A model that holds O&M flat at ₹37,500 per year across 25 years understates total discounted costs; in the baseline example it gives ₹4.64 per kWh instead of ₹4.79, about 3% too low.

### Error 3: Using the Wrong Discount Rate

Some EPC contractors present LCOE calculations using a 6% or 7% discount rate, which is below the actual WACC of almost every Indian SME. A lower discount rate mechanically lowers LCOE (by discounting far-future costs more gently) and makes the project appear more attractive. Always use the company's actual borrowing rate or blended WACC. For a project with 70% debt at 10.5% and 30% equity at 14%, the blended cost of capital is approximately 11.6% before any tax benefit on interest, not 7%. At a 6% discount rate the baseline LCOE would show as ₹3.90/kWh instead of ₹4.79, about 19% too low.

### Error 4: Omitting the Accelerated Depreciation Benefit

Many LCOE models presented by EPCs omit the accelerated depreciation tax shield because it falls on the buyer's P&L rather than the project's standalone economics. For a C&I buyer evaluating the investment from their own balance sheet (which is the correct perspective) the 40% Year 1 depreciation under Section 32 is a real cash benefit that reduces the effective net CAPEX. In the baseline example the LCOE falls from ₹4.79 to ₹4.38/kWh once the Year-1 tax shield is counted, which can tip a marginal project.

### Error 5: Applying GST on the Wrong Base

[GST on solar inverters and balance-of-system components](/blog/gst-on-solar-inverters-2026/) in India varies by component type: solar generating equipment has attracted 5% GST since 22 September 2025, while mounting structures, civil work and some services can attract 18%. Compare quotes on a like-for-like GST basis, and model the cost net of any input tax credit your business can actually claim (confirm with your CA). Leaving GST out of one quote but not another understates that quote's CAPEX and therefore its LCOE.

## LCOE for a 50 kW Plant: Year-by-Year Cash Flow Summary

The table below shows the first ten years and Year 25 of the LCOE model for the baseline 50 kWp C&I plant, pre-AD, at 9% discount rate, ₹55,000/kWp CAPEX, 0.5% degradation, ₹750/kWp Year 1 O&M escalating at 3%/year. Cash flows are taken at year-end.

Table: Year-by-year generation and cost series for the 50 kWp baseline plant (pre-AD, 9% discount rate)

| Year | Net Generation (kWh) | O&M Cost (₹) | Discounted Generation (kWh) | Discounted Cost (₹) |
| --- | --- | --- | --- | --- |
| 0 (CAPEX) | - | - | - | ₹27,50,000 |
| 1 | 71,175 | ₹37,500 | 65,298 | ₹34,404 |
| 2 | 70,819 | ₹38,625 | 59,607 | ₹32,510 |
| 3 | 70,465 | ₹39,784 | 54,412 | ₹30,720 |
| 4 | 70,113 | ₹40,977 | 49,670 | ₹29,029 |
| 5 | 69,762 | ₹42,207 | 45,341 | ₹27,431 |
| 6 | 69,413 | ₹43,473 | 41,389 | ₹25,921 |
| 7 | 69,066 | ₹44,777 | 37,782 | ₹24,495 |
| 8 | 68,721 | ₹46,120 | 34,489 | ₹23,146 |
| 9 | 68,377 | ₹47,504 | 31,483 | ₹21,872 |
| 10 | 68,035 | ₹48,929 | 28,739 | ₹20,668 |
| … | … | … | … | … |
| 25 | 63,108 | ₹76,230 | 7,318 | ₹8,840 |
| **Total** | **~1,676,600** | **~₹13.7 lakh** | **~672,600** | **~₹32.2 lakh** (₹27.5 lakh CAPEX + ₹4.73 lakh discounted O&M) |

> [!FORMULA] LCOE for the baseline plant, as calculated in this article
> LCOE = (₹27,50,000 CAPEX + ₹4,73,243 discounted O&M) ÷ 672,559 discounted kWh = ₹32,23,243 ÷ 672,559 ≈ ₹4.79/kWh

```chart
type: hbar
title: Cost per kWh for a 50 kW C&I site, solar versus alternatives (illustrative ranges)
unit: "₹/kWh"
source: "Solar rows calculated in this article from the stated inputs. Grid and PPA ranges are indicative figures stated in this article, not tariff-order quotes. Diesel is fuel only: ₹95.20-104.23 per litre (CarDekho, 14 Oct 2026) divided by 3.5-4.0 kWh per litre."
sourceUrl: https://www.cardekho.com/diesel-price
note: "Solar ranges move one input at a time (CAPEX, sun hours, discount rate). Check your own tariff bill."
data:
  - { label: "Solar LCOE, pre-AD", min: 4.0, max: 6.0 }
  - { label: "Solar LCOE, post-AD", min: 3.7, max: 5.5 }
  - { label: "PPA (indicative)", min: 4.5, max: 6.5 }
  - { label: "Grid, commercial all-in", min: 7, max: 12 }
  - { label: "Diesel generator, fuel only", min: 24, max: 30 }
```

The numbers support a narrower claim than "solar always wins": the baseline plant delivers power at about ₹4.8/kWh, and the present value of grid cost avoided at ₹9/kWh is about ₹60.5 lakh (672,559 discounted kWh × ₹9) against a discounted cost of ₹32.2 lakh, an NPV of roughly ₹28 lakh. Every unit that displaces diesel at ₹24–30/kWh saves far more, but solar only displaces diesel in the hours the plant is generating and the generator would otherwise run.

## How LCOE Connects to IRR and Project Bankability

LCOE is a cost metric. IRR is the corresponding return metric. IRR is built from the plant's cash flows: each year's avoided grid cost (units generated × tariff) less that year's O&M, set against the CAPEX. The LCOE tells you whether ₹4.79/kWh beats your tariff; the IRR tells you how fast the CAPEX comes back.

For the 50 kWp baseline plant, at a flat grid tariff of ₹9/kWh (pre-tax, no tariff escalation, pre-AD):
- **Year 1 avoided grid cost** = 71,175 kWh × ₹9 = ₹6.41 lakh
- **Year 1 net saving** = ₹6.41 lakh − ₹0.375 lakh O&M = **₹6.03 lakh**
- **CAPEX** = ₹27.5 lakh
- **Simple payback** = ₹27.5 lakh ÷ ₹6.03 lakh ≈ **4.6 years**
- **IRR over 25 years** (with degradation and O&M escalation) ≈ **21%**
- **NPV at 9%** ≈ **₹28 lakh**

Table: Baseline 50 kWp plant, pre-tax payback and IRR by grid tariff (CAPEX ₹27.5 lakh, 25 years, 9% NPV discount rate)

| Grid tariff avoided | Escalation | Payback | IRR | NPV at 9% |
| --- | --- | --- | --- | --- |
| ₹7/kWh | none | 6.1 years | 15.5% | ₹14.8 lakh |
| ₹7/kWh | 4%/year | 5.5 years | 19.8% | ₹33.4 lakh |
| ₹9/kWh | none | 4.6 years | 21.0% | ₹28.3 lakh |
| ₹9/kWh | 4%/year | 4.3 years | 25.3% | ₹52.2 lakh |
| ₹12/kWh | none | 3.4 years | 29.0% | ₹48.5 lakh |

These figures are pre-tax and ignore the tax payable on the savings, so treat them as an upper bound on the post-tax return. Counting the Year-1 depreciation tax shield (net CAPEX ₹24.75 lakh) at ₹9/kWh with no escalation lifts the IRR to about 23.5% and shortens payback to about 4.2 years. A ₹7/kWh tariff with no escalation is the weak case, at about 15.5%.

This IRR compares favourably with the 10–15% threshold many Indian CFOs apply to capital projects, but it is an illustrative result from stated inputs, not a forecast for your site. The [solar inverter payback period](/blog/solar-inverter-payback-period/) post explains the relationship between inverter efficiency, system yield, and how payback interacts with IRR in detail. For the national capacity picture, see [India Solar Statistics 2026](/blog/india-solar-statistics-2026-data/).

## LCOE Modelling for Banking and Project Finance

If a C&I project is being submitted to a bank or NBFC for term loan approval, the LCOE model must meet a higher standard than an internal finance manager's back-of-envelope estimate. Lenders require:

- **Independent energy yield assessment**: a PVsyst simulation or third-party solar resource assessment confirming the generation assumption. The lender does not accept EPC projections at face value.
- **Degradation schedule documentation**: the module manufacturer's datasheet showing the 0.5%/year linear degradation guarantee (the standard for tier-1 monocrystalline modules).
- **O&M contract**: a signed Annual Maintenance Contract from the EPC or O&M provider, with pricing that matches the LCOE model's O&M assumption.

- **DSCR projection**: year-by-year cash flow showing that net cash (generation × avoided tariff − O&M − debt service) is positive and above 1.2× debt service in every loan year.

## Where Qbits Fits in the C&I LCOE Equation

C&I buyers who build the LCOE model correctly (using the six-input framework above) arrive at a consistent conclusion: the CAPEX is the largest single driver of LCOE, the inverter is the single most warranty-sensitive component in the system, and the O&M cost is materially influenced by inverter reliability. A 50 kW commercial plant with a single inverter failure in Year 6 (out of warranty, unmonitored) faces a replacement cost that we assume, for illustration, at ₹1.5–3.5 lakh, plus downtime losses. Inserted into the LCOE model as a Year 12 expense at a 9% discount rate, that cost shifts the levelised cost by about ₹0.08–0.18/kWh.

- **[Hybrid Inverters](/hybrid-inverter/)**: Review current QBH model documents and confirm the exact battery, firmware, PV, backup-output, transfer, communication, warranty and project requirements in writing.
- **[C&I Solutions page](/c-i-solution/)**: application-specific guidance for factories, hospitals, educational institutions, and commercial buildings, including load profiling tools and reference LCOE models for common C&I segments.

[Contact Qbits](/contact-us/) with the site, load, equipment and document details relevant to this guide. Confirm the responsible party, deliverable, commercial scope and response time after submission.

The arithmetic of solar LCOE in India is no longer a projection or an aspiration. At about ₹4.8/kWh against a grid tariff of ₹7–12/kWh, the financial case is strong for most C&I sites and is decided by your own inputs. The question that remains is whether the modelling is done correctly, and whether the inverter at the centre of the system is backed by a warranty and a service organisation that the model can actually rely on.
