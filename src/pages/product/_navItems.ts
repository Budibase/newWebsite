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
          "Build AI agents that automate decisions and execute real operational work across your business systems.",
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
          "Create event-driven workflows that streamline operations by connecting agents, apps, data, and external tools.",
      },
      {
        text: "Apps",
        link: "/product/apps",
        sectionId: "apps",
        iconName: "Browsers",
        pageTitle: "Apps",
        pageDescription:
          "Build secure internal apps that give teams structured, AI-powered tools to run daily operations efficiently.",
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
          "Connect the tools you rely on so agents and workflows can securely take action across your stack.",
      },
      {
        text: "Data tables",
        link: "/product/data",
        sectionId: "data",
        iconName: "Database",
        pageTitle: "Data tables",
        pageDescription:
          "Manage structured operational data that powers AI agents, workflows, and internal apps.",
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
