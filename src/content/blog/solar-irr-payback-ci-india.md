---
title: "Solar IRR and Payback for C&I in India, Real Math"
excerpt: "Solar IRR calculation India for C&I: an illustrative 100 kW Karnataka system at ₹55 lakh capex shows about 17.7% IRR and a 5.7-year payback with 40% accelerated depreciation. Full 5-line business case inside."
description: "Illustrative 100 kW C&I solar case in Karnataka at ₹55 lakh capex: about 17.7% IRR and 5.7-year payback with 40% depreciation. Full business case inside."
category: Guide
date: 2026-06-05
updatedDate: 2026-10-14
readTime: "17 min"
image: "/og/blog-solar-irr-payback-ci-india.webp"
author: "Keyur Rakholiya"
keywords:
  - solar irr calculation india
  - solar payback period c&i india
  - solar npv india business
  - solar investment return india
  - commercial solar roi india
faqs:
  - q: "What is the typical IRR for a C&I solar investment in India?"
    a: "The IRR (Internal Rate of Return) for a C&I solar CAPEX investment depends on four key variables: the grid tariff the plant actually avoids (higher tariff = higher IRR), the self-consumption ratio (higher self-use = higher IRR), tariff escalation, and financing cost (a loan cheaper than the project IRR lifts the equity IRR). In the illustrative 100 kW Karnataka case in this post, the base-case pre-tax IRR is about 17.7% over 25 years, and the scenarios range from about 12% (conservative) to about 25% (optimistic). Claiming 40% accelerated depreciation in Year 1 adds about 1.5 percentage points (16.2% without the Year-1 shield, 17.7% with it). These are modelled figures from stated assumptions, not forecasts for your site."
  - q: "What is the payback period for commercial solar in India?"
    a: "In the illustrative base case (₹55 lakh CAPEX, ₹6.90/unit avoided energy charge, 3% annual tariff escalation, 40% depreciation shield in Year 1) the payback is about 5.7 years, or 6.3 years without the Year-1 depreciation shield. A flat-savings calculation, net CAPEX of ₹49.5 lakh divided by Year 1 net savings of ₹8.24 lakh, gives 6.0 years. At an avoided tariff of ₹9/unit the payback shortens to about 4.5 years; in the conservative scenario it stretches to about 7.4 years. Payback is fastest where the commercial energy charge is high and the plant's output is mostly used on site."
  - q: "How do you calculate NPV for a solar investment in India?"
    a: "NPV (Net Present Value) for a solar investment = sum of all annual cash flows (savings minus costs) discounted at the hurdle rate (typically WACC, 8–15% for Indian companies), minus the initial capex. For the 100 kW example: initial capex ₹55 lakh, Year 1 net savings ₹8.24 lakh after O&M (growing at 3% a year, less 0.5% panel degradation), a Year 1 tax shield of ₹5.5 lakh, an assumed ₹5 lakh inverter replacement in Year 12, an 8% discount rate and a 25-year life. NPV is approximately ₹53 lakh, a positive return, but a smaller one than older versions of this model showed because the depreciation rate is 40%, not 80%."
  - q: "What is accelerated depreciation in solar and how does it affect IRR?"
    a: "Accelerated depreciation allows owners of solar power generating equipment to deduct a larger share of the asset's cost in the first year than the ordinary rate would allow. The current rate for solar under the Income-tax Rules is 40% on a written-down-value basis (older articles that quote 80% are out of date). For a company paying 25% tax, the ₹22 lakh Year 1 deduction (40% of ₹55 lakh) creates a ₹5.5 lakh tax saving, which reduces net capex from ₹55 lakh to ₹49.5 lakh, improves payback from about 6.3 to 5.7 years and lifts IRR from about 16.2% to 17.7% in the base case. Later-year depreciation also produces tax savings, which this model leaves out for simplicity. Confirm tax treatment with your accountant."
  - q: "How is self-consumption ratio important for C&I solar IRR?"
    a: "Self-consumption ratio (the percentage of solar generation directly used on-site) is a major driver of C&I solar IRR. Self-consumed solar units are valued at the avoided grid energy charge (₹6.90/unit in the base case), while exported units are valued at the lower export rate (₹4.5/unit assumed here; confirm your DISCOM's rate). In the base case, 80% self-consumption gives an average value of ₹6.42 per generated unit against ₹5.70 at 50% self-consumption, about 13% more in annual savings, and lifts IRR from about 14.7% to 17.7%."
  - q: "Can a C&I buyer get IREDA financing for solar?"
    a: "Yes. IREDA's loan-schemes page (read 14 October 2026) lists a rooftop solar scheme for industrial, commercial and institutional borrowers. Its current rate and tenure come from IREDA's rate matrix, which we could not open, so we quote none: ask IREDA for a written term sheet. A loan lifts the equity IRR only while the project IRR exceeds the interest rate, so compare each lender's written rate with the project IRR in this guide. Lenders typically require modules that meet the ALMM rules, a technical review of the design and an assessment of the borrower's balance sheet."
  - q: "Does solar IRR change if electricity tariffs rise?"
    a: "Yes - rising electricity tariffs directly improve solar IRR because the savings generated by each unit of self-consumed solar increase with the tariff. In the 100 kW example each ₹1/unit change in the avoided tariff changes Year 1 savings by about ₹1.12 lakh (112,000 self-consumed kWh), so a rise from ₹9 to ₹11/unit adds about ₹2.2 lakh a year. Tariff escalation varies by state and year, so the base case assumes 3% a year and the model shows 0% (IRR about 14.8%) and 6% (about 20.6%) for comparison; check your own DISCOM's tariff orders."
  - q: "What is performance ratio (PR) and how does it affect solar payback?"
    a: "Performance ratio (PR) is the ratio of actual system output to theoretical maximum output. A system with PR 0.80 generates 80% of the energy the panels would produce under perfect standard test conditions. PR is reduced by inverter losses (1–3%), cable losses (1–2%), soiling (5–15%), temperature derating (5–10%), and shading. For C&I payback calculations, every 1% reduction in PR reduces annual generation by approximately 1%: 1,400 kWh a year for the 100 kW Karnataka system, worth about ₹9,000 a year at the base-case blended value of ₹6.42 per generated unit, or roughly ₹2.2 lakh over 25 years before discounting and escalation."
