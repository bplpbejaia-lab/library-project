import fitz
import sys
import json
import os
import io
import re
import base64
from datetime import datetime

# Fix Windows console encoding for Arabic/French text
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

def modify_pdf_fr(user_data, input_pdf, output_pdf):
    doc = fitz.open(input_pdf)
    page = doc[0]
    
    # Font support for Arabic/Latin
    script_dir = os.path.dirname(os.path.abspath(__file__))
    font_path = os.path.join(script_dir, "fonts", "arial.ttf")
    if not os.path.exists(font_path):
        # Linux fallback
        for p in ["/usr/share/fonts/truetype/msttcorefonts/Arial.ttf",
                   "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
                   "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
                   "c:/Windows/Fonts/arial.ttf"]:
            if os.path.exists(p):
                font_path = p
                break
    font_path = font_path.replace("\\", "/")
    
    font_bold_path = os.path.join(script_dir, "fonts", "arialbd.ttf")
    if not os.path.exists(font_bold_path):
        # Fallback: use regular font as bold if bold not available
        for p in ["/usr/share/fonts/truetype/msttcorefonts/Arial_Bold.ttf",
                   "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
                   "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
                   "c:/Windows/Fonts/arialbd.ttf",
                   font_path]:  # ultimate fallback: use regular as bold
            if os.path.exists(p):
                font_bold_path = p
                break
    font_bold_path = font_bold_path.replace("\\", "/")
    
    css = f"""
    @font-face {{ font-family: 'Arial'; src: url('{font_path}'); }}
    @font-face {{ font-family: 'Arial'; src: url('{font_bold_path}'); font-weight: bold; }}
    @font-face {{ font-family: 'ArialBold'; src: url('{font_bold_path}'); }}
    body {{ font-family: 'Arial'; font-size: 10pt; margin: 0; padding: 0; color: #000; }}
    div, p {{ color: #000; }}
    .pdf-value {{ font-family: 'ArialBold', 'Arial'; font-size: 10pt; font-weight: 900; color: #000; }}
    .pdf-label {{ font-family: 'ArialBold', 'Arial'; font-weight: 900; color: #000; }}
    """

    def format_date(date_str):
        if not date_str: return ""
        # If it's a full ISO timestamp, extract the date part to prevent timezone offset shifts (e.g. 2003-10-03T23:00:00.000Z -> 2003-10-04)
        if "T" in date_str:
            date_part = date_str.split("T")[0]
            try:
                dt = datetime.strptime(date_part, "%Y-%m-%d")
                return dt.strftime("%d/%m/%Y")
            except:
                pass
            
            # Fallback if strptime fails
            try:
                dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
                return dt.strftime("%d/%m/%Y")
            except:
                pass
        return date_str

    def sanitize_value(s):
        """Remove sequences of question marks from corrupted DB values."""
        if not s:
            return ""
        cleaned = re.sub(r'\?{2,}', '', s)
        cleaned = re.sub(r'(?<![a-zA-Z])\?(?![a-zA-Z])', '', cleaned)
        cleaned = re.sub(r'\s{2,}', ' ', cleaned).strip()
        return cleaned

    def format_phone(value):
        raw = sanitize_value(str(value or ""))
        if not raw:
            return ""
        digits = re.sub(r'\D', '', raw)
        if not digits:
            return raw
        if digits.startswith("213") and len(digits) == 12:
            local = digits[3:]
            return "+213 " + " ".join([local[:3], local[3:5], local[5:7], local[7:9]])
        if len(digits) == 9:
            return " ".join([digits[:3], digits[3:5], digits[5:7], digits[7:9]])
        return " ".join(digits[i:i+2] for i in range(0, len(digits), 2))

    # Robust name extraction: prioritize requested lang, fallback if empty
    def is_valid_text(s):
        if not s: return False
        return not all(c == '?' or c.isspace() for c in s)

    nom_ar = user_data.get("nomAr", "")
    prenom_ar = user_data.get("prenomAr", "")
    nom_lat = user_data.get("nomLatin", user_data.get("nom", "Lecteur"))
    prenom_lat = user_data.get("prenomLatin", user_data.get("prenom", ""))

    # Fallbacks for Arabic
    if not is_valid_text(nom_ar): nom_ar = user_data.get("nom", "")
    if not is_valid_text(prenom_ar): prenom_ar = user_data.get("prenom", "")
    
    lecteur_id = (
        user_data.get("lecteurId")
        or user_data.get("LEC_ID")
        or user_data.get("id")
        or user_data.get("ID")
        or ""
    )
    nin = user_data.get("nin", "")
    profession = sanitize_value(user_data.get("profession", ""))
    email = user_data.get("email", "")
    adresse = sanitize_value(user_data.get("adresse", ""))
    telephone = format_phone(user_data.get("telephone", ""))
    nationalite = sanitize_value(user_data.get("nationalite", "Algérie"))
    wilaya = sanitize_value(user_data.get("wilaya", "Béjaïa"))
    if any(x in nationalite.lower() for x in ["alg", "dz"]) or "جزائر" in nationalite:
        nationalite = "Algérie"
    if any(x in wilaya.lower() for x in ["beja", "béja", "bgayet"]) or "بجا" in wilaya:
        wilaya = "Béjaïa"
    raw_genre = sanitize_value(str(user_data.get("genre") or user_data.get("sexe") or "")).strip().lower()
    first_name_lat = str(user_data.get("prenomLatin") or user_data.get("prenom") or "").strip().lower()
    first_name_ar = str(user_data.get("prenomAr") or "").strip()
    
    # Normalize common representations of female gender
    if any(x in raw_genre for x in ['fem', 'fém', 'f', 'female', 'woman', 'أنثى', 'انثى']):
        genre_fr = 'Féminin'
    # Normalize common representations of male gender
    elif any(x in raw_genre for x in ['masc', 'm', 'homme', 'h', 'male', 'ذكر']):
        genre_fr = 'Masculin'
    else:
        # Smart fallback based on Arabic and Latin first names (e.g. Lina, Lene, Sara, Moh, etc.)
        if any(x in first_name_lat for x in ['lina', 'linda', 'sara', 'hayat', 'amina', 'nour', 'fatma', 'khadidja', 'mari', 'mery', 'meriem']) or \
           any(x in first_name_ar for x in ['لينة', 'سارة', 'حياة', 'أمينة', 'نور', 'فاطمة', 'خديجة', 'مريم', 'ياسمين', 'نهاد']):
            genre_fr = 'Féminin'
        else:
            genre_fr = 'Masculin' # Default fallback

    naissance = format_date(user_data.get("naissance", ""))
    lieu_naissance = sanitize_value(user_data.get("lieuNaissance", ""))
    date_reg = format_date(user_data.get("date_adhesion", user_data.get("date_enregistrement", datetime.now().isoformat())))

    dob_text = naissance
    if lieu_naissance:
        dob_text = naissance + " à " + lieu_naissance

    def insert_dark_htmlbox(rect, html):
        page.insert_htmlbox(rect, html, css=css)
        page.insert_htmlbox(fitz.Rect(rect.x0 + 0.16, rect.y0, rect.x1 + 0.16, rect.y1), html, css=css)
        page.insert_htmlbox(fitz.Rect(rect.x0, rect.y0 + 0.10, rect.x1, rect.y1 + 0.10), html, css=css)

    # Field coordinates for ggfr.pdf (Latin positions)
    # Format: (rect, value, is_arabic, align_class)
    fields = [
        # Nom Arabe (اللقب) - Right side
        (fitz.Rect(375.24, 206.16, 525.12, 223.20), nom_ar, True, "rtl"),
        
        # Prénom Arabe (الاسم) - Right side
        (fitz.Rect(375.24, 231.60, 525.12, 248.64), prenom_ar, True, "rtl"),
        
        # Nom Latin (Nom :)
        (fitz.Rect(154.44, 206.16, 309.60, 223.20), nom_lat, False, "ltr"),
        
        # Prénom Latin (Prénom :)
        (fitz.Rect(174.24, 231.60, 309.60, 248.64), prenom_lat, False, "ltr"),
        
        # Date & lieu de naissance
        (fitz.Rect(232.00, 256.20, 360.00, 273.24), dob_text, False, "ltr", fitz.Rect(212.16, 256.20, 360.00, 273.24)),
        
        # Profession
        (fitz.Rect(430.00, 256.20, 565.92, 273.24), profession, False, "ltr", fitz.Rect(360.84, 256.20, 565.92, 273.24)),
        
        # Code lecteur
        (fitz.Rect(193.56, 280.32, 343.92, 297.36), lecteur_id, False, "ltr"),
        
        # Date inscription
        (fitz.Rect(432.84, 280.92, 565.92, 297.96), date_reg, False, "ltr"),
        
        # NIN
        (fitz.Rect(190.56, 303.72, 566.64, 320.76), nin, False, "ltr"),
        
        # Email
        (fitz.Rect(97.44, 348.60, 566.88, 365.64), email, False, "ltr"),
        
        # Adresse
        (fitz.Rect(97.44, 373.32, 566.88, 415.08), adresse, False, "ltr"),
        
        # Wilaya
        (fitz.Rect(97.56, 421.44, 566.64, 438.48), wilaya, False, "ltr"),
        
        # Pays
        (fitz.Rect(97.56, 446.76, 250.44, 463.80), nationalite, False, "ltr"),
        
        # Téléphone
        (fitz.Rect(333.72, 446.88, 566.88, 463.92), telephone, False, "ltr"),
    ]

    for item in fields:
        rect, value, is_arabic, align_class = item[0], item[1], item[2], item[3]
        padding = item[4] if len(item) > 4 and isinstance(item[4], (int, float)) else 0
        if not value:
            continue
        repair_rect = item[4] if len(item) > 4 and isinstance(item[4], fitz.Rect) else None
            
        if repair_rect:
            page.draw_rect(repair_rect, color=None, fill=(1,1,1), width=0, overlay=True)
            page.draw_rect(rect, color=(0.90,0.90,0.90), fill=None, width=0.35, overlay=True)
        else:
            # Clear the area (width=0 prevents white stroke from bleeding over original borders)
            clear_rect = fitz.Rect(rect.x0 + 1.2, rect.y0 + 1.2, rect.x1 - 1.2, rect.y1 - 1.2)
            page.draw_rect(clear_rect, color=None, fill=(1,1,1), width=0, overlay=True)
        
        # Force explicit text alignment using HTML align attribute for perfect rendering in LiteHTML
        style = "margin: 0; padding: 0; line-height: 1.2;"
        align_attr = 'align="left"'
        
        if align_class == "rtl":
            align_attr = 'align="right"'
            style += " padding-right: 8px;"
        elif align_class == "ltr":
            align_attr = 'align="left"'
            style += " padding-left: 8px;"
        elif align_class == "center":
            align_attr = 'align="center"'
        
        if padding > 0:
            style += f" padding-left: {padding}px;"
            
        html = f'<p class="pdf-value" {align_attr} style="{style}">{value}</p>'
        insert_dark_htmlbox(rect, html)

    try:
        label_rect = fitz.Rect(118.0, 256.20, 230.0, 273.24)
        page.draw_rect(label_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
        label_html = '<p class="pdf-label" align="left" style="margin: 0; padding-left: 2px; line-height: 1.1; font-size: 8.6pt; white-space: nowrap;">Date et lieu de naissance :</p>'
        insert_dark_htmlbox(label_rect, label_html)

        profession_label_rect = fitz.Rect(362.0, 256.20, 428.0, 273.24)
        page.draw_rect(profession_label_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
        profession_label_html = '<p class="pdf-label" align="left" style="margin: 0; padding-left: 2px; line-height: 1.1; font-size: 8.6pt; white-space: nowrap;">Profession :</p>'
        insert_dark_htmlbox(profession_label_rect, profession_label_html)
    except Exception as label_err:
        print(f"Error replacing FR birth label: {label_err}")

    # Replace QR code with Ministry Logo (top right)
    try:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        logo_path = os.path.join(script_dir, "minsitere.png")
        if os.path.exists(logo_path):
            logo_rect = fitz.Rect(480, 25, 560, 105)
            # Clear the QR code area first
            qr_clear_rect = fitz.Rect(450, 10, 580, 110)
            page.draw_rect(qr_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
            page.insert_image(logo_rect, filename=logo_path)
    except Exception as e:
        print(f"Error inserting ministry logo: {e}")

    # Handle Photo (left side in ggfr.pdf)
    photo_data = user_data.get("photo")
    photo_inserted = False
    
    if photo_data:
        try:
            img_bytes = None
            if photo_data.startswith("data:image") or "," in photo_data or len(photo_data) > 1000:
                if "," in photo_data:
                    photo_data = photo_data.split(",")[1]
                missing_padding = len(photo_data) % 4
                if missing_padding:
                    photo_data += "=" * (4 - missing_padding)
                img_bytes = base64.b64decode(photo_data)
            elif photo_data.startswith("/") or "\\" in photo_data or "." in photo_data:
                project_root = os.getcwd()
                clean_path = photo_data.lstrip("/").lstrip("\\")
                full_path = os.path.join(project_root, clean_path)
                if os.path.exists(full_path):
                    with open(full_path, "rb") as f:
                        img_bytes = f.read()
                else:
                    parent_path = os.path.join(os.path.dirname(project_root), clean_path)
                    if os.path.exists(parent_path):
                        with open(parent_path, "rb") as f:
                            img_bytes = f.read()
            
            if img_bytes:
                # Convert using Pillow to ensure absolute compatibility (resolves WebP / code=7 unknown format errors)
                try:
                    from PIL import Image
                    img = Image.open(io.BytesIO(img_bytes))
                    if img.mode in ('RGBA', 'LA', 'P'):
                        # Handle transparency elegantly by placing on a solid white background
                        bg = Image.new('RGB', img.size, (255, 255, 255))
                        if img.mode == 'RGBA':
                            bg.paste(img, mask=img.split()[3])
                        else:
                            bg.paste(img, mask=img.convert('RGBA').split()[3])
                        img = bg
                    else:
                        img = img.convert('RGB')
                    
                    out_io = io.BytesIO()
                    img.save(out_io, format='JPEG', quality=95)
                    img_bytes = out_io.getvalue()
                    print("Converted photo to JPEG using Pillow (WebP compatibility fixed)")
                except Exception as pillow_err:
                    print(f"Pillow conversion warning: {pillow_err}")

                # Clear a tighter area to avoid overlapping titles
                # Labels start at x=122. 'Je soussigné(e)' is at y=182-193.
                photo_clear_rect = fitz.Rect(30, 194, 115, 306)
                page.draw_rect(photo_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
                
                # New photo rect, moved up slightly
                photo_rect = fitz.Rect(34, 200, 112, 299)
                page.insert_image(photo_rect, stream=img_bytes)
                photo_inserted = True
                print("Photo inserted successfully")
        except Exception as e:
            print(f"Error inserting photo: {e}")

    if not photo_inserted:
        print("No photo inserted, drawing empty placeholder frame (FR)")
        try:
            # Clear a tighter area to avoid overlapping titles
            photo_clear_rect = fitz.Rect(30, 194, 115, 306)
            page.draw_rect(photo_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)

            # Draw a clean empty photo frame placeholder
            photo_rect = fitz.Rect(34, 200, 112, 299)
            page.draw_rect(photo_rect, color=(0,0,0), fill=(1,1,1), width=0.5, overlay=True)
            print("Original photo cleared and empty placeholder border drawn (FR)")
        except Exception as e:
            print(f"Error drawing empty photo placeholder (FR): {e}")

    doc.save(output_pdf, deflate=True)
    doc.close()

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python modify_pdf_fr.py <user_json_or_file> <input_pdf> <output_pdf>")
        sys.exit(1)
        
    input_arg = sys.argv[1]
    input_path = sys.argv[2]
    output_path = sys.argv[3]
    
    try:
        if os.path.exists(input_arg):
            with open(input_arg, 'r', encoding='utf-8') as f:
                data = json.load(f)
        else:
            data = json.loads(input_arg)
            
        modify_pdf_fr(data, input_path, output_path)
        print("Success")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
