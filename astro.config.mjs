// astro.config.mjs (or .ts)
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/server'; // use '@astrojs/vercel/edge' if you want Edge

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'hybrid',                 // SSG by default; SSR only where `prerender = false`
  adapter: vercel({
    // Optional: Incremental Static Regeneration for SSR routes
    isr: { expiration: 60 * 60 },   // revalidate every 1 hour
  }),
  integrations: [react()],
});
