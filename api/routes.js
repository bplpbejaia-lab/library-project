import crypto from 'crypto';
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import nodemailer from 'nodemailer';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Ensure image upload directories exist
const uploadDirs = ['users', 'cni'];
uploadDirs.forEach(dir => {
    const dirPath = path.join(projectRoot, 'images', dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

function saveBase64Image(dataUrl, folder, filename) {
    if (!dataUrl || typeof dataUrl !== 'string') return null;
    const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) return null;
    const buffer = Buffer.from(matches[2], 'base64');
    let ext = matches[1].split('/')[1] || 'png';
    // Clean up extensions
    if (ext === 'jpeg') ext = 'jpg';
    if (ext.includes('svg')) ext = 'svg';

    const relPath = `/images/${folder}/${filename}.${ext}`;
    const fullPath = path.join(projectRoot, 'images', folder, `${filename}.${ext}`);

    fs.writeFileSync(fullPath, buffer);
    return relPath;
}

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: '127.0.0.1',
    port: 5432,
    database: 'Library'
});

// Configurer le transporteur d'email (À adapter avec vos vrais accès)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bplpbejaia@gmail.com', // Votre email
        pass: 'mcyo jfsj tish euqw' // Mot de passe d'application Gmail
    }
});

async function sendVerificationEmail(email, token, lecteurId) {
    const verifyUrl = `http://localhost:3001/api/auth/verify-email?token=${token}&id=${lecteurId}`;
    const mailOptions = {
        from: '"Bibliothèque de Béjaïa" <bplpbejaia@gmail.com>',
        to: email,
        subject: 'Confirmez votre adresse email 📚',
        html: `
            <div style="background-color: #f4f6f4; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; direction: ltr;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(46, 125, 50, 0.05); border: 1px solid #e8ebe8;">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background: linear-gradient(135deg, #1b3d20 0%, #2E7D32 100%); padding: 40px 20px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">Bibliothèque de Béjaïa</h1>
                            <p style="color: #a5d6a7; margin: 5px 0 0 0; font-size: 14px; font-weight: 500;">Espace de Lecture Publique</p>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="color: #1b2e1b; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">Bienvenue parmi nous !</h2>
                            <p style="color: #4a5c4a; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
                                Nous sommes ravis de vous compter parmi nos nouveaux lecteurs. Pour valider définitivement votre inscription et accéder en toute liberté à notre riche catalogue d'ouvrages, merci de confirmer votre adresse email en cliquant sur le bouton ci-dessous :
                            </p>
                            <!-- Action Button -->
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 30px auto;">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background: linear-gradient(135deg, #2E7D32 0%, #43a047 100%);">
                                        <a href="${verifyUrl}" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 15px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 12px;">
                                            Confirmer l'activation de mon compte
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="color: #7a8c7a; font-size: 13px; line-height: 1.5; margin-top: 30px; border-top: 1px solid #f0f3f0; padding-top: 20px;">
                                Si le bouton ci-dessus ne fonctionne pas, vous pouvez également copier et coller le lien suivant dans votre navigateur internet :<br>
                                <a href="${verifyUrl}" style="color: #2E7D32; word-break: break-all;">${verifyUrl}</a>
                            </p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="background-color: #f9faf9; padding: 30px; border-top: 1px solid #e8ece8; text-align: center;">
                            <p style="color: #8c9c8c; font-size: 12px; margin: 0;">
                                Ceci est un message automatique de la Bibliothèque de Béjaïa. Merci de ne pas y répondre directement.
                            </p>
                            <p style="color: #b0c0b0; font-size: 11px; margin: 8px 0 0 0;">
                                &copy; ${new Date().getFullYear()} Bibliothèque Principale de la Lecture Publique de Béjaïa
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        `
    };
    return transporter.sendMail(mailOptions);
}





const verificationCodes = new Map();
const uploadedDocuments = new Map();

// Generate unique ID
function generateId() {
    return 'LEC-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// Generate verification code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Hash password (simple - use bcrypt in production)
function hashPassword(password) {
    if (!password) return '';
    return crypto.createHash('sha256').update(password).digest('hex');
}

export async function login(fastify, opts) {
    fastify.post('/api/auth/login', async (request, reply) => {
        try {
            const { username, password } = request.body;
            console.log('Login attempt for:', username);
            if (!username || !password) {
                return reply.status(400).send({ error: 'Identifiant et mot de passe requis' });
            }

            const result = await pool.query(
                `SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1 OR "LEC_EMAIL" = $1`,
                [username]
            );

            console.log('User found in DB:', result.rows.length > 0);
            if (result.rows.length === 0) {
                return reply.status(401).send({ error: 'Identifiant ou mot de passe incorrect' });
            }

            const user = result.rows[0];
            const hashedPassword = hashPassword(password);

            console.log('Stored password hash (raw):', user.LEC_PASSWORD);
            console.log('Input password hash (raw):', hashedPassword);

            // Using trim() to avoid padding issues if any, although unlikely for varchar
            if (user.LEC_PASSWORD.trim() !== hashedPassword.trim()) {
                console.log('Hash mismatch!');
                return reply.status(401).send({ error: 'Identifiant ou mot de passe incorrect' });
            }

            // Map database fields to frontend expected fields
            const userData = {
                lecteurId: user.LEC_ID,
                username: user.LEC_ID,
                nom: user.LEC_NOM_AR || user.LEC_NOM,
                prenom: user.LEC_PRENOM_AR || user.LEC_PRENOM,
                nomLatin: user.LEC_NOM,
                prenomLatin: user.LEC_PRENOM,
                email: user.LEC_EMAIL,
                telephone: user.LEC_TEL,
                adresse: user.LEC_ADRESSE,
                naissance: user.LEC_DATE_NAISSANCE,
                lieuNaissance: user.LEC_LIEU_NAISSANCE || '',
                nationalite: user.LEC_NATIONALITE || '',
                genre: user.LEC_GENRE || '',
                profession: user.LEC_PROFESSION || '',
                nin: user.LEC_NIN,
                photo: user.LEC_PHOTO,
                cniFront: user.LEC_CNI_FRONT,
                cniBack: user.LEC_CNI_BACK,
                statut: user.LEC_STATUT,
                categorie: user.CAT_ID
            };

            reply.send({ user: userData });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la connexion' });
        }
    });
}

export async function getUserProfile(fastify, opts) {
    fastify.get('/api/auth/profile/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            const result = await pool.query(
                `SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1`,
                [id]
            );

            if (result.rows.length === 0) {
                return reply.status(404).send({ error: 'Utilisateur non trouvé' });
            }

            const user = result.rows[0];
            const isInvalid = (s) => !s || s.trim().split('').every(c => c === '?');
            const userData = {
                lecteurId: user.LEC_ID,
                username: user.LEC_ID,
                nom: isInvalid(user.LEC_NOM_AR) ? user.LEC_NOM : user.LEC_NOM_AR,
                prenom: isInvalid(user.LEC_PRENOM_AR) ? user.LEC_PRENOM : user.LEC_PRENOM_AR,
                nomLatin: user.LEC_NOM,
                prenomLatin: user.LEC_PRENOM,
                email: user.LEC_EMAIL,
                telephone: user.LEC_TEL,
                adresse: user.LEC_ADRESSE,
                naissance: user.LEC_DATE_NAISSANCE,
                lieuNaissance: user.LEC_LIEU_NAISSANCE || '',
                nationalite: user.LEC_NATIONALITE || '',
                genre: user.LEC_GENRE || '',
                profession: user.LEC_PROFESSION || '',
                nin: user.LEC_NIN,
                photo: user.LEC_PHOTO,
                cniFront: user.LEC_CNI_FRONT,
                cniBack: user.LEC_CNI_BACK,
                statut: user.LEC_STATUT,
                categorie: user.CAT_ID,
                rfid: user.LEC_RFID,
                date_expiration: user.LEC_DATE_EXPIRATION,
                date_adhesion: user.CREATE_DATE,
                emailVerified: user.LEC_EMAIL_VERIFIED || false
            };

            reply.send({ user: userData });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la récupération du profil' });
        }
    });
}


