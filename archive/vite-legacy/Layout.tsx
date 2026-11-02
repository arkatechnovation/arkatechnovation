import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { frame, cancelFrame } from 'framer-motion';
import FloatingSocialWidget from './FloatingSocialWidget';

export default function Layout() {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const l = new Lenis({
      lerp: prefersReducedMotion ? 1 : 0.1,
      duration: prefersReducedMotion ? 0 : 1.0,
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
      autoRaf: false,
    });
    lenis.current = l;

    function update(data: { timestamp: number }) {
      l.raf(data.timestamp);
    }
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      l.destroy();
      lenis.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <a className="site-skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Floating Glassmorphic Social & Quick Connect Hub */}
      <FloatingSocialWidget />
    </div>
  );
}
