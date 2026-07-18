---
term: "NPV"
title: "NPV (Net Present Value): Definition & Solar Project Finance"
description: "NPV is the present value of project cash flows minus capex. Full guide and Indian solar applications."
category: "Finance"
categorySlug: "finance"
priority: "P2"
updatedDate: 2026-07-18
keywords:
  - npv
  - net present value
  - solar npv
  - project npv
  - discounted cash flow
shortDefinition: "Net Present Value (NPV) is the sum of all discounted future cash flows minus the initial investment. Positive NPV means project creates value; negative means it destroys value. Standard investment decision metric, used for solar project go/no-go decisions."
quickFacts:
  industry: "Project Finance"
  primaryUse: "Investment decision metric"
  commonUsers: "Developers, investors, financiers"
  relevantStandards: "Standard DCF methodology"
  relatedTechnologies: "Discounted cash flow modelling"
relatedTerms:
  - { slug: "irr", term: "IRR" }
  - { slug: "wacc", term: "WACC" }
  - { slug: "discount-rate", term: "Discount Rate" }
  - { slug: "lcoe", term: "LCOE" }
  - { slug: "capex", term: "CAPEX" }
  - { slug: "opex", term: "OPEX" }
  - { slug: "payback-period", term: "Payback Period" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "p50-p90", term: "P50 / P90" }
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "resco", term: "RESCO" }
faqs:
  - q: "What is NPV in simple words?"
    a: "The total value of a project's future cash, brought back to today's money, minus the initial cost. If positive, the project makes money; if negative, it loses money."
  - q: "What is the formula?"
    a: "NPV = Σ (CF_t / (1+r)^t) - Initial Investment. CF_t is cash flow in year t, r is discount rate."
  - q: "When is NPV positive?"
    a: "When future cash flows discounted at WACC exceed initial investment. Project creates value."
  - q: "What discount rate?"
    a: "Typically WACC. Reflects opportunity cost of capital."
  - q: "Does NPV decide investment?"
    a: "Yes. NPV > 0 indicates investment-worthy project. Higher NPV = more value creation."
  - q: "NPV vs IRR?"
    a: "NPV: absolute value in currency. IRR: percentage return. Often used together."
  - q: "Does NPV include degradation?"
    a: "Yes. Annual cash flows incorporate degradation reducing future yield."
  - q: "What is the typical NPV for Indian utility solar?"
    a: "Strongly positive at typical WACCs and PPA tariffs. Specific value depends on project size and assumptions."
  - q: "Does NPV change with assumptions?"
    a: "Yes. Sensitive to capex, opex, yield, tariff, WACC. Sensitivity analysis standard."
  - q: "Is NPV after tax?"
    a: "Both pre-tax and post-tax NPV reported. Post-tax is realistic for investors."
  - q: "What is terminal value?"
    a: "Value of asset at end of analysis period. Often included in NPV for solar (plant operates beyond 25 years)."
  - q: "Is NPV used in LCOE?"
    a: "LCOE is itself an NPV-based calculation: present value of costs divided by present value of energy."
  - q: "How does NPV inform PPA bidding?"
    a: "Developer bids tariff that produces NPV = 0 at target WACC. Higher tariff would yield positive NPV but might lose tender."
  - q: "Does NPV ignore later cash flows?"
    a: "No, but distant cash flows are heavily discounted. 25-year solar may discount year 25 cash flow by 80-90 percent."
  - q: "Is NPV bankable?"
    a: "NPV depends on yield, opex and tariff assumptions. P90-based NPV is bankable for lenders."
author: "Nirav Dhanani"
---

## What is NPV

> **TL;DR**
> - NPV is the sum of all discounted future cash flows minus the initial investment; a positive NPV means the project creates value.
> - Formula: NPV = -Initial Investment + Σ(CF_t / (1+r)^t), where r is typically WACC and t runs over the project life.
> - For Indian solar, NPV is highly sensitive to capex, yield and tariff assumptions; a 10 percent yield increase can lift NPV by 12 to 15 percent.
> - NPV and IRR are used together: NPV gives absolute value in currency, IRR gives the percentage return.
> - Developers typically bid a PPA tariff that produces NPV equal to zero at their target WACC.

Net Present Value (NPV) is the sum of all discounted future cash flows from a project, minus the initial investment. The [discount rate](/glossary/discount-rate/) (typically [WACC](/glossary/wacc/)) converts future cash to present value, accounting for time value of money and risk.

NPV formula:
NPV = -Initial Investment + Σ (CF_t / (1+r)^t) for t = 1 to T

Where:
- CF_t = net cash flow in year t (revenue minus opex)
- r = discount rate (typically WACC)
- T = project life

Positive NPV indicates the project creates value (returns exceed cost of capital). Negative NPV indicates value destruction. Zero NPV indicates exactly meeting cost of capital.