export async function checkNin(fastify, opts) {
    fastify.post('/api/auth/check-nin', async (request, reply) => {
        try {
            const { nin, isParent } = request.body;
            if (!nin) return reply.status(400).send({ error: 'NIN requis' });

            const result = await pool.query(
                'SELECT "LEC_ID", "LEC_NOM_AR", "LEC_PRENOM_AR" FROM "LECTEUR" WHERE "LEC_NIN" = $1',
                [nin]
            );

            if (result.rows.length > 0) {
                if (isParent) {
                    // Allowed for parents to register multiple children
                    return reply.send({ exists: true, allow: true, message: 'NIN déjà utilisé (Mode Parent actif)' });
                } else {
                    // Blocked for normal registrations
                    return reply.send({ exists: true, allow: false, error: 'هذا الرقم الوطني مسجل مسبقاً' });
                }
            }

            reply.send({ exists: false, allow: true });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la vérification du NIN' });
        }
    });
}

// Auth Routes
export async function registerStep1(fastify, opts) {
    fastify.post('/api/auth/register-step1', async (request, reply) => {
        try {
            const {
                nom, prenom, nomAr, prenomAr, dateNaissance, email, telephone,
                adresse, nin, categorie, password, username,
                photo, cniFront, cniBack, profession, genre
            } = request.body;

            // Validation: nomAr/prenomAr (Arabic), dateNaissance, username, password
            if (!nomAr || !prenomAr || !dateNaissance || !username || !password) {
                return reply.status(400).send({ error: 'Champs obligatoires manquants (Nom, Prénom, Date de naissance, Nom d\'utilisateur, Mot de passe)' });
            }

            // Check if username/lecteurId already exists
            const existingUser = await pool.query(
                'SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1',
                [username]
            );

            if (existingUser.rows.length > 0) {
                return reply.status(400).send({ error: 'Cet identifiant est déjà utilisé' });
            }

            // NIN Check (unless isParent is true)
            const { isParent } = request.body;
            if (nin && !isParent) {
                const existingNin = await pool.query(
                    'SELECT * FROM "LECTEUR" WHERE "LEC_NIN" = $1',
                    [nin]
                );
                if (existingNin.rows.length > 0) {
                    return reply.status(400).send({ error: 'Ce numéro national (NIN) est déjà utilisé' });
                }
            }

            if (email) {
                const existingEmail = await pool.query(
                    'SELECT * FROM "LECTEUR" WHERE "LEC_EMAIL" = $1',
                    [email]
                );

                if (existingEmail.rows.length > 0) {
                    return reply.status(400).send({ error: 'Email déjà utilisé' });
                }
            }

            // Use username as the ID if it fits the schema
            const lecteurId = username;
            const verificationCode = generateVerificationCode();

            // Handle Photo and ID Images
            const photoPath = saveBase64Image(photo, 'users', `photo_${lecteurId.replace(/[^a-zA-Z0-9]/g, '_')}`);
            const cniFrontPath = saveBase64Image(cniFront, 'cni', `cni_front_${lecteurId.replace(/[^a-zA-Z0-9]/g, '_')}`);
            const cniBackPath = saveBase64Image(cniBack, 'cni', `cni_back_${lecteurId.replace(/[^a-zA-Z0-9]/g, '_')}`);

            // Store verification code
            verificationCodes.set(lecteurId, {
                code: verificationCode,
                email: email || null,
                createdAt: Date.now(),
                expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes
            });

            // Insert into database
            const hashedPassword = hashPassword(password);
            await pool.query(
                `INSERT INTO "LECTEUR" ("LEC_ID", "CAT_ID", "LEC_NOM", "LEC_PRENOM", "LEC_DATE_NAISSANCE",
                 "LEC_ADRESSE", "LEC_TEL", "LEC_EMAIL", "LEC_PASSWORD", "LEC_NIN", "BIB_ID", "CREATE_USER",
                 "CREATE_DATE", "LEC_STATUT", "LEC_NOM_AR", "LEC_PRENOM_AR", "LEC_PHOTO", "LEC_CNI_FRONT", "LEC_CNI_BACK", "LEC_PROFESSION", "LEC_GENRE")
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 1, 'system', NOW(), 0, $11, $12, $13, $14, $15, $16, $17)`,
                [
                    lecteurId, categorie || 1, nom || null, prenom || null, dateNaissance,
                    adresse || null, telephone || null, email || null, hashedPassword, nin || null,
                    nomAr, prenomAr, photoPath, cniFrontPath, cniBackPath, profession || null, genre || null
                ]
            );

            // Also insert into registrations table for admin panel sync
            try {
                await pool.query(
                    `INSERT INTO "registrations" (nom, prenom, email, telephone, nin, cat_id, date_naiss, adresse,
                     inscription_source, id_card_recto_path, id_card_verso_path, status, registration_date, lec_id)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'EXTERNE', $9, $10, 'PENDING', NOW(), $11)
                     ON CONFLICT DO NOTHING`,
                    [
                        nomAr || nom, prenomAr || prenom, email || null, telephone || null, nin || null,
                        categorie || null, dateNaissance || null, adresse || null,
                        cniFrontPath, cniBackPath, lecteurId
                    ]
                );
                console.log(`Registration synced to admin table for: ${lecteurId}`);
            } catch (syncError) {
                console.error('CRITICAL: Failed to sync registration to admin table:', syncError);
                // We don't throw here to not block the main registration if sync fails, 
                // but at least we log it now.
            }

            // Generate and Send verification email
            const emailToken = crypto.randomBytes(32).toString('hex');
            
            // Save token to DB
            await pool.query(
                `UPDATE "LECTEUR" SET "LEC_VERIFICATION_TOKEN" = $1 WHERE "LEC_ID" = $2`,
                [emailToken, lecteurId]
            );

            try {
                if (email) {
                    await sendVerificationEmail(email, emailToken, lecteurId);
                    console.log(`Verification email sent to: ${email}`);
                }
            } catch (mailError) {
                console.error('Failed to send verification email:', mailError);
            }

            reply.send({
                lecteurId: lecteurId,
                message: 'Inscription étape 1 validée. Vérifiez votre email.'
            });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de l\'inscription: ' + error.message });
        }
    });
}

export async function createOrder(fastify, opts) {
    fastify.post('/api/orders/create', async (request, reply) => {
        try {
            const { lec_id, book_ids } = request.body;

            if (!lec_id || !book_ids || !Array.isArray(book_ids)) {
                return reply.status(400).send({ error: 'Données de commande invalides' });
            }

            // Create orders in the ORDERS table
            for (const book_id of book_ids) {
                const result = await pool.query(
                    'INSERT INTO "ORDERS" ("LEC_ID", "DOC_ID", "order_date", "status") VALUES ($1, $2, NOW(), $3) RETURNING *',
                    [lec_id, book_id, 'PENDING']
                );
                const newOrder = result.rows[0];
                await pool.query('SELECT pg_notify($1, $2)', ['new_order', JSON.stringify(newOrder)]);
            }

            reply.send({ success: true, message: 'Commande(s) enregistrée(s) avec succès' });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la création de la commande' });
        }
    });
}

export async function listOrders(fastify, opts) {
    fastify.get('/api/orders/list/:lecteurId', async (request, reply) => {
        try {
            const { lecteurId } = request.params;
            console.log('Fetching orders for reader:', lecteurId);
            const result = await pool.query(`
                SELECT o.*, n."DOC_TITRE_PROPRE" as title 
                FROM "ORDERS" o
                LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
                WHERE o."LEC_ID" = $1
                ORDER BY o.order_date DESC
            `, [lecteurId]);
            reply.send(result.rows);
        } catch (error) {
            console.error('DATABASE ERROR in listOrders:', error);
            reply.status(500).send({ error: 'Erreur lors de la récupération des commandes' });
        }
    });
}

