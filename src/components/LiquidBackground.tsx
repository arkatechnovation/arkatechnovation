'use client';

import { useEffect, useRef } from 'react';

type Color = [number, number, number];
type Preset = {
  colors: [Color, Color, Color];
  contrast: number;
  lighting: number;
  spin: number;
  speed: number;
  amount: number;
  depth: number;
  zoom: number;
};

function color(hex: string): Color {
  const value = Number.parseInt(hex.slice(1), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

// 12 distinct, vibrant fluid shader palettes
export const PRESET_NAMES = [
  'Solar Fire',
  'Cobalt Sapphire',
  'Cyber Emerald',
  'Royal Amethyst',
  'Arctic Cyan',
  'Terracotta Crimson',
  'Obsidian Gold',
  'Aurora Mint',
  'Sunset Magenta',
  'Titanium Slate',
  'Molten Copper',
  'Electric Indigo',
] as const;

export const PRESET_ACCENTS = [
  '#e8742c',
  '#4f75f8',
  '#10b981',
  '#a855f7',
  '#06b6d4',
  '#f43f5e',
  '#eab308',
  '#2dd4bf',
  '#fb7185',
  '#94a3b8',
  '#fb923c',
  '#818cf8',
] as const;

export const PRESETS: Preset[] = [
  // 0: Solar Fire
  { colors: [color('#7b371c'), color('#e8742c'), color('#160c13')], contrast: 2.9, lighting: .35, spin: 1.2, speed: 3.0, amount: .65, depth: 6, zoom: 5 },
  // 1: Cobalt Sapphire
  { colors: [color('#0d1849'), color('#4f75f8'), color('#030617')], contrast: 3.2, lighting: .38, spin: 0.5, speed: 2.2, amount: .45, depth: 8, zoom: 5 },
  // 2: Cyber Emerald
  { colors: [color('#063826'), color('#10b981'), color('#02140d')], contrast: 3.0, lighting: .35, spin: -0.8, speed: 2.4, amount: .5, depth: 7, zoom: 5 },
  // 3: Royal Amethyst
  { colors: [color('#3d1a58'), color('#a855f7'), color('#0f051a')], contrast: 2.8, lighting: .32, spin: 0.6, speed: 2.0, amount: .55, depth: 7, zoom: 6 },
  // 4: Arctic Cyan
  { colors: [color('#0e4b61'), color('#06b6d4'), color('#041720')], contrast: 3.4, lighting: .34, spin: -0.4, speed: 2.2, amount: .6, depth: 6, zoom: 5 },
  // 5: Terracotta Crimson
  { colors: [color('#6b1d1d'), color('#f43f5e'), color('#1a0508')], contrast: 2.8, lighting: .30, spin: 1.0, speed: 2.5, amount: .7, depth: 6, zoom: 4.8 },
  // 6: Obsidian Gold
  { colors: [color('#543d0e'), color('#eab308'), color('#120d03')], contrast: 3.5, lighting: .38, spin: 0.7, speed: 2.2, amount: .45, depth: 8, zoom: 5.2 },
  // 7: Aurora Mint
  { colors: [color('#083344'), color('#2dd4bf'), color('#04121a')], contrast: 3.0, lighting: .32, spin: -0.6, speed: 1.8, amount: .5, depth: 7, zoom: 5.5 },
  // 8: Sunset Magenta
  { colors: [color('#581c87'), color('#fb7185'), color('#1c051a')], contrast: 2.7, lighting: .32, spin: 0.9, speed: 2.6, amount: .6, depth: 6, zoom: 4.8 },
  // 9: Titanium Slate
  { colors: [color('#334155'), color('#94a3b8'), color('#0a0f18')], contrast: 3.8, lighting: .28, spin: 0.3, speed: 1.6, amount: .4, depth: 7, zoom: 5.0 },
  // 10: Molten Copper
  { colors: [color('#7c2d12'), color('#fb923c'), color('#1c0903')], contrast: 3.1, lighting: .36, spin: -1.0, speed: 2.8, amount: .65, depth: 6, zoom: 4.7 },
  // 11: Electric Indigo
  { colors: [color('#1e1b4b'), color('#818cf8'), color('#070617')], contrast: 3.6, lighting: .34, spin: 0.5, speed: 2.1, amount: .5, depth: 8, zoom: 5.4 },
];

const VERTEX = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uZoom;
uniform float uContrast;
uniform float uLighting;
uniform float uSpin;
uniform float uSpeed;
uniform float uAmount;
uniform int uDepth;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 size = uResolution;
  vec2 center = size * .5;
  vec2 start = (gl_FragCoord.xy - center) / size.y;
  start = start / uZoom + uPointer;
  float radius = length(start);
  float angle = atan(start.y, start.x) + uTime * uSpin * .2 + 302.2
    - 20.0 * (uAmount * radius + (1.0 - uAmount));
  vec2 mid = .5 * (size / length(size));
  vec2 uv = (vec2(radius * cos(angle), radius * sin(angle)) + mid - mid) * 20.0;
  vec2 uv2 = vec2(uv.x + uv.y);
  float speed = uTime * uSpeed;

  for (int i = 0; i < 20; i++) {
    if (i >= uDepth) break;
    uv2 += sin(max(uv.x, uv.y)) + uv;
    uv += .5 * vec2(
      cos(5.1123314 + .353 * uv2.y + speed * .131121),
      sin(uv2.x - .113 * speed)
    );
    uv -= cos(uv.x + uv.y) - sin(.711 * uv.x - uv.y);
  }

  float contrast = .25 * uContrast + .5 * uAmount + 1.2;
  float paint = clamp(length(uv) * .035 * contrast, 0.0, 2.0);
  float a = max(0.0, 1.0 - contrast * abs(1.0 - paint));
  float b = max(0.0, 1.0 - contrast * abs(paint));
  float c = 1.0 - min(1.0, a + b);
  float light = (uLighting - .2) * max(a * 5.0 - 4.0, 0.0)
              + uLighting * max(b * 5.0 - 4.0, 0.0);
  vec3 base = (.3 / uContrast) * uColor1
    + (1.0 - .3 / uContrast) * (uColor1 * a + uColor2 * b + uColor3 * c) + light;
  gl_FragColor = vec4(base, 1.0);
}
`;

const mix = (a: number, b: number, n: number) => a + (b - a) * n;

export default function LiquidBackground({ preset }: { preset: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef(preset);
  targetRef.current = preset;

  useEffect(() => {
    let canceled = false;
    let cleanupFn: (() => void) | null = null;

    const setupWebGL = () => {
      if (canceled) return;
      const canvas = canvasRef.current;
      const gl = canvas?.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'high-performance' });
      if (!canvas || !gl) return;

      const compile = (type: number, source: string) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.warn('Liquid background shader unavailable:', gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };
      const vertex = compile(gl.VERTEX_SHADER, VERTEX);
      const fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT);
      if (!vertex || !fragment) {
        if (vertex) gl.deleteShader(vertex);
        if (fragment) gl.deleteShader(fragment);
        return;
      }
      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Liquid background program unavailable:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        gl.deleteShader(vertex);
        gl.deleteShader(fragment);
        return;
      }
      gl.useProgram(program);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      const locations = new Map<string, WebGLUniformLocation | null>();
      const uniform = (name: string) => {
        if (!locations.has(name)) locations.set(name, gl.getUniformLocation(program, name));
        return locations.get(name)!;
      };
      const one = (name: string, n: number) => gl.uniform1f(uniform(name), n);

      const current: Preset = {
        ...PRESETS[0],
        colors: PRESETS[0].colors.map(c => [...c]) as Preset['colors'],
        zoom: 80,
      };
      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const move = (event: PointerEvent) => {
        pointer.targetX = (event.clientX / window.innerWidth - .5) * .04;
        pointer.targetY = -(event.clientY / window.innerHeight - .5) * .04;
      };
      const leave = () => { pointer.targetX = 0; pointer.targetY = 0; };
      window.addEventListener('pointermove', move, { passive: true });
      window.addEventListener('pointerleave', leave);

      const resize = () => {
        const dpr = window.innerWidth < 768 ? 1.0 : 0.55;
        const w = Math.round(canvas.clientWidth * dpr);
        const h = Math.round(canvas.clientHeight * dpr);
        if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });
      const resizeObserver = typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(resize)
        : null;
      if (canvas.parentElement) resizeObserver?.observe(canvas.parentElement);

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let frame = 0;
      let last = 0;
      let elapsed = 0;
      let initial = true;
      let isVisible = false;
      const render = (now: number) => {
        frame = 0;
        if (!isVisible || document.hidden) return;
        const dt = Math.min((now - (last || now)) / 1000, .05);
        last = now;
        if (!reduced) elapsed += dt;
        const next = PRESETS[Math.max(0, Math.min(PRESETS.length - 1, targetRef.current))];
        const n = reduced ? .14 : .055;
        current.spin = mix(current.spin, next.spin, n);
        current.speed = mix(current.speed, next.speed, n);
        current.contrast = mix(current.contrast, next.contrast, n);
        current.lighting = mix(current.lighting, next.lighting, n);
        current.amount = mix(current.amount, next.amount, n);
        current.zoom = mix(current.zoom, next.zoom, initial ? .025 : .045);
        if (Math.abs(current.zoom - next.zoom) < .05) initial = false;
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) current.colors[j][k] = mix(current.colors[j][k], next.colors[j][k], n);
        }
        pointer.x = mix(pointer.x, pointer.targetX, .04);
        pointer.y = mix(pointer.y, pointer.targetY, .04);

        one('uTime', elapsed);
        gl.uniform2f(uniform('uResolution'), canvas.width, canvas.height);
        gl.uniform2f(uniform('uPointer'), pointer.x, pointer.y);
        one('uZoom', current.zoom);
        one('uContrast', current.contrast);
        one('uLighting', current.lighting);
        one('uSpin', current.spin);
        one('uSpeed', current.speed);
        one('uAmount', current.amount);
        const isMobile = window.innerWidth < 768;
        const depthOverride = isMobile ? 2 : Math.min(next.depth, 3);
        gl.uniform1i(uniform('uDepth'), depthOverride);
        for (let j = 0; j < 3; j++) gl.uniform3f(uniform(`uColor${j + 1}`), ...current.colors[j]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        frame = requestAnimationFrame(render);
      };

      const start = () => {
        if (frame || !isVisible || document.hidden) return;
        last = 0;
        frame = requestAnimationFrame(render);
      };
      const stop = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      };

      const handleScroll = () => {
        const scrolledPast = window.scrollY > window.innerHeight * 0.75;
        if (scrolledPast && isVisible) {
          isVisible = false;
          stop();
        } else if (!scrolledPast && !isVisible) {
          const rect = canvas.getBoundingClientRect();
          if (rect.bottom > 50 && rect.top < window.innerHeight) {
            isVisible = true;
            start();
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        const inHeroZone = window.scrollY <= window.innerHeight * 0.75;
        isVisible = entry ? (entry.isIntersecting && inHeroZone) : false;
        if (isVisible) start();
        else stop();
      }, { threshold: [0, 0.25] });
      observer.observe(canvas);
      const onVisibilityChange = () => document.hidden ? stop() : start();
      document.addEventListener('visibilitychange', onVisibilityChange);

      // Start rendering if in hero zone
      if (window.scrollY <= window.innerHeight * 0.75) {
        isVisible = true;
        start();
      }

      cleanupFn = () => {
        stop();
        observer.disconnect();
        resizeObserver?.disconnect();
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerleave', leave);
        window.removeEventListener('resize', resize);
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertex);
        gl.deleteShader(fragment);
      };
    };

    let deferTimer: number | ReturnType<typeof setTimeout> | null = null;
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      deferTimer = (window as unknown as { requestIdleCallback: (cb: () => void, opt?: { timeout: number }) => number }).requestIdleCallback(setupWebGL, { timeout: 200 });
    } else {
      deferTimer = setTimeout(setupWebGL, 80);
    }

    return () => {
      canceled = true;
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof deferTimer === 'number') {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(deferTimer);
      } else if (deferTimer) {
        clearTimeout(deferTimer as ReturnType<typeof setTimeout>);
      }
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,#51516a_0%,#111631_45%,#08080a_83%)]">
      <canvas ref={canvasRef} className="block h-full w-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
    </div>
  );
}
