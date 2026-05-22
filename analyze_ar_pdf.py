import fitz
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pdf_path = sys.argv[1] if len(sys.argv) > 1 else r'D:\library\fiche pdf arabe.pdf'
doc = fitz.open(pdf_path)
page = doc[0]
print('Page size:', page.rect)
print('---')

blocks = page.get_text('dict')['blocks']
for b in blocks:
    if b.get('lines'):
        for line in b['lines']:
            for span in line['spans']:
                text = span['text'].strip()
                if text:
                    bbox = span['bbox']
                    print(f"SPAN bbox={list(bbox)} text='{text}' size={span['size']:.1f} font={span['font']}")

doc.close()
