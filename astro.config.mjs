import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jadericdawson.com',
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
