import { gsap } from 'gsap';
import { renderHeader } from '../components/Header.js';
import { renderLogosTicker } from '../components/LogosTicker.js';
import { renderFooter } from '../components/Footer.js';

export function renderContactPage() {
  return `
    <div class="subpage-wrapper-authentic bg-white text-black min-h-screen">
      ${renderHeader('/contact-us')}

      <!-- TOP TRACK SELECTOR TABS -->
      <div class="pt-28 md:pt-40 lg:px-10 pb-4">
        <p class="!font-mono text-xs leading-[115%] sm:leading-[135%] opacity-50 mb-6 md:mb-3 px-4 lg:px-0 uppercase tracking-wider">
          ENTERPRISE INQUIRY & STRATEGIC CONSULTATION
        </p>
        <div class="flex flex-col sm:flex-row gap-6 sm:items-center justify-between px-4 lg:px-0">
          <div class="flex items-end gap-6 overflow-x-auto no-scrollbar py-2">
            <button class="contact-tab-btn shrink-0 relative cursor-pointer active" data-track="business" id="tab-business">
              <span class="!font-mono font-light text-2xl md:text-4xl transition-opacity duration-300 [word-spacing:-0.3125rem] lg:[word-spacing:-0.625rem] tracking-[-0.125rem] text-black">
                Evolve my Business
              </span>
              <div class="tab-indicator absolute -bottom-2 left-0 right-0 h-[2px] bg-black transition-transform duration-300 origin-left scale-x-100"></div>
            </button>
            <button class="contact-tab-btn shrink-0 relative cursor-pointer opacity-30 hover:opacity-60 transition-opacity" data-track="startup" id="tab-startup">
              <span class="!font-mono font-light text-2xl md:text-4xl transition-opacity duration-300 [word-spacing:-0.3125rem] lg:[word-spacing:-0.625rem] tracking-[-0.125rem] text-black">
                Start a company
              </span>
              <div class="tab-indicator absolute -bottom-2 left-0 right-0 h-[2px] bg-black transition-transform duration-300 origin-left scale-x-0"></div>
            </button>
            <button class="contact-tab-btn shrink-0 relative cursor-pointer opacity-30 hover:opacity-60 transition-opacity" data-track="career" id="tab-career">
              <span class="!font-mono font-light text-2xl md:text-4xl transition-opacity duration-300 [word-spacing:-0.3125rem] lg:[word-spacing:-0.625rem] tracking-[-0.125rem] text-black">
                Career
              </span>
              <div class="tab-indicator absolute -bottom-2 left-0 right-0 h-[2px] bg-black transition-transform duration-300 origin-left scale-x-0"></div>
            </button>
          </div>

          <div class="hidden lg:flex whitespace-nowrap shrink-0 flex-col justify-end items-end gap-1">
            <p class="text-xs font-medium tracking-[0.03rem] opacity-60">Direct inquiry?</p>
            <a class="text-base !font-mono text-black leading-tight opacity-70 hover:opacity-100 transition-opacity" href="mailto:contact@arkatechnovation.com">
              contact@arkatechnovation.com
            </a>
            <a class="text-xs !font-mono text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5" href="https://wa.me/919711487316" target="_blank" rel="noopener">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp: +91 97114 87316</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 3-COLUMN BORDERED GRID FORM -->
      <div class="lg:px-10">
        <form id="loud-contact-form" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#d9d9d9] mt-6 overflow-hidden">
          
          <!-- Field 1: Project Type / Goal -->
          <div class="relative border-r border-b border-[#d9d9d9] min-h-[170px] p-6 lg:p-10 bg-white">
            <label class="!font-mono text-xs opacity-50 mb-3 block tracking-wider uppercase" id="label-field-1" for="contact-field-1">
              PROJECT TYPE*
            </label>
            <textarea id="contact-field-1" name="project-type" class="w-full placeholder:text-black/25 text-sm font-medium p-0 outline-0 min-h-20 resize-none border-none bg-transparent" placeholder="New Web Application, SEO Domination, Digital Marketing, Corporate Film" required></textarea>
          </div>

          <!-- Field 2: Industry / Domain -->
          <div class="relative border-r border-b border-[#d9d9d9] min-h-[170px] p-6 lg:p-10 bg-white">
            <label class="!font-mono text-xs opacity-50 mb-3 block tracking-wider uppercase" id="label-field-2" for="contact-field-2">
              INDUSTRY*
            </label>
            <textarea id="contact-field-2" name="industry" class="w-full placeholder:text-black/25 text-sm font-medium p-0 outline-0 min-h-20 resize-none border-none bg-transparent" placeholder="E-commerce, Healthcare, Real Estate, FinTech, SaaS, Manufacturing, Media" required></textarea>
          </div>

          <!-- Field 3: Deliverables Multiselect -->
          <div class="relative border-r border-b border-[#d9d9d9] min-h-[170px] p-6 lg:p-10 bg-white">
            <label class="!font-mono text-xs opacity-50 mb-3 block tracking-wider uppercase" id="label-deliverables">
              DELIVERABLES*
            </label>
            <div class="flex flex-wrap gap-2 text-sm font-medium pt-1" id="deliverables-pills">
              <button type="button" class="deliverable-pill rounded-[50px] border border-black/20 py-1.5 px-3.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white text-black hover:border-black active-pill" data-value="Software & Web Apps">
                <span class="pill-icon">+</span>
                <span>Software & Web Apps</span>
              </button>
              <button type="button" class="deliverable-pill rounded-[50px] border border-black/20 py-1.5 px-3.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white text-black hover:border-black active-pill" data-value="Technical SEO">
                <span class="pill-icon">+</span>
                <span>Technical SEO</span>
              </button>
              <button type="button" class="deliverable-pill rounded-[50px] border border-black/20 py-1.5 px-3.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white text-black hover:border-black" data-value="Digital Marketing">
                <span class="pill-icon">+</span>
                <span>Digital Marketing</span>
              </button>
              <button type="button" class="deliverable-pill rounded-[50px] border border-black/20 py-1.5 px-3.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white text-black hover:border-black" data-value="Corporate Video">
                <span class="pill-icon">+</span>
                <span>Corporate Video</span>
              </button>
              <button type="button" class="deliverable-pill rounded-[50px] border border-black/20 py-1.5 px-3.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white text-black hover:border-black" data-value="UI/UX Design">
                <span class="pill-icon">+</span>
                <span>UI/UX Design</span>
              </button>
            </div>
          </div>

          <!-- Field 4: Short Description -->
          <div class="relative border-r border-b border-[#d9d9d9] min-h-[170px] p-6 lg:p-10 bg-white">
            <label class="!font-mono text-xs opacity-50 mb-3 block tracking-wider uppercase" for="contact-description">
              SHORT DESCRIPTION
            </label>
            <textarea id="contact-description" name="short-description" class="w-full placeholder:text-black/25 text-sm font-medium p-0 outline-0 min-h-20 resize-none border-none bg-transparent" placeholder="What challenge are you facing? Let’s find the best solution together." required></textarea>
          </div>

          <!-- Field 6: Attach Files -->
          <div class="relative border-r border-b border-[#d9d9d9] min-h-[170px] p-6 lg:p-10 bg-white">
            <label class="!font-mono text-xs opacity-50 mb-3 block tracking-wider uppercase">
              ATTACH FILES
            </label>
            <label for="contact-file-input" class="inline-flex items-center gap-3 cursor-pointer py-2 px-3 border border-dashed border-black/20 rounded-lg hover:border-black transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <span class="text-xs !font-mono text-black/60" id="file-upload-status">Choose file or drag here</span>
            </label>
            <input id="contact-file-input" type="file" class="hidden" multiple />
          </div>

          <!-- Bottom Full-Width Royal Blue (#4E71FF) Submission Row -->
          <div class="w-full col-span-1 sm:col-span-2 lg:col-span-3 bg-[#4E71FF] text-white p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="w-full sm:w-2/3">
              <input id="contact-email" type="email" class="w-full placeholder:text-white/50 text-white font-light text-xl p-0 outline-0 border-none bg-transparent" placeholder="Type here your email*" required />
            </div>
            <div class="w-full sm:w-auto flex justify-end">
              <button type="submit" id="contact-submit-btn" class="flex text-white !font-mono text-base font-medium items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity bg-black/20 hover:bg-black/30 px-6 py-3 rounded-full">
                <span>Send us message</span>
                <svg viewBox="0 0 50 50" width="28" height="28" class="fill-none stroke-current" aria-hidden="true">
                  <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1.5"></circle>
                  <g transform="translate(7, 10) scale(1)">
                    <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                    <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                    <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

        </form>
      </div>

      <!-- "WHAT'S NEXT. FOURTH BASE ON A FIRST DATE?" SECTION -->
      <div class="pb-24 pt-16 md:pt-28 flex flex-col sm:flex-row gap-16 max-w-6xl mx-auto px-4 items-start">
        <div class="w-full sm:w-1/2">
          <div class="w-full aspect-square rounded-2xl overflow-hidden border border-black/10 bg-neutral-100 shadow-sm">
            <img src="/assets/cover-ai.jpg" alt="Partnership Preview" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="w-full sm:w-1/2">
          <p class="text-[#4E71FF] !font-mono font-light text-4xl lg:text-5xl [word-spacing:-5px] lg:[word-spacing:-10px] leading-[115%]">
            Execution Roadmap.
          </p>
          <p class="!font-mono font-light text-4xl lg:text-5xl [word-spacing:-5px] lg:[word-spacing:-10px] leading-[115%] mb-8 text-black">
            From brief to production scale.
          </p>

          <ol class="flex flex-col gap-6 list-none p-0 m-0">
            <li class="flex gap-4 items-start">
              <span class="!font-mono text-base font-bold text-[#4E71FF]">01.</span>
              <div>
                <strong class="font-medium text-lg block mb-1">Briefing & Technical Discovery.</strong>
                <p class="text-sm opacity-70 leading-relaxed">Submit your project objectives, target benchmarks, and technology requirements through our structured intake configurator.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <span class="!font-mono text-base font-bold text-[#4E71FF]">02.</span>
              <div>
                <strong class="font-medium text-lg block mb-1">Executive Architectural Review.</strong>
                <p class="text-sm opacity-70 leading-relaxed">Within 24 business hours, our engineering and strategy leadership review scope, evaluate architectural feasibility, and formulate resource requirements.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <span class="!font-mono text-base font-bold text-[#4E71FF]">03.</span>
              <div>
                <strong class="font-medium text-lg block mb-1">Strategic Blueprint & SLA Agreement.</strong>
                <p class="text-sm opacity-70 leading-relaxed">We present a comprehensive technical blueprint, milestone timeline, risk mitigation matrix, and transparent enterprise commercial structure.</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <span class="!font-mono text-base font-bold text-[#4E71FF]">04.</span>
              <div>
                <strong class="font-medium text-lg block mb-1">Dedicated Sprint Execution.</strong>
                <p class="text-sm opacity-70 leading-relaxed">Our Noida innovation campus initiates agile sprint cycles with continuous integration, strict code quality audits, and live executive telemetry.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <!-- 3 FEATURED PRODUCTS -->
      <div class="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-6">LIVE CASE STUDIES</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="AuraCloud OS" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/software-design-collage.jpg" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">AURACLOUD OS</p>
              <p class="text-sm text-black">Enterprise Workflow Cloud Engine</p>
            </a>
          </div>

          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="SearchGraph AI" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/seo-intelligence-collage.jpg" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">SEARCHGRAPH AI</p>
              <p class="text-sm text-black">Semantic Graph & Programmatic SEO</p>
            </a>
          </div>

          <div class="w-full">
            <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
              <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                <img alt="Velocity Growth" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/marketing-growth-collage.jpg" />
              </div>
              <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60">VELOCITY GROWTH</p>
              <p class="text-sm text-black">Full-Funnel Omnichannel Acquisition</p>
            </a>
          </div>
        </div>
      </div>

      <!-- CLIENT LOGOS MARQUEE -->
      ${renderLogosTicker()}

      ${renderFooter()}
    </div>
  `;
}

