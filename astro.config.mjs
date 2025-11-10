// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // ✅ use package root on Astro v5

export default defineConfig({
  devToolbar: { enabled: false },

  // ✅ Astro v5 "hybrid": server + global prerender
  output: 'server',
  prerender: true,                 // prebuild all possible routes as static
  adapter: vercel({
    // Optional: ISR for SSR-only routes
    isr: { expiration: 60 * 60 },  // revalidate after 1 hour
  }),

  integrations: [react()],
});
