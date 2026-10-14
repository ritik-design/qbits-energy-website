// Remark plugin: ```chart fenced blocks (YAML or JSON) are rendered at BUILD time to a
// responsive inline <svg> inside <figure class="chart"> with a caption and a visually
// hidden data table. No client-side JS. Unsourced or malformed charts throw a build error.
//
//   ```chart
//   type: bar            # bar | hbar | line | stacked-bar
//   title: Chart title
//   unit: "₹/W"
//   source: "Who published the numbers, and when"   # REQUIRED
//   sourceUrl: https://example.com                  # optional
//   note: "Optional caveat"                         # optional
//   data:
//     - { label: "3 kW", value: 9.5 }
//     - { label: "5 kW", min: 8, max: 11 }          # range bar (bar / hbar)
//   # multi-series (line, bar = grouped, stacked-bar):
//   # series:
//   #   - { name: "A", data: [{ label: "2024", value: 1 }] }
//   ```
import yaml from 'js-yaml';
import { walk, fileLabel, esc } from './util.mjs';

export const CHART_TYPES = ['bar', 'hbar', 'line', 'stacked-bar'];
const TYPE_NAME = { bar: 'Bar chart', hbar: 'Horizontal bar chart', line: 'Line chart', 'stacked-bar': 'Stacked bar chart' };
const PALETTE = ['#047857', '#c2410c', '#1d4ed8', '#6d28d9', '#334155'];
const DASH = ['', '7 4', '2 4', '10 4 2 4', '4 2'];
const INK = '#0f172a';
const MUTED = '#475569';
const GRID = '#e2e8f0';
const AXIS = '#94a3b8';
const FS = 13;
// Two layouts are rendered and swapped with CSS (no JS): a wide one for tablet/desktop and a
// narrow one so text stays readable on phones instead of shrinking with the viewBox.
const W_LG = 520;
const W_SM = 340;
const MAX_POINTS = 30;

export class ChartError extends Error {
  constructor(where, message) {
    super(`[chart] ${where}: ${message}`);
    this.name = 'ChartError';
  }
}

// ---------------------------------------------------------------- number formatting

function groupInteger(intStr, indian) {
  if (!indian || intStr.length <= 3) return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const last3 = intStr.slice(-3);
  const rest = intStr.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return `${rest},${last3}`;
}

/** 150000 -> "1,50,000" (indian) or "150,000"; max `decimals` places, trailing zeros trimmed. */
export function formatNumber(value, { indian = false, decimals = 2 } = {}) {
  const fixed = Number(value.toFixed(decimals)).toString();
  if (/e/i.test(fixed)) return fixed;
  const [int, frac] = fixed.split('.');
  return groupInteger(int, indian) + (frac ? `.${frac}` : '');
}

export function applyUnit(numStr, unit) {
  if (!unit) return numStr;
  if (unit.startsWith('₹')) return `₹${numStr}${unit.slice(1)}`;
  if (unit === '%' || unit.startsWith('/')) return `${numStr}${unit}`;
  return `${numStr} ${unit}`;
}

// ---------------------------------------------------------------- parse + validate

export function parseChartSource(src, where) {
  const trimmed = src.trim();
  if (!trimmed) throw new ChartError(where, 'chart block is empty');
  let raw;
  try {
    raw = trimmed.startsWith('{') ? JSON.parse(trimmed) : yaml.load(trimmed, { schema: yaml.JSON_SCHEMA });
  } catch (err) {
    throw new ChartError(where, `could not parse chart block as YAML or JSON (${String(err.message).split('\n')[0]})`);
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new ChartError(where, 'chart block must be a YAML/JSON mapping with type, title, source and data');
  }
  return raw;
}

function requireString(raw, key, where, { optional = false } = {}) {
  const v = raw[key];
  if (v === undefined || v === null || (typeof v === 'string' && !v.trim())) {
    if (optional) return '';
    throw new ChartError(where, `"${key}" is required${key === 'source' ? ' (every chart must cite where its numbers come from)' : ''}`);
  }
  if (typeof v !== 'string' && typeof v !== 'number') throw new ChartError(where, `"${key}" must be text`);
  return String(v).trim();
}

