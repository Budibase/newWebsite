export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
  tag?: {
    label: string;
    variant: "primary" | "secondary" | "cta" | "orange";
  };
}

export interface NavGroup {
  header?: string;
  items: NavItem[];
}

export const platformNavItemsData: NavGroup[] = [
  {
    items: [
      {
        text: "Overview",
        link: "/",
        sectionId: "overview",
        iconName: "Circles",
      },
    ],
  },
  {
    header: "CORE",
    items: [
      {
        text: "Agents",
        link: "/agents",
        sectionId: "agents",
        iconName: "Memory",
        tag: {
          label: "Beta",
          variant: "cta",
        },
      },
      {
        text: "Chat",
        link: "/chat",
        sectionId: "chat",
        iconName: "ChatCircle",
        tag: {
          label: "Alpha",
          variant: "secondary",
        },
      },
      {
        text: "Automations",
        link: "/automations",
        sectionId: "automations",
        iconName: "Path",
      },
      {
        text: "Apps",
        link: "/apps",
        sectionId: "apps",
        iconName: "Browsers",
      },
    ],
  },
  {
    header: "RESOURCES",
    items: [
      {
        text: "Connections",
        link: "/integrations",
        sectionId: "integrations",
        iconName: "Link",
      },
      {
        text: "API explorer",
        link: "/apis",
        sectionId: "apis",
        iconName: "Webhooks",
      },
      {
        text: "Data tables",
        link: "/data",
        sectionId: "data",
        iconName: "Database",
      },
      {
        text: "Scaling",
        link: "/scaling",
        sectionId: "scaling",
        iconName: "TrendUp",
      },
      {
        text: "Hosting",
        link: "/hosting",
        sectionId: "hosting",
        iconName: "Cloud",
      },
    ],
  },
];
