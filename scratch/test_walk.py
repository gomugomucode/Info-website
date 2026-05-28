import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

path = r"c:\Users\Anupam Baral\Desktop\Info-website\docs\Telegram Desktop"
try:
    content = os.listdir(path)
    print(f"listdir successful. Found {len(content)} items.")
    for item in content[:5]:
        print(f" - {item}")
except Exception as e:
    print(f"Error listing {path}: {str(e)}")
