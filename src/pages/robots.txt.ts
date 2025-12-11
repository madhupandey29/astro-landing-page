export async function GET() {
  const SITE_URL = import.meta.env.PUBLIC_SITE_URL;

  const body = `
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /config/
Disallow: /secret-page.html

Sitemap: ${SITE_URL}/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
