---
title: "Solar String Sizing & Overcurrent Protection"
excerpt: "Solar string sizing in India starts with inverter MPPT voltage limits, temperature-corrected Voc calculations, and fuse ratings sized for parallel string Isc. Here is the 5-step method."
description: "Step-by-step solar string sizing guide for Indian EPC teams: Voc temperature correction, 1.25 safety factor, Isc fuse sizing, and the 5-Step Sizing Loop."
category: Technology
date: 2026-06-05
updatedDate: 2026-07-08
readTime: "17 min"
image: "/blog-images/solar-inverter-sizing.svg"
author: "Keyur Rakholiya"
keywords:
  - solar string sizing india
  - solar string sizing calculation
  - solar string fuse sizing
  - inverter MPPT voltage string
  - solar overcurrent protection india
faqs:
  - q: "What is solar string sizing?"
    a: "Solar string sizing is the process of determining how many solar panels can be connected in series (a string) to match the voltage window of the inverter's MPPT input. The string must produce a voltage high enough for the inverter to track the maximum power point (Vmin MPPT) but must never exceed the inverter's maximum input voltage (Vmax DC) even under worst-case cold temperature conditions when panel Voc is at its highest. Getting string sizing right ensures maximum energy harvest and safe, long-term inverter operation."
  - q: "How does temperature affect solar string voltage in India?"
    a: "Solar panel open-circuit voltage (Voc) increases as temperature decreases and decreases as temperature increases. In India, where ambient temperatures can reach 45–50 °C in summer, panels operate at cell temperatures of 65–75 °C, significantly reducing Voc from the STC value. The relevant calculation for string sizing is the cold-temperature worst case - the coldest night in the installation location, which adds a buffer above the STC Voc. For most Indian plains locations, the cold-temperature correction adds 5–12% to Voc, which must be multiplied by 1.25 safety factor and compared against inverter Vmax DC."
  - q: "What is the 1.25 safety factor in string sizing?"
    a: "The 1.25 safety factor in solar string sizing applies to the calculated string Voc at the lowest expected temperature. This factor accounts for manufacturing variations in panels, measurement uncertainty in temperature data, and grid safety margins. The safety test is: string Voc at Tmin × 1.25 must be less than the inverter's maximum DC input voltage (Vmax DC). If this check fails, reduce the string by one panel. This safety factor is aligned with NEC 690.7 in the US and IS/IEC standards adopted in India for photovoltaic system safety."
  - q: "How do I calculate the fuse rating for a solar string?"
    a: "The fuse rating for a solar string uses the formula: fuse rating = 1.25 × Isc × 1.25 (for parallel strings). The first 1.25 factor accounts for continuous operation at maximum short-circuit current. The second 1.25 factor provides a safety margin above the calculated continuous current. For a single string with no parallel connections, no string fuse is required - the string wire is sized for 1.25 × Isc, and the inverter's input overcurrent protection covers the circuit. For two or more parallel strings, each string requires an individual fuse to prevent reverse current from healthy strings flowing through a faulted string."
  - q: "What is the minimum and maximum number of panels in a solar string?"
    a: "The minimum number of panels is determined by the inverter's MPPT minimum voltage: the string must produce Vmpp at STC (typically 80–85% of Voc) above the inverter's MPPT minimum voltage threshold at the highest expected temperature. The maximum is determined by the string Voc at the lowest expected temperature, multiplied by 1.25, which must not exceed the inverter's Vmax DC. In Indian conditions with typical 440 Wp panels (Voc ~49 V, Vmpp ~40 V) and an inverter with Vmin MPPT = 180 V and Vmax DC = 1000 V: minimum string = ceil(180/40) = 5 panels; maximum string = floor(1000 / (49 × 1.05 × 1.25)) = floor(1000/64) = 15 panels."
  - q: "Why is string sizing different in India compared to colder climates?"
    a: "India's high ambient temperature environment means panels rarely reach the very cold temperatures seen in Europe or North America. The cold-temperature Voc uplift in India is typically 5–12% above STC Voc (based on minimum ambient temperatures of 5–15 °C in most Indian plains locations versus −20 °C in alpine Europe). This smaller uplift means the temperature-corrected Voc is closer to the STC value, which allows slightly longer strings than would be safe in colder climates - but this advantage disappears if the system is installed at altitude (Himalayas, Ladakh) or in northern states where winter temperatures drop significantly."
  - q: "What happens if string voltage exceeds the inverter's Vmax DC?"
    a: "If the string's open-circuit voltage exceeds the inverter's Vmax DC - even momentarily, on a cold morning before load is connected - the inverter's input capacitors and power electronics are exposed to voltage above their rated level. This causes immediate or accelerated failure of the inverter's DC-DC conversion stage. Modern inverters include over-voltage protection that shuts down the input before damage occurs, but repeated over-voltage events degrade the protection components themselves. The inverter manufacturer will inspect the failure and identify over-voltage as the cause, which typically voids the warranty for this failure mode."
  - q: "Do I need a string fuse for a two-string system?"
    a: "Yes. When two or more strings are connected in parallel at a combiner box or directly at the inverter's MPPT input, each string requires individual overcurrent protection (a string fuse or miniature circuit breaker). The reason: if one string develops a ground fault, current from the other healthy string flows through the fault point. Without a fuse on each string, this fault current has no automatic interruption mechanism and can cause cable insulation damage or fire. The fuse rating is calculated as 1.25 × 1.25 × Isc - the double 1.25 factor ensures the fuse carries full continuous string current without nuisance blowing."
