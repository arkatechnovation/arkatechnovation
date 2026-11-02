/**
 * Unified Header for Arka Technovation (Noida)
 * Adapts seamlessly between Home (brand logo + forward link) and Subpages (circular back button + active nav indicator).
 * Inverts colors dynamically between dark mode (white text) and light mode (black text).
 */
export function renderHeader(currentPath = '/') {
  const isHome = currentPath === '/';
  const isPillar = currentPath.startsWith('/pillars/');
  
  const navItems = [
    { label: 'Software.', path: '/pillars/software-design' },
    { label: 'SEO.', path: '/pillars/seo' },
    { label: 'Marketing.', path: '/pillars/digital-marketing' },
    { label: 'Video.', path: '/pillars/corporate-video' },
    { label: 'Manifesto', path: '/manifesto' },
    { label: 'Studio', path: '/studio' },
  ];

  // Inverted header (black text) on white subpages: Studio, Contact Us, Industries
  const isWhiteHeader = ['/contact-us', '/studio', '/industries/'].some(p => currentPath.startsWith(p));

  const leftHtml = isHome
    ? `
      <a href="/" class="brand-wrapper cursor-link" id="brand-logo-link" data-cursor="ARKA HOME" style="display:flex;align-items:center;">
        <img src="/images/logo/arka-logo-black.png" alt="ARKA Technovation Private Limited" style="height:64px;width:auto;object-fit:contain;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5));" />
      </a>
    `
    : `
      <a href="/" class="flex gap-2 items-center hover:opacity-75 transition-opacity cursor-link group" data-cursor="BACK TO HOME">
        <div class="rotate-180 transform transition-transform group-hover:-translate-x-1">
          <svg viewBox="0 0 50 50" width="32" height="32" class="fill-none stroke-current" aria-hidden="true">
            <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1.2"></circle>
            <g transform="translate(7, 10) scale(1)">
              <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="1.2"></path>
              <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1.2"></path>
              <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1.2"></path>
            </g>
          </svg>
        </div>
        <div class="flex flex-wrap gap-x-2 text-xs !font-mono">
          <span class="opacity-60">Arka Technovation • Noida</span>
        </div>
      </a>
    `;

  const navLinksHtml = navItems.map(item => {
    const isActive = currentPath === item.path;
    let itemClass = 'opacity-80 hover:opacity-100';

    if (isPillar) {
      itemClass = isActive
        ? 'opacity-100 font-semibold'
        : 'blur-[2.5px] opacity-40 hover:blur-none hover:opacity-100';
    } else if (isActive) {
      itemClass = 'opacity-100 font-semibold';
    }

    return `
      <li class="relative">
        <a href="${item.path}" class="nav-item-link cursor-pointer text-sm font-medium transition-all duration-300 px-4 py-3 block ${itemClass}" data-cursor="${item.label.toUpperCase()}">
          ${item.label}
        </a>
      </li>
    `;
  }).join('');

  // Local Time computation for Noida (IST = UTC + 5:30)
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const totalMinutes = (utcHours * 60 + utcMinutes + 330) % (24 * 60);
  const noidaHours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const noidaMins = String(totalMinutes % 60).padStart(2, '0');
  const isDaytime = parseInt(noidaHours, 10) >= 6 && parseInt(noidaHours, 10) < 19;

  return `
    <header id="site-global-header" class="site-header-nav fixed top-0 left-0 w-full px-4 lg:px-10 flex justify-between items-center z-[1003] py-5 transition-all duration-400 ${isWhiteHeader ? 'header-on-white text-black' : 'header-on-dark text-white'}">
      <div class="grow lg:w-3/12 cursor-pointer text-xs flex gap-2 items-center">
        ${leftHtml}
      </div>

      <nav class="hidden lg:flex grow w-6/12 justify-center">
        <ul class="flex items-center gap-1 list-none m-0 p-0">
          ${navLinksHtml}
        </ul>
      </nav>

      <div class="flex w-auto lg:w-3/12 justify-end items-center gap-4">
        <!-- Noida Clock Widget -->
        <div class="hidden xl:flex items-center gap-2 text-[0.625rem] font-semibold tracking-wider opacity-80">
          <span>NOIDA, IN</span>
          <span id="header-local-time">${noidaHours}:${noidaMins}</span>
          <span class="text-[9px] font-mono opacity-60">IST</span>
          <span class="rounded-full h-5 w-5 flex justify-center items-center ${isWhiteHeader ? 'bg-black/10' : 'bg-white/20'}">
            ${isDaytime ? '☀️' : '🌙'}
          </span>
        </div>

        <button class="mobile-menu-trigger lg:hidden" id="mobile-menu-trigger" aria-label="Toggle Navigation">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </header>

    <!-- Mobile Fullscreen Menu -->
    <div id="mobile-menu-drawer" class="mobile-menu-drawer fixed inset-0 backdrop-blur-2xl bg-black/95 z-[1002] hidden flex-col justify-center items-center text-center">
      <nav class="flex flex-col gap-6 text-3xl !font-mono text-white">
        <a href="/pillars/software-design" class="mobile-nav-link py-2 hover:opacity-70">Software.</a>
        <a href="/pillars/seo" class="mobile-nav-link py-2 hover:opacity-70">SEO.</a>
        <a href="/pillars/digital-marketing" class="mobile-nav-link py-2 hover:opacity-70">Marketing.</a>
        <a href="/pillars/corporate-video" class="mobile-nav-link py-2 hover:opacity-70">Video.</a>
        <a href="/manifesto" class="mobile-nav-link py-2 hover:opacity-70">Manifesto</a>
        <a href="/studio" class="mobile-nav-link py-2 hover:opacity-70">Studio</a>
        <a href="/contact-us" class="mobile-nav-link py-2 text-[#FF9900]">Initiate Project</a>
      </nav>
      <button id="close-mobile-menu" class="mt-12 text-sm !font-mono text-white/60 hover:text-white uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full cursor-pointer">Close Menu ✕</button>
    </div>
  `;
}
