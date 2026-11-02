import re

# 1. Load all Junca sections
with open('junca_sec_header_chrome.html') as f: chrome = f.read()
with open('junca_sec_scrim_drawer.html') as f: scrim_drawer = f.read()
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

# 2. Adapt Chrome / Navigation
chrome = chrome.replace('/images/logo/junca-wordmark-white.svg', '/assets/arka-icon.svg')
chrome = chrome.replace('alt="Junca Studio"', 'alt="Arka Technovation"')
chrome = chrome.replace('Junca Studio home', 'Arka Technovation Home')
chrome = chrome.replace('/contact', '/contact-us')

scrim_drawer = scrim_drawer.replace('contact@juncastudio.com', 'contact@arkatechnovation.com')
scrim_drawer = scrim_drawer.replace('+33 7 82 33 69 45', '+91 97114 87316')
scrim_drawer = scrim_drawer.replace('/contact', '/contact-us')

# 3. Adapt clients logos
clients = clients.replace('/images/clients/logos/alt-a.svg', '/assets/black-deloitte.png')
clients = clients.replace('/images/clients/logos/artefact.svg', '/assets/black-banca-sella.png')
clients = clients.replace('/images/clients/logos/botblox.svg', '/assets/black-samso.png')
clients = clients.replace('/images/clients/logos/kestrix.svg', '/assets/black-bikeroom.png')
clients = clients.replace('/images/clients/logos/une-autre-ile.svg', '/assets/black-tag.png')
clients = clients.replace('/images/clients/logos/blushmed.svg', '/assets/black-beyond-doc.png')
clients = clients.replace('/images/clients/logos/hylight.svg', '/assets/black-cercacasa.png')
clients = clients.replace('/images/clients/logos/skipper-ndt.svg', '/assets/black-vitesicure.png')
clients = clients.replace('/images/clients/logos/blink.svg', '/assets/black-deloitte.png')

# 4. Adapt statement
statement = statement.replace('Your technology has outgrown your brand and your website. We close the gap: identity, site and 3D, by one team.', 'Your technology has outgrown your brand and your market presence. We close the gap: scalable software, algorithmic search authority, revenue performance, and cinema-grade corporate media, engineered by one senior team.')

