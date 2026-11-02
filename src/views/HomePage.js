// Authentic Junca Studio Reverse Engineered Architecture for Arka Technovation
import { gsap } from 'gsap';

export function renderHomePage() {
  return `
    <div class="chrome-root">
<div data-astro-transition-persist="chrome" class="chrome-root"><div class="nx-frost" aria-hidden="true" data-nx-frost data-astro-cid-5b5tzl64></div><header class="nx" data-nx data-scr-skip data-astro-cid-5b5tzl64><a class="nx__cell nx__logo" href="/" aria-label="Arka Technovation Home" data-astro-cid-5b5tzl64><img src="/assets/arka-icon.svg" alt="Arka Technovation" width="120" height="17" data-astro-cid-5b5tzl64></a><div class="nx__group" data-nx-anchor data-astro-cid-5b5tzl64><button class="nx__cell nx__item nx__trig" type="button" data-nx-trig="services" aria-expanded="false" aria-controls="nx-services" data-nx-hot data-astro-cid-5b5tzl64>Services<svg class="nx__btn" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path class="nx__btn-box" d="M.5.5h13l6 6v13H.5z"/><path class="nx__btn-chev" d="m6.5 8.5 3.5 3.5 3.5-3.5"/></svg></button><button class="nx__cell nx__item nx__trig" type="button" data-nx-trig="industries" aria-expanded="false" aria-controls="nx-industries" data-nx-hot data-astro-cid-5b5tzl64>Industries<svg class="nx__btn" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path class="nx__btn-box" d="M.5.5h13l6 6v13H.5z"/><path class="nx__btn-chev" d="m6.5 8.5 3.5 3.5 3.5-3.5"/></svg></button><a class="nx__cell nx__item nx__link" href="/projects" data-nx-hot data-astro-cid-5b5tzl64>Projects</a><a class="nx__cell nx__item nx__link" href="/studio" data-nx-hot data-astro-cid-5b5tzl64>Studio</a><a class="nx__cell nx__item nx__link" href="/news" data-nx-hot data-astro-cid-5b5tzl64>News</a></div><span class="nx__fill" data-astro-cid-5b5tzl64></span><a class="nx__cell nx__link nx__contact" href="/contact-us" data-nx-hot data-astro-cid-5b5tzl64>Contact</a><span class="nx__cta-place" aria-hidden="true" data-astro-cid-5b5tzl64></span><button class="nx__cell nx__burger" type="button" data-nx-drawer-toggle aria-expanded="false" aria-controls="nx-drawer" data-astro-cid-5b5tzl64><span class="nx__lines" aria-hidden="true" data-astro-cid-5b5tzl64><i data-astro-cid-5b5tzl64></i><i data-astro-cid-5b5tzl64></i></span><span class="nx__mot-menu" data-astro-cid-5b5tzl64>Menu</span><span class="nx__mot-close" data-astro-cid-5b5tzl64>Close</span></button></header><a class="nx-cta" href="/contact-us" data-nx-cta data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Start a project</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a><div class="nx-panels" data-nx-panels data-scr-skip data-astro-cid-5b5tzl64><div class="nx__panel" id="nx-services" data-nx-panel="services" data-active="websites" inert data-astro-cid-5b5tzl64><div class="nx__cols" data-astro-cid-5b5tzl64><ul class="nx__col" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/websites" data-nx-cat="websites" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Websites</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/3d-motion" data-nx-cat="3d" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>3D &amp; Motion</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:2" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/branding" data-nx-cat="brand" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Brand</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:3" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/fundraising" data-nx-cat="fundraising" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Fundraising</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:4" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/seo-geo" data-nx-cat="search" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>SEO &amp; GEO</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:5" data-astro-cid-5b5tzl64><a class="nx__row nx__row--muted" href="/services" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>All services</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><div class="nx__col" data-astro-cid-5b5tzl64><ul class="nx__list" data-nx-group="websites" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row nx__row--hub" href="/services/websites" data-nx-page="" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Websites overview</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/web-design" data-nx-page="websites--0" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Web design &amp; UX</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:2" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/framer-development" data-nx-page="websites--1" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Framer development</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:3" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/custom-development" data-nx-page="websites--2" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Custom development</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:4" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/website-migration" data-nx-page="websites--3" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Website migration</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:5" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/3d-websites" data-nx-page="websites--4" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>3D websites</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><ul class="nx__list" data-nx-group="3d" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row nx__row--hub" href="/services/3d-motion" data-nx-page="" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>3D &amp; Motion overview</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/3d-websites" data-nx-page="3d--0" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>3D websites</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:2" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/3d-product-visualization" data-nx-page="3d--1" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>3D product visualization</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:3" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/product-films" data-nx-page="3d--2" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Product films</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><ul class="nx__list" data-nx-group="brand" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/branding" data-nx-page="brand--0" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Brand identity for tech</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/rebranding" data-nx-page="brand--1" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Rebranding</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><ul class="nx__list" data-nx-group="fundraising" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/fundraising" data-nx-page="fundraising--0" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Pitch deck &amp; investor kit</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/investor-ready-website" data-nx-page="fundraising--1" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Investor-ready website</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><ul class="nx__list" data-nx-group="search" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/seo-geo" data-nx-page="search--0" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>SEO &amp; AI search</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/services/website-audit" data-nx-page="search--1" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Website audit</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul></div><div class="nx__col nx__aside" data-astro-cid-5b5tzl64><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="websites" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Designed and built by the same team, in Framer or in code.</figcaption><a class="nx__fig-link" href="/services/websites" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/fb0e864aee967b2ad2667043670456ec7789f7f3-3840x2160.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>BotBlox · robotics hardware</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="3d" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Modeled in Blender, built for the browser.</figcaption><a class="nx__fig-link" href="/services/3d-motion" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="/images/services/3d-websites/header-lettres.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Junca letters · Blender</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="brand" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>An identity that has caught up with the technology.</figcaption><a class="nx__fig-link" href="/services/branding" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="/images/projects/blink/cover.webp?scale-down-to=1024" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Blink · AI automation</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="fundraising" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>From pitch deck to investor-ready website, before your round.</figcaption><a class="nx__fig-link" href="/services/fundraising" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="/images/services/fundraising/header.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Specimen deck · fictional company</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="search" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Found on Google and quoted by AI assistants.</figcaption><a class="nx__fig-link" href="/services/seo-geo" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="/images/home/services-seo-geo.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Junca Studio, cited by ChatGPT</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="websites--0" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Structure, story and interface for complex products.</figcaption><a class="nx__fig-link" href="/services/web-design" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/b2cd415ec84528d2735356ddce70848eca356fc4-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Web design &amp; UX</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="websites--1" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>A premium site your team edits alone.</figcaption><a class="nx__fig-link" href="/services/framer-development" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/da684ca77cd4f955827ab91d618bf512b7744600-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Framer development</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="websites--2" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Immersive, fast and exact, when a builder is not enough.</figcaption><a class="nx__fig-link" href="/services/custom-development" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/7e9dfca3e73b1486e25c784ffc0591018bb76676-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Custom development</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="websites--3" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Webflow to Framer, Framer to code, rankings kept.</figcaption><a class="nx__fig-link" href="/services/website-migration" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/e8017421f8059f8868af486289906522685e83b4-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Website migration</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="websites--4" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Real-time 3D that explains the product.</figcaption><a class="nx__fig-link" href="/services/3d-websites" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/6ce3083f95e4dbe2504761b31af790d82ffe1e6e-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>3D websites</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="3d--0" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Real-time 3D that explains the product.</figcaption><a class="nx__fig-link" href="/services/3d-websites" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/6ce3083f95e4dbe2504761b31af790d82ffe1e6e-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>3D websites</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="3d--1" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>From CAD to renders, exploded views and viewers.</figcaption><a class="nx__fig-link" href="/services/3d-product-visualization" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/637845cb7f820cbdb70735e5bb4aa85c72f822ad-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>3D product visualization</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="3d--2" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Rendered films for launches, decks and trade shows.</figcaption><a class="nx__fig-link" href="/services/product-films" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/8545c156c6c5f1c277e00ce00e8285db3ef7f165-1920x1080.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Product films</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="brand--0" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Logo, type, color and art direction.</figcaption><a class="nx__fig-link" href="/services/branding" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/298277ebeab902e8c53d14bf19120f92b7114066-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Brand identity for tech</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="brand--1" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>When the product has outgrown its brand.</figcaption><a class="nx__fig-link" href="/services/rebranding" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/4a4f43c0635482f7508138549c6d499a7d316c27-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Rebranding</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="fundraising--0" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Equity story, teaser, pitch deck, detailed deck and one-pager.</figcaption><a class="nx__fig-link" href="/services/fundraising" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/c125ed90b6c0a96df8600f7a460894caa25996c2-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Pitch deck &amp; investor kit</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="fundraising--1" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>The site investors check after the first meeting.</figcaption><a class="nx__fig-link" href="/services/investor-ready-website" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/28a4b8bcd728e8ab7368a2e40fb87c6c5a751443-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Investor-ready website</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="search--0" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Technical SEO, content and GEO for tech companies.</figcaption><a class="nx__fig-link" href="/services/seo-geo" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/e3f94d84299b59aeb1b854b1cf2ba1b9e818406e-2400x1600.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>SEO &amp; AI search</p></figure><figure class="nx__fig nx__fig--page" data-nx-pvis="search--1" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Speed, structure and search, measured and ranked.</figcaption><a class="nx__fig-link" href="/services/website-audit" tabindex="-1" aria-hidden="true" data-astro-cid-5b5tzl64><img src="https://cdn.sanity.io/images/j2nbmkw7/production/6185a32469e107b4a4df1052f3b77982eae0e099-2560x1440.webp?w=900&amp;auto=format" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64></a><p class="nx__cap" data-astro-cid-5b5tzl64>Website audit</p></figure></div></div></div><div class="nx__panel" id="nx-industries" data-nx-panel="industries" data-active="/industries/deeptech" inert data-astro-cid-5b5tzl64><div class="nx__cols nx__cols--ind" data-astro-cid-5b5tzl64><ul class="nx__col" data-astro-cid-5b5tzl64><li class="nx__rise" style="--i:0" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/deeptech" data-nx-ind="/industries/deeptech" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>DeepTech</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:1" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/climate-tech" data-nx-ind="/industries/climate-tech" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Climate Tech</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:2" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/ai-automation" data-nx-ind="/industries/ai-automation" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>AI &amp; Data</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:3" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/industries-manufacturing" data-nx-ind="/industries/industries-manufacturing" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Industry 4.0</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:4" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/robotics-hardware" data-nx-ind="/industries/robotics-hardware" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Robotics &amp; Hardware</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:5" data-astro-cid-5b5tzl64><a class="nx__row" href="/industries/saas" data-nx-ind="/industries/saas" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>SaaS B2B</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li><li class="nx__rise" style="--i:6" data-astro-cid-5b5tzl64><a class="nx__row nx__row--muted" href="/industries" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>All industries</span><svg class="nx__ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></li></ul><div class="nx__col nx__aside" data-astro-cid-5b5tzl64><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/deeptech" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/deeptech-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>DeepTech</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/climate-tech" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/climate-tech-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>Climate Tech</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/ai-automation" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/ai-automation-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>AI &amp; Data</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/industries-manufacturing" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/industries-manufacturing-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>Industry 4.0</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/robotics-hardware" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/robotics-hardware-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>Robotics &amp; Hardware</p></figure><figure class="nx__fig nx__rise" style="--i:2" data-nx-vis="/industries/saas" data-astro-cid-5b5tzl64><figcaption data-astro-cid-5b5tzl64>Websites for companies whose technology is hard to show.</figcaption><img src="/images/industries/saas-sm.webp" alt="" loading="lazy" decoding="async" data-astro-cid-5b5tzl64><p class="nx__cap" data-astro-cid-5b5tzl64>SaaS B2B</p></figure></div></div></div></div>
<div class="nx-scrim" data-nx-scrim data-astro-cid-5b5tzl64></div><div class="nx-drawer" id="nx-drawer" data-nx-drawer data-scr-skip inert data-astro-cid-5b5tzl64><nav class="nxd" aria-label="Menu" data-astro-cid-5b5tzl64><details class="nxd__acc" style="--i:0" data-astro-cid-5b5tzl64><summary class="nxd__ligne" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Services</span><svg class="nx__btn" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path class="nx__btn-box" d="M.5.5h13l6 6v13H.5z"/><path class="nx__btn-chev" d="m6.5 8.5 3.5 3.5 3.5-3.5"/></svg></summary><div class="nxd__sous" data-astro-cid-5b5tzl64><a href="/services/websites" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Websites</b><em class="nxd__m" data-astro-cid-5b5tzl64>5 services</em></a><a href="/services/3d-motion" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>3D &amp; Motion</b><em class="nxd__m" data-astro-cid-5b5tzl64>3 services</em></a><a href="/services/branding" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Brand</b><em class="nxd__m" data-astro-cid-5b5tzl64>2 services</em></a><a href="/services/fundraising" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Fundraising</b><em class="nxd__m" data-astro-cid-5b5tzl64>2 services</em></a><a href="/services/seo-geo" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>SEO &amp; GEO</b><em class="nxd__m" data-astro-cid-5b5tzl64>2 services</em></a><a class="nxd__tous nxd__m" href="/services" data-astro-cid-5b5tzl64>All services</a></div></details><details class="nxd__acc" style="--i:1" data-astro-cid-5b5tzl64><summary class="nxd__ligne" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Industries</span><svg class="nx__btn" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path class="nx__btn-box" d="M.5.5h13l6 6v13H.5z"/><path class="nx__btn-chev" d="m6.5 8.5 3.5 3.5 3.5-3.5"/></svg></summary><div class="nxd__sous" data-astro-cid-5b5tzl64><a href="/industries/deeptech" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>DeepTech</b></a><a href="/industries/climate-tech" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Climate Tech</b></a><a href="/industries/ai-automation" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>AI &amp; Data</b></a><a href="/industries/industries-manufacturing" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Industry 4.0</b></a><a href="/industries/robotics-hardware" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>Robotics &amp; Hardware</b></a><a href="/industries/saas" data-astro-cid-5b5tzl64><b data-astro-cid-5b5tzl64>SaaS B2B</b></a><a class="nxd__tous nxd__m" href="/industries" data-astro-cid-5b5tzl64>All industries</a></div></details><a class="nxd__ligne" href="/projects" style="--i:2" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Projects</span></a><a class="nxd__ligne" href="/studio" style="--i:3" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Studio</span></a><a class="nxd__ligne" href="/news" style="--i:4" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>News</span></a><a class="nxd__ligne" href="/contact-us" style="--i:5" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Contact</span></a></nav><a class="nxd__vitrine" href="/projects/hylight" style="--i:6" data-astro-cid-5b5tzl64><span class="nxd__img" data-astro-cid-5b5tzl64><img data-src="https://cdn.sanity.io/images/j2nbmkw7/production/28a4b8bcd728e8ab7368a2e40fb87c6c5a751443-2560x1440.webp?w=800&amp;auto=format" alt="The Hylight website by Junca on a computer and a phone: an airship above a forest, and the investors who back the company on the first screen" width="800" height="450" decoding="async" data-astro-cid-5b5tzl64></span><span class="nxd__cap" data-astro-cid-5b5tzl64><span data-astro-cid-5b5tzl64>Hylight, hydrogen airships</span><span class="nxd__m" data-astro-cid-5b5tzl64>Featured project</span></span></a><span class="nxd__vide" data-astro-cid-5b5tzl64></span><div class="nxd__bas" style="--i:7" data-astro-cid-5b5tzl64><a class="nxd__appel" href="/contact-us" data-astro-cid-5b5tzl64>Start a project</a><div class="nxd__pied nxd__m" data-astro-cid-5b5tzl64><a href="mailto:contact@arkatechnovation.com" data-astro-cid-5b5tzl64>contact@arkatechnovation.com</a><span data-astro-cid-5b5tzl64><a href="https://www.linkedin.com/company/junca/" target="_blank" rel="noopener" data-astro-cid-5b5tzl64>LinkedIn</a> · <a href="https://x.com/Junca_Studio" target="_blank" rel="noopener" data-astro-cid-5b5tzl64>X</a></span></div></div>
    </div>

    <main id="top" class="main-flow page-white text-black relative z-20">

<section class="hero hero--robot theme-dark" data-hero id="home-hero">
  <div id="robot-app" aria-hidden="true"></div>
  <div id="robot-chargement" aria-hidden="true"></div>
  <button id="robot-son" class="rson" type="button" aria-pressed="false" aria-label="Sound: on" hidden>
    <svg class="rson__svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <g data-son-turbine fill="currentColor">
        <path d="M12 12 C 13.6 8.6, 13.2 4.6, 10.1 2.5 C 15.6 2, 19.3 6.4, 18.7 10.6 C 16.6 11.7, 14.2 12.1, 12 12 Z"></path>
        <path d="M12 12 C 13.6 8.6, 13.2 4.6, 10.1 2.5 C 15.6 2, 19.3 6.4, 18.7 10.6 C 16.6 11.7, 14.2 12.1, 12 12 Z" transform="rotate(120 12 12)"></path>
        <path d="M12 12 C 13.6 8.6, 13.2 4.6, 10.1 2.5 C 15.6 2, 19.3 6.4, 18.7 10.6 C 16.6 11.7, 14.2 12.1, 12 12 Z" transform="rotate(240 12 12)"></path>
        <circle cx="12" cy="12" r="2.1"></circle>
      </g>
    </svg>
    <span class="rson__mot">Sound</span>
  </button>
  <div class="container hero__content">
    <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-widest text-[#FF9900] mb-6">
      <span class="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
      <span>ARKA TECHNOVATION • NOIDA, DELHI NCR</span>
    </div>
    <h1 class="hero__title" data-hero-titre data-scr-skip>
      We engineer digital dominance for ambitious tech companies.
    </h1>
    <p style="font-size: clamp(1rem, 1.25vw, 1.25rem); color: rgba(255,255,255,0.8); max-width: 680px; line-height: 1.6; margin-top: 1.5rem; font-weight: 300;">
      Architecting mission-critical cloud software, commanding search engine authority, deploying high-ROAS performance engines, and producing cinematic corporate films.
    </p>
    <div style="margin-top: 2.25rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <a href="/contact-us" class="cta cta--light" style="--cta-w: 240px;">
        <span class="cta__text">
          <span class="cta__label">Initiate Engagement</span>
          <span class="cta__label cta__label--hover" aria-hidden="true">Initiate Engagement</span>
        </span>
        <svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
      </a>
      <a href="/services" class="cta cta--ink" style="--cta-w: 220px; border: 1px solid rgba(255,255,255,0.25); color: #fff;">
        <span class="cta__text">
          <span class="cta__label">Explore Capabilities</span>
          <span class="cta__label cta__label--hover" aria-hidden="true">Explore Capabilities</span>
        </span>
        <svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
      </a>
    </div>
  </div>
  <div class="hbar hbar--fixed">
    <span class="hbar__copy">©2026 ARKA TECHNOVATION • NOIDA HQ</span>
    <span class="hbar__clock">
      <span class="hbar__tz">(IST)</span>
      <span class="hbar__time" data-clock>--:--:-- --</span>
    </span>
  </div>
</section>

<section class="clients container" data-suite><div class="clients__intro" data-scr-skip><p class="clients__label">OUR CLIENTS</p><p class="clients__text">Y Combinator startups, industrial companies, US hardware manufacturers: they build technologies that reshape their industry. We build the websites that make them visible.</p></div><div class="marquee" role="group" aria-label="Our clients"><ul class="marquee__track"><li><img src="/assets/black-deloitte.png" alt="Alt-a" width="79" height="29" style="width:79px;height:29px"></li><li><img src="/assets/black-banca-sella.png" alt="Artefact" width="112" height="27" style="width:112px;height:27px"></li><li><img src="/assets/black-samso.png" alt="BotBlox Systems" width="232" height="29" style="width:232px;height:29px"></li><li><img src="/assets/black-bikeroom.png" alt="Kestrix" width="76" height="57" style="width:76px;height:57px"></li><li><img src="/assets/black-tag.png" alt="Une Autre Île Productions" width="144" height="40" style="width:144px;height:40px"></li><li><img src="/assets/black-beyond-doc.png" alt="Blushmed Studio" width="124" height="33" style="width:124px;height:33px"></li><li><img src="/assets/black-cercacasa.png" alt="Hylight" width="94" height="29" style="width:94px;height:29px"></li><li><img src="/assets/black-vitesicure.png" alt="Skipper NDT" width="178" height="23" style="width:178px;height:23px"></li><li><img src="/assets/black-deloitte.png" alt="Blink" width="112" height="36" style="width:112px;height:36px"></li><li aria-hidden="true"><img src="/assets/black-deloitte.png" alt="Alt-a" width="79" height="29" style="width:79px;height:29px"></li><li aria-hidden="true"><img src="/assets/black-banca-sella.png" alt="Artefact" width="112" height="27" style="width:112px;height:27px"></li><li aria-hidden="true"><img src="/assets/black-samso.png" alt="BotBlox Systems" width="232" height="29" style="width:232px;height:29px"></li><li aria-hidden="true"><img src="/assets/black-bikeroom.png" alt="Kestrix" width="76" height="57" style="width:76px;height:57px"></li><li aria-hidden="true"><img src="/assets/black-tag.png" alt="Une Autre Île Productions" width="144" height="40" style="width:144px;height:40px"></li><li aria-hidden="true"><img src="/assets/black-beyond-doc.png" alt="Blushmed Studio" width="124" height="33" style="width:124px;height:33px"></li><li aria-hidden="true"><img src="/assets/black-cercacasa.png" alt="Hylight" width="94" height="29" style="width:94px;height:29px"></li><li aria-hidden="true"><img src="/assets/black-vitesicure.png" alt="Skipper NDT" width="178" height="23" style="width:178px;height:23px"></li><li aria-hidden="true"><img src="/assets/black-deloitte.png" alt="Blink" width="112" height="36" style="width:112px;height:36px"></li></ul></div></section>
<section class="statement container"><p data-scrub="chars" style="--scrub-size:60px;--scrub-color:rgb(0,0,0);text-align:left" class="scrub">Your technology has outgrown your brand and your market presence. We close the gap: scalable software, algorithmic search authority, revenue performance, and cinema-grade corporate media, engineered by one senior team.</p></section>
<section class="pf pf--papier" data-pf data-seed="5.3" data-vague="0" data-souris="1" style="--n:5"><div class="pf__head container"><p class="eyebrow" data-reveal>Our services</p><div class="pf__lead"><h2 class="pf__h2" data-reveal>Websites, 3D, brand, fundraising and search, from one team.</h2><p class="pf__intro" data-reveal>Each category has its own page: the services inside it, the projects that prove them and how we work.</p><div class="pf__headcta" data-reveal><a href="/services" style="--cta-w:320px" class="cta cta--light"><span class="cta__text"><span class="cta__label">Discover all services</span><span class="cta__label cta__label--hover" aria-hidden="true">Discover all services</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></div><div class="pf__track" data-pf-track><div class="pf__stage"><canvas class="pf__bg" data-pf-bg aria-hidden="true"></canvas><p class="pf__num" aria-hidden="true"><span class="pf__lbl">Service</span><span class="pf__roll"><span class="pf__digits" data-pf-digits><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></span></span><span class="pf__lbl">/ 05</span></p><ol class="pf__steps"><li class="pf__step is-active" data-pf-step><figure class="pf__fig is-on" data-pf-fig style="--i:0"><a class="pf__figlink" href="/services/websites" data-pf-link tabindex="-1" aria-hidden="true"><img src="/assets/software_design_collage_1792941586522.jpg" alt="" loading="lazy" decoding="async" width="1800" height="1200"></a></figure><div class="pf__info"><p class="pf__n">Service 01</p><h3 class="pf__title"><a href="/services/websites">Websites</a></h3><p class="pf__text">Your technology has matured. Your website still explains the first prototype. We design and build the one that catches up.</p><div class="pf__cta"><a href="/services/websites" class="cta cta--ink"><span class="cta__text"><span class="cta__label">Explore Websites</span><span class="cta__label cta__label--hover" aria-hidden="true">Explore Websites</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li class="pf__step" data-pf-step><figure class="pf__fig" data-pf-fig style="--i:1"><a class="pf__figlink" href="/services/3d-motion" data-pf-link tabindex="-1" aria-hidden="true"><img src="/assets/seo_intelligence_collage_1792941733990.jpg" alt="" loading="lazy" decoding="async" width="1800" height="1200"></a></figure><div class="pf__info"><p class="pf__n">Service 02</p><h3 class="pf__title"><a href="/services/3d-motion">3D &amp; Motion</a></h3><p class="pf__text">Your product sits in a housing, flies above the clouds or works at the scale of a city. We model it and show how it works.</p><div class="pf__cta"><a href="/services/3d-motion" class="cta cta--ink"><span class="cta__text"><span class="cta__label">Explore 3D &amp; Motion</span><span class="cta__label cta__label--hover" aria-hidden="true">Explore 3D &amp; Motion</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li class="pf__step" data-pf-step><figure class="pf__fig" data-pf-fig style="--i:2"><a class="pf__figlink" href="/services/branding" data-pf-link tabindex="-1" aria-hidden="true"><img src="/assets/marketing_growth_collage_1792941768048.jpg" alt="" loading="lazy" decoding="async" width="1800" height="1200"></a></figure><div class="pf__info"><p class="pf__n">Service 03</p><h3 class="pf__title"><a href="/services/branding">Brand</a></h3><p class="pf__text">The product is ready for its next round. The logo was made for the first pitch.</p><div class="pf__cta"><a href="/services/branding" class="cta cta--ink"><span class="cta__text"><span class="cta__label">Explore Brand</span><span class="cta__label cta__label--hover" aria-hidden="true">Explore Brand</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li class="pf__step" data-pf-step><figure class="pf__fig" data-pf-fig style="--i:3"><a class="pf__figlink" href="/services/fundraising" data-pf-link tabindex="-1" aria-hidden="true"><img src="/assets/corporate_video_collage_1792941789197.jpg" alt="" loading="lazy" decoding="async" width="1800" height="1200"></a></figure><div class="pf__info"><p class="pf__n">Service 04</p><h3 class="pf__title"><a href="/services/fundraising">Fundraising</a></h3><p class="pf__text">The round opens in three months. The deck was made the night before the last one.</p><div class="pf__cta"><a href="/services/fundraising" class="cta cta--ink"><span class="cta__text"><span class="cta__label">Explore Fundraising</span><span class="cta__label cta__label--hover" aria-hidden="true">Explore Fundraising</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li class="pf__step" data-pf-step><figure class="pf__fig" data-pf-fig style="--i:4"><a class="pf__figlink" href="/services/seo-geo" data-pf-link tabindex="-1" aria-hidden="true"><img src="/assets/hero_artcraft_collage_1792941565238.jpg" alt="" loading="lazy" decoding="async" width="1800" height="1200"></a></figure><div class="pf__info"><p class="pf__n">Service 05</p><h3 class="pf__title"><a href="/services/seo-geo">SEO &amp; GEO</a></h3><p class="pf__text">Your buyers search Google, then ask an AI. Both should find you, and describe you correctly.</p><div class="pf__cta"><a href="/services/seo-geo" class="cta cta--ink"><span class="cta__text"><span class="cta__label">Explore SEO &amp; GEO</span><span class="cta__label cta__label--hover" aria-hidden="true">Explore SEO &amp; GEO</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li></ol></div></div><div class="pf__cursor" data-pf-cursor aria-hidden="true"><span class="pf__cursor-in"><span class="pf__cursor-txt">View services</span><span class="pf__cursor-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></div></section>
<section class="fw container" data-fw><div class="fw__top"><p class="eyebrow" data-reveal>Selected work</p><div class="fw__head"><h2 class="fw__h2"><span class="fw__line" data-reveal data-split="words">They trusted us with</span><span class="fw__line" data-reveal data-split="words">their image.</span></h2><p class="fw__intro" data-reveal>Extraordinary products, undersold by their websites: that&#39;s the gap we close for tech and deeptech companies. End to end: art direction, custom development, real-time 3D, content.</p></div></div><ol class="fw__grid"><li class="fw__card" data-fw-card><a class="fw__link" href="/projects/botblox" data-morph aria-label="View project: BotBlox: Moving data where ethernet was never meant to run"><figure class="fw__fig" data-fw-fig data-morph-tile style="--t:2"><picture><img src="/assets/aste360-1.webp" srcset="/_astro/botblox.DvaCbemV_X1NOB.webp 480w, /_astro/botblox.DvaCbemV_Z16cW3u.webp 760w, /_astro/botblox.DvaCbemV_1ee3dz.webp 1100w, /_astro/botblox.DvaCbemV_14tnsp.webp 1600w, /assets/aste360-1.webp 1620w" alt="Hand holding a smartphone on the BotBlox Systems website, UAVs and aerospace page, designed by Junca Studio" sizes="(max-width: 809px) 92vw, 59vw" loading="lazy" decoding="async" width="1620" height="1080"></picture><figcaption class="fw__tags"><span class="fw__tag" style="--j:0">DeepTech</span><span class="fw__tag" style="--j:1">Corporate website</span></figcaption></figure><div class="fw__art"><span class="fw__dot" aria-hidden="true"></span><div class="fw__txt"><span class="fw__kicker">01 / 05 · New York, United States</span><h3 class="fw__title" data-scr-skip-mobile>BotBlox: Moving data where ethernet was never meant to run</h3></div><span class="fw__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li class="fw__card" data-fw-card><a class="fw__link" href="/projects/kestrix" data-morph aria-label="View project: Kestrix: Mapping heat loss at urban scale"><figure class="fw__fig" data-fw-fig data-morph-tile style="--t:2"><picture><img src="/assets/catasto-preview.jpg" srcset="/_astro/kestrix.8sH_V8TI_ZN6piY.webp 480w, /_astro/kestrix.8sH_V8TI_1xncb5.webp 760w, /_astro/kestrix.8sH_V8TI_Z2x4KYJ.webp 1100w, /assets/catasto-preview.jpg 1280w" alt="Smartphone showing the Kestrix website hero, Buildings scanned, retrofits planned, designed by Junca Studio" sizes="(max-width: 809px) 92vw, 43vw" loading="lazy" decoding="async" width="1280" height="1600"></picture><figcaption class="fw__tags"><span class="fw__tag" style="--j:0">Climate</span><span class="fw__tag" style="--j:1">Showcase website</span></figcaption></figure><div class="fw__art"><span class="fw__dot" aria-hidden="true"></span><div class="fw__txt"><span class="fw__kicker">02 / 05 · London, United Kingdom</span><h3 class="fw__title" data-scr-skip-mobile>Kestrix: Mapping heat loss at urban scale</h3><p class="fw__text">Kestrix: making thermal data readable to accelerate building retrofit</p></div><span class="fw__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li class="fw__card" data-fw-card><a class="fw__link" href="/projects/hylight" data-morph aria-label="View project: Hylight: Deeptech startup in aerial inspection"><figure class="fw__fig" data-fw-fig data-morph-tile style="--t:2"><picture><img src="/assets/bikeroom-project-preview.webp" srcset="/_astro/hylight-nouveau-logo.Nws9kOxS_1RxOeF.webp 480w, /_astro/hylight-nouveau-logo.Nws9kOxS_47k5w.webp 760w, /_astro/hylight-nouveau-logo.Nws9kOxS_ZbmohP.webp 1100w, /_astro/hylight-nouveau-logo.Nws9kOxS_thxhN.webp 1600w, /_astro/hylight-nouveau-logo.Nws9kOxS_Z14WO9j.webp 1900w, /assets/bikeroom-project-preview.webp 1920w" alt="Aerial view of a white Hylight airship flying over a dense forest, from the Hylight website by Junca Studio" sizes="(max-width: 809px) 92vw, 65vw" loading="lazy" decoding="async" width="1920" height="1080"></picture><figcaption class="fw__tags"><span class="fw__tag" style="--j:0">DeepTech</span><span class="fw__tag" style="--j:1">Showcase website</span></figcaption></figure><div class="fw__art"><span class="fw__dot" aria-hidden="true"></span><div class="fw__txt"><span class="fw__kicker">03 / 05 · Paris, France</span><h3 class="fw__title" data-scr-skip-mobile>Hylight: Deeptech startup in aerial inspection</h3><p class="fw__text">Hylight: an aerial inspection technology driven by design.</p></div><span class="fw__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li class="fw__card" data-fw-card><a class="fw__link" href="/projects/artefact" data-morph aria-label="View project: Artefact: Visual exploration studio"><figure class="fw__fig" data-fw-fig data-morph-tile style="--t:2"><picture><img src="/assets/ai-cercacasa-home-1.jpg" srcset="/_astro/artefact.DHuxwflK_1GXEzA.webp 480w, /_astro/artefact.DHuxwflK_2pXVJw.webp 760w, /assets/ai-cercacasa-home-1.jpg 1006w" alt="Artefact logo pressed into a soft white textured surface, brand visual by Junca Studio" sizes="(max-width: 809px) 92vw, 43vw" loading="lazy" decoding="async" width="1006" height="1258"></picture><figcaption class="fw__tags"><span class="fw__tag" style="--j:0">Studio</span><span class="fw__tag" style="--j:1">Showcase website, portfolio</span></figcaption></figure><div class="fw__art"><span class="fw__dot" aria-hidden="true"></span><div class="fw__txt"><span class="fw__kicker">04 / 05 · Nantes, France</span><h3 class="fw__title" data-scr-skip-mobile>Artefact: Visual exploration studio</h3><p class="fw__text">Building the showcase website for Artefact, a space for their creative work</p></div><span class="fw__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li class="fw__card" data-fw-card><a class="fw__link" href="/projects/skipperndt" data-morph aria-label="View project: Skipper NDT: Automating energy infrastructure maintenance"><figure class="fw__fig" data-fw-fig data-morph-tile style="--t:2"><picture><img src="/assets/corporate-video-collage.jpg" srcset="/_astro/skipperndt.Cx65QSHU_Z1tHQii.webp 480w, /_astro/skipperndt.Cx65QSHU_1xU4hE.webp 760w, /_astro/skipperndt.Cx65QSHU_Z3rXXv.webp 1100w, /_astro/skipperndt.Cx65QSHU_Z1IWaJ1.webp 1600w, /assets/corporate-video-collage.jpg 1800w" alt="Laptop showing the Skipper NDT website on energy maintenance automation, in a red scene by Junca Studio" sizes="(max-width: 809px) 92vw, 59vw" loading="lazy" decoding="async" width="1800" height="1200"></picture><figcaption class="fw__tags"><span class="fw__tag" style="--j:0">DeepTech</span><span class="fw__tag" style="--j:1">Showcase website</span></figcaption></figure><div class="fw__art"><span class="fw__dot" aria-hidden="true"></span><div class="fw__txt"><span class="fw__kicker">05 / 05 · Paris, France</span><h3 class="fw__title" data-scr-skip-mobile>Skipper NDT: Automating energy infrastructure maintenance</h3></div><span class="fw__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li></ol><div class="fw__cta" data-reveal><a href="/projects" style="--cta-w:320px" class="cta cta--light"><span class="cta__text"><span class="cta__label">View all projects</span><span class="cta__label cta__label--hover" aria-hidden="true">View all projects</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><div class="fw__cursor" data-fw-cursor aria-hidden="true"><span class="fw__cursor-in"><span class="fw__cursor-txt">View project</span><span class="fw__cursor-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></div></section>
<section class="reel" data-reel><div class="container"><h2 class="reel__h2"><span class="reel__line" data-reveal data-split="words">Great technology, undersold by its website.</span><span class="reel__line" data-reveal data-split="words">That&#39;s what founders tell us, every week.</span></h2><div class="reel__stage" data-reel-stage><div class="reel__aside" data-reel-aside><p class="reel__label">( What we fix )</p><div class="reel__text" data-reel-text><p>Founders and researchers build extraordinary technology, and rarely have the eye, or the time, for the design it deserves.</p><p>We give complex technology the clarity it needs: sleek, premium websites that present hard things simply, so investors, clients and talent get it in seconds. A small team, and a direct line to the people who design and build.</p></div><div class="reel__row"><div class="reel__cta"><a href="/studio" style="--cta-w:280px" class="cta cta--light"><span class="cta__text"><span class="cta__label">Discover the studio</span><span class="cta__label cta__label--hover" aria-hidden="true">Discover the studio</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><img class="reel__team" src="/assets/noida_studio_collage_1792941810609.jpg" alt="Jules, Nathan and Corentin, the Junca team" width="720" height="480" loading="lazy" decoding="async"></div></div><div class="reel__box"><div class="reel__video" data-reel-video><img src="/assets/hero_artcraft_collage_1792941565238.jpg" style="width:100%;height:100%;object-fit:cover;"></div></div></div></div></section>
<section class="ws" data-ws style="--n:4"><div class="container ws__head"><div class="ws__headtxt"><p class="eyebrow">Why work with us</p><h2 class="ws__h2">Why work with us?</h2></div><p class="ws__intro">At Junca, we believe a great website starts with a great relationship. No complex process, no middlemen. Just a dedicated, responsive team and a smooth workflow to move your projects forward, fast and well.</p></div><ul class="ws__list"><li class="ws__item" style="--i:0; --bg:#260503" data-ws-item><article class="ws__card"><div class="container ws__grid"><p class="ws__num">01</p><h3 class="ws__title">Direct access to the designers</h3><div class="ws__right" data-ws-body><div class="ws__txt"><p class="ws__sub">No filter, no salesperson.</p><p class="ws__text">At Junca, you work directly with the people who design your website. It&#39;s faster, smoother, and your ideas don&#39;t get lost along the way.</p></div><figure class="ws__fig"><picture><img src="/assets/software_design_collage_1792941586522.jpg" srcset="/_astro/why-direct-access.DJj_3vDy_Zy8ttG.webp 400w, /_astro/why-direct-access.DJj_3vDy_1n3E53.webp 640w, /_astro/why-direct-access.DJj_3vDy_Z1hiU09.webp 1024w, /_astro/why-direct-access.DJj_3vDy_1f7o5b.webp 1280w" alt="Blurred silhouette of a person walking through orange and red light" sizes="(max-width: 809px) 90vw, (max-width: 1199px) 520px, 640px" loading="lazy" decoding="async" data-ws-img="true" width="1600" height="897"></picture></figure></div></div></article></li><li class="ws__item" style="--i:1; --bg:#4b0b06" data-ws-item><article class="ws__card"><div class="container ws__grid"><p class="ws__num">02</p><h3 class="ws__title">A clear and fast process</h3><div class="ws__right" data-ws-body><div class="ws__txt"><p class="ws__sub">Everything centralized, everything simple.</p><p class="ws__text">We give you access to the Junca client portal to follow every step: schedule, copy reviews, approvals, documents and deliverables. Clear, efficient, collaborative.</p></div><figure class="ws__fig"><picture><img src="/assets/seo_intelligence_collage_1792941733990.jpg" srcset="/_astro/why-portail-junca.C3vy8lcq_Z2as56A.webp 400w, /_astro/why-portail-junca.C3vy8lcq_knCb9.webp 640w, /_astro/why-portail-junca.C3vy8lcq_Zggo7O.webp 1024w, /_astro/why-portail-junca.C3vy8lcq_1iI7Ug.webp 1280w" alt="The Junca client portal in a browser window: the five project steps and the task board, with what waits on the client highlighted in red" sizes="(max-width: 809px) 90vw, (max-width: 1199px) 520px, 640px" loading="lazy" decoding="async" data-ws-img="true" width="2000" height="1367"></picture></figure></div></div></article></li><li class="ws__item" style="--i:2; --bg:#711009" data-ws-item><article class="ws__card"><div class="container ws__grid"><p class="ws__num">03</p><h3 class="ws__title">No-code sites autonomous clients</h3><div class="ws__right" data-ws-body><div class="ws__txt"><p class="ws__sub">No developer needed to change a line of text.</p><p class="ws__text">Your team updates the site on its own, in the Framer CMS or in Sanity, with zero technical dependency.</p></div><figure class="ws__fig"><picture><img src="/assets/marketing_growth_collage_1792941768048.jpg" srcset="/_astro/why-no-code.CD2pE0cx_ZFmG05.webp 400w, /_astro/why-no-code.CD2pE0cx_1FaH1m.webp 640w, /_astro/why-no-code.CD2pE0cx_Z1h2kcm.webp 1024w, /_astro/why-no-code.CD2pE0cx_ZPCo1i.webp 1280w" alt="Laptop showing the Framer logo on a deep blue background" sizes="(max-width: 809px) 90vw, (max-width: 1199px) 520px, 640px" loading="lazy" decoding="async" data-ws-img="true" width="1600" height="1093"></picture></figure></div></div></article></li><li class="ws__item ws__item--last" style="--i:3; --bg:#97150c" data-ws-item><article class="ws__card"><div class="container ws__grid"><p class="ws__num">04</p><h3 class="ws__title">A team that&#39;s ultra responsive</h3><div class="ws__right" data-ws-body><div class="ws__txt"><p class="ws__sub">Small team, big availability.</p><p class="ws__text">We&#39;re an independent, human-sized studio, and genuinely available. Got a question? An idea to test? We&#39;re here, fast, no delays.</p></div><figure class="ws__fig"><picture><img src="/assets/noida_studio_collage_1792941810609.jpg" srcset="/_astro/why-responsive-team.CUOm7YkS_ZKPvrg.webp 400w, /_astro/why-responsive-team.CUOm7YkS_Z1znFas.webp 640w, /_astro/why-responsive-team.CUOm7YkS_Z6zPTd.webp 1024w, /_astro/why-responsive-team.CUOm7YkS_2r2Oxn.webp 1280w" alt="Silhouettes of three people standing against a glowing orange wall" sizes="(max-width: 809px) 90vw, (max-width: 1199px) 520px, 640px" loading="lazy" decoding="async" data-ws-img="true" width="1456" height="816"></picture></figure></div></div></article></li><li class="ws__hold" aria-hidden="true"></li></ul></section>
<section class="ind theme-dark" data-ind style="--dur:8500ms"><div class="ind__stage"><picture><img class="ind__img is-on" src="/assets/software_design_collage_1792941586522.jpg" alt="DeepTech: looking into a vacuum chamber, laser light across machined steel" data-ind-img srcset="/images/industries/deeptech-sm.webp 900w, /assets/software_design_collage_1792941586522.jpg 1600w" sizes="100vw" loading="eager" decoding="async" crossorigin="anonymous"></picture><picture><img class="ind__img" src="/assets/hero_artcraft_collage_1792941565238.jpg" alt="Climate Tech: a wind turbine alone in a sunlit field, seen from above" data-ind-img srcset="/images/industries/climate-tech-sm.webp 900w, /assets/hero_artcraft_collage_1792941565238.jpg 1600w" sizes="100vw" loading="lazy" decoding="async" crossorigin="anonymous"></picture><picture><img class="ind__img" src="/assets/seo_intelligence_collage_1792941733990.jpg" alt="AI &amp; Data: streams of light folding into one another on a black ground" data-ind-img srcset="/images/industries/ai-automation-sm.webp 900w, /assets/seo_intelligence_collage_1792941733990.jpg 1600w" sizes="100vw" loading="lazy" decoding="async" crossorigin="anonymous"></picture><picture><img class="ind__img" src="/assets/marketing_growth_collage_1792941768048.jpg" alt="Industry 4.0: the floor of a production hall, machines lined up under the lights" data-ind-img srcset="/images/industries/industries-manufacturing-sm.webp 900w, /assets/marketing_growth_collage_1792941768048.jpg 1600w" sizes="100vw" loading="lazy" decoding="async" crossorigin="anonymous"></picture><picture><img class="ind__img" src="/assets/corporate_video_collage_1792941789197.jpg" alt="Robotics &amp; Hardware: a white collaborative robot arm with its gripper open, rim-lit on a black background" data-ind-img srcset="/images/industries/robotics-hardware-sm.webp 900w, /assets/corporate_video_collage_1792941789197.jpg 1600w" sizes="100vw" loading="lazy" decoding="async" crossorigin="anonymous"></picture><picture><img class="ind__img" src="/assets/noida_studio_collage_1792941810609.jpg" alt="SaaS B2B: a glass atrium seen straight up, floor after floor of lit offices" data-ind-img srcset="/images/industries/saas-sm.webp 900w, /assets/noida_studio_collage_1792941810609.jpg 1600w" sizes="100vw" loading="lazy" decoding="async" crossorigin="anonymous"></picture><div class="ind__veil" aria-hidden="true"></div><a class="ind__hit" href="/industries/deeptech" data-ind-hit aria-label="DeepTech: see how we work with this industry"></a></div><div class="container ind__top"><div class="ind__head"><p class="eyebrow" data-reveal>Industries</p><h2 class="ind__title" data-reveal data-split="words">Every tech sector convinces a different way.</h2><p class="ind__text" data-reveal>Deeptech, climate, industry 4.0, AI, robotics, B2B SaaS: we shape each site around what your field has to prove, and to whom.</p></div></div><div class="ind__rail" aria-hidden="true"><div class="ind__track" data-ind-track style="--k:1"><div class="ind__slide" data-ind-slide="5"><p class="ind__sname" data-ind-sname data-scr-skip>SaaS B2B</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$316B</span></span><span class="ind__lab">Global SaaS market</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">61%</span></span><span class="ind__lab">Rep-free buying</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">57%</span></span><span class="ind__lab">Decision before contact</span></div></div></div><div class="ind__slide is-on" data-ind-slide="0"><p class="ind__sname" data-ind-sname data-scr-skip>DeepTech</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$20.3B</span></span><span class="ind__lab">European VC, 2025</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">$690B</span></span><span class="ind__lab">Ecosystem value</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">32%</span></span><span class="ind__lab">Capital shift</span></div></div></div><div class="ind__slide" data-ind-slide="1"><p class="ind__sname" data-ind-sname data-scr-skip>Climate Tech</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$40.5B</span></span><span class="ind__lab">Global investment</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">24%</span></span><span class="ind__lab">Market growth</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">−18%</span></span><span class="ind__lab">Deal count</span></div></div></div><div class="ind__slide" data-ind-slide="2"><p class="ind__sname" data-ind-sname data-scr-skip>AI &amp; Data</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$581.7B</span></span><span class="ind__lab">Global investment</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">44%</span></span><span class="ind__lab">Scaling</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">37%</span></span><span class="ind__lab">Real impact</span></div></div></div><div class="ind__slide" data-ind-slide="3"><p class="ind__sname" data-ind-sname data-scr-skip>Industry 4.0</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$394B</span></span><span class="ind__lab">Smart manufacturing</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">$206B</span></span><span class="ind__lab">Industry 4.0</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">14.7%</span></span><span class="ind__lab">Market growth</span></div></div></div><div class="ind__slide" data-ind-slide="4"><p class="ind__sname" data-ind-sname data-scr-skip>Robotics &amp; Hardware</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$50B</span></span><span class="ind__lab">Global market</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">14%</span></span><span class="ind__lab">Market growth</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">$27B</span></span><span class="ind__lab">Industrial robots</span></div></div></div><div class="ind__slide" data-ind-slide="5"><p class="ind__sname" data-ind-sname data-scr-skip>SaaS B2B</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$316B</span></span><span class="ind__lab">Global SaaS market</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">61%</span></span><span class="ind__lab">Rep-free buying</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">57%</span></span><span class="ind__lab">Decision before contact</span></div></div></div><div class="ind__slide is-on" data-ind-slide="0"><p class="ind__sname" data-ind-sname data-scr-skip>DeepTech</p><div class="ind__rows"><div class="ind__row"><span class="ind__band"><span class="ind__val">$20.3B</span></span><span class="ind__lab">European VC, 2025</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">$690B</span></span><span class="ind__lab">Ecosystem value</span></div><div class="ind__row"><span class="ind__band"><span class="ind__val">32%</span></span><span class="ind__lab">Capital shift</span></div></div></div></div></div><ul class="ind__list sr-only" data-ind-list><li data-ind-li><a href="/industries/deeptech" data-ind-go="0" data-ind-label="DeepTech">DeepTech</a></li><li data-ind-li><a href="/industries/climate-tech" data-ind-go="1" data-ind-label="Climate Tech">Climate Tech</a></li><li data-ind-li><a href="/industries/ai-automation" data-ind-go="2" data-ind-label="AI &amp; Data">AI &amp; Data</a></li><li data-ind-li><a href="/industries/industries-manufacturing" data-ind-go="3" data-ind-label="Industry 4.0">Industry 4.0</a></li><li data-ind-li><a href="/industries/robotics-hardware" data-ind-go="4" data-ind-label="Robotics &amp; Hardware">Robotics &amp; Hardware</a></li><li data-ind-li><a href="/industries/saas" data-ind-go="5" data-ind-label="SaaS B2B">SaaS B2B</a></li></ul><div class="container ind__bottom"><div class="ind__notes"><div class="ind__note is-on" data-ind-note="0"><p>The page opens on the physics, not on the problem it solves. Investors and buyers leave before they know what you do.</p></div><div class="ind__note" data-ind-note="1"><p>Sensors, models and protocols stack up. The visitor drowns before the impact lands.</p></div><div class="ind__note" data-ind-note="2"><p>Models, agents, copilots: the words pile up, and the visitor still cannot picture what the product does.</p></div><div class="ind__note" data-ind-note="3"><p>Standards, tolerances and part numbers come first. The buyer stalls before the value is clear.</p></div><div class="ind__note" data-ind-note="4"><p>Payloads, axes and components everywhere. The visitor stalls before the value is clear.</p></div><div class="ind__note" data-ind-note="5"><p>The same layout, gradient, and stock illustration as every competitor. Nothing signals you&#39;re the category leader.</p></div></div><div class="ind__cta"><a href="/industries" style="--cta-w:320px" class="cta cta--dark"><span class="cta__text"><span class="cta__label">Discover all Industries</span><span class="cta__label cta__label--hover" aria-hidden="true">Discover all Industries</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></section>
<section class="hn" data-hn><div class="container hn__head"><div class="hn__headtxt"><p class="eyebrow" data-reveal>Latest news</p><h2 class="hn__h2" data-reveal data-split="words">Our take on design, technology and what makes a website convert.</h2><div class="hn__cta" data-reveal><a href="/news" style="--cta-w:320px" class="cta cta--light"><span class="cta__text"><span class="cta__label">See all articles</span><span class="cta__label cta__label--hover" aria-hidden="true">See all articles</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div><div class="hn__nav" data-reveal><button class="hn__arrow hn__arrow--prev" type="button" data-hn-prev aria-label="Previous articles" disabled><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg></button><button class="hn__arrow hn__arrow--next" type="button" data-hn-next aria-label="Next articles"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div><div class="hn__strip" data-hn-strip data-reveal><ul class="hn__track" data-hn-track><li class="hn__item" data-hn-item><a class="hn__card" href="/news/deeptech-branding-identity-for-invisible-technology" data-morph aria-label="Read the article: Deeptech branding: how to build an identity for invisible technology"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Branding</span></span><span class="hn__date"><span class="hn__pill">Oct 15, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/8c4efb1854fac9a1bb7d27dd7c7adbab945226ca-2000x1125.webp?w=1400&amp;q=80&amp;auto=format" alt="Red and white organic cell-like shapes glowing out of black, under the words “Deeptech branding: an identity for invisible technology”" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">Deeptech branding: how to build an identity for invisible technology</h3><p class="hn__sub">9 min read</p><div class="hn__more"><p class="hn__excerpt">Your technology is years ahead and your brand looks like everyone else&#39;s. A method to build a deeptech identity from your mechanism, a worked example and a one-minute checklist.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/startup-website-after-seed-round" data-morph aria-label="Read the article: Startup website after a seed round: what to change before Series A"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Digital Strategy</span></span><span class="hn__date"><span class="hn__pill">Oct 5, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/817ec85c9f7e7b5441e95ff073f4898771670b9c-2930x1648.webp?w=1400&amp;q=80&amp;auto=format" alt="Isometric white blocks rising like stairs on black, a seed sprouting on each step and a figure placing the top block" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">Startup website after a seed round: what to change before Series A</h3><p class="hn__sub">6 min read</p><div class="hn__more"><p class="hn__excerpt">The median gap between seed and Series A is now 616 days. The site that helped you raise was written for investors; here is what to change so it sells, hires and prepares the next round.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/how-to-show-a-hardware-product-on-your-website" data-morph aria-label="Read the article: How to show a hardware product on your website when photos fall short"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Web design</span></span><span class="hn__date"><span class="hn__pill">Sep 25, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/096cfc2bc0c1f499bd5782fc75365e4ef54ba139-3840x2160.webp?w=1400&amp;q=80&amp;auto=format" alt="A hand holding a phone that shows a 3D render of the BotBlox Puck Edge networking module on its product page" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">How to show a hardware product on your website when photos fall short</h3><p class="hn__sub">7 min read</p><div class="hn__more"><p class="hn__excerpt">A photo shows the outside of your hardware. Buyers need the inside, the motion and the proof: five visuals that show them, one honesty rule for renders, and a realistic CAD-to-web timeline.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/the-12-best-deeptech-websites-in-2026" data-morph aria-label="Read the article: The 12 best deeptech websites in 2026, and why they work"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Web design</span></span><span class="hn__date"><span class="hn__pill">Sep 16, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/24d5fe67470fb4e2e8d82a96228a38e693cb9db1-1920x1080.webp?w=1400&amp;q=80&amp;auto=format" alt="The Vast homepage over a blurred copy of itself, a space station module at dusk beside “Building next-generation space infrastructure”" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">The 12 best deeptech websites in 2026, and why they work</h3><p class="hn__sub">9 min read</p><div class="hn__more"><p class="hn__excerpt">Twelve deeptech sites that won Awwwards Site of the Day, from Vast to Breakthrough Energy, and the four design moves that put them there.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/how-to-explain-complex-technology-on-a-website" data-morph aria-label="Read the article: How to explain complex technology on a website (without dumbing it down)"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">UX &amp; Conversion</span></span><span class="hn__date"><span class="hn__pill">Aug 4, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/4954d62904c23cd1b51d1014dc190000003fe471-1920x1080.webp?w=1400&amp;q=80&amp;auto=format" alt="Horizontal lines of light gathering around a bright vertical beam, above the words “How to explain complex technology”" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">How to explain complex technology on a website (without dumbing it down)</h3><p class="hn__sub">4 min read</p><div class="hn__more"><p class="hn__excerpt">Jargon repels even when you define it, and visitors read 25% of your words. The layered-narrative method we use to make deeptech legible, from Hylight to Kestrix.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/astro-vs-nextjs-stack-for-immersive-websites" data-morph aria-label="Read the article: Astro vs Next.js in 2026: which one should you choose for your website?"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Digital Strategy</span></span><span class="hn__date"><span class="hn__pill">Jul 22, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/c2d5feeb2385c376ff72987017b05be6bd192fd2-1920x1080.webp?w=1400&amp;q=80&amp;auto=format" alt="The Astro wordmark glowing purple on a black starfield" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">Astro vs Next.js in 2026: which one should you choose for your website?</h3><p class="hn__sub">11 min read</p><div class="hn__more"><p class="hn__excerpt">Islands architecture, 66% real-world Core Web Vitals pass rates, shader-level control with Three.js and TSL: the stack we use when a project outgrows no-code, and when we still say Framer.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/investor-ready-website-what-vcs-look-at-before-series-a" data-morph aria-label="Read the article: The investor-ready website: what VCs actually look at before a Series A"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Digital Strategy</span></span><span class="hn__date"><span class="hn__pill">Jul 14, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/c08e7972a3cc7e1aa1a0ef50197fde17397aed93-3840x2160.png?w=1400&amp;q=80&amp;auto=format" alt="Soft white waves of light on black around the words “What VCs actually look at before a Series A”" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">The investor-ready website: what VCs actually look at before a Series A</h3><p class="hn__sub">5 min read</p><div class="hn__more"><p class="hn__excerpt">Your deck gets two minutes of attention. Your website gets the rest of the diligence. What VCs actually check on a startup website before a Series A, backed by Harvard and DocSend research.</p></div></div></a></li><li class="hn__item" data-hn-item><a class="hn__card" href="/news/why-deeptech-startups-need-a-premium-website" data-morph aria-label="Read the article: Why deeptech startups need a premium website"><div class="hn__meta"><span class="hn__cat"><span class="hn__pill">Web design</span></span><span class="hn__date"><span class="hn__pill">May 25, 2026</span></span></div><figure class="hn__fig" data-morph-tile><img src="https://cdn.sanity.io/images/j2nbmkw7/production/12f53f88f9d9599d978fadaf5249c08e98ae9058-1920x1080.webp?w=1400&amp;q=80&amp;auto=format" alt="Aerial view of a white airship above a dense forest, overlaid with a “Web design” title card" loading="lazy" decoding="async" width="1400" height="875" crossorigin="anonymous"></figure><span class="hn__band" aria-hidden="true"></span><div class="hn__txt"><h3 class="hn__title">Why deeptech startups need a premium website</h3><p class="hn__sub">5 min read</p><div class="hn__more"><p class="hn__excerpt">A generic website is no longer enough for a deeptech startup. Investor credibility, talent acquisition, market positioning: why web design is an underestimated strategic lever.</p></div></div></a></li></ul></div></section>
<section class="voice" data-voice><div class="container voice__head"><p class="eyebrow" data-reveal>Client voices</p><h2 class="voice__h2" data-reveal data-split="words">Our clients speak for themselves.</h2></div><div class="container voice__grid"><div class="voice__panel" style="--bg:url(/images/home/voices-bg.webp); --bg-sm:url(/images/home/voices-bg-sm.webp)"><div class="voice__text" data-voice-text><p class="voice__p">Junca works with <em class="voice__em">tech</em> and <em class="voice__em">deeptech</em> companies: founders who build hard things and need a website that makes them obvious.</p><p class="voice__p">We keep part of our year for <em class="voice__em">agencies</em> and creative studios, the projects where we push <em class="voice__em">craft</em>, motion and real-time 3D further.</p><p class="voice__p">We think most tech websites look the same: templates, stock 3D, copy nobody reads. We believe in <em class="voice__em">clarity</em>, <em class="voice__em">character</em> and <em class="voice__em">conversion</em>.</p></div><div class="voice__ctas" data-reveal><a class="voice__btn voice__btn--ink" href="/contact">Start a project<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><a class="voice__btn" href="/studio">About the studio</a></div></div><ul class="voice__people" data-reveal><li><a class="voice__card" href="/projects/botblox" data-voice-card aria-label="Josh Elijah, CEO, BotBlox Systems: read the testimonial and the case study"><img class="voice__pic" src="/assets/software_design_collage_1792941586522.jpg" alt="Portrait of Josh Elijah" loading="lazy" decoding="async" width="1200" height="1200"><span class="voice__veil" aria-hidden="true"></span><span class="voice__who"><strong class="voice__name" data-voice-name>Josh Elijah</strong><span class="voice__role" data-voice-role>CEO, BotBlox Systems</span></span><blockquote class="voice__quote"><p data-voice-quote>“This is absolutely what we wanted for our website. They could not have done a better job, my team and I are beyond thrilled. This will not be the last time we work with Jules and Studio Junca.”</p></blockquote><span class="voice__more"><span class="voice__more-txt">Read the case study</span><span class="voice__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a class="voice__card" href="/projects/hylight" data-voice-card aria-label="Martin Bocken, CEO &amp; co-founder, Hylight: read the testimonial and the case study"><img class="voice__pic" src="/assets/hero_artcraft_collage_1792941565238.jpg" alt="Portrait of Martin Bocken" loading="lazy" decoding="async" width="1200" height="1200"><span class="voice__veil" aria-hidden="true"></span><span class="voice__who"><strong class="voice__name" data-voice-name>Martin Bocken</strong><span class="voice__role" data-voice-role>CEO &amp; co-founder, Hylight</span></span><blockquote class="voice__quote"><p data-voice-quote>“The Junca team immediately understood our technical challenges and our need for clarity. The result is fluid, immersive, and perfectly aligned with our tech positioning.”</p></blockquote><span class="voice__more"><span class="voice__more-txt">Read the case study</span><span class="voice__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a class="voice__card" href="/projects/skipperndt" data-voice-card aria-label="Luigi Kassir, CEO, Skipper NDT: read the testimonial and the case study"><img class="voice__pic" src="/assets/seo_intelligence_collage_1792941733990.jpg" alt="Portrait of Luigi Kassir" loading="lazy" decoding="async" width="1200" height="1200"><span class="voice__veil" aria-hidden="true"></span><span class="voice__who"><strong class="voice__name" data-voice-name>Luigi Kassir</strong><span class="voice__role" data-voice-role>CEO, Skipper NDT</span></span><blockquote class="voice__quote"><p data-voice-quote>“The final website perfectly reflects Skipper NDT’s identity. Junca was able to adapt, understand our project in depth, and translate it accurately into the website.”</p></blockquote><span class="voice__more"><span class="voice__more-txt">Read the case study</span><span class="voice__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a class="voice__card" href="/projects/kestrix" data-voice-card aria-label="Lucy Lyons, CEO, Kestrix: read the testimonial and the case study"><img class="voice__pic" src="/assets/marketing_growth_collage_1792941768048.jpg" alt="Portrait of Lucy Lyons" loading="lazy" decoding="async" width="1200" height="1200"><span class="voice__veil" aria-hidden="true"></span><span class="voice__who"><strong class="voice__name" data-voice-name>Lucy Lyons</strong><span class="voice__role" data-voice-role>CEO, Kestrix</span></span><blockquote class="voice__quote"><p data-voice-quote>“Working with Junca was simply delightful. The team is professional, visionary, and creative, and we are extremely satisfied with our output. Would 100% work with Jules and team again.”</p></blockquote><span class="voice__more"><span class="voice__more-txt">Read the case study</span><span class="voice__ic" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li></ul></div></section>
<section class="faqsec page-white"><div class="container"><h2>Got a question? We answer it here.</h2><div class="faqsec__grid"><div class="faqsec__left"><p class="faqsec__keep"><span class="faqsec__dot" aria-hidden="true"></span>Let&#39;s keep in touch</p><a href="/contact" style="--cta-w:272px" class="cta cta--light"><span class="cta__text"><span class="cta__label">Get in touch</span><span class="cta__label cta__label--hover" aria-hidden="true">Get in touch</span></span><svg class="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><div class="faq" data-faq><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">What does Junca Studio do?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Junca Studio is a web, brand and 3D studio for tech and deep tech companies whose technology has matured faster than their brand and website. We close that gap with one team that does everything in-house: positioning and visual identity, website design, development in Framer or in custom code with Astro and Next.js, and real-time 3D built in Blender and WebGL. Clients include Hylight (Y Combinator S23), Kestrix, Skipper NDT and BotBlox.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">How much does a website cost with Junca Studio?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Every project is priced on its scope, never from a package. As a guide, a website built in Framer typically ranges from $10,000 to $20,000. Projects that bring together a brand identity, a full website and custom 3D usually range from $20,000 to $50,000, and complete programs for a launch or a fundraise go further. If your budget is tight, we phase the work: the essentials first, then 3D and new pages. After a free first call, you get a detailed quote, line by line.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">How long does it take to build a website with Junca Studio?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>A marketing website usually takes 4 to 6 weeks once the brief is approved. Projects that add branding, 3D scenes or custom animation take 8 to 12 weeks. You follow every stage in the Junca client portal, with clear milestones, so you always know what comes next.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">Can I update the website myself after launch?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Yes. On Framer, your team edits text, images and articles directly in the Framer CMS. On Astro or Next.js, we connect a headless CMS such as Sanity: you publish a page or an article and the site updates within minutes, without touching any code. We train your team at launch and stay available afterwards.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">Which technology do you use: Framer, Astro or Next.js?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>We pick the one that fits your project. Framer is ideal for marketing sites your team wants to edit visually and launch fast. Astro, usually paired with Sanity, suits sites with a lot of content that need very fast loading and 3D in the browser. Next.js suits products with accounts, dashboards or app features. All three produce fast pages that search engines and AI assistants can read, with no plugins to maintain like on WordPress.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">What does Junca Studio offer besides web design?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Besides web design and UX, we offer four services that work together or on their own: development on Framer, Astro or Next.js; 3D and immersive experiences built with Blender and WebGL; branding and visual identity, from logo to brand guidelines and art direction; and SEO and AI search optimization, so your company shows up on Google and in answers from ChatGPT or Perplexity. Most clients combine two or three of them.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">How does a project with Junca Studio work?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>It starts with a free call to understand your product, your audience and your goals. We then work in the Junca client portal with clear milestones: strategy, art direction, UX and UI design, development, testing and launch. You review copy and designs there, approve each milestone and find every document and deliverable in one place. You talk directly to the people who design and build your site.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">What makes Junca Studio different from other web design agencies?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Three things. An engineering background: we read the white papers and understand the hardware, data or AI behind your product before designing anything. A track record with technical companies, from Hylight (Y Combinator S23) to Kestrix, Skipper NDT and BotBlox. And 3D and WebGL produced by our own team with Blender, so complex products become tangible. You work directly with the people who design and build your site, with no account manager in between.</p></div></div></details><details class="faq__item"><summary class="faq__q"><h3 class="faq__title">Where is Junca Studio based, and do you work with international clients?</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a"><div class="faq__a-inner"><p>Junca Studio is a French studio. We work remotely with tech companies in France, the United Kingdom and the United States, in English or French, from the first call to launch.</p></div></div></details></div></div></div></section>
    </main>

<footer class="footer footer--light" id="footer"><div class="container"><div class="footer__top"><p class="footer__headline">GET IN TOUCH.</p><p class="footer__desc">Arka Technovation Private Limited is an enterprise digital engineering, search authority, performance marketing, and corporate cinema company based in Sector 63, Noida, Uttar Pradesh, India.</p></div><div class="footer__line"></div><div class="footer__grid"><ul class="footer__socials"><li><a href="https://www.linkedin.com/in/jules-robichon-07153b1aa/" target="_blank" rel="noopener"><span class="footer__soc">LinkedIn</span><svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="display:inline-block;vertical-align:0.02em;flex:none"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li><li><a href="https://x.com/Junca_Studio" target="_blank" rel="noopener"><span class="footer__soc">X (Twitter)</span><svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="display:inline-block;vertical-align:0.02em;flex:none"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li></ul><div class="footer__col"><p class="footer__head">NAVIGATION</p><ul><li><a href="/studio">Studio</a></li><li><a href="/projects">Our projects</a></li><li><a href="/services">Our services</a></li><li><a href="/news">News</a></li><li><a href="/contact-us">Contact</a></li></ul><p class="footer__head footer__head--latest">LATEST PROJECTS</p><ul><li><a href="/projects/botblox">BotBlox Systems</a></li><li><a href="/projects/hylight">Hylight</a></li><li><a href="/projects/kestrix">Kestrix</a></li><li><a href="/projects/skipperndt">Skipper NDT</a></li></ul></div><div class="footer__col"><p class="footer__head">SERVICES</p><ul><li><a href="/services/websites">Websites</a></li><li><a href="/services/3d-motion">3D &amp; Motion</a></li><li><a href="/services/branding">Brand</a></li><li><a href="/services/fundraising">Fundraising</a></li><li><a href="/services/seo-geo">SEO &amp; GEO</a></li></ul></div><div class="footer__col"><p class="footer__head">CONTACT</p><ul><li><a href="mailto:contact@arkatechnovation.com">contact@arkatechnovation.com</a></li><li><a href="https://wa.me/919711487316" target="_blank" rel="noopener">Whatsapp : +91 97114 87316</a></li></ul><p class="footer__head footer__head--latest">LEGAL</p><ul><li><a href="/legal-notice">Legal notice</a></li><li><a href="/privacy-policy">Privacy policy</a></li></ul></div></div><div class="footer__bottom"><img class="footer__logo" src="/assets/arka-icon.svg" alt="Junca Studio" width="138" height="35"><p class="footer__copy">© 2026 Arka Technovation Private Limited. All Rights Reserved.</p><a class="footer__top-link" href="#top" data-back-to-top>BACK TO TOP <span aria-hidden="true">↑</span></a></div></div></footer>
  `;
}

