export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
  pageTitle: string;
  pageDescription?: string;
}

export interface NavGroup {
  header?: string;
  items: NavItem[];
}

export const enterpriseNavItemsData: NavGroup[] = [
  {
    items: [
      {
        text: "Overview",
        link: "/enterprise",
        sectionId: "overview",
        iconName: "Buildings",
        pageTitle: "Enterprise",
        pageDescription:
          "Budibase Enterprise delivers the security, control, and dedicated support that large organizations need.",
      },
    ],
  },
];
