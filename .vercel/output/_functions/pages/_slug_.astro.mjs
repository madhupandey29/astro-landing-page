import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_CMwH0IKg.mjs';
import { $ as $$LandingLayout, a as $$OverviewSection, b as $$RelatedProductsByLocation, c as $$Testimonial, d as $$FAQSection, e as $$ContactSection } from '../chunks/OverviewSection_CiE7A3tk.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProductHeroBySlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductHeroBySlug;
  const {
    currentSlug,
    seoApi = "https://test.amrita-fashions.com/landing/seo",
    productApi = "https://test.amrita-fashions.com/landing/product",
    contactHref = "/contact",
    phone = "+91 99999 99999"
  } = Astro2.props;
  const norm = (v) => String(v ?? "").trim().toLowerCase();
  const toId = (v) => typeof v === "string" ? v.trim() : v && v._id ? String(v._id).trim() : "";
  const safeNum = (v) => {
    const n = Number(String(v ?? "").replace(/[^0-9.\-]/g, ""));
    return Number.isFinite(n) ? n : void 0;
  };
  const joinNames = (arr) => Array.isArray(arr) ? arr.map((x) => x?.name ?? x).filter(Boolean).join(", ") : void 0;
  const pickImg = (p) => String(p?.img || p?.image1 || p?.image2 || "/images/placeholder-800x600.svg");
  let seoRows = [];
  let products = [];
  try {
    const [sRes, pRes] = await Promise.all([
      fetch(seoApi, { headers: { Accept: "application/json" } }),
      fetch(productApi, { headers: { Accept: "application/json" } })
    ]);
    if (sRes.ok) {
      const j = await sRes.json();
      seoRows = Array.isArray(j?.data) ? j.data : Array.isArray(j) ? j : [];
    }
    if (pRes.ok) {
      const j = await pRes.json();
      products = Array.isArray(j?.data) ? j.data : Array.isArray(j) ? j : [];
    }
  } catch {
  }
  const currentSeo = seoRows.find((s) => norm(s?.slug) === norm(currentSlug)) || null;
  let heroProduct = null;
  if (currentSeo) {
    const pid = toId(currentSeo.product);
    heroProduct = products.find((p) => String(p?._id) === pid) || null;
  }
  const titleText = String(currentSeo?.productlocationtitle || heroProduct?.name || "Premium Fabric").trim();
  const tagline = String(currentSeo?.productlocationtagline || "Denim that Defines Durability and Style").trim();
  const ratingValue = safeNum(currentSeo?.rating_value ?? heroProduct?.rating_value);
  const ratingCount = safeNum(currentSeo?.rating_count ?? heroProduct?.rating_count);
  const leadTimeDays = currentSeo?.leadtime ?? heroProduct?.leadtime;
  const specs = {
    Content: heroProduct?.content?.name ?? heroProduct?.content,
    Weight: (() => {
      const gsm = safeNum(heroProduct?.gsm);
      const oz = safeNum(heroProduct?.oz);
      if (gsm !== void 0 && oz !== void 0) return `${gsm} gsm / ${oz.toFixed(1)} oz`;
      if (gsm !== void 0) return `${gsm} gsm`;
      if (oz !== void 0) return `${oz.toFixed(1)} oz`;
      return void 0;
    })(),
    Width: (() => {
      const cm = safeNum(heroProduct?.cm);
      const inch = safeNum(heroProduct?.inch);
      if (cm !== void 0 && inch !== void 0) return `${cm} cm / ${Math.round(inch)} inch`;
      if (cm !== void 0) return `${cm} cm`;
      if (inch !== void 0) return `${Math.round(inch)} inch`;
      return void 0;
    })(),
    Finish: heroProduct?.subfinish?.name ?? heroProduct?.subfinish,
    Design: heroProduct?.design?.name ?? heroProduct?.design,
    Motif: heroProduct?.motif?.name ?? heroProduct?.motif,
    Structure: heroProduct?.substructure?.name ?? heroProduct?.substructure,
    Colors: joinNames(heroProduct?.color) ?? heroProduct?.colors,
    "Lead time": leadTimeDays ? `${leadTimeDays} days` : void 0
  };
  const heroImg = pickImg(heroProduct);
  const heroAlt = String(heroProduct?.altimg1 || titleText);
  return renderTemplate`${maybeRenderHead()}<section class="product-hero" data-astro-cid-5pofs5vt> <div class="product-container" data-astro-cid-5pofs5vt> <!-- LEFT --> <div class="product-content" data-astro-cid-5pofs5vt> <div class="product-header" data-astro-cid-5pofs5vt> <div class="product-badge" data-astro-cid-5pofs5vt>Featured Product</div> <h1 class="product-title" data-astro-cid-5pofs5vt>${titleText}</h1> <p class="product-tagline" data-astro-cid-5pofs5vt>${tagline}</p> </div> ${heroProduct ? renderTemplate`<div class="product-details" data-astro-cid-5pofs5vt> <!-- specs styled like the classic single card --> <div class="specs-section" data-astro-cid-5pofs5vt> <div class="specs-card" data-astro-cid-5pofs5vt> <div class="specs-grid" data-astro-cid-5pofs5vt> ${Object.entries(specs).map(([k, v]) => v && renderTemplate`<div class="spec-row" data-astro-cid-5pofs5vt> <span class="spec-name" data-astro-cid-5pofs5vt>${k}:</span> <span class="spec-value" data-astro-cid-5pofs5vt>${v}</span> </div>`)} </div> ${(ratingValue !== void 0 || ratingCount !== void 0) && renderTemplate`<div class="card-meta" data-astro-cid-5pofs5vt> <div class="meta" data-astro-cid-5pofs5vt> <span class="meta-label" data-astro-cid-5pofs5vt>Rating:</span> <span class="stars"${addAttribute(`${Math.round(ratingValue ?? 0)} out of 5 stars`, "aria-label")} data-astro-cid-5pofs5vt> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg viewBox="0 0 20 20" width="18" height="18"${addAttribute(i < Math.round(ratingValue ?? 0) ? "star fill" : "star", "class")} aria-hidden="true" data-astro-cid-5pofs5vt> <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.5 4.8 17.5l1-5.8L1.5 7.6l5.8-.8L10 1.5z" data-astro-cid-5pofs5vt></path> </svg>`)} </span> </div> ${ratingCount !== void 0 && renderTemplate`<div class="meta" data-astro-cid-5pofs5vt> <span class="meta-label" data-astro-cid-5pofs5vt>Reviews:</span> <span class="meta-val" data-astro-cid-5pofs5vt>${ratingCount}</span> </div>`} </div>`} </div> </div> <!-- CTAs with same hover behaviour --> <div class="action-section" data-astro-cid-5pofs5vt> <div class="action-buttons" data-astro-cid-5pofs5vt> <a class="btn btn-primary"${addAttribute(`${contactHref}?slug=${encodeURIComponent(String(currentSlug || ""))}${heroProduct ? `&product=${encodeURIComponent(heroProduct?.name || "")}&pid=${encodeURIComponent(heroProduct?._id || "")}` : ""}`, "href")} data-astro-cid-5pofs5vt>
Get Quote Now
</a> <a class="btn btn-secondary"${addAttribute(`tel:${phone?.replace(/[^\d+]/g, "")}`, "href")} data-astro-cid-5pofs5vt>
Call Now
</a> <a class="btn btn-outline"${addAttribute(`/api/catalogue/${encodeURIComponent(String(currentSlug || "catalog"))}`, "href")} data-astro-cid-5pofs5vt>
Download Catalog
</a> </div> <!-- trust chips like the classic row --> <ul class="trust-row" data-astro-cid-5pofs5vt> <li data-astro-cid-5pofs5vt><span class="dot" aria-hidden="true" data-astro-cid-5pofs5vt></span>Fast Delivery</li> <li data-astro-cid-5pofs5vt><span class="dot" aria-hidden="true" data-astro-cid-5pofs5vt></span>Quality Assured</li> <li data-astro-cid-5pofs5vt><span class="dot" aria-hidden="true" data-astro-cid-5pofs5vt></span>Expert Support</li> </ul> </div> </div>` : renderTemplate`<div class="empty-state" data-astro-cid-5pofs5vt> <h3 data-astro-cid-5pofs5vt>Product Not Found</h3> <p data-astro-cid-5pofs5vt>No product found for this URL.</p> </div>`} </div> <!-- RIGHT --> <div class="product-visual" data-astro-cid-5pofs5vt> <div class="image-container" data-astro-cid-5pofs5vt> <figure class="image-card" data-astro-cid-5pofs5vt> <img${addAttribute(heroImg, "src")}${addAttribute(heroAlt, "alt")} loading="eager" decoding="async" class="product-image" data-astro-cid-5pofs5vt> <figcaption class="image-badge" data-astro-cid-5pofs5vt>Premium Quality</figcaption> </figure> </div> </div> </div> </section> `;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/ProductHeroBySlug.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "Fabric \u2013 Amrita Fashions", "description": "Premium fabrics for B2B buyers." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductHeroBySlug", $$ProductHeroBySlug, { "currentSlug": slug })}  ${renderComponent($$result2, "OverviewSection", $$OverviewSection, { "currentSlug": slug })} ${renderComponent($$result2, "RelatedProductsByLocation", $$RelatedProductsByLocation, { "currentSlug": slug, "title": "Explore Our Fabric Catalog", "subtitle": "More options from this location" })} ${renderComponent($$result2, "FashionTestimonial", $$Testimonial, {})} ${renderComponent($$result2, "FAQ", $$FAQSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
