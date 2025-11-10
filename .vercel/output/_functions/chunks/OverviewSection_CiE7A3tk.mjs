import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead, l as renderHead, k as renderComponent, n as renderSlot, o as renderScript, u as unescapeHTML } from './astro/server_CMwH0IKg.mjs';
/* empty css                          */
import 'clsx';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const {
    logoSrc = "/images/brand/age.jpg",
    brand = "Amrita Fashions",
    ctaHref = "#contact",
    ctaText = "Start Exploring"
  } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<a class="skip-link" href="#main" data-astro-cid-353qvbhl>Skip to content</a> <header class="site-header" role="banner" data-astro-cid-353qvbhl> <!-- keep the checkbox at header root --> <input id="nav-open" class="nav-toggle" type="checkbox" aria-hidden="true" data-astro-cid-353qvbhl> <div class="container" data-astro-cid-353qvbhl> <div class="nav-shell" data-astro-cid-353qvbhl> <!-- Brand --> <a href="/" class="brand"', " data-astro-cid-353qvbhl> ", ' </a> <!-- Center links --> <nav class="nav-links" aria-label="Primary" data-astro-cid-353qvbhl> <a href="/" class="link is-active" aria-current="page" data-astro-cid-353qvbhl>Home</a> <a href="#products" class="link" data-astro-cid-353qvbhl>Products</a> <a href="#aboutus" class="link" data-astro-cid-353qvbhl>About Us</a> <a href="#testimonials" class="link" data-astro-cid-353qvbhl>Testimonials</a> <a href="#faq" class="link" data-astro-cid-353qvbhl>FAQ</a> <a href="#contact" class="link" data-astro-cid-353qvbhl>Contact</a> </nav> <!-- CTA --> <a class="btn cta"', " data-astro-cid-353qvbhl> <span data-astro-cid-353qvbhl>", '</span> <i class="chev" aria-hidden="true" data-astro-cid-353qvbhl></i> </a> <!-- Enhanced hamburger menu --> <label for="nav-open" class="hamburger" aria-label="Toggle menu" aria-controls="mobile-menu" aria-expanded="false" data-astro-cid-353qvbhl> <span class="hamburger-box" data-astro-cid-353qvbhl> <span class="hamburger-inner" data-astro-cid-353qvbhl></span> </span> </label> </div> </div> <!-- Mobile overlay + drawer --> <label for="nav-open" class="overlay" aria-hidden="true" data-astro-cid-353qvbhl></label> <div class="mobile-drawer" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" data-astro-cid-353qvbhl> <nav class="mobile-nav" aria-label="Mobile" data-astro-cid-353qvbhl> <a href="/" class="m-link is-active" aria-current="page" data-astro-cid-353qvbhl>Home</a> <a href="#products" class="m-link" data-astro-cid-353qvbhl>Products</a> <a href="#services" class="m-link" data-astro-cid-353qvbhl>Services</a> <a href="#testimonials" class="m-link" data-astro-cid-353qvbhl>Testimonials</a> <a href="#faq" class="m-link" data-astro-cid-353qvbhl>FAQ</a> <a href="#contact" class="m-link" data-astro-cid-353qvbhl>Contact</a> <a', ' class="btn m-cta" data-astro-cid-353qvbhl><span data-astro-cid-353qvbhl>', `</span><i class="chev" aria-hidden="true" data-astro-cid-353qvbhl></i></a> </nav> </div> </header> <!-- Auto-close, ARIA sync, sticky pin + body offset (tiny, inline, no deps) --> <script>
  (function () {
    const cb = document.getElementById('nav-open');
    const header = document.querySelector('.site-header');
    const label = document.querySelector('.hamburger');

    function syncAria(){ if(label && cb){ label.setAttribute('aria-expanded', cb.checked ? 'true':'false'); } }

    function setBodyOffset(){
      // ensure no layout jump when header is fixed
      const h = header?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-h', h + 'px');
      document.body.style.paddingTop = h + 'px';
    }

    function onScroll(){
      const y = window.scrollY || 0;
      if (y > 12) header?.classList.add('is-scrolled');
      else header?.classList.remove('is-scrolled');
    }

    function closeMenu(){
      if (!cb) return;
      cb.checked = false;
      syncAria();
      // after animation, recalc height in case pill size changed
      setTimeout(setBodyOffset, 200);
    }

    // interactions
    document.addEventListener('click', (e) => {
      if (e.target.closest('.mobile-nav a') || e.target.closest('.m-cta') || e.target.closest('.overlay')) closeMenu();
    });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMenu(); setBodyOffset(); }, { passive:true });
    window.addEventListener('scroll', onScroll, { passive:true });
    cb && cb.addEventListener('change', () => { syncAria(); setBodyOffset(); });

    // initial
    window.addEventListener('load', () => { syncAria(); setBodyOffset(); onScroll(); }, { once:true });
    if ('ResizeObserver' in window && header){
      new ResizeObserver(setBodyOffset).observe(header);
    }
  })();
