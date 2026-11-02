import React, { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    kicker: '01 / 05 · New York, United States',
    title: 'BotBlox: Moving data where ethernet was never meant to run',
    link: '/projects/botblox',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    alt: 'BotBlox Systems Hardware Architecture',
    tags: ['DeepTech', 'Corporate website'],
  },
  {
    kicker: '02 / 05 · London, United Kingdom',
    title: 'Kestrix: Mapping heat loss at urban scale',
    text: 'Kestrix: making thermal data readable to accelerate building retrofit',
    link: '/projects/kestrix',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    alt: 'Kestrix Urban Thermal Scanning',
    tags: ['Climate', 'Showcase website'],
  },
  {
    kicker: '03 / 05 · Paris, France',
    title: 'Hylight: Deeptech startup in aerial inspection',
    text: 'Hylight: an aerial inspection technology driven by design.',
    link: '/projects/hylight',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Hylight Aerial Inspection Airship',
    tags: ['DeepTech', 'Showcase website'],
  },
  {
    kicker: '04 / 05 · Nantes, France',
    title: 'Artefact: Visual exploration studio',
    text: 'Building the showcase website for Artefact, a space for their creative work',
    link: '/projects/artefact',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    alt: 'Artefact Visual Exploration Studio',
    tags: ['Studio', 'Showcase website, portfolio'],
  },
  {
    kicker: '05 / 05 · Paris, France',
    title: 'Skipper NDT: Automating energy infrastructure maintenance',
    link: '/projects/skipperndt',
    img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80',
    alt: 'Skipper NDT Energy Pipeline Maintenance',
    tags: ['DeepTech', 'Showcase website'],
  },
];

export default function FeaturedWorkSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-fw-card]');
    const handlers: { card: HTMLElement; enter: () => void; leave: () => void }[] = [];

    cards.forEach((card) => {
      const enter = () => {
        card.classList.remove('is-reset');
        card.classList.add('is-hover');
      };
      const leave = () => {
        card.classList.remove('is-hover');
        setTimeout(() => card.classList.add('is-reset'), 200);
      };
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      handlers.push({ card, enter, leave });
    });

    return () => {
      handlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <section className="fw container" data-fw ref={containerRef}>
      <div className="fw__top">
        <p className="eyebrow" data-reveal>Selected work</p>
        <div className="fw__head">
          <h2 className="fw__h2">
            <span className="fw__line" data-reveal data-split="words">They trusted us with</span>
            <span className="fw__line" data-reveal data-split="words">their image.</span>
          </h2>
          <p className="fw__intro" data-reveal>
            Extraordinary products, undersold by their websites: that&#39;s the gap we close for tech and deeptech companies. End to end: art direction, custom development, real-time 3D, content.
          </p>
        </div>
      </div>

      <ol className="fw__grid">
        {PROJECTS.map((p, idx) => (
          <li key={p.link} className="fw__card" data-fw-card>
            <a className="fw__link" href={p.link} data-morph aria-label={`View project: ${p.title}`}>
              <figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}>
                <img src={p.img} alt={p.alt} loading="lazy" decoding="async" width="1620" height="1080" />
                <figcaption className="fw__tags">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tag} className="fw__tag" style={{ '--j': String(tIdx) } as React.CSSProperties}>
                      {tag}
                    </span>
                  ))}
                </figcaption>
              </figure>
              <div className="fw__art">
                <span className="fw__dot" aria-hidden={true} />
                <div className="fw__txt">
                  <span className="fw__kicker">{p.kicker}</span>
                  <h3 className="fw__title" data-scr-skip-mobile>{p.title}</h3>
                  {p.text && <p className="fw__text">{p.text}</p>}
                </div>
                <span className="fw__ic" aria-hidden={true}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <div className="fw__cta" data-reveal>
        <a href="/projects" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light">
          <span className="cta__text">
            <span className="cta__label">View all projects</span>
            <span className="cta__label cta__label--hover" aria-hidden={true}>View all projects</span>
          </span>
          <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>

      <div className="fw__cursor" data-fw-cursor aria-hidden={true}>
        <span className="fw__cursor-in">
          <span className="fw__cursor-txt">View project</span>
          <span className="fw__cursor-arr">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
}
