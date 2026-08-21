import os
import glob
import re

components_dir = "c:/Users/DELL/Desktop/anj-port/src/components"
files = glob.glob(os.path.join(components_dir, "*.jsx"))

replacements = [
    (r"\bbg-ivory\b", "bg-bg"),
    (r"\bbg-cream\b", "bg-surface"),
    (r"\btext-charcoal\b", "text-navy"),
    (r"\btext-taupe\b", "text-muted"),
    (r"\bborder-charcoal\b", "border-navy"),
    (r"\bbg-charcoal\b", "bg-navy"),
    (r"\btext-ivory\b", "text-bg"),
    (r"\bgroup-hover:text-ivory\b", "group-hover:text-bg"),
    (r"\bgroup-hover:border-ivory\b", "group-hover:border-bg"),
    (r"\bgroup-hover:bg-charcoal\b", "group-hover:bg-navy"),
    (r"\bfont-display\b", "font-serif"),
    (r"\bg-ivory/50\b", "bg-bg/50"),
    (r"\btext-ivory/50\b", "text-bg/50"),
    (r"\btext-ivory/60\b", "text-bg/60"),
    (r"\btext-ivory/70\b", "text-bg/70"),
    (r"\btext-ivory/30\b", "text-bg/30"),
    (r"\bcharcoal\b", "navy"), # Catchall for custom cursor bg/border
    (r"\btaupe\b", "muted"),
    (r"\bivory\b", "bg"),
    (r"\bcream\b", "surface"),
]

for file in files:
    with open(file, "r") as f:
        content = f.read()
    
    new_content = content
    # We do a basic string replace for all of them
    new_content = new_content.replace("bg-ivory", "bg-bg")
    new_content = new_content.replace("bg-cream", "bg-surface")
    new_content = new_content.replace("text-charcoal", "text-navy")
    new_content = new_content.replace("text-taupe", "text-muted")
    new_content = new_content.replace("border-charcoal", "border-navy")
    new_content = new_content.replace("bg-charcoal", "bg-navy")
    new_content = new_content.replace("text-ivory", "text-bg")
    new_content = new_content.replace("group-hover:text-ivory", "group-hover:text-bg")
    new_content = new_content.replace("group-hover:border-ivory", "group-hover:border-bg")
    new_content = new_content.replace("group-hover:bg-charcoal", "group-hover:bg-navy")
    new_content = new_content.replace("font-display", "font-serif")
    
    # Catch any opacity ones
    new_content = new_content.replace("-ivory/", "-bg/")
    new_content = new_content.replace("-charcoal/", "-navy/")
    new_content = new_content.replace("-taupe/", "-muted/")
    
    # Other specifics
    new_content = new_content.replace("hover:text-charcoal", "hover:text-navy")
    new_content = new_content.replace("hover:text-taupe", "hover:text-muted")
    new_content = new_content.replace("hover:bg-charcoal", "hover:bg-navy")
    new_content = new_content.replace("hover:border-taupe", "hover:border-muted")

    with open(file, "w") as f:
        f.write(new_content)
        
print("Replacements done.")
