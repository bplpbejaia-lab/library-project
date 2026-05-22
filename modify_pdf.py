import fitz
import sys
import json
import os
import base64
from datetime import datetime

def modify_pdf(user_data, input_pdf, output_pdf):
    doc = fitz.open(input_pdf)
    page = doc[0]
    
    # Font support for Arabic
    arabic_font = "c:/Windows/Fonts/arial.ttf"
    
    # CSS for Arabic rendering
    css = f"""
    @font-face {{ font-family: 'Arial'; src: url('{arabic_font}'); }}
    body {{ font-family: 'Arial'; font-size: 10pt; margin: 0; padding: 0; }}
    .rtl {{ direction: rtl; text-align: right; }}
    .ltr {{ direction: ltr; text-align: left; }}
    .center {{ text-align: center; }}
    """

    # Helper to clean and format dates
    def format_date(date_str):
        if not date_str: return ""
        if "T" in date_str:
            try:
                dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
                return dt.strftime("%d/%m/%Y")
            except:
                pass
        return date_str

    # List of fields to replace with their coordinates (approximate based on coords.txt)
    # format: (rect, value, is_arabic, align_class)
    fields = [
        # Nom Arabe (اللقب)
        (fitz.Rect(270.36, 208.2, 420.24, 225.24), user_data.get("nom", ""), True, "rtl"),
        # Prénom Arabe (الاسم)
        (fitz.Rect(270.36, 233.64, 420.24, 250.68), user_data.get("prenom", ""), True, "rtl"),
        # Nom Latin
        (fitz.Rect(49.56, 208.2, 204.72, 225.24), user_data.get("nomLatin", user_data.get("nom", "")), False, "ltr"),
        # Prénom Latin
        (fitz.Rect(69.36, 233.64, 204.72, 250.68), user_data.get("prenomLatin", user_data.get("prenom", "")), False, "ltr"),
        # ID Lecteur (رمز القارئ)
        (fitz.Rect(324.0, 282.96, 480.72, 300.0), user_data.get("lecteurId", ""), False, "center"),
        # NIN (رقم التعريف الوطني)
        (fitz.Rect(14.28, 283.68, 244.32, 302.88), user_data.get("nin", ""), False, "ltr"),
        # Profession
        (fitz.Rect(162.84, 260.4, 284.76, 277.44), user_data.get("profession", ""), True, "rtl"),
        # Email
        (fitz.Rect(16.2, 349.32, 485.64, 366.36), user_data.get("email", ""), False, "ltr"),
        # Adresse
        (fitz.Rect(16.2, 375, 485.64, 450), user_data.get("adresse", ""), True, "rtl"),
        # Date Inscription
        (fitz.Rect(490, 283, 560, 300), format_date(user_data.get("date_adhesion", user_data.get("date_enregistrement", datetime.now().isoformat()))), False, "center"),
        # Date Naissance
        (fitz.Rect(443.4, 260.4, 487.32, 277.44), format_date(user_data.get("naissance", "")), False, "center"),
    ]

    for rect, value, is_arabic, align_class in fields:
        if not value:
            print(f"Skipping empty field at {rect}")
            continue
        
        print(f"Replacing field at {rect} with value: {value[:20]}...")
        # 1. Clear the area using a slightly inset rectangle to avoid covering borders
        # We use a white background to mask the dummy data (a, zzzz, etc.)
        clear_rect = fitz.Rect(rect.x0 + 1, rect.y0 + 1, rect.x1 - 1, rect.y1 - 1)
        page.draw_rect(clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
        
        # 2. Insert text using HTML box for better Arabic support
        # Add a bit of vertical padding to center text better
        html = f'<div class="{align_class}" style="padding-top: 1px;">{value}</div>'
        page.insert_htmlbox(rect, html, css=css)

    # 4. Handle Ministry Logo (Top Right replacing QR)
    try:
        logo_path = os.path.join(os.getcwd(), "minsitere.png")
        if os.path.exists(logo_path):
            logo_rect = fitz.Rect(500, 12, 570, 82)
            # Clear the QR code area first
            qr_clear_rect = fitz.Rect(480, 10, 580, 95)
            page.draw_rect(qr_clear_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
            page.insert_image(logo_rect, filename=logo_path)
            print("Ministry logo inserted")
    except Exception as e:
        print(f"Error inserting logo: {e}")

    # 3. Handle Photo
    photo_data = user_data.get("photo")
    if photo_data:
        try:
            img_bytes = None
            if photo_data.startswith("data:image") or "," in photo_data or len(photo_data) > 1000:
                # Treat as Base64
                if "," in photo_data:
                    photo_data = photo_data.split(",")[1]
                
                # Fix padding
                missing_padding = len(photo_data) % 4
                if missing_padding:
                    photo_data += "=" * (4 - missing_padding)
                img_bytes = base64.b64decode(photo_data)
                print("Processing photo as Base64")
            elif photo_data.startswith("/") or "\\" in photo_data or "." in photo_data:
                # Treat as file path
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
                # Exact rect from original PDF analysis
                photo_rect = fitz.Rect(474, 154, 558, 250)
                
                # Paint white first to clear existing photo
                page.draw_rect(photo_rect, color=(1,1,1), fill=(1,1,1), overlay=True)
                
                # Insert new photo
                page.insert_image(photo_rect, stream=img_bytes)
                print("Photo inserted successfully")
        except Exception as e:
            print(f"Error inserting photo: {e}")
    else:
        print("No photo data provided in user_data")

    # Save as PDF
    doc.save(output_pdf)
    doc.close()

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python modify_pdf.py <user_json_or_file> <input_pdf> <output_pdf>")
        sys.exit(1)
        
    input_arg = sys.argv[1]
    input_path = sys.argv[2]
    output_path = sys.argv[3]
    
    try:
        # Check if input_arg is a file or raw JSON
        if os.path.exists(input_arg):
            with open(input_arg, 'r', encoding='utf-8') as f:
                data = json.load(f)
        else:
            data = json.loads(input_arg)
            
        modify_pdf(data, input_path, output_path)
        print("Success")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