function toPoints(list, where, ctx) {
  if (!Array.isArray(list) || list.length === 0) throw new ChartError(where, `${ctx} has no data points`);
  if (list.length > MAX_POINTS) throw new ChartError(where, `${ctx} has ${list.length} points (max ${MAX_POINTS})`);
  return list.map((p, i) => {
    const at = `${ctx} point ${i + 1}`;
    if (!p || typeof p !== 'object') throw new ChartError(where, `${at} must be a mapping like { label: "...", value: 1 }`);
    if (p.label === undefined || p.label === null || !String(p.label).trim()) throw new ChartError(where, `${at} is missing "label"`);
    const label = String(p.label).trim();
    const isNum = (n) => typeof n === 'number' && Number.isFinite(n);
    const hasRange = p.min !== undefined || p.max !== undefined;
    if (hasRange) {
      if (!isNum(p.min) || !isNum(p.max)) throw new ChartError(where, `${at} ("${label}") has a non-numeric min/max`);
      if (p.min < 0 || p.max < 0) throw new ChartError(where, `${at} ("${label}") is negative; negative values are not supported`);
      if (p.min > p.max) throw new ChartError(where, `${at} ("${label}") has min greater than max`);
      return { label, min: p.min, max: p.max, range: true };
    }
    if (!isNum(p.value)) throw new ChartError(where, `${at} ("${label}") has a missing or non-numeric "value"`);
    if (p.value < 0) throw new ChartError(where, `${at} ("${label}") is negative; negative values are not supported`);
    return { label, value: p.value, range: false };
  });
}

export function normalizeChart(raw, where) {
  const type = String(raw.type ?? 'bar').trim().toLowerCase();
  if (!CHART_TYPES.includes(type)) throw new ChartError(where, `unknown type "${raw.type}" (use ${CHART_TYPES.join(', ')})`);
  const title = requireString(raw, 'title', where);
  const source = requireString(raw, 'source', where);
  const unit = requireString(raw, 'unit', where, { optional: true });
  const note = requireString(raw, 'note', where, { optional: true });
  const sourceUrl = requireString(raw, 'sourceUrl', where, { optional: true });
  if (sourceUrl && !/^https?:\/\/\S+$/i.test(sourceUrl)) throw new ChartError(where, `"sourceUrl" must be an http(s) URL`);
  const dec = raw.decimals;
  const decimals = dec === undefined ? 2 : Number.isInteger(dec) && dec >= 0 && dec <= 4 ? dec : null;
  if (decimals === null) throw new ChartError(where, `"decimals" must be an integer from 0 to 4`);

  if (raw.data !== undefined && raw.series !== undefined) throw new ChartError(where, 'use either "data" or "series", not both');
  let series;
  if (raw.series !== undefined) {
    if (!Array.isArray(raw.series) || raw.series.length === 0) throw new ChartError(where, '"series" is empty');
    if (raw.series.length > PALETTE.length) throw new ChartError(where, `at most ${PALETTE.length} series are supported`);
    series = raw.series.map((s, i) => {
      if (!s || typeof s !== 'object') throw new ChartError(where, `series ${i + 1} must be a mapping with name and data`);
      const name = String(s.name ?? '').trim();
      if (!name) throw new ChartError(where, `series ${i + 1} is missing "name"`);
      return { name, points: toPoints(s.data, where, `series "${name}"`) };
    });
    const ref = series[0].points.map((p) => p.label);
    for (const s of series) {
      if (s.points.length !== ref.length || s.points.some((p, i) => p.label !== ref[i])) {
        throw new ChartError(where, `series "${s.name}" must use the same labels, in the same order, as the first series`);
      }
    }
  } else {
    series = [{ name: '', points: toPoints(raw.data, where, 'chart data') }];
  }
  const hasRange = series.some((s) => s.points.some((p) => p.range));
  if (hasRange && (series.length > 1 || type === 'line' || type === 'stacked-bar')) {
    throw new ChartError(where, 'min/max range bars are only supported for a single series of type bar or hbar');
  }
  if (type === 'stacked-bar' && series.length < 2) throw new ChartError(where, 'stacked-bar needs "series" with at least two series');

  return {
    type, title, source, sourceUrl, note, unit, decimals,
    indian: unit.includes('₹'),
    labels: series[0].points.map((p) => p.label),
    series,
    hasRange,
  };
}

// ---------------------------------------------------------------- geometry helpers

const r1 = (n) => Math.round(n * 10) / 10;
const textWidth = (s, fs = FS) => String(s).length * fs * 0.58;