---

> **ALMM and inverter compliance:** MNRE's current ALMM page publishes solar PV module and cell lists, not an inverter list. Verify the inverter's exact model documents and applicable scheme or DISCOM requirements separately.

Every C&I decision-maker who asks "should we invest in solar?" eventually asks "what exactly is the return, and how confident can we be in that number?" This guide walks through a complete, honest IRR calculation for a 100 kW C&I system in India, line by line, including the accelerated depreciation tax shield that most solar sales pitches either ignore or overstate. Every input is an illustrative assumption, flagged as such, and the figures are pre-tax project returns, not a quotation or a forecast for your site.

> [!KEYTAKEAWAYS]
> - An illustrative 100 kW C&I system in Karnataka at ₹55 lakh capex shows about 17.7% IRR and a 5.7-year payback once the Year 1 accelerated depreciation tax shield is counted.
> - Accelerated depreciation for solar is 40% (written-down-value basis), not 80%: a profitable company at 25% tax saves ₹5.5 lakh in Year 1, taking effective net capex from ₹55 lakh to ₹49.5 lakh. Older pages that quote 80% are out of date, and tax treatment should be confirmed with an accountant.
> - Without the Year 1 depreciation shield, the same system's IRR is about 16.2% and payback about 6.3 years.
> - The avoided tariff is the dominant variable: IRR ranges from about 14% at ₹5.50/unit to about 23% at ₹9/unit on the same system. Self-consumption matters too: 50% self-consumption yields about 14.7% IRR, 90% about 18.6%.
> - NPV over 25 years at an 8% discount rate is about ₹53 lakh in the base case, with a ₹5 lakh inverter replacement in Year 12 assumed and kept in the model.

