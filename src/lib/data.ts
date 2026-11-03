/* ─────────────────────────────────────────────────────────────
   ARKA TECHNOVATION
   Enterprise Digital Products, Engineering & Growth
   Founded and led by Mr. Kranti Parashar
   ───────────────────────────────────────────────────────────── */

export const COMPANY = {
  name: 'ARKA Technovation Private Limited',
  legalName: 'ARKA Technovation Private Limited',
  formerlyKnownAs: 'Formerly known as Jaikvik Technology India Pvt. Ltd.',
  short: 'ARKA.',
  logo: '/images/logo/arka-logo-black.png',
  logoWebp: '/images/logo/arka-logo-black.webp',
  logoWhite: '/images/logo/arka-logo-white.png',
  logoWhiteWebp: '/images/logo/arka-logo-white.webp',
  tagline: 'Your Partner For Progress',
  legacy: 'Jaikvik Technology India Pvt. Ltd.',
  founded: 2016,
  years: 10,
  founderYears: '18+',
  email: 'info@arkatechnovation.com',
  careers: 'careers@arkatechnovation.com',
  phone: '+91 97114 87316',
  phones: ['+91 97114 87316'],
  hq: 'Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India',
  address: 'Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India',
  socials: {
    facebook: 'https://www.facebook.com/arkatechnovationpvtltd/',
    linkedin: 'https://www.linkedin.com/company/arka-technovation-private-limited/',
    instagram: 'https://www.instagram.com/arkatechnovationpvtltd/',
    whatsapp: 'https://wa.me/919711487316',
  },
};

export const OFFICES = [
  {
    label: 'Corporate Office',
    city: 'Noida',
    lines: [
      'Office No- 202, C-4',
      'Rayos Business Park, Sector 63',
      'Noida, Uttar Pradesh 201301, India',
    ],
    primary: true,
  },
];

export const STATS = [
  { v: 10, s: '+', l: 'Years in Business', d: 'Enterprise technology & growth marketing' },
  { v: 500, s: '+', l: 'Projects Delivered', d: 'Web · Apps · Films · Campaigns' },
  { v: 100, s: '+', l: 'Client Testimonials', d: 'Verified enterprise reviews' },
  { v: 600, s: '+', l: 'Manufacturers', d: 'Our deepest specialisation' },
];

/* ── NAVBAR NAVIGATION DATA ── */
export type NavChild = { label: string; to: string; note?: string };
export type NavGroup = {
  label: string;
  shortLabel?: string;
  to: string;
  children?: NavChild[];
  badge?: string;
  hideOnDesktop?: boolean;
};

export const NAV: NavGroup[] = [
  { label: 'Home', to: '/', hideOnDesktop: true },
  {
    label: 'About Us',
    to: '/about-us',
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      {
        label: 'Software Development',
        to: '/services/development',
        note: 'Bespoke enterprise software, modular backend, ERP, CRM & custom software',
      },
      {
        label: 'Digital Marketing',
        to: '/services/digital-marketing',
        note: 'Full-funnel acquisition, Google Ads, Meta Ads & branding',
      },
      {
        label: 'SEO, GEO & AEO Services',
        to: '/seo-lead-generation',
        note: 'Technical crawl architecture, schema entity graphs & local discovery',
      },
      {
        label: 'Film Production & Media',
        to: '/services/film-making',
        note: 'Broadcast-quality corporate films, commercials, podcasts & AI video',
      },
      {
        label: 'Corporate World News',
        to: '/corporate-world-news',
        note: 'Authoritative corporate journalism, broadcasts & market research',
      },
    ],
  },
  {
    label: 'Gallery',
    to: '/gallery',
  },
  {
    label: 'Blogs',
    to: '/blogs',
  },
  {
    label: 'Career',
    to: '/career',
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
  },
];

