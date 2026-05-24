import paramiko

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect('197.112.102.58', username='root', password='Page@2026')
    stdin, stdout, stderr = client.exec_command('PGPASSWORD=farid psql -h 127.0.0.1 -U postgres -d Library -t -c "SELECT \\"LEC_EMAIL\\", \\"LEC_ID\\" FROM \\"LECTEUR\\" WHERE \\"LEC_EMAIL\\" IS NOT NULL LIMIT 5;"')
    print(stdout.read().decode())
    client.close()

if __name__ == "__main__":
    main()
