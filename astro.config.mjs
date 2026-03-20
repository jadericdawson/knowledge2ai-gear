import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://k2ai.shop',
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
