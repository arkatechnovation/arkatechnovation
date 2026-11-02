'use client';

import React, { useEffect, useRef } from 'react';

export type DitherVariant =
  | 'ribbon'
  | 'topographic'
  | 'interference'
  | 'fluid'
  | 'harmonic'
  | 'lattice';

interface DitherCanvasProps {
  variant: DitherVariant;
  colors: {
    dark: [number, number, number];
    mid: [number, number, number];
    light: [number, number, number];
  };
  className?: string;
}

const WIDTH = 64;
const HEIGHT = 48;
const TOTAL_FRAMES = 48;
const FRAME_DURATION_MS = 140; // Gentle, atmospheric slow-motion drift (~6.7s per full cycle)

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

// Global in-memory cache of pre-calculated frames to guarantee 0ms CPU time during scroll
const PRECOMPUTED_CACHE = new Map<string, ImageData[]>();

// Single shared RAF ticker across all visible canvases to eliminate multi-timer microtask thrashing
const activeTickers = new Set<() => void>();
let globalRafId = 0;
let lastTickTime = 0;

function globalLoop(timestamp: number) {
  if (timestamp - lastTickTime >= FRAME_DURATION_MS) {
    lastTickTime = timestamp;
    activeTickers.forEach((cb) => cb());
  }

  if (activeTickers.size > 0) {
    globalRafId = requestAnimationFrame(globalLoop);
  } else {
    globalRafId = 0;
  }
}

function registerTicker(cb: () => void) {
  activeTickers.add(cb);
  if (!globalRafId) {
    globalRafId = requestAnimationFrame(globalLoop);
  }
}

function unregisterTicker(cb: () => void) {
  activeTickers.delete(cb);
  if (activeTickers.size === 0 && globalRafId) {
    cancelAnimationFrame(globalRafId);
    globalRafId = 0;
  }
}

function getCacheKey(
  variant: DitherVariant,
  dark: [number, number, number],
  mid: [number, number, number],
  light: [number, number, number]
): string {
  return `${variant}-${dark.join('.')}-${mid.join('.')}-${light.join('.')}`;
}

function computeSingleFrame(
  ctx: CanvasRenderingContext2D,
  variant: DitherVariant,
  dark: [number, number, number],
  mid: [number, number, number],
  light: [number, number, number],
  f: number
): ImageData {
  const t = (f / TOTAL_FRAMES) * Math.PI * 2;
  const imgData = ctx.createImageData(WIDTH, HEIGHT);
  const data = imgData.data;
  let idx = 0;

  for (let y = 0; y < HEIGHT; y++) {
    const ny = y * 0.08;
    for (let x = 0; x < WIDTH; x++) {
      const nx = x * 0.06;
      let v = 0.5;

      if (variant === 'ribbon') {
        const diag = nx * 0.9 + ny * 1.1;
        const warp =
          Math.sin(diag + t) * 1.25 + Math.cos(nx * 1.2 - ny * 0.8 + t) * 0.75;
        v = Math.exp(-Math.abs(warp) * 1.35);
      } else if (variant === 'topographic') {
        const dx = (x - WIDTH * 0.5) * 0.1;
        const dy = (y - HEIGHT * 0.5) * 0.1;
        const r = Math.sqrt(dx * dx + dy * dy);
        v =
          (Math.sin(r * 1.4 - t) +
            Math.sin(nx * 1.2 + t) * 0.5 +
            Math.cos(ny * 1.2 - t) * 0.5 +
            2.0) /
          4.0;
      } else if (variant === 'interference') {
        const waveX = Math.sin(nx * 1.8 + t);
        const waveY = Math.cos(ny * 1.6 - t);
        const diag = Math.sin((nx + ny) * 1.4 + 2 * t);
        v = (waveX * waveY + diag + 2.0) / 4.0;
      } else if (variant === 'fluid') {
        const f1 = Math.sin(nx * 0.8 + ny * 0.6 + t);
        const f2 = Math.cos(nx * 1.1 - ny * 0.9 - t);
        const f3 = Math.sin((nx * 1.3 + ny * 1.2) * 0.6 + 2 * t);
        v = (f1 + f2 + f3 + 3.0) / 6.0;
      } else if (variant === 'harmonic') {
        const h1 = Math.sin(nx * 1.2 + t);
        const h2 = Math.cos(ny * 1.4 - t);
        v = Math.exp(-Math.abs(h1 + h2) * 0.9);
      } else {
        const l1 = Math.sin(nx * 2.2 + t);
        const l2 = Math.sin(ny * 2.2 - t);
        v = (l1 * l2 + 1.0) / 2.0;
      }

      const thresh = BAYER_4X4[y % 4][x % 4] / 16.0;

      if (v > thresh + 0.28) {
        data[idx] = light[0];
        data[idx + 1] = light[1];
        data[idx + 2] = light[2];
        data[idx + 3] = 255;
      } else if (v > thresh) {
        data[idx] = mid[0];
        data[idx + 1] = mid[1];
        data[idx + 2] = mid[2];
        data[idx + 3] = 255;
      } else {
        data[idx] = dark[0];
        data[idx + 1] = dark[1];
        data[idx + 2] = dark[2];
        data[idx + 3] = 255;
      }
      idx += 4;
    }
  }

  return imgData;
}

function precomputeVariantFrames(
  ctx: CanvasRenderingContext2D,
  variant: DitherVariant,
  dark: [number, number, number],
  mid: [number, number, number],
  light: [number, number, number]
): ImageData[] {
  const frames: ImageData[] = [];
  for (let f = 0; f < TOTAL_FRAMES; f++) {
    frames.push(computeSingleFrame(ctx, variant, dark, mid, light, f));
  }
  return frames;
}

export default function DitherCanvas({
  variant,
  colors,
  className = '',
}: DitherCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const { dark, mid, light } = colors;
    const cacheKey = getCacheKey(variant, dark, mid, light);

    let cachedFrames = PRECOMPUTED_CACHE.get(cacheKey);
    if (!cachedFrames) {
      cachedFrames = precomputeVariantFrames(ctx, variant, dark, mid, light);
      PRECOMPUTED_CACHE.set(cacheKey, cachedFrames);
    }

    // Paint initial static frame immediately
    ctx.putImageData(cachedFrames[0], 0, 0);

    const isReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let frameIdx = 0;
    let isRegistered = false;

    const onTick = () => {
      frameIdx = (frameIdx + 1) % TOTAL_FRAMES;
      ctx.putImageData(cachedFrames![frameIdx], 0, 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isRegistered) {
          isRegistered = true;
          registerTicker(onTick);
        } else if (!entry.isIntersecting && isRegistered) {
          isRegistered = false;
          unregisterTicker(onTick);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (isRegistered) {
        unregisterTicker(onTick);
      }
    };
  }, [variant, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none select-none ${className}`}
      style={{
        imageRendering: 'pixelated',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'contents',
      }}
      aria-hidden="true"
    />
  );
}
