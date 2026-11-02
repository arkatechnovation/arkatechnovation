'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';

const FloatingSocialWidget = dynamic(() => import('./FloatingSocialWidget'), {
  ssr: false,
});

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    let t: number | ReturnType<typeof setTimeout> | null = null;
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      t = (window as unknown as { requestIdleCallback: (cb: () => void, opt?: { timeout: number }) => number }).requestIdleCallback(() => setShowWidget(true), { timeout: 1500 });
    } else {
      t = setTimeout(() => setShowWidget(true), 800);
    }
    return () => {
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof t === 'number') {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(t);
      } else if (t) {
        clearTimeout(t as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  useEffect(() => {
    let l: Lenis | null = null;
    let timerId: number | ReturnType<typeof setTimeout> | null = null;

    const initLenis = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      l = new Lenis({
        duration: prefersReducedMotion ? 0 : 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !prefersReducedMotion,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.1,
        syncTouch: false,
        autoRaf: true,
      });
      lenis.current = l;
      if (typeof window !== 'undefined') {
        (window as unknown as { __lenis?: Lenis | null }).__lenis = l;
      }
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      timerId = (window as unknown as { requestIdleCallback: (cb: () => void, opt?: { timeout: number }) => number }).requestIdleCallback(initLenis, { timeout: 1000 });
    } else {
      timerId = setTimeout(initLenis, 300);
    }

    return () => {
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof timerId === 'number') {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(timerId);
      } else if (timerId) {
        clearTimeout(timerId as ReturnType<typeof setTimeout>);
      }
      if (l) l.destroy();
      lenis.current = null;
      if (typeof window !== 'undefined') {
        (window as unknown as { __lenis?: Lenis | null }).__lenis = null;
      }
    };
  }, []);

  // Smoothly scroll to target anchors on route changes or hash jumps
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToAnchor = () => {
      const hash = window.location.hash;
      if (!hash) return false;
      try {
        const target = document.querySelector(hash);
        if (target) {
          if (lenis.current) {
            lenis.current.scrollTo(target as HTMLElement, { offset: -90 });
          } else {
            const top = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: 'smooth' });
          }
          return true;
        }
      } catch {}
      return false;
    };

    if (window.location.hash) {
      const t1 = setTimeout(scrollToAnchor, 120);
      const t2 = setTimeout(scrollToAnchor, 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      if (lenis.current) {
        lenis.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      try {
        const target = document.querySelector(hash);
        if (target) {
          if (lenis.current) {
            lenis.current.scrollTo(target as HTMLElement, { offset: -90 });
          } else {
            const top = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      } catch {}
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <a className="site-skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Floating Glassmorphic Social & Quick Connect Hub */}
      {showWidget && <FloatingSocialWidget />}
    </div>
  );
}
