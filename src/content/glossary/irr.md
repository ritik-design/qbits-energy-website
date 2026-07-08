---
term: "IRR"
title: "IRR (Internal Rate of Return): Definition, Calculation & Solar Investment"
description: "IRR is the discount rate that makes a project NPV zero. Full guide to calculation and Indian solar investment applications."
category: "Finance"
categorySlug: "finance"
priority: "P1"
updatedDate: 2026-07-08
keywords:
  - what is irr
  - internal rate of return
  - solar irr
  - project irr
  - equity irr
shortDefinition: "Internal Rate of Return (IRR) is the discount rate at which the net present value (NPV) of project cash flows equals zero. It is the headline return metric for solar projects, typically 10 to 18 percent for Indian utility solar and 14 to 22 percent for C&I rooftop."
quickFacts:
  industry: "Project Finance"
  primaryUse: "Investment return metric"
  commonUsers: "Developers, financiers, investors"
  relevantStandards: "Standard discounted cash flow methodology"
  relatedTechnologies: "DCF modelling, lifecycle yield, capex and opex"
relatedTerms:
  - { slug: "lcoe", term: "LCOE" }
  - { slug: "capex", term: "CAPEX" }
  - { slug: "opex", term: "OPEX" }
  - { slug: "ppa", term: "Power Purchase Agreement" }
  - { slug: "payback-period", term: "Payback Period" }
  - { slug: "wacc", term: "WACC" }
  - { slug: "npv", term: "NPV" }
  - { slug: "resco", term: "RESCO" }
  - { slug: "solar-yield", term: "Solar Yield" }
  - { slug: "degradation", term: "Module Degradation" }
  - { slug: "cuf", term: "CUF" }
  - { slug: "discount-rate", term: "Discount Rate" }
faqs:
  - q: "What is IRR in simple words?"
    a: "The annual percentage return on a project. If you invest ₹100 and get cash flows back that effectively yield 12 percent per year over the project life, the IRR is 12 percent."
  - q: "What is the formula for IRR?"
    a: "IRR is the discount rate r where NPV = Σ (CF_t / (1+r)^t) = 0. Computed iteratively, no closed-form solution."
  - q: "What is a good IRR for solar?"
    a: "Indian utility solar 10 to 18 percent project IRR. C&I rooftop 14 to 22 percent. Residential rooftop with subsidy 18 to 30 percent."
  - q: "Is IRR the same as ROI?"
    a: "No. ROI is a simple ratio. IRR accounts for the time value of money."
  - q: "Project IRR vs equity IRR?"
    a: "Project IRR uses all project cash flows pre-financing. Equity IRR uses only equity holder cash flows post debt service. Equity IRR is typically higher."
  - q: "Does IRR include degradation?"
    a: "Yes. Annual degradation reduces year-by-year cash flow, lowering IRR."
  - q: "How does subsidy affect IRR?"
    a: "Subsidies received as upfront grant reduce effective capex, raising IRR. PM Surya Ghar subsidies push residential IRR above 25 percent."
  - q: "What discount rate is implicit in IRR?"
    a: "IRR is itself the discount rate. Comparison metric is WACC or cost of equity."
  - q: "When is IRR misleading?"
    a: "When cash flows are unconventional (sign changes). When project lives differ. When reinvestment assumptions matter."
  - q: "Does IRR work for multi-decade projects?"
    a: "Yes. Solar projects are well-suited to IRR analysis because cash flows are stable and predictable."
  - q: "What is hurdle rate?"
    a: "The minimum acceptable IRR for an investor, typically equal to or above WACC."
  - q: "Is IRR after tax?"
    a: "Both pre-tax and post-tax IRR are reported. Post-tax is the realistic investor return."
  - q: "How is IRR sensitive to assumptions?"
    a: "Highly. IRR is sensitive to yield, tariff, degradation, opex escalation and end-of-life salvage assumptions."
  - q: "Does IRR include curtailment?"
    a: "Yes if modelled. Curtailment reduces cash flow, lowering IRR."
  - q: "What is the typical residential PM Surya Ghar IRR?"
    a: "20 to 30 percent post-subsidy for households with retail tariff above ₹7/kWh, due to the subsidy lowering effective capex."
author: "Akash Hirapara"
---

## What is IRR