<\/script> `])), maybeRenderHead(), addAttribute(brand, "aria-label"), logoSrc ? renderTemplate`<img${addAttribute(logoSrc, "src")}${addAttribute(brand, "alt")} class="logo" data-astro-cid-353qvbhl>` : renderTemplate`<span class="brand-text" data-astro-cid-353qvbhl>${brand}</span>`, addAttribute(ctaHref, "href"), ctaText, addAttribute(ctaHref, "href"), ctaText);
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/common/Navbar.astro", void 0);

const socials = [
  { id: "yt", label: "YouTube", icon: "fa-brands fa-youtube", link: "https://www.youtube.com/@AmritaFashions" },
  { id: "ig", label: "Instagram", icon: "fa-brands fa-instagram", link: "https://www.instagram.com/amritafashions" },
  { id: "fb", label: "Facebook", icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com/amritafashions" },
  { id: "li", label: "LinkedIn", icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/company/amrita-fashions" },
  { id: "x", label: "X (Twitter)", icon: "fa-brands fa-x-twitter", link: "https://x.com/amritafashions" },
  { id: "wa", label: "WhatsApp", icon: "fa-brands fa-whatsapp", link: "https://wa.me/919925155141" },
  { id: "tg", label: "Telegram", icon: "fa-brands fa-telegram", link: "https://t.me/amritafashions" },
  { id: "pi", label: "Pinterest", icon: "fa-brands fa-pinterest-p", link: "https://www.pinterest.com/amritafashions" },
  { id: "th", label: "Threads", icon: "fa-brands fa-threads", link: "https://www.threads.net/@amritafashions" },
  { id: "qo", label: "Quora", icon: "fa-brands fa-quora", link: "https://www.quora.com/profile/Amrita-Fashions" }
];

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const trustedLogos = [
    { src: "/images/brand/BCI.png", alt: "BCI Better Cotton Initiative" },
    { src: "/images/brand/confidence_Textiles.png", alt: "OEKO-TEX Standard" },
    { src: "/images/brand/ecovero.png", alt: "Lenzing EcoVero" },
    { src: "/images/brand/global.png", alt: "Global Recycled Standard" },
    { src: "/images/brand/organic.png", alt: "Organic 100 Content Standard" },
    { src: "/images/brand/gold.png", alt: "Organic 100 Content Standard" }
  ];
  const norm = (it) => `${(it?.label || "").toLowerCase().trim()}|${(it?.icon || "").toLowerCase().trim()}|${(it?.link || "").toLowerCase().replace(/\/+$/, "").trim()}`;
  const isYouTube = (it) => {
    const s = `${it?.label ?? ""} ${it?.icon ?? ""} ${it?.link ?? ""}`.toLowerCase();
    return s.includes("youtube") || s.includes("youtu.be") || s.includes("youtube.com");
  };
  const socials$1 = (() => {
    const seen = /* @__PURE__ */ new Set();
    const cleaned = (socials || []).filter((it) => {
      const key = norm(it);
      if (seen.has(key)) return false;
      seen.add(key);
      return Boolean(it?.link) && Boolean(it?.icon || it?.label);
    });
    return cleaned.slice(0, 5);
  })();
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer aria-label="Site Footer" class="age-footer" data-astro-cid-l3trhy4j> <div class="age-footer__gradient" data-astro-cid-l3trhy4j> <!-- ===== TOP ===== --> <div class="age-footer__top" data-astro-cid-l3trhy4j> <div class="age-container" data-astro-cid-l3trhy4j> <div class="age-grid" role="list" data-astro-cid-l3trhy4j> <!-- Addresses --> <div class="age-col" role="listitem" data-astro-cid-l3trhy4j> <div class="age-widget" data-astro-cid-l3trhy4j> <div class="age-addressBoard" aria-label="Company addresses" data-astro-cid-l3trhy4j> <div class="age-addressSection" data-astro-cid-l3trhy4j> <div class="age-addressTitle" data-astro-cid-l3trhy4j>Office Address</div> <div class="age-addressLines" data-astro-cid-l3trhy4j> <div data-astro-cid-l3trhy4j>404, 4th Floor, Safal Prelude,</div> <div data-astro-cid-l3trhy4j>Behind YMCA Club, Corporate Road,</div> <div data-astro-cid-l3trhy4j>Prahlad Nagar, Ahmedabad, Gujarat, India – 380015</div> </div> </div> <div class="age-addressSection" data-astro-cid-l3trhy4j> <div class="age-addressTitle" data-astro-cid-l3trhy4j>Factory Address</div> <div class="age-addressLines" data-astro-cid-l3trhy4j> <div data-astro-cid-l3trhy4j>1, Mohan Estate, Ramol Road,</div> <div data-astro-cid-l3trhy4j>Ahmedabad, Gujarat, India – 382449</div> </div> </div> <div class="age-addressSection" data-astro-cid-l3trhy4j> <div class="age-addressTitle" data-astro-cid-l3trhy4j>Warehouse Address</div> <div class="age-addressLines" data-astro-cid-l3trhy4j> <div data-astro-cid-l3trhy4j>Nr. Ambuja Synthetics, B/H Old Narol Court,</div> <div data-astro-cid-l3trhy4j>Narol, Ahmedabad, Gujarat, India – 382405</div> </div> </div> <div class="age-addressSection age--noSep" data-astro-cid-l3trhy4j> <div class="age-addressTitle" data-astro-cid-l3trhy4j>UAE Office Address</div> <div class="age-addressLines" data-astro-cid-l3trhy4j> <div data-astro-cid-l3trhy4j>GSK Worldwide FZE, Ajman Free Zone, UAE</div> </div> </div> </div> </div> </div> <!-- My Account --> <div class="age-col" role="listitem" data-astro-cid-l3trhy4j> <div class="age-widget" data-astro-cid-l3trhy4j> <h4 class="age-title" data-astro-cid-l3trhy4j>My Account</h4> <ul class="age-list" data-astro-cid-l3trhy4j> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Track Orders</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Shipping</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Wishlist</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>My Account</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Order History</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Returns</a></li> </ul> </div> </div> <!-- Information --> <div class="age-col" role="listitem" data-astro-cid-l3trhy4j> <div class="age-widget" data-astro-cid-l3trhy4j> <h4 class="age-title" data-astro-cid-l3trhy4j>Information</h4> <ul class="age-list" data-astro-cid-l3trhy4j> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Our Story</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Careers</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Privacy Policy</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Terms &amp; Conditions</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Latest News</a></li> <li data-astro-cid-l3trhy4j><a href="#" class="age-link" data-astro-cid-l3trhy4j>Contact Us</a></li> </ul> </div> </div> <!-- Talk To Us --> <div class="age-col" role="listitem" data-astro-cid-l3trhy4j> <div class="age-widget" data-astro-cid-l3trhy4j> <h4 class="age-title" data-astro-cid-l3trhy4j>Talk To Us</h4> <!-- Newsletter (no JS: button is type="button") --> <div class="age-newsMini" data-astro-cid-l3trhy4j> <p class="age-newsDesc" data-astro-cid-l3trhy4j>Subscribe to our newsletter to get the latest news and offers.</p> <form class="age-pill" action="#" method="post" data-astro-cid-l3trhy4j> <input type="email" required placeholder="Subscribe with us" aria-label="Email address" data-astro-cid-l3trhy4j> <button type="button" aria-label="Subscribe" class="age-pillBtn" data-astro-cid-l3trhy4j> <span class="age-arrow" data-astro-cid-l3trhy4j>›</span> </button> </form> </div> <!-- Phone / Email --> <div class="age-talk" data-astro-cid-l3trhy4j> <div class="age-talkRow" data-astro-cid-l3trhy4j> <span class="age-talkIcon" data-astro-cid-l3trhy4j> <!-- Phone --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-l3trhy4j> <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.84 19.84 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12.8 19.84 19.84 0 0 1 .08 4.18 2 2 0 0 1 2.06 2h2a2 2 0 0 1 2 1.72c.12.86.34 1.7.66 2.5a2 2 0 0 1-.45 2.11L5.4 9.91a16 16 0 0 0 8.69 8.69l1.58-1.87a2 2 0 0 1 2.11-.45c.8.32 1.64.54 2.5.66A2 2 0 0 1 22 16.92z" data-astro-cid-l3trhy4j></path> </svg> </span> <a class="age-talkLink" href="tel:+919925155141" data-astro-cid-l3trhy4j>+91 9925155141</a> </div> <div class="age-talkRow" data-astro-cid-l3trhy4j> <span class="age-talkIcon" data-astro-cid-l3trhy4j> <!-- Email --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-l3trhy4j> <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" data-astro-cid-l3trhy4j></path> <path d="m22 6-10 7L2 6" data-astro-cid-l3trhy4j></path> </svg> </span> <a class="age-talkLink" href="mailto:info@amrita-fashions.com" data-astro-cid-l3trhy4j>info@amrita-fashions.com</a> </div> </div> <!-- HQ quick line --> <div class="age-talkAddress" data-astro-cid-l3trhy4j> <div class="age-addrRow" data-astro-cid-l3trhy4j> <span class="age-addrPin" data-astro-cid-l3trhy4j> <!-- Location --> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-l3trhy4j> <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" data-astro-cid-l3trhy4j></path> <circle cx="12" cy="10" r="3" data-astro-cid-l3trhy4j></circle> </svg> </span> <div class="age-addrLines" data-astro-cid-l3trhy4j> <div data-astro-cid-l3trhy4j>4th Floor, Safal Prelude</div> <div data-astro-cid-l3trhy4j>404 Corporate Road, Near YMCA Club,</div> <div data-astro-cid-l3trhy4j>Prahlad Nagar, Ahmedabad, Gujarat</div> <div data-astro-cid-l3trhy4j>380015</div> </div> </div> </div> <!-- Social (wrap; no scrollbar) --> <div class="age-social" role="group" aria-label="Social links" data-astro-cid-l3trhy4j> ${socials$1.map((s) => renderTemplate`<a${addAttribute(s.id ?? norm(s), "key")}${addAttribute(s.link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(s.label || "Social link", "aria-label")}${addAttribute(s.label || void 0, "title")} class="age-socialBtn" data-astro-cid-l3trhy4j> ${isYouTube(s) ? renderTemplate`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-l3trhy4j> <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.3.5A3.1 3.1 0 0 0 .5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3.1 3.1 0 0 0 2.2 2.2c1.7.5 9.3.5 9.3.5s7.6 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8ZM9.7 15.5v-7l6 3.5-6 3.5Z" data-astro-cid-l3trhy4j></path> </svg>` : renderTemplate`<i${addAttribute(s.icon, "class")} aria-hidden="true" data-astro-cid-l3trhy4j></i>`} </a>`)} </div> </div> </div> </div> </div> </div> <!-- ===== Bottom ===== --> <div class="age-footer__bottom" data-astro-cid-l3trhy4j> <div class="age-container" data-astro-cid-l3trhy4j> <div class="age-bottomWrap" data-astro-cid-l3trhy4j> <div class="age-topbar" data-astro-cid-l3trhy4j></div> <p class="age-copy" data-astro-cid-l3trhy4j> <strong data-astro-cid-l3trhy4j>© ${year} Amrita Global Enterprises</strong> <span class="age-dot" data-astro-cid-l3trhy4j>•</span>
All rights reserved
<span class="age-dot" data-astro-cid-l3trhy4j>•</span>
Crafting quality textiles for a better tomorrow
</p> <div class="age-trust" data-astro-cid-l3trhy4j> ${trustedLogos.map((l) => renderTemplate`<div class="age-trustCard"${addAttribute(l.alt, "title")} data-astro-cid-l3trhy4j> <img${addAttribute(l.src, "src")}${addAttribute(l.alt, "alt")} width="60" height="60" loading="lazy" decoding="async" fetchpriority="low" style="width:36px;height:auto;max-height:36px;" data-astro-cid-l3trhy4j> </div>`)} </div> </div> </div> </div> </div>  </footer>`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/common/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { title = "Landing", description = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" href="/favicon.svg"><!-- Font Awesome 6 (brands/solid) --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">${renderHead()}</head> <!-- 👇 make body the flex wrapper --> <body class="page"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- 👇 main will expand to fill remaining space --> <main id="main" class="container-fluid"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/layouts/LandingLayout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const DATA = [
    { id: 1, review: 5, desc: "Fabric inspection reports and test certificates provided on request. Helped us pass third-party audits without issues.", industry: "Export Compliance Partner", location: "Jaipur, RJ", tags: ["Reports", "Certificates", "Compliance"] },
    { id: 2, review: 4.5, desc: "On-time dispatch for 10K+ meters/month with stable hand-feel on peach finish poplin. Shade lots stayed consistent across repeats.", industry: "Garment Exporter", location: "Tirupur, TN", tags: ["Online Delivery", "Peach Finish", "Bulk Orders"] },
    { id: 3, review: 5, desc: "Uniform shirting quality is predictable. GSM and shrinkage are under control which reduced our returns dramatically.", industry: "Uniform Manufacturer", location: "Ludhiana, Punjab", tags: ["GSM Control", "Shrinkage", "Low Returns"] }
  ];
  const metrics = [
    { k: "REPEAT ORDERS", v: "96%" },
    { k: "ON-TIME", v: "99.2%" },
    { k: "MONTHLY VOLUME", v: "10K+" },
    { k: "CLIENT RETENTION", v: "98%" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">', '<section id="testimonials" class="age-testi full-bleed compact" aria-labelledby="age-testi-title" data-astro-cid-y2jewyli> <div class="age-wrap" data-astro-cid-y2jewyli> <div class="age-head" data-astro-cid-y2jewyli> <div class="eyebrow" data-astro-cid-y2jewyli>WHAT OUR CUSTOMERS SAY</div> <span class="badge" data-astro-cid-y2jewyli><i data-astro-cid-y2jewyli></i>Verified Industry Feedback</span> <h2 id="age-testi-title" class="title" data-astro-cid-y2jewyli>Trusted by Fabric Buyers</h2> </div> <div class="slider-wrap" data-astro-cid-y2jewyli> ', ' <!-- dots are inside swiper; we just push them down via CSS --> </div> <div class="metrics" data-astro-cid-y2jewyli> ', ' </div> </div> <script type="module" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"><\/script>  </section>'])), maybeRenderHead(), renderComponent($$result, "swiper-container", "swiper-container", { "class": "age-swiper", "slides-per-view": "1", "space-between": "12", "loop": "true", "navigation": "true", "pagination": "true", "keyboard": "true", "autoplay": '{"delay":5200,"disableOnInteraction":false,"pauseOnMouseEnter":true}', "breakpoints": '{"640":{"slidesPerView":2,"spaceBetween":12},"1024":{"slidesPerView":3,"spaceBetween":14}}', "data-astro-cid-y2jewyli": true }, { "default": () => renderTemplate` ${DATA.map((item) => renderTemplate`${renderComponent($$result, "swiper-slide", "swiper-slide", { "class": "slide", "key": item.id, "data-astro-cid-y2jewyli": true }, { "default": () => renderTemplate` <article class="card" data-astro-cid-y2jewyli> <div class="top" data-astro-cid-y2jewyli> <div class="stars" aria-hidden="true" data-astro-cid-y2jewyli> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg width="16" height="16" viewBox="0 0 24 24"${addAttribute(i < Math.floor(item.review) ? "currentColor" : "none", "fill")} stroke="currentColor" data-astro-cid-y2jewyli> <path d="M12 2l3.09 6.26L22 9.27l-5 4.85L18.18 22 12 18.77 5.82 22 7 14.12l-5-4.85 6.91-1.01L12 2z" data-astro-cid-y2jewyli></path> </svg>`)} </div> <span class="verified" data-astro-cid-y2jewyli> <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-y2jewyli><path d="M12 2l3.09 6.26L22 9.27l-5 4.85L18.18 22 12 18.77 5.82 22 7 14.12l-5-4.85 6.91-1.01L12 2z" data-astro-cid-y2jewyli></path></svg>
VERIFIED
</span> </div> <p class="quote" data-astro-cid-y2jewyli>“${item.desc}”</p> <div class="client" data-astro-cid-y2jewyli> <div class="industry" data-astro-cid-y2jewyli>${item.industry}</div> <div class="dot" data-astro-cid-y2jewyli></div> <div class="loc" data-astro-cid-y2jewyli>${item.location}</div> </div> <div class="tags" aria-label="tags" data-astro-cid-y2jewyli> ${item.tags.slice(0, 3).map((t) => renderTemplate`<span class="chip" data-astro-cid-y2jewyli>${t}</span>`)} </div> </article> ` })}`)} ` }), metrics.map((m) => renderTemplate`<div class="mcard" data-astro-cid-y2jewyli> <div class="val" data-astro-cid-y2jewyli>${m.v}</div> <div class="key" data-astro-cid-y2jewyli>${m.k}</div> </div>`));
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/Testimonial.astro", void 0);

const $$FAQSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="faq-section" data-astro-cid-h4zmggu3> <div class="container" data-astro-cid-h4zmggu3> <div class="faq-layout" data-astro-cid-h4zmggu3> <!-- Left: Intro + CTA --> <div class="faq-intro" data-astro-cid-h4zmggu3> <p class="faq-eyebrow" data-astro-cid-h4zmggu3>FAQ • Support for your sourcing team</p> <h2 class="faq-title" data-astro-cid-h4zmggu3>Clear answers, zero friction.</h2> <p class="faq-text" data-astro-cid-h4zmggu3>
A quick snapshot of how we handle MOQ, sampling, timelines, and quality
          so your team can move faster with confidence.
</p> <ul class="faq-points" data-astro-cid-h4zmggu3> <li data-astro-cid-h4zmggu3>Realistic MOQs for brands & exporters</li> <li data-astro-cid-h4zmggu3>Structured QA + lab testing support</li> <li data-astro-cid-h4zmggu3>Custom fabric development on request</li> </ul> <div class="faq-cta-inline" data-astro-cid-h4zmggu3> <a href="/contact" class="btn" data-astro-cid-h4zmggu3>Talk to a Fabric Specialist</a> <a href="/catalog" class="btn secondary" data-astro-cid-h4zmggu3>Browse Fabric Catalog</a> </div> </div> <!-- Right: FAQ List --> <div class="faq-list" data-astro-cid-h4zmggu3> <!-- FAQ Item 1 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>What is your minimum order quantity for bulk fabric orders?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
It depends on the fabric. Standard qualities usually start from
              around 500 yards, while some custom or specialty developments can
              begin at ~300 yards. Share your target and we'll confirm the most
              practical MOQ.
</p> </div> </div> <!-- FAQ Item 2 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>Do you provide fabric samples before placing bulk orders?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
Yes. We share curated swatches so your team can check color, feel,
              and construction. Standard samples are often complimentary; custom
              developments may be adjusted against your first bulk order.
</p> </div> </div> <!-- FAQ Item 3 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>What are your payment terms for B2B fabric orders?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
Typically 50% advance and 50% before dispatch for new buyers.
              Long-term partners may qualify for structured credit terms after
              review.
</p> </div> </div> <!-- FAQ Item 4 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>How do you ensure consistent quality across large orders?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
Each lot passes through yarn checks, on-loom inspection, finishing
              control, and lab tests (shrinkage, GSM, color fastness, etc.).
              Reports or third-party inspection can be arranged on request.
</p> </div> </div> <!-- FAQ Item 5 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>What is your typical lead time from confirmation to dispatch?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
Standard repeats: approx. 4–6 weeks. New developments or complex
              finishes: 6–8 weeks. Faster slots can be discussed for priority
              programs.
</p> </div> </div> <!-- FAQ Item 6 --> <div class="faq-item" data-faq-item data-astro-cid-h4zmggu3> <button class="faq-question" type="button" aria-expanded="false" data-astro-cid-h4zmggu3> <span data-astro-cid-h4zmggu3>Do you support custom fabric development?</span> <span class="faq-icon-wrap" data-astro-cid-h4zmggu3> <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-h4zmggu3> <path d="M3 8H13M8 3V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4zmggu3></path> </svg> </span> </button> <div class="faq-answer" hidden data-astro-cid-h4zmggu3> <p data-astro-cid-h4zmggu3>
Yes. We work with your tech pack or moodboard on count, GSM,
              weave/knit, finish, and performance. Our team suggests the most
              production-friendly options to hit your cost and quality targets.
</p> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/FAQSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/FAQSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const {
    officeApi = "https://test.amrita-fashions.com/landing/officeinformation",
    heading = "Get Your Custom Quote Today",
    subheading = "Tell us what you need \u2014 we'll get back within 1 business day."
  } = Astro2.props;
  let office = null;
  try {
    const res = await fetch(officeApi, { headers: { Accept: "application/json" } });
    if (res.ok) {
      const j = await res.json();
      office = j?.data?.[0] ?? null;
    }
  } catch {
  }
  const companyName = office?.companyName ?? "Amrita Global Enterprises";
  const phone1Raw = (office?.companyPhone1 ?? "").toString();
  phone1Raw.replace(/[\u200e\u200f\u202a-\u202e]/g, "");
  (office?.companyPhone2 ?? "").toString();
  office?.companyEmail ?? "";
  office?.companyAddress ?? "";
  const logoUrl = office?.companyLogoUrl ?? "";
  (office?.whatsappNumber ?? "").replace(/\D/g, "");
  Array.isArray(office?.companyLanguages) ? office.companyLanguages : [];
  office?.companyHours || "";
  ({
    facebook: office?.facebook,
    instagram: office?.instagram,
    linkedin: office?.linkedin,
    twitter: office?.twitter,
    youtube: office?.youtube
  });
  return renderTemplate(_a || (_a = __template(["", '<section id="contact" class="contact-wrap age-testi full-bleed compact" data-astro-cid-joh4gybl> <div class="container" data-astro-cid-joh4gybl> <!-- Decorative elements --> <div class="floating-shapes" data-astro-cid-joh4gybl> <div class="shape shape-1" data-astro-cid-joh4gybl></div> <div class="shape shape-2" data-astro-cid-joh4gybl></div> <div class="shape shape-3" data-astro-cid-joh4gybl></div> </div> <header class="head" data-astro-cid-joh4gybl> <div class="header-decoration" data-astro-cid-joh4gybl> <div class="decoration-line" data-astro-cid-joh4gybl></div> <div class="decoration-dot" data-astro-cid-joh4gybl></div> <div class="decoration-line" data-astro-cid-joh4gybl></div> </div> <h2 class="h2" data-astro-cid-joh4gybl>', '</h2> <p class="lead" data-astro-cid-joh4gybl>', '</p> </header> <div class="grid" data-astro-cid-joh4gybl> <!-- LEFT: Multistep form --> <div class="card form-card" data-astro-cid-joh4gybl> <div class="card-header" data-astro-cid-joh4gybl> <h3 class="card-title" data-astro-cid-joh4gybl>Request Quote</h3> <div class="progress-track" data-astro-cid-joh4gybl> <div class="steps" aria-label="Form steps" data-astro-cid-joh4gybl> <div class="step-item" data-astro-cid-joh4gybl> <div class="step-dot is-active" data-astro-cid-joh4gybl>1</div> <span class="step-label" data-astro-cid-joh4gybl>Company</span> </div> <div class="step-connector" data-astro-cid-joh4gybl></div> <div class="step-item" data-astro-cid-joh4gybl> <div class="step-dot" data-astro-cid-joh4gybl>2</div> <span class="step-label" data-astro-cid-joh4gybl>Business</span> </div> <div class="step-connector" data-astro-cid-joh4gybl></div> <div class="step-item" data-astro-cid-joh4gybl> <div class="step-dot" data-astro-cid-joh4gybl>3</div> <span class="step-label" data-astro-cid-joh4gybl>Requirements</span> </div> </div> </div> </div> <form id="leadForm" class="form" novalidate data-astro-cid-joh4gybl> <!-- STEP 1 --> <fieldset class="step" data-step="1" data-astro-cid-joh4gybl> <legend class="step-legend" data-astro-cid-joh4gybl>Company Information</legend> <div class="form-grid" data-astro-cid-joh4gybl> <div class="field" data-astro-cid-joh4gybl> <label for="companyName" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Company Name</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <input id="companyName" name="companyName" class="input-field" required placeholder="Enter company name" data-astro-cid-joh4gybl> </div> <div class="field" data-astro-cid-joh4gybl> <label for="contactPerson" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Contact Person</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <input id="contactPerson" name="contactPerson" class="input-field" required placeholder="Full name" data-astro-cid-joh4gybl> </div> <div class="field" data-astro-cid-joh4gybl> <label for="email" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Email Address</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <input id="email" name="email" type="email" class="input-field" required placeholder="your@company.com" data-astro-cid-joh4gybl> </div> <div class="field" data-astro-cid-joh4gybl> <label for="phone" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Phone Number</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <input id="phone" name="phone" class="input-field" required placeholder="+1 (555) 000-0000" data-astro-cid-joh4gybl> </div> </div> <div class="form-actions" data-astro-cid-joh4gybl> <button type="button" class="btn btn-next" data-next data-astro-cid-joh4gybl> <span data-astro-cid-joh4gybl>Continue</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" data-astro-cid-joh4gybl> <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-joh4gybl></path> </svg> </button> </div> </fieldset> <!-- STEP 2 --> <fieldset class="step" data-step="2" hidden data-astro-cid-joh4gybl> <legend class="step-legend" data-astro-cid-joh4gybl>Business Details</legend> <div class="form-grid" data-astro-cid-joh4gybl> <div class="field" data-astro-cid-joh4gybl> <label for="businessType" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Business Type</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <select id="businessType" name="businessType" class="input-field" required data-astro-cid-joh4gybl> <option value="" data-astro-cid-joh4gybl>Select business type</option> <option value="garment-manufacturer" data-astro-cid-joh4gybl>Garment Manufacturer</option> <option value="clothing-retailer" data-astro-cid-joh4gybl>Clothing Retailer</option> <option value="fabric-importer" data-astro-cid-joh4gybl>Fabric Importer</option> <option value="trading-company" data-astro-cid-joh4gybl>Trading Company</option> <option value="export-house" data-astro-cid-joh4gybl>Export House / Buying House</option> <option value="designer" data-astro-cid-joh4gybl>Fashion Designer / Boutique</option> <option value="other" data-astro-cid-joh4gybl>Other</option> </select> </div> <div class="field" data-astro-cid-joh4gybl> <label for="annualVolume" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Annual Fabric Volume</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <select id="annualVolume" name="annualVolume" class="input-field" required data-astro-cid-joh4gybl> <option value="" data-astro-cid-joh4gybl>Select volume range</option> <option value="under-10k" data-astro-cid-joh4gybl>Under 10,000 m</option> <option value="10k-50k" data-astro-cid-joh4gybl>10,000\u201350,000 m</option> <option value="50k-100k" data-astro-cid-joh4gybl>50,000\u2013100,000 m</option> <option value="100k-500k" data-astro-cid-joh4gybl>100,000\u2013500,000 m</option> <option value="over-500k" data-astro-cid-joh4gybl>500,000+ m</option> </select> </div> <div class="field full-width" data-astro-cid-joh4gybl> <label for="primaryMarkets" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Primary Markets</span> </label> <input id="primaryMarkets" name="primaryMarkets" class="input-field" placeholder="e.g., India, EU, Middle East, USA" data-astro-cid-joh4gybl> </div> <div class="field full-width" data-astro-cid-joh4gybl> <label class="field-label" data-astro-cid-joh4gybl>Fabric Types of Interest</label> <div class="chips-grid" data-astro-cid-joh4gybl> ', ' </div> </div> </div> <div class="form-actions between" data-astro-cid-joh4gybl> <button type="button" class="btn btn-prev" data-prev data-astro-cid-joh4gybl> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" data-astro-cid-joh4gybl> <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-joh4gybl></path> </svg> <span data-astro-cid-joh4gybl>Back</span> </button> <button type="button" class="btn btn-next" data-next data-astro-cid-joh4gybl> <span data-astro-cid-joh4gybl>Continue</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" data-astro-cid-joh4gybl> <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-joh4gybl></path> </svg> </button> </div> </fieldset> <!-- STEP 3 --> <fieldset class="step" data-step="3" hidden data-astro-cid-joh4gybl> <legend class="step-legend" data-astro-cid-joh4gybl>Requirements & Timeline</legend> <div class="form-grid" data-astro-cid-joh4gybl> <div class="field full-width" data-astro-cid-joh4gybl> <label for="specifications" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Specifications & Requirements</span> </label> <textarea id="specifications" name="specifications" rows="4" class="input-field textarea-field" placeholder="Weight, width, composition, finish, shades, target price, certifications needed, etc." data-astro-cid-joh4gybl></textarea> </div> <div class="field" data-astro-cid-joh4gybl> <label for="timeline" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Timeline</span> <span class="required" data-astro-cid-joh4gybl>*</span> </label> <select id="timeline" name="timeline" class="input-field" required data-astro-cid-joh4gybl> <option value="" data-astro-cid-joh4gybl>Select timeline</option> <option value="immediate" data-astro-cid-joh4gybl>Within 1 month</option> <option value="1-3-months" data-astro-cid-joh4gybl>1\u20133 months</option> <option value="3-6-months" data-astro-cid-joh4gybl>3\u20136 months</option> <option value="6-months-plus" data-astro-cid-joh4gybl>6+ months</option> </select> </div> <div class="field full-width" data-astro-cid-joh4gybl> <label for="message" class="field-label" data-astro-cid-joh4gybl> <span class="label-text" data-astro-cid-joh4gybl>Additional Message</span> </label> <textarea id="message" name="message" rows="3" class="input-field textarea-field" placeholder="Any additional requirements or questions..." data-astro-cid-joh4gybl></textarea> </div> </div> <div class="form-actions between" data-astro-cid-joh4gybl> <button type="button" class="btn btn-prev" data-prev data-astro-cid-joh4gybl> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" data-astro-cid-joh4gybl> <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-joh4gybl></path> </svg> <span data-astro-cid-joh4gybl>Back</span> </button> <button class="btn btn-primary" type="submit" data-astro-cid-joh4gybl> <span data-astro-cid-joh4gybl>Submit Request</span> <svg class="btn-icon" viewBox="0 0 24 24" fill="none" data-astro-cid-joh4gybl> <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-joh4gybl></path> </svg> </button> </div> </fieldset> </form> </div> <!-- RIGHT: Enhanced Office Info --> <aside class="card info-card" data-astro-cid-joh4gybl> <!-- Fabric Texture Background --> <div class="fabric-texture-bg" data-astro-cid-joh4gybl> <div class="texture-overlay" data-astro-cid-joh4gybl></div> </div> <div class="card-content" data-astro-cid-joh4gybl> <!-- Company Header --> <div class="company-header" data-astro-cid-joh4gybl> ', ' <div class="company-info" data-astro-cid-joh4gybl> <h3 class="company-name" data-astro-cid-joh4gybl>', '</h3> <p class="company-tagline" data-astro-cid-joh4gybl>Premium Fabric Solutions</p> </div> </div> <!-- Why Choose Us Section --> <div class="features-section" data-astro-cid-joh4gybl> <h4 class="section-title" data-astro-cid-joh4gybl>Why Choose Us?</h4> <div class="features-grid" data-astro-cid-joh4gybl> <div class="feature-card" data-astro-cid-joh4gybl> <div class="feature-icon-wrapper" data-astro-cid-joh4gybl> <div class="feature-icon quality" data-astro-cid-joh4gybl></div> </div> <div class="feature-content" data-astro-cid-joh4gybl> <h5 class="feature-title" data-astro-cid-joh4gybl>Quality Certified</h5> <p class="feature-description" data-astro-cid-joh4gybl>ISO certified standards with rigorous quality control processes</p> </div> </div> <div class="feature-card" data-astro-cid-joh4gybl> <div class="feature-icon-wrapper" data-astro-cid-joh4gybl> <div class="feature-icon pricing" data-astro-cid-joh4gybl></div> </div> <div class="feature-content" data-astro-cid-joh4gybl> <h5 class="feature-title" data-astro-cid-joh4gybl>Competitive Pricing</h5> <p class="feature-description" data-astro-cid-joh4gybl>Best market prices with attractive volume-based discounts</p> </div> </div> <div class="feature-card" data-astro-cid-joh4gybl> <div class="feature-icon-wrapper" data-astro-cid-joh4gybl> <div class="feature-icon support" data-astro-cid-joh4gybl></div> </div> <div class="feature-content" data-astro-cid-joh4gybl> <h5 class="feature-title" data-astro-cid-joh4gybl>24/7 Support</h5> <p class="feature-description" data-astro-cid-joh4gybl>Dedicated account managers and round-the-clock technical support</p> </div> </div> </div> </div> <!-- Contact Information --> </div> </aside> </div> </div> <!-- JSON-LD --> <script type="application/ld+json">\n    {JSON.stringify({\n      "@context": "https://schema.org",\n      "@type": "Organization",\n      "name": companyName,\n      "logo": logoUrl || undefined,\n      "contactPoint": [{\n        "@type":"ContactPoint",\n        "telephone": phone1 || undefined,\n        "email": email || undefined,\n        "contactType":"customer support",\n        "areaServed":"IN",\n        "availableLanguage": languages\n      }],\n      "address": address ? { "@type":"PostalAddress", "streetAddress": address } : undefined\n    })}\n  <\/script>  </section>'])), maybeRenderHead(), heading, subheading, ["Cotton", "Silk", "Polyester", "Blends", "Linen", "Wool", "Technical", "Denim", "Knit", "Woven"].map((t) => renderTemplate`<label class="chip" data-astro-cid-joh4gybl> <input type="checkbox" name="fabricTypes"${addAttribute(t, "value")} data-astro-cid-joh4gybl> <span class="chip-label" data-astro-cid-joh4gybl>${t}</span> </label>`), logoUrl && renderTemplate`<img class="company-logo"${addAttribute(logoUrl, "src")}${addAttribute(companyName, "alt")} loading="lazy" data-astro-cid-joh4gybl>`, companyName);
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/ContactSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$RelatedProductsByLocation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedProductsByLocation;
  const { currentSlug, cityCode, title = "Explore Our Fabric Catalog", subtitle } = Astro2.props;
  const norm = (s) => String(s ?? "").trim().toLowerCase();
  const toId = (v) => typeof v === "string" ? v.trim() : v?._id ? String(v._id).trim() : "";
  const BASE = "/".replace(/\/+$/, "");
  function cityTokenInSlug(slug, city) {
    const c = norm(city).replace(/\s+/g, "-");
    const re = new RegExp(`(^|-)${c}(-|$)`, "i");
    return re.test(String(slug || "").toLowerCase());
  }
  async function fetchJson(url) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }
  const API_ROOT = ("https://test.amrita-fashions.com/landing").replace(/\/+$/, "");
  const SEO_URL = `${API_ROOT}/seo`;
  const PRODUCT_URL = `${API_ROOT}/product`;
  const LOC_URL = `${API_ROOT}/locations`;
  const [seoJson, prodJson, locJson] = await Promise.all([
    fetchJson(SEO_URL),
    fetchJson(PRODUCT_URL),
    fetchJson(LOC_URL)
  ]);
  const seos = Array.isArray(seoJson?.data) ? seoJson.data : [];
  const allProducts = Array.isArray(prodJson?.data) ? prodJson.data : Array.isArray(prodJson?.data?.products) ? prodJson.data.products : Array.isArray(prodJson) ? prodJson : [];
  const rawLocs = locJson?.data?.locations ?? locJson?.data ?? locJson?.locations ?? [];
  const locs = Array.isArray(rawLocs) ? rawLocs : [];
  let targetLocId = "";
  let targetCode = "";
  let heroProductId = "";
  if (currentSlug) {
    const row = seos.find((r) => norm(r?.slug) === norm(currentSlug));
    if (row) {
      targetLocId = toId(row.location);
      targetCode = norm(row.locationCode);
      heroProductId = toId(row.product);
    } else {
      const cityFromSlug = (() => {
        const m = String(currentSlug).toLowerCase().match(/-([a-z]+)$/i);
        return m?.[1] || null;
      })();
      if (cityFromSlug) targetCode = cityFromSlug;
    }
  } else if (cityCode) {
    const loc = locs.find(
      (l) => norm(l?.slug) === norm(cityCode) || norm(l?.name) === norm(cityCode) || norm(l?.code) === norm(cityCode)
    );
    targetLocId = toId(loc);
    targetCode = norm(loc?.code) || norm(cityCode);
  }
  function sameLocation(s) {
    const locId = toId(s?.location);
    const code = norm(s?.locationCode);
    if (targetLocId && locId) return targetLocId === locId;
    if (targetCode && code) return targetCode === code;
    const hint = targetCode || cityCode || "";
    return hint ? cityTokenInSlug(String(s?.slug || ""), hint) : false;
  }
  const slugByProduct = /* @__PURE__ */ new Map();
  const productIds = /* @__PURE__ */ new Set();
  for (const s of seos) {
    const pid = toId(s.product);
    const sSlug = String(s?.slug ?? "").trim();
    if (!pid || !sSlug) continue;
    if (sameLocation(s)) {
      productIds.add(pid);
      slugByProduct.set(pid, sSlug);
    } else if (!slugByProduct.has(pid)) {
      slugByProduct.set(pid, sSlug);
    }
  }
  const related = allProducts.filter((p) => productIds.has(String(p?._id)));
  const gridProducts = heroProductId ? related.filter((p) => String(p?._id) !== heroProductId) : related;
  return renderTemplate`${maybeRenderHead()}<section class="fabric-catalog" id="products" data-astro-cid-ndtzsanx> <div class="catalog-container" data-astro-cid-ndtzsanx> <div class="catalog-header" data-astro-cid-ndtzsanx> <h2 class="catalog-title" data-astro-cid-ndtzsanx>${title}</h2> ${subtitle && renderTemplate`<p class="catalog-subtitle" data-astro-cid-ndtzsanx>${subtitle}</p>`} </div> ${gridProducts.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-ndtzsanx> <div class="empty-icon" data-astro-cid-ndtzsanx>📦</div> <h3 data-astro-cid-ndtzsanx>No Products Available</h3> <p data-astro-cid-ndtzsanx>No related products found for this location.</p> </div>` : renderTemplate`<div class="products-grid" data-astro-cid-ndtzsanx> ${gridProducts.map((p) => {
    const pid = String(p?._id ?? "").trim();
    const slug = slugByProduct.get(pid) || p?.slug || "";
    const href = slug ? `${BASE}/${encodeURIComponent(slug)}` : "#";
    const img = p?.img || p?.image1 || p?.image2 || "/placeholder.svg?height=500&width=600";
    const name = p?.name || "Fabric";
    const desc = (p?.productdescription || "").toString();
    return renderTemplate`<article class="product-card"${addAttribute(pid, "key")} data-astro-cid-ndtzsanx> <div class="card-image" data-astro-cid-ndtzsanx> <a${addAttribute(href, "href")} class="image-link" data-astro-cid-ndtzsanx> <img${addAttribute(img, "src")}${addAttribute(name, "alt")} loading="lazy" class="product-image" data-astro-cid-ndtzsanx> <div class="image-overlay" data-astro-cid-ndtzsanx></div> </a> </div> <div class="card-content" data-astro-cid-ndtzsanx> <h3 class="product-name" data-astro-cid-ndtzsanx> <a${addAttribute(href, "href")} data-astro-cid-ndtzsanx>${name}</a> </h3> <p class="product-description" data-astro-cid-ndtzsanx>${desc}</p> <div class="card-actions" data-astro-cid-ndtzsanx> <a class="view-details"${addAttribute(href, "href")} data-astro-cid-ndtzsanx> <span data-astro-cid-ndtzsanx>View Details</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-ndtzsanx> <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ndtzsanx></path> </svg> </a> </div> </div> </article>`;
  })} </div>`} </div> </section> `;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/RelatedProductsByLocation.astro", void 0);

const $$Astro = createAstro();
const $$OverviewSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OverviewSection;
  const { currentSlug = null, seoApi, productApi } = Astro2.props;
  const RAW_BASE = ("https://test.amrita-fashions.com/landing").replace(/\/+$/, "");
  const SEO_URL = (seoApi ?? `${RAW_BASE}/seo`).replace(/\/+$/, "");
  const PRODUCT_URL = (productApi ?? `${RAW_BASE}/product`).replace(/\/+$/, "");
  const headers = { Accept: "application/json" };
  const safe = (v) => v == null ? "" : String(v);
  const norm = (s) => safe(s).trim().toLowerCase();
  const toId = (v) => typeof v === "string" ? v.trim() : v && v._id ? String(v._id).trim() : "";
  const pickHtml = (o) => {
    if (!o) return "";
    const c = [
      o.productlocationdescription1,
      o.productlocationdescription2,
      o.description_html,
      o.productdescription,
      o.description1,
      o.description2,
      o.description3
    ];
    for (const x of c) {
      if (typeof x === "string" && x.trim()) return x.trim();
    }
    return "";
  };
  const cleanHtml = (s) => s.replace(/^\s*\.\s*$/gm, "");
  async function fetchJson(url) {
    try {
      const r = await fetch(url, { headers });
      if (!r.ok) return null;
      return await r.json();
    } catch {
      return null;
    }
  }
  const [seoJson, prodJson] = await Promise.all([fetchJson(SEO_URL), fetchJson(PRODUCT_URL)]);
  const seos = Array.isArray(seoJson?.data) ? seoJson.data : Array.isArray(seoJson) ? seoJson : [];
  const prods = Array.isArray(prodJson?.data) ? prodJson.data : Array.isArray(prodJson) ? prodJson : [];
  function pickSeo() {
    if (!seos.length) return null;
    if (currentSlug) {
      const bySlug = seos.find((s) => norm(s?.slug) === norm(currentSlug));
      if (bySlug) return bySlug;
    }
    return seos.find((s) => s?.landingPageProduct) ?? seos[0] ?? null;
  }
  const seo = pickSeo();
  function pickProduct() {
    if (!prods.length) return null;
    const pid = toId(seo?.product);
    if (pid) {
      const byId = prods.find((p) => toId(p?._id) === pid);
      if (byId) return byId;
    }
    if (seo?.slug) {
      const bySlug = prods.find((p) => norm(p?.slug) === norm(seo.slug));
      if (bySlug) return bySlug;
    }
    return prods.find((p) => p?.landingPageProduct) ?? prods[0] ?? null;
  }
  const product = pickProduct();
  const STATIC_HEADING = "Leading B2B Fabric Supplier Worldwide";
  const STATIC_TAGLINE = "ISO 9001 Certified • 500+ Global Partners • Ships to 50+ Countries";
  const p1 = cleanHtml(pickHtml(seo) || pickHtml(product) || "");
  const p2 = cleanHtml(seo?.productlocationdescription2 || product?.productlocationdescription2 || "");
  const image = product?.image2 || product?.image1 || product?.img || "";
  const imageAlt = seo?.title || product?.name || "Fabric image";
  return renderTemplate`${maybeRenderHead()}<section class="ov" id="aboutus" data-astro-cid-qdewvmph> <div class="wrap" data-astro-cid-qdewvmph> <header class="head" data-astro-cid-qdewvmph> <h2 class="title" data-astro-cid-qdewvmph>${STATIC_HEADING}</h2> <p class="tag" data-astro-cid-qdewvmph>${STATIC_TAGLINE}</p> <i class="bar" aria-hidden="true" data-astro-cid-qdewvmph></i> </header> <div class="grid" data-astro-cid-qdewvmph> <div class="copy" data-astro-cid-qdewvmph> ${p1 && renderTemplate`<div class="txt" data-astro-cid-qdewvmph>${unescapeHTML(p1)}</div>`} ${p2 && renderTemplate`<div class="txt mt" data-astro-cid-qdewvmph>${unescapeHTML(p2)}</div>`} <!-- Stats only (CTA removed) --> <div class="stats" role="list" data-astro-cid-qdewvmph> <div class="stat" role="listitem" aria-label="500 plus global partners" data-astro-cid-qdewvmph> <span class="num" data-astro-cid-qdewvmph>500+</span> <span class="lbl" data-astro-cid-qdewvmph>Global Partners</span> </div> <div class="stat" role="listitem" aria-label="50 plus countries served" data-astro-cid-qdewvmph> <span class="num" data-astro-cid-qdewvmph>50+</span> <span class="lbl" data-astro-cid-qdewvmph>Countries Served</span> </div> </div> </div> ${image && renderTemplate`<figure class="media" data-astro-cid-qdewvmph> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")}${addAttribute(imageAlt, "title")} loading="lazy" decoding="async" width="1024" height="768" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 640px" data-astro-cid-qdewvmph> </figure>`} </div> </div>  </section>`;
}, "C:/Users/madhu/OneDrive/Desktop/astro-landing/src/components/sections/OverviewSection.astro", void 0);

export { $$LandingLayout as $, $$OverviewSection as a, $$RelatedProductsByLocation as b, $$Testimonial as c, $$FAQSection as d, $$ContactSection as e };
