// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const seoSchema = z.object({
  title: z.string().min(5).max(120),
  description: z.string().min(15).max(160),
  image: z
    .object({
      src: z.string().default("/og.png"),
      alt: z.string().default("Make work flow"),
    })
    .default({
      src: "/og.png",
      alt: "Make work flow",
    }),
  pageType: z.enum(["website", "article"]).default("website"),
  robots: z
    .object({
      index: z.boolean().default(true),
      follow: z.boolean().default(true),
    })
    .default({
      index: true,
      follow: true,
    }),
});

// Blog collection with complete schema
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().describe("The blog post title."),
    description: z
      .string()
      .describe(
        "Summary of this blog post. Appears on the blog index as well as in metadata displayed on social media.",
      ),
    publishDate: z.coerce
      .date()
      .describe(
        "A date string or YAML date that is compatible with JavaScript's `new Date()` constructor.",
      ),
    author: z.string().optional().describe("Author name"),
    profilePic: z.string().optional().describe("Author profile picture URL"),
    authors: z
      .array(
        z.object({
          name: z.string(),
          profilePic: z.string().optional(),
        }),
      )
      .optional()
      .describe("Multiple authors"),
    category: z.string().optional().describe("Blog post category"),
    featured: z
      .boolean()
      .default(false)
      .describe("Whether this is a featured post"),
    socialImage: z
      .string()
      .optional()
      .describe(
        "Path to the open graph image for this blog post to display in social media previews, e.g. `/src/content/blog/_images/my-post/og-image.webp`.\n\n" +
          "This should be pre-optimized as a WebP to ensure good performance.",
      ),
    coverImage: z
      .string()
      .optional()
      .describe(
        "Path to the cover image displayed at the top of the blog post and on the blog index, e.g. `/src/content/blog/_images/my-post/cover-image.webp`.\n\n" +
          "This should be pre-optimized as a WebP to ensure good performance.",
      ),
    lang: z
      .enum(["en"])
      .default("en")
      .describe("The language of this blog post (optional)"),
    draft: z.boolean().default(false),
  }),
});

// Pages collection
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    seo: seoSchema,
    pageLayout: z.string(),
    updated_date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

// Case studies collection
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string().describe("Company or organization name"),
    quote: z.string().describe("Headline quote from the case study"),
    employees: z
      .string()
      .describe(
        "Number of employees, e.g. '6,600 employees' or '1,000 - 5,000 employees'",
      ),
    industry: z
      .string()
      .describe("Industry or sector, e.g. 'Transport and logistics'"),
    coverImage: z
      .string()
      .optional()
      .describe(
        "Path to cover image, e.g. '/src/assets/images/case-studies/reworld.webp'",
      ),
    author: z
      .object({
        name: z.string(),
        role: z.string(),
      })
      .optional()
      .describe("Person who provided the testimonial"),
    featured: z
      .boolean()
      .default(false)
      .describe("Whether to feature this case study prominently"),
    order: z
      .number()
      .default(0)
      .describe("Display order (lower numbers appear first)"),
  }),
});

const assetsUsedSchema = z.object({
  tables: z.array(z.string()).optional(),
  automations: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  aiModel: z.array(z.string()).optional(),
  apps: z.array(z.string()).optional(),
});

const opsLibrary = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx", "!**/README.md"],
    base: "./src/content/ops-library",
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    sidebar: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      }),
    ),
    role: z.string(),
    outcome: z.string(),
    setupTime: z.string(),
    difficulty: z.string(),
    cta: z
      .object({
        label: z.string().optional(),
        href: z.string().optional(),
      })
      .optional(),
    promptCardStyle: z.enum(["default", "snippet"]).optional(),
    heroPrompt: z.string().optional(),
    assetsUsed: assetsUsedSchema.optional(),
    tags: z.array(z.string()),
    aiAssists: z.array(z.string()),
    humansDecide: z.array(z.string()),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        humanDecision: z.boolean().default(false),
      }),
    ),
    integrations: z.array(z.string()),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
    lastUpdated: z.coerce.date(),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/changelog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    version: z.string(),
    tags: z.array(
      z.enum([
        "Added",
        "Changed",
        "Deprecated",
        "Removed",
        "Fixed",
        "Security",
      ]),
    ),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  pages,
  caseStudies,
  opsLibrary,
  changelog,
  legal,
};
