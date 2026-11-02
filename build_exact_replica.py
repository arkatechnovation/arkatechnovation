import re
import shutil

# 1. Update src/junca-theme.css with the exact authentic CSS
shutil.copy('junca_extracted.css', 'src/junca-theme.css')
print('Copied junca_extracted.css to src/junca-theme.css')

# 2. Reset src/style.css to avoid conflicts
with open('src/style.css', 'w') as f:
    f.write('@import "./junca-theme.css";\n')
print('Cleaned src/style.css')

# 3. Read junca_official.html
with open('junca_official.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 4. Remove external Cloudflare analytics beacon script
html = re.sub(
    r'<script[^>]*>\s*if\s*\(!navigator\.webdriver.*?cloudflareinsights.*?</script>',
    '',
    html,
    flags=re.DOTALL
)

# 5. Extract the main style block from head and replace with <link rel="stylesheet" href="/src/junca-theme.css">
html = re.sub(
    r'<style[^>]*>@keyframes astroFadeInOut.*?</style>',
    '<link rel="stylesheet" href="/src/junca-theme.css">',
    html,
    flags=re.DOTALL
)

# 6. Adapt Title and Meta tags
html = re.sub(
    r'<title>.*?</title>',
    '<title>Arka Technovation | Digital Marketing, Software Design, SEO & Corporate Video | Noida</title>',
    html
)
html = re.sub(
    r'<meta name="description" content="[^"]*">',
    '<meta name="description" content="Arka Technovation Private Limited is an enterprise digital engineering, search authority, performance marketing, and corporate cinema company based in Noida (Delhi NCR), India.">',
    html
)
html = re.sub(
    r'<link rel="canonical" href="[^"]*">',
    '<link rel="canonical" href="https://arkatechnovation.com/">',
    html
)
html = re.sub(
    r'<link rel="icon" [^>]*>',
    '<link rel="icon" type="image/svg+xml" href="/assets/arka-icon.svg">',
    html
)

# Open Graph & Twitter
html = html.replace('content="Junca Studio"', 'content="Arka Technovation"')
html = html.replace('content="Junca Studio | Web, Brand &amp; 3D for Tech and Deep Tech"', 'content="Arka Technovation | Enterprise Software, Search &amp; Media • Noida"')
html = html.replace("Your technology matured, your website and brand didn't. Junca designs both, with in-house 3D, for tech and deep tech companies, in Framer or custom code.", "Arka Technovation Private Limited engineers enterprise software, algorithmic search authority, performance marketing, and corporate cinema from Noida, Delhi NCR.")
html = html.replace('content="https://juncastudio.com/"', 'content="https://arkatechnovation.com/"')
html = html.replace('content="@Junca_Studio"', 'content="@ArkaTechnovation"')

# 7. Adapt Schema.org JSON-LD
schema_json = '''<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Arka Technovation Private Limited",
  "alternateName": "Arka Technovation",
  "url": "https://arkatechnovation.com",
  "logo": "https://arkatechnovation.com/assets/arka-icon.svg",
  "description": "Enterprise digital engineering, search engine authority, performance marketing, and corporate cinema company based in Noida (Delhi NCR), India.",
  "founder": {
    "@type": "Person",
    "name": "Kranti Parashar",
    "jobTitle": "Chief Executive Officer & Founder"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "areaServed": ["Global", "India", "Delhi NCR", "Noida", "United States", "Europe", "United Arab Emirates"],
  "knowsAbout": [
    "Software & Web Application Development",
    "Search Engine Optimization & Technical Audits",
    "Performance Digital Marketing & Lead Generation",
    "Corporate Film Making & Video Production"
  ]
}
</script>'''

html = re.sub(
    r'<script type="application/ld\+json">.*?</script>',
    schema_json,
    html,
    flags=re.DOTALL
)

# 8. Adapt Header Logo and Chrome
arka_header_logo = '''<a class="nx__cell nx__logo" href="/" aria-label="Arka Technovation Home" data-astro-cid-5b5tzl64 style="padding:0 16px;display:flex;align-items:center;text-decoration:none;"><div style="display:flex;align-items:center;gap:10px;"><img src="/assets/arka-icon.svg" alt="Arka" width="24" height="24" data-astro-cid-5b5tzl64><span style="font-family:var(--font-heading);font-weight:700;font-size:14px;letter-spacing:-0.02em;color:#fff;white-space:nowrap;">ARKA TECHNOVATION</span></div></a>'''

html = re.sub(
    r'<a class="nx__cell nx__logo"[^>]*>.*?</a>',
    arka_header_logo,
    html,
    count=1,
    flags=re.DOTALL
)

# 9. Adapt Contact links
html = html.replace('href="/contact"', 'href="/contact-us"')
html = html.replace('contact@juncastudio.com', 'contact@arkatechnovation.com')

# 10. Adapt Hero Clock to live IST (UTC + 5:30)
html = html.replace(
    '<span class="hbar__copy" data-astro-cid-b3tp7cto>©2026</span>',
    '<span class="hbar__copy" data-astro-cid-b3tp7cto>©2026 ARKA TECHNOVATION • NOIDA HQ</span>'
)
html = html.replace(
    '<span class="hbar__tz" data-astro-cid-b3tp7cto>(UTC+1)</span>',
    '<span class="hbar__tz" data-astro-cid-b3tp7cto>(IST)</span>'
)

# Update clock runner to show real IST time
clock_script_old = re.search(r'<script type="module">\s*var e=\(\)=>\{let e=document\.querySelector\(`\.hbar--fixed`\).*?</script>', html, re.DOTALL)
if clock_script_old:
    clock_script_new = '''<script type="module">
var initHbar = () => {
  let e = document.querySelector(`.hbar--fixed`), t = document.querySelector(`footer`);
  if (!e || !t || e.dataset.hbarPret) return;
  e.dataset.hbarPret = `1`;
  let n = new AbortController, r = 0, i = () => {
    r = 0;
    let n = t.getBoundingClientRect().top - e.getBoundingClientRect().top;
    e.style.opacity = String(Math.max(0, Math.min(1, n / 140)));
  }, a = () => { r ||= requestAnimationFrame(i); };
  window.addEventListener(`scroll`, a, { passive: !0, signal: n.signal });
  window.addEventListener(`resize`, a, { passive: !0, signal: n.signal });
  i();
  
  // IST live clock
  const timeEl = e.querySelector('[data-clock]');
  function updateClock() {
    if (!timeEl) return;
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();
    const totalMinutes = (utcHours * 60 + utcMinutes + 330) % (24 * 60);
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    const s = utcSeconds;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    timeEl.textContent = `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${ampm}`;
  }
  updateClock();
  const timer = setInterval(updateClock, 1000);
  document.addEventListener(`astro:before-swap`, () => {
    n.abort();
    cancelAnimationFrame(r);
    clearInterval(timer);
  }, { once: !0 });
};
document.addEventListener(`astro:page-load`, initHbar);
initHbar();
</script>'''
    html = html.replace(clock_script_old.group(0), clock_script_new)

# 11. Adapt Preloader Logo and Block Text
arka_preloader_logo = '''<div class="pl__logo" data-pl-logo data-astro-cid-xtleqxzo style="display:flex;align-items:center;gap:12px;justify-content:center;">
  <img src="/assets/arka-icon.svg" alt="" width="32" height="32" data-astro-cid-xtleqxzo>
  <span style="font-family:var(--font-heading);font-weight:700;font-size:24px;letter-spacing:-0.03em;color:#fff;">ARKA TECHNOVATION</span>
</div>'''

html = re.sub(
    r'<div class="pl__logo" data-pl-logo[^>]*>.*?</div>',
    arka_preloader_logo,
    html,
    count=1,
    flags=re.DOTALL
)

html = html.replace(
    '<p class="pl__line" data-astro-cid-xtleqxzo>Junca, brand &amp; web studio</p>',
    '<p class="pl__line" data-astro-cid-xtleqxzo>Arka Technovation Private Limited</p>'
)
html = html.replace(
    '<p class="pl__line" data-astro-cid-xtleqxzo>Identity, websites, real-time 3D</p>',
    '<p class="pl__line" data-astro-cid-xtleqxzo>Enterprise Software, Search &amp; Media</p>'
)
html = html.replace(
    '<p class="pl__line" data-astro-cid-xtleqxzo>Based in France, working worldwide</p>',
    '<p class="pl__line" data-astro-cid-xtleqxzo>Based in Noida NCR, working worldwide</p>'
)

# 12. Adapt Footer
arka_footer_logo = '''<div class="footer__logo" data-astro-cid-jo6i4kqk style="display:flex;align-items:center;gap:10px;"><img src="/assets/arka-icon.svg" alt="" width="28" height="28" style="filter:brightness(0);"><span style="font-family:var(--font-heading);font-weight:700;font-size:18px;letter-spacing:-0.02em;color:#080808;">ARKA TECHNOVATION</span></div>'''

html = re.sub(
    r'<img class="footer__logo"[^>]*>',
    arka_footer_logo,
    html
)

html = html.replace(
    '© 2026 Studio Junca All rights reserved.',
    '© 2026 Arka Technovation Private Limited. All rights reserved.'
)
html = html.replace(
    'Junca is a French creative web studio for ambitious tech companies. We design and build premium websites on Framer, Astro or Next.js, using motion design and interactive 3D to make complex products clear and easy to buy.',
    'Arka Technovation Private Limited is an enterprise digital engineering, search engine authority, performance marketing, and corporate cinema studio based in Noida (Delhi NCR), India.'
)
html = html.replace(
    'https://www.linkedin.com/in/jules-robichon-07153b1aa/',
    'https://www.linkedin.com/company/arka-technovation/'
)
html = html.replace(
    'https://wa.me/33782336945',
    '/contact-us'
)
html = html.replace(
    'Whatsapp : +33 7 82 33 69 45',
    'Noida HQ • Delhi NCR, India'
)

# 13. Adapt FAQ section
html = html.replace(
    'What makes Junca Studio different from other web design agencies?',
    'What makes Arka Technovation different from other technology firms?'
)
html = html.replace(
    'Where is Junca Studio based, and do you work with international clients?',
    'Where is Arka Technovation based, and do you serve global clients?'
)
html = html.replace(
    'Junca Studio is a French studio. We work remotely with tech companies in France, the United Kingdom and the United States, in English or French, from the first call to launch.',
    'Arka Technovation Private Limited is headquartered in Noida (Delhi NCR), India. We partner with ambitious companies across India, North America, the UK, Europe, and the UAE from architecture to production.'
)

# 14. Write to index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Successfully assembled pristine replica index.html! Length:', len(html))