export function initHomePage() {
  initClock();
  initFloatingHbar();
  initNavMega();
  initScrollReveals();
  initTextScrub();
  initProcessFrame();
  initFeaturedWorks();
  initStudioReel();
  initWhyUs();
  initIndustries();
  initNews();
  initClientVoices();
  initFAQ();
  initBackToTop();
  initRobotHero();
}

/**
 * 0. Authentic Junca 3D Three.js Robot Integration
 */
let robotInstance = null;
async function initRobotHero() {
  const robotApp = document.getElementById('robot-app');
  if (!robotApp || robotApp.dataset.mounted) return;
  robotApp.dataset.mounted = '1';

  const chargement = document.getElementById('robot-chargement');
  try {
    const modulePath = "/_astro/main.BRlCz0Vs.js"; const { start } = await import(/* @vite-ignore */ modulePath);
    robotInstance = await start({
      hote: '#robot-app',
      pin: '[data-hero]',
      suite: '[data-suite]',
      titre: '[data-hero-titre]',
      chargement: '#robot-chargement',
      etat: null,
      hud: null,
      panneau: false,
      chrono: false,
      mesure: false,
      alpha: true,
      textes: ['.statement']
    });

    const soundBtn = document.getElementById('robot-son');
    const turbine = soundBtn?.querySelector('[data-son-turbine]');
    if (soundBtn && turbine && robotInstance?.son) {
      const sound = robotInstance.son;
      const tuning = robotInstance.TUNING?.fan ?? { spinUp: 1.8, spinDown: 0.9 };
      let lastTime = performance.now();
      let rot = 0;
      let curRPM = 0;

      const updateSoundUI = (active) => {
        soundBtn.setAttribute('aria-pressed', String(active));
        soundBtn.setAttribute('aria-label', active ? 'Sound: on' : 'Sound: off');
      };
      updateSoundUI(sound.actif);
      sound.onChange = updateSoundUI;
      soundBtn.onclick = () => { sound.actif = !sound.actif; };
      soundBtn.hidden = false;

      const turbineLoop = () => {
        if (soundBtn.hidden || !document.body.contains(soundBtn)) return;
        const now = performance.now();
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;
        const targetRPM = sound.actif ? 140 + Math.min(1, sound.niveau() * 12) * 620 : 0;
        const rate = targetRPM > curRPM ? tuning.spinUp : sound.actif ? tuning.spinDown : 3.5;
        curRPM += (targetRPM - curRPM) * (1 - Math.exp(-rate * dt));
        rot = (rot + curRPM * dt) % 360;
        turbine.setAttribute('transform', `rotate(${rot.toFixed(2)} 12 12)`);
        requestAnimationFrame(turbineLoop);
      };
      requestAnimationFrame(turbineLoop);
    }
  } catch (err) {
    console.warn('[RobotHero] 3D Scene init:', err);
    chargement?.classList.add('gone');
  }
}

