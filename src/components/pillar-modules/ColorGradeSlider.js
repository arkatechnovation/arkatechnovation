import { gsap } from 'gsap';

/**
 * ColorGradeSlider.js
 * Reference: A24films.com, RunwayML.com, Buck.co
 * Reverse-engineered DaVinci Resolve RAW vs Theatrical HDR Color Grade Split-Slider
 */

export function renderColorGradeSlider() {
  return `
    <div class="color-slider-container w-full max-w-6xl mx-auto px-4 my-20">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse"></span>
            <p class="!font-mono text-xs text-black/60 uppercase tracking-widest">CINEMATIC FINISHING • COLOR SCIENCE</p>
          </div>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono tracking-tight">
            DaVinci Resolve RAW vs Theatrical HDR Grade
          </h3>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-3">
          <span class="text-xs !font-mono text-black/60 uppercase">Grade Profile:</span>
          <div class="inline-flex rounded-lg border border-black/15 bg-neutral-100 p-1 text-xs !font-mono">
            <button id="lut-theatrical" class="lut-btn px-3 py-1.5 rounded-md font-medium bg-black text-white shadow-sm transition-all" data-lut="theatrical">ACES Theatrical</button>
            <button id="lut-cyberpunk" class="lut-btn px-3 py-1.5 rounded-md font-medium text-black/70 hover:text-black transition-all" data-lut="cyberpunk">Cyber Nocturne</button>
            <button id="lut-mono" class="lut-btn px-3 py-1.5 rounded-md font-medium text-black/70 hover:text-black transition-all" data-lut="mono">35mm Silver Halide</button>
          </div>
        </div>
      </div>

      <!-- INTERACTIVE COMPARISON STAGE -->
      <div class="relative w-full rounded-2xl bg-black overflow-hidden border border-black/15 shadow-2xl aspect-[16/9] max-h-[72dvh] select-none" id="grade-viewport">
        
        <!-- UNDER LAYER: THEATRICALLY GRADED IMAGE (RIGHT SIDE) -->
        <div class="absolute inset-0 w-full h-full">
          <img 
            id="grade-after-img" 
            src="/assets/corporate-video-collage.jpg" 
            alt="Theatrical Color Grade" 
            class="w-full h-full object-cover transition-all duration-500 filter contrast-[1.18] saturate-[1.25] brightness-[0.98]" 
          />
          <div class="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-[10px] !font-mono uppercase tracking-widest text-[#00E599]">
            ● Arka Theatrical HDR Grade
          </div>
        </div>

        <!-- OVER LAYER: FLAT RAW LOG SENSOR FOOTAGE (LEFT SIDE, CLIPPED) -->
        <div id="grade-clip-layer" class="absolute inset-0 w-1/2 h-full overflow-hidden border-r-2 border-white pointer-events-none">
          <div class="w-full h-full absolute inset-0 min-w-full">
            <img 
              id="grade-before-img" 
              src="/assets/corporate-video-collage.jpg" 
              alt="Flat RAW Sensor Log" 
              class="w-full h-full object-cover filter contrast-[0.72] saturate-[0.38] brightness-[1.12]" 
              style="width: 200%; max-width: none;"
            />
          </div>
          <div class="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-[10px] !font-mono uppercase tracking-widest text-white/70">
            ○ Unprocessed Flat RAW LOG
          </div>
        </div>

        <!-- DRAGGABLE DIVIDER HANDLE -->
        <div id="grade-slider-handle" class="absolute top-0 bottom-0 left-1/2 w-8 -ml-4 flex items-center justify-center cursor-ew-resize z-20 group">
          <div class="w-8 h-8 rounded-full bg-white text-black shadow-2xl border border-black/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>
            </svg>
          </div>
        </div>

        <!-- BOTTOM CINEMA TELEMETRY OVERLAY -->
        <div class="absolute bottom-4 left-4 right-4 z-10 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs !font-mono text-white/80">
          <div class="flex items-center gap-4">
            <span class="text-[#FF9900] font-medium flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span> ACEScc AP0
            </span>
            <span class="hidden sm:inline text-white/40">|</span>
            <span class="hidden sm:inline">Sensor: RED Monstro 8K VV</span>
            <span class="hidden sm:inline text-white/40">|</span>
            <span class="hidden sm:inline">Optics: Cooke Anamorphic /i</span>
          </div>
          <div class="flex items-center gap-3">
            <span id="active-lut-label" class="text-white font-medium text-[11px] bg-white/10 px-2.5 py-1 rounded">LUT: ARKA_ACES_THEATRICAL_V4</span>
            <span class="text-[#00E599] text-[11px]">Dolby Atmos 7.1.4</span>
          </div>
        </div>

      </div>

      <!-- INSTRUCTION HINT -->
      <div class="flex items-center justify-center gap-2 mt-3 text-xs !font-mono text-black/40">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>
        </svg>
        <span>Drag the split handle horizontally to inspect RAW log latitude vs master HDR color grade</span>
      </div>

      <!-- HOLLYWOOD PRODUCTION 4-STAGE PIPELINE -->
      <div class="mt-14 pt-10 border-t border-black/10">
        <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-3">CINEMA PRODUCTION RIGOR</p>
        <h4 class="text-2xl sm:text-3xl font-light text-black !font-mono mb-8">
          The Hollywood-Grade Corporate Film Architecture
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#FF9900] font-bold block mb-1">DISCIPLINE 01</span>
            <h5 class="text-sm font-semibold text-black mb-1">8K Anamorphic Optics</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Large-format cinema sensors paired with anamorphic glass for organic flares and creamy depth of field.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#FF9900] font-bold block mb-1">DISCIPLINE 02</span>
            <h5 class="text-sm font-semibold text-black mb-1">AI Neural Diffusion</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">ComfyUI diffusion pipelines rendering impossible visual transitions and synthetic speculative B-roll.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#FF9900] font-bold block mb-1">DISCIPLINE 03</span>
            <h5 class="text-sm font-semibold text-black mb-1">Unreal Engine 5 Virtual</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Lumen real-time raytraced environments allowing live camera tracking and zero-latency set changes.</p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-50 border border-black/10">
            <span class="text-xs !font-mono text-[#FF9900] font-bold block mb-1">DISCIPLINE 04</span>
            <h5 class="text-sm font-semibold text-black mb-1">Dolby Atmos Finishing</h5>
            <p class="text-xs text-black/70 leading-relaxed font-light">Multi-channel 3D spatial acoustic design mixed to sub-bass precision in our dedicated studio.</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function initColorGradeSlider() {
  const viewport = document.getElementById('grade-viewport');
  const clipLayer = document.getElementById('grade-clip-layer');
  const handle = document.getElementById('grade-slider-handle');
  const beforeImg = document.getElementById('grade-before-img');
  const afterImg = document.getElementById('grade-after-img');
  const lutBtns = document.querySelectorAll('.lut-btn');
  const lutLabel = document.getElementById('active-lut-label');

  if (!viewport || !clipLayer || !handle) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = viewport.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    clipLayer.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;

    // Compensate inner image width so it maps 1:1 with viewport
    if (beforeImg) {
      beforeImg.style.width = `${rect.width}px`;
    }
  }

  // Handle Dragging
  const startDrag = (e) => {
    isDragging = true;
    updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const stopDrag = () => {
    isDragging = false;
  };

  handle.addEventListener('mousedown', startDrag);
  viewport.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', stopDrag);

  handle.addEventListener('touchstart', startDrag, { passive: true });
  viewport.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', onDrag, { passive: true });
  window.addEventListener('touchend', stopDrag);

  // Resize handler to keep 1:1 image mapping
  const onResize = () => {
    if (viewport && beforeImg) {
      beforeImg.style.width = `${viewport.offsetWidth}px`;
    }
  };
  window.addEventListener('resize', onResize);
  onResize();

  // LUT profile switching
  const lutProfiles = {
    theatrical: {
      label: 'LUT: ARKA_ACES_THEATRICAL_V4',
      filter: 'contrast(1.18) saturate(1.25) brightness(0.98)'
    },
    cyberpunk: {
      label: 'LUT: NEO_CYBERPUNK_NOCTURNE',
      filter: 'contrast(1.3) saturate(1.4) hue-rotate(180deg) brightness(0.95)'
    },
    mono: {
      label: 'LUT: 35MM_SILVER_HALIDE_MONO',
      filter: 'contrast(1.4) grayscale(1) brightness(0.92)'
    }
  };

  lutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lutKey = btn.getAttribute('data-lut');
      const profile = lutProfiles[lutKey] || lutProfiles.theatrical;

      if (afterImg) {
        afterImg.style.filter = profile.filter;
      }
      if (lutLabel) {
        lutLabel.textContent = profile.label;
      }

      lutBtns.forEach(b => {
        const isMatch = b === btn;
        b.classList.toggle('bg-black', isMatch);
        b.classList.toggle('text-white', isMatch);
        b.classList.toggle('shadow-sm', isMatch);
        b.classList.toggle('text-black/70', !isMatch);
      });
    });
  });
}
