import { getCollection, type CollectionEntry } from "astro:content";

export type BlogCategory = "all" | "product" | "customers" | "news";

export const BLOG_CATEGORY_ITEMS: Array<{ id: BlogCategory; label: string }> = [
  { id: "all", label: "All posts" },
  { id: "product", label: "Product" },
  { id: "customers", label: "Customers" },
  { id: "news", label: "News" },
];

export interface BlogFeedItem {
  kind: "blog" | "caseStudy";
  slug: string;
  title: string;
  description: string;
  category: Exclude<BlogCategory, "all">;
  categoryLabel: "Product" | "Customers" | "News";
  publishDate?: Date;
  transitionKey: string;
  sortOrder?: number;
  blogPost?: CollectionEntry<"blog">;
  caseStudy?: CollectionEntry<"caseStudies">;
}

function toTransitionKey(slug: string): string {
  return slug.replaceAll("/", "-");
}

function classifyBlogPost(id: string): "product" | "news" {
  return id.startsWith("updates/") ? "news" : "product";
}

function getCategoryLabel(category: Exclude<BlogCategory, "all">):
  | "Product"
  | "Customers"
  | "News" {
  if (category === "customers") return "Customers";
  if (category === "news") return "News";
  return "Product";
}

function sortFeed(items: BlogFeedItem[]): BlogFeedItem[] {
  return [...items].sort((a, b) => {
    if (a.publishDate && b.publishDate) {
      return b.publishDate.getTime() - a.publishDate.getTime();
    }

    if (a.publishDate && !b.publishDate) return -1;
    if (!a.publishDate && b.publishDate) return 1;

    if (
      a.kind === "caseStudy" &&
      b.kind === "caseStudy" &&
      typeof a.sortOrder === "number" &&
      typeof b.sortOrder === "number"
    ) {
      return a.sortOrder - b.sortOrder;
    }

    return a.title.localeCompare(b.title);
  });
}

export async function getBlogFeedItems(): Promise<BlogFeedItem[]> {
  const blogPosts = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate !== undefined;
  });

  const caseStudies = await getCollection("caseStudies");

  const blogItems: BlogFeedItem[] = blogPosts.map((post) => {
    const category = classifyBlogPost(post.id);
    return {
      kind: "blog",
      slug: post.id,
      title: post.data.title,
      description: post.data.description,
      category,
      categoryLabel: getCategoryLabel(category),
      publishDate: post.data.publishDate,
      transitionKey: toTransitionKey(post.id),
      blogPost: post,
    };
  });

  const caseStudyItems: BlogFeedItem[] = caseStudies.map((entry) => ({
    kind: "caseStudy",
    slug: entry.id,
    title: entry.data.title,
    description: entry.data.quote,
    category: "customers",
    categoryLabel: "Customers",
    transitionKey: toTransitionKey(entry.id),
    sortOrder: entry.data.order,
    caseStudy: entry,
  }));

  return sortFeed([...blogItems, ...caseStudyItems]);
}

export function filterBlogFeed(
  items: BlogFeedItem[],
  category: BlogCategory,
): BlogFeedItem[] {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

export function isValidBlogCategory(value: string): value is BlogCategory {
  return BLOG_CATEGORY_ITEMS.some((category) => category.id === value);
}
