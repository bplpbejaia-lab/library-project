/**
 * Mobile Navigation Menu — Library Project
 * Auto-injects hamburger menu + slide-in panel on all pages
 */
(function () {
    'use strict';

    function revealMaterialSymbolsWhenReady() {
        const root = document.documentElement;
        if (!document.fonts || !document.fonts.load) {
            return;
        }
        if (document.fonts.check('24px "Material Symbols Outlined"')) {
            root.classList.add('material-symbols-ready');
            return;
        }
        document.fonts.load('24px "Material Symbols Outlined"')
            .then(() => root.classList.add('material-symbols-ready'))
            .catch(() => {});
    }

    revealMaterialSymbolsWhenReady();

    // Only run on mobile/tablet
    function shouldInit() {
        return window.innerWidth <= 1024;
    }

    function showMenuToast(message) {
        let container = document.getElementById('mobileToastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'mobileToastContainer';
            container.style.cssText = 'position:fixed;top:16px;right:16px;z-index:20000;display:flex;flex-direction:column;gap:10px;max-width:min(340px,calc(100vw - 32px));pointer-events:none;';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = 'pointer-events:auto;background:#fff;border:1px solid #dbeafe;border-right:5px solid #2E7D32;box-shadow:0 12px 28px rgba(15,23,42,.14);padding:12px 14px;border-radius:12px;font-weight:700;color:#0f172a;direction:rtl;';
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity .25s ease';
            setTimeout(() => toast.remove(), 260);
        }, 3200);
    }

    // Detect if we're on a sub-page (inside /pages/) or root
    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? '../' : '';
    const pagePrefix = isSubPage ? '../pages/' : 'pages/';

    // Build mobile menu HTML
    function createMobileMenu() {
        // Hamburger Button
        const btn = document.createElement('button');
        btn.className = 'mobile-menu-btn';
        btn.setAttribute('aria-label', 'القائمة');
        btn.setAttribute('id', 'mobileMenuBtn');
        btn.innerHTML = '<span></span><span></span><span></span>';

        // Overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        overlay.id = 'mobileNavOverlay';

        // Panel
        const panel = document.createElement('div');
        panel.className = 'mobile-nav-panel';
        panel.id = 'mobileNavPanel';
        panel.innerHTML = `
            <div class="mobile-nav-header">
                <img src="${prefix}images/c.PNG" alt="Logo" class="mobile-logo" />
                <button class="mobile-nav-close" id="mobileNavClose" aria-label="إغلاق">
                    <span class="material-symbols-outlined" style="font-size:20px;">close</span>
                </button>
            </div>
            <div class="mobile-nav-links">
                <a href="${prefix}./">
                    <span class="material-symbols-outlined">home</span>
                    الرئيسية
                </a>
                <div class="mobile-nav-divider"></div>
                <div class="mobile-nav-section-title">عن المكتبة</div>
                <a href="${pagePrefix}director-word.html">
                    <span class="material-symbols-outlined">campaign</span>
                    كلمة مدير المكتبة
                </a>
                <a href="${pagePrefix}library-goals.html">
                    <span class="material-symbols-outlined">target</span>
                    أهداف ومهام المكتبة
                </a>
                <a href="${pagePrefix}technical-card.html">
                    <span class="material-symbols-outlined">credit_card</span>
                    البطاقة الفنية للمكتبة
                </a>
                <a href="${pagePrefix}internal-regulations.html">
                    <span class="material-symbols-outlined">gavel</span>
                    النظام الداخلي للمكتبة
                </a>
                <div class="mobile-nav-divider"></div>
                <div class="mobile-nav-section-title">خدمات</div>
                <a href="${pagePrefix}g.html">
                    <span class="material-symbols-outlined">person_add</span>
                    الإنخراط في المكتبة
                </a>
                <a href="${pagePrefix}books-catalog.html">
                    <span class="material-symbols-outlined">library_books</span>
                    فهرس المكتبة
                </a>
                <a href="${pagePrefix}hall-booking.html">
                    <span class="material-symbols-outlined">meeting_room</span>
                    حجز القاعات
                </a>
                <div class="mobile-nav-divider"></div>
                <div class="mobile-nav-section-title">النشاطات الثقافية</div>
                <a href="#">
                    <span class="material-symbols-outlined">celebration</span>
                    برنامج النشاطات الثقافية
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">child_care</span>
                    فضاء الأطفال
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">menu_book</span>
                    منتدى الكتاب
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">groups</span>
                    المؤلفين المحليين
                </a>
                <div class="mobile-nav-divider"></div>
                <a href="#">
                    <span class="material-symbols-outlined">call</span>
                    اتصل بنا
                </a>
            </div>
            <div class="mobile-nav-actions" id="mobileNavActions">
                <button class="btn-mobile-login" id="mobileLoginBtn">
                    <span class="material-symbols-outlined" style="font-size:20px;">login</span>
                    تسجيل الدخول
                </button>
                <button class="btn-mobile-register" onclick="window.location.href='${pagePrefix}g.html'">
                    <span class="material-symbols-outlined" style="font-size:20px;">person_add</span>
                    التسجيل
                </button>
            </div>
        `;

        return { btn, overlay, panel };
    }

    function injectMenu() {
        // Check if already injected
        if (document.getElementById('mobileMenuBtn')) return;

        const { btn, overlay, panel } = createMobileMenu();

        // Find the header
        const header = document.querySelector('header');
        if (!header) return;

        // Find the flex container inside header
        const headerFlex = header.querySelector('.flex.justify-between');
        if (!headerFlex) return;

        // Find the right side actions area
        const rightSide = headerFlex.querySelector('.flex.items-center.gap-4.flex-shrink-0')
            || headerFlex.lastElementChild;

        // Insert hamburger before the right side or at the end
        if (rightSide) {
            headerFlex.insertBefore(btn, rightSide);
        } else {
            headerFlex.appendChild(btn);
        }

        // Add overlay and panel to body
        document.body.appendChild(overlay);
        document.body.appendChild(panel);

        // Event listeners
        btn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);
        document.getElementById('mobileNavClose').addEventListener('click', closeMenu);

        // Login button in mobile menu
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        if (mobileLoginBtn) {
            mobileLoginBtn.addEventListener('click', function () {
                closeMenu();
                // Try to open the login overlay
                const loginOverlay = document.getElementById('loginOverlay');
                if (loginOverlay) {
                    loginOverlay.classList.add('active');
                    loginOverlay.style.display = 'flex';
                }
            });
        }

        // Check if user is logged in
        updateMobileNavForUser();

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    function toggleMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const overlay = document.getElementById('mobileNavOverlay');
        const panel = document.getElementById('mobileNavPanel');

        btn.classList.toggle('active');
        overlay.classList.toggle('active');
        panel.classList.toggle('active');

        // Prevent body scroll
        document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const overlay = document.getElementById('mobileNavOverlay');
        const panel = document.getElementById('mobileNavPanel');

        if (btn) btn.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (panel) panel.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateMobileNavForUser() {
        try {
            const user = JSON.parse(localStorage.getItem('libraryUser'));
            const actions = document.getElementById('mobileNavActions');
            if (user && actions) {
                actions.innerHTML = `
                    <a href="${pagePrefix}profile.html" style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;background:#f0fdf4;border:1.5px solid #bbf7d0;text-decoration:none;color:#1e293b;font-weight:600;">
                        <img src="${user.photo || 'https://ui-avatars.com/api/?name=' + encodeURIComponent((user.prenom || '') + ' ' + (user.nom || '')) + '&background=2E7D32&color=fff'}"
                             alt="Profile" style="width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid #2E7D32;">
                        <div>
                            <div style="font-size:0.95rem;font-weight:700;">${user.prenom || ''} ${user.nom || ''}</div>
                            <div style="font-size:0.75rem;color:#64748b;">${user.email || ''}</div>
                        </div>
                    </a>
                    <a href="${pagePrefix}orders-history.html" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;text-decoration:none;color:#334155;font-weight:600;font-size:0.9rem;">
                        <span class="material-symbols-outlined" style="font-size:20px;color:#94a3b8;">history</span>
                        سجل الإعارة
                    </a>
                    <button onclick="localStorage.removeItem('libraryUser');window.location.reload();" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border-radius:14px;border:1.5px solid #fecaca;background:#fff5f5;color:#dc2626;font-weight:700;font-size:0.9rem;cursor:pointer;width:100%;font-family:inherit;">
                        <span class="material-symbols-outlined" style="font-size:20px;">logout</span>
                        تسجيل الخروج
                    </button>
                `;
            }
        } catch (e) {
            // Silently fail
        }
    }

    // Initialize
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectMenu);
        } else {
            injectMenu();
        }
    }

    // Global support for Enter key login & Escape modal dismiss
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const loginOverlay = document.getElementById('loginOverlay');
            if (loginOverlay && loginOverlay.classList.contains('active')) {
                if (typeof window.handleLogin === 'function') {
                    window.handleLogin();
                }
            }
        }
    });

    // Global support for Forgot Password link
    window.handleForgotPassword = async function() {
        const lang = localStorage.getItem('lang') || 'ar';
        let promptMsg = 'الرجاء إدخال البريد الإلكتروني الخاص بك لاستعادة كلمة المرور:';
        if (lang === 'fr') promptMsg = 'Veuillez saisir votre adresse e-mail pour réinitialiser votre mot de passe :';
        else if (lang === 'en') promptMsg = 'Please enter your email address to reset your password:';
        
        const email = prompt(promptMsg);
        if (!email) return;
        
        try {
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() })
            });
            const data = await response.json();
            if (response.ok) {
                let successMsg = 'تم إرسال كلمة مرور مؤقتة إلى بريدك الإلكتروني بنجاح. يرجى مراجعة علبة الوارد.';
                if (lang === 'fr') successMsg = 'Un mot de passe temporaire a été envoyé avec succès à votre e-mail.';
                else if (lang === 'en') successMsg = 'A temporary password has been successfully sent to your email.';
                showMenuToast(successMsg);
            } else {
                showMenuToast(data.error || (lang === 'fr' ? 'Erreur' : 'خطأ في إرسال البريد'));
            }
        } catch (err) {
            console.error(err);
            showMenuToast(lang === 'fr' ? 'Erreur de connexion' : 'خطأ في الاتصال بالخادم');
        }
    };

    // Bind event to forgot links programmatically
    function bindForgotLinks() {
        document.querySelectorAll('.forgot-link').forEach(el => {
            el.removeAttribute('href');
            el.style.cursor = 'pointer';
            el.setAttribute('onclick', 'handleForgotPassword()');
        });
    }

    document.addEventListener('DOMContentLoaded', bindForgotLinks);
    if (document.readyState !== 'loading') bindForgotLinks();
    setInterval(bindForgotLinks, 1000);

    init();

    // Re-check on resize (in case user resizes window)
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (!document.getElementById('mobileMenuBtn')) {
                injectMenu();
            }
        }, 250);
    });
})();
