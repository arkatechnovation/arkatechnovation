with open('junca_robot_threejs.js') as f:
    code = f.read()

import re
urls = re.findall(r'[\'\"`](/robot/[^\'\"`]+)[\'\"`]', code)
print('Robot URLs found:', set(urls))

