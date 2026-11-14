// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático (SSG) para Cloudflare Pages. Sin adaptador: no hay backend.
export default defineConfig({
  site: 'https://david.pricop.es',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  devToolbar: { enabled: false },
});
