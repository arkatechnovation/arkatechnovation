import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { SplitText } from 'gsap/SplitText';
import { renderLogosTicker } from './LogosTicker.js';
import { renderFooter } from './Footer.js';
import { ArtcraftGalaxyCanvas } from './ArtcraftGalaxyCanvas.js';
import { renderCloudTopologyMap, initCloudTopologyMap } from './pillar-modules/CloudTopologyMap.js';
import { renderGeoCitationSimulator, initGeoCitationSimulator } from './pillar-modules/GeoCitationSimulator.js';
import { renderRoasPipelineCalculator, initRoasPipelineCalculator } from './pillar-modules/RoasPipelineCalculator.js';
import { renderColorGradeSlider, initColorGradeSlider } from './pillar-modules/ColorGradeSlider.js';
import { renderSoftwareEditorial } from './pillar-modules/SoftwareEditorial.js';
import { renderSeoEditorial } from './pillar-modules/SeoEditorial.js';
import { renderMarketingEditorial } from './pillar-modules/MarketingEditorial.js';
import { renderVideoEditorial } from './pillar-modules/VideoEditorial.js';

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

function renderVerticalEditorial(slug) {
  switch (slug) {
    case 'software-design':
      return renderSoftwareEditorial();
    case 'seo':
      return renderSeoEditorial();
    case 'digital-marketing':
      return renderMarketingEditorial();
    case 'corporate-video':
      return renderVideoEditorial();
    default:
      return renderSoftwareEditorial();
  }
}

function renderBespokeSection(slug) {
  switch (slug) {
    case 'software-design':
      return renderCloudTopologyMap();
    case 'seo':
      return renderGeoCitationSimulator();
    case 'digital-marketing':
      return renderRoasPipelineCalculator();
    case 'corporate-video':
      return renderColorGradeSlider();
    default:
      return renderCloudTopologyMap();
  }
}

function initBespokeSection(slug) {
  switch (slug) {
    case 'software-design':
      initCloudTopologyMap();
      break;
    case 'seo':
      initGeoCitationSimulator();
      break;
    case 'digital-marketing':
      initRoasPipelineCalculator();
      break;
    case 'corporate-video':
      initColorGradeSlider();
      break;
    default:
      initCloudTopologyMap();
      break;
  }
}

