import re

file_path = "c:/Users/DELL/Desktop/anj-port/src/data/index.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('export const PROFILE_SRC = "/profile_pic.jpg";', 'export const PROFILE_SRC = "/profile_pic.png";')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
