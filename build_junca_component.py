import re

with open('src/components/JuncaBody.raw.tsx') as f:
    raw = f.read()

# Let's inspect any issues that would prevent valid TSX:
# 1. comments <!-- ... --> should be {/* ... */}
raw = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', raw, flags=re.DOTALL)

# 2. <br> to <br /> (already done, but verify)
raw = re.sub(r'<br\b(?![^>]*?/)', '<br />', raw)

# 3. &nbsp; to {'\u00a0'} or standard space
raw = raw.replace('&nbsp;', ' ')

# 4. In links with style variables like style={{ '--cta-w': '320px' } as React.CSSProperties}
# Let's check for any unclosed curly braces or bad syntax.

# 5. Let's make sure SVGs have viewBox and proper props
raw = raw.replace('aria-hidden="true"', 'aria-hidden={true}')
raw = raw.replace('aria-hidden="false"', 'aria-hidden={false}')
raw = raw.replace('inert', 'inert={""}')

header = """import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function JuncaBody() {
  const [pfStep, setPfStep] = useState(0);
  const [hoveredFw, setHoveredFw] = useState<number | null>(null);
  const [fwCursor, setFwCursor] = useState({ x: 0, y: 0, show: false });
  const [pfCursor, setPfCursor] = useState({ x: 0, y: 0, show: false });
  const [activeInd, setActiveInd] = useState(0);
  const [activeVoice, setActiveVoice] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const hnTrackRef = useRef<HTMLDivElement>(null);
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
        setPfStep(step);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // News track scroll handler
  const scrollHn = (dir: 'prev' | 'next') => {
    if (!hnTrackRef.current) return;
    const scrollAmount = 380;
    hnTrackRef.current.scrollBy({
      left: dir === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
"""

footer = """
  );
}
"""

full_content = header + raw + footer
with open('src/components/JuncaBody.tsx', 'w') as out:
    out.write(full_content)

print('Wrote src/components/JuncaBody.tsx, bytes:', len(full_content))