/* ── SERVICES — full taxonomy with sub-services from the source site ── */
export type Sub = {
  name: string;
  desc: string;
  subtitle?: string;
  highlights?: string[];
  img?: string;
};
export type Service = {
  slug: string; title: string; kicker: string; cat: 'Marketing' | 'Technology' | 'Creative';
  short: string; desc: string;
  subs: Sub[]; process: [string, string][];
  stat: string; statLabel: string; deliverables: string[];
  img: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'seo-lead-generation', title: 'SEO, GEO & AEO Services', kicker: 'Search & AI Engines', cat: 'Marketing',
    short: 'Technical crawl architecture, Schema.org entity graphs, generative AI citability, and local search discovery.',
    desc: 'We engineer technical crawl architectures, structured Schema.org entity graphs, and localized discovery funnels that position enterprise brands at the top of Google, SearchGPT, and Perplexity. Our in-house search and engineering pod works directly with your codebase to ensure every commercial page indexes quickly and converts incoming traffic.',
    stat: '+185%', statLabel: 'Organic pipeline growth',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      {
        name: 'SEO',
        desc: 'Comprehensive technical crawl audits, indexation governance, crawl budget optimization, and Core Web Vitals engineering paired with deep commercial keyword mapping to secure sustainable page-one Google rankings.',
        subtitle: 'Technical crawl audits, Core Web Vitals engineering & commercial keyword mapping',
        highlights: [
          'Comprehensive technical crawl audits and indexation governance',
          'High-intent commercial keyword mapping and search intent clustering',
          'Core Web Vitals optimization (LCP < 1.2s, zero layout shift)',
          'Continuous Google Search Console monitoring and algorithmic protection',
        ],
        img: '/images/services/seo/seo-services.webp',
      },
      {
        name: 'GEO Services',
        desc: 'Generative Engine Optimization tailored for AI-powered search engines including OpenAI SearchGPT, Perplexity AI, Google Gemini, and Claude. We structure entity data to ensure your brand is cited as the primary authoritative source.',
        subtitle: 'Generative Engine Optimization for SearchGPT, Perplexity AI, Gemini & Claude',
        highlights: [
          'AI crawler accessibility, llms.txt & markdown corpus optimization',
          'Knowledge Graph entity structuring and authoritative citation modeling',
          'Synthetic search prompt benchmarking across major LLMs',
          'Brand association vectors to secure direct citations in AI summaries',
        ],
        img: '/images/services/seo/programmatic-advertising-services.webp',
      },
      {
        name: 'AEO Services',
        desc: 'Answer Engine Optimization structuring content for zero-click direct answers, voice search queries, and featured snippets using structured Q&A schema, concise definition nodes, and semantic entity vectors.',
        subtitle: 'Answer Engine Optimization for zero-click direct answers & voice queries',
        highlights: [
          'Structured Q&A and FAQ schema markup for featured snippets',
          'Concise definition nodes engineered for Google\'s Knowledge Panel',
          'Conversational query targeting for Google Assistant, Siri & Alexa',
          'Zero-click position zero ownership for high-intent B2B search terms',
        ],
        img: '/images/services/ux/voice-search.webp',
      },
      {
        name: 'On-Page Services',
        desc: 'Meticulous on-page optimization: semantic HTML5 header hierarchies, intent-matched meta tags, image alt attributes, internal link equity distribution, and topical cluster modeling that compounds page authority.',
        subtitle: 'Semantic HTML5 header hierarchies, meta tags & topical cluster modeling',
        highlights: [
          'Semantic HTML5 header hierarchy and semantic tag structuring',
          'Intent-matched title tags, meta descriptions, and OpenGraph tags',
          'Internal link equity distribution and contextual anchor text modeling',
          'Image alt attribute engineering, structured schema & content freshness',
        ],
        img: '/images/services/ux/conversion-landing-pages.webp',
      },
      {
        name: 'Off-Page Services',
        desc: 'Ethical, high-authority backlink acquisition through digital PR, tier-1 industry publication guest editorials, and brand mention indexation that steadily builds domain trust beyond algorithmic fluctuations.',
        subtitle: 'High-authority editorial backlink acquisition through ethical digital PR',
        highlights: [
          'High-authority editorial backlinks from verified Tier-1 industry publications',
          'Digital PR outreach based on proprietary data studies and whitepapers',
          'Brand mention indexation and unlinked brand citation reclamation',
          '100% white-hat link acquisition with zero toxic PBN exposure',
        ],
        img: '/images/services/seo/our-seo-case-studies.webp',
      },
      {
        name: 'Local SEO (GMB)',
        desc: 'Dominating local search and the Google Maps 3-Pack for high-intent nearby buyers. Full Google Business Profile (GBP) verification, review velocity management, and consistent NAP citations across 70+ verified directories.',
        subtitle: 'Dominating local search and the Google Maps 3-Pack for high-intent nearby buyers',
        highlights: [
          'Google Business Profile (GBP) verification, category & attribute optimization',
          'Consistent NAP (Name, Address, Phone) citations across 70+ directories',
          'Local review acceleration campaigns and automated reputation management',
          'Geo-targeted location pages with hyper-local structured schema markup',
        ],
        img: '/images/services/seo/local-seo-services.webp',
      },
      {
        name: 'Google Marketplace Listing',
        desc: 'Complete Google Merchant Center configuration, Google Shopping / Product Listing Ads (PLA) optimization, structured product schema markup, and live inventory feed synchronization that captures active retail buyers.',
        subtitle: 'Google Merchant Center setup, Product Listing Ads (PLA) & live shopping feed sync',
        highlights: [
          'Complete Google Merchant Center account approval & feed verification',
          'Automated XML product feed sync with real-time stock levels & pricing',
          'Product, Offer, and AggregateRating Schema.org JSON-LD structured data',
          'Optimization for Google Free Listings and high-ROAS Shopping Ads',
        ],
        img: '/images/services/seo/google-local-services-ads-management.webp',
      },
    ],
    process: [
      ['Technical Audit', 'Deep crawl inspection, Core Web Vitals diagnostics, and semantic schema audit.'],
      ['Entity Graph Build', 'Topical cluster architecture, Schema.org JSON-LD graph, and content gap mapping.'],
      ['Authority Publishing', 'High-intent specification pages and digital PR link acquisition campaigns.'],
      ['Compounding Growth', 'Rank tracking, AI citation monitoring, and continuous algorithmic optimization.'],
    ],
    deliverables: [
      'Comprehensive 100+ point technical SEO audit',
      'Targeted keyword and entity vector map',
      'JSON-LD Schema.org structured data suite',
      'On-page content optimization passes',
      'Verified editorial backlink portfolio',
      'Live Google Search Console & keyword ranking telemetry',
    ],
  },
  {
    slug: 'digital-marketing', title: 'Digital Marketing', kicker: 'Performance Media', cat: 'Marketing',
    short: 'Full-funnel customer acquisition campaigns across Google and Meta, powered by multi-touch attribution and focused on pipeline growth.',
    desc: 'We design and manage full-funnel customer acquisition campaigns backed by multi-touch attribution and real-time revenue telemetry. From Google Search and Performance Max to Meta ad funnels and digital PR, our performance team focuses on lower customer acquisition costs (CAC) and verified pipeline growth.',
    stat: '4.8x', statLabel: 'Average blended ROAS',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      {
        name: 'Digital Marketing',
        desc: 'Holistic full-funnel digital marketing strategies connecting brand awareness, search demand capture, and lifecycle retention into a predictable, revenue-generating acquisition engine tailored to enterprise market dynamics.',
        subtitle: 'Holistic full-funnel digital strategy connecting brand awareness with revenue attribution',
        highlights: [
          'Omnichannel acquisition architecture across search, social & programmatic',
          'Multi-touch conversion tracking & real-time CAC/LTV telemetry',
          'Audience segmentation and high-intent customer journey mapping',
          'Executive revenue forecasting and blended ROAS optimization',
        ],
        img: '/images/services/seo/what-is-dm.webp',
      },
      {
        name: 'Social Media Marketing',
        desc: 'Strategic Social Media Optimization (SMO) across LinkedIn, Meta, Instagram, and X. We curate high-engagement editorial calendars, produce executive thought-leadership assets, and cultivate active B2B and consumer communities.',
        subtitle: 'Strategic SMO across LinkedIn, Meta & X with executive thought-leadership content',
        highlights: [
          'Curated B2B editorial calendar and community management',
          'Executive LinkedIn ghostwriting & thought leadership amplification',
          'High-engagement short-form video reels and infographic carousels',
          'Social sentiment monitoring and audience growth telemetry',
        ],
        img: '/images/services/seo/social-media-management.webp',
      },
      {
        name: 'Content Marketing',
        desc: 'High-authority SEO copywriting, industry research whitepapers, executive point-of-view articles, and multimedia explainers that answer real customer questions and establish lasting brand authority.',
        subtitle: 'High-authority SEO copywriting, industry whitepapers & multimedia storytelling',
        highlights: [
          'Intent-mapped technical whitepapers and editorial articles',
          'Topical cluster authority modeling for organic search domination',
          'Brand voice standardization across all digital touchpoints',
          'Interactive assets, infographics, and editorial case studies',
        ],
        img: '/images/services/ux/content-marketing.webp',
      },
      {
        name: 'Performance Marketing',
        desc: 'Data-driven paid media execution focused on bottom-line customer acquisition cost (CAC) and customer lifetime value (LTV). We implement algorithmic bid management and multivariate creative split testing.',
        subtitle: 'Data-driven media buying focused on low CAC, high LTV & algorithmic bidding',
        highlights: [
          'Algorithmic bid management aligned with bottom-line gross margins',
          'Multivariate creative split testing and audience conquesting',
          'Value-based bidding (VBB) with dynamic budget reallocation',
          'End-to-end CRM lead status integration and closed-loop reporting',
        ],
        img: '/images/services/seo/enterprise_ppc_management.webp',
      },
      {
        name: 'Branding',
        desc: 'Complete corporate identity design, design token systems, typography guidelines, positioning frameworks, and brand voice matrices that differentiate your enterprise in competitive global markets.',
        subtitle: 'Complete corporate identity design, design token systems & brand voice matrices',
        highlights: [
          'Visual identity guidelines, logo marks, typography & color systems',
          'Brand positioning statements, value proposition & elevator pitches',
          'Cross-platform design tokens and UI component libraries',
          'Packaging, merchandise, collateral & presentation decks',
        ],
        img: '/images/gallery/gallery-02-branding-ui.webp',
      },
      {
        name: 'Google Ads',
        desc: 'Search, Shopping, Display, and Performance Max (PMax) campaign management targeting high-intent commercial keywords with continuous negative query pruning and Quality Score optimization.',
        subtitle: 'High-intent Search, Shopping, YouTube & Performance Max campaign management',
        highlights: [
          'Granular single-intent ad groups with negative keyword pruning',
          'Performance Max (PMax) asset group optimization & audience signals',
          'High Quality Score landing page pairing with sub-second load times',
          'Real-time click-fraud protection and conversion value tracking',
        ],
        img: '/images/services/seo/ppc-management-services.webp',
      },
      {
        name: 'Meta Ads',
        desc: 'High-converting Facebook and Instagram ad funnels leveraging custom audience modeling, dynamic product catalog ads (DPA), and high-retention video creative to scale qualified customer acquisition.',
        subtitle: 'High-converting Facebook & Instagram ad funnels with custom lookalike modeling',
        highlights: [
          'Dynamic Product Ads (DPA) and catalog sales automation',
          'Custom audience modeling based on CRM high-value customer LTV',
          'High-retention video creative and UGC advertising funnels',
          'Server-side Conversions API (CAPI) with 100% event match quality',
        ],
        img: '/images/services/seo/social_media_advertising.webp',
      },
      {
        name: 'PR Management',
        desc: 'Strategic digital PR, earned media editorial outreach, verified wire distribution, executive reputation management, and proactive crisis communications protocols that protect enterprise standing.',
        subtitle: 'Strategic digital PR, Tier-1 media wire syndication & reputation governance',
        highlights: [
          'Direct editorial outreach to Tier-1 financial & tech journalists',
          'AP-compliant corporate press releases and global wire distribution',
          'Executive reputation monitoring and crisis communication protocols',
          'Verified earned media clippings and backlink authority generation',
        ],
        img: '/images/services/seo/online-review-acceleration.webp',
      },
    ],
    process: [
      ['Audience Audit', 'Customer segmentation, competitor benchmarking, and channel attribution audit.'],
      ['Funnel Architecture', 'Landing page CRO, creative messaging matrix, and tracking setup.'],
      ['Media Execution', 'Omnichannel campaign launch across Google, Meta, LinkedIn, and direct messaging.'],
      ['Attribution Scale', 'Weekly performance telemetry, budget reallocation, and ROAS acceleration.'],
    ],
    deliverables: [
      'Comprehensive digital growth strategy document',
      'Multi-touch attribution and live Looker Studio dashboard',
      'Custom ad creative sets across all aspect ratios',
      'Landing page CRO wireframes and copy variants',
      'High-converting email and WhatsApp lifecycle journeys',
      'Monthly ROI, CPA, and pipeline attribution reports',
    ],
  },
  {
    slug: 'digital-advertising', title: 'Digital Advertising', kicker: 'Paid Media', cat: 'Marketing',
    short: 'Paid media judged on pipeline, not impressions.',
    desc: 'Pay-per-click and programmatic advertising managed end to end — keyword strategy, ad copy, bidding, and relentless optimisation of spend against return. We also run geofencing and recruiting campaigns for niche audiences.',
    stat: '4.6×', statLabel: 'Average ROAS',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'PPC Management', desc: 'Search and display campaigns with continuous bid and query refinement.' },
      { name: 'Enterprise PPC Management', desc: 'Large-account structures, shared budgets and multi-market governance.' },
      { name: 'Programmatic Advertising', desc: 'Audience-first buying across display, video and audio inventory.' },
      { name: 'Addressable Geofencing', desc: 'Reaching defined premises and events with precision location targeting.' },
      { name: 'Competitor Geofencing', desc: 'Conquesting campaigns served around competitor locations.' },
      { name: 'Employment Recruiting Marketing', desc: 'Candidate-generation campaigns for hard-to-fill roles.' },
    ],
    process: [['Research', 'Keyword, audience and competitor gap analysis.'], ['Build', 'Account structure, ad groups and tracking.'], ['Launch', 'Controlled rollout with clear guardrails.'], ['Scale', 'Reallocate to what returns, cut what does not.']],
    deliverables: ['Account audit & rebuild', 'Ad copy variants', 'Negative keyword library', 'Landing page tests', 'Conversion tracking', 'Spend & return dashboard'],
  },
  {
    slug: 'development', title: 'Software Development', kicker: 'Software Engineering', cat: 'Technology',
    short: 'Custom CRM and ERP platforms, high-performance web applications, and modular backend architectures engineered with full source code ownership.',
    desc: 'We build custom enterprise software, scalable ERP systems, and modular backend architectures tailored to proprietary business logic. Our in-house engineering team in Sector 63, Noida develops high-throughput web applications and cloud platforms using Next.js 15, TypeScript, Node.js, Python, and PostgreSQL, delivering dependable uptime and complete source code ownership.',
    stat: '99.99%', statLabel: 'System availability SLA',
    img: 'https://images.pexels.com/photos/7651919/pexels-photo-7651919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      {
        name: 'CRM',
        desc: 'Custom enterprise Customer Relationship Management (CRM) software that unifies marketing lead capture, multi-stage sales pipelines, VoIP call logs, and customer support tickets into a single real-time operational dashboard with role-based permissions and zero per-seat licensing fees.',
        subtitle: 'Unified sales pipeline, lead capture, VoIP call logs & zero per-seat licensing',
        highlights: [
          'Custom sales pipeline & automated lead distribution',
          'Integrated VoIP telephony, call recording & SMS gateways',
          'Zero per-seat recurring fees with 100% IP ownership',
          'Role-based access control (RBAC) & audit trails',
        ],
        img: '/images/gallery/gallery-04-enterprise-crm.webp',
      },
      {
        name: 'ERP',
        desc: 'Scalable Enterprise Resource Planning (ERP) platforms engineered to centralize supply chain logistics, procurement, warehouse inventory, billing, multi-currency accounting, GST compliance, and human resources into one resilient source of truth.',
        subtitle: 'Centralized supply chain logistics, inventory, multi-currency accounting & GST compliance',
        highlights: [
          'Automated procurement, inventory & warehouse workflows',
          'Multi-currency ledger, GST invoicing & automated tax reconciliation',
          'Custom supply chain tracking with vendor portal access',
          'Seamless integration with legacy ERPs, banks & Tally',
        ],
        img: '/images/products/grid-09-skipper-maritime.webp',
      },
      {
        name: 'Mobile App',
        desc: 'High-performance native and cross-platform mobile applications for iOS and Android engineered with React Native, Swift, and Kotlin. Featuring offline-first data caching, real-time cloud synchronization, biometric authentication, and push notifications.',
        subtitle: 'High-performance iOS & Android apps with offline caching & biometric authentication',
        highlights: [
          'React Native, Swift & Kotlin cross-platform engineering',
          'Offline-first sync architecture & biometric security',
          'Sub-100ms API response latency and instant push notifications',
          'App Store & Google Play compliance, submission & ongoing maintenance',
        ],
        img: '/images/gallery/gallery-01-web-apps.webp',
      },
      {
        name: 'E-Commerce Website',
        desc: 'Enterprise-grade e-commerce storefronts built on Next.js headless commerce, Shopify Plus, and Magento. Engineered for sub-second checkout speeds, automated inventory synchronization, faceted catalog search, and multi-gateway payment processing.',
        subtitle: 'Headless commerce, sub-second checkout speeds & automated inventory synchronization',
        highlights: [
          'Next.js headless commerce & Shopify Plus enterprise setups',
          'Sub-second checkout flow engineered for conversion acceleration',
          'Multi-currency, multi-warehouse & ERP stock synchronization',
          'PCI-DSS compliant payment gateways with instant dispute telemetry',
        ],
        img: '/images/products/grid-02-maison-d2c.webp',
      },
      {
        name: 'Corporate Website',
        desc: 'High-performance flagship corporate websites developed with Next.js 15, React 19, and Tailwind CSS. Delivering sub-second Core Web Vitals, accessible semantic architectures, WCAG 2.2 compliance, and headless CMS publishing workflows.',
        subtitle: 'Flagship enterprise digital presence with Next.js 15, React 19 & WCAG 2.2 compliance',
        highlights: [
          'Sub-second Core Web Vitals (LCP < 1.0s, zero CLS)',
          'Headless CMS publishing workflows for marketing teams',
          'WCAG 2.2 AA accessibility and international SEO architecture',
          'Global CDN edge deployment with DDoS protection and 99.99% uptime',
        ],
        img: '/images/services/ux/nextjs-web-development.webp',
      },
      {
        name: 'Custom Software',
        desc: 'Bespoke enterprise software, microservices, and modular backend architectures tailored to proprietary business logic. We design secure REST & GraphQL APIs, automated workflow matrices, and robust data pipelines built for dependable scale.',
        subtitle: 'Bespoke microservices, modular backend architectures & high-throughput data pipelines',
        highlights: [
          'Tailored microservices & secure REST / GraphQL API endpoints',
          'Automated event-driven workflow matrices & message queues',
          'PostgreSQL, Redis & ClickHouse enterprise data clustering',
          'Full source code handover with 24/7 SLA infrastructure support',
        ],
        img: '/images/products/grid-01-precision-cad.webp',
      },
    ],
    process: [
      ['Architecture', 'Database schema modeling, system topology, and technical specifications.'],
      ['Sprint Build', 'Agile two-week sprint cycles with working code released to private staging servers.'],
      ['Integration & QA', 'Third-party API integration, automated unit testing, and load stress testing.'],
      ['Handover & SLA', 'Full source code delivery, DevOps deployment, and 24/7 SLA maintenance retainers.'],
    ],
    deliverables: [
      'Full production source code & Git repository',
      'Scalable database schema & API documentation',
      'Custom CRM / ERP administrative console',
      'Cross-platform mobile application bundles',
      'CI/CD automated deployment pipelines',
      '24/7 infrastructure monitoring retainer',
    ],
  },
  {
    slug: 'crm-software', title: 'CRM Software', kicker: 'Custom Software', cat: 'Technology',
    short: 'A single hub for every customer relationship.',
    desc: 'CRM software is a powerhouse: a hub for customer information that monitors every exchange and surfaces useful insight. It stores contact details, communication history, purchases and preferences in one platform — then automates the repetitive work so your team can offer a genuinely personalised journey.',
    stat: '12h', statLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/1181305/pexels-photo-1181305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Custom CRM Development', desc: 'Built around how your business already works, not a generic template.' },
      { name: 'Sales Pipeline Management', desc: 'Stage-wise tracking, lead scoring and forecast visibility for leadership.' },
      { name: 'Marketing Automation', desc: 'Reminder emails, meeting scheduling and nurture journeys on autopilot.' },
      { name: 'ERP & Operations Modules', desc: 'Inventory, billing, approvals and reporting tied to the same data.' },
      { name: 'Integrations', desc: 'Tally, WhatsApp, payment gateways, and your existing tools.' },
      { name: 'Reporting & Analytics', desc: 'Dashboards for sales performance, customer behaviour and campaign success.' },
    ],
    process: [['Map', 'Process walkthrough with the people who do the work.'], ['Architect', 'Data model, roles and integration plan.'], ['Build', 'Milestone delivery with working software each sprint.'], ['Adopt', 'Training, migration and handover with source code.']],
    deliverables: ['Process documentation', 'CRM / ERP platform', 'Role-based dashboards', 'Integrations', 'Data migration', 'Training & source handover'],
  },
  {
    slug: 'content-marketing', title: 'Content Marketing', kicker: 'Editorial & Motion', cat: 'Creative',
    short: 'Content that earns attention and keeps it.',
    desc: 'A strategic approach to creating and distributing valuable, relevant and consistent content to attract and retain a clearly defined audience. From SEO copywriting to motion graphics and web video — one editorial voice across every format.',
    stat: '600+', statLabel: 'Content pieces shipped yearly',
    img: 'https://images.pexels.com/photos/4623358/pexels-photo-4623358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Content Strategy', desc: 'Topics, formats and cadence mapped to search demand and sales stages.' },
      { name: 'SEO Copywriting', desc: 'Copy written for humans first, structured so search engines understand it.' },
      { name: 'Personalised Web Content', desc: 'Variant content by segment, industry or stage in the journey.' },
      { name: 'Motion Graphics', desc: 'Explainers, lower-thirds, kinetic type and product animations.' },
      { name: 'Web Video Services', desc: 'Scripted, shot and edited video built for the platform it lives on.' },
      { name: 'Voice Search Optimisation', desc: 'Conversational phrasing and structured answers for spoken queries.' },
    ],
    process: [['Research', 'Keyword, competitor and audience content gaps.'], ['Plan', 'Editorial calendar and format mix.'], ['Produce', 'Writing, design, motion and video in-house.'], ['Distribute', 'Publish, promote, measure, refresh.']],
    deliverables: ['Content audit', 'Editorial calendar', 'SEO copywriting', 'Motion graphics', 'Web video', 'Distribution plan'],
  },
  {
    slug: 'film-making', title: 'Film Production & Media', kicker: 'Production Studio', cat: 'Creative',
    short: 'Commercial films, TV ads, executive interview broadcasts, and studio photography produced in-house on our Noida soundstage.',
    desc: 'From initial treatment and scriptwriting to multi-camera 4K/8K cinematography and DaVinci Resolve color grading, our in-house production crew creates commercial films, television ads, executive interview broadcasts, and high-resolution studio photography. Operating our own soundstage in Sector 63, Noida, we handle every stage of production under one roof.',
    stat: '8K/4K', statLabel: 'Cinema broadcast master',
    img: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      {
        name: 'Film Production',
        desc: 'Turnkey cinema production from treatment and scriptwriting to on-location multi-camera shooting, professional lighting, DaVinci Resolve color grading, and licensed orchestral sound design handled 100% in-house.',
        subtitle: 'Turnkey cinema production from treatment & script to DaVinci Resolve color grading',
        highlights: [
          'Full cinematic scriptwriting, storyboard drafting & moodboarding',
          'Multi-camera 4K/8K cinema packages (RED / ARRI / Sony FX)',
          'DaVinci Resolve studio color grading and HDR mastering',
          '100% in-house production crew and licensed orchestral music stems',
        ],
        img: '/images/gallery/gallery-03-cinema-film.webp',
      },
      {
        name: 'Digital Ads',
        desc: 'High-converting social video advertisements, YouTube pre-roll commercials, and vertical Reels/Shorts engineered with psychological hooks that capture attention within the first three seconds to maximize conversion.',
        subtitle: 'High-converting social video ads, YouTube pre-roll & vertical Reels/Shorts',
        highlights: [
          '3-second hook engineering designed to stop scrolling instantly',
          'Dynamic multi-aspect ratio packages (9:16 vertical, 16:9 widescreen, 1:1)',
          'A/B creative test variants with kinetic text subtitles and voiceovers',
          'Direct response storytelling engineered for verified ROAS',
        ],
        img: '/images/services/seo/youtube-social-media-advertising.webp',
      },
      {
        name: 'TV Ads',
        desc: 'National broadcast-standard television commercials engineered to strict technical broadcast specifications, complete with multi-track audio mastering, licensed talent casting, and clear call-to-action storytelling.',
        subtitle: 'Broadcast-standard television commercials with multi-track audio mastering',
        highlights: [
          'Strict broadcast technical specifications & clearcast clearance',
          'Professional voiceover talent casting and 5.1 surround sound mastering',
          'High-end visual effects, motion typography, and CGI integration',
          'Complete distribution master files formatted for national television networks',
        ],
        img: '/images/services/ux/video-production.webp',
      },
      {
        name: 'Corporate Film Production',
        desc: 'Cinematic corporate documentaries, company heritage films, industrial factory tours, and investor relations presentations that showcase manufacturing scale, technological innovation, and operational excellence.',
        subtitle: 'Cinematic corporate documentaries, industrial facility tours & investor relations',
        highlights: [
          'Manufacturing plant, laboratory, and corporate campus drone cinematography',
          'Executive interviews and company heritage narrative storytelling',
          'High-resolution corporate documentary cut for investor presentations',
          'Multi-language subtitles and global corporate distribution packages',
        ],
        img: '/images/disciplines/discipline-04-film-production.jpg',
      },
      {
        name: 'Podcasts',
        desc: 'End-to-end studio podcast production in our Noida soundstage, equipped with studio boom microphones, 4K multi-camera switching, teleprompters, and rapid turn-around vertical micro-cut distribution packages.',
        subtitle: 'Acoustically treated studio podcast production with 4K multi-camera switching',
        highlights: [
          'In-house Noida broadcast soundstage with studio boom microphones',
          'Real-time 4K multi-camera switching with live teleprompters',
          'Automated micro-clip generation for Instagram Reels, YouTube Shorts & TikTok',
          'Full audio mastering and RSS feed distribution to Spotify & Apple Podcasts',
        ],
        img: '/images/services/film/podcasts.webp',
      },
      {
        name: 'Personal Interviews',
        desc: 'Executive leadership interviews, founder spotlights, and keynote addresses filmed with broadcast lighting and high-definition audio capture that position corporate executives as undeniable industry authorities.',
        subtitle: 'Executive leadership interviews & founder spotlights with broadcast lighting',
        highlights: [
          'Studio 3-point cinematic lighting and broadcast lavalier audio capture',
          'Thought-leadership interview questioning formulated by media veterans',
          'Executive media training, teleprompter coaching, and posture guidance',
          'High-resolution stills and quote card graphics for LinkedIn distribution',
        ],
        img: '/images/home/digital-showcase-editorial-vertical.webp',
      },
      {
        name: 'AI Video Creation',
        desc: 'Generative AI video workflows, automated multi-language voice localization, neural motion graphics, and rapid visual asset generation that compress production timelines while maintaining strict enterprise brand fidelity.',
        subtitle: 'Generative AI video workflows, voice localization & neural motion graphics',
        highlights: [
          'Synthetic AI video avatars and automated multi-language lip-syncing',
          'Neural motion graphics and rapid AI concept visual generation',
          'Drastic reduction in production turnaround times and localized costs',
          'Enterprise IP safety compliance with licensed generative models',
        ],
        img: '/images/industries/ai-automation.webp',
      },
      {
        name: 'Product Photoshoot',
        desc: 'High-end studio and location commercial product photography. Utilizing macro lenses, calibrated color lighting, and 360-degree turntable capture for e-commerce catalogs, print brochures, and trade show displays.',
        subtitle: 'Studio & location commercial product photography with 360-degree turntable capture',
        highlights: [
          'Macro lens detail capture with color-calibrated studio strobe lighting',
          '360-degree motorized turntable photography for e-commerce catalogs',
          'White-background clean cutouts, transparent PNGs, and shadow creation',
          'High-resolution TIFF and print-ready CMYK deliverables',
        ],
        img: '/images/products/grid-07-botblox-robotics.webp',
      },
      {
        name: 'Model Shoot',
        desc: 'Commercial fashion, lifestyle, and corporate model photography with professional casting, on-set styling, hair and makeup, and high-end editorial retouching for brand lookbooks and advertising campaigns.',
        subtitle: 'Commercial fashion, lifestyle & corporate model photography with professional styling',
        highlights: [
          'Professional model casting, styling, hair, and makeup coordination',
          'Location scouting and studio cyclorama wall photography',
          'High-end magazine-grade skin and fabric editorial retouching',
          'Complete commercial usage rights and release waivers',
        ],
        img: '/images/products/grid-06-meridian-health.webp',
      },
    ],
    process: [
      ['Concept & Script', 'Treatment development, scriptwriting, shot lists, and moodboards.'],
      ['Pre-Production', 'Casting, location scouting, permits, studio setup, and schedule.'],
      ['Cinematography', 'Multi-camera 4K/8K location shooting with professional lighting and audio.'],
      ['Post-Production', 'Editing, DaVinci Resolve color grading, sound design, and master delivery.'],
    ],
    deliverables: [
      'Master 4K/8K broadcast video files in ProRes & H.265',
      'Platform-specific cut-downs (16:9, 9:16 vertical, 1:1 square)',
      'High-resolution commercial photography image suite',
      'Licensed music stems and broadcast sound design masters',
      'Short-form social media reels with motion subtitles',
      'Raw footage archive and project library handover',
    ],
  },
  {
    slug: 'e-commerce', title: 'E-Commerce', kicker: 'Online Retail', cat: 'Technology',
    short: 'Stores built to convert and scale.',
    desc: 'Everything an online retailer needs: storefront design and build, catalogue and inventory management, payment and logistics integration — then the SEO and PPC to bring buyers in, and the analytics to prove what worked.',
    stat: '+60%', statLabel: 'Revenue in 6 months',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Storefront Design & Build', desc: 'Fast, mobile-first storefronts with a conversion-tested checkout.' },
      { name: 'E-Commerce SEO', desc: 'Category, product and faceted-navigation optimisation for organic demand.' },
      { name: 'E-Commerce SEO + PPC', desc: 'Paid and organic working from one keyword and margin model.' },
      { name: 'Marketplace Management', desc: 'Listings, content and advertising on Amazon, Flipkart and beyond.' },
      { name: 'Payment & Logistics', desc: 'Gateways, COD, shipping partners and returns workflows.' },
      { name: 'Retention & Lifecycle', desc: 'Abandoned cart, replenishment and win-back journeys.' },
    ],
    process: [['Audit', 'Catalogue, funnel and unit-economics review.'], ['Rebuild', 'Storefront, checkout and speed work.'], ['Acquire', 'SEO and paid media from one plan.'], ['Retain', 'Lifecycle journeys and repeat-purchase growth.']],
    deliverables: ['Store build or rebuild', 'Catalogue structuring', 'Checkout optimisation', 'E-com SEO programme', 'Paid shopping campaigns', 'Retention automation'],
  },
  {
    slug: 'analytics-attribution', title: 'Analytics & Attribution', kicker: 'Measurement', cat: 'Marketing',
    short: 'Know exactly which channel earned the sale.',
    desc: 'Reporting and forecasting that connects marketing activity to revenue. Channel attribution, call tracking, competitor analysis and digital due diligence — so budget decisions are made on evidence rather than opinion.',
    stat: '100%', statLabel: 'Reporting transparency',
    img: 'https://images.pexels.com/photos/4345109/pexels-photo-4345109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Channel Attribution Forecasting', desc: 'Model how each channel contributes, then forecast the next quarter.' },
      { name: 'SEO Reporting & Forecasting', desc: 'Rank, traffic and pipeline projections you can plan around.' },
      { name: 'Web Channel Call Tracking', desc: 'Connect offline calls to the campaigns and keywords that caused them.' },
      { name: 'Channel Partner Pipeline', desc: 'Shared pipeline visibility across distributors and partners.' },
      { name: 'Competitor Analysis', desc: 'Share of voice, keyword gaps and paid-activity monitoring.' },
      { name: 'Digital Due Diligence', desc: 'Independent assessment of digital assets before investment or acquisition.' },
    ],
    process: [['Instrument', 'Tracking plan, events and clean data collection.'], ['Model', 'Attribution logic agreed with finance.'], ['Report', 'One dashboard, one version of the truth.'], ['Advise', 'Quarterly recommendations backed by the numbers.']],
    deliverables: ['Tracking implementation', 'Attribution model', 'Live dashboard', 'Call tracking setup', 'Competitor monitor', 'Quarterly review deck'],
  },
  {
    slug: 'ux-interactive', title: 'UX & Interactive', kicker: 'Product Design', cat: 'Creative',
    short: 'Interfaces designed from evidence, not taste.',
    desc: 'User experience research, interaction design and interface systems. We develop web applications with a systematic approach — planning, designing, implementing and testing for a high-quality experience, with scalability and security considered throughout.',
    stat: '92%', statLabel: 'Task-success in testing',
    img: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'UX Research', desc: 'Interviews, task analysis and usability testing with real users.' },
      { name: 'Information Architecture', desc: 'Navigation, taxonomy and content hierarchy that users can predict.' },
      { name: 'Interaction Design', desc: 'Flows, states and micro-interactions specified before build.' },
      { name: 'UI Design', desc: 'Visual language, typography, colour and component design.' },
      { name: 'Design Systems', desc: 'Reusable component libraries documented for engineering.' },
      { name: 'Prototyping & Testing', desc: 'Clickable prototypes tested before a line of production code.' },
    ],
    process: [['Research', 'Users, tasks and current pain points.'], ['Architect', 'Flows, wireframes and structure.'], ['Design', 'Interface and design system.'], ['Validate', 'Prototype testing, iterate, hand over.']],
    deliverables: ['Research findings', 'User flows & wireframes', 'UI design', 'Design system', 'Prototype', 'Developer handover'],
  },
  {
    slug: 'corporate-world-news',
    title: 'Corporate World News',
    kicker: 'Editorial & Market Intelligence',
    cat: 'Creative',
    short: 'Verified corporate journalism, executive interview broadcasts, industry analysis, and wire-syndicated corporate press releases.',
    desc: 'Our dedicated newsroom in Sector 63, Noida produces verified business journalism, executive interview broadcasts, and empirical market research. We help corporate leadership publish strategic press releases, analyze vertical industry shifts, and syndicate verified announcements across Tier-1 financial media wires.',
    stat: '500+',
    statLabel: 'Executive Interviews Broadcast',
    img: '/images/disciplines/discipline-05-corporate-world-news.jpg',
    subs: [
      {
        name: 'Corporate World News',
        desc: 'Authoritative corporate journalism, verified industry reporting, and flagship editorial publications that position enterprise organizations at the forefront of their respective market sectors.',
        subtitle: 'Authoritative corporate journalism, verified industry reporting & flagship publications',
        highlights: [
          'In-depth investigative corporate journalism and enterprise feature stories',
          'Fact-checked primary source reporting with zero speculative filler',
          'Bespoke digital masthead publication with executive reach',
          'Archival preservation and permanent industry citation indexing',
        ],
        img: '/images/disciplines/discipline-05-corporate-world-news.jpg',
      },
      {
        name: 'Interview & Press Releases',
        desc: 'Multi-camera executive broadcast interviews and strategic corporate press release formulation with verified syndication across Tier-1 financial media wires and industry publications.',
        subtitle: 'Executive broadcast interviews & AP-compliant press release syndication',
        highlights: [
          'Multi-camera executive broadcast interviews produced in our Noida studio',
          'AP-style corporate press release drafting by seasoned business journalists',
          'Direct distribution across Tier-1 financial media wires (Bloomberg, Reuters, PTI)',
          'Comprehensive media pickup dossiers and audience impression verification',
        ],
        img: '/images/blogs/blog-08-executive-broadcast-news.webp',
      },
      {
        name: 'Corporate News',
        desc: 'Breaking enterprise news coverage, merger & acquisition announcements, strategic joint ventures, leadership transitions, and capital expenditure reporting delivered with journalistic precision.',
        subtitle: 'Breaking enterprise coverage, M&A announcements, joint ventures & leadership transitions',
        highlights: [
          'Rapid-response coverage of corporate mergers, acquisitions, and funding rounds',
          'Strategic joint venture and partnership announcement structuring',
          'Executive transition spotlights and boardroom restructuring statements',
          'Regulatory disclosure compliance and investor-friendly summaries',
        ],
        img: '/images/services/ux/website-design.webp',
      },
      {
        name: 'Market Update',
        desc: 'Daily business news digests, economic indicators, regulatory policy shifts, and market sector updates that provide strategic decision-makers with actionable operational intelligence.',
        subtitle: 'Daily business news digests, economic indicators, regulatory policy shifts & sector briefs',
        highlights: [
          'Daily curated morning business briefs and macroeconomic updates',
          'Sector-specific regulatory policy shifts and legal compliance insights',
          'Foreign exchange, commodity price, and fiscal policy analysis',
          'Direct-to-inbox executive intelligence digests for C-suite decision makers',
        ],
        img: '/images/products/grid-08-kestrix-thermal.webp',
      },
      {
        name: 'Industries Analysis',
        desc: 'Deep-dive vertical market analysis, technology adoption benchmarks, valuation multiples, and supply chain telemetry compiled by our in-house research analysts.',
        subtitle: 'Deep-dive vertical market analysis, technology adoption benchmarks & supply chain telemetry',
        highlights: [
          'Vertical market penetration studies across SaaS, Manufacturing & FinTech',
          'Technology adoption curves and valuation multiple benchmarks',
          'Supply chain vulnerability modeling and global trade flow telemetry',
          'Comprehensive data charts, infographics, and executive slide decks',
        ],
        img: '/images/industries/industries-manufacturing.webp',
      },
      {
        name: 'Market Research',
        desc: 'Rigorous empirical market research, customer sentiment benchmarking, Total Addressable Market (TAM) feasibility studies, and competitor positioning matrices.',
        subtitle: 'Rigorous empirical research, customer sentiment benchmarking & TAM feasibility studies',
        highlights: [
          'Total Addressable Market (TAM), SAM, and SOM empirical sizing studies',
          'B2B customer sentiment benchmarking and Net Promoter Score (NPS) diagnostics',
          'Competitive positioning matrices and secret shopper market audits',
          'Statistical data validation, econometric modeling, and executive report books',
        ],
        img: '/images/products/grid-05-plant-seo.webp',
      },
    ],
    process: [
      ['Research & Intake', 'Primary source data collection, executive interview briefing, and editorial scoping.'],
      ['Journalistic Craft', 'Fact-checked drafting, C-suite review, and broadcast-grade multimedia production.'],
      ['Distribution & Wire', 'Direct media pitching, wire syndication, and digital publishing across channels.'],
      ['Impact Measurement', 'Clipping audits, audience reach telemetry, and executive impact reporting.'],
    ],
    deliverables: [
      'Broadcast-quality executive interview video masters',
      'AP-compliant corporate press releases and media kits',
      'Proprietary industry research whitepapers and sector reports',
      'Daily curated market intelligence briefing notes',
      'Direct distribution verification and media pickup dossiers',
      'Executive thought leadership editorial articles',
    ],
  },
];

