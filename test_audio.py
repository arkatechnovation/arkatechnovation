with open('junca_robot_threejs.js') as f:
    code = f.read()

import re
audio = re.findall(r'[\'\"`]([^\'\"`]+\.(?:mp3|wav|ogg|m4a|aac))[\'\"`]', code)
print('Audio files:', set(audio))

