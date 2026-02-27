import { getCollection, type CollectionEntry } from "astro:content";

export type ResourceCategory =
  | "all"
  | "blog"
  | "product"
  | "customers"
  | "useCases";
export type BlogCategoryRoute = "all" | "blog" | "product" | "customers";
export const BLOG_TOPIC_ITEMS = [
  { id: "blog", label: "All blog" },
  { id: "ai-agents", label: "AI agents" },
  { id: "alternatives", label: "Alternatives" },
  { id: "app-building", label: "App building" },
  { id: "automation", label: "Automation" },
  { id: "data", label: "Data" },
  { id: "inside-it", label: "Inside IT" },
  { id: "tutorials", label: "Tutorials" },
  { id: "workflow-guides", label: "Workflow guides" },
] as const;
export type BlogTopicRoute = (typeof BLOG_TOPIC_ITEMS)[number]["id"];
type BlogFeedCategory = Exclude<ResourceCategory, "all">;
type BlogFeedCategoryLabel = "Blog" | "Product" | "Customers" | "Use cases";
const BLOG_TOPIC_SET = new Set<string>(BLOG_TOPIC_ITEMS.map((topic) => topic.id));

export const BLOG_CATEGORY_ITEMS: Array<{
  id: BlogCategoryRoute;
  label: string;
}> = [
  { id: "all", label: "All" },
  { id: "blog", label: "Blog" },
  { id: "product", label: "Product" },
  { id: "customers", label: "Customers" },
];

export interface BlogFeedItem {
  kind: "blog" | "caseStudy" | "changelog" | "workflow";
  slug: string;
  href: string;
  title: string;
  description: string;
  category: BlogFeedCategory;
  categoryLabel: BlogFeedCategoryLabel;
  publishDate?: Date;
  transitionKey: string;
  sortOrder?: number;
  authorName?: string;
  authorAvatar?: string;
  previewImage?: string;
  blogTopic?: BlogTopicRoute;
  blogPost?: CollectionEntry<"blog">;
  caseStudy?: CollectionEntry<"caseStudies">;
}

function toTransitionKey(slug: string): string {
  return slug.replaceAll("/", "-");
}

function getCategoryLabel(category: BlogFeedCategory): BlogFeedCategoryLabel {
  if (category === "blog") return "Blog";
  if (category === "product") return "Product";
  if (category === "customers") return "Customers";
  return "Use cases";
}

function getFirstDefined<T>(...values: Array<T | undefined>): T | undefined {
  for (const value of values) {
    if (value !== undefined) return value;
  }
  return undefined;
}

function toBlogTopic(value: string | undefined): BlogTopicRoute | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (!BLOG_TOPIC_SET.has(normalized)) return undefined;
  return normalized as BlogTopicRoute;
}

function getBlogTopicForPost(post: CollectionEntry<"blog">): BlogTopicRoute | undefined {
  const frontmatterTopic = toBlogTopic(post.data.category);
  if (frontmatterTopic && frontmatterTopic !== "blog") return frontmatterTopic;

  const [primarySegment] = post.id.split("/");
  const pathTopic = toBlogTopic(primarySegment);
  if (pathTopic && pathTopic !== "blog") return pathTopic;

  return undefined;
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
  const workflows = await getCollection("workflows");
  const changelogItems = await getCollection("changelog", ({ data }) => {
    return !data.draft;
  });

  const blogItems: BlogFeedItem[] = blogPosts
    .filter((post) => !post.id.startsWith("updates/"))
    .map((post) => {
      const category: BlogFeedCategory = "blog";
      const primaryAuthor = post.data.authors?.[0];
      const authorName = getFirstDefined(primaryAuthor?.name, post.data.author);
      const authorAvatar = getFirstDefined(
        primaryAuthor?.profilePic,
        post.data.profilePic,
      );
      return {
        kind: "blog",
        slug: post.id,
        href: `/blog/${post.id}/`,
        title: post.data.title,
        description: post.data.description,
        category,
        categoryLabel: getCategoryLabel(category),
        publishDate: post.data.publishDate,
        transitionKey: toTransitionKey(post.id),
        authorName,
        authorAvatar,
        previewImage: getFirstDefined(
          post.data.coverImage,
          post.data.socialImage,
        ),
        blogTopic: getBlogTopicForPost(post),
        blogPost: post,
      };
    });

  const productBlogItems: BlogFeedItem[] = blogPosts
    .filter((post) => post.id.startsWith("updates/"))
    .map((post) => {
      const category: BlogFeedCategory = "product";
      const primaryAuthor = post.data.authors?.[0];
      const authorName = getFirstDefined(primaryAuthor?.name, post.data.author);
      const authorAvatar = getFirstDefined(
        primaryAuthor?.profilePic,
        post.data.profilePic,
      );
      return {
        kind: "blog",
        slug: post.id,
        href: `/blog/${post.id}/`,
        title: post.data.title,
        description: post.data.description,
        category,
        categoryLabel: getCategoryLabel(category),
        publishDate: post.data.publishDate,
        transitionKey: toTransitionKey(post.id),
        authorName,
        authorAvatar,
        previewImage: getFirstDefined(
          post.data.coverImage,
          post.data.socialImage,
        ),
        blogPost: post,
      };
    });

  const caseStudyItems: BlogFeedItem[] = caseStudies.map((entry) => ({
    kind: "caseStudy",
    slug: entry.id,
    href: `/blog/${entry.id}/`,
    title: entry.data.title,
    description: entry.data.quote,
    category: "customers",
    categoryLabel: "Customers",
    transitionKey: toTransitionKey(entry.id),
    sortOrder: entry.data.order,
    authorName: entry.data.author?.name,
    previewImage: entry.data.coverImage,
    caseStudy: entry,
  }));

  const workflowItems: BlogFeedItem[] = workflows.map((entry) => ({
    kind: "workflow",
    slug: entry.id,
    href: `/agent-space/${entry.data.slug ?? entry.id}/`,
    title: entry.data.title,
    description: entry.data.outcome,
    category: "useCases",
    categoryLabel: "Use cases",
    publishDate: entry.data.lastUpdated,
    transitionKey: toTransitionKey(`workflow-${entry.data.slug ?? entry.id}`),
  }));

  const changelogFeedItems: BlogFeedItem[] = changelogItems.map((entry) => ({
    kind: "changelog",
    slug: entry.id,
    href: `/changelog/${entry.id}/`,
    title: entry.data.title,
    description:
      entry.data.description ?? `Version ${entry.data.version} release notes.`,
    category: "product",
    categoryLabel: "Product",
    publishDate: entry.data.date,
    transitionKey: toTransitionKey(`changelog-${entry.id}`),
    previewImage: entry.data.image?.src,
  }));

  return sortFeed([
    ...blogItems,
    ...productBlogItems,
    ...caseStudyItems,
    ...workflowItems,
    ...changelogFeedItems,
  ]);
}

export function filterBlogFeed(
  items: BlogFeedItem[],
  category: ResourceCategory,
): BlogFeedItem[] {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

export function filterBlogFeedByTopic(
  items: BlogFeedItem[],
  topic: BlogTopicRoute,
): BlogFeedItem[] {
  const blogItems = items.filter((item) => item.category === "blog");
  if (topic === "blog") return blogItems;
  return blogItems.filter((item) => item.blogTopic === topic);
}

export function isValidBlogCategory(value: string): value is BlogCategoryRoute {
  return BLOG_CATEGORY_ITEMS.some((category) => category.id === value);
}

export function isValidBlogTopic(value: string): value is BlogTopicRoute {
  return BLOG_TOPIC_SET.has(value);
}