function niceScale(max, targetTicks = 5) {
  if (!(max > 0)) max = 1;
  const raw = max / (targetTicks - 1);
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  const niceMax = Math.ceil(max / step - 1e-9) * step;
  const ticks = [];
  for (let v = 0; v <= niceMax + step / 2; v += step) ticks.push(Math.round(v * 1e9) / 1e9);
  return { max: ticks[ticks.length - 1], ticks };
}

function wrapLabel(label, maxChars, maxLines = 3) {
  // Keep a number glued to its unit ("34 V") so it never wraps between the two.
  const words = String(label).replace(/(\d) (?=[A-Za-z%₹°])/g, '$1\u00a0').split(/ +/);
  const lines = [];
  let cur = '';
  for (let w of words) {
    while (w.length > maxChars) {
      if (cur) { lines.push(cur); cur = ''; }
      lines.push(w.slice(0, maxChars));
      w = w.slice(maxChars);
    }
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= maxChars) cur += ' ' + w;
    else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  const clean = lines.map((l) => l.replace(/\u00a0/g, ' '));
  if (clean.length > maxLines) {
    const kept = clean.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/.{0,1}$/, '…');
    return kept;
  }
  return clean;
}

function makeFormatter(model) {
  const num = (v) => formatNumber(v, { indian: model.indian, decimals: model.decimals });
  const withUnit = (v) => applyUnit(num(v), model.unit);
  const point = (p) => (p.range ? applyUnit(`${num(p.min)}–${num(p.max)}`, model.unit) : withUnit(p.value));
  return { num, withUnit, point };
}

const maxOf = (model) => {
  if (model.type === 'stacked-bar') {
    return Math.max(...model.labels.map((_, i) => model.series.reduce((a, s) => a + s.points[i].value, 0)));
  }
  return Math.max(...model.series.flatMap((s) => s.points.map((p) => (p.range ? p.max : p.value))));
};
const hi = (p) => (p.range ? p.max : p.value);
const lo = (p) => (p.range ? p.min : 0);

const text = (x, y, s, { anchor = 'middle', fill = MUTED, weight = 400, size = FS } = {}) =>
  `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(s)}</text>`;

function multilineText(x, y, lines, opts = {}) {
  const lh = (opts.size || FS) + 3;
  const tspans = lines.map((l, i) => `<tspan x="${r1(x)}" dy="${i === 0 ? 0 : lh}">${esc(l)}</tspan>`).join('');
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${opts.anchor || 'middle'}" font-size="${opts.size || FS}" fill="${opts.fill || MUTED}">${tspans}</text>`;
}

// ---------------------------------------------------------------- vertical charts (bar, stacked-bar, line)

