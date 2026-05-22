import fitz
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def print_text(path):
    print(f"--- Text of {path} ---")
    doc = fitz.open(path)
    print(doc[0].get_text())
    doc.close()

print_text("d:/library/gg.pdf")
print_text("d:/library/fiche pdf arabe.pdf")
