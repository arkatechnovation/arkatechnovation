/**
 * Authentic 21-Brand Client Logos Marquee Ticker
 */
const BRAND_LOGOS = [
  'black-beyond-doc.png',
  'black-bikeroom.png',
  'black-cercacasa.png',
  'black-ennevolte.png',
  'black-fimi.png',
  'black-gonext.png',
  'black-idntt.png',
  'black-mae.png',
  'black-whuis.png',
  'black-zero.png',
  'black-acqua-di-parma.png',
  'black-banca-sella.png',
  'black-bitbull.png',
  'black-deloitte.png',
  'black-ied.png',
  'black-mcsaatchi.png',
  'black-moneymour.png',
  'black-samso.png',
  'black-tag.png',
  'black-vitesicure.png',
  'black-zest.png',
];

export function renderLogosTicker(titleText = 'We think, design and develop world-class digital products for forward-thinking brands.') {
  const logosHtml = BRAND_LOGOS.map(logo => `
    <div class="h-10 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
      <img alt="${logo}" width="660" height="220" class="h-full w-auto object-contain" src="/assets/${logo}" />
    </div>
  `).join('');

  return `
    <div class="mt-20 border-t border-[#dfdfdf]">
      <div class="py-24 lg:py-28">
        <div class="flex flex-col gap-12 lg:gap-16">
          <p class="max-w-6xl mx-auto w-full px-4 text-center text-balance text-3xl sm:text-4xl lg:text-5xl leading-[115%] !font-mono font-light text-black">
            ${titleText}
          </p>
          <div class="overflow-hidden w-full relative py-4">
            <div class="flex gap-10 md:gap-20 animate-marquee whitespace-nowrap will-change-transform">
              ${logosHtml}
              ${logosHtml}
            </div>
          </div>
          <div class="flex justify-center">
            <a class="text-base sm:text-lg flex w-max justify-center items-center gap-4 cursor-pointer text-black hover:opacity-75 transition-opacity" href="/contact-us">
              <span>Be the next</span>
              <svg viewBox="0 0 50 50" width="32" height="32" class="fill-none stroke-current" aria-hidden="true">
                <circle cx="25" cy="25" r="24" stroke="#000000" fill="#000000" stroke-width="1"></circle>
                <g transform="translate(7, 10) scale(1)">
                  <path d="M 9 15 L 27.45 15" fill="none" stroke="#ffffff" stroke-width="1"></path>
                  <path d="M 27 15 L 21 9" fill="none" stroke="#ffffff" stroke-width="1"></path>
                  <path d="M 27 15 L 21 21" fill="none" stroke="#ffffff" stroke-width="1"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