/* ── WORK ── */
export const WORKS = [
  { name: 'Precision Engineering Co.', sector: 'Manufacturing', year: '2025', services: ['SEO & Lead Generation', 'Development', 'Film Making'], result: '+300%', resultLabel: 'Organic traffic in 9 months',
    img: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A forty-year-old exporter with world-class machinery and a website that ranked for nothing. Buyers in Germany and the UAE could not find them.',
    solution: 'Rebuilt the site around product-line intent, fixed technical foundations, published sixty specification pages and shot a factory film that proved capacity on camera.',
    quote: 'Enquiries did not just grow — they became the right kind of enquiries.', by: 'Rajesh Verma, Director' },
  { name: 'Maison D2C', sector: 'E-Commerce', year: '2025', services: ['E-Commerce', 'Digital Advertising', 'Analytics & Attribution'], result: '+60%', resultLabel: 'Revenue in six months',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Traffic was cheap but conversion was not. A slow theme and a leaky checkout were burning paid budget daily.',
    solution: 'Rebuilt the storefront to a 1.4s budget, restructured the funnel with three tests a month, and shifted spend to full-funnel shopping and remarketing.',
    quote: 'Transparent reporting, real numbers, every month. Sales followed the traffic by sixty percent.', by: 'Priya Sharma, Founder' },
  { name: 'Northline Industries', sector: 'Industrial', year: '2024', services: ['Film Making', 'Content Marketing', 'Digital Advertising'], result: '2.1M', resultLabel: 'Views · 480 qualified leads',
    img: 'https://images.pexels.com/photos/29224578/pexels-photo-29224578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A commodity category where every competitor sounded identical. Sales needed something that made buyers stop and watch.',
    solution: 'A four-minute cinematic brand film shot across two plants, cut into eleven social assets, distributed with an account-based campaign to 900 named buyers.',
    quote: 'The film opened doors our team had been knocking on for two years.', by: 'Marketing Head' },
  { name: 'Enterprise Group CRM', sector: 'Software', year: '2025', services: ['CRM Software', 'UX & Interactive', 'Analytics & Attribution'], result: '12h', resultLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Six regional offices running three different spreadsheets. Orders were lost, margins invisible, and nobody trusted the numbers.',
    solution: 'A custom CRM with role-based dashboards, automated approvals, Tally and WhatsApp integrations, and a leadership view of live pipeline and margin.',
    quote: 'Support actually picks up the phone. That is rarer than it should be.', by: 'Amit Patel, CEO' },
  { name: 'Industrial Plant Ltd.', sector: 'Manufacturing', year: '2024', services: ['SEO & Lead Generation', 'Development'], result: '140+', resultLabel: 'Keywords on page one',
    img: 'https://images.pexels.com/photos/6937714/pexels-photo-6937714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Strong offline reputation, invisible online. Dealers were sending buyers to competitors with better pages.',
    solution: 'A modular site with city-page architecture, schema for every product, Google Business optimisation across nine locations, and a technical content calendar.',
    quote: 'Page one for every product line we manufacture.', by: 'Business Head' },
  { name: 'Meridian Healthcare', sector: 'Healthcare', year: '2025', services: ['UX & Interactive', 'Content Marketing', 'Digital Marketing'], result: '3.4×', resultLabel: 'Engagement lift',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A growing clinic chain with inconsistent branding across six cities and no content engine behind its reputation.',
    solution: 'A complete identity system, a patient-first website with online booking, and an always-on content engine producing thirty original assets a month.',
    quote: 'Creative that looks world-class, strategy that behaves like it.', by: 'Sneha Kulkarni, CMO' },
];

