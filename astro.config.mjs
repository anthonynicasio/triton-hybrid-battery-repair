import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://tritonhybridbattery.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
