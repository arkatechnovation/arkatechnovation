import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Josh Elijah',
    role: 'CEO, BotBlox Systems',
    quote: '“This is absolutely what we wanted for our website. They could not have done a better job, my team and I are beyond thrilled. This will not be the last time we work with Jules and Studio Junca.”',
    img: '/images/clients/josh.webp',
    project: '/projects/botblox',
  },
  {
    name: 'Martin Bocken',
    role: 'CEO & co-founder, Hylight',
    quote: '“The Junca team immediately understood our technical challenges and our need for clarity. The result is fluid, immersive, and perfectly aligned with our tech positioning.”',
    img: '/images/clients/martin.webp',
    project: '/projects/hylight',
  },
  {
    name: 'Luigi Kassir',
    role: 'CEO, Skipper NDT',
    quote: '“The final website perfectly reflects Skipper NDT’s identity. Junca was able to adapt, understand our project in depth, and translate it accurately into the website.”',
    img: '/images/clients/luigi.webp',
    project: '/projects/skipperndt',
  },
  {
    name: 'Lucy Lyons',
    role: 'CEO, Kestrix',
    quote: '“Working with Junca was simply delightful. The team is professional, visionary, and creative, and we are extremely satisfied with our output. Would 100% work with Jules and team again.”',
    img: '/images/clients/lucy.webp',
    project: '/projects/kestrix',
  },
];

export default function ClientVoicesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="voice" data-voice>
      <div className="container voice__head">
        <p className="eyebrow" data-reveal>Client voices</p>
        <h2 className="voice__h2" data-reveal data-split="words">
          Our clients speak for themselves.
        </h2>
      </div>
      <div className="container voice__grid">
        <div
          className="voice__panel"
          style={{
            '--bg': 'url(/images/home/voices-bg.webp)',
            '--bg-sm': 'url(/images/home/voices-bg-sm.webp)',
          } as React.CSSProperties}
        >
          <div className="voice__text" data-voice-text>
            <p className="voice__p">
              Junca works with <em className="voice__em">tech</em> and <em className="voice__em">deeptech</em> companies: founders who build hard things and need a website that makes them obvious.
            </p>
            <p className="voice__p">
              We keep part of our year for <em className="voice__em">agencies</em> and creative studios, the projects where we push <em className="voice__em">craft</em>, motion and real-time 3D further.
            </p>
            <p className="voice__p">
              We think most tech websites look the same: templates, stock 3D, copy nobody reads. We believe in <em className="voice__em">clarity</em>, <em className="voice__em">character</em> and <em className="voice__em">conversion</em>.
            </p>
          </div>
          <div className="voice__ctas" data-reveal>
            <a className="voice__btn voice__btn--ink" href="/contact">
              Start a project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
            <a className="voice__btn" href="/studio">About the studio</a>
          </div>
        </div>

        <ul className="voice__people" data-reveal>
          {TESTIMONIALS.map((t, idx) => (
            <li key={t.name}>
              <a
                className={`voice__card ${activeIdx === idx ? 'is-on' : ''}`}
                href={t.project}
                data-voice-card
                aria-label={`${t.name}, ${t.role}: read the testimonial and the case study`}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <img
                  className="voice__pic"
                  src={t.img}
                  alt={`Portrait of ${t.name}`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="1200"
                />
                <span className="voice__veil" aria-hidden={true} />
                <span className="voice__who">
                  <strong className="voice__name" data-voice-name>{t.name}</strong>
                  <span className="voice__role" data-voice-role>{t.role}</span>
                </span>
                <blockquote className="voice__quote">
                  <p data-voice-quote>{t.quote}</p>
                </blockquote>
                <span className="voice__more">
                  <span className="voice__more-txt">Read the case study</span>
                  <span className="voice__ic" aria-hidden={true}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
