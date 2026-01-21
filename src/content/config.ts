import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const seoSchema = z.object({
  title: z.string().min(5).max(120),
  description: z.string().min(15).max(160),
  image: z
    .object({
      src: z.string().default("/og.png"),
      alt: z.string().default("Make work flow"),
    })
    .default({}),
  pageType: z.enum(["website", "article"]).default("website"),
  robots: z
    .object({
      index: z.boolean().default(true),
      follow: z.boolean().default(true),
    })
    .default({}),
});

export const collections = {
  blog: defineCollection({
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
  }),
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: z.object({
      seo: seoSchema,
      pageLayout: z.string(),
      updated_date: z.coerce.date(),
      image: z.string().optional(),
    }),
  }),
};
