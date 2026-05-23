import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://puertasindusec.com',
  integrations: [sitemap(), tailwind()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