Internal Rate of Return (IRR) is the discount rate at which the net present value (NPV) of a project's cash flows equals zero. It is the standard return metric in project finance and the headline number investors use to evaluate solar projects. IRR captures both the absolute return and the timing of cash flows in a single percentage.

IRR is calculated iteratively from the cash flow stream: [capex](/glossary/capex/) outflow at year zero, annual operating cash flows over the project life, and any salvage value at end of life. The discount rate that makes the present value of all flows sum to zero is the IRR. Our [Solar IRR and Payback for C&I in India](/blog/solar-irr-payback-ci-india/) piece walks through this math on a real project.

For Indian solar, project IRR typically ranges 10 to 18 percent for utility plants, 14 to 22 percent for C&I rooftop, and 18 to 30 percent for residential rooftop with PM Surya Ghar subsidy. Higher IRR reflects favourable tariff, low capex, high yield and short [payback](/glossary/payback-period/).

> **TL;DR**
> - IRR is the discount rate at which a project's NPV equals zero, and it is the headline return metric investors use for solar.
> - Indian utility solar runs 10 to 18 percent project IRR (14 to 18 percent equity IRR); C&I rooftop runs 14 to 22 percent.
> - Residential rooftop with PM Surya Ghar subsidy can reach 18 to 30 percent IRR because the subsidy cuts effective capex.
> - Project IRR covers all pre-financing cash flows; equity IRR covers only post-debt-service cash flows and is usually higher.
> - A project only creates value once IRR exceeds WACC, so the two numbers should always be compared together.

## IRR explained simply

You invest in a solar plant today. Over 25 years it generates cash. IRR tells you the equivalent annual percentage return on your investment. If the IRR is 14 percent, the project is generating returns equivalent to a 14 percent annual investment.

The bigger the IRR, the better the project for investors.

## Why IRR matters

Investment decision. Investors compare IRR to their hurdle rate, typically anchored to [WACC](/glossary/wacc/) or the project's [discount rate](/glossary/discount-rate/).

Project ranking. Multiple projects compared head-to-head.

Lender confidence. Project IRR informs debt service capability.

Risk assessment. Sensitivity of IRR to assumptions reveals project robustness.

PPA negotiation. Tariff levels must support target IRR.

Capital allocation. Within renewables portfolios, IRR drives capital flow.

## How IRR is calculated

[NPV](/glossary/npv/) = Σ (CF_t / (1 + r)^t) for t = 0 to T

Where:
- CF_t = net cash flow in year t (negative for capex, positive for operating cash flow)
- r = discount rate
- T = project life

IRR is the r at which NPV = 0. Solved iteratively, no closed-form solution.

## Technical deep dive

### Project IRR vs Equity IRR

| Aspect | Project IRR | Equity IRR |
|---|---|---|
| Cash flows | All project flows | After debt service |
| Capex | 100% upfront | Equity contribution only |
| Annual revenue | Gross | Net of debt service |
| Typical value | 10 to 14% | 14 to 22% |

Equity IRR is higher because debt leverage amplifies equity returns when project IRR exceeds debt cost.

### IRR drivers (Indian utility solar)

| Driver | Sensitivity |
|---|---|
| Capex change (10%) | IRR change 1.5 to 2.0 percentage points |
| PPA tariff change (10%) | IRR change 1.5 to 2.0 percentage points |
| Yield change (10%) | IRR change 1.5 to 2.0 percentage points |
| OPEX change (20%) | IRR change 0.3 to 0.5 percentage points |
| Debt cost (1%) | Equity IRR change 1 to 1.5 percentage points |

### Indian solar IRR benchmarks (2026)

| Project type | Project IRR | Equity IRR |
|---|---|---|
| Utility solar PPA | 11 to 14% | 14 to 18% |
| Utility solar plus storage | 10 to 13% | 13 to 17% |
| C&I rooftop CAPEX (customer) | 14 to 22% | n/a |
| C&I rooftop RESCO (developer) | 11 to 14% | 14 to 18% |
| Residential rooftop with PM Surya Ghar | 18 to 30% | n/a |
| Off-grid solar plus battery | 8 to 14% | 10 to 16% |

### IRR vs WACC

For a project to create value, IRR must exceed WACC. Typical Indian utility solar WACC: 8 to 10 percent. IRR of 11 to 14 percent leaves a 2 to 4 percent value creation margin.

