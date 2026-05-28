import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\inventory.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)

substantial = []
watermark_only = []
empty = []

for x in inv:
    length = x['extracted_text_length']
    if length == 0:
        empty.append(x)
    elif length < 2000:
        watermark_only.append(x)
    else:
        substantial.append(x)

print(f"Substantial text files (>2000 chars): {len(substantial)}")
for x in substantial:
    print(f" - {x['filename']} ({x['extracted_text_length']} chars)")
    
print(f"\nWatermark-only or very short files (<2000 chars): {len(watermark_only)}")
for x in watermark_only:
    print(f" - {x['filename']} ({x['extracted_text_length']} chars)")
    
print(f"\nEmpty files (0 chars): {len(empty)}")
for x in empty:
    print(f" - {x['filename']}")
