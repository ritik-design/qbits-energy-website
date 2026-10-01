import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { getArticleJourney, getGlossaryJourney } from '../src/data/article-journeys.ts';
import { selectRelatedPosts } from '../src/data/related-content.ts';
import { products, getRelatedProducts } from '../src/data/products.ts';
import { productImageSizes } from '../src/data/product-images.ts';

test('policy and software research stay in their own learning journeys', () => {
  assert.equal(getArticleJourney('commercial-solar-subsidy', 'Policy').primaryHref, '/blog/category/policy/');
  assert.equal(getArticleJourney('epc-design-software', 'Solar Software').primaryHref, '/blog/category/solar-software/');
  assert.equal(getArticleJourney('stringent-solar-policy', 'Guide').kind, 'learning');
});
test('partner, EPC and support enquiries retain the right role and source', () => {
  const distribution = getArticleJourney('solar-distributor-credit-territory-terms', 'Business');
  const query = new URL(distribution.primaryHref, 'https://qbitsenergy.com').searchParams;
  assert.equal(query.get('role'), 'Distributor');
  assert.equal(query.get('subject'), 'Become a Distributor');
  assert.equal(query.get('from'), '/blog/solar-distributor-credit-territory-terms/');
  assert.equal(getArticleJourney('inverter-procurement-india', 'EPC').kind, 'procurement');
  assert.equal(getArticleJourney('solar-inverter-error-codes-guide', 'Maintenance').kind, 'support');
});
test('glossary CTAs do not imply Qbits supplies central inverters or finance services', () => {
  assert.equal(getGlossaryJourney('central-inverter', 'Inverter Types').kind, 'learning');
  assert.equal(getGlossaryJourney('gst-on-solar', 'Finance').kind, 'learning');
  assert.equal(getGlossaryJourney('dc-cable', 'Installation').primaryHref, '/download-datasheets/');
});
test('related reading favours a relevant topic and preserves editorial selections', () => {
  const source = { id: 'dual-mppt', data: { title: 'Dual MPPT input current', category: 'Technical' } };
  const posts = [
    { id: 'unrelated', data: { title: 'Solar software lead generation', category: 'Technical', keywords: ['crm'] } },
    { id: 'current-limits', data: { title: 'MPPT input current limits', category: 'Technical' } },
    { id: 'string-sizing', data: { title: 'String sizing voltage checks', category: 'Guide', keywords: ['mppt'] } },
  ];
  assert.equal(selectRelatedPosts(source, posts)[0].id, 'current-limits');
  assert.ok(!selectRelatedPosts(source, posts).some((post) => post.id === 'unrelated'));
  const curated = { ...source, data: { ...source.data, relatedSlugs: ['string-sizing', 'string-sizing', 'missing'] } };
  const selected = selectRelatedPosts(curated, posts);
  assert.equal(selected[0].id, 'string-sizing');
  assert.equal(new Set(selected.map((post) => post.id)).size, selected.length);
});
test('EHV has no low-voltage fallback; product alternatives retain type and phase', () => {
  assert.deepEqual(getRelatedProducts('QB-225-320K-EHV'), []);
  for (const product of products) {
    for (const alternative of getRelatedProducts(product.id)) {
      assert.equal(alternative.category, product.category);
      assert.equal(alternative.phase, product.phase);
      assert.notEqual(alternative.id, product.id);
    }
  }
});
test('registered product image dimensions match the actual files', async () => {
  for (const image of new Set(products.map((product) => product.image))) {
    const dimensions = productImageSizes[image];
    assert.ok(dimensions, `Missing dimensions: ${image}`);
    const metadata = await sharp(fileURLToPath(new URL(`../public${image}`, import.meta.url))).metadata();
    assert.equal(dimensions.width, metadata.width, image);
    assert.equal(dimensions.height, metadata.height, image);
  }
});
