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

export const productDropdownItems: NavDropdownItem[] = [
  ...productItemOrder
    .flatMap(({ href, label }) => {
      const item = productItemsByHref.get(href);
      if (!item) return [];
      return [
        {
          href: item.link,
          label,
          description: item.pageDescription,
          prefetch: true,
          badge: item.tag?.label,
          disabled: item.disabled,
        },
      ];
    }),
];

export const resourcesDropdownItems: NavDropdownItem[] = [
  {
    href: "/blog",
    label: "Blog",
    description: "All resources in one timeline.",
    prefetch: true,
  },
  {
    href: "/changelog",
    label: "Changelog",
    description: "Changelog updates and release notes.",
    prefetch: true,
  },
  {
    href: "/customers",
    label: "Customers",
    description: "Customer stories and case studies.",
    prefetch: true,
  },
  {
    href: "https://docs.budibase.com",
    label: "Docs",
    description: "Technical documentation.",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
