import fitz

doc = fitz.open("c:/Users/GSS1/Pictures/Library/gg.pdf")
page = doc[0]
drawings = page.get_drawings()
print("--- ALL BOXES ---")
for d in drawings:
    r = d["rect"]
    if 150 < r.y1 < 800 and r.width > 30 and r.height < 100:
        print(f"Box: {r}")
