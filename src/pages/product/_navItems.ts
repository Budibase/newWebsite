export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
  pageTitle: string;
  pageDescription: string;
  disabled?: boolean;
  tag?: {
    label: string;
    variant: "primary" | "secondary" | "cta" | "orange";
  };
}

export interface NavGroup {
  header?: string;
  headerStyle?: "default" | "label";
  items: NavItem[];
}

export const platformNavItemsData: NavGroup[] = [
  {
    items: [
      {
        text: "Agents",
        link: "/product/agents",
        sectionId: "agents",
        iconName: "Memory",
        pageTitle: "Agents",
        pageDescription:
          "Design intelligent agents that reason, act, and integrate directly into your existing systems.",
        tag: {
          label: "Beta",
          variant: "cta",
        },
      },
      {
        text: "Automations",
        link: "/product/automations",
        sectionId: "automations",
        iconName: "Path",
        pageTitle: "Automations",
        pageDescription:
          "Automate complex processes by combining AI, logic, and integrations in a single visual flow.",
      },
      {
        text: "Apps",
        link: "/product/apps",
        sectionId: "apps",
        iconName: "Browsers",
        pageTitle: "Apps",
        pageDescription:
          "Build powerful internal tools and AI-enabled apps at the speed your business moves.",
      },
    ],
  },
  {
    items: [
      {
        text: "Connections",
        link: "/product/connections",
        sectionId: "connections",
        iconName: "Link",
        pageTitle: "Connections",
        pageDescription: "Connect your models, data, and tools in one place.",
      },
      {
        text: "API explorer",
        link: "/product/apis",
        sectionId: "apis",
        iconName: "Webhooks",
        pageTitle: "API Explorer",
        pageDescription:
          "Explore, test, and manage APIs with a developer-friendly experience built in.",
      },
      {
        text: "Data tables",
        link: "/product/data",
        sectionId: "data",
        iconName: "Database",
        pageTitle: "Data",
        pageDescription:
          "A flexible data layer that powers apps, workflows, and AI — without friction.",
      },
    ],
  },
  {
    header: "Coming soon",
    headerStyle: "label",
    items: [
      {
        text: "Agent Chat",
        link: "/product/ai-chat",
        sectionId: "ai-chat",
        iconName: "ChatCircle",
        pageTitle: "Agent Chat",
        pageDescription: "Coming soon.",
        disabled: true,
      },
      {
        text: "HITL",
        link: "/product/hitl",
        sectionId: "hitl",
        iconName: "Path",
        pageTitle: "HITL",
        pageDescription: "Coming soon.",
        disabled: true,
      },
      {
        text: "Agent Logs",
        link: "/product/logs",
        sectionId: "logs",
        iconName: "TrendUp",
        pageTitle: "Agent Logs",
        pageDescription: "Coming soon.",
        disabled: true,
      },
    ],
  },
];