## Real-world applications

Developer go/no-go decisions on tender bids.

PPA tariff floor setting.

Bank loan structuring.

Residential customer [payback evaluation](/blog/solar-inverter-payback-period-in-india/).

C&I solar [procurement model selection (CAPEX vs RESCO)](/blog/solar-capex-vs-opex-business-india/), including choosing between [on-grid and hybrid inverter](/blog/on-grid-vs-hybrid-solar-inverters-roi/) configurations that affect the return profile.

Sustainability investment portfolio allocation.

## Advantages

Single percentage easy to communicate.

Standardised across industries.

Captures time value of money.

Comparable across project sizes.

## Limitations

Assumes reinvestment at IRR rate.

Multiple IRRs possible for unconventional cash flows.

Sensitive to assumptions, especially terminal value.

Less intuitive than payback for some audiences.

Does not show absolute return scale.

## Common problems

IRR sensitive to ALMM premium and module price volatility.

Curtailment risk reducing project IRR below hurdle rate.

[Late payment surcharge](/glossary/late-payment-surcharge/) from DISCOMs eroding IRR.

OPEX escalation eating into IRR over 25 years.

End-of-life decommissioning cost ignored, overstating IRR.

## Best practices

Use realistic P50 yield with appropriate degradation.

Stress-test IRR under low yield, high opex and DISCOM payment delay scenarios, ideally inside [solar financial modeling](https://surgepv.com/generation-financial-tool/) software rather than a static spreadsheet.

Compare to WACC and hurdle rate.

Report both project and equity IRR.

Document all key assumptions.

Use post-tax IRR for realistic investor return.

## Comparison: IRR by financing structure

| Structure | Typical project IRR | Typical equity IRR |
|---|---|---|
| 70% debt, 30% equity utility | 12% | 17% |
| 65% debt, 35% equity utility | 12% | 16% |
| 100% equity utility | 13% | 13% |
| C&I RESCO 65/35 | 13% | 18% |
| C&I CAPEX customer | 18% | 18% (no debt) |

## Indian market context

SECI utility solar tender economics target project IRR of 11 to 14 percent.

C&I RESCO developers target equity IRR of 16 to 20 percent on [commercial rooftop installations](https://heavengreenenergy.com/commercial-solar/).

PM Surya Ghar residential customers see IRR of 20 to 30 percent post-subsidy due to capex reduction.

CERC Tariff Regulations 2024 use IRR-based methodology for benchmark tariff setting.

Lender hurdle rates for solar projects have come down from 13 to 14 percent in 2015 to 10 to 12 percent in 2025.

## Standards and certifications

| Standard | Scope |
|---|---|
| Standard DCF methodology | Globally recognised |
| CERC Tariff Regulations 2024 | Indian benchmark methodology |
| NREL System Advisor Model (SAM) | Reference financial modelling |
| IRENA cost reports | Global IRR benchmarks |

## Common mistakes

Confusing project and equity IRR.

Ignoring degradation in cash flow projections.

Treating subsidy as discount rather than upfront grant.

Using nominal vs real IRR inconsistently.

Underestimating O&M cost escalation.

Skipping sensitivity analysis.

Not stress-testing under DISCOM payment delay.

## Key takeaways

IRR is the annual return metric for solar projects, calculated as the discount rate that zeros project NPV. Indian utility solar IRR sits at 11 to 14 percent project, 14 to 18 percent equity. C&I rooftop 14 to 22 percent. Residential with PM Surya Ghar 20 to 30 percent. IRR is sensitive to capex, yield, tariff and degradation assumptions. Should be compared against WACC and hurdle rate.

## Need bankable IRR modelling for your solar project?

QBits Energy provides bankable IRR analysis for utility, C&I and residential solar projects with sensitivity and stress scenarios.

## Sources

- CERC Tariff Regulations 2024.
- NREL System Advisor Model (SAM) documentation.
- IRENA Renewable Power Generation Costs in 2024.
- IEA Projected Costs of Generating Electricity 2024.
- Brealey, Myers and Allen, Principles of Corporate Finance, McGraw-Hill.
- SECI Tender Documents.
- Indian Renewable Energy Development Agency (IREDA) financing parameters.
- BloombergNEF Solar PV Cost Trends 2024.
- IEA Renewables 2024.
