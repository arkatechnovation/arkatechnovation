// @ts-nocheck
/* WebGL2 Particle Relief Wave Animation for Services (creerReleve) */

const makeProj = (fov: number, aspect: number, near: number, far: number) => {
  const f = 1 / Math.tan(fov / 2);
  const rangeInv = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * rangeInv, -1,
    0, 0, 2 * near * far * rangeInv, 0
  ]);
};

const makeView = (eye: number[], target: number[]) => {
  const sub = (a: number[], b: number[]) => a.map((val, idx) => val - b[idx]);
  const norm = (v: number[]) => {
    const len = Math.hypot(...v);
    return v.map((val) => val / (len || 1));
  };
  const cross = (a: number[], b: number[]) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
  const dot = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

  const z = norm(sub(eye, target));
  const x = norm(cross([0, 1, 0], z));
  const y = cross(z, x);

  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1
  ]);
};

export interface ReleveOptions {
  seed?: number;
  reduce?: boolean;
  vague?: boolean;
  souris?: boolean;
}

export interface HoleRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface ReleveInstance {
  setStep: (step: number, total: number) => void;
  start: () => void;
  stop: () => void;
  setHoles: (holes: HoleRect[]) => void;
  setMouse: (x: number | null, y?: number) => void;
  destroy: () => void;
}

