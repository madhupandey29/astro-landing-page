import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML, k as renderComponent } from '../chunks/astro/server_CMwH0IKg.mjs';
import { $ as $$LandingLayout, a as $$OverviewSection, b as $$RelatedProductsByLocation, c as $$Testimonial, d as $$FAQSection, e as $$ContactSection } from '../chunks/OverviewSection_CiE7A3tk.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$CityProductHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CityProductHero;
  const { cityCode } = Astro2.props;
  const norm = (s) => String(s ?? "").trim().toLowerCase();
  const toId = (v) => typeof v === "string" ? v.trim() : v?._id ? String(v._id).trim() : "";
  async function fetchJson(url) {
    try {
      const r = await fetch(url, { headers: { Accept: "application/json" } });
      if (!r.ok) return null;
      return await r.json();
    } catch {
      return null;
    }
  }
  function cityTokenInSlug(slug, city) {
    const c = norm(city).replace(/\s+/g, "-");
    const re = new RegExp(`(^|-)${c}(-|$)`, "i");
    return re.test(String(slug || "").toLowerCase());
  }
  const API_ROOT = ("https://test.amrita-fashions.com/landing").replace(/\/+$/, "");
  const [seoJson, prodJson, locJson] = await Promise.all([
    fetchJson(`${API_ROOT}/seo`),
    fetchJson(`${API_ROOT}/product`),
    fetchJson(`${API_ROOT}/locations`)
  ]);
  const seos = Array.isArray(seoJson?.data) ? seoJson.data : [];
  const allProducts = Array.isArray(prodJson?.data) ? prodJson.data : Array.isArray(prodJson?.data?.products) ? prodJson.data.products : Array.isArray(prodJson) ? prodJson : [];
  const rawLocs = locJson?.data?.locations ?? locJson?.data ?? locJson?.locations ?? [];
  const locs = Array.isArray(rawLocs) ? rawLocs : [];
  const targetLoc = locs.find((l) => norm(l?.slug) === norm(cityCode) || norm(l?.name) === norm(cityCode) || norm(l?.code) === norm(cityCode));
  const targetLocId = toId(targetLoc);
  const targetCode = norm(targetLoc?.code) || norm(cityCode);
  function sameLocation(s) {
    const locId = toId(s?.location);
    const code = norm(s?.locationCode);
    if (targetLocId && locId) return targetLocId === locId;
    if (code && targetCode) return code === targetCode;
    return cityTokenInSlug(String(s?.slug || ""), cityCode);
  }
  const productById = /* @__PURE__ */ new Map();
  for (const p of allProducts) {
    const pid = String(p?._id ?? "").trim();
    if (pid) productById.set(pid, p);
  }
  const citySeoRows = seos.filter(sameLocation);
  const cityProducts = [];
  const seen = /* @__PURE__ */ new Set();
  for (const s of citySeoRows) {
    const pid = toId(s?.product);
    if (!pid || seen.has(pid)) continue;
    const prod = productById.get(pid);
    if (prod) {
      seen.add(pid);
      cityProducts.push(prod);
    }
  }
  let heroProduct = cityProducts[0] || null;
  let heroSeo = heroProduct && citySeoRows.find((s) => toId(s.product) === String(heroProduct._id)) || citySeoRows[0] || null;
  if (!heroProduct && seos.length) {
    const firstSeo = seos[0];
    heroProduct = productById.get(toId(firstSeo.product)) || null;
    heroSeo = firstSeo;
  }
  const title = heroSeo?.productlocationtitle || "Premium";
  const tagline = heroSeo?.productlocationtagline || "Denim that Defines Durability and Style";
  const rating = Number(heroSeo?.rating_value ?? 0);
  const reviews = Number(heroSeo?.rating_count ?? 0);
  const img = heroProduct?.img || heroProduct?.image1 || heroProduct?.image2 || "/placeholder.svg?height=900&width=700";
  const content = heroProduct?.content?.name || heroProduct?.content || "—";
  const gsm = heroProduct?.gsm;
  const oz = heroProduct?.oz;
  const cm = heroProduct?.cm;
  const inch = heroProduct?.inch;
  const design = heroProduct?.design?.name || heroProduct?.design || "—";
  const subfinish = heroProduct?.subfinish?.name || heroProduct?.subfinish || "—";
  const substructure = heroProduct?.substructure?.name || heroProduct?.substructure || "—";
  const motif = heroProduct?.motif?.name || heroProduct?.motif || "None/ NA";
  const colorsArr = Array.isArray(heroProduct?.color) ? heroProduct.color.map((c) => c?.name || c) : [];
  const colorsText = colorsArr.join(", ") || heroProduct?.colors || "—";
  const leadtime = heroSeo?.leadtime ?? heroProduct?.leadtime;
  const weightText = (gsm ? `${gsm} gsm` : "") + (oz ? ` / ${oz} oz` : "");
  const widthText = (cm ? `${cm} cm` : "") + (inch ? ` / ${inch} inch` : "");
  const hasCityData = !!heroProduct;
  const catalogHref = `/api/catalogue/${encodeURIComponent(heroSeo?.slug || heroProduct?.slug || "catalog")}`;
  const stars = Math.max(0, Math.min(5, Math.round(rating || 0)));
  return renderTemplate`${maybeRenderHead()}<section class="classic-hero" aria-labelledby="city-hero-title" data-astro-cid-m4yy6zra> <div class="wrap" data-astro-cid-m4yy6zra> <div class="left" data-astro-cid-m4yy6zra> <h1 id="city-hero-title" class="ttl" data-astro-cid-m4yy6zra>${title}</h1> <p class="tag" data-astro-cid-m4yy6zra>${tagline}</p> <div class="spec-card" role="region" aria-label="Product specifications" data-astro-cid-m4yy6zra> <div class="grid" data-astro-cid-m4yy6zra> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Content:</span><span class="val" data-astro-cid-m4yy6zra>${content}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Weight:</span><span class="val" data-astro-cid-m4yy6zra>${weightText || "—"}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Width:</span><span class="val" data-astro-cid-m4yy6zra>${widthText || "—"}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Finish:</span><span class="val" data-astro-cid-m4yy6zra>${subfinish}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Design:</span><span class="val" data-astro-cid-m4yy6zra>${design}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Motif:</span><span class="val" data-astro-cid-m4yy6zra>${motif}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Structure:</span><span class="val" data-astro-cid-m4yy6zra>${substructure}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Colors:</span><span class="val" data-astro-cid-m4yy6zra>${colorsText}</span></div> <div class="item" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Lead time:</span><span class="val" data-astro-cid-m4yy6zra>${leadtime ? `${leadtime} days` : "—"}</span></div> </div> <div class="card-meta" data-astro-cid-m4yy6zra> <div class="meta" data-astro-cid-m4yy6zra> <span class="label" data-astro-cid-m4yy6zra>Rating:</span> <span class="stars"${addAttribute(`${stars} out of 5 stars`, "aria-label")} data-astro-cid-m4yy6zra> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg viewBox="0 0 20 20" width="18" height="18"${addAttribute(i < stars ? "star fill" : "star", "class")} aria-hidden="true" data-astro-cid-m4yy6zra> <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.5 4.8 17.5l1-5.8L1.5 7.6l5.8-.8L10 1.5z" data-astro-cid-m4yy6zra></path> </svg>`)} </span> </div> <div class="meta" data-astro-cid-m4yy6zra><span class="label" data-astro-cid-m4yy6zra>Reviews:</span><span class="val" data-astro-cid-m4yy6zra>${reviews || 0}</span></div> </div> </div> <div class="cta" data-astro-cid-m4yy6zra> <a href="#contact" class="btn primary" data-astro-cid-m4yy6zra>Get Quote Now</a> <a href="tel:+91-0000000000" class="btn outline" data-astro-cid-m4yy6zra> <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" data-astro-cid-m4yy6zra><path fill="currentColor" d="M21 16.5v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.8-3.1 19.7 19.7 0 0 1-6-6 19.5 19.5 0 0 1-3.1-8.8A2 2 0 0 1 3.9 1.5h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.6-1.6a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.2 1.8Z" data-astro-cid-m4yy6zra></path></svg>
