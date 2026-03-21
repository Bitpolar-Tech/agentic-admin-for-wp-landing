import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wp-agentic-admin.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
