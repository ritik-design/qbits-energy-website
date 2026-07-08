---
term: "Discount Rate"
title: "Discount Rate: Definition & Solar Project Finance"
description: "Discount rate converts future cash flows to present value. Full guide for solar finance."
category: "Finance"
categorySlug: "finance"
priority: "P2"
updatedDate: 2026-07-08
keywords:
  - discount rate
  - solar discount rate
  - time value of money
  - present value
  - hurdle rate
shortDefinition: "Discount rate is the rate used to convert future cash flows to present value in NPV and LCOE calculations. Typically equals WACC for project finance. Indian solar discount rates: 8-12 percent post-tax. Reflects opportunity cost of capital and project risk."
quickFacts:
  industry: "Project Finance"
  primaryUse: "Converting future to present value"
  commonUsers: "Developers, financiers"
  relevantStandards: "Standard DCF methodology"
  relatedTechnologies: "WACC, hurdle rate"
relatedTerms:
  - { slug: "wacc", term: "WACC" }
  - { slug: "npv", term: "NPV" }
  - { slug: "irr", term: "IRR" }
  - { slug: "lcoe", term: "LCOE" }
  - { slug: "capex", term: "CAPEX" }
  - { slug: "opex", term: "OPEX" }
  - { slug: "payback-period", term: "Payback Period" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "resco", term: "RESCO" }
  - { slug: "feed-in-tariff", term: "Feed In Tariff" }
faqs:
  - q: "What is discount rate in simple words?"
    a: "The rate used to figure out what future money is worth today. A 10 percent discount rate means ₹100 next year is worth ₹91 today."
  - q: "Why do we discount?"
    a: "Money today is worth more than money in the future because of investment opportunity, inflation and risk."
  - q: "What is the typical Indian solar discount rate?"
    a: "8-12 percent post-tax. Lower for utility (8-10 percent), higher for residential (10-12 percent)."
  - q: "Discount rate vs WACC?"
    a: "WACC is typically used as discount rate in project finance. Discount rate is the broader concept; WACC is the specific application."
  - q: "Does discount rate include inflation?"
    a: "Nominal discount rate includes inflation. Real discount rate excludes it. Solar calculations typically use nominal."
  - q: "What is the formula?"
    a: "Present Value = Future Value / (1 + r)^n. r = discount rate, n = years."
  - q: "What is a higher vs lower discount rate?"
    a: "Higher: makes future cash flows look smaller, NPV more pessimistic. Lower: makes future look bigger, NPV more optimistic."
  - q: "Should I use real or nominal?"
    a: "Match cash flows. Nominal cash flows with nominal discount; real cash flows with real discount."
  - q: "Does discount rate change?"
    a: "Generally held constant in project DCF. Sophisticated models use time-varying rates."
  - q: "What is hurdle rate?"
    a: "Minimum acceptable discount rate for investment. Usually equal to or above WACC."
  - q: "Does discount rate affect LCOE?"
    a: "Yes. Higher discount rate increases LCOE significantly."
  - q: "Is discount rate same for everyone?"
    a: "No. Project-specific based on risk, capital structure and market conditions."
  - q: "What is risk-free rate?"
    a: "Return on safest investment (Indian government 10-year G-Sec). Building block for discount rate (CAPM)."
  - q: "How does discount rate affect payback?"
    a: "Discounted payback (using discount rate) is always longer than simple payback."
  - q: "What is sensitivity to discount rate?"
    a: "Each 1% discount rate change moves LCOE by 8-12 percent for typical solar."
author: "Nirav Dhanani"
---

## What is discount rate

Discount rate is the rate used to convert future cash flows to present value in time-value-of-money calculations. It reflects the opportunity cost of capital (return available on alternative investments of similar risk) and embeds risk premium for the project.

The discount rate appears in:
- [NPV](/glossary/npv/) calculation: PV = Future / (1+r)^n
- [LCOE](/glossary/lcoe/) calculation: discounted costs / discounted energy
- DCF valuation: terminal value and ongoing cash flows
- Payback analysis: discounted [payback period](/glossary/payback-period/)

For project finance, the discount rate is typically the project's [WACC](/glossary/wacc/), reflecting the blended cost of debt and equity financing. For corporate investment screening, the hurdle rate (minimum acceptable return) is often used. Developers running these calculations in practice generally reach for [solar financial modeling software](/blog/solar-financial-modeling-software/) rather than building spreadsheets from scratch.

Indian solar projects use discount rates of 8-12 percent post-tax depending on project type and financing structure. Utility-scale plants with strong PPA: 8-10 percent. C&I solar: 9-11 percent. Residential: 10-12 percent.