/* ── TEAM ── */
export const TEAM = [
  { name: 'Mr. Kranti Parashar', role: 'Founder & Managing Director', focus: 'Strategy · Client Partnerships', initials: 'KP', tint: 'solar' },
  { name: 'Aditi Raghav', role: 'Head of Design', focus: 'UX · Brand Systems', initials: 'AR', tint: 'gold' },
  { name: 'Farhan Qureshi', role: 'Engineering Lead', focus: 'Web · CRM · Cloud', initials: 'FQ', tint: 'cobalt' },
  { name: 'Meera Iyer', role: 'Growth Director', focus: 'SEO · Paid Media', initials: 'MI', tint: 'rust' },
  { name: 'Vikram Sethi', role: 'Film Director', focus: 'Corporate & Ad Films', initials: 'VS', tint: 'solar' },
  { name: 'Nisha Barman', role: 'Account Director', focus: 'Delivery · Client Success', initials: 'NB', tint: 'gold' },
];

export const VALUES = [
  { n: '01', t: 'Do the best', d: 'Our founding belief, carried from the first company. No shortcuts in the work that leaves the building.' },
  { n: '02', t: 'Clarity over clutter', d: 'Minimal interfaces, honest strategy, and reports you can actually read without a translator.' },
  { n: '03', t: 'One team, no outsourcing', d: 'Designers, engineers, marketers and filmmakers in the same room, accountable for the same result.' },
  { n: '04', t: 'Truthful reporting', d: 'You see the dashboard we see — including the campaigns that did not work, every month.' },
];

