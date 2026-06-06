import zipfile
import xml.etree.ElementTree as ET
import os

def read_docx(file_path):
    # docx files are zip archives containing XML files
    # The main document content is in word/document.xml
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            # XML namespaces
            ns = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            
            # Find all paragraph elements and extract text from runs
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
    file_path = r"c:\Users\Anupam Baral\Desktop\Info-website\Website Audit and Redesign Strategy.docx"
    content = read_docx(file_path)
    # Save the text version to a file so we can view it
    out_path = r"c:\Users\Anupam Baral\Desktop\Info-website\scratch\audit_strategy.txt"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Extracted {len(content)} characters of text and saved to {out_path}")
