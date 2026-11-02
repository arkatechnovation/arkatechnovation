import React, { useState } from 'react';

interface IndustryItem {
  name: string;
  slug: string;
  img: string;
  imgPor: string;
  imgSm: string;
  alt: string;
  rows: { val: string; lab: string }[];
  note: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: 'DeepTech',
    slug: 'deeptech',
    img: '/images/industries/deeptech.webp',
    imgPor: '/images/industries/deeptech-por.webp',
    imgSm: '/images/industries/deeptech-sm.webp',
    alt: 'DeepTech: looking into a vacuum chamber, laser light across machined steel',
    rows: [
      { val: '$20.3B', lab: 'European VC, 2025' },
      { val: '$690B', lab: 'Ecosystem value' },
      { val: '32%', lab: 'Capital shift' },
    ],
    note: 'The page opens on the physics, not on the problem it solves. Investors and buyers leave before they know what you do.',
  },
  {
    name: 'Climate Tech',
    slug: 'climate-tech',
    img: '/images/industries/climate-tech.webp',
    imgPor: '/images/industries/climate-tech-por.webp',
    imgSm: '/images/industries/climate-tech-sm.webp',
    alt: 'Climate Tech: a wind turbine alone in a sunlit field, seen from above',
    rows: [
      { val: '$40.5B', lab: 'Global investment' },
      { val: '24%', lab: 'Market growth' },
      { val: '−18%', lab: 'Deal count' },
    ],
    note: 'Sensors, models and protocols stack up. The visitor drowns before the impact lands.',
  },
  {
    name: 'AI & Data',
    slug: 'ai-automation',
    img: '/images/industries/ai-automation.webp',
    imgPor: '/images/industries/ai-automation-por.webp',
    imgSm: '/images/industries/ai-automation-sm.webp',
    alt: 'AI & Data: streams of light folding into one another on a black ground',
    rows: [
      { val: '$581.7B', lab: 'Global investment' },
      { val: '44%', lab: 'Scaling' },
      { val: '37%', lab: 'Real impact' },
    ],
    note: 'Models, agents, copilots: the words pile up, and the visitor still cannot picture what the product does.',
  },
  {
    name: 'Industry 4.0',
    slug: 'industries-manufacturing',
    img: '/images/industries/industries-manufacturing.webp',
    imgPor: '/images/industries/industries-manufacturing-por.webp',
    imgSm: '/images/industries/industries-manufacturing-sm.webp',
    alt: 'Industry 4.0: the floor of a production hall, machines lined up under the lights',
    rows: [
      { val: '$394B', lab: 'Smart manufacturing' },
      { val: '$206B', lab: 'Industry 4.0' },
      { val: '14.7%', lab: 'Market growth' },
    ],
    note: 'Standards, tolerances and part numbers come first. The buyer stalls before the value is clear.',
  },
  {
    name: 'Robotics & Hardware',
    slug: 'robotics-hardware',
    img: '/images/industries/robotics-hardware.webp',
    imgPor: '/images/industries/robotics-hardware-por.webp',
    imgSm: '/images/industries/robotics-hardware-sm.webp',
    alt: 'Robotics & Hardware: a white collaborative robot arm with its gripper open, rim-lit on a black background',
    rows: [
      { val: '$50B', lab: 'Global market' },
      { val: '14%', lab: 'Market growth' },
      { val: '$27B', lab: 'Industrial robots' },
    ],
    note: 'Payloads, axes and components everywhere. The visitor stalls before the value is clear.',
  },
  {
    name: 'SaaS B2B',
    slug: 'saas',
    img: '/images/industries/saas.webp',
    imgPor: '/images/industries/saas-por.webp',
    imgSm: '/images/industries/saas-sm.webp',
    alt: 'SaaS B2B: a glass atrium seen straight up, floor after floor of lit offices',
    rows: [
      { val: '$316B', lab: 'Global SaaS market' },
      { val: '61%', lab: 'Rep-free buying' },
      { val: '57%', lab: 'Decision before contact' },
    ],
    note: 'The same layout, gradient, and stock illustration as every competitor. Nothing signals you\'re the category leader.',
  },
];

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  const current = INDUSTRIES[activeIdx];

  return (
    <section className="ind theme-dark" data-ind style={{ '--dur': '8500ms' } as React.CSSProperties}>
      <div className="ind__stage">
        {INDUSTRIES.map((ind, idx) => (
          <picture key={ind.slug}>
            <source media="(max-width: 809px)" srcSet={ind.imgPor} />
            <img
              className={`ind__img ${idx === activeIdx ? 'is-on' : ''}`}
              src={ind.img}
              alt={ind.alt}
              data-ind-img
              srcSet={`${ind.imgSm} 900w, ${ind.img} 1600w`}
              sizes="100vw"
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              crossOrigin="anonymous"
            />
          </picture>
        ))}
        <div className="ind__veil" aria-hidden={true} />
        <a
          className="ind__hit"
          href={`/industries/${current.slug}`}
          data-ind-hit
          aria-label={`${current.name}: see how we work with this industry`}
        />
      </div>

      <div className="container ind__top">
        <div className="ind__head">
          <p className="eyebrow" data-reveal>Industries</p>
          <h2 className="ind__title" data-reveal data-split="words">
            Every tech sector convinces a different way.
          </h2>
          <p className="ind__text" data-reveal>
            Deeptech, climate, industry 4.0, AI, robotics, B2B SaaS: we shape each site around what your field has to prove, and to whom.
          </p>
        </div>
      </div>

      <div className="ind__rail" aria-hidden={true}>
        <div className="ind__track" data-ind-track style={{ '--k': '1' } as React.CSSProperties}>
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.slug}
              className={`ind__slide ${idx === activeIdx ? 'is-on' : ''}`}
              data-ind-slide={idx}
            >
              <p className="ind__sname" data-ind-sname data-scr-skip>{ind.name}</p>
              <div className="ind__rows">
                {ind.rows.map((r) => (
                  <div key={r.lab} className="ind__row">
                    <span className="ind__band">
                      <span className="ind__val">{r.val}</span>
                    </span>
                    <span className="ind__lab">{r.lab}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ul className="ind__list sr-only" data-ind-list>
        {INDUSTRIES.map((ind, idx) => (
          <li key={ind.slug} data-ind-li>
            <a
              href={`/industries/${ind.slug}`}
              data-ind-go={idx}
              data-ind-label={ind.name}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(idx);
              }}
            >
              {ind.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="container ind__bottom">
        <div className="ind__notes">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.slug}
              className={`ind__note ${idx === activeIdx ? 'is-on' : ''}`}
              data-ind-note={idx}
            >
              <p>{ind.note}</p>
            </div>
          ))}
        </div>
        <div className="ind__cta">
          <a
            href="/industries"
            style={{ '--cta-w': '320px' } as React.CSSProperties}
            className="cta cta--dark"
          >
            <span className="cta__text">
              <span className="cta__label">Discover all Industries</span>
              <span className="cta__label cta__label--hover" aria-hidden={true}>Discover all Industries</span>
            </span>
            <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