export const IMPACT = [
  { t: 'STEM Programme', d: 'Funded digital-skills workshops for students in Noida government schools, run by our engineering team each quarter.' },
  { t: 'Company Values', d: 'Published and reviewed annually — the standards we hold each other to, not a poster on a wall.' },
  { t: 'Equality at Arka', d: 'Structured, audited pay bands and a hiring process measured for bias at every stage.' },
  { t: 'Local Business Support', d: 'Pro-bono digital support each year for small businesses in the sectors around our Noida office.' },
];

/* ── BLOG ── */
export const POSTS = [
  { d: '05', m: 'SEP', y: '2026', tag: 'Marketing', title: 'What is Inbound Marketing and How It Can Help Your Business', excerpt: 'Inbound marketing uses the power of the internet to reach the people who actually matter to your business — and costs less every month it runs.', read: '6 min' },
  { d: '17', m: 'NOV', y: '2025', tag: 'Careers', title: 'What Skills Are Required to Work as an Email Marketing Specialist?', excerpt: 'The email boom is in full swing. As third-party cookies are phased out and customers demand more relevance, these are the skills that matter.', read: '5 min' },
  { d: '23', m: 'AUG', y: '2025', tag: 'Strategy', title: 'Tips For Traditional Digital Marketing — From Start to Finish', excerpt: 'Traditional digital marketing has come a long way in the past few years, with new and improved tools at every stage of the funnel.', read: '8 min' },
  { d: '11', m: 'JUL', y: '2026', tag: 'SEO', title: 'The Six-Month SEO Playbook We Run for Indian Manufacturers', excerpt: 'Site architecture, specification pages, schema and the link strategy that took an exporter from page nine to page one.', read: '7 min' },
  { d: '02', m: 'JUN', y: '2026', tag: 'Film', title: 'Shooting a Factory Without Stopping Production', excerpt: 'Lighting around running machines, sound on a shop floor, and why the second shift is always the better shoot.', read: '4 min' },
  { d: '19', m: 'APR', y: '2026', tag: 'Analytics', title: 'Four Numbers Your Board Should Actually Ask For', excerpt: 'Most marketing reports measure the wrong thing. Here is what to put on the first page instead.', read: '5 min' },
];

