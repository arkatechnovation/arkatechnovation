/**
 * LOUD SRL Circular Scroll Dial Controller
 * Smoothly accumulates wheel/drag force and triggers pillar transitions
 */
export class ScrollDial {
  constructor(options = {}) {
    this.dialElement = document.getElementById('scroll-dial');
    this.circleProgress = document.getElementById('dial-circle-progress');
    this.arrowIcon = document.getElementById('dial-arrow');

    this.onNext = options.onNext || (() => {});
    this.onPrev = options.onPrev || (() => {});
    this.onProgress = options.onProgress || (() => {});

    this.radius = 23;
    this.circumference = 2 * Math.PI * this.radius;

    this.accumulatedForce = 0;
    this.threshold = 120;
    this.isLocked = false;
    this.decayTimer = null;

    this.isDragging = false;
    this.startY = 0;

    this.init();
  }

  init() {
    if (this.circleProgress) {
      this.circleProgress.style.strokeDasharray = `${this.circumference}`;
      this.circleProgress.style.strokeDashoffset = `${this.circumference}`;
    }

    // Wheel event on entire window
    window.addEventListener(
      'wheel',
      (e) => {
        // Prevent default only if on main stage (not inside modal or drawer)
        if (e.target.closest('.modal-content, .drawer-content')) return;

        if (e.deltaY > 0) {
          this.addForce(Math.abs(e.deltaY) * 0.4);
        } else if (e.deltaY < 0) {
          this.addForce(-Math.abs(e.deltaY) * 0.4);
        }
      },
      { passive: true }
    );

    // Touch & pointer drag events
    window.addEventListener(
      'touchstart',
      (e) => {
        if (e.target.closest('.modal-content, .drawer-content')) return;
        this.isDragging = true;
        this.startY = e.touches[0].clientY;
      },
      { passive: true }
    );

    window.addEventListener(
      'touchmove',
      (e) => {
        if (!this.isDragging) return;
        const deltaY = this.startY - e.touches[0].clientY;
        if (deltaY > 0) {
          this.addForce(deltaY * 0.6);
          this.startY = e.touches[0].clientY;
        }
      },
      { passive: true }
    );

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Click directly on the dial advances immediately
    if (this.dialElement) {
      this.dialElement.addEventListener('click', () => {
        this.triggerNext();
      });
    }

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        this.triggerNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        this.onPrev();
      }
    });
  }

  addForce(amount) {
    if (this.isLocked) return;

    this.accumulatedForce = Math.max(0, Math.min(this.accumulatedForce + amount, this.threshold));
    const progress = this.accumulatedForce / this.threshold;

    this.updateVisuals(progress);
    this.onProgress(progress);

    if (this.accumulatedForce >= this.threshold) {
      this.triggerNext();
      return;
    }

    // Auto-decay back to 0 if user pauses
    clearTimeout(this.decayTimer);
    this.decayTimer = setTimeout(() => {
      this.decay();
    }, 400);
  }

  decay() {
    const step = () => {
      if (this.accumulatedForce > 0 && !this.isLocked) {
        this.accumulatedForce = Math.max(0, this.accumulatedForce - 12);
        const progress = this.accumulatedForce / this.threshold;
        this.updateVisuals(progress);
        this.onProgress(progress);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  updateVisuals(progress) {
    if (this.circleProgress) {
      const offset = this.circumference * (1 - progress);
      this.circleProgress.style.strokeDashoffset = `${offset}`;
    }

    if (this.dialElement) {
      if (progress > 0.05) {
        this.dialElement.style.opacity = '1';
        this.dialElement.style.transform = `translateX(-50%) scale(${1 + progress * 0.15})`;
      } else {
        this.dialElement.style.opacity = '0.7';
        this.dialElement.style.transform = `translateX(-50%) scale(1)`;
      }
    }

    if (this.arrowIcon) {
      this.arrowIcon.style.transform = `translateY(${progress * 6}px)`;
    }
  }

  triggerNext() {
    if (this.isLocked) return;
    this.isLocked = true;
    this.accumulatedForce = 0;
    this.updateVisuals(1.0);

    // Flash dial on success
    if (this.dialElement) {
      this.dialElement.classList.add('dial-flash');
      setTimeout(() => {
        this.dialElement.classList.remove('dial-flash');
        this.updateVisuals(0);
      }, 300);
    }

    this.onNext();

    // Lock cooldown to prevent accidental skips
    setTimeout(() => {
      this.isLocked = false;
      this.updateVisuals(0);
    }, 900);
  }

  setTheme(isWhite) {
    if (this.circleProgress) {
      this.circleProgress.setAttribute('stroke', isWhite ? '#000000' : '#ffffff');
    }
    const arrowPath = document.querySelectorAll('#dial-arrow path');
    arrowPath.forEach((p) => {
      p.setAttribute('stroke', isWhite ? '#000000' : '#ffffff');
    });
  }
}
