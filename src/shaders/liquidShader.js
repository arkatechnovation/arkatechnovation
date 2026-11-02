import * as THREE from 'three';

/**
 * LOUD SRL Signature Procedural Liquid Paint Shader
 * Reverse-engineered from official Next.js/Turbopack chunk artifacts
 */

export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = `
  precision highp float;

  uniform float iTime;
  uniform vec2 iResolution;
  uniform float u_zoom;
  uniform vec2 u_offset;

  uniform float spinRotation;
  uniform float spinSpeed;
  uniform vec4 colour1;
  uniform vec4 colour2;
  uniform vec4 colour3;
  uniform float contrast;
  uniform float lighting;
  uniform float spinAmount;
  uniform float pixelFilter;
  uniform float grainStrength;
  uniform float useGrain;
  uniform int effectDepth;

  varying vec2 vUv;

  float random(in vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  vec4 effect(vec2 screenSize, vec2 screen_coords) {
    vec2 center = 0.5 * screenSize;
    float base_pixel = length(screenSize) / pixelFilter;
    float pixel_size = base_pixel / u_zoom;
    vec2 grid_uv = floor((screen_coords - center) / base_pixel) * base_pixel + center;

    vec2 uv0 = (grid_uv - center) / screenSize.y;
    uv0 /= u_zoom;
    uv0 += u_offset;

    float uv_len = length(uv0);
    float timeOffset = iTime;
    float speed = spinRotation * 0.2;
    speed = timeOffset * speed;
    speed += 302.2;
    float angle = atan(uv0.y, uv0.x) + speed - 20.0 * (spinAmount * uv_len + (1.0 - spinAmount));

    vec2 mid = 0.5 * (screenSize / length(screenSize));
    vec2 uv = vec2(
      uv_len * cos(angle) + mid.x,
      uv_len * sin(angle) + mid.y
    ) - mid;

    uv *= 20.0;

    speed = timeOffset * spinSpeed;
    vec2 uv2 = vec2(uv.x + uv.y);
    for(int i = 0; i < 20; i++) {
      if(i >= effectDepth) break;
      uv2 += sin(max(uv.x, uv.y)) + uv;
      uv += 0.5 * vec2(
        cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
        sin(uv2.x - 0.113 * speed)
      );
      uv -= cos(uv.x + uv.y) - sin(0.711 * uv.x - uv.y);
    }

    float contrast_mod = (0.25 * contrast + 0.5 * spinAmount + 1.2);
    float paint_res = clamp(length(uv) * 0.035 * contrast_mod, 0.0, 2.0);
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (lighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0)
                + lighting * max(c2p * 5.0 - 4.0, 0.0);

    vec4 baseColor = (0.3 / contrast) * colour1
                   + (1.0 - 0.3 / contrast) * (
                       colour1 * c1p
                     + colour2 * c2p
                     + vec4(colour3.rgb * c3p, colour1.a * c3p)
                     ) + light;

    float grain_noise = random(gl_FragCoord.xy + timeOffset);
    baseColor.rgb += (useGrain > 0.5 ? grainStrength : 0.0) * (grain_noise - 0.5);

    return baseColor;
  }

  void main() {
    gl_FragColor = effect(iResolution.xy, gl_FragCoord.xy);
  }
`;

function hexToVec4(hex) {
  const c = new THREE.Color(hex);
  return new THREE.Vector4(c.r, c.g, c.b, 1.0);
}

/**
 * 7 Official Color Presets corresponding to the 6 Pillars + 1 Synthwave/Exploration Mode
 */
/**
 * Official Color Presets corresponding to Arka Technovation's Core Product Lines
 */