/* ── CAREERS ── */
export const ROLES = [
  { role: 'Senior SEO Executive', team: 'Marketing', type: 'Full-time', place: 'Noida / Hybrid' },
  { role: 'React & Next.js Developer', team: 'Technology', type: 'Full-time', place: 'Noida' },
  { role: 'Video Editor & Colourist', team: 'Creative', type: 'Full-time', place: 'Noida' },
  { role: 'Performance Media Specialist', team: 'Marketing', type: 'Full-time', place: 'Remote (India)' },
  { role: 'UX Designer', team: 'Creative', type: 'Full-time', place: 'Noida / Hybrid' },
  { role: 'Business Development Manager', team: 'Growth', type: 'Full-time', place: 'Noida' },
];

export const FAQS = [
  { q: 'What does ARKA Technovation Private Limited do?', a: 'Ten services across three disciplines: marketing (SEO, digital marketing, digital advertising, content, analytics), technology (web development, CRM software, e-commerce) and creative (film making, UX and interactive design). One in-house team delivers all of it.' },
  { q: 'Who leads ARKA Technovation Private Limited?', a: 'ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd., with related corporate ventures including Ibem Solutions LLP) is led by Founder & Director Mr. Kranti Parashar, who brings over 18 years of experience in enterprise technology, strategic finance, and corporate communication.' },
  { q: 'Where are your offices?', a: 'Our corporate office is located at Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India.' },
  { q: 'How long does a project take?', a: 'A corporate website ships in three to six weeks. E-commerce and mobile apps run eight to sixteen. Custom CRM depends on scope and is planned in milestones. Marketing engines show measurable movement in sixty to ninety days.' },
  { q: 'Do you provide reports after launch?', a: 'Yes. Monthly performance reports, a live dashboard, quarterly strategy reviews and a named account contact. Maintenance, hosting and iteration are available as retainers or per project.' },
  { q: 'How is project pricing determined?', a: 'Every engagement is scoped individually based on your technical deliverables, scale, and business objectives. Following a discovery session, you receive a transparent, itemized proposal with clear milestone deliverables.' },
];