/**
 * Interactive behaviors for Contact Page:
 * - Tab switching
 * - Multiselect pill toggling
 * - Dropdown selection
 * - Form submission feedback
 */
export function initContactPage() {
  const tabs = document.querySelectorAll('.contact-tab-btn');
  const labelField1 = document.getElementById('label-field-1');
  const field1 = document.getElementById('contact-field-1');
  const labelField2 = document.getElementById('label-field-2');
  const field2 = document.getElementById('contact-field-2');

  // GSAP entrance animation for form grid cells
  const formCells = document.querySelectorAll('#loud-contact-form > div');
  gsap.fromTo(formCells,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06, delay: 0.4 }
  );

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'opacity-100');
        t.classList.add('opacity-30');
        const ind = t.querySelector('.tab-indicator');
        if (ind) {
          gsap.to(ind, { scaleX: 0, duration: 0.3, ease: 'power2.inOut' });
        }
      });

      tab.classList.add('active', 'opacity-100');
      tab.classList.remove('opacity-30');
      const indicator = tab.querySelector('.tab-indicator');
      if (indicator) {
        gsap.fromTo(indicator,
          { scaleX: 0, transformOrigin: 'left' },
          { scaleX: 1, duration: 0.4, ease: 'power3.out' }
        );
      }

      const track = tab.dataset.track;
      if (track === 'startup') {
        if (labelField1) labelField1.textContent = 'STARTUP VISION*';
        if (field1) field1.placeholder = 'What problem are you solving? Briefly describe your core idea.';
        if (labelField2) labelField2.textContent = 'TARGET AUDIENCE / MARKET*';
        if (field2) field2.placeholder = 'B2B, Consumers, FinTech, Health, Creator Economy';
      } else if (track === 'career') {
        if (labelField1) labelField1.textContent = 'ROLE / SPECIALTY*';
        if (field1) field1.placeholder = 'Senior Full-Stack Engineer, WebGL Designer, Product Lead';
        if (labelField2) labelField2.textContent = 'PORTFOLIO OR GITHUB*';
        if (field2) field2.placeholder = 'https://github.com/... or portfolio link';
      } else {
        if (labelField1) labelField1.textContent = 'PROJECT TYPE*';
        if (field1) field1.placeholder = 'Full Project, Future Improvements, Maintenance';
        if (labelField2) labelField2.textContent = 'INDUSTRY*';
        if (field2) field2.placeholder = 'Real Estate, E-commerce, Artificial Intelligence, Music';
      }
    });
  });

  // Multiselect deliverables pills with GSAP bounce
  const pills = document.querySelectorAll('.deliverable-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active-pill');
      if (pill.classList.contains('active-pill')) {
        pill.classList.remove('bg-white', 'text-black', 'border-black/20');
        pill.classList.add('bg-black', 'text-white', 'border-black');
        pill.querySelector('.pill-icon').textContent = '✓';
        gsap.fromTo(pill, { scale: 0.92 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
      } else {
        pill.classList.add('bg-white', 'text-black', 'border-black/20');
        pill.classList.remove('bg-black', 'text-white', 'border-black');
        pill.querySelector('.pill-icon').textContent = '+';
        gsap.fromTo(pill, { scale: 1.05 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
      }
    });
  });

  // Budget Range Dropdown
  const budgetBtn = document.getElementById('budget-selector-btn');
  const budgetMenu = document.getElementById('budget-options-menu');
  const budgetText = document.getElementById('budget-current-text');

  if (budgetBtn && budgetMenu && budgetText) {
    budgetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = budgetMenu.classList.contains('hidden');
      if (isHidden) {
        budgetMenu.classList.remove('hidden');
        gsap.fromTo(budgetMenu,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
        );
      } else {
        gsap.to(budgetMenu, {
          opacity: 0, y: -8, duration: 0.2, ease: 'power2.in',
          onComplete: () => budgetMenu.classList.add('hidden'),
        });
      }
    });

    document.querySelectorAll('.budget-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        budgetText.textContent = opt.textContent;
        gsap.to(budgetMenu, {
          opacity: 0, y: -8, duration: 0.15,
          onComplete: () => budgetMenu.classList.add('hidden'),
        });
      });
    });

    document.addEventListener('click', () => {
      if (!budgetMenu.classList.contains('hidden')) {
        gsap.to(budgetMenu, {
          opacity: 0, duration: 0.15,
          onComplete: () => budgetMenu.classList.add('hidden'),
        });
      }
    });
  }

  // File Upload Indicator
  const fileInput = document.getElementById('contact-file-input');
  const fileStatus = document.getElementById('file-upload-status');
  if (fileInput && fileStatus) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        fileStatus.textContent = `${fileInput.files.length} file(s) attached`;
        fileStatus.classList.add('font-semibold', 'text-black');
        gsap.fromTo(fileStatus, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'back.out(1.5)' });
      }
    });
  }

  // Form Submission
  const form = document.getElementById('loud-contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (form && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.innerHTML = `<span>Inquiry Transmitted ✓</span>`;
      submitBtn.style.background = '#00ffaa';
      submitBtn.style.color = '#000000';
      gsap.fromTo(submitBtn, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = `<span>Send us message</span>`;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 2500);
    });
  }
}

