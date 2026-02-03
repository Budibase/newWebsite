// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";
import remarkGemoji from "remark-gemoji";

// https://astro.build/config
export default defineConfig({
  site: "https://www.budibase.com",

  prefetch: {
    prefetchAll: false,
  },

  redirects: {
    "/platform/integrations": "/platform/connections",
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
  integrations: [sitemap(), expressiveCode()],
});