export const ALL_PILLARS = [
  {
    slug: 'software-design',
    name: 'software-design',
    navLabel: 'Software.',
    subtitle: 'Architecting digital ecosystems that endure.',
    description: 'Bespoke enterprise cloud platforms, 120fps fluid UI/UX ecosystems, and resilient native mobile applications engineered for global scale from our Noida innovation campus.',
    presetIndex: 1, // Solar Obsidian Amber / Hyper Cobalt
    consultingLabel: 'ENTERPRISE SOFTWARE & PRODUCT CRAFT',
    consultingDescription: 'Partner with Arka Technovation to engineer mission-critical cloud architectures, high-performance web applications, and intuitive design systems that turn complex enterprise workflows into competitive advantage.',
    heroImage: '/assets/software-design-collage.jpg',
    unleashTitle: 'Unleash Scalable Engineering Potential',
    unleashDescription: 'From microservices to native mobile and distributed systems, we build software with uncompromising architectural precision, strict type safety, and zero bloat.',
    columns: [
      {
        title: 'Architecture & Cloud',
        values: ['Cloud-Native Microservices', 'High-Throughput APIs', 'AWS & GCP Infrastructure', 'Zero-Downtime CI/CD']
      },
      {
        title: 'UI/UX & Design Systems',
        values: ['Figma Token Architecture', 'Design Ops & Governance', '120fps Fluid Interaction', 'Ergonomic User Journeys']
      },
      {
        title: 'Full-Stack Web',
        values: ['Next.js & React Ecosystem', 'TypeScript Type Safety', 'Sub-50ms Latency', 'Edge Compute & SSR']
      },
      {
        title: 'Native Mobile Apps',
        values: ['Swift & SwiftUI (iOS)', 'Kotlin & Jetpack Compose', 'Offline-First Synchronization', 'App Store Deployment']
      }
    ],
    detailedCards: [
      {
        title: 'CLOUD ARCHITECTURE',
        description: 'Enterprise-grade cloud topologies built for horizontal elasticity, fault tolerance, and sub-100ms global response times.',
        items: [
          { title: 'Microservices & Edge APIs', description: 'Decoupled, containerized services with gRPC and RESTful endpoints engineered for high concurrency.' },
          { title: 'Infrastructure as Code', description: 'Terraform and Kubernetes orchestration ensuring automated, reproducible, and compliant multi-region deployments.' },
          { title: 'High Availability & Failover', description: 'Multi-zone redundancy, automated health checks, and zero-downtime blue/green deployment pipelines.' },
          { title: 'Security & Enterprise Compliance', description: 'SOC2-ready topologies, encrypted at rest and in transit, with role-based access control (RBAC).' },
        ]
      },
      {
        title: 'PRODUCT DESIGN SYSTEMS',
        description: 'Cohesive design tokens and production-ready component libraries that streamline engineering handoffs and brand fidelity.',
        items: [
          { title: 'Design Tokens & Atomic UI', description: 'Standardized colors, typography scales, spacing metrics, and motion curves synchronized between Figma and code.' },
          { title: '120fps Interaction Choreography', description: 'Silky smooth micro-interactions, gesture mechanics, and layout transitions that make software feel alive.' },
          { title: 'Accessibility (WCAG 2.1 AA)', description: 'Universal usability with high-contrast ratios, semantic screen reader tree structures, and keyboard navigation.' },
          { title: 'Design Ops & Versioning', description: 'Automated Figma-to-code pipelines reducing frontend implementation cycles by over 40%.' },
        ]
      },
      {
        title: 'FULL-STACK SCALE',
        description: 'Resilient web applications delivering sub-50ms TTFB, uncompromising security, and rock-solid reliability under peak load.',
        items: [
          { title: 'Modern React & Next.js Stack', description: 'Server Components, streaming SSR, and edge middleware optimizing both user experience and search indexability.' },
          { title: 'Strict Type Safety', description: 'End-to-end TypeScript interfaces spanning database schemas, API contracts, and UI components.' },
          { title: 'High-Throughput Database Design', description: 'PostgreSQL, Redis caching layers, and vector databases optimized for complex relational queries and rapid search.' },
          { title: 'Rigorous Automated QA', description: 'Comprehensive unit, integration, and Playwright end-to-end testing preventing regressions from ever hitting production.' },
        ]
      },
      {
        title: 'NATIVE MOBILE',
        description: 'Platform-perfect iOS and Android applications utilizing hardware acceleration, offline caching, and intuitive mobile ergonomics.',
        items: [
          { title: 'Swift & SwiftUI Excellence', description: 'Native Apple platform fidelity, CoreAnimation fluid transitions, and deep integration with iOS system capabilities.' },
          { title: 'Modern Android with Kotlin', description: 'Jetpack Compose reactive UI, background workers, and responsive layouts across diverse screen sizes.' },
          { title: 'Offline-First Data Sync', description: 'Local SQLite/Room storage with intelligent conflict resolution keeping apps functional without connectivity.' },
          { title: 'Store Release Management', description: 'End-to-end management of App Store and Google Play review guidelines, metadata, and staged rollouts.' },
        ]
      }
    ],
    testimonial: {
      quote: 'Arka Technovation engineered our core SaaS operating system from the ground up in Noida. Their architectural discipline and UI precision delivered a 4x throughput improvement with zero downtime.',
      author: 'VIKRAM MALHOTRA',
      role: 'Chief Technology Officer — AuraCloud Global'
    },
    projects: [
      {
        name: 'AuraCloud OS',
        tagline: 'High-Concurrency Enterprise Workflow Engine',
        image: '/assets/software-design-collage.jpg',
        link: '/contact-us'
      },
      {
        name: 'Shift2Cal Native',
        tagline: 'Enterprise Roster & Shift Mobile Engine',
        image: '/assets/last-shot-shift2cal.png',
        link: '/contact-us'
      }
    ],
    nextSlug: 'seo',
    nextName: 'SEO Intelligence'
  },
  {
    slug: 'seo',
    name: 'seo',
    navLabel: 'SEO.',
    subtitle: 'Commanding search algorithms & AI citations.',
    description: 'Mathematical search engine authority, programmatic SEO architectures, and Generative Engine Optimization (GEO) commanding Page 1 and AI model citations.',
    presetIndex: 2, // Emerald Matrix
    consultingLabel: 'SEARCH INTELLIGENCE & GENERATIVE ENGINE OPTIMIZATION',
    consultingDescription: 'Secure dominant search engine market share. Arka Technovation combines technical SEO audits, semantic knowledge graphs, and programmatic page architectures to make your brand the authoritative source across Google, ChatGPT, and Perplexity.',
    heroImage: '/assets/seo-intelligence-collage.jpg',
    unleashTitle: 'Unleash Organic Search Supremacy',
    unleashDescription: 'Traditional keyword stuffing is obsolete. We engineer semantic entity graphs and programmatic content engines that capture high-intent buyers at the precise moment of intent.',
    columns: [
      {
        title: 'Technical Architecture',
        values: ['Core Web Vitals Perfection', 'Log File & Crawl Budget Analysis', 'Dynamic XML & Schema Markup', 'SSR & Edge Rendering']
      },
      {
        title: 'Programmatic SEO',
        values: ['Database-Driven Landing Pages', 'Dynamic Entity Generation', 'Automated Indexation Pipelines', 'Long-Tail Keyword Capture']
      },
      {
        title: 'Generative Engine Opt (GEO)',
        values: ['ChatGPT & Perplexity Citations', 'Knowledge Graph Integration', 'Authoritative Source Seeding', 'Vector Semantic Alignment']
      },
      {
        title: 'Authority & PR Signals',
        values: ['High-DR Editorial Placements', 'Digital PR Campaigns', 'Unlinked Brand Mentions', 'Contextual Topical Backlinks']
      }
    ],
    detailedCards: [
      {
        title: 'TECHNICAL FOUNDATION',
        description: 'Zero render-blocking scripts, sub-second LCP, and flawless semantic HTML that search bots index effortlessly.',
        items: [
          { title: 'Core Web Vitals Sub-Second LCP', description: 'Speed index optimization, image decoding pipelines, and script deferral guaranteeing straight-A performance scores.' },
          { title: 'JSON-LD Knowledge Graph', description: 'Comprehensive nested schema markups linking company entities, founders, products, and reviews into Google’s Graph.' },
          { title: 'Crawl Budget Efficiency', description: 'Log file analysis and intelligent robots/canonical directives ensuring search spiders prioritize high-value revenue pages.' },
          { title: 'International & Hreflang Routing', description: 'Multi-lingual and multi-regional routing ensuring localized search dominance across global geographies.' },
        ]
      },
      {
        title: 'PROGRAMMATIC EXPANSION',
        description: 'Scale from 50 pages to 50,000 structured, high-value landing pages without sacrificing editorial quality or uniqueness.',
        items: [
          { title: 'Data-Backed Template Architecture', description: 'Algorithmic templates populated with proprietary data points, comparison tables, and localized metrics.' },
          { title: 'Automated Indexation Pipelines', description: 'Direct Google Indexing API submission and sitemap syndication for near-instant search discovery.' },
          { title: 'Canonical De-duplication', description: 'Mathematical clustering algorithms ensuring programmatic variants never trigger duplicate content penalties.' },
          { title: 'Dynamic Search Intent Matching', description: 'Targeting hyper-specific long-tail queries where commercial buyer conversion rates are 3x higher.' },
        ]
      },
      {
        title: 'GEO & AI SEARCH',
        description: 'Position your brand entities to be cited as the definitive answer by Gemini, ChatGPT, Claude, and Perplexity AI models.',
        items: [
          { title: 'Vector Semantic Structuring', description: 'Formatting technical documentation and thought leadership into citation-friendly chunks that LLM crawlers ingest.' },
          { title: 'Authority Entity Mapping', description: 'Seeding high-trust reference sources (Wikidata, industry publications, patent databases) to anchor corporate credibility.' },
          { title: 'AI Citation Monitoring', description: 'Weekly tracking of corporate brand sentiment, hallucination checks, and recommendation frequency inside AI search models.' },
          { title: 'Zero-Click Answer Optimization', description: 'Engineering content for Google AI Overviews and featured snippets to claim the apex visual search real estate.' },
        ]
      },
      {
        title: 'DOMAIN AUTHORITY',
        description: 'Strategic digital PR and tier-one authoritative backlink acquisition that cements top ranking positions permanently.',
        items: [
          { title: 'Data-Driven Digital PR', description: 'Publishing proprietary industry research reports that naturally attract citations from Forbes, TechCrunch, and Bloomberg.' },
          { title: 'High-DR Editorial Placements', description: 'Targeted placements on niche-authoritative publications that pass uncompromised link equity and trust.' },
          { title: 'Reclaiming Brand Citations', description: 'Automated monitoring and conversion of unlinked corporate brand mentions into powerful contextual dofollow backlinks.' },
          { title: 'Competitor Gap Interception', description: 'Reverse-engineering competitor link profiles to systematically outrank them for their most profitable search terms.' },
        ]
      }
    ],
    testimonial: {
      quote: 'Within 5 months of partnering with Arka Technovation, our enterprise organic traffic surged by 340%, and we now own #1 positions across 85 key commercial search queries.',
      author: 'ANANYA SEN',
      role: 'VP of Organic Growth — FinTech Scaleup'
    },
    projects: [
      {
        name: 'SearchGraph AI',
        tagline: 'Semantic Knowledge Graph & Search Engine Authority',
        image: '/assets/seo-intelligence-collage.jpg',
        link: '/contact-us'
      },
      {
        name: 'Cercacasa AI',
        tagline: 'Programmatic Real Estate Search Engine',
        image: '/assets/ai-cercacasa-home-1.jpg',
        link: '/contact-us'
      }
    ],
    nextSlug: 'digital-marketing',
    nextName: 'Digital Marketing'
  },
  {
    slug: 'digital-marketing',
    name: 'digital-marketing',
    navLabel: 'Marketing.',
    subtitle: 'Transforming attention into predictable revenue.',
    description: 'Data-driven omnichannel acquisition, multi-touch attribution, and conversion funnels that transform attention into predictable enterprise revenue.',
    presetIndex: 3, // Electric Violet
    consultingLabel: 'PERFORMANCE MARKETING & REVENUE ENGINES',
    consultingDescription: 'Accelerate pipeline velocity with full-funnel acquisition. Arka Technovation architects high-converting paid media campaigns, behavioral retargeting sequences, and automated lead nurturing systems.',
    heroImage: '/assets/marketing-growth-collage.jpg',
    unleashTitle: 'Unleash Enterprise Growth Velocity',
    unleashDescription: 'We eliminate wasted ad spend through rigorous multi-touch attribution, relentless creative testing, and CRO landing pages optimized for maximum customer acquisition.',
    columns: [
      {
        title: 'Paid Media Acquisition',
        values: ['Google Performance Max & Search', 'Meta High-ROAS Scaling', 'LinkedIn B2B Account Targeting', 'YouTube Video Funnels']
      },
      {
        title: 'CRO & Funnel Design',
        values: ['Scientific A/B Experimentation', 'Frictionless Checkout Flows', 'Interactive Micro-Experiences', 'Personalized Landing Pages']
      },
      {
        title: 'Attribution & Analytics',
        values: ['Server-Side Conversions (CAPI)', 'Multi-Touch Attribution Modeling', 'Customer LTV & Cohort Analytics', 'Real-Time Executive Dashboards']
      },
      {
        title: 'Retention & Lifecycle',
        values: ['Klaviyo & HubSpot Workflows', 'Dynamic Behavioral Retargeting', 'Cart & Demo Abandonment Loops', 'Enterprise Account Nurturing']
      }
    ],
    detailedCards: [
      {
        title: 'OMNICHANNEL ACQUISITION',
        description: 'Deploy capital into the highest-yielding channels with algorithmic bid management and creative refresh cycles.',
        items: [
          { title: 'Google Ads & Performance Max', description: 'Precision search query intent targeting, dynamic retargeting feeds, and smart bidding calibrated for maximum ROAS.' },
          { title: 'Meta Scale & Creative Velocity', description: 'Testing 30+ creative variations weekly with dynamic creative optimization (DCO) to avoid ad fatigue and scale spend.' },
          { title: 'LinkedIn B2B Account Targeting', description: 'Laser-targeting C-suite decision-makers by company revenue, job title, and intent signals to drive enterprise pipeline.' },
          { title: 'YouTube Direct Response', description: 'Engaging video hooks and cinematic narrative structures that drive high-intent viewers directly into conversion funnels.' },
        ]
      },
      {
        title: 'CONVERSION RATE OPTIMIZATION',
        description: 'Transform visitor interest into signed deals with evidence-backed UX experiments and rapid hypothesis testing.',
        items: [
          { title: 'Hypothesis-Driven A/B Testing', description: 'Testing value propositions, CTA positioning, form fields, and pricing matrices with statistical significance.' },
          { title: 'Friction Elimination', description: 'Sub-second form autofills, one-click demo bookings, and transparent social proof that remove buyer hesitation.' },
          { title: 'Personalized Dynamic Landing Pages', description: 'Dynamically altering headlines and proof points based on referring ad keywords, industry, or geography.' },
          { title: 'Heatmap & Session Analysis', description: 'Granular tracking of user attention, rage clicks, and drop-off points to optimize conversion paths.' },
        ]
      },
      {
        title: 'DATA ATTRIBUTION',
        description: 'First-party tracking architectures that overcome privacy headwinds and reveal true channel profitability.',
        items: [
          { title: 'Server-Side Conversions API (CAPI)', description: 'Direct server-to-server event dispatching bypassing client-side ad blockers and iOS privacy restrictions.' },
          { title: 'Multi-Touch Attribution (MTA)', description: 'Shapley value and Markov chain attribution models crediting top-of-funnel awareness as accurately as last-click conversions.' },
          { title: 'Cohort Lifetime Value (LTV)', description: 'Tracking revenue retention and payback windows across customer cohorts to scale ad spend with total confidence.' },
          { title: 'Real-Time Executive BI Dashboards', description: 'Clean Looker Studio and PowerBI dashboards consolidating blended CAC, MER, and revenue metrics in real time.' },
        ]
      },
      {
        title: 'LIFECYCLE NURTURING',
        description: 'Automated multi-channel touchpoints that shorten sales cycles and maximize customer lifetime value.',
        items: [
          { title: 'Automated Email & SMS Sequences', description: 'Behavior-triggered nurturing drips in HubSpot and Klaviyo that re-engage prospects at pivotal decision moments.' },
          { title: 'Account-Based Retargeting', description: 'Surrounding high-value enterprise accounts with tailored case studies and founder interviews across their daily browsing.' },
          { title: 'Churn Prevention & Expansion', description: 'Early-warning telemetry alerting customer success teams to usage drops, coupled with upsell prompt automation.' },
          { title: 'VIP Advocacy & Referral Engines', description: 'Incentivized referral loops turning delighted power users into an organic acquisition channel.' },
        ]
      }
    ],
    testimonial: {
      quote: 'Arka Technovation managed our ₹12 Crore annual marketing budget with surgical efficiency. They delivered a 5.8x blended ROAS and scaled our customer pipeline across North America and India.',
      author: 'RAJESH VERMA',
      role: 'Chief Marketing Officer — Omnichannel Retail Group'
    },
    projects: [
      {
        name: 'Velocity Growth Funnel',
        tagline: 'Full-Funnel Omnichannel Customer Acquisition',
        image: '/assets/marketing-growth-collage.jpg',
        link: '/contact-us'
      },
      {
        name: 'WITZ Viral Engine',
        tagline: 'Gamified Organic Acquisition Funnel',
        image: '/assets/cover-witz.jpg',
        link: '/contact-us'
      }
    ],
    nextSlug: 'corporate-video',
    nextName: 'Corporate Video'
  },
  {
    slug: 'corporate-video',
    name: 'corporate-video',
    navLabel: 'Video.',
    subtitle: 'Cinematic storytelling that commands belief.',
    description: 'Hollywood-grade 8K corporate documentaries, AI synthetic video pipelines, and photorealistic 3D motion graphics that inspire deep belief and investor confidence.',
    presetIndex: 4, // Cinematic Tungsten
    consultingLabel: 'CORPORATE CINEMA & AI MOTION PRODUCTION',
    consultingDescription: 'Elevate your brand beyond commoditization. Arka Technovation produces cinematic brand documentaries, executive thought leadership series, and AI-accelerated product teasers that mesmerize audiences worldwide.',
    heroImage: '/assets/corporate-video-collage.jpg',
    unleashTitle: 'Unleash Cinematic Brand Narrative',
    unleashDescription: 'In a world saturated with generic content, high-craft cinema creates an unfair brand advantage. We merge master visual cinematography with AI neural video generation.',
    columns: [
      {
        title: 'Cinematic Production',
        values: ['8K RED / ARRI Cinema Shoots', 'Anamorphic Optical Framing', 'Executive Documentaries', 'Drone Aerial Cinematography']
      },
      {
        title: 'AI Synthetic Video',
        values: ['Generative Neural Video Pipelines', 'Photorealistic Synthetic Actors', 'Automated Multilingual Dubbing', 'Dynamic Personalized Video']
      },
      {
        title: '3D Motion & CGI',
        values: ['Unreal Engine 5 Virtual Sets', 'Octane & Cinema 4D Product Visuals', 'Microscopic Tech Visualization', 'Dynamic Holographic UI']
      },
      {
        title: 'Post-Production & Audio',
        values: ['DaVinci Resolve HDR Color Grading', 'Spatial Dolby Atmos Audio Design', 'Custom Orchestral Scores', 'Multi-Format Social Delivery']
      }
    ],
    detailedCards: [
      {
        title: 'EXECUTIVE BRAND FILMS',
        description: 'Craft emotional, cinematic corporate stories that articulate visionary market leadership to investors and global clients.',
        items: [
          { title: '8K RED Anamorphic Optics', description: 'Cinematic sensor depth, organic flares, and master lighting setups creating arresting visual grandeur.' },
          { title: 'Founder & Visionary Storytelling', description: 'Probing documentary-style interviews that unearth authentic founder conviction and technical breakthrough narratives.' },
          { title: 'Global Location & Aerial Cinematography', description: 'High-altitude drone cinematography and multi-location field shoots capturing scale and engineering footprint.' },
          { title: 'Investor Pitch Cinema', description: 'High-stakes film packages designed specifically to mesmerize venture capital partners and institutional boards.' },
        ]
      },
      {
        title: 'AI SYNTHETIC WORKFLOWS',
        description: 'Rapidly scale video production using state-of-the-art diffusion models, synthetic avatars, and automated neural voice pipelines.',
        items: [
          { title: 'Generative Video Diffusion Pipelines', description: 'Leveraging Sora, Runway Gen-3, and proprietary ComfyUI workflows for impossible camera moves and speculative futures.' },
          { title: 'Neural Voice & Multilingual Dubbing', description: 'Cloning executive voices with zero latency across 24 languages with synchronized realistic lip movements.' },
          { title: 'Personalized Video Generation', description: 'Rendering customized sales outreach videos programmatically for thousands of enterprise target prospects.' },
          { title: 'Synthetic B-Roll Generation', description: 'Rapidly creating contextual cinematic background footage without costly physical location permits.' },
        ]
      },
      {
        title: '3D PRODUCT ANIMATION',
        description: 'Showcase complex software algorithms and hardware engineering through photorealistic CGI and 120fps motion design.',
        items: [
          { title: 'Unreal Engine 5 Real-Time Rendering', description: 'Lumen dynamic global illumination and Nanite geometry for interactive virtual production stages.' },
          { title: 'Cinema 4D & Octane Photorealism', description: 'Subsurface glass materials, metallic reflections, and microscopic close-ups of microchips and server racks.' },
          { title: 'Abstract Data Flow & Network CGI', description: 'Translating complex cryptography and distributed ledger concepts into intuitive, hypnotic 3D particle visualizations.' },
          { title: 'Holographic User Interface (FUI)', description: 'Futuristic screen graphics and head-up display elements demonstrating revolutionary software capabilities.' },
        ]
      },
      {
        title: 'PRECISION COLOR & SOUND',
        description: 'Hollywood finishing: deep theatrical grade, custom foley audio design, and impactful orchestral scores.',
        items: [
          { title: 'DaVinci Resolve HDR Theatrical Grade', description: 'Custom LUT calibration for ACES color spaces, deep blacks, and luminous highlights tuned for OLED displays.' },
          { title: 'Dolby Atmos Spatial Sound Design', description: 'Immersive multi-channel soundscapes with tactile sub-bass impacts that command undivided acoustic focus.' },
          { title: 'Custom Original Score Composition', description: 'Synthesizing electronic pulses and live acoustic strings composed to mirror the narrative tension of the film.' },
          { title: 'Social & Multi-Aspect Deliverables', description: 'Repurposing master 16:9 cinematic edits into 9:16 vertical and 1:1 square performance cutdowns for LinkedIn and Meta.' },
        ]
      }
    ],
    testimonial: {
      quote: 'The corporate documentary Arka Technovation produced for our Series B launch generated over 15 million organic impressions and drew personal praise from our institutional investors.',
      author: 'DEVENDRA SHARMA',
      role: 'Founder & Executive Chairman — Arka Global Partners'
    },
    projects: [
      {
        name: 'The Arka Cinema Reel',
        tagline: 'Hollywood Visual Direction Meets Synthetic AI Media',
        image: '/assets/corporate-video-collage.jpg',
        link: '/contact-us'
      },
      {
        name: 'AuraCloud Product Launch',
        tagline: '3D CGI Microscopic Feature Showcase',
        image: '/assets/cover-ai.jpg',
        link: '/contact-us'
      }
    ],
    nextSlug: 'software-design',
    nextName: 'Software Design'
  }
];

