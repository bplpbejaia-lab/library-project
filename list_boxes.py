import fitz

doc = fitz.open("c:/Users/GSS1/Pictures/Library/gg.pdf")
page = doc[0]
drawings = page.get_drawings()
for d in drawings:
    r = d["rect"]
    # Filter for the main data boxes
    if r.y1 > 150 and r.y1 < 500:
        print(f"Box: {r}")
