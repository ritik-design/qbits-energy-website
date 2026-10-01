---
title: How to Size a Battery for a Hybrid Solar Inverter
excerpt: Size a hybrid battery from measured loads, backup hours, usable capacity and losses. Check a worked example, power limits and battery compatibility.
description: Size a hybrid battery from measured loads, backup hours, usable capacity and losses. Check a worked example, power limits and battery compatibility.
category: Buying Guide
date: 2026-06-05
updatedDate: 2026-09-23
readTime: 5 min
image: "/og/blog-battery-sizing-hybrid-solar.webp"
author: Keyur Rakholiya
keywords:
- hybrid inverter battery sizing
- battery size for hybrid solar inverter India
- how to calculate battery bank for solar
- LFP battery for hybrid inverter India
- 48V vs 96V battery system solar
faqs:
- q: Does a 5 kW inverter need a 5 kWh battery?
  a: Not automatically, and the two figures are not comparable. Inverter rating is power, a rate of supply measured in kW. Battery capacity is energy, measured in kWh. Calculate the energy you need from the load list and the runtime you want, then separately check that both the battery and the inverter can deliver the required power.
- q: What battery sizing formula should I use?
  a: Start with load energy divided by the usable fraction and the conversion efficiency. That gives nominal capacity before allowances. Then add for standby consumption, temperature effects, an ageing reserve, and any equipment specific constraint. The formula is the beginning of the calculation, not the end of it.
- q: What does usable fraction mean and why is it not 100 percent?
  a: Discharging a battery completely shortens its life, so manufacturers specify a depth of discharge below full capacity. The usable fraction is the proportion of nameplate capacity you can actually draw within the warranty terms. Using nameplate kWh in a runtime calculation overstates what you will get, often substantially.
- q: Can I expand the battery later?
  a: Only within the manufacturer's rules on pack model, age, firmware, parallel limits and commissioning. Mixing packs of different ages or states of health is commonly restricted, because the weakest pack tends to govern the behaviour of the group. Obtain those rules before buying the initial system rather than after.
- q: Will a bigger battery cover a longer outage automatically?
  a: Only if it can also recharge between outages. A battery sized for one long outage may be of little use in a run of repeated cuts if there is insufficient generation and time to recharge in between. Check the available charging window, not just the capacity.
- q: Does the battery need to run my air conditioner?
  a: Decide that explicitly, because it changes the design substantially. Air conditioners draw a large running load and a much larger starting surge, which pushes both the battery discharge current and the inverter surge requirement up. Many backup designs deliberately exclude them for that reason.
seoTitle: 'Hybrid Solar Battery Sizing: Loads, kWh & Runtime'
relatedSlugs:
- best-solar-battery-brands-india-2026
- inverter-battery-connection-diagram
- 5kw-hybrid-inverter-price-india
---

> **Quick answers**
>
> - Battery capacity is energy in kWh. Inverter rating is power in kW. Size for both, separately.
> - Start from a measured load list, never from bedroom count or a city average.
> - Nameplate capacity is not usable capacity. The usable fraction matters more than the label.
> - A battery with enough energy can still fail to start a motor.
> - Recharge time between outages is part of the design, not an afterthought.
> - Voltage window, current limits and BMS protocol decide compatibility, not the chemistry name.

**Short version.** Size a hybrid solar battery from the energy needed during the outage, then check separately whether the battery and the inverter can deliver the required power and surge. A useful starting formula is **nominal battery kWh = load energy divided by (usable fraction times conversion efficiency)**. Use measured loads and the selected equipment's stated limits.

## Why two calculations are needed, not one

Most sizing mistakes come from answering only half the question.

**Energy** determines how long the backup lasts. It is the load in watts multiplied by the hours you want it to run, and it is what the kWh figure addresses.

**Power** determines whether the backup works at all. It is the instantaneous draw when everything you have backed up is running at once, plus the brief surge when a motor starts. A battery holding plenty of energy can still be unable to deliver that rate.

A design that satisfies energy and fails power will run your lights for hours and trip the moment the refrigerator compressor starts. Both calculations have to pass.

## Step 1: List only the loads you intend to back up

Record watts, quantity and operating hours. For cycling appliances such as refrigerators, measured energy over a representative period is more useful than assuming the nameplate power runs continuously. Motors also have starting requirements that an energy total cannot capture.

| Illustrative load | Quantity | Assumed power each | Backup operation | Energy |
| --- | --- | --- | --- | --- |
| Lights | 6 | 10 W | 4 h | 240 Wh |
| Fans | 2 | 60 W | 4 h | 480 Wh |
| Router | 1 | 15 W | 4 h | 60 Wh |
| Laptop | 1 | 65 W | 4 h | 260 Wh |
| Total | | 260 W simultaneous in this example | | 1,040 Wh / 1.04 kWh |

