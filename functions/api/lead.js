/**
 * Qbits Energy — Lead capture proxy
 *
 * Receives same-origin form POSTs from the website, validates them, and
 * forwards them to the configured Google Apps Script web app.
 *
 * Why this exists:
 * - Keeps the GAS endpoint and token out of client-side code.
 * - Avoids cross-origin/CORS issues when posting to script.google.com.
 * - Gives users clear error messages instead of silent mailto fallbacks.
 *
 * Env vars (set in Cloudflare Pages dashboard or Wrangler secrets):
 *   GAS_ENDPOINT  - full Apps Script /exec URL
 *   FORM_TOKEN    - shared token expected by Code.gs (optional but recommended)
 */

const FALLBACK_EMAIL = 'service@qbitsenergy.com';

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

function buildMailto(data) {
  const source = data.source || 'website-form';
  const subject = encodeURIComponent(
    `${source.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} from qbitsenergy.com`
  );
  const body = encodeURIComponent(
    Object.entries(data)
      .filter(([k]) => k !== 'source' && k !== 'page' && k !== 'submittedAt' && k !== 'userAgent')
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
  );
  return `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const GAS_ENDPOINT = env.GAS_ENDPOINT || '';
  const FORM_TOKEN = env.FORM_TOKEN || '';

  // Parse the form body.
  let fd;
  try {
    fd = await request.formData();
  } catch (err) {
    return json({ ok: false, error: 'Invalid form data' }, 400);
  }

  const data = {};
  for (const [key, value] of formDataEntries(fd)) {
    if (key === 'website') continue; // honeypot — never forward
    if (typeof value === 'string') {
      data[key] = value.trim();
    }
  }

  // Basic validation.
  if (!data.name || data.name.length < 2) {
    return json({ ok: false, error: 'Please enter your full name.' }, 400);
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }
  if (!data.email && !data.phone) {
    return json({ ok: false, error: 'Please provide an email address or phone number.' }, 400);
  }

  // Append token on the server side so it is never exposed to the client.
  if (FORM_TOKEN) data.token = FORM_TOKEN;

  // If no endpoint is configured, hand back a mailto URL the client can offer.
  if (!GAS_ENDPOINT) {
    return json(
      {
        ok: false,
        error: 'Lead service is not configured. Please email us instead.',
        mailto: buildMailto(data),
      },
      503
    );
  }

  try {
    const body = new URLSearchParams(data).toString();
    const gasRes = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    const gasData = await gasRes.json().catch(() => ({ ok: gasRes.ok }));

    if (!gasData.ok) {
      return json(
        {
          ok: false,
          error: gasData.error || 'Submission failed on the backend.',
          mailto: buildMailto(data),
        },
        502
      );
    }

    return json({ ok: true });
  } catch (err) {
    console.error('Lead proxy error:', err);
    return json(
      {
        ok: false,
        error: 'Network issue - please email us instead.',
        mailto: buildMailto(data),
      },
      502
    );
  }
}

// Handle preflight for local dev / any cross-origin use.
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Helper: iterate FormData entries without requiring array polyfills in Workers.
function* formDataEntries(fd) {
  for (const entry of fd.entries()) {
    yield entry;
  }
}
