import { gsap } from 'gsap';
import { renderHeader } from '../components/Header.js';
import { renderLogosTicker } from '../components/LogosTicker.js';
import { renderFooter } from '../components/Footer.js';

export function renderManifestoPage() {
  return `
    <div class="subpage-wrapper-authentic min-h-screen">
      ${renderHeader('/manifesto')}

      <!-- FULL-SCREEN DARK HERO STAGE -->
      <section class="min-h-screen relative flex justify-center items-center flex-col bg-black overflow-hidden text-white px-4" id="manifesto-hero">
        <div class="flex w-full flex-col justify-center items-center text-center">
          <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-6">OUR MANIFESTO</p>
          <h1 class="!font-mono text-4xl sm:text-6xl lg:text-7xl font-light break-words mx-auto text-center text-balance leading-[120%] max-w-4xl text-white">
            We are in a constant state of becoming.
          </h1>
        </div>

        <div class="absolute bottom-10 left-0 right-0 flex justify-center items-center w-full">
          <button id="manifesto-scroll-down" class="flex flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
            <span class="!font-mono text-xs uppercase tracking-widest">Explore Rules</span>
            <div class="rotate-90">
              <svg viewBox="0 0 50 50" width="36" height="36" class="fill-none stroke-current" aria-hidden="true">
                <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1.5"></circle>
                <g transform="translate(2, 10) scale(1)">
                  <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                  <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1.5"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </section>

      <!-- PURE WHITE PRINCIPLES SECTION -->
      <section class="bg-white text-black min-h-screen pt-32 pb-32" id="manifesto-principles">
        <div class="flex flex-col justify-center items-center gap-24 max-w-6xl mx-auto px-4">
          
          <!-- Principle 1 -->
          <div class="relative w-full flex flex-col justify-center items-center manifesto-rule-block" data-rule="1">
            <a class="manifesto-rule-title cursor-pointer text-3xl sm:text-5xl lg:text-7xl tracking-[0.02rem] leading-[125%] transition-all duration-300 text-center text-balance px-4 text-black hover:text-[#4E71FF]" href="/pillars/software-design">
              Making something that people want
            </a>
            <div class="manifesto-discover-badge mt-4 flex items-center gap-2 text-sm !font-mono text-black/50 opacity-0 transition-opacity duration-300">
              <span>Discover Software Craft</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current"><circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle><g transform="translate(7, 10) scale(1)"><path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path></g></svg>
            </div>
            <!-- Floating Image Previews -->
            <div class="manifesto-floating-images pointer-events-none opacity-0 transition-opacity duration-500">
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="left: 2vw; top: -40px; width: 230px; height: 170px;">
                <img alt="Shift2Cal" class="w-full h-full object-cover" src="/assets/last-shot-shift2cal.png" />
              </div>
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="right: 4vw; bottom: -20px; width: 280px; height: 210px;">
                <img alt="Review" class="w-full h-full object-cover" src="/assets/review-witz-flat-background.png" />
              </div>
            </div>
          </div>

          <!-- Principle 2 -->
          <div class="relative w-full flex flex-col justify-center items-center manifesto-rule-block" data-rule="2">
            <a class="manifesto-rule-title cursor-pointer text-3xl sm:text-5xl lg:text-7xl tracking-[0.02rem] leading-[125%] transition-all duration-300 text-center text-balance px-4 text-black hover:text-[#4E71FF]" href="/pillars/seo">
              Living With the Product
            </a>
            <div class="manifesto-discover-badge mt-4 flex items-center gap-2 text-sm !font-mono text-black/50 opacity-0 transition-opacity duration-300">
              <span>Discover SEO Intelligence</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current"><circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle><g transform="translate(7, 10) scale(1)"><path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path></g></svg>
            </div>
            <!-- Floating Image Previews -->
            <div class="manifesto-floating-images pointer-events-none opacity-0 transition-opacity duration-500">
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="left: 3vw; top: -30px; width: 240px; height: 180px;">
                <img alt="Design Preview" class="w-full h-full object-cover" src="/assets/with-preview-home.jpg" />
              </div>
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="right: 5vw; bottom: -30px; width: 260px; height: 200px;">
                <img alt="Real Estate Preview" class="w-full h-full object-cover" src="/assets/menu-preview-industry-real-estate.jpg" />
              </div>
            </div>
          </div>

          <!-- Principle 3 -->
          <div class="relative w-full flex flex-col justify-center items-center manifesto-rule-block" data-rule="3">
            <a class="manifesto-rule-title cursor-pointer text-3xl sm:text-5xl lg:text-7xl tracking-[0.02rem] leading-[125%] transition-all duration-300 text-center text-balance px-4 text-black hover:text-[#4E71FF]" href="/pillars/digital-marketing">
              Make a unique contribution
            </a>
            <div class="manifesto-discover-badge mt-4 flex items-center gap-2 text-sm !font-mono text-black/50 opacity-0 transition-opacity duration-300">
              <span>Discover Growth Engines</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current"><circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle><g transform="translate(7, 10) scale(1)"><path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path></g></svg>
            </div>
            <!-- Floating Image Previews -->
            <div class="manifesto-floating-images pointer-events-none opacity-0 transition-opacity duration-500">
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="left: 4vw; top: -20px; width: 250px; height: 180px;">
                <img alt="Whuis Hover" class="w-full h-full object-cover" src="/assets/whuis-hover.jpg" />
              </div>
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="right: 3vw; bottom: -40px; width: 280px; height: 190px;">
                <img alt="Balloon Preview" class="w-full h-full object-cover" src="/assets/preview-balloon-2.jpg" />
              </div>
            </div>
          </div>

          <!-- Principle 4 -->
          <div class="relative w-full flex flex-col justify-center items-center manifesto-rule-block" data-rule="4">
            <a class="manifesto-rule-title cursor-pointer text-3xl sm:text-5xl lg:text-7xl tracking-[0.02rem] leading-[125%] transition-all duration-300 text-center text-balance px-4 text-black hover:text-[#4E71FF]" href="/pillars/corporate-video">
              Being in the details
            </a>
            <div class="manifesto-discover-badge mt-4 flex items-center gap-2 text-sm !font-mono text-black/50 opacity-0 transition-opacity duration-300">
              <span>Discover Corporate Cinema</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current"><circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle><g transform="translate(7, 10) scale(1)"><path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path></g></svg>
            </div>
            <!-- Floating Image Previews -->
            <div class="manifesto-floating-images pointer-events-none opacity-0 transition-opacity duration-500">
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="left: 2vw; top: -30px; width: 230px; height: 175px;">
                <img alt="Balloon 1" class="w-full h-full object-cover" src="/assets/preview-balloon-1.jpg" />
              </div>
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="right: 6vw; bottom: -20px; width: 260px; height: 210px;">
                <img alt="Witz AI" class="w-full h-full object-cover" src="/assets/witz-ai-worlds-ui.jpg" />
              </div>
            </div>
          </div>

          <!-- Principle 5 -->
          <div class="relative w-full flex flex-col justify-center items-center manifesto-rule-block" data-rule="5">
            <a class="manifesto-rule-title cursor-pointer text-3xl sm:text-5xl lg:text-7xl tracking-[0.02rem] leading-[125%] transition-all duration-300 text-center text-balance px-4 text-black hover:text-[#4E71FF]" href="/contact-us">
              Taking ownership
            </a>
            <div class="manifesto-discover-badge mt-4 flex items-center gap-2 text-sm !font-mono text-black/50 opacity-0 transition-opacity duration-300">
              <span>Initiate Consultation</span>
              <svg viewBox="0 0 50 50" width="24" height="24" class="fill-none stroke-current"><circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="2"></circle><g transform="translate(7, 10) scale(1)"><path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="2"></path><path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="2"></path></g></svg>
            </div>
            <!-- Floating Image Previews -->
            <div class="manifesto-floating-images pointer-events-none opacity-0 transition-opacity duration-500">
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="left: 3vw; top: -20px; width: 230px; height: 160px;">
                <img alt="Witz Shop" class="w-full h-full object-cover" src="/assets/witz-preview-shop-themes.jpg" />
              </div>
              <div class="absolute z-10 overflow-hidden rounded-xl shadow-2xl border border-black/10 hidden md:block" style="right: 4vw; bottom: -30px; width: 270px; height: 190px;">
                <img alt="Loud Teams" class="w-full h-full object-cover" src="/assets/loudsrl-teams.png" />
              </div>
            </div>
          </div>

        </div>

        <div class="flex justify-center mt-24">
          <a class="text-lg flex w-max justify-center items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity bg-black text-white px-8 py-4 rounded-full" href="/contact-us">
            <span>Build with Us</span>
            <svg viewBox="0 0 50 50" width="28" height="28" class="fill-none stroke-current" aria-hidden="true">
              <circle cx="25" cy="25" r="24" stroke="#AD8AEC" fill="#AD8AEC" stroke-width="1"></circle>
              <g transform="translate(7, 10) scale(1)">
                <path d="M 9 15 L 27.45 15" fill="none" stroke="#FFFFFF" stroke-width="1.5"></path>
                <path d="M 27 15 L 21 9" fill="none" stroke="#FFFFFF" stroke-width="1.5"></path>
                <path d="M 27 15 L 21 21" fill="none" stroke="#FFFFFF" stroke-width="1.5"></path>
              </g>
            </svg>
          </a>
        </div>
      </section>

      <!-- DELIVERABLES GRID (8 CARDS WITH 3D ICONS) -->
      <section class="bg-[#f0f0f0] text-black pt-32 pb-24 border-t border-black/10">
        <div class="max-w-6xl mx-auto px-4">
          <p class="text-xs !font-mono opacity-60 tracking-wider uppercase mb-2">Deliverables.</p>
          <h2 class="text-3xl sm:text-5xl font-light tracking-[0.02rem] leading-[120%] mb-12">
            Including but not limited to.
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-black/20">
            
            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/e-commerce">
              <div>
                <img alt="E-commerce" width="56" height="56" class="object-contain group-hover:invert" src="/assets/add_shopping_cart%20(1).png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">E-COMMERCE</p>
                <p class="text-xl mt-3 font-light leading-snug">The online shop where you can sell your products.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/e-commerce">
              <div>
                <img alt="Website" width="56" height="56" class="object-contain group-hover:invert" src="/assets/ad.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">WEBSITE</p>
                <p class="text-xl mt-3 font-light leading-snug">The place where your brand meets visitors.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/artificial-intelligence">
              <div>
                <img alt="AI Tool" width="56" height="56" class="object-contain group-hover:invert" src="/assets/desktop_mac.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">AI TOOL</p>
                <p class="text-xl mt-3 font-light leading-snug">The smart layer that turns data into actions.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/mobile-apps">
              <div>
                <img alt="Web App" width="56" height="56" class="object-contain group-hover:invert" src="/assets/captive_portal.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">WEB APP</p>
                <p class="text-xl mt-3 font-light leading-snug">The online workspace where real work happens.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/mobile-apps">
              <div>
                <img alt="Mobile App" width="56" height="56" class="object-contain group-hover:invert" src="/assets/mobile.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">MOBILE APP</p>
                <p class="text-xl mt-3 font-light leading-snug">The product experience users keep on hand.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/e-commerce">
              <div>
                <img alt="CMS and SaaS" width="56" height="56" class="object-contain group-hover:invert" src="/assets/mobile.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">CMS AND SAAS</p>
                <p class="text-xl mt-3 font-light leading-snug">The tool where teams run content and services.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/mobile-apps">
              <div>
                <img alt="Watch App" width="56" height="56" class="object-contain group-hover:invert" src="/assets/fitness_trackers.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">WATCH & TV APP</p>
                <p class="text-xl mt-3 font-light leading-snug">The app that brings your product to smartwatch or TV.</p>
              </div>
            </a>

            <a class="deliverable-card group hover:bg-black hover:text-white p-8 min-h-[300px] flex flex-col justify-between border-r border-b border-black/20 transition-colors" href="/industries/artificial-intelligence">
              <div>
                <img alt="IoT" width="56" height="56" class="object-contain group-hover:invert" src="/assets/doorbell.png" />
              </div>
              <div>
                <p class="text-xs !font-mono tracking-wider uppercase opacity-60 group-hover:opacity-100">IOT</p>
                <p class="text-xl mt-3 font-light leading-snug">The layer that connects physical devices with your product.</p>
              </div>
            </a>

          </div>
        </div>

        <!-- 12-SERVICE TAXONOMY DIRECTORY -->
        <div class="max-w-6xl mx-auto px-4 mt-28">
          <p class="text-xs !font-mono opacity-60 tracking-wider uppercase mb-2">Our services. The full list!</p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-12">
            Arka Technovation engineers, scales, and markets digital products end to end, offering software architecture, SEO intelligence, omnichannel marketing, and 8K corporate cinema from Noida.
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-black/20 border-t border-l">
            
            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">PRODUCT VISION & STRATEGY</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Market Research</li>
                <li>Stakeholder Interviews</li>
                <li>Product Vision</li>
                <li>Product Strategy</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">PRODUCT DESIGN</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>User Interviews</li>
                <li>Workflows</li>
                <li>User Journey</li>
                <li>Technical Recommendations</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">PROTOTYPING</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Figma Prototyping</li>
                <li>Visual Design Research</li>
                <li>User Testing</li>
                <li>Engineering Validations</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">DELIVERY & PLANNING</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Visual Design Approvals</li>
                <li>Roadmap</li>
                <li>Deliverables</li>
                <li>Milestones</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">BRANDING</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Brand Positioning</li>
                <li>Product Narrative</li>
                <li>Visual Identity System</li>
                <li>Voice and Tone</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">UI DESIGN</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Information Architecture</li>
                <li>Interaction Design</li>
                <li>Responsive Layouts</li>
                <li>Microinteractions</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">DESIGN SYSTEM</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Design Tokens</li>
                <li>Component Library</li>
                <li>Usage Guidelines</li>
                <li>Design Ops Support</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">IDEATION & PROTOTYPING</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Concept Workshops</li>
                <li>Rapid Wireframing</li>
                <li>Interactive Prototypes</li>
                <li>Usability Experiments</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">FULL STACK ENGINEERING</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Architecture & Tech Stack</li>
                <li>End-to-End Implementation</li>
                <li>Performance & Scalability</li>
                <li>DevOps & CI/CD</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">BACKEND & FRONTEND</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>API Design & Build</li>
                <li>Frontend Feature Delivery</li>
                <li>Security & Compliance</li>
                <li>Testing & Code Quality</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">MOBILE DEVELOPMENT</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Native iOS & Android</li>
                <li>Cross-Platform Frameworks</li>
                <li>Mobile UX Optimization</li>
                <li>Store Readiness & Release</li>
              </ul>
            </div>

            <div class="bg-[#f0f0f0] p-6 border-black/20 border-r border-b">
              <p class="text-xs !font-mono opacity-60 uppercase tracking-wider mb-4 font-semibold">AI AND AUTOMATION</p>
              <ul class="text-sm flex flex-col gap-2 list-none p-0 opacity-80">
                <li>Opportunity Assessment</li>
                <li>Data & Model Strategy</li>
                <li>Workflow Automation Design</li>
                <li>Integration & Monitoring</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- 3 FEATURED CASE STUDIES -->
      <section class="bg-white text-black py-24">
        <div class="max-w-6xl mx-auto px-4">
          <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-4">REPRESENTATIVE WORK</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="w-full">
              <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
                <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                  <img alt="WHUIS" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/whuis-1.jpg" />
                </div>
                <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase">WHUIS</p>
                <p class="text-sm text-black">Real Estate Intelligence Platform</p>
              </a>
            </div>

            <div class="w-full">
              <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
                <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                  <img alt="CERCACASA" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/ai-cercacasa-home-1.jpg" />
                </div>
                <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase">CERCACASA</p>
                <p class="text-sm text-black">Real Estate Search Engine</p>
              </a>
            </div>

            <div class="w-full">
              <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="/contact-us">
                <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
                  <img alt="CATASTO 2.0" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/catasto-preview.jpg" />
                </div>
                <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase">CATASTO 2.0</p>
                <p class="text-sm text-black">Real-Time Data Warehouse</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CLIENT LOGOS MARQUEE -->
      ${renderLogosTicker()}

      ${renderFooter()}
    </div>
  `;
}

