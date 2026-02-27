// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";
import remarkGemoji from "remark-gemoji";

// https://astro.build/config
export default defineConfig({
  site: "https://www.budibase.com",

  prefetch: {
    prefetchAll: false,
  },

  redirects: {
    "/learn/blog": "/blog",
    "/learn/blog/[...slug]": "/blog/[...slug]",
    "/product": "/product/agents",
    "/product/integrations": "/product/connections",
    "/platform": "/product/agents",
    "/platform/integrations": "/product/connections",
    "/platform/agents": "/product/agents",
    "/platform/automations": "/product/automations",
    "/platform/apps": "/product/apps",
    "/platform/connections": "/product/connections",
    "/platform/apis": "/product/apis",
    "/platform/data": "/product/data",
    "/platform/resources": "/product/resources",
    "/platform/enterprise": "/product/enterprise",
    "/use-cases": "/agent-space",
  },

  markdown: {
    remarkPlugins: [remarkGemoji],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },

  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
  },

  adapter: netlify(),
  integrations: [sitemap(), expressiveCode(), mdx()],
});
