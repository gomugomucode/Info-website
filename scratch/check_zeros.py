import json
with open(r'C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\inventory.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)
zero_len = [x for x in inv if x['extracted_text_length'] == 0]
for x in zero_len:
    print(f"{x['filename']}: size={x['size_bytes']}, raw_hash={x['raw_hash']}")