export const TESTIMONIALS_LITE = [
  { quote: 'They rebuilt our digital presence end-to-end — website, SEO and film. Enquiries did not just grow, they became the right kind of enquiries.', name: 'Rajesh Verma', role: 'Director, Precision Engineering · Delhi NCR', metric: '+300% traffic' },
  { quote: 'Transparent reporting, real numbers, every month. Our organic traffic rose 150% in six months and sales followed by sixty percent.', name: 'Priya Sharma', role: 'Founder, Maison D2C', metric: '4.6× ROAS' },
  { quote: 'One team for software, marketing and film. Our CRM saves each team hours every week — and support actually picks up the phone.', name: 'Amit Patel', role: 'CEO, Industrial Solutions · Ahmedabad', metric: '12h saved / week' },
  { quote: 'Creative that looks world-class and strategy that behaves like it. That combination is rare, and it is why we have stayed for years.', name: 'Sneha Kulkarni', role: 'CMO, Meridian Healthcare · Bengaluru', metric: '3.4× engagement' },
];

export const CLIENTS = ['PRECISION ENGINEERING', 'MAISON D2C', 'NORTHLINE INDUSTRIES', 'MERIDIAN HEALTHCARE', 'ENTERPRISE GROUP', 'INDUSTRIAL PLANT LTD', 'ATLAS LOGISTICS', 'VEDA EDUCATION', 'ORBIT REALTY', 'SURAKSHA STEEL', 'KAVYA FOODS', 'ZENITH AUTOMOTIVE'];

export const PROCESS = [
  { n: '01', t: 'Discover', d: 'A free audit and an honest diagnosis of where growth is hiding.' },
  { n: '02', t: 'Define', d: 'Strategy, scope, timelines and the metrics that define success.' },
  { n: '03', t: 'Design', d: 'Brand, interface and film concepts, refined until unmistakable.' },
  { n: '04', t: 'Develop', d: 'Web, app and software built in-house for speed and scale.' },
  { n: '05', t: 'Deploy', d: 'QA, launch, go-live support and team training.' },
  { n: '06', t: 'Grow', d: 'SEO, media and content, iterated and reported every month.' },
];

/* ─────────────────────────────────────────────────────────────
   DETAILED EXTRACTED ARCHITECTURE — ARKA TECHNOVATION
   Comprehensive domain data aligned with full enterprise offerings
   ───────────────────────────────────────────────────────────── */

export const SEO_SERVICES_DATA = {
  eyebrow: 'Organic Search & High-Velocity Lead Engines',
  title: 'SEO, GEO & Lead Generation Services That Power Scalable Pipeline',
  intro:
    'Search engine optimization is the foundation of digital revenue. At ARKA Technovation Private Limited, we handle custom end-to-end SEO campaigns from technical health, Core Web Vitals, and structured schemas to competitive enterprise search and hyper-targeted paid media.',
  stats: [
    { value: '+210%', label: 'Average Organic Traffic Lift' },
    { value: '450+', label: 'In-House Tech & Growth Specialists' },
    { value: '4.8×', label: 'Verified Client Pipeline ROAS' },
    { value: '<1.2s', label: 'Average Core Web Vitals LCP' },
  ],
  pillars: [
    {
      id: 'organic-search',
      title: 'Enterprise & Organic SEO Services',
      tag: 'Organic Search',
      desc: 'With over 90% of online journeys beginning on search engines, top rankings in competitive search results connect your company with buyers at the exact moment of intent. Our enterprise strategies dominate high-volume commercial keywords.',
      points: [
        'Enterprise Keyword Mapping & Commercial Intent Modeling',
        'Deep Technical Crawlability, Sitemaps & Schema Architecture',
        'High-Authority Domain Backlink Acquisition & Digital PR',
        'Algorithmic Content Freshness & Topic Cluster Governance',
      ],
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Guarantee Ads',
      tag: 'Local Dominance',
      desc: 'More than half of online searchers visit a business within 24 hours of conducting a local query. We optimize your local profiles and manage Google Local Services Ads so you only pay for qualified inbound customer calls.',
      points: [
        'Google Business Profile Multi-Location Optimization',
        'Google Guaranteed & Local Services Ads Verification Management',
        'Localized Keyword Tracking for Inbound Calls & Quotes',
        'Local Citation Building & Consistency Audits',
      ],
    },
    {
      id: 'core-web-vitals',
      title: 'Page Speed & Core Web Vitals Optimization',
      tag: 'Speed Engineering',
      desc: 'Nearly half of web users abandon pages taking more than three seconds to load. We optimize Time to First Byte (TTFB), Largest Contentful Paint (LCP), and Interaction to Next Paint (INP) to unlock higher Google rankings and higher conversion.',
      points: [
        'Server Response & Edge CDN Caching Architecture',
        'Resource Compression, Lazy-Loading & Zero-Layout Shifts',
        'Third-Party Script Auditing & JavaScript Hydration Pruning',
        'Mobile-First Google PageSpeed Score Benchmark Guarantees',
      ],
    },
    {
      id: 'ppc',
      title: 'Data-Powered PPC Management Services',
      tag: 'Paid Search',
      desc: 'We combine 10+ years of search experience with millions of data points to launch smarter pay-per-click campaigns that reduce cost per acquisition (CPA) and maximize Return on Ad Spend (ROAS).',
      points: [
        'Google Ads Search, Display & Performance Max Campaigns',
        'Competitor Ad Intelligence & Bid War Mitigation',
        'Negative Keyword Library & Click Fraud Protection',
        'Continuous Landing Page Split Testing & Conversion Tracking',
      ],
    },
    {
      id: 'geofencing',
      title: 'Competitor & Addressable Geofencing',
      tag: 'Hyper-Targeted Media',
      desc: 'Target competitor locations, trade shows, and exact physical premises with 12-sided polygon fences down to 1,000 square feet. Deliver hyper-relevant ads directly to decision-makers based on physical location footprints.',
      points: [
        'Competitor Facility & Industrial Zone Geofences',
        'Conference, Trade Show & Event Perimeter Targeting',
        'Addressable Household & Corporate Premises Campaigns',
        'Foot Traffic & In-Store Visit Attribution Reporting',
      ],
    },
    {
      id: 'social-ads',
      title: 'Social Media Advertising & Video Reach',
      tag: 'Social Media',
      desc: 'With 75% of buyers using social channels in their evaluation cycle, our multi-channel social advertising builds brand authority and generates pipeline across Meta, LinkedIn, Instagram, and YouTube.',
      points: [
        'B2B Account Targeting on LinkedIn & Executive Audiences',
        'Meta & Instagram Shopping Feeds and Conversion Campaigns',
        'YouTube In-Stream Video Ads with Direct Response Tracking',
        'AI Audience Lookalikes & Omni-Channel Retargeting Lists',
      ],
    },
    {
      id: 'reviews',
      title: 'Online Review Acceleration & Reputation',
      tag: 'Reputation Management',
      desc: 'A proactive reputation engine that monitors, accelerates, and responds to reviews across Google, Yelp, and industry portals to turn social proof into a predictable conversion driver.',
      points: [
        'Automated Post-Purchase & Post-Service Review Requests',
        'Multi-Platform Sentiment Tracking & Real-Time Alerts',
        'Professional Response Strategy for Neutral and Critical Reviews',
        'Verified Star Rating Rich Snippets in Search Engine Results',
      ],
    },
  ],
};

