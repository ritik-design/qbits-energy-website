---
title: "Solar String Sizing: Voltage, Current and MPPT Checks"
excerpt: "Size a PV string from the exact module, inverter and site-temperature inputs, then verify cold Voc, hot Vmp, current and MPPT allocation."
description: "Use a solar string sizing worksheet to check cold Voc, hot Vmp, input current and MPPT limits from exact module and inverter documents."
category: "Technology"
date: 2026-06-05
updatedDate: 2026-09-23
readTime: "11 min"
image: "/og/blog-solar-string-sizing-ocp-india.webp"
author: "Keyur Rakholiya"
keywords:
  - solar inverter string sizing
  - solar string sizing calculation
  - cold Voc calculation
  - MPPT voltage check
  - maximum strings per MPPT
faqs:
  - q: "What inputs are needed for solar string sizing?"
    a: "Use the exact module Voc, Vmp, Isc, Imp and temperature coefficients; the design minimum and maximum cell temperatures; and the inverter's maximum DC voltage, MPPT window, start-up voltage, operating-current and short-circuit-current limits for each input. Model labels alone are not enough."
  - q: "How is maximum string length checked?"
    a: "Correct the module open-circuit voltage to the design minimum cell temperature using the module maker's coefficient, then multiply by modules in series. The result must remain within the exact inverter limit and any applicable design requirement. Do not add a universal safety factor without identifying its controlling source."
  - q: "How is minimum string length checked?"
    a: "Correct module operating voltage to the design maximum cell temperature and compare the series-string result with the inverter's applicable MPPT operating requirement. Start-up voltage is a separate field and does not prove that the inverter can track or deliver rated output under hot operating conditions."
  - q: "How many parallel strings can connect to one MPPT?"
    a: "Add the proposed strings' operating and short-circuit currents at the relevant MPPT, applying the exact document and design rules for the project. Compare those totals with the inverter's per-input and per-MPPT limits and confirm connector, conductor and overcurrent-protection requirements separately."
  - q: "Can a string-sizing calculator approve a design?"
    a: "A calculator can reproduce declared formulas and screen combinations, but its output is only as current as its module, inverter and temperature data. A qualified designer should verify the exact documents, assumptions, protection design and applicable requirements before procurement or installation."
featured: false
---

**Solar string sizing checks whether a proposed series and parallel module arrangement stays within an inverter's voltage, current and MPPT limits across the design temperatures.** Use the exact module and inverter documents, declare the site-temperature basis, keep units visible and have a qualified designer verify the result. A generic panel count is not a design.

This guide covers the calculation structure. It does not prescribe a universal safety factor, fuse rule or Indian temperature value because those inputs depend on the controlling documents and project requirements.

## Which documents and inputs are needed first?

**Collect the exact module datasheet, inverter datasheet and manual, approved design temperatures, array layout and applicable protection requirements before calculating.** Record document revisions and units. Closely related equipment variants can have different voltage, current, connector and MPPT limits, so a brand or family name is insufficient.

Use this input sheet:

| Input | Symbol | Unit | Source |
| --- | --- | --- | --- |
| Module open-circuit voltage at stated conditions | Voc | V/module | Exact module datasheet |
| Module maximum-power voltage | Vmp | V/module | Exact module datasheet |
| Module short-circuit current | Isc | A/string | Exact module datasheet |
| Module maximum-power current | Imp | A/string | Exact module datasheet |
| Voltage temperature coefficients | βVoc, βVmp | fraction/°C or %/°C | Exact module datasheet |
| Design minimum and maximum cell temperatures | Tmin, Tmax | °C | Approved project basis |
| Inverter maximum DC voltage | Vdc,max | V | Exact inverter document |
| MPPT operating window and start-up voltage | Vmppt,min/max | V | Exact inverter document |
| Input and MPPT current limits | Imax, Isc,max | A | Exact inverter document |
| Number and architecture of independent trackers | MPPT count | count | Exact inverter document |

Convert percentage coefficients to fractional form before using them in a formula, or keep the percentage calculation explicit. Do not mix ambient and cell temperature without an approved model.

## How is cold-weather open-circuit voltage checked?

**Correct module Voc to the approved minimum cell temperature, multiply by the number of series modules, and compare the result with the inverter's absolute DC limit.** Use the sign and units printed by the module maker. Apply any additional design margin only when its source and scope are documented.

For a coefficient expressed as a fraction per degree Celsius:

`corrected module Voc = Voc at reference conditions × [1 + βVoc × (Tmin - Tref)]`

`cold string Voc = corrected module Voc × modules in series`

Because many module Voc coefficients are negative, a minimum temperature below the reference temperature normally raises the calculated Voc. The formula still needs the module maker's exact coefficient and the project's approved cell-temperature basis.

