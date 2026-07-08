---
title: "Solar String Sizing Software: Complete 2026 Guide"
excerpt: "Solar string sizing software bounds the panel string length to the inverter's MPPT window across temperature extremes. Here is how to do it right and which tools automate it across 12,000+ inverter models."
description: "Solar string sizing software 2026: MPPT-bounded auto-sizing, temperature limits, NEC/IEC compliance, plus the SurgePV workflow. Book a free demo."
category: "Solar Software"
date: 2026-06-14
updatedDate: 2026-07-08
readTime: "10 min"
image: "/blog-images/solar-string-sizing-software.svg"
author: "Keyur Rakholiya"
keywords:
  - solar string sizing software
  - solar string sizing calculator
  - mppt string sizing
  - solar string design
  - string voltage calculator
  - pv string sizing
faqs:
  - q: "What is solar string sizing software?"
    a: "Solar string sizing software calculates the number of PV modules wired in series per string, bounded by the inverter's MPPT operating window across temperature extremes. The right string length maximises inverter clipping efficiency at sunny conditions while keeping voltage within safe limits at cold-temperature start-up. SurgePV automates this across 12,000+ inverter models."
  - q: "Why does string sizing matter for solar yield?"
    a: "Wrong string sizing costs yield. Too short and the string voltage drops below the inverter's MPPT minimum at hot conditions, dropping output. Too long and the string voltage exceeds the inverter's MPPT maximum at cold start-up, tripping protection. Correctly sized strings keep the inverter at its peak operating point year-round."
  - q: "What inputs does string sizing software need?"
    a: "Module open-circuit voltage (Voc), maximum power voltage (Vmp), temperature coefficients (Voc and Vmp), site temperature range (cold extreme to record high cell temperature), inverter MPPT window (Vmin to Vmax), and any code-imposed safety margins. SurgePV uses datasheet values directly from its 70,000-module database."
  - q: "Does SurgePV include a string sizing calculator?"
    a: "Yes. SurgePV's integrated string sizing tool runs automatically as part of the design canvas, plus is available as a standalone free calculator. The same MPPT-bounded methodology applies, across the 12,000-inverter database. It is built into every paid plan."
  - q: "Does string sizing software handle NEC and IEC code compliance?"
    a: "Yes for the major platforms. SurgePV applies NEC 690.7 limits for US projects, IEC 60364-7-712 for international, AS/NZS 4777.2 for Australia, and IS 16221 for India. Code-imposed safety margins are baked into the calculator outputs."
  - q: "Can I use string sizing software for multi-MPPT inverters?"
    a: "Yes. SurgePV handles single, dual, and quad MPPT inverters, including asymmetric string layouts across MPPTs for shaded or split-pitch roofs. Each MPPT gets its own string-sizing computation."
  - q: "Is string sizing different for hybrid solar inverters?"
    a: "Yes. Hybrid inverters add a DC-side battery charge controller, which can change the effective string voltage window during battery charge. SurgePV's string sizing accounts for this when a hybrid inverter is selected."
---

Solar string sizing software bounds the PV string length to the inverter's MPPT operating window across temperature extremes. Wrong sizing costs real yield and can trigger inverter protection. This guide explains how string sizing works, the inputs that matter, and how [SurgePV](https://surgepv.com/) automates it across 12,000+ inverter models on every paid plan as part of its [solar design platform](https://surgepv.com/solar-designing).

