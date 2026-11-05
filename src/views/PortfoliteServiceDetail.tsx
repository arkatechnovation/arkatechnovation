'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  ChevronDown,
  Cpu,
  Zap,
  Check,
  Phone,
  Mail,
  Award,
  Globe,
  TrendingUp,
  FileText,
  Compass,
} from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { SERVICES, COMPANY, getServiceBySlug } from '../lib/data';

// Specialized core capabilities and tags per service discipline
const SERVICE_TECH_STACK: Record<string, string[]> = {
  'development': [
    'CRM',
    'ERP',
    'Mobile App',
    'E-Commerce Website',
    'Corporate Website',
    'Custom Software',
  ],
  'digital-marketing': [
    'Digital Marketing',
    'Social Media Marketing',
    'Content Marketing',
    'Performance Marketing',
    'Branding',
    'Google Ads',
    'Meta Ads',
    'PR Management',
  ],
  'seo-lead-generation': [
    'SEO',
    'GEO Services',
    'AEO Services',
    'On-Page Services',
    'Off-Page Services',
    'Local SEO (GMB)',
    'Google Marketplace Listing',
  ],
  'film-making': [
    'Film Production',
    'Digital Ads',
    'TV Ads',
    'Corporate Film Production',
    'Podcasts',
    'Personal Interviews',
    'AI Video Creation',
    'Product Photoshoot',
    'Model Shoot',
  ],
  'corporate-world-news': [
    'Corporate World News',
    'Interview & Press Releases',
    'Corporate News',
    'Market Update',
    'Industries Analysis',
    'Market Research',
  ],
  'digital-advertising': ['Google Ads PMax', 'LinkedIn Campaign Manager', 'Addressable Geofencing', 'The Trade Desk', 'DV360', 'ClickCease'],
  'content-marketing': ['Original Editorial', 'SEO Copywriting', 'Motion Design', '2D/3D Kinetic Graphics', 'Content Calendering', 'Whitepaper Research'],
  'e-commerce': ['Shopify Plus', 'Custom Liquid & Headless', 'Magento 2', 'WooCommerce', 'Stripe & Razorpay', 'Inventory Sync Middleware'],
  'analytics-attribution': ['GA4 BigQuery Export', 'Looker Studio Enterprise', 'Multi-Touch Attribution', 'Dynamic Call Tracking', 'Data Lakehouse', 'SQL BI'],
  'ux-interactive': ['Figma Design Systems', 'Framer Motion', 'WCAG 2.2 AA Audit', 'FullStory Heatmaps', 'Multivariate CRO', 'Design Tokens'],
  'crm-software': [
    'Custom SaaS Architecture',
    'PostgreSQL & Redis',
    'REST & GraphQL APIs',
    'Twilio & RingCentral',
    'Tally & Accounting Sync',
    'Role-Based RBAC',
    'Zero Per-Seat Fees',
  ],
  'mobile-application': [
    'React Native',
    'Swift & SwiftUI',
    'Kotlin & Jetpack Compose',
    'Offline-First Sync',
    'Biometric Security',
    'Push Notifications',
    'App Store Compliance',
  ],
  'erp-solution': [
    'Supply Chain Logistics',
    'Multi-Warehouse Inventory',
    'GST E-Invoicing & E-Way',
    'Multi-Currency Ledger',
    'HR & Biometric Payroll',
    'Vendor & Client Portals',
  ],
  'website-development': [
    'Next.js 15 & React 19',
    'TypeScript & Tailwind',
    'Node.js & Python',
    'Headless CMS',
    'Core Web Vitals (<1.0s)',
    'WCAG 2.2 AA Accessibility',
    'Docker & CI/CD',
  ],
  'lead-management-system': [
    'Multi-Channel Ingestion',
    'Algorithmic Lead Scoring',
    'Round-Robin Routing',
    'WhatsApp Instant Alerts',
    'Corporate LMS Courses',
    'Compliance Tracking',
  ],
  'social-media-handling': [
    'Strategic SMO',
    'Meta Advantage+ Ads',
    'LinkedIn Campaign Manager',
    'Reels & Video Production',
    '24/7 Reputation Moderation',
    'Closed-Loop Attribution',
  ],
  'ecommerce-seo-ppc': [
    'Accelerated Mobile Pages (AMP)',
    'Google Shopping / PLA',
    'Visual Image Search',
    'Dynamic Remarketing',
    'Shopify Plus Sync',
    'Conversion Rate Lift',
  ],
  'ecommerce-social-ads': [
    'Dynamic Product Ads (DPA)',
    'Meta Advantage+ Catalogs',
    'UGC Video Creative',
    'Multi-Tier Cart Recovery',
    'Server-Side CAPI (8.5+ EMQ)',
    'Blended ROAS Telemetry',
  ],
  'email-sms-whatsapp': [
    'Official WhatsApp API',
    'Tier-1 SMS SMPP Gateways',
    'Lifecycle Drip Sequences',
    'RFM Customer Segments',
    'TRAI / DLT Compliance',
    'Repeat Revenue Dashboards',
  ],
  'google-social-ads': [
    'Google Search & PMax',
    'Demographic Audience Layers',
    'Automated Click Fraud Filter',
    'Dedicated Landing Pages',
    'Offline Conversion Tracking',
    'CPA Reduction Telemetry',
  ],
  'google-seo': [
    'Technical Crawl Audits',
    'Transactional Intent Clusters',
    'Schema.org Entity Graphs',
    'Core Web Vitals Remediation',
    'E-E-A-T Content Standards',
    'Daily SERP Rank Tracking',
  ],
  'search-engine-marketing': [
    'High-Intent Query Bidding',
    'Negative Keyword Libraries',
    'Quality Score Optimization',
    'Dynamic Call Tracking',
    'Google Shopping PLAs',
    'Transparent ROAS Telemetry',
  ],
  'on-page-seo': [
    'Semantic HTML5 Hierarchy',
    'Internal Link Topical Silos',
    'Schema.org JSON-LD Suite',
    'Tier-1 Digital PR Backlinks',
    'Brand Mention Reclamation',
    'Disavow Governance',
  ],
  'ecommerce-seo': [
    'Product Detail Page (PDP) SEO',
    'Category Taxonomy Siloing',
    'Faceted Navigation Indexing',
    'Offer & InStock Schema',
    'Automated XML Sitemaps',
    'Direct Organic Checkout',
  ],
  'local-seo': [
    'Google Business Profile (GBP)',
    '70+ Directory Citations',
    'Geo-Targeted Landing Pages',
    'Review Acceleration Workflows',
    'Geogrid 3-Pack Tracking',
    'Local Phone Call Routing',
  ],
  'commercial-presentation-video': [
    'Executive Scriptwriting',
    '4K/8K Cinema Cameras',
    'Drone Aerial Cinematography',
    'C-Suite Video Interviews',
    'DaVinci Resolve Color Grade',
    'Licensed Orchestral Scores',
  ],
  'tv-ads': [
    'Broadcast TV Commercials',
    'Soundstage Studio Sets',
    'Screen Actor Casting',
    'EBU R128 Audio Mastering',
    'Concurrent Search Telemetry',
    'Multi-Aspect Cut-Downs',
  ],
  'products-demo-videos': [
    'Macro Lens Product Filming',
    '360° Motorized Turntables',
    '4K Software UI Walkthroughs',
    'Multilingual Studio VO',
    '3D Exploded-View Visuals',
    'Landing Page Video Packs',
  ],
  'product-explanatory': [
    '5-Second Hook Architecture',
    'Bespoke 2D Vector Animation',
    '3D Cinema 4D Motion',
    'Studio Voiceover Localization',
    'Custom Sonic Branding',
    'Sub-Second Video Embeds',
  ],
  'customer-testimonial': [
    'On-Location Client Filming',
    'Problem-Solution-ROI Scripts',
    'Kinetic Data Typography',
    'Workplace B-Roll Sequences',
    'Modular Sales Rep Clips',
    'Signed Corporate Clearances',
  ],
  'interview-press-releases': [
    'Multi-Camera 4K Studio',
    'AP-Style Press Releases',
    'Tier-1 Wire Distribution',
    'Executive Podcast Series',
    'Media Clipping Dossiers',
    '24/7 Crisis PR Availability',
  ],
  'corporate-news-ma': [
    'M&A Transaction Statements',
    'Boardroom & CEO Profiles',
    'Strategic Joint Ventures',
    'Capital Expenditure News',
    'MCA Regulatory Disclosures',
    'IR Digital Newsroom Hub',
  ],
  'market-update-briefs': [
    'Daily 8:00 AM Morning Briefs',
    'MCA, RBI & GST Alerts',
    'Input Commodity Telemetry',
    'Industry Valuation Multiples',
    'Quarterly Retrospective Decks',
    'Competitor Intel Feeds',
  ],
  'industries-analysis-reports': [
    'TAM / SAM / SOM Sizing',
    'Competitor Pricing Teardowns',
    'Supply Chain Risk Audits',
    'Technology Adoption Curves',
    'Anonymous Buyer NPS Audits',
    'Co-Authored Whitepapers',
  ],
  'market-research-tam': [
    'Primary Buyer Surveys',
    'Econometric Market Sizing',
    'Customer Sentiment Diagnostics',
    'Secret Shopper Audits',
    'Van Westendorp Price Models',
    'Executive Boardroom Decks',
  ],

  'performance-marketing': [
    'Meta CAPI',
    'Google Ads',
    'Looker Studio',
    'Attribution Modeling',
    'Landing Page CRO',
    'Audience Exclusion',
  ],
  'branding': [
    'Design Systems',
    'Figma Tokens',
    'Typography Scales',
    'Brand Guidelines',
    'Vector Master Assets',
    'Tone of Voice Rules',
  ],
  'google-ads': [
    'Google Search',
    'Performance Max',
    'Merchant Center',
    'Negative Keywords',
    'Enhanced Conversions',
    'ROAS Optimization',
  ],
  'meta-ads': [
    'Meta Conversions API',
    'Dynamic Product Ads',
    'Catalog Sync',
    'Reels Creative',
    'Custom Audiences',
    'First-Party Tracking',
  ],
  'pr-management': [
    'Wire Distribution',
    'Tier-1 Media Pitching',
    'Executive Op-Eds',
    'AP-Style Releases',
    'Crisis Communications',
    'Media Room Setup',
  ],
  'corporate-film-production': [
    '4K & 8K Cinema Packages',
    'Drone Cinematography',
    'DaVinci Resolve Studio',
    'Orchestral Sound Design',
    'Executive Interviews',
    'Industrial B-Roll',
  ],
  'digital-ads': [
    '3-Second Hook Video',
    'Vertical Reels & Shorts',
    'Motion Typography',
    'Direct-Response Story',
    'A/B Creative Sprints',
    'Studio Sound Effects',
  ],
  'podcasts': [
    'Acoustic Soundstage',
    'Shure SM7B Mics',
    '4K Multi-Cam Switching',
    'Micro-Clip Social Cuts',
    'LMS Integration',
    'Spotify & Apple RSS',
  ],
  'personal-interviews': [
    'Prime Lens Portraiture',
    '3-Point Studio Lighting',
    'Broadcast Wireless Audio',
    'Teleprompter Coaching',
    'LinkedIn Perspective Cuts',
    'Editorial Photo Stills',
  ],
  'ai-video-creation': [
    'Generative AI Video',
    'Neural Voice Cloning',
    'Lip-Sync Localization',
    'Enterprise IP Safety',
    'Digital Avatars',
    'Rapid Prototyping',
  ],
  'product-photoshoot': [
    'Macro Lens Detail',
    'Color-Calibrated Strobes',
    '360 Motorized Turntable',
    'Clean White Cutouts',
    'Alpha Mask Exports',
    'Print-Ready CMYK',
  ],
  'model-shoot': [
    'Professional Casting',
    'Wardrobe Styling',
    'Hair & Makeup Coordination',
    'Studio Cyclorama Wall',
    'Editorial Retouching',
    'Commercial Model Releases',
  ],
  'geo-services': [
    'SearchGPT Corpus',
    'Perplexity Bot',
    'llms.txt Protocols',
    'Schema.org Entities',
    'Claude Vector Index',
    'Synthetic Benchmarks',
  ],
  'aeo-services': [
    'Position Zero',
    'Structured FAQPage',
    'Schema QAPage',
    'Voice Search Audio',
    'Google Assistant',
    'PAA Silo Graph',
  ],
  'off-page-seo': [
    'Tier-1 Digital PR',
    'Editorial Backlinks',
    'Unlinked Mentions',
    'Disavow Governance',
    'Wire Syndication',
    'Domain Trust Vector',
  ],
  'marketplace-listing': [
    'Google Merchant Center',
    'Product Listing Ads',
    'Automated XML Feeds',
    'Content API Sync',
    'Offer Schema JSON-LD',
    'Free Listings Grid',
  ],
};

