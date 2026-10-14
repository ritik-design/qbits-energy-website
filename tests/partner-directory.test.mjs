import test from 'node:test';
import assert from 'node:assert/strict';
import {
  slugify,
  findByNameOrSlug,
  parseDirectoryQuery,
  buildDirectoryQuery,
  escapeHtml,
  safeHttpUrl,
  safeTelHref,
  safeWhatsAppHref,
  safePhotoSrc,
} from '../src/lib/partner-directory.js';

const states = [
  { id: 10, name: 'Delhi' },
  { id: 15, name: 'Jammu and Kashmir' },
  { id: 30, name: 'Tamil Nadu' },
];

test('slugify normalises names', () => {
  assert.equal(slugify('Tamil Nadu'), 'tamil-nadu');
  assert.equal(slugify('Jammu & Kashmir'), 'jammu-and-kashmir');
  assert.equal(slugify('  Uttar_Pradesh '), 'uttar-pradesh');
  assert.equal(slugify(null), '');
});

test('findByNameOrSlug matches name or slug, case-insensitively; unknown is null', () => {
  assert.equal(findByNameOrSlug(states, 'tamil-nadu').id, 30);
  assert.equal(findByNameOrSlug(states, 'Tamil Nadu').id, 30);
  assert.equal(findByNameOrSlug(states, 'TAMIL%20NADU'.replace('%20', ' ')).id, 30);
  assert.equal(findByNameOrSlug(states, 'jammu & kashmir').id, 15);
  assert.equal(findByNameOrSlug(states, 'Atlantis'), null);
  assert.equal(findByNameOrSlug(states, ''), null);
  assert.equal(findByNameOrSlug(undefined, 'delhi'), null);
});

test('parseDirectoryQuery reads state and city', () => {
  assert.deepEqual(parseDirectoryQuery('?state=tamil-nadu&city=Chennai'), { state: 'tamil-nadu', city: 'Chennai' });
  assert.deepEqual(parseDirectoryQuery('?state=Tamil%20Nadu'), { state: 'Tamil Nadu', city: '' });
  assert.deepEqual(parseDirectoryQuery(''), { state: '', city: '' });
});

test('buildDirectoryQuery needs a state; round-trips through the matcher', () => {
  assert.equal(buildDirectoryQuery('Tamil Nadu', ''), '?state=tamil-nadu');
  assert.equal(buildDirectoryQuery('Tamil Nadu', 'Chennai'), '?state=tamil-nadu&city=chennai');
  assert.equal(buildDirectoryQuery('', 'Chennai'), '');
  const q = parseDirectoryQuery(buildDirectoryQuery('Jammu and Kashmir', ''));
  assert.equal(findByNameOrSlug(states, q.state).id, 15);
});

test('escapeHtml neutralises markup', () => {
  assert.equal(escapeHtml('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
  assert.equal(escapeHtml(`a&b'c`), 'a&amp;b&#39;c');
  assert.equal(escapeHtml(undefined), '');
});

test('safeHttpUrl allows only http(s)', () => {
  assert.equal(safeHttpUrl('https://example.com/a'), 'https://example.com/a');
  assert.equal(safeHttpUrl('http://example.com/'), 'http://example.com/');
  assert.equal(safeHttpUrl('javascript:alert(1)'), '');
  assert.equal(safeHttpUrl('data:text/html,<script>1</script>'), '');
  assert.equal(safeHttpUrl('//evil.com'), '');
  assert.equal(safeHttpUrl('not a url'), '');
});

test('safeTelHref and safeWhatsAppHref keep digits only', () => {
  assert.equal(safeTelHref('+91 99791-92935'), 'tel:+919979192935');
  assert.equal(safeTelHref('9979192935'), 'tel:9979192935');
  assert.equal(safeTelHref('javascript:alert(1)'), '');
  assert.equal(safeTelHref('123'), '');
  assert.equal(safeWhatsAppHref('919979192935'), 'https://wa.me/919979192935');
  assert.equal(safeWhatsAppHref('9199"><script>'), '');
  assert.equal(safeWhatsAppHref(''), '');
});

test('safePhotoSrc prefixes CDN, rejects non-http absolute URLs', () => {
  const cdn = 'https://cdn.example/storage/';
  assert.equal(safePhotoSrc('a/b.jpg', cdn), 'https://cdn.example/storage/a/b.jpg');
  assert.equal(safePhotoSrc(null, cdn), '/default-user.webp');
  assert.equal(safePhotoSrc('javascript:alert(1)', cdn), '/default-user.webp');
  assert.equal(safePhotoSrc('https://img.example/x.png', cdn), 'https://img.example/x.png');
});