export const UX_INTERACTIVES_DATA = {
  eyebrow: 'Human-Centered Digital Craft & Conversion Engineering',
  title: 'UX Interactives, Dynamic Experience Design & Content Systems',
  intro:
    'A great user interface drives an unforgettable user experience. At ARKA Technovation Private Limited, our award-winning design and engineering pods build bespoke, high-converting digital interfaces, personalized content engines, and accessible web experiences.',
  features: [
    {
      id: 'website-design',
      title: 'UX Website Design & Full Redesign',
      desc: 'We craft bespoke, mobile-optimized interfaces that capture your corporate brand identity, reduce bounce rates, and guide visitors smoothly through complex conversion funnels.',
      deliverables: ['User journey mapping', 'Wireframing & interactive prototypes', 'Design systems & UI kits', 'Accessibility & visual audit'],
    },
    {
      id: 'landing-pages',
      title: 'High-Converting Landing Pages & Funnels',
      desc: 'Laser-focused landing pages engineered for paid search and social campaigns. Built for rapid load speeds, psychological visual flow, and maximum lead capture rates.',
      deliverables: ['Custom landing page design', 'A/B testing architecture', 'Mobile-first layout hierarchy', 'Form conversion optimization'],
    },
    {
      id: 'cro',
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Using heatmaps, session replays, and statistical split-testing, we identify and fix friction points in your funnel to increase revenue from existing web traffic.',
      deliverables: ['Friction analysis audit', 'Multivariate test hypotheses', 'Checkout & funnel rebuilds', 'Monthly CRO scorecards'],
    },
    {
      id: 'content-marketing',
      title: 'SEO Copywriting & Content Marketing',
      desc: 'Persuasive, research-backed copywriting that resonates with human buyers while satisfying search engine crawl algorithms. From technical whitepapers to sales copy.',
      deliverables: ['Full content audit', 'SEO copywriting guides', 'Editorial calendar management', 'Tone of voice documentation'],
    },
    {
      id: 'personalized-content',
      title: 'Personalized Web Content & Dynamic Messaging',
      desc: 'Deliver tailored website experiences based on visitor firmographics, referral channels, company size, and on-site behavior in real-time.',
      deliverables: ['Firmographic audience rules', 'Dynamic headline & hero swapping', 'Behavioral trigger workflows', 'Audience engagement telemetry'],
    },
    {
      id: 'infographics',
      title: 'Infographics & Motion Graphics Production',
      desc: 'Transform complex technical concepts, industrial processes, and proprietary data into captivating infographics, 3D animations, and viral visual stories.',
      deliverables: ['Data visualization design', '2D/3D kinetic motion graphics', 'Explainer video assets', 'Social visual packages'],
    },
    {
      id: 'digital-experience',
      title: 'Shopify & Digital Experience Engineering',
      desc: 'Full-stack development across open-source (PHP, MySQL, Node.js) and enterprise frameworks (Next.js, React, Microsoft .NET, Shopify Plus, Magento).',
      deliverables: ['Custom Shopify storefronts', 'Custom headless integrations', 'ERP & payment gateways', 'Speed & security hardening'],
    },
    {
      id: 'ada-compliance',
      title: 'ADA Web Compliance & Accessibility Services',
      desc: 'Ensure barrier-free digital access for all users while maintaining compliance with international WCAG 2.2 and ADA accessibility standards.',
      deliverables: ['Full WCAG 2.2 accessibility audit', 'Keyboard & screen-reader remediation', 'Color contrast validation', 'Compliance certification report'],
    },
  ],
};

export const TECHNOLOGY_PLATFORMS_DATA = {
  eyebrow: 'Enterprise Architecture & Data Science',
  title: 'Our Technology Stack — Accelerating Digital Transformation',
  intro:
    'ARKA Technovation Private Limited develops proprietary software, revenue platforms, and data pipelines that turn raw customer signals into measurable enterprise revenue.',
  platforms: [
    {
      id: 'revenue-platform',
      name: 'Revenue Acceleration Platform',
      tag: 'AI Intelligence',
      desc: 'Our proprietary marketing and sales acceleration engine synthesizes millions of touchpoints to optimize budget allocation, automate pipeline scoring, and forecast revenue.',
      capabilities: [
        'AI-driven predictive deal scoring and pipeline velocity tracking',
        'Automated omni-channel budget shifts toward top-performing campaigns',
        'Direct synchronization with enterprise CRM and ERP platforms',
        'Unified leadership reporting and attribution dashboard',
      ],
    },
    {
      id: 'cdp',
      name: 'Customer Data Platform (CDP)',
      tag: 'Unified Profiles',
      desc: 'A single, persistent database that collects and normalizes customer interactions across web, email, CRM, and offline channels into unified 360-degree buyer profiles.',
      capabilities: [
        'First-party cookie identity resolution and cross-device mapping',
        'Behavioral segmentation based on real-time browsing telemetry',
        'Direct webhook integration into marketing automation engines',
        'Full compliance with global data privacy and encryption standards',
      ],
    },
    {
      id: 'crm-retargeting',
      name: 'CRM Retargeting & Data Warehousing (ETL)',
      tag: 'Data Engineering',
      desc: 'Bridge the gap between offline enterprise data and digital advertising. Push first-party CRM data into high-converting retargeting audiences and build custom data lakes.',
      capabilities: [
        'Automated ETL pipelines connecting CRM, billing, and web analytics',
        'Offline customer purchase history synced to paid search audiences',
        'Custom SQL analytics, data warehouse models, and BI reporting',
        'Automated pipeline hygiene and duplicate record removal',
      ],
    },
    {
      id: 'call-tracking',
      name: 'Web Channel Call Tracking & Attribution',
      tag: 'Telephony Intelligence',
      desc: 'Dynamic Number Insertion (DNI) places unique trackable phone numbers on your website, mapping inbound phone leads directly back to the exact keyword and ad source.',
      capabilities: [
        'Session-level Dynamic Number Insertion across all web channels',
        'VOIP intelligent routing directly to sales department lines',
        'Call recording, AI transcription, and lead quality qualification',
        'Direct revenue attribution for high-value phone transactions',
      ],
    },
    {
      id: 'partner-pipeline',
      name: 'Channel Partner Pipeline Governance',
      tag: 'B2B Distribution',
      desc: 'Multi-tier sales pipeline platform that coordinates leads across distributors, franchisees, and dealer networks with shared performance visibility.',
      capabilities: [
        'Automated lead distribution based on geographical dealer territories',
        'Partner portal with real-time deal registration and pipeline tracking',
        'Shared marketing collateral, co-op campaign asset distribution',
        'Unified national vs regional sales attribution modeling',
      ],
    },
    {
      id: 'marketing-automation',
      name: 'Marketing Automation & Enterprise ABM',
      tag: 'Enterprise Workflows',
      desc: 'End-to-end automation for complex sales cycles. Certified integration and workflow engineering for Salesforce Marketing Cloud, Microsoft Dynamics 365, and HubSpot.',
      capabilities: [
        'Account-Based Marketing (ABM) targeting high-value enterprise accounts',
        'Behavioral drip email sequences triggered by whitepaper downloads',
        'Lead scoring rules combining digital engagement with CRM data',
        'Sales enablement alerts when target enterprise accounts visit your site',
      ],
    },
  ],
  techStack: [
    { cat: 'Front-End & UI', tools: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion'] },
    { cat: 'Back-End & API', tools: ['Node.js', 'Python', 'PHP 8', 'Microsoft .NET', 'PostgreSQL', 'Redis', 'Docker'] },
    { cat: 'Data & Analytics', tools: ['Google Analytics 4', 'BigQuery', 'ETL Pipelines', 'Looker Studio', 'Ahrefs', 'Semrush'] },
    { cat: 'Enterprise SaaS', tools: ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Shopify Plus', 'Magento', 'Tally'] },
  ],
};

export const WHO_WE_ARE_DATA = {
  eyebrow: 'Our Heritage, Team & Working Culture',
  title: 'Who We Are — ARKA Technovation Private Limited',
  intro:
    'Founded and guided by Mr. Kranti Parashar, ARKA Technovation Private Limited is a premier digital product, software engineering, and corporate growth company headquartered in Sector 63, Noida. We build serious software, deploy transformative marketing engines, and produce world-class film media under one roof.',
  methodology: [
    {
      title: 'Zero Outsourcing Philosophy',
      desc: 'Every line of code, every pixel of design, and every second of video is created by our in-house team in Noida. No middle-tier subcontractors, ensuring unbroken accountability and institutional craft.',
    },
    {
      title: 'Agile Two-Week Sprints',
      desc: 'We deliver working software milestones every two weeks. You participate in sprint reviews, test real code on staging servers, and see tangible progress instead of abstract slide decks.',
    },
    {
      title: 'Direct Specialist Access',
      desc: 'Our clients work directly with senior software architects, performance marketers, and creative directors—never junior account coordinators passing messages back and forth.',
    },
    {
      title: 'Truthful Reporting & ROI Governance',
      desc: 'We share the exact same dashboards and telemetry we see internally. Complete transparency on cost-per-acquisition, pipeline generated, and areas targeted for immediate optimization.',
    },
  ],
};
