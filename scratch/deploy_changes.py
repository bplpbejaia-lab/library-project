import paramiko
import sys

def main():
    host = "197.112.102.58"
    user = "root"
    password = "Page@2026"

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

    client.connect(host, username=user, password=password, timeout=30)
    print("Connected!\n")

    commands = [
        # Check if LEC_DOC_ENGAGEMENT column exists, add if not
        """psql -U postgres -d Library -c "SELECT column_name FROM information_schema.columns WHERE table_name='LECTEUR' AND column_name='LEC_DOC_ENGAGEMENT';" 2>&1 | head -5""",
        
        # Add column if missing
        """psql -U postgres -d Library -c "ALTER TABLE \"LECTEUR\" ADD COLUMN IF NOT EXISTS \"LEC_DOC_ENGAGEMENT\" TEXT;" 2>&1""",
        
        # Create uploads/engagements directory
        "mkdir -p /var/www/library-project/uploads/engagements && chmod 755 /var/www/library-project/uploads/engagements",

        # Pull latest code for main project
        "cd /var/www/library-project && git pull origin main 2>&1",

        # Pull latest code for admin project
        "cd /var/www/library-admin && git pull origin main 2>&1",

        # Restart main app
        "pm2 restart library-app 2>&1",

        # Restart admin app
        "pm2 restart library-admin 2>&1",

        # Check status
        "pm2 list 2>&1 | grep -E 'library|name'",
    ]

    for i, cmd in enumerate(commands):
        print(f"\n{'='*60}")
        print(f"Step {i+1}: {cmd[:80]}...")
        print(f"{'='*60}")
        stdin, stdout, stderr = client.exec_command(cmd, timeout=60)
        out = stdout.read().decode('utf-8', errors='replace')
        err = stderr.read().decode('utf-8', errors='replace')
        if out.strip():
            print(out.strip())
        if err.strip():
            print(f"ERR: {err.strip()}")

    client.close()
    print("\n\nDone!")

if __name__ == "__main__":
    main()