> **Direct answer.** An illustrative 100 kW C&I solar system in Karnataka: ₹55 lakh capex; 1,40,000 kWh annual generation; ₹6.90/unit energy charge avoided; 80% self-consumption; 40% accelerated depreciation tax shield of ₹5.5 lakh in Year 1. Simple payback: about 5.7 years (6.0 years on flat Year 1 savings). NPV over 25 years at an 8% discount rate: about ₹53 lakh. IRR: about 17.7%. The "5-Line C&I Solar Business Case" framework produces this number in five inputs. Every variable is explained and stress-tested below.

For the broader context of CAPEX vs OPEX decision-making, see [solar CAPEX vs OPEX, which model fits your business India](/blog/solar-capex-vs-opex-business-india/).

## The Base Case: 100 kW System in Karnataka

All IRR and payback calculations start with credible input assumptions. Here are the specific assumptions for the worked example, with justification for each.

Table: Base case inputs for a 100 kW C&I system in Karnataka (illustrative assumptions unless a source is named)

| Input | Value | Source / Justification |
| --- | --- | --- |
| System capacity | 100 kW | Reference size for C&I analysis |
| Total CAPEX | ₹55,00,000 | ₹55,000/kW, an illustrative figure inside the ₹40–60 lakh range installers published for 100 kW commercial systems in 2026 (Kondaas, 27 May 2026: ₹40–50 lakh; Fulminous, 8 July 2026: ₹40–60 lakh). Get written quotes |
| Annual specific yield | 1,400 kWh/kW/yr | Karnataka average, assumed; cross-check with [NREL India Solar Data](https://data.nlr.gov/submissions/43) |
| Annual generation | 1,40,000 kWh | 100 kW × 1,400 kWh/kW/yr |
| Avoided grid energy charge (HT commercial) | ₹6.90/unit | KERC tariff order of 3 March 2026 as reported by [ThePrint](https://theprint.in/india/kerc-increases-electricity-tariffs-for-commercial-industrial-consumers/2869823/) (4 March 2026): BESCOM HT-2(b) energy charge ₹6.90/unit plus ₹390/kVA/month demand charge. Solar mainly avoids the energy charge, not the demand charge. Check your own bill and the current order |
| Self-consumption ratio | 80% | Assumed, typical for manufacturing/industrial load |
| Export rate ([net metering](/glossary/net-metering/)) | ₹4.5/unit | Assumed; confirm your DISCOM's current export or banking terms |
| Annual O&M | ₹75,000 (₹750/kW), escalating 3%/yr | Assumed |
| Inverter replacement | ₹5,00,000 in Year 12 | Assumed for illustration (about 9% of capex) and kept in the base case |
| Corporate tax rate | 25% | Assumed; actual rate depends on the company |
| Accelerated depreciation | 40% of CAPEX in Year 1 | Income-tax rate for solar (written-down-value basis); confirm with your accountant |
| Panel degradation rate | 0.5%/yr | [ALMM](/glossary/almm-list/)-compliant monocrystalline panels, assumed |
| Annual tariff escalation | 3% per year | Assumed; 0% and 6% shown in the sensitivity analysis |
| NPV [discount rate](/glossary/discount-rate/) | 8% | Assumed [WACC](/glossary/wacc/) for a Karnataka C&I borrower |

## The 5-Line C&I Solar Business Case

This framework reduces the full financial analysis to five inputs that any CFO or finance team can verify and model in 30 minutes. Running the same numbers on a different roof size or tariff is faster with a dedicated [solar financial modeling tool](https://surgepv.com/generation-financial-tool/) than rebuilding the spreadsheet each time.

### The 5-Line C&I Solar Business Case

<!-- steps -->
1. **Annual Generation** = System kW × Annual Specific Yield (kWh/kW/yr) = 100 × 1,400 = **1,40,000 kWh**

2. **Annual Savings** = (Self-consumed kWh × Grid energy charge) + (Exported kWh × Export rate) = (1,12,000 × ₹6.90) + (28,000 × ₹4.5) = ₹7,72,800 + ₹1,26,000 = **₹8,98,800**, or **₹8,23,800** after ₹75,000 of O&M

3. **Year 1 Tax Benefit ([Accelerated Depreciation](/glossary/accelerated-depreciation/))** = 40% of [CAPEX](/glossary/capex/) × Tax rate = ₹22,00,000 × 25% = **₹5,50,000**

4. **Effective Net CAPEX** = Total CAPEX − Year 1 Tax Benefit = ₹55,00,000 − ₹5,50,000 = **₹49,50,000**

5. **Simple [Payback](/glossary/payback-period/)** = Effective Net CAPEX ÷ Annual net savings = ₹49,50,000 ÷ ₹8,23,800 = **6.0 years** (about 5.7 years in the cash flow model below, where savings grow each year)

> [!FORMULA]
> Simple payback = (Total CAPEX − Year 1 tax benefit) ÷ Annual net savings = ₹49,50,000 ÷ ₹8,23,800

Step 5 divides by flat Year 1 savings, which gives 6.0 years. The 5.7-year figure used in this guide comes from the cash flow model below, where tariff escalation of 3% less 0.5% panel degradation lifts savings about 2.5% a year, so cumulative cash crosses zero early in the sixth year.

At Step 4, the effective net CAPEX after the Year 1 tax shield becomes the real economic cost of the investment: a ₹55 lakh asset with ₹5.5 lakh coming back as lower tax, if the company has taxable profit to absorb the deduction.

## The Full 25-Year Cash Flow Model

Simple payback tells you when you recover the capital. [IRR](/glossary/irr/) and NPV tell you the quality of the investment over its full life. Here is the simplified 25-year cash flow structure.

Table: Simplified 25-year cash flow structure for the base case (net of O&M, pre-tax)

| Period | Cash Flow | Notes |
| --- | --- | --- |
| Year 0 | −₹55,00,000 | Initial CAPEX outflow |
| Year 1 | +₹5,50,000 (tax shield) + ₹8,23,800 (net savings) | Combined ₹13,73,800 |
| Years 2–5 | ₹8.4 lakh in Year 2, rising to ₹8.9 lakh in Year 5 | Tariff escalation 3%, degradation −0.5%, O&M +3% |
| Years 6–11 | Net savings keep rising, ₹9.1 lakh in Year 6 to ₹9.9 lakh in Year 10 | Panel output about 94.6% of Year 1 by Year 12 |
| Year 12 | ₹5.3 lakh (net savings of ₹10.3 lakh less ₹5,00,000 inverter replacement) | Assumed replacement cost, kept in the base case |
| Years 13–25 | ₹10.5 lakh in Year 13, rising to ₹13.5 lakh in Year 25 | Panel output about 88.7% of Year 1 by Year 25 |

**NPV at 8% discount rate: about ₹53 lakh**

**IRR: about 17.7%** (pre-tax project IRR; about 18.0% if no inverter replacement is needed)

Note: The Year 12 inverter replacement is an assumption kept in the base case. Do not assume a warranty removes it: Qbits' public datasheets describe an expandable warranty but do not define the base term or remedy, so treat any warranty effect as a sensitivity, not a base-case input.

> **17.7% IRR** is the output for the base case 100 kW Karnataka system with the Year 1 depreciation shield. This exceeds the WACC of most Indian manufacturing companies (typically 10–15%) on these assumptions, but the margin narrows quickly in the conservative case below. *Source: calculated in this article from the inputs in the base case table; the avoided energy charge is from the KERC order of 3 March 2026 as reported by ThePrint on 4 March 2026.*

## How the IRR Changes with Key Assumptions

Three variables most significantly affect the C&I solar IRR. This sensitivity analysis shows how the base case 17.7% IRR changes.

Table: IRR sensitivity to tariff, self-consumption, depreciation and financing rate

| Variable | Base Case | Lower Case | Higher Case |
| --- | --- | --- | --- |
| Avoided grid tariff | ₹6.90/unit → 17.7% IRR | ₹5.50/unit → 14.2% IRR | ₹9/unit → 22.7% IRR |
| Self-consumption | 80% → 17.7% IRR | 50% → 14.7% IRR | 90% → 18.6% IRR |
| Tariff escalation | 3%/yr → 17.7% IRR | 0%/yr → 14.8% IRR | 6%/yr → 20.6% IRR |
| With/Without Year 1 depreciation shield | With (17.7%) | Without (16.2%) | N/A |
| Financing (70% debt, 10-year level EMI) | Own equity → 17.7% | 12% loan → 23.6% equity IRR | 8.5% loan → 27.9% equity IRR |

The financing row uses illustrative lender rates, not a quoted offer; see [IREDA solar loans](/blog/solar-loan-ireda/) and each lender's own page for current terms. A loan lifts the equity IRR only while the project IRR exceeds the interest rate, and it adds repayment risk.

```chart
type: bar
title: IRR of the 100 kW Karnataka system at three avoided grid tariffs
unit: "%"
decimals: 1
source: "Calculated in this article from the base case inputs (avoided tariff varied; 40% Year 1 depreciation shield claimed); values match the sensitivity table above"
note: "All other inputs held at the base case. Pre-tax. Rules and tariffs vary by state and DISCOM."
data:
  - { label: "₹5.50/unit", value: 14.2 }
  - { label: "₹6.90/unit (base case)", value: 17.7 }
  - { label: "₹9/unit", value: 22.7 }
```

The sensitivity table reveals two conclusions for decision-making:

1. **The avoided tariff is the dominant variable**: A facility that avoids ₹9/unit instead of ₹6.90 gains about 5 percentage points of IRR. Check which parts of your bill solar actually reduces: energy charges fall with every solar unit, but a fixed per-kVA demand charge largely does not. This is the same tariff-escalation dynamic covered in [electricity tariff hikes in 2026](/blog/electricity-tariff-hikes-solar/).

2. **Self-consumption is the operational driver**: A facility that can shift load to daytime hours (running compressors, mills, or pumps during solar hours) adds about 4 percentage points of IRR between 50% and 90% self-consumption by converting export income (₹4.5/unit) to self-consumption savings (₹6.90/unit).

## Accelerated Depreciation: The Tax Shield Calculation in Detail

Accelerated depreciation is the most misunderstood (and most debated) element of the C&I solar business case, and many articles still quote an old 80% rate.

**The legal basis:** Solar power generating equipment is depreciated under the Income-tax depreciation rules (Section 32 of the Income Tax Act, 1961, with the rate set in the rules and carried into the Income-tax Act, 2025; confirm the current section and rate). The rate for renewable energy devices, including solar, is 40% on a written-down-value basis. It was higher (80%) in earlier years, so older articles and EPC proposals may still show 80%; check which rate your proposal uses.

**The mechanics (base case):**
- Total asset cost: ₹55,00,000
- Year 1 depreciation claim: ₹22,00,000 (40%)
- Remaining WDV after Year 1: ₹33,00,000
- Year 2 depreciation: ₹33,00,000 × 40% = ₹13,20,000, with a further tax saving of ₹3,30,000 that this model does not count
- Tax saving in Year 1 (at 25% rate): ₹22,00,000 × 25% = **₹5,50,000**

This ₹5.5 lakh tax saving arrives in the Year 1 advance tax or the annual return, reducing effective capex to ₹49.5 lakh. If the plant is used for fewer than 180 days in the financial year, the first-year depreciation rate is halved. The "without depreciation" case in the sensitivity table drops only the Year 1 shield, so it understates the value of ordinary depreciation in later years; the true effect of accelerated depreciation is mostly one of timing.

> [!IMPORTANT] Check the Year 1 deduction with your CA
> Companies with high depreciation reserves from prior years, or without enough taxable profit in Year 1, may not be able to use the full deduction in that year. Ask your CA to confirm the rate, the first-year restriction and your own tax position before relying on the ₹5.5 lakh shield.

See [solar inverter depreciation in India](/blog/solar-inverter-depreciation-in-india/) for the full breakdown of depreciation rules applicable to solar equipment under both IT Act and Companies Act.

## Stress-Testing the Business Case: Conservative vs Base vs Optimistic

Any credible IRR model should be stress-tested across three scenarios.

Table: Conservative, base and optimistic scenarios for the 100 kW system (pre-tax, ₹55 lakh capex, ₹5 lakh Year 12 inverter replacement)

| Scenario | Assumptions | IRR | Payback |
| --- | --- | --- | --- |
| Conservative | Tariff ₹6.90/unit, PR 0.75 (1,312 kWh/kW), no depreciation shield, 0% escalation | 12.1% | 7.4 years |
| Base case | Tariff ₹6.90/unit, PR 0.80 (1,400 kWh/kW), with depreciation shield, 3% escalation | 17.7% | 5.7 years |
| Optimistic | Tariff ₹9/unit, PR 0.82 (1,435 kWh/kW), with depreciation shield, 5% escalation | 25.2% | 4.3 years |

Even in the conservative scenario the model returns about 12%, which is near the lower end of the 10–15% hurdle rate many Indian manufacturers apply, so a low-tariff, no-escalation case is marginal rather than compelling. In the base and optimistic scenarios, solar compares well with typical corporate hurdle rates, but these are illustrative modelled results, not market statistics.

## Building the Business Case for Internal Approval

For CFOs and plant managers who need to present the solar business case internally, the 5-Line C&I Solar Business Case framework provides the structure. Attach these three supporting documents:

1. **Site survey report with generation estimate**: monthly generation projections from a PVSyst or equivalent simulation, not rule-of-thumb calculations, ideally backed by a proper site survey and land feasibility assessment before the numbers go to the board
2. **EPC bid comparison**: using the [15-Point EPC Bid Scorecard](/blog/how-to-evaluate-solar-epc-bids/) to document the selection rationale
3. **Tax treatment confirmation**: written advice from the company's qualified tax professional using the current asset classification, rate, eligibility and business facts

This package makes the solar decision defensible to the board or investment committee, reduces approval time, and creates a clear success metric (actual generation vs projected) for post-implementation review. Once the model is approved internally, translating it into a formal client-facing proposal is faster with a [quotation system](https://quickestimate.co/features/quotation-system/) built for solar sales than re-keying the same numbers into a generic document.

## Where Qbits Fits in the C&I IRR Model

> [!WARNING] Do not assume the inverter replacement cost disappears
> An inverter-replacement scenario can materially affect a C&I model, but the timing, cost and effect must come from documented assumptions and a validated calculation. Qbits' public datasheets describe an expandable warranty but do not define the base term or remedy, so do not assume a warranty removes a Year 12 replacement cost. Keep that cost in the base or sensitivity case unless current written terms justify another treatment.

- **[C&I Solutions](/c-i-solution/)**: Ask which project services are available and obtain the responsible party, deliverables, exclusions and fees in writing.

- **[Download Datasheets](/download-datasheets/)**: Technical specifications for the IREDA financing application and banker review.

[Contact Qbits](/contact-us/) with the site, load, equipment and document details relevant to this guide. Confirm the responsible party, deliverable, commercial scope and response time after submission.
