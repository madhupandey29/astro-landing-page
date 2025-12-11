// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';

// Detect where we are building
const isVercel = !!process.env.VERCEL;
// Railway has a bunch of RAILWAY_* vars; we don't actually need them,
// we just treat "not Vercel" as "Node target" (Railway, local, other VPS).

// Optional: dynamic site URL (better for SEO + correct canonical)
const site =
  process.env.SITE_URL || 'https://astro-landing-page-railway.app';

export default defineConfig({
  devToolbar: { enabled: false },

  site, // use env SITE_URL per environment

  output: 'server',
  prerender: false,
  trailingSlash: 'ignore',

  // 👇 Choose adapter per platform
  adapter: isVercel
    ? vercel({
        isr: { expiration: 60 * 60 }, // your existing ISR setting
      })
    : node({
        mode: 'standalone', // nice for Railway / generic Node hosts
      }),

  // 👇 Node adapter uses this; Vercel ignores it.
  // Works for: `astro dev`, `astro preview`, and Railway runtime.
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
  },

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [react()],
});
