'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
  ChevronDown,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ArtcraftGalaxyCanvas } from './ArtcraftGalaxyCanvas';

export interface GalaxyItem {
  title: string;
  tag: string;
  logo: string;
  color: string;
  metric?: string;
  category?: string;
  description?: string;
}

export default function ArtcraftGalaxySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galaxyInstanceRef = useRef<ArtcraftGalaxyCanvas | null>(null);

  const [selectedCard, setSelectedCard] = useState<GalaxyItem | null>(null);

  // Initialize Artcraft 3D Celestial Galaxy Canvas with milky-white light theme
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const galaxy = new ArtcraftGalaxyCanvas(container, {
        theme: 'light',
        onCardClick: (item: GalaxyItem) => {
          setSelectedCard(item);
        },
      });

      galaxyInstanceRef.current = galaxy;
    } catch (err) {
      console.warn('Failed to initialize ArtcraftGalaxyCanvas:', err);
    }

    return () => {
      if (galaxyInstanceRef.current) {
        galaxyInstanceRef.current.destroy();
        galaxyInstanceRef.current = null;
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const el = document.getElementById('home-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="galaxy-showcase"
      className="relative w-full h-screen min-h-[720px] max-h-[1050px] bg-[#FAF9F5] text-void border-y border-void/10 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse 95% 75% at 50% 50%, #FFFFFF 0%, #FAF8F5 55%, #F0EEE6 100%)',
      }}
    >
      {/* Subtle Milky Paper Texture / Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Dynamic Warm Ambient Light Pool in Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[450px] blur-[120px] rounded-full opacity-25 bg-[#FF8A00]"
      />

      {/* ── 3D WebGL Galaxy Canvas Stage (Fills entire screen) ──────── */}
      <div
        ref={containerRef}
        id="home-galaxy-canvas-container"
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Soft Vignette Mask around edges so outer orbit melts into milky-white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(250,249,245,0.65)_78%,#FAF9F5_100%)]"
      />


      {/* ── BOTTOM CONTROLS & GUIDES ─────────────────────────────────── */}
      {/* Bottom Left Pointer Guide */}
      <div className="pointer-events-none absolute bottom-6 left-4 sm:left-8 lg:left-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 border border-void/10 shadow-md backdrop-blur-md pointer-events-auto">
          <Compass className="h-3.5 w-3.5 text-solar animate-spin" style={{ animationDuration: '14s' }} />
          <span className="mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-void/70">
            Drag to tilt • Hover to lock • Click logo
          </span>
        </div>
      </div>

      {/* Bottom Center Scroll to Showcase Button */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNextSection}
          data-hover
          aria-label="Continue to Client Showcase"
          className="pointer-events-auto flex flex-col items-center gap-1 group text-void/60 hover:text-void transition-colors"
        >
          <span className="mono text-[9px] uppercase tracking-[0.22em] font-medium opacity-80 group-hover:opacity-100">
            Explore Showcase
          </span>
          <div className="w-8 h-8 rounded-full border border-void/15 bg-white/90 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-void group-hover:scale-110">
            <ChevronDown className="h-4 w-4 text-void/70 group-hover:text-void" />
          </div>
        </button>
      </div>

      {/* Bottom Right Direct Link */}
      <div className="pointer-events-none absolute bottom-6 right-4 sm:right-8 lg:right-12 z-20">
        <Link
          to="/services/crm-software"
          data-hover
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-void/15 hover:bg-void hover:text-paper text-void shadow-md backdrop-blur-md transition-all duration-300 mono text-[10px] uppercase tracking-[0.16em]"
        >
          <span>All Capabilities</span>
          <ExternalLink className="h-3 w-3" />
        </Link>
      </div>

      {/* ── LOGO SPOTLIGHT MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-void/80 backdrop-blur-md"
            />

            {/* Modal Card (Logo-Centric, NO stock photos) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg bg-paper border border-void/15 rounded-3xl overflow-hidden shadow-2xl text-void"
            >
              {/* Header with Prominent Official Logo */}
              <div className="relative p-6 sm:p-8 bg-void text-paper overflow-hidden">
                {/* Brand ambient glow */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-35"
                  style={{ backgroundColor: selectedCard.color || '#fff' }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCard(null)}
                  aria-label="Close dialog"
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-paper/10 hover:bg-paper/20 border border-paper/15 flex items-center justify-center text-paper transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Large Official Logo Icon */}
                  <div
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-paper/10 border border-paper/15 p-3.5 flex items-center justify-center shadow-lg backdrop-blur-md"
                    style={{ borderColor: `${selectedCard.color}55` }}
                  >
                    <img
                      src={`/assets/galaxy/logos/${selectedCard.logo}`}
                      alt={selectedCard.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full mono text-[9px] uppercase tracking-[0.16em] font-bold"
                        style={{ backgroundColor: selectedCard.color, color: '#0B0D12' }}
                      >
                        {selectedCard.tag || 'SYSTEM NODE'}
                      </span>
                    </div>
                    <h3 className="mt-1.5 display text-xl sm:text-2xl font-normal text-paper">
                      {selectedCard.title}
                    </h3>
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
                      {selectedCard.category || 'Production Architecture'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 bg-paper">
                <p className="text-[14px] font-light text-void/75 leading-relaxed">
                  {selectedCard.description ||
                    'Delivered as part of LoudSRL production architecture. Engineered for high performance, resilient scalability, and enterprise SLA guarantees.'}
                </p>

                {/* Metric callout */}
                {selectedCard.metric && (
                  <div className="mt-4 p-3 rounded-2xl bg-void/5 border border-void/10 flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 shrink-0" style={{ color: selectedCard.color }} />
                    <span className="mono text-[11px] font-medium text-void/90">
                      {selectedCard.metric}
                    </span>
                  </div>
                )}

                <div className="mt-6 pt-5 border-t border-void/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: selectedCard.color }} />
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-void/60">
                      Production Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Link
                      to="/contact"
                      onClick={() => setSelectedCard(null)}
                      className="h-[38px] px-5 rounded-full bg-void text-paper hover:bg-solar hover:text-void mono text-[10px] uppercase tracking-[0.16em] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire Now</span>
                    </Link>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="h-[38px] px-4 rounded-full border border-void/20 hover:border-void mono text-[10px] uppercase tracking-[0.16em] text-void/80 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
