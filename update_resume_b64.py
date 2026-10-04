import base64
import re

pdf_path = "C:/Users/DELL/.gemini/antigravity/brain/107035f2-bb99-4fb9-b943-b02a882b1915/.user_uploaded/media_1791034520332.pdf"
with open(pdf_path, "rb") as f:
    pdf_bytes = f.read()

b64_str = "data:application/pdf;base64," + base64.b64encode(pdf_bytes).decode('utf-8')

filepath = "src/data/index.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace export const RESUME_SRC = "..." or '...' or `...`
new_content = re.sub(
    r'(export const RESUME_SRC = )["\'].*?["\'];',
    f'\\1"{b64_str}";',
    content
)

if new_content == content:
    print("Could not find RESUME_SRC to replace!")
else:
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("RESUME_SRC updated successfully!")
