# 🌊 LOUD SRL — Reverse Engineered Digital Product Experience

An ultra-high-fidelity, production-grade reverse engineering and recreation of the award-winning **LOUD SRL** (`https://loudsrl.com/`) digital product agency experience.

Built with **Three.js (WebGL)**, **Custom GLSL Fluid Shaders**, **GSAP**, **Vanilla CSS**, and **Web Audio API**.

---

## 🔬 Reverse Engineering Discovery & Architecture

By inspecting and reverse-engineering the production Next.js Turbopack chunks (`bdc4906257f95ef5.js`, `2720f9dd45c5f75f.js`, `1f3f1df2e03b92cd.js`, and `c20cbd4e319b5ace.js`), we decompiled and reconstructed the exact architectural layers:

### 1. 🧬 The Procedural Liquid Paint Shader (`liquidShader.js`)
Loud SRL uses a full-viewport fullscreen quad (`PlaneGeometry(2, 2)`) rendered by Three.js with an intricate procedural fragment shader. Rather than standard 3D meshes or pre-rendered MP4 video, it executes real-time mathematics per pixel:

- **Coordinate Remapping & Pixelation**:
  ```glsl
  vec2 center = 0.5 * screenSize;
  float base_pixel = length(screenSize) / pixelFilter;
  float pixel_size = base_pixel / u_zoom;
  vec2 grid_uv = floor((screen_coords - center) / base_pixel) * base_pixel + center;
  ```
- **Rotational Torque & Polar Distortion**:
  ```glsl
  float angle = atan(uv0.y, uv0.x) + speed - 20.0 * (spinAmount * uv_len + (1.0 - spinAmount));
  vec2 uv = vec2(uv_len * cos(angle) + mid.x, uv_len * sin(angle) + mid.y) - mid;
  ```
- **Trigonometric Swirl Iterations (`effectDepth`)**:
  ```glsl
  for(int i = 0; i < 20; i++) {
    if(i >= effectDepth) break;
    uv2 += sin(max(uv.x, uv.y)) + uv;
    uv += 0.5 * vec2(cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121), sin(uv2.x - 0.113 * speed));
    uv -= cos(uv.x + uv.y) - sin(0.711 * uv.x - uv.y);
  }
  ```
- **Color Separation & Light Highlights**:
  Calculates contrast curves `c1p`, `c2p`, `c3p`, and specular highlights across 3 primary vec4 color uniforms (`colour1`, `colour2`, `colour3`).
- **Simplex/Random Grain Noise**:
  Procedural grain applied based on `useGrain` and `grainStrength`.

### 2. 🎨 The 7 Official Theme Presets
Extracted directly from array `hI` in Turbopack chunk `c20cbd4e319b5ace.js`:
| Index | Pillar / Mode | Color 1 | Color 2 | Color 3 | Contrast | Spin | Zoom | Mode |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **0** | Pillar I: *We make digital products.* | `#0d0d39` (Midnight) | `#717184` (Slate) | `#000000` | 5.5 | 2.0 | 4.0 | Dark |
| **1** | Pillar II: *Making something that people want.* | `#CF907B` (Terracotta) | `#DDB1A3` (Peach) | `#CF907B` | 1.5 | 10.0 | 8.0 | Dark |
| **2** | Pillar III: *Living with the Product.* | `#9BABE9` (Cerulean) | `#637FDC` (Cobalt) | `#7F96E3` | 2.0 | 0.0 | 10.0 | Dark |
| **3** | Pillar IV: *Being in the Details.* | `#89A3BD` (Steel) | `#57687F` (Charcoal)| `#000000` | 3.5 | 1.0 | 4.0 | Dark |
| **4** | Pillar V: *Make uniques contributions.* | `#C5ACCA` (Lavender) | `#9780A8` (Mauve) | `#806A97` | 0.8 | 0.5 | 100.0| Dark |
| **5** | Pillar VI: *Turn ideas into product companies.*| `#fffffc` (Pearl White)| `#eeeee9` (Cream) | `#ddddda` | 3.0 | 2.0 | 4.0 | **Invert (White)** |
| **6** | Synthwave Explorer / Studio Lab | `#00ffff` (Cyan) | `#FF33FF` (Magenta)| `#000000` | 8.0 | 10.0| 50.0 | Cyber |