---

[String sizing](/glossary/string-sizing/) is the first calculation an EPC engineer performs when designing a solar plant, before layout, before cable sizing, before protection coordination. Get it wrong, and the inverter either fails to reach MPPT (too few panels per string) or suffers over-voltage damage on a cold morning (too many panels per string). In India, the calculation has two India-specific characteristics: high ambient temperatures reduce hot-day voltage concerns, while the required safety factor still governs the cold-day maximum.

> **TL;DR**
> - String sizing follows five steps: read the inverter's Vmin/Vmax MPPT window, calculate temperature-corrected Voc, apply the 1.25 safety factor, verify the MPPT floor, then size the fuse.
> - India's cold-temperature Voc uplift is typically only 5–12% above STC, versus 10–15% in colder climates, which allows slightly longer strings on the plains.
> - The safety check requires string Voc(Tmin) × 1.25 to stay below the inverter's Vmax DC, commonly 1000 V for commercial rooftop inverters.
> - Two or more parallel strings each need an individual gPV DC fuse sized at 1.25 × Isc × 1.25; a single string per MPPT needs no fuse.
> - Standard AC MCBs cannot safely interrupt a DC arc fault, only gPV fuses or DC-rated breakers are permitted in string circuits.
> - Qbits datasheets publish the Vmax DC, MPPT range, and Isc max needed to run the 5-Step String Sizing Loop directly.

> **Direct answer.** Solar string sizing in India follows five steps: check inverter MPPT Vmin and Vmax, calculate string Voc at the coldest expected temperature using the panel's temperature coefficient, verify that Voc × 1.25 falls below inverter Vmax DC, calculate string Isc for fuse selection using 1.25 × Isc × 1.25 for parallel strings. The 5-Step String Sizing Loop ensures every Qbits inverter specification is met safely at both temperature extremes.

For EPC teams who quote fast and install faster, string sizing is often the step where shortcuts are taken. This guide gives the full method, including the India-specific temperature corrections that make the calculation different from European or US practice.

## Step 1: Read the Inverter MPPT Specification Sheet

The inverter specification sheet contains four DC input parameters that govern string sizing. All four must be recorded before touching a calculator.

| Inverter parameter | What it means | Where to find it |
| --- | --- | --- |
| Vmax DC | Maximum DC input voltage - never exceed this | "DC Input" section of datasheet |
| Vmin MPPT | Minimum voltage for MPPT operation | "DC Input" section |
| Vmax MPPT | Maximum voltage for MPPT operation at rated power | "DC Input" section |
| Isc max per MPPT | Maximum short-circuit current per MPPT input | "DC Input" section |

For Qbits TLS series single-phase on-grid inverters (3–10 kW), typical values are Vmax DC = 1000 V, MPPT range = 150–800 V, Isc max = 15 A per MPPT. For the HT series three-phase hybrid (8–25 kW), Vmax DC = 1000 V, MPPT range = 200–900 V. Always use the actual datasheet for the specific model being installed, not a generic estimate. On inverters with more than one MPPT input, the [dual MPPT vs single MPPT guide](/blog/dual-mppt-vs-single-mppt/) explains when independent string tracking per channel actually changes the sizing decision, since each MPPT channel runs its own version of this loop.

