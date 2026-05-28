import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\inventory.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)

targets = ["Bug Bounty Methodology 2026_compressed.pdf", "Hacking Drone with DroneSploit part1.pdf", "Linux Commands Every Cybersecurity Specialist Needs.pdf.pdf.pdf"]

for x in inv:
    if x['filename'] in targets:
        print("="*40)
        print(f"File: {x['filename']}")
        print(f"Extracted Length: {x['extracted_text_length']}")
        print(f"Preview: {repr(x['preview'])}")
