import React from 'react';

const CAPABILITIES = [
  {
    num: '01 / CAPABILITY',
    title: 'Web Engineering',
    text: 'Islands architecture, sub-second load times, headless CMS integration, and resilient full-stack TypeScript.',
    tag: 'Astro · Next.js · React',
  },
  {
    num: '02 / CAPABILITY',
    title: 'Interactive 3D & WebGL',
    text: 'Custom GLSL fluid shaders, CAD-to-web pipelines, Three.js shaders, and real-time physical product configurators.',
    tag: 'Three.js · GLSL · WebGL',
  },
  {
    num: '03 / CAPABILITY',
    title: 'Organic Search & GEO',
    text: 'Generative Engine Optimization, structured schema graphs, and authority citations across AI answer engines.',
    tag: 'LLM Citation · Search Graph',
  },
  {
    num: '04 / CAPABILITY',
    title: 'Cinema Brand & Film',
    text: 'High-fidelity 3D rendering, motion design systems, interactive pitch collages, and investor-ready visual narratives.',
    tag: 'Blender · Motion · Identity',
  },
];

export default function StatementSection() {
  return (
    <section className="statement container" data-statement>
      <p className="statement__p" data-scrub="words">
        We design and build websites, brands, and real-time 3D experiences for ambitious tech companies. A dedicated team with senior engineers and designers on every sprint.
      </p>

      {/* 4-Column Core Capabilities Grid */}
      <div className="statement__grid">
        {CAPABILITIES.map((cap) => (
          <div key={cap.num} className="statement__card">
            <span className="statement__card-num">{cap.num}</span>
            <h3 className="statement__card-title">{cap.title}</h3>
            <p className="statement__card-text">{cap.text}</p>
            <span className="statement__card-tag">{cap.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
