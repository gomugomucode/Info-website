import json
import os
import re

inventory_file = r"C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\inventory.json"
report_file = r"C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\report.json"

with open(inventory_file, 'r', encoding='utf-8') as f:
    inventory = json.load(f)

# Helper to normalize text for token Jaccard similarity
def tokenize(text):
    if not text:
        return set()
    text = text.lower()
    # Remove code blocks or formatting if needed, but word tokenization is good
    words = re.findall(r'\b[a-z]{3,15}\b', text)
    return set(words)

# Compute token sets for all files
for item in inventory:
    item['tokens'] = tokenize(item.get('preview', '') + ' ' + (item.get('normalized_title', ''))) # standard tokens from preview or full?
    # Wait, the preview was only 500 chars. Let's make sure we compute token similarity using full text!
    # Wait! The inventory.json only has preview in it to save memory. 
    # Let's load the actual text of the files for similarity computation!

# Let's read full text for similarity.
print("Loading full text for all files...")
for item in inventory:
    full_path = item['full_path']
    ext = item['file_type']
    text = ""
    # Since pypdf is fast enough for text extraction when we only do it once, let's load it here
    if ext == 'pdf':
        try:
            from pypdf import PdfReader
            reader = PdfReader(full_path)
            text = "\n".join([p.extract_text() or "" for p in reader.pages])
        except:
            pass
    elif ext in ['md', 'mdx', 'txt']:
        try:
            with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read()
        except:
            pass
    item['full_text'] = text
    item['tokens'] = tokenize(text)

# Find exact duplicates by text_hash
# Group by text_hash
by_text_hash = {}
for item in inventory:
    th = item['text_hash']
    if not th:
        continue
    by_text_hash.setdefault(th, []).append(item)

# Group by filename
by_filename = {}
for item in inventory:
    fn = item['filename']
    by_filename.setdefault(fn, []).append(item)

# Near duplicate detection
# We will compare token Jaccard similarity between all pairs that don't have the same text_hash.
# Jaccard = intersect / union
near_duplicates = []
visited_pairs = set()

for i in range(len(inventory)):
    for j in range(i + 1, len(inventory)):
        item1 = inventory[i]
        item2 = inventory[j]
        
        # If they are exact duplicates by text_hash, they are already grouped
        if item1['text_hash'] == item2['text_hash'] and item1['text_hash'] is not None:
            continue
            
        t1 = item1['tokens']
        t2 = item2['tokens']
        
        if not t1 or not t2:
            continue
            
        intersection = len(t1.intersection(t2))
        union = len(t1.union(t2))
        similarity = intersection / union if union > 0 else 0
        
        if similarity >= 0.7:  # high similarity threshold
            near_duplicates.append({
                "file1": item1['rel_path'],
                "file2": item2['rel_path'],
                "similarity": similarity,
                "reason": "semantic_near_duplicate"
            })

# Let's categorize the files
exact_duplicates_groups = [g for g in by_text_hash.values() if len(g) > 1]
# We want to identify:
# 1. Same filename but different content (different text_hash)
same_filename_diff_content = []
for fn, items in by_filename.items():
    if len(items) > 1:
        hashes = set(item['text_hash'] for item in items if item['text_hash'])
        if len(hashes) > 1:
            same_filename_diff_content.append({
                "filename": fn,
                "files": [item['rel_path'] for item in items],
                "hashes": list(hashes)
            })

# 2. Different filename but same content (same text_hash)
diff_filename_same_content = []
for th, items in by_text_hash.items():
    if len(items) > 1:
        filenames = set(item['filename'] for item in items)
        if len(filenames) > 1:
            diff_filename_same_content.append({
                "text_hash": th,
                "files": [item['rel_path'] for item in items],
                "filenames": list(filenames)
            })

# Save report
report = {
    "total_files": len(inventory),
    "exact_duplicates": [
        {
            "text_hash": th,
            "files": [item['rel_path'] for item in items]
        }
        for th, items in by_text_hash.items() if len(items) > 1
    ],
    "near_duplicates": near_duplicates,
    "same_filename_diff_content": same_filename_diff_content,
    "diff_filename_same_content": diff_filename_same_content,
    "file_list": [
        {
            "filename": item['filename'],
            "rel_path": item['rel_path'],
            "file_type": item['file_type'],
            "size_bytes": item['size_bytes'],
            "extracted_text_length": item['extracted_text_length'],
            "text_hash": item['text_hash'],
            "normalized_title": item['normalized_title']
        }
        for item in inventory
    ]
}

with open(report_file, 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"Report saved to {report_file}")
print(f"Total exact duplicate groups: {len(report['exact_duplicates'])}")
print(f"Total near duplicate pairs: {len(report['near_duplicates'])}")
print(f"Total same filename diff content: {len(report['same_filename_diff_content'])}")
print(f"Total diff filename same content: {len(report['diff_filename_same_content'])}")
