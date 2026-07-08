import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    description: z.string().optional(),
    category: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readTime: z.string(),
    image: z.string().default('/images/hybrid.webp'),
    author: z.string().default('Qbits Editorial'),
    keywords: z.array(z.string()).optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    featured: z.boolean().optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    shortDefinition: z.string(),
    keywords: z.array(z.string()).optional(),
    priority: z.enum(['P0', 'P1', 'P2']).default('P1'),
    updatedDate: z.coerce.date().optional(),
    quickFacts: z
      .object({
        industry: z.string().optional(),
        primaryUse: z.string().optional(),
        commonUsers: z.string().optional(),
        relevantStandards: z.string().optional(),
        relatedTechnologies: z.string().optional(),
      })
      .optional(),
    relatedTerms: z
      .array(z.object({ slug: z.string(), term: z.string() }))
      .optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    author: z.string().default('Qbits Editorial'),
  }),
});

export const collections = { blog, glossary };
