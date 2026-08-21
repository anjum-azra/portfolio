import os
import glob
import re

components_dir = "c:/Users/DELL/Desktop/anj-port/src/components"
files = glob.glob(os.path.join(components_dir, "*.jsx"))

for file in files:
    with open(file, "r") as f:
        content = f.read()
    
    new_content = content
    new_content = new_content.replace("hover:text-navy", "hover:text-maroon")
    new_content = new_content.replace("hover:text-muted", "hover:text-maroon")
    new_content = new_content.replace("hover:border-navy", "hover:border-maroon")
    new_content = new_content.replace("hover:border-muted", "hover:border-maroon")

    with open(file, "w") as f:
        f.write(new_content)
        
print("Secondary replacements done.")
