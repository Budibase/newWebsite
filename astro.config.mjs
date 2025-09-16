// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from 'node:url';
import { URL } from 'node:url';

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
        "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
        "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
  },
});
