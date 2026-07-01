---
title: "LCOE of Solar in India, A C&I Buyer's Real Math"
excerpt: "LCOE of solar in India for a 50 kW C&I plant is ₹2.5–3.5/kWh, vs ₹7–12/kWh grid tariff. Real formula, worked numbers, and sensitivity table for CFOs."
description: "Full LCOE calculation for C&I solar in India: CAPEX, O&M, degradation, discount rate, accelerated depreciation, and a sensitivity table for CFO sign-off."
category: "Industry"
date: 2026-06-05
readTime: "18 min"
image: "/blog-images/on-grid-vs-hybrid-solar-inverters-roi.svg"
author: "Akash Hirapara"
keywords:
  - lcoe solar india
  - levelised cost of energy solar india
  - c&i solar lcoe calculation
  - solar vs grid tariff india
  - accelerated depreciation solar india
faqs:
  - q: "What is LCOE and why does it matter for C&I solar buyers in India?"
    a: "LCOE stands for Levelised Cost of Energy - the total lifetime cost of a solar plant divided by the total lifetime kilowatt-hours it generates. For a C&I buyer, it converts a large upfront capital expense into a per-unit energy cost that can be compared directly to the grid tariff or diesel generator cost. A 50 kW plant with an LCOE of ₹3/kWh is objectively cheaper than grid power at ₹9/kWh. Bankers and CFOs use LCOE because it accounts for financing costs, degradation, and O&M in a single comparable number."
  - q: "What is the LCOE of solar in India for a C&I installation in 2026?"
    a: "For a well-sized 50 kW commercial rooftop plant in India, the LCOE lands between ₹2.5 and ₹3.5 per kWh depending on CAPEX (₹5,000–6,000/kWp), local irradiance (4.5–5.5 peak sun hours), and the discount rate applied (8–10% WACC). This is two to four times cheaper than the prevailing commercial grid tariff of ₹7–12/kWh and five to eight times cheaper than diesel generation at ₹18–25/kWh."
  - q: "How does accelerated depreciation reduce LCOE for C&I buyers in India?"
    a: "Under Section 32 of the Income Tax Act, solar assets qualify for 40% accelerated depreciation in Year 1. On a ₹27.5 lakh investment at a 25% tax rate, this delivers a tax shield of approximately ₹2.75 lakh - effectively reducing net CAPEX to ₹24.75 lakh. When this reduced net CAPEX is used in the LCOE formula, the resulting levelised cost drops by 10–15%, from roughly ₹3.2/kWh to ₹2.8/kWh on a typical 50 kW plant."
  - q: "What discount rate should I use for LCOE calculation in India?"
    a: "For Indian SMEs and mid-market C&I buyers, the appropriate discount rate is the Weighted Average Cost of Capital (WACC) - typically 8–10% in 2026. If the project is financed through IREDA or a PSU bank green loan at 9–10.5% interest, use that borrowing cost adjusted for the equity-debt mix. Using a higher discount rate (12–14%) penalises long-duration assets like solar and should only apply when the company faces that actual cost of capital in its core business."
  - q: "Is LCOE the right metric for SMEs evaluating solar, or should they use payback period?"
    a: "Both metrics are complementary. Simple payback period (CAPEX ÷ annual savings) is easier to compute and is sufficient for projects under ₹50 lakh with straightforward financing. LCOE becomes essential when there is project debt involved, when the CA or CFO must produce IRR and NPV analysis for board sign-off, or when a bank requires Debt Service Coverage Ratio (DSCR) modelling. Projects above ₹1 crore almost always require LCOE and DSCR documentation for loan approval."
  - q: "How does panel degradation affect LCOE?"
    a: "Panel degradation - typically 0.5% per year for modern monocrystalline modules - reduces annual generation progressively over 25 years. A 50 kWp plant generating 91,250 kWh in Year 1 produces approximately 79,700 kWh in Year 25 after compounded degradation. Ignoring this overstates lifetime generation by roughly 6%, which understates LCOE by the same proportion. A correct LCOE model always uses a degradation-adjusted generation series, not a flat annual figure."
  - q: "How does LCOE compare to a Power Purchase Agreement (PPA) rate?"
    a: "A PPA rate is the per-unit price an RESCO charges a C&I buyer in a zero-CAPEX arrangement. Typical PPA rates in India range from ₹4.5–6.5/kWh for commercial rooftop installations. A buyer with CAPEX access and a company WACC below 10% should calculate their own LCOE first - if their LCOE is ₹2.8/kWh, a PPA at ₹5.5/kWh is not in their interest. The LCOE calculation is therefore the benchmark against which a PPA offer should be judged."
  - q: "What inputs does a bank or project financier require for C&I solar loan approval?"
    a: "Banks and NBFCs (including IREDA) typically require: a detailed LCOE model, a Debt Service Coverage Ratio (DSCR) projection for each loan year (minimum 1.2×), an energy yield assessment from a certified energy auditor or PVsyst simulation, proof of off-take security (DISCOM net metering agreement or captive consumption certificate), and equipment bankability confirmation including the inverter manufacturer's warranty and BIS/ALMM compliance. Projects that cannot demonstrate DSCR above 1.2× at a 10% stress scenario are unlikely to receive sanction."
