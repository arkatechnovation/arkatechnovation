'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from '@/components/Link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  imgWebp: string;
  imgMobileWebp?: string;
  imgPng: string;
  bgColor: string;
  accentColor: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    subtitle: 'Innovate. Build. Grow. Custom enterprise software solutions.',
    href: '/services/development',
    imgWebp: '/images/hero/slider/hero-slide-1.webp',
    imgMobileWebp: '/images/hero/slider/hero-slide-1-mobile.webp',
    imgPng: '/images/hero/HERO IMAGES/1.png',
    bgColor: '#f6f8fd',
    accentColor: '#1060E0',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Innovate. Market. Grow. Performance media and precision growth.',
    href: '/services/digital-marketing',
    imgWebp: '/images/hero/slider/hero-slide-2.webp',
    imgPng: '/images/hero/HERO IMAGES/2.png',
    bgColor: '#fdf8f2',
    accentColor: '#E8742C',
  },
  {
    id: 'search-evolution-services',
    title: 'SEO, GEO & AEO Services',
    subtitle: 'Search Evolution Services. Get found everywhere — on Search, AI and beyond.',
    href: '/seo-lead-generation',
    imgWebp: '/images/hero/slider/hero-slide-3.webp',
    imgPng: '/images/hero/HERO IMAGES/3.png',
    bgColor: '#f8fafe',
    accentColor: '#0284C7',
  },
  {
    id: 'film-production',
    title: 'Film Production & Cinema',
    subtitle: 'Create. Capture. From concept to screen — powerful brand cinema.',
    href: '/services/film-making',
    imgWebp: '/images/hero/slider/hero-slide-4.webp',
    imgPng: '/images/hero/HERO IMAGES/4.png',
    bgColor: '#eeeffc',
    accentColor: '#6366F1',
  },
  {
    id: 'corporate-world-news',
    title: 'Corporate World News',
    subtitle: 'Global & Insights. Executive broadcast journalism & market intelligence.',
    href: '/corporate-world-news',
    imgWebp: '/images/hero/slider/hero-slide-5.webp',
    imgPng: '/images/hero/HERO IMAGES/5.png',
    bgColor: '#e1e9fa',
    accentColor: '#0F52BA',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export default function PortfoliteHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const swipedRef = useRef<boolean>(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const [hasInteracted, setHasInteracted] = useState(false);

  // Listen for user engagement before enabling secondary slide assets & autoplay
  useEffect(() => {
    if (hasInteracted) return;

    const handleInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener('pointermove', handleInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointermove', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted]);

  // Autoplay timer: cycles every 5s once engaged, pauses on hover or touch
  useEffect(() => {
    if (!hasInteracted || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [hasInteracted, isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
    swipedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    if (Math.abs(diffX) > 15 && Math.abs(diffX) > Math.abs(diffY)) {
      swipedRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Minimum swipe threshold of 35px, and ensure gesture was predominantly horizontal
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTimeout(() => {
        swipedRef.current = false;
      }, 100);
    } else {
      swipedRef.current = false;
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (swipedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      swipedRef.current = false;
    }
  };

  const currentSlide = SLIDES[activeIndex];

  return (
    <section
      id="hero"
      className="relative w-full pt-[70px] sm:pt-[78px] text-black font-framer select-none overflow-hidden transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: currentSlide.bgColor }}
      aria-label="ARKA Technovation Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Semantic H1 tag for Googlebot, SEO ranking & Screen Reader Accessibility */}
      <h1 className="sr-only">
        ARKA Technovation Private Limited — Enterprise Software, Web Platforms & Digital Growth Systems
      </h1>

      {/* Edge-to-Edge Hero Slider Container: exact 1946/808 banner aspect ratio (zero top or bottom whitespace) */}
      <div className="relative w-full aspect-[1946/808] overflow-hidden flex items-center justify-center bg-transparent touch-pan-y select-none">
        {/* Slides Track */}
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const transitionClass = hasInteracted ? 'transition-opacity duration-700 ease-in-out' : '';
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center ${transitionClass} ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
              style={{ backgroundColor: slide.bgColor }}
              aria-hidden={!isActive}
            >
              <Link
                href={slide.href}
                onClick={handleLinkClick}
                tabIndex={isActive ? 0 : -1}
                className="block w-full h-full cursor-pointer focus:outline-none relative flex items-center justify-center"
                aria-label={`${slide.title} — ${slide.subtitle}`}
              >
                {(index === 0 || hasInteracted || isActive) && (
                  <picture className="block w-full h-full flex items-center justify-center">
                    <source
                      media="(min-width: 769px)"
                      srcSet={slide.imgWebp}
                      type="image/webp"
                    />
                    <img
                      src={slide.imgMobileWebp || slide.imgWebp}
                      alt={`${slide.title} — ARKA Technovation`}
                      width={1946}
                      height={808}
                      className="w-full h-full object-contain object-center select-none"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      decoding="async"
                    />
                  </picture>
                )}
              </Link>
            </div>
          );
        })}

        {/* Previous Slide Button (Hidden on mobile, visible on desktop/tablet) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          className="hidden sm:flex absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 items-center justify-center transition-[background-color,transform] duration-200 active:scale-95 shadow-lg group focus:outline-none"
          aria-label="Previous Hero Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
        </button>

        {/* Next Slide Button (Hidden on mobile, visible on desktop/tablet) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
          }}
          className="hidden sm:flex absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 items-center justify-center transition-[background-color,transform] duration-200 active:scale-95 shadow-lg group focus:outline-none"
          aria-label="Next Hero Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
}