Call Now
</a> <a${addAttribute(catalogHref, "href")} class="btn outline-mix" target="_blank" rel="noopener" data-astro-cid-m4yy6zra> <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" data-astro-cid-m4yy6zra><path fill="currentColor" d="M5 20a2 2 0 0 1-2-2v-4h2v4h14v-4h2v4a2 2 0 0 1-2 2H5Zm7-4-5-5 1.4-1.4L11 12.2V4h2v8.2l2.6-2.6L17 11l-5 5Z" data-astro-cid-m4yy6zra></path></svg>
Free Catalog
</a> </div> <ul class="trust" data-astro-cid-m4yy6zra> <li data-astro-cid-m4yy6zra><span class="dot" aria-hidden="true" data-astro-cid-m4yy6zra></span>ISO Certified</li> <li data-astro-cid-m4yy6zra><span class="dot" aria-hidden="true" data-astro-cid-m4yy6zra></span>Global Shipping</li> <li data-astro-cid-m4yy6zra><span class="dot" aria-hidden="true" data-astro-cid-m4yy6zra></span>24/7 Support</li> </ul> </div> <div class="right" data-astro-cid-m4yy6zra> ${hasCityData && renderTemplate`<figure class="img-card" data-astro-cid-m4yy6zra> <img${addAttribute(img, "src")}${addAttribute(heroProduct?.altimg1 || heroProduct?.name || "Premium fabric image", "alt")} width="520" height="700" loading="eager" fetchpriority="high" data-astro-cid-m4yy6zra> </figure>`} </div> </div> </section> `;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/CityProductHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$CommitmentText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommitmentText;
  const {
    aboutusUrl,
    class: className = "text-base sm:text-lg text-slate-700 leading-relaxed whitespace-pre-wrap break-words",
    fallback = ""
  } = Astro2.props;
  const RAW_BASE = ("https://test.amrita-fashions.com/landing/").replace(/\/+$/, "");
  const ABOUTUS_URL = aboutusUrl ?? `${RAW_BASE}/aboutus`;
  const headers = { Accept: "application/json" };
  function pickAboutObj(json) {
    const root = json?.data?.aboutUs ?? json?.data?.aboutus ?? json?.aboutUs ?? json?.aboutus ?? json?.data ?? json;
    if (Array.isArray(root)) return root[0] ?? null;
    if (Array.isArray(root?.aboutUs)) return root.aboutUs[0] ?? null;
    if (Array.isArray(root?.aboutus)) return root.aboutus[0] ?? null;
    return root ?? null;
  }
  function pickHtml(obj) {
    if (!obj || typeof obj !== "object") return null;
    const candidates = [
      obj.descriptionmedium,
      obj.descriptionsmall,
      obj.descriptionlarger,
      obj.description1,
      obj.description2,
      obj.description3
    ];
    for (const c of candidates) if (typeof c === "string" && c.trim()) return c.trim();
    return null;
  }
  function sanitizeHtml(input) {
    if (!input) return "";
    let out = input;
    out = out.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
    out = out.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "");
    out = out.replace(/\s(href|src)\s*=\s*(['"])\s*(javascript:|data:)[\s\S]*?\2/gi, '$1="#"');
    const allowed = /^(h1|h2|h3|h4|h5|h6|p|br|strong|b|em|i|u|ul|ol|li|a|span|div)$/i;
    out = out.replace(/<\/?([a-z0-9\-]+)([^>]*)>/gi, (m, tag, attrs) => {
      if (!allowed.test(tag)) return "";
      if (/^a$/i.test(tag)) {
        const hrefMatch = attrs.match(/\shref\s*=\s*(['"]).*?\1/i);
        const href = hrefMatch ? hrefMatch[0] : "";
        return `<a${href} target="_blank" rel="noopener noreferrer">`;
      }
      const safe = attrs.replace(/\sstyle\s*=\s*(['"]).*?\1/gi, "").replace(/\s(?!class=)[a-z-]+(\s*=\s*(['"]).*?\2)?/gi, "");
      return `<${tag}${safe}>`;
    });
    return out;
  }
  let html = "";
  try {
    const res = await fetch(ABOUTUS_URL, { headers });
    if (res.ok) {
      const j = await res.json();
      const aboutObj = pickAboutObj(j);
      html = pickHtml(aboutObj) || fallback;
    } else {
      html = fallback;
    }
  } catch {
    html = fallback;
  }
  return renderTemplate`${html && renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}>${unescapeHTML(sanitizeHtml(html))}</div>`}`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/CommitmentText.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const DEFAULT_CITY_CODE = "ahmedabad";
  const OVERVIEW_IMG = "/images/hero/overview-fabric.webp";
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "Home \u2013 Amrita Fashions", "description": "B2B fabric supply." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CityProductHero", $$CityProductHero, { "cityCode": DEFAULT_CITY_CODE })} ${renderComponent($$result2, "OverviewSection", $$OverviewSection, { "heading": "Leading B2B Fabric Supplier Worldwide", "tagline": "ISO 9001 Certified \u2022 500+ Global Partners \u2022 Ships to 50+ Countries", "image": OVERVIEW_IMG, "imageAlt": "Premium textile manufacturing" }, { "extra": ($$result3) => renderTemplate`${renderComponent($$result3, "CommitmentText", $$CommitmentText, { "slot": "extra" })}` })} ${renderComponent($$result2, "RelatedProductsByLocation", $$RelatedProductsByLocation, { "cityCode": DEFAULT_CITY_CODE, "title": "Explore Our Fabric Catalog", "subtitle": "City-specific products curated for your sourcing" })} ${renderComponent($$result2, "FashionTestimonial", $$Testimonial, {})} ${renderComponent($$result2, "FAQ", $$FAQSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
