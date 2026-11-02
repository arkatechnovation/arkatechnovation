import urllib.request, re, os

os.makedirs('public/_astro', exist_ok=True)

downloaded = set()
queue = [
    'RobotHero.astro_astro_type_script_index_0_lang.DJFvXF7j.js',
    'main.BRlCz0Vs.js',
    'preload-helper.CxFQXtKk.js',
    'three.module.BXU1Nt8E.js',
    'rolldown-runtime.hePW80VL.js',
    'Pass.BjQvpECQ.js',
    'EXRLoader.ZZJu5hrK.js',
    'scramble.B_wRDRhM.js',
    'gsap.CvDoa17S.js',
    'SplitText.D2RYeBm1.js',
    'draco_decoder.C32yEggz.wasm',
    'draco_wasm_wrapper.DxJM36Ib.js',
    'draco_decoder.fzg4nYZr.js'
]

while queue:
    filename = queue.pop(0)
    if filename in downloaded:
        continue
    downloaded.add(filename)
    
    url = 'https://juncastudio.com/_astro/' + filename
    local_path = 'public/_astro/' + filename
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, timeout=15).read()
        with open(local_path, 'wb') as f:
            f.write(data)
        print(f'Downloaded {filename} ({len(data)} bytes)')
        
        # If it's a JS file, find any additional imports
        if filename.endswith('.js'):
            text = data.decode('utf-8', errors='ignore')
            new_files = re.findall(r'[\'\"`]\./([a-zA-Z0-9_\-\.]+\.js)[\'\"`]', text)
            new_files += re.findall(r'[\'\"`]/_astro/([a-zA-Z0-9_\-\.]+\.[a-zA-Z0-9]+)[\'\"`]', text)
            for nf in new_files:
                if nf not in downloaded and nf not in queue:
                    queue.append(nf)
    except Exception as e:
        print(f'Failed {filename}: {e}')

print(f'Finished downloading {len(downloaded)} chunks!')
