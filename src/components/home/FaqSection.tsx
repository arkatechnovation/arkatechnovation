import React from 'react';

const FAQS = [
  {
    q: 'What does Junca Studio do?',
    a: 'Junca Studio is a web, brand and 3D studio for tech and deep tech companies whose technology has matured faster than their brand and website. We close that gap with one team that does everything in-house: positioning and visual identity, website design, development in Framer or in custom code with Astro and Next.js, and real-time 3D built in Blender and WebGL. Clients include Hylight (Y Combinator S23), Kestrix, Skipper NDT and BotBlox.',
  },
  {
    q: 'How much does a website cost with Junca Studio?',
    a: 'Every project is priced on its scope, never from a package. As a guide, a website built in Framer typically ranges from $10,000 to $20,000. Projects that bring together a brand identity, a full website and custom 3D usually range from $20,000 to $50,000, and complete programs for a launch or a fundraise go further. If your budget is tight, we phase the work: the essentials first, then 3D and new pages. After a free first call, you get a detailed quote, line by line.',
  },
  {
    q: 'How long does it take to build a website with Junca Studio?',
    a: 'A marketing website usually takes 4 to 6 weeks once the brief is approved. Projects that add branding, 3D scenes or custom animation take 8 to 12 weeks. You follow every stage in the Junca client portal, with clear milestones, so you always know what comes next.',
  },
  {
    q: 'Can I update the website myself after launch?',
    a: 'Yes. On Framer, your team edits text, images and articles directly in the Framer CMS. On Astro or Next.js, we connect a headless CMS such as Sanity: you publish a page or an article and the site updates within minutes, without touching any code. We train your team at launch and stay available afterwards.',
  },
  {
    q: 'Which technology do you use: Framer, Astro or Next.js?',
    a: 'We pick the one that fits your project. Framer is ideal for marketing sites your team wants to edit visually and launch fast. Astro, usually paired with Sanity, suits sites with a lot of content that need very fast loading and 3D in the browser. Next.js suits products with accounts, dashboards or app features. All three produce fast pages that search engines and AI assistants can read, with no plugins to maintain like on WordPress.',
  },
  {
    q: 'What does Junca Studio offer besides web design?',
    a: 'Besides web design and UX, we offer four services that work together or on their own: development on Framer, Astro or Next.js; 3D and immersive experiences built with Blender and WebGL; branding and visual identity, from logo to brand guidelines and art direction; and SEO and AI search optimization, so your company shows up on Google and in answers from ChatGPT or Perplexity. Most clients combine two or three of them.',
  },
  {
    q: 'How does a project with Junca Studio work?',
    a: 'It starts with a free call to understand your product, your audience and your goals. We then work in the Junca client portal with clear milestones: strategy, art direction, UX and UI design, development, testing and launch. You review copy and designs there, approve each milestone and find every document and deliverable in one place. You talk directly to the people who design and build your site.',
  },
  {
    q: 'What makes Junca Studio different from other web design agencies?',
    a: 'Three things. An engineering background: we read the white papers and understand the hardware, data or AI behind your product before designing anything. A track record with technical companies, from Hylight (Y Combinator S23) to Kestrix, Skipper NDT and BotBlox. And 3D and WebGL produced by our own team with Blender, so complex products become tangible. You work directly with the people who design and build your site, with no account manager in between.',
  },
  {
    q: 'Where is Junca Studio based, and do you work with international clients?',
    a: 'Junca Studio is a French studio. We work remotely with tech companies in France, the United Kingdom and the United States, in English or French, from the first call to launch.',
  },
];

export default function FaqSection() {
  return (
    <section className="faqsec page-white">
      <div className="container">
        <h2>Got a question? We answer it here.</h2>
        <div className="faqsec__grid">
          <div className="faqsec__left">
            <p className="faqsec__keep">
              <span className="faqsec__dot" aria-hidden={true} />
              Let&#39;s keep in touch
            </p>
            <a href="/contact" style={{ '--cta-w': '272px' } as React.CSSProperties} className="cta cta--light">
              <span className="cta__text">
                <span className="cta__label">Get in touch</span>
                <span className="cta__label cta__label--hover" aria-hidden={true}>Get in touch</span>
              </span>
              <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
          <div className="faq" data-faq>
            {FAQS.map((faq) => (
              <details key={faq.q} className="faq__item">
                <summary className="faq__q">
                  <h3 className="faq__title">{faq.q}</h3>
                  <span className="faq__icon" aria-hidden={true} />
                </summary>
                <div className="faq__a">
                  <div className="faq__a-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
