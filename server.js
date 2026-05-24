import Fastify from 'fastify';
import { Pool } from 'pg';
import fastifyStatic from '@fastify/static';
import fastifyMultipart from '@fastify/multipart';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import routes from './api/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
  logger: true,
  bodyLimit: 52428800 // 50MB
});

// Register static file serving for images
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'images'),
  prefix: '/images/'
});

// Register static file serving for pages
// Register static file serving for pages
// set `decorateReply: false` to avoid duplicate `sendFile` decorator


fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'pages'),
  prefix: '/pages/',
  decorateReply: false
});

// Register static file serving for CSS
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'css'),
  prefix: '/css/',
  decorateReply: false
});

// Register static file serving for JS
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'js'),
  prefix: '/js/',
  decorateReply: false
});

// Serve the engagement file specifically
fastify.get('/engagement.html', async (request, reply) => {
  const content = readFileSync(path.join(__dirname, '1754215192533-engagement________________.html'), 'utf8');
  reply.type('text/html').send(content);
});

fastify.get('/logo.jpg', async (request, reply) => {
  reply.type('image/jpeg').send(readFileSync(path.join(__dirname, 'logo.jpg')));
});

fastify.get('/minsitere.png', async (request, reply) => {
  reply.type('image/png').send(readFileSync(path.join(__dirname, 'minsitere.png')));
});

// Register multipart for file uploads
fastify.register(fastifyMultipart);

// Register API routes
fastify.register(routes);

const pool = new Pool({
  user: 'postgres',
  password: 'farid',
  host: '127.0.0.1',
  port: 5432,
  database: 'Library'
});