Do not use an assumed “India uplift.” A hill site, desert site and coastal site do not share one design minimum, and site elevation or local records can matter.

## How is hot operating voltage checked against the MPPT window?

**Correct module Vmp to the approved maximum cell temperature, multiply by the series count and compare it with the applicable MPPT operating requirement.** The check asks whether the inverter can track the string under hot operating conditions. It is different from the cold absolute-voltage check and from start-up voltage.

The worksheet structure is:

`corrected module Vmp = Vmp at reference conditions × [1 + βVmp × (Tmax - Tref)]`

`hot string Vmp = corrected module Vmp × modules in series`

Some inverter documents qualify the MPPT window by output level or input condition. Use the curve or note that applies to the proposed model rather than treating one printed range as a promise of full power everywhere within it.

## How are input current and parallel strings checked?

**Current checks are performed per physical input and per MPPT using the proposed parallel arrangement.** Series modules raise voltage but do not add string current; parallel strings add current. Compare both operating-current and short-circuit-current totals with the exact inverter limits and the project protection design.

Record:

- How many strings land on each input.
- Which inputs share an MPPT internally.
- Module Imp and Isc at the stated basis.
- Any applicable current adjustment and its source.
- Input-connector and conductor limits.
- Reverse-current and overcurrent-protection requirements.

A connector count does not establish the number of independent trackers. The [single versus dual MPPT guide](/blog/dual-mppt-vs-single-mppt/) explains why tracker architecture and roof allocation must be checked together.

## What does a model-specific string-sizing screen look like?

**A model-specific screen begins with published inverter fields, then stops where module or site inputs are missing.** For the Qbits QB-4/5/6KTLD family, the current public datasheet lists two MPPTs, 550 V maximum DC, an 80–550 V MPPT range and 20 A maximum input current per MPPT.

Those fields do not produce a valid panel count by themselves. Complete this model screen with the proposed module and site data:

| Check | Published QB-4/5/6KTLD field | Missing project input | Status |
| --- | --- | --- | --- |
| Cold series voltage | 550 V maximum DC | Module Voc, βVoc, Tmin and series count | Pending calculation |
| Hot operating voltage | 80–550 V MPPT range | Module Vmp, βVmp, Tmax and series count | Pending calculation |
| MPPT allocation | Two independent MPPTs | Roof groups and strings per tracker | Pending layout |
| Input current | 20 A per MPPT | Module Imp/Isc and parallel strings | Pending calculation |

This is deliberately incomplete until an actual module and temperature basis are supplied. The [published TLD datasheet](/datasheets/products/QB_Data-Sheet_4.0-6.0-kw_2MPPT_1Phs.pdf) controls the inverter fields, and the module document controls the remaining electrical inputs.

## What should the calculation record contain?

**Keep the original inputs, formulas, units, intermediate values and pass criteria with the design record.** A screenshot showing only “pass” cannot reveal a stale database, coefficient-unit error or wrong model selection. The final record should allow another engineer to reproduce every result.

Include:

1. Exact module and inverter identifiers and document revisions.
2. Temperature source and whether values are ambient or cell temperature.
3. Coefficient sign and conversion from percent where applicable.
4. Proposed series count and parallel allocation per MPPT.
5. Cold Voc, hot Vmp, operating current and short-circuit-current checks.
6. Additional margins or protection rules with their controlling source.
7. Design reviewer, date and approved result.

Use the [Qbits string-sizing calculator](/string-sizing-calculator/) as a screen, then compare its stored data with the current documents. The calculator does not replace protection coordination or engineering approval.

## Which common errors invalidate a string calculation?

**A calculation is invalid when it uses the wrong equipment variant, mixes temperature definitions, ignores coefficient units or tests only one electrical limit.** Other frequent errors include treating start-up voltage as the MPPT minimum, adding parallel current incorrectly and assuming each connector is an independent tracker.

Also reject a calculation that:

- Uses a typical module instead of the quoted module.
- Uses a city temperature without an approved design basis.
- Omits cold Voc or hot Vmp.
- Compares Imp with an Isc limit or the reverse without explanation.
- Ignores per-input limits while checking only a total inverter limit.
- Applies an unexplained fixed multiplier.
- Has no versioned output after a module or inverter substitution.

The [inverter datasheet guide](/blog/how-to-read-solar-inverter-datasheets/) provides a second check on voltage and current fields.

## What should happen before procurement or installation?

**Freeze the exact module, inverter, string allocation and calculation revision before equipment is ordered or connected.** Re-run the calculation after any substitution, firmware-dependent input change or layout revision. Then align the labels, drawings, protection schedule and commissioning plan with the approved result.

[Download current Qbits datasheets](/download-datasheets/) or [request model-specific documents](/contact-us/) before final design. Electrical design and installation must be completed by qualified parties under the applicable project and local requirements.