# 5. Adapt pf (services) images
pf = pf.replace('/images/services/investor-ready-website/header.webp', '/assets/software_design_collage_1792941586522.jpg')
pf = pf.replace('https://cdn.sanity.io/images/j2nbmkw7/production/e2eeedfab889e74d390d912bcc206a8fb0a8d3d8-1920x1080.webp?w=1800&amp;auto=format', '/assets/seo_intelligence_collage_1792941733990.jpg')
pf = pf.replace('/images/services/rebranding/header.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
pf = pf.replace('https://cdn.sanity.io/images/j2nbmkw7/production/c125ed90b6c0a96df8600f7a460894caa25996c2-2560x1440.webp?w=1800&amp;auto=format', '/assets/corporate_video_collage_1792941789197.jpg')
pf = pf.replace('/images/home/services-seo-geo.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')

# 6. Adapt fw (projects) images
fw = fw.replace('/_astro/botblox.DvaCbemV_ZSb4MQ.webp', '/assets/aste360-1.webp')
fw = fw.replace('/_astro/kestrix.8sH_V8TI_Z1nHs5w.webp', '/assets/catasto-preview.jpg')
fw = fw.replace('/_astro/hylight-nouveau-logo.Nws9kOxS_1Ma9J3.webp', '/assets/bikeroom-project-preview.webp')
fw = fw.replace('/_astro/artefact.DHuxwflK_1pi0fd.webp', '/assets/ai-cercacasa-home-1.jpg')
fw = fw.replace('/_astro/skipperndt.Cx65QSHU_1NN0nk.webp', '/assets/corporate-video-collage.jpg')

# 7. Adapt reel
reel = reel.replace('/images/team/team-pixel.webp', '/assets/noida_studio_collage_1792941810609.jpg')
reel = reel.replace('poster="/_astro/reel-poster.DxqQjAMW_Z1SjGf3.webp"', 'poster="/assets/hero_artcraft_collage_1792941565238.jpg"')
reel = re.sub(r'<video[^>]*>.*?</video>', '<img src="/assets/hero_artcraft_collage_1792941565238.jpg" style="width:100%;height:100%;object-fit:cover;">', reel, flags=re.DOTALL)

# 8. Adapt ws images
ws = ws.replace('/_astro/why-direct-access.DJj_3vDy_2ilzqR.webp', '/assets/software_design_collage_1792941586522.jpg')
ws = ws.replace('/_astro/why-portail-junca.C3vy8lcq_Z1IoLuu.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
ws = ws.replace('/_astro/why-no-code.CD2pE0cx_ZupfLj.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
ws = ws.replace('/_astro/why-responsive-team.CUOm7YkS_2rEQPE.webp', '/assets/noida_studio_collage_1792941810609.jpg')

# 9. Adapt ind images
ind = ind.replace('/images/industries/deeptech.webp', '/assets/software_design_collage_1792941586522.jpg')
ind = ind.replace('/images/industries/climate-tech.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')
ind = ind.replace('/images/industries/ai-automation.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
ind = ind.replace('/images/industries/industries-manufacturing.webp', '/assets/marketing_growth_collage_1792941768048.jpg')
ind = ind.replace('/images/industries/robotics-hardware.webp', '/assets/corporate_video_collage_1792941789197.jpg')
ind = ind.replace('/images/industries/saas.webp', '/assets/noida_studio_collage_1792941810609.jpg')

# 10. Adapt voice images
voice = voice.replace('/images/clients/josh.webp', '/assets/software_design_collage_1792941586522.jpg')
voice = voice.replace('/images/clients/martin.webp', '/assets/hero_artcraft_collage_1792941565238.jpg')
voice = voice.replace('/images/clients/luigi.webp', '/assets/seo_intelligence_collage_1792941733990.jpg')
voice = voice.replace('/images/clients/lucy.webp', '/assets/marketing_growth_collage_1792941768048.jpg')

# 11. Adapt footer
footer = footer.replace('Junca is a French creative web studio for ambitious tech companies. We design and build premium websites on Framer, Astro or Next.js, using motion design and interactive 3D to make complex products clear and easy to buy.', 'Arka Technovation Private Limited is an enterprise digital engineering, search authority, performance marketing, and corporate cinema company based in Noida (Delhi NCR), India. Led by Founder & CEO Kranti Parashar.')
footer = footer.replace('contact@juncastudio.com', 'contact@arkatechnovation.com')
footer = footer.replace('+33 7 82 33 69 45', '+91 97114 87316')
footer = footer.replace('/images/logo/junca-wordmark-ink.svg', '/assets/arka-icon.svg')
footer = footer.replace('© 2026 Studio Junca All rights reserved.', '© 2026 Arka Technovation Private Limited • Founder & CEO Kranti Parashar • Noida HQ')
footer = footer.replace('/contact', '/contact-us')

# Clean out <source> tags in all sections so standard <img> tags are used
for var_name in ['clients', 'statement', 'pf', 'fw', 'reel', 'ws', 'ind', 'hn', 'voice', 'faqsec', 'footer']:
    val = locals()[var_name]
    val = re.sub(r'<source[^>]*>', '', val)
    locals()[var_name] = val

# Hero section with Authentic Junca 3D Three.js Robot Integration
hero = """
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
"""

main_html = hero + "\n" + clients + "\n" + statement + "\n" + pf + "\n" + fw + "\n" + reel + "\n" + ws + "\n" + ind + "\n" + hn + "\n" + voice + "\n" + faqsec

with open('src/pages/HomePage.js', 'w') as out:
    out.write("""// Authentic Junca Studio Reverse Engineered Architecture for Arka Technovation
import { gsap } from 'gsap';

export function renderHomePage() {
  return `
    <div class="chrome-root">
""" + chrome + "\n" + scrim_drawer + """
    </div>

    <main id="top" class="main-flow page-white text-black relative z-20">
""" + main_html + """
    </main>

""" + footer + """
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
""")

print("Successfully written complete HomePage.js with Authentic Three.js Robot Integration!")
