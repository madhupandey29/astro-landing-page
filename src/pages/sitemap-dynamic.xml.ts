// src/pages/sitemap-dynamic.xml.ts
import type { APIRoute } from 'astro';

/**
 * Dynamic sitemap for Product × City landings.
 * - Uses your API to fetch products and cities
 * - Builds pretty URLs like /{product-slug}/{city-slug}/
 * - Caps output for size/perf; tune with env vars
 */

const SITE = (import.meta.env.SITE || 'https://astro-landing-page-rho.vercel.app').replace(/\/+$/, '');
const API_BASE = (import.meta.env.API_BASE || 'https://test.amrita-fashions.com').replace(/\/+$/, '');

// Endpoints (change if your paths differ)
const ENDPOINTS = {
  products: `${API_BASE}/api/product`,
  cities: `${API_BASE}/api/cities`,
};

// Safety caps (tune as needed)
const MAX_PRODUCTS = Number(import.meta.env.SITEMAP_MAX_PRODUCTS || 200); // e.g., top 200 products
const MAX_CITIES   = Number(import.meta.env.SITEMAP_MAX_CITIES   || 200); // e.g., top 200 cities
const HARD_LIMIT   = Number(import.meta.env.SITEMAP_HARD_LIMIT   || 48000); // stay <50k Google limit

export const prerender = false;

// -------- helpers --------
function slugify(input: string): string {
  return (input || '')
    .toString()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-');
}

function esc(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

async function fetchJson<T = any>(url: string): Promise<T | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 12_000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

type ApiList = { success?: boolean; data?: any[] } | null;

export const GET: APIRoute = async () => {
  // 1) Load products & cities
  const [prodRes, cityRes] = await Promise.all([
    fetchJson<ApiList>(ENDPOINTS.products),
    fetchJson<ApiList>(ENDPOINTS.cities),
  ]);

  const products = (prodRes?.data || []).slice(0, MAX_PRODUCTS);
  const cities   = (cityRes?.data || []).slice(0, MAX_CITIES);

  // Try to use existing slug-like fields if present; fall back to slugified names
  const getProductSlug = (p: any) =>
    (p?.slug || p?.seoSlug || slugify(p?.name || p?.title || '') || '').toString();

  const getCitySlug = (c: any) =>
    (c?.slug || c?.code || slugify(c?.name || '') || '').toString();

  // 2) Build paths (pretty pattern: /{product}/{city}/)
  const urls: Array<{ loc: string; lastmod: string; priority: number }> = [];
  const nowIso = new Date().toISOString();

  outer: for (const p of products) {
    const ps = getProductSlug(p);
    if (!ps) continue;

    // Pick a lastmod if provided by API; otherwise now
    const last = (p?.updatedAt && !isNaN(Date.parse(p.updatedAt))) ? new Date(p.updatedAt).toISOString() : nowIso;

    for (const c of cities) {
      const cs = getCitySlug(c);
      if (!cs) continue;

      // Pretty URL (you can also add "/in/india/{state}/{city}/" variant if you like)
      const path = `/${ps}/${cs}/`;
      urls.push({
        loc: `${SITE}${path}`,
        lastmod: last,
        priority: 0.8, // Product × City landings are important
      });

      if (urls.length >= HARD_LIMIT) break outer;
    }
  }

  // (Optional) Add core static marketing pages to ensure presence in this sitemap too
  const BASE_PAGES = ['/', '/about', '/products', '/gallery', '/updates', '/contact'];
  for (const p of BASE_PAGES) {
    urls.push({ loc: `${SITE}${p}`, lastmod: nowIso, priority: 0.6 });
    if (urls.length >= HARD_LIMIT) break;
  }

  // 3) Build XML
  const items = urls.map(u => `<url>
  <loc>${esc(u.loc)}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${u.priority.toFixed(1)}</priority>
</url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Cache for 1 hour, allow CDN to revalidate quietly
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
