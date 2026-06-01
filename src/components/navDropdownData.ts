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
  { href: "/product/agents/", label: "Agents" },
  { href: "/product/apps/", label: "Apps" },
  { href: "/product/automations/", label: "Automations" },
  { href: "/product/apis/", label: "API explorer" },
  { href: "/product/connections/", label: "Connectors" },
  { href: "/product/data/", label: "Data tables" },
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
    href: "https://docs.budibase.com",
    label: "Docs",
    description: "Technical documentation.",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "/customers/",
    label: "Customers",
    description: "Customer stories and case studies.",
    prefetch: true,
  },
   {
    href: "/blog/",
    label: "Blog",
    description: "All resources in one timeline.",
    prefetch: true,
  },
  

 
  {
    href: "/changelog/",
    label: "Changelog",
    description: "Changelog updates and release notes.",
    prefetch: true,
  },
];

export const solutionsDropdownItems: NavDropdownItem[] = [
  {
    href: "/ops/",
    label: "Use Cases",
    description: "Common use cases.",
    prefetch: true,
  },
  {
    href: "/enterprise/",
    label: "Enterprise",
    description: "How Budibase meets the needs of large organizations.",
    prefetch: true,
  },
    {
    href: "/security/",
    label: "Security",
    description: "How Budibase meets the needs of security-first organizations.",
    prefetch: true,
  },

      {
    href: "/it/",
    label: "IT Teams",
    description: "How Budibase meets the needs of IT teams.",
    prefetch: true,
  },
];