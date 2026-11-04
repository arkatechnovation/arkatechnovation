'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Info,
  Share2,
  Check,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Web & Apps' | 'Enterprise Systems' | 'Cinema & Films' | 'Branding & UI/UX' | 'Performance & SEO';
  image: string;
  client: string;
  year: string;
  aspect: 'landscape' | 'portrait' | 'square';
  description: string;
  deliverables: string[];
  stats?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'precision-cad',
    title: 'Precision CAD Industrial Portal',
    category: 'Web & Apps',
    image: '/images/gallery/gallery-01-web-apps.webp',
    client: 'Precision CAD International',
    year: '2024',
    aspect: 'landscape',
    description: 'High-precision industrial component configurator and engineering portal with sub-second page transitions and WebGL 3D previews.',
    deliverables: ['Next.js 15', 'Three.js 3D Viewer', 'Headless CMS', 'Global CDN'],
    stats: '100% Core Web Vitals',
  },
  {
    id: 'maison-d2c',
    title: 'Maison Luxury D2C Experience',
    category: 'Branding & UI/UX',
    image: '/images/gallery/gallery-02-branding-ui.webp',
    client: 'Maison Artisans',
    year: '2024',
    aspect: 'portrait',
    description: 'Bespoke high-converting e-commerce storefront with tactile micro-interactions, custom checkout flow, and international currency localization.',
    deliverables: ['Shopify Plus', 'Atomic Design System', 'Conversion Optimization', 'Motion UI'],
    stats: '+184% Checkout Lift',
  },
  {
    id: 'northline-cinema',
    title: 'Northline Cinematic Commercial',
    category: 'Cinema & Films',
    image: '/images/gallery/gallery-03-cinema-film.webp',
    client: 'Northline Industrial Ltd.',
    year: '2023',
    aspect: 'landscape',
    description: '4K RED digital cinema commercial and factory documentary showcasing heavy machinery automation and global export infrastructure.',
    deliverables: ['4K Cinema Camera', 'Drone Aerial Cinematography', 'Sound Design', 'Color Grading'],
    stats: '2.4M Video Views',
  },
  {
    id: 'enterprise-crm',
    title: 'CoreOps Enterprise CRM Platform',
    category: 'Enterprise Systems',
    image: '/images/gallery/gallery-04-enterprise-crm.webp',
    client: 'CoreOps Logistics',
    year: '2024',
    aspect: 'landscape',
    description: 'Multi-tenant ERP and customer relationship engine unifying sales pipelines, warehouse inventory, and automated invoice reconciliation.',
    deliverables: ['React 19', 'Node.js Microservices', 'PostgreSQL', 'Role-Based Access'],
    stats: '99.99% Cloud Uptime',
  },
  {
    id: 'plant-seo',
    title: 'Plant Dynamics Organic Authority',
    category: 'Performance & SEO',
    image: '/images/gallery/gallery-05-seo-analytics.webp',
    client: 'Plant Dynamics',
    year: '2024',
    aspect: 'portrait',
    description: 'Multi-tier topical authority SEO engine capturing Top 3 Google search rankings for 180+ competitive manufacturing keywords.',
    deliverables: ['Technical SEO Architecture', 'Topical Authority Clusters', 'Schema.org Markup', 'Backlink Acquisition'],
    stats: '+340% Inbound Leads',
  },
  {
    id: 'meridian-health',
    title: 'Meridian Health Patient Portal',
    category: 'Web & Apps',
    image: '/images/gallery/gallery-06-healthcare-portal.webp',
    client: 'Meridian Healthcare Network',
    year: '2023',
    aspect: 'landscape',
    description: 'HIPAA-compliant telemedicine booking engine with real-time doctor availability sync, medical report vaults, and accessible WCAG 2.2 UI.',
    deliverables: ['Next.js App Router', 'WCAG 2.2 AA Compliance', 'End-to-End Encryption', 'SMS/WhatsApp API'],
    stats: '45,000+ Appointments',
  },
  {
    id: 'botblox-robotics',
    title: 'BotBlox Robotics Hardware Interface',
    category: 'Enterprise Systems',
    image: '/images/gallery/gallery-07-robotics-hardware.webp',
    client: 'BotBlox Robotics',
    year: '2024',
    aspect: 'square',
    description: 'Telemetry dashboard for autonomous warehouse robots displaying live battery thermal curves, routing grids, and collision diagnostics.',
    deliverables: ['WebSocket Realtime', 'Canvas 2D Data Visualizer', 'IoT Device Sync', 'Edge Deployment'],
    stats: '< 15ms Telemetry Latency',
  },
  {
    id: 'kestrix-thermal',
    title: 'Kestrix Thermal Drone Analytics',
    category: 'Performance & SEO',
    image: '/images/gallery/gallery-08-thermal-analytics.webp',
    client: 'Kestrix Green Building Tech',
    year: '2023',
    aspect: 'portrait',
    description: 'Commercial landing platform and heat-loss building audit visualizer backed by targeted PPC geofencing and thought-leadership whitepapers.',
    deliverables: ['Interactive Heatmaps', 'Addressable Geofencing', 'Lead Scoring Engine', 'PR Distribution'],
    stats: '4.6x Ad ROAS',
  },
  {
    id: 'skipper-maritime',
    title: 'Skipper Maritime Fleet Tracking',
    category: 'Web & Apps',
    image: '/images/gallery/gallery-09-maritime-logistics.webp',
    client: 'Skipper Shipping Lines',
    year: '2024',
    aspect: 'landscape',
    description: 'Global cargo vessel telemetry interface tracking container GPS routes, weather routing alerts, and dock customs clearance status.',
    deliverables: ['Leaflet Map Engine', 'Offline PWA Support', 'Multilingual i18n', 'Cargo API Sync'],
    stats: '1,200 Vessels Tracked',
  },
];

const CATEGORIES = [
  'All',
  'Web & Apps',
  'Enterprise Systems',
  'Cinema & Films',
  'Branding & UI/UX',
  'Performance & SEO',
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [showSpecs, setShowSpecs] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (!filteredItems.length) return;
    setDirection(-1);
    setIsZoomed(false);
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setActiveItem(filteredItems[prevIdx]);
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (!filteredItems.length) return;
    setDirection(1);
    setIsZoomed(false);
    const nextIdx = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setActiveItem(filteredItems[nextIdx]);
  }, [currentIndex, filteredItems]);

  const handleCopyLink = useCallback(() => {
    if (typeof window !== 'undefined' && activeItem) {
      const url = `${window.location.origin}/gallery#${activeItem.id}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  }, [activeItem]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : dir < 0 ? -50 : 0,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : dir < 0 ? 50 : 0,
      opacity: 0,
      scale: 0.98,
    }),
  };

  // Lock body scroll and register keyboard controls (ESC, Left, Right, Z, I)
  useEffect(() => {
    if (!activeItem) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
        setIsZoomed(false);
        setShowSpecs(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key.toLowerCase() === 'z') {
        setIsZoomed((prev) => !prev);
      } else if (e.key.toLowerCase() === 'i') {
        setShowSpecs((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E8742C] selection:text-white">
      {/* Navigation */}
      <PortfoliteNav />

      {/* ── Editorial Header Section (NO BADGES) ── */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 border-b border-black/10 bg-[#FAF9F5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#B84E12] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-black font-medium">Visual Gallery</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#B84E12] mb-3">
              Curated Portfolio Archive
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08] mb-4">
              Visual Gallery &amp; Production Showcase
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
              A curated visual archive of full-stack web platforms, corporate cinema films, enterprise software architectures, and high-conversion growth systems created in Sector 63, Noida.
            </p>
          </div>

          {/* Minimalist Category Filter Strip (NO PILL BADGES) */}
          <div className="mt-10 pt-8 border-t border-black/10 flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap pb-1.5 transition-colors cursor-pointer border-b-2 uppercase tracking-wider ${active
                      ? 'text-black font-bold border-black'
                      : 'text-zinc-500 hover:text-black border-transparent font-medium'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Cards Grid (PURE VISUAL IMAGE TILES — NO DATA CLUTTER) ── */}
      <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-100 border border-black/10 hover:border-black/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={idx < 2}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Minimalist Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cinematic Full-Viewport Gallery Image Preview Experience ── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1000] flex flex-col justify-between bg-[#08080a]/96 backdrop-blur-2xl text-white select-none overflow-hidden"
            onClick={() => {
              if (isZoomed) setIsZoomed(false);
              else setActiveItem(null);
            }}
          >
            {/* Ambient Background Glow matching the active image */}
            <div
              className="absolute inset-0 -z-10 opacity-25 blur-3xl scale-110 pointer-events-none transition-all duration-700"
              style={{
                backgroundImage: `url(${activeItem.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />

            {/* ── Top Header Command Bar ── */}
            <header
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shrink-0"
            >
              {/* Left: Project Number + Category + Client */}
              <div className="flex items-center gap-2.5 sm:gap-4 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white font-bold border border-white/15">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                </span>
                <span className="inline-flex items-center gap-1.5 text-zinc-300 font-medium uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  {activeItem.category}
                </span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="hidden sm:inline text-zinc-300 font-medium truncate max-w-[200px] md:max-w-xs">
                  {activeItem.client}
                </span>
                <span className="hidden md:inline text-white/20">·</span>
                <span className="hidden md:inline text-zinc-400 font-mono">
                  {activeItem.year}
                </span>
              </div>

              {/* Right: Actions (Zoom, Specs, Share, Close) */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Zoom Toggle */}
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer ${isZoomed
                      ? 'bg-white text-black border-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                    }`}
                  title="Toggle Zoom (Z)"
                  aria-label={isZoomed ? 'Fit image to screen' : 'Zoom into image'}
                >
                  {isZoomed ? <ZoomOut size={14} /> : <ZoomIn size={14} />}
                  <span className="hidden sm:inline">{isZoomed ? 'Fit' : 'Zoom'}</span>
                </button>

                {/* Specs Drawer Toggle */}
                <button
                  type="button"
                  onClick={() => setShowSpecs((prev) => !prev)}
                  className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer ${showSpecs
                      ? 'bg-white text-black border-white shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                    }`}
                  title="Toggle Engineering Specs (I)"
                  aria-label="Toggle Project Specifications"
                >
                  <Info size={14} />
                  <span className="hidden sm:inline">Specs</span>
                </button>

                {/* Quick Share Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  title="Copy link to this project"
                  aria-label="Copy project link"
                >
                  {copiedLink ? <Check size={14} className="text-white" /> : <Share2 size={14} />}
                  <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
                </button>

                {/* Sleek Minimalist Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveItem(null);
                    setIsZoomed(false);
                    setShowSpecs(false);
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md flex items-center justify-center transition-all active:scale-95 cursor-pointer ml-1.5 group"
                  aria-label="Close image preview"
                  title="Close (Esc)"
                >
                  <X size={16} className="transition-transform duration-200 group-hover:rotate-90 text-zinc-300 group-hover:text-white" />
                </button>
              </div>
            </header>

            {/* ── Main Canvas Stage ── */}
            <div
              className="relative flex-1 w-full min-h-0 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden"
              onClick={() => {
                if (isZoomed) setIsZoomed(false);
              }}
            >
              {/* Floating Left Chevron */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 active:scale-95 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-2xl group cursor-pointer"
                title="Previous Project (Left Arrow)"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Floating Right Chevron */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-white/20 active:scale-95 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-2xl group cursor-pointer"
                title="Next Project (Right Arrow)"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Image Container with Animation */}
              <motion.div
                key={activeItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed((prev) => !prev);
                  }}
                  className={`relative w-full h-full max-h-[56vh] sm:max-h-[64vh] md:max-h-[68vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${isZoomed
                      ? 'scale-125 sm:scale-135 md:scale-145 cursor-zoom-out'
                      : 'scale-100 cursor-zoom-in'
                    }`}
                  style={{
                    boxShadow: '0 25px 70px -15px rgba(0,0,0,0.85), 0 0 50px rgba(255,255,255,0.03)',
                  }}
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain select-none pointer-events-none"
                  />
                </div>
              </motion.div>
            </div>

            {/* ── Bottom Deck: Expandable Specs Drawer + Floating Info Bar + Filmstrip ── */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full z-50 flex flex-col bg-gradient-to-t from-black via-black/90 to-transparent shrink-0"
            >
              {/* Expandable Technical Specs Drawer */}
              <AnimatePresence>
                {showSpecs && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-white/10 bg-[#0c0c10]/95 backdrop-blur-2xl"
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 grid sm:grid-cols-2 gap-6 text-xs font-mono">
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-zinc-400 font-semibold uppercase tracking-wider">
                          <Layers size={14} className="text-zinc-400" />
                          <span>Technical Deliverables &amp; Stack</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 text-zinc-200">
                          {activeItem.deliverables.map((d, i) => (
                            <li key={i} className="flex items-center gap-2 bg-white/5 px-2.5 py-1.5 rounded-md border border-white/10">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                              <span className="truncate">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3 text-zinc-400 font-semibold uppercase tracking-wider">
                          <Sparkles size={14} className="text-zinc-400" />
                          <span>Production &amp; Engineering Pod</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-zinc-200">
                          <div className="bg-white/5 p-2 rounded-md border border-white/10">
                            <span className="text-zinc-500 block text-[10px] uppercase">Client Entity</span>
                            <span className="text-white font-medium truncate block">{activeItem.client}</span>
                          </div>
                          <div className="bg-white/5 p-2 rounded-md border border-white/10">
                            <span className="text-zinc-500 block text-[10px] uppercase">Delivery Year</span>
                            <span className="text-white font-medium block">{activeItem.year}</span>
                          </div>
                          <div className="bg-white/5 p-2 rounded-md border border-white/10">
                            <span className="text-zinc-500 block text-[10px] uppercase">Engineering HQ</span>
                            <span className="text-white font-medium truncate block">Sector 63, Noida</span>
                          </div>
                          <div className="bg-white/5 p-2 rounded-md border border-white/10">
                            <span className="text-zinc-500 block text-[10px] uppercase">Source Code Handover</span>
                            <span className="text-zinc-200 font-medium block">100% IP Transferred</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Bottom Project Overview Bar */}
              <div className="px-4 sm:px-8 py-3.5 bg-black/60 backdrop-blur-xl border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white truncate mb-1">
                    {activeItem.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light line-clamp-1 max-w-3xl">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowSpecs((prev) => !prev)}
                    className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-2 rounded-full border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
                  >
                    {showSpecs ? 'Hide Details' : 'Details & Specs'}
                  </button>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <span>Scope Project</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Interactive Thumbnail Filmstrip */}
              <div className="w-full px-4 sm:px-8 py-2.5 bg-black/80 backdrop-blur-2xl border-t border-white/10 flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none shrink-0">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest hidden md:inline mr-1 shrink-0">
                  Archive ({filteredItems.length}):
                </span>
                {filteredItems.map((item, idx) => {
                  const isSelected = item.id === activeItem.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setActiveItem(item);
                        setIsZoomed(false);
                      }}
                      className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-md overflow-hidden shrink-0 transition-all duration-200 cursor-pointer border ${isSelected
                          ? 'border-white ring-2 ring-white/60 scale-105 opacity-100 shadow-lg'
                          : 'border-white/15 opacity-40 hover:opacity-90 hover:border-white/40'
                        }`}
                      title={`${item.title} — ${item.client}`}
                      aria-label={`View project ${item.title}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Studio Consultation Strip ── */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white border-t border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Studio &amp; Engineering Center
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Want to Review Full Project Source Code or Film Repertoire?
            </h3>
            <p className="mt-2 text-zinc-400 text-sm font-light leading-relaxed">
              Visit our headquarters at Rayos Business Park, Sector 63, Noida to review working prototypes, 4K color grading suites, and live telemetry dashboards.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span>Schedule Studio Visit</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}
