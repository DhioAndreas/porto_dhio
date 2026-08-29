import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    location: z.string().optional(),
    badge: z.string().optional(),
    bullets: z.array(z.string()),
    tech: z.array(z.string()).optional().default([]),
    order: z.number().default(0),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/leadership" }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    category: z.string().default("Community"),
    bullets: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    category: z.enum(["network", "safety", "it", "other"]).default("other"),
    code: z.string().optional(),
    status: z.string().default("Verified"),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string(),
        })
      )
      .optional(),
    tags: z.array(z.string()),
    highlights: z.array(z.string()),
    metrics: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  experience,
  leadership,
  certifications,
  projects,
};
