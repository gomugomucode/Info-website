import os
import re
from collections import Counter

def get_mdx_files(root_dir):
    files = []
    for root, dirs, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.mdx'):
                files.append(os.path.join(root, filename))
    return files

def clean_text(text):
    # Remove frontmatter
    text = re.sub(r'^---.*?---', '', text, flags=re.DOTALL)
    # Split into paragraphs/blocks
    blocks = [b.strip() for b in text.split('\n\n') if b.strip()]
    return blocks

def main():
    root_dir = 'content'
    files = get_mdx_files(root_dir)
    all_blocks = {}

    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            blocks = clean_text(content)
            for b in blocks:
                if len(b) < 40: continue # skip short lines
                if b not in all_blocks:
                    all_blocks[b] = []
                all_blocks[b].append(file)

    duplicates = {k: v for k, v in all_blocks.items() if len(v) > 1}
    
    if not duplicates:
        print("No duplicate blocks found.")
        return

    for block, files in duplicates.items():
        print(f"--- DUPLICATE BLOCK ---\n{block}\n\nFound in:\n" + "\n".join(files) + "\n\n")

if __name__ == "__main__":
    main()
