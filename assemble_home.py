import re

with open('junca_sec_1_clients.html') as f: clients = f.read()
with open('junca_sec_2_statement.html') as f: statement = f.read()
with open('junca_sec_3_pf.html') as f: pf = f.read()
with open('junca_sec_4_fw.html') as f: fw = f.read()
with open('junca_sec_5_reel.html') as f: reel = f.read()
with open('junca_sec_6_ws.html') as f: ws = f.read()
with open('junca_sec_7_ind.html') as f: ind = f.read()
with open('junca_sec_8_hn.html') as f: hn = f.read()
with open('junca_sec_9_voice.html') as f: voice = f.read()
with open('junca_sec_10_faqsec.html') as f: faqsec = f.read()
with open('junca_sec_11_footer.html') as f: footer = f.read()

# Adapt clients logos to use local available assets
clients = clients.replace('/images/clients/logos/alt-a.svg', '/assets/black-deloitte.png')
clients = clients.replace('/images/clients/logos/artefact.svg', '/assets/black-banca-sella.png')
clients = clients.replace('/images/clients/logos/botblox.svg', '/assets/black-samso.png')
clients = clients.replace('/images/clients/logos/kestrix.svg', '/assets/black-bikeroom.png')
clients = clients.replace('/images/clients/logos/une-autre-ile.svg', '/assets/black-tag.png')
clients = clients.replace('/images/clients/logos/blushmed.svg', '/assets/black-beyond-doc.png')
clients = clients.replace('/images/clients/logos/hylight.svg', '/assets/black-cercacasa.png')
clients = clients.replace('/images/clients/logos/skipper-ndt.svg', '/assets/black-vitesicure.png')
clients = clients.replace('/images/clients/logos/blink.svg', '/assets/black-deloitte.png')

# Adapt statement
statement = statement.replace('Your technology has outgrown your brand and your website. We close the gap: identity, site and 3D, by one team.', 'Your technology has outgrown your brand and your market presence. We close the gap: scalable software, algorithmic search authority, revenue performance, and cinema-grade corporate media, engineered by one senior team.')