### 3. 🫧 Authentic CSS Metaball / Gooey Blob Preloader
Extracted from `dc366ca0fcd0c86e.css`:
```css
.blobs {
  filter: blur(16px) contrast(100);
  background: #000;
  width: 300px;
  height: 300px;
  animation: 20s linear infinite rotate-blobs;
}
```
Two circular DOM nodes (`bounce-left` and `bounce-right`) expand and contract towards each other inside a high-contrast Gaussian blur filter, creating real-time fluid metaball fusion.

### 4. 🎛️ Circular Scroll & Drag Dial (`ScrollDial.js`)
- Accumulates mouse wheel deltas (`deltaY > 0`) or touch/pointer drag distances.
- Dynamically updates SVG circle `strokeDashoffset`:
  $$offset = 2 \pi r \times (1 - progress)$$
- When progress reaches 100%, advances to the next pillar with exponential lerping and audio chimes.

### 5. 🎯 Cursor Follower with Spring Physics & Contextual Labels
- Tracks cursor coordinates with low-pass filtering / lerp damping ($0.15$).
- Dynamically expands into pill badges displaying contextual actions:
  - `VIEW INDUSTRY` when hovering industry items
  - `EXPLORE` / `CLOSE` / `LET'S TALK`
  - Inverts to black borders and text when Pillar VI triggers White Mode.

### 6. 📱 4-Quadrant Editorial Industry Showcase
- Covers Loud SRL's core capabilities:
  - **Artificial Intelligence** (featuring case study *WITZ* — +5,000 daily games)
  - **E-Commerce** (Headless architectures, sub-300ms edge storefronts)
  - **Mobile Apps** (Native iOS Swift & Android Kotlin, 250k+ downloads)
  - **Real Estate** (PropTech automated valuation models & spatial mapping)

### 7. 🔊 Procedural Web Audio Engine (`SoundEffects.js`)
Zero external `.mp3` or `.wav` dependencies. Procedural sound synthesis:
- Major-pentatonic sine wave harmonic transitions
- Sub-bass rumble for fluid motion
- Mechanical micro-clicks for buttons and tactile interaction

### 8. 🗺️ Multi-Page Navigation Architecture (`router.js`)
Every navigation link from Loud SRL's sitemap is reverse-engineered into a dedicated full-page editorial view with seamless client-side routing, URL updates (`history.pushState`), and browser history support:

- **`/` (Home)**: Full-viewport interactive WebGL stage, 6 Pillars carousel, circular progress dial, bottom-left industries menu, and custom spring cursor.
- **`/pillars/think` (Think.)**: Deep dive into Discovery, Qualitative User Research, Stakeholder Interviews, and Product Blueprints.
- **`/pillars/design` (Design.)**: Design Systems, Atomic Tokens, 120Hz Motion Choreography, and Code Prototyping.
- **`/pillars/develop` (Develop.)**: 3D GPU Shader pipelines, Serverless Edge Infrastructure, Native Swift & Kotlin, and Custom AI Agents.
- **`/manifesto` (Manifesto)**: "We are in a constant state of becoming." The 6 founding rules, full deliverables directory (Web, AI, Mobile, CMS, Watch/TV, IoT), and service taxonomy.
- **`/studio` (Studio Co-founder Track)**: "A new model for building companies." The equity/co-founder program with no upfront budget, 6 core actions, and live studio products (*WITZ*, *Bike-Room*, *Whuis*, *Balloon*).
- **`/contact-us` (Contact Us)**: "FIRST STEP OF OUR RELATIONSHIP :)" Dual-track project inquiry form ("Evolve my Business" vs "Start a company"), budget range selector, scope builder, and "Fourth base on a first date" guidance.
- **`/industries/:slug` (Industry Specials)**: Dedicated landing pages for *Artificial Intelligence*, *E-Commerce*, *Mobile Apps*, and *Real Estate*.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5174/` to experience the website!

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, minified bundle in `dist/`.

---

## ⌨️ Keyboard Shortcuts
- **Down Arrow / Spacebar**: Advance to next Pillar (on Home)
- **Up Arrow**: Go to previous Pillar (on Home)
- **1, 2, 3, 4, 5, 6**: Jump directly to Pillar I–VI
- **Escape**: Return to Home or close active views

