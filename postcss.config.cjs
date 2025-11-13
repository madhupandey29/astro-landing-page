// postcss.config.cjs

// For @fullhuman/postcss-purgecss v4+ (ESM-style exports)
const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    // Run PurgeCSS only in production builds (optional but recommended)
    isProd &&
      purgeCSSPlugin({
        content: [
          './src/**/*.astro',
          './src/**/*.html',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.ts',
          './src/**/*.tsx',
        ],
        safelist: [
          // keep dynamic / JS-added / library classes here
          /swiper-/,
          /fa-/,
          /is-active/,
          /is-open/,
          /modal/,
          // add your own like:
          // /^badge-/,
          // 'active',
          // 'open',
        ],
        defaultExtractor: (content) =>
          content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
  ].filter(Boolean),
};
