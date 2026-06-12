import zipfile
import xml.etree.ElementTree as ET
import os
import sys

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            ns = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            
            paragraphs = []
            for paragraph in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = []
                for run in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if run.text:
                        texts.append(run.text)
                if texts:
                    paragraphs.append("".join(texts))
                else:
                    paragraphs.append("")
            
            return "\n".join(paragraphs)
    except Exception as e:
        return f"Error reading docx: {e}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_docx.py <file_path>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    content = read_docx(file_path)
    
    # Save to a filename derived from the input file
    base_name = os.path.basename(file_path)
    out_path = os.path.join("scratch", f"{base_name}.txt")
    
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Extracted {len(content)} characters of text and saved to {out_path}")
