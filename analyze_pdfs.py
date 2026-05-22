import fitz

def analyze(path):
    print(f"--- Analyzing {path} ---")
    try:
        doc = fitz.open(path)
        print(f"Pages: {len(doc)}")
        page = doc[0]
        print(f"Size: {page.rect}")
        text = page.get_text()
        print(f"Text length: {len(text)}")
        print(f"First 100 chars: {text[:100]}")
        doc.close()
    except Exception as e:
        print(f"Error: {e}")

analyze("d:/library/gg.pdf")
analyze("d:/library/fiche pdf arabe.pdf")
