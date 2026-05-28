import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\Anupam Baral\.gemini\antigravity-ide\brain\9c51c01d-9277-453c-9d84-f79362cbf2f7\scratch\inventory.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)

print(f"Total files in inventory: {len(inv)}")
telegram_files = [x for x in inv if "Telegram Desktop" in x['rel_path']]
print(f"Files in Telegram Desktop: {len(telegram_files)}")
for x in telegram_files[:5]:
    print(f" - {x['rel_path']}")
