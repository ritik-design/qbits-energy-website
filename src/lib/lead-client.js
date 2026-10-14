/*
 * Shared browser helper for every lead form (contact, quick lead, datasheet bundle, partner).
 *
 * This file is injected verbatim into each form page as an inline classic script
 * (`import src from '../lib/lead-client.js?raw'` + `<script is:inline set:html>`),
 * so it must stay a plain script: no import/export, no TypeScript. It publishes
 * `window.QbLead`. tests/lead-client.test.mjs loads the same source in a vm sandbox.
 *
 * Contract for a form:
 *   1. guard.begin() before sending (duplicate-submit guard); guard.end() in finally.
 *   2. keep ONE submission id per user intent (reuse it when retrying after a failure,
 *      drop it after success) so the server can recognise duplicates.
 *   3. QbLead.submitLead() posts /api/lead (awaited) and the form's email path in
 *      parallel and reports { success, crmOk, emailOk }. Success = either channel.
 *   4. QbLead.trackLeadOnce() fires GA4 `generate_lead` exactly once per submission id.
 */
(function (root) {
  'use strict';

  var FIRST_TOUCH_KEY = 'qb_first_touch';
  var ATTRIBUTION_KEYS = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
    'gclid', 'referrer', 'landing_page',
  ];
  var MAX_ATTR_LEN = 200;

  function clean(value) {
    if (typeof value !== 'string') return '';
    return value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, MAX_ATTR_LEN);
  }

  /**
   * Store first-touch attribution once per browser session. Never overwrites.
   * `ctx` = { search, referrer, pathname }. Referrer is reduced to origin + path
   * (query strings can carry personal data). No cookies, no PII.
   */
  function captureFirstTouch(ctx, storage) {
    try {
      if (!storage || storage.getItem(FIRST_TOUCH_KEY)) return;
      var params = new URLSearchParams(ctx.search || '');
      var record = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach(function (key) {
        var value = clean(params.get(key) || '');
        if (value) record[key] = value;
      });
      var referrer = '';
      if (ctx.referrer) {
        try {
          var ref = new URL(ctx.referrer);
          referrer = clean(ref.origin + ref.pathname);
        } catch (e) { /* ignore malformed referrer */ }
      }
      if (referrer) record.referrer = referrer;
      var landing = clean(ctx.pathname || '');
      if (landing) record.landing_page = landing;
      storage.setItem(FIRST_TOUCH_KEY, JSON.stringify(record));
    } catch (e) { /* storage blocked: attribution is best effort */ }
  }

  /** Returns only non-empty, whitelisted, string attribution values. */
  function getAttribution(storage) {
    var out = {};
    try {
      var raw = storage && storage.getItem(FIRST_TOUCH_KEY);
      if (!raw) return out;
      var parsed = JSON.parse(raw);
      ATTRIBUTION_KEYS.forEach(function (key) {
        var value = clean(parsed && parsed[key]);
        if (value) out[key] = value;
      });
    } catch (e) { /* ignore */ }
    return out;
  }

  function newSubmissionId(cryptoObj) {
    if (cryptoObj && typeof cryptoObj.randomUUID === 'function') return cryptoObj.randomUUID();
    var rand = '';
    for (var i = 0; i < 4; i++) rand += Math.floor(Math.random() * 0x100000000).toString(16).padStart(8, '0');
    return 'sub-' + Date.now().toString(36) + '-' + rand;
  }

  /** Success if EITHER channel accepted the lead; error only if both failed. */
  function decideOutcome(crmOk, emailOk) {
    var c = crmOk === true;
    var e = emailOk === true;
    return { success: c || e, crmOk: c, emailOk: e, bothFailed: !c && !e };
  }

  /** Duplicate-submit guard: begin() returns false while a submit is in flight. */
  function createGuard() {
    var busy = false;
    return {
      begin: function () {
        if (busy) return false;
        busy = true;
        return true;
      },
      end: function () { busy = false; },
      isBusy: function () { return busy; },
    };
  }

  /** Fire a GA4 event; never throws. */
  function track(gtag, name, params) {
    try {
      if (typeof gtag === 'function') gtag('event', name, params || {});
    } catch (e) { /* analytics must never break a form */ }
  }

  var firedLeadIds = {};
  /** GA4 generate_lead, once per submission id. Returns true if it fired. */
  function trackLeadOnce(gtag, submissionId, params) {
    if (!submissionId || firedLeadIds[submissionId]) return false;
    firedLeadIds[submissionId] = true;
    track(gtag, 'generate_lead', params);
    return true;
  }

  /** POST JSON to /api/lead. Resolves true only if the server stored the lead. */
  function postLead(fetchImpl, data) {
    return fetchImpl('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        return res.ok && body.success === true;
      });
    }).catch(function () { return false; });
  }

  /** FormSubmit AJAX backup path (kept exactly as before). Resolves true on success. */
  function postFormSubmit(fetchImpl, endpoint, data) {
    return fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        return body.success === 'true' || body.success === true;
      });
    }).catch(function () { return false; });
  }

  /**
   * Send the lead to the CRM and to the form's email path, await both, decide.
   * `sendEmail` is a function returning a promise of true/false (it may also reject).
   */
  function submitLead(opts) {
    var fetchImpl = opts.fetchImpl || root.fetch.bind(root);
    var crm = postLead(fetchImpl, opts.data);
    var email = Promise.resolve().then(function () { return opts.sendEmail(); })
      .then(function (ok) { return ok === true; }, function () { return false; });
    return Promise.all([crm, email]).then(function (r) { return decideOutcome(r[0], r[1]); });
  }

  /** Trimmed string fields from FormData-like entries, minus skipped keys. */
  function collectFields(entries, skipKeys) {
    var data = {};
    var skip = skipKeys || [];
    entries.forEach(function (pair) {
      var key = pair[0];
      var value = pair[1];
      if (skip.indexOf(key) !== -1 || typeof value !== 'string') return;
      data[key] = value.trim();
    });
    return data;
  }

  var api = {
    FIRST_TOUCH_KEY: FIRST_TOUCH_KEY,
    ATTRIBUTION_KEYS: ATTRIBUTION_KEYS,
    captureFirstTouch: captureFirstTouch,
    getAttribution: getAttribution,
    newSubmissionId: newSubmissionId,
    decideOutcome: decideOutcome,
    createGuard: createGuard,
    track: track,
    trackLeadOnce: trackLeadOnce,
    postLead: postLead,
    postFormSubmit: postFormSubmit,
    submitLead: submitLead,
    collectFields: collectFields,
  };
  root.QbLead = api;
})(typeof window !== 'undefined' ? window : globalThis);
