import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bitpolar-tech.github.io',
  base: '/agentic-admin-for-wp-landing/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
