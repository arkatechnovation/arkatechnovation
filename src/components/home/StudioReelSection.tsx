import React from 'react';

export default function StudioReelSection() {
  return (
    <section className="reel" data-reel>
      <div className="container">
        <h2 className="reel__h2">
          <span className="reel__line" data-reveal data-split="words">Great technology, undersold by its website.</span>
          <span className="reel__line" data-reveal data-split="words">That&#39;s what founders tell us, every week.</span>
        </h2>
        <div className="reel__stage" data-reel-stage>
          <div className="reel__aside" data-reel-aside>
            <p className="reel__label">( What we fix )</p>
            <div className="reel__text" data-reel-text>
              <p>Founders and researchers build extraordinary technology, and rarely have the eye, or the time, for the design it deserves.</p>
              <p>We give complex technology the clarity it needs: sleek, premium websites that present hard things simply, so investors, clients and talent get it in seconds. A small team, and a direct line to the people who design and build.</p>
            </div>
            <div className="reel__row">
              <div className="reel__cta">
                <a href="/studio" style={{ '--cta-w': '280px' } as React.CSSProperties} className="cta cta--light">
                  <span className="cta__text">
                    <span className="cta__label">Discover the studio</span>
                    <span className="cta__label cta__label--hover" aria-hidden={true}>Discover the studio</span>
                  </span>
                  <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
              <img className="reel__team" src="/images/team/team-pixel.webp" alt="Jules, Nathan and Corentin, the Junca team" width="720" height="480" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="reel__box">
            <div className="reel__video" data-reel-video>
              <video className="fvideo" poster="/_astro/reel-poster.DxqQjAMW_Z1SjGf3.webp" muted loop playsInline preload="none" crossOrigin="anonymous" data-lazy-video>
                <source src="https://assets.juncastudio.com/Home/botblox-home.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" media="(min-width: 810px)" />
                <source src="https://assets.juncastudio.com/Home/botblox-home.mp4" type="video/mp4" media="(min-width: 810px)" />
                <source src="https://assets.juncastudio.com/Home/botblox-home-sm.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" />
                <source src="https://assets.juncastudio.com/Home/botblox-home-sm.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
