with open(r'D:\library\Library_Project\api\routes.js', 'r', encoding='utf-8') as f:
    content = f.read()

c = content.replace('\r\n', '\n')

# Build exact strings to find/replace - use raw strings carefully
old_comment = "// Fallback to parent directory (e.g., D:\\library\\images\\...)\n                            photoAbsPath = path.join(projectRoot, '..', photoRelPath);\n                        }\n                        if (!fs.existsSync(photoAbsPath)) {\n                            // Fallback to absolute subfolder search by filename"

new_comment = "// Sibling library-admin (VPS) or Library_admin (dev)\n                            photoAbsPath = path.join(projectRoot, '..', 'library-admin', photoRelPath);\n                        }\n                        if (!fs.existsSync(photoAbsPath)) {\n                            photoAbsPath = path.join(projectRoot, '..', 'Library_admin', photoRelPath);\n                        }\n                        if (!fs.existsSync(photoAbsPath)) {\n                            photoAbsPath = path.join(projectRoot, '..', photoRelPath);\n                        }\n                        if (!fs.existsSync(photoAbsPath)) {\n                            // Fallback to absolute subfolder search by filename"

count = c.count(old_comment)
print(f'Found {count} occurrences')

if count == 2:
    c2 = c.replace(old_comment, new_comment)
    with open(r'D:\library\Library_Project\api\routes.js', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(c2)
    print('Done! Both occurrences replaced.')
elif count == 0:
    # Show exact bytes around the marker
    idx = c.find('Fallback to parent directory')
    if idx >= 0:
        chunk = c[idx:idx+300]
        print("FOUND at index:", idx)
        print(repr(chunk))
    else:
        print("Not found at all - checking for 'library-admin' already present:")
        idx2 = c.find('library-admin')
        print(f"library-admin found: {idx2}")
        idx3 = c.find('Sibling library-admin')
        print(f"Already replaced: {idx3}")
