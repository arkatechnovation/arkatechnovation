import urllib.request, os

files = [
    '/robot/junca_robot.glb',
    '/robot/env.exr',
    '/robot/env_256.exr',
    '/robot/junca_ao.webp',
    '/robot/junca_ao_512.webp',
    '/robot/junca_lightmap_1024.webp',
]

os.makedirs('public/robot', exist_ok=True)

for path in files:
    url = 'https://juncastudio.com' + path
    local_path = 'public' + path
    try:
        print(f'Fetching {url}...')
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, timeout=30).read()
        with open(local_path, 'wb') as f:
            f.write(data)
        print(f'Success: {path} ({len(data)} bytes)')
    except Exception as e:
        print(f'Error {path}: {e}')

