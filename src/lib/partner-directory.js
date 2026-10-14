// Pure helpers for the authorized-service-partners directory (deep links, escaping, URL safety).
// No DOM or network access here so they can be unit-tested with node:test.

/** "Jammu & Kashmir" / "Tamil_Nadu" / " tamil nadu " -> "jammu-and-kashmir" / "tamil-nadu". */
export function slugify(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/** Find an item ({ id, name }) whose name matches a ?state= / ?city= value (name or slug). Unknown -> null. */
export function findByNameOrSlug(items, param) {
  const want = slugify(param);
  if (!want || !Array.isArray(items)) return null;
  return items.find((i) => i && slugify(i.name) === want) || null;
}

/** Read ?state= and ?city= from a location.search string. Missing values are ''. */
export function parseDirectoryQuery(search) {
  let params;
  try {
    params = new URLSearchParams(search || '');
  } catch {
    return { state: '', city: '' };
  }
  return {
    state: (params.get('state') || '').trim().slice(0, 100),
    city: (params.get('city') || '').trim().slice(0, 100),
  };
}

/** Build the query string for the current filter ('' when no state; city only valid with a state). */
export function buildDirectoryQuery(stateName, cityName) {
  const state = slugify(stateName);
  if (!state) return '';
  const city = slugify(cityName);
  return city ? `?state=${state}&city=${city}` : `?state=${state}`;
}

/** Escape text for safe use inside HTML text or double-quoted attributes. */
export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Return the URL string only if it parses as http(s); otherwise ''. */
export function safeHttpUrl(value) {
  try {
    const u = new URL(String(value ?? '').trim());
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : '';
  } catch {
    return '';
  }
}

/** tel: link from a phone string. Keeps digits, a leading +, and nothing else; '' if too short/long. */
export function safeTelHref(value) {
  const raw = String(value ?? '').trim();
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return '';
  return `tel:${raw.startsWith('+') ? '+' : ''}${digits}`;
}

/** https://wa.me link from a WhatsApp number (digits only); '' if invalid. */
export function safeWhatsAppHref(value) {
  const digits = String(value ?? '').replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return '';
  return `https://wa.me/${digits}`;
}

/** Image URL: CDN-prefixed relative path, or an absolute http(s) URL; falls back to the default avatar. */
export function safePhotoSrc(photo, cdnBase, fallback = '/default-user.webp') {
  const p = String(photo ?? '').trim();
  if (!p) return fallback;
  if (/^[a-z][a-z0-9+.-]*:/i.test(p) || p.startsWith('//')) return safeHttpUrl(p) || fallback;
  return `${cdnBase}${p.replace(/^\/+/, '')}`;
}
