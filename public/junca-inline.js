// Lazy Video Observer
let videoObserver = null;
const initVideos = () => {
  videoObserver?.disconnect();
  const videos = document.querySelectorAll('video[data-lazy-video]');
  if ('IntersectionObserver' in window && videos.length) {
    videoObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const v = entry.target;
        if (entry.isIntersecting) {
          if (v.preload === 'none') v.preload = 'auto';
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    }, { rootMargin: '400px 0px' });
    videos.forEach(v => videoObserver.observe(v));
  }
};

// Why Us Scroll Stack & Parallax (Script 17)
const initWs = () => {
  document.querySelectorAll('[data-ws]:not([data-ws-ready])').forEach(e => {
    e.dataset.wsReady = '1';
    const t = new AbortController();
    const { signal: n } = t;
    document.addEventListener('astro:before-swap', () => t.abort(), { once: true });
    const r = Array.from(e.querySelectorAll('[data-ws-item]'));
    const i = r.map(el => el.querySelector('[data-ws-body]'));
    const a = r.map(el => el.querySelector('.ws__fig img, [data-ws-img]'));
    const o = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const s = val => Math.min(1, Math.max(0, val));
    let c = 0;
    let l = false;
    const u = () => {
      const winH = window.innerHeight;
      const isDesktop = matchMedia('(min-width: 810px)').matches;
      for (let idx = 0; idx < r.length; idx++) {
        const rect = r[idx].getBoundingClientRect();
        if (!o && a[idx]) {
          const progress = s((winH - rect.top) / (winH + rect.height));
          a[idx].style.setProperty('--py', (progress * (a[idx].offsetHeight * 0.153)).toFixed(1));
        }
        if (isDesktop && idx < r.length - 1 && i[idx]) {
          const nextTop = r[idx + 1].getBoundingClientRect().top;
          const fadeProg = s((rect.bottom - nextTop) / Math.max(1, rect.height - 64));
          i[idx].style.opacity = String(1 - Math.min(1, fadeProg * 1.4));
        } else if (i[idx]) {
          i[idx].style.opacity = '';
        }
      }
      if (l) c = requestAnimationFrame(u);
    };
    const d = () => { if (!l) { l = true; c = requestAnimationFrame(u); } };
    const f = () => { l = false; cancelAnimationFrame(c); };
    const p = new IntersectionObserver(([entry]) => entry.isIntersecting ? d() : f(), { rootMargin: '20% 0px' });
    p.observe(e);
    n.addEventListener('abort', () => { f(); p.disconnect(); });
  });
};

// Latest News Slider (Script 19)
const initHn = () => {
  document.querySelectorAll('[data-hn]:not([data-hn-ready])').forEach(e => {
    e.dataset.hnReady = '1';
    const t = new AbortController();
    const { signal: n } = t;
    document.addEventListener('astro:before-swap', () => t.abort(), { once: true });
    const r = e.querySelector('[data-hn-strip]');
    const i = e.querySelector('[data-hn-track]');
    const a = e.querySelector('[data-hn-prev]');
    const o = e.querySelector('[data-hn-next]');
    if (!r || !i || !a || !o) return;
    const s = () => {
      const items = Array.from(e.querySelectorAll('[data-hn-item]'));
      return ((items.find(item => !item.matches(':hover')) ?? items[0])?.getBoundingClientRect().width ?? 400) + (parseFloat(getComputedStyle(i).columnGap) || 20);
    };
    const c = () => {
      a.disabled = r.scrollLeft <= 2;
      o.disabled = r.scrollLeft >= r.scrollWidth - r.clientWidth - 2;
    };
    a.addEventListener('click', () => r.scrollBy({ left: -s(), behavior: 'smooth' }), { signal: n });
    o.addEventListener('click', () => r.scrollBy({ left: s(), behavior: 'smooth' }), { signal: n });
    r.addEventListener('scroll', c, { signal: n, passive: true });
    window.addEventListener('resize', c, { signal: n });
    c();
    const l = matchMedia('(hover: hover) and (pointer: fine)');
    const u = () => {
      if (!l.matches) {
        i.style.removeProperty('--hn-h');
        r.style.removeProperty('--hn-reserve');
        return;
      }
      const cards = Array.from(i.querySelectorAll('.hn__card'));
      const calcMaxH = () => Math.max(...cards.map(card => card.getBoundingClientRect().height));
      i.classList.add('sans-transition');
      i.style.removeProperty('--hn-h');
      const baseH = calcMaxH();
      i.classList.add('is-mesure');
      const maxH = Math.ceil(calcMaxH());
      i.classList.remove('is-mesure');
      i.offsetWidth;
      i.classList.remove('sans-transition');
      i.style.setProperty('--hn-h', `${maxH}px`);
      r.style.setProperty('--hn-reserve', `${Math.max(0, maxH - Math.ceil(baseH))}px`);
    };
    u();
    document.fonts?.ready?.then(u);
    r.addEventListener('pointermove', evt => {
      if (evt.pointerType === 'mouse' && (evt.movementX || evt.movementY)) e.classList.add('hn--survol');
    }, { signal: n, passive: true });
    window.addEventListener('scroll', () => e.classList.remove('hn--survol'), { signal: n, passive: true });
  });
};

// FAQ Accordion (Script 21)
const initFaq = () => {
  document.querySelectorAll('[data-faq]:not([data-faq-ready])').forEach(e => {
    e.dataset.faqReady = '1';
    const detailsList = [...e.querySelectorAll('details')];
    const close = item => {
      if (!item.classList.contains('is-open')) {
        item.open = false;
        return;
      }
      item.classList.remove('is-open');
      const answer = item.querySelector('.faq__a');
      if (!answer) { item.open = false; return; }
      const onEnd = evt => {
        if (evt.propertyName === 'grid-template-rows') {
          answer.removeEventListener('transitionend', onEnd);
          if (!item.classList.contains('is-open')) item.open = false;
        }
      };
      answer.addEventListener('transitionend', onEnd);
      setTimeout(() => { if (!item.classList.contains('is-open')) item.open = false; }, 700);
    };
    const open = item => {
      detailsList.forEach(other => { if (other !== item) close(other); });
      item.open = true;
      item.offsetHeight;
      item.classList.add('is-open');
    };
    detailsList.forEach(item => {
      if (item.open) item.classList.add('is-open');
      item.querySelector('summary')?.addEventListener('click', evt => {
        evt.preventDefault();
        if (item.classList.contains('is-open')) close(item);
        else open(item);
      });
    });
  });
};

// Back to top (Script 22)
document.addEventListener('click', e => {
  if (e.target.closest?.('[data-back-to-top]')) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Run all on astro:page-load and immediately
const runAll = () => {
  initVideos();
  initWs();
  initHn();
  initFaq();
};

document.addEventListener('astro:page-load', runAll);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  runAll();
} else {
  document.addEventListener('DOMContentLoaded', runAll);
}
