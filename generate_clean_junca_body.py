import re

with open('junca_clean_markup.html') as f:
    html = f.read()

def css_to_jsx_style(css_str):
    parts = [p.strip() for p in css_str.split(';') if p.strip()]
    obj_props = []
    has_custom = False
    for p in parts:
        if ':' not in p:
            continue
        k, v = p.split(':', 1)
        k, v = k.strip(), v.strip()
        if k.startswith('--'):
            has_custom = True
            obj_props.append(f"'{k}': '{v}'")
        else:
            k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            obj_props.append(f"{k_camel}: '{v}'")
    cast = ' as React.CSSProperties' if has_custom else ''
    return 'style={{ ' + ', '.join(obj_props) + ' }' + cast + '}'

def convert_html(s):
    # void elements self-closing
    for vt in ['img', 'source', 'input', 'br', 'hr']:
        s = re.sub(r'(<' + vt + r'\b[^>]*?)(?<!/)>', r'\1 />', s)
    s = s.replace('class=', 'className=')
    s = s.replace('tabindex="-1"', 'tabIndex={-1}')
    s = s.replace('tabindex="0"', 'tabIndex={0}')
    s = s.replace('tabindex=', 'tabIndex=')
    s = s.replace('srcset=', 'srcSet=')
    s = s.replace('crossorigin=', 'crossOrigin=')
    s = s.replace('autoplay', 'autoPlay')
    s = s.replace('playsinline', 'playsInline')
    s = s.replace('viewbox=', 'viewBox=')
    s = s.replace('stroke-width=', 'strokeWidth=')
    s = s.replace('stroke-linecap=', 'strokeLinecap=')
    s = s.replace('stroke-linejoin=', 'strokeLinejoin=')
    s = s.replace('fill-rule=', 'fillRule=')
    s = s.replace('clip-rule=', 'clipRule=')
    s = s.replace('clip-path=', 'clipPath=')
    s = s.replace('fetchpriority=', 'fetchPriority=')
    s = s.replace('aria-hidden="true"', 'aria-hidden={true}')
    s = s.replace('aria-hidden="false"', 'aria-hidden={false}')
    s = s.replace('inert', 'inert={""}')
    s = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', s, flags=re.DOTALL)
    s = s.replace('&nbsp;', ' ')
    
    # replace style="..." with JSX style
    s = re.sub(r'style=\"([^\"]*)\"', lambda m: css_to_jsx_style(m.group(1)), s)
    return s

m = re.search(r'(<div class=\"page-white\".*?</footer>)', html, re.DOTALL)
if not m:
    print('Failed to find page-white to footer')
    exit(1)

body_html = m.group(1)
body_html = body_html.replace('</main>', '') # remove stray </main>

body_jsx = convert_html(body_html)

header = """import React, { useEffect, useRef } from 'react';

export default function JuncaBody() {
  const pfTrackRef = useRef<HTMLDivElement>(null);

  // Scroll handler for PF sticky track
  useEffect(() => {
    const handleScroll = () => {
      if (!pfTrackRef.current) return;
      const rect = pfTrackRef.current.getBoundingClientRect();
      const top = -rect.top;
      const totalH = rect.height - window.innerHeight;
      if (top > 0 && totalH > 0) {
        const progress = Math.min(1, Math.max(0, top / totalH));
        const step = Math.min(4, Math.floor(progress * 5));
        const digits = document.querySelector<HTMLElement>('[data-pf-digits]');
        if (digits) {
          digits.style.setProperty('--a', String(step));
        }
        document.querySelectorAll<HTMLElement>('[data-pf-step]').forEach((el, idx) => {
          el.classList.toggle('is-active', idx === step);
          el.classList.toggle('is-before', idx < step);
        });
        document.querySelectorAll<HTMLElement>('[data-pf-fig]').forEach((el, idx) => {
          el.classList.toggle('is-on', idx <= step);
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up interactive industry tabs & voices
  useEffect(() => {
    // Industries tabs
    const indImgs = document.querySelectorAll<HTMLElement>('[data-ind-img]');
    const indSlides = document.querySelectorAll<HTMLElement>('[data-ind-slide]');
    const indNotes = document.querySelectorAll<HTMLElement>('[data-ind-note]');
    const indGoLinks = document.querySelectorAll<HTMLAnchorElement>('[data-ind-go]');

    indGoLinks.forEach((link, idx) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        indImgs.forEach((img, i) => img.classList.toggle('is-on', i === idx));
        indSlides.forEach((slide) => slide.classList.toggle('is-on', Number(slide.dataset.indSlide) === idx));
        indNotes.forEach((note) => note.classList.toggle('is-on', Number(note.dataset.indNote) === idx));
      });
    });

    // Voice cards hover/focus
    const voiceCards = document.querySelectorAll<HTMLElement>('[data-voice-card]');
    voiceCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        voiceCards.forEach(c => c.classList.remove('is-on'));
        card.classList.add('is-on');
      });
    });

    // News strip arrow buttons
    const prevBtn = document.querySelector<HTMLButtonElement>('[data-hn-prev]');
    const nextBtn = document.querySelector<HTMLButtonElement>('[data-hn-next]');
    const hnTrack = document.querySelector<HTMLElement>('[data-hn-track]');

    if (hnTrack && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        hnTrack.scrollBy({ left: -380, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        hnTrack.scrollBy({ left: 380, behavior: 'smooth' });
      });
    }

    // FW Card hover tags
    const fwCards = document.querySelectorAll<HTMLElement>('[data-fw-card]');
    fwCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.remove('is-reset');
        card.classList.add('is-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-hover');
        setTimeout(() => card.classList.add('is-reset'), 200);
      });
    });
  }, []);

  return (
    <div className="junca-body-root" id="home-content">
"""

footer = """
    </div>
  );
}
"""

full_content = header + body_jsx + footer
with open('src/components/JuncaBody.tsx', 'w') as out:
    out.write(full_content)

print('Successfully generated src/components/JuncaBody.tsx, bytes:', len(full_content))
