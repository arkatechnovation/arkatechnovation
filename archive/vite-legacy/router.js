import { gsap } from 'gsap';
import { renderHeader } from './components/Header.js';
import { renderPillarsStage, initPillarsStage, ALL_PILLARS } from './components/PillarsStage.js';
import { renderManifestoPage, initManifestoPage } from './pages/ManifestoPage.js';
import { renderStudioPage, initStudioPage } from './pages/StudioPage.js';
import { renderContactPage, initContactPage } from './pages/ContactPage.js';
import { renderIndustryPage } from './pages/IndustryPage.js';
import { renderHomePage, initHomePage } from './pages/HomePage.js';

export class AppRouter {
  constructor(options = {}) {
    this.appRoot = document.getElementById('app-root') || document.getElementById('subpage-view');
    this.currentPath = null;
    this.pillarController = null;
    this.isTransitioning = false;
    this.onRouteChange = options.onRouteChange || (() => {});

    this.init();
  }

  init() {
    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('/')) {
        const href = link.getAttribute('href');
        if (!href.startsWith('//') && !link.hasAttribute('target')) {
          e.preventDefault();
          this.navigate(href);
        }
      }
    });

    // Popstate (browser back/forward)
    window.addEventListener('popstate', () => {
      this.resolve(window.location.pathname, false);
    });

    // Initial resolution
    this.resolve(window.location.pathname, false);

    // Noida IST clock interval
    setInterval(() => {
      const clockEl = document.getElementById('header-local-time');
      if (clockEl) {
        const now = new Date();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        const totalMinutes = (utcHours * 60 + utcMinutes + 330) % (24 * 60);
        const noidaHours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
        const noidaMins = String(totalMinutes % 60).padStart(2, '0');
        clockEl.textContent = `${noidaHours}:${noidaMins}`;
      }
    }, 1000);
  }

  navigate(path) {
    if (path === this.currentPath || this.isTransitioning) return;
    window.history.pushState({}, '', path);
    this.resolve(path, true);
  }

  resolve(path, isNewNavigation = false) {
    const cleanPath = path.replace(/\/$/, '') || '/';
    const prevPath = this.currentPath;
    this.currentPath = cleanPath;

    // Check if navigating between pillars
    const isPillarRoute = cleanPath.startsWith('/pillars/');
    const wasPillarRoute = prevPath && prevPath.startsWith('/pillars/');

    if (isPillarRoute && wasPillarRoute && this.pillarController) {
      const slug = cleanPath.split('/')[2];
      this.pillarController.goToSlug(slug);
      this.updateHeaderActiveLink(cleanPath);
      const titleName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${titleName} | Arka Technovation`;
      this.onRouteChange(cleanPath);
      return;
    }

    if (cleanPath === '/') {
      this.transitionToSubpage(renderHomePage(), initHomePage, cleanPath);
      document.title = 'Arka Technovation | Enterprise Software, Search & Media • Noida';
    } else if (isPillarRoute) {
      const slug = cleanPath.split('/')[2];
      this.transitionToPillars(slug, prevPath);
      const titleName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${titleName} | Arka Technovation`;
    } else if (cleanPath === '/manifesto') {
      this.transitionToSubpage(renderManifestoPage(), initManifestoPage, cleanPath);
      document.title = 'Manifesto | Arka Technovation';
    } else if (cleanPath === '/studio') {
      this.transitionToSubpage(renderStudioPage(), initStudioPage, cleanPath);
      document.title = 'Studio & Noida HQ | Arka Technovation';
    } else if (cleanPath === '/contact-us' || cleanPath === '/contact') {
      this.transitionToSubpage(renderContactPage(), initContactPage, cleanPath);
      document.title = 'Contact & Initiate Project | Arka Technovation';
    } else if (cleanPath.startsWith('/industries/')) {
      const slug = cleanPath.split('/')[2];
      this.transitionToSubpage(renderIndustryPage(slug), () => {}, cleanPath);
      const titleName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${titleName} | Arka Technovation`;
    } else {
      // Fallback to Home
      this.transitionToSubpage(renderHomePage(), initHomePage, '/');
      document.title = 'Arka Technovation | Enterprise Software, Search & Media • Noida';
    }

    this.onRouteChange(cleanPath);
  }

  transitionToPillars(slug, prevPath) {
    this.isTransitioning = true;
    const targetEl = this.appRoot || document.getElementById('app-root');
    if (!targetEl) return;

    if (this.pillarController) {
      this.pillarController.destroy();
      this.pillarController = null;
    }

    const headerHtml = renderHeader(`/pillars/${slug}`);
    const stageHtml = renderPillarsStage(slug);

    targetEl.innerHTML = headerHtml + stageHtml;
    targetEl.scrollTop = 0;
    window.scrollTo(0, 0);

    this.pillarController = initPillarsStage(slug, (newSlug) => {
      this.currentPath = `/pillars/${newSlug}`;
      window.history.pushState({}, '', `/pillars/${newSlug}`);
      this.updateHeaderActiveLink(`/pillars/${newSlug}`);
      const titleName = newSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      document.title = `${titleName} | Arka Technovation`;
    });

    this.bindHeaderControls();
    this.isTransitioning = false;
  }

  transitionToSubpage(htmlContent, initFn, path) {
    this.isTransitioning = true;
    const targetEl = this.appRoot || document.getElementById('app-root');
    if (!targetEl) return;

    if (this.pillarController) {
      this.pillarController.destroy();
      this.pillarController = null;
    }

    targetEl.innerHTML = htmlContent;
    window.scrollTo({ top: 0, behavior: 'instant' });

    this.bindHeaderControls();
    if (typeof initFn === 'function') {
      try {
        initFn();
      } catch (err) {
        console.warn('initFn execution error:', err);
      }
    }
    this.isTransitioning = false;
  }

  updateHeaderActiveLink(currentPath) {
    const navLinks = document.querySelectorAll('.site-header-nav .nav-item-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === currentPath;
      if (currentPath.startsWith('/pillars/')) {
        if (isActive) {
          link.className = 'nav-item-link cursor-pointer text-sm font-medium transition-all duration-300 px-5 py-3 block opacity-100 font-semibold text-white';
        } else {
          link.className = 'nav-item-link cursor-pointer text-sm font-medium transition-all duration-300 px-5 py-3 block blur-[2.5px] opacity-40 hover:blur-none hover:opacity-100';
        }
      }
    });
  }

  bindHeaderControls() {
    const mobileBtn = document.getElementById('mobile-menu-trigger');
    const drawer = document.getElementById('mobile-menu-drawer');
    const closeBtn = document.getElementById('close-mobile-menu');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.remove('hidden');
        drawer.classList.add('flex');
        gsap.fromTo(drawer, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        gsap.to(drawer, {
          opacity: 0,
          scale: 0.95,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            drawer.classList.add('hidden');
            drawer.classList.remove('flex');
          }
        });
      });
    }
  }
}