---

Every month, finance managers at Indian factories, hospitals, and commercial buildings receive electricity bills that run ₹3–15 lakh. The question that lands on a CFO's desk is almost always the same: "Should we install solar, and if so, what does the electricity actually cost us over 25 years?" The answer requires one number, the [LCOE](/glossary/lcoe/), or Levelised Cost of Energy. LCOE of solar in India for a well-sized C&I plant works out to ₹2.5–3.5 per kWh. The grid charges ₹7–12. Diesel costs ₹18–25. The arithmetic is unambiguous once you know how to build the model correctly.

> **Direct answer.** The LCOE of solar in India for a 50 kW C&I rooftop installation is ₹2.5–3.5/kWh, calculated as total discounted lifetime cost (CAPEX + O&M) divided by total discounted lifetime generation (91,250 kWh in Year 1, declining 0.5%/year over 25 years, at an 8–10% discount rate). This is two to four times cheaper than the commercial grid tariff and five to eight times cheaper than diesel generation. The C&I LCOE Calculator (6 Inputs, One Number) gives any CFO or CA a defensible figure in under 30 minutes.

This post walks through the complete LCOE formula, real numbers for a 50 kWp commercial plant, the accelerated depreciation adjustment that most finance managers miss, a full sensitivity analysis table, and the conditions under which LCOE analysis becomes a banking requirement rather than an optional exercise.

## What LCOE Means: The Formula Explained

[LCOE](/glossary/lcoe/) is defined as the ratio of the total discounted lifetime cost of a generating asset to the total discounted lifetime energy it produces. In mathematical form:

**LCOE = Σ (Cost_t / (1 + r)^t) ÷ Σ (Energy_t / (1 + r)^t)**