# Adapt pf (services) images and links
pf = pf.replace('/images/services/investor-ready-website/header.webp', '/assets/software_design_collage_1792941586522.jpg')
pf = pf.replace('https://cdn.sanity.io/images/j2nbmkw7/production/e2eeedfab889e74d390d912bcc206a8fb0a8d3d8-1920x1080.webp?w=1800&amp;auto=format', '/assets/seo_intelligence_collage_1792941733990.jpg')
pf = pf.replace('/images/services/rebranding/header.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
pf = pf.replace('https://cdn.sanity.io/images/j2nbmkw7/production/c125ed90b6c0a96df8600f7a460894caa25996c2-2560x1440.webp?w=1800&amp;auto=format', '/assets/corporate_video_collage_1792941789197.jpg')
pf = pf.replace('/images/home/services-seo-geo.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')

# Adapt fw (projects) images and links
fw = fw.replace('/_astro/botblox.DvaCbemV_ZSb4MQ.webp', '/assets/aste360-1.webp')
fw = fw.replace('/_astro/kestrix.8sH_V8TI_Z1nHs5w.webp', '/assets/catasto-preview.jpg')
fw = fw.replace('/_astro/hylight-nouveau-logo.Nws9kOxS_1Ma9J3.webp', '/assets/bikeroom-project-preview.webp')
fw = fw.replace('/_astro/artefact.DHuxwflK_1pi0fd.webp', '/assets/ai-cercacasa-home-1.jpg')
fw = fw.replace('/_astro/skipperndt.Cx65QSHU_1NN0nk.webp', '/assets/corporate-video-collage.jpg')

# Adapt reel
reel = reel.replace('/images/team/team-pixel.webp', '/assets/noida_studio_collage_1792941810609.jpg')
reel = reel.replace('poster="/_astro/reel-poster.DxqQjAMW_Z1SjGf3.webp"', 'poster="/assets/hero_artcraft_collage_1792941565238.jpg"')
reel = reel.replace('<video class="fvideo" poster="/assets/hero_artcraft_collage_1792941565238.jpg" muted loop playsinline preload="none" crossorigin="anonymous" data-lazy-video><source src="https://assets.juncastudio.com/Home/botblox-home.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" media="(min-width: 810px)"><source src="https://assets.juncastudio.com/Home/botblox-home.mp4" type="video/mp4" media="(min-width: 810px)"><source src="https://assets.juncastudio.com/Home/botblox-home-sm.av1.mp4" type="video/mp4; codecs=av01.0.08M.08"><source src="https://assets.juncastudio.com/Home/botblox-home-sm.mp4" type="video/mp4"></video>', '<img src="/assets/hero_artcraft_collage_1792941565238.jpg" style="width:100%;height:100%;object-fit:cover;">')

# Adapt ws images
ws = ws.replace('/_astro/why-direct-access.DJj_3vDy_2ilzqR.webp', '/assets/software_design_collage_1792941586522.jpg')
ws = ws.replace('/_astro/why-portail-junca.C3vy8lcq_Z1IoLuu.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
ws = ws.replace('/_astro/why-no-code.CD2pE0cx_ZupfLj.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
ws = ws.replace('/_astro/why-responsive-team.CUOm7YkS_2rEQPE.webp', '/assets/noida_studio_collage_1792941810609.jpg')

# Adapt ind images
ind = ind.replace('/images/industries/deeptech.webp', '/assets/software_design_collage_1792941586522.jpg')
ind = ind.replace('/images/industries/climate-tech.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')
ind = ind.replace('/images/industries/ai-automation.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
ind = ind.replace('/images/industries/industries-manufacturing.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
ind = ind.replace('/images/industries/robotics-hardware.webp', '/assets/corporate_video_collage_1792941789197.jpg')
ind = ind.replace('/images/industries/saas.webp', '/assets/noida_studio_collage_1792941810609.jpg')

# Adapt voice images
voice = voice.replace('/images/clients/josh.webp', '/assets/software_design_collage_1792941586522.jpg')
voice = voice.replace('/images/clients/martin.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')
voice = voice.replace('/images/clients/luigi.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
voice = voice.replace('/images/clients/lucy.webp', '/assets/marketing_growth_collage_1792941768048.jpg')

# Adapt footer
footer = footer.replace('Junca is a French creative web studio', 'Arka Technovation is an institutional technology and media enterprise')
footer = footer.replace('contact@juncastudio.com', 'contact@arkatechnovation.com')
footer = footer.replace('+33 7 82 33 69 45', '+91 97114 87316')
footer = footer.replace('/images/logo/junca-wordmark-ink.svg', '/assets/arka-icon.svg')
footer = footer.replace('© 2026 Studio Junca All rights reserved.', '© 2026 Arka Technovation Private Limited • Director Kranti Parashar • Noida HQ')

# Clean out <source> tags so browser uses <img>
for var_name in ['clients', 'statement', 'pf', 'fw', 'reel', 'ws', 'ind', 'hn', 'voice', 'faqsec', 'footer']:
    val = locals()[var_name]
    val = re.sub(r'<source[^>]*>', '', val)
    locals()[var_name] = val

file_content = """import { gsap } from 'gsap';
import { renderHeader } from '../components/Header.js';

export function renderHomePage() {
  return `
    <div class="junca-home-wrapper subpage-wrapper-authentic page-white relative min-h-screen text-black bg-[#fbfbfb]">
      ${renderHeader('/')}

      <!-- 1. HERO SECTION (PRESERVED EXACTLY AS IT WAS) -->
      <section class="min-h-screen h-[100dvh] flex flex-col justify-between items-center text-center relative z-10 w-full px-4 lg:px-8 pt-28 pb-10 overflow-hidden text-white" id="home-hero">
        <div class="absolute inset-0 bg-radial-gradient-hero pointer-events-none -z-10"></div>
        <div class="w-full"></div>
        <div class="max-w-4xl mx-auto flex flex-col items-center justify-center my-auto px-4">
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] !font-mono uppercase tracking-widest text-[#FF9900] mb-8">
            <span class="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
            <span>ARKA TECHNOVATION • NOIDA, DELHI NCR</span>
          </div>

          <h1 class="!font-mono text-4xl sm:text-6xl lg:text-7xl font-light leading-[115%] sm:leading-[120%] text-balance tracking-tight mb-8 text-white drop-shadow-2xl">
            We engineer digital dominance.
          </h1>

          <p class="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
            Architecting mission-critical cloud software, commanding search engine authority, deploying high-ROAS performance engines, and producing cinematic corporate films.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <button id="home-scroll-down-btn" class="px-8 py-3.5 rounded-full bg-white text-black font-medium text-xs !font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-xl cursor-pointer">
              <span>Explore Corporate Overview</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </button>
            <a href="/contact-us" class="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-xs !font-mono uppercase tracking-wider hover:bg-white/15 transition-all">
              Initiate Engagement
            </a>
          </div>
        </div>

        <div class="w-full max-w-6xl mx-auto flex items-center justify-between text-xs !font-mono text-white/60 pt-6">
          <div class="flex items-center gap-3">
            <span class="inline-block w-2 h-2 rounded-full bg-[#ed3327]"></span>
            <span>DIRECTOR & CEO: KRANTI PARASHAR</span>
          </div>
          <div class="hidden sm:flex items-center gap-2 tracking-widest uppercase">
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      <!-- 2. EXACT JUNCA STUDIO EDITORIAL ARCHITECTURE -->
      <main id="home-content" class="page-white relative z-20">
""" + clients + "\n" + statement + "\n" + pf + "\n" + fw + "\n" + reel + "\n" + ws + "\n" + ind + "\n" + hn + "\n" + voice + "\n" + faqsec + "\n" + footer + """
      </main>
    </div>
  `;
}

export function initHomePage() {
  const scrollDownBtn = document.getElementById('home-scroll-down-btn');
  const homeContent = document.getElementById('home-content');
  const subpageView = document.getElementById('subpage-view');
  const header = document.getElementById('site-global-header');

  if (scrollDownBtn && homeContent && subpageView) {
    scrollDownBtn.addEventListener('click', () => {
      subpageView.scrollTo({
        top: homeContent.offsetTop,
        behavior: 'smooth'
      });
    });
  }

  const handleScroll = () => {
    if (!homeContent || !header || !subpageView) return;
    const isPastHero = subpageView.scrollTop >= (homeContent.offsetTop - 70);
    header.classList.toggle('header-on-white', isPastHero);
    header.classList.toggle('text-black', isPastHero);
    header.classList.toggle('header-on-dark', !isPastHero);
    header.classList.toggle('text-white', !isPastHero);
    if (window.app && window.app.cursor) {
      window.app.cursor.setInvert(isPastHero);
    }
  };

  if (subpageView) {
    subpageView.addEventListener('scroll', handleScroll);
  }

  // Industry Section interactive slider
  const indSlides = document.querySelectorAll('.ind__slide');
  const indTrack = document.getElementById('ind-track') || document.querySelector('[data-ind-track]');
  const indNotes = document.querySelectorAll('.ind__note');
  const indImgs = document.querySelectorAll('.ind__img');

  indSlides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      if (indTrack) indTrack.style.setProperty('--k', idx);
      indSlides.forEach((s, i) => s.classList.toggle('is-on', i === idx));
      indNotes.forEach((n, i) => n.classList.toggle('is-on', i === idx));
      indImgs.forEach((img, i) => img.classList.toggle('is-on', i === idx));
    });
  });

  // HN news horizontal track arrow controls
  const prevBtn = document.querySelector('[data-hn-prev]');
  const nextBtn = document.querySelector('[data-hn-next]');
  const hnStrip = document.querySelector('[data-hn-strip]');

  if (prevBtn && nextBtn && hnStrip) {
    prevBtn.addEventListener('click', () => {
      hnStrip.scrollBy({ left: -400, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      hnStrip.scrollBy({ left: 400, behavior: 'smooth' });
    });
  }

  // Back to top link
  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop && subpageView) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      subpageView.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
"""

with open('src/pages/HomePage.js', 'w') as out:
    out.write(file_content)

print('Generated HomePage.js cleanly! Total size:', len(file_content))