Confusing string voltage with MPPT operating voltage is a common source of sizing errors; the [string voltage vs MPPT voltage guide](/blog/inverter-voltage-string-vs-mppt-in-solar-inverters/) draws the distinction out in full before you get to the calculation steps below.

The [string sizing calculator](/string-sizing-calculator/) pre-loads Qbits inverter specifications and automates steps 2–5, but understanding the manual method is essential for troubleshooting and for verifying calculator outputs against the datasheet. [NREL's PV string sizing guide](https://www.nrel.gov/docs/fy10osti/44184.pdf){target="_blank" rel="noopener"} recommends that all string sizing calculations be documented and retained as part of the system design file, a practice that is also required by [MNRE's Rooftop Solar Scheme technical standards](https://mnre.gov.in/){target="_blank" rel="noopener"} for systems receiving government subsidy.

## Step 2: Calculate String Voc at the Lowest Expected Temperature

The panel's [open-circuit voltage](/glossary/open-circuit-voltage/) (Voc) at [standard test conditions](/glossary/stc/) (STC: 25 °C cell temperature, 1000 W/m² irradiance) is printed on the panel nameplate. But on a cold clear morning (the worst-case voltage scenario) the actual Voc is higher than STC because Voc increases as cell temperature decreases.

The formula:

**Voc(Tmin) = Voc(STC) × (1 + Tc_Voc × ΔT)**

Where:
- **Voc(STC)** = nameplate open-circuit voltage at STC (V)
- **Tc_Voc** = [temperature coefficient](/glossary/temperature-coefficient/) of Voc (typical: −0.25% to −0.35%/°C, expressed as a negative value)
- **ΔT** = (Tmin − 25 °C), which is negative for any temperature below 25 °C and positive for temperatures above 25 °C

The formula calculates the Voc increase when cell temperature drops below 25 °C. For a cold morning in Delhi (minimum ambient −2 °C, cell temperature approximately −2 °C on an unsoiled panel before sunrise):

ΔT = −2 − 25 = −27 °C

Voc(Tmin) = 49 V × (1 + (−0.003/°C) × (−27 °C)) = 49 × 1.081 = **52.97 V**

String Voc = 52.97 V × 20 panels = **1,059 V**

This exceeds a 1000 V Vmax DC inverter, confirming that 20-panel strings are too long for Delhi winter conditions.

### India-Specific Temperature Reference Values

| Location | Minimum ambient (°C) | Estimated cell Tmin (°C) | Voc multiplier (Tc = −0.30%/°C) |
| --- | --- | --- | --- |
| Delhi / NCR | −2 | −2 | 1.081 |
| Mumbai / coastal | 10 | 10 | 1.045 |
| Chennai | 18 | 18 | 1.021 |
| Bengaluru | 10 | 10 | 1.045 |
| Jaipur / Rajasthan | −2 | −2 | 1.081 |
| Shimla / hill stations | −15 | −15 | 1.120 |
| Ladakh | −25 | −25 | 1.150 |

For most Indian plains installations, the cold-temperature multiplier is 1.04–1.08, meaning the Voc correction is modest compared to European installations (where multipliers of 1.10–1.15 are common). This is the source of the assertion that strings can run slightly longer in India, but the 1.25 safety factor still applies on top of the temperature correction.

## Step 3: Apply the 1.25 Safety Factor and Compare to Vmax DC

The safety check:

**String Voc(Tmin) × 1.25 < Inverter Vmax DC**

This safety factor, drawn from IS/IEC 60364-7-712 (Electrical Installations for Photovoltaic Systems) and aligned with [IEC 62109-1](https://www.iec.ch/){target="_blank" rel="noopener"} (Safety for Power Converters in PV Systems), accounts for measurement uncertainty in the temperature data, panel-to-panel Voc spread within a batch, and grid transient overvoltages.

Continuing the Delhi example with 20-panel strings:

String Voc(−2 °C) = 52.97 V × 20 = 1,059 V
1,059 V × 1.25 = **1,324 V**: fails a 1000 V inverter

Try 18-panel strings:

String Voc(−2 °C) = 52.97 V × 18 = 953 V
953 V × 1.25 = **1,191 V**: still fails

Try 15-panel strings:

String Voc(−2 °C) = 52.97 V × 15 = 795 V
795 V × 1.25 = **994 V**: passes (just under 1000 V)

So the maximum string length for this panel model at this Delhi location with a 1000 V inverter is **15 panels**.

> **1000 V DC.** The maximum DC input voltage of most commercial solar inverters in India for systems up to 100 kW. Utility-scale systems use 1500 V DC to reduce string cable losses, but 1000 V remains the standard for commercial rooftop. *Source - [IEC 62109-2, Safety for PV Power Systems](https://www.iec.ch/){target="_blank" rel="noopener"}, 2011.*

## Step 4: Verify the String Meets MPPT Vmin at Maximum Temperature

The minimum string check ensures the string produces enough voltage for the inverter to operate its MPPT algorithm even on the hottest summer day, when Voc (and Vmpp) are lowest.

**String Vmpp(Tmax) > Inverter MPPT Vmin**

Vmpp at maximum temperature:

Vmpp(Tmax) = Vmpp(STC) × (1 + Tc_Vmp × ΔT)

With Tc_Vmp ≈ −0.35%/°C (typical for monocrystalline PERC), Tmax cell = 75 °C in Indian summer:

ΔT = 75 − 25 = +50 °C

Vmpp(Tmax) = 40 V × (1 + (−0.0035) × 50) = 40 × 0.825 = **33 V**

For a 15-panel string: String Vmpp(75 °C) = 33 V × 15 = **495 V**

This comfortably exceeds the Vmin MPPT of 150–200 V for most Qbits inverter models, confirming 15 panels per string works at both temperature extremes.

The [inverter MPPT guide](/blog/inverter-mppt/) explains how the MPPT algorithm searches for the peak power point, a wider MPPT voltage window gives the inverter more tolerance for string voltage variation throughout the day. [IEA's solar PV technology guide](https://www.iea.org/reports/solar-pv){target="_blank" rel="noopener"} notes that MPPT range is one of the most important inverter specifications for high-temperature climates, where the operating Vmpp can be 25–30% below STC values on summer afternoons. [IRENA's rooftop solar installation best practices](https://www.irena.org/publications){target="_blank" rel="noopener"} cite MPPT range mismatch as a top-five cause of below-forecast energy yield in tropical solar markets.

## Step 5: Calculate Isc for Fuse Selection

For systems with a single string per MPPT input, no [string fuse](/glossary/fuse/) is required in the string circuit, the [DC cable](/glossary/dc-cable/) is sized for 1.25 × Isc, and the inverter's input protection covers the MPPT. For two or more parallel strings sharing an MPPT input, each string must have an individual overcurrent protection device, typically terminated at a combiner box or the DCDB ahead of the inverter's DC input.

### The Fuse Sizing Formula

**Fuse rating = 1.25 × Isc × 1.25**

The first 1.25 factor: the fuse must carry 100% of the string short-circuit current continuously (IEC 60364-7-712 requires the circuit be rated for 1.25 × Isc for continuous operation).

The second 1.25 factor: an additional safety margin above the continuous current capacity ensures the fuse does not nuisance-blow during current surges from high irradiance events (albedo reflection, edge-of-cloud effect) that can momentarily push Isc above STC values.

For a panel with Isc(STC) = 14.5 A:

Fuse rating = 1.25 × 14.5 × 1.25 = **22.7 A**

Rounding up to the nearest standard fuse rating: **25 A gPV fuse** (type gPV is the IEC standard for DC photovoltaic fuses, rated for DC arc interruption unlike standard AC fuses).

### The 5-Step String Sizing Loop

This named framework summarises the complete string sizing method for any Qbits inverter installation:

1. **Read**: Record Vmax DC, MPPT Vmin, MPPT Vmax, and Isc max from the inverter datasheet.
2. **Calculate Voc(Tmin)**: Apply temperature coefficient formula using site-minimum temperature.
3. **Safety check**: Confirm string Voc(Tmin) × 1.25 < Vmax DC. Reduce string length if not.
4. **MPPT floor check**: Confirm string Vmpp(Tmax) > MPPT Vmin. Increase string length if not.
5. **Fuse size**: For ≥2 parallel strings, calculate gPV fuse = 1.25 × Isc × 1.25. Select next standard size up.

Running this loop for each MPPT channel on the inverter (before wiring begins) eliminates the two most common installation errors: over-voltage damage from over-long strings and nuisance tripping from under-sized fuses.

## Overcurrent Protection: gPV Fuses vs MCBs for DC Applications

Not all circuit breakers are safe for DC photovoltaic applications. This is a common and dangerous mistake in Indian rooftop installations.

Standard AC miniature circuit breakers (MCBs) are designed to interrupt AC current, which crosses zero twice per cycle (100 times per second at 50 Hz). DC current does not cross zero (it is continuous) so a DC arc does not extinguish on its own. An AC MCB rated at 10 A cannot safely interrupt a 10 A DC fault current; the arc sustains and can cause fire.

**For solar string circuits, use only:**

- **gPV DC fuses**: Rated for DC arc interruption; IEC 60269-6 specification. Available from Eaton, Littelfuse, Mersen (ex-Ferraz).
- **DC-rated MCBs or DIN rail fuses**: Specifically rated for solar PV DC applications with an explicit DC voltage rating (e.g., 600 VDC or 1000 VDC).

| Protection device | DC arc interruption | PV DC voltage rating | India availability |
| --- | --- | --- | --- |
| Standard AC MCB | ✗ | None | Widespread (incorrect use) |
| gPV DC fuse | ✓ | Up to 1000 VDC | Available through electrical wholesalers |
| DC-rated MCB | ✓ | Verify on label | Available from Schneider, ABB |
| Standard AC fuse | ✗ | None | Widespread (incorrect use) |

[CEA's Regulation for Safety, Supply, Etc.](https://cea.nic.in/){target="_blank" rel="noopener"} and [MNRE's RRAS (Rooftop Solar Scheme Technical Standards)](https://mnre.gov.in/){target="_blank" rel="noopener"} both require DC-rated overcurrent protection devices in PV string circuits. Using standard AC devices is a code violation that can void insurance claims in the event of a fire.

## Common String Sizing Errors: What EPC Teams Get Wrong

- **Using panel Vmpp instead of Voc for maximum voltage check**: The safety check must use Voc, not Vmpp, because the panels are at open-circuit voltage whenever the inverter is not pulling current (startup, shutdown, MPPT search). Using Vmpp understates the worst-case string voltage.
- **Ignoring the temperature coefficient sign**: Tc_Voc is negative (Voc decreases with increasing temperature). The formula uses (1 + Tc × ΔT): at cold temperatures, ΔT is negative, making (Tc × ΔT) positive, so Voc increases. Applying the wrong sign gives a calculated Voc below STC, which understates the cold-weather risk.
- **Mixing panel models in a string**: Connecting two different panel models (different Vmpp) in series causes MPPT inefficiency; the string operates at the MPPT voltage of the weaker panel, wasting capacity from the stronger panels. Never mix panel models within a string.
- **Forgetting parallel string fuse sizing**: Single-string systems need no string fuse; two or more parallel strings each need a gPV fuse. Installing no fuse on a two-string system leaves the circuit unprotected against reverse fault current.

The [DC oversizing guide](/blog/dc-oversizing-in-solar/) covers the related topic of how many watts of panels can be connected to each kW of inverter, the DC:AC ratio calculation that complements string sizing.

## Where Qbits Fits

Qbits on-grid and hybrid inverters are specified with clear, complete DC input parameters on the datasheet (Vmax DC, MPPT range, Isc max per MPPT) in a format that directly plugs into the 5-Step String Sizing Loop. The 12-year full replacement warranty covers inverter damage from manufacturing defects, but over-voltage damage from incorrectly sized strings is a design error, not a manufacturing defect.

Getting string sizing right before installation protects both the inverter investment and the warranty. The [string sizing calculator](/string-sizing-calculator/) reduces the manual calculation to 60 seconds.

- **[String Sizing Calculator](/string-sizing-calculator/)**: Enter panel and inverter specs; get min/max string length and fuse rating instantly.
- **[On-Grid Inverters](/on-grid-inverter/)**: TLS and TLD series datasheet with full DC input specifications.
- **[Hybrid Inverters](/hybrid-inverter/)**: HS and HT series with MPPT specifications for string sizing.
- **[DC Oversizing in Solar](/blog/dc-oversizing-in-solar/)**: Related guide on DC:AC ratio and how it interacts with string sizing decisions.
- **[Inverter MPPT Guide](/blog/inverter-mppt/)**: How MPPT algorithm interacts with string voltage during low-irradiance conditions.

For large-scale EPC projects where string sizing needs to be documented for DISCOM or bancability review, [talk to a Qbits engineer](/contact-us/), the applications team can provide string sizing calculations in a structured format suitable for project design reports, the kind of documentation that pairs with electrical and CEIG drawings when a project moves into detailed engineering.
