import { AppRouter } from './router.js';

class ArkaApp {
  constructor() {
    this.preloader = document.getElementById('preloader');
    this.init();
  }

  init() {
    this.hidePreloader();
    // Initialize Multi-Page Router
    this.router = new AppRouter({
      onRouteChange: (path) => this.handleRouteChange(path),
    });
  }

  hidePreloader() {
    setTimeout(() => {
      if (this.preloader) {
        this.preloader.classList.add('fade-out');
      }
    }, 600);
  }

  applyTheme(isWhite) {
    if (isWhite) {
      document.body.classList.add('theme-white');
    } else {
      document.body.classList.remove('theme-white');
    }
  }

  handleRouteChange(path) {
    if (path === '/') {
      this.applyTheme(false);
    } else if (path.startsWith('/pillars/')) {
      this.applyTheme(false);
    } else {
      this.applyTheme(true);
    }
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.arkaApp = new ArkaApp();
});