export function creerReleve(
  canvas: HTMLCanvasElement,
  { seed = 0, reduce = false, vague = true }: ReleveOptions = {}
): ReleveInstance | null {
  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: false,
    antialias: false,
    powerPreference: 'high-performance'
  });
  if (!gl || gl.isContextLost()) return null;

  const createShader = (type: number, src: string) => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };

  const vertShaderSrc = `#version 300 es
precision highp float;
in vec3 aGrid;
uniform mat4 uProj, uView;
uniform float uTime, uDensity, uScan, uDpr, uSeed;
uniform vec2 uSize;
out float vAlpha;
out float vRed;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) { s += a * noise(p); p = m * p; a *= 0.5; }
  return s;
}
float relief(vec2 xz) { return fbm(vec2(xz.x, xz.y + uTime) * 0.12 + uSeed) * 4.4; }

void main() {
  float z = 5.0 + aGrid.y * uSize.y;
  vec2 xz = vec2(aGrid.x * (3.0 + z * uSize.x), z);
  float h = relief(xz);
  
  float e = 0.35;
  vec3 n = normalize(vec3(h - relief(xz + vec2(e, 0.0)), e, h - relief(xz + vec2(0.0, e))));
  float ombre = 1.0 - clamp(dot(n, normalize(vec3(-0.7, 0.55, 0.2))), 0.0, 1.0);

  vec4 view = uView * vec4(xz.x, h, -xz.y, 1.0);
  gl_Position = uProj * view;
  float d = max(1.0, -view.z);

  float on = smoothstep(aGrid.z, aGrid.z + 0.03, uDensity);
  float bande = exp(-pow((aGrid.y - uScan) * 22.0, 2.0));
  float niv = fract(h * 1.4);
  float courbe = smoothstep(0.07, 0.0, min(niv, 1.0 - niv));

  vRed = bande;
  vAlpha = clamp(on * (0.50 + 0.50 * ombre + 0.70 * courbe) + bande * 0.85, 0.30, 1.0);
  
  // High-visibility crisp particle dot size calibrated for ultra-dense topography
  gl_PointSize = clamp(uDpr * 17.5 / d, 2.4, 5.0) * (1.0 + bande * 0.5);
}`;

  const fragShaderSrc = `#version 300 es
precision mediump float;
in float vAlpha;
in float vRed;
uniform vec3 uInk, uRed;
out vec4 o;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.12, r) * vAlpha;
  if (a < 0.01) discard;
  vec3 c = mix(uInk, uRed, clamp(vRed * 1.8, 0.0, 1.0));
  o = vec4(c, a);
}`;

  const prog = gl.createProgram();
  const vs = createShader(gl.VERTEX_SHADER, vertShaderSrc);
  const fs = createShader(gl.FRAGMENT_SHADER, fragShaderSrc);
  if (!prog || !vs || !fs) return null;

  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;

  // Ultra-dense particle grid (138,000 points for exceptionally rich, detailed wave topography)
  const rows = 300;
  const cols = 460;
  const numPoints = rows * cols;
  const gridData = new Float32Array(numPoints * 3);
  let fIdx = 0;
  let pRand = 1234567;
  const rand = () => {
    pRand = (pRand * 16807) % 2147483647;
    return pRand / 2147483647;
  };

  for (let e = 0; e < rows; e++) {
    for (let t = 0; t < cols; t++) {
      gridData[fIdx++] = -1 + 2 * (t + rand()) / cols;
      gridData[fIdx++] = ((e + rand()) / rows) ** 1.15;
      gridData[fIdx++] = rand();
    }
  }

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, gridData, gl.STATIC_DRAW);

  const aGridLoc = gl.getAttribLocation(prog, 'aGrid');
  gl.enableVertexAttribArray(aGridLoc);
  gl.vertexAttribPointer(aGridLoc, 3, gl.FLOAT, false, 0, 0);

  const getU = (name: string) => gl.getUniformLocation(prog, name);
  const uniforms = {
    proj: getU('uProj'),
    view: getU('uView'),
    time: getU('uTime'),
    density: getU('uDensity'),
    scan: getU('uScan'),
    dpr: getU('uDpr'),
    seed: getU('uSeed'),
    size: getU('uSize'),
    ink: getU('uInk'),
    red: getU('uRed'),
  };

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const viewMatrix = makeView([0, 6.2, 0], [0, 0.4, -18]);

  let curDensity = 1.0;
  let targetDensity = 1.0;
  let scanPos = -1;
  let scanDir = 1;
  let curTime = 0;
  let lastFrameTime = 0;
  let rafId = 0;
  let isRunning = false;
  let activeStep = -1;
  let sizeDirty = true;

  const updateSizeAndProj = () => {
    const w = Math.round((canvas.clientWidth || window.innerWidth || 1440) * dpr);
    const h = Math.round((canvas.clientHeight || window.innerHeight || 900) * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    const projMatrix = makeProj((34 * Math.PI) / 180, canvas.width / Math.max(1, canvas.height), 0.1, 80);
    gl.uniformMatrix4fv(uniforms.proj, false, projMatrix);
  };

  const onWindowResize = () => {
    sizeDirty = true;
  };
  window.addEventListener('resize', onWindowResize, { passive: true });

  const drawScene = () => {
    if (gl.isContextLost()) return;

    gl.useProgram(prog);
    gl.bindVertexArray(vao);

    if (sizeDirty) {
      updateSizeAndProj();
      sizeDirty = false;
    }

    gl.uniform2f(uniforms.size, 0.55, 34);
    gl.uniform1f(uniforms.seed, seed);
    gl.uniform3f(uniforms.ink, 18 / 255, 18 / 255, 20 / 255);
    gl.uniform3f(uniforms.red, 245 / 255, 75 / 255, 20 / 255);
    gl.uniformMatrix4fv(uniforms.view, false, viewMatrix);
    gl.uniform1f(uniforms.dpr, dpr);
    gl.uniform1f(uniforms.time, curTime);
    gl.uniform1f(uniforms.density, curDensity);
    gl.uniform1f(uniforms.scan, scanPos);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, numPoints);
  };

  const loop = (time: number) => {
    const dt = Math.min(0.05, lastFrameTime ? (time - lastFrameTime) / 1000 : 0);
    lastFrameTime = time;

    curTime += dt * 0.55;
    curDensity += (targetDensity - curDensity) * (1 - Math.exp(-dt * 2.2));

    if (scanPos > -1) {
      scanPos += scanDir * dt * 0.75;
      if (scanPos > 1.2 || scanPos < -0.2) scanPos = -1;
    }

    drawScene();
    rafId = isRunning ? requestAnimationFrame(loop) : 0;
  };

  // Immediate first render
  drawScene();

  return {
    setStep(step: number, total: number) {
      if (step === activeStep) return;
      const prev = activeStep;
      activeStep = step;
      targetDensity = 0.95 + (0.05 * step) / Math.max(1, total - 1);

      if (reduce) {
        curDensity = targetDensity;
        drawScene();
        return;
      }

      if (vague && prev >= 0) {
        scanDir = step > prev ? 1 : -1;
        scanPos = scanDir > 0 ? -0.1 : 1.1;
      }
    },
    start() {
      if (reduce) {
        curDensity = targetDensity;
        drawScene();
        return;
      }
      if (!isRunning) {
        isRunning = true;
        lastFrameTime = 0;
        rafId = requestAnimationFrame(loop);
      }
    },
    setHoles() {
      // Intentionally kept full terrain
    },
    setMouse() {
      // Pointer handler
    },
    stop() {
      isRunning = false;
      cancelAnimationFrame(rafId);
      rafId = 0;
    },
    destroy() {
      this.stop();
      window.removeEventListener('resize', onWindowResize);
      try {
        gl.deleteBuffer(buf);
        gl.deleteVertexArray(vao);
        gl.deleteProgram(prog);
      } catch (e) {
        // Safe cleanup
      }
    }
  };
}
