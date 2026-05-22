import fitz

def analyze_pdf(path):
    doc = fitz.open(path)
    page = doc[0]
    
    print("--- IMAGES ---")
    image_list = page.get_images(full=True)
    for img in image_list:
        xref = img[0]
        rects = page.get_image_rects(xref)
        print(f"Image {xref}: {rects}")
        
    print("\n--- TEXT BLOCKS ---")
    blocks = page.get_text("blocks")
    for b in blocks:
        print(f"Block: {b[:4]} - {b[4][:50]}")

if __name__ == "__main__":
    analyze_pdf("c:/Users/GSS1/Pictures/Library/gg.pdf")