> **TL;DR**
> - Discount rate converts future cash flows to present value and drives NPV, LCOE and discounted payback calculations.
> - For project finance it is typically set equal to the project's WACC, the blended cost of debt and equity.
> - Indian solar discount rates run 8 to 12 percent post-tax: 8 to 10 percent for utility, 9 to 11 percent for C&I, 10 to 12 percent for residential.
> - The formula is Present Value = Future Value / (1 + r)^n, where r is the discount rate and n is the number of years.
> - Each 1 percentage point change in discount rate moves LCOE by roughly 8 to 12 percent, so getting it right matters for bid pricing.

## Why discount rate matters

NPV calculation. Direct input to investment decisions.

LCOE. Higher discount rate increases project LCOE, a relationship explored further in our [solar IRR and payback math for C&I](/blog/solar-irr-payback-ci-india/) breakdown.

PPA tariff. Higher discount rate requires higher tariff for viability.

Project comparison. Common discount rate enables comparison.

Risk reflection. Higher risk projects use higher discount rates.

## Discount rate components

| Component | Description |
|---|---|
| Risk-free rate | Indian 10-year G-Sec (~6-7%) |
| Equity risk premium | 6-8% above risk-free |
| Project beta | 0.8-1.2 for utility solar |
| Country risk premium | 1-3% for India |
| Currency risk | For USD financing |
| Project risk | Solar-specific risk addition |

## Technical deep dive

### Discount rate calculation example

For Indian solar project at WACC 10%:
- Risk-free rate (G-Sec): 6.5%
- Equity risk premium: 7%
- Project beta: 1.0
- Cost of equity = 6.5% + 1.0 × 7% = 13.5%
- After-tax cost of debt: 7%
- D/E ratio: 70/30
- WACC = 0.7 × 7% + 0.3 × 13.5% = 4.9% + 4.05% = 8.95%

### Sensitivity to discount rate

For 100 MW solar plant:
| Discount rate | LCOE (₹/kWh) |
|---|---|
| 6% | 2.40 |
| 8% | 2.75 |
| 10% | 3.05 |
| 12% | 3.40 |

### Real vs nominal

| Type | Cash flow | Discount rate |
|---|---|---|
| Nominal | Includes inflation | Nominal rate |
| Real | Excludes inflation | Real rate |

Avoid mixing: nominal cash flow with real rate produces incorrect results.

For 10 percent nominal rate and 5 percent inflation: real rate = (1.10/1.05), 1 = 4.76%.

### Discount factor table

| Year | 8% | 10% | 12% |
|---|---|---|---|
| 1 | 0.926 | 0.909 | 0.893 |
| 5 | 0.681 | 0.621 | 0.567 |
| 10 | 0.463 | 0.386 | 0.322 |
| 15 | 0.315 | 0.239 | 0.183 |
| 20 | 0.215 | 0.149 | 0.104 |
| 25 | 0.146 | 0.092 | 0.059 |

## Real-world applications

Project finance NPV and [IRR](/glossary/irr/).

LCOE calculation.

PPA tariff bidding, often run through [solar financial modeling](https://surgepv.com/generation-financial-tool/) tools before submission.

Bank credit appraisal.

Investor return analysis.

Insurance pricing.

## Best practices

Use WACC as discount rate for project finance.

Match nominal vs real for cash flows and discount rate.

Document discount rate transparently, alongside the underlying [capex](/glossary/capex/) and OPEX assumptions.

Conduct sensitivity to ±200 bps using [solar design tools and calculators](https://surgepv.com/tools/).

Update for changing market conditions.

## Indian market context

Indian solar discount rates have fallen with falling WACC.

Major Indian lenders use discount rates consistent with their cost of funds.

CERC Tariff Regulations specify discount rate methodology.

Solar IPP investment grade ratings improve with declining sector risk premium.

## Standards and certifications

| Standard | Scope |
|---|---|
| Standard DCF methodology | Global recognition |
| CERC Tariff Regulations | Indian framework |
| CFA Curriculum | Professional standard |

## Key takeaways

Discount rate is the rate converting future cash flows to present value, embedding opportunity cost of capital and project risk. Typically equals WACC for project finance. Indian solar discount rates: 8-12 percent depending on type. Each 200 bps change moves LCOE by ~₹0.30/kWh. Critical for NPV, IRR, LCOE and PPA tariff decisions.

## Need discount rate analysis for your solar project?

QBits Energy provides discount rate analysis and project finance modelling for Indian utility, C&I and residential solar projects.

## Sources

- Brealey R., Myers S., Allen F., Principles of Corporate Finance, McGraw-Hill.
- CERC Tariff Regulations 2024.
- RBI policy rate publications.
- CFA Institute Curriculum.
- IRENA Renewable Power Generation Costs 2024.
- NREL System Advisor Model (SAM).
- BloombergNEF Cost of Capital studies.
- IEA Cost of Capital Observatory.
- Indian Banks Association financing parameters.
