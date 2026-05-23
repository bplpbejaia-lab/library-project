CREATE TABLE IF NOT EXISTS "registrations" (
    id SERIAL PRIMARY KEY,
    nom TEXT,
    prenom TEXT,
    email TEXT,
    telephone TEXT,
    nin TEXT,
    cat_id INTEGER,
    date_naiss DATE,
    adresse TEXT,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    inscription_source TEXT DEFAULT 'EXTERNE', -- EXTERNE (site web) or INTERNE (admin)
    rfid_code TEXT
);

-- Add new columns if table already exists
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS nin TEXT;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS cat_id INTEGER;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS date_naiss DATE;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS adresse TEXT;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS inscription_source TEXT DEFAULT 'EXTERNE';
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS rfid_code TEXT;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS id_card_recto_path TEXT;
ALTER TABLE "registrations" ADD COLUMN IF NOT EXISTS id_card_verso_path TEXT;

CREATE TABLE IF NOT EXISTS "ORDERS" (
    id SERIAL PRIMARY KEY,
    "LEC_ID" TEXT,
    "DOC_ID" INTEGER,
    "EXP_ID" TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date TIMESTAMP,
    return_date TIMESTAMP,
    loan_days INTEGER,
    late_days INTEGER DEFAULT 0,
    penalty_rate INTEGER DEFAULT 0,
    penalty_amount INTEGER DEFAULT 0,
    penalty_applied_at TIMESTAMP,
    status TEXT DEFAULT 'PENDING' -- PENDING, APPROVED, REJECTED, RETURNED
);

-- Add return_date column if table already exists
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS return_date TIMESTAMP;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS due_date TIMESTAMP;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS loan_days INTEGER;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS late_days INTEGER DEFAULT 0;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS penalty_rate INTEGER DEFAULT 0;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS penalty_amount INTEGER DEFAULT 0;
ALTER TABLE "ORDERS" ADD COLUMN IF NOT EXISTS penalty_applied_at TIMESTAMP;
