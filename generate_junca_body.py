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
    s = s.replace('tabindex=', 'tabIndex=')
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
    
    # replace style="..." with JSX style
    s = re.sub(r'style=\"([^\"]*)\"', lambda m: css_to_jsx_style(m.group(1)), s)
    return s

m = re.search(r'(<div class=\"page-white\".*?</footer>)', html, re.DOTALL)
if not m:
    print('Failed to find page-white to footer')
    exit(1)

body_html = m.group(1)
body_jsx = convert_html(body_html)

print('Successfully converted Junca body to JSX, total chars:', len(body_jsx))
with open('src/components/JuncaBody.raw.tsx', 'w') as out:
    out.write(body_jsx)
print('Wrote src/components/JuncaBody.raw.tsx')
