// Shared request hardening for the lead endpoints (/api/lead, /api/datasheet-bundle).
//
// Pure functions only (no Worker bindings) so they can be unit-tested with node.
// Not covered here, by design: rate limiting (needs a KV / Rate Limiting binding
// decision) and CAPTCHA (needs a site key supplied by the business).

const ALLOWED_ORIGINS = new Set(['https://qbitsenergy.com', 'https://www.qbitsenergy.com']);
// Local dev only. The host check is exact, so lookalike hostnames never match.
const LOCAL_ORIGIN = /^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d{1,5})?$/;

/** Maximum accepted request body, in characters. The largest real form is ~6 KB. */
export const MAX_BODY_CHARS = 32_000;
const MAX_KEYS = 80;

/**
 * Origin must be the production site or a local dev origin. A missing Origin falls back
 * to the Referer; a request with neither header is refused (browsers always send Origin
 * on a cross-origin or same-origin POST).
 */
export function isAllowedOrigin(headers: Headers): boolean {
  const origin = headers.get('origin');
  let candidate: string | null = origin;
  if (!origin) {
    const referer = headers.get('referer');
    if (!referer) return false;
    try {
      candidate = new URL(referer).origin;
    } catch {
      return false;
    }
  }
  if (!candidate) return false;
  return ALLOWED_ORIGINS.has(candidate) || LOCAL_ORIGIN.test(candidate);
}

export function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export type BodyResult = { ok: true; body: Record<string, unknown> } | { ok: false; status: number; message: string };

/** Read and parse a bounded JSON object body. Never throws. */
export async function readJsonObject(request: Request): Promise<BodyResult> {
  let text: string;
  try {
    text = await request.text();
  } catch {
    return { ok: false, status: 400, message: 'Invalid request' };
  }
  if (text.length > MAX_BODY_CHARS) return { ok: false, status: 413, message: 'Request too large' };
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, status: 400, message: 'Invalid JSON' };
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return { ok: false, status: 400, message: 'Invalid request body' };
  }
  return { ok: true, body: parsed as Record<string, unknown> };
}

/** Honeypot inputs are never filled by people; any truthy value (of any type) counts. */
export function honeypotTripped(body: Record<string, unknown>, keys: string[]): boolean {
  return keys.some((key) => Boolean(body[key]));
}

// Fields that are descriptive text from query-string prefill: truncate, never reject.
const TRUNCATE_FIELDS: Record<string, number> = {
  model: 80,
  quantity: 80,
  requiredDate: 80,
  sourcePage: 200,
  page: 200,
  submittedAt: 40,
};

export type SanitizeResult = { ok: true; data: Record<string, string> } | { ok: false; message: string };

// Control characters other than tab, LF and CR (kept in multi-line fields).
const CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
const ANY_CONTROL_CHARS = /[\u0000-\u001f\u007f]/g;
const MULTILINE_FIELDS: ReadonlySet<string> = new Set(['message', 'registeredAddress', 'previousExperience']);

/**
 * Keep only allow-listed keys. Every kept value must be a string (anything else is a
 * 400, not a thrown TypeError later), is stripped of control characters, trimmed and
 * length-capped (over-length is a 400, except the truncate-only prefill fields).
 */
export function sanitizeFields(
  body: Record<string, unknown>,
  allowedKeys: ReadonlySet<string>,
  capFor: (key: string) => number,
): SanitizeResult {
  const keys = Object.keys(body);
  if (keys.length > MAX_KEYS) return { ok: false, message: 'Too many fields' };
  const data: Record<string, string> = {};
  for (const key of keys) {
    if (!allowedKeys.has(key)) continue;
    const value = body[key];
    if (value === undefined || value === null) continue;
    if (typeof value !== 'string') return { ok: false, message: `Field "${key}" must be text` };
    // Single-line fields lose newlines too (they end up in subjects and table cells).
    let text = MULTILINE_FIELDS.has(key)
      ? value.replace(CONTROL_CHARS, '').trim()
      : value.replace(ANY_CONTROL_CHARS, ' ').trim();
    const truncateAt = TRUNCATE_FIELDS[key];
    if (truncateAt !== undefined) {
      text = text.slice(0, truncateAt);
    } else if (text.length > capFor(key)) {
      return { ok: false, message: `Field "${key}" is too long` };
    }
    data[key] = text;
  }
  return { ok: true, data };
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE_RE = /^[+0-9 ()\-.]{7,30}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

export function isValidPhone(value: string): boolean {
  return PHONE_RE.test(value) && value.replace(/\D/g, '').length >= 7;
}

const SUBMISSION_ID_RE = /^[A-Za-z0-9-]{8,64}$/;

/** Client-generated idempotency key. Anything malformed is treated as absent. */
export function cleanSubmissionId(value: string | undefined): string {
  return value && SUBMISSION_ID_RE.test(value) ? value : '';
}

/**
 * Remembers recently stored submission ids inside ONE Worker isolate (no storage).
 * Best effort only: another isolate will not see the id, so Odoo can still hold a
 * rare duplicate. The id is also written into the Odoo description so staff can spot it.
 */
export function createRecentIds(max = 500, ttlMs = 15 * 60_000) {
  const seen = new Map<string, number>();
  const prune = (now: number) => {
    for (const [id, at] of seen) {
      if (now - at > ttlMs) seen.delete(id);
      else break; // Map keeps insertion order, so the rest are newer.
    }
    while (seen.size > max) {
      const oldest = seen.keys().next().value;
      if (oldest === undefined) break;
      seen.delete(oldest);
    }
  };
  return {
    has(id: string, now = Date.now()): boolean {
      if (!id) return false;
      prune(now);
      return seen.has(id);
    },
    add(id: string, now = Date.now()): void {
      if (!id) return;
      seen.delete(id);
      seen.set(id, now);
      prune(now);
    },
  };
}