/**
 * Interactive hover behavior for Manifesto rules with GSAP animations:
 * - Floating preview images scale-in with opacity (matching production)
 * - Discover badge fades in
 * - Smooth scroll for hero down-arrow
 * - Scroll-triggered reveal for deliverables grid and services
 */
export function initManifestoPage() {
  const blocks = document.querySelectorAll('.manifesto-rule-block');
  
  blocks.forEach(block => {
    const images = block.querySelector('.manifesto-floating-images');
    const imageEls = block.querySelectorAll('.manifesto-floating-images > div');
    const badge = block.querySelector('.manifesto-discover-badge');
    let hoverTl = null;

    block.addEventListener('mouseenter', () => {
      if (hoverTl) hoverTl.kill();
      hoverTl = gsap.timeline();

      if (images) {
        hoverTl.to(images, { opacity: 1, duration: 0.15, ease: 'none' }, 0);
      }

      // Each floating image card scales in from 0.85 → 1 with stagger
      imageEls.forEach((imgCard, i) => {
        hoverTl.fromTo(imgCard,
          { scale: 0.85, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          i * 0.08
        );
      });

      if (badge) {
        hoverTl.to(badge, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.1);
      }
    });

    block.addEventListener('mouseleave', () => {
      if (hoverTl) hoverTl.kill();
      hoverTl = gsap.timeline();

      if (images) {
        hoverTl.to(images, { opacity: 0, duration: 0.25, ease: 'power2.in' });
      }
      imageEls.forEach(imgCard => {
        hoverTl.to(imgCard, { scale: 0.9, opacity: 0, duration: 0.2, ease: 'power2.in' }, 0);
      });
      if (badge) {
        hoverTl.to(badge, { opacity: 0, y: 6, duration: 0.2, ease: 'power2.in' }, 0);
      }
    });
  });

  // Smooth scroll for hero down-arrow
  const scrollBtn = document.getElementById('manifesto-scroll-down');
  const principlesSec = document.getElementById('manifesto-principles');
  if (scrollBtn && principlesSec) {
    scrollBtn.addEventListener('click', () => {
      const subpageView = document.getElementById('subpage-view');
      if (subpageView) {
        const targetOffset = principlesSec.offsetTop;
        subpageView.scrollTo({ top: targetOffset, behavior: 'smooth' });
      } else {
        principlesSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Scroll-reveal for deliverables and services sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, root: document.getElementById('subpage-view') });

  // Observe deliverable cards for staggered entrance
  document.querySelectorAll('.deliverable-card').forEach((card, i) => {
    card.style.opacity = '0';
    // Use a slightly delayed observer
    setTimeout(() => observer.observe(card), i * 50);
  });

  // Hero title entrance animation
  const heroTitle = document.querySelector('#manifesto-hero h1');
  if (heroTitle) {
    gsap.fromTo(heroTitle,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power4.out' }
    );
  }

  // Header dynamic theme toggle on scroll between dark hero and white principles
  const subpageView = document.getElementById('subpage-view');
  const header = document.getElementById('site-global-header');
  if (subpageView && header && principlesSec) {
    const handleScroll = () => {
      const isPastHero = subpageView.scrollTop >= (principlesSec.offsetTop - 70);
      header.classList.toggle('header-on-white', isPastHero);
      header.classList.toggle('text-black', isPastHero);
      header.classList.toggle('header-on-dark', !isPastHero);
      header.classList.toggle('text-white', !isPastHero);
    };
    subpageView.addEventListener('scroll', handleScroll);
  }
}

