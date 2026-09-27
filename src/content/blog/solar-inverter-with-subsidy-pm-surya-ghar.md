---
title: "Solar Inverter Subsidy: PM Surya Ghar Rules"
excerpt: "PM Surya Ghar pays assistance on module DC capacity, not on your inverter. What that means for sizing, hybrid, ALMM and the 5-year CMC."
description: "How to choose a solar inverter under PM Surya Ghar. The CFA is paid irrespective of inverter size, there is no MNRE inverter list, and the CMC is not the warranty."
category: "Policy"
date: 2026-06-05
updatedDate: 2026-09-24
readTime: "12 min"
image: "/blog-images/solar-inverter-certifications.svg"
author: "Nirav Dhanani"
keywords:
  - solar inverter subsidy
  - pm surya ghar inverter
  - solar inverter with subsidy
  - pm surya ghar inverter subsidy
faqs:
  - q: "Does PM Surya Ghar give a separate subsidy for a solar inverter?"
    a: "No. The central financial assistance under PM Surya Ghar Muft Bijli Yojana is calculated on the rated DC capacity of the solar modules installed, not on the inverter. The MNRE operational guidelines state that the assistance is provided irrespective of the size of the inverter installed. You cannot buy an inverter on its own and claim assistance for it. The inverter is still a mandatory system component and still has to satisfy your DISCOM's grid-connection requirements."
  - q: "Does a bigger inverter get me a bigger PM Surya Ghar subsidy?"
    a: "No. Because the assistance is computed on rated DC module capacity and is explicitly independent of inverter size, moving from a 3 kW inverter to a 5 kW inverter changes nothing on the subsidy side. It only changes what you pay the vendor. The residential slab is capped at 3 kW of module capacity, so even extra modules beyond that point add no further central assistance. Size the inverter for the array and the load, then treat the subsidy as fixed."
  - q: "Must a solar inverter be on the ALMM list for PM Surya Ghar?"
    a: "No, and this is one of the most repeated errors on the topic. The Approved List of Models and Manufacturers has List I for solar PV modules and List II for solar PV cells, with List II in force from 1 June 2026. MNRE publishes no ALMM list for inverters. Any vendor telling you their inverter is ALMM listed is describing something that does not exist as a requirement for the inverter itself. Ask instead for the model number, the applicable standard test reports and your DISCOM's written acceptance."
  - q: "Is a hybrid inverter eligible under PM Surya Ghar?"
    a: "The assistance base is rated DC module capacity, so choosing an inverter with battery capability does not by itself raise or lower the central assistance. A separately quoted battery is not part of that module capacity calculation and is not reimbursed at the same rate. What varies is whether your DISCOM will grant net metering on a hybrid configuration, and on what metering or export conditions. Get that in writing from the DISCOM before you order the hardware."
  - q: "What is the 5-year CMC under PM Surya Ghar?"
    a: "The MNRE operational guidelines require a registered vendor to provide a Comprehensive Maintenance Contract for 5 years from the date of commissioning. It is a service obligation owed by the installer, covering the installed system. It is not the same document as the inverter manufacturer's product warranty, which is a separate contract with its own term, remedy and exclusions. Ask for both documents by name, and check what happens to the CMC if the vendor exits the business."
  - q: "How much central assistance does PM Surya Ghar pay?"
    a: "Under the published central calculation, assistance is ₹30,000 for the first kW of module capacity, another ₹30,000 for the second, and ₹18,000 for the third, so ₹78,000 at 3 kW and above, according to the Press Information Bureau (2024). Special category states and UTs use ₹33,000 and ₹19,800 in place of those figures. These are scheme amounts, not a promise for any individual application. Always check the figure shown in your own National Portal application before you commit to a purchase."
  - q: "Does the subsidy reduce the GST on my solar quote?"
    a: "No. Section 15(2)(e) of the CGST Act excludes subsidies provided by the central or state government from the value of supply. The central financial assistance therefore does not reduce the taxable value on your invoice. Tax is charged on the gross contract value, and the assistance arrives separately once the scheme conditions are met. Ask the vendor for an itemised gross quote with GST shown, and treat the subsidy as a later credit rather than a discount."
  - q: "What should I check on an inverter datasheet before signing a PM Surya Ghar quote?"
    a: "Check the exact model number, the maximum DC input voltage, the MPPT voltage window, the maximum DC input current per MPPT, the number of MPPTs, the AC output rating, the ingress protection rating and the model-specific efficiency. Then check that the proposed module string actually fits inside the voltage and current limits at your site's coldest and hottest expected temperatures. A whole-brand claim is not a substitute for the datasheet of the model being installed. Ask for the datasheet as a PDF, not a screenshot in a proposal."
  - q: "What DC to AC ratio should I use under a capped subsidy?"
    a: "Since the assistance is fixed by module capacity, the DC to AC ratio becomes a purely economic and engineering choice. A ratio slightly above 1 is common in India because real array output at high cell temperature sits well below nameplate. A ratio far above 1 starts losing output to clipping on cool bright mornings. Run the temperature and loss arithmetic for your own site rather than accepting a rule of thumb from a proposal."
  - q: "What changed in PM Surya Ghar during 2026?"
    a: "MNRE reported 26.21 lakh rooftop systems installed and 9.56 GW in place as at 20 March 2026, benefiting 32.4 lakh households. The ministry also removed friction: the technical feasibility requirement was waived, auto load enhancement up to 10 kW was introduced, and the net metering agreement was folded into the National Portal application. RESCO and Utility Led Aggregation models were added. A grievance call centre operates on 15555 in 12 languages."
