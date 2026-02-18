export interface LearnLink {
  label: string;
  href: string;
  pageTitle?: string;
  pageDescription?: string;
  description?: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
}

export const learnLinks: LearnLink[] = [
  {
    label: "Agent workflows",
    pageTitle: "Agent workflows",
    pageDescription: "Proven workflow playbooks for real-world use cases.",
    description: "Proven workflow playbooks for real-world use cases.",
    href: "/learn/workflows",
    prefetch: true,
  },
  {
    label: "Docs",
    description: "Full technical documentation.",
    href: "https://docs.budibase.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Blog",
    pageTitle: "Blog",
    pageDescription: "Product updates, ideas, and stories from the team.",
    description: "Product updates, ideas, and stories from the team.",
    href: "/learn/blog",
    prefetch: true,
  },
  {
    label: "Changelog",
    pageTitle: "Changelog",
    pageDescription: "What shipped and what changed.",
    description: "What shipped and what changed.",
    href: "/learn/changelog",
    prefetch: true,
  },
];
