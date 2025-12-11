// Simple server wrapper for Railway deployment
process.env.HOST = '0.0.0.0';
process.env.PORT = process.env.PORT || '8080';

import('./.vercel/output/functions/_render.func/dist/server/entry.mjs').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});