import fitz
import sys
import io

# Fix encoding
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def analyze(path):
    print(f"--- Analyzing {path} ---")
    try:
        doc = fitz.open(path)
        print(f"Pages: {len(doc)}")
        for i in range(min(len(doc), 1)):
            page = doc[i]
            print(f"Page {i} Size: {page.rect}")
            text = page.get_text()
            print(f"Text length: {len(text)}")
            print(f"Sample text: {text[:200]}")
        doc.close()
    except Exception as e:
        print(f"Error: {e}")

analyze("d:/library/gg.pdf")
analyze("d:/library/fiche pdf arabe.pdf")