// Strategic value propositions per service
const SERVICE_STRATEGIC_BENEFITS: Record<string, { title: string; desc: string; metrics: string }[]> = {
  'corporate-world-news': [
    { title: 'Verified Executive Authority', desc: 'Elevate your C-suite leaders from participants to industry agenda-setters with broadcast-grade interviews and editorial features.', metrics: 'Tier-1 Syndication' },
    { title: 'Empirical Market Intelligence', desc: 'Gain proprietary competitive edges with primary-source research and deep sector benchmarks before they become common knowledge.', metrics: 'Primary Sourced' },
    { title: 'Reputation & Narrative Control', desc: 'Command the conversation in your industry through proactive press releases and rapid-response corporate communications pods.', metrics: 'Zero Ambiguity' },
  ],
  'crm-software': [
    { title: 'Eliminate Disconnected Silos', desc: 'Sync marketing lead ingestion, sales pipelines, and customer support tickets into a single unified database with zero data duplication.', metrics: 'Data Parity' },
    { title: 'Automated 1-to-1 Customer Journeys', desc: 'Deploy automated behavioral triggers that nurture leads, remind clients of expiring agreements, and trigger re-order workflows on autopilot.', metrics: 'Automated Workflows' },
    { title: 'Full Intellectual Property Ownership', desc: 'We deliver complete production source code upon launch. No monthly vendor seat licensing fees or proprietary software lock-in.', metrics: 'Zero Seat Fees' },
  ],
  'seo-lead-generation': [
    { title: 'Page-One Organic Search Dominance', desc: 'Capture high-intent commercial buyers searching for your solutions on Google, turning organic search into your most profitable revenue engine.', metrics: 'White-Hat Authority' },
    { title: 'Core Web Vitals Speed Engineering', desc: 'Sub-second load times and zero layout shift keep visitors engaged and satisfy Google’s strict page experience ranking signals.', metrics: 'Core Web Vitals' },
    { title: 'Ethical High-Authority Backlink Assets', desc: 'High-authority digital PR and thought leadership editorial placements that compound domain authority year after year.', metrics: 'Domain Equity' },
  ],
  'film-making': [
    { title: 'In-House Cinema Production Crew', desc: 'From initial treatment and scriptwriting to on-location 4K/8K shooting and DaVinci color grading, executed 100% by our full-time crew.', metrics: 'In-House Crew' },
    { title: 'Broadcast-Grade Commercials & CSR', desc: 'Documentaries, plant factory tours, and TV commercials produced with cinema cameras, studio lighting, and licensed orchestral sound.', metrics: '4K/8K Cinema' },
    { title: 'High-Converting Video Assets', desc: 'We produce multi-aspect cut-downs engineered specifically for executive clarity and sustained buyer conviction.', metrics: 'Viewer Retention' },
  ],
  'mobile-application': [
    { title: 'Direct Customer Touchpoint & Retention', desc: 'Establish an unmediated, persistent presence on customer home screens with high-open push notifications and biometric convenience.', metrics: 'Store Compliance' },
    { title: 'Offline-First Operational Reliability', desc: 'Field teams and consumers operate uninterrupted in remote or low-connectivity environments with automatic conflict-free cloud sync.', metrics: 'Offline-First' },
    { title: 'Native Hardware Capabilities', desc: 'Harness camera scanning, Bluetooth beacons, biometric FaceID, and secure mobile wallets for sub-second transactional speed.', metrics: 'Low Latency' },
  ],
  'erp-solution': [
    { title: 'Unified Operational Single Source of Truth', desc: 'Centralize fragmented departmental spreadsheets into one cloud-native database spanning procurement, warehouses, accounting, and HR.', metrics: 'Data Parity' },
    { title: 'Automated Compliance & Tax Invoicing', desc: 'Eliminate manual reconciliation errors with automated GST e-invoicing, e-way bills, and bank statement matching via direct government APIs.', metrics: 'Automated Compliance' },
    { title: 'Predictive Resource Planning', desc: 'Make proactive procurement decisions with real-time stock run-out projections and automated purchase order thresholds.', metrics: 'Predictive Sourcing' },
  ],
  'website-development': [
    { title: 'Sub-Second Core Web Vitals Dominance', desc: 'Pre-rendered React Server Components and edge caching deliver sub-second LCP times that maximize visitor conversion and Google rankings.', metrics: 'Core Web Vitals' },
    { title: 'Independent Headless Marketing Control', desc: 'Empower marketing teams to publish campaigns, blogs, and landing pages visually in minutes without waiting for engineering sprint cycles.', metrics: 'Headless Control' },
    { title: 'Enterprise Security & Full IP Handover', desc: 'Zero third-party vendor lock-in. Full production source code, Docker configs, and automated CI/CD pipelines transferred directly to your team.', metrics: 'Full IP Handover' },
  ],
  'lead-management-system': [
    { title: 'Sub-60s Inbound Lead Routing', desc: 'Capture prospects across Google, Meta, and phone calls, instantly routing leads to the right regional sales executive before interest cools.', metrics: 'Instant Lead Routing' },
    { title: 'Zero Lead Leakage or Stagnation', desc: 'Automated fallback timers reassign untouched leads to alternate reps, ensuring every commercial inquiry receives a swift response.', metrics: 'Automated Reassignment' },
    { title: 'Continuous Corporate Training Compliance', desc: 'Automate employee certification and compliance training with interactive video lessons, randomized quizzes, and instant certificate issuance.', metrics: 'Audit Ready' },
  ],
  'social-media-handling': [
    { title: 'Commercial Pipeline Over Vanity Likes', desc: 'Align social content and targeted Meta/LinkedIn ads directly with revenue acquisition, converting passive scrolling into qualified sales meetings.', metrics: 'High Intent' },
    { title: 'Consistent Multi-Channel Executive Voice', desc: 'Establish undeniable category authority across LinkedIn, Meta, and YouTube with polished video editing, carousels, and thought leadership.', metrics: 'Executive Presence' },
    { title: '24/7 Brand Reputation Protection', desc: 'Active moderation responds to customer comments and direct inquiries within minutes, safeguarding your brand reputation around the clock.', metrics: 'Rapid Response' },
  ],
  'ecommerce-seo-ppc': [
    { title: 'Accelerated Mobile Checkout Speed', desc: 'AMP frameworks and streamlined checkout architectures eliminate mobile cart abandonment, lifting mobile conversion rates dramatically.', metrics: 'Accelerated Mobile' },
    { title: 'Top-of-Page Google Shopping Real Estate', desc: 'Command high-intent product searches with automated Google Merchant Center feeds, review star badges, and competitive price annotations.', metrics: 'Merchant Center Feeds' },
    { title: 'Photo Visual Search Discovery', desc: 'Allow smartphone shoppers to take photos of real-world items and instantly discover matching product models in your catalog.', metrics: 'Instant Visual Match' },
  ],

  'performance-marketing': [
    { title: 'Server-Side Event Attribution', desc: 'Direct Meta CAPI and Google Enhanced Conversions tracking ensuring complete data fidelity despite browser cookie restrictions.', metrics: 'First-Party Tracking' },
    { title: 'High-Velocity Creative Sprints', desc: 'Continuous production of multi-angle video ads, kinetic copy variants, and dedicated landing pages that prevent ad fatigue.', metrics: 'Weekly Iteration' },
    { title: 'Strict CAC & LTV Governance', desc: 'Every dollar of media spend is managed against closed CRM revenue and customer acquisition cost thresholds.', metrics: 'Pipeline Focus' },
  ],
  'branding': [
    { title: 'Distinct Market Positioning', desc: 'Clarify your institutional mission and competitive differentiation to establish undeniable category leadership.', metrics: 'Strategic Clarity' },
    { title: 'Enterprise Design Token Systems', desc: 'Comprehensive Figma component libraries and digital tokens ensuring seamless execution across web, mobile, and print.', metrics: 'Unified System' },
    { title: 'Executive Presentation Excellence', desc: 'Investor decks, boardroom templates, and corporate collateral designed to reflect enterprise stature.', metrics: 'Boardroom Ready' },
  ],
  'google-ads': [
    { title: 'High-Intent Commercial Query Capture', desc: 'Target transactional searches at the precise moment buyers look for your solutions, lowering cost per qualified lead.', metrics: 'Commercial Intent' },
    { title: 'Quality Score & Negative Keyword Hygiene', desc: 'Continuous search term scrubbing eliminates irrelevant clicks, driving down average Cost Per Click across all priority terms.', metrics: 'Cost Governance' },
    { title: 'Automated Merchant Center Feeds', desc: 'Sync inventory, pricing, and review badges directly with Google Shopping for maximum visual real estate in search.', metrics: 'Catalog Sync' },
  ],
  'meta-ads': [
    { title: 'Dynamic Product Feeds & DPAs', desc: 'Deliver tailored product carousels to high-probability buyers based on real-time browsing behavior and cart additions.', metrics: 'Dynamic Feeds' },
    { title: 'Server-Side CAPI Implementation', desc: 'Eliminate browser drop-off by sending conversion events directly from cloud servers to Meta attribution engines.', metrics: 'Server-to-Server' },
    { title: 'Scroll-Stopping Vertical Video', desc: 'Native 9:16 video ads engineered with psychological pattern interrupts that stop mobile scrolling in the first three seconds.', metrics: 'High Retention' },
  ],
  'pr-management': [
    { title: 'Tier-1 Media Wire Syndication', desc: 'Distribute authoritative corporate press releases directly to premier financial media desks, trade publications, and business dailies.', metrics: 'Tier-1 Syndication' },
    { title: 'Executive Thought Leadership', desc: 'Position corporate leadership as agenda-setting industry authorities through guest op-eds, podcasts, and conference keynotes.', metrics: 'Editorial Presence' },
    { title: '24/7 Corporate Reputation Shield', desc: 'Active newsroom monitoring and rapid-response holding protocols protect corporate brand equity during critical disclosures.', metrics: 'Reputation Defense' },
  ],
  'corporate-film-production': [
    { title: 'Full In-House Cinema Package', desc: 'Shot by our full-time crew using 4K/8K cinema cameras, prime portrait lenses, and licensed aerial drone cinematography.', metrics: 'Cinema-Grade' },
    { title: 'Turnkey Post-Production Excellence', desc: 'DaVinci Resolve studio color grading, multi-track audio mastering, and subtle motion graphics executed under one roof in Noida.', metrics: 'Broadcast Master' },
    { title: 'Complete IP & Raw Footage Handover', desc: 'Full commercial rights and complete raw footage archives transferred directly upon project completion with zero recurring license fees.', metrics: 'Full IP Handover' },
  ],
  'digital-ads': [
    { title: 'Sub-Second Hook Architecture', desc: 'Capture viewer attention within the first three seconds of playback using psychological pattern interrupts and kinetic typography.', metrics: 'Hook Architecture' },
    { title: 'Multi-Aspect Ratio Deliverables', desc: 'Native video framing delivered in 9:16 vertical, 16:9 widescreen, and 1:1 square formats tailored for each specific ad platform.', metrics: 'Multi-Platform' },
    { title: 'Direct-Response Commercial Storytelling', desc: 'Problem-solution narrative frameworks formulated specifically to move prospective buyers toward action.', metrics: 'Direct Response' },
  ],
  'podcasts': [
    { title: 'Acoustically Treated Broadcast Studio', desc: 'Record in our isolated private soundstage, equipped with Shure SM7B broadcast boom microphones and 4K multi-camera switching.', metrics: 'Noida Soundstage' },
    { title: 'Turnkey Multi-Platform Syndication', desc: 'Complete episode mastering and automated RSS feed distribution across Spotify, Apple Podcasts, Amazon Music, and YouTube.', metrics: 'Full Syndication' },
    { title: 'Social Micro-Clip Extraction', desc: '5 to 10 vertical short-form video reels extracted from every recording with dynamic colored subtitles for rapid social distribution.', metrics: 'Micro-Clip Packages' },
  ],
  'personal-interviews': [
    { title: 'Authoritative Leadership Presence', desc: 'Cinema-grade 3-point lighting, prime lenses, and broadcast lavaliers capture executives with flattering, authoritative clarity.', metrics: 'Executive Presence' },
    { title: 'Journalistic Interview Direction', desc: 'Thoughtful questioning formulated by seasoned media professionals that brings out natural, credible executive insights.', metrics: 'Media Veteran Prep' },
    { title: 'LinkedIn Editorial Cutdowns', desc: 'Modular 60-to-90-second perspective clips optimized for executive personal profiles and corporate digital communications.', metrics: 'LinkedIn Ready' },
  ],
  'ai-video-creation': [
    { title: 'Multi-Language Voice Localization', desc: 'Clone executive voices and synchronize lip movements across 30+ international languages without expensive reshooting.', metrics: '30+ Languages' },
    { title: 'Enterprise IP Compliance & Safety', desc: 'Workflows utilize commercially cleared generative models with zero client data retention and complete copyright indemnity.', metrics: 'IP Protection' },
    { title: 'Rapid Visual Prototyping', desc: 'Generate photorealistic concept frames and visual storyboards in hours, significantly accelerating stakeholder approval cycles.', metrics: 'Rapid Iteration' },
  ],
  'product-photoshoot': [
    { title: 'Color-Calibrated Studio Strobes', desc: 'Studio lighting matched to exact physical product pantones, capturing microscopic craftsmanship with prime macro lenses.', metrics: 'Color Calibrated' },
    { title: '360-Degree Interactive Rotational Spins', desc: 'Motorized turntable capture providing seamless 360-degree inspection widgets that reduce product return inquiries.', metrics: '360 Turntable' },
    { title: 'Pure White E-Commerce Cutouts', desc: 'Hand-drawn clipping paths delivering pure white backgrounds and natural contact shadows compliant with all marketplace standards.', metrics: 'Pure White Backgrounds' },
  ],
  'model-shoot': [
    { title: 'Professional Talent Auditions & Releases', desc: 'Casting professional models who authentically reflect your target customer demographic, complete with signed usage releases.', metrics: 'Commercial Releases' },
    { title: 'On-Set Styling & Creative Direction', desc: 'Dedicated wardrobe stylists, hair and makeup artists, and continuous pose coaching ensuring elevated visual brand alignment.', metrics: 'Full On-Set Styling' },
    { title: 'Non-Destructive Editorial Retouching', desc: 'Frequency separation skin retouching and fabric cleanup maintaining natural texture while delivering magazine-grade polish.', metrics: 'Editorial Polish' },
  ],
  'geo-services': [
    { title: 'Generative AI Citation Ownership', desc: 'Secure direct authoritative brand citations across OpenAI SearchGPT, Perplexity AI, Claude, and Google Gemini summaries.', metrics: 'AI Citability' },
    { title: 'Machine-Readable Documentation Corpus', desc: 'Deploy standardized llms.txt protocols and clean markdown documentation optimized for retrieval-augmented generation.', metrics: 'RAG Grounding' },
    { title: 'Zero Hallucination Entity Safeguard', desc: 'Anchor corporate knowledge graph entities to ensure AI systems cite factual product specifications and leadership credentials.', metrics: 'Factual Accuracy' },
  ],
  'aeo-services': [
    { title: 'Position Zero Featured Snippet Dominance', desc: 'Win prime Google zero-click answer cards and featured snippets that dominate above traditional organic listings.', metrics: 'Position Zero' },
    { title: 'Comprehensive Structured Schema Suite', desc: 'Inject nested Schema.org FAQPage and QAPage JSON-LD microdata that search engines extract directly into rich results.', metrics: 'Rich Snippets' },
    { title: 'Conversational Voice Search Visibility', desc: 'Target natural-language spoken queries on Siri, Google Assistant, and Alexa for commercial and regional enterprise inquiries.', metrics: 'Voice Search' },
  ],
  'off-page-seo': [
    { title: 'White-Hat Editorial Authority', desc: 'Acquire high-trust backlinks exclusively through accredited digital PR, proprietary data surveys, and Tier-1 editorial placements.', metrics: 'White-Hat PR' },
    { title: 'Unlinked Brand Mention Conversion', desc: 'Systematically scan digital newsrooms and convert passive corporate brand mentions into verified do-follow backlink equity.', metrics: 'Mention Reclamation' },
    { title: 'Proactive Google Disavow Shielding', desc: 'Continuously audit referring domains to eliminate toxic links and safeguard domain reputation against algorithmic penalties.', metrics: 'Domain Protection' },
  ],
  'marketplace-listing': [
    { title: 'Google Merchant Center Approval', desc: 'Complete account configuration, domain verification, and rapid resolution of product policy flags and suspensions.', metrics: 'Policy Verified' },
    { title: 'Real-Time Inventory Feed Synchronization', desc: 'Automated XML and API pipelines that continuously sync pricing, stock levels, and variants with zero manual intervention.', metrics: 'Live Stock Sync' },
    { title: 'Organic Free Shopping Placement', desc: 'Enrich Product, Offer, and AggregateRating Schema.org microdata to capture active buyers across Google Free Listings.', metrics: 'Organic Listings' },
  ],
};

