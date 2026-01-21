export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
}

export interface NavGroup {
  header?: string;
  items: NavItem[];
}

export const pricingNavItemsData: NavGroup[] = [
	{
		items: [
			{ text: "Pricing", link: "/pricing", sectionId: "pricing-annual", iconName: "Buildings" },
			{ text: "Add-ons", link: "/pricing/add-ons", sectionId: "add-ons", iconName: "Package" },
		],
	},
	{
		header: "CORE",
		items: [
			{ text: "Security", link: "/pricing/security", sectionId: "security", iconName: "ShieldCheck" },
			{ text: "Control", link: "/pricing/control", sectionId: "control", iconName: "Sliders" },
			{ text: "Support", link: "/pricing/support", sectionId: "support", iconName: "Headset" },
		],
	},
	{
		header: "CASE STUDIES",
		items: [
			{ text: "Pays Basque", link: "/pricing/case-studies/pays-basque", sectionId: "pays-basque", iconName: "MapPin" },
			{ text: "Knights Brown", link: "/pricing/case-studies/knights-brown", sectionId: "knights-brown", iconName: "HardHat" },
			{ text: "Ströer-x", link: "/pricing/case-studies/stroer-x", sectionId: "stroer-x", iconName: "Broadcast" },
			{ text: "Reworld", link: "/pricing/case-studies/reworld", sectionId: "reworld", iconName: "Recycle" },
			{ text: "Schnellecke", link: "/pricing/case-studies/schnellecke", sectionId: "schnellecke", iconName: "Truck" },
			{ text: "Bulgarian Government", link: "/pricing/case-studies/bulgarian-government", sectionId: "bulgarian-government", iconName: "Bank" },
			{ text: "Herrenknecht", link: "/pricing/case-studies/herrenknecht", sectionId: "herrenknecht", iconName: "Gear" },
			{ text: "Geis", link: "/pricing/case-studies/geis", sectionId: "geis", iconName: "Package" },
			{ text: "Minitab", link: "/pricing/case-studies/minitab", sectionId: "minitab", iconName: "ChartBar" },
		],
	},
];
