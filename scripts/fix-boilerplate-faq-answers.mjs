// The factual audit replaced 15 FAQ answers with an internal disclaimer ("The retained
// documents do not support a universal Qbits specification...") including on questions that
// never needed first-party product evidence, such as "What is THD in an inverter?". Those
// answers ship inside FAQPage schema, so search engines and LLMs ingest the disclaimer as the
// answer.
//
// This replaces each one with a correct, generic answer scoped to category behaviour. No
// Qbits price, term, certificate or performance result is asserted anywhere, and any question
// that genuinely depends on model specifics keeps an explicit "confirm for your exact model"
// instruction.
import { readFileSync, writeFileSync } from 'fs';

const A = (s) => s.replace(/\s+/g, ' ').trim();

const PATCHES = {
  'best-solar-inverter-under-50000': A(`Think in terms of capacity class rather than a single model, because Qbits sells through
    dealers on a quote basis and publishes no price. As a category, single-phase on-grid string
    inverters in the smaller capacity classes are the ones that usually fall inside a budget like
    this, while three-phase and hybrid units sit higher because they carry more power electronics
    and, in the hybrid case, battery charging hardware. Ask for a dated itemised quote naming the
    exact model, and check what the figure includes before comparing it with another.`),

  'east-west-roof-solar-design': A(`Usually yes, and the reason is electrical rather than commercial. East and west strings
    reach their peak at different times of day and sit at different operating voltages for most
    of it. A single MPPT input has to settle on one operating point for whatever is wired into
    it, so the weaker orientation drags the stronger one away from its maximum power point.
    Two independent MPPT inputs let each orientation track separately. Confirm the MPPT count
    and the voltage window for the exact model you are quoted, because both vary by unit.`),

  'exide-vs-amaron-solar-battery-india': A(`Only if that inverter supports the battery chemistry and can be set to the right charge
    profile, so this is a compatibility question to settle per model rather than per brand. A
    VRLA bank needs correct absorption and float voltages, a suitable charge current limit and
    ideally temperature compensation. Many hybrid inverters are configured for lithium by
    default and offer a selectable lead-acid profile, and some support lithium only. Check the
    supported battery types and the charge parameters in the installation manual for the exact
    model, and have the installer record the settings at commissioning.`),

  'how-to-read-solar-monitoring-app-india': A(`Expect the two numbers to differ, because they measure different things. The app reports
    what the inverter produced on the AC side. The bill reports what crossed the utility meter,
    which is import and export after your own consumption has taken its share. So generation
    will normally exceed export by however much you consumed while the sun was up. To reconcile
    them, line up the exact billing dates, take app generation for that window, subtract
    self-consumption, and compare the remainder with the exported units on the bill. A
    persistent gap that survives that arithmetic is worth raising with your installer.`),

  'monsoon-solar-prep': A(`A grid-connected system is designed to keep running through ordinary monsoon weather, and
    it disconnects itself automatically when the grid goes down. The judgement call is a severe
    electrical storm. The conservative practice is to isolate the AC and DC sides using the
    procedure in your inverter manual, since surge protection reduces risk rather than
    eliminating it. Two safety rules matter more than generation. Never work on a wet roof, and
    never open an inverter enclosure. If you suspect water ingress or you smell burning, isolate
    the system if you can do so safely and call your installer instead of restarting it.`),

  'off-grid-battery-bank-sizing-india': A(`An off-grid system needs a standalone inverter, or a hybrid inverter that supports
    off-grid operation, rather than a grid-tied unit. Size it on the largest simultaneous load
    you expect and add headroom for motor starting surges, which can be several times running
    current, then match its DC input to your battery bank voltage. Note that Qbits sells on-grid
    and hybrid string inverters, not off-grid-only units and not batteries, so an off-grid build
    means sourcing the battery bank and its protection separately and confirming that every part
    is rated to work together.`),

  'on-grid-vs-hybrid-vs-off-grid-decision-guide': A(`Many hybrid inverters will run battery-ready, exporting like a grid-tied unit until a
    battery is added later, but this is a model-specific behaviour rather than a guarantee, so
    confirm it in the installation manual for the exact unit before you buy on that basis. What
    does follow in every case is that a hybrid with no battery gives you no backup. The backup
    function comes from stored energy, so without a battery an outage leaves you with no supply
    just as an on-grid system would.`),

  'qbits-not-on-amazon-founder-pov': A(`Treat a marketplace listing as unverified rather than automatically unauthorised. Qbits
    sells through dealers and service partners rather than direct marketplace retail, and no
    public list of authorised online sellers is published, so a listing cannot be confirmed or
    ruled out from the page itself. The practical step is to confirm the seller with Qbits before
    you pay, and to make sure the invoice names the seller and the exact model, because warranty
    claims later depend on who sold you the unit.`),

  'solar-inverter-for-water-pump': A(`Size on starting behaviour rather than the nameplate rating. A 5 HP motor is roughly
    3.7 kW of mechanical output, and its electrical input is higher again once motor efficiency
    is accounted for. Started direct on line it can draw several times its running current for a
    short period, so you either add a soft starter or variable frequency drive to limit that
    surge, or you specify enough headroom to ride through it. Note also that on a grid-connected
    setup the solar system offsets consumption at the meter rather than driving the pump
    directly, so the pump's own supply and protection still have to be rated for the motor.`),

  'solar-inverter-ki-life-hindi': A(`IP66 ka matlab hai enclosure dust-tight hai aur powerful water jets se protected hai. Yeh
    India mein maayne rakhta hai kyunki inverter zyadatar bahar wall par mount hota hai, jahan
    monsoon ki barish aur dhool dono milti hain. Dhool andar jaane se heat nikalna mushkil hota
    hai aur paani andar jaane se corrosion aur electrical fault ho sakta hai, aur yeh dono aksar
    warranty exclusions mein aate hain. IP rating per model hoti hai, is liye apne exact model ki
    current datasheet se confirm karein, aur mounting position aisi chunein jahan direct barish
    aur reflected heat kam ho.`),

  'solar-inverter-underperforming-india': A(`Rarely in the sense people hope for. Firmware governs control and protection behaviour, not
    the conversion efficiency of the hardware, so an update is not a performance upgrade. What it
    can do is recover generation you were losing to a fault, for example by correcting an MPPT
    tracking bug or reducing nuisance tripping on a weak grid, and that can look like an output
    improvement. Have updates done by authorised service personnel and recorded, because
    unauthorised firmware or protection-setting changes are a standard warranty exclusion.`),

  'solar-vs-diesel-generator-india': {
    'Can a solar inverter run in parallel with a diesel generator?': A(`Not by simply wiring them together. A grid-tied inverter expects a stable reference it can
      export into, and a diesel generator is a small isolated source that can be pushed into
      reverse power or into running below its minimum loading, both of which damage the set. A
      working arrangement needs a controller that limits solar output to the load so nothing
      feeds back into the generator, plus reverse-power protection and a minimum-loading floor for
      the set. Treat this as a designed installation and confirm that the exact inverter model
      supports generator or export-limited operation.`),
    'How do I handle Total Harmonic Distortion (THD) when replacing a DG with solar?': A(`Measure it rather than assume it. Grid-tied inverters are required to keep their own
      current distortion within the limits of the standard they are certified against, so the
      inverter is usually not the source of a THD problem. Distortion at a site more often comes
      from nonlinear loads such as drives and rectifiers, and a weak or generator-backed supply
      makes the resulting voltage distortion worse because the source impedance is higher. Take
      measurements at the point of common coupling before and after the change, ask for the
      current THD figure on the datasheet for the exact model, and treat filtering as a design
      decision based on the measurement.`),
  },

  'thd-solar-inverter': A(`Total harmonic distortion is a measure of how much of a waveform sits outside its
    fundamental frequency, expressed as the ratio of the harmonic content to the fundamental in
    percent. A perfect sine wave has none. For a grid-tied solar inverter the figure that matters
    is current THD at the output, because that is what the inverter injects into the network, and
    grid-connection standards cap it. Distinguish it from voltage THD, which is a property of the
    supply at your site and is influenced by other loads and by source impedance rather than by
    your inverter alone.`),

  'transformerless-vs-transformer-inverter': A(`Not by itself, but it is a system-design question worth checking rather than assuming. A
    transformerless inverter has no galvanic isolation between the array and the grid, which
    matters for module types whose manufacturer requires a specific array grounding arrangement,
    and it is relevant to potential induced degradation on some designs. Most current
    crystalline silicon modules are specified for use with transformerless inverters. The
    decisive document is the module manufacturer's installation manual, which states the system
    voltage and grounding requirements that keep its warranty intact, so read that alongside the
    inverter manual before finalising the pairing.`),
};

