import * as THREE from 'three';

/**
 * ArtCraft-Grade 3D Celestial Galaxy Canvas
 * Unified Single Wheel of Floating Brand & Technology Logos
 * 
 * Features:
 * 1. ONLY Floating Logos (Git, Anthropic, React, Next.js, Python, Docker, Kubernetes, etc.)
 *    No rectangular cards, no stock photos, no clipping boundaries.
 * 2. 1-to-1 Pixel Camera Calibration for crystal-sharp rendering.
 * 3. Logarithmic Spiral Conveyor with golden ratio desync orbiting around the center quote.
 * 4. Dual Birth & Exit Fade (0 at birth, 1 at mid orbit, 0 at outer boundary)
 *    so logos dissolve smoothly into space with ZERO corner cropping.
 * 5. Interactive 3D tilt, magnetic hover lock, and smooth scale boost.
 */

export class ArtcraftGalaxyCanvas {
  constructor(container, options = {}) {
    this.container = container;
    this.onCardClick = options.onCardClick || (() => {});
    this.theme = options.theme || 'light';
    this.offsetX = options.offsetX || 0;
    this.offsetY = options.offsetY || 0;

    // Tunables calibrated for prominent floating logos across the celestial wheel
    this.tunables = {
      arms: 6,
      turns: 1.05,
      rMaxFrac: 0.60,     // Contained radius prevents logos from reaching corners
      birthFrac: 0.14,    // Natural center galaxy vortex
      cardHFrac: 0.18,    // Balanced logo badge size (~70-110px)
      density: 0.90,      // Collision-free distance multiplier
      innerCap: 0.65,     // Birth size ceiling (large and bold right away)
      idleSpeed: 0.45,    // Cycles / minute
      scrub: 0.20,        // Cycles per 1000px scroll
      spinDeg: -26,       // Celestial spin degrees / minute
      wobbleAmp: 4,       // Floating space drift (px)
      wobbleFreq: 0.20,   // Wobble frequency (Hz)
      fieldPx: 320,       // Pointer field radius (px)
      tiltDeg: 14,        // 3D tilt lean toward cursor
      tugPx: 8,           // Translation pull toward cursor
      mouseWarp: 120,     // Surface bulge height (px)
      uCurve: 12,         // Anamorphic lens curvature (px)
      boostScale: 1.25,   // Scale multiplier on hover
      armJitter: 0.618034 // Golden ratio arm desync
    };

    this.pointer = { x: 0, y: 0, active: false };
    this.idleProgress = 0;
    this.globalSpin = 0;
    this.targetCardIndex = -1;

    this.cards = [];
    this.textureCache = new Map();

    // Nearest-neighbor cache for O(n²) collision avoidance (updated every 3rd frame)
    this._nnFrame = 0;
    this._nnCache = null;

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    const rect = this.container.getBoundingClientRect();
    this.width = Math.max(300, rect.width || this.container.clientWidth || window.innerWidth);
    this.height = Math.max(300, rect.height || this.container.clientHeight || window.innerHeight);

    // 1-to-1 pixel camera setup: 1 world unit = exactly 1 CSS pixel
    const fov = 45;
    const fovRad = THREE.MathUtils.degToRad(fov / 2);
    const cameraZ = (this.height / 2) / Math.tan(fovRad);
    this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, 10, 5000);
    this.camera.position.set(0, 0, cameraZ);
    this.camera.lookAt(0, 0, 0);

