import { gsap } from 'gsap';
import { renderHeader } from '../components/Header.js';
import { renderLogosTicker } from '../components/LogosTicker.js';
import { renderFooter } from '../components/Footer.js';

export function renderPillarPage(pillarData) {
  const {
    slug,
    name,
    subtitle,
    consultingLabel,
    consultingDescription,
    heroImage,
    unleashTitle,
    unleashDescription,
    detailedCards,
    citTitle,
    projects,
    nextPillar,
  } = pillarData;

  const currentPath = `/pillars/${slug}`;

  // Build the 4 Detailed Expandable Cards
  const cardsHtml = detailedCards.map((card, idx) => {
    const itemsHtml = card.items.map(item => `
      <div class="detailed-sub-item">
        <hr class="mt-4 mb-3 border-white/30" />
        <p class="text-[1.125rem] font-medium mb-2">${item.title}</p>
        <p class="text-[0.8125rem] opacity-90 leading-[135%] font-normal">${item.description}</p>
      </div>
    `).join('');

    return `
      <div class="detailed-accordion-card relative cursor-pointer h-full shrink-0 grow overflow-hidden rounded-2xl transition-all duration-500 bg-[#F2F2F2] p-8 lg:p-10 text-black" data-card-index="${idx}">
        <div class="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border border-black/15 card-toggle-icon transition-all duration-300">
          <svg class="icon-plus w-4 h-4 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg class="icon-minus w-4 h-4 hidden transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14" />
          </svg>
        </div>

        <div class="flex flex-col justify-between h-full">
          <div>
            <p class="font-medium text-xs !font-mono tracking-wider opacity-60 card-category-label uppercase">${card.title}</p>
            <div class="mt-4 lg:mt-6">
              <h3 class="text-xl lg:text-3xl font-light tracking-[0.02rem] leading-[130%] card-main-desc">
                ${card.description}
              </h3>
            </div>
          </div>

          <div class="detailed-items-drawer max-h-0 opacity-0 overflow-hidden mt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              ${itemsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Build the 3 Case Studies Cards
  const projectsHtml = projects.map(proj => `
    <div class="w-full">
      <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="${proj.link || '/contact-us'}">
        <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
          <img alt="${proj.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${proj.image}" />
        </div>
        <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase tracking-wider">${proj.name}</p>
        <p class="text-base text-black font-normal">${proj.tagline}</p>
      </a>
    </div>
  `).join('');

  return `
    <div class="subpage-wrapper-authentic bg-white text-black min-h-screen">
      ${renderHeader(currentPath)}

      <!-- TOP CONSULTING INTRO -->
      <div class="pt-28 md:pt-36 pb-12 lg:pb-16 max-w-4xl mx-auto px-4">
        <p class="!font-mono text-sm opacity-50 mb-4 tracking-wider uppercase">${consultingLabel || subtitle}</p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl tracking-[0.02rem] leading-[130%] font-light text-black">
          ${consultingDescription}
        </h1>
      </div>

      <!-- FULL-WIDTH HERO IMAGE -->
      <div class="max-w-6xl mx-auto px-4 mb-16 lg:mb-24">
        <div class="w-full max-h-[80dvh] aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
          <img class="w-full h-full object-cover object-center" src="${heroImage}" alt="${name} Hero" />
        </div>
      </div>

      <!-- UNLEASH SECTION -->
      <div class="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4 pt-10 lg:pt-16 pb-12 gap-8 items-start">
        <h2 class="w-full md:w-1/2 !font-mono text-4xl lg:text-5xl font-light leading-[115%] max-w-xl text-black">
          ${unleashTitle}
        </h2>
        <div class="w-full md:w-1/2 text-lg lg:text-xl text-black/80 leading-[160%] max-w-md">
          <p>${unleashDescription}</p>
        </div>
      </div>

      <!-- 4 DETAILED EXPANDABLE ACCORDION CARDS (2 PER ROW) -->
      <div class="max-w-6xl mx-auto px-4 my-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="pillar-accordion-grid">
          ${cardsHtml}
        </div>
      </div>

      <!-- CITATION TITLE BANNER -->
      <div class="py-20 lg:py-28 text-center max-w-5xl mx-auto px-4">
        <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-4">OUR PRINCIPLE</p>
        <p class="text-3xl sm:text-5xl lg:text-6xl font-light !font-mono leading-[120%] text-balance">
          "${citTitle}"
        </p>
      </div>

      <!-- FEATURED CASE STUDIES -->
      <div class="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-6">FEATURED WORK IN THIS PILLAR</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          ${projectsHtml}
        </div>
      </div>

      <!-- 21 CLIENT LOGOS TICKER -->
      ${renderLogosTicker('We think, design and develop world-class digital products for forward-thinking brands.')}

      <!-- NEXT PILLAR CALLOUT -->
      ${nextPillar ? `
        <div class="py-24 text-center border-t border-black/10 bg-neutral-50/60">
          <p class="!font-mono text-xs opacity-50 mb-4 tracking-widest uppercase">CONTINUE EXPLORING</p>
          <a href="/pillars/${nextPillar.slug}" class="text-3xl lg:text-5xl font-light hover:opacity-70 transition-opacity !font-mono flex items-center justify-center gap-4 cursor-pointer text-black">
            <span>${nextPillar.name} Workflow</span>
            <svg viewBox="0 0 50 50" width="36" height="36" class="fill-none stroke-current" aria-hidden="true">
              <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1"></circle>
              <g transform="translate(7, 10) scale(1)">
                <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="1"></path>
                <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1"></path>
                <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1"></path>
              </g>
            </svg>
          </a>
        </div>
      ` : ''}

      ${renderFooter()}
    </div>
  `;
}

/**
 * Interactive Accordion Card Behavior with GSAP Animations
 * Toggles expanded card to royal cobalt blue (#4E71FF) and reveals sub-items
 * with smooth GSAP-powered expansion matching production behavior.
 */
export function initPillarInteractions() {
  const cards = document.querySelectorAll('.detailed-accordion-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isAlreadyActive = card.classList.contains('active-blue');

      // Close all cards with GSAP
      cards.forEach(c => {
        if (c === card && !isAlreadyActive) return; // Skip the card we're about to open
        
        const wasActive = c.classList.contains('active-blue');
        c.classList.remove('active-blue', 'bg-[#4E71FF]', 'text-white');
        c.classList.add('bg-[#F2F2F2]', 'text-black');
        c.querySelector('.icon-plus')?.classList.remove('hidden');
        c.querySelector('.icon-minus')?.classList.add('hidden');
        
        const drawer = c.querySelector('.detailed-items-drawer');
        if (drawer && wasActive) {
          gsap.to(drawer, {
            maxHeight: 0,
            opacity: 0,
            marginTop: 0,
            duration: 0.4,
            ease: 'power3.inOut',
          });
        }
      });

      // If clicked card wasn't active, activate it with GSAP
      if (!isAlreadyActive) {
        card.classList.remove('bg-[#F2F2F2]', 'text-black');
        card.classList.add('active-blue', 'bg-[#4E71FF]', 'text-white');
        card.querySelector('.icon-plus')?.classList.add('hidden');
        card.querySelector('.icon-minus')?.classList.remove('hidden');
        
        const drawer = card.querySelector('.detailed-items-drawer');
        if (drawer) {
          // Measure natural height
          drawer.style.maxHeight = 'none';
          const naturalHeight = drawer.scrollHeight;
          drawer.style.maxHeight = '0px';

          gsap.to(drawer, {
            maxHeight: naturalHeight + 20,
            opacity: 1,
            marginTop: 24,
            duration: 0.6,
            ease: 'power4.out',
          });

          // Stagger sub-items entrance
          const subItems = drawer.querySelectorAll('.detailed-sub-item');
          gsap.fromTo(subItems,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
              stagger: 0.08,
              delay: 0.15,
            }
          );
        }

        // Animate toggle icon
        const toggleIcon = card.querySelector('.card-toggle-icon');
        if (toggleIcon) {
          gsap.fromTo(toggleIcon,
            { scale: 0.8, rotation: -90 },
            { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(1.5)' }
          );
        }
      }
    });
  });

  // Scroll-triggered fade-in for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Observe key sections for scroll-reveal
  document.querySelectorAll('#pillar-accordion-grid, .subpage-wrapper-authentic h2, .subpage-wrapper-authentic > div > div:last-child').forEach(el => {
    if (el) {
      el.style.opacity = '0';
      observer.observe(el);
    }
  });
}
