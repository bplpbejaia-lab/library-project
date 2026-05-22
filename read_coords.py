import io

with open("d:/library/Library_Project/ar_pdf_coords.txt", "rb") as f:
    content = f.read()
    try:
        text = content.decode('utf-16le')
        print(text[:1000])
    except Exception as e:
        print(f"Error decoding utf-16le: {e}")
        try:
            print(content.decode('utf-8')[:1000])
        except:
            print("Failed to decode with utf-8 too")