    // WebGL Renderer with alpha transparency (optimized for 60/120fps)
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'default',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.0));
    this.renderer.setSize(this.width, this.height);
    this.canvas = this.renderer.domElement;
    this.canvas.className = 'artcraft-galaxy-canvas';
    this.canvas.style.position = 'absolute';
    this.canvas.style.inset = '0';
    this.canvas.style.pointerEvents = 'auto';
    this.canvas.style.zIndex = '1';
    this.canvas.style.transform = 'translateZ(0)';
    this.container.appendChild(this.canvas);

    // Parent group for celestial spin
    this.galaxyGroup = new THREE.Group();
    this.galaxyGroup.position.set(this.offsetX, this.offsetY, 0);
    this.scene.add(this.galaxyGroup);

    // 1:1 Square plane geometry for floating logo emblems
    this.cardGeometry = new THREE.PlaneGeometry(1, 1, 8, 8);

    // Build spiral arm guide lines & ticks
    this.buildUnderlay();

    // Create floating logo nodes (ONE unified wheel)
    this.buildCards();

    // Event listeners
    this.bindEvents();

    // Viewport-aware Render loop (pauses when off-screen for 120 FPS performance)
    this.isVisible = false;
    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);

    this.start = () => {
      if (this.rafId || !this.isVisible) return;
      this.clock.start();
      this.rafId = requestAnimationFrame(this.animate);
    };

    this.stop = () => {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = 0;
      }
      this.clock.stop();
    };

    this.observer = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
      if (this.isVisible) this.start();
      else this.stop();
    }, { rootMargin: '160px 0px' });
    this.observer.observe(this.container);
  }

  bindEvents() {
    this._containerRect = null;
    this.updateContainerRect = () => {
      if (this.isVisible) {
        this._containerRect = this.container.getBoundingClientRect();
      }
    };
    window.addEventListener('scroll', this.updateContainerRect, { passive: true });

    this.onResize = () => {
      this._containerRect = null;
      const rect = this.container.getBoundingClientRect();
      this.width = Math.max(300, rect.width || this.container.clientWidth || window.innerWidth);
      this.height = Math.max(300, rect.height || this.container.clientHeight || window.innerHeight);

      const fovRad = THREE.MathUtils.degToRad(this.camera.fov / 2);
      this.camera.position.z = (this.height / 2) / Math.tan(fovRad);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);

      this.rebuildUnderlay();
    };
    window.addEventListener('resize', this.onResize);

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.onResize();
      });
      this.resizeObserver.observe(this.container);
    }

    this.onPointerMove = (e) => {
      if (!this.isVisible) {
        if (this.pointer.active) this.pointer.active = false;
        return;
      }
      const rect = this._containerRect || (this._containerRect = this.container.getBoundingClientRect());
      const inX = e.clientX >= rect.left && e.clientX <= rect.right;
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (inX && inY) {
        this.pointer.x = e.clientX - rect.left - this.width / 2;
        this.pointer.y = -(e.clientY - rect.top - this.height / 2);
        this.pointer.active = true;
      } else {
        this.pointer.active = false;
      }
    };
    window.addEventListener('pointermove', this.onPointerMove, { passive: true });

    this.onPointerLeave = () => {
      this.pointer.active = false;
    };
    document.addEventListener('mouseleave', this.onPointerLeave);

    this.onClick = () => {
      if (this.targetCardIndex >= 0 && this.cards[this.targetCardIndex]) {
        const card = this.cards[this.targetCardIndex];
        const items = this.getAllServicesItems();
        const item = items[card.id % items.length];
        this.onCardClick(item, card);
      }
    };
    this.canvas.addEventListener('click', this.onClick);
  }

  buildUnderlay() {
    const halfDiag = Math.hypot(this.width, this.height) / 2;
    const rMax = this.tunables.rMaxFrac * halfDiag;
    const thetaMax = this.tunables.turns * Math.PI * 2;
    const b = rMax / thetaMax;
    const thetaBirth = this.tunables.birthFrac * thetaMax;
    const cardHCap = Math.min(110, Math.max(50, this.height * this.tunables.cardHFrac));
    const thetaExit = (rMax + cardHCap * 0.8) / b;

    this.underlayGroup = new THREE.Group();
    this.galaxyGroup.add(this.underlayGroup);

    const isLight = this.theme === 'light';
    const baseColor = isLight ? 0x18181b : 0xffffff;

    // 1. Logarithmic Spiral Guide Arms (Crisp compass geometry)
    const armMaterial = new THREE.LineBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: isLight ? 0.20 : 0.10,
      depthTest: false,
    });

    this.armLines = [];
    for (let a = 0; a < this.tunables.arms; a++) {
      const armAngle = (a * Math.PI * 2) / this.tunables.arms;
      const points = [];
      const steps = 100;
      for (let s = 0; s <= steps; s++) {
        const t = thetaBirth * 0.7 + (s / steps) * (thetaExit - thetaBirth * 0.7);
        const r = b * t;
        const u = t + armAngle;
        points.push(new THREE.Vector3(r * Math.cos(u), r * Math.sin(u), -4));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, armMaterial);
      this.underlayGroup.add(line);
      this.armLines.push(line);
    }

    // 2. Dial Ticks along the spiral arms
    const tickPoints = [];
    const ticksPerArm = 14;
    for (let a = 0; a < this.tunables.arms; a++) {
      const armAngle = (a * Math.PI * 2) / this.tunables.arms;
      for (let i = 0; i < ticksPerArm; i++) {
        const t = thetaMax * (0.35 + 0.65 * ((i + 0.5) / ticksPerArm));
        const r = b * t;
        const u = t + armAngle;
        const cos = Math.cos(u);
        const sin = Math.sin(u);
        tickPoints.push((r - 4) * cos, (r - 4) * sin, -4);
        tickPoints.push((r + 4) * cos, (r + 4) * sin, -4);
      }
    }
    const tickGeom = new THREE.BufferGeometry();
    tickGeom.setAttribute('position', new THREE.Float32BufferAttribute(tickPoints, 3));
    this.tickLines = new THREE.LineSegments(tickGeom, new THREE.LineBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: isLight ? 0.24 : 0.15,
      depthTest: false,
    }));
    this.underlayGroup.add(this.tickLines);

    // 3. Central Orbit Ring around quote
    const circRadius = thetaBirth * b;
    const circSegments = 48;
    const circPoints = [];
    for (let i = 0; i < circSegments; i++) {
      const t1 = (i / circSegments) * Math.PI * 2;
      const t2 = t1 + (Math.PI / circSegments) * 0.5;
      circPoints.push(circRadius * Math.cos(t1), circRadius * Math.sin(t1), -4);
      circPoints.push(circRadius * Math.cos(t2), circRadius * Math.sin(t2), -4);
    }
    const circGeom = new THREE.BufferGeometry();
    circGeom.setAttribute('position', new THREE.Float32BufferAttribute(circPoints, 3));
    this.circLines = new THREE.LineSegments(circGeom, new THREE.LineBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: isLight ? 0.25 : 0.16,
      depthTest: false,
    }));
    this.underlayGroup.add(this.circLines);
  }

  rebuildUnderlay() {
    if (this.underlayGroup) {
      this.galaxyGroup.remove(this.underlayGroup);
      this.underlayGroup.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    this.buildUnderlay();
  }

  buildCards() {
    // Clean old cards
    this.cards.forEach(c => {
      this.galaxyGroup.remove(c.mesh);
      if (c.material) c.material.dispose();
    });
    this.cards = [];

    // Floating logo count tailored for extra large prominent nodes: 22 to 30 floating nodes
    const mpx = (this.width * this.height) / 1e6;
    const isMobile = window.innerWidth < 768;
    const cardN = isMobile
      ? Math.max(12, Math.min(18, Math.round(16 * (mpx / 1.2))))
      : Math.max(22, Math.min(30, Math.round(26 * (mpx / 1.2))));

    // ONE Unified Wheel containing all 31 services & technologies
    const items = this.getAllServicesItems();

    // Shaders for floating logos (clean transparent rendering with anamorphic bow & mouse warp)
    const vertexShader = `
      uniform float uCurve;
      uniform float uWarp;
      uniform vec2 uMouse;
      uniform vec2 uSize;
      out vec2 vUv;

      void main() {
        vUv = uv;
        vec4 world = modelMatrix * vec4(position, 1.0);

        // Anamorphic bow
        float d2 = dot(position.xy, position.xy);
        world.z += uCurve * (0.25 - d2) * 2.0;

        // Pointer magnetic bulge
        vec2 dpx = (position.xy - uMouse) * uSize;
        float rr = max(uSize.x, uSize.y) * 0.75;
        world.z += uWarp * exp(-dot(dpx, dpx) / (rr * rr));

        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `;

    const fragmentShader = `
      uniform sampler2D uMap;
      uniform float uAlpha;
      in vec2 vUv;
      out vec4 fragColor;

      void main() {
        vec4 tex = texture(uMap, vUv);
        if (tex.a < 0.015) discard;
        fragColor = vec4(tex.rgb, tex.a * uAlpha);
      }
    `;

    for (let i = 0; i < cardN; i++) {
      const item = items[i % items.length];
      const tex = this.getOrCreateLogoTexture(item);

      const material = new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        uniforms: {
          uMap: { value: tex },
          uAlpha: { value: 0 },
          uCurve: { value: this.tunables.uCurve },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uWarp: { value: 0 },
          uSize: { value: new THREE.Vector2(160, 160) },
        }
      });

      const mesh = new THREE.Mesh(this.cardGeometry, material);
      mesh.scale.set(160, 160, 1);
      this.galaxyGroup.add(mesh);

      this.cards.push({
        id: i,
        arm: i % this.tunables.arms,
        slot: Math.floor(i / this.tunables.arms),
        mesh,
        material,
        x: 0,
        y: 0,
        currentSize: 160,
        progress: 0,
        tiltX: 0,
        tiltY: 0,
      });
    }

    // Golden ratio sort order
    this.sortOrder = this.cards.map((_, i) => i);
    this.sortOrder.sort((a, b) => (0.618034 * a) % 1 - (0.618034 * b) % 1);
  }

  /**
   * Complete unified suite of 31 capabilities across ALL services:
   * Software Engineering, AI & Search, Growth & Commerce, 3D & Cinema.
   * Prominently featuring official vector logos (Git, Anthropic, React, etc.).
   */
  getAllServicesItems() {
    return [
      // ── Software, Cloud & Systems ──
      {
        title: 'GitHub Enterprise',
        tag: 'CI/CD GOVERNANCE',
        category: 'Software & DevOps',
        logo: 'github.svg',
        color: '#8B949E',
        metric: '100% AUTOMATED CI/CD',
        description: 'Enterprise source control, automated deployment pipelines, security scanning, and branch protection policies ensuring resilient zero-defect delivery.',
      },
      {
        title: 'Anthropic Claude AI',
        tag: 'LLM CITATION & GEO',
        category: 'Artificial Intelligence',
        logo: 'anthropic.svg',
        color: '#D97706',
        metric: 'ENTERPRISE LLM / GEO SEEDING',
        description: 'Generative Engine Optimization (GEO), knowledge graph seeding, automated agentic pipelines, and Claude-powered semantic intelligence.',
      },
      {
        title: 'React 19 Concurrent UI',
        tag: 'FRONTEND ARCHITECTURE',
        category: 'Software & Engineering',
        logo: 'react.svg',
        color: '#61DAFB',
        metric: '120 FPS GPU COMPOSITION',
        description: 'Concurrent React architectures with server actions, optimistic UI mutations, WebGL canvas integration, and sub-16ms frame budgeting.',
      },
      {
        title: 'Next.js 15 App Router',
        tag: 'STREAMING SSR',
        category: 'Software & Engineering',
        logo: 'nextjs.svg',
        color: '#E2E8F0',
        metric: 'EDGE COMPUTE & RSC STREAMING',
        description: 'Edge-rendered server components, incremental static regeneration (ISR), dynamic parallel routing, and instant worldwide edge distribution.',
      },
      {
        title: 'Python Distributed ML',
        tag: 'NEURAL COMPUTE',
        category: 'Software & AI',
        logo: 'python.svg',
        color: '#3776AB',
        metric: 'FASTAPI & PYTORCH PIPELINES',
        description: 'Distributed machine learning backends, high-throughput asynchronous FastAPI microservices, and enterprise vector database embeddings.',
      },
      {
        title: 'Docker Microservices',
        tag: 'CONTAINER SYSTEMS',
        category: 'Cloud Infrastructure',
        logo: 'docker.svg',
        color: '#2496ED',
        metric: 'ISOLATED CONTAINER ORCHESTRATION',
        description: 'Multi-stage container builds, deterministic runtime environments, minimal attack surface hardening, and immutable infrastructure delivery.',
      },
      {
        title: 'Kubernetes Multi-Region',
        tag: 'ZERO-DOWNTIME',
        category: 'Cloud Infrastructure',
        logo: 'kubernetes.svg',
        color: '#326CE5',
        metric: 'MULTI-REGION AUTOSCALING CLUSTERS',
        description: 'Horizontal pod autoscaling, zero-downtime rolling deployments, mesh service discovery, and high-availability disaster recovery.',
      },
      {
        title: 'PostgreSQL Distributed',
        tag: 'DATABASE SHARDING',
        category: 'Database Systems',
        logo: 'postgresql.svg',
        color: '#4169E1',
        metric: 'HIGH-THROUGHPUT ACID TRANSACTIONS',
        description: 'Enterprise relation modeling, connection pooling with PgBouncer, connection read-replicas, and JSONB document hybrid capabilities.',
      },
      {
        title: 'Redis In-Memory Speed',
        tag: 'SUB-1MS ACCESS',
        category: 'Database Systems',
        logo: 'redis.svg',
        color: '#DC382D',
        metric: 'SUB-1MS DISTRIBUTED CACHE CLUSTERS',
        description: 'High-speed session persistence, distributed locking, pub/sub messaging channels, and ultra-fast hot data caching layers.',
      },
      {
        title: 'Rust Low-Level Kernel',
        tag: 'MEMORY SAFETY',
        category: 'Software & Systems',
        logo: 'rust.svg',
        color: '#DEA584',
        metric: 'ZERO-COST ABSTRACTIONS & WEBASM',
        description: 'Mission-critical systems engineering, WebAssembly compilation, memory safety without garbage collection pauses, and raw compute performance.',
      },
      {
        title: 'TypeScript 5.5 Strict',
        tag: 'TYPE SAFETY',
        category: 'Software & Engineering',
        logo: 'typescript.svg',
        color: '#3178C6',
        metric: 'END-TO-END SCHEMA INTEGRITY',
        description: 'End-to-end type contracts across client and server boundaries, automated OpenAPI schema generation, and strict compilation validation.',
      },
      {
        title: 'Figma Design Tokens',
        tag: 'DESIGN SYSTEMS',
        category: 'Product Design',
        logo: 'figma.svg',
        color: '#F24E1E',
        metric: 'ATOMIC UI & TOKEN GOVERNANCE',
        description: 'Systematized typography, spacing, and color design tokens synced seamlessly between design prototypes and production codebases.',
      },
      {
        title: 'Tailwind Motion Engine',
        tag: '120FPS GPU COMPOSITION',
        category: 'Frontend Engineering',
        logo: 'tailwind.svg',
        color: '#06B6D4',
        metric: 'GPU-ACCELERATED TRANSITIONS',
        description: 'Bespoke design tokens, zero-runtime CSS utility architecture, hardware-accelerated transforms, and immaculate responsive layouts.',
      },
      {
        title: 'Node.js High Concurrency',
        tag: 'V8 EVENT LOOP',
        category: 'Backend Systems',
        logo: 'nodejs.svg',
        color: '#5FA04E',
        metric: 'NON-BLOCKING ASYNC EVENT LOOP',
        description: 'Asynchronous event-driven I/O architectures capable of sustaining 50,000+ concurrent real-time WebSocket connections.',
      },
      {
        title: 'GraphQL API Graph',
        tag: 'SUB-10MS LATENCY',
        category: 'Backend Systems',
        logo: 'graphql.svg',
        color: '#E10098',
        metric: 'ZERO OVER-FETCHING FEDERATION',
        description: 'Federated schema stitching, granular data querying, zero over-fetching, and real-time subscription pipelines for reactive web clients.',
      },
      {
        title: 'Native iOS & SwiftUI',
        tag: 'MOBILE ECOSYSTEM',
        category: 'Mobile Engineering',
        logo: 'swift.svg',
        color: '#F05138',
        metric: '120HZ PROMOTION FLUIDITY',
        description: 'Native Apple ecosystem engineering with Swift 6, CoreData concurrency, Metal shaders, and seamless iOS 18 interactive widgets.',
      },

      // ── SEO & Search Visibility ──
      {
        title: 'Google Page 1 Domination',
        tag: 'PAGE 1 RANK #1',
        category: 'Search & Visibility',
        logo: 'google.svg',
        color: '#4285F4',
        metric: '50K+ PAGES INDEXED & RANKED',
        description: 'Organic search domination, topical cluster authority, technical crawl budget optimization, and top SERP commercial keyword ownership.',
      },
      {
        title: 'Perplexity AI Citations',
        tag: 'AI SEARCH / GEO',
        category: 'Search & AI Citations',
        logo: 'perplexity.svg',
        color: '#20B2AA',
        metric: 'GENERATIVE CITATION SEEDING',
        description: 'Generative Engine Optimization (GEO) ensuring your brand is cited as the primary definitive source across Perplexity, ChatGPT, and Copilot.',
      },
      {
        title: 'Semrush Authority Moat',
        tag: 'TOPICAL DOMINANCE',
        category: 'Search & Visibility',
        logo: 'semrush.svg',
        color: '#FF642D',
        metric: 'DR 86 EDITORIAL PR SIGNALS',
        description: 'Competitive keyword moats, high-authority backlink syndication, editorial press signals, and continuous SERP telemetry tracking.',
      },
      {
        title: 'Core Web Vitals 100',
        tag: 'PERFORMANCE 100',
        category: 'Performance Engineering',
        logo: 'lighthouse.svg',
        color: '#00CEC9',
        metric: 'SUB-1S LCP & ZERO CLS SCORE',
        description: 'Maximum Google Lighthouse performance audits, sub-second largest contentful paint, zero cumulative layout shift, and instant INP scores.',
      },

      // ── Growth, Performance & Commerce ──
      {
        title: 'Meta Ads Scaling Engine',
        tag: '5.8X BLENDED ROAS',
        category: 'Paid Acquisition',
        logo: 'meta.svg',
        color: '#0081FB',
        metric: '5.8X BLENDED ACQUISITION ROAS',
        description: 'High-frequency algorithmic creative testing, automated lookalike audience synthesis, and server-side Conversion API (CAPI) matching.',
      },
      {
        title: 'Google Performance Max',
        tag: 'SEARCH & PMAX',
        category: 'Paid Acquisition',
        logo: 'googleads.svg',
        color: '#4285F4',
        metric: 'OMNICHANNEL BIDDING ALGORITHMS',
        description: 'Unified cross-channel campaigns spanning Search, YouTube, Gmail, Maps, and Display with precision value-based automated bidding.',
      },
      {
        title: 'Stripe Frictionless Payments',
        tag: 'GLOBAL FINTECH',
        category: 'Commerce & Payments',
        logo: 'stripe.svg',
        color: '#635BFF',
        metric: '135+ CURRENCIES & 99.999% UPTIME',
        description: 'Frictionless checkout experiences, automatic localized currency routing, Radar fraud prevention, and automated multi-tier billing.',
      },
      {
        title: 'Shopify Revenue Engine',
        tag: '₹45 CR SCALED ARR',
        category: 'Commerce & Payments',
        logo: 'shopify.svg',
        color: '#7AB55C',
        metric: '₹45 CR SCALED ARR ARCHITECTURE',
        description: 'High-converting headless e-commerce storefronts, custom checkout extensions, VIP retention loops, and optimized cart average order value.',
      },
      {
        title: 'HubSpot Enterprise CRM',
        tag: 'PIPELINE VELOCITY',
        category: 'Enterprise Growth',
        logo: 'hubspot.svg',
        color: '#FF7A59',
        metric: 'CLOSED-LOOP REVENUE ATTRIBUTION',
        description: 'B2B multi-touch revenue attribution, automated lead qualification sequences, sales pipeline acceleration, and executive BI dashboards.',
      },
      {
        title: 'YouTube Direct Response',
        tag: 'VIDEO CONVERSIONS',
        category: 'Growth & Video',
        logo: 'youtube.svg',
        color: '#FF0000',
        metric: 'HIGH-INTENT COMMERCIAL CONVERSIONS',
        description: 'High-intent hook-to-offer video funnels, automated intent-based audience targeting, and high-ticket customer acquisition pipelines.',
      },

      // ── 3D & Corporate Film Production ──
      {
        title: 'Unreal Engine 5 Real-Time',
        tag: 'LUMEN REAL-TIME',
        category: '3D & Film Making',
        logo: 'unrealengine.svg',
        color: '#E2E8F0',
        metric: 'PHOTOREAL REAL-TIME VIRTUAL SETS',
        description: 'Nanite geometry virtual production sets, Lumen dynamic global illumination, in-camera visual effects (ICVFX), and cinematic previs.',
      },
      {
        title: 'Blender 3D CGI Simulation',
        tag: 'PHOTOREAL RENDERS',
        category: '3D & Film Making',
        logo: 'blender.svg',
        color: '#F5792A',
        metric: 'SUB-MILLIMETER 3D CAD ANIMATION',
        description: 'Hard-surface industrial CAD visualization, photorealistic exploded-view animations, fluid physics simulations, and tactile surface texturing.',
      },
      {
        title: 'DaVinci Resolve HDR Grading',
        tag: 'ACES COLOR SPACE',
        category: 'Corporate Film',
        logo: 'davinci.svg',
        color: '#E17055',
        metric: 'THEATRICAL ACES HDR MASTERING',
        description: 'Theatrical-grade color timing, ACES color management, wide dynamic range HDR deliverables, and cinematic anamorphic optics emulation.',
      },
      {
        title: 'Dolby Atmos Spatial Sound',
        tag: '7.1.4 SURROUND',
        category: 'Audio & Film',
        logo: 'dolby.svg',
        color: '#E2E8F0',
        metric: '7.1.4 THEATRICAL SPATIAL AUDIO',
        description: 'Immersive spatial sound design, tactile foley audio reproduction, custom orchestral composition, and theatrical surround mix delivery.',
      },
      {
        title: 'Cinema 4D Motion Graphics',
        tag: 'OCTANE RENDER',
        category: '3D & Creative',
        logo: 'cinema4d.svg',
        color: '#74B9FF',
        metric: 'HIGH-END BRAND MOTION DESIGN',
        description: 'High-speed parametric typography, fluid physics simulations, dynamic particle choreography, and Octane GPU ray-traced rendering.',
      },
    ];
  }

  getProductLineItems() {
    return this.getAllServicesItems();
  }

  /**
   * Generates a sleek, organic floating logo emblem texture.
   * NO rectangular cards! Pure circular floating emblem with ambient brand aura.
   */
  getOrCreateLogoTexture(item) {
    const key = `logo_${item.logo}`;
    if (this.textureCache.has(key)) {
      return this.textureCache.get(key);
    }

    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.textureCache.set(key, texture);

    const logoPath = `/assets/galaxy/logos/${item.logo}`;
    let logoLoaded = false;
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';

    const repaint = () => {
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const discR = 215;

      // 1. Soft Outer Ambient Brand Halo
      const halo = ctx.createRadialGradient(cx, cy, discR * 0.7, cx, cy, discR * 1.3);
      halo.addColorStop(0, `${item.color}55`);
      halo.addColorStop(0.6, `${item.color}18`);
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, discR * 1.3, 0, Math.PI * 2);
      ctx.fill();

      const isLight = this.theme === 'light';

      if (isLight) {
        // 2. Porcelain Glass Disc for Light Mode
        const discGrad = ctx.createLinearGradient(cx - discR, cy - discR, cx + discR, cy + discR);
        discGrad.addColorStop(0, '#FFFFFF');
        discGrad.addColorStop(1, '#F3F4F6');
        ctx.fillStyle = discGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, discR, 0, Math.PI * 2);
        ctx.fill();

        // Subtle clean border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Vibrant brand accent rim
        ctx.strokeStyle = `${item.color}77`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(cx, cy, discR - 3, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // 2. Midnight Obsidian Circular Disc for Dark Mode
        const discGrad = ctx.createLinearGradient(cx - discR, cy - discR, cx + discR, cy + discR);
        discGrad.addColorStop(0, '#181C26');
        discGrad.addColorStop(1, '#0C0E14');
        ctx.fillStyle = discGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, discR, 0, Math.PI * 2);
        ctx.fill();

        // 3. Subtle Brand-Tinted Circular Hairline Rim
        ctx.strokeStyle = `${item.color}66`;
        ctx.lineWidth = 5;
        ctx.stroke();

        // Outer specular ring
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.20)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, discR - 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Draw Official Vector Logo in the Center
      if (logoLoaded) {
        const iconSize = 270;
        ctx.drawImage(logoImg, cx - iconSize / 2, cy - iconSize / 2, iconSize, iconSize);
      } else {
        // Monogram fallback while loading
        ctx.fillStyle = isLight ? '#111827' : '#FFFFFF';
        ctx.font = 'bold 100px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const initial = item.title.charAt(0);
        ctx.fillText(initial, cx, cy);
      }

      texture.needsUpdate = true;
    };

    logoImg.onload = () => {
      logoLoaded = true;
      repaint();
    };
    logoImg.onerror = () => {
      logoLoaded = false;
      repaint();
    };
    logoImg.src = logoPath;

    repaint();
    return texture;
  }

  setProductLine(line) {
    // Single unified wheel contains all services
  }

  animate() {
    const delta = Math.min(this.clock.getDelta(), 0.05);
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Conveyor progress and celestial spin (uses cached rect, 0 forced reflows)
    this.idleProgress += (delta * this.tunables.idleSpeed) / 60;
    const rect = this._containerRect || (this._containerRect = this.container.getBoundingClientRect());
    const relativeScroll = Math.max(0, window.innerHeight - rect.top);
    const scrollScrub = (relativeScroll * this.tunables.scrub) / 1000;
    const totalProgress = this.idleProgress + scrollScrub;

    this.globalSpin += (delta * THREE.MathUtils.degToRad(this.tunables.spinDeg)) / 60;
    this.galaxyGroup.rotation.z = this.globalSpin;

    const cosSpin = Math.cos(this.globalSpin);
    const sinSpin = Math.sin(this.globalSpin);

    // 2. Spiral Path Geometry
    const halfDiag = Math.hypot(this.width, this.height) / 2;
    const rMax = this.tunables.rMaxFrac * halfDiag;
    const thetaMax = this.tunables.turns * Math.PI * 2;
    const b = rMax / thetaMax;
    const thetaBirth = this.tunables.birthFrac * thetaMax;
    const baseLogoSize = Math.min(140, Math.max(70, this.height * this.tunables.cardHFrac));
    const thetaExit = (rMax + baseLogoSize * 0.8) / b;

    const slotsPerArm = Math.max(1, Math.ceil(this.cards.length / this.tunables.arms));

    // 3. Compute Positions for all floating logos
    this.cards.forEach((card, idx) => {
      const progressT = (card.slot + 0.5 + card.arm * this.tunables.armJitter) / slotsPerArm + totalProgress;
      const progress = progressT % 1.0;
      card.progress = progress;

      const theta = thetaBirth + progress * (thetaExit - thetaBirth);
      const radius = b * theta;
      const armAngle = theta + (card.arm * Math.PI * 2) / this.tunables.arms;

      // Zero-gravity organic floating drift
      const wobbleTime = elapsedTime * this.tunables.wobbleFreq * Math.PI * 2;
      const wobbleX = this.tunables.wobbleAmp * Math.sin(wobbleTime + idx * 2.399);
      const wobbleY = this.tunables.wobbleAmp * Math.cos(wobbleTime * 0.7 + idx * 1.713);

      let cardX = radius * Math.cos(armAngle) + wobbleX;
      let cardY = radius * Math.sin(armAngle) + wobbleY;

      // Pointer magnetic field tug in world space
      if (this.pointer.active) {
        const screenX = cosSpin * cardX - sinSpin * cardY;
        const screenY = sinSpin * cardX + cosSpin * cardY;

        const dx = this.pointer.x - screenX;
        const dy = this.pointer.y - screenY;
        const distSq = dx * dx + dy * dy;
        const fieldSq = this.tunables.fieldPx * this.tunables.fieldPx;

        if (distSq < fieldSq) {
          const dist = Math.sqrt(distSq);
          const pull = Math.exp(-distSq / fieldSq) * this.tunables.tugPx;
          const pullX = (dx / dist) * pull;
          const pullY = (dy / dist) * pull;

          cardX += cosSpin * pullX + sinSpin * pullY;
          cardY += -sinSpin * pullX + cosSpin * pullY;
        }
      }

      card.x = cardX;
      card.y = cardY;
    });

    // 4. Target Logo Lock Detection (Hover detection)
    let targetIdx = -1;
    let minPointerDist = Infinity;
    if (this.pointer.active) {
      this.cards.forEach((card, idx) => {
        const screenX = cosSpin * card.x - sinSpin * card.y;
        const screenY = sinSpin * card.x + cosSpin * card.y;
        const dx = this.pointer.x - screenX;
        const dy = this.pointer.y - screenY;
        const dist = Math.hypot(dx, dy);

        // Circular hover radius
        const hitRadius = card.currentSize / 2 + 10;
        if (dist <= hitRadius) {
          if (dist < minPointerDist) {
            minPointerDist = dist;
            targetIdx = idx;
          }
        }
      });
    }
    this.targetCardIndex = targetIdx;
    if (this.canvas) {
      this.canvas.style.cursor = targetIdx >= 0 ? 'pointer' : 'default';
    }

    // 5. Dynamic Collision-Free Nearest-Neighbor Sizing (cached every 3 frames)
    this._nnFrame = (this._nnFrame + 1) % 3;
    const shouldRecalcNN = this._nnFrame === 0;

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      let nearestDist = (this._nnCache && !shouldRecalcNN) ? (this._nnCache[i] ?? Infinity) : Infinity;

      if (shouldRecalcNN) {
        for (let j = 0; j < this.cards.length; j++) {
          if (i === j) continue;
          const other = this.cards[j];
          const dist = Math.hypot(other.x - card.x, other.y - card.y);
          if (dist < nearestDist) nearestDist = dist;
        }
        if (!this._nnCache) this._nnCache = new Float32Array(this.cards.length);
        this._nnCache[i] = nearestDist;
      }

      // Smooth size ramp from birth to outer edge
      const sizeRamp = this.tunables.innerCap + (1.0 - this.tunables.innerCap) * card.progress;
      const targetSize = Math.min(baseLogoSize * sizeRamp, this.tunables.density * (nearestDist * 0.68));

      card.currentSize += (targetSize - card.currentSize) * 0.15;

      const isTarget = i === this.targetCardIndex;
      const boost = isTarget ? this.tunables.boostScale : 1.0;
      const finalSize = Math.max(56, Math.min(130, card.currentSize * boost));

      card.mesh.scale.set(finalSize, finalSize, 1);
      card.mesh.position.set(card.x, card.y, isTarget ? 30 : 0);

      // 3D tilt lean toward cursor
      if (this.pointer.active && !isTarget) {
        const screenX = cosSpin * card.x - sinSpin * card.y;
        const screenY = sinSpin * card.x + cosSpin * card.y;
        const dx = this.pointer.x - screenX;
        const dy = this.pointer.y - screenY;
        const dist = Math.hypot(dx, dy);
        if (dist < this.tunables.fieldPx) {
          const factor = Math.exp(-(dist * dist) / (this.tunables.fieldPx * this.tunables.fieldPx));
          const maxTiltRad = THREE.MathUtils.degToRad(this.tunables.tiltDeg);
          card.tiltX += (-((dy / dist) * maxTiltRad * factor) - card.tiltX) * 0.12;
          card.tiltY += (((dx / dist) * maxTiltRad * factor) - card.tiltY) * 0.12;
        } else {
          card.tiltX += -card.tiltX * 0.1;
          card.tiltY += -card.tiltY * 0.1;
        }
      } else {
        card.tiltX += -card.tiltX * 0.1;
        card.tiltY += -card.tiltY * 0.1;
      }

      // Keep logo upright relative to spin
      card.mesh.rotation.set(card.tiltX, card.tiltY, -this.globalSpin);

      // Shader Uniforms Update
      const u = card.material.uniforms;
      u.uSize.value.set(finalSize, finalSize);

      // Dual fade: birth fade from center, exit fade at outer orbit (Zero corner cropping!)
      const birthFade = THREE.MathUtils.clamp(card.progress / 0.14, 0, 1);
      const exitFade = THREE.MathUtils.clamp((1.0 - card.progress) / 0.16, 0, 1);
      u.uAlpha.value = birthFade * exitFade;

      // Pointer magnetic bulge
      if (this.pointer.active) {
        const screenX = cosSpin * card.x - sinSpin * card.y;
        const screenY = sinSpin * card.x + cosSpin * card.y;
        const dx = this.pointer.x - screenX;
        const dy = this.pointer.y - screenY;
        const distSq = dx * dx + dy * dy;
        const fieldSq = this.tunables.fieldPx * this.tunables.fieldPx;

        if (distSq < fieldSq) {
          const factor = Math.exp(-distSq / fieldSq);
          u.uMouse.value.set(dx / finalSize, dy / finalSize);
          u.uWarp.value = this.tunables.mouseWarp * factor;
        } else {
          u.uWarp.value = 0;
        }
      } else {
        u.uWarp.value = 0;
      }
    }

    // 6. Render Scene (only when visible in viewport)
    if (!this.isVisible) {
      this.rafId = 0;
      return;
    }
    this.renderer.render(this.scene, this.camera);
    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    this.stop();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.updateContainerRect) {
      window.removeEventListener('scroll', this.updateContainerRect);
    }
    window.removeEventListener('resize', this.onResize);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('mouseleave', this.onPointerLeave);
    if (this.canvas) {
      this.canvas.removeEventListener('click', this.onClick);
    }

    this.cards.forEach(c => {
      this.galaxyGroup.remove(c.mesh);
      if (c.material) c.material.dispose();
    });

    if (this.underlayGroup) {
      this.galaxyGroup.remove(this.underlayGroup);
      this.underlayGroup.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }

    this.textureCache.forEach(t => t.dispose());
    this.textureCache.clear();

    if (this.cardGeometry) this.cardGeometry.dispose();
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}
