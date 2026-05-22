import fitz

doc = fitz.open("c:/Users/GSS1/Pictures/Library/gg.pdf")
page = doc[0]
paths = page.get_drawings()
for i, path in enumerate(paths):
    for item in path["items"]:
        if item[0] == "re": # rectangle
            print(f"Rect {i}: {item[1]}")