function renderVertical(model, fmt, W) {
  const { type, labels, series } = model;
  const n = labels.length;
  const k = series.length;
  const scale = niceScale(maxOf(model));
  const tickLabels = scale.ticks.map((t) => fmt.num(t));
  const left = Math.max(...tickLabels.map((t) => textWidth(t))) + 14;
  const right = 14;
  const top = model.unit ? 30 : 18;
  const plotH = 220;
  const band = (W - left - right) / n;
  const maxChars = Math.max(4, Math.floor((band - 4) / (FS * 0.56)));
  const wrapped = labels.map((l) => wrapLabel(l, maxChars));
  const lines = Math.max(...wrapped.map((w) => w.length));
  const bottom = 14 + lines * (FS + 3) + 6;
  const H = top + plotH + bottom;
  const y = (v) => top + plotH - (v / scale.max) * plotH;
  const out = [];

  if (model.unit) out.push(text(4, 14, model.unit, { anchor: 'start', size: 12 }));
  scale.ticks.forEach((t, i) => {
    out.push(`<line x1="${r1(left)}" y1="${r1(y(t))}" x2="${W - right}" y2="${r1(y(t))}" stroke="${t === 0 ? AXIS : GRID}" stroke-width="1"/>`);
    out.push(text(left - 6, y(t) + 4, tickLabels[i], { anchor: 'end', size: 12 }));
  });
  wrapped.forEach((l, i) => out.push(multilineText(left + band * (i + 0.5), top + plotH + 18, l)));

  if (type === 'bar' || type === 'stacked-bar') {
    const groupW = Math.min(band * 0.7, type === 'bar' ? 56 * k : 64);
    const barW = type === 'bar' ? groupW / k : groupW;
    labels.forEach((_, i) => {
      const cx = left + band * (i + 0.5);
      if (type === 'bar') {
        series.forEach((s, si) => {
          const p = s.points[i];
          const x = cx - groupW / 2 + si * barW;
          const yTop = y(hi(p));
          const yBot = y(lo(p));
          out.push(`<rect x="${r1(x + 1)}" y="${r1(yTop)}" width="${r1(barW - 2)}" height="${r1(Math.max(yBot - yTop, 1))}" rx="3" fill="${PALETTE[si]}"/>`);
          const label = fmt.point(p);
          if (k === 1 || textWidth(label, 11) <= barW + band * 0.15) {
            out.push(text(x + barW / 2, yTop - 6, label, { fill: INK, weight: 600, size: k > 1 ? 11 : FS }));
          }
        });
      } else {
        let acc = 0;
        series.forEach((s, si) => {
          const v = s.points[i].value;
          const yTop = y(acc + v);
          const yBot = y(acc);
          out.push(`<rect x="${r1(cx - barW / 2)}" y="${r1(yTop)}" width="${r1(barW)}" height="${r1(Math.max(yBot - yTop, 1))}" fill="${PALETTE[si]}" stroke="#fff" stroke-width="1"/>`);
          const label = fmt.num(v);
          if (yBot - yTop >= 18 && textWidth(label, 11) <= barW - 4) {
            out.push(text(cx, (yTop + yBot) / 2 + 4, label, { fill: '#ffffff', weight: 600, size: 11 }));
          }
          acc += v;
        });
        out.push(text(cx, y(acc) - 6, fmt.withUnit(acc), { fill: INK, weight: 700 }));
      }
    });
  } else {
    // line
    series.forEach((s, si) => {
      const pts = s.points.map((p, i) => [left + band * (i + 0.5), y(p.value)]);
      const d = pts.map(([px, py], i) => `${i ? 'L' : 'M'}${r1(px)} ${r1(py)}`).join(' ');
      const dash = DASH[si] ? ` stroke-dasharray="${DASH[si]}"` : '';
      out.push(`<path d="${d}" fill="none" stroke="${PALETTE[si]}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"${dash}/>`);
      pts.forEach(([px, py], i) => {
        out.push(`<circle cx="${r1(px)}" cy="${r1(py)}" r="4" fill="${PALETTE[si]}" stroke="#fff" stroke-width="1.5"/>`);
        const showLabel = k === 1 || (k <= 3 && i === pts.length - 1);
        if (showLabel) {
          const above = si % 2 === 0;
          out.push(text(px, above ? py - 10 : py + 20, fmt.withUnit(s.points[i].value), { fill: INK, weight: 600, size: k > 1 ? 12 : FS, anchor: k > 1 && i === pts.length - 1 ? 'end' : 'middle' }));
        }
      });
    });
  }
  return { H, body: out.join('') };
}

// ---------------------------------------------------------------- horizontal bars

function renderHorizontal(model, fmt, W) {
  const { labels, series } = model;
  const n = labels.length;
  const k = series.length;
  const scale = niceScale(maxOf(model));
  const narrow = W < 400;
  const wrapped = labels.map((l) => wrapLabel(l, narrow ? 16 : 24));
  const labelW = Math.min(narrow ? 120 : 190, Math.max(...wrapped.flat().map((l) => textWidth(l)))) + 10;
  const left = labelW + 8;
  const valueRoom = Math.max(...series.flatMap((s) => s.points.map((p) => textWidth(fmt.point(p))))) + 10;
  const right = Math.min(valueRoom, narrow ? 96 : 130) + 6;
  const plotW = W - left - right;
  const top = model.unit ? 26 : 8;
  const lineH = FS + 3;
  const bandH = Math.max(34, Math.max(...wrapped.map((w) => w.length)) * lineH + 10, k * 18 + 12);
  const barH = Math.min(24, (bandH - 10) / k);
  const x = (v) => left + (v / scale.max) * plotW;
  const plotH = n * bandH;
  const H = top + plotH + 26;
  const out = [];

  if (model.unit) out.push(text(left, 14, model.unit, { anchor: 'start', size: 12 }));
  scale.ticks.forEach((t) => {
    out.push(`<line x1="${r1(x(t))}" y1="${top}" x2="${r1(x(t))}" y2="${top + plotH}" stroke="${t === 0 ? AXIS : GRID}" stroke-width="1"/>`);
    out.push(text(x(t), top + plotH + 17, fmt.num(t), { size: 12 }));
  });
  labels.forEach((_, i) => {
    const cy = top + bandH * (i + 0.5);
    const lines = wrapped[i];
    out.push(multilineText(left - 8, cy - ((lines.length - 1) * lineH) / 2 + 4, lines, { anchor: 'end' }));
    series.forEach((s, si) => {
      const p = s.points[i];
      const y0 = cy - (k * barH) / 2 + si * barH;
      const x0 = x(lo(p));
      const x1 = x(hi(p));
      out.push(`<rect x="${r1(x0)}" y="${r1(y0 + 1)}" width="${r1(Math.max(x1 - x0, 1))}" height="${r1(barH - 2)}" rx="3" fill="${PALETTE[si]}"/>`);
      out.push(text(x1 + 6, y0 + barH / 2 + 4.5, fmt.point(p), { anchor: 'start', fill: INK, weight: 600, size: k > 1 ? 11 : FS }));
    });
  });
  return { H, body: out.join('') };
}

