import { platformNavItemsData } from "../pages/product/_navItems";

export interface NavDropdownItem {
  href: string;
  label: string;
  description?: string;
  prefetch?: boolean;
  badge?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const productItemOrder: Array<{ href: string; label: string }> = [
  { href: "/product/agents", label: "Agents" },
  { href: "/product/apps", label: "Apps" },
  { href: "/product/automations", label: "Automations" },
  { href: "/product/apis", label: "API explorer" },
  { href: "/product/connections", label: "Connectors" },
  { href: "/product/data", label: "Data tables" },
];

const productItemsByHref = new Map(
  platformNavItemsData
    .flatMap((group) => group.items)
    .map((item) => [item.link, item]),
);

export const productDropdownItems: NavDropdownItem[] = productItemOrder
  .map(({ href, label }) => {
    const item = productItemsByHref.get(href);
    if (!item) return null;
    return {
      href: item.link,
      label,
      description: item.pageDescription,
      prefetch: true,
      badge: item.tag?.label,
      disabled: item.disabled,
    };
  })
  .filter((item): item is NavDropdownItem => Boolean(item));

export const resourcesDropdownItems: NavDropdownItem[] = [
  {
    href: "https://docs.budibase.com",
    label: "Docs",
    description: "Technical documentation.",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "/workflows",
    label: "Agent workflows",
    description: "Proven AI workflow playbooks.",
    prefetch: true,
  },
  {
    href: "/blog/category/all",
    label: "Blog",
    description: "Product updates, customer stories, and guides.",
    prefetch: true,
  },
  {
    href: "/changelog",
    label: "Changelog",
    description: "What shipped and what changed.",
    prefetch: true,
  },
  {
    href: "/enterprise",
    label: "Enterprise",
    description: "Enterprise features and customer stories.",
    prefetch: true,
  },
  {
    href: "/partners",
    label: "Partners",
    description: "Explore Budibase partner programs.",
    prefetch: true,
  },
];