For Indian solar projects, NPV is one of the primary investment metrics alongside [IRR](/glossary/irr/). NPV provides absolute value of project worth, while IRR provides percentage return. Together they fully characterise project economics, alongside [LCOE](/blog/lcoe-solar-india/), which converts the same discounted cash flows into a per-unit cost of energy.

## Why NPV matters

Investment decision. Go/no-go on project investment.

Value creation. Positive NPV creates shareholder value.

Comparison. Direct comparison of project values.

[PPA](/glossary/ppa/) bidding. Tariff that produces NPV ≥ 0 at WACC.

Capital allocation. Within portfolios, highest NPV projects prioritised.

## NPV calculation example

For a 1 MW Indian utility solar project:

| Year | Cash Flow (₹ lakh) | Discount factor (10%) | Present value |
|---|---|---|---|
| 0 (capex) | -400 | 1.000 | -400 |
| 1-25 (operating) | ~37 per year | varies | 335 |
| NPV | | | -65 |

Need either lower [capex](/glossary/capex/), higher tariff, or lower WACC to make NPV positive.

## Technical deep dive

### NPV components for solar

| Component | Cash flow direction |
|---|---|
| Capex | Outflow (year 0) |
| Annual revenue (PPA) | Inflow |
| Annual [O&M](/glossary/opex/) | Outflow |
| Annual debt service | Outflow |
| Annual tax | Outflow |
| Terminal value (year 25) | Inflow |
| Decommissioning cost (year 25) | Outflow |

### Sensitivity to key inputs

For Indian utility solar:
| Input change | NPV impact |
|---|---|
| +10% capex | NPV reduces by 8-10% |
| +10% yield | NPV increases by 12-15% |
| +0.25/kWh tariff | NPV increases by 15-18% |
| -0.5% WACC | NPV increases by 8-12% |
| +1% degradation | NPV reduces by 5-8% |

### NPV vs IRR

| Aspect | NPV | IRR |
|---|---|---|
| Output | Currency | Percentage |
| Use | Value scale | Return rate |
| Threshold | NPV > 0 | IRR > WACC |
| Robust to | Multiple scenarios | Sign changes |
| Equity vs debt | All | Often equity |

### Time value of money

Cash flow in year 25 at 10% WACC:
PV = Future Cash Flow / (1.10)^25 = Future / 10.83

A ₹100 cash flow in year 25 is worth only ₹9.23 today at 10% WACC. For a full worked example of IRR and payback alongside NPV on an Indian C&I project, see [Solar IRR and Payback for C&I in India, Real Math](/blog/solar-irr-payback-ci-india/).

## Real-world applications

Project investment decisions, often cross-checked against the simpler [payback period](/blog/solar-inverter-payback-period-in-india/) metric that smaller C&I buyers understand more intuitively.

PPA tariff floor setting.

Solar plant acquisition pricing.

Investment portfolio ranking.

Sustainability investment screening.

## Best practices

Use realistic [yield](/glossary/solar-yield/) ([P50 for planning, P90 for risk](/glossary/p50-p90/)).

Apply correct WACC.

Include [degradation](/glossary/degradation/) in annual cash flows.

Document all assumptions transparently.

Conduct sensitivity analysis, for example using [SurgePV's generation and financial modelling tool](https://surgepv.com/generation-financial-tool/).

Report both NPV and IRR.

## Indian market context

NPV-based decisions standard across Indian solar industry.

Bankers (SBI, Canara, REC, PFC, IREDA) use NPV in credit approval.

SECI tender bid decisions consider NPV at target WACC.

PE/VC funding decisions for solar startups based on NPV models.

Major Indian solar developers (Adani Green, ReNew, Tata Power Renewables) report NPV-based portfolio metrics.

## Standards and certifications

| Standard | Scope |
|---|---|
| Standard DCF methodology | Globally recognised |
| CERC Tariff Regulations | Indian framework |
| Bank credit appraisal standards | Lender practice |

## Key takeaways

NPV is the sum of discounted future cash flows minus initial investment. Positive NPV creates value; negative destroys it. Indian solar NPV depends on capex, opex, yield, tariff and WACC assumptions. Used alongside IRR for complete project economic analysis. PPA tariff bidding sets minimum tariff at NPV ≥ 0 at target WACC. Sensitivity analysis quantifies risk to key inputs.

## Need NPV analysis for your solar investment?

QBits Energy provides NPV-based investment analysis for utility, C&I and residential solar projects across Indian conditions.

## Sources

- Brealey R., Myers S., Allen F., Principles of Corporate Finance, McGraw-Hill.
- CERC Tariff Regulations 2024.
- IREDA Project Appraisal Methodology.
- NREL System Advisor Model (SAM).
- IRENA Renewable Project Finance.
- IFC Solar Project Appraisal Tools.
- BloombergNEF investment analysis.
- IEA Project Finance for Renewables.
- Indian Banks Association financing guidelines.
