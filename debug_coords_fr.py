import fitz

def debug_pdf_coords(input_pdf, output_png):
    doc = fitz.open(input_pdf)
    page = doc[0]
    
    # Draw boxes around all text blocks to find where labels and values are
    text_instances = page.get_text("dict")["blocks"]
    
    for b in text_instances:
        if "lines" in b:
            for l in b["lines"]:
                for s in l["spans"]:
                    # Draw a red rectangle around the text span
                    page.draw_rect(s["bbox"], color=(1, 0, 0), width=0.5)
                    # Insert the text content for identification
                    page.insert_text((s["bbox"][0], s["bbox"][1] - 2), s["text"][:10], fontsize=6, color=(0, 0, 1))
    
    pix = page.get_pixmap(dpi=150)
    pix.save(output_png)
    doc.close()
    print(f"Debug image saved to {output_png}")

if __name__ == "__main__":
    debug_pdf_coords("ggfr.pdf", "debug_coords_fr.png")
