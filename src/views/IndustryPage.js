import { renderHeader } from '../components/Header.js';
import { renderLogosTicker } from '../components/LogosTicker.js';
import { renderFooter } from '../components/Footer.js';
import { INDUSTRIES_DATA } from '../data/content.js';

export function renderIndustryPage(slug) {
  const industry = INDUSTRIES_DATA.find((i) => i.id === slug) || INDUSTRIES_DATA[0];
  const currentPath = `/industries/${slug}`;

  return `
    <div class="subpage-wrapper-authentic bg-white text-black min-h-screen">
      ${renderHeader(currentPath)}

      <div class="pt-28 md:pt-40 pb-16 max-w-6xl mx-auto px-4">
        <div class="max-w-3xl">
          <p class="!font-mono text-sm opacity-50 mb-4 tracking-wider uppercase">${industry.subtitle}</p>
          <h1 class="!font-mono text-4xl sm:text-6xl lg:text-7xl font-light break-words leading-[115%] text-black">
            ${industry.name}
          </h1>
          <div class="max-w-2xl mt-6 mb-12 text-lg sm:text-xl text-black/80 leading-relaxed font-light">
            <p>${industry.description}</p>
          </div>
        </div>

        <div class="w-full max-h-[75dvh] aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
          <img class="w-full h-full object-cover object-center" src="${industry.image}" alt="${industry.name}" />
        </div>
      </div>

      <!-- KEY METRIC & ARCHITECTURE -->
      <div class="max-w-6xl mx-auto px-4 py-16">
        <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-3">KEY IMPACT</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-[120%] mb-12 text-black">
          Engineered for unfair market advantage.
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#F2F2F2] p-8 rounded-2xl border border-black/10 flex flex-col justify-between min-h-[220px]">
            <p class="!font-mono text-xs opacity-50 uppercase tracking-wider font-semibold">PROVEN METRIC</p>
            <div>
              <p class="text-4xl lg:text-5xl font-light !font-mono text-black mb-2">${industry.stat}</p>
              <p class="text-xs opacity-60">Empirical telemetry measured across live production environments with zero downtime.</p>
            </div>
          </div>

          <div class="bg-[#F2F2F2] p-8 rounded-2xl border border-black/10 flex flex-col justify-between min-h-[220px]">
            <p class="!font-mono text-xs opacity-50 uppercase tracking-wider font-semibold">CORE DELIVERABLES</p>
            <ul class="flex flex-col gap-2 list-none p-0 text-sm font-medium mt-4">
              ${industry.deliverables.map((d) => `<li class="flex items-center gap-2"><span class="text-[#4E71FF] font-bold">✓</span> ${d}</li>`).join('')}
            </ul>
          </div>

          <div class="bg-[#F2F2F2] p-8 rounded-2xl border border-black/10 flex flex-col justify-between min-h-[220px]">
            <p class="!font-mono text-xs opacity-50 uppercase tracking-wider font-semibold">FEATURED CASE STUDY</p>
            <div>
              <p class="text-2xl font-light text-black mb-1">${industry.project.title}</p>
              <p class="text-xs opacity-60">${industry.project.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- OTHER INDUSTRIES -->
      <div class="max-w-6xl mx-auto px-4 py-16 border-t border-black/10">
        <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-3">EXPLORE OTHER SECTORS</p>
        <h2 class="text-3xl sm:text-4xl font-light leading-[120%] mb-10 text-black">
          Cross-disciplinary excellence.
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${INDUSTRIES_DATA.filter((i) => i.id !== slug)
            .map(
              (other) => `
            <a href="/industries/${other.id}" class="p-8 rounded-2xl border border-black/15 bg-white hover:bg-neutral-50 transition-colors block group">
              <span class="!font-mono text-xs text-black/50 block mb-2 uppercase">${other.subtitle}</span>
              <span class="text-2xl font-light block text-black group-hover:text-[#4E71FF] transition-colors">${other.name}</span>
            </a>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- 21 CLIENT LOGOS TICKER -->
      ${renderLogosTicker()}

      ${renderFooter()}
    </div>
  `;
}
