with open('public/_astro/main.BRlCz0Vs.js') as f:
    c = f.read()

import re
print('Has start function:', 'async function yn' in c)
print('Exports:', re.findall(r'export\s*\{[^}]+\}', c))

