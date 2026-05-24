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

    try:
        client.connect(host, username=user, password=password, timeout=30)
    except Exception as e:
        print(f"Failed to connect: {e}")
        sys.exit(1)

    print("Connected!\n")

    commands = [
        "nslookup bplp-bejaia.dz 197.112.99.11 || echo 'failed dns-1'",
        "nslookup bplp-bejaia.dz 197.112.107.20 || echo 'failed dns-2'",
        "nslookup bplp-bejaia.dz 197.112.123.20 || echo 'failed dns-3'",
        "nslookup bplp-bejaia.dz 197.112.55.20 || echo 'failed dns-4'",
    ]

    for i, cmd in enumerate(commands):
        print(f"\n{'='*60}")
        print(f"Step {i+1}: {cmd}")
        print(f"{'='*60}")
        stdin, stdout, stderr = client.exec_command(cmd, timeout=15)
        out = stdout.read().decode('utf-8', errors='replace')
        err = stderr.read().decode('utf-8', errors='replace')
        if out.strip():
            print(out.strip())
        if err.strip():
            print(f"ERR: {err.strip()}")

    client.close()

if __name__ == "__main__":
    main()
