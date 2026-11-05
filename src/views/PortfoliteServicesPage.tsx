'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  ShieldCheck,
  Zap,
  ArrowRight,
  Search,
  Video,
  Share2,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  MessageSquare,
  ShoppingBag,
  Film,
  Building2,
  ChevronDown,
  PlayCircle,
  TrendingUp,
  Phone,
  Code2,
  Newspaper,
} from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { COMPANY, PROCESS } from '../lib/data';

type CategoryFilter = 'All' | 'Digital Marketing' | 'Software Development' | 'Search Engine Optimization' | 'Film Making' | 'Corporate World News';

interface DisciplineItem {
  id: string;
  aliasIds?: string[];
  category: 'Digital Marketing' | 'Software Development' | 'Search Engine Optimization' | 'Film Making' | 'Corporate World News';
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
  img?: string;
  link?: string;
}

export default function PortfoliteServicesPage() {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState<CategoryFilter>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Digital Marketing',
    'Software Development',
    'Search Engine Optimization',
    'Film Making',
    'Corporate World News',
  ];

  const disciplines: DisciplineItem[] = [
    // ─────────────────────────────────────────────────────────────
    // 1. DIGITAL MARKETING
    // ─────────────────────────────────────────────────────────────
    {
      id: 'social-media-handling-and-promotion',
      aliasIds: ['social-media-handling'],
      category: 'Digital Marketing',
      tag: 'Social Media & SMO',
      title: 'Social Media Handling and promotion',
      subtitle: 'Strategic SMO, demographic Facebook & Meta advertising, and multi-channel authority',
      desc: 'In the current business scenario, social media plays a pivotal role in promoting and handling business growth. Strategic Social Media Optimization (SMO) improves the online visibility and reach of your brand through planned distribution rather than sporadic updates. Our targeted Facebook and Instagram ad campaigns pinpoint exact geographic and demographic parameters, driving higher engagement and qualified inbound leads at a lower cost of acquisition.',
      highlights: [
        'Strategic Social Media Optimization (SMO) across Meta, LinkedIn, Instagram, and X',
        'Targeted Facebook and Instagram advertising with precise geographic and demographic parameters',
        'Consistent brand voice development, editorial planning, and creative asset production',
        'Community handling, rapid reputation response, and customer conversion funnels',
      ],
      metric: 'Enterprise',
      metricLabel: 'Social Architecture',
      link: '/services/social-media-handling',
    },
    {
      id: 'ecommerce-seo-and-ppc-services',
      aliasIds: ['ecommerce-seo-ppc'],
      category: 'Digital Marketing',
      tag: 'Ecommerce Performance',
      title: 'Ecommerce SEO and PPC Services',
      subtitle: 'Accelerated Mobile Pages (AMP), personalized shopping, and visual image search',
      desc: 'The e-commerce search and paid advertising landscape is constantly evolving. Modern online retail requires three essential technological advantages: Accelerated Mobile Pages (AMP) for sub-second mobile loading prioritized by Google, Personalized Shopping Experiences with tailored recommendations and automated support, and Visual Search integration that allows shoppers to search your catalog using smartphone photos rather than typed keywords.',
      highlights: [
        'AMP (Accelerated Mobile Pages) open-source framework implementation for lightning mobile checkout',
        'Personalized shopping experiences with automated recommendation engines and chatbot support',
        'Visual search optimization allowing customer image search directly into product catalogs',
        'Google Shopping / PLA (Product Listing Ads) optimization with live pricing and review badges',
      ],
      metric: 'Accelerated',
      metricLabel: 'Checkout Framework',
      link: '/services/ecommerce-seo-ppc',
    },
    {
      id: 'ecomerce_social_media_advertising',
      aliasIds: ['ecommerce-social-ads', 'ecommerce-social-media-advertising'],
      category: 'Digital Marketing',
      tag: 'Paid Social Funnels',
      title: 'Ecommerce Social Media Advertising',
      subtitle: 'High-intent catalog ads connecting search demand with social targeting and dynamic product feeds',
      desc: 'E-commerce social media advertising is a powerful way to reach prospective customers and promote your brand or products. Marrying e-commerce search engine marketing with paid social campaigns creates a high-velocity customer acquisition loop. Search marketing captures existing intent when customers look for your products, while targeted social advertising introduces your catalog to high-probability buyers with dynamic product ads.',
      highlights: [
        'Dynamic Product Ads (DPA) synced with real-time inventory and pricing catalogs',
        'Omni-channel retargeting sequences re-engaging shoppers who viewed specific SKUs',
        'Creative split-testing of video hooks, carousel cards, and offer architectures',
        'Direct integration with Shopify Plus, Magento, WooCommerce, and custom checkouts',
      ],
      metric: 'Full-Funnel',
      metricLabel: 'Attribution Tracking',
      link: '/services/ecommerce-social-ads',
    },
    {
      id: 'email_sms_whatsapp_marketing',
      aliasIds: ['email-sms-whatsapp', 'email-sms-and-whatsapp-marketing'],
      category: 'Digital Marketing',
      tag: 'Direct Messaging',
      title: 'Email & SMS and WhatsApp Marketing',
      subtitle: 'Permission-based text marketing, high-open rate WhatsApp automation, and lifecycle retention workflows',
      desc: 'SMS marketing and WhatsApp marketing are two popular text-based communication options for modern businesses. With 98% open rates and immediate mobile delivery, automated WhatsApp notifications and targeted SMS campaigns re-activate inactive buyers and drive repeat orders. Combined with intelligent lifecycle email newsletters, we build automated retention workflows that generate predictable recurring revenue.',
      highlights: [
        'Official WhatsApp Business API integration with automated order updates and support flows',
        'Permission-based SMS broadcasts with high-speed delivery gateways and link tracking',
        'Automated lifecycle email journeys for welcome sequences, abandoned carts, and re-orders',
        'Rigorous list hygiene, unsubscribe compliance, and customer segmentation by purchase history',
      ],
      metric: 'Verified',
      metricLabel: 'Official Business API',
      link: '/services/email-sms-whatsapp',
    },
    {
      id: 'google_social_media_ads_compaign',
      aliasIds: ['google-social-ads', 'google-social-media-ads-campaign'],
      category: 'Digital Marketing',
      tag: 'Multi-Channel Media',
      title: 'Google & Social Media Ads Campaign',
      subtitle: 'Search intent capture paired with demographic social awareness for maximum market share',
      desc: 'Our campaigns are built around the truth that your company is not just a business, but an industry authority. Potential clients search for your services every day on Google, while spending hours discovering brands on social feeds. Our media specialists design coordinated campaigns that capture active search intent on Google Ads while building undeniable familiarity on Meta and LinkedIn, driving down cost per lead across the entire funnel.',
      highlights: [
        'Google Search, Display, and Performance Max (PMax) campaign management',
        'Cross-platform demographic targeting matching ideal customer profiles (ICPs)',
        'Click fraud filtering, negative keyword management, and bid automation',
        'End-to-end multi-touch attribution connecting clicks to bottom-line closed revenue',
      ],
      metric: 'Dedicated',
      metricLabel: 'Specialist Craft Pod',
      link: '/services/google-social-ads',
    },

    // ─────────────────────────────────────────────────────────────
    // 2. SOFTWARE DEVELOPMENT
    // ─────────────────────────────────────────────────────────────
    {
      id: 'crm_software',
      aliasIds: ['custom-crm-software', 'crm-software'],
      category: 'Software Development',
      tag: 'Cloud CRM',
      title: 'CRM Software',
      subtitle: 'Unified sales, marketing, and customer support with 1-to-1 personalized journeys',
      desc: 'CRM software connects your different departments, from marketing to sales to customer service, and organizes notes, deals, phone logs, and metrics into one cohesive system. Built on modern cloud and SaaS architectures, our custom CRM software gives your team direct real-time client data from any device. We eliminate legacy analog spreadsheets and deliver personalized one-to-one customer journeys that scale infinitely with your business.',
      highlights: [
        'Departmental synchronization: Marketing lead capture, sales pipelines, and support tickets in one hub',
        'Cloud-native SaaS architecture accessible via secure web and mobile applications anywhere',
        'Custom role-based permissions, automated approval hierarchies, and pipeline deal scoring',
        'Seamless integration with WhatsApp API, email servers, VoIP call tracking, and accounting tools',
      ],
      metric: 'Zero-License',
      metricLabel: 'Full Source Code Handover',
      link: '/services/crm-software',
    },
    {
      id: 'erp_solution',
      aliasIds: ['erp-enterprise-solutions', 'erp-solution'],
      category: 'Software Development',
      tag: 'Enterprise ERP',
      title: 'ERP Solution',
      subtitle: 'Centralizing finance, HR, global supply chain, and inventory management',
      desc: 'Enterprise Resource Planning or ERP is software meant to manage and integrate core business processes: finance, human resources, supply chain logistics, procurement, and warehouse inventory in a single system. In an increasingly complex global economy, streamlining operations and accessing accurate unified data is mission-critical. Our custom ERP engineering replaces fragmented departmental software with one reliable source of truth.',
      highlights: [
        'End-to-end supply chain tracking, purchase order workflows, and real-time inventory management',
        'Integrated financial ledger, automated invoicing, multi-currency accounting, and tax compliance',
        'HR management modules covering payroll, attendance tracking, and performance scorecards',
        'Custom executive reporting dashboards delivering real-time operational health metrics',
      ],
      metric: 'Unified',
      metricLabel: 'ERP Ledger Architecture',
      link: '/services/erp-solution',
    },
    {
      id: 'website_development',
      aliasIds: ['website-development'],
      category: 'Software Development',
      tag: 'Full-Stack Web',
      title: 'Website Development',
      subtitle: 'Systematic technical engineering using Next.js, React, Node.js, PHP, and Microsoft .NET',
      desc: 'We build high-throughput corporate websites, customer portals, and enterprise web applications engineered for speed, security, and scalability. Our engineering pods develop on modern open-source frameworks (Next.js 15, TypeScript, Node.js, Python, PostgreSQL) and enterprise platforms with clean code standards and full IP handover.',
      highlights: [
        'Modern frontend engineering with Next.js 15, React, TypeScript, and Tailwind CSS',
        'Robust backend architectures across Node.js, Python, PHP, and Microsoft ASP.NET',
        'Database design, indexing, and query optimization on PostgreSQL, MySQL, and Redis',
        'Full REST and GraphQL API development for headless architectures and microservices',
      ],
      metric: 'High-Throughput',
      metricLabel: 'Next.js 15 Web Systems',
      link: '/services/website-development',
    },
    {
      id: 'lead_management_system',
      aliasIds: ['lead-management-system', 'lms-solutions'],
      category: 'Software Development',
      tag: 'LMS Solutions',
      title: 'Lead Management System',
      subtitle: 'Automated lead ingestion, intelligent scoring, routing, and institutional learning platforms',
      desc: 'Our LMS platforms fulfill dual enterprise requirements: high-velocity lead distribution systems that capture, validate, and route sales leads in real time, and enterprise Learning Management Systems for corporate training and certification. We build software that manages administration, tracking, automated reporting, and delivery of training modules to thousands of concurrent users across web and mobile devices.',
      highlights: [
        'Instant multi-channel lead ingestion from website forms, Google Ads, Meta, and phone calls',
        'Algorithmic lead scoring and automated round-robin routing to regional sales executives',
        'Comprehensive corporate learning module management with interactive video lessons and testing',
        'Automated progress tracking, compliance certification, and detailed performance telemetry',
      ],
      metric: 'Instant',
      metricLabel: 'Multi-Channel Ingestion',
      link: '/services/lead-management-system',
    },
    {
      id: 'mobile_application',
      aliasIds: ['mobile-applications', 'mobile-application'],
      category: 'Software Development',
      tag: 'iOS & Android',
      title: 'Mobile Application',
      subtitle: 'Native and hybrid mobile apps leveraging cloud backends and device hardware',
      desc: 'Mobile applications allow your enterprise to leverage native device capabilities: push notifications, offline data synchronization, biometric authentication, and camera scanning. We engineer performant, intuitive mobile applications for iOS and Android built on React Native, Swift, and Kotlin.',
      highlights: [
        'Cross-platform React Native and native Swift / Kotlin mobile app engineering',
        'Real-time cloud database synchronization and offline-first operational capability',
        'Biometric authentication, secure payment gateway integrations, and instant push notifications',
        'App Store and Google Play Store deployment, review compliance, and ongoing maintenance retainers',
      ],
      metric: 'Native',
      metricLabel: 'iOS & Android Architecture',
      link: '/services/mobile-application',
    },

    // ─────────────────────────────────────────────────────────────
    // 3. SEARCH ENGINE OPTIMIZATION
    // ─────────────────────────────────────────────────────────────
    {
      id: 'google-seo-services',
      aliasIds: ['google-seo'],
      category: 'Search Engine Optimization',
      tag: 'Google Search Dominance',
      title: 'Google SEO Services',
      subtitle: 'Algorithmic alignment with Google search standards to capture high-intent commercial traffic',
      desc: 'Over 90% of global searches occur on Google. Our Google SEO frameworks align your website with search engine crawling algorithms through technical architecture revamps, semantic entity schema, high-intent keyword clustering, and white-hat editorial authority—placing your enterprise firmly on Page One.',
      highlights: [
        'Comprehensive keyword intent mapping focusing on high-converting transactional queries',
        'Entity-based semantic optimization and structured schema markup for Google rich snippets',
        'Crawl budget optimization, canonicalization, and indexation management across large domains',
        'Continuous algorithmic tracking against Google Core, Helpful Content, and Spam updates',
      ],
      metric: 'White-Hat',
      metricLabel: 'Algorithmic Search Standards',
      link: '/services/google-seo',
    },
    {
      id: 'search-engine-marketing',
      aliasIds: ['sem', 'paid-search-sem'],
      category: 'Search Engine Optimization',
      tag: 'Paid Search (SEM)',
      title: 'Search Engine Marketing',
      subtitle: 'Keyword bidding, visual Product Listing Ads (PLAs), and high-intent paid conversion',
      desc: 'Search engine marketing places your commercial offerings at the top of search result pages at the exact moment buyers search for solutions. We bid strategically on high-converting queries across Google and Bing, pairing text ads, call-only formats, and Google Shopping Product Listing Ads (PLAs) with fast-loading landing pages.',
      highlights: [
        'Strategic keyword bidding and query management with real-time automated bid adjustments',
        'Google Shopping / PLA management with rich product reviews, shipping annotations, and badges',
        'High-converting landing page development engineered for Quality Score optimization',
        'Transparent budget reporting tracking Cost Per Click (CPC) and Return on Ad Spend (ROAS)',
      ],
      metric: 'High-Intent',
      metricLabel: 'Commercial Query Bidding',
      link: '/services/search-engine-marketing',
    },
    {
      id: 'on-page-seo',
      aliasIds: ['on-off-page-seo', 'on-page-and-off-page-seo'],
      category: 'Search Engine Optimization',
      tag: 'Technical Health',
      title: 'On Page & OFF Page SEO',
      subtitle: 'HTML tags, page speed delight, high-authority backlink building, and technical crawl health',
      desc: 'There are two elements of a good search engine optimization strategy: on-page and off-page SEO. On-page SEO ensures your website is crawlable, understandable, and delightful for human visitors—from optimized HTML headings, meta tags, and URL hierarchies to sub-second load times. Off-page SEO builds the undeniable external authority of your domain through high-quality editorial backlinks, brand mentions, and digital PR that establish lasting search engine trust.',
      highlights: [
        'Meticulous on-page optimization: Title tags, meta descriptions, alt attributes, and clean semantic markup',
        'High-quality authority backlink acquisition through ethical digital PR and guest editorial placements',
        'Complete technical setup: Robots.txt creation, XML sitemap generation, and schema.org integration',
        'Internal link architecture and topical cluster modeling to channel link equity to priority URLs',
      ],
      metric: 'Clean Code',
      metricLabel: 'Semantic Crawl Health',
      link: '/services/on-page-seo',
    },
    {
      id: 'ecommerce-seo',
      aliasIds: ['e-commerce-seo', 'ecommerce-seo-architecture'],
      category: 'Search Engine Optimization',
      tag: 'E-Commerce Authority',
      title: 'E-Commerce SEO',
      subtitle: 'Product taxonomy structuring, category page authority, rich product schema & shopping visibility',
      desc: 'E-commerce SEO is crucial to marketing success. It refers to methodically organizing website pages, architecture, and addresses so search engine bots can easily crawl and index every SKU in your store. When online shoppers search for specific brands, specifications, or product categories, e-commerce SEO ensures your product pages outrank marketplaces and competitors, driving direct organic sales without paying third-party commissions.',
      highlights: [
        'Product page optimization: Unique title tags, keyword-rich product copy, and high-resolution media',
        'Category page architecture and breadcrumb hierarchy channeling authority to individual SKUs',
        'Product, Offer, AggregateRating, and InStock Schema.org JSON-LD structured data',
        'Faceted navigation indexing controls preventing duplicate content penalties on filter combinations',
      ],
      metric: 'Structured',
      metricLabel: 'Catalog Indexation',
      link: '/services/ecommerce-seo',
    },
    {
      id: 'local-seo',
      aliasIds: ['local-seo-services', 'local-seo-dominance'],
      category: 'Search Engine Optimization',
      tag: 'Local Citations',
      title: 'Local SEO',
      subtitle: 'Dominating Google Maps 3-Pack and capturing the 46% of searches with local intent',
      desc: 'Local SEO plays a significant role in any business that wants to bring in more clients from an area or areas of preference. With the vast majority of commercial inquiries carrying local procurement intent, local search visibility is a primary revenue engine. We optimize your Google Business Profile (GBP), manage localized citations across 70+ business directories, and implement local schema so your business dominates the Google 3-pack.',
      highlights: [
        'Complete Google Business Profile (GBP) audit, claim verification, and weekly optimization',
        'Consistent NAP (Name, Address, Phone) citations across Google, Bing, Justdial, and industry directories',
        'Localized keyword targeting for city, suburb, and industrial territory search queries',
        'Proactive review generation and reputation monitoring to build verified local social proof',
      ],
      metric: 'Verified',
      metricLabel: 'Local Citations Authority',
      link: '/services/local-seo',
    },

    // ─────────────────────────────────────────────────────────────
    // 4. FILM MAKING
    // ─────────────────────────────────────────────────────────────
    {
      id: 'commercial_presentation_video',
      aliasIds: ['corporate-presentation-videos', 'corporate-films-docs'],
      category: 'Film Making',
      tag: 'Brand Cinema',
      title: 'Corporate Presentation Videos',
      subtitle: 'Cinematic corporate storytelling, leadership vision, and company presentation films',
      desc: 'A corporate presentation film communicates your enterprise scale, mission, and operational capabilities to investors, partners, and high-value buyers. Operating our own cinema packages and soundstage in Sector 63, Noida, our full-time crew writes, shoots, and edits broadcast-grade corporate documentaries and brand films.',
      highlights: [
        'Full in-house production crew: Scriptwriter, director, cinematographer, sound engineer, and editor',
        'Shot on high-end 4K/8K cinema camera systems with professional drone aerial cinematography',
        'Executive leadership interviews and facility tours highlighting operational scale',
        'Turnkey post-production: Editing, DaVinci color grading, licensed original score, and motion titles',
      ],
      metric: 'Broadcast',
      metricLabel: '4K/8K Cinema Master',
      link: '/services/commercial-presentation-video',
    },
    {
      id: 'tv_ads',
      aliasIds: ['tv-commercial-ads', 'tv-commercials-analysis'],
      category: 'Film Making',
      tag: 'TVCs & Video Ads',
      title: 'TV Commercial Ads',
      subtitle: 'Broadcast-quality TV commercials paired with multi-touch attribution and data analytics',
      desc: 'We write, direct, and produce broadcast-standard television commercials and digital ad films. Furthermore, our data analytics connect broadcast airtimes directly to concurrent spikes in Google search volume, website traffic, and qualified lead inquiries.',
      highlights: [
        'Concept development, storyboard creation, cast auditioning, and location permits handled in-house',
        'Cinema-grade lighting, multi-cam shooting, and sound design meeting national broadcast specs',
        'Data-driven broadcast analysis mapping ad airtimes to organic search and website conversion spikes',
        'Optimized aspect ratio cut-downs (16:9, 9:16 vertical, 1:1) for YouTube, Instagram Reels, and Meta',
      ],
      metric: 'National Standard',
      metricLabel: 'Broadcast Airing Clearance',
      link: '/services/tv-ads',
    },
    {
      id: 'products_demo_videos',
      aliasIds: ['product-demo-videos', 'product-or-service-demo-videos'],
      category: 'Film Making',
      tag: 'Conversion Video',
      title: 'Product & Service Demo Videos',
      subtitle: 'Showcasing product USPs on camera to provide prospective buyers with clear technical conviction',
      desc: 'Demonstrating physical machinery or software interfaces in action dramatically accelerates buying decisions. Prospective enterprise buyers gain immediate technical conviction from watching clear product workflows in action. We produce clear, benefit-driven product demonstration videos that showcase engineering craftsmanship and software workflows with studio lighting and high-resolution camera setups.',
      highlights: [
        'Studio lighting and macro lens capture of physical machinery, industrial components, and consumer products',
        'Slick screen-capture animation and UI walkthroughs for SaaS platforms and software workflows',
        'Clear, benefit-driven scriptwriting highlighting competitive differentiators and real-world results',
        'Optimized video cut-downs tailored for landing pages, trade show displays, and sales reps',
      ],
      metric: 'Studio Macro',
      metricLabel: 'Turntable Photography',
      link: '/services/products-demo-videos',
    },
    {
      id: 'product_explantory',
      aliasIds: ['product-explanatory-videos', 'explainer-videos'],
      category: 'Film Making',
      tag: 'Explainer Animations',
      title: 'Product Explainer Videos',
      subtitle: 'Short, engaging marketing videos maximizing landing page conversion clarity and viewer engagement',
      desc: 'Explainer videos distill complex enterprise software and industrial workflows into concise 60-to-90-second narratives that lift landing page conversion rates by up to 144%. We blend live-action cinematography with 2D/3D motion graphics and professional studio voiceover to explain your commercial value proposition with speed and clarity.',
      highlights: [
        'Psychological script architecture designed to hook attention in the first five seconds',
        'Hybrid animation combining live footage with 2D motion graphics and 3D kinetic typography',
        'Professional studio voiceover recorded in multiple languages for domestic and international markets',
        'Engineered for maximum retention and rapid comprehension on mobile screens',
      ],
      metric: 'High-Retention',
      metricLabel: 'Narrative Storytelling',
      link: '/services/product-explanatory',
    },
    {
      id: 'customer_testimonial',
      aliasIds: ['customer-testimonial-videos', 'customer-testimonials'],
      category: 'Film Making',
      tag: 'Authentic Proof',
      title: 'Customer Testimonial Videos',
      subtitle: 'Supercharging word-of-mouth social proof to boost website conversions by 34% or more',
      desc: 'Video testimonials provide authentic, third-party social proof that builds executive buyer confidence and builds executive buyer conviction and expedites procurement sign-offs. We film on-location interviews with your satisfied enterprise clients, capturing real-world business results and documented ROI that give prospective buyers the confidence to commit.',
      highlights: [
        'On-location filming of real client advocates, capturing unscripted, credible enterprise success stories',
        'Multi-camera coverage of corporate conferences, exhibitions, panel discussions, and keynotes',
        'Fast same-week turnaround for social media event highlight videos and press releases',
        'High-definition audio capture ensuring crystal-clear executive and client sound bites',
      ],
      metric: 'Documented',
      metricLabel: 'Enterprise Case Studies',
      link: '/services/customer-testimonial',
    },

    // ─────────────────────────────────────────────────────────────
    // 5. CORPORATE WORLD NEWS
    // ─────────────────────────────────────────────────────────────
    {
      id: 'corporate-world-news-editorial',
      aliasIds: ['corporate-world-news', 'cwn-news'],
      category: 'Corporate World News',
      tag: 'Corporate Journalism',
      title: 'Corporate World News & Verified Reporting',
      subtitle: 'Authoritative corporate journalism, investigative industry features & executive masthead publications',
      desc: 'Corporate authority in modern markets requires verified empirical data, executive conviction, and direct journalistic relationships. Produced by our dedicated newsroom pod in Sector 63, Noida, we research industry verticals, publish verified press updates, and broadcast executive perspectives to institutional analysts, investors, and enterprise decision-makers.',
      highlights: [
        'In-depth corporate journalism covering enterprise technology, AI milestones, and leadership transitions',
        'Editorial governance compliant with international press standards and factual verification',
        'Executive thought leadership features and founder op-eds published across leading business portals',
        'Permanent digital publication dossiers and archival citations indexed across search engines',
      ],
      metric: 'In-House',
      metricLabel: 'Noida Soundstage Studio',
      img: '/images/disciplines/discipline-05-corporate-world-news.jpg',
      link: '/corporate-world-news',
    },
    {
      id: 'interview-press-releases',
      aliasIds: ['press-releases', 'executive-interviews'],
      category: 'Corporate World News',
      tag: 'Wire Syndication',
      title: 'Interview & Press Releases',
      subtitle: 'Multi-camera 4K broadcast studio recordings with AP-compliant Tier-1 media wire syndication',
      desc: 'Broadcast-grade multi-camera 4K studio recordings, executive podcasts, and authoritative corporate press releases that command journalistic attention with verified Tier-1 financial media syndication across Bloomberg, Reuters, PTI, and business dailies.',
      highlights: [
        'Multi-camera 4K cinematic recordings at our Noida soundstage with prime lenses and teleprompters',
        'Direct pitch syndication to Tier-1 financial dailies, tech publications, and trade magazines',
        'Full post-production: audio mastering, motion lower-thirds, and b-roll packaging',
        'Official media room setup, embargo scheduling, and press distribution telemetry',
      ],
      metric: 'Tier-1',
      metricLabel: 'Financial Wire Syndication',
      img: '/images/blogs/blog-08-executive-broadcast-news.webp',
      link: '/services/interview-press-releases',
    },
    {
      id: 'corporate-news-ma',
      aliasIds: ['corporate-news', 'mergers-acquisitions'],
      category: 'Corporate World News',
      tag: 'Enterprise Updates',
      title: 'Corporate News & M&A Announcements',
      subtitle: 'Real-time coverage of enterprise milestones, mergers & acquisitions, and leadership transitions',
      desc: 'Breaking enterprise news coverage, merger & acquisition announcements, strategic joint ventures, leadership transitions, and capital expenditure reporting delivered with journalistic precision.',
      highlights: [
        'Breaking corporate news distribution and formal announcement structuring',
        'M&A transaction breakdowns and post-merger integration announcements',
        'Leadership appointment profiles and corporate governance notifications',
        'Direct liaison with news desks to ensure accurate media syndication',
      ],
      metric: 'Continuous',
      metricLabel: 'Newsroom Monitoring SLA',
      img: '/images/services/ux/website-design.webp',
      link: '/services/corporate-news-ma',
    },
    {
      id: 'market-update-briefs',
      aliasIds: ['market-update', 'economic-briefs'],
      category: 'Corporate World News',
      tag: 'Business Intelligence',
      title: 'Market Update & Macroeconomic Tracking',
      subtitle: 'Daily curated executive briefing notes, regulatory policy shifts & sector outlooks',
      desc: 'Continuous tracking of regulatory shifts, ministry compliance updates, economic indicators, commodity trends, and technology deployments across emerging enterprise markets, delivering strategic decision-makers with actionable operational intelligence.',
      highlights: [
        'Daily curated executive briefing notes and regulatory digests',
        'Earnings report breakdowns and capital expenditure tracking',
        'Macroeconomic indicator alerts for commercial decision-makers',
        'Sector-specific quarterly trend retrospectives and economic outlooks',
      ],
      metric: 'Curated',
      metricLabel: 'Executive Sector Briefings',
      img: '/images/products/grid-08-kestrix-thermal.webp',
      link: '/services/market-update-briefs',
    },
    {
      id: 'industries-analysis-reports',
      aliasIds: ['industries-analysis', 'vertical-research'],
      category: 'Corporate World News',
      tag: 'Sector Deep-Dives',
      title: 'Industries Analysis & Valuation Benchmarks',
      subtitle: 'Deep-dive vertical market research dossiers, technology adoption curves & supply chain telemetry',
      desc: 'Deep-dive vertical research dossiers built on primary surveys, customs data, supply chain metrics, and economic modeling, providing actionable competitive intelligence for enterprise leadership and boardrooms.',
      highlights: [
        'Vertical TAM/SAM sizing and market share migration analysis',
        'Competitor feature matrices, pricing teardowns, and tech stack audits',
        'Supply chain vulnerability reports and vendor dependency benchmarks',
        'Custom research whitepapers published under your brand or co-authored',
      ],
      metric: 'Empirical',
      metricLabel: 'Methodological Rigor',
      img: '/images/industries/industries-manufacturing.webp',
      link: '/services/industries-analysis-reports',
    },
    {
      id: 'market-research-tam',
      aliasIds: ['market-research', 'tam-studies'],
      category: 'Corporate World News',
      tag: 'Empirical Research',
      title: 'Market Research & Feasibility Studies',
      subtitle: 'Rigorous empirical market research, customer sentiment benchmarking & TAM feasibility studies',
      desc: 'Rigorous empirical market research, customer sentiment benchmarking, Total Addressable Market (TAM) feasibility studies, and competitor positioning matrices.',
      highlights: [
        'Primary market research with surveyed customer and enterprise decision-maker cohorts',
        'Total Addressable Market (TAM), SAM, and SOM financial feasibility studies',
        'Brand perception audits and customer satisfaction (CSAT/NPS) benchmarks',
        'Executive board presentation slide decks backed by verified empirical datasets',
      ],
      metric: 'Primary',
      metricLabel: 'Survey & Market Research',
      img: '/images/products/grid-05-plant-seo.webp',
      link: '/services/market-research-tam',
    },
  ];

  const filteredDisciplines =
    selectedCat === 'All'
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCat);

  const capabilities = [
    {
      domain: 'Engineering & Cloud',
      icon: Cpu,
      stack: ['Next.js 15 & React', 'Node.js & Python', 'PostgreSQL & Redis', 'Docker & AWS', 'GraphQL & REST APIs', 'Microservices'],
    },
    {
      domain: 'Search & Attribution',
      icon: Zap,
      stack: ['Technical Crawl Audits', 'Entity & Semantic Schema', 'Dynamic Call Tracking', 'Multi-Touch Attribution', 'Negative Keyword Libraries', 'Local Search Cluster'],
    },
    {
      domain: 'Design & Visual Craft',
      icon: Layers,
      stack: ['Design Tokens & Systems', 'Figma Prototyping', '4K Cinema Workflows', 'DaVinci Color Grading', 'Interactive WebGL', 'Accessible Typography'],
    },
    {
      domain: 'Governance & Security',
      icon: ShieldCheck,
      stack: ['Role-Based Access Control', 'SSL / TLS Hardening', 'Automated Daily Backups', 'Audit Trails & Logs', 'GDPR / DPDP Compliance', '24/7 SLA Guarantee'],
    },
  ];

  const faqs = [
    {
      q: 'Why do enterprise clients choose your in-house engineering and media model?',
      a: 'Unlike traditional agencies that outsource technical execution to third parties or rely on cookie-cutter templates, we house software engineers, technical SEO architects, cinematographers, and performance marketing strategists under one roof at our corporate headquarters in Sector 63, Noida. This unified model ensures unbroken accountability, direct communication with craft leads, complete source code ownership, and guaranteed deliverables.',
    },
    {
      q: 'How do you structure custom CRM and ERP development projects?',
      a: 'We follow a structured 6-stage lifecycle: Discovery & Process Mapping, Architecture & Database Design, Agile Two-Week Sprint Development, Integration with external systems (Tally, WhatsApp API, payment gateways), User Acceptance Testing (UAT), and full source code handover with team training. Staged milestone deliverables ensure working software at every step.',
    },
    {
      q: 'What is the typical turnaround time for corporate film and video production?',
      a: 'Depending on the scale and complexity, a high-impact corporate film or product demo video typically takes 3 to 5 weeks from initial script sign-off through location shooting, editing, DaVinci color grading, sound design, and final broadcast delivery. Rapid social video cut-downs and event coverage can be delivered in as little as 48 to 72 hours.',
    },
    {
      q: 'How long does it take to achieve page-one Google rankings with your SEO services?',
      a: 'Technical crawl fixes, schema implementation, and Core Web Vitals speed improvements show indexation gains within 30 to 45 days. High-volume competitive commercial keywords typically achieve page-one rankings within 3 to 6 months through consistent topic cluster publishing and authoritative digital PR backlink acquisition.',
    },
    {
      q: 'Can your team integrate with our existing enterprise IT infrastructure and third-party tools?',
      a: 'Yes. Our developers possess extensive experience integrating custom web portals, CRMs, and ERP systems with third-party APIs including Salesforce, Microsoft Dynamics 365, SAP, Tally, Zoho, RingCentral, Twilio, WhatsApp Business API, and all leading payment gateways.',
    },
    {
      q: 'Do you offer ongoing website maintenance and 24/7 technical support retainers?',
      a: 'Yes. We offer comprehensive web infrastructure and maintenance retainers backed by strict Service Level Agreements (SLAs). Our support packages include 24/7 uptime monitoring, automated weekly cloud backups, security patch application, Core Web Vitals speed audits, and dedicated engineering support hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              Comprehensive Capabilities Engineered for Enterprise Scale.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              In the rapidly evolving digital landscape, staying ahead requires constant innovation. {COMPANY.name} stands at the forefront of digital trends—integrating AI in advertising, high-throughput software architectures, page-one search engine dominance, and broadcast cinema production under one roof in Sector 63, Noida.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with Practice Lead</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs Segmented Dock with Spring Physics Animation ── */}
      <section className="py-2 border-b border-black/5 bg-white/90 sticky top-[64px] sm:top-[78px] z-30 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none py-0.5">
          <div className="segmented-dock inline-flex items-center gap-1 p-1 rounded-full bg-zinc-100/90 border border-black/8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)] relative shrink-0">
            {[
              { label: 'All', icon: Layers },
              { label: 'Digital Marketing', icon: Share2 },
              { label: 'Software Development', icon: Code2 },
              { label: 'Search Engine Optimization', icon: Search },
              { label: 'Film Making', icon: Film },
              { label: 'Corporate World News', icon: Newspaper },
            ].map(({ label, icon: Icon }) => {
              const count = label === 'All' ? disciplines.length : disciplines.filter((d) => d.category === label).length;
              const active = selectedCat === label;
              return (
                <motion.button
                  key={label}
                  onClick={() => setSelectedCat(label as CategoryFilter)}
                  whileTap={{ scale: 0.96 }}
                  data-dock-btn
                  className="segmented-dock-btn group relative shrink-0 pl-3 pr-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none select-none cursor-pointer"
                >
                  {/* Sliding active background pill */}
                  {active && (
                    <motion.div
                      layoutId="servicesTabActiveIndicator"
                      className="absolute inset-0 bg-black rounded-full shadow-sm shadow-black/20"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Tab Icon */}
                  <Icon
                    className={`relative z-10 w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                      active ? 'text-white' : 'text-zinc-500 group-hover:text-black'
                    }`}
                  />

                  {/* Tab Label */}
                  <span
                    className={`relative z-10 font-semibold tracking-tight transition-colors duration-200 text-xs sm:text-[13px] ${
                      active ? 'text-white' : 'text-zinc-600 group-hover:text-black'
                    }`}
                  >
                    {label}
                  </span>

                  {/* Tab Count Pill */}
                  <span
                    className={`relative z-10 px-1.5 py-0.2 min-w-[18px] rounded-full text-[10px] font-mono tracking-tight font-bold shrink-0 transition-colors duration-200 inline-flex items-center justify-center ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-black/5 text-zinc-500 group-hover:bg-black/10 group-hover:text-black'
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Detailed Services & Capabilities (20 Offerings in Alternating Editorial Layout) ── */}
      <section id="services-grid" className="scroll-mt-36 py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Service Catalog &amp; Enterprise Disciplines
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3 font-display text-balance">
            Digital Marketing, Software Engineering &amp; Cinema Production
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light text-pretty">
            Explore all 20 specialized service disciplines engineered in-house at our Sector 63, Noida corporate headquarters. Filter by discipline above to review technical scope, deliverables, and performance benchmarks.
          </p>
        </div>

        <motion.div layout className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredDisciplines.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  id={item.id}
                  onClick={() => {
                    if (item.link) {
                      router.push(item.link);
                    }
                  }}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (item.link) {
                        router.push(item.link);
                      }
                    }
                  }}
                  className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative cursor-pointer`}
                >
                  {/* Alias anchors for deep linking */}
                  {item.aliasIds?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-36 left-0" aria-hidden="true" />
                  ))}

                  {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                  <div className="w-full h-56 sm:h-72 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100 self-stretch">
                    <img
                      src={item.img || `/images/services/catalog/${item.id}.webp?v=2`}
                      alt={`${item.title} — ARKA Technovation`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-300 pointer-events-none" />
                  </div>

                  {/* ── Context & Deliverables Panel: Compact mobile spacing, expansive desktop typography ── */}
                  <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300 flex-1">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black group-hover:text-solar tracking-tight leading-snug font-display text-balance transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Punchy Subtitle */}
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {item.subtitle}
                      </p>

                      {/* Editorial Context Description */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty line-clamp-3 sm:line-clamp-none">
                        {item.desc}
                      </p>

                      {/* Deliverables & Technical Capabilities Grid */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                          Deliverables &amp; Technical Capabilities:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {item.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      {item.metric ? (
                        <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 text-zinc-700 font-bold border border-black/5 w-fit">
                          {item.metric} {item.metricLabel}
                        </span>
                      ) : <div />}

                      <div className="flex flex-wrap items-center gap-2">
                        {item.link && (
                          <span
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-black/15 text-xs font-semibold group-hover:border-black group-hover:bg-black group-hover:text-white transition-all shadow-sm"
                          >
                            <span>Explore Discipline</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        )}
                        <Link
                          to="/contact"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm active:scale-[0.97] w-full sm:w-auto relative z-10"
                          style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                        >
                          <span>Request Custom Strategy</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Capabilities & Engineering Stack Matrix ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
                Tech Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Under the hood of every build.
              </h2>
            </div>
            <p className="text-zinc-600 text-sm font-light max-w-md leading-relaxed">
              We never outsource core engineering or use fragile, unmaintainable templates. Every deliverable runs on verified production-tested architecture.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.domain}
                  className="p-6 rounded-2xl bg-white border border-black/8 hover:border-black/20 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-solar mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-black mb-3">{cap.domain}</h3>
                    <ul className="space-y-1.5">
                      {cap.stack.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-600 font-mono flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-light">
            Everything you need to know about our engineering standards, turnaround times, and billing transparency.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-black/10 rounded-2xl overflow-hidden bg-zinc-50/50 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-black hover:text-solar transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-solar' : 'text-zinc-400'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed font-light border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer CTA Banner ── */}
      <section className="py-20 bg-zinc-950 text-white border-t border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold text-center">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 max-w-3xl !mx-auto text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to engineer sustainable digital growth?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl !mx-auto text-base sm:text-lg font-light leading-relaxed text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Schedule a confidential discovery meeting at our corporate headquarters in Sector 63, Noida, or connect with our leadership team online.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-8 py-4 rounded-full !bg-white !text-black text-sm font-semibold flex items-center gap-2 hover:!bg-zinc-200 transition-colors shadow-xl"
              style={{ color: '#000000', backgroundColor: '#FFFFFF' }}
            >
              <span style={{ color: '#000000' }}>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4 !text-black" style={{ color: '#000000', stroke: '#000000' }} />
            </Link>
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
              className="px-8 py-4 rounded-full bg-zinc-900 border border-white/15 text-white text-sm font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-solar" />
              <span>{COMPANY.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
