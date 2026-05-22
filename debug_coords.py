import fitz

def test_coords(input_pdf, output_png):
    doc = fitz.open(input_pdf)
    page = doc[0]
    
    # Same fields as in modify_pdf_ar.py
    fields = [
        (fitz.Rect(330, 210, 425, 224), "Nom Arabe"),
        (fitz.Rect(330, 236, 425, 250), "Prenom Arabe"),
        (fitz.Rect(52, 210, 200, 224), "Nom Latin"),
        (fitz.Rect(65, 236, 200, 250), "Prenom Latin"),
        (fitz.Rect(440, 263, 495, 277), "Genre"),
        (fitz.Rect(170, 263, 367, 277), "Date Lieu Naissance"),
        (fitz.Rect(15, 263, 143, 277), "Profession"),
        (fitz.Rect(410, 286, 500, 300), "Date Reg"),
        (fitz.Rect(165, 286, 250, 300), "Code"),
        (fitz.Rect(15, 315, 490, 329), "NIN"),
        (fitz.Rect(15, 352, 515, 377), "Email"),
        (fitz.Rect(15, 387, 530, 430), "Adresse"),
        (fitz.Rect(15, 436, 530, 462), "Wilaya"),
        (fitz.Rect(280, 468, 525, 482), "Telephone"),
        (fitz.Rect(15, 468, 268, 482), "Nationalite"),
    ]
    
    for rect, label in fields:
        page.draw_rect(rect, color=(1, 0, 0), width=1)
        page.insert_text((rect.x0, rect.y0 - 2), label, fontsize=8, color=(1, 0, 0))
        
    pix = page.get_pixmap()
    pix.save(output_png)
    doc.close()

test_coords("d:/library/gg.pdf", "debug_coords_gg.png")
test_coords("d:/library/fiche pdf arabe.pdf", "debug_coords_arabe.png")
