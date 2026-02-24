import { platformNavItemsData } from "./_navItems";

const defaultPageMeta = {
  title: "Product",
  description:
    "Enterprise-grade security and governance built for deploying AI into real business operations.",
} as const;

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

const flatNavItems = platformNavItemsData.flatMap((group) => group.items);

export function getProductPageMeta(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  const matchedNavItem = flatNavItems.find(
    (item) => normalizePath(item.link) === normalizedPath,
  );

  if (!matchedNavItem) {
    return defaultPageMeta;
  }

  return {
    title: matchedNavItem.pageTitle,
    description: matchedNavItem.pageDescription,
  };
}
