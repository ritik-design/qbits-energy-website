/** Choose related reading by topic; a recent date alone is not a relationship. */
interface RelatedEntry {
  id: string;
  data: { title: string; category: string; keywords?: string[]; relatedSlugs?: string[] };
}
const stopwords = new Set(['solar', 'inverter', 'inverters', 'india', 'indian', 'guide', 'best', 'what', 'how', 'the', 'for', 'and', 'with', 'from', 'that', 'this', '2026', '2025', 'energy']);
function terms(values: string[]): Set<string> {
  return new Set(values.join(' ').toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((word) => word.length > 2 && !stopwords.has(word) && !/^\d+$/.test(word)));
}
export function selectRelatedPosts<T extends RelatedEntry>(source: RelatedEntry, posts: T[], limit = 3): T[] {
  const ownTerms = terms([source.id, source.data.title, ...(source.data.keywords || [])]);
  const frequency = new Map<string, number>();
  const candidates = posts.filter((post) => post.id !== source.id);
  const indexed = candidates.map((post) => {
    const words = terms([post.id, post.data.title, ...(post.data.keywords || [])]);
    for (const word of words) frequency.set(word, (frequency.get(word) || 0) + 1);
    return { post, words };
  });
  const curated = (source.data.relatedSlugs || [])
    .map((id) => candidates.find((post) => post.id === id))
    .filter((post): post is T => !!post);
  const ranked = indexed.map(({ post, words }) => {
    let score = 0;
    let matches = 0;
    for (const word of ownTerms) if (words.has(word)) {
      matches++;
      score += Math.log(1 + candidates.length / (frequency.get(word) || 1));
    }
    if (post.data.category === source.data.category) score += 1;
    return { post, score, matches };
  }).filter(({ matches }) => matches > 0)
    .sort((a, b) => b.score - a.score || a.post.id.localeCompare(b.post.id));
  return [...curated, ...ranked.map(({ post }) => post)]
    .filter((post, index, list) => list.findIndex((p) => p.id === post.id) === index).slice(0, limit);
}