/**
 * 1. Live IST Clock (UTC + 5:30)
 */
function initClock() {
  function updateTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    const h = String(ist.getHours() % 12 || 12).padStart(2, '0');
    const m = String(ist.getMinutes()).padStart(2, '0');
    const s = String(ist.getSeconds()).padStart(2, '0');
    const ampm = ist.getHours() >= 12 ? 'PM' : 'AM';
    const str = `${h}:${m}:${s} ${ampm}`;
    document.querySelectorAll('[data-clock]').forEach(el => el.textContent = str);
  }
  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * 2. Floating action bar fade near footer
 */
function initFloatingHbar() {
  const hbar = document.querySelector('.hbar--fixed');
  const footer = document.querySelector('footer');
  if (!hbar || !footer) return;
  function onScroll() {
    const diff = footer.getBoundingClientRect().top - hbar.getBoundingClientRect().top;
    hbar.style.opacity = String(Math.max(0, Math.min(1, diff / 140)));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 3. Mega-Navigation (.nx & [data-nx-panels])
 */
function initNavMega() {
  const nx = document.querySelector('[data-nx]');
  if (!nx || nx.dataset.ready) return;
  nx.dataset.ready = '1';

  const panelsRoot = document.querySelector('[data-nx-panels]');
  const cta = document.querySelector('[data-nx-cta]');
  const scrim = document.querySelector('[data-nx-scrim]');
  const frost = document.querySelector('[data-nx-frost]');
  const drawer = document.querySelector('[data-nx-drawer]');
  const drawerToggle = document.querySelector('[data-nx-drawer-toggle]');
  const anchor = nx.querySelector('[data-nx-anchor]');

  if (panelsRoot && anchor) {
    const updateAnchor = () => {
      panelsRoot.style.setProperty('--anchor', `${Math.round(anchor.getBoundingClientRect().left)}px`);
      if (cta) nx.style.setProperty('--cta-w', `${Math.round(cta.getBoundingClientRect().width)}px`);
    };
    updateAnchor();
    window.addEventListener('resize', updateAnchor, { passive: true });
  }

  const trigButtons = nx.querySelectorAll('[data-nx-trig]');
  const panels = panelsRoot ? panelsRoot.querySelectorAll('[data-nx-panel]') : [];
  let openPanelName = null;

  function setPanel(name) {
    if (openPanelName === name) {
      name = null;
    }
    openPanelName = name;
    if (panelsRoot) {
      if (name) panelsRoot.dataset.open = name;
      else delete panelsRoot.dataset.open;
    }
    trigButtons.forEach(btn => btn.setAttribute('aria-expanded', String(btn.dataset.nxTrig === name)));
    panels.forEach(p => {
      p.inert = p.dataset.nxPanel !== name;
    });
    if (scrim) scrim.classList.toggle('is-on', !!name);
    if (frost) frost.classList.toggle('is-solid', !!name);
  }

  trigButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPanel(btn.dataset.nxTrig);
    });
  });

  if (scrim) {
    scrim.addEventListener('click', () => setPanel(null));
  }

  // Category hover inside panels
  if (panelsRoot) {
    panelsRoot.querySelectorAll('[data-nx-cat], [data-nx-ind]').forEach(link => {
      const p = link.closest('[data-nx-panel]');
      const cat = link.dataset.nxCat || link.dataset.nxInd;
      link.addEventListener('pointerenter', () => {
        if (!p || !cat) return;
        p.dataset.active = cat;
        p.querySelectorAll('[data-nx-cat], [data-nx-ind], [data-nx-group], [data-nx-vis]').forEach(el => {
          const val = el.dataset.nxCat || el.dataset.nxInd || el.dataset.nxGroup || el.dataset.nxVis;
          el.classList.toggle('is-active', val === cat);
        });
      });
    });
  }

  // Mobile Drawer toggle
  if (drawerToggle && drawer) {
    drawerToggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', !isOpen);
      drawer.inert = isOpen;
      if (frost) frost.classList.toggle('is-solid', !isOpen);
      nx.toggleAttribute('data-drawer', !isOpen);
      drawerToggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });
  }
}

