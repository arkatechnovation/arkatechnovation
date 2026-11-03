import React from 'react';
import Link from 'next/link';

export default function PortfoliteHero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-[60px] lg:pt-[96px] bg-white text-black font-framer select-none overflow-hidden"
      aria-label="ARKA Technovation Hero"
    >
      {/* Semantic H1 tag for Googlebot, SEO ranking & Screen Reader Accessibility */}
      <h1 className="sr-only">
        ARKA Technovation Private Limited — Enterprise Software, Web Platforms & Digital Growth Systems
      </h1>

      {/* Full-Bleed Edge-to-Edge Hero Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
        <Link
          href="/contact"
          className="block w-full h-full cursor-pointer focus:outline-none"
          aria-label="ARKA Technovation - Innovate. Build. Grow. Your Partner for Progress"
        >
          <picture className="block w-full h-full">
            <source media="(max-width: 768px)" srcSet="/images/hero/hero-main-mobile.webp" type="image/webp" width={640} height={360} />
            <source media="(min-width: 769px)" srcSet="/images/hero/hero-main.webp" type="image/webp" width={1440} height={810} />
            <img
              src="/images/hero/hero-main-mobile.webp"
              alt="ARKA Technovation - Innovate. Build. Grow. Your Partner for Progress"
              width={640}
              height={360}
              className="w-full h-full object-cover select-none"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </picture>
        </Link>
      </div>
    </section>
  );
}
