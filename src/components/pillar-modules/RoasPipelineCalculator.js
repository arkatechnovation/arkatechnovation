import { gsap } from 'gsap';

/**
 * RoasPipelineCalculator.js
 * Reference: Klaviyo.com, Reforge.com, Attribution.com
 * Reverse-engineered Dynamic Enterprise ROAS & Pipeline Velocity Calculator
 */

export function renderRoasPipelineCalculator() {
  return `
    <div class="roas-calculator-container w-full max-w-6xl mx-auto px-4 my-20">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
            <p class="!font-mono text-xs text-black/60 uppercase tracking-widest">REVENUE INTELLIGENCE • PIPELINE VELOCITY</p>
          </div>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono tracking-tight">
            Interactive ROAS & Pipeline Velocity Calculator
          </h3>
        </div>
        <div class="mt-4 md:mt-0">
          <span class="text-xs !font-mono text-black/60 uppercase">Model: Full-Funnel Blended ROAS (5.8x Avg)</span>
        </div>
      </div>

      <!-- MAIN CALCULATOR CARD -->
      <div class="relative w-full rounded-2xl bg-[#0F0C1E] text-white p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
        
        <!-- Subtle Glow -->
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-[#FF9900]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- LEFT CONTROLS: SLIDER & PRESETS (7 COLS) -->
          <div class="lg:col-span-7 flex flex-col justify-between">
            
            <div class="mb-8">
              <div class="flex items-center justify-between mb-3">
                <label for="roas-spend-slider" class="text-xs !font-mono uppercase tracking-wider text-white/70">
                  Target Monthly Paid Media Capital
                </label>
                <span id="roas-spend-display" class="text-2xl sm:text-3xl font-light text-white !font-mono font-bold">
                  ₹ 10,00,000
                </span>
              </div>

              <!-- SLIDER INPUT -->
              <input 
                id="roas-spend-slider" 
                type="range" 
                min="200000" 
                max="5000000" 
                step="100000" 
                value="1000000" 
                class="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#7C3AED] focus:outline-none"
              />

              <div class="flex justify-between text-[11px] !font-mono text-white/40 mt-2">
                <span>₹ 2 Lakh (Seed)</span>
                <span>₹ 25 Lakh (Growth)</span>
                <span>₹ 50 Lakh+ (Enterprise)</span>
              </div>
            </div>

            <!-- PRESET QUICK BUTTONS -->
            <div class="flex flex-wrap items-center gap-2.5 mb-8">
              <span class="text-xs !font-mono text-white/50 mr-1">Presets:</span>
              <button class="roas-preset-btn px-3 py-1 rounded-md text-xs !font-mono border border-white/15 hover:border-white/40 transition-colors" data-val="500000">₹ 5 Lakh</button>
              <button class="roas-preset-btn px-3 py-1 rounded-md text-xs !font-mono border border-[#7C3AED] bg-[#7C3AED]/20 text-white font-medium" data-val="1000000">₹ 10 Lakh</button>
              <button class="roas-preset-btn px-3 py-1 rounded-md text-xs !font-mono border border-white/15 hover:border-white/40 transition-colors" data-val="2500000">₹ 25 Lakh</button>
              <button class="roas-preset-btn px-3 py-1 rounded-md text-xs !font-mono border border-white/15 hover:border-white/40 transition-colors" data-val="5000000">₹ 50 Lakh</button>
            </div>

            <!-- CHANNEL ALLOCATION BREAKDOWN -->
            <div class="p-4 rounded-xl bg-white/[0.04] border border-white/10">
              <p class="text-[10px] !font-mono uppercase tracking-widest text-white/40 mb-3">RECOMMENDED OMNICHANNEL ALLOCATION</p>
              
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs !font-mono">
                <div>
                  <span class="text-white/50 block text-[10px]">Google PMax (40%)</span>
                  <span id="alloc-google" class="text-white font-medium">₹ 4,00,000</span>
                </div>
                <div>
                  <span class="text-white/50 block text-[10px]">Meta Scale (30%)</span>
                  <span id="alloc-meta" class="text-white font-medium">₹ 3,00,000</span>
                </div>
                <div>
                  <span class="text-white/50 block text-[10px]">LinkedIn ABM (20%)</span>
                  <span id="alloc-linkedin" class="text-white font-medium">₹ 2,00,000</span>
                </div>
                <div>
                  <span class="text-white/50 block text-[10px]">YouTube Video (10%)</span>
                  <span id="alloc-youtube" class="text-white font-medium">₹ 1,00,000</span>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT KPI YIELD CARD (5 COLS) -->
          <div class="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-black/50 border border-white/15 backdrop-blur-md">
            
            <p class="text-[10px] !font-mono uppercase tracking-widest text-[#7C3AED] mb-1">PROJECTED PIPELINE YIELD</p>
            <div class="mb-6">
              <span class="text-xs text-white/60 block mb-1">Estimated Closed Pipeline</span>
              <h4 id="roas-pipeline-yield" class="text-3xl sm:text-4xl lg:text-5xl font-light text-white !font-mono text-[#00E599] font-bold">
                ₹ 58,00,000
              </h4>
            </div>

            <div class="space-y-4 pt-4 border-t border-white/10 text-xs !font-mono">
              <div class="flex justify-between items-center">
                <span class="text-white/60">Blended ROAS Target</span>
                <span class="text-[#00E599] font-bold text-sm">5.8x</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60">High-Intent Inbound Inquiries</span>
                <span id="roas-inquiries" class="text-white font-medium text-sm">240 leads</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60">Qualified Closed Deals (Avg)</span>
                <span id="roas-deals" class="text-white font-medium text-sm">18 Accounts</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60">Blended CAC (Cost Per Lead)</span>
                <span id="roas-cac" class="text-white font-medium text-sm">₹ 4,166</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60">Attribution Pipeline Integrity</span>
                <span class="text-[#7C3AED] font-medium">Server-Side CAPI</span>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10">
              <a href="/contact-us" class="w-full py-3 px-4 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium text-xs !font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all">
                <span>Deploy Capital with Arka</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>

      <!-- FULL-FUNNEL ATTRIBUTION FLYWHEEL -->
      <div class="mt-14 pt-10 border-t border-black/10">
        <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-3">ATTRIBUTION ARCHITECTURE</p>
        <h4 class="text-2xl sm:text-3xl font-light text-black !font-mono mb-8">
          The Full-Funnel Attribution Flywheel
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#7C3AED] font-bold block mb-1">STAGE 01</span>
            <h5 class="text-sm font-semibold text-black mb-1">Top-of-Funnel Demand</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Dynamic creative video hooks across Meta and YouTube sparking high-affinity problem awareness.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#7C3AED] font-bold block mb-1">STAGE 02</span>
            <h5 class="text-sm font-semibold text-black mb-1">High-Intent Capture</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Intercepting in-market B2B search intent through Google Search and LinkedIn account targeting.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#7C3AED] font-bold block mb-1">STAGE 03</span>
            <h5 class="text-sm font-semibold text-black mb-1">Frictionless CRO</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Sub-second personalized landing pages converting inbound clicks at a proven 5.0% CVR rate.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#7C3AED] font-bold block mb-1">STAGE 04</span>
            <h5 class="text-sm font-semibold text-black mb-1">CAPI Server Sync</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Server-side Conversions API feeding real revenue data back into algorithms to compound ROAS.</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function initRoasPipelineCalculator() {
  const slider = document.getElementById('roas-spend-slider');
  const spendDisplay = document.getElementById('roas-spend-display');
  const yieldDisplay = document.getElementById('roas-pipeline-yield');
  const inquiriesDisplay = document.getElementById('roas-inquiries');
  const dealsDisplay = document.getElementById('roas-deals');
  const cacDisplay = document.getElementById('roas-cac');

  const allocGoogle = document.getElementById('alloc-google');
  const allocMeta = document.getElementById('alloc-meta');
  const allocLinkedin = document.getElementById('alloc-linkedin');
  const allocYoutube = document.getElementById('alloc-youtube');

  const presetBtns = document.querySelectorAll('.roas-preset-btn');

  function formatINR(val) {
    return '₹ ' + Number(val).toLocaleString('en-IN');
  }

  function updateCalculations(spend) {
    const roasMultiple = 5.8;
    const projectedPipeline = Math.round(spend * roasMultiple);
    const leadsCount = Math.round(spend / 4166);
    const dealsCount = Math.max(2, Math.round(leadsCount * 0.075));
    const costPerLead = Math.round(spend / leadsCount);

    if (spendDisplay) spendDisplay.textContent = formatINR(spend);
    if (yieldDisplay) yieldDisplay.textContent = formatINR(projectedPipeline);
    if (inquiriesDisplay) inquiriesDisplay.textContent = `${leadsCount.toLocaleString('en-IN')} leads`;
    if (dealsDisplay) dealsDisplay.textContent = `${dealsCount} Accounts`;
    if (cacDisplay) cacDisplay.textContent = formatINR(costPerLead);

    // Channel allocations
    if (allocGoogle) allocGoogle.textContent = formatINR(Math.round(spend * 0.40));
    if (allocMeta) allocMeta.textContent = formatINR(Math.round(spend * 0.30));
    if (allocLinkedin) allocLinkedin.textContent = formatINR(Math.round(spend * 0.20));
    if (allocYoutube) allocYoutube.textContent = formatINR(Math.round(spend * 0.10));

    // Update preset active style
    presetBtns.forEach(btn => {
      const val = Number(btn.getAttribute('data-val'));
      const isMatch = val === spend;
      btn.classList.toggle('border-[#7C3AED]', isMatch);
      btn.classList.toggle('bg-[#7C3AED]/20', isMatch);
      btn.classList.toggle('text-white', isMatch);
      btn.classList.toggle('font-medium', isMatch);
      btn.classList.toggle('border-white/15', !isMatch);
    });
  }

  slider?.addEventListener('input', (e) => {
    updateCalculations(Number(e.target.value));
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-val'));
      if (slider) slider.value = val;
      updateCalculations(val);
    });
  });
}
