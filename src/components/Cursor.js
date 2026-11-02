/**
 * LOUD SRL Custom Cursor Follower with Spring Physics & Morphing Labels
 */
export class CustomCursor {
  constructor() {
    this.cursorRing = document.getElementById('cursor-ring');
    this.cursorLabel = document.getElementById('cursor-label');

    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.targetScale = 1;
    this.currentScale = 1;

    this.isHovering = false;
    this.isInverted = false;
    this.customText = '';

    this.init();
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      if (this.cursorRing) this.cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (this.cursorRing) this.cursorRing.style.opacity = '1';
    });

    this.attachHoverListeners();

    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  attachHoverListeners() {
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('button, a, .cursor-link, .industry-btn, .pill-btn, [data-cursor]');
      if (target) {
        this.isHovering = true;
        const label = target.getAttribute('data-cursor') || target.getAttribute('aria-label') || '';
        if (label) {
          this.setLabel(label);
        } else if (target.classList.contains('industry-btn')) {
          this.setLabel('VIEW INDUSTRY');
        } else {
          this.targetScale = 1.6;
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('button, a, .cursor-link, .industry-btn, .pill-btn, [data-cursor]');
      if (target) {
        this.isHovering = false;
        this.clearLabel();
        this.targetScale = 1;
      }
    });
  }

  setLabel(text) {
    this.customText = text;
    if (this.cursorLabel) {
      this.cursorLabel.textContent = text;
      this.cursorLabel.style.opacity = '1';
    }
    if (this.cursorRing) {
      this.cursorRing.classList.add('has-label');
    }
  }

  clearLabel() {
    this.customText = '';
    if (this.cursorLabel) {
      this.cursorLabel.textContent = '';
      this.cursorLabel.style.opacity = '0';
    }
    if (this.cursorRing) {
      this.cursorRing.classList.remove('has-label');
    }
  }

  setInvert(isInverted) {
    this.isInverted = isInverted;
    if (this.cursorRing) {
      if (isInverted) {
        this.cursorRing.classList.add('cursor-invert');
      } else {
        this.cursorRing.classList.remove('cursor-invert');
      }
    }
  }

  render() {
    requestAnimationFrame(this.render);

    // Spring lerp
    this.pos.x += (this.mouse.x - this.pos.x) * 0.15;
    this.pos.y += (this.mouse.y - this.pos.y) * 0.15;
    this.currentScale += (this.targetScale - this.currentScale) * 0.15;

    if (this.cursorRing) {
      this.cursorRing.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%) scale(${this.currentScale})`;
    }
  }
}