fastify.get('/', async (request, reply) => {
  try {
    const elements = await pool.query(`SELECT COUNT(*) as count FROM "LECTEUR"`);
    const titles = await pool.query(`SELECT COUNT(*) as count FROM "NOTICE"`);
    const copies = await pool.query(`SELECT COUNT(*) as count FROM "NOTICE_EXEMPLAIRE"`);

    const total_elements = parseInt(elements.rows[0].count);
    const total_titles = parseInt(titles.rows[0].count);
    const total_copies = parseInt(copies.rows[0].count);




    const html = `<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>المكتبة الرئيسية للمطالعة العمومية لولاية بجاية</title>
<link rel="prefetch" href="/pages/books-catalog.html">
<link rel="preload" href="/images/1.webp" as="image" type="image/webp">
<link rel="preload" href="/images/3.webp" as="image" type="image/webp">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="/css/responsive.css" rel="stylesheet"/>
<script id="tailwind-config">
tailwind.config = {
darkMode: "class",
theme: {
extend: {
colors: {
"primary": "#2E7D32",
"background-light": "#f6f8f6",
"background-dark": "#102216",
},
fontFamily: {
"display": ["Lexend", "Noto Sans Arabic", "sans-serif"]
},
borderRadius: {
"DEFAULT": "0.25rem",
"lg": "0.5rem",
"xl": "0.75rem",
"full": "9999px"
},
},
},
}
</script>
<style>
body { font-family: 'Lexend', 'Noto Sans Arabic', sans-serif; overflow-x: hidden; }
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.glass-nav { background: rgba(255, 255, 255, 0.72); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); }

/* Login Modal */
.login-overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.5); backdrop-filter:blur(6px); z-index:9999; justify-content:center; align-items:center; }
.login-overlay.active { display:flex; animation: fadeInOverlay 0.3s ease; }
.login-modal { background:white; border-radius:28px; padding:48px 40px 40px; width:420px; max-width:92vw; box-shadow:0 32px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(46,125,50,0.08); position:relative; animation: slideUpModal 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fadeInOverlay { from{opacity:0} to{opacity:1} }
@keyframes slideUpModal { from{opacity:0;transform:translateY(40px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
.login-modal .close-btn { position:absolute; top:16px; left:16px; width:36px; height:36px; border-radius:50%; border:none; background:#f1f5f1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s; color:#607d8b; }
.login-modal .close-btn:hover { background:#e8f5e9; color:#2E7D32; transform:rotate(90deg); }
.login-modal .modal-icon { width:72px; height:72px; border-radius:20px; background:linear-gradient(135deg,#2E7D32,#43a047); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 8px 24px rgba(46,125,50,0.3); }
.login-modal h2 { text-align:center; font-size:1.6rem; font-weight:700; color:#1a2e1a; margin-bottom:6px; }
.login-modal .subtitle { text-align:center; color:#607d8b; font-size:0.95rem; margin-bottom:28px; }
.login-modal .input-group { position:relative; margin-bottom:18px; }
.login-modal .input-group .material-symbols-outlined { position:absolute; right:14px; top:50%; transform:translateY(-50%); color:#9e9e9e; font-size:22px; pointer-events:none; }
.login-modal input[type='text'], .login-modal input[type='password'] { width:100%; padding:14px 48px 14px 14px; border:2px solid #e8ece8; border-radius:14px; font-family:'Lexend','Noto Sans Arabic',sans-serif; font-size:0.95rem; color:#1a2e1a; background:#fafbfa; transition:all 0.3s; text-align:right; direction:rtl; }
.login-modal input:focus { outline:none; border-color:#2E7D32; box-shadow:0 0 0 4px rgba(46,125,50,0.1); background:white; }
.login-modal .login-btn { width:100%; padding:15px; border:none; border-radius:14px; background:linear-gradient(135deg,#2E7D32,#43a047); color:white; font-family:'Lexend','Noto Sans Arabic',sans-serif; font-size:1.05rem; font-weight:700; cursor:pointer; transition:all 0.3s; margin-top:6px; box-shadow:0 4px 16px rgba(46,125,50,0.25); }
.login-modal .login-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(46,125,50,0.35); }
.login-modal .forgot-link { display:block; text-align:center; color:#2E7D32; font-size:0.85rem; font-weight:600; margin-top:16px; text-decoration:none; transition:color 0.3s; }
.login-modal .forgot-link:hover { color:#1a5e1f; }
.login-modal .divider { display:flex; align-items:center; gap:12px; margin:22px 0; color:#9e9e9e; font-size:0.8rem; }
.login-modal .divider::before, .login-modal .divider::after { content:''; flex:1; height:1px; background:#e8ece8; }
.login-modal .register-link { text-align:center; font-size:0.9rem; color:#607d8b; margin-top:4px; }
.login-modal .register-link a { color:#2E7D32; font-weight:700; text-decoration:none; transition:color 0.3s; }
.login-modal .register-link a:hover { color:#1a5e1f; }

/* Events Carousel */
.events-carousel-section { background:#f6f8f6; padding:60px 0 40px; position:relative; overflow:hidden; width: 100%; }
.events-carousel-section::before { content:''; position:absolute; inset:0; opacity:0.02; background-image:radial-gradient(circle at 25% 50%, #2E7D32 1px, transparent 1px); background-size:50px 50px; pointer-events:none; }
.events-slider-wrapper { position:relative; max-width: 1500px; margin:0 auto; padding:0 40px; direction:ltr !important; }
.events-viewport { overflow:hidden; width:100%; border-radius:24px; position:relative; }
.events-track { display:flex; gap:20px; padding:15px 0; direction:ltr; will-change:transform; }
.event-card { flex-shrink:0; width:min(500px,85vw); height:min(300px,45vh); border-radius:22px; overflow:hidden; position:relative; cursor:pointer; transition:all 0.5s cubic-bezier(0.16,1,0.3,1); box-shadow:0 10px 30px rgba(0,0,0,0.06); border:1px solid rgba(46,125,50,0.08); margin:0; }
.event-card:hover { transform:translateY(-6px) scale(1.01); box-shadow:0 20px 50px rgba(46,125,50,0.18); }
.event-card img { width:100%; height:100%; object-fit:cover; transition:transform 0.8s; }
.event-card:hover img { transform:scale(1.08); }
.event-card .event-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display:flex; flex-direction:column; justify-content:flex-end; padding:24px; }
.event-card .event-badge { position:absolute; top:16px; right:16px; background:rgba(46,125,50,0.9); backdrop-filter:blur(10px); color:white; padding:5px 14px; border-radius:50px; font-size:0.75rem; font-weight:700; }
.event-card .event-title { color:white; font-size:1.15rem; font-weight:800; margin-bottom:6px; line-height:1.2; }
.event-card .event-date { color:rgba(255,255,255,0.8); font-size:0.8rem; display:flex; align-items:center; gap:6px; }





/* Scroll Reveal Animations */
.scroll-reveal { opacity:0; transform:translateY(40px); transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal.revealed { opacity:1; transform:translateY(0); }
.scroll-reveal-left { opacity:0; transform:translateX(-60px); transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal-left.revealed { opacity:1; transform:translateX(0); }
.scroll-reveal-right { opacity:0; transform:translateX(60px); transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal-right.revealed { opacity:1; transform:translateX(0); }
.scroll-reveal-scale { opacity:0; transform:scale(0.9); transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal-scale.revealed { opacity:1; transform:scale(1); }
.delay-100 { transition-delay:0.1s; }
.delay-200 { transition-delay:0.2s; }
.delay-300 { transition-delay:0.3s; }
.delay-400 { transition-delay:0.4s; }
.delay-500 { transition-delay:0.5s; }

/* Apple-style Navbar Dropdowns */
.nav-item { position:relative; }
.nav-item::after { content:''; position:absolute; top:100%; left:0; width:100%; height:12px; z-index:10; }
.nav-item > a { display:flex; align-items:center; gap:4px; }
.nav-dropdown { position:absolute; top:100%; right:50%; transform:translateX(50%); min-width:260px; background:rgba(255,255,255,0.98); backdrop-filter:blur(40px) saturate(180%); -webkit-backdrop-filter:blur(40px) saturate(180%); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06); padding:8px; opacity:0; visibility:hidden; transform-origin:top center; transition:all 0.25s cubic-bezier(0.16, 1, 0.3, 1); pointer-events:none; z-index:200; margin-top:12px; }
.nav-item:hover .nav-dropdown { opacity:1; visibility:visible; pointer-events:auto; transform:translateX(50%) translateY(0); }
.nav-dropdown::before { content:''; position:absolute; top:-8px; right:50%; transform:translateX(50%); width:16px; height:16px; background:rgba(255,255,255,0.98); border-radius:4px; transform:translateX(50%) rotate(45deg); box-shadow:-2px -2px 4px rgba(0,0,0,0.03); }
.nav-dropdown-item { display:flex; align-items:center; gap:14px; padding:12px 16px; border-radius:12px; color:#1d1d1f; font-size:0.92rem; font-weight:500; text-decoration:none; transition:all 0.2s ease; cursor:pointer; }
.nav-dropdown-item:hover { background:rgba(46,125,50,0.06); color:#2E7D32; }
.nav-dropdown-item .dropdown-icon { width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.2s; }
.nav-dropdown-item:hover .dropdown-icon { transform:scale(1.08); }
.nav-dropdown-item .dropdown-text { flex:1; }
.nav-dropdown-item .dropdown-title { font-weight:600; font-size:0.9rem; margin-bottom:2px; }
.nav-dropdown-item .dropdown-desc { font-size:0.75rem; color:#86868b; font-weight:400; }
.nav-dropdown-divider { height:1px; background:rgba(0,0,0,0.06); margin:4px 12px; }

/* Cute Section Divider */
.section-divider-cute { display:flex; align-items:center; justify-content:center; gap:16px; padding:60px 0 20px; }
.section-divider-cute .dot { width:6px; height:6px; border-radius:50%; background:#2E7D32; opacity:0.3; }
.section-divider-cute .dot.center { width:10px; height:10px; opacity:0.6; background:linear-gradient(135deg,#2E7D32,#4CAF50); }
.section-divider-cute .line { width:60px; height:2px; border-radius:2px; background:linear-gradient(90deg, transparent, rgba(46,125,50,0.2), transparent); }
.section-divider-cute .diamond { width:12px; height:12px; border:2px solid rgba(46,125,50,0.3); border-radius:3px; transform:rotate(45deg); }

/* Premium Service Cards */
.service-card-premium { position:relative; overflow:hidden; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); }
.service-card-premium::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; border-radius:12px 12px 0 0; transition:height 0.3s; }
.service-card-premium:hover::before { height:5px; }
.service-card-premium::after { content:''; position:absolute; bottom:0; left:20%; right:20%; height:1px; background:linear-gradient(90deg, transparent, var(--card-accent), transparent); opacity:0.4; }
.service-card-premium:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(0,0,0,0.08); }
/* Symmetric corner positions per card */
.service-card-premium .card-corner { position:absolute; width:40px; height:40px; opacity:0.18; transition:opacity 0.3s; }
.service-card-premium:hover .card-corner { opacity:0.35; }
.corner-tr { top:0; right:0; border-top:3px solid; border-right:3px solid; border-radius:0 12px 0 0; }
.corner-tl { top:0; left:0; border-top:3px solid; border-left:3px solid; border-radius:12px 0 0 0; }
.corner-br { bottom:0; right:0; border-bottom:3px solid; border-right:3px solid; border-radius:0 0 12px 0; }
.corner-bl { bottom:0; left:0; border-bottom:3px solid; border-left:3px solid; border-radius:0 0 0 12px; }
.service-card-sky { --card-accent:#0ea5e9; }
.service-card-sky::before { background:linear-gradient(90deg, #0ea5e9, #38bdf8); }
.service-card-sky .card-corner-tl, .service-card-sky .card-corner-br { border-color:#0ea5e9; }
.service-card-amber { --card-accent:#f59e0b; }
.service-card-amber::before { background:linear-gradient(90deg, #f59e0b, #fbbf24); }
.service-card-amber .card-corner-tl, .service-card-amber .card-corner-br { border-color:#f59e0b; }
.service-card-rose { --card-accent:#f43f5e; }
.service-card-rose::before { background:linear-gradient(90deg, #f43f5e, #fb7185); }
.service-card-rose .card-corner-tl, .service-card-rose .card-corner-br { border-color:#f43f5e; }
.service-card-violet { --card-accent:#8b5cf6; }
.service-card-violet::before { background:linear-gradient(90deg, #8b5cf6, #a78bfa); }
.service-card-violet .card-corner-tl, .service-card-violet .card-corner-br { border-color:#8b5cf6; }

/* Premium Footer Styles */
.footer-link { position: relative; color: #64748b; transition: all 0.3s ease; display: inline-block; }
.footer-link::after { content: ''; position: absolute; bottom: -2px; right: 0; width: 0; height: 1.5px; background: #2E7D32; transition: width 0.3s ease; }
.footer-link:hover { color: #2E7D32; transform: translateX(-4px); }
.footer-link:hover::after { width: 100%; right: 0; left: auto; }

.social-btn { width: 44px; height: 44px; border-radius: 14px; background: #f8fafc; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; color: #64748b; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); position: relative; overflow: hidden; }
.social-btn:hover { color: white; background: #2E7D32; border-color: #2E7D32; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(46, 125, 50, 0.2); }
.social-btn::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent); opacity: 0; transition: opacity 0.3s; }
.social-btn:hover::before { opacity: 1; }

.footer-heading { font-size: 0.85rem; font-weight: 800; color: #1e293b; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 2rem; position: relative; display: inline-block; }
.footer-heading::after { content: ''; position: absolute; bottom: -8px; right: 0; width: 24px; height: 2px; background: #2E7D32; border-radius: 2px; }

.footer-contact-item { display: flex; align-items: flex-start; gap: 12px; transition: all 0.3s ease; }
.footer-contact-item:hover { transform: translateX(-4px); }
.footer-contact-item:hover .contact-icon { background: #2E7D32; color: white; transform: scale(1.1); }
.contact-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(46, 125, 50, 0.08); color: #2E7D32; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; flex-shrink: 0; }
.service-card-orange { --card-accent:#f97316; }
.service-card-orange::before { background:linear-gradient(90deg, #f97316, #fb923c); }
.service-card-orange .card-corner-tl, .service-card-orange .card-corner-br { border-color:#f97316; }
.service-card-teal { --card-accent:#14b8a6; }
.service-card-teal::before { background:linear-gradient(90deg, #14b8a6, #2dd4bf); }
.service-card-teal .card-corner-tl, .service-card-teal .card-corner-br { border-color:#14b8a6; }
/* Events slider controls (Netflix style) */
.events-prev, .events-next { 
  position:absolute; 
  top:50%;
  transform: translateY(-50%);
  width:45px; 
  height: 80px;
  background:rgba(0,0,0,0.2); 
  color:#fff; 
  border:none; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  cursor:pointer; 
  z-index:40; 
  transition:all 0.3s; 
  font-size:1.5rem;
  backdrop-filter: blur(8px);
}
.events-prev:hover, .events-next:hover { 
  background:rgba(0,0,0,0.5); 
  width: 50px;
}
.events-prev { left:10px; border-radius: 8px; }
.events-next { right:10px; border-radius: 8px; }
.events-prev::after, .events-next::after {
  content: '';
  position: absolute;
  bottom: 15px;
  width: 30px;
  height: 2px;
  background: #2E7D32;
  opacity: 0;
  transition: opacity 0.3s;
}
.events-prev:hover::after, .events-next:hover::after {
  opacity: 1;
}

.events-indicators { position:absolute; bottom:-24px; left:50%; transform:translateX(-50%); display:flex; gap:6px; z-index:40; }
.events-indicators button { width:8px; height:8px; border-radius:999px; background:rgba(46,125,50,0.25); border:none; padding:0; cursor:pointer; transition:all 0.3s; }
.events-indicators button.active { width:24px; background:#2E7D32; box-shadow:0 2px 8px rgba(46,125,50,0.3); }

/* Custom Footer Animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.hover-bounce:hover { animation: bounce-subtle 0.5s ease infinite; }

.footer-dark { background-color: #121212; }
.footer-link-new { position: relative; transition: all 0.3s ease; }
.footer-link-new:hover { color: #2E7D32; padding-right: 4px; }
.footer-link-new::before { content: '›'; position: absolute; right: -12px; opacity: 0; transition: all 0.3s ease; color: #2E7D32; }
.footer-link-new:hover::before { opacity: 1; right: -8px; }
</style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
<header class="absolute top-0 left-0 right-0 w-full z-[100] glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-primary/5 transition-all duration-300">
<div class="w-full px-6 sm:px-8 lg:px-10">
<div class="flex justify-between items-center h-[72px]">
<!-- Logo Gauche -->
<div class="flex-shrink-0">
<img alt="Logo Gauche" class="h-16 w-auto object-contain" src="/logo.jpg"/>
</div>
<!-- Center Menu -->
<nav class="hidden md:flex items-center gap-10 flex-1 justify-center mx-8">
<a class="text-[17px] font-bold text-primary tracking-wide" href="./">الرئيسية</a>
<div class="nav-item">
<a class="text-[17px] font-semibold text-slate-700 hover:text-primary transition-colors" href="#">عن المكتبة <span class="material-symbols-outlined text-[14px]" style="margin-right:2px;">expand_more</span></a>
<div class="nav-dropdown">
<a class="nav-dropdown-item" href="pages/director-word.html">
<div class="dropdown-icon" style="background:rgba(46,125,50,0.08);color:#2E7D32;"><span class="material-symbols-outlined" style="font-size:1.2rem;">campaign</span></div>
<div class="dropdown-text"><div class="dropdown-title">كلمة مدير المكتبة</div><div class="dropdown-desc">رسالة ترحيبية من إدارة المكتبة</div></div>
</a>
<a class="nav-dropdown-item" href="pages/library-goals.html">
<div class="dropdown-icon" style="background:rgba(245,158,11,0.08);color:#f59e0b;"><span class="material-symbols-outlined" style="font-size:1.2rem;">target</span></div>
<div class="dropdown-text"><div class="dropdown-title">أهداف ومهام المكتبة</div><div class="dropdown-desc">رؤيتنا وأهدافنا الاستراتيجية</div></div>
</a>
<div class="nav-dropdown-divider"></div>
<a class="nav-dropdown-item" href="pages/technical-card.html">
<div class="dropdown-icon" style="background:rgba(139,92,246,0.08);color:#8b5cf6;"><span class="material-symbols-outlined" style="font-size:1.2rem;">credit_card</span></div>
<div class="dropdown-text"><div class="dropdown-title">البطاقة الفنية للمكتبة</div><div class="dropdown-desc">معلومات تقنية وإحصائيات</div></div>
</a>
<a class="nav-dropdown-item" href="pages/internal-regulations.html">
<div class="dropdown-icon" style="background:rgba(14,165,233,0.08);color:#0ea5e9;"><span class="material-symbols-outlined" style="font-size:1.2rem;">gavel</span></div>
<div class="dropdown-text"><div class="dropdown-title">النظام الداخلي للمكتبة</div><div class="dropdown-desc">قواعد ولوائح الاستخدام</div></div>
</a>
</div>
</div>
<div class="nav-item">
<a class="text-[17px] font-semibold text-slate-700 hover:text-primary transition-colors" href="#">خدمات <span class="material-symbols-outlined text-[14px]" style="margin-right:2px;">expand_more</span></a>
<div class="nav-dropdown">
<a class="nav-dropdown-item" href="pages/g.html">
<div class="dropdown-icon" style="background:rgba(46,125,50,0.08);color:#2E7D32;"><span class="material-symbols-outlined" style="font-size:1.2rem;">person_add</span></div>
<div class="dropdown-text"><div class="dropdown-title">الإنخراط في المكتبة</div><div class="dropdown-desc">سجّل للحصول على بطاقة الانخراط</div></div>
</a>
<a class="nav-dropdown-item" href="pages/books-catalog.html">
<div class="dropdown-icon" style="background:rgba(245,158,11,0.08);color:#f59e0b;"><span class="material-symbols-outlined" style="font-size:1.2rem;">library_books</span></div>
<div class="dropdown-text"><div class="dropdown-title">فهرس المكتبة</div><div class="dropdown-desc">تصفح الكتب والمراجع المتاحة</div></div>
</a>
<a class="nav-dropdown-item" href="pages/hall-booking.html">
<div class="dropdown-icon" style="background:rgba(236,72,153,0.08);color:#ec4899;"><span class="material-symbols-outlined" style="font-size:1.2rem;">meeting_room</span></div>
<div class="dropdown-text"><div class="dropdown-title">حجز القاعات</div><div class="dropdown-desc">احجز قاعة للفعاليات والاجتماعات</div></div>
</a>
<div class="nav-dropdown-divider"></div>
<a class="nav-dropdown-item" href="#">
<div class="dropdown-icon" style="background:rgba(244,63,94,0.08);color:#f43f5e;"><span class="material-symbols-outlined" style="font-size:1.2rem;">feedback</span></div>
<div class="dropdown-text"><div class="dropdown-title">فضاء الشكاوى</div><div class="dropdown-desc">أرسل ملاحظاتك واقتراحاتك</div></div>
</a>
</div>
</div>
<div class="nav-item">
<a class="text-[17px] font-semibold text-slate-700 hover:text-primary transition-colors" href="#">النشاطات الثقافية <span class="material-symbols-outlined text-[14px]" style="margin-right:2px;">expand_more</span></a>
<div class="nav-dropdown">
<a class="nav-dropdown-item" href="pages/cultural-activities.html">
<div class="dropdown-icon" style="background:rgba(46,125,50,0.08);color:#2E7D32;"><span class="material-symbols-outlined" style="font-size:1.2rem;">celebration</span></div>
<div class="dropdown-text"><div class="dropdown-title">برنامج النشاطات الثقافية</div><div class="dropdown-desc">الفعاليات والأنشطة القادمة</div></div>
</a>










<a class="nav-dropdown-item" href="#">
<div class="dropdown-icon" style="background:rgba(245,158,11,0.08);color:#f59e0b;"><span class="material-symbols-outlined" style="font-size:1.2rem;">child_care</span></div>
<div class="dropdown-text"><div class="dropdown-title">فضاء الأطفال</div><div class="dropdown-desc">أنشطة ترفيهية وتعليمية للصغار</div></div>
</a>
<div class="nav-dropdown-divider"></div>
<a class="nav-dropdown-item" href="#">
<div class="dropdown-icon" style="background:rgba(139,92,246,0.08);color:#8b5cf6;"><span class="material-symbols-outlined" style="font-size:1.2rem;">menu_book</span></div>
<div class="dropdown-text"><div class="dropdown-title">منتدى الكتاب</div><div class="dropdown-desc">مناقشات أدبية وثقافية</div></div>
</a>
<a class="nav-dropdown-item" href="#">
<div class="dropdown-icon" style="background:rgba(139,92,246,0.08);color:#8b5cf6;"><span class="material-symbols-outlined" style="font-size:1.2rem;">groups</span></div>
<div class="dropdown-text"><div class="dropdown-title">المؤلفين المحليين</div><div class="dropdown-desc">بوابة الكتّاب والمؤلفين المحليين</div></div>
</a>
</div>
</div>
<a class="text-[17px] font-semibold text-slate-700 hover:text-primary transition-colors" href="#">اتصل بنا</a>
<a class="text-[17px] font-semibold text-slate-700 hover:text-primary transition-colors hidden" href="#">اللغة</a>
</nav>
<!-- Logo Droite -->
<div class="flex items-center gap-4 flex-shrink-0">
<button class="hidden lg:flex items-center gap-1.5 text-slate-700 hover:text-primary px-3 py-2 text-[17px] font-semibold">
<span class="material-symbols-outlined text-[22px]">translate</span>
<span>العربية</span>
</button>
<div id="auth-container" class="flex items-center gap-3">
<button class="px-5 py-2.5 text-[17px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all" onclick="document.getElementById('loginOverlay').classList.add('active')">تسجيل الدخول</button>
<button class="px-5 py-2.5 text-[17px] font-bold text-white bg-primary hover:opacity-90 rounded-xl shadow-lg shadow-primary/20 transition-all" onclick="window.location.href='pages/g.html'">التسجيل</button>
</div>
<!-- Profile Dropdown (Hidden by default) -->
<div id="user-profile-menu" class="hidden relative">
<button id="profile-trigger" class="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-all border border-slate-200">
<img id="user-avatar" src="" alt="Profile" class="h-10 w-10 rounded-full object-cover border-2 border-primary/20"/>
<span class="material-symbols-outlined text-slate-400">expand_more</span>
</button>
<div id="profile-dropdown" class="hidden absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
<div class="px-4 py-3 border-b border-slate-100">
<p id="user-display-name" class="text-sm font-bold text-slate-900"></p>
<p id="user-display-email" class="text-xs text-slate-500"></p>
</div>
<div class="py-2">
<a href="pages/profile.html" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-[20px]">person</span>
حسابي
</a>
<a href="pages/orders-history.html" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-[20px]">history</span>
سجل الإعارة
</a>
<a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-[20px]">settings</span>
الإعدادات
</a>
</div>
<div class="border-t border-slate-100 pt-2">
<button id="logout-btn" class="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors">
<span class="material-symbols-outlined text-[20px]">logout</span>
تسجيل الخروج
</button>
</div>
</div>
</div>
<img alt="Ministry Logo" class="h-16 w-auto object-contain" src="/minsitere.png"/>
</div>
</div>
</div>
</header>
<main class="pt-32">
<section class="relative h-[600px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-l from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
<img alt="Modern Library Interior" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFXRCHD49pZ05Psbi-ANuCjarel4ywZEezdx_jK1K1CAmH_ao7xE0hXD9OpLD_IkVCVT6UTeP748_rhCWT13z-9KJqHkcR4mI4QgJzLz6Hm_pz5bKIsyiGMls6I79jelIAvvbF5drl0XF-Z1LiW2c3vtTLzX7jDH4Lb__uWMKYDo3-hGJF0JuaHcDNI4FkeJxcCQxS4GKJUIPBa5EGmB5Cxx2kdTk6jiQW6T8f7qloDp20FqTqQ-Hug-ICoOFtrKrjXlJYdtuKRpY"/>
</div>
<div class="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
<div class="w-full">

<h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">المكتبة الرئيسية للمطالعة العمومية</h1>
<p class="text-2xl md:text-4xl font-bold text-white mb-4">لولاية بجاية</p>
<p class="text-2xl md:text-3xl text-slate-100 mb-4 font-semibold">الشهيد الطاهر عمروشن</p>
<p class="text-lg md:text-xl text-slate-300 mb-8 font-light">ⵜⴰⵎⴽⴻⵔⴷⵉⵝ ⵜⴰⴳⴻⵊⴷⴰⵏⵜ ⵏ ⵜⴴⵓⵔⵉ ⵏ ⴱⴳⴰⵢⴻⵝ</p>
<div class="flex flex-wrap gap-4 justify-center">
<button class="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-xl shadow-primary/30" onclick="window.location.href='pages/g.html'">
<span class="material-symbols-outlined">badge</span>إحصل على بطاقة الإنخراط
</button>
<button class="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all" onclick="window.location.href='pages/books-catalog.html'">
<span class="material-symbols-outlined">search</span>تصفح فهرس المكتبة
</button>
</div>
</div>
</div>
</section>
<section class="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="scroll-reveal delay-100 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-6 group hover:border-primary transition-colors">
<div class="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">menu_book</span>
</div>
<div>
  <p class="text-slate-500 dark:text-slate-400 font-medium mb-1" data-i18n="stat-titles">عدد الكتب</p>
  <h3 class="text-3xl font-bold text-slate-900 dark:text-white leading-none"><span class="animate-count" data-target="${total_titles}">0</span></h3>
<p class="text-xs text-primary mt-2 font-bold">+5% نمو سنوي</p>
</div>
</div>
<div class="scroll-reveal delay-200 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-6 group hover:border-primary transition-colors">
<div class="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">library_add_check</span>
</div>
<div>
  <p class="text-slate-500 dark:text-slate-400 font-medium mb-1" data-i18n="stat-copies">عدد النسخ</p>
  <h3 class="text-3xl font-bold text-slate-900 dark:text-white leading-none"><span class="animate-count" data-target="${total_copies}">0</span></h3>
<p class="text-xs text-primary mt-2 font-bold">+2% مخزون جديد</p>
</div>
</div>
<div class="scroll-reveal delay-300 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-6 group hover:border-primary transition-colors">
<div class="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">group</span>
</div>
<div>
  <p class="text-slate-500 dark:text-slate-400 font-medium mb-1" data-i18n="stat-readers">عدد القراء</p>
  <h3 class="text-3xl font-bold text-slate-900 dark:text-white leading-none"><span class="animate-count" data-target="${total_elements}">0</span></h3>
<p class="text-xs text-primary mt-2 font-bold">+12% إضافات جديدة</p>
</div>
</div>
</div>
</section>

<!-- Cute Events Carousel -->
<section class="events-carousel-section">
<div style="max-width:1280px;margin:0 auto;padding:0 2rem;margin-bottom:20px;" class="scroll-reveal">
<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:4px;">
<span class="material-symbols-outlined" style="color:#2E7D32;font-size:1.3rem;">celebration</span>
<h2 style="color:#1A2E1A;font-size:1.5rem;font-weight:800;margin:0;text-align:center;">النشاطات والفعاليات</h2>
</div>
<p style="color:#607d8b;font-size:0.85rem;margin:0;text-align:center;">اكتشف أحدث الفعاليات الثقافية والنشاطات المقبلة</p>
</div>

<div class="events-slider-wrapper scroll-reveal">
  <button class="events-prev" aria-label="previous">‹</button>
  <div class="events-viewport">
    <div class="events-track">
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=1'">
        <img src="images/event1.png" alt="أمسية ثقافية"/>
        <div class="event-overlay">
          <span class="event-badge">قريباً</span>
          <div class="event-title">أمسية ثقافية أدبية كبرى</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 15 مارس 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=2'">
        <img src="images/event2.png" alt="ورشة أطفال"/>
        <div class="event-overlay">
          <span class="event-badge">مجاني</span>
          <div class="event-title">ورشة القراءة التفاعلية للأطفال</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 22 مارس 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=3'">
        <img src="images/event3.png" alt="معرض كتب"/>
        <div class="event-overlay">
          <span class="event-badge">جديد</span>
          <div class="event-title">المعرض السنوي للكتاب والمخطوطات</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 5 أفريل 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=4'">
        <img src="images/event4.png" alt="أمسية شعرية"/>
        <div class="event-overlay">
          <span class="event-badge">حصري</span>
          <div class="event-title">أمسية شعرية — أصوات من بجاية</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 12 أفريل 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=5'">
        <img src="images/event1.png" alt="نادي الكتاب"/>
        <div class="event-overlay">
          <span class="event-badge">نشط</span>
          <div class="event-title">لقاء نادي القراء الأسبوعي</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> كل سبت</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=6'">
        <img src="images/event2.png" alt="مسابقة"/>
        <div class="event-overlay">
          <span class="event-badge">جوائز</span>
          <div class="event-title">مسابقة أفضل ملخص كتاب للشباب</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 20 ماي 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=7'">
        <img src="images/event3.png" alt="محاضرة"/>
        <div class="event-overlay">
          <span class="event-badge">فكر</span>
          <div class="event-title">محاضرة: تاريخ المكتبات في المغرب العربي</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 1 جوان 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=8'">
        <img src="images/event4.png" alt="دورة تدريبية"/>
        <div class="event-overlay">
          <span class="event-badge">مهارات</span>
          <div class="event-title">دورة أساسيات البحث البيبليوغرافي</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 15 جوان 2026</div>
        </div>
      </div>
      <div class="event-card" onclick="window.location.href='pages/event-details.html?id=9'">
        <img src="images/event1.png" alt="عرض فيلم"/>
        <div class="event-overlay">
          <span class="event-badge">سينما</span>
          <div class="event-title">عرض ومناقشة فيلم سينمائي مقتبس من رواية</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 10 جويلية 2026</div>
        </div>
      </div>
      <div class="event-card">
        <img src="images/event2.png" alt="ورشة خط"/>
        <div class="event-overlay">
          <span class="event-badge">فن</span>
          <div class="event-title">ورشة مبادئ الخط العربي والزخرفة</div>
          <div class="event-date"><span class="material-symbols-outlined" style="font-size:16px;">calendar_today</span> 25 جويلية 2026</div>
        </div>
      </div>
    </div>
  </div>
  <button class="events-next" aria-label="next">›</button>
  <div class="events-indicators" aria-hidden="true"></div>
</div>
</section>

<section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12 scroll-reveal">
<div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:16px;">
<div style="width:60px;height:2px;background:linear-gradient(90deg,#2E7D32,#4CAF50);border-radius:1px;"></div>
<span class="material-symbols-outlined" style="color:#2E7D32;font-size:1.8rem;">info</span>
<div style="width:60px;height:2px;background:linear-gradient(90deg,#4CAF50,#2E7D32);border-radius:1px;"></div>
</div>
<h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">كيفية التسجيل؟</h2>
<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">يسر مكتبتنا أن تعلن عن إمكانية الانخراط الإلكتروني عبر موقعنا الرسمي. يمكنكم التسجيل عن بعد للحصول على بطاقة الانخراط، والاستفادة من مساحة شخصية خاصة. اتبع هذه الخطوات لتصبح منخرطاً.</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Étape 1: Bleu -->
<div class="scroll-reveal-scale delay-100 group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-500/0 group-hover:from-blue-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">edit_square</span>
</div>
<h3 class="font-bold mb-2 text-blue-900 dark:text-blue-100 text-xl relative">1. التسجيل الإلكتروني</h3>
<p class="text-blue-700 dark:text-blue-200 text-base relative">املأ نموذج التسجيل الإلكتروني بمعلوماتك الشخصية</p>
</div>
<!-- Étape 2: Orange -->
<div class="scroll-reveal-scale delay-200 group relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/30 hover:shadow-2xl hover:shadow-orange-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-500/0 group-hover:from-orange-400/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">mail</span>
</div>
<h3 class="font-bold mb-2 text-orange-900 dark:text-orange-100 text-xl relative">2. تأكيد البريد الإلكتروني</h3>
<p class="text-orange-700 dark:text-orange-200 text-base relative">تحقق من بريدك الإلكتروني وأكد عنوانك بالنقر على رابط التحقق الذي أرسلناه لك.</p>
</div>
<!-- Étape 3: Pourpre -->
<div class="scroll-reveal-scale delay-300 group relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg shadow-purple-200/50 dark:shadow-purple-900/30 hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-500/0 group-hover:from-purple-400/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">description</span>
</div>
<h3 class="font-bold mb-2 text-purple-900 dark:text-purple-100 text-xl relative">3. تحميل استمارة التسجيل</h3>
<p class="text-purple-700 dark:text-purple-200 text-base relative">حمل واطبع موقع استمارة التسجيل.</p>
</div>
<!-- Étape 4: Rose -->
<div class="scroll-reveal-scale delay-400 group relative bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-lg shadow-pink-200/50 dark:shadow-pink-900/30 hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-pink-400/0 to-pink-500/0 group-hover:from-pink-400/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">send_to_mobile</span>
</div>
<h3 class="font-bold mb-2 text-pink-900 dark:text-pink-100 text-xl relative">4. إيداع استمارة التسجيل</h3>
<p class="text-pink-700 dark:text-pink-200 text-base relative">امسح ضوئيا (بواسطة الماسح) استمارة التسجيل وحملها في فضائك الخاص بالمنخرط، ثم سلم النسخة الأصلية في مقر المكتبة.</p>
</div>
<!-- Étape 5: Vert -->
<div class="scroll-reveal-scale delay-500 group relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg shadow-green-200/50 dark:shadow-green-900/30 hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-500/0 group-hover:from-green-400/10 group-hover:to-green-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">person</span>
</div>
<h3 class="font-bold mb-2 text-green-900 dark:text-green-100 text-xl relative">5. تفعيل الحساب</h3>
<p class="text-green-700 dark:text-green-200 text-base relative">بمجرد التحقق من ملفك، سيتم تفعيل حسابك وإنشاء بطاقة الانخراط الخاصة بك.</p>
</div>
<!-- Étape 6: Teal (Vidéo) -->
<div class="scroll-reveal-scale delay-500 group relative bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg shadow-teal-200/50 dark:shadow-teal-900/30 hover:shadow-2xl hover:shadow-teal-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center cursor-pointer overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-500/0 group-hover:from-teal-400/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-teal-500/50 group-hover:scale-110 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl">smart_display</span>
</div>
<h3 class="font-bold mb-2 text-teal-900 dark:text-teal-100 text-xl relative">6. فيديو توضيحي</h3>
<p class="text-teal-700 dark:text-teal-200 text-base relative">شاهد هذا الفيديو التوضيحي لمعرفة المزيد عن عملية التسجيل والخدمات.</p>
</div>
</div>

















</section>
<section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16 scroll-reveal">
<div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:16px;">
<div style="width:60px;height:2px;background:linear-gradient(90deg,#2E7D32,#4CAF50);border-radius:1px;"></div>
<span class="material-symbols-outlined" style="color:#2E7D32;font-size:1.8rem;">home</span>
<div style="width:60px;height:2px;background:linear-gradient(90deg,#4CAF50,#2E7D32);border-radius:1px;"></div>
</div>
<h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">خدمات المكتبة الرئيسية للمطالعة العمومية</h2>
<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-6">اكتشف كل ما يمكن أن تقدمه لك المكتبة الرئيسية للمطالعة العمومية لولاية بجاية</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Col 1 (Left): Corners symmetric right-and-left -->
<div class="service-card-premium service-card-sky bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-tr" style="border-color:#0ea5e9;"></div>
<div class="card-corner corner-bl" style="border-color:#0ea5e9;"></div>
<div class="text-sky-500 mb-6">
<span class="material-symbols-outlined text-5xl">child_care</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">فضاء الأطفال</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">تخصيص فضاء للمطالعة العمومية يتكيف مع إحتياجات الطفل بحيث يتم توفير انشطة خاصة</p>
</div>
<!-- Col 2 (Middle): Corners on simple-top (symmetric) -->
<div class="service-card-premium service-card-amber bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-tl" style="border-color:#f59e0b;"></div>
<div class="card-corner corner-tr" style="border-color:#f59e0b;"></div>
<div class="text-amber-500 mb-6">
<span class="material-symbols-outlined text-5xl">menu_book</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">الفهرسة و الإعارة</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">وضع مختلف الأرصدة الوثائقية والخدمات المرتبطة بالمطالعة العمومية وجميع الخدمات الملحقة الأخرى تحت تصرف المستعملين</p>
</div>
<!-- Col 3 (Right): Corners symmetric top-and-bottom -->
<div class="service-card-premium service-card-rose bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-tr" style="border-color:#f43f5e;"></div>
<div class="card-corner corner-br" style="border-color:#f43f5e;"></div>
<div class="text-rose-500 mb-6">
<span class="material-symbols-outlined text-5xl">import_contacts</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">نشر روح المطالعة</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">السعي إلى إرساء ثقافة المطالعة لدى جميع شرائح المجتمع.</p>
</div>
<!-- Col 4 (Left): Corners symmetric right-and-left -->
<div class="service-card-premium service-card-violet bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-tl" style="border-color:#8b5cf6;"></div>
<div class="card-corner corner-br" style="border-color:#8b5cf6;"></div>
<div class="text-violet-500 mb-6">
<span class="material-symbols-outlined text-5xl">hub</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">الرقمنة و التشبيك</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">تسهيل الولوج إلى المعلومة باستعمال التقنيات الحديثة بغرض تحسين الخدمات المقدمة</p>
</div>
<!-- Col 5 (Middle): Corners symmetric left-and-right -->
<div class="service-card-premium service-card-orange bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-tl" style="border-color:#f97316;"></div>
<div class="card-corner corner-tr" style="border-color:#f97316;"></div>
<div class="text-orange-500 mb-6">
<span class="material-symbols-outlined text-5xl">event</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">النشاطات و المعارض</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">القيام بأنشطة ثقافية مختلفة ومتنوعة ذات صلة بالكتاب موجهة لجميع الفئات كالمعارض , المهرجانات , الندوات , الأيام الدراسية وغيرها</p>
</div>
<!-- Col 6 (Right): Corners symmetric left-and-right -->
<div class="service-card-premium service-card-teal bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow text-center">
<div class="card-corner corner-bl" style="border-color:#14b8a6;"></div>
<div class="card-corner corner-br" style="border-color:#14b8a6;"></div>
<div class="text-teal-500 mb-6">
<span class="material-symbols-outlined text-5xl">accessible</span>
</div>
<h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">ذوي الإحتياجات الخاصة</h3>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">تسهيل وتوفير الوسائل الضرورية لفئة ذوي الإحتياجات الخاصة لتمكينهم من الإستفادة بخدمات المكتبة</p>
</div>
</div>
</section>




</main>

<!-- Minimalist premium separator -->
<div class="py-20 flex flex-col items-center justify-center gap-4 scroll-reveal">
  <div class="w-12 h-[1px] bg-primary/20"></div>
  <div class="w-2 h-2 rounded-full border border-primary/40"></div>
  <div class="w-12 h-[1px] bg-primary/20"></div>
</div>

<footer class="footer-dark text-gray-400 pt-16 pb-8 relative overflow-hidden" dir="rtl">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 scroll-reveal">
      
      <!-- Section 1: Logo & Mission -->
      <div class="space-y-6">
        <h3 class="text-primary font-bold text-xl tracking-tight">المكتبة الرئيسية لبجاية</h3>
        <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
          مهمتنا هي إتاحة الوصول إلى المعرفة والتعلم والمعلومات والثقافة لجميع أفراد المجتمع.
        </p>
        <div class="flex gap-3">
          <a href="#" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
             <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
             <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
          </a>
        </div>
      </div>

      <!-- Section 2: Quick Links -->
      <div class="space-y-4">
        <h3 class="text-primary font-bold text-xl">روابط سريعة</h3>
        <ul class="space-y-3">
          <li><a href="./" class="footer-link-new hover:text-primary transition-all font-medium">› الرئيسية</a></li>
          <li><a href="pages/books-catalog.html" class="footer-link-new hover:text-primary transition-all font-medium">› فهرس الكتب</a></li>
          <li><a href="#" class="footer-link-new hover:text-primary transition-all font-medium">› النشاطات</a></li>
          <li><a href="#" class="footer-link-new hover:text-primary transition-all font-medium">› اتصل بنا</a></li>
        </ul>
      </div>

      <!-- Section 3: Hours -->
      <div class="space-y-4">
        <h3 class="text-primary font-bold text-xl">توقيت العمل</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex justify-between border-b border-white/5 pb-2"><span>الأحد - الخميس:</span> <span class="text-white font-medium text-left">08:30 - 23:00</span></li>
          <li class="flex justify-between border-b border-white/5 pb-2"><span>السبت:</span> <span class="text-white font-medium text-left">09:00 - 23:00</span></li>
          <li class="flex justify-between"><span>الجمعة:</span> <span class="text-red-400 font-medium italic text-left">مغلق</span></li>
        </ul>
      </div>

      <!-- Section 4: Contact -->
      <div class="space-y-6">
        <h3 class="text-primary font-bold text-xl">اتصل بنا</h3>
        <ul class="space-y-4 text-sm">
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-white/50 text-xl">call</span>
            <span class="hover:text-white transition-colors cursor-pointer tracking-wider">030176933 - 030176468 </span>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-white/50 text-xl">mail</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bplpbejaia@gmail.com" target="_blank" class="hover:text-primary transition-colors cursor-pointer">bplpbejaia@gmail.com</a>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-white/50 text-xl">location_on</span>
            <span class="hover:text-white transition-colors cursor-pointer leading-relaxed">نهج كريم بلقاسم 'أعمريو' ,بجاية , الجزائر</span>
          </li>
        </ul>
      </div>

    </div>
    
    <div class="pt-8 border-t border-white/5 text-center">
      <p class="text-sm tracking-wide opacity-60">© 2026 المكتبة الرئيسية للمطالعة العمومية بجاية. جميع الحقوق محفوظة. بواسطة <a href="https://geniesysteme.com" target="_blank" class="hover:text-primary transition-colors text-white font-bold underline">GenieSysteme</a></p>
    </div>
  </div>
</footer>

<!-- Login Modal -->
<div id="loginOverlay" class="login-overlay" onclick="if(event.target===this)this.classList.remove('active')">
<div class="login-modal">
<button class="close-btn" onclick="document.getElementById('loginOverlay').classList.remove('active')">
<span class="material-symbols-outlined" style="font-size:20px;">close</span>
</button>
<div class="modal-icon">
<span class="material-symbols-outlined" style="font-size:2.2rem;color:white;">lock_open</span>
</div>
<h2>تسجيل الدخول</h2>
<p class="subtitle">مرحباً بعودتك! أدخل بياناتك للدخول إلى حسابك</p>
<div class="input-group">
<span class="material-symbols-outlined">person</span>
<input type="text" placeholder="اسم المستخدم أو البريد الإلكتروني" id="loginUsername"/>
</div>
<div class="input-group">
<span class="material-symbols-outlined">lock</span>
<input type="password" placeholder="كلمة المرور" id="loginPassword"/>
</div>
<button class="login-btn" onclick="handleLogin()">دخول</button>
<a href="#" class="forgot-link">نسيت كلمة المرور؟</a>
<div class="divider">أو</div>
<p class="register-link">ليس لديك حساب؟ <a href="pages/g.html">سجّل الآن</a></p>
</div>
</div>

<style>
  @keyframes profileDropdownShow {
    from { opacity: 0; transform: translateY(-10px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .profile-dropdown-animate {
    animation: profileDropdownShow 0.2s ease-out forwards;
    transform-origin: top left;
  }
</style>
<script>
// Seed example profiles on first load
(function() {
  if (!localStorage.getItem('libraryUsersSeeded')) {
    const exampleUsers = [
      {
        nom: 'بن سالم',
        prenom: 'أحمد',
        genre: 'masculin',
        naissance: '1995-03-12',
        lieuNaissance: 'بجاية',
        nationalite: 'algerie',
        nin: '19950312001234',
        profession: 'مهندس معلوماتية',
        photo: '',
        cniFront: 'uploaded',
        cniBack: 'uploaded',
        adresse: 'حي 500 مسكن، عمارة 12',
        ville: 'بجاية',
        codePostal: '06000',
        telephone: '0555123456',
        whatsapp: '0555123456',
        email: 'ahmed@example.com',
        socialMedia: { facebook: 'ahmed.bensalem', twitter: null, instagram: 'ahmed_bs', linkedin: null },
        username: 'ahmed',
        password: '1234',
        libraryNumber: 'BJA-240301',
        conditionsAccepted: true
      },
      {
        nom: 'زهراء',
        prenom: 'فاطمة',
        genre: 'feminin',
        naissance: '2000-07-22',
        lieuNaissance: 'سطيف',
        nationalite: 'algerie',
        nin: '20000722005678',
        profession: 'طالبة جامعية',
        photo: '',
        cniFront: 'uploaded',
        cniBack: '',
        adresse: 'شارع الاستقلال، رقم 45',
        ville: 'سطيف',
        codePostal: '19000',
        telephone: '0661987654',
        whatsapp: '0661987654',
        email: 'fatima@example.com',
        socialMedia: { facebook: null, twitter: null, instagram: 'fatima_zahra', linkedin: null },
        username: 'fatima',
        password: '1234',
        libraryNumber: 'BJA-240302',
        conditionsAccepted: true
      },
      {
        nom: 'بوعلام',
        prenom: 'كريم',
        genre: 'masculin',
        naissance: '1988-11-05',
        lieuNaissance: 'الجزائر العاصمة',
        nationalite: 'algerie',
        nin: '19881105009012',
        profession: 'أستاذ جامعي',
        photo: '',
        cniFront: 'uploaded',
        cniBack: 'uploaded',
        adresse: 'حي المعرفة، فيلا 8',
        ville: 'بجاية',
        codePostal: '06000',
        telephone: '0770456789',
        whatsapp: '0770456789',
        email: 'karim@example.com',
        socialMedia: { facebook: 'karim.boualem', twitter: 'karim_b', instagram: null, linkedin: 'karimboualem' },
        username: 'karim',
        password: '1234',
        libraryNumber: 'BJA-240303',
        conditionsAccepted: true
      }
    ];
    const existing = JSON.parse(localStorage.getItem('libraryUsers') || '[]');
    const merged = [...existing, ...exampleUsers];
    localStorage.setItem('libraryUsers', JSON.stringify(merged));
    localStorage.setItem('libraryUsersSeeded', 'true');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('libraryUser'));
  const authContainer = document.getElementById('auth-container');
  const userProfileMenu = document.getElementById('user-profile-menu');
  const profileTrigger = document.getElementById('profile-trigger');
  const profileDropdown = document.getElementById('profile-dropdown');
  const userAvatar = document.getElementById('user-avatar');
  const userDisplayName = document.getElementById('user-display-name');
  const userDisplayEmail = document.getElementById('user-display-email');
  const logoutBtn = document.getElementById('logout-btn');

  if (user) {
    authContainer.classList.add('hidden');
    userProfileMenu.classList.remove('hidden');
    userAvatar.src = user.photo || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.prenom + ' ' + user.nom) + '&background=2E7D32&color=fff';
    userDisplayName.textContent = user.prenom + ' ' + user.nom;
    userDisplayEmail.textContent = user.email;
  }

  profileTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = profileDropdown.classList.contains('hidden');
    if (isHidden) {
      profileDropdown.classList.remove('hidden');
      profileDropdown.classList.add('profile-dropdown-animate');
    } else {
      profileDropdown.classList.add('hidden');
    }
  });

  document.addEventListener('click', () => {
    profileDropdown.classList.add('hidden');
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('libraryUser');
    window.location.reload();
  });
});

async function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!username || !password) {
    alert('يرجى إدخال اسم المستخدم وكلمة المرور');
    return;
  }
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok && data.user) {
      if (data.isAdmin && data.adminUrl) {
        // Admin user - store admin session and redirect to admin panel
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        window.location.href = data.adminUrl;
        return;
      }
      localStorage.setItem('libraryUser', JSON.stringify(data.user));
      document.getElementById('loginOverlay').classList.remove('active');
      window.location.reload();
    } else {
      alert(data.error || 'اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  } catch (err) {
    console.error(err);
    alert('تعذر الاتصال بالخادم حالياً');
  }
}

// Close login modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('loginOverlay').classList.remove('active');
  }
});

// Carousel is now CSS-only (uses @keyframes infiniteScroll in the style block)
// No JS needed for the smooth infinite scroll

// Count-up animation for stat numbers
function animateCounts() {
  const els = document.querySelectorAll('.animate-count');
  if (!els.length) return;
  els.forEach(el => {
    const target = Number(el.getAttribute('data-target')) || 0;
    const duration = 1600;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  });
}
document.addEventListener('DOMContentLoaded', animateCounts);

// Scroll Reveal Observer
(function() {
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
})();

// Events slider (snap diaporama) initialization
function initEventsSlider() {
  const viewport = document.querySelector('.events-viewport');
  const track = document.querySelector('.events-track');
  if (!viewport || !track) return;
  const cards = Array.from(track.querySelectorAll('.event-card'));
  if (!cards.length) return;

  let current = 0;
  const indicators = document.querySelector('.events-indicators');
  indicators.innerHTML = '';

  cards.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.dataset.index = i;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    indicators.appendChild(btn);
  });

  function updateIndicators() {
    const dots = indicators.querySelectorAll('button');
    dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === current));
  }

  function goTo(index) {
    current = (index + cards.length) % cards.length;
    const card = cards[current];
    // Center the card in the viewport
    const left = card.offsetLeft - (viewport.clientWidth / 2) + (card.clientWidth / 2);
    viewport.scrollTo({ left, behavior: 'smooth' });
    updateIndicators();
  }

  const prevBtn = document.querySelector('.events-prev');
  const nextBtn = document.querySelector('.events-next');
  // Revert Arrows to correct mapping: Prev=Left button (-1), Next=Right button (+1)
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Drag / swipe support
  let pointerActive = false;
  let startX = 0;
  let startScroll = 0;
  viewport.addEventListener('pointerdown', (e) => {
    pointerActive = true;
    startX = e.clientX;
    startScroll = viewport.scrollLeft;
    viewport.style.scrollBehavior = 'auto';
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove', (e) => {
    if (!pointerActive) return;
    const dx = startX - e.clientX;
    viewport.scrollLeft = startScroll + dx;
  });
  viewport.addEventListener('pointerup', (e) => {
    pointerActive = false;
    viewport.releasePointerCapture(e.pointerId);
    viewport.style.scrollBehavior = 'smooth';
    const dx = startX - e.clientX;
    if (Math.abs(dx) > 60) {
      if (dx > 0) goTo(current + 1); else goTo(current - 1);
    } else {
      // snap to nearest
      let nearest = 0; let nearestDist = Infinity;
      cards.forEach((c, i) => {
        const center = c.offsetLeft + c.clientWidth / 2;
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        const d = Math.abs(center - viewportCenter);
        if (d < nearestDist) { nearestDist = d; nearest = i; }
      });
      goTo(nearest);
    }
  });

  // Recompute on resize
  window.addEventListener('resize', () => setTimeout(() => goTo(current), 120));

  // Start centered on first card
  setTimeout(() => goTo(0), 120);

  // Auto-scroll every 1.5 seconds for smoother movement
  let autoTimer = setInterval(() => {
    if (!pointerActive) goTo(current + 1);
  }, 1500);
  
  const wrapper = document.querySelector('.events-slider-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoTimer));
    wrapper.addEventListener('mouseleave', () => { 
      autoTimer = setInterval(() => {
        if (!pointerActive) goTo(current + 1);
      }, 1500); 
    });
  }
}

document.addEventListener('DOMContentLoaded', initEventsSlider);
</script>

<script>
// Preload books catalog resources for instant navigation
window.addEventListener('load', function() {
  setTimeout(function() {
    // Prefetch catalog page
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/pages/books-catalog.html';
    document.head.appendChild(link);

    // Preload book cover images
    var covers = ['/images/1.webp', '/images/3.webp', '/images/book1.jpg'];
    covers.forEach(function(src) {
      var img = new Image();
      img.src = src;
    });

    // Prefetch books API data so it's cached
    fetch('/api/books/list?limit=20&offset=0').catch(function(){});
    fetch('/api/books/filters').catch(function(){});
  }, 2000);
});
</script>
<script src="/js/mobile-menu.js"></script>
</body></html>`;

    let finalHtml = html;
    if (finalHtml.includes('</body>')) {
      finalHtml = finalHtml.replace('</body>', '<script src="/js/i18n.js"></script></body>');
    }
    reply.type('text/html').send(finalHtml);
  } catch (err) {
    fastify.log.error(err);
    reply.status(500).send('Error: ' + err.message);
  }
});

fastify.get('/favicon.ico', (request, reply) => {
  reply.status(204).send();
});

// Serve HTML pages from pages folder
fastify.get('/pages/:page', async (request, reply) => {
  try {
    const { page } = request.params;
    const filePath = path.join(__dirname, 'pages', page);

    // Security: prevent directory traversal
    if (!filePath.startsWith(path.join(__dirname, 'pages'))) {
      return reply.status(403).send('Forbidden');
    }

    let content = readFileSync(filePath, 'utf-8');
    if (content.includes('</body>')) {
      content = content.replace('</body>', '<script src="/js/i18n.js"></script></body>');
    }
    reply.type('text/html').send(content);
  } catch (err) {
    fastify.log.error(err);
    reply.status(404).send('Not Found');
  }
});



const port = process.env.PORT || 3001;

fastify.listen({ port: port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});



