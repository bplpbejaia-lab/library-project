import fitz

doc = fitz.open("c:/Users/GSS1\Pictures/Library/gg.pdf")
page = doc[0]
for img in page.get_images(full=True):
    xref = img[0]
    rects = page.get_image_rects(xref)
    print(f"Image {xref}: {rects}")