These are illustrative inputs, not measured appliance data or a typical-home claim. Add your actual essential loads. Keep high-power or interruption-sensitive equipment explicit so the installer can assess it separately.

## Step 2: Choose backup duration from your own records

Record how long outages last at your property and which loads must run throughout. Do not treat a city-wide average or a generic “Lucknow versus Mumbai” example as evidence of your required runtime.

Separate a single long outage from repeated shorter outages with limited time to recharge. A battery that covers one outage may not be ready for the next if the charging window is insufficient.

## Step 3: Convert load energy into nominal capacity

For the load table above, assume an **80% usable fraction** and **90% battery-to-load conversion efficiency**:

**1.04 kWh ÷ (0.80 × 0.90) = 1.44 kWh nominal**, rounded to two decimal places.

That is the arithmetic result before additional allowances. It is not a recommendation for a particular battery. Standby consumption, ageing reserve, temperature, discharge-rate behaviour and the manufacturer's installation requirements can increase the capacity needed.

### Sensitivity: the same 500 W load at different runtimes

| Backup duration | Load energy | Nominal energy with the same 80% / 90% assumptions |
| --- | --- | --- |
| 2 hours | 1 kWh | 1.39 kWh |
| 4 hours | 2 kWh | 2.78 kWh |
| 8 hours | 4 kWh | 5.56 kWh |

The table changes duration only. It does not prove that a battery of the calculated energy can deliver the load's power or start a motor.

## Step 4: Check power, current and inverter limits

**kW is power; kWh is energy.** A battery may have enough energy for the planned hours but too little continuous discharge capability for the simultaneous load. Check battery/BMS output, inverter backup output, surge limits and cable/protection design separately.

For an illustrative 5,000 W load at 48 V and assumed 90% conversion efficiency, battery current is **5,000 ÷ (48 × 0.90) = 115.74 A**. Actual battery voltage changes during operation, so nominal-voltage arithmetic is not a cable or fuse specification.

The [Qbits hybrid catalogue](/datasheets/products/Qbits-Hybride-Inverter-Catalogue-1.pdf) lists 120 A maximum charge/discharge current for the QBH-5KS48P. That inverter limit does not authorise the same current through any attached battery. The configured limits must respect the battery, inverter and installation.

### Why the usable fraction is not 100 percent

The 80 percent assumption above is not arbitrary, and it is worth understanding rather than copying.

Discharging a battery fully shortens its cycle life, so manufacturers specify a depth of discharge and warrant the product on that basis. The usable fraction is the proportion of nameplate capacity you can draw while staying inside those terms. Different chemistries and products differ, and lead acid is typically far more restrictive than lithium iron phosphate.

The conversion efficiency assumption accounts for losses between the battery and the load. Energy is lost going into the battery and again coming out, and the inverter itself consumes some in converting DC to AC.

Substitute the figures from your actual product documentation for both assumptions. A quote that states runtime using nameplate capacity and no losses is overstating what you will get, and the gap is not small.

## Step 5: Match voltage, chemistry and communications

Use the inverter's specified battery range, not a generic rule tying 48 V or 96 V to a particular house size. Nominal labels do not replace the operating-voltage range across the permitted state of charge.

For lithium, confirm the exact battery model, supported protocol, firmware and commissioning settings. A CAN or RS485 connection alone does not prove compatibility. For lead-acid, confirm the charging profile and maintenance requirements for the actual flooded, AGM or gel product.

Do not add cells or rearrange series connections to make an unsupported battery fit. The [battery-connection guide](/blog/inverter-battery-connection-diagram/) explains the separate power and data paths.

## Recharge time and future expansion

Work out when the battery can recharge, how much PV remains after daytime loads, and the permitted charge rate. Seasonal weather, shading and the selected operating mode affect the available energy. There is no fixed national panel count that guarantees a daily recharge.

If expansion is planned, obtain the manufacturer's rules for pack model, age, firmware, parallel limits and commissioning. Do not assume that a new module can be added to any existing bank or that replacing the whole bank after an arbitrary age is always necessary.

## Compare cost using complete quotes

Request the battery, inverter, protection, enclosure, communications equipment, installation and warranty terms as separate items. Compare **usable energy and delivered power**, not only ₹/Ah or price per box.

The [battery comparison guide](/blog/best-solar-battery-brands-india-2026/) explains warranty and chemistry checks. The [5 kW hybrid price guide](/blog/5kw-hybrid-inverter-price-india/) provides a dated inverter example and the quote scope.

## Your handover worksheet

Keep the load list, target runtime, usable-fraction assumption, loss allowance, chosen model numbers, configured current limits and warranty documents. Ask the installer to demonstrate the agreed backup circuits and document the commissioning results.

