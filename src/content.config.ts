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
    readTime: z.string(),
    image: z.string().default('/images/hybrid.jpg'),
    author: z.string().default('Qbits Editorial'),
    keywords: z.array(z.string()).optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog };
