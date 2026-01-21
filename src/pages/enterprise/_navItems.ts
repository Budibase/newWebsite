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

export const enterpriseNavItemsData: NavGroup[] = [
	{
		items: [
			{ text: "Overview", link: "/enterprise", sectionId: "overview", iconName: "Buildings" },
			{
				text: "Contact sales",
				link: "/enterprise/contact-sales",
				sectionId: "contact-sales",
				iconName: "EnvelopeSimple",
			},
		],
	},
	{
		header: "CORE",
		items: [
			{ text: "Security", link: "/enterprise/security", sectionId: "security", iconName: "ShieldCheck" },
			{ text: "Control", link: "/enterprise/control", sectionId: "control", iconName: "Sliders" },
			{ text: "Support", link: "/enterprise/support", sectionId: "support", iconName: "Headset" },
		],
	},
	{
		header: "CASE STUDIES",
		items: [
			{ text: "Pays Basque", link: "/enterprise/pays-basque", sectionId: "pays-basque", iconName: "MapPin" },
			{ text: "Knights Brown", link: "/enterprise/knights-brown", sectionId: "knights-brown", iconName: "HardHat" },
			{ text: "Ströer-x", link: "/enterprise/stroer-x", sectionId: "stroer-x", iconName: "Broadcast" },
			{ text: "Reworld", link: "/enterprise/reworld", sectionId: "reworld", iconName: "Recycle" },
			{ text: "Schnellecke", link: "/enterprise/schnellecke", sectionId: "schnellecke", iconName: "Truck" },
			{ text: "Bulgarian Government", link: "/enterprise/bulgarian-government", sectionId: "bulgarian-government", iconName: "Bank" },
			{ text: "Herrenknecht", link: "/enterprise/herrenknecht", sectionId: "herrenknecht", iconName: "Gear" },
			{ text: "Geis", link: "/enterprise/geis", sectionId: "geis", iconName: "Package" },
			{ text: "Minitab", link: "/enterprise/minitab", sectionId: "minitab", iconName: "ChartBar" },
		],
	},
];