const OLD = [
  /a: "?The retained documents do not support a universal Qbits specification, feature, compatibility, certificate, commercial term, or performance result for this question\.\s*Use the current documents for the exact model and sale\."?/g,
  /a: "?The retained evidence does not establish this as a universal Qbits offering or service\.\s*Confirm the responsible entity, exact equipment, project scope, current documents, price, warranty, and service terms in writing\."?/g,
];

let done = 0;
for (const [slug, val] of Object.entries(PATCHES)) {
  const path = `src/content/blog/${slug}.md`;
  let t = readFileSync(path, 'utf8');
  const lines = t.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const isBoiler = OLD.some((re) => {
      re.lastIndex = 0;
      return re.test(lines[i]);
    });
    if (!isBoiler) continue;

    // Find the question this answer belongs to, so multi-FAQ files map correctly.
    let q = '';
    for (let j = i - 1; j >= 0 && j > i - 4; j--) {
      const m = lines[j].match(/q:\s*"?(.+?)"?\s*$/);
      if (m) {
        q = m[1];
        break;
      }
    }
    const answer = typeof val === 'string' ? val : val[q];
    if (!answer) {
      console.log(`  ${slug}: no mapping for question "${q.slice(0, 60)}"`);
      continue;
    }
    const indent = lines[i].match(/^\s*/)[0];
    lines[i] = `${indent}a: "${answer.replace(/"/g, "'")}"`;
    done++;
  }
  writeFileSync(path, lines.join('\n'));
}
console.log(`replaced ${done} boilerplate FAQ answers`);
