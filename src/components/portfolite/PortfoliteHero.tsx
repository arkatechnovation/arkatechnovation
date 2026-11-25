'use client';

import React, { useEffect, useRef } from 'react';

const HERO_VIDEO_SRC = '/assets/video_hero/arka-technovation-hero.mp4';
const HERO_POSTER_SRC = '/assets/video_hero/hero-poster.webp';

export default function PortfoliteHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Permanently mute so browsers allow instant autoplay across desktop & mobile
    video.defaultMuted = true;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Ignore autoplay interruption in low-power or strict browser modes
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-[70px] sm:pt-[78px] lg:pt-[114px] bg-white text-black font-framer select-none overflow-hidden"
      aria-label="ARKA Technovation Hero Video"
    >
      {/* Semantic H1 tag for Googlebot, SEO ranking & Screen Reader Accessibility */}
      <h1 className="sr-only">
        ARKA Technovation Private Limited — Enterprise Software, Web Platforms & Digital Growth Systems
      </h1>

      {/* Edge-to-Edge Hero Video Container with Luminous Champagne-Gold Wash */}
      {/* min-h: ensures cinematic height on small/low-res screens (720p/900p) */}
      {/* max-h: caps at available viewport on large screens (1080p, 1440p, 4K) so it fills the view without spilling */}
      <div className="relative w-full aspect-video min-h-[560px] md:min-h-[640px] lg:min-h-[720px] xl:min-h-[840px] max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-78px)] lg:max-h-[calc(100vh-114px)] overflow-hidden bg-[radial-gradient(ellipse_at_center,_#FFFDF6_0%,_#FBF2DD_55%,_#F4E2B8_100%)] border-y border-[#E6D5AE]/60">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center block mix-blend-multiply brightness-[1.02] contrast-[1.05] saturate-[1.08]"
          poster={HERO_POSTER_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="ARKA Technovation Brand Showcase Video"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Soft Warm Amber Corner Glow for Studio Depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_80px_rgba(180,130,30,0.08)]"
        />
      </div>
    </section>
  );
}