const DEFAULT_STRATEGIC_BENEFITS = [
  { title: 'Dedicated In-House Craft Leads', desc: 'Direct access to senior engineers, designers, and growth directors working together under one roof.', metrics: 'Zero Outsourcing' },
  { title: 'Agile Two-Week Milestone Sprints', desc: 'Demonstrable working deliverables every fortnight with direct staging server access and transparent sprint reviews.', metrics: '2-Week Milestones' },
  { title: 'Radical Reporting & ROI Governance', desc: 'Live client dashboards displaying the exact metrics and telemetry we see internally, connecting digital craft to revenue.', metrics: 'Radical Openness' },
];

export default function PortfoliteServiceDetail({ initialSlug }: { initialSlug?: string } = {}) {
  const router = useRouter();
  const params = useParams();
  const slug = initialSlug || (params?.slug as string) || '';
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-black font-sans flex flex-col justify-between selection:bg-solar selection:text-white">
        <PortfoliteNav />
        <div className="py-44 text-center px-4 max-w-lg mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-solar mb-3 font-semibold">Service Not Found</p>
          <h1 className="text-4xl font-bold tracking-tight text-black">Discipline unavailable.</h1>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
            The service discipline you requested does not exist or has been renamed in our catalog.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-white">Back to All Services</span>
          </Link>
        </div>
        <PortfoliteFooter />
      </div>
    );
  }

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

  const techStack = SERVICE_TECH_STACK[service.slug] || [
    'Next.js 15 & React',
    'Enterprise Cloud APIs',
    'Custom Telemetry',
    'Automated CI/CD',
    'SQL Analytics',
    'SLA Monitoring',
  ];

  const benefits = SERVICE_STRATEGIC_BENEFITS[service.slug] || DEFAULT_STRATEGIC_BENEFITS;

  const faqs = [
    {
      q: `How long does an engagement in ${service.title} typically take to ship?`,
      a: `Initial architecture, setup, and discovery milestones run 2 to 3 weeks. Production deliverables roll out in staged 2-week agile sprints, with live staging access throughout. Ongoing growth and retainer programs provide continuous weekly optimization.`,
    },
    {
      q: 'Will our company own 100% of the intellectual property, code, and media assets?',
      a: 'Yes. Upon final delivery and sign-off, full intellectual property ownership, source code repositories, raw video footage, and design tokens are transferred to your company. We never lock clients into proprietary hosting or license fees.',
    },
    {
      q: 'How does your Noida engineering and creative team coordinate with our internal staff?',
      a: 'You receive direct access to dedicated craft directors and technical leads via Slack, Microsoft Teams, weekly sprint video calls, or in-person strategic alignment workshops at our corporate headquarters. No junior account coordinators in between.',
    },
    {
      q: 'What ongoing maintenance and Service Level Agreements (SLAs) are available?',
      a: 'We provide structured monthly retainers covering 24/7 server uptime monitoring, security patching, Core Web Vitals optimization, database maintenance, and guaranteed emergency response times within 2 hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Hero Section ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
              <Link to="/services" className="hover:text-black transition-colors font-medium">Services</Link>
              <span>/</span>
              <span className="text-solar font-semibold">{service.kicker}</span>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left"
            >
              {service.title}
            </motion.h1>

            {/* Deep Overview Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left"
            >
              {service.desc}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              {(() => {
                const consultationLabel =
                  service.cat === 'Technology'
                    ? 'Consult Technical Director'
                    : service.slug === 'film-making'
                    ? 'Consult Executive Producer'
                    : service.slug === 'corporate-world-news'
                    ? 'Consult Editorial Director'
                    : service.slug === 'seo-lead-generation'
                    ? 'Consult Search Architect'
                    : 'Consult Practice Director';

                return (
                  <a
                    href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                    className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-solar" />
                    <span>{consultationLabel}</span>
                  </a>
                );
              })()}
            </motion.div>
          </div>

          {/* Tech Ecosystem Strip */}
          <div className="mt-8 pt-6 border-t border-black/10 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3 font-medium">
              Core Capabilities &amp; Key Focus Areas:
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-black/8 text-xs font-mono text-zinc-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of Engagement: Rich Split Card Structure (matching SEO Lead Generation) ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div id="scope" className="scroll-mt-36 text-left max-w-3xl mb-12 sm:mb-16">
          <span id="erp" className="block scroll-mt-36" />
          <span id="crm" className="block scroll-mt-36" />
          <span id="lms" className="block scroll-mt-36" />
          <span id="mobile" className="block scroll-mt-36" />
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Scope of Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            What is included in this discipline.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Every submodule is executed 100% in-house with dedicated craft leads, strict QA benchmarks, and guaranteed deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {service.subs.map((sub, i) => {
            const subLower = sub.name.toLowerCase();
            const cardId = subLower.includes('erp')
              ? 'erp-module'
              : subLower.includes('crm')
              ? 'crm-module'
              : subLower.includes('lead management') || subLower.includes('lms') || subLower.includes('sales pipeline')
              ? 'lms-module'
              : subLower.includes('mobile') || subLower.includes('responsive web design')
              ? 'mobile-module'
              : subLower.includes('ecommerce') || subLower.includes('e-commerce')
              ? 'ecommerce-module'
              : subLower.replace(/[^a-z0-9]+/g, '-');

            const targetLink = sub.link || (
              subLower === 'crm' || subLower.includes('crm software') || subLower.includes('sales pipeline')
                ? '/services/crm-software'
                : subLower === 'erp' || subLower.includes('erp solution') || subLower.includes('supply chain')
                ? '/services/erp-solution'
                : subLower.includes('mobile app') || subLower.includes('mobile application') || subLower.includes('mobile development') || subLower.includes('ios & android')
                ? '/services/mobile-application'
                : subLower.includes('e-commerce') || subLower.includes('ecommerce')
                ? '/services/ecommerce-seo'
                : subLower.includes('corporate website') || subLower.includes('website development') || subLower.includes('next.js')
                ? '/services/website-development'
                : subLower.includes('custom software') || subLower.includes('lead management') || subLower.includes('lms')
                ? '/services/lead-management-system'
                : subLower.includes('social media handling') || subLower.includes('smo')
                ? '/services/social-media-handling'
                : subLower.includes('ecommerce seo and ppc') || subLower.includes('ecommerce seo & ppc')
                ? '/services/ecommerce-seo-ppc'
                : subLower.includes('ecommerce social') || subLower.includes('social media advertising')
                ? '/services/ecommerce-social-ads'
                : subLower.includes('email') || subLower.includes('sms') || subLower.includes('whatsapp')
                ? '/services/email-sms-whatsapp'
                : subLower.includes('google') && subLower.includes('ads')
                ? '/services/google-social-ads'
                : subLower === 'seo' || subLower.includes('google seo')
                ? '/services/google-seo'
                : subLower.includes('geo') || subLower.includes('generative engine')
                ? '/services/geo-services'
                : subLower.includes('aeo') || subLower.includes('answer engine')
                ? '/services/aeo-services'
                : subLower.includes('sem') || subLower.includes('search engine marketing')
                ? '/services/search-engine-marketing'
                : subLower.includes('off-page')
                ? '/services/off-page-seo'
                : subLower.includes('on-page')
                ? '/services/on-page-seo'
                : subLower.includes('marketplace') || subLower.includes('merchant center')
                ? '/services/marketplace-listing'
                : subLower.includes('local seo') || subLower.includes('gmb')
                ? '/services/local-seo'
                : subLower.includes('corporate film') || subLower.includes('commercial presentation') || subLower.includes('presentation video')
                ? '/services/commercial-presentation-video'
                : subLower.includes('tv ad') || subLower.includes('tv commercial')
                ? '/services/tv-ads'
                : subLower.includes('product demo') || subLower.includes('products demo') || subLower.includes('photoshoot')
                ? '/services/products-demo-videos'
                : subLower.includes('explainer') || subLower.includes('explanatory') || subLower.includes('ai video')
                ? '/services/product-explanatory'
                : subLower.includes('testimonial') || subLower.includes('podcast')
                ? '/services/customer-testimonial'
                : subLower.includes('interview') || subLower.includes('press release')
                ? '/services/interview-press-releases'
                : subLower.includes('corporate news') || subLower.includes('m&a') || subLower.includes('mergers')
                ? '/services/corporate-news-ma'
                : subLower.includes('market update') || subLower.includes('economic')
                ? '/services/market-update-briefs'
                : subLower.includes('industries analysis') || subLower.includes('vertical')
                ? '/services/industries-analysis-reports'
                : subLower.includes('market research') || subLower.includes('tam')
                ? '/services/market-research-tam'
                : undefined
            );

            const moduleImg = sub.img || service.img;
            const highlights = sub.highlights && sub.highlights.length > 0
              ? sub.highlights
              : [
                  'Dedicated in-house specialist craft pod',
                  'Enterprise QA benchmarking and automated unit testing',
                  'Role-based permissions and high-throughput architecture',
                  'Guaranteed SLAs, complete IP rights & full source code handover',
                ];

            return (
              <article
                key={sub.name}
                id={cardId}
                onClick={() => {
                  if (targetLink) {
                    router.push(targetLink);
                  }
                }}
                role={targetLink ? 'link' : undefined}
                tabIndex={targetLink ? 0 : undefined}
                onKeyDown={(e) => {
                  if (targetLink && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    router.push(targetLink);
                  }
                }}
                className={`group relative rounded-3xl bg-white border border-black/[0.09] hover:border-solar/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_55px_rgba(184,80,20,0.12)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 ${
                  targetLink ? 'cursor-pointer' : ''
                }`}
              >
                {/* ── Top Visual Hero Canvas ── */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={moduleImg}
                    alt={`${sub.name} — ARKA Technovation`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                  {/* Top-Right Interactive Hover Indicator */}
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-black group-hover:bg-solar group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* ── Context & Capabilities Body ── */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-white to-zinc-50/60">
                  <div>
                    {/* Top Monospace Meta Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono text-zinc-500 font-semibold tracking-wider uppercase">
                        Architecture Spec
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-solar tracking-tight leading-snug font-display transition-colors duration-200">
                      {sub.name}
                    </h3>

                    {/* Editorial Description */}
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-3 group-hover:text-zinc-800 transition-colors">
                      {sub.desc}
                    </p>

                    {/* Deliverables & Technical Capabilities Checklist */}
                    <div className="mt-5 pt-4 border-t border-black/[0.06] space-y-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-semibold mb-2.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                        Capabilities &amp; Deliverables:
                      </p>
                      <ul className="space-y-2">
                        {highlights.slice(0, 3).map((pt, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-solar shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Action Bar */}
                  <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
                    {targetLink ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-solar transition-colors">
                        <span>Explore Detailed Discipline</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    ) : <div />}

                    <Link
                      to="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black hover:text-white text-[11px] font-semibold text-zinc-700 transition-all active:scale-95 shrink-0"
                    >
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── High-Contrast Strategic Benefits Matrix (Theming Focus) ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Strategic Commercial Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Why Enterprise Leaders Partner With Us
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              We eliminate traditional agency layers, guaranteeing complete technical rigor, radical reporting transparency, and direct specialist collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-solar font-semibold uppercase tracking-wider">
                      Advantage 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-xs font-mono text-zinc-300">
                      {b.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Execution Roadmap & Deliverables Split ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
              Step-by-Step Engineering Roadmap
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              A disciplined, staged engineering lifecycle ensuring predictable delivery milestones.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Execution Roadmap */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-4">
                {service.process.map(([phase, desc], i) => (
                  <div
                    key={phase}
                    className="p-6 rounded-2xl bg-white border border-black/10 flex gap-5 items-start shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-solar font-mono text-xs shrink-0 font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-black">{phase}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deliverables List & Quick Action Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-black/10 shadow-xl space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-1">
                  Guaranteed Output
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  What you receive
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-black/10 space-y-3">
                <Link
                  to="/contact"
                  className="site-button w-full py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                  style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                >
                  <span style={{ color: '#FFFFFF' }}>Start this Project</span>
                  <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
                </Link>
                <p className="text-center text-[11px] text-zinc-500 font-mono">
                  Kickoff timeline: 3–5 business days · Enterprise SLA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Discipline FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our engineering standards, deployment cadences, and service-level agreements.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-solar' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-600 font-light leading-relaxed border-t border-black/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Navigation between adjacent services ── */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <Link
            to={`/services/${prevService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Previous Discipline</span>
              <span className="font-semibold text-black">{prevService.title}</span>
            </div>
          </Link>

          <Link
            to="/services"
            className="px-5 py-2.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-semibold text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors"
          >
            All 10 Disciplines Directory
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Next Discipline</span>
              <span className="font-semibold text-black">{nextService.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
