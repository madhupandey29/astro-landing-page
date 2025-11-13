// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // Astro v5: import from package root

export default defineConfig({
  devToolbar: { enabled: false },

  // SSR app; pages opt into prerender individually
  output: 'server',
  prerender: false,               // don't globally prerender (prevents static 404/redirect conflicts)
  trailingSlash: 'ignore',        // no auto slash redirects

  adapter: vercel({
    // Optional: ISR for SSR responses
    isr: { expiration: 60 * 60 }, // 1 hour
  }),

  integrations: [react()],
});
