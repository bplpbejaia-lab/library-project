import fitz
import json
import sys
import io

# Force UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def get_dummy_coords(input_pdf):
    doc = fitz.open(input_pdf)
    page = doc[0]
    blocks = page.get_text("dict")["blocks"]
    
    dummies = {}
    for b in blocks:
        if "lines" in b:
            for l in b["lines"]:
                for s in l["spans"]:
                    text = s["text"].strip()
                    if text:
                        dummies[text] = s["bbox"]
    
    doc.close()
    return dummies

if __name__ == "__main__":
    coords = get_dummy_coords("ggfr.pdf")
    print(json.dumps(coords, indent=2, ensure_ascii=False))