let currentActiveIndex = 0;

export function renderPillarsStage(initialSlug = 'software-design') {
  const activeIndex = Math.max(0, ALL_PILLARS.findIndex(p => p.slug === initialSlug));
  currentActiveIndex = activeIndex;
  const pillar = ALL_PILLARS[activeIndex];

  // Top 4-slide carousel slides (for white editorial section)
  const slidesHtml = ALL_PILLARS.map((p, pIdx) => {
    const colsHtml = p.columns.map((col, cIdx) => {
      const itemsHtml = col.values.map(val => `
        <li class="mt-2.5 text-xs sm:text-sm text-black/85 flex items-center justify-between font-medium">
          <span>${val}</span>
        </li>
      `).join('');

      return `
        <div class="flex flex-col grow p-6 md:p-10 border border-black/10 bg-[#FAFAFA] ${cIdx % 2 === 0 ? 'border-r' : ''} ${cIdx >= 2 ? 'border-t' : ''} lg:border-t-0">
          <h2 class="text-[0.625rem] lg:text-xs !font-mono opacity-50 mb-3 uppercase tracking-wider text-black font-semibold">
            ${col.title}
          </h2>
          <ul class="flex flex-col list-none p-0 m-0">
            ${itemsHtml}
          </ul>
        </div>
      `;
    }).join('');

    return `
      <div class="w-full shrink-0 grow-0" data-pillar-slug="${p.slug}">
        <div class="grid grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-black/15 shadow-sm">
          ${colsHtml}
        </div>
      </div>
    `;
  }).join('');

  // 4 Horizontal Expanding Cards for the white section
  const detailedCardsHtml = pillar.detailedCards.map((card, cIdx) => {
    const itemsHtml = card.items.map(it => `
      <div class="border-t border-current/20 pt-4 pb-2">
        <p class="text-base font-semibold mb-1.5">${it.title}</p>
        <p class="text-xs opacity-80 leading-relaxed font-normal">${it.description}</p>
      </div>
    `).join('');

    return `
      <div class="horizontal-card relative cursor-pointer overflow-hidden rounded-2xl bg-[#F2F2F2] p-8 lg:p-10 text-black flex-1 min-w-[260px] flex flex-col justify-between select-none" data-card-idx="${cIdx}">
        <div class="flex justify-between items-start mb-6">
          <p class="font-medium text-xs !font-mono tracking-wider opacity-60 uppercase">${card.title}</p>
          <div class="card-icon-pill w-8 h-8 rounded-full border border-current/20 flex items-center justify-center shrink-0">
            <span class="icon-plus text-lg leading-none">+</span>
            <span class="icon-minus text-lg leading-none hidden">−</span>
          </div>
        </div>

        <div>
          <h3 class="text-xl lg:text-2xl font-light tracking-[0.02rem] leading-snug mb-4">
            ${card.description}
          </h3>

          <div class="card-sub-items-drawer max-h-0 opacity-0 overflow-hidden transition-all duration-500">
            <div class="flex flex-col gap-3 pt-4">
              ${itemsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Featured Projects Cards
  const projectsHtml = pillar.projects.map(proj => `
    <div class="w-full">
      <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="${proj.link}">
        <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
          <img alt="${proj.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${proj.image}" />
        </div>
        <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase tracking-wider">${proj.name}</p>
        <p class="text-base text-black font-normal">${proj.tagline}</p>
      </a>
    </div>
  `).join('');

  return `
    <div class="pillar-page-container min-h-screen">
      
      <!-- ========================================================
           1. TOP DARK HERO WITH 3D INTERACTIVE GALAXY CANVAS
           ======================================================== -->
      <!-- ========================================================
           1. TOP DARK HERO WITH 3D INTERACTIVE GALAXY CANVAS
           ======================================================== -->
      <section class="pillar-stage-view min-h-screen h-[100dvh] flex flex-col justify-center items-center text-center text-white relative z-10 w-full overflow-hidden px-4 lg:px-8" id="pillar-dark-stage">
        
        <!-- ARTCRAFT-GRADE FLOATING 3D GALAXY CANVAS (MOUNTED IN SUBPAGE HERO ONLY) -->
        <div id="pillar-galaxy-hero-container" class="absolute inset-0 z-0 pointer-events-auto overflow-hidden"></div>

        <!-- HERO CONTENT LAYER OVER GALAXY - CENTERED WITH SOFT AMBIENT SCRIM -->
        <div class="relative z-10 pointer-events-none w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto text-center px-4">
          <div class="relative pointer-events-auto flex flex-col items-center text-center">
            <div class="absolute -inset-x-16 -inset-y-12 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.85)_0%,_rgba(0,0,0,0.45)_55%,_transparent_100%)] blur-2xl -z-10 pointer-events-none"></div>

            <h1 id="pillar-stage-subtitle" class="!font-mono font-light text-4xl sm:text-5xl lg:text-6xl text-center text-balance mb-6 leading-[115%] sm:leading-[120%] text-white drop-shadow-xl tracking-tight max-w-3xl mx-auto">
              ${pillar.subtitle}
            </h1>
            <div id="pillar-stage-desc" class="text-base sm:text-lg lg:text-xl max-w-2xl text-center mx-auto text-white/85 leading-relaxed drop-shadow-md font-light">
              ${pillar.description}
            </div>
          </div>
        </div>

        <!-- BOTTOM EXPLORE SCROLL DOWN TRIGGER -->
        <div class="absolute bottom-8 left-0 right-0 flex justify-center items-center z-10 pointer-events-auto">
          <button id="pillar-scroll-down-btn" class="flex flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors group">
            <span class="!font-mono text-[10px] uppercase tracking-[0.25em]">Explore Capabilities</span>
            <div class="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors group-hover:translate-y-1 transform duration-300">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M 6 9 L 12 15 L 18 9" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>
        </div>

      </section>


      <!-- ========================================================
           2. AUTHENTIC EDITORIAL CONTENT SECTION (BELOW HERO)
           ======================================================== -->
      <section class="bg-white text-black min-h-screen pt-24 lg:pt-36 pb-32 relative z-20" id="pillar-white-content">
        
        <!-- CONSULTING INTRO -->
        <div class="max-w-4xl mx-auto px-4 mb-16 lg:mb-20">
          <p class="!font-mono text-xs opacity-50 mb-4 tracking-widest uppercase text-black" id="pillar-consulting-label">
            ${pillar.consultingLabel}
          </p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl tracking-[0.02rem] leading-[130%] font-light text-black" id="pillar-consulting-desc">
            ${pillar.consultingDescription}
        <!-- BESPOKE INTERACTIVE ANCHOR MODULE (REVERSE-ENGINEERED PER VERTICAL) -->
        <div id="pillar-bespoke-interactive-container" class="w-full">
          ${renderBespokeSection(pillar.slug)}
        </div>

        <!-- FULL-WIDTH HERO COLLAGE STAGE -->
        <div class="max-w-6xl mx-auto px-4 mb-20 lg:mb-28">
          <div class="w-full max-h-[75dvh] aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-neutral-100">
            <img id="pillar-hero-img" class="w-full h-full object-cover object-center" src="${pillar.heroImage}" alt="${pillar.name} Hero" />
          </div>
        </div>

        <!-- UNLEASH SECTION -->
        <div class="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4 pt-8 pb-16 gap-8 items-start">
          <h3 class="w-full md:w-1/2 !font-mono text-4xl lg:text-5xl font-light leading-[115%] max-w-xl text-black" id="pillar-unleash-title">
            ${pillar.unleashTitle}
          </h3>
          <div class="w-full md:w-1/2 text-lg lg:text-xl text-black/80 leading-[160%] max-w-md font-light" id="pillar-unleash-desc">
            <p>${pillar.unleashDescription}</p>
          </div>
        </div>

        <!-- BESPOKE VERTICAL EDITORIAL LAYOUT (RADICALLY DIFFERENT PER VERTICAL) -->
        <div id="pillar-vertical-editorial-container" class="w-full">
          ${renderVerticalEditorial(pillar.slug)}
        </div>

        <!-- CLIENT TESTIMONIAL CITATION -->
        <div class="py-24 lg:py-32 text-center max-w-4xl mx-auto px-4 border-t border-black/10 mt-20" id="pillar-testimonial-box">
          <div class="w-12 h-12 mx-auto rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-2xl font-serif text-black/40">
            “
          </div>
          <p class="text-2xl sm:text-3xl lg:text-4xl font-light !font-mono leading-[135%] text-balance mb-8 text-black" id="pillar-testimonial-quote">
            "${pillar.testimonial.quote}"
          </p>
          <p class="font-mono font-medium text-sm text-black uppercase tracking-wider" id="pillar-testimonial-author">
            ${pillar.testimonial.author}
          </p>
          <p class="text-xs text-black/50 mt-1" id="pillar-testimonial-role">
            ${pillar.testimonial.role}
          </p>
        </div>

        <!-- FEATURED CASE STUDIES -->
        <div class="max-w-6xl mx-auto px-4 py-16 border-t border-black/10">
          <p class="!font-mono text-xs opacity-50 uppercase tracking-widest mb-8">FEATURED WORK IN THIS VERTICAL</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12" id="pillar-projects-grid">
            ${projectsHtml}
          </div>
        </div>

        <!-- 21 CLIENT LOGOS TICKER -->
        ${renderLogosTicker('We engineer high-craft software, search algorithms, growth engines and corporate cinema for global leaders.')}

        <!-- NEXT WORKFLOW CALLOUT -->
        <div class="py-24 text-center border-t border-black/10 bg-neutral-50/50 mt-16" id="pillar-next-callout">
          <p class="!font-mono text-xs opacity-50 mb-4 tracking-widest uppercase">CONTINUE EXPLORING</p>
          <a href="/pillars/${pillar.nextSlug}" id="pillar-next-link" class="text-3xl lg:text-5xl font-light hover:opacity-70 transition-opacity !font-mono flex items-center justify-center gap-4 cursor-pointer text-black">
            <span id="pillar-next-name">${pillar.nextName}</span>
            <svg viewBox="0 0 50 50" width="36" height="36" class="fill-none stroke-current" aria-hidden="true">
              <circle cx="25" cy="25" r="24" stroke="currentColor" fill="none" stroke-width="1.2"></circle>
              <g transform="translate(7, 10) scale(1)">
                <path d="M 9 15 L 27.45 15" fill="none" stroke="currentColor" stroke-width="1.2"></path>
                <path d="M 27 15 L 21 9" fill="none" stroke="currentColor" stroke-width="1.2"></path>
                <path d="M 27 15 L 21 21" fill="none" stroke="currentColor" stroke-width="1.2"></path>
              </g>
            </svg>
          </a>
        </div>

        ${renderFooter()}
      </section>

    </div>
  `;
}

export function initPillarsStage(initialSlug = 'software-design', onPillarChange = () => {}) {
  const activeIndex = Math.max(0, ALL_PILLARS.findIndex(p => p.slug === initialSlug));
  currentActiveIndex = activeIndex;

  const track = document.getElementById('pillar-carousel-track');
  const prevBtn = document.getElementById('pillar-prev-btn');
  const nextBtn = document.getElementById('pillar-next-btn');
  const prevBtnMobile = document.getElementById('pillar-prev-btn-mobile');
  const nextBtnMobile = document.getElementById('pillar-next-btn-mobile');
  const scrollDownBtn = document.getElementById('pillar-scroll-down-btn');
  const whiteContent = document.getElementById('pillar-white-content');
  const subpageView = document.getElementById('subpage-view');
  const header = document.getElementById('site-global-header');

  // 1. Initialize ArtCraft-Grade 3D Galaxy Canvas in Subpage Hero
  const galaxyHeroContainer = document.getElementById('pillar-galaxy-hero-container');
  let galaxyInstance = null;
  if (galaxyHeroContainer) {
    try {
      galaxyInstance = new ArtcraftGalaxyCanvas(galaxyHeroContainer, {
        productLine: ALL_PILLARS[activeIndex].slug
      });
    } catch (e) {
      console.warn('Galaxy Canvas Init Warning:', e);
    }
  }

  // 2. Slide carousel track to initial position
  if (track) {
    const width = track.offsetWidth;
    gsap.set(track, { x: -activeIndex * width });
  }

  // 3. Animate initial hero texts
  animateTexts(ALL_PILLARS[activeIndex], true);

  // 4. Set initial shader preset
  if (window.loudApp && window.loudApp.liquid) {
    window.loudApp.liquid.setPillar(ALL_PILLARS[activeIndex].presetIndex);
  }

  // 5. Init Horizontal Expanding Accordion Cards
  initHorizontalCards();

  // 5b. Init Bespoke Interactive Module for active vertical
  initBespokeSection(ALL_PILLARS[activeIndex].slug);

  // 6. Scroll down button
  if (scrollDownBtn && whiteContent && subpageView) {
    scrollDownBtn.addEventListener('click', () => {
      subpageView.scrollTo({ top: whiteContent.offsetTop - 40, behavior: 'smooth' });
    });
  }

  // 7. Header dynamic theme toggle on scroll (dark hero -> white section)
  const handleScroll = () => {
    if (!whiteContent || !header || !subpageView) return;
    const isPastHero = subpageView.scrollTop >= (whiteContent.offsetTop - 70);
    header.classList.toggle('header-on-white', isPastHero);
    header.classList.toggle('text-black', isPastHero);
    header.classList.toggle('header-on-dark', !isPastHero);
    header.classList.toggle('text-white', !isPastHero);
  };

  if (subpageView) {
    subpageView.addEventListener('scroll', handleScroll);
  }

  function goToIndex(newIndex) {
    if (newIndex < 0 || newIndex >= ALL_PILLARS.length || newIndex === currentActiveIndex) return;
    currentActiveIndex = newIndex;
    const pillar = ALL_PILLARS[newIndex];

    // Slide track with authentic expo.out ease
    if (track) {
      const width = track.offsetWidth;
      gsap.to(track, {
        x: -newIndex * width,
        duration: 0.9,
        ease: 'expo.out'
      });
    }

    // Scramble hero title & word-stagger description
    animateTexts(pillar, false);

    // Update 3D Galaxy Canvas product line icons and colors
    if (galaxyInstance) {
      galaxyInstance.setProductLine(pillar.slug);
    }

    // Update the white section content smoothly
    updateWhiteSection(pillar);

    // Update buttons state
    updateButtonStates();

    // Set matching background shader preset
    if (window.loudApp && window.loudApp.liquid) {
      window.loudApp.liquid.setPillar(pillar.presetIndex);
    }

    // Trigger router callback
    onPillarChange(pillar.slug);
  }

  function updateButtonStates() {
    const isFirst = currentActiveIndex === 0;
    const isLast = currentActiveIndex === ALL_PILLARS.length - 1;

    [prevBtn, prevBtnMobile].forEach(btn => {
      if (!btn) return;
      btn.style.opacity = isFirst ? '0.3' : '1';
      btn.style.cursor = isFirst ? 'not-allowed' : 'pointer';
    });

    [nextBtn, nextBtnMobile].forEach(btn => {
      if (!btn) return;
      btn.style.opacity = isLast ? '0.3' : '1';
      btn.style.cursor = isLast ? 'not-allowed' : 'pointer';
    });
  }

  // Button Listeners
  const handlePrev = () => goToIndex(currentActiveIndex - 1);
  const handleNext = () => goToIndex(currentActiveIndex + 1);

  if (prevBtn) prevBtn.addEventListener('click', handlePrev);
  if (nextBtn) nextBtn.addEventListener('click', handleNext);
  if (prevBtnMobile) prevBtnMobile.addEventListener('click', handlePrev);
  if (nextBtnMobile) nextBtnMobile.addEventListener('click', handleNext);

  // Resize handler
  const handleResize = () => {
    if (!track) return;
    const width = track.offsetWidth;
    gsap.set(track, { x: -currentActiveIndex * width });
  };
  window.addEventListener('resize', handleResize);

  updateButtonStates();

  return {
    goToSlug(slug) {
      const idx = ALL_PILLARS.findIndex(p => p.slug === slug);
      if (idx !== -1) goToIndex(idx);
    },
    destroy() {
      if (galaxyInstance) {
        galaxyInstance.destroy();
        galaxyInstance = null;
      }
      window.removeEventListener('resize', handleResize);
      if (subpageView) subpageView.removeEventListener('scroll', handleScroll);
    }
  };
}

function animateTexts(pillar, isInitial = false) {
  const titleEl = document.getElementById('pillar-stage-subtitle');
  const descEl = document.getElementById('pillar-stage-desc');

  if (titleEl) {
    gsap.to(titleEl, {
      duration: isInitial ? 1.6 : 1.0,
      scrambleText: {
        text: pillar.subtitle,
        chars: 'abcdefghijklmnopqrstuvwxyz',
        revealDelay: 0.08
      },
      ease: 'none'
    });
  }

  if (descEl) {
    descEl.textContent = pillar.description;
    try {
      const split = new SplitText(descEl, { type: 'words', wordsClass: '', preserveWhitespace: true });
      gsap.fromTo(split.words,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.02,
          delay: isInitial ? 0.3 : 0.1
        }
      );
    } catch (e) {
      gsap.fromTo(descEl,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }
}

/**
 * Interactive Horizontal Expanding Accordion Cards
 * Production pattern from chunk 79f1a14a478c348f.js module 121288
 */
function initHorizontalCards() {
  const cards = document.querySelectorAll('.horizontal-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isAlreadyExpanded = card.classList.contains('is-expanded');

      // Collapse all cards
      cards.forEach(c => {
        c.classList.remove('is-expanded', 'bg-[#4E71FF]', 'text-white');
        c.classList.add('bg-[#F2F2F2]', 'text-black');
        c.querySelector('.icon-plus')?.classList.remove('hidden');
        c.querySelector('.icon-minus')?.classList.add('hidden');
        
        // Reset flex basis / width
        gsap.to(c, { flex: 1, duration: 0.5, ease: 'power4.inOut' });

        const drawer = c.querySelector('.card-sub-items-drawer');
        if (drawer) {
          gsap.to(drawer, { maxHeight: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut' });
        }
      });

      // If clicked card was not active, expand it to 1.9x
      if (!isAlreadyExpanded) {
        card.classList.add('is-expanded', 'bg-[#4E71FF]', 'text-white');
        card.classList.remove('bg-[#F2F2F2]', 'text-black');
        card.querySelector('.icon-plus')?.classList.add('hidden');
        card.querySelector('.icon-minus')?.classList.remove('hidden');

        // Expand flex basis / width
        gsap.to(card, { flex: 1.9, duration: 0.6, ease: 'power4.inOut' });

        const drawer = card.querySelector('.card-sub-items-drawer');
        if (drawer) {
          drawer.style.maxHeight = 'none';
          const height = drawer.scrollHeight;
          drawer.style.maxHeight = '0px';

          gsap.to(drawer, {
            maxHeight: height + 50,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: 0.1
          });
        }
      }
    });
  });
}

function updateWhiteSection(pillar) {
  // Update consulting headline
  const labelEl = document.getElementById('pillar-consulting-label');
  const descEl = document.getElementById('pillar-consulting-desc');
  const imgEl = document.getElementById('pillar-hero-img');
  const unleashTitleEl = document.getElementById('pillar-unleash-title');
  const unleashDescEl = document.getElementById('pillar-unleash-desc');
  const quoteEl = document.getElementById('pillar-testimonial-quote');
  const authorEl = document.getElementById('pillar-testimonial-author');
  const roleEl = document.getElementById('pillar-testimonial-role');
  const nextLinkEl = document.getElementById('pillar-next-link');
  const nextNameEl = document.getElementById('pillar-next-name');

  if (labelEl) labelEl.textContent = pillar.consultingLabel;
  if (descEl) descEl.textContent = pillar.consultingDescription;
  if (imgEl) imgEl.src = pillar.heroImage;
  if (unleashTitleEl) unleashTitleEl.textContent = pillar.unleashTitle;
  if (unleashDescEl) unleashDescEl.innerHTML = `<p>${pillar.unleashDescription}</p>`;
  if (quoteEl) quoteEl.textContent = `"${pillar.testimonial.quote}"`;
  if (authorEl) authorEl.textContent = pillar.testimonial.author;
  if (roleEl) roleEl.textContent = pillar.testimonial.role;
  if (nextLinkEl) nextLinkEl.href = `/pillars/${pillar.nextSlug}`;
  if (nextNameEl) nextNameEl.textContent = pillar.nextName;

  // Update accordion cards row
  const row = document.getElementById('horizontal-accordion-row');
  if (row) {
    row.innerHTML = pillar.detailedCards.map((card, cIdx) => {
      const itemsHtml = card.items.map(it => `
        <div class="border-t border-current/20 pt-4 pb-2">
          <p class="text-base font-semibold mb-1.5">${it.title}</p>
          <p class="text-xs opacity-80 leading-relaxed font-normal">${it.description}</p>
        </div>
      `).join('');

      return `
        <div class="horizontal-card relative cursor-pointer overflow-hidden rounded-2xl bg-[#F2F2F2] p-8 lg:p-10 text-black flex-1 min-w-[260px] flex flex-col justify-between select-none" data-card-idx="${cIdx}">
          <div class="flex justify-between items-start mb-6">
            <p class="font-medium text-xs !font-mono tracking-wider opacity-60 uppercase">${card.title}</p>
            <div class="card-icon-pill w-8 h-8 rounded-full border border-current/20 flex items-center justify-center shrink-0">
              <span class="icon-plus text-lg leading-none">+</span>
              <span class="icon-minus text-lg leading-none hidden">−</span>
            </div>
          </div>

          <div>
            <h3 class="text-xl lg:text-2xl font-light tracking-[0.02rem] leading-snug mb-4">
              ${card.description}
            </h3>

            <div class="card-sub-items-drawer max-h-0 opacity-0 overflow-hidden transition-all duration-500">
              <div class="flex flex-col gap-3 pt-4">
                ${itemsHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    initHorizontalCards();
  }

  // Update projects grid
  const projGrid = document.getElementById('pillar-projects-grid');
  if (projGrid) {
    projGrid.innerHTML = pillar.projects.map(proj => `
      <div class="w-full">
        <a class="relative cursor-pointer block h-full shrink-0 grow overflow-hidden group" href="${proj.link}">
          <div class="relative overflow-hidden rounded-xl border border-black/10 aspect-[4/3] bg-neutral-100">
            <img alt="${proj.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${proj.image}" />
          </div>
          <p class="!font-mono font-medium text-sm mt-5 mb-1 opacity-60 uppercase tracking-wider">${proj.name}</p>
          <p class="text-base text-black font-normal">${proj.tagline}</p>
        </a>
      </div>
    `).join('');
  }

  // Update Bespoke Interactive Module for active vertical
  const bespokeContainer = document.getElementById('pillar-bespoke-interactive-container');
  if (bespokeContainer) {
    bespokeContainer.innerHTML = renderBespokeSection(pillar.slug);
    initBespokeSection(pillar.slug);
  }

  // Update Bespoke Vertical Editorial Layout
  const verticalContainer = document.getElementById('pillar-vertical-editorial-container');
  if (verticalContainer) {
    verticalContainer.innerHTML = renderVerticalEditorial(pillar.slug);
  }
}