export async function verifyEmail(fastify, opts) {
    fastify.get('/api/auth/verify-email', async (request, reply) => {
        try {
            const { id, token } = request.query;

            const result = await pool.query(
                `SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1 AND "LEC_VERIFICATION_TOKEN" = $2`,
                [id, token]
            );

            if (result.rows.length === 0) {
                return reply.type('text/html; charset=utf-8').send(`
                    <!DOCTYPE html>
                    <html lang="fr">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Lien Invalide - Bibliothèque de Béjaïa</title>
                        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap" rel="stylesheet" />
                        <style>
                            body {
                                font-family: 'Lexend', sans-serif;
                                background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                min-height: 100vh;
                                margin: 0;
                                padding: 20px;
                            }
                            .card {
                                background: rgba(255, 255, 255, 0.95);
                                backdrop-filter: blur(10px);
                                border-radius: 24px;
                                padding: 40px 30px;
                                box-shadow: 0 15px 35px rgba(211, 47, 47, 0.1);
                                text-align: center;
                                max-width: 440px;
                                width: 100%;
                                border: 1px solid rgba(255,255,255,0.5);
                            }
                            .icon-wrapper {
                                width: 72px;
                                height: 72px;
                                background: #f44336;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin: 0 auto 24px;
                                color: white;
                                font-size: 32px;
                                font-weight: bold;
                                box-shadow: 0 8px 20px rgba(244, 67, 54, 0.3);
                            }
                            h2 { color: #b71c1c; margin: 0 0 12px 0; font-size: 1.5rem; font-weight: 700; }
                            p { color: #555; font-size: 0.95rem; line-height: 1.6; margin: 0 0 28px 0; }
                            a {
                                display: block;
                                padding: 14px 28px;
                                background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);
                                color: white;
                                text-decoration: none;
                                border-radius: 12px;
                                font-weight: bold;
                                box-shadow: 0 6px 18px rgba(244, 67, 54, 0.2);
                                transition: all 0.2s ease;
                            }
                            a:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(244, 67, 54, 0.3); }
                        </style>
                    </head>
                    <body>
                        <div class="card">
                            <div class="icon-wrapper">!</div>
                            <h2>Lien Invalide ou Expiré</h2>
                            <p>Le lien de confirmation d'email semble incorrect ou a expiré. Veuillez demander un nouveau lien de vérification depuis votre profil.</p>
                            <a href="/">Retour à l'accueil</a>
                        </div>
                    </body>
                    </html>
                `);
            }

            await pool.query(
                `UPDATE "LECTEUR" SET "LEC_EMAIL_VERIFIED" = TRUE, "LEC_VERIFICATION_TOKEN" = NULL WHERE "LEC_ID" = $1`,
                [id]
            );

            // Send stunning verification success HTML page
            reply.type('text/html; charset=utf-8').send(`
                <!DOCTYPE html>
                <html lang="fr" dir="ltr">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email Vérifié - Bibliothèque de Béjaïa</title>
                    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                    <style>
                        :root {
                            --primary: #2E7D32;
                            --primary-light: #4caf50;
                            --bg: #f4f7f4;
                            --card-bg: rgba(255, 255, 255, 0.9);
                            --text-main: #1b2e1b;
                            --text-muted: #556b55;
                        }
                        * {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                        }
                        body {
                            font-family: 'Lexend', 'Noto Sans Arabic', sans-serif;
                            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 20px;
                            overflow: hidden;
                            position: relative;
                        }
                        .circle {
                            position: absolute;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(255,255,255,0) 70%);
                            z-index: 1;
                        }
                        .circle-1 { width: 400px; height: 400px; top: -100px; right: -100px; }
                        .circle-2 { width: 350px; height: 350px; bottom: -50px; left: -100px; }
                        
                        .container {
                            position: relative;
                            z-index: 10;
                            width: 100%;
                            max-width: 480px;
                            background: var(--card-bg);
                            backdrop-filter: blur(20px);
                            -webkit-backdrop-filter: blur(20px);
                            border-radius: 28px;
                            padding: 48px 40px;
                            box-shadow: 0 24px 80px rgba(46, 125, 50, 0.12), 0 0 0 1px rgba(46, 125, 50, 0.04);
                            border: 1px solid rgba(255, 255, 255, 0.6);
                            text-align: center;
                            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(40px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        
                        .success-icon-wrapper {
                            width: 96px;
                            height: 96px;
                            margin: 0 auto 32px;
                            position: relative;
                            background: linear-gradient(135deg, var(--primary), #43a047);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 12px 32px rgba(46, 125, 50, 0.3);
                            animation: pulse 2s infinite;
                        }
                        @keyframes pulse {
                            0% { box-shadow: 0 12px 32px rgba(46, 125, 50, 0.3), 0 0 0 0 rgba(46, 125, 50, 0.2); }
                            70% { box-shadow: 0 12px 32px rgba(46, 125, 50, 0.3), 0 0 0 20px rgba(46, 125, 50, 0); }
                            100% { box-shadow: 0 12px 32px rgba(46, 125, 50, 0.3), 0 0 0 0 rgba(46, 125, 50, 0); }
                        }
                        .checkmark {
                            width: 48px;
                            height: 48px;
                            stroke: white;
                            stroke-width: 4px;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            fill: none;
                            stroke-dasharray: 48;
                            stroke-dashoffset: 48;
                            animation: drawCheckmark 0.6s 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                        @keyframes drawCheckmark {
                            to { stroke-dashoffset: 0; }
                        }
                        
                        h1 {
                            color: var(--text-main);
                            font-size: 1.8rem;
                            font-weight: 800;
                            margin-bottom: 12px;
                            letter-spacing: -0.02em;
                        }
                        p {
                            color: var(--text-muted);
                            font-size: 0.95rem;
                            line-height: 1.6;
                            margin-bottom: 36px;
                        }
                        
                        .btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            width: 100%;
                            padding: 16px 28px;
                            background: linear-gradient(135deg, var(--primary), #43a047);
                            color: white;
                            font-weight: 700;
                            font-size: 1rem;
                            text-decoration: none;
                            border-radius: 16px;
                            box-shadow: 0 8px 24px rgba(46, 125, 50, 0.25);
                            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                            position: relative;
                            overflow: hidden;
                        }
                        .btn::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                            transition: 0.5s;
                        }
                        .btn:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 12px 32px rgba(46, 125, 50, 0.35);
                        }
                        .btn:hover::after {
                            left: 100%;
                        }
                        .btn:active {
                            transform: translateY(0);
                        }
                        .footer {
                            margin-top: 40px;
                            font-size: 0.8rem;
                            color: #9eaf9e;
                            font-weight: 500;
                        }
                    </style>
                </head>
                <body>
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                    
                    <div class="container">
                        <div class="success-icon-wrapper">
                            <svg class="checkmark" viewBox="0 0 24 24">
                                <path d="M20 6L9 17L4 12" />
                            </svg>
                        </div>
                        <h1>Email Vérifié avec Succès !</h1>
                        <p>Merci pour votre confiance. Votre compte est maintenant pleinement actif, vous pouvez dès à présent accéder à votre espace lecteur.</p>
                        <a href="/pages/profile.html" class="btn">
                            <span>Accéder à mon Profil</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                        <div class="footer">
                            Bibliothèque Principale de la Lecture Publique de Béjaïa
                        </div>
                    </div>
                </body>
                </html>
            `);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).type('text/html; charset=utf-8').send(`
                <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
                    <h2 style="color: #d32f2f;">Erreur lors de la vérification</h2>
                    <p>Une erreur est survenue, veuillez réessayer plus tard.</p>
                </div>
            `);
        }
    });
}




export async function resendVerification(fastify, opts) {
    fastify.post('/api/auth/resend-verification', async (request, reply) => {
        try {
            const { lecteurId } = request.body;

            const result = await pool.query(
                `SELECT "LEC_EMAIL", "LEC_EMAIL_VERIFIED" FROM "LECTEUR" WHERE "LEC_ID" = $1`,
                [lecteurId]
            );

            if (result.rows.length === 0) return reply.status(404).send({ error: 'Utilisateur non trouvé' });
            
            const user = result.rows[0];
            if (user.LEC_EMAIL_VERIFIED) return reply.status(400).send({ error: 'Email déjà vérifié' });

            const newToken = crypto.randomBytes(32).toString('hex');
            await pool.query(
                `UPDATE "LECTEUR" SET "LEC_VERIFICATION_TOKEN" = $1 WHERE "LEC_ID" = $2`,
                [newToken, lecteurId]
            );

            await sendVerificationEmail(user.LEC_EMAIL, newToken, lecteurId);

            reply.send({ message: 'Email de vérification renvoyé !' });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors du renvoi de l\'email' });
        }
    });
}

