/**
 * VideoEditorial.js
 * Bespoke UI/UX Layout for Corporate Cinema & AI Motion
 * Reference: A24films.com, RunwayML.com, Buck.co
 * Features:
 * - Theatrical Optical & Acoustic Specifications Matrix
 * - AI Neural Video Diffusion vs Physical 8K Cinema Comparison
 * - Multi-Format Widescreen & Vertical Master Deliverables
 */

export function renderVideoEditorial() {
  return `
    <div class="video-editorial-stage max-w-6xl mx-auto px-4 mb-24">
      
      <!-- SECTION HEADER -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
        <div>
          <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-1">CINEMA CRAFT & SPECIFICATIONS</p>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono">
            Hollywood Production Rigor & Optical Standards
          </h3>
        </div>
        <span class="hidden sm:inline text-xs !font-mono text-[#FF9900] font-medium">8K RED / ARRI Anamorphic</span>
      </div>

      <!-- THEATRICAL SPECIFICATIONS MATRIX -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        
        <div class="p-8 rounded-2xl bg-black text-white border border-white/10 flex flex-col justify-between min-h-[260px]">
          <div>
            <span class="text-xs !font-mono text-[#FF9900] uppercase font-bold block mb-2">01 / SENSOR</span>
            <h4 class="text-2xl font-light !font-mono text-white mb-2">RED Monstro 8K</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-3">Large Format VistaVision</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              35.4 Megapixel CMOS sensor delivering 16+ stops of dynamic latitude.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            Full Frame RAW 8192 × 4320
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-black text-white border border-white/10 flex flex-col justify-between min-h-[260px]">
          <div>
            <span class="text-xs !font-mono text-[#FF9900] uppercase font-bold block mb-2">02 / OPTICS</span>
            <h4 class="text-2xl font-light !font-mono text-white mb-2">Cooke Anamorphic</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-3">/i Technology Glass</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              Creamy oval bokeh, classic horizontal flares, and cinematic optical warmth.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            2.39:1 Theatrical Letterbox
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-black text-white border border-white/10 flex flex-col justify-between min-h-[260px]">
          <div>
            <span class="text-xs !font-mono text-[#FF9900] uppercase font-bold block mb-2">03 / COLOR SCIENCE</span>
            <h4 class="text-2xl font-light !font-mono text-white mb-2">ACEScc AP0</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-3">DaVinci Resolve Studio</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              Academy Color Encoding System tuned for OLED and theatrical HDR projection.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            DCI-P3 98% Color Gamut
          </div>
        </div>

        <div class="p-8 rounded-2xl bg-black text-white border border-white/10 flex flex-col justify-between min-h-[260px]">
          <div>
            <span class="text-xs !font-mono text-[#FF9900] uppercase font-bold block mb-2">04 / ACOUSTICS</span>
            <h4 class="text-2xl font-light !font-mono text-white mb-2">Dolby Atmos</h4>
            <p class="text-xs text-white/50 uppercase tracking-wider mb-3">7.1.4 Spatial Mixing</p>
            <p class="text-xs text-white/70 font-light leading-relaxed">
              3D spatial audio staging and tactile sub-bass sound design mixed in Noida.
            </p>
          </div>
          <div class="pt-4 border-t border-white/10 text-[11px] !font-mono text-[#00E599]">
            Multi-Channel Master Mix
          </div>
        </div>

      </div>

      <!-- AI DIFFUSION VS PHYSICAL 8K CINEMA PIPELINE -->
      <div class="p-8 lg:p-10 rounded-2xl bg-[#FAFAFA] border border-black/10 mb-16">
        <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-3">HYBRID PRODUCTION WORKFLOW</p>
        <h4 class="text-2xl sm:text-3xl font-light text-black !font-mono mb-6">
          Merging Physical Cinema Sensors with AI Diffusion Pipelines
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 class="text-lg font-medium text-black mb-2 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF9900]"></span>
              Physical Executive Documentaries
            </h5>
            <p class="text-sm text-black/70 font-light leading-relaxed mb-4">
              We shoot high-stakes founder interviews, multi-acre manufacturing facilities, and campus operations with physical cinema crews, high-altitude drones, and professional studio lighting setups.
            </p>
            <ul class="text-xs !font-mono text-black/60 space-y-1.5 list-none p-0">
              <li>• Authentic founder voice and emotional conviction</li>
              <li>• Institutional investor roadshow film packages</li>
              <li>• High-resolution industrial campus aerial footage</li>
            </ul>
          </div>

          <div>
            <h5 class="text-lg font-medium text-black mb-2 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#4E71FF]"></span>
              AI Synthetic Video & Unreal Engine 5
            </h5>
            <p class="text-sm text-black/70 font-light leading-relaxed mb-4">
              For complex software concepts, microchip architecture, or speculative futures, our team deploys ComfyUI diffusion models and Unreal Engine 5 Nanite geometry to visualize the invisible.
            </p>
            <ul class="text-xs !font-mono text-black/60 space-y-1.5 list-none p-0">
              <li>• Photorealistic 3D microscopic CGI server animations</li>
              <li>• Neural executive voice cloning across 24 global languages</li>
              <li>• Impossible continuous camera moves rendered in real-time</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  `;
}