---

Most inverter buying under PM Surya Ghar starts from the wrong question. People ask which inverter carries the largest subsidy. The scheme never prices the inverter, so nothing in it answers that.

The [MNRE operational guidelines](https://mnre.gov.in/en/notice/operational-guidelines-for-implementation-of-the-component-central-financial-assistance-to-residential-consumers-of-pm-surya-ghar-muft-bijli-yojana/) are blunt about it. The central financial assistance, or CFA, is provided irrespective of the size of the inverter installed, and is computed on the rated DC capacity of the solar modules. That single line changes the whole inverter decision, and most competing pages miss it.

Once the subsidy is fixed by module capacity, the inverter stops being a subsidy question and becomes an engineering and warranty question. This guide covers what the scheme does and does not specify about inverters, which standards bind the hardware, how to pick a DC to AC ratio under a capped subsidy, whether a hybrid changes anything, what a registered vendor owes you for 5 years after commissioning, and what to read on the datasheet before you sign.

> **TL;DR**
> - The MNRE operational guidelines state the CFA is provided irrespective of the size of the inverter installed, computed on rated DC module capacity.
> - Published central slabs are ₹30,000 at 1 kW, ₹60,000 at 2 kW and ₹78,000 at 3 kW and above, according to the Press Information Bureau (2024).
> - There is no ALMM list for inverters. List I covers solar PV modules, List II covers solar PV cells and is in force from 1 June 2026.
> - A registered vendor owes a Comprehensive Maintenance Contract for 5 years from commissioning. That is not the manufacturer's product warranty.
> - Section 15(2)(e) of the CGST Act excludes government subsidies from the value of supply, so the CFA does not cut the GST on your invoice.
> - MNRE reported 26.21 lakh installations and 9.56 GW as at 20 March 2026, with auto load enhancement up to 10 kW now available.

**Short version.** PM Surya Ghar pays central financial assistance on the rated DC capacity of your solar modules, not on your inverter. The MNRE operational guidelines say the assistance applies irrespective of inverter size. So no inverter choice raises your subsidy. Choose the inverter on string fit, efficiency at your model, service reach and written warranty terms, then treat the subsidy figure as fixed.

## What the scheme specifies about inverters, and what it leaves out

The guidelines set out eligibility, the CFA calculation, vendor registration, the National Portal process and the maintenance obligation. They publish no inverter specification table. The inverter appears as a component of a compliant grid-connected rooftop system, subject to applicable standards and to your distribution company's connection requirements.

That asymmetry is deliberate. Module capacity is the subsidy meter, so the scheme defines it tightly. The inverter is left to the standards regime and the DISCOM, both outside the subsidy document. So no vendor can point to a line in the MNRE guidelines that approves or rejects a specific inverter model.

For the full scheme walkthrough, see our [PM Surya Ghar complete guide](/blog/pm-surya-ghar-yojana-complete-guide/), and for how the ministry's programmes fit together, the [MNRE rooftop solar scheme overview](/blog/mnre-rooftop-solar-scheme/).

## The rule most pages get wrong: the CFA does not move with inverter size

Search results on this keyword are full of advice about picking a bigger inverter for more subsidy, or picking a brand because it is "subsidy approved". Both are wrong under the current guidelines.

The CFA is computed on rated DC module capacity, irrespective of inverter size. A 3 kW module array with a 3 kW inverter and the same array with a 5 kW inverter attract exactly the same central assistance. The larger inverter simply costs more.

Published slabs, per the Press Information Bureau (2024):

| Module DC capacity used for the calculation | General central assistance |
| --- | ---: |
| 1 kW | ₹30,000 |
| 2 kW | ₹60,000 |
| 3 kW and above | ₹78,000 |

Special category states and UTs use ₹33,000 and ₹19,800 in place of ₹30,000 and ₹18,000, per the same guidelines. Dividing the published outputs by the published formula gives an implied benchmark of ₹50,000 per kW for the first 2 kW and ₹45,000 for the third. That is arithmetic from the formula, not a figure MNRE quotes directly.

These are scheme amounts, not a net price and not a promise for any individual application. Acceptance conditions also vary by state and DISCOM. Check the figure on your own National Portal application before you commit.

## Which technical specification the inverter must actually meet

The binding documents sit outside the subsidy guidelines, which require a compliant installation and point to the notified technical specifications rather than reprinting them. So you need two things in writing: standard test evidence for the model, and the DISCOM's connection requirements.

The standard set that normally applies to an Indian rooftop installation includes IEC 62109 for the safety of power converters used in photovoltaic systems, plus IS 732:2019 for wiring practice and IS 3043:2018 for earthing, both from the Bureau of Indian Standards. Safety and supply conditions sit under the Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023.

Your DISCOM then enforces grid interface behaviour. Anti-islanding evidence, ride-through settings and any zero export condition are utility-specific, not scheme-specific. Ask for the model test report and the DISCOM's written acceptance, and expect the answer to differ by state. Our [inverter compliance guide](/blog/solar-inverter-regulations-india-2026-bis-iec-compliance/) goes deeper on the standards.

## The ALMM myth: there is no inverter list

This claim circulates widely and is false. Inverters do not need to be on "ALMM List-II" for PM Surya Ghar, because List II is not a list of inverters.

The [MNRE ALMM page](https://mnre.gov.in/en/approved-list-of-models-and-manufacturers-almm/) publishes List I for solar PV modules and List II for solar PV cells, with List II in force from 1 June 2026. MNRE publishes no Approved List of Models and Manufacturers for inverters at all. There is no list to be on, so a brand cannot be on it.

What follows from that:

- An "ALMM approved inverter" sticker proves nothing about compliance.
- The scheme's domestic content conditions run through the module and cell lists, so they give you no test for the inverter.
- Rejecting a quote because a rival vendor says the inverter is "not ALMM listed" is rejecting it on a criterion that does not exist.

Use the model documents instead. The [ALMM glossary entry](/glossary/almm-list/) explains what the lists do cover. Qbits states it is ALMM Phase III listed; treat that as a brand statement and still ask for model-level paperwork.

## Worked example: sizing the inverter when the subsidy is capped

Assistance stops growing above 3 kW of module capacity. So the sizing question becomes: given a fixed subsidy, which inverter serves the array best? Here is the arithmetic, with design assumptions labelled.

**Inputs.** Six modules of 580 Wp, giving 3,480 Wp DC. Temperature coefficient of power -0.32% per degree C. Assumed cell temperature 55 degrees C, which is 30 degrees above the 25 degrees C standard test condition. Assumed combined soiling, mismatch and cable loss 5%. Inverter efficiency 98%.

**Calculation.**

1. Temperature derate: -0.32% x 30 = -9.6%, so about 90.4% of nameplate.
2. 3,480 W x 0.904 = 3,146 W at the array terminals.
3. System losses: 3,146 x 0.95 = 2,988 W.
4. Inverter efficiency: 2,988 x 0.98 = about 2,928 W of AC output.

**Reading.** A 3.0 kW AC inverter is not clipping that array at 55 degrees C. The CFA is ₹78,000 either way, so the only question is what a larger unit buys. It buys headroom on cool bright mornings, and it costs more. The temperature and loss figures are assumptions for illustration, not measured site data. Run them for your own roof.

## Choosing a DC to AC ratio when the money is fixed

Because the subsidy is fixed by module capacity, the DC to AC ratio is a pure engineering and cost decision. No ratio earns a larger CFA.

| AC rating for a 3,480 Wp array | DC to AC ratio | What it means |
| --- | ---: | --- |
| 3.0 kW | 1.16 | Highest inverter use, some clipping risk on cool bright days |
| 3.3 kW | 1.05 | Modest headroom, little clipping |
| 4.0 kW | 0.87 | Oversized here, no CFA benefit |

Mild DC oversizing is normal in India because real array output sits well below nameplate for most of the day. Push the ratio too far and you lose energy to clipping at the inverter's AC ceiling. Our explainer on [DC oversizing](/blog/dc-oversizing-in-solar/) covers the tradeoff in detail.

## On-grid or hybrid under the scheme

The CFA base is rated DC module capacity. So choosing a unit with battery capability does not by itself raise or lower the assistance, and a separately quoted battery is not part of that calculation.

What changes is the utility side. Whether your DISCOM grants net metering on a hybrid configuration, which meter arrangement it requires and whether it imposes a zero export condition all vary by state and DISCOM. Some utilities accept a battery behind the meter; others want the operating mode documented.

Sequence it properly: settle the backup requirement, confirm the metering treatment with the DISCOM in writing, then order hardware. Doing it the other way round is how projects stall. Compare the two architectures in our [on-grid versus hybrid guide](/blog/on-grid-vs-hybrid/), and if you only need grid export, the [on-grid inverter range](/on-grid-inverter/) is simpler.

## What a registered vendor owes you, including the 5-year CMC

The MNRE operational guidelines put real obligations on the registered vendor, and buyers routinely fail to collect on them. The maintenance contract is the most valuable.

Under the guidelines, a registered vendor must provide a Comprehensive Maintenance Contract for 5 years from the date of commissioning. The guidelines also run a 15-day clock after DISCOM approval and a 30-day clock for grievances. A grievance call centre operates on 15555 in 12 languages.

MNRE reported process changes during 2026. As at 20 March 2026, 26.21 lakh rooftop systems totalling 9.56 GW were installed, benefiting 32.4 lakh households. The technical feasibility requirement was waived, auto load enhancement up to 10 kW was introduced, the net metering agreement was folded into the National Portal application and vendor registration was simplified. RESCO and Utility Led Aggregation models were added. Collateral-free loans were offered at repo rate plus 50 basis points, 5.75% per annum at that date, for up to 10 years. That rate floats with the repo, so confirm it with the lender.

Verify the vendor's current registration for your area on the [official consumer portal](https://pmsuryaghar.gov.in/). Our [empanelled vendor guide](/blog/empanelled-vendor-pm-surya-ghar/) covers the checks, and the [rejection reasons guide](/blog/pm-surya-ghar-rejection-reasons/) covers what goes wrong.

## Warranty diligence: the CMC is not the manufacturer warranty

Readers conflate these two constantly, and vendors are not always keen to separate them. They are different documents with different counterparties, terms and failure modes.

| | 5-year CMC | Manufacturer warranty |
| --- | --- | --- |
| Who owes it | The registered vendor | The equipment manufacturer |
| Source | MNRE operational guidelines | The manufacturer's written terms |
| Scope | Maintenance of the installed system | The product, per its terms |
| Term | 5 years from commissioning | Set by the manufacturer, varies by model |
| If the vendor exits | Service cover can lapse | Unaffected, if you hold the paperwork |

Collect three things before payment: the signed CMC with commissioning date and scope written out, the manufacturer's written warranty for the exact model including base term, remedy, registration deadline and exclusions, and the fault service route showing who raises the claim and who moves the unit.

Qbits publishes an expandable warranty, and its public datasheets do not define the base term, remedy, registration deadline or exclusions, so obtain the current written warranty for the exact quoted model.

## Reading the inverter datasheet before you sign

Ask for the model datasheet as a PDF. A whole-brand claim is not evidence about the unit going on your wall. These fields decide whether the proposed design is even legal on paper.

1. **Exact model number.** Series names cover many ratings with different limits.
2. **Maximum DC input voltage.** A hard ceiling. Exceeding it at cold temperature is a safety problem.
3. **MPPT voltage window.** Strings below the lower bound will not start.
4. **Maximum DC input current per MPPT.** High-current modules hit this before the power limit.
5. **Number of MPPTs.** Sets how many roof orientations you can serve cleanly.
6. **AC output rating and phase.** Must match the sanctioned load and the DISCOM connection.
7. **Ingress protection rating.** Qbits lists IP66 across its series in its published product data.
8. **Model-specific efficiency.** Qbits publishes 98% maximum on the single-phase 1.5 to 4 kW on-grid models, 98.5 to 98.7% by model on the three-phase 5 to 17 kW units, and 97.6% maximum on the 3 to 6 kW single-phase hybrids. Never apply a top-model figure to a whole range.

A quick voltage check shows why this matters. Take a 580 Wp module with 52.50 V open circuit voltage and a Voc temperature coefficient of -0.24% per degree C. At 5 degrees C, Voc rises to about 55.0 V. On an inverter with a 550 V maximum DC input, 10 modules in series reach about 550.2 V and breach the ceiling, while 9 sit at about 495 V and pass. One extra module added on site can put the string out of specification. Our guide on [reading inverter datasheets](/blog/how-to-read-solar-inverter-datasheets/) covers the rest.

## Common mistakes

- Buying a larger inverter to chase a larger subsidy. The CFA does not move with inverter size.
- Treating an "ALMM approved inverter" claim as compliance evidence. No such list exists.
- Accepting a net price and never seeing the gross, itemised quote.
- Assuming the CFA reduces GST. Section 15(2)(e) of the CGST Act excludes government subsidies from the value of supply, so tax sits on the gross contract value.
- Assuming the 5-year CMC and the manufacturer warranty are the same cover.
- Ordering a hybrid before confirming the DISCOM's metering treatment in writing.
- Letting an installer add a module after design without rechecking the DC voltage ceiling.
- Believing any promise of approval or a specific slab. Neither is a vendor's to give.

## The Bottom Line

PM Surya Ghar pays on module DC capacity and says so plainly: the assistance applies irrespective of the size of the inverter installed. Once that is settled, the inverter decision is about string fit, model-level efficiency, service reach and written warranty terms. There is no inverter list to check, and no inverter choice raises your subsidy.

Three things to do next:

- Pull the gross itemised quote, confirm the module DC capacity your application claims on, then stop optimising the inverter for subsidy.
- Collect the signed 5-year CMC and the manufacturer's written warranty for the exact model as two separate documents before releasing payment.
- Test your module and inverter pairing against real voltage and current limits in the [string sizing calculator](/string-sizing-calculator/), then [talk to our team](/contact-us/) about the model that fits the design.

**Sources checked 24 September 2026:** [MNRE operational guidelines, residential CFA component](https://mnre.gov.in/en/notice/operational-guidelines-for-implementation-of-the-component-central-financial-assistance-to-residential-consumers-of-pm-surya-ghar-muft-bijli-yojana/); [MNRE ALMM page](https://mnre.gov.in/en/approved-list-of-models-and-manufacturers-almm/); [PM Surya Ghar National Portal](https://pmsuryaghar.gov.in/); Press Information Bureau (2024) for the CFA slabs; MNRE scheme progress reported March 2026; IEC 62109, IS 732:2019 and IS 3043:2018 (Bureau of Indian Standards); Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023; Section 15(2)(e), CGST Act. DISCOM conditions and model documents still have to be checked per installation.