// ---------------------------------------------------------------- assemble

function hiddenTable(model, fmt) {
  const multi = model.series.length > 1;
  const head = model.hasRange
    ? ['Item', 'Minimum', 'Maximum']
    : ['Item', ...(multi ? model.series.map((s) => s.name) : [model.unit ? `Value (${model.unit})` : 'Value'])];
  const rows = model.labels.map((label, i) => {
    const cells = model.hasRange
      ? [fmt.withUnit(model.series[0].points[i].min), fmt.withUnit(model.series[0].points[i].max)]
      : model.series.map((s) => fmt.withUnit(s.points[i].value));
    return `<tr><th scope="row">${esc(label)}</th>${cells.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`;
  });
  return (
    `<table class="chart__table"><caption>${esc(model.title)}</caption>` +
    `<thead><tr>${head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` +
    `<tbody>${rows.join('')}</tbody></table>`
  );
}

export function renderChartHtml(model) {
  const fmt = makeFormatter(model);
  const draw = model.type === 'hbar' ? renderHorizontal : renderVertical;
  const multi = model.series.length > 1;
  const aria = `${TYPE_NAME[model.type]}: ${model.title}. ${model.labels.length} ${model.hasRange ? 'ranges' : 'data points'}${multi ? ` in ${model.series.length} series` : ''}; the same data is listed in the table that follows.`;
  const legend = multi
    ? `<ul class="chart__legend">${model.series
        .map((s, i) => `<li><span class="chart__swatch" style="background:${PALETTE[i]}" aria-hidden="true"></span>${esc(s.name)}</li>`)
        .join('')}</ul>`
    : '';
  const svgFor = (size, width) => {
    const { H, body } = draw(model, fmt, width);
    return `<svg class="chart__svg chart__svg--${size}" viewBox="0 0 ${width} ${r1(H)}" role="img" aria-label="${esc(aria)}" focusable="false">${body}</svg>`;
  };
  const sourceText = `Source: ${esc(model.source)}`;
  const source = model.sourceUrl
    ? `<span class="chart__source"><a href="${esc(model.sourceUrl)}" target="_blank" rel="noopener noreferrer">${sourceText}</a></span>`
    : `<span class="chart__source">${sourceText}</span>`;
  const note = model.note ? `<span class="chart__note">${esc(model.note)}</span>` : '';
  return (
    `<figure class="chart chart--${model.type}">` +
    legend +
    svgFor('lg', W_LG) +
    svgFor('sm', W_SM) +
    hiddenTable(model, fmt) +
    `<figcaption class="chart__caption"><strong class="chart__title">${esc(model.title)}</strong>${source}${note}</figcaption>` +
    `</figure>`
  );
}

/** Convenience for tests and tooling: raw block text -> HTML. */
export function renderChartBlock(src, where = 'chart') {
  return renderChartHtml(normalizeChart(parseChartSource(src, where), where));
}

export default function remarkCharts() {
  return (tree, file) => {
    walk(tree, (node, parent, index) => {
      if (node.type !== 'code' || String(node.lang || '').toLowerCase() !== 'chart' || !parent) return;
      const line = node.position?.start?.line;
      const where = `${fileLabel(file)}${line ? ` (line ${line})` : ''}`;
      const html = renderChartBlock(node.value, where);
      parent.children[index] = { type: 'html', value: html };
    });
  };
}