export async function downloadForm(fastify, opts) {
    fastify.get('/api/auth/download-form/:lecteurId', async (request, reply) => {
        try {
            const { lecteurId } = request.params;

            // In production, generate a real PDF from lecteur data
            // For now, return a simple PDF
            const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< >>
stream
BT
/F1 12 Tf
50 750 Td
(Formulaire d'Inscription) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000214 00000 n
0000000301 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
390
%%EOF`;

            reply.type('application/pdf');
            reply.send(Buffer.from(pdfContent));
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors du téléchargement' });
        }
    });
}

export async function exportEngagementPdf(fastify, opts) {
    fastify.post('/api/auth/export-engagement-pdf', async (request, reply) => {
        try {
            const userData = request.body;
            if (!userData || !userData.lecteurId) {
                return reply.status(400).send({ error: 'Données utilisateur manquantes' });
            }

            const inputPdf = path.join(projectRoot, '..', 'gg.pdf');
            const tempDir = path.join(projectRoot, 'temp');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

            const outputFilename = `Engagement_${userData.lecteurId}_${Date.now()}.pdf`;
            const outputPdf = path.join(tempDir, outputFilename);

            const scriptPath = path.join(projectRoot, 'modify_pdf.py');
            const userJson = JSON.stringify(userData);

            // Create a temp JSON file for the data to avoid shell quoting issues on Windows
            const dataPath = path.join(tempDir, `data_${userData.lecteurId}_${Date.now()}.json`);
            fs.writeFileSync(dataPath, userJson);

            // Call Python script
            const command = `python "${scriptPath}" "${dataPath}" "${inputPdf}" "${outputPdf}"`;

            try {
                const { stdout, stderr } = await execAsync(command);
                console.log('PDF Script Output:', stdout);
                if (stderr) console.warn('PDF Script Warning:', stderr);
            } catch (execError) {
                console.error('PDF Script Error:', execError);
                throw new Error(`Python execution failed: ${execError.message} (stderr: ${execError.stderr})`);
            } finally {
                // Always clean up the temp data file
                if (fs.existsSync(dataPath)) fs.unlinkSync(dataPath);
            }

            if (fs.existsSync(outputPdf)) {
                const fileBuffer = fs.readFileSync(outputPdf);
                // Clean up
                fs.unlinkSync(outputPdf);

                const safeNom = (userData.nomLatin || userData.nom || 'Lecteur').replace(/[^a-zA-Z0-9]/g, '_');
                reply.type('application/pdf');
                reply.header('Content-Disposition', `attachment; filename="${safeNom}_Engagement.pdf"; filename*=UTF-8''${encodeURIComponent(userData.nom || 'Lecteur')}_Engagement.pdf`);
                return reply.send(fileBuffer);
            } else {
                throw new Error('PDF output file was not created');
            }
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: error.message });
        }
    });
}

export async function exportEngagementPdfAr(fastify, opts) {
    // Step 1: POST - Generate the PDF and return a download token
    fastify.post('/api/auth/export-engagement-pdf-ar', async (request, reply) => {
        try {
            const userData = request.body;
            if (!userData || !userData.lecteurId) {
                return reply.status(400).send({ error: 'Données utilisateur manquantes' });
            }

            // Sync with latest DB state to ensure 100% up-to-date values (especially for photo, names, gender, etc.)
            try {
                const dbResult = await pool.query('SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1', [userData.lecteurId]);
                if (dbResult.rows.length > 0) {
                    const dbUser = dbResult.rows[0];
                    userData.photo = dbUser.LEC_PHOTO || userData.photo;
                    userData.nom = dbUser.LEC_NOM_AR || userData.nom;
                    userData.prenom = dbUser.LEC_PRENOM_AR || userData.prenom;
                    userData.nomLatin = dbUser.LEC_NOM || userData.nomLatin;
                    userData.prenomLatin = dbUser.LEC_PRENOM || userData.prenomLatin;
                    userData.genre = dbUser.LEC_GENRE || dbUser.LEC_SEXE || userData.genre;
                    userData.adresse = dbUser.LEC_ADRESSE || userData.adresse;
                    userData.telephone = dbUser.LEC_TEL || dbUser.LEC_TELEPHONE || userData.telephone;
                    userData.naissance = dbUser.LEC_DATE_NAISSANCE || userData.naissance;
                    userData.lieuNaissance = dbUser.LEC_LIEU_NAISSANCE || userData.lieuNaissance;
                    userData.profession = dbUser.LEC_PROFESSION || userData.profession;
                    userData.nin = dbUser.LEC_CNI || dbUser.LEC_NIN || userData.nin;
                    userData.email = dbUser.LEC_EMAIL || userData.email;
                }
            } catch (dbErr) {
                console.error('Failed to sync user data with DB during PDF generation:', dbErr);
            }

            const inputPdf = path.join(projectRoot, '..', 'gg.pdf');
            const tempDir = path.join(projectRoot, 'temp');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

            const token = `${userData.lecteurId}_${Date.now()}`;
            const safeNom = (userData.nomLatin || 'Lecteur').replace(/[^a-zA-Z0-9]/g, '_');
            const outputFilename = `${safeNom}_Engagement_AR.pdf`;
            const outputPdf = path.join(tempDir, `${token}.pdf`);

            const scriptPath = path.join(projectRoot, 'modify_pdf_ar.py');

            // Fallback to gorgeous initials avatar if no photo is present in DB or payload
            if (!userData.photo || userData.photo.trim() === '') {
                const nameParam = `${userData.prenomLatin || ''} ${userData.nomLatin || ''}`.trim() || 'Reader';
                userData.photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameParam)}&background=2E7D32&color=fff&size=150`;
            }

            // Resolve photo path to base64 so Python script can insert the real reader photo
            if (userData.photo && !userData.photo.startsWith('data:')) {
                try {
                    if (userData.photo.startsWith('http://') || userData.photo.startsWith('https://')) {
                        const imgRes = await fetch(userData.photo);
                        if (imgRes.ok) {
                            const arrayBuffer = await imgRes.arrayBuffer();
                            const buffer = Buffer.from(arrayBuffer);
                            const contentType = imgRes.headers.get('content-type') || 'image/png';
                            userData.photo = `data:${contentType};base64,${buffer.toString('base64')}`;
                            console.log(`Fetched and resolved external photo to Base64 for ${userData.lecteurId}`);
                        }
                    } else {
                        const photoRelPath = userData.photo.replace(/^\//, '');
                        let photoAbsPath = path.join(projectRoot, photoRelPath);
                        if (!fs.existsSync(photoAbsPath)) {
                            // Fallback to parent directory (e.g., D:\library\images\...)
                            photoAbsPath = path.join(projectRoot, '..', photoRelPath);
                        }
                        if (!fs.existsSync(photoAbsPath)) {
                            // Fallback to absolute subfolder search by filename
                            photoAbsPath = path.resolve(projectRoot, 'images', 'users', path.basename(userData.photo));
                        }
                        if (fs.existsSync(photoAbsPath)) {
                            const photoBuffer = fs.readFileSync(photoAbsPath);
                            const ext = path.extname(photoAbsPath).replace('.', '') || 'png';
                            const mimeType = ext === 'jpg' ? 'jpeg' : ext;
                            userData.photo = `data:image/${mimeType};base64,${photoBuffer.toString('base64')}`;
                            console.log(`Photo resolved from ${photoAbsPath} (${photoBuffer.length} bytes)`);
                        } else {
                            console.warn(`Photo file not found: ${userData.photo}`);
                        }
                    }
                } catch (photoErr) {
                    console.error('Error resolving photo:', photoErr);
                }
            }

            // Create a temp JSON file for the data to avoid shell quoting issues on Windows
            const dataPath = path.join(tempDir, `data_ar_${token}.json`);
            fs.writeFileSync(dataPath, JSON.stringify(userData));

            // Call Python script
            const command = `python "${scriptPath}" "${dataPath}" "${inputPdf}" "${outputPdf}"`;

            try {
                const { stdout, stderr } = await execAsync(command);
                console.log('PDF AR Script Output:', stdout);
                if (stderr) console.warn('PDF AR Script Warning:', stderr);
            } catch (execError) {
                console.error('PDF AR Script Error:', execError);
                throw new Error(`Python execution failed: ${execError.message} (stderr: ${execError.stderr})`);
            } finally {
                if (fs.existsSync(dataPath)) fs.unlinkSync(dataPath);
            }

            if (fs.existsSync(outputPdf)) {
                const stats = fs.statSync(outputPdf);
                console.log(`PDF generated: ${stats.size} bytes, token: ${token}`);
                
                // Auto-cleanup after 5 minutes
                setTimeout(() => {
                    if (fs.existsSync(outputPdf)) fs.unlinkSync(outputPdf);
                }, 5 * 60 * 1000);

                return reply.send({ 
                    downloadUrl: `/api/auth/download-pdf-ar/${token}`,
                    filename: outputFilename,
                    size: stats.size
                });
            } else {
                throw new Error('PDF output file was not created');
            }
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: error.message });
        }
    });

    // Step 2: GET - Serve the generated PDF file directly (browser handles download natively)
    fastify.get('/api/auth/download-pdf-ar/:token', async (request, reply) => {
        try {
            const { token } = request.params;
            // Sanitize token to prevent directory traversal
            const safeToken = token.replace(/[^a-zA-Z0-9_\-]/g, '');
            const tempDir = path.join(projectRoot, 'temp');
            const filePath = path.join(tempDir, `${safeToken}.pdf`);

            if (!fs.existsSync(filePath)) {
                return reply.status(404).send({ error: 'Fichier non trouvé ou expiré' });
            }

            const fileBuffer = fs.readFileSync(filePath);
            fs.unlinkSync(filePath); // Clean up after serving

            reply.type('application/pdf');
            reply.header('Content-Length', fileBuffer.length);
            reply.header('Content-Disposition', `attachment; filename="Engagement_AR.pdf"`);
            return reply.send(fileBuffer);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: error.message });
        }
    });
}

