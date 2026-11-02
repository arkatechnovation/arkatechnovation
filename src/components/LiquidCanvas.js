import * as THREE from 'three';
import { vertexShader, fragmentShader, PILLAR_PRESETS } from '../shaders/liquidShader.js';

export class LiquidCanvas {
  constructor(container, options = {}) {
    this.container = container;
    this.currentIndex = 0;
    this.targetPreset = PILLAR_PRESETS[0];
    this.currentPreset = { ...PILLAR_PRESETS[0] };
    
    // Copy vectors so we don't mutate presets
    this.currentPreset.colour1 = PILLAR_PRESETS[0].colour1.clone();
    this.currentPreset.colour2 = PILLAR_PRESETS[0].colour2.clone();
    this.currentPreset.colour3 = PILLAR_PRESETS[0].colour3.clone();

    this.mouseTarget = new THREE.Vector2(0, 0);
    this.mouseCurrent = new THREE.Vector2(0, 0);

    this.onReady = options.onReady || (() => {});
    this.onThemeChange = options.onThemeChange || (() => {});

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    // Fullscreen orthographic camera setup
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: false,
      alpha: false,
    });
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.canvas = this.renderer.domElement;
    this.canvas.className = 'liquid-webgl-canvas';
    this.container.appendChild(this.canvas);

    // Uniform setup
    this.uniforms = {
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_zoom: { value: this.targetPreset.zoom },
      u_offset: { value: new THREE.Vector2(0.0, 0.0) },
      spinRotation: { value: this.targetPreset.spinRotation },
      spinSpeed: { value: this.targetPreset.spinSpeed },
      colour1: { value: this.targetPreset.colour1.clone() },
      colour2: { value: this.targetPreset.colour2.clone() },
      colour3: { value: this.targetPreset.colour3.clone() },
      contrast: { value: this.targetPreset.contrast },
      lighting: { value: this.targetPreset.lighting },
      spinAmount: { value: this.targetPreset.spinAmount },
      pixelFilter: { value: this.targetPreset.pixelFilter },
      grainStrength: { value: this.targetPreset.grainStrength },
      useGrain: { value: this.targetPreset.useGrain },
      effectDepth: { value: this.targetPreset.effectDepth },
    };

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: this.uniforms,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    this.clock = new THREE.Clock();

    // Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    // Trigger ready
    setTimeout(() => {
      this.onReady();
    }, 100);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.uniforms.iResolution.value.set(
      width * this.renderer.getPixelRatio(),
      height * this.renderer.getPixelRatio()
    );
  }

  onMouseMove(e) {
    const ndcX = (e.clientX / window.innerWidth - 0.5) * 0.05;
    const ndcY = -(e.clientY / window.innerHeight - 0.5) * 0.05;
    this.mouseTarget.set(ndcX, ndcY);
  }

  setPillar(index, immediate = false) {
    if (index < 0 || index >= PILLAR_PRESETS.length) return;
    this.currentIndex = index;
    this.targetPreset = PILLAR_PRESETS[index];

    if (immediate) {
      this.uniforms.spinRotation.value = this.targetPreset.spinRotation;
      this.uniforms.spinSpeed.value = this.targetPreset.spinSpeed;
      this.uniforms.colour1.value.copy(this.targetPreset.colour1);
      this.uniforms.colour2.value.copy(this.targetPreset.colour2);
      this.uniforms.colour3.value.copy(this.targetPreset.colour3);
      this.uniforms.contrast.value = this.targetPreset.contrast;
      this.uniforms.lighting.value = this.targetPreset.lighting;
      this.uniforms.spinAmount.value = this.targetPreset.spinAmount;
      this.uniforms.pixelFilter.value = this.targetPreset.pixelFilter;
      this.uniforms.grainStrength.value = this.targetPreset.grainStrength;
      this.uniforms.useGrain.value = this.targetPreset.useGrain;
      this.uniforms.effectDepth.value = this.targetPreset.effectDepth;
      this.uniforms.u_zoom.value = this.targetPreset.zoom;
    }

    this.onThemeChange(this.targetPreset.isWhite);
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();
    this.uniforms.iTime.value = elapsedTime;

    // Smooth lerp mouse offset
    this.mouseCurrent.lerp(this.mouseTarget, 0.05);
    this.uniforms.u_offset.value.copy(this.mouseCurrent);

    // Smooth lerp shader parameters towards target preset
    const lerpFactor = 0.06;
    const u = this.uniforms;
    const t = this.targetPreset;

    u.spinRotation.value = THREE.MathUtils.lerp(u.spinRotation.value, t.spinRotation, lerpFactor);
    u.spinSpeed.value = THREE.MathUtils.lerp(u.spinSpeed.value, t.spinSpeed, lerpFactor);
    u.contrast.value = THREE.MathUtils.lerp(u.contrast.value, t.contrast, lerpFactor);
    u.lighting.value = THREE.MathUtils.lerp(u.lighting.value, t.lighting, lerpFactor);
    u.spinAmount.value = THREE.MathUtils.lerp(u.spinAmount.value, t.spinAmount, lerpFactor);
    u.pixelFilter.value = THREE.MathUtils.lerp(u.pixelFilter.value, t.pixelFilter, lerpFactor);
    u.grainStrength.value = THREE.MathUtils.lerp(u.grainStrength.value, t.grainStrength, lerpFactor);
    u.u_zoom.value = THREE.MathUtils.lerp(u.u_zoom.value, t.zoom, lerpFactor * 0.5);

    // Lerp color vectors
    u.colour1.value.lerp(t.colour1, lerpFactor);
    u.colour2.value.lerp(t.colour2, lerpFactor);
    u.colour3.value.lerp(t.colour3, lerpFactor);

    // Direct uniform assignments
    u.useGrain.value = t.useGrain;
    u.effectDepth.value = t.effectDepth;

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.renderer.dispose();
  }
}