> **TL;DR**
> - String sizing keeps the inverter operating at peak MPPT year-round.
> - [SurgePV](https://surgepv.com/) automates MPPT-bounded string sizing across 12,000 inverters and 70,000 modules.
> - Free standalone string sizing calculator plus the full integrated workflow inside SurgePV.
> - [Book a free SurgePV demo](https://surgepv.com/demo) and see the auto-sizing on a real project.

<div class="inline-cta">
<h3>Auto-sized strings on a real project in 20 minutes</h3>
<p>A SurgePV engineer designs one of your real projects, including the auto-sized string layout across multiple MPPTs.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">20 minutes · Bring a real project · No credit card</p>
</div>

## What String Sizing Does

The inverter's [MPPT](/glossary/mppt/) window has a minimum operating voltage and a maximum allowed input voltage. The PV string voltage varies with temperature, dropping at hot module temperatures and rising at cold start-up. The right string length keeps the operating voltage range inside the MPPT window across the site's temperature extremes.

**Cold-end check:** at the record minimum module temperature (often the coldest sunrise of the year), the string Voc must stay below the inverter Vmax to avoid tripping protection or damaging the inverter.

**Hot-end check:** at the record maximum module cell temperature (often a hot summer afternoon), the string Vmp must stay above the inverter Vmin to keep MPPT engaged.

## Inputs That Matter

1. **Module [Voc](/glossary/open-circuit-voltage/) and Vmp** at [STC](/glossary/stc/)
2. **Module [temperature coefficients](/glossary/temperature-coefficient/)** (β for Voc, γ for Vmp)
3. **Site cold-temperature extreme** (typically the record low minus margin)
4. **Site hot-cell-temperature extreme** (often record-air-temperature + 25 to 35 °C cell rise)
5. **Inverter MPPT Vmin and Vmax**
6. **Code-imposed safety margins** (NEC 690.7, IEC, AS/NZS, IS)

SurgePV pulls module datasheet values directly from the 70,000-module database and applies the cold and hot temperature extremes from the project's site data.

## How SurgePV Automates String Sizing

The design canvas runs string sizing as soon as a module and inverter are selected. The output is the MPPT-bounded string length, plus the recommended layout across [multiple MPPTs](/blog/dual-mppt-vs-single-mppt/) if the inverter supports it. [Clara AI](https://surgepv.com/clara-ai) can also pick the string length from a natural-language brief. The free standalone [string sizing calculator](https://surgepv.com/tools/string-sizing-calculator/) runs the same methodology outside the design canvas for quick checks, alongside the full [SurgePV platform](https://surgepv.com/).

## NEC, IEC, AS/NZS, IS Code Compliance

| Code | Region | Margin |
| --- | --- | --- |
| NEC 690.7 | US | +25% factor on cold-extreme Voc |
| IEC 60364-7-712 | International | Datasheet-derived |
| AS/NZS 4777.2 | Australia | Temperature-coefficient-derived |
| IS 16221 | India | Datasheet + cold-extreme margin |

SurgePV applies the relevant code margin based on the project's site location. For India-specific string sizing and overcurrent protection reference values, see our [solar string sizing and OCP guide](/blog/solar-string-sizing-ocp-india/). For projects that need a fully stamped compliance package beyond the calculator output, EPCs often turn to a dedicated [rooftop detailed engineering design](https://heavendesigns.in/solar-rooftop-detailed-engineering-design/) service.

## Solar String Sizing Across Competing Tools

| Tool | Auto-sizing | Multi-MPPT | Hybrid inverters | Free calculator |
| --- | --- | --- | --- | --- |
| **SurgePV** | Yes | Yes | Yes | Yes |
| HelioScope | Yes | Yes | Limited | No |
| PVsyst | Yes | Yes | Limited | No |
| Aurora | Yes | Yes | Limited | No |
| OpenSolar | Limited | Limited | Limited | No |

For installers using Qbits or other hybrid inverters, SurgePV's auto-sizing handles the DC-side battery charge controller behaviour that simpler calculators miss. For inverter-specific string sizing reference inputs, see [Qbits string sizing notes](https://qbitsenergy.com/string-sizing-calculator/).

## Common String Sizing Mistakes

1. **Using STC values without temperature correction**. Cold-Voc check fails in real conditions.
2. **Ignoring inverter [MPPT clipping](/blog/inverter-clipping-explained/) at oversizing**. [DC oversizing](/blog/dc-oversizing-in-solar/) of 1.3 to 1.5× helps yield; sizing without it under-utilises the inverter.
3. **Not adjusting for site-specific cold extreme**. A 100-year cold event matters for code margin.
4. **Mixing module models in a string**. Mismatch losses can cancel any expected gain.
5. **Skipping the hot-end check on tracker projects**. Module cell temperatures rise higher than fixed-tilt.

## Example: 5 kW Residential With a Dual-MPPT Hybrid Inverter

- Module: 540 W, Voc 49.5 V, Vmp 41.8 V, β = -0.27%/°C, γ = -0.35%/°C
- Site cold extreme: -5 °C cell
- Site hot extreme: 70 °C cell
- Inverter: 5 kW [hybrid inverter](/glossary/hybrid-inverter/), MPPT 80 V to 550 V, dual MPPT

Cold-Voc at -5 °C cell: 49.5 × (1 + 0.27 × 30) / 100 = 49.5 × 1.081 = ~53.5 V per module.
Max string length: 550 / 53.5 = 10 modules per string.

Hot-Vmp at 70 °C cell: 41.8 × (1 - 0.35 × 45) / 100 = 41.8 × 0.842 = ~35.2 V per module.
Min string length: 80 / 35.2 = ~3 modules per string.

Workable range: 3 to 10 modules per string per MPPT. SurgePV picks 5 modules per string for the example layout, fitting 10 modules total split 5 on each MPPT.

<div class="inline-cta">
<h3>Auto-sized strings on every project, in the same workflow as the design</h3>
<p>SurgePV ships string sizing, MPPT optimisation, and 12,000-inverter database support at $1,299 to $1,899 per user per year.</p>
<a href="https://surgepv.com/pricing" class="cta-btn" target="_blank" rel="noopener noreferrer">Compare Plans <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Annual billing · Cancel anytime · Includes Clara AI</p>
</div>

## Who Should Choose Each Tool

- **Choose SurgePV** for integrated string sizing inside the design canvas plus the free standalone calculator, across 12,000+ inverters.
- **Choose HelioScope** for engineering-only string sizing in a focused simulator.
- **Choose PVsyst** for desktop bankable workflows.
- **Choose Aurora upper tier** for US-residential.

For most installers in 2026, SurgePV ships the cleanest combined workflow at the lowest realised cost. String sizing usually happens after [8,760-hour shading analysis](/blog/solar-shading-analysis-software/) and [solar simulation](/blog/solar-simulation-software/), and feeds directly into [auto-generated single line diagrams](/blog/solar-sld-software/).

<div class="inline-cta">
<h3>Ready to auto-size strings on every project?</h3>
<p>SurgePV combines AI 3D roof modeling, string sizing, 8,760-hour module-level shading, financial modelling, and white-label proposals in one platform.</p>
<a href="https://surgepv.com/demo" class="cta-btn" target="_blank" rel="noopener noreferrer">Book a Free Demo <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/></svg></a>
<p class="cta-sub">Or <a href="https://surgepv.com/pricing" target="_blank" rel="noopener noreferrer">see pricing</a> · <a href="https://surgepv.com/" target="_blank" rel="noopener noreferrer">explore the platform</a></p>
</div>
