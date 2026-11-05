'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Zap,
  TrendingUp,
  MapPin,
  Target,
  Share2,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Phone,
  HelpCircle,
  FileText,
  Compass,
  Cpu,
  Layers,
  Award,
  ChevronDown,
  Crosshair,
  Globe,
  Users,
  Palette,
  Video,
  BookOpen,
  Briefcase,
  SlidersHorizontal,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

type CategoryType = 'all' | 'organic' | 'advertising' | 'social' | 'learn';

interface ServiceItem {
  id: string;
  aliasIds?: string[];
  category: 'organic' | 'advertising' | 'social' | 'learn';
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
}

export default function SeoLeadGenerationPage() {
  const [activeTab, setActiveTab] = useState<CategoryType>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const allOfferings: ServiceItem[] = [
    // ══════════════════════════════════════════════════════════════
    // 1. ORGANIC SEARCH, GEO & AEO
    // ══════════════════════════════════════════════════════════════
    {
      id: 'seo-services',
      aliasIds: ['seo', 'organic-search'],
      category: 'organic',
      tag: 'Search Engine Optimization',
      title: 'SEO',
      subtitle: 'Technical crawl architecture, commercial keyword mapping & white-hat authority acquisition',
      desc: 'Search engine optimization is the foundation of digital revenue. Our in-house engineering and search team designs technical crawl architectures, indexation controls, on-page semantic hierarchies, and high-tier editorial backlinks to rank your business for high-intent commercial queries.',
      highlights: [
        'Comprehensive keyword research identifying high-intent commercial and transactional queries',
        'Full on-page optimization: titles, meta descriptions, H1/H2 header hierarchies, and internal linking',
        'High-authority, white-hat editorial link acquisition that steadily builds domain authority',
        'Continuous ranking monitoring, competitor gap analysis, and transparent monthly performance reporting',
      ],
    },
    {
      id: 'geo-services',
      aliasIds: ['geo', 'generative-engine-optimization'],
      category: 'organic',
      tag: 'Generative Engine Optimization',
      title: 'GEO Services',
      subtitle: 'Dominating AI citations across SearchGPT, Perplexity AI, Claude & Google Gemini',
      desc: 'Generative Engine Optimization (GEO) positions your enterprise inside AI response engines. As executive decision-makers increasingly research solutions through OpenAI SearchGPT, Perplexity AI, Claude, and Gemini, we structure factual entity nodes and verifiable schema markup so AI models cite your brand as the primary authority.',
      highlights: [
        'Entity vector modeling ensuring your brand is recognized and cited by LLM knowledge bases',
        'Optimization for OpenAI SearchGPT, Perplexity AI, Google Gemini AI Overviews, and Claude',
        'Factual data clustering and direct quotation structuring for zero-hallucination AI ingestion',
        'Tracking AI engine brand mention share, citation accuracy, and generative referral traffic',
      ],
    },
    {
      id: 'aeo-services',
      aliasIds: ['aeo', 'answer-engine-optimization'],
      category: 'organic',
      tag: 'Answer Engine Optimization',
      title: 'AEO Services',
      subtitle: 'Capturing featured snippets, zero-click answer boxes, and voice search results',
      desc: 'Answer Engine Optimization (AEO) formats your content to answer direct transactional and informational queries. With more than half of search queries resolving directly on the results page, AEO ensures search engines pull your exact specifications and answers into featured snippets, knowledge graph cards, and smart assistant responses.',
      highlights: [
        'Structured FAQ and Q&A Schema.org JSON-LD integration for instant search engine ingestion',
        'Targeted optimization for Google Featured Snippets (Paragraphs, Tables, and Lists)',
        'Voice search query phrasing and conversational natural language processing (NLP) alignment',
        'Entity definition structuring to secure knowledge graph and rich result badges',
      ],
    },
    {
      id: 'on-page-services',
      aliasIds: ['on-page-seo', 'on-page'],
      category: 'organic',
      tag: 'On-Page Architecture',
      title: 'On-Page Services',
      subtitle: 'Semantic HTML5 hierarchies, metadata architecture, and topical cluster modeling',
      desc: 'On-page SEO ensures your pages are completely clear to human readers and search crawlers alike. We audit heading structures, craft intent-driven meta tags, optimize image assets, and organize interconnected topical clusters that channel ranking authority directly to your most profitable commercial pages.',
      highlights: [
        'Semantic HTML5 header hierarchy (H1-H6) aligned with high-converting search intent',
        'Topical cluster architecture channeling internal link equity to priority revenue pages',
        'Clean canonical tag governance preventing duplicate content dilution across parameterized URLs',
        'Rich multimedia optimization with descriptive image alt tags, WebP/AVIF formats, and schema',
      ],
    },
    {
      id: 'off-page-services',
      aliasIds: ['off-page-seo', 'off-page'],
      category: 'organic',
      tag: 'Domain Authority & PR',
      title: 'Off-Page Services',
      subtitle: 'Ethical digital PR, high-authority backlink acquisition & unassailable search trust',
      desc: 'Off-page SEO establishes the external credibility and trust of your domain. Search engines rely heavily on third-party verification to award top rankings. Our digital PR specialists secure verified editorial placements, industry citations, and authoritative backlinks from Tier-1 trade and business publications.',
      highlights: [
        '100% white-hat editorial backlink acquisition from verified high-domain-authority websites',
        'Strategic digital PR campaigns generating genuine press mentions and journalist pickups',
        'Competitor backlink gap analysis identifying easy-win authoritative link opportunities',
        'Toxic backlink auditing and proactive Google Disavow management to protect domain health',
      ],
    },
    {
      id: 'local-seo-gmb',
      aliasIds: ['local-seo', 'gmb-services'],
      category: 'organic',
      tag: 'Local Dominance',
      title: 'Local SEO (GMB)',
      subtitle: 'Dominating Google Maps 3-Pack and capturing high-intent nearby buyers across Noida & NCR',
      desc: 'Over 46% of all Google searches carry local intent. Local SEO ensures your business appears at the exact moment nearby buyers search for your services. We verify and optimize your Google Business Profile (GBP), manage localized review workflows, and maintain consistent directory citations across 70+ business portals to anchor your firm in the Google 3-Pack.',
      highlights: [
        'Google Business Profile (GBP) complete verification, weekly geotagged updates, and category tuning',
        'Consistent NAP (Name, Address, Phone) citations across 70+ verified local and industry directories',
        'Localized keyword targeting for city, suburban territory, and regional industrial hubs',
        'Call tracking and ROI measurement attributing phone inquiries and quotes directly to local search keywords',
      ],
    },
    {
      id: 'google-marketplace-listing',
      aliasIds: ['google-shopping', 'google-marketplace'],
      category: 'organic',
      tag: 'Merchant Commerce',
      title: 'Google Marketplace Listing',
      subtitle: 'Google Merchant Center setup, Product Listing Ads (PLA) & live shopping feed sync',
      desc: 'Maximize product sales and visibility across Google Shopping, Google Lens, and commercial listings. We configure your Google Merchant Center, format high-throughput XML product feeds, implement product schema, and resolve disapproval flags so your full catalog displays in commercial search results.',
      highlights: [
        'Complete Google Merchant Center account approval, feed verification, and tax/shipping setup',
        'Automated product feed synchronization with real-time stock levels, pricing, and variant data',
        'Product, Offer, and AggregateRating Schema.org JSON-LD structured data implementation',
        'Optimization for Google Free Listings and high-ROAS Product Listing Ads (PLA)',
      ],
    },
    {
      id: 'seo-audits',
      aliasIds: ['audits', 'audit-services'],
      category: 'organic',
      tag: 'Technical Health',
      title: 'SEO Audits',
      subtitle: 'Deep 150+ point architectural diagnosis to eliminate crawl traps and indexation blocks',
      desc: 'Our website SEO audits examine codebase architecture, crawl logs, and analytics telemetry to identify what holds your site back from ranking. Based on this 150+ point diagnostic, we deliver actionable recommendations and direct code fixes to eliminate crawl traps, fix broken links, resolve canonical conflicts, and ensure search bots index your commercial pages without friction.',
      highlights: [
        'Detection and resolution of duplicate content, thin pages, and canonical tag conflicts',
        'Meta title, description, and OpenGraph audit across every indexed URL',
        'HTTP to HTTPS migration validation and mixed-content security resolution',
        'Robots.txt, XML sitemap verification, and 404 / soft-404 error page elimination',
      ],
    },
    {
      id: 'page-speed-&-core-web-vitals-optimization',
      aliasIds: ['core-web-vitals', 'page-speed-core-web-vitals'],
      category: 'organic',
      tag: 'Speed Engineering',
      title: 'Page Speed & Core Web Vitals Optimization',
      subtitle: 'Sub-second LCP, zero layout shift (CLS), and snappy interaction (INP) speed engineering',
      desc: 'Speed directly impacts both search rankings and commercial conversion rates. A slow-loading site loses prospective buyers before they read a single sentence. We engineer your frontend for sub-second Largest Contentful Paint (LCP < 1.2s), zero Cumulative Layout Shift (CLS), and instantaneous Interaction to Next Paint (INP) to satisfy Google’s Core Web Vitals criteria.',
      highlights: [
        'Largest Contentful Paint (LCP) reduction below 1.2 seconds through server optimization and edge caching',
        'Cumulative Layout Shift (CLS) elimination with explicit image, video, and container dimensions',
        'Interaction to Next Paint (INP) tuning for 60fps responsiveness across mobile devices',
        'Asset minification, Brotli compression, next-gen WebP/AVIF images, and Cloudflare CDN distribution',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 2. DIGITAL ADVERTISING
    // ══════════════════════════════════════════════════════════════
    {
      id: 'ppc_management',
      aliasIds: ['ppc-management', 'ppc'],
      category: 'advertising',
      tag: 'Search Engine Advertising',
      title: 'PPC Management Services',
      subtitle: 'High-ROAS Google Search, Display, and Performance Max campaigns with negative keyword harvesting',
      desc: 'We manage search, display, and Performance Max campaigns built on intent-tiered ad groups, continuous negative query harvesting, and closed-loop CRM conversion tracking. Our performance marketing pod ensures every rupee of ad spend is tied to verified commercial inquiries rather than untracked clicks.',
      highlights: [
        'Granular single-keyword ad groups (SKAGs) and intent-tiered campaign structure for maximum Quality Score',
        'Continuous negative keyword harvesting to eliminate wasted ad spend on irrelevant searches',
        'High-converting landing page creation paired with dynamic text insertion matching user queries',
        'Full conversion tracking integration with CRM pipelines, call recording, and revenue attribution',
      ],
    },
    {
      id: 'enterprise_ppc_management',
      aliasIds: ['enterprise-ppc', 'enterprise-ppc-management'],
      category: 'advertising',
      tag: 'Enterprise Media',
      title: 'Enterprise PPC Management Services',
      subtitle: 'High-spend optimization, value-based bidding (VBB), and omnichannel retargeting architecture',
      desc: 'For enterprise firms deploying high-volume advertising budgets, precision bid management is essential. Our enterprise PPC specialists architect custom bidding rules, audience tiering, and multi-channel retargeting that scale campaign revenue while aggressively controlling customer acquisition costs.',
      highlights: [
        'Custom bidding rules and value-based bidding (VBB) aligned with profit margins rather than vanity clicks',
        'Omnichannel ad synchronization across Google Search, YouTube, Display Network, and Bing Ads',
        'Automated script monitoring detecting budget pacing anomalies and ad copy fatigue 24/7',
        'Dedicated senior enterprise strategist and bi-weekly executive performance reporting',
      ],
    },
    {
      id: 'programmatic_advertising_service',
      aliasIds: ['programmatic', 'programmatic-advertising'],
      category: 'advertising',
      tag: 'Real-Time Bidding',
      title: 'Programmatic Advertising Services',
      subtitle: 'Automated machine-learning ad exchanges, lookalike modeling & fraud-free impressions',
      desc: 'We deploy programmatic advertising across real-time machine-learning ad exchanges to purchase premium inventory on authoritative publisher websites. Our campaigns leverage custom lookalike modeling, strict brand-safety controls, and automated fraud filtering to place your message in front of verified decision-makers.',
      highlights: [
        'Real-time bidding (RTB) across Google Ad Manager, AppNexus, OpenX, and premium ad exchanges',
        'Audience lookalike modeling based on your highest-value customer segments and buying patterns',
        'Strict brand-safety protocols, publisher whitelisting, and automated click-fraud filtering',
        'Cross-device frequency capping preventing ad fatigue across desktop, mobile, and tablet',
      ],
    },
    {
      id: 'competitor_geofencing_service',
      aliasIds: ['competitor-geofencing', 'geofencing'],
      category: 'advertising',
      tag: 'Precision Geofencing',
      title: 'Competitor Geofencing Services',
      subtitle: 'Hyper-targeted mobile advertising down to 1,000 square foot boundaries around rival locations',
      desc: 'Precision geofencing lets you target audiences based on physical location history. We draw virtual boundaries down to 1,000 square feet around competitor premises, industry trade expos, and commercial hubs to deliver ads directly to prospects visiting those venues, capturing high-intent footfall and driving qualified inquiries.',
      highlights: [
        '1,000 sq ft precision geofences drawn around competitor facilities, showrooms, and commercial centers',
        'Event geofencing targeting attendees at national industry conferences and trade exhibitions',
        'Cross-device retargeting serving display, video, and social ads to prospects after they leave the geofence',
        'Footfall Conversion Zone tracking measuring how many ad recipients physically walk into your facility',
      ],
    },
    {
      id: 'addressable_geofencing_service',
      aliasIds: ['addressable-geofencing'],
      category: 'advertising',
      tag: 'Address-Based Targeting',
      title: 'Addressable Geofencing Services',
      subtitle: 'Delivering digital ads to exact household physical boundaries from CRM mailing lists',
      desc: 'Addressable geofencing bridges offline customer databases with digital advertising. By mapping physical CRM client addresses or commercial property parcels directly to mobile advertising IDs, we deliver digital campaigns to exact building footprints with zero reliance on third-party browser cookies.',
      highlights: [
        'Mapping CRM physical mailing lists and client street addresses directly to mobile device IDs',
        'Delivery of targeted ads across mobile apps, desktop browsers, and connected TV (CTV)',
        'Up to 90% match rate on street address records with zero reliance on third-party tracking cookies',
        'Conversion Zone attribution tracking physical visits to your office, showroom, or retail store',
      ],
    },
    {
      id: 'employment_recruiting_marketing',
      aliasIds: ['recruiting', 'recruiting-marketing'],
      category: 'advertising',
      tag: 'Talent Acquisition',
      title: 'Employment & Recruiting Marketing',
      subtitle: 'Attracting top-tier passive executives, engineers, and specialists via digital recruitment ads',
      desc: 'Attracting skilled executives and specialized engineers requires proactive recruitment marketing. We design campaigns that strengthen employer branding, target passive candidates across LinkedIn and industry portals, and fill high-priority talent pipelines with qualified applicants.',
      highlights: [
        'Targeted recruitment advertising on LinkedIn, Google Search, and specialized industry job boards',
        'Employer branding video production and career portal landing page optimization',
        'Passive candidate targeting filtering by job title, certifications, years of experience, and location',
        'Application tracking integration streamlining candidate flow into your HR management software',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 3. SOCIAL MEDIA MARKETING
    // ══════════════════════════════════════════════════════════════
    {
      id: 'social-media-advertising',
      aliasIds: ['social-ads'],
      category: 'social',
      tag: 'Paid Social Funnels',
      title: 'Social Media Advertising',
      subtitle: 'High-impact paid campaigns across Meta, LinkedIn, and X with native lead capture',
      desc: 'We build and manage targeted paid social campaigns across Meta (Facebook & Instagram), LinkedIn, and X. Combining demographic, firmographic, and behavioral signals with native lead capture forms, we deliver qualified inquiries directly into your sales pipeline.',
      highlights: [
        'Granular demographic and behavioral targeting connecting with active buyers and decision-makers',
        'Lead Generation forms embedded natively within social apps for frictionless contact capture',
        'Dynamic creative variant testing optimizing hooks, copy length, and visual assets',
        'Custom audience remarketing re-engaging website visitors who did not complete inquiries',
      ],
    },
    {
      id: 'social-media-management',
      aliasIds: ['social-management'],
      category: 'social',
      tag: 'Publishing & Engagement',
      title: 'Social Media Management',
      subtitle: '75% purchase touchpoint: Editorial planning, active community handling, and brand voice',
      desc: 'Over 75% of buyers research brands on social channels before making high-value purchasing decisions. Our social media team handles monthly editorial planning, content production, daily community moderation, and reputation monitoring to maintain an authoritative brand presence.',
      highlights: [
        'Comprehensive monthly content calendar mapped to company product launches and milestones',
        'Active community management, rapid direct message responses, and comment moderation',
        'Consistent brand voice and aesthetic across LinkedIn, Instagram, Facebook, and X',
        'Monthly analytics digests measuring follower growth, engagement rates, and referral traffic',
      ],
    },
    {
      id: 'social-media-design',
      aliasIds: ['social-design'],
      category: 'social',
      tag: 'Creative Studio',
      title: 'Social Media Design',
      subtitle: 'Eye-catching branded carousels, cover banners, and motion graphics that stop the scroll',
      desc: 'First impressions on visual feeds directly impact brand trust. Our in-house designers and motion artists produce polished carousel decks, cover banners, story graphics, and branded infographics adhering strictly to your corporate design guidelines.',
      highlights: [
        'Custom profile branding: Facebook cover banners, LinkedIn corporate headers, and profile graphics',
        'Multi-slide carousel graphics engineered for high dwell time and educational value',
        'Branded story, reel, and video thumbnail templates maintaining visual consistency',
        'Vector asset creation and typography pairing adhering to your corporate brand guidelines',
      ],
    },
    {
      id: 'youtube_social_media',
      aliasIds: ['youtube-ads', 'youtube-advertising'],
      category: 'social',
      tag: 'YouTube Cinema Ads',
      title: 'YouTube Social Media Advertising',
      subtitle: 'Broadcast-quality video production, in-stream skippable ads & search attribution',
      desc: 'YouTube combines search intent with cinematic video storytelling. Operating our own cinema production soundstage, we script, film, and edit broadcast-grade video commercials, while managing YouTube ad placements targeted to high-intent search queries.',
      highlights: [
        'Skippable in-stream, non-skippable, bumper, and YouTube Shorts video ad campaign management',
        'Precision contextual targeting placing ads before relevant industry tutorials and competitor reviews',
        'Full in-house video production: Scriptwriting, cinema 4K/8K shoots, voiceover, and editing',
        'Advanced lead tracking and call attribution measuring exact website visits and inquiries from video ads',
      ],
    },
    {
      id: 'online_review',
      aliasIds: ['online-review', 'reviews', 'review-acceleration'],
      category: 'social',
      tag: 'Reputation Engineering',
      title: 'Online Review Acceleration',
      subtitle: 'Building overwhelming digital trust, 5-star customer proof, and SERP review schema',
      desc: 'Over 92% of buyers read online reviews before committing to a provider. We deploy automated post-purchase review workflows via SMS and email, directing happy clients to Google Maps, Clutch, and Trustpilot while intercepting customer concerns privately.',
      highlights: [
        'Automated SMS and email review requests triggered following client milestone completions',
        'Smart review funnels directing satisfied clients to Google Maps, Clutch, and industry review sites',
        'Private feedback resolution workflows addressing customer concerns before public posting',
        'Review schema markup on your website to display golden stars directly in Google search results',
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 4. LEARN & RESULTS
    // ══════════════════════════════════════════════════════════════
    {
      id: 'our_seo_reult',
      aliasIds: ['our-seo-results', 'seo-results'],
      category: 'learn',
      tag: 'Performance Benchmarks',
      title: 'Our SEO Results',
      subtitle: 'Computing confirmed client income from qualified leads, calls, and organic transactions',
      desc: 'We evaluate campaign performance by verified revenue metrics: inbound phone inquiries, qualified form leads, and closed contracts across the search programs we manage. Our focus is long-term pipeline expansion and customer acquisition efficiency that compounds over time.',
      highlights: [
        '+210% average organic traffic lift across enterprise client portfolios within 6 months',
        '4.8× verified client pipeline return on advertising spend (ROAS) across paid search and social',
        'Over 92% of targeted transactional keywords ranked on Page One of Google search results',
        '100% direct attribution telemetry connecting organic keywords to CRM closed-won contracts',
      ],
    },
    {
      id: 'our_seo_case_studies',
      aliasIds: ['our-seo-case-studies', 'case-studies'],
      category: 'learn',
      tag: 'Verified Case Studies',
      title: 'Our SEO Case Studies',
      subtitle: 'Real-world search engine optimization examples, architecture revamps & documented ROI',
      desc: 'Our case studies demonstrate how structured search architecture and authoritative content outrank competitors in competitive markets. Our published work covers verifiable ranking gains, Core Web Vitals revamps, and revenue acceleration across manufacturing, SaaS, e-commerce, and industrial B2B sectors.',
      highlights: [
        'Multi-location B2B manufacturer: 340% organic lead growth via localized keyword cluster architecture',
        'Enterprise SaaS platform: Core Web Vitals overhaul reducing page latency to 850ms, lifting signups by 68%',
        'Healthcare network: Google Guaranteed and Local SEO implementation driving 1,200+ monthly patient calls',
        'Industrial distributor: E-commerce catalog restructuring lifting organic transaction volume by 185%',
      ],
    },
    {
      id: 'what_is_an_seo_company',
      aliasIds: ['what-is-an-seo-company', 'what-is-seo-company'],
      category: 'learn',
      tag: 'Strategic Guide',
      title: 'What Is an SEO Company?',
      subtitle: 'How an SEO partner drives business through discovery, creation, optimization, and measurement',
      desc: 'An SEO partner identifies market demand, resolves technical crawl barriers, and crafts content that ranks for high-intent search queries. Sustainable SEO requires clean HTML markup, fast page loads under 1.2 seconds, topical authority clusters, and structured schema that search engines easily parse.',
      highlights: [
        'Discovery: In-depth technical crawl, competitive landscape analysis, and keyword intent research',
        'Creation: High-value, authoritative content structured for human readers and search algorithms',
        'Optimization: Continuous Core Web Vitals speed tuning, on-page refinement, and link building',
        'Measurement: Closed-loop telemetry tracking keyword rankings, organic traffic, and revenue pipeline',
      ],
    },
    {
      id: 'how_to_find_best_seo',
      aliasIds: ['how-to-find-the-best-seo-company', 'how-to-find-best-seo'],
      category: 'learn',
      tag: 'Executive Evaluation',
      title: 'How to Find the Best SEO Company',
      subtitle: 'Evaluating in-house talent, white-hat ethics, reporting telemetry & technical capabilities',
      desc: 'When evaluating an SEO partner, look past vanity impressions. Ask to see verified case studies in your specific industry, transparent live reporting dashboards, and an in-house engineering team capable of modifying frontend code directly rather than just sending static recommendation decks.',
      highlights: [
        'Verify in-house delivery: Ensure the agency executes work directly without third-party outsourcing',
        'Examine ethical practices: Demand white-hat methodologies compliant with Google\'s search guidelines',
        'Inspect reporting transparency: Look for agencies that provide real-time dashboards rather than static PDFs',
        'Evaluate technical depth: Confirm capabilities in Core Web Vitals, server architecture, and schema markup',
      ],
    },
    {
      id: 'seo_guide_marketing_manager',
      aliasIds: ['seo-guide-for-marketing-managers', 'seo-guide'],
      category: 'learn',
      tag: 'Leadership Playbook',
      title: 'SEO Guide for Marketing Managers',
      subtitle: 'Aligning search strategy with pipeline revenue, CAC reduction & Core Web Vitals health',
      desc: 'Marketing leaders must manage search as a predictable customer acquisition channel rather than an isolated technical task. Priority indicators include qualified pipeline value, organic lead close rates, customer acquisition cost reduction, and Core Web Vitals health.',
      highlights: [
        'Establish commercial KPIs: Focus on pipeline value and customer acquisition cost rather than raw impressions',
        'Align organic search with paid media: Use PPC search query data to inform organic content clusters',
        'Prioritize technical speed: Protect conversion rates by maintaining sub-1.2-second page load times',
        'Implement closed-loop CRM attribution to demonstrate tangible SEO return on investment to leadership',
      ],
    },
    {
      id: 'what_is_dm',
      aliasIds: ['what-is-digital-marketing', 'digital-marketing-overview'],
      category: 'learn',
      tag: 'Digital Strategy',
      title: 'What Is Digital Marketing?',
      subtitle: 'The comprehensive process of leveraging search, paid media, social, and web technologies',
      desc: 'Digital marketing connects search engines, performance advertising, social platforms, and conversion architecture into an integrated customer acquisition engine. Our in-house team in Sector 63, Noida builds cohesive growth programs that lower acquisition costs and drive sustainable revenue.',
      highlights: [
        'Multi-channel synergy: Coordinating search, paid advertising, social media, and video for maximum impact',
        'Data-driven targeting: Connecting with high-intent decision-makers based on demographics and behavior',
        'Predictable customer acquisition: Lowering acquisition costs through conversion rate optimization',
        'Complete corporate accountability: Full-service strategy and execution under one roof in Sector 63, Noida',
      ],
    },
  ];

  const filteredOfferings =
    activeTab === 'all'
      ? allOfferings
      : allOfferings.filter((s) => s.category === activeTab);

  const faqs = [
    {
      q: 'How long does it take to see tangible results from an enterprise SEO campaign?',
      a: 'While technical fixes and Core Web Vitals optimizations yield measurable speed and indexing improvements within 2 to 4 weeks, significant organic keyword movements and inbound lead volume typically compound between months 3 and 6 as domain authority and content clusters mature.',
    },
    {
      q: 'What makes Competitor and Addressable Geofencing different from standard radius targeting?',
      a: 'Standard radius targeting casts a wide net around an entire city or postal code. Competitor Geofencing draws virtual boundaries down to 1,000 square feet around specific competitor buildings or convention halls. Addressable Geofencing takes a street-level list of client addresses and matches mobile advertising IDs to deliver ads directly to those exact households.',
    },
    {
      q: 'How do you handle Google Guaranteed and Local Services Ads?',
      a: 'We guide your company through the entire Google Guaranteed verification process, including background checks, license verification, and insurance compliance. Once approved, your business displays the green Google Guaranteed badge at the very top of local search results, and you only pay for valid phone inquiries.',
    },
    {
      q: 'Do you outsource any SEO, paid media, or content development?',
      a: 'No. Every technical audit, schema implementation, keyword strategy, and copywriting piece is executed by our full-time, in-house team located at our Corporate Headquarters in Sector 63, Noida. We believe in direct accountability.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              SEO, GEO &amp; Lead Generation Services That Generate High Quality Leads.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              Over 90% of commercial journeys begin with a search query. We design technical crawl architectures, Schema.org entity graphs, and high-converting paid campaigns that place your enterprise in front of active buyers across Google, SearchGPT, and Perplexity—turning organic and paid search into a predictable revenue stream.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request SEO Audit &amp; Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with SEO Strategist</span>
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
              { key: 'all' as CategoryType, label: 'All Capabilities', count: 23, icon: Layers },
              { key: 'organic' as CategoryType, label: 'Organic Search', count: 6, icon: Search },
              { key: 'advertising' as CategoryType, label: 'Digital Advertising', count: 6, icon: Target },
              { key: 'social' as CategoryType, label: 'Social Media Marketing', count: 5, icon: Share2 },
              { key: 'learn' as CategoryType, label: 'Learn & SEO Insights', count: 6, icon: BookOpen },
            ].map((tab) => {
              const active = activeTab === tab.key;
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileTap={{ scale: 0.96 }}
                  data-dock-btn
                  className="segmented-dock-btn group relative shrink-0 pl-3 pr-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus:outline-none select-none cursor-pointer"
                >
                  {/* Sliding active background pill */}
                  {active && (
                    <motion.div
                      layoutId="seoTabActiveIndicator"
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
                    {tab.label}
                  </span>

                  {/* Tab Count Pill */}
                  <span
                    className={`relative z-10 px-1.5 py-0.2 min-w-[18px] rounded-full text-[10px] font-mono tracking-tight font-bold shrink-0 transition-colors duration-200 inline-flex items-center justify-center ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-black/5 text-zinc-500 group-hover:bg-black/10 group-hover:text-black'
                    }`}
                  >
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Complete Service Scope: Editorial Cards with Images Alongside Context ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div id="full-scope" className="scroll-mt-36 text-left max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Full Service Scope &amp; Deliverables
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
            Search, Paid Advertising &amp; Growth Intelligence
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
            Every campaign is tailored to your commercial objectives, combining technical speed engineering, competitive telemetry, addressable geofencing, and multi-channel marketing automation to build an unshakeable digital footprint.
          </p>
        </div>

        <motion.div layout className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredOfferings.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  id={service.id}
                  className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  {/* Alias anchors for seamless navbar deep linking */}
                  {service.aliasIds?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-36 left-0" aria-hidden="true" />
                  ))}

                  {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                  <div className="w-full h-56 sm:h-72 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100 self-stretch">
                    <img
                      src={`/images/services/seo/${service.id}.webp?v=2`}
                      alt={`${service.title} — ARKA Technovation`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* ── Context & Deliverables Panel: Compact mobile spacing, expansive desktop typography ── */}
                  <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300 flex-1">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                        {service.title}
                      </h3>

                      {/* Punchy Subtitle */}
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {service.subtitle}
                      </p>

                      {/* Editorial Context Description */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty line-clamp-3 sm:line-clamp-none">
                        {service.desc}
                      </p>

                      {/* Deliverables & Technical Capabilities Grid */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                          Deliverables &amp; Technical Capabilities:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {service.highlights.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer Action Bar */}
                    <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      {(() => {
                        const targetLink =
                          service.id === 'seo-services' ? '/services/google-seo' :
                          service.id === 'geo-services' ? '/services/geo-services' :
                          service.id === 'aeo-services' ? '/services/aeo-services' :
                          service.id === 'on-page-services' ? '/services/on-page-seo' :
                          service.id === 'off-page-services' ? '/services/off-page-seo' :
                          service.id === 'local-seo-gmb' ? '/services/local-seo' :
                          service.id === 'google-marketplace-listing' ? '/services/marketplace-listing' :
                          service.id === 'seo-audits' || service.id.includes('core-web-vitals') ? '/services/google-seo' :
                          service.id.includes('ppc') || service.id.includes('geofencing') ? '/services/search-engine-marketing' :
                          '/services/seo-lead-generation';

                        return (
                          <Link
                            to={targetLink}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-black/15 text-xs font-semibold hover:border-black hover:bg-black hover:text-white transition-all shadow-xs w-fit group/sub"
                          >
                            <span>Explore Detailed Discipline</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-0.5 transition-transform" />
                          </Link>
                        );
                      })()}

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-solar text-xs sm:text-sm font-semibold transition-[background-color,transform] duration-200 active:scale-[0.98] shadow-sm group/btn w-full sm:w-auto"
                      >
                        <span>Request Custom Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Interactive FAQ Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mt-3">
            Common Inquiries on Search &amp; Lead Generation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our SEO contracts, reporting cadences, and Noida HQ engineering.
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

      {/* ── Consultation CTA Strip ── */}
      <section className="py-20 bg-zinc-950 text-white border-t border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold text-center">
            Schedule a Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 max-w-3xl !mx-auto text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to Dominate Search &amp; Accelerate Pipeline Revenue?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl !mx-auto text-base sm:text-lg font-light leading-relaxed text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Connect directly with senior SEO architects and performance media specialists at our Noida Headquarters. We review your existing domain telemetry and deliver a transparent proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-8 py-4 rounded-full !bg-white !text-black text-sm font-semibold flex items-center gap-2 hover:!bg-zinc-200 transition-colors shadow-xl"
              style={{ color: '#000000', backgroundColor: '#FFFFFF' }}
            >
              <span style={{ color: '#000000' }}>Request SEO Strategy &amp; Proposal</span>
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
