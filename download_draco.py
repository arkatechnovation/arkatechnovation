import urllib.request, os

draco_files = [
    '/robot/draco/draco_decoder.wasm',
    '/robot/draco/draco_wasm_wrapper.js',
    '/robot/draco/draco_decoder.js',
]

os.makedirs('public/robot/draco', exist_ok=True)

for path in draco_files:
    url = 'https://juncastudio.com' + path
    local_path = 'public' + path
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, timeout=15).read()
        with open(local_path, 'wb') as f:
            f.write(data)
        print(f'Success: {path} ({len(data)} bytes)')
    except Exception as e:
        print(f'Error {path}: {e}')