Where:
- **Cost_t** = all costs in year *t* (CAPEX in year 0, O&M in years 1–25)
- **Energy_t** = electricity generated in year *t* (kWh)
- **r** = discount rate (the project's [WACC](/glossary/irr/) or cost of debt)
- **t** = year index from 0 to 25

The discount rate is critical because it adjusts future costs and future generation for the time value of money. A rupee saved in Year 15 is worth less than a rupee saved today. LCOE folds this time value calculation into a single flat rate, the breakeven tariff at which the plant would return exactly zero NPV over its life.

### Why LCOE Beats Simple Payback for C&I Projects

Simple payback (CAPEX ÷ annual savings) ignores three things that matter enormously at C&I scale: the cost of debt, panel degradation, and O&M escalation. A 50 kW plant with a 5-year payback does not produce the same financial outcome if the project is debt-financed at 10% versus equity-funded from cash reserves. LCOE captures the financing cost explicitly through the discount rate. For plant sizes above ₹50 lakh (where IREDA loans, PSU bank green-bond financing, or external commercial borrowing is involved) LCOE and DSCR are the required outputs. Simple payback is a residential homeowner's shortcut, not a finance manager's tool.

> **₹3.5 trillion.** Estimated cumulative C&I solar investment in India by 2030 as the segment scales from 7 GW installed capacity (2024) to a projected 35 GW target, per [JMK Research's India Solar Market Outlook](https://jmkresearch.com/) published in early 2025.

## The 6 Inputs for LCOE Solar India: A C&I Baseline

A 50 kWp rooftop installation on a commercial or industrial facility in peninsular India serves as the worked example. Every input below is drawn from market data current as of mid-2026.

| Input | Value | Notes |
| --- | --- | --- |
| System size | 50 kWp | Typical factory / commercial building |
| [CAPEX](/glossary/capex/) (₹/kWp) | ₹5,500/kWp | Mid-range; ₹5,000–6,000/kWp market range |
| Total CAPEX | ₹27.5 lakh | 50 × ₹5,500 |
| Annual [O&M](/glossary/opex/) | ₹37,500 | ₹750/kWp/year; escalating 3%/year |
| System life | 25 years | Standard PV module warranty horizon |
| Panel degradation | 0.5%/year | Monocrystalline standard |
| Discount rate (r) | 9% | Indian SME WACC; 8–10% range |
| Daily peak sun hours | 5.0 h | Peninsular India median |
| Annual generation (Year 1) | 91,250 kWh | 50 × 5.0 × 365 |
| Performance ratio | 0.78 | Accounts for soiling, wiring, inverter losses |
| Net generation (Year 1) | 71,175 kWh | 91,250 × 0.78 |

Using these inputs, the discounted lifetime generation across 25 years, applying 0.5% degradation and 9% discount, totals approximately **770,000 kWh**. The discounted total cost (CAPEX year 0 plus discounted O&M series) totals approximately **₹21.2 lakh** net present value. Dividing: **LCOE ≈ ₹2.75/kWh**.

This figure is the economic floor. Before accelerated depreciation, before net metering revenue, before any concessional financing, the solar plant delivers power at ₹2.75 per unit. The commercial grid tariff in the same facility's DISCOM zone is ₹8–10/kWh. The saving is ₹5.25–7.25 per unit on every unit consumed from the rooftop.

## The C&I LCOE Calculator: 6 Inputs, One Number

This is the named framework every CFO and CA can apply to any C&I solar proposal received from an EPC contractor or RESCO. Six inputs, verified in sequence, produce a defensible LCOE figure.

### The C&I LCOE Calculator: 6 Inputs, One Number

1. **Net CAPEX after AD**: Start with the EPC quote in ₹/kWp. Multiply by system size in kWp to get gross CAPEX. Then subtract the Year 1 tax shield from 40% accelerated depreciation (Section 32, Income Tax Act): Tax Shield = Gross CAPEX × 40% × effective tax rate. Net CAPEX = Gross CAPEX − Tax Shield.

2. **Realistic annual generation**: Take system size in kWp × daily peak sun hours for your location × 365 days × performance ratio (0.75–0.80 for a well-maintained rooftop). Do not accept EPC generation claims above 1,600 kWh/kWp/year for most of India; cross-check against NASA POWER or NREL's [Global Solar Atlas](https://globalsolaratlas.info/) data for your pincode.

3. **Degradation schedule**: Apply 0.5%/year compounded degradation to Year 1 generation. Year 2 = Year 1 × 0.995, Year 3 = Year 2 × 0.995, and so on. Sum the 25-year generation series. This is the denominator of your LCOE.

4. **O&M cost series**: Use ₹750–1,000/kWp/year as Year 1 O&M, escalating at 3–4% per year. This covers annual module cleaning, inverter AMC, string monitoring, earthing checks, and inverter board servicing. Add CAPEX to Year 0 of the cost series.

5. **Discount rate**: Use your company's WACC or the blended cost of debt if project-financed. Most Indian SMEs land between 8% and 10%. If unsure, use 9% as the mid-case.

6. **Discount the two series**: Apply the discount rate to both the cost series (numerator) and the generation series (denominator) year by year. Divide the sum of discounted costs by the sum of discounted generation. The result is your LCOE in ₹/kWh.

Any EPC contractor or financing institution that cannot show you a model with these six inputs is presenting an incomplete analysis. Request the spreadsheet, verify the generation assumption against an independent source, and confirm the discount rate matches your actual cost of capital, not a promotional rate shown to make the IRR look more attractive.

## How Accelerated Depreciation Cuts Effective LCOE by 10–15%

Accelerated depreciation is the single most valuable fiscal instrument available to C&I solar buyers in India, and it is systematically underused because most facility managers do not consult their CA before evaluating a solar proposal.

Under Section 32 of the Income Tax Act, solar power generating systems qualify for 40% depreciation in Year 1. For a profitable company paying the 25% corporate tax rate (or 30% for older entities), this creates a material cash tax saving in the year of installation.

| Scenario | Value |
| --- | --- |
| Gross CAPEX (50 kWp at ₹5,500/kWp) | ₹27,50,000 |
| Year 1 depreciation (40%) | ₹11,00,000 |
| Tax rate assumed | 25% |
| Year 1 tax shield | ₹2,75,000 |
| Net effective CAPEX | ₹24,75,000 |
| Reduction in effective CAPEX | 10.0% |
| Impact on LCOE (illustrative) | ₹2.75 → ₹2.48/kWh |

The ₹2.75 lakh tax saving arrives in the same financial year as the installation, it is a current-year P&L benefit, not a future projection. A CA reviewing the project file will book this as a deferred tax asset offset against the current year's tax liability. The net CAPEX reduction of 10% directly reduces the LCOE by a proportionate amount, since CAPEX constitutes roughly 85–90% of the total discounted cost in the LCOE model.

For companies that cannot fully absorb the depreciation in Year 1 (because taxable profit is insufficient) the depreciation can be carried forward. This delays but does not eliminate the benefit, and the LCOE impact should be modelled with the actual timing of the tax shield to avoid overstating Year 1 savings.

The [solar inverter depreciation tax benefits](/blog/solar-inverter-depreciation-in-india/) guide covers the full interaction between plant life, depreciation schedules, and ITR filing in greater detail for companies with complex tax positions.

## LCOE Sensitivity Analysis: Where Your Number Will Land

LCOE is not a single fixed number. It varies with CAPEX (driven by the EPC market and imported module prices), the discount rate (driven by your financing structure), and local irradiance (driven by geography and roof orientation). The table below shows LCOE outcomes across the realistic range of each input for a 50 kWp C&I installation in India.

**Sensitivity to CAPEX (discount rate fixed at 9%, irradiance 5.0 PSH):**

| CAPEX (₹/kWp) | Total CAPEX | LCOE (pre-AD) | LCOE (post-AD at 25% tax) |
| --- | --- | --- | --- |
| ₹4,500 | ₹22.5 lakh | ₹2.25/kWh | ₹2.03/kWh |
| ₹5,000 | ₹25.0 lakh | ₹2.50/kWh | ₹2.25/kWh |
| ₹5,500 | ₹27.5 lakh | ₹2.75/kWh | ₹2.48/kWh |
| ₹6,000 | ₹30.0 lakh | ₹3.00/kWh | ₹2.70/kWh |
| ₹6,500 | ₹32.5 lakh | ₹3.25/kWh | ₹2.93/kWh |

**Sensitivity to discount rate (CAPEX fixed at ₹5,500/kWp, irradiance 5.0 PSH):**

| Discount Rate | LCOE (pre-AD) | LCOE (post-AD) |
| --- | --- | --- |
| 7% | ₹2.40/kWh | ₹2.16/kWh |
| 8% | ₹2.57/kWh | ₹2.31/kWh |
| 9% | ₹2.75/kWh | ₹2.48/kWh |
| 10% | ₹2.93/kWh | ₹2.64/kWh |
| 12% | ₹3.30/kWh | ₹2.97/kWh |

**Sensitivity to irradiance (CAPEX ₹5,500/kWp, discount rate 9%):**

| Location / PSH | Annual Generation | LCOE (pre-AD) |
| --- | --- | --- |
| Northeast / Hilly (4.0 PSH) | 57,000 kWh | ₹3.44/kWh |
| Central India (4.5 PSH) | 64,125 kWh | ₹3.05/kWh |
| Peninsular median (5.0 PSH) | 71,175 kWh | ₹2.75/kWh |
| Rajasthan / Gujarat (5.5 PSH) | 78,300 kWh | ₹2.50/kWh |
| Peak desert zone (6.0 PSH) | 85,410 kWh | ₹2.30/kWh |

The highest possible LCOE in this matrix (Northeast location, high CAPEX, high discount rate) is approximately ₹4.0/kWh. Even at this worst-case scenario, solar remains cheaper than the commercial grid tariff of ₹7–12/kWh. The LCOE case for C&I solar in India holds firmly across all realistic input combinations.

## Comparing LCOE: Solar vs Grid vs Diesel in India

The LCOE comparison framework makes the three-way cost comparison explicit. A C&I facility typically draws power from a mix of grid supply, captive diesel generation (for backup or peak shaving), and increasingly from rooftop solar. Each source has a different effective cost per unit.

### Grid C&I Tariff

Commercial and industrial consumers in India face tariffs that include energy charges, demand charges (fixed per kVA of sanctioned load), fuel surcharges, wheeling charges (in open access), and power factor penalties. The all-in effective cost per kWh (accounting for demand charges prorated against actual consumption) ranges from **₹7 to ₹12/kWh** for most commercial establishments, and can reach ₹14/kWh in states with cross-subsidy surcharges on HT consumers. The [DISCOM](/glossary/discom/) tariff orders published annually by each State Electricity Regulatory Commission (SERC) set these rates.

### Diesel Generator Cost

A diesel generator set consuming fuel at ₹88–92/litre (June 2026 retail) and operating at 3.5–4.0 kWh per litre of diesel produces electricity at **₹18–25/kWh**: the wide range reflecting engine efficiency, load factor, and maintenance costs. At the top of this range, a facility running a 50 kW DG set for 8 hours daily spends ₹36,000–45,000 per day on fuel alone. The complete [solar vs diesel generator](/blog/solar-vs-diesel-generator-india/) comparison (including IRR analysis and DG displacement calculations) is covered in a dedicated post for C&I buyers evaluating full DG replacement.

### Solar LCOE

As calculated above, a 50 kWp C&I plant in peninsular India produces power at **₹2.5–3.5/kWh** on a levelised basis over 25 years, dropping to **₹2.2–3.0/kWh** after the accelerated depreciation tax shield. The comparison is summarised below.

| Energy Source | Cost per kWh (2026) | 25-Year Cost Basis |
| --- | --- | --- |
| Solar LCOE (C&I rooftop) | ₹2.5–3.5/kWh | Discounted lifetime, post-AD: ₹2.2–3.0 |
| Grid - Commercial/Industrial | ₹7–12/kWh | Rising ~5%/year with tariff escalation |
| Diesel Generator (captive) | ₹18–25/kWh | Rising with fuel price inflation |
| PPA (RESCO, zero CAPEX) | ₹4.5–6.5/kWh | Fixed or escalating as per PPA terms |

The solar LCOE is not just cheaper today, the advantage widens over time because grid tariffs and diesel prices escalate while the solar LCOE is fixed at the time of installation. A plant commissioned in 2026 at ₹2.75/kWh LCOE competes against a grid tariff that is likely to reach ₹12–16/kWh by 2035 at a 4–5% annual escalation rate.

> **₹2.62/kWh.** Average bid-discovered solar tariff in Indian utility-scale auctions in 2024, as reported by [Mercom India's Tender and Auction Tracker](https://www.mercomindia.com/). Rooftop C&I LCOE is slightly higher due to smaller scale but remains well below the commercial retail tariff.

## When LCOE Analysis Becomes a Banking Requirement

For most small C&I solar projects (a 20 kW school, a 30 kW clinic, a 50 kW shop floor) the finance manager can use a simple payback calculation and sign off. But above certain thresholds, LCOE analysis transitions from optional to mandatory. Understanding these thresholds determines how much modelling effort is justified.

### Project Finance and Term Loans

Any C&I solar project seeking a term loan from a bank, NBFC, or development finance institution (including IREDA) will require a formal energy yield assessment and an LCOE-based financial model as part of the loan appraisal package. The lender's credit team calculates Debt Service Coverage Ratio (DSCR): the ratio of annual project cash flow to annual debt service (principal + interest). Banks typically require a minimum DSCR of 1.2× - meaning the project must generate 20% more cash than required to service the debt, in every year of the loan tenure.

A DSCR model cannot be built without an LCOE model as its foundation. The generation series (with degradation), the O&M cost series (with escalation), and the discount rate are all shared inputs between the LCOE and DSCR calculations. [Inverter financing options in India](/blog/inverter-financing-options-in-india/) (including IREDA term loans, SBI Green Bond financing, and NBFC solar-specific products) all involve this documentation requirement.

### Board or CFO Sign-Off on Large Capital Expenditure

Most Indian companies require board or CFO approval for capital expenditure above ₹50–75 lakh. A solar project at this scale almost always requires a full financial model (LCOE, IRR, NPV, and sensitivity analysis) as part of the capital expenditure approval memorandum. The IRR (internal rate of return) is the discount rate at which the project's NPV equals zero. A 50 kWp plant with the inputs above typically delivers an IRR of **18–24%** over 25 years, well above the 10–12% hurdle rate most Indian CFOs apply to capital projects. IRENA's [Renewable Power Generation Costs in 2023](https://www.irena.org/Publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023) documents the global convergence of solar LCOE toward $0.04–0.06/kWh (₹3.4–5.0/kWh at current exchange rates), confirming that Indian C&I LCOE figures are at or below global benchmarks.

### Open Access Solar for Large Consumers

Industrial consumers with connected load above 1 MW seeking open access supply from a third-party solar developer (a growing structure in states like Gujarat, Maharashtra, Rajasthan, and Karnataka) must submit detailed LCOE models to the SERC or nodal agency as part of the open access application. The model must demonstrate that the arrangement is genuinely cheaper than DISCOM supply on a lifecycle basis, factoring in wheeling charges, transmission losses, and banking charges.

The [3-phase solar inverter](/blog/3-phase-solar-inverter/) specifications and harmonic performance data are a required part of the technical documentation in these applications, particularly for HT consumers with variable frequency drive loads.

## Where Finance Managers Get LCOE Wrong: 5 Common Errors

### Error 1: Using Flat Annual Generation

The most common modelling error is using a constant annual generation figure (say, 91,250 kWh) across all 25 years without applying panel [degradation](/glossary/degradation/). This overstates lifetime generation by approximately 6–8%, understates LCOE by the same margin, and produces an IRR that is 1.5–2 percentage points too high. Always apply 0.5%/year degradation to the generation series.

### Error 2: Ignoring O&M Escalation

O&M costs for a solar plant are not fixed in nominal terms. Labour costs, cleaning consumables, and inverter AMC contracts typically escalate at 3–5% per year. A model that holds O&M flat at ₹37,500 per year across 25 years systematically understates total discounted costs and produces an LCOE that is 5–8% too low.

### Error 3: Using the Wrong Discount Rate

Some EPC contractors present LCOE calculations using a 6% or 7% discount rate, which is below the actual WACC of almost every Indian SME. A lower discount rate mechanically lowers LCOE (by discounting far-future costs more gently) and makes the project appear more attractive. Always use the company's actual borrowing rate or blended WACC. For a project with 70% debt at 10.5% and 30% equity at 14%, the WACC is approximately 11.2%, not 7%.

### Error 4: Omitting the Accelerated Depreciation Benefit

Many LCOE models presented by EPCs omit the accelerated depreciation tax shield because it falls on the buyer's P&L rather than the project's standalone economics. For a C&I buyer evaluating the investment from their own balance sheet (which is the correct perspective) the 40% Year 1 depreciation under Section 32 is a real cash benefit that reduces the effective net CAPEX. A project that looks marginally viable at ₹3.2/kWh LCOE becomes clearly attractive at ₹2.85/kWh post-AD.

### Error 5: Applying GST on the Wrong Base

[GST on solar inverters and balance-of-system components](/blog/gst-on-solar-inverters-2026/) in India varies by component type. Solar modules attract 12% GST, inverters attract 12%, mounting structures attract 18%, and civil/electrical work attracts 18% as a service. An LCOE model must use GST-inclusive costs (since most C&I buyers cannot fully claim input credit on solar, which is used for captive consumption rather than taxable supply). Underestimating effective GST on the BOS components inflates CAPEX by 3–6% and correspondingly raises LCOE.

## LCOE for a 50 kW Plant: Year-by-Year Cash Flow Summary

The table below shows the first ten years and Year 25 of the LCOE model for the baseline 50 kWp C&I plant, pre-AD, at 9% discount rate, ₹5,500/kWp CAPEX, 0.5% degradation, ₹750/kWp Year 1 O&M escalating at 3%/year.

| Year | Net Generation (kWh) | O&M Cost (₹) | Discounted Generation | Discounted Cost |
| --- | --- | --- | --- | --- |
| 0 (CAPEX) | - | ₹27,50,000 | - | ₹27,50,000 |
| 1 | 71,175 | ₹37,500 | 65,298 | ₹34,404 |
| 2 | 70,819 | ₹38,625 | 59,574 | ₹32,480 |
| 3 | 70,465 | ₹39,784 | 54,388 | ₹30,711 |
| 4 | 70,113 | ₹40,977 | 49,698 | ₹29,006 |
| 5 | 69,762 | ₹42,207 | 45,325 | ₹27,409 |
| 6 | 69,414 | ₹43,473 | 41,398 | ₹25,889 |
| 7 | 69,067 | ₹44,777 | 37,786 | ₹24,453 |
| 8 | 68,722 | ₹46,120 | 34,492 | ₹23,095 |
| 9 | 68,379 | ₹47,504 | 31,478 | ₹21,812 |
| 10 | 68,038 | ₹48,929 | 28,750 | ₹20,620 |
| … | … | … | … | … |
| 25 | 62,600 | ₹78,200 | 8,142 | ₹10,169 |
| **Total** | **~1,677,000** | **~₹16.2 lakh** | **~770,000** | **~₹21.2 lakh** |

**LCOE = ₹21,20,000 (net present cost) + ₹27,50,000 (CAPEX) ÷ 770,000 (discounted kWh) ≈ ₹2.75/kWh**

The numbers confirm the headline claim. The 25-year NPV of savings (discounted at 9%) against a grid tariff of ₹9/kWh works out to approximately ₹47 lakh. Against diesel at ₹20/kWh (only the diesel displacement portion), the NPV of savings over 25 years exceeds ₹1 crore for this single 50 kW plant.

## How LCOE Connects to IRR and Project Bankability

LCOE is a cost metric. IRR is the corresponding return metric. The relationship between the two is straightforward: if the LCOE is ₹2.75/kWh and the facility is saving ₹8.50/kWh against grid tariff (the avoided cost), the project generates ₹5.75/kWh of economic surplus on every unit generated. The IRR is the discount rate that equates the present value of those surpluses to the initial CAPEX.

For a 50 kWp plant:
- **Year 1 annual savings** ≈ 71,175 kWh × ₹5.75/kWh = ₹4.09 lakh
- **CAPEX** = ₹27.5 lakh (pre-AD)
- **Simple payback** = ₹27.5 ÷ ₹4.09 = **6.7 years**
- **IRR over 25 years** (accounting for degradation, O&M, tariff escalation at 4%/year) ≈ **19–23%**
- **NPV at 9% discount rate** ≈ **₹22–28 lakh** (positive by a large margin)

This IRR of 19–23% compares favourably to the IRR threshold most Indian CFOs apply to capital projects (10–15%). The solar project clears even conservative hurdle rates comfortably, which is why, once a C&I buyer builds the LCOE model correctly, the investment decision becomes straightforward.

For post-AD LCOE of ₹2.48/kWh, the surplus against ₹9/kWh grid rises to ₹6.52/kWh, pushing the IRR closer to 22–26%. The [solar inverter payback period](/blog/solar-inverter-payback-period-in-india/) post explains the relationship between inverter efficiency, system yield, and how payback interacts with IRR in detail.

> **37 GW.** Cumulative rooftop solar capacity target under India's National Solar Mission for 2030, as stated in [MNRE's Renewable Energy Targets](https://mnre.gov.in/). C&I installations are the primary driver of the rooftop segment, accounting for roughly 60% of cumulative installed rooftop capacity.

## LCOE Modelling for Banking and Project Finance

If a C&I project is being submitted to a bank or NBFC for term loan approval, the LCOE model must meet a higher standard than an internal finance manager's back-of-envelope estimate. Lenders require:

- **Independent energy yield assessment**: a PVsyst simulation or third-party solar resource assessment confirming the generation assumption. The lender does not accept EPC projections at face value.
- **Degradation schedule documentation**: the module manufacturer's datasheet showing the 0.5%/year linear degradation guarantee (the standard for tier-1 monocrystalline modules).
- **O&M contract**: a signed Annual Maintenance Contract from the EPC or O&M provider, with pricing that matches the LCOE model's O&M assumption.
- **Equipment bankability confirmation**: the inverter manufacturer's warranty terms, BIS and ALMM certification status, and financial standing. An inverter from an unrated manufacturer without ALMM listing is a bankability red flag for most lenders.
- **DSCR projection**: year-by-year cash flow showing that net cash (generation × avoided tariff − O&M − debt service) is positive and above 1.2× debt service in every loan year.

Inverters with a 12-year full replacement warranty (as offered by Qbits on the C&I series) materially strengthen the bankability documentation. The warranty eliminates the need to provision for a mid-life inverter replacement in the financial model, which would otherwise appear as a ₹3–8 lakh cash outflow in Year 10–12 and reduce DSCR in those years below the minimum threshold. The [inverter warranty](/blog/solar-inverter-warranty/) post explains how warranty structure affects project finance documentation.

## Where Qbits Fits in the C&I LCOE Equation

C&I buyers who build the LCOE model correctly (using the six-input framework above) arrive at a consistent conclusion: the CAPEX is the largest single driver of LCOE, the inverter is the single most warranty-sensitive component in the system, and the O&M cost is materially influenced by inverter reliability. A 50 kW commercial plant with a single inverter failure in Year 6 (out of warranty, unmonitored) faces a replacement cost of ₹1.5–3.5 lakh plus downtime losses. That cost, inserted into the LCOE model, shifts the effective cost per unit by ₹0.20–0.45/kWh.

Qbits C&I inverters are built around three decisions that directly address the LCOE model's most sensitive variables:

- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series from 10 kW to 100 kW, ALMM-listed, BIS-certified, with 12-year full replacement warranty. The 12-year coverage eliminates the mid-life replacement provision from the financial model, directly improving DSCR in Years 8–12.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series with integrated DG sync capability and battery readiness. For facilities that displace diesel as well as grid power, the blended LCOE calculation (solar versus mixed DG/grid baseline) makes the hybrid configuration financially superior despite the higher upfront cost.
- **[C&I Solutions page](/c-i-solution/)**: application-specific guidance for factories, hospitals, educational institutions, and commercial buildings, including load profiling tools and reference LCOE models for common C&I segments.

For a LCOE model review, equipment specification, or project finance documentation support, the Qbits engineering team works directly with CFOs, CAs, and EPC contractors. [Talk to a Qbits engineer](/contact-us/), most site assessments and preliminary LCOE reviews are completed within 24–48 hours.

The arithmetic of solar LCOE in India is no longer a projection or an aspiration. At ₹2.5–3.5/kWh against a grid tariff of ₹7–12/kWh, the financial case closes itself. The only question that remains is whether the modelling is done correctly, and whether the inverter at the centre of the system is backed by a warranty and a service organisation that the model can actually rely on.
