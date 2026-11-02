/**
 * MarketingEditorial.js
 * Bespoke UI/UX Layout for Digital Marketing & Performance Growth
 * Reference: Klaviyo.com, Reforge.com, Attribution.com
 * Features:
 * - Vertical Conversion Waterfall Funnel (Awareness -> Consideration -> Conversion -> Revenue)
 * - Server-Side CAPI Tracking Architectural Comparison
 * - Omnichannel Capital Allocation Balance Dashboard
 */

export function renderMarketingEditorial() {
  return `
    <div class="marketing-editorial-stage max-w-6xl mx-auto px-4 mb-24">
      
      <!-- SECTION HEADER -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
        <div>
          <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-1">REVENUE VELOCITY FRAMEWORK</p>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono">
            Omnichannel Customer Acquisition Waterfall
          </h3>
        </div>
        <span class="hidden sm:inline text-xs !font-mono text-[#7C3AED] font-medium">5.8x Blended ROAS</span>
      </div>

      <!-- VERTICAL CONVERSION WATERFALL FUNNEL -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        
        <div class="p-8 rounded-2xl bg-[#0F0C1E] text-white border border-white/10 flex flex-col justify-between min-h-[300px]">
          <div>
            <span class="text-xs !font-mono text-[#7C3AED] uppercase font-bold block mb-2">STAGE 01 / AWARENESS</span>
            <h4 class="text-3xl font-light !font-mono text-white mb-2">120,000+</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-4">Ad Impressions</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              Dynamic creative video hooks tested weekly across Meta, YouTube, and LinkedIn ABM.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            7.0% Click-Through Target
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-[#0F0C1E] text-white border border-white/10 flex flex-col justify-between min-h-[300px]">
          <div>
            <span class="text-xs !font-mono text-[#7C3AED] uppercase font-bold block mb-2">STAGE 02 / INTENT</span>
            <h4 class="text-3xl font-light !font-mono text-white mb-2">8,400</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-4">High-Intent Visitors</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              Google Search query intent intercept and account-based retargeting drips.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            5.0% Conversion Rate Target
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-[#0F0C1E] text-white border border-white/10 flex flex-col justify-between min-h-[300px]">
          <div>
            <span class="text-xs !font-mono text-[#7C3AED] uppercase font-bold block mb-2">STAGE 03 / CONVERSION</span>
            <h4 class="text-3xl font-light !font-mono text-white mb-2">420</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-4">Qualified Inbound Inquiries</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              Frictionless, sub-second CRO landing pages with dynamic headline personalization.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            ₹4,166 Blended CAC
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-[#7C3AED] text-white border border-[#7C3AED] flex flex-col justify-between min-h-[300px] shadow-2xl">
          <div>
            <span class="text-xs !font-mono text-white/80 uppercase font-bold block mb-2">STAGE 04 / REVENUE</span>
            <h4 class="text-3xl sm:text-4xl font-light !font-mono text-white mb-2 font-bold">₹58 Lakh+</h4>
            <p class="text-xs text-white/80 uppercase tracking-wider mb-4">Closed Pipeline Value</p>
            <p class="text-xs text-white/90 font-light leading-relaxed">
              Deterministic enterprise deal yield generated per ₹10 Lakh ad capital deployed.
            </p>
          </div>
          <div class="pt-4 border-t border-white/20 text-[11px] !font-mono text-white font-medium">
            5.8x Blended ROAS Multiple
          </div>
        </div>

      </div>

      <!-- SERVER-SIDE CAPI VS CLIENT-SIDE TRACKING ARCHITECTURAL COMPARISON -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        <div class="p-8 rounded-2xl bg-[#FAFAFA] border border-black/10">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs !font-mono text-[#00E599] font-bold uppercase">ARKA STANDARD: SERVER-SIDE CAPI</span>
            <span class="w-2 h-2 rounded-full bg-[#00E599]"></span>
          </div>
          <h4 class="text-xl font-light !font-mono text-black mb-3">100% Data Integrity Server-to-Server Sync</h4>
          <p class="text-sm text-black/70 font-light leading-relaxed mb-4">
            Conversions API bypasses browser ad blockers, iOS 14.5+ privacy restrictions, and cookie expiration. Real purchase data is fed directly to Meta and Google ad bidding algorithms.
          </p>
          <div class="text-xs !font-mono text-[#00E599] font-medium pt-3 border-t border-black/10">
            Algorithm Learning Efficiency: 100%
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-[#FAFAFA] border border-black/10 opacity-75">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs !font-mono text-red-500 font-bold uppercase">OUTDATED: CLIENT-SIDE BROWSER PIXEL</span>
            <span class="w-2 h-2 rounded-full bg-red-400"></span>
          </div>
          <h4 class="text-xl font-light !font-mono text-black mb-3">35% – 45% Conversion Data Loss</h4>
          <p class="text-sm text-black/70 font-light leading-relaxed mb-4">
            Traditional JavaScript pixels are blocked by Safari ITP, Brave, and ad blockers, leading to blind algorithmic bidding and inflated customer acquisition costs.
          </p>
          <div class="text-xs !font-mono text-red-500 font-medium pt-3 border-t border-black/10">
            Algorithm Blindness: Severe Data Degradation
          </div>
        </div>

      </div>

    </div>
  `;
}