export async function exportEngagementPdfFr(fastify, opts) {
    // Step 1: POST - Generate the PDF and return a download token
    fastify.post('/api/auth/export-engagement-pdf-fr', async (request, reply) => {
        try {
            const userData = request.body;
            if (!userData || !userData.lecteurId) {
                return reply.status(400).send({ error: 'Données utilisateur manquantes' });
            }

            // Sync with latest DB state to ensure 100% up-to-date values (especially for photo, names, gender, etc.)
            try {
                const dbResult = await pool.query('SELECT * FROM "LECTEUR" WHERE "LEC_ID" = $1', [userData.lecteurId]);
                if (dbResult.rows.length > 0) {
                    const dbUser = dbResult.rows[0];
                    userData.photo = dbUser.LEC_PHOTO || userData.photo;
                    userData.nom = dbUser.LEC_NOM_AR || userData.nom;
                    userData.prenom = dbUser.LEC_PRENOM_AR || userData.prenom;
                    userData.nomLatin = dbUser.LEC_NOM || userData.nomLatin;
                    userData.prenomLatin = dbUser.LEC_PRENOM || userData.prenomLatin;
                    userData.genre = dbUser.LEC_GENRE || dbUser.LEC_SEXE || userData.genre;
                    userData.adresse = dbUser.LEC_ADRESSE || userData.adresse;
                    userData.telephone = dbUser.LEC_TEL || dbUser.LEC_TELEPHONE || userData.telephone;
                    userData.naissance = dbUser.LEC_DATE_NAISSANCE || userData.naissance;
                    userData.lieuNaissance = dbUser.LEC_LIEU_NAISSANCE || userData.lieuNaissance;
                    userData.profession = dbUser.LEC_PROFESSION || userData.profession;
                    userData.nin = dbUser.LEC_CNI || dbUser.LEC_NIN || userData.nin;
                    userData.email = dbUser.LEC_EMAIL || userData.email;
                }
            } catch (dbErr) {
                console.error('Failed to sync user data with DB during PDF generation:', dbErr);
            }

            const inputPdf = path.join(projectRoot, 'ggfr.pdf');
            const tempDir = path.join(projectRoot, 'temp');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

            const token = `fr_${userData.lecteurId}_${Date.now()}`;
            const safeNom = (userData.nomLatin || 'Lecteur').replace(/[^a-zA-Z0-9]/g, '_');
            const outputFilename = `${safeNom}_Engagement_FR.pdf`;
            const outputPdf = path.join(tempDir, `${token}.pdf`);

            const scriptPath = path.join(projectRoot, 'modify_pdf_fr.py');

            // Fallback to gorgeous initials avatar if no photo is present in DB or payload
            if (!userData.photo || userData.photo.trim() === '') {
                const nameParam = `${userData.prenomLatin || ''} ${userData.nomLatin || ''}`.trim() || 'Reader';
                userData.photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameParam)}&background=2E7D32&color=fff&size=150`;
            }

            // Resolve photo path to base64 so Python script can insert the real reader photo
            if (userData.photo && !userData.photo.startsWith('data:')) {
                try {
                    if (userData.photo.startsWith('http://') || userData.photo.startsWith('https://')) {
                        const imgRes = await fetch(userData.photo);
                        if (imgRes.ok) {
                            const arrayBuffer = await imgRes.arrayBuffer();
                            const buffer = Buffer.from(arrayBuffer);
                            const contentType = imgRes.headers.get('content-type') || 'image/png';
                            userData.photo = `data:${contentType};base64,${buffer.toString('base64')}`;
                            console.log(`Fetched and resolved external photo to Base64 for ${userData.lecteurId} (FR)`);
                        }
                    } else {
                        const photoRelPath = userData.photo.replace(/^\//, '');
                        let photoAbsPath = path.join(projectRoot, photoRelPath);
                        if (!fs.existsSync(photoAbsPath)) {
                            // Fallback to parent directory (e.g., D:\library\images\...)
                            photoAbsPath = path.join(projectRoot, '..', photoRelPath);
                        }
                        if (!fs.existsSync(photoAbsPath)) {
                            // Fallback to absolute subfolder search by filename
                            photoAbsPath = path.resolve(projectRoot, 'images', 'users', path.basename(userData.photo));
                        }
                        if (fs.existsSync(photoAbsPath)) {
                            const photoBuffer = fs.readFileSync(photoAbsPath);
                            const ext = path.extname(photoAbsPath).replace('.', '') || 'png';
                            const mimeType = ext === 'jpg' ? 'jpeg' : ext;
                            userData.photo = `data:image/${mimeType};base64,${photoBuffer.toString('base64')}`;
                            console.log(`Photo resolved from ${photoAbsPath} (${photoBuffer.length} bytes)`);
                        } else {
                            console.warn(`Photo file not found: ${userData.photo}`);
                        }
                    }
                } catch (photoErr) {
                    console.error('Error resolving photo:', photoErr);
                }
            }

            // Create a temp JSON file for the data to avoid shell quoting issues on Windows
            const dataPath = path.join(tempDir, `data_fr_${token}.json`);
            fs.writeFileSync(dataPath, JSON.stringify(userData));

            // Call Python script
            const command = `python "${scriptPath}" "${dataPath}" "${inputPdf}" "${outputPdf}"`;

            try {
                const { stdout, stderr } = await execAsync(command);
                console.log('PDF FR Script Output:', stdout);
                if (stderr) console.warn('PDF FR Script Warning:', stderr);
            } catch (execError) {
                console.error('PDF FR Script Error:', execError);
                throw new Error(`Python execution failed: ${execError.message} (stderr: ${execError.stderr})`);
            } finally {
                if (fs.existsSync(dataPath)) fs.unlinkSync(dataPath);
            }

            if (fs.existsSync(outputPdf)) {
                const stats = fs.statSync(outputPdf);
                console.log(`PDF FR generated: ${stats.size} bytes, token: ${token}`);
                
                // Auto-cleanup after 5 minutes
                setTimeout(() => {
                    if (fs.existsSync(outputPdf)) fs.unlinkSync(outputPdf);
                }, 5 * 60 * 1000);

                return reply.send({ 
                    downloadUrl: `/api/auth/download-pdf-fr/${token}`,
                    filename: outputFilename,
                    size: stats.size
                });
            } else {
                throw new Error('PDF FR output file was not created');
            }
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: error.message });
        }
    });

    // Step 2: GET - Serve the generated PDF file directly
    fastify.get('/api/auth/download-pdf-fr/:token', async (request, reply) => {
        try {
            const { token } = request.params;
            const safeToken = token.replace(/[^a-zA-Z0-9_\-]/g, '');
            const tempDir = path.join(projectRoot, 'temp');
            const filePath = path.join(tempDir, `${safeToken}.pdf`);

            if (!fs.existsSync(filePath)) {
                return reply.status(404).send({ error: 'Fichier non trouvé ou expiré' });
            }

            const fileBuffer = fs.readFileSync(filePath);
            fs.unlinkSync(filePath); // Clean up after serving

            reply.type('application/pdf');
            reply.header('Content-Length', fileBuffer.length);
            reply.header('Content-Disposition', `attachment; filename="Engagement_FR.pdf"`);
            return reply.send(fileBuffer);
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: error.message });
        }
    });
}


export async function uploadDocument(fastify, opts) {
    fastify.post('/api/auth/upload-document', async (request, reply) => {
        try {
            const data = await request.file();
            const { lecteurId } = data.fields;

            if (!data || !lecteurId) {
                return reply.status(400).send({ error: 'Fichier ou lecteur manquant' });
            }

            // Store document reference
            uploadedDocuments.set(lecteurId, {
                filename: data.filename,
                uploadedAt: Date.now()
            });

            // TODO: Save file to storage (S3, local file system, etc.)
            console.log(`Document uploaded for ${lecteurId}: ${data.filename}`);

            reply.send({ message: 'Document téléchargé avec succès' });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors du téléchargement' });
        }
    });
}

// Books Routes
export async function listBooks(fastify, opts) {
    fastify.get('/api/books/list', async (request, reply) => {
        try {
            const { search, category, language, year, availability, limit = 20, offset = 0 } = request.query;

            let whereClause = 'WHERE n."DOC_TITRE_PROPRE" IS NOT NULL';
            const params = [];
            let paramCount = 1;

            if (search && search.trim().length > 0) {
                const searchTerm = `%${search.trim()}%`;
                whereClause += ` AND (
                    n."DOC_TITRE_PROPRE" ILIKE $${paramCount} 
                    OR v."VED_NOM" ILIKE $${paramCount}
                    OR c."COL_TITRE_PROPRE" ILIKE $${paramCount}
                    OR n."DOC_KEYWORDS" ILIKE $${paramCount}
                    OR n."DOC_ISBN" ILIKE $${paramCount}
                    OR CAST(n."DOC_ID" AS TEXT) = $${paramCount + 1}
                    OR CAST(n."DOC_ANNEE" AS TEXT) ILIKE $${paramCount}
                    OR l."LAN_LIBELLE" ILIKE $${paramCount}
                    OR EXISTS (SELECT 1 FROM public."NOTICE_EXEMPLAIRE" ex WHERE ex."DOC_ID" = n."DOC_ID" AND ex."EXP_ID" ILIKE $${paramCount})
                )`;
                params.push(searchTerm, search.trim());
                paramCount += 2;
            }

            if (category && category.trim().length > 0) {
                whereClause += ` AND c."COL_TITRE_PROPRE" ILIKE $${paramCount}`;
                params.push(`%${category}%`);
                paramCount++;
            }

            if (language && language.trim().length > 0) {
                whereClause += ` AND l."LAN_LIBELLE" ILIKE $${paramCount}`;
                params.push(`%${language}%`);
                paramCount++;
            }

            if (year && year.trim().length > 0) {
                whereClause += ` AND CAST(n."DOC_ANNEE" AS TEXT) = $${paramCount}`;
                params.push(year.trim());
                paramCount++;
            }

            if (availability === 'available') {
                whereClause += ` AND COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) > 0`;
            } else if (availability === 'unavailable') {
                whereClause += ` AND COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) = 0`;
            }

            // Get total count first
            const countQuery = `
                SELECT COUNT(DISTINCT n."DOC_ID") as total
                FROM public."NOTICE" n
                LEFT JOIN public."COLLECTION" c ON n."COL_ID" = c."COL_ID"
                LEFT JOIN public."NOTICE_AUTEUR" na ON n."DOC_ID" = na."DOC_ID"
                LEFT JOIN public."VEDETTE" v ON na."VED_ID" = v."VED_ID"
                LEFT JOIN public."LANGUE" l ON n."LAN_ID" = l."LAN_ID"
                ${whereClause}
            `;
            const countResult = await pool.query(countQuery, params);
            const totalCount = parseInt(countResult.rows[0].total);

            // Get paginated books
            let query = `
                SELECT 
                    n."DOC_ID" as id,
                    COALESCE(NULLIF(n."DOC_TITRE_PROPRE", ''), 'بدون عنوان') as title,
                    COALESCE(NULLIF(STRING_AGG(DISTINCT v."VED_NOM", ', '), ''), 'مؤلف غير معروف') as author,
                    COALESCE(n."DOC_ANNEE", '')::text as year,
                    COALESCE(c."COL_TITRE_PROPRE", 'عام') as category,
                    COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) > 0 as available,
                    COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) as available_copies,
                    COALESCE(l."LAN_LIBELLE", 'غير محدد') as language,
                    COALESCE(n."DOC_NOTE", '') as notes,
                    COALESCE(n."DOC_ISBN", '') as isbn,
                    COALESCE(n."DOC_KEYWORDS", '') as keywords,
                    (SELECT STRING_AGG("EXP_ID", ', ') FROM public."NOTICE_EXEMPLAIRE" WHERE "DOC_ID" = n."DOC_ID") as exp_ids
                FROM public."NOTICE" n
                LEFT JOIN public."COLLECTION" c ON n."COL_ID" = c."COL_ID"
                LEFT JOIN public."NOTICE_AUTEUR" na ON n."DOC_ID" = na."DOC_ID"
                LEFT JOIN public."VEDETTE" v ON na."VED_ID" = v."VED_ID"
                LEFT JOIN public."LANGUE" l ON n."LAN_ID" = l."LAN_ID"
                ${whereClause}
                GROUP BY n."DOC_ID", n."DOC_TITRE_PROPRE", n."DOC_ANNEE", c."COL_TITRE_PROPRE", n."DOC_NBR_EXEMPLAIRE", l."LAN_LIBELLE", n."DOC_NOTE", n."DOC_ISBN", n."DOC_KEYWORDS"
                ORDER BY n."DOC_ID" DESC
                LIMIT $${paramCount} OFFSET $${paramCount + 1}
            `;

            const listParams = [...params, limit, offset];
            const result = await pool.query(query, listParams);

            const bookCovers = ['../images/1.webp', '../images/3.webp'];
            const books = result.rows.map((row, i) => ({
                id: row.id,
                expIds: row.exp_ids,
                title: row.title,
                author: row.author,
                year: row.year,
                category: row.category,
                available: row.available,
                availableCopies: row.available_copies,
                language: row.language,
                notes: row.notes,
                isbn: row.isbn,
                keywords: row.keywords,
                img: bookCovers[i % 2]
            }));

            reply.send({ books, total: totalCount });
        } catch (dbError) {
            console.error('Database error:', dbError.message || dbError.toString());
            reply.send({ books: [], total: 0 });
        }
    });
}






export async function getBookFilters(fastify, opts) {
    fastify.get('/api/books/filters', async (request, reply) => {
        try {
            // Get categories with counts
            const categoriesResult = await pool.query(
                `SELECT c."COL_ID" as id, c."COL_TITRE_PROPRE" as name, COUNT(n."DOC_ID") as count
                 FROM public."COLLECTION" c
                 LEFT JOIN public."NOTICE" n ON n."COL_ID" = c."COL_ID"
                 GROUP BY c."COL_ID", c."COL_TITRE_PROPRE"
                 ORDER BY name LIMIT 50`
            );

            // Get languages
            const languagesResult = await pool.query(
                'SELECT "LAN_ID" as code, "LAN_LIBELLE" as name FROM "LANGUE" LIMIT 50'
            );

            reply.send({
                categories: categoriesResult.rows.map(r => ({ id: r.id, name: r.name, count: Number(r.count) })),
                languages: languagesResult.rows
            });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la récupération des filtres' });
        }
    });
}

export async function changePassword(fastify, opts) {
    fastify.post('/api/auth/change-password', async (request, reply) => {
        try {
            const { lecteurId, oldPassword, newPassword } = request.body;
            if (!lecteurId || !oldPassword || !newPassword) return reply.status(400).send({ error: 'Missing parameters' });

            const res = await pool.query('SELECT "LEC_PASSWORD" as pwd FROM "LECTEUR" WHERE "LEC_ID" = $1', [lecteurId]);
            if (res.rows.length === 0) return reply.status(404).send({ error: 'Lecteur not found' });

            const stored = res.rows[0].pwd || '';
            if (stored !== hashPassword(oldPassword)) return reply.status(401).send({ error: 'Old password incorrect' });

            const hashed = hashPassword(newPassword);
            await pool.query('UPDATE "LECTEUR" SET "LEC_PASSWORD" = $1 WHERE "LEC_ID" = $2', [hashed, lecteurId]);
            reply.send({ success: true });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors du changement de mot de passe' });
        }
    });
}

export async function changeEmail(fastify, opts) {
    fastify.post('/api/auth/change-email', async (request, reply) => {
        try {
            const { lecteurId, newEmail } = request.body;
            if (!lecteurId || !newEmail) {
                return reply.status(400).send({ error: 'جميع الحقول مطلوبة' });
            }

            // Check if user exists
            const res = await pool.query('SELECT "LEC_ID" FROM "LECTEUR" WHERE "LEC_ID" = $1', [lecteurId]);
            if (res.rows.length === 0) return reply.status(404).send({ error: 'المستخدم غير موجود' });

            // Check if new email is already used by another user
            const emailCheck = await pool.query('SELECT "LEC_ID" FROM "LECTEUR" WHERE "LEC_EMAIL" = $1 AND "LEC_ID" != $2', [newEmail, lecteurId]);
            if (emailCheck.rows.length > 0) {
                return reply.status(400).send({ error: 'البريد الإلكتروني الجديد مستخدم بالفعل من قبل حساب آخر' });
            }

            // Generate new verification token
            const emailToken = crypto.randomBytes(32).toString('hex');

            // Update LECTEUR email and verification status
            await pool.query(
                `UPDATE "LECTEUR" SET "LEC_EMAIL" = $1, "LEC_EMAIL_VERIFIED" = FALSE, "LEC_VERIFICATION_TOKEN" = $2 WHERE "LEC_ID" = $3`,
                [newEmail, emailToken, lecteurId]
            );

            // Sync to registrations table if exists
            try {
                await pool.query(
                    `UPDATE "registrations" SET email = $1 WHERE lec_id = $2`,
                    [newEmail, lecteurId]
                );
            } catch (syncError) {
                console.error('Failed to sync email update to registrations table:', syncError);
            }

            // Send new verification email
            try {
                await sendVerificationEmail(newEmail, emailToken, lecteurId);
                console.log(`New verification email sent to: ${newEmail}`);
            } catch (mailError) {
                console.error('Failed to send verification email:', mailError);
            }

            reply.send({ success: true, email: newEmail });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'حدث خطأ أثناء تغيير البريد الإلكتروني' });
        }
    });
}




export async function createAcquisitionRequest(fastify, opts) {
    fastify.post('/api/requests/acquisition', async (request, reply) => {
        try {
            let { lecteurId, username, title, author, note } = request.body;
            // allow username fallback
            if (!lecteurId && username) lecteurId = username;
            if (!lecteurId || !title) return reply.status(400).send({ error: 'Missing parameters' });

            // Ensure the table exists
            await pool.query(`CREATE TABLE IF NOT EXISTS public."ACQUISITION_REQUEST" (
                id SERIAL PRIMARY KEY,
                lecteur_id TEXT,
                title TEXT,
                author TEXT,
                note TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            )`);

            await pool.query('INSERT INTO public."ACQUISITION_REQUEST" (lecteur_id, title, author, note) VALUES ($1,$2,$3,$4)', [lecteurId, title, author || null, note || null]);
            reply.send({ success: true });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la création de la demande' });
        }
    });
}

export async function updateProfilePhoto(fastify, opts) {
    fastify.post('/api/auth/update-photo', async (request, reply) => {
        try {
            const { lecteurId, photo } = request.body;
            if (!lecteurId || !photo) {
                return reply.status(400).send({ error: 'lecteurId and photo are required' });
            }

            const photoPath = saveBase64Image(photo, 'users', `photo_${lecteurId.replace(/[^a-zA-Z0-9]/g, '_')}`);
            if (!photoPath) {
                return reply.status(400).send({ error: 'Invalid photo format' });
            }

            await pool.query(
                `UPDATE "LECTEUR" SET "LEC_PHOTO" = $1 WHERE "LEC_ID" = $2`,
                [photoPath, lecteurId]
            );

            reply.send({ success: true, photoUrl: photoPath });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la mise à jour de la photo' });
        }
    });
}

export async function updateReader(fastify, opts) {
    fastify.post('/api/auth/update-reader', async (request, reply) => {
        try {
            const { lecteurId, nom, prenom, nomAr, prenomAr, email, telephone, adresse, nin, categorie } = request.body;

            if (!lecteurId) {
                return reply.status(400).send({ error: 'lecteurId is required' });
            }

            const fields = [];
            const params = [];
            let idx = 1;

            if (nom) { fields.push(`"LEC_NOM" = $${idx++}`); params.push(nom); }
            if (prenom) { fields.push(`"LEC_PRENOM" = $${idx++}`); params.push(prenom); }
            if (nomAr) { fields.push(`"LEC_NOM_AR" = $${idx++}`); params.push(nomAr); }
            if (prenomAr) { fields.push(`"LEC_PRENOM_AR" = $${idx++}`); params.push(prenomAr); }
            if (email) { fields.push(`"LEC_EMAIL" = $${idx++}`); params.push(email); }
            if (telephone) { fields.push(`"LEC_TEL" = $${idx++}`); params.push(telephone); }
            if (adresse) { fields.push(`"LEC_ADRESSE" = $${idx++}`); params.push(adresse); }
            if (nin) { fields.push(`"LEC_NIN" = $${idx++}`); params.push(nin); }
            if (categorie) { fields.push(`"CAT_ID" = $${idx++}`); params.push(categorie); }

            if (fields.length === 0) {
                return reply.status(400).send({ error: 'No fields to update' });
            }

            const query = `UPDATE "LECTEUR" SET ${fields.join(', ')} WHERE "LEC_ID" = $${idx}`;
            params.push(lecteurId);

            await pool.query(query, params);

            reply.send({ success: true });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la mise à jour' });
        }
    });
}

export async function listBooksByDomain(fastify, opts) {
    fastify.get('/api/books/domains/list', async (request, reply) => {
        try {
            const { search, category, language, year, availability, limit = 20, offset = 0 } = request.query;

            let whereClause = 'WHERE n."DOC_TITRE_PROPRE" IS NOT NULL';
            const params = [];
            let paramCount = 1;

            if (search && search.trim().length > 0) {
                const searchTerm = `%${search.trim()}%`;
                whereClause += ` AND (
                    n."DOC_TITRE_PROPRE" ILIKE $${paramCount}
                    OR v."VED_NOM" ILIKE $${paramCount}
                    OR n."DOC_KEYWORDS" ILIKE $${paramCount}
                    OR n."DOC_ISBN" ILIKE $${paramCount}
                    OR CAST(n."DOC_ID" AS TEXT) = $${paramCount + 1}
                    OR CAST(n."DOC_ANNEE" AS TEXT) ILIKE $${paramCount}
                    OR l."LAN_LIBELLE" ILIKE $${paramCount}
                    OR cls."CLA_LIBELLE" ILIKE $${paramCount}
                    OR dom."CLA_LIBELLE" ILIKE $${paramCount}
                    OR EXISTS (SELECT 1 FROM public."NOTICE_EXEMPLAIRE" ex WHERE ex."DOC_ID" = n."DOC_ID" AND ex."EXP_ID" ILIKE $${paramCount})
                )`;
                params.push(searchTerm, search.trim());
                paramCount += 2;
            }

            if (category && category.trim().length > 0) {
                whereClause += ` AND (
                    dom."CLA_LIBELLE" ILIKE $${paramCount}
                    OR dom."CLA_ID" = $${paramCount + 1}
                )`;
                params.push(`%${category.trim()}%`, category.trim());
                paramCount += 2;
            }

            if (language && language.trim().length > 0) {
                whereClause += ` AND l."LAN_LIBELLE" ILIKE $${paramCount}`;
                params.push(`%${language}%`);
                paramCount++;
            }

            if (year && year.trim().length > 0) {
                whereClause += ` AND CAST(n."DOC_ANNEE" AS TEXT) = $${paramCount}`;
                params.push(year.trim());
                paramCount++;
            }

            if (availability === 'available') {
                whereClause += ` AND COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) > 0`;
            } else if (availability === 'unavailable') {
                whereClause += ` AND COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) = 0`;
            }

            const baseFrom = `
                FROM public."NOTICE" n
                LEFT JOIN public."NOTICE_AUTEUR" na ON n."DOC_ID" = na."DOC_ID"
                LEFT JOIN public."VEDETTE" v ON na."VED_ID" = v."VED_ID"
                LEFT JOIN public."LANGUE" l ON n."LAN_ID" = l."LAN_ID"
                LEFT JOIN public."NOTICE_CLASSIFICATION" nc ON n."DOC_ID" = nc."DOC_ID"
                LEFT JOIN public."CLASSIFICATION" cls ON nc."CLA_ID" = cls."CLA_ID"
                LEFT JOIN public."CLASSIFICATION" dom
                    ON dom."CLA_ID" = CASE
                        WHEN cls."CLA_ID" IS NULL THEN NULL
                        WHEN RIGHT(cls."CLA_ID", 2) = '00' THEN cls."CLA_ID"
                        ELSE LEFT(cls."CLA_ID", 1) || '00'
                    END
            `;

            const countResult = await pool.query(`
                SELECT COUNT(DISTINCT n."DOC_ID") as total
                ${baseFrom}
                ${whereClause}
            `, params);
            const totalCount = parseInt(countResult.rows[0].total);

            const result = await pool.query(`
                SELECT
                    n."DOC_ID" as id,
                    COALESCE(NULLIF(n."DOC_TITRE_PROPRE", ''), 'Sans titre') as title,
                    COALESCE(NULLIF(STRING_AGG(DISTINCT v."VED_NOM", ', '), ''), 'Auteur inconnu') as author,
                    COALESCE(n."DOC_ANNEE", '')::text as year,
                    COALESCE(NULLIF(STRING_AGG(DISTINCT dom."CLA_LIBELLE", ', '), ''), 'General') as category,
                    COALESCE(NULLIF(STRING_AGG(DISTINCT cls."CLA_LIBELLE", ', '), ''), '') as subcategory,
                    COALESCE(NULLIF(STRING_AGG(DISTINCT dom."CLA_ID", ', '), ''), '') as category_code,
                    COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) > 0 as available,
                    COALESCE(n."DOC_NBR_EXEMPLAIRE", 0) as available_copies,
                    COALESCE(l."LAN_LIBELLE", 'Non precise') as language,
                    COALESCE(n."DOC_NOTE", '') as notes,
                    COALESCE(n."DOC_ISBN", '') as isbn,
                    COALESCE(n."DOC_KEYWORDS", '') as keywords,
                    (SELECT STRING_AGG("EXP_ID", ', ') FROM public."NOTICE_EXEMPLAIRE" WHERE "DOC_ID" = n."DOC_ID") as exp_ids
                ${baseFrom}
                ${whereClause}
                GROUP BY n."DOC_ID", n."DOC_TITRE_PROPRE", n."DOC_ANNEE", n."DOC_NBR_EXEMPLAIRE", l."LAN_LIBELLE", n."DOC_NOTE", n."DOC_ISBN", n."DOC_KEYWORDS"
                ORDER BY n."DOC_ID" DESC
                LIMIT $${paramCount} OFFSET $${paramCount + 1}
            `, [...params, limit, offset]);

            const bookCovers = ['../images/1.webp', '../images/3.webp'];
            const books = result.rows.map((row, i) => ({
                id: row.id,
                expIds: row.exp_ids,
                title: row.title,
                author: row.author,
                year: row.year,
                category: row.category,
                subcategory: row.subcategory,
                categoryCode: row.category_code,
                available: row.available,
                availableCopies: row.available_copies,
                language: row.language,
                notes: row.notes,
                isbn: row.isbn,
                keywords: row.keywords,
                img: bookCovers[i % 2]
            }));

            reply.send({ books, total: totalCount });
        } catch (error) {
            fastify.log.error(error);
            reply.send({ books: [], total: 0 });
        }
    });
}

export async function getDomainFilters(fastify, opts) {
    fastify.get('/api/books/domains/filters', async (request, reply) => {
        try {
            const categoriesResult = await pool.query(`
                SELECT
                    dom."CLA_ID" as id,
                    dom."CLA_LIBELLE" as name,
                    COUNT(DISTINCT nc."DOC_ID") as count
                FROM public."CLASSIFICATION" dom
                LEFT JOIN public."CLASSIFICATION" cls
                    ON (CASE
                        WHEN RIGHT(cls."CLA_ID", 2) = '00' THEN cls."CLA_ID"
                        ELSE LEFT(cls."CLA_ID", 1) || '00'
                    END) = dom."CLA_ID"
                LEFT JOIN public."NOTICE_CLASSIFICATION" nc ON nc."CLA_ID" = cls."CLA_ID"
                WHERE RIGHT(dom."CLA_ID", 2) = '00'
                GROUP BY dom."CLA_ID", dom."CLA_LIBELLE"
                ORDER BY dom."CLA_ID"
            `);

            const languagesResult = await pool.query(
                'SELECT "LAN_ID" as code, "LAN_LIBELLE" as name FROM "LANGUE" LIMIT 50'
            );

            reply.send({
                categories: categoriesResult.rows.map(row => ({ id: row.id, name: row.name, count: Number(row.count) })),
                languages: languagesResult.rows
            });
        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: 'Erreur lors de la recuperation des domaines' });
        }
    });
}

// Export all routes
export default async function routes(fastify) {
    await login(fastify);
    await getUserProfile(fastify);
    await exportEngagementPdf(fastify);
    await exportEngagementPdfAr(fastify);
    await exportEngagementPdfFr(fastify);
    await checkNin(fastify);
    await registerStep1(fastify);
    await createOrder(fastify);
    await verifyEmail(fastify);
    await resendVerification(fastify);
    await downloadForm(fastify);
    await uploadDocument(fastify);
    await listBooks(fastify);
    await listBooksByDomain(fastify);
    await listOrders(fastify);
    await getBookFilters(fastify);
    await getDomainFilters(fastify);
    await updateReader(fastify);
    await updateProfilePhoto(fastify);
    await changePassword(fastify);
    await changeEmail(fastify);
    await createAcquisitionRequest(fastify);
}