/**
 * 4. Cinematic Scroll Reveals ([data-reveal] & [data-img-reveal])
 */
function initScrollReveals() {
  document.documentElement.classList.add('reveals-armes');
  const elements = document.querySelectorAll('[data-reveal], [data-img-reveal]');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-in'));
  }

  // Safety fallback after 2s
  setTimeout(() => {
    elements.forEach(el => el.classList.add('is-in'));
  }, 2500);
}

/**
 * 5. Statement Text Scrub ([data-scrub="chars"])
 */
function initTextScrub() {
  const scrubEl = document.querySelector('[data-scrub="chars"]');
  if (!scrubEl) return;
  const rawText = scrubEl.textContent.trim();
  scrubEl.innerHTML = rawText.split('').map(ch => {
    if (ch === ' ') return ' ';
    return `<span class="scr-char" style="opacity: 0.18; transition: opacity 0.2s ease, color 0.2s ease;">${ch}</span>`;
  }).join('');

  const chars = scrubEl.querySelectorAll('.scr-char');
  function onScroll() {
    const rect = scrubEl.getBoundingClientRect();
    const h = window.innerHeight;
    const start = h * 0.85;
    const end = h * 0.2;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const activeIdx = Math.floor(progress * chars.length);
    chars.forEach((c, idx) => {
      const on = idx <= activeIdx;
      c.style.opacity = on ? '1' : '0.18';
      c.style.color = on ? 'var(--scrub-color, #000)' : 'rgba(0,0,0,0.18)';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 6. Services Process Frame (.pf / [data-pf])
 */
function initProcessFrame() {
  const pf = document.querySelector('[data-pf]');
  if (!pf) return;
  const track = pf.querySelector('[data-pf-track]');
  const steps = [...pf.querySelectorAll('[data-pf-step]')];
  const figures = [...pf.querySelectorAll('[data-pf-fig]')];
  const digits = pf.querySelector('[data-pf-digits]');
  const cursor = pf.querySelector('[data-pf-cursor]');
  const sCount = steps.length;
  if (!track || !sCount) return;

  let currentStep = -1;
  function update() {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;
    const top = -track.getBoundingClientRect().top;
    const idx = Math.max(0, Math.min(sCount - 1, Math.floor(top / (window.innerHeight * 0.7))));
    if (idx !== currentStep) {
      currentStep = idx;
      steps.forEach((s, n) => {
        s.classList.toggle('is-active', n === idx);
        s.classList.toggle('is-before', n < idx);
      });
      figures.forEach((f, n) => {
        f.classList.toggle('is-on', n <= idx);
      });
      if (digits) {
        digits.style.setProperty('--a', String(idx));
      }
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();

  // Mouse Follower Tag
  if (cursor) {
    let cx = 0, cy = 0, tx = 0, ty = 0, isHover = false, rafId = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (isHover || Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };
    pf.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX;
      ty = e.clientY;
      const onLink = !!e.target.closest('[data-pf-link]');
      if (onLink !== isHover) {
        isHover = onLink;
        cursor.classList.toggle('is-on', isHover);
        if (isHover && !rafId) { cx = tx; cy = ty; }
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
    pf.addEventListener('pointerleave', () => {
      isHover = false;
      cursor.classList.remove('is-on');
    });
  }
}

/**
 * 7. Featured Works (.fw / [data-fw])
 */
function initFeaturedWorks() {
  const fw = document.querySelector('[data-fw]');
  if (!fw) return;
  const cards = [...fw.querySelectorAll('[data-fw-card]')];
  const cursor = fw.querySelector('[data-fw-cursor]');

  // Hover states & parallax
  cards.forEach(card => {
    const link = card.querySelector('.fw__link');
    const fig = card.querySelector('[data-fw-fig]');
    if (!link) return;
    link.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'touch') {
        card.classList.remove('is-reset');
        card.classList.add('is-hover');
      }
    });
    link.addEventListener('pointerleave', () => {
      card.classList.remove('is-hover');
      setTimeout(() => card.classList.add('is-reset'), 200);
    });
  });

  function update() {
    const h = window.innerHeight;
    cards.forEach(c => {
      const rect = c.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (h - rect.top) / (h + rect.height)));
      const fig = c.querySelector('[data-fw-fig]');
      if (fig) fig.style.setProperty('--p', p.toFixed(4));
      if (rect.top + rect.height * 0.2 < h && rect.bottom > 0) {
        c.classList.add('is-in');
        if (fig) fig.classList.add('is-in');
      }
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();

  // Custom Cursor
  if (cursor) {
    let cx = 0, cy = 0, tx = 0, ty = 0, isHover = false, rafId = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (isHover || Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };
    fw.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX;
      ty = e.clientY;
      const onFig = !!e.target.closest('[data-fw-fig]');
      if (onFig !== isHover) {
        isHover = onFig;
        cursor.classList.toggle('is-on', isHover);
        if (isHover && !rafId) { cx = tx; cy = ty; }
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
    fw.addEventListener('pointerleave', () => {
      isHover = false;
      cursor.classList.remove('is-on');
    });
  }
}

/**
 * 8. Studio Reel (.reel / [data-reel])
 */
function initStudioReel() {
  const reel = document.querySelector('[data-reel]');
  if (!reel) return;
  const stage = reel.querySelector('[data-reel-stage]');
  const video = reel.querySelector('[data-reel-video]');
  const aside = reel.querySelector('[data-reel-aside]');
  if (!stage || !video || !aside) return;

  function onScroll() {
    const rect = stage.getBoundingClientRect();
    const h = window.innerHeight;
    const start = h * 0.75;
    const end = -h * 0.25;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const scale = 3.0 - (progress * 2.0); // 3 -> 1
    video.style.transform = `scale(${Math.max(1, scale)})`;
    if (progress > 0.35) {
      aside.classList.add('is-open');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 9. Why Work With Us (.ws / [data-ws] - 4 Sticky Stacking Cards)
 */
function initWhyUs() {
  const ws = document.querySelector('[data-ws]');
  if (!ws) return;
  const items = Array.from(ws.querySelectorAll('[data-ws-item]'));
  const bodies = items.map(el => el.querySelector('[data-ws-body]'));
  const imgs = items.map(el => el.querySelector('img[data-ws-img], [data-ws-img] img, .ws__fig img'));

  function update() {
    const h = window.innerHeight;
    const isDesktop = window.matchMedia('(min-width: 810px)').matches;
    for (let n = 0; n < items.length; n++) {
      const c = items[n].getBoundingClientRect();
      const t = Math.min(1, Math.max(0, (h - c.top) / (h + c.height)));
      if (imgs[n]) {
        imgs[n].style.setProperty('--py', (t * (imgs[n].offsetHeight * 0.153)).toFixed(1));
      }
      if (isDesktop && n < items.length - 1) {
        const nextTop = items[n + 1].getBoundingClientRect().top;
        const factor = Math.min(1, Math.max(0, (c.bottom - nextTop) / Math.max(1, c.height - 64)));
        if (bodies[n]) bodies[n].style.opacity = String(1 - Math.min(1, factor * 1.4));
      } else if (bodies[n]) {
        bodies[n].style.opacity = '';
      }
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/**
 * 10. Industries Stage (.ind / [data-ind])
 */
function initIndustries() {
  const ind = document.querySelector('[data-ind]');
  if (!ind) return;
  const track = ind.querySelector('[data-ind-track]');
  const slides = [...ind.querySelectorAll('[data-ind-slide]')];
  const notes = [...ind.querySelectorAll('[data-ind-note]')];
  const imgs = [...ind.querySelectorAll('[data-ind-img]')];
  const hit = ind.querySelector('[data-ind-hit]');
  const links = [...ind.querySelectorAll('[data-ind-go]')];
  if (!slides.length) return;

  let current = 0;
  function setIndex(idx) {
    current = idx;
    if (track) track.style.setProperty('--k', String(idx + 1));
    slides.forEach(s => s.classList.toggle('is-on', Number(s.dataset.indSlide) === idx));
    notes.forEach(n => n.classList.toggle('is-on', Number(n.dataset.indNote) === idx));
    imgs.forEach((img, i) => img.classList.toggle('is-on', i === idx));
    if (hit && links[idx]) {
      hit.href = links[idx].href;
      hit.setAttribute('aria-label', `${links[idx].textContent.trim()}: see how we work with this industry`);
    }
  }

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const num = Number(slide.dataset.indSlide);
      if (!isNaN(num)) setIndex(num);
    });
  });

  // Auto-advance loop every 7s
  let timer = setInterval(() => {
    setIndex((current + 1) % imgs.length);
  }, 7000);

  ind.addEventListener('pointerenter', () => clearInterval(timer));
  ind.addEventListener('pointerleave', () => {
    clearInterval(timer);
    timer = setInterval(() => setIndex((current + 1) % imgs.length), 7000);
  });
}

/**
 * 11. Latest News Slider (.hn / [data-hn])
 */
function initNews() {
  const hn = document.querySelector('[data-hn]');
  if (!hn) return;
  const strip = hn.querySelector('[data-hn-strip]');
  const prevBtn = hn.querySelector('[data-hn-prev]');
  const nextBtn = hn.querySelector('[data-hn-next]');
  const items = hn.querySelectorAll('[data-hn-item]');
  if (!strip || !prevBtn || !nextBtn) return;

  function getStep() {
    const first = items[0];
    return (first ? first.getBoundingClientRect().width : 400) + 24;
  }

  function updateButtons() {
    prevBtn.disabled = strip.scrollLeft <= 2;
    nextBtn.disabled = strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 2;
  }

  prevBtn.addEventListener('click', () => {
    strip.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    strip.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  strip.addEventListener('scroll', updateButtons, { passive: true });
  updateButtons();
}

/**
 * 12. Client Voices (.voice / [data-voice])
 */
function initClientVoices() {
  const voice = document.querySelector('[data-voice]');
  if (!voice) return;
  const cards = voice.querySelectorAll('[data-voice-card]');
  cards.forEach(c => {
    c.addEventListener('pointerenter', () => {
      cards.forEach(other => other.classList.remove('is-on'));
      c.classList.add('is-on');
    });
    c.addEventListener('click', () => {
      cards.forEach(other => other.classList.remove('is-on'));
      c.classList.add('is-on');
    });
  });
}

/**
 * 13. FAQ Accordion (.faqsec / [data-faq])
 */
function initFAQ() {
  const faqSec = document.querySelector('[data-faq]') || document.querySelector('.faqsec');
  if (!faqSec) return;
  const details = [...faqSec.querySelectorAll('details')];

  details.forEach(item => {
    const summary = item.querySelector('summary');
    if (!summary) return;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('is-open');
      if (isOpen) {
        item.classList.remove('is-open');
        setTimeout(() => { if (!item.classList.contains('is-open')) item.open = false; }, 400);
      } else {
        details.forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            setTimeout(() => { if (!other.classList.contains('is-open')) other.open = false; }, 400);
          }
        });
        item.open = true;
        requestAnimationFrame(() => item.classList.add('is-open'));
      }
    });
  });
}

/**
 * 14. Back to top
 */
function initBackToTop() {
  const btn = document.querySelector('[data-back-to-top]');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
