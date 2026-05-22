import fitz

doc = fitz.open("c:/Users/GSS1/Pictures/Library/gg.pdf")
page = doc[0]
drawings = page.get_drawings()
for d in drawings:
    r = d["rect"]
    if 200 < r.y1 < 260:
        print(f"Box Y[200-260]: {r}")
