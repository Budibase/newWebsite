// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://www.budibase.com",

  prefetch: {
    prefetchAll: true,
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
    fonts: [
      {
        provider: "local",
        name: "Inter",
        cssVariable: "--font-sans",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Inter-Regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Inter-Medium.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Inter-SemiBold.woff2"],
          },
        ],
      },
    ],
  },

  adapter: netlify(),
  integrations: [sitemap(), expressiveCode()],
});