export const PILLAR_PRESETS = [
  // Preset 0 - Solar Obsidian & Amber Gold (Hero Overview)
  {
    name: 'Chapter I - We engineer digital dominance.',
    spinRotation: 0,
    spinSpeed: 2.0,
    colour1: hexToVec4('#FF9900'),
    colour2: hexToVec4('#4A2B0F'),
    colour3: hexToVec4('#08080C'),
    contrast: 5.5,
    lighting: 0.35,
    spinAmount: 0.25,
    pixelFilter: 10000,
    grainStrength: 0.2,
    useGrain: 0.0,
    effectDepth: 8,
    zoom: 4.0,
    isWhite: false,
  },
  // Preset 1 - Hyper Cobalt & Deep Cyan (Software Design)
  {
    name: 'Chapter II - Software Design & Engineering.',
    spinRotation: 1,
    spinSpeed: 3.5,
    colour1: hexToVec4('#00CEC9'),
    colour2: hexToVec4('#0984E3'),
    colour3: hexToVec4('#0A192F'),
    contrast: 3.2,
    lighting: 0.25,
    spinAmount: 0.65,
    pixelFilter: 10000,
    grainStrength: 0.2,
    useGrain: 0.0,
    effectDepth: 5,
    zoom: 6.0,
    isWhite: false,
  },
  // Preset 2 - Emerald Matrix & Radiant Mint (SEO & Search Intel)
  {
    name: 'Chapter III - SEO & Search Intelligence.',
    spinRotation: 0,
    spinSpeed: 2.5,
    colour1: hexToVec4('#55EFC4'),
    colour2: hexToVec4('#00B894'),
    colour3: hexToVec4('#072A1F'),
    contrast: 3.0,
    lighting: 0.3,
    spinAmount: 0.35,
    pixelFilter: 10000,
    grainStrength: 0.3,
    useGrain: 0.0,
    effectDepth: 6,
    zoom: 7.0,
    isWhite: false,
  },
  // Preset 3 - Electric Violet & Radiant Magenta (Digital Marketing)
  {
    name: 'Chapter IV - Digital Marketing & Growth.',
    spinRotation: 1,
    spinSpeed: 4.0,
    colour1: hexToVec4('#FD79A8'),
    colour2: hexToVec4('#6C5CE7'),
    colour3: hexToVec4('#1A0B2E'),
    contrast: 4.2,
    lighting: 0.2,
    spinAmount: 1.2,
    pixelFilter: 10000,
    grainStrength: 0.2,
    useGrain: 0.0,
    effectDepth: 4,
    zoom: 5.0,
    isWhite: false,
  },
  // Preset 4 - Cinematic Amber & Tungsten Crimson (Corporate Video)
  {
    name: 'Chapter V - Corporate Video Generation.',
    spinRotation: 2,
    spinSpeed: 2.0,
    colour1: hexToVec4('#E17055'),
    colour2: hexToVec4('#D63031'),
    colour3: hexToVec4('#1C0F0A'),
    contrast: 3.5,
    lighting: 0.2,
    spinAmount: 0.45,
    pixelFilter: 10000,
    grainStrength: 0.25,
    useGrain: 0.0,
    effectDepth: 5,
    zoom: 6.0,
    isWhite: false,
  },
  // Preset 5 - Pure Pearl White & Titanium Cream (Triggers Inverted UI for Studio/Manifesto)
  {
    name: 'Studio & Noida Campus - Titanium Pearl',
    spinRotation: 0,
    spinSpeed: 1.5,
    colour1: hexToVec4('#FFFFFF'),
    colour2: hexToVec4('#F1F2F6'),
    colour3: hexToVec4('#DFE4EA'),
    contrast: 3.0,
    lighting: 0.15,
    spinAmount: 0.15,
    pixelFilter: 10000,
    grainStrength: 0.15,
    useGrain: 0.0,
    effectDepth: 4,
    zoom: 4.0,
    isWhite: true,
  },
  // Preset 6 - Noida Cybernetic Pulse
  {
    name: 'Arka Labs - Noida Cybernetic Pulse',
    spinRotation: 0,
    spinSpeed: 8.0,
    colour1: hexToVec4('#00FFFF'),
    colour2: hexToVec4('#FF9900'),
    colour3: hexToVec4('#000000'),
    contrast: 6.0,
    lighting: 0.1,
    spinAmount: 2.0,
    pixelFilter: 30,
    grainStrength: 0.5,
    useGrain: 1.0,
    effectDepth: 3,
    zoom: 40.0,
    isWhite: false,
  },
];
