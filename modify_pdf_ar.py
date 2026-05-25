import fitz
import sys
import json
import os
import io
import re
import base64
from datetime import datetime

# Fix Windows console encoding for Arabic text
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

def modify_pdf_ar(user_data, input_pdf, output_pdf):
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
    body {{ font-family: 'Arial'; font-size: 10pt; margin: 0; padding: 0; }}
    div, p {{ font-weight: bold; }}
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

    # Field coordinates extracted from 'fiche pdf arabe.pdf'
    # Based on analysis: existing dummy values are at these positions
    # Format: (rect_to_clear, rect_to_write, value, is_arabic, align_class)
    
    # Robust name extraction: prioritize Arabic, fallback to Latin if Arabic is empty or just question marks
    def is_valid_arabic(s):
        if not s: return False
        return not all(c == '?' or c.isspace() for c in s)

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

    nom_ar = user_data.get("nomAr", "")
    if not is_valid_arabic(nom_ar):
        nom_ar = user_data.get("nom", "")
    if not is_valid_arabic(nom_ar):
        nom_ar = user_data.get("nomLatin", "Lecteur")

    prenom_ar = user_data.get("prenomAr", "")
    if not is_valid_arabic(prenom_ar):
        prenom_ar = user_data.get("prenom", "")
    if not is_valid_arabic(prenom_ar):
        prenom_ar = user_data.get("prenomLatin", "")
    nom_lat = user_data.get("nomLatin", user_data.get("nom", ""))
    prenom_lat = user_data.get("prenomLatin", user_data.get("prenom", ""))
    lecteur_id = user_data.get("id") or user_data.get("ID") or user_data.get("LEC_ID") or user_data.get("lecteurId", "")
    nin = user_data.get("nin", "")
    profession = sanitize_value(user_data.get("profession", ""))
    email = user_data.get("email", "")
    adresse = sanitize_value(user_data.get("adresse", ""))
    telephone = format_phone(user_data.get("telephone", ""))
    nationalite = sanitize_value(user_data.get("nationalite", "الجزائر"))
    wilaya = sanitize_value(user_data.get("wilaya", "بجاية"))
    raw_genre = sanitize_value(str(user_data.get("genre") or user_data.get("sexe") or "")).strip().lower()
    first_name_lat = str(user_data.get("prenomLatin") or user_data.get("prenom") or "").strip().lower()
    first_name_ar = str(user_data.get("prenomAr") or "").strip()
    
    # Normalize common representations of female gender
    if any(x in raw_genre for x in ['fem', 'fém', 'f', 'female', 'woman', 'أنثى', 'انثى']):
        genre = 'أنثى'
    # Normalize common representations of male gender
    elif any(x in raw_genre for x in ['masc', 'm', 'homme', 'h', 'male', 'ذكر']):
        genre = 'ذكر'
    else:
        # Smart fallback based on Arabic and Latin first names (e.g. Lina, Lene, Sara, Moh, etc.)
        if any(x in first_name_lat for x in ['lina', 'linda', 'sara', 'hayat', 'amina', 'nour', 'fatma', 'khadidja', 'mari', 'mery', 'meriem']) or \
           any(x in first_name_ar for x in ['لينة', 'سارة', 'حياة', 'أمينة', 'نور', 'فاطمة', 'خديجة', 'مريم', 'ياسمين', 'نهاد']):
            genre = 'أنثى'
        else:
            genre = 'ذكر' # Default fallback
    naissance = format_date(user_data.get("naissance", ""))
    lieu_naissance = sanitize_value(user_data.get("lieuNaissance", ""))
    date_reg = format_date(user_data.get("date_adhesion", user_data.get("date_enregistrement", datetime.now().isoformat())))

    dob_text = naissance
    if lieu_naissance:
        dob_text = naissance + " - " + lieu_naissance

    fields = [
        # Nom Arabe (اللقب)
        (fitz.Rect(270.36, 208.20, 420.24, 225.24), nom_ar, True, "rtl"),
        
        # Prénom Arabe (الاسم)
        (fitz.Rect(270.36, 233.64, 420.24, 250.68), prenom_ar, True, "rtl"),
        
        # Nom Latin (Nom :)
        (fitz.Rect(49.56, 208.20, 204.72, 225.24), nom_lat, False, "ltr"),
        
        # Prénom Latin (Prénom :)
        (fitz.Rect(69.36, 233.64, 204.72, 250.68), prenom_lat, False, "ltr"),
        
        # Genre (الجنس)
        (fitz.Rect(443.40, 260.40, 487.32, 277.44), genre, True, "center"),
        
        # Date et lieu de naissance - occupying the full combined middle box
        (fitz.Rect(162.84, 260.40, 364.32, 277.44), dob_text, False, "center"),
        
        # Profession (المهنة)
        (fitz.Rect(18.84, 260.40, 137.88, 277.44), profession, True, "center"),
        
        # Date inscription (تاريخ التسجيل)
        (fitz.Rect(324.00, 282.96, 480.72, 300.00), date_reg, False, "center"),
        
        # Code lecteur (رمز القارئ)
        (fitz.Rect(14.28, 283.68, 244.32, 302.88), lecteur_id, False, "center"),

        # NIN (رقم التعريف الوطني)
        (fitz.Rect(15.72, 312.24, 413.16, 329.28), nin, False, "center"),
        
        # Email (عنوان البريد)
        (fitz.Rect(16.20, 349.32, 485.64, 366.36), email, False, "center"),
        
        # Adresse (عنوان الإقامة)
        (fitz.Rect(16.20, 384.36, 485.64, 426.12), adresse, True, "center"),
        
        # Wilaya (ولاية)
        (fitz.Rect(41.04, 433.20, 510.12, 450.24), wilaya, True, "rtl"),
        
        # Téléphone (الهاتف)
        (fitz.Rect(284.88, 465.36, 518.04, 482.40), telephone, False, "center"),
        
        # Pays / البلد
        (fitz.Rect(77.76, 465.84, 230.64, 482.88), nationalite, True, "center"),
    ]

    for rect, value, is_arabic, align_class in fields:
        if not value:
            print(f"Skipping empty field at {rect}")
            continue
        
        print(f"Replacing field at {rect} with value: {value[:30]}...")
        # Clear the area (width=0 prevents white stroke from bleeding over original borders)
        clear_rect = fitz.Rect(rect.x0 + 1.2, rect.y0 + 1.2, rect.x1 - 1.2, rect.y1 - 1.2)
        page.draw_rect(clear_rect, color=None, fill=(1,1,1), width=0, overlay=True)
        
        # Force explicit text alignment using HTML align attribute for perfect rendering in LiteHTML
        style = "margin: 0; padding: 0; line-height: 1.2; padding-top: 1px; font-weight: bold;"
        align_attr = 'align="left"'
        
        if align_class == "rtl":
            align_attr = 'align="right"'
            style += " padding-right: 8px;"
        elif align_class == "ltr":
            align_attr = 'align="left"'
            style += " padding-left: 8px;"
        elif align_class == "ltr-pushed":
            align_attr = 'align="left"'
            style += " padding-left: 25px;"
        elif align_class == "center":
            align_attr = 'align="center"'
                
        html = f'<p {align_attr} style="{style}">{value}</p>'
        page.insert_htmlbox(rect, html, css=css)

    # Replace QR code with Ministry Logo (top right)
    try:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        logo_path = os.path.join(script_dir, "minsitere.png")
        if os.path.exists(logo_path):
            logo_rect = fitz.Rect(500, 12, 570, 82)
            # Clear the QR code area first
            qr_clear_rect = fitz.Rect(480, 10, 580, 95)
            page.draw_rect(qr_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
            page.insert_image(logo_rect, filename=logo_path)
            print("Ministry logo inserted (replacing QR code)")
    except Exception as e:
        print(f"Error inserting ministry logo: {e}")

    # Handle Photo - clear existing photo area and insert new one
    # The photo is on the right side around the name rows
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
                print("Processing photo as Base64")
            elif photo_data.startswith("/") or "\\" in photo_data or "." in photo_data:
                project_root = os.getcwd()
                clean_path = photo_data.lstrip("/").lstrip("\\")
                full_path = os.path.join(project_root, clean_path)
                if os.path.exists(full_path):
                    with open(full_path, "rb") as f:
                        img_bytes = f.read()
                    print(f"Processing photo from file: {full_path}")
                else:
                    parent_path = os.path.join(os.path.dirname(project_root), clean_path)
                    if os.path.exists(parent_path):
                        with open(parent_path, "rb") as f:
                            img_bytes = f.read()
                        print(f"Processing photo from file (parent): {parent_path}")
            
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

                # Clear a wider area to remove any old photo frame or background residue completely
                photo_clear_rect = fitz.Rect(460, 140, 565, 260)
                page.draw_rect(photo_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)

                # Photo rect - right side of the form near names
                photo_rect = fitz.Rect(474, 154, 558, 250)
                page.insert_image(photo_rect, stream=img_bytes)
                photo_inserted = True
                print("Photo inserted successfully")
        except Exception as e:
            print(f"Error inserting photo: {e}")

    if not photo_inserted:
        print("No photo inserted, drawing empty placeholder frame")
        try:
            # Clear a wider area to remove any old photo frame or background residue completely
            photo_clear_rect = fitz.Rect(460, 140, 565, 260)
            page.draw_rect(photo_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)

            # Draw a clean empty photo frame placeholder
            photo_rect = fitz.Rect(474, 154, 558, 250)
            page.draw_rect(photo_rect, color=(0,0,0), fill=(1,1,1), width=0.5, overlay=True)
            print("Original photo cleared and empty placeholder border drawn")
        except Exception as e:
            print(f"Error drawing empty photo placeholder: {e}")

    doc.save(output_pdf, deflate=True)
    doc.close()

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python modify_pdf_ar.py <user_json_or_file> <input_pdf> <output_pdf>")
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
            
        modify_pdf_ar(data, input_path, output_path)
        print("Success")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
