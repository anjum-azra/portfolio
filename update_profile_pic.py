import re

file_path = "c:/Users/DELL/Desktop/anj-port/src/data/index.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace export const PROFILE_SRC = "..."; with export const PROFILE_SRC = "/profile_pic.jpg";
content = re.sub(r'export const PROFILE_SRC = "data:image[^"]+";', 'export const PROFILE_SRC = "/profile_pic.jpg";', content)
content = re.sub(r"export const PROFILE_SRC = 'data:image[^']+';", 'export const PROFILE_SRC = "/profile_pic.jpg";', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
