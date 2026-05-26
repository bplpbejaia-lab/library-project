// Universal i18n Translation Script for Library Project
// Supports Arabic (ar), French (fr), and English (en)

const i18n = {
    // Translation dictionary
    translations: {
        ar: {
            dir: "rtl",
            lang: "ar",
            // Navbar
            "nav-home": "الرئيسية",
            "nav-about": "عن المكتبة",
            "nav-director": "كلمة مدير المكتبة",
            "nav-goals": "أهداف ومهام المكتبة",
            "nav-card": "البطاقة الفنية للمكتبة",
            "nav-regulations": "النظام الداخلي للمكتبة",
            "nav-services": "خدمات",
            "nav-join": "الإنخراط في المكتبة",
            "nav-catalog": "فهرس المكتبة",
            "nav-hall": "حجز القاعات",
            "nav-complaints": "فضاء الشكاوى",
            "nav-activities": "النشاطات الثقافية",
            "nav-prog": "برنامج النشاطات الثقافية",
            "nav-kids": "فضاء الأطفال",
            "nav-forum": "منتدى الكتاب",
            "nav-authors": "المؤلفين المحليين",
            "nav-contact": "اتصل بنا",
            "nav-login": "تسجيل الدخول",
            "nav-register": "التسجيل",
            "nav-profile": "حسابي",
            "nav-history": "سجل الإعارة",
            "nav-logout": "تسجيل الخروج",
            "nav-director-desc": "رسالة ترحيبية من إدارة المكتبة",
            "nav-goals-desc": "رؤيتنا وأهدافنا الاستراتيجية",
            "nav-card-desc": "معلومات تقنية وإحصائيات",
            "nav-regulations-desc": "قواعد ولوائح الاستخدام",
            "nav-join-desc": "سجّل للحصول على بطاقة الانخراط",
            "nav-catalog-desc": "تصفح الكتب والمراجع المتاحة",
            "nav-hall-desc": "احجز قاعة للفعاليات والاجتماعات",
            "nav-complaints-desc": "أرسل ملاحظاتك واقتراحاتك",
            "nav-prog-desc": "الفعاليات والأنشطة القادمة",
            "nav-kids-desc": "أنشطة ترفيهية وتعليمية للصغار",
            "nav-forum-desc": "مناقشات أدبية وثقافية",
            "nav-authors-desc": "بوابة الكتّاب والمؤلفين المحليين",

            // General / Auth Modal
            "login-title": "تسجيل الدخول",
            "login-subtitle": "مرحباً بك مجدداً في فضائك الخاص",
            "login-username-placeholder": "رمز القارئ أو البريد الإلكتروني",
            "login-password-placeholder": "كلمة المرور",
            "login-btn": "تسجيل الدخول",
            "login-forgot": "نسيت كلمة المرور؟",
            "login-no-account": "ليس لديك حساب؟",
            "login-register-link": "سجل الآن",
            "close": "إغلاق",

            // Footer
            "footer-desc": "المكتبة الرئيسية للمطالعة العمومية لولاية بجاية - فضاء للمعرفة، الثقافة والإبداع لجميع الفئات.",
            "footer-links-title": "روابط سريعة",
            "footer-contact-title": "اتصل بنا",
            "footer-address": "شارع الحرية، بجاية، الجزائر",
            "footer-rights": "جميع الحقوق محفوظة © 2026 المكتبة الرئيسية للمطالعة العمومية لولاية بجاية",

            // Homepage Hero
            "hero-title": "المكتبة الرئيسية للمطالعة العمومية",
            "hero-subtitle": "لولاية بجاية",
            "hero-chahid": "الشهيد الطاهر عمروشن",
            "hero-btn-card": "إحصل على بطاقة الإنخراط",
            "hero-btn-catalog": "تصفح فهرس المكتبة",

            // Stats
            "stat-titles": "عدد الكتب",
            "stat-copies": "عدد النسخ",
            "stat-readers": "عدد القراء",

            // Events
            "events-section-title": "النشاطات والفعاليات",
            "events-section-subtitle": "اكتشف أحدث الفعاليات الثقافية والنشاطات المقبلة",
            "event-card-soon": "قريباً",
            "event-card-free": "مجاني",
            "event-card-new": "جديد",
            "event-card-exclusive": "حصري",
            "event-card-active": "نشط",
            "event-card-prizes": "جوائز",
            "event-card-think": "فكر",
            "event-card-skills": "مهارات",
            "event-card-cinema": "سينما",
            "event-card-art": "فن",

            // Registration Steps
            "reg-title": "كيفية التسجيل؟",
            "reg-subtitle": "يسر مكتبتنا أن تعلن عن إمكانية الانخراط الإلكتروني عبر موقعنا الرسمي. يمكنكم التسجيل عن بعد للحصول على بطاقة الانخراط، والاستفادة من مساحة شخصية خاصة. اتبع هذه الخطوات لتصبح منخرطاً.",
            "step-1-title": "1. التسجيل الإلكتروني",
            "step-1-desc": "املأ نموذج التسجيل الإلكتروني بمعلوماتك الشخصية",
            "step-2-title": "2. تأكيد البريد الإلكتروني",
            "step-2-desc": "تحقق من بريدك الإلكتروني وأكد عنوانك بالنقر على رابط التحقق الذي أرسلناه لك.",
            "step-3-title": "3. تحميل استمارة التسجيل",
            "step-3-desc": "حمل واطبع موقع استمارة التسجيل.",
            "step-4-title": "4. إيداع استمارة التسجيل",
            "step-4-desc": "امسح ضوئيا (بواسطة الماسح) استمارة التسجيل وحملها في فضائك الخاص بالمنخرط، ثم سلم النسخة الأصلية في مقر المكتبة.",
            "step-5-title": "5. تفعيل الحساب",
            "step-5-desc": "بمجرد التحقق من ملفك، سيتم تفعيل حسابك وإنشاء بطاقة الانخراط الخاصة بك.",
            "step-6-title": "6. فيديو توضيحي",
            "step-6-desc": "شاهد هذا الفيديو التوضيحي لمعرفة المزيد عن عملية التسجيل والخدمات.",

            // Services
            "services-title": "خدمات المكتبة الرئيسية للمطالعة العمومية",
            "services-subtitle": "اكتشف كل ما يمكن أن تقدمه لك المكتبة الرئيسية للمطالعة العمومية لولاية بجاية",
            "service-1-title": "فضاء الأطفال",
            "service-1-desc": "تخصيص فضاء للمطالعة العمومية يتكيف مع إحتياجات الطفل بحيث يتم توفير انشطة خاصة",
            "service-2-title": "الفهرسة و الإعارة",
            "service-2-desc": "وضع مختلف الأرصدة الوثائقية والخدمات المرتبطة بالمطالعة العمومية وجميع الخدمات الملحقة الأخرى تحت تصرف المستعملين",
            "service-3-title": "نشر روح المطالعة",
            "service-3-desc": "السعي إلى إرساء ثقافة المطالعة لدى جميع شرائح المجتمع.",
            "service-4-title": "الرقمنة و التشبيك",
            "service-4-desc": "تسهيل الولوج إلى المعلومة باستعمال التقنيات الحديثة بغرض تحسين الخدمات المقدمة",
            "service-5-title": "النشاطات و المعارض",
            "service-5-desc": "القيام بأنشطة ثقافية مختلفة ومتنوعة ذات صلة بالكتاب موجهة لجميع الفئات كالمعارض , المهرجانات , الندوات , الأيام الدراسية وغيرها",
            "service-6-title": "ذوي الإحتياجات الخاصة",
            "service-6-desc": "تسهيل وتوفير الوسائل الضرورية لفئة ذوي الإحتياجات الخاصة لتمكينهم من الإستفادة بخدمات المكتبة",

            // Profile Page
            "profile-hero-active": "عضو نشط",
            "profile-step-1": "المعلومات",
            "profile-step-2": "البريد",
            "profile-step-3": "الوثائق",
            "profile-step-4": "الحالة النهائية",
            "profile-status-review": "قيد المراجعة",
            "profile-status-verified": "تم التحقق",
            "profile-email-alert-title": "البريد الإلكتروني غير مؤكد",
            "profile-email-alert-desc": "يرجى تأكيد بريدك الإلكتروني لتفعيل جميع ميزات حسابك.",
            "profile-email-alert-btn": "تأكيد الآن",
            "profile-action-receipt": "وصل التسجيل",
            "profile-action-commit-ar": "تعهد (AR)",
            "profile-action-commit-fr": "Engagement (FR)",
            "profile-action-rfid": "بطاقة القارئ (RFID)",
            "profile-action-pass": "تغيير السر",
            "profile-action-search": "بحث الكتب",
            "profile-action-logout": "خروج",
            "profile-action-upload-eng": "رفع التعهد الموقّع",
            "profile-upload-title": "رفع الفيشة الموقّعة",
            "profile-upload-desc": "قم برفع نسخة مسح ضوئي (PDF أو صورة) من فيشة التعهد بعد توقيعها",
            "profile-upload-dropzone": "انقر لاختيار ملف",
            "profile-upload-formats": "PDF، JPG، PNG — حجم أقصى 10MB",
            "profile-upload-progress": "جاري الرفع...",
            "profile-upload-cancel": "إلغاء",
            "profile-upload-submit": "رفع الملف",
            "profile-card-personal": "المعلومات الشخصية",
            "profile-card-contact": "التواصل والعنوان",
            "profile-label-fullname": "الاسم واللقب",
            "profile-label-fullname-la": "Nom et Prénom",
            "profile-label-birth": "تاريخ الميلاد",
            "profile-label-job": "المهنة",
            "profile-label-nin": "رقم التعريف الوطني",
            "profile-label-email": "البريد الإلكتروني",
            "profile-label-phone": "رقم الهاتف",
            "profile-label-address": "العنوان",
            "profile-doc-status-title": "حالة الملف والوثائق المرفوعة",
            "profile-doc-cni": "بطاقة التعريف الوطنية (CNI)",
            "profile-doc-photo": "الصورة الشخصية",
            "profile-doc-uploaded": "تم الرفع",
            "profile-doc-missing": "غير متوفر",
            "profile-rfid-title": "بطاقة القارئ",

            // Books Catalog Page
            "catalog-title": "فهرس مكتبة بجاية",
            "catalog-subtitle": "ابحث في آلاف الكتب والمراجع القيمة المتوفرة لدينا",
            "catalog-search-placeholder": "ابحث بالعنوان، الكاتب، أو الكلمات المفتاحية...",
            "catalog-filter-all": "الكل",
            "catalog-filter-category": "التصنيف",
            "catalog-filter-author": "الكاتب",
            "catalog-filter-year": "سنة النشر",
            "catalog-btn-search": "بحث",
            "catalog-table-title": "عنوان الكتاب",
            "catalog-table-author": "المؤلف",
            "catalog-table-category": "التصنيف",
            "catalog-table-year": "السنة",
            "catalog-table-status": "الحالة",
            "catalog-status-available": "متوفر",
            "catalog-status-borrowed": "معار",

            // Registration Page (g.html)
            "g-header-title": "التسجيل في المكتبة",
            "g-header-subtitle": "مكتبة بجاية الرئيسية للمطالعة العمومية",
            "g-step-1": "المعلومات الشخصية",
            "g-step-2": "صورة الهوية",
            "g-step-3": "معلومات التواصل",
            "g-step-4": "المستندات المؤيدة",
            "g-step-5": "الملخص والتحقق",
            "g-step1-title": "المعلومات الشخصية",
            "g-step1-desc": "يرجى إدخال معلوماتك الشخصية لبطاقة المكتبة",
            "g-step2-title": "صورة الهوية",
            "g-step2-desc": "أضف صورة لبطاقة المكتبة",
            "g-step3-title": "معلومات التواصل",
            "g-step3-desc": "أدخل بيانات التواصل الخاصة بك والشبكات الاجتماعية",
            "g-step4-title": "المستندات المؤيدة",
            "g-step4-desc": "حمل المستندات اللازمة لتسجيلك",
            "g-step5-title": "الملخص والتحقق",
            "g-step5-desc": "تحقق من معلوماتك وأنشئ بيانات اعتمادك",
            "g-label-nom": "اللقب بالعربية",
            "g-placeholder-nom": "اللقب بالعربية",
            "g-label-prenom": "الاسم بالعربية",
            "g-placeholder-prenom": "الاسم بالعربية",
            "g-label-nom-latin": "اللقب باللاتينية",
            "g-placeholder-nom-latin": "Nom en latin",
            "g-label-prenom-latin": "الاسم باللاتينية",
            "g-placeholder-prenom-latin": "Prénom en latin",
            "g-label-gender-title": "الجنس",
            "g-gender-m": "ذكر",
            "g-gender-f": "أنثى",
            "g-label-nationality-title": "الجنسية",
            "g-opt-choose-nationality": "اكتب أو اختر جنسيتك",
            "g-opt-nationality-dz": "جزائري",
            "g-opt-nationality-fr": "فرنسي",
            "g-opt-nationality-ma": "مغربي",
            "g-opt-nationality-tn": "تونسي",
            "g-opt-nationality-other": "أخرى",
            "g-label-dob": "تاريخ الميلاد",
            "g-label-pob": "مكان الميلاد",
            "g-placeholder-pob": "اختر بلدية الميلاد",
            "g-label-nin-title": "رقم الهوية الوطنية",
            "g-placeholder-nin": "123456789012345678",
            "g-hint-nin": "18 رقم بدون مسافات",
            "g-label-is-parent": "التسجيل كـ ولي أمر (لتسجيل الأطفال بنفس الرقم الوطني)",
            "g-label-job-title": "المهنة",
            "g-opt-choose-job": "اختر مهنتك",
            "g-opt-job-pupil": "تلميذ",
            "g-opt-job-student": "طالب",
            "g-opt-job-teacher": "معلم",
            "g-opt-job-merchant": "تاجر",
            "g-opt-job-gov": "موظف حكومي",
            "g-opt-job-exec": "إطار",
            "g-opt-job-researcher": "باحث",
            "g-opt-job-retired": "متقاعد",
            "g-opt-job-other": "أخرى",
            "g-photo-preview-name": "بنسالم ناصم",
            "g-photo-upload-title": "رفع صورة",
            "g-photo-upload-desc": "اختر صورة من جهازك",
            "g-btn-browse": "استعراض",
            "g-photo-capture-title": "التقط صورة",
            "g-photo-capture-desc": "استخدم كاميرا الويب لالتقاط صورة",
            "g-btn-open-camera": "فتح الكاميرا",
            "g-btn-delete-photo": "حذف الصورة",
            "g-success-box-title": "رائع! تسجيلك يسير بشكل مثالي",
            "g-success-box-desc": "لقد قمنا بتسجيل معلوماتك الشخصية بنجاح. يرجى الآن إدخال بيانات التواصل الخاصة بك.",
            "g-label-email-title": "البريد الإلكتروني",
            "g-placeholder-email": "your@email.com",
            "g-label-phone-title": "الهاتف",
            "g-placeholder-phone": "06 00 00 00 00",
            "g-label-whatsapp-title": "واتساب",
            "g-label-same-as-phone": "نفس رقم الهاتف",
            "g-label-address-title": "العنوان",
            "g-placeholder-address": "العنوان الكامل",
            "g-label-city-title": "المدينة",
            "g-placeholder-city": "اختر مدينة الإقامة",
            "g-label-zip-title": "الرمز البريدي",
            "g-placeholder-zip": "الرمز البريدي",
            "g-social-title": "شبكات التواصل الاجتماعي (اختيارية)",
            "g-social-desc": "تابعنا على شبكاتنا الاجتماعية للبقاء على اطلاع بأحدث الأخبار",
            "g-cni-front-title": "بطاقة الهوية (الوجه الأمامي)",
            "g-cni-front-desc": "صورة واضحة للوجه الأمامي",
            "g-doc-not-chosen": "لم يتم اختيار مستند",
            "g-btn-scan": "مسح ضوئي",
            "g-btn-upload": "رفع",
            "g-cni-back-title": "بطاقة الهوية (الوجه الخلفي)",
            "g-cni-back-desc": "صورة واضحة للوجه الخلفي",
            "g-info-important-title": "معلومات مهمة :",
            "g-info-item-1": "بطاقة الهوية (الوجهين) إلزامية لجميع المسجلين",
            "g-info-item-2": "تأكد من وضوح الصورة والبيانات",
            "g-info-item-3": "الصيغ المقبولة: JPG, PNG, PDF (حد أقصى 5MB)",
            "g-info-item-4": "يمكنك مسح المستندات بكاميرتك",
            "g-summary-nin-label": "الرقم الوطني:",
            "g-summary-identity-title": "الهوية",
            "g-summary-gender-label": "الجنس",
            "g-summary-dob-label": "تاريخ الميلاد",
            "g-summary-pob-label": "مكان الميلاد",
            "g-summary-nationality-label": "الجنسية",
            "g-summary-prof-contact-title": "المهنة والتواصل",
            "g-summary-job-label": "المهنة",
            "g-summary-email-label": "البريد الإلكتروني",
            "g-summary-phone-label": "الهاتف",
            "g-summary-whatsapp-label": "واتساب",
            "g-summary-address-title": "العنوان",
            "g-summary-address-label": "العنوان الكامل",
            "g-summary-city-label": "المدينة",
            "g-summary-zip-label": "الرمز البريدي",
            "g-summary-docs-status-title": "حالة المستندات",
            "g-summary-cni-front-label": "بطاقة الهوية",
            "g-summary-cni-back-label": "بطاقة الهوية (الخلف)",
            "g-summary-status-pending": "قيد الانتظار",
            "g-cred-username-title": "رمز القارئ",
            "g-cred-username-sub": "يتم توليده تلقائياً حسب ترتيب السنة",
            "g-cred-username-placeholder": "سيظهر بعد التسجيل",
            "g-cred-username-hint": "يمكنك تسجيل الدخول لاحقاً برمز القارئ أو البريد الإلكتروني",
            "g-cred-password-title": "كلمة المرور",
            "g-cred-password-sub": "اختر أي كلمة مرور",
            "g-cred-password-placeholder": "كلمة المرور",
            "g-cred-confirm-title": "تأكيد كلمة المرور",
            "g-cred-confirm-sub": "كرر كلمة المرور",
            "g-cred-confirm-placeholder": "كرر كلمة المرور",
            "g-conditions-label": "أقر بأنني قد اطلعت وأوافق على شروط الاستخدام للمكتبة و سياسة الخصوصية.",
            "g-terms-link": "شروط الاستخدام",
            "g-privacy-link": "سياسة الخصوصية",
            "g-btn-finish": "إنهاء التسجيل",
            "g-btn-next": "التالي",
            "g-btn-prev": "السابق",

            // Director Word Page (Specifics)
            "director-bismillah": "بسم الله الرحمن الرحيم",
            "director-p1": "إن الكتاب كان ولا يزال وسيظل خير جليس للأنام، و كانت المكتبات منارات علم ومعرفة سامقة وجودها رمز تقدم علمي وتطور حضاري لأنها مرآة المجتمع العاكسة.",
            "director-p2": "المكتبة الرئيسية للمطالعة العمومية ببجاية صرح تعليم و تربية وجدت لتنمي لدى المواطن حب المطالعة وتعززها وتوفر وسائلها وسبلها بما يحقق زادا معرفيا واسعا للقراء والرواد، ويرفع من مكانة العلم والمعرفة، هي فضاء يسمح للناشئة تطوير قدراتهم الذاتية وبعث مواهبهم باستغلال مختلف خدماتها والاستفادة من جميع فضاءاتها.",
            "director-p3": "وفي هذا الإطار توفر المكتبة الرئيسية للمطالعة العمومية ببجاية خدمات متعددة تختلف حسب أعمار روادها و مستوياتها التعليمية بأنماط تقنية حديثة تراعي التقدم التكنولوجي الحاصل في خدمات المكتبات مما يسهل استفادة الرواد منها و يحقق الغاية التي رسمتها الدولة الجزائرية من خلال إنشاء مكتبات المطالعة العمومية و هو توفير الكتاب و تقريبه بمختلف تخصصاته للمواطن.",
            "director-p4": "إنه لشرف لنا أن نسهر على تقديم هذه الخدمة النبيلة و العمل الكبير لرواد المكتبة بمختلف فئاتهم و نعمل جاهدين كل حسب تخصصه أن نكون في مستوى تطلعاتهم و آمالهم و أن نعلي من وتيرة المطالعة بهذه الربوع الطيبة من وطننا الغالي رفعا لمكانته بين الأمم.",
            "director-wishes-h3": "وفقنا الله وإياكم لما فيه خير هذه الأمة وصلاحها",
            "director-wishes-p1": "حفظ الله وطننا الجزائر",
            "director-wishes-p2": "المجد والخلود لشهدائنا الأبرار",
            "director-sig-title": "مدير المكتبة الرئيسية للمطالعة العمومية لبجاية",
            "director-sig-name": "رحمه الله - السيد حموش مهني",

            // Goals Page (Specifics)
            "goals-badge": "قيمنا ورسالتنا",
            "goals-hero-title": "أهداف ومهام المكتبة الرئيسية للمطالعة العمومية",
            "goals-hero-desc": "نسعى لجعل المكتبة مركزاً حيوياً للمعرفة والثقافة، يخدم جميع أفراد المجتمع ويساهم في تطوير الوعي الثقافي والعلمي.",
            "goal-1": "وضع مختلف الأرصدة الوثائقية والخدمات المرتبطة بالمطالعة العمومية وجميع الخدمات الملحقة الأخرى تحت تصرف المستعملين.",
            "goal-2": "تخصيص فضاء للمطالعة العمومية يتكيف مع احتياجات الطفل.",
            "goal-3": "توفير فضاء للدراسات وتحضير الامتحانات.",
            "goal-4": "تسهيل تطور الكفاءات القاعدية لاستعمال الإعلام الآلي.",
            "goal-5": "توفير الوسائل التي تسمح للأشخاص المعاقين بالوصول للمطالعة العمومية.",
            "goal-6": "تنظيم أنشطة ثقافية حول الكتاب.",
            "goal-7": "إتاحة جميع مصادر المعلومات المتوفرة بها لجميع من يرغبون في الاطلاع عليها.",
            "goal-8": "توفير إمكانيات وخدمات البحث الحر وذلك لمساعدة الفرد على توسيع معارفه ومكتسباته طبقا لاحتياجاته واهتماماته ورغباته وقدراته.",
            "goal-9": "المساعدة في تحقيق أهداف التربية المدرسية، وذلك لأن المكتبة تعمل على تعميق أفق الطالب وفهمه لموضوعاته الدراسية.",
            "goal-10": "تشجيع وتدعيم المقروئية لدى المواطنين عن طريق تقديم الخدمات والكتب التي ترضي مختلف الاحتياجات والأذواق.",
            "goal-11": "تزويد القراء بالمعلومات اللازمة لهم في تحديث أعمالهم في وظائفهم وبالمجتمع وفي إدارة شؤونهم العملية.",

            // Technical Card Page (Specifics)
            "tech-hero-title": "البطاقة الفنية للمكتبة",
            "tech-hero-desc": "عرض حول المكتبة الرئيسية للمطالعة العمومية لولاية بجاية",
            "tech-history-title": "لمحة تاريخية عن المكتبة",
            "tech-history-p1": "تم تشييدها من طرف الموحدين في منتصف القرن الثاني عشر (حوالي سنة 1154)، ثم خضعت لتعديلات من قبل الإسبان بعد احتلالهم للمدينة سنة 1510.",
            "tech-history-p2": "تأخذ شكلاً مستطيلاً وتمتد على مساحة تقارب الهكتارين، حيث يبلغ طول جانبها الأكبر حوالي 160 متراً على أرض غير مستوية بفارق ارتفاع يبلغ 22 متراً.",
            "tech-history-p3": "تحتوي القصبة على عدة مبانٍ تعود للفترات الأمازيغية أو الإسبانية، مع بعض التعديلات الطفيفة التي أدخلت خلال الفترتين العثمانية والفرنسية.",
            "tech-card-fort": "القلعة",
            "tech-card-fort-desc": "من المرجح أنها بنيت في الفترة الإسبانية (القرن السادس عشر)، وتحتوي على قاعة كبيرة مغلقة يُعتقد أنها كانت مستودعاً للبارود.",
            "tech-card-mosque": "الجامع",
            "tech-card-mosque-desc": "يتميز بهندسة أمازيغية قديمة، يُرجح أنه شُيد في العصر الموحدي، وكان مكان صلاة والي الموحدين، ثم أصبح مركزاً لتعليم ابن خلدون.",
            "tech-card-square": "المبنى المربع",
            "tech-card-square-desc": "يُعتقد أنه من الحقبة الإسبانية، تم تعديله لاحقاً من قبل العثمانيين والفرنسيين، ويحتوي على باحة داخلية وأروقة.",
            "tech-shifts-title": "التحولات الحديثة",
            "tech-shift-1-date": "ديسمبر 2010",
            "tech-shift-1-desc": "تم إنهاء نشاط المكتبة التي كانت تقع داخل المسجد بالقصبة والتابعة للمكتبة الوطنية الجزائرية.",
            "tech-shift-2-date": "14 ماي 2016",
            "tech-shift-2-desc": "تم تدشينها رسمياً من قبل وزير الثقافة السيد عز الدين ميهوبي.",
            "tech-map-title": "الموقع الجغرافي",
            "tech-map-desc": "تقع المكتبة الرئيسية لبجاية في شارع كريم بلقاسم بأعمريو، بجاية، على بُعد 2 كم من مقر الولاية.",
            "tech-dir-n": "شمالاً",
            "tech-dir-n-desc": "إذاعة صومام ودار الثقافة",
            "tech-dir-s": "جنوباً",
            "tech-dir-s-desc": "منتزه أولمبيا",
            "tech-dir-e": "شرقاً",
            "tech-dir-e-desc": "وكالة جازي وبنك AGB",
            "tech-dir-w": "غرباً",
            "tech-dir-w-desc": "بحيرة ميزايا",

            // Cultural Activities
            "activities-hero-title": "الفضاء الثقافي والنشاطات",
            "activities-hero-desc": "اكتشف الفعاليات الثقافية، المحاضرات، الورش التدريبية والمعارض الفنية التي تنظمها المكتبة الرئيسية لبجاية على مدار السنة.",
            "activities-badge": "الفعاليات والأنشطة",
            "activities-filter-all": "الكل",
            "activities-filter-literary": "فعالية أدبية",
            "activities-filter-workshop": "ورشة تدريبية",
            "activities-filter-exhibition": "معرض ثقافي",
            "activities-filter-children": "فضاء الأطفال",
            "activities-filter-conference": "ندوة فكرية",
            "activities-search-placeholder": "ابحث عن فعالية...",
            "activities-calendar-modal-title": "تقويم النشاطات",

            // Event Details
            "event-details-about": "حول الفعالية",
            "event-details-program": "برنامج النشاط",
            "event-details-video": "فيديو الفعالية",
            "event-details-book-seat": "حجز مقعد",
            "event-details-book-desc": "يرجى ملء النموذج أدناه لتأكيد حضوركم. المقاعد محدودة والأولوية للمسجلين الأوائل.",
            "event-details-label-name": "الاسم الكامل",
            "event-details-placeholder-name": "أدخل اسمك هنا",
            "event-details-label-phone": "رقم الهاتف",
            "event-details-btn-confirm": "تأكيد التسجيل",
            "event-details-footer-note": "سوف تتلقى رسالة تأكيد عبر الهاتف فور معالجة طلبكم.",
            "event-details-share": "مشاركة",
            "event-details-add-calendar": "إضافة للتقويم",

            // Internal Regulations
            "reg-hero-title": "النظام الداخلي للمكتبة",
            "reg-hero-desc": "قواعد وإجراءات استخدام المكتبة الرئيسية للمطالعة العمومية لولاية بجاية",
            "reg-hours-title": "أوقات عمل المكتبة",
            "reg-hours-days": "أيام الأسبوع (ما عدا الجمعة)",
            "reg-hours-desc": "تفتح المكتبة أبوابها للجمهور طيلة أيام الأسبوع",
            "reg-hours-from": "09:00 صباحاً",
            "reg-hours-to": "22:00 مساءً",
            "reg-hours-note": "* ما عدا الجمعة وأيام العطل الرسمية (Journées fériées).",
            "reg-join-title": "شروط الانخراط",
            "reg-age-title": "شرط السن",
            "reg-age-desc": "يُسمح بدخول المكتبة لكل شخص يبلغ من العمر 12 سنة فما فوق. الأطفال أقل من 12 سنة يجب أن يكونوا مرفوقين بولي أمرهم.",
            "reg-process-title": "عملية التسجيل",
            "reg-process-desc": "تُجرى عمليات التسجيل عن بعد عبر الموقع الرسمي أو بالتقرب من مصلحة التسجيل بالمكتبة.",
            "reg-lending-title": "خدمات الإعارة",
            "reg-lending-internal": "الإعارة الداخلية",
            "reg-lending-internal-desc": "يعتمد نظام المكتبة على الوصول الحر إلى الرفوف، مما يسمح بالتواصل المباشر مع الكتاب دون وساطة.",
            "reg-lending-external": "الإعارة الخارجية",
            "reg-lending-external-desc": "تتم الإعارة يومياً (ما عدا الجمعة) إلى غاية الساعة 16:00. يُسمح باستعارة كتابين لمدة 15 يوماً قابلة للتمديد لأسبوع إضافي.",
            "reg-internet-title": "خدمة الإنترنت",
            "reg-internet-free": "الدخول المجاني",
            "reg-internet-free-desc": "الدخول إلى الإنترنت مجاني، وتفتح القاعة وفق توقيت المكتبة.",
            "reg-internet-equip": "المعدات والوقت",
            "reg-internet-equip-desc": "تضم القاعة 4 حواسيب، ويُحدد وقت الاستخدام بـ 20 دقيقة لكل مستفيد.",
            "reg-internet-support": "خدمات إضافية",
            "reg-internet-support-desc": "مساعدة في البحث، تأطير الطلبة، وتوجيههم وتوجيههم في البيبليوغرافيا.",
            "reg-penalty-title": "المخالفات والعقوبات",
            "reg-penalty-delay": "تأخير الإعادة",
            "reg-penalty-delay-desc": "في حال التأخر في إعادة الكتب، يُوجه للقارئ تذكير، ثم يُحرم من الإعارة الخارجية لمدة تتراوح بين أسبوع وشهر.",
            "reg-penalty-loss": "ضياع الكتب",
            "reg-penalty-loss-desc": "يلزم المخالف بتعويض الكتاب المفقود، مع سحب بطاقة القارئ لمدة لا تقل عن شهرين. القارئ مسؤول عن كتبه.",
            "reg-penalty-exclude": "الإقصاء النهائي",
            "reg-penalty-exclude-desc": "بعد ثلاثة إنذارات متتالية دون استجابة، يتعرض القارئ للإقصاء النهائي من المكتبة وقد يتعرض لمتابعات قضائية.",

            // Orders History
            "orders-history-breadcrumb": "سجل الطلبات",
            "orders-history-title": "تاريخ طلبات الإعارة",
            "orders-history-desc": "تابع حالة طلباتك للكتب المحجوزة والمستلمة",
            "orders-history-no-orders": "ليس لديك أي طلبات حالياً",
            "orders-history-no-orders-desc": "يمكنك البدء في استعارة الكتب من فهرس المكتبة",
            "orders-history-browse-books": "تصفح الكتب",
            "orders-history-status-pending": "قيد الانتظار",
            "orders-history-status-approved": "تمت الموافقة",
            "orders-history-status-rejected": "مرفوض",
            "orders-history-copy-id": "معرف النسخة",
            "orders-history-awaiting-copy": "بانتظار تخصيص نسخة",
            "orders-history-book-details": "تفاصيل الكتاب",

            // Hall Booking
            "booking-hero-badge": "خدمة حجز القاعات الاحترافية",
            "booking-hero-title": "احجز مساحتك الإبداعية بمكتبتنا",
            "booking-hero-desc": "نوفر لكم قاعات مجهزة بأحدث الوسائل التكنولوجية لتنظيم فعالياتكم، اجتماعاتكم وورش العمل في جو من الهدوء والإبداع",
            "booking-halls-title": "القاعات المتاحة",
            "booking-hall1-badge": "قاعة كبرى",
            "booking-hall1-title": "قاعة المحاضرات الكبرى",
            "booking-hall1-cap": "150 شخص",
            "booking-hall1-equip": "مجهزة بالكامل",
            "booking-hall1-desc": "مثالية للمؤتمرات الكبيرة، الندوات الفكرية، وعروض الأفلام. مجهزة بنظام صوتي متطور وجهاز عرض عالي الدقة.",
            "booking-hall2-badge": "متوسطة",
            "booking-hall2-title": "قاعة الاجتماعات \"تواصل\"",
            "booking-hall2-cap": "12-15 شخص",
            "booking-hall2-equip": "واي فاي سريع",
            "booking-hall2-desc": "مساحة هادئة ومريحة مخصصة لاجتماعات فرق العمل، ورش العمل الصغيرة، والدورات التدريبية المكثفة.",
            "booking-f1-title": "تأكيد فوري",
            "booking-f1-desc": "معالجة سريعة لطلبات الحجز",
            "booking-f2-title": "دعم فني",
            "booking-f2-desc": "مرافقة تقنية طوال فترة نشاطكم",
            "booking-f3-title": "خدمة الضيافة",
            "booking-f3-desc": "إمكانية ترتيب فترات استراحة",
            "booking-form-title": "طلب الحجز",
            "booking-form-name": "الاسم الكامل / الجهة",
            "booking-form-name-placeholder": "أدخل اسمك أو اسم المؤسسة",
            "booking-form-email": "البريد الإلكتروني",
            "booking-form-select-hall": "اختار القاعة",
            "booking-form-date": "التاريخ",
            "booking-form-period": "الفترة",
            "booking-form-period-morning": "صباحاً",
            "booking-form-period-afternoon": "مساءً",
            "booking-form-period-fullday": "يوم كامل",
            "booking-form-submit": "إرسال طلب الحجز",
            "booking-form-footer": "سيقوم فريقنا بالتواصل معكم في أقرب وقت لتأكيد التفاصيل",
        },
        fr: {
            dir: "ltr",
            lang: "fr",
            // Navbar
            "nav-home": "Accueil",
            "nav-about": "À Propos",
            "nav-director": "Mot du Directeur",
            "nav-goals": "Missions & Objectifs",
            "nav-card": "Fiche Technique",
            "nav-regulations": "Règlement Intérieur",
            "nav-services": "Services",
            "nav-join": "Inscription",
            "nav-catalog": "Catalogue",
            "nav-hall": "Salles",
            "nav-complaints": "Réclamations",
            "nav-activities": "Activités Culturelles",
            "nav-prog": "Programme",
            "nav-kids": "Espace Enfants",
            "nav-forum": "Forum du Livre",
            "nav-authors": "Auteurs Locaux",
            "nav-contact": "Contact",
            "nav-login": "Se Connecter",
            "nav-register": "S'inscrire",
            "nav-profile": "Mon Profil",
            "nav-history": "Prêts",
            "nav-logout": "Déconnexion",
            "nav-director-desc": "Message de bienvenue de la direction",
            "nav-goals-desc": "Notre vision et nos objectifs stratégiques",
            "nav-card-desc": "Informations techniques et statistiques",
            "nav-regulations-desc": "Règles et règlements d'utilisation",
            "nav-join-desc": "Inscrivez-vous pour obtenir une carte d'adhérent",
            "nav-catalog-desc": "Parcourir les livres et références disponibles",
            "nav-hall-desc": "Réserver une salle pour événements et réunions",
            "nav-complaints-desc": "Envoyez vos commentaires et suggestions",
            "nav-prog-desc": "Événements et activités à venir",
            "nav-kids-desc": "Activités récréatives et éducatives pour enfants",
            "nav-forum-desc": "Discussions littéraires et culturelles",
            "nav-authors-desc": "Portail des écrivains et auteurs locaux",

            // General / Auth Modal
            "login-title": "Se Connecter",
            "login-subtitle": "Bienvenue dans votre espace lecteur",
            "login-username-placeholder": "Code lecteur ou E-mail",
            "login-password-placeholder": "Mot de passe",
            "login-btn": "Connexion",
            "login-forgot": "Mot de passe oublié ?",
            "login-no-account": "Pas encore de compte ?",
            "login-register-link": "S'inscrire maintenant",
            "close": "Fermer",

            // Footer
            "footer-desc": "Bibliothèque Principale de la Lecture Publique de la Wilaya de Béjaïa - Un espace de savoir, de culture et de créativité pour tous.",
            "footer-links-title": "Liens Rapides",
            "footer-contact-title": "Contact",
            "footer-address": "Boulevard de la Liberté, Béjaïa, Algérie",
            "footer-rights": "Tous droits réservés © 2026 Bibliothèque Principale de Béjaïa",

            // Homepage Hero
            "hero-title": "Bibliothèque Principale",
            "hero-subtitle": "de la Lecture Publique de Béjaïa",
            "hero-chahid": "Chahid Tahar Amrouchene",
            "hero-btn-card": "Obtenir une Carte d'Adhérent",
            "hero-btn-catalog": "Consulter le Catalogue",

            // Stats
            "stat-titles": "Nombre de Titres",
            "stat-copies": "Nombre d'Exemplaires",
            "stat-readers": "Nombre d'Adhérents",

            // Events
            "events-section-title": "Événements & Activités",
            "events-section-subtitle": "Découvrez nos derniers événements culturels et activités à venir",
            "event-card-soon": "Bientôt",
            "event-card-free": "Gratuit",
            "event-card-new": "Nouveau",
            "event-card-exclusive": "Exclusif",
            "event-card-active": "Actif",
            "event-card-prizes": "Prix",
            "event-card-think": "Pensée",
            "event-card-skills": "Skills",
            "event-card-cinema": "Cinéma",
            "event-card-art": "Art",

            // Registration Steps
            "reg-title": "Comment s'inscrire ?",
            "reg-subtitle": "Notre bibliothèque a le plaisir de vous proposer l'inscription en ligne via notre site officiel. Enregistrez-vous à distance pour obtenir votre carte de lecteur et bénéficier de votre espace personnel.",
            "step-1-title": "1. Inscription en Ligne",
            "step-1-desc": "Remplissez le formulaire d'inscription avec vos coordonnées personnelles.",
            "step-2-title": "2. Validation d'E-mail",
            "step-2-desc": "Vérifiez votre e-mail et confirmez votre adresse en cliquant sur le lien reçu.",
            "step-3-title": "3. Téléchargement de la Fiche",
            "step-3-desc": "Téléchargez et imprimez votre fiche d'engagement dûment signée.",
            "step-4-title": "4. Dépôt de la Fiche",
            "step-4-desc": "Scannez et déposez votre fiche signée dans votre espace, puis déposez l'original à la bibliothèque.",
            "step-5-title": "5. Activation du Compte",
            "step-5-desc": "Après validation de vos documents, votre compte sera activé et votre carte générée.",
            "step-6-title": "6. Vidéo Explicative",
            "step-6-desc": "Visionnez notre tutoriel vidéo pour en savoir plus sur l'inscription.",

            // Services
            "services-title": "Nos Services & Espaces",
            "services-subtitle": "Découvrez tout ce que la Bibliothèque Principale de Béjaïa met à votre disposition",
            "service-1-title": "Espace Enfants",
            "service-1-desc": "Un espace de lecture adapté aux besoins des enfants avec des activités et ateliers spéciaux.",
            "service-2-title": "Indexation & Prêt",
            "service-2-desc": "Mise à disposition de divers fonds documentaires et gestion professionnelle du prêt de livres.",
            "service-3-title": "Promotion de la Lecture",
            "service-3-desc": "Œuvrer à l'instauration et à la diffusion de la culture de la lecture dans la société.",
            "service-4-title": "Numérisation & Réseau",
            "service-4-desc": "Faciliter l'accès à l'information grâce aux nouvelles technologies de l'information.",
            "service-5-title": "Activités & Salons",
            "service-5-desc": "Organisation d'événements liés au livre (expositions, séminaires, conférences, rencontres littéraires).",
            "service-6-title": "Besoins Spécifiques",
            "service-6-desc": "Aménagement et fourniture des outils adaptés pour permettre aux personnes à besoins spécifiques de lire.",

            // Profile Page
            "profile-hero-active": "Membre Actif",
            "profile-step-1": "Infos",
            "profile-step-2": "E-mail",
            "profile-step-3": "Documents",
            "profile-step-4": "Validation",
            "profile-status-review": "En révision",
            "profile-status-verified": "Vérifié",
            "profile-email-alert-title": "E-mail non vérifié",
            "profile-email-alert-desc": "Veuillez confirmer votre adresse e-mail pour activer tous vos services.",
            "profile-email-alert-btn": "Confirmer maintenant",
            "profile-action-receipt": "Reçu",
            "profile-action-commit-ar": "Engagement (AR)",
            "profile-action-commit-fr": "Engagement (FR)",
            "profile-action-rfid": "Carte RFID",
            "profile-action-pass": "Mot de Passe",
            "profile-action-search": "Recherche",
            "profile-action-logout": "Quitter",
            "profile-action-upload-eng": "Déposer l'engagement signé",
            "profile-upload-title": "Déposer la fiche signée",
            "profile-upload-desc": "Téléversez une copie numérisée (PDF ou image) de votre fiche d'engagement après signature",
            "profile-upload-dropzone": "Cliquez pour choisir un fichier",
            "profile-upload-formats": "PDF, JPG, PNG — Taille max 10 Mo",
            "profile-upload-progress": "Téléversement en cours...",
            "profile-upload-cancel": "Annuler",
            "profile-upload-submit": "Téléverser",
            "profile-card-personal": "Informations Personnelles",
            "profile-card-contact": "Contact & Adresse",
            "profile-label-fullname": "Nom & Prénom",
            "profile-label-fullname-la": "Nom et Prénom (Latin)",
            "profile-label-birth": "Date de naissance",
            "profile-label-job": "Profession",
            "profile-label-nin": "Numéro d'identité (NIN)",
            "profile-label-email": "Adresse E-mail",
            "profile-label-phone": "Téléphone",
            "profile-label-address": "Adresse Résidence",
            "profile-doc-status-title": "Statut des documents téléversés",
            "profile-doc-cni": "Carte d'identité (CNI)",
            "profile-doc-photo": "Photo d'identité",
            "profile-doc-uploaded": "Téléversé",
            "profile-doc-missing": "Absent",
            "profile-rfid-title": "Carte Lecteur",

            // Books Catalog Page
            "catalog-title": "Catalogue de la Bibliothèque",
            "catalog-subtitle": "Recherchez parmi des milliers de livres et ouvrages précieux disponibles",
            "catalog-search-placeholder": "Rechercher par titre, auteur, mots-clés...",
            "catalog-filter-all": "Tout",
            "catalog-filter-category": "Catégorie",
            "catalog-filter-author": "Auteur",
            "catalog-filter-year": "Année",
            "catalog-btn-search": "Chercher",
            "catalog-table-title": "Titre du livre",
            "catalog-table-author": "Auteur",
            "catalog-table-category": "Catégorie",
            "catalog-table-year": "Année",
            "catalog-table-status": "Statut",
            "catalog-status-available": "Disponible",
            "catalog-status-borrowed": "Emprunté",

            // Registration Page (g.html)
            "g-header-title": "Inscription à la Bibliothèque",
            "g-header-subtitle": "Bibliothèque Principale de la Lecture Publique de Béjaïa",
            "g-step-1": "Infos Personnelles",
            "g-step-2": "Photo d'Identité",
            "g-step-3": "Coordonnées de Contact",
            "g-step-4": "Pièces Justificatives",
            "g-step-5": "Résumé & Validation",
            "g-step1-title": "Informations Personnelles",
            "g-step1-desc": "Veuillez entrer vos coordonnées personnelles pour la carte de bibliothèque",
            "g-step2-title": "Photo d'Identité",
            "g-step2-desc": "Ajouter une photo pour la carte de bibliothèque",
            "g-step3-title": "Coordonnées de Contact",
            "g-step3-desc": "Entrez vos coordonnées de contact et vos réseaux sociaux",
            "g-step4-title": "Pièces Justificatives",
            "g-step4-desc": "Téléversez les documents nécessaires pour votre inscription",
            "g-step5-title": "Résumé & Validation",
            "g-step5-desc": "Vérifiez vos informations et créez vos identifiants de connexion",
            "g-label-nom": "Nom en arabe",
            "g-placeholder-nom": "Nom en arabe",
            "g-label-prenom": "Prénom en arabe",
            "g-placeholder-prenom": "Prénom en arabe",
            "g-label-nom-latin": "Nom (en Latin)",
            "g-placeholder-nom-latin": "Nom en latin",
            "g-label-prenom-latin": "Prénom (en Latin)",
            "g-placeholder-prenom-latin": "Prénom en latin",
            "g-label-gender-title": "Genre",
            "g-gender-m": "Homme",
            "g-gender-f": "Femme",
            "g-label-nationality-title": "Nationalité",
            "g-opt-choose-nationality": "Écrivez ou choisissez votre nationalité",
            "g-opt-nationality-dz": "Algérienne",
            "g-opt-nationality-fr": "Française",
            "g-opt-nationality-ma": "Marocaine",
            "g-opt-nationality-tn": "Tunisienne",
            "g-opt-nationality-other": "Autre",
            "g-label-dob": "Date de Naissance",
            "g-label-pob": "Lieu de Naissance",
            "g-placeholder-pob": "Choisissez une commune de Béjaïa",
            "g-label-nin-title": "Numéro d'Identité National",
            "g-placeholder-nin": "123456789012345678",
            "g-hint-nin": "18 chiffres sans espaces",
            "g-label-is-parent": "S'inscrire comme parent (pour enregistrer des enfants avec le même NIN)",
            "g-label-job-title": "Profession",
            "g-opt-choose-job": "Choisissez votre profession",
            "g-opt-job-pupil": "Élève",
            "g-opt-job-student": "Étudiant",
            "g-opt-job-teacher": "Enseignant",
            "g-opt-job-merchant": "Commerçant",
            "g-opt-job-gov": "Fonctionnaire",
            "g-opt-job-exec": "Cadre",
            "g-opt-job-researcher": "Chercheur",
            "g-opt-job-retired": "Retraité",
            "g-opt-job-other": "Autre",
            "g-photo-preview-name": "Aperçu de la photo",
            "g-photo-upload-title": "Téléverser une photo",
            "g-photo-upload-desc": "Choisissez une photo depuis votre appareil",
            "g-btn-browse": "Parcourir",
            "g-photo-capture-title": "Prendre une photo",
            "g-photo-capture-desc": "Utilisez votre webcam pour prendre une photo",
            "g-btn-open-camera": "Ouvrir la caméra",
            "g-btn-delete-photo": "Supprimer la photo",
            "g-success-box-title": "Super ! Votre inscription progresse parfaitement",
            "g-success-box-desc": "Nous avons enregistré vos coordonnées personnelles avec succès. Veuillez maintenant entrer vos coordonnées de contact.",
            "g-label-email-title": "Adresse E-mail",
            "g-placeholder-email": "votre@email.com",
            "g-label-phone-title": "Numéro de Téléphone",
            "g-placeholder-phone": "06 00 00 00 00",
            "g-label-whatsapp-title": "WhatsApp",
            "g-label-same-as-phone": "Même numéro de téléphone",
            "g-label-address-title": "Adresse",
            "g-placeholder-address": "Adresse complète",
            "g-label-city-title": "Ville / Commune",
            "g-placeholder-city": "Choisissez la commune de résidence",
            "g-label-zip-title": "Code Postal",
            "g-placeholder-zip": "Code postal",
            "g-social-title": "Réseaux Sociaux (Optionnel)",
            "g-social-desc": "Suivez-nous sur nos réseaux sociaux pour rester informé",
            "g-cni-front-title": "Carte d'Identité (Recto)",
            "g-cni-front-desc": "Une photo nette du recto",
            "g-doc-not-chosen": "Aucun document sélectionné",
            "g-btn-scan": "Scanner",
            "g-btn-upload": "Téléverser",
            "g-cni-back-title": "Carte d'Identité (Verso)",
            "g-cni-back-desc": "Une photo nette du verso",
            "g-info-important-title": "Informations Importantes :",
            "g-info-item-1": "La carte d'identité (recto/verso) est obligatoire pour tous les adhérents",
            "g-info-item-2": "Assurez-vous que l'image et les données sont bien lisibles",
            "g-info-item-3": "Formats acceptés : JPG, PNG, PDF (taille max 5 Mo)",
            "g-info-item-4": "Vous pouvez directement numériser vos pièces avec votre caméra",
            "g-summary-nin-label": "Numéro National (NIN) :",
            "g-summary-identity-title": "Identité",
            "g-summary-gender-label": "Genre",
            "g-summary-dob-label": "Date de Naissance",
            "g-summary-pob-label": "Lieu de Naissance",
            "g-summary-nationality-label": "Nationalité",
            "g-summary-prof-contact-title": "Profession & Contact",
            "g-summary-job-label": "Profession",
            "g-summary-email-label": "Adresse E-mail",
            "g-summary-phone-label": "Téléphone",
            "g-summary-whatsapp-label": "WhatsApp",
            "g-summary-address-title": "Adresse",
            "g-summary-address-label": "Adresse Complète",
            "g-summary-city-label": "Ville / Commune",
            "g-summary-zip-label": "Code Postal",
            "g-summary-docs-status-title": "Statut des Documents",
            "g-summary-cni-front-label": "Carte d'Identité",
            "g-summary-cni-back-label": "Carte d'Identité (Verso)",
            "g-summary-status-pending": "En attente",
            "g-cred-username-title": "Code lecteur",
            "g-cred-username-sub": "Généré automatiquement selon l'ordre annuel",
            "g-cred-username-placeholder": "Affiché après l'inscription",
            "g-cred-username-hint": "Vous pourrez vous connecter avec ce code lecteur ou votre e-mail",
            "g-cred-password-title": "Mot de Passe",
            "g-cred-password-sub": "Choisissez votre mot de passe",
            "g-cred-password-placeholder": "Mot de passe",
            "g-cred-confirm-title": "Confirmer le Mot de Passe",
            "g-cred-confirm-sub": "Saisissez à nouveau votre mot de passe",
            "g-cred-confirm-placeholder": "Saisissez à nouveau votre mot de passe",
            "g-conditions-label": "Je déclare avoir pris connaissance et accepter les conditions d'utilisation et la politique de confidentialité.",
            "g-terms-link": "les conditions d'utilisation",
            "g-privacy-link": "la politique de confidentialité",
            "g-btn-finish": "Finaliser l'Inscription",
            "g-btn-next": "Suivant",
            "g-btn-prev": "Précédent",

            // Director Word Page (Specifics)
            "director-bismillah": "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
            "director-p1": "Le livre a toujours été et restera le meilleur compagnon de l'homme. Les bibliothèques ont toujours été de hauts phares de science et de savoir, leur présence symbolisant le progrès scientifique et le développement civilisationnel en tant que miroir de la société.",
            "director-p2": "La Bibliothèque Principale de Béjaïa est un édifice d'éducation et de culture, créée pour développer et renforcer l'amour de la lecture chez le citoyen. Elle offre les moyens nécessaires pour enrichir le savoir des lecteurs, élevant ainsi le statut de la science et de la connaissance. C'est un espace qui permet aux jeunes de développer leurs capacités et d'exprimer leurs talents à travers ses services et ses espaces.",
            "director-p3": "Dans ce contexte, la Bibliothèque Principale de Béjaïa offre des services multiples adaptés aux âges et aux niveaux éducatifs de ses usagers, en utilisant des technologies modernes, conformément à l'objectif de l'État algérien : rendre le livre accessible à tous les citoyens dans toutes ses spécialités.",
            "director-p4": "C'est un honneur pour nous de veiller à offrir ce noble service aux usagers de la bibliothèque de toutes catégories. Nous travaillons avec dévouement pour répondre à leurs attentes, augmenter le taux de lecture dans cette belle région et élever le statut de notre cher pays parmi les nations.",
            "director-wishes-h3": "Que Dieu nous guide vers ce qu'il y a de meilleur pour notre nation.",
            "director-wishes-p1": "Que Dieu protège notre patrie, l'Algérie.",
            "director-wishes-p2": "Gloire et éternité à nos valeureux martyrs.",
            "director-sig-title": "Directeur de la Bibliothèque Principale de Béjaïa",
            "director-sig-name": "Paix à son âme - M. Hammouche Mehani",

            // Goals Page (Specifics)
            "goals-badge": "Nos Valeurs & Mission",
            "goals-hero-title": "Missions & Objectifs de la Bibliothèque",
            "goals-hero-desc": "Nous nous efforçons de faire de la bibliothèque un centre vital de savoir et de culture, au service de tous les membres de la société.",
            "goal-1": "Mettre à la disposition des usagers les différents fonds documentaires et services liés à la lecture publique.",
            "goal-2": "Consacrer un espace de lecture publique adapté aux besoins de l'enfant.",
            "goal-3": "Fournir un espace d'étude et de préparation aux examens.",
            "goal-4": "Faciliter le développement des compétences de base en informatique.",
            "goal-5": "Fournir les moyens nécessaires aux personnes handicapées pour accéder à la lecture publique.",
            "goal-6": "Organiser des activités culturelles autour du livre.",
            "goal-7": "Rendre toutes les sources d'information disponibles accessibles à tous ceux qui souhaitent les consulter.",
            "goal-8": "Fournir des services de recherche libre pour aider l'individu à élargir ses connaissances selon ses besoins et intérêts.",
            "goal-9": "Aider à atteindre les objectifs de l'éducation scolaire en approfondissant l'horizon des élèves.",
            "goal-10": "Encourager et soutenir la lecture chez les citoyens en fournissant des livres pour tous les goûts.",
            "goal-11": "Fournir aux lecteurs les informations nécessaires pour mettre à jour leurs travaux professionnels et personnels.",

            // Technical Card Page (Specifics)
            "tech-hero-title": "Fiche Technique de la Bibliothèque",
            "tech-hero-desc": "Présentation de la Bibliothèque Principale de la Lecture Publique de Béjaïa",
            "tech-history-title": "Aperçu Historique de la Bibliothèque",
            "tech-history-p1": "Construite par les Almohades au milieu du XIIe siècle (vers 1154), elle a ensuite été modifiée par les Espagnols après l'occupation de la ville en 1510.",
            "tech-history-p2": "Elle prend une forme rectangulaire et s'étend sur près de deux hectares, avec une longueur de 160 mètres sur un terrain dénivelé de 22 mètres.",
            "tech-history-p3": "La Casbah contient plusieurs bâtiments des époques berbère ou espagnole, avec de légères modifications apportées sous les époques ottomane et française.",
            "tech-card-fort": "La Citadelle",
            "tech-card-fort-desc": "Construite à l'époque espagnole (XVIe siècle), elle abrite une grande salle fermée qui aurait servi de dépôt de poudre.",
            "tech-card-mosque": "La Mosquée",
            "tech-card-mosque-desc": "D'architecture berbère ancienne, elle remonte à l'époque almohade. Elle fut le lieu de prière du gouverneur almohade, puis un centre d'enseignement d'Ibn Khaldoun.",
            "tech-card-square": "Le Bâtiment Carré",
            "tech-card-square-desc": "Datant de l'époque espagnole, modifié ultérieurement par les Ottomans et les Français, il comprend une cour intérieure et des galeries.",
            "tech-shifts-title": "Les Transformations Modernes",
            "tech-shift-1-date": "Décembre 2010",
            "tech-shift-1-desc": "Fin de l'activité de la bibliothèque située à l'intérieur de la mosquée, qui dépendait de la Bibliothèque Nationale d'Algérie.",
            "tech-shift-2-date": "14 Mai 2016",
            "tech-shift-2-desc": "Inauguration officielle par le Ministre de la Culture, M. Azzedine Mihoubi.",
            "tech-map-title": "Situation Géographique",
            "tech-map-desc": "Située Boulevard Krim Belkacem à Ihaddaden, Béjaïa, à 2 km du siège de la Wilaya.",
            "tech-dir-n": "Nord",
            "tech-dir-n-desc": "Radio Soummam et Maison de la Culture",
            "tech-dir-s": "Sud",
            "tech-dir-s-desc": "Parc Olympia",
            "tech-dir-e": "Est",
            "tech-dir-e-desc": "Agence Djezzy et Banque AGB",
            "tech-dir-w": "Ouest",
            "tech-dir-w-desc": "Lac de Mezaia",

            // Cultural Activities
            "activities-hero-title": "Espace Culturel & Activités",
            "activities-hero-desc": "Découvrez les événements culturels, conférences, ateliers et expositions artistiques organisés par la Bibliothèque Principale de Béjaïa tout au long de l'année.",
            "activities-badge": "Événements & Activités",
            "activities-filter-all": "Tout",
            "activities-filter-literary": "Littéraire",
            "activities-filter-workshop": "Atelier",
            "activities-filter-exhibition": "Exposition",
            "activities-filter-children": "Enfants",
            "activities-filter-conference": "Conférence",
            "activities-search-placeholder": "Rechercher un événement...",
            "activities-calendar-modal-title": "Calendrier des Activités",

            // Event Details
            "event-details-about": "Détails de l'événement",
            "event-details-program": "Programme de l'activité",
            "event-details-video": "Vidéo de l'événement",
            "event-details-book-seat": "Réserver une place",
            "event-details-book-desc": "Veuillez remplir le formulaire ci-dessous pour confirmer votre présence. Les places sont limitées.",
            "event-details-label-name": "Nom Complet",
            "event-details-placeholder-name": "Entrez votre nom complet",
            "event-details-label-phone": "Numéro de Téléphone",
            "event-details-btn-confirm": "Confirmer l'inscription",
            "event-details-footer-note": "Vous recevrez un message de confirmation par téléphone dès traitement de votre demande.",
            "event-details-share": "Partager",
            "event-details-add-calendar": "Ajouter au calendrier",

            // Internal Regulations
            "reg-hero-title": "Règlement Intérieur",
            "reg-hero-desc": "Règles et procédures d'utilisation de la Bibliothèque Principale de Lecture Publique de Béjaïa",
            "reg-hours-title": "Horaires d'Ouverture",
            "reg-hours-days": "Jours de semaine (sauf vendredi)",
            "reg-hours-desc": "La bibliothèque ouvre ses portes au public tous les jours de la semaine",
            "reg-hours-from": "09:00 Matin",
            "reg-hours-to": "22:00 Soir",
            "reg-hours-note": "* Sauf le vendredi et les jours fériés.",
            "reg-join-title": "Conditions d'Adhésion",
            "reg-age-title": "Condition d'âge",
            "reg-age-desc": "L'accès à la bibliothèque est autorisé à toute personne âgée de 12 ans et plus. Les enfants de moins de 12 ans doivent être accompagnés de leur tuteur.",
            "reg-process-title": "Processus d'inscription",
            "reg-process-desc": "Les inscriptions s'effectuent à distance via le site officiel ou en se rapprochant du service des inscriptions.",
            "reg-lending-title": "Services de Prêt",
            "reg-lending-internal": "Prêt interne",
            "reg-lending-internal-desc": "La bibliothèque fonctionne en accès libre aux rayonnages, permettant un contact direct avec le livre.",
            "reg-lending-external": "Prêt externe",
            "reg-lending-external-desc": "Les prêts s'effectuent quotidiennement (sauf vendredi) jusqu'à 16:00. Il est permis d'emprunter 2 livres pour 15 jours renouvelables.",
            "reg-internet-title": "Service Internet",
            "reg-internet-free": "Accès Gratuit",
            "reg-internet-free-desc": "L'accès à Internet est gratuit, et la salle ouvre selon les horaires de la bibliothèque.",
            "reg-internet-equip": "Équipement et Temps",
            "reg-internet-equip-desc": "La salle comprend 4 ordinateurs, avec une durée d'utilisation fixée à 20 minutes par utilisateur.",
            "reg-internet-support": "Services Additionnels",
            "reg-internet-support-desc": "Aide à la recherche, encadrement des étudiants et orientation bibliographique.",
            "reg-penalty-title": "Infractions et Pénalités",
            "reg-penalty-delay": "Retard de Retour",
            "reg-penalty-delay-desc": "En cas de retard, un avertissement est adressé au lecteur, suivi d'une suspension du prêt externe (1 semaine à 1 mois).",
            "reg-penalty-loss": "Perte de Livres",
            "reg-penalty-loss-desc": "Le contrevenant doit remplacer le livre perdu. La carte de lecteur est suspendue pour au moins 2 mois.",
            "reg-penalty-exclude": "Exclusion Définitive",
            "reg-penalty-exclude-desc": "Après trois avertissements consécutifs sans réponse, le lecteur est définitivement exclu et s'expose à des poursuites.",

            // Orders History
            "orders-history-breadcrumb": "Historique des commandes",
            "orders-history-title": "Historique de vos Prêts",
            "orders-history-desc": "Suivez le statut de vos demandes de livres réservés et empruntés",
            "orders-history-no-orders": "Vous n'avez aucune demande actuellement",
            "orders-history-no-orders-desc": "Vous pouvez commencer à emprunter des livres depuis notre catalogue",
            "orders-history-browse-books": "Parcourir le catalogue",
            "orders-history-status-pending": "En attente",
            "orders-history-status-approved": "Approuvé",
            "orders-history-status-rejected": "Rejeté",
            "orders-history-copy-id": "Code Exemplaire",
            "orders-history-awaiting-copy": "En attente d'affectation",
            "orders-history-book-details": "Détails du livre",

            // Hall Booking
            "booking-hero-badge": "Service de réservation professionnelle",
            "booking-hero-title": "Réservez votre espace créatif",
            "booking-hero-desc": "Des salles équipées des dernières technologies pour organiser vos événements, réunions et ateliers dans un cadre inspirant",
            "booking-halls-title": "Salles Disponibles",
            "booking-hall1-badge": "Grande salle",
            "booking-hall1-title": "Grande Salle de Conférences",
            "booking-hall1-cap": "150 personnes",
            "booking-hall1-equip": "Équipement complet",
            "booking-hall1-desc": "Idéale pour les grandes conférences, séminaires et projections. Équipée d'un système audio moderne et d'un projecteur HD.",
            "booking-hall2-badge": "Moyenne",
            "booking-hall2-title": "Salle de Réunion \"Tawassol\"",
            "booking-hall2-cap": "12-15 personnes",
            "booking-hall2-equip": "Wi-Fi rapide",
            "booking-hall2-desc": "Espace calme et confortable pour les réunions d'équipe, petits ateliers et sessions de formation intensives.",
            "booking-f1-title": "Confirmation Rapide",
            "booking-f1-desc": "Traitement rapide de vos demandes de réservation",
            "booking-f2-title": "Support Technique",
            "booking-f2-desc": "Accompagnement technique tout au long de votre activité",
            "booking-f3-title": "Service Traiteur",
            "booking-f3-desc": "Possibilité d'organiser des pauses café",
            "booking-form-title": "Demande de Réservation",
            "booking-form-name": "Nom Complet / Organisme",
            "booking-form-name-placeholder": "Entrez votre nom ou nom d'établissement",
            "booking-form-email": "Adresse E-mail",
            "booking-form-select-hall": "Choisir la salle",
            "booking-form-date": "Date",
            "booking-form-period": "Période",
            "booking-form-period-morning": "Matin",
            "booking-form-period-afternoon": "Après-midi",
            "booking-form-period-fullday": "Journée entière",
            "booking-form-submit": "Envoyer la demande",
            "booking-form-footer": "Notre équipe vous contactera sous peu pour finaliser les détails",
        },
        en: {
            dir: "ltr",
            lang: "en",
            // Navbar
            "nav-home": "Home",
            "nav-about": "About",
            "nav-director": "Director's Word",
            "nav-goals": "Missions & Goals",
            "nav-card": "Technical Card",
            "nav-regulations": "Regulations",
            "nav-services": "Services",
            "nav-join": "Join Us",
            "nav-catalog": "Catalog",
            "nav-hall": "Halls",
            "nav-complaints": "Complaints",
            "nav-activities": "Activities",
            "nav-prog": "Program",
            "nav-kids": "Kids Space",
            "nav-forum": "Book Forum",
            "nav-authors": "Local Authors",
            "nav-contact": "Contact",
            "nav-login": "Login",
            "nav-register": "Register",
            "nav-profile": "My Profile",
            "nav-history": "Loans",
            "nav-logout": "Logout",
            "nav-director-desc": "Welcome message from the administration",
            "nav-goals-desc": "Our vision and strategic goals",
            "nav-card-desc": "Technical information and statistics",
            "nav-regulations-desc": "Rules and regulations of use",
            "nav-join-desc": "Register to get a membership card",
            "nav-catalog-desc": "Browse available books and references",
            "nav-hall-desc": "Book a hall for events and meetings",
            "nav-complaints-desc": "Send your feedback and suggestions",
            "nav-prog-desc": "Upcoming events and activities",
            "nav-kids-desc": "Recreational and educational activities for kids",
            "nav-forum-desc": "Literary and cultural discussions",
            "nav-authors-desc": "Portal of local writers and authors",

            // General / Auth Modal
            "login-title": "Login",
            "login-subtitle": "Welcome back to your member space",
            "login-username-placeholder": "Reader code or Email",
            "login-password-placeholder": "Password",
            "login-btn": "Login",
            "login-forgot": "Forgot Password?",
            "login-no-account": "Don't have an account?",
            "login-register-link": "Register now",
            "close": "Close",

            // Footer
            "footer-desc": "Main Public Reading Library of Bejaia Wilaya - A space of knowledge, culture, and creativity for all ages.",
            "footer-links-title": "Quick Links",
            "footer-contact-title": "Contact",
            "footer-address": "Liberté Boulevard, Bejaia, Algeria",
            "footer-rights": "All rights reserved © 2026 Main Public Library of Bejaia",

            // Homepage Hero
            "hero-title": "Main Public Library",
            "hero-subtitle": "of Bejaia Wilaya",
            "hero-chahid": "Chahid Tahar Amrouchene",
            "hero-btn-card": "Get a Library Card",
            "hero-btn-catalog": "Search Book Catalog",

            // Stats
            "stat-titles": "Number of Titles",
            "stat-copies": "Number of Copies",
            "stat-readers": "Number of Readers",

            // Events
            "events-section-title": "Events & Activities",
            "events-section-subtitle": "Discover our latest cultural events and upcoming activities",
            "event-card-soon": "Soon",
            "event-card-free": "Free",
            "event-card-new": "New",
            "event-card-exclusive": "Exclusive",
            "event-card-active": "Active",
            "event-card-prizes": "Prizes",
            "event-card-think": "Ideas",
            "event-card-skills": "Skills",
            "event-card-cinema": "Cinema",
            "event-card-art": "Art",

            // Registration Steps
            "reg-title": "How to Register?",
            "reg-subtitle": "Our library is pleased to offer online membership via our official website. Register remotely to obtain your library card and enjoy your personal account space.",
            "step-1-title": "1. Online Registration",
            "step-1-desc": "Fill out the online registration form with your personal details.",
            "step-2-title": "2. Email Validation",
            "step-2-desc": "Check your email and confirm your address by clicking the link provided.",
            "step-3-title": "3. Download Form",
            "step-3-desc": "Download and print your signed reader commitment form.",
            "step-4-title": "4. Upload Form",
            "step-4-desc": "Scan and upload the signed form in your account space, then submit the original at the library.",
            "step-5-title": "5. Account Activation",
            "step-5-desc": "Once your documents are validated, your account will be activated and card generated.",
            "step-6-title": "6. Video Guide",
            "step-6-desc": "Watch our introductory video tutorial to learn more about the process.",

            // Services
            "services-title": "Our Services & Spaces",
            "services-subtitle": "Discover everything the Main Public Library of Bejaia has to offer you",
            "service-1-title": "Kids Space",
            "service-1-desc": "A dedicated reading space tailored to children's needs with special workshops and activities.",
            "service-2-title": "Cataloging & Lending",
            "service-2-desc": "Providing diverse documentary resources and professional lending services for users.",
            "service-3-title": "Promoting Reading",
            "service-3-desc": "Working to establish and spread the culture of reading throughout all segments of society.",
            "service-4-title": "Digitization & Network",
            "service-4-desc": "Facilitating access to information by leveraging modern information technologies.",
            "service-5-title": "Events & Book Fairs",
            "service-5-desc": "Organizing various book-related cultural activities (exhibitions, seminars, meetings).",
            "service-6-title": "Special Needs",
            "service-6-desc": "Providing dedicated tools and facilities to enable people with special needs to enjoy reading.",

            // Profile Page
            "profile-hero-active": "Active Member",
            "profile-step-1": "Info",
            "profile-step-2": "Email",
            "profile-step-3": "Documents",
            "profile-step-4": "Validation",
            "profile-status-review": "Under review",
            "profile-status-verified": "Verified",
            "profile-email-alert-title": "Email not verified",
            "profile-email-alert-desc": "Please verify your email address to activate all member privileges.",
            "profile-email-alert-btn": "Verify now",
            "profile-action-receipt": "Receipt",
            "profile-action-commit-ar": "Commitment (AR)",
            "profile-action-commit-fr": "Commitment (FR)",
            "profile-action-rfid": "RFID Card",
            "profile-action-pass": "Password",
            "profile-action-search": "Search Books",
            "profile-action-logout": "Logout",
            "profile-action-upload-eng": "Upload signed commitment",
            "profile-upload-title": "Upload signed form",
            "profile-upload-desc": "Upload a scanned copy (PDF or image) of your signed commitment form",
            "profile-upload-dropzone": "Click to choose a file",
            "profile-upload-formats": "PDF, JPG, PNG — Max size 10MB",
            "profile-upload-progress": "Uploading...",
            "profile-upload-cancel": "Cancel",
            "profile-upload-submit": "Upload file",
            "profile-card-personal": "Personal Information",
            "profile-card-contact": "Contact & Address",
            "profile-label-fullname": "Full Name",
            "profile-label-fullname-la": "Full Name (Latin)",
            "profile-label-birth": "Date of birth",
            "profile-label-job": "Profession",
            "profile-label-nin": "National ID (NIN)",
            "profile-label-email": "Email Address",
            "profile-label-phone": "Phone Number",
            "profile-label-address": "Residential Address",
            "profile-doc-status-title": "Uploaded Documents Status",
            "profile-doc-cni": "National ID (CNI)",
            "profile-doc-photo": "Profile Photo",
            "profile-doc-uploaded": "Uploaded",
            "profile-doc-missing": "Missing",
            "profile-rfid-title": "Library Card",

            // Books Catalog Page
            "catalog-title": "Library Book Catalog",
            "catalog-subtitle": "Search through thousands of valuable books and references available in our library",
            "catalog-search-placeholder": "Search by title, author, keywords...",
            "catalog-filter-all": "All",
            "catalog-filter-category": "Category",
            "catalog-filter-author": "Author",
            "catalog-filter-year": "Year",
            "catalog-btn-search": "Search",
            "catalog-table-title": "Book Title",
            "catalog-table-author": "Author",
            "catalog-table-category": "Category",
            "catalog-table-year": "Year",
            "catalog-table-status": "Status",
            "catalog-status-available": "Available",
            "catalog-status-borrowed": "Borrowed",

            // Registration Page (g.html)
            "g-header-title": "Library Registration",
            "g-header-subtitle": "Bejaia Main Public Reading Library",
            "g-step-1": "Personal Info",
            "g-step-2": "ID Photo",
            "g-step-3": "Contact Info",
            "g-step-4": "Supporting Docs",
            "g-step-5": "Summary & Submit",
            "g-step1-title": "Personal Information",
            "g-step1-desc": "Please enter your personal details for your library card",
            "g-step2-title": "ID Photo",
            "g-step2-desc": "Add a photo for your library card",
            "g-step3-title": "Contact Information",
            "g-step3-desc": "Enter your contact details and social networks",
            "g-step4-title": "Supporting Documents",
            "g-step4-desc": "Upload the documents required for registration",
            "g-step5-title": "Summary & Verification",
            "g-step5-desc": "Verify your information and create your credentials",
            "g-label-nom": "Last name in Arabic",
            "g-placeholder-nom": "Last name in Arabic",
            "g-label-prenom": "First name in Arabic",
            "g-placeholder-prenom": "First name in Arabic",
            "g-label-nom-latin": "Last Name (in Latin)",
            "g-placeholder-nom-latin": "Last Name in Latin",
            "g-label-prenom-latin": "First Name (in Latin)",
            "g-placeholder-prenom-latin": "First Name in Latin",
            "g-label-gender-title": "Gender",
            "g-gender-m": "Male",
            "g-gender-f": "Female",
            "g-label-nationality-title": "Nationality",
            "g-opt-choose-nationality": "Type or select your nationality",
            "g-opt-nationality-dz": "Algerian",
            "g-opt-nationality-fr": "French",
            "g-opt-nationality-ma": "Moroccan",
            "g-opt-nationality-tn": "Tunisian",
            "g-opt-nationality-other": "Other",
            "g-label-dob": "Date of Birth",
            "g-label-pob": "Place of Birth",
            "g-placeholder-pob": "Choose a Béjaïa municipality",
            "g-label-nin-title": "National ID Number",
            "g-placeholder-nin": "123456789012345678",
            "g-hint-nin": "18 digits without spaces",
            "g-label-is-parent": "Register as a parent (to register children with the same National ID)",
            "g-label-job-title": "Profession",
            "g-opt-choose-job": "Choose your profession",
            "g-opt-job-pupil": "Pupil",
            "g-opt-job-student": "Student",
            "g-opt-job-teacher": "Teacher",
            "g-opt-job-merchant": "Merchant",
            "g-opt-job-gov": "Public Servant",
            "g-opt-job-exec": "Executive",
            "g-opt-job-researcher": "Researcher",
            "g-opt-job-retired": "Retired",
            "g-opt-job-other": "Other",
            "g-photo-preview-name": "Photo Preview",
            "g-photo-upload-title": "Upload Photo",
            "g-photo-upload-desc": "Choose a photo from your device",
            "g-btn-browse": "Browse",
            "g-photo-capture-title": "Take Photo",
            "g-photo-capture-desc": "Use your webcam to take a photo",
            "g-btn-open-camera": "Open Camera",
            "g-btn-delete-photo": "Delete Photo",
            "g-success-box-title": "Great! Your registration is proceeding perfectly",
            "g-success-box-desc": "We have successfully saved your personal details. Please proceed to enter your contact info.",
            "g-label-email-title": "Email Address",
            "g-placeholder-email": "your@email.com",
            "g-label-phone-title": "Phone Number",
            "g-placeholder-phone": "06 00 00 00 00",
            "g-label-whatsapp-title": "WhatsApp",
            "g-label-same-as-phone": "Same as phone number",
            "g-label-address-title": "Address",
            "g-placeholder-address": "Full Address",
            "g-label-city-title": "City / Municipality",
            "g-placeholder-city": "Choose your municipality of residence",
            "g-label-zip-title": "Postal Code",
            "g-placeholder-zip": "Postal code",
            "g-social-title": "Social Networks (Optional)",
            "g-social-desc": "Follow us on our social networks to stay updated",
            "g-cni-front-title": "National ID Card (Front)",
            "g-cni-front-desc": "A clear photo of the front side",
            "g-doc-not-chosen": "No document selected",
            "g-btn-scan": "Scan",
            "g-btn-upload": "Upload",
            "g-cni-back-title": "National ID Card (Back)",
            "g-cni-back-desc": "A clear photo of the back side",
            "g-info-important-title": "Important Info:",
            "g-info-item-1": "National ID (both sides) is mandatory for all members",
            "g-info-item-2": "Make sure the image and details are highly legible",
            "g-info-item-3": "Accepted formats: JPG, PNG, PDF (max size 5MB)",
            "g-info-item-4": "You can scan documents directly using your camera",
            "g-summary-nin-label": "National ID (NIN):",
            "g-summary-identity-title": "Identity",
            "g-summary-gender-label": "Gender",
            "g-summary-dob-label": "Date of Birth",
            "g-summary-pob-label": "Place of Birth",
            "g-summary-nationality-label": "Nationality",
            "g-summary-prof-contact-title": "Profession & Contact",
            "g-summary-job-label": "Profession",
            "g-summary-email-label": "Email Address",
            "g-summary-phone-label": "Phone Number",
            "g-summary-whatsapp-label": "WhatsApp",
            "g-summary-address-title": "Address",
            "g-summary-address-label": "Full Address",
            "g-summary-city-label": "City / Municipality",
            "g-summary-zip-label": "Postal Code",
            "g-summary-docs-status-title": "Documents Status",
            "g-summary-cni-front-label": "ID Card",
            "g-summary-cni-back-label": "ID Card (Back)",
            "g-summary-status-pending": "Pending",
            "g-cred-username-title": "Reader code",
            "g-cred-username-sub": "Generated automatically by yearly order",
            "g-cred-username-placeholder": "Shown after registration",
            "g-cred-username-hint": "You can log in later with this reader code or your email",
            "g-cred-password-title": "Password",
            "g-cred-password-sub": "Choose your password",
            "g-cred-password-placeholder": "Password",
            "g-cred-confirm-title": "Confirm Password",
            "g-cred-confirm-sub": "Repeat your password",
            "g-cred-confirm-placeholder": "Repeat your password",
            "g-conditions-label": "I declare that I have read and agree to the Terms of Use and Privacy Policy.",
            "g-terms-link": "the Terms of Use",
            "g-privacy-link": "the Privacy Policy",
            "g-btn-finish": "Finish Registration",
            "g-btn-next": "Next",
            "g-btn-prev": "Previous",

            // Director Word Page (Specifics)
            "director-bismillah": "In the name of Allah, the Most Gracious, the Most Merciful",
            "director-p1": "Books have always been and will remain the best companion for mankind. Libraries have always been lofty minarets of science and knowledge, their existence representing scientific progress and civilizational development as the mirror reflecting society.",
            "director-p2": "The Main Public Reading Library of Bejaia is an institution of education and culture established to foster and strengthen the citizen's love for reading. It provides the means to enrich readers' knowledge, raising the status of science and knowledge. It is a space allowing youth to develop their potential and express their talents by utilizing its various services and spaces.",
            "director-p3": "In this context, the Main Public Reading Library of Bejaia provides multiple services tailored to the ages and educational levels of its patrons, utilizing modern technologies to facilitate access, aligned with the Algerian state's goal: making books of all specialties accessible to citizens.",
            "director-p4": "It is an honor for us to offer this noble service to library patrons of all categories. We work diligently to meet their expectations, enhance the reading rate in this beautiful region, and raise our beloved country's status among nations.",
            "director-wishes-h3": "May Allah guide us all to what is best for this nation.",
            "director-wishes-p1": "May Allah protect our nation, Algeria.",
            "director-wishes-p2": "Glory and eternity to our honorable martyrs.",
            "director-sig-title": "Director of the Main Public Reading Library of Bejaia",
            "director-sig-name": "May he rest in peace - Mr. Hammouche Mehani",

            // Goals Page (Specifics)
            "goals-badge": "Our Values & Mission",
            "goals-hero-title": "Missions & Goals of the Public Library",
            "goals-hero-desc": "We strive to make the library a vital center of knowledge and culture, serving all members of society and enhancing cultural awareness.",
            "goal-1": "Providing various documentary resources and services related to public reading and all other annexed services at the disposal of users.",
            "goal-2": "Allocating a public reading space adapted to children's needs.",
            "goal-3": "Providing a space for studying and preparing for exams.",
            "goal-4": "Facilitating the development of basic computer literacy skills.",
            "goal-5": "Providing the means for disabled individuals to access public reading.",
            "goal-6": "Organizing cultural activities centered around books.",
            "goal-7": "Making all available information resources accessible to all who wish to consult them.",
            "goal-8": "Providing free search facilities and services to help individuals expand their knowledge according to their needs and interests.",
            "goal-9": "Helping to achieve school education goals by expanding the student's horizon and academic understanding.",
            "goal-10": "Encouraging and supporting reading among citizens by providing books that satisfy all needs and tastes.",
            "goal-11": "Providing readers with the necessary information to update their work in their jobs and society.",

            // Technical Card Page (Specifics)
            "tech-hero-title": "Technical Card of the Library",
            "tech-hero-desc": "Presentation of the Main Public Reading Library of Bejaia",
            "tech-history-title": "Historical Overview of the Library",
            "tech-history-p1": "Built by the Almohads in the middle of the twelfth century (around 1154), it then underwent modifications by the Spaniards after their occupation of the city in 1510.",
            "tech-history-p2": "It takes a rectangular shape and extends over nearly two hectares, with its longest side measuring about 160 meters on uneven ground with an altitude difference of 22 meters.",
            "tech-history-p3": "The Casbah contains several buildings dating back to the Berber or Spanish periods, with some minor modifications introduced during the Ottoman and French periods.",
            "tech-card-fort": "The Fortress",
            "tech-card-fort-desc": "Likely built during the Spanish period (sixteenth century), it contains a large closed hall believed to have been a gunpowder warehouse.",
            "tech-card-mosque": "The Mosque",
            "tech-card-mosque-desc": "Featuring ancient Berber architecture, likely built in the Almohad era, it was the place of prayer for the Almohad governor, and later became Ibn Khaldoun's teaching center.",
            "tech-card-square": "The Square Building",
            "tech-card-square-desc": "Believed to be from the Spanish era, modified later by the Ottomans and the French, containing an inner courtyard and galleries.",
            "tech-shifts-title": "Modern Transformations",
            "tech-shift-1-date": "December 2010",
            "tech-shift-1-desc": "Termination of the library activity that was located inside the mosque of the Casbah under the National Library of Algeria.",
            "tech-shift-2-date": "May 14, 2016",
            "tech-shift-2-desc": "Officially inaugurated by the Minister of Culture, Mr. Azzedine Mihoubi.",
            "tech-map-title": "Geographical Location",
            "tech-map-desc": "Located on Krim Belkacem Boulevard in Ihaddaden, Bejaia, 2 km from the Wilaya headquarters.",
            "tech-dir-n": "North",
            "tech-dir-n-desc": "Soummam Radio and House of Culture",
            "tech-dir-s": "South",
            "tech-dir-s-desc": "Olympia Park",
            "tech-dir-e": "East",
            "tech-dir-e-desc": "Djezzy Agency and AGB Bank",
            "tech-dir-w": "West",
            "tech-dir-w-desc": "Mezaia Lake",

            // Cultural Activities
            "activities-hero-title": "Cultural Hub & Activities",
            "activities-hero-desc": "Discover cultural events, lectures, interactive workshops, and art exhibitions hosted by the Bejaia Main Library year-round.",
            "activities-badge": "Events & Activities",
            "activities-filter-all": "All",
            "activities-filter-literary": "Literary",
            "activities-filter-workshop": "Workshop",
            "activities-filter-exhibition": "Exhibition",
            "activities-filter-children": "Kids Space",
            "activities-filter-conference": "Conference",
            "activities-search-placeholder": "Search events...",
            "activities-calendar-modal-title": "Activities Calendar",

            // Event Details
            "event-details-about": "About the Event",
            "event-details-program": "Activity Program",
            "event-details-video": "Event Video",
            "event-details-book-seat": "Book a Seat",
            "event-details-book-desc": "Please fill out the form below to confirm your attendance. Seats are limited.",
            "event-details-label-name": "Full Name",
            "event-details-placeholder-name": "Enter your full name",
            "event-details-label-phone": "Phone Number",
            "event-details-btn-confirm": "Confirm Booking",
            "event-details-footer-note": "You will receive a confirmation message on your phone once processed.",
            "event-details-share": "Share",
            "event-details-add-calendar": "Add to Calendar",

            // Internal Regulations
            "reg-hero-title": "Internal Regulations",
            "reg-hero-desc": "Rules and guidelines for using the Main Public Library of Bejaia",
            "reg-hours-title": "Library Opening Hours",
            "reg-hours-days": "Weekdays (Except Friday)",
            "reg-hours-desc": "The library opens its doors to the public throughout the week",
            "reg-hours-from": "09:00 AM",
            "reg-hours-to": "10:00 PM",
            "reg-hours-note": "* Except Friday and official public holidays.",
            "reg-join-title": "Membership Conditions",
            "reg-age-title": "Age Requirement",
            "reg-age-desc": "Library entry is allowed for anyone aged 12 and above. Children under 12 must be accompanied by a guardian.",
            "reg-process-title": "Registration Process",
            "reg-process-desc": "Registration is carried out online through the official website or at the registration office.",
            "reg-lending-title": "Lending Services",
            "reg-lending-internal": "In-house Reading",
            "reg-lending-internal-desc": "The library runs on an open-shelf policy, enabling direct access to all books.",
            "reg-lending-external": "External Borrowing",
            "reg-lending-external-desc": "Borrowing is processed daily (except Friday) until 16:00. Up to 2 books can be borrowed for 15 days.",
            "reg-internet-title": "Internet Service",
            "reg-internet-free": "Free Access",
            "reg-internet-free-desc": "Internet access is completely free, and the lab opens during library hours.",
            "reg-internet-equip": "Devices & Time Limit",
            "reg-internet-equip-desc": "The lab has 4 computers, and usage is limited to 20 minutes per person.",
            "reg-internet-support": "Additional Services",
            "reg-internet-support-desc": "Search assistance, student mentorship, and bibliographical guidance.",
            "reg-penalty-title": "Offenses & Penalties",
            "reg-penalty-delay": "Late Returns",
            "reg-penalty-delay-desc": "If books are returned late, a warning is sent, followed by a suspension of borrowing rights (1 week to 1 month).",
            "reg-penalty-loss": "Lost Books",
            "reg-penalty-loss-desc": "The user must replace the lost book. The reader card is suspended for a minimum of 2 months.",
            "reg-penalty-exclude": "Permanent Exclusion",
            "reg-penalty-exclude-desc": "After three unanswered warning letters, the reader will face permanent exclusion and legal action.",

            // Orders History
            "orders-history-breadcrumb": "Order History",
            "orders-history-title": "Your Borrowing History",
            "orders-history-desc": "Track the status of your reserved and borrowed books",
            "orders-history-no-orders": "You currently have no borrowing requests",
            "orders-history-no-orders-desc": "Start borrowing books by searching the library catalog",
            "orders-history-browse-books": "Browse Catalog",
            "orders-history-status-pending": "Pending",
            "orders-history-status-approved": "Approved",
            "orders-history-status-rejected": "Rejected",
            "orders-history-copy-id": "Copy ID",
            "orders-history-awaiting-copy": "Awaiting copy assignment",
            "orders-history-book-details": "Book Details",

            // Hall Booking
            "booking-hero-badge": "Professional space booking service",
            "booking-hero-title": "Book Your Creative Space",
            "booking-hero-desc": "Rooms equipped with modern amenities to host your events, team meetings, and interactive workshops",
            "booking-halls-title": "Available Halls",
            "booking-hall1-badge": "Grand Hall",
            "booking-hall1-title": "Grand Lecture Hall",
            "booking-hall1-cap": "150 people",
            "booking-hall1-equip": "Fully equipped",
            "booking-hall1-desc": "Perfect for large conferences, academic seminars, and film screenings. Outfitted with premium audio and HD projection.",
            "booking-hall2-badge": "Medium",
            "booking-hall2-title": "Tawassol Meeting Room",
            "booking-hall2-cap": "12-15 people",
            "booking-hall2-equip": "Fast Wi-Fi",
            "booking-hall2-desc": "A quiet and comfortable workspace designed for team meetings, small group brainstorming, and training courses.",
            "booking-f1-title": "Instant Confirmation",
            "booking-f1-desc": "Fast processing for all booking inquiries",
            "booking-f2-title": "Technical Support",
            "booking-f2-desc": "On-site tech assistance during your entire event",
            "booking-f3-title": "Catering Service",
            "booking-f3-desc": "Coffee breaks and catering arrangements available",
            "booking-form-title": "Booking Request",
            "booking-form-name": "Full Name / Organization",
            "booking-form-name-placeholder": "Enter your name or establishment name",
            "booking-form-email": "E-mail Address",
            "booking-form-select-hall": "Select Hall",
            "booking-form-date": "Date",
            "booking-form-period": "Time slot",
            "booking-form-period-morning": "Morning",
            "booking-form-period-afternoon": "Afternoon",
            "booking-form-period-fullday": "Full Day",
            "booking-form-submit": "Send Request",
            "booking-form-footer": "Our team will contact you shortly to confirm details",
        },
        kab: {
            dir: "ltr",
            lang: "kab",
            // Navbar
            "nav-home": "Axxam",
            "nav-about": "Awal ɣef",
            "nav-director": "Awal n Unemhal",
            "nav-goals": "Tiwinin & Iswan",
            "nav-card": "Tafriqt Tatikit",
            "nav-regulations": "Alugen Agensan",
            "nav-services": "Imeẓla",
            "nav-join": "Ajerred",
            "nav-catalog": "Katalug",
            "nav-hall": "Tisura",
            "nav-complaints": "Tisemgriyin",
            "nav-activities": "Armuden Idelsanen",
            "nav-prog": "Ahil",
            "nav-kids": "Tallunt n Warrac",
            "nav-forum": "Asagur n Wedlis",
            "nav-authors": "Imyura Inamuren",
            "nav-contact": "Anermis",
            "nav-login": "Kcem",
            "nav-register": "Jerred",
            "nav-profile": "Profil-iw",
            "nav-history": "Umuɣ n Arettal",
            "nav-logout": "Ffeɣ",
            "nav-director-desc": "Izen n wansuf seg tenmehla",
            "nav-goals-desc": "Tamuɣli d yiswan-nneɣ ussnan",
            "nav-card-desc": "Isalan itikniyen d tsemnayin",
            "nav-regulations-desc": "Ilugan d tarrayin n useqdec",
            "nav-join-desc": "Jerred iwakken ad tawid tafriqt",
            "nav-catalog-desc": "Wali idlisen d yiseɣwan yellan",
            "nav-hall-desc": "Ttafen aseɣru n tura i tfaskiwin",
            "nav-complaints-desc": "Azen tiseɣriwin d yisenniyen inek",
            "nav-prog-desc": "Timliliyin d yirmuden i d-itetten",
            "nav-kids-desc": "Armuden n wezha d usguri i yimzyanen",
            "nav-forum-desc": "Timyelliyin taseklanin d yidles",
            "nav-authors-desc": "Tasebburt n yimyura inamuren",

            // General / Auth Modal
            "login-title": "Kcem",
            "login-subtitle": "Ansuf yis-k ɣer tallunt-ik",
            "login-username-placeholder": "Code lecteur neɣ E-mail",
            "login-password-placeholder": "Tasarut",
            "login-btn": "Kcem",
            "login-forgot": "Ttuḍ tasarut-ik?",
            "login-no-account": "Ur tesɛiḍ ara akayad?",
            "login-register-link": "Jerred tura",
            "close": "Mdel",

            // Footer
            "footer-desc": "Tamkarḍit Tamezwarut n Tɣuri Tazayezt n Tlayet n Bgayet - Tallunt n tussna, yidles d usnulfu i yal taseddart.",
            "footer-links-title": "Iseɣwan Izazlanen",
            "footer-contact-title": "Anermis",
            "footer-address": "Abrid n Tlelli, Bgayet, Lezzayer",
            "footer-rights": "Izerfan akk ddren © 2026 Tamkarḍit Tamezwarut n Bgayet",

            // Homepage Hero
            "hero-title": "Tamkarḍit Tamezwarut",
            "hero-subtitle": "n Tɣuri Tazayezt n Bgayet",
            "hero-chahid": "Chahid Tahar Amrouchene",
            "hero-btn-card": "Awi Tafriqt n Umaslad",
            "hero-btn-catalog": "Nadi deg Ukatalug",

            // Stats
            "stat-titles": "Amḍan n Yizwilan",
            "stat-copies": "Amḍan n Tnigriyin",
            "stat-readers": "Amḍan n Yimasladen",

            // Events
            "events-section-title": "Armuden & Timliliyin",
            "events-section-subtitle": "Wali armuden-nneɣ idelsanen d yirimuren i d-itetten",
            "event-card-soon": "Qrib",
            "event-card-free": "Baṭel",
            "event-card-new": "Amaynut",
            "event-card-exclusive": "Amsiɣer",
            "event-card-active": "Urmid",
            "event-card-prizes": "Arraz",
            "event-card-think": "Tamezla",
            "event-card-skills": "Tazulin",
            "event-card-cinema": "Sinima",
            "event-card-art": "Taẓuri",

            // Registration Steps
            "reg-title": "Amek ad tjerdeḍ?",
            "reg-subtitle": "Tamkarḍit-nneɣ tella iwakken ad tjerdeḍ srid deg web. Jerred seg yimi-k iwakken ad t-awiḍ tafriqt n tɣuri d tizmirt n tallunt-ik tudmawt.",

            // Services
            "services-title": "Imeẓla & Tallunin-nneɣ",
            "services-subtitle": "Wali ayen akk i d-tettak Tamkarḍit Tamezwarut n Bgayet i yis-k",
            "service-1-title": "Tallunt n Warrac",
            "service-1-desc": "Tallunt n tɣuri yeleggeḍ i warrac s yirmuden d yisuda isuyas.",
            "service-2-title": "Katalug d Urettal",
            "service-2-desc": "Tazmert n useqdec n yidlisen d urettal n yisegnas.",
            "service-3-title": "Asnerni n Tɣuri",
            "service-3-desc": "Leqdic iwakken ad tili tenfali tazayezt n tɣuri deg tmetti.",
            "service-4-title": "Aselkim d Uẓeṭṭa",
            "service-4-desc": "Afra n unermis n talɣut s tseknoloğiyin timaynutin.",
            "service-5-title": "Armuden d Yisuda",
            "service-5-desc": "Tifsarin, timliliyin, isuda d tmidranin idelsanen ɣef udlis.",
            "service-6-title": "Imeẓla i Yijeɛdiyen",
            "service-6-desc": "Allalen yeleggeḍ iwakken anermis n tɣuri ad yili i yal yiwen.",

            // Profile Page
            "profile-hero-active": "Amaslad Urmid",
            "profile-step-1": "Talɣut",
            "profile-step-2": "E-mail",
            "profile-step-3": "Isemlan",
            "profile-step-4": "Asentem",
            "profile-status-review": "Deg usegzi",
            "profile-status-verified": "Intem",
            "profile-email-alert-title": "E-mail ur yentem ara",
            "profile-email-alert-desc": "Di lbaḍel asentem e-mail-ik iwakken ad tizmireḍ ad tseqdaceḍ imeẓla n tmasladt.",
            "profile-email-alert-btn": "Asentem tura",
            "profile-action-receipt": "Aganeɣ",
            "profile-action-commit-ar": "Tugna (AR)",
            "profile-action-commit-fr": "Tugna (FR)",
            "profile-action-rfid": "Tafriqt RFID",
            "profile-action-pass": "Awal n uɛaddi",
            "profile-action-search": "Nadi adlis",
            "profile-action-logout": "Ffeɣ",
            "profile-action-upload-eng": "Sali tafuyt yettwazamlen",
            "profile-upload-title": "Sali tafuyt yettwazamlen",
            "profile-upload-desc": "Sali tafilt (PDF neɣ tugna) n tkerḍa n uεahad seld azamel",
            "profile-upload-dropzone": "Sit akken ad tferneḍ afaylu",
            "profile-upload-formats": "PDF, JPG, PNG — Tiddi tameqqrant 10MB",
            "profile-upload-progress": "Asali...",
            "profile-upload-cancel": "Sefsex",
            "profile-upload-submit": "Sali afaylu",
            "profile-card-personal": "Talɣut Tudmawt",
            "profile-card-contact": "Anermis d Tansa",
            "profile-label-fullname": "Isem d Yisem n twacult",
            "profile-label-fullname-la": "Isem d Yisem n twacult (Latin)",
            "profile-label-birth": "Azemz n tlalit",
            "profile-label-job": "Axeddim",
            "profile-label-nin": "Uṭṭun n ucali anamur (NIN)",
            "profile-label-email": "Tansa E-mail",
            "profile-label-phone": "Uṭṭun n usir",
            "profile-label-address": "Tansa n Tnezduɣt",
            "profile-doc-status-title": "Addad n yisliyen yulin",
            "profile-doc-cni": "Tafriqt n ucali (CNI)",
            "profile-doc-photo": "Tugna n ucali",
            "profile-doc-uploaded": "Yuli",
            "profile-doc-missing": "Ur yelli ara",
            "profile-rfid-title": "Tafriqt n Umaslad",

            // Books Catalog Page
            "catalog-title": "Katalug n Temkarḍit",
            "catalog-subtitle": "Nadi gar luluf n yidlisen yellan deg temkarḍit-nneɣ",
            "catalog-search-placeholder": "Nadi s yisem, s umyaru, neɣ s tguri...",
            "catalog-filter-all": "Akk",
            "catalog-filter-category": "Taseddast",
            "catalog-filter-author": "Amyaru",
            "catalog-filter-year": "Aseggas",
            "catalog-btn-search": "Nadi",
            "catalog-table-title": "Azwel n udlis",
            "catalog-table-author": "Amyaru",
            "catalog-table-category": "Taseddast",
            "catalog-table-year": "Aseggas",
            "catalog-table-status": "Addad",
            "catalog-status-available": "Yella",
            "catalog-status-borrowed": "Arettal",

            // Registration Page (g.html)
            "g-header-title": "Tiggezt di Temkarḍit",
            "g-header-subtitle": "Tamkarḍit Tamezwarut n Tɣuri Tazayezt di Bgayet",
            "g-step-1": "Isalan n Timadit",
            "g-step-2": "Tugna n Unekcum",
            "g-step-3": "Tansiwin & Unermis",
            "g-step-4": "Isemlanin Inamuren",
            "g-step-5": "Agzul & Tiggezt",
            "g-step1-title": "Isalan n Timadit",
            "g-step1-desc": "Tazmilt n yisalan inamuren i tkarḍit n temkarḍit",
            "g-step2-title": "Tugna n Unekcum",
            "g-step2-desc": "Rnu tugna n udem i tkarḍit n temkarḍit",
            "g-step3-title": "Tansiwin & Unermis",
            "g-step3-desc": "Kcem tansiwin n unermis d ttawilan n yisenfaren",
            "g-step4-title": "Isemlanin Inamuren",
            "g-step4-desc": "Sers isemlanin imeskarayen n teggezt inek",
            "g-step5-title": "Agzul & Tiggezt",
            "g-step5-desc": "Senqed isalan inek ar zdat n usali n uyan",
            "g-label-nom": "Nom en arabe",
            "g-placeholder-nom": "Nom en arabe",
            "g-label-prenom": "Prénom en arabe",
            "g-placeholder-prenom": "Prénom en arabe",
            "g-label-nom-latin": "Isem n Twacult (s Tlatint)",
            "g-placeholder-nom-latin": "Nom en latin",
            "g-label-prenom-latin": "Isem (s Tlatint)",
            "g-placeholder-prenom-latin": "Prénom en latin",
            "g-label-gender-title": "Tawsit",
            "g-gender-m": "Argaz",
            "g-gender-f": "Tameṭṭut",
            "g-label-nationality-title": "Taɣlent",
            "g-opt-choose-nationality": "Aru neɣ fren taɣlent inek",
            "g-opt-nationality-dz": "Tazzayrit",
            "g-opt-nationality-fr": "Tafrensist",
            "g-opt-nationality-ma": "Tamarokit",
            "g-opt-nationality-tn": "Tatunsit",
            "g-opt-nationality-other": "Tayeḍ",
            "g-label-dob": "Azemz n Tlalit",
            "g-label-pob": "Addeg n Tlalit",
            "g-placeholder-pob": "Fren taɣiwant n Bgayet",
            "g-label-nin-title": "Uṭṭun n Ucali Anamur",
            "g-placeholder-nin": "123456789012345678",
            "g-hint-nin": "18 n yiguza war tilem",
            "g-label-is-parent": "Tiggezt n Umasar (i warra-inek s uṭṭun anamur)",
            "g-label-job-title": "Axeddim",
            "g-opt-choose-job": "Fren axeddim inek",
            "g-opt-job-pupil": "Anelmad",
            "g-opt-job-student": "Amsdawan",
            "g-opt-job-teacher": "Aselmad",
            "g-opt-job-merchant": "Aznag",
            "g-opt-job-gov": "Amasar n unabaq",
            "g-opt-job-exec": "Amasar",
            "g-opt-job-researcher": "Amyag",
            "g-opt-job-retired": "Asegbar",
            "g-opt-job-other": "Ayaḍ",
            "g-photo-preview-name": "Senqed tugna",
            "g-photo-upload-title": "Sers tugna",
            "g-photo-upload-desc": "Fren tugna seg ubila inek",
            "g-btn-browse": "Parcourir",
            "g-photo-capture-title": "Tṭef tugna",
            "g-photo-capture-desc": "Seqdec takamra n web inek",
            "g-btn-open-camera": "Ldi takamra",
            "g-btn-delete-photo": "Kkes tugna",
            "g-success-box-title": "Ayuz! Azal n teggezt inek ilha nezzeh",
            "g-success-box-desc": "Nsekles isalan-inek n timadit s tezmert. Kcem isalan-inek n unermis tura.",
            "g-label-email-title": "Tansa E-mail",
            "g-placeholder-email": "your@email.com",
            "g-label-phone-title": "Uṭṭun n usir",
            "g-placeholder-phone": "06 00 00 00 00",
            "g-label-whatsapp-title": "WhatsApp",
            "g-label-same-as-phone": "D uṭṭun-nni n usir",
            "g-label-address-title": "Tansa",
            "g-placeholder-address": "Tansa tačurant",
            "g-label-city-title": "Taɣremt / Taɣiwant",
            "g-placeholder-city": "Fren taɣiwant n tnezduɣt",
            "g-label-zip-title": "Uṭṭun n lbusta",
            "g-placeholder-zip": "Uṭṭun n lbusta",
            "g-social-title": "Isenfaren imetiyen (D ufran)",
            "g-social-desc": "Dfer-aɣ di yisenfaren-nneɣ imetiyen iwakken ad tafeḍ isalan imaynuten",
            "g-cni-front-title": "Tafriqt n Ucali (Zdat)",
            "g-cni-front-desc": "Tugna tazedgant n zdat",
            "g-doc-not-chosen": "Ur yelli kra n ufyir i yettwafrnen",
            "g-btn-scan": "Skanner",
            "g-btn-upload": "Téléverser",
            "g-cni-back-title": "Tafriqt n Ucali (Deffir)",
            "g-cni-back-desc": "Tugna tazedgant n deffir",
            "g-info-important-title": "Isalan imeskarayen:",
            "g-info-item-1": "Tafriqt n ucali (zdat/deffir) d tin yettwaṭalben i yal win yuran",
            "g-info-item-2": "Senqed aḍris d tugna ma lhan nezzeh",
            "g-info-item-3": "Imeɣraden yettwaqblen: JPG, PNG, PDF (max 5MB)",
            "g-info-item-4": "Tzmer ad tskannred isemlanin s tkamra inek",
            "g-summary-nin-label": "Uṭṭun Anamur (NIN) :",
            "g-summary-identity-title": "Tawsit & Timadit",
            "g-summary-gender-label": "Tawsit",
            "g-summary-dob-label": "Azemz n Tlalit",
            "g-summary-pob-label": "Addeg n Tlalit",
            "g-summary-nationality-label": "Taɣlent",
            "g-summary-prof-contact-title": "Axeddim & Unermis",
            "g-summary-job-label": "Axeddim",
            "g-summary-email-label": "Tansa E-mail",
            "g-summary-phone-label": "Uṭṭun n usir",
            "g-summary-whatsapp-label": "WhatsApp",
            "g-summary-address-title": "Tansa",
            "g-summary-address-label": "Tansa Tačurant",
            "g-summary-city-label": "Taɣremt / Taɣiwant",
            "g-summary-zip-label": "Uṭṭun n Lbusta",
            "g-summary-docs-status-title": "Addad n yisemlanin",
            "g-summary-cni-front-label": "Tafriqt n Ucali",
            "g-summary-cni-back-label": "Tafriqt n Ucali (Deffir)",
            "g-summary-status-pending": "Aql-it deg ugani",
            "g-cred-username-title": "Code lecteur",
            "g-cred-username-sub": "Ad yettwarnu s wudem awurman s umḍan n useggas",
            "g-cred-username-placeholder": "Ad iban ticki tekfaḍ",
            "g-cred-username-hint": "Tzemreḍ ad tkecmeḍ s code lecteur neɣ e-mail",
            "g-cred-password-title": "Awal n Uɛaddi",
            "g-cred-password-sub": "Fren awal n uɛaddi inek",
            "g-cred-password-placeholder": "Awal n uɛaddi",
            "g-cred-confirm-title": "Sentem Awal n Uɛaddi",
            "g-cred-confirm-sub": "Kcem daɣen awal n uɛaddi inek",
            "g-cred-confirm-placeholder": "Kcem daɣen awal n uɛaddi inek",
            "g-conditions-label": "Nenna-d belli nɣra yerna neqbel tiwtilin n useqdec d tsertit n tbaḍnit.",
            "g-terms-link": "tiwtilin n useqdec",
            "g-privacy-link": "tasertit n tbaḍnit",
            "g-btn-finish": "Fak Tiggezt",
            "g-btn-next": "Afus zdat",
            "g-btn-prev": "Afus deffir",

            // Director Word Page (Specifics)
            "director-bismillah": "S yisem n Yakuc, Anegbay, Amezwar",
            "director-sig-title": "Anemhal n Temkarḍit n Bgayet",
            "director-sig-name": "Paix à son âme - M. Hammouche Mehani",

            // Goals Page (Specifics)
            "goals-badge": "Iswan & Tisura-nneɣ",
            "goals-hero-title": "Tiwinin & Iswan n Temkarḍit",

            // Technical Card Page (Specifics)
            "tech-hero-title": "Tafriqt Tatikit n Temkarḍit",

            // Cultural Activities
            "activities-hero-title": "Tallunt Idelsanen & Yirmuden",
            "activities-hero-desc": "Wali timliliyin d yirmuden yellan deg temkarḍit n Bgayet deg useggas.",
            "activities-badge": "Armuden & Timliliyin",
            "activities-filter-all": "Akk",
            "activities-filter-literary": "Asemlan",
            "activities-filter-workshop": "Isuda",
            "activities-filter-exhibition": "Tafeṣra",
            "activities-filter-children": "Arrac",
            "activities-filter-conference": "Asuneḍ",
            "activities-search-placeholder": "Nadi armud...",
            "activities-calendar-modal-title": "Ahil n Yirmuden",

            // Event Details
            "event-details-about": "Gar armud",
            "event-details-program": "Ahil n wurmud",
            "event-details-video": "Adeg n wurmud",
            "event-details-book-seat": "Awi adeg",
            "event-details-book-desc": "Čur talɣut iwakken ad t-awiḍ adeg n tɣuri.",
            "event-details-label-name": "Isem ačuran",
            "event-details-placeholder-name": "Isem-ik dagi",
            "event-details-label-phone": "Uṭṭun n usir",
            "event-details-btn-confirm": "Sentem ajerred",
            "event-details-share": "Bḍu",
            "event-details-add-calendar": "Rnu ɣer wahil",

            // Internal Regulations
            "reg-hero-title": "Alugen Agensan",
            "reg-hero-desc": "Ilugan n useqdec n Temkarḍit Tamezwarut n Bgayet",
            "reg-hours-title": "Ahil n Tlelli",
            "reg-hours-days": "Ussan n ddurt (sani lǧemɛa)",
            "reg-hours-from": "09:00 n ṣṣbeḥ",
            "reg-hours-to": "22:00 n yiḍ",
            "reg-join-title": "Ilugan n Umaslad",
            "reg-age-title": "Ilugan n yila",
            "reg-internet-title": "Imeẓla n Internet",
            "reg-internet-free": "Internet Baṭel",
            "reg-penalty-title": "Ijeɛdiyen d Tiɣtas",

            // Orders History
            "orders-history-breadcrumb": "Umuɣ n urettal",
            "orders-history-title": "Umuɣ n yidlisen-ik",
            "orders-history-desc": "Wali addad n urettal n yidlisen-ik",
            "orders-history-no-orders": "Ur tesɛiḍ ara arettal tura",
            "orders-history-browse-books": "Nadi deg ukatalug",
            "orders-history-status-pending": "Deg usegzi",
            "orders-history-status-approved": "Intem",
            "orders-history-status-rejected": "Ur yentem ara",
            "orders-history-copy-id": "Uṭṭun n udlis",
            "orders-history-book-details": "Talɣut n udlis",

            // Hall Booking
            "booking-hero-badge": "Imeẓla n ujerred n texxamin",
            "booking-hero-title": "Jerred tallunt-ik tasnulfayt",
            "booking-halls-title": "Tixxamin yellan",
            "booking-hall1-badge": "Taxxamt tamezwarut",
            "booking-hall1-title": "Taxxamt Tamezwarut n Timliliyin",
            "booking-hall1-cap": "150 n yimdanen",
            "booking-hall2-badge": "Taxxamt",
            "booking-hall2-title": "Taxxamt n Timliliyin 'Tawassol'",
            "booking-form-title": "Tariɣt n ujerred",
            "booking-form-name": "Isem / Tuddsa",
            "booking-form-email": "Tansa E-mail",
            "booking-form-select-hall": "Fren taxxamt",
            "booking-form-date": "Azemz",
            "booking-form-period": "Tallunt",
            "booking-form-submit": "Azen Tariɣt",
        }
    },

    // Maps page text content dynamically by finding target elements or text nodes
    translatePage: function(lang) {
        const dict = this.translations[lang];
        if (!dict) return;

        // Apply global html dir and lang
        document.documentElement.dir = dict.dir;
        document.documentElement.lang = dict.lang;

        // 1. Data-i18n attributes translation
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.placeholder = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // 2. Direct selector-based replacement (Highly robust for major page sections)
        const selectors = {
            // Navbar / Header
            "header nav a[href='./'], header nav a[href='../']": "nav-home",
            "header nav a[href='#']:nth-of-type(1)": "nav-about",
            "header nav a[href*='director-word.html'] .dropdown-title": "nav-director",
            "header nav a[href*='library-goals.html'] .dropdown-title": "nav-goals",
            "header nav a[href*='technical-card.html'] .dropdown-title": "nav-card",
            "header nav a[href*='internal-regulations.html'] .dropdown-title": "nav-regulations",
            "header nav div.nav-item:nth-of-type(2) > a": "nav-services",
            "header nav a[href*='pages/g.html'] .dropdown-title, header nav a[href*='../pages/g.html'] .dropdown-title": "nav-join",
            "header nav a[href*='books-catalog.html'] .dropdown-title": "nav-catalog",
            "header nav a[href*='hall-booking.html'] .dropdown-title": "nav-hall",
            "header nav a[href*='director-word.html'] .dropdown-desc": "nav-director-desc",
            "header nav a[href*='library-goals.html'] .dropdown-desc": "nav-goals-desc",
            "header nav a[href*='technical-card.html'] .dropdown-desc": "nav-card-desc",
            "header nav a[href*='internal-regulations.html'] .dropdown-desc": "nav-regulations-desc",
            "header nav a[href*='pages/g.html'] .dropdown-desc, header nav a[href*='../pages/g.html'] .dropdown-desc": "nav-join-desc",
            "header nav a[href*='books-catalog.html'] .dropdown-desc": "nav-catalog-desc",
            "header nav a[href*='hall-booking.html'] .dropdown-desc": "nav-hall-desc",
            "header nav a[href*='cultural-activities.html'] .dropdown-desc": "nav-prog-desc",
            "header nav a[href*='kids'] .dropdown-desc": "nav-kids-desc",
            "header nav a[href*='forum'] .dropdown-desc": "nav-forum-desc",
            "header nav a[href*='authors'] .dropdown-desc": "nav-authors-desc",

            "header nav div.nav-item:nth-of-type(3) > a": "nav-activities",
            "header nav a[href*='cultural-activities.html'] .dropdown-title": "nav-prog",
            "header nav a[href*='kids'] .dropdown-title": "nav-kids",
            "header nav a[href*='forum'] .dropdown-title": "nav-forum",
            "header nav a[href*='authors'] .dropdown-title": "nav-authors",
            "header nav a[href*='contact']": "nav-contact",
            "#auth-container button:nth-of-type(1)": "nav-login",
            "#auth-container button:nth-of-type(2)": "nav-register",
            "#user-profile-menu a[href*='profile.html']": "nav-profile",
            "#user-profile-menu a[href*='orders-history.html']": "nav-history",
            "#user-profile-menu button[id='logout-btn'], #user-profile-menu button[onclick*='handleLogout']": "nav-logout",

            // Footer
            "footer p:nth-of-type(1)": "footer-desc",
            "footer .footer-heading:nth-of-type(1)": "footer-links-title",
            "footer .footer-heading:nth-of-type(2)": "footer-contact-title",
            "footer .footer-contact-item:nth-of-type(1) span:nth-of-type(2)": "footer-address",
            "footer .text-center.text-gray-500": "footer-rights",

            // Homepage Hero & Stats
            "main section h1": "hero-title",
            "main section p.text-2xl.md\\:text-4xl": "hero-subtitle",
            "main section p.text-2xl.md\\:text-3xl": "hero-chahid",
            "main section button[onclick*='pages/g.html']": "hero-btn-card",
            "main section button[onclick*='books-catalog.html']": "hero-btn-catalog",
            "main h2": "events-section-title",
            ".events-carousel-section p": "events-section-subtitle",

            // Auth modal
            ".login-modal h2": "login-title",
            ".login-modal .subtitle": "login-subtitle",
            ".login-modal input[type='text']": "login-username-placeholder",
            ".login-modal input[type='password']": "login-password-placeholder",
            ".login-modal .login-btn": "login-btn",
            ".login-modal .forgot-link": "login-forgot",
            ".login-modal .register-link span": "login-no-account",
            ".login-modal .register-link a": "login-register-link",
        };

        // Apply selector-based translations
        for (const [selector, key] of Object.entries(selectors)) {
            document.querySelectorAll(selector).forEach(el => {
                if (dict[key]) {
                    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                        el.placeholder = dict[key];
                    } else {
                        // Preserve internal icons/symbols if present
                        const iconSpan = el.querySelector(".material-symbols-outlined");
                        if (iconSpan) {
                            const iconHTML = iconSpan.outerHTML;
                            el.innerHTML = dict[key] + " " + iconHTML;
                        } else {
                            el.textContent = dict[key];
                        }
                    }
                }
            });
        }

        // 3. Page-specific custom DOM transformations
        this.translateSpecificPages(lang, dict);

        // 4. Text-matching fallback (extremely powerful zero-touch translation for buttons and common titles)
        this.translateByTextContent(lang, dict);

        // Dispatch customized event for pages to adapt their canvas or dynamic content if needed
        document.dispatchEvent(new CustomEvent('i18nChanged', { detail: { lang, dict } }));
    },

    translateSpecificPages: function(lang, dict) {
        const path = window.location.pathname;

        // Profile Page
        if (path.includes("profile.html")) {
            const elHeroActive = document.querySelector(".profile-hero span.text-xs");
            if (elHeroActive) elHeroActive.textContent = dict["profile-hero-active"];

            const stepTexts = [dict["profile-step-1"], dict["profile-step-2"], dict["profile-step-3"], dict["profile-step-4"]];
            document.querySelectorAll(".glass-bubble + div p.text-xs").forEach((el, idx) => {
                if (stepTexts[idx]) el.textContent = stepTexts[idx];
            });

            const alertTitle = document.querySelector("#emailVerifyAlert h4");
            if (alertTitle) alertTitle.textContent = dict["profile-email-alert-title"];
            const alertDesc = document.querySelector("#emailVerifyAlert p");
            if (alertDesc) alertDesc.textContent = dict["profile-email-alert-desc"];
            const alertBtn = document.querySelector("#emailVerifyAlert button");
            if (alertBtn) alertBtn.textContent = dict["profile-email-alert-btn"];

            // Quick actions
            const actionKeys = [
                { text: "وصل التسجيل", key: "profile-action-receipt" },
                { text: "تعهد (AR)", key: "profile-action-commit-ar" },
                { text: "Engagement (FR)", key: "profile-action-commit-fr" },
                { text: "بطاقة القارئ (RFID)", key: "profile-action-rfid" },
                { text: "تغيير السر", key: "profile-action-pass" },
                { text: "بحث الكتب", key: "profile-action-search" },
                { text: "خروج", key: "profile-action-logout" }
            ];
            document.querySelectorAll(".quick-action p").forEach(el => {
                const match = actionKeys.find(ak => el.textContent.trim().includes(ak.text));
                if (match) el.textContent = dict[match.key];
            });

            // Card headings
            const cardHeadings = [
                { text: "المعلومات الشخصية", key: "profile-card-personal" },
                { text: "التواصل والعنوان", key: "profile-card-contact" },
                { text: "حالة الملف والوثائق المرفوعة", key: "profile-doc-status-title" }
            ];
            document.querySelectorAll(".profile-card h2").forEach(el => {
                const match = cardHeadings.find(ch => el.textContent.trim().includes(ch.text));
                if (match) {
                    const pill = el.querySelector("span");
                    el.innerHTML = (pill ? pill.outerHTML : '') + ' ' + dict[match.key];
                }
            });

            // Labels
            const labelMap = {
                "الاسم واللقب": "profile-label-fullname",
                "Nom et Prénom": "profile-label-fullname-la",
                "تاريخ الميلاد": "profile-label-birth",
                "المهنة": "profile-label-job",
                "رقم التعريف الوطني": "profile-label-nin",
                "البريد الإلكتروني": "profile-label-email",
                "رقم الهاتف": "profile-label-phone",
                "العنوان": "profile-label-address",
                "بطاقة التعريف الوطنية": "profile-doc-cni",
                "الصورة الشخصية": "profile-doc-photo"
            };
            document.querySelectorAll(".profile-card p.text-slate-400, .profile-card p.text-xs").forEach(el => {
                const txt = el.textContent.trim();
                for (const [arTxt, key] of Object.entries(labelMap)) {
                    if (txt.includes(arTxt)) {
                        el.textContent = dict[key];
                        break;
                    }
                }
            });

            // Document status pills
            document.querySelectorAll(".doc-pill").forEach(el => {
                if (el.textContent.trim().includes("تم الرفع")) el.textContent = dict["profile-doc-uploaded"];
                if (el.textContent.trim().includes("غير متوفر")) el.textContent = dict["profile-doc-missing"];
            });
        }

        // Books Catalog Page
        if (path.includes("books-catalog.html")) {
            const elTitle = document.querySelector("h1");
            if (elTitle && elTitle.textContent.includes("فهرس")) elTitle.textContent = dict["catalog-title"];
            
            const elSub = document.querySelector("h1 + p");
            if (elSub && elSub.textContent.includes("ابحث")) elSub.textContent = dict["catalog-subtitle"];

            const searchInput = document.querySelector("input[type='text']");
            if (searchInput) searchInput.placeholder = dict["catalog-search-placeholder"];

            const btnSearch = document.querySelector("button[onclick*='search'], button[type='submit']");
            if (btnSearch) btnSearch.textContent = dict["catalog-btn-search"];

            // Translate Table Headers
            const headersMap = {
                "عنوان الكتاب": "catalog-table-title",
                "المؤلف": "catalog-table-author",
                "التصنيف": "catalog-table-category",
                "السنة": "catalog-table-year",
                "الحالة": "catalog-table-status"
            };
            document.querySelectorAll("table th").forEach(el => {
                const txt = el.textContent.trim();
                if (headersMap[txt]) el.textContent = dict[headersMap[txt]];
            });
        }

        // Registration Page (g.html)
        if (path.includes("g.html")) {
            // Translate Header
            const h1Title = document.querySelector(".header h1");
            if (h1Title) h1Title.textContent = dict["g-header-title"];
            const pSubtitle = document.querySelector(".header p");
            if (pSubtitle) pSubtitle.textContent = dict["g-header-subtitle"];

            // Translate Progress Steps
            const steps = document.querySelectorAll(".progress-container .step");
            const stepLabels = [
                dict["g-step-1"],
                dict["g-step-2"],
                dict["g-step-3"],
                dict["g-step-4"],
                dict["g-step-5"]
            ];
            steps.forEach((el, idx) => {
                const labelSpan = el.querySelector(".step-label");
                if (labelSpan && stepLabels[idx]) {
                    labelSpan.innerHTML = stepLabels[idx].replace(" ", "<br>");
                }
            });

            // Translate Section Headers & Descriptions
            const formSections = [
                { id: "step1", title: "g-step1-title", desc: "g-step1-desc" },
                { id: "step2", title: "g-step2-title", desc: "g-step2-desc" },
                { id: "step3", title: "g-step3-title", desc: "g-step3-desc" },
                { id: "step4", title: "g-step4-title", desc: "g-step4-desc" },
                { id: "step5", title: "g-step5-title", desc: "g-step5-desc" }
            ];
            formSections.forEach(sec => {
                const secEl = document.getElementById(sec.id);
                if (secEl) {
                    const titleEl = secEl.querySelector(".section-title");
                    if (titleEl) titleEl.textContent = dict[sec.title];
                    const descEl = secEl.querySelector(".section-description");
                    if (descEl) descEl.textContent = dict[sec.desc];
                }
            });

            // Translate Inputs & Placeholders & Labels inside Step 1
            const step1 = document.getElementById("step1");
            if (step1) {
                // Labels & Inputs
                const mappings = [
                    { id: "nom", label: "g-label-nom", placeholder: "g-placeholder-nom", icon: "person" },
                    { id: "prenom", label: "g-label-prenom", placeholder: "g-placeholder-prenom", icon: "person" },
                    { id: "nomLatin", label: "g-label-nom-latin", placeholder: "g-placeholder-nom-latin", icon: "translate" },
                    { id: "prenomLatin", label: "g-label-prenom-latin", placeholder: "g-placeholder-prenom-latin", icon: "translate" },
                    { id: "lieuNaissance", label: "g-label-pob", placeholder: "g-placeholder-pob", icon: "location_on" },
                    { id: "nin", label: "g-label-nin-title", placeholder: "g-placeholder-nin", icon: "badge" }
                ];
                mappings.forEach(m => {
                    const input = document.getElementById(m.id);
                    if (input) {
                        input.placeholder = dict[m.placeholder];
                        // Find parent form-group to translate label
                        const group = input.closest(".form-group");
                        if (group) {
                            const label = group.querySelector(".form-label");
                            if (label) {
                                label.innerHTML = dict[m.label] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">${m.icon}</span>`;
                            }
                        }
                    }
                });

                // Radio options (Gender)
                const genderGroup = step1.querySelector("input[name='genre']").closest(".form-group");
                if (genderGroup) {
                    const label = genderGroup.querySelector(".form-label");
                    if (label) {
                        label.innerHTML = dict["g-label-gender-title"] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">wc</span>`;
                    }
                    const options = genderGroup.querySelectorAll(".radio-option");
                    if (options[0]) {
                        const span = options[0].querySelector("span:not(.radio-custom)");
                        if (span) span.textContent = dict["g-gender-m"];
                    }
                    if (options[1]) {
                        const span = options[1].querySelector("span:not(.radio-custom)");
                        if (span) span.textContent = dict["g-gender-f"];
                    }
                }

                // Nationality Dropdown
                const natSelect = document.getElementById("nationalite");
                if (natSelect) {
                    if (natSelect.tagName === "INPUT") {
                        natSelect.placeholder = dict["g-opt-choose-nationality"];
                    }
                    const group = natSelect.closest(".form-group");
                    if (group) {
                        const label = group.querySelector(".form-label");
                        if (label) {
                            label.innerHTML = dict["g-label-nationality-title"] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">flag</span>`;
                        }
                    }
                    const opts = natSelect.querySelectorAll("option");
                    if (opts[0]) opts[0].textContent = dict["g-opt-choose-nationality"];
                    if (opts[1]) opts[1].textContent = dict["g-opt-nationality-dz"];
                    if (opts[2]) opts[2].textContent = dict["g-opt-nationality-fr"];
                    if (opts[3]) opts[3].textContent = dict["g-opt-nationality-ma"];
                    if (opts[4]) opts[4].textContent = dict["g-opt-nationality-tn"];
                    if (opts[5]) opts[5].textContent = dict["g-opt-nationality-other"];
                }

                // Date of Birth
                const dobInput = document.getElementById("naissance");
                if (dobInput) {
                    const group = dobInput.closest(".form-group");
                    if (group) {
                        const label = group.querySelector(".form-label");
                        if (label) {
                            label.innerHTML = dict["g-label-dob"] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">calendar_month</span>`;
                        }
                    }
                }

                // NIN Hint & Parent Option
                const ninSmall = step1.querySelector("small");
                if (ninSmall) {
                    ninSmall.innerHTML = `<span class="material-symbols-outlined text-[16px] ${lang === 'ar' ? 'ml-2' : 'mr-2'}">info</span> ` + dict["g-hint-nin"];
                }
                const parentLabel = step1.querySelector("label[for='isParent']");
                if (parentLabel) {
                    parentLabel.textContent = dict["g-label-is-parent"];
                }

                // Profession Dropdown
                const profSelect = document.getElementById("profession");
                if (profSelect) {
                    const group = profSelect.closest(".form-group");
                    if (group) {
                        const label = group.querySelector(".form-label");
                        if (label) {
                            label.innerHTML = dict["g-label-job-title"] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">work</span>`;
                        }
                    }
                    const opts = profSelect.querySelectorAll("option");
                    if (opts[0]) opts[0].textContent = dict["g-opt-choose-job"];
                    if (opts[1]) opts[1].textContent = dict["g-opt-job-pupil"];
                    if (opts[2]) opts[2].textContent = dict["g-opt-job-student"];
                    if (opts[3]) opts[3].textContent = dict["g-opt-job-teacher"];
                    if (opts[4]) opts[4].textContent = dict["g-opt-job-merchant"];
                    if (opts[5]) opts[5].textContent = dict["g-opt-job-gov"];
                    if (opts[6]) opts[6].textContent = dict["g-opt-job-exec"];
                    if (opts[7]) opts[7].textContent = dict["g-opt-job-researcher"];
                    if (opts[8]) opts[8].textContent = dict["g-opt-job-retired"];
                    if (opts[9]) opts[9].textContent = dict["g-opt-job-other"];
                }
            }

            // Step 2: Photo Upload
            const step2 = document.getElementById("step2");
            if (step2) {
                const photoName = document.getElementById("photoNameDisplay");
                if (photoName && photoName.textContent.trim() === "بنسالم ناصم") {
                    photoName.textContent = dict["g-photo-preview-name"];
                }

                // Upload card
                const uploadCard = document.getElementById("uploadOption");
                if (uploadCard) {
                    const h4 = uploadCard.querySelector("h4");
                    if (h4) h4.textContent = dict["g-photo-upload-title"];
                    const p = uploadCard.querySelector("p");
                    if (p) p.textContent = dict["g-photo-upload-desc"];
                    const btn = uploadCard.querySelector("button");
                    if (btn) {
                        btn.innerHTML = `<span class="material-symbols-outlined">folder_open</span> ` + dict["g-btn-browse"];
                    }
                }

                // Capture card
                const webcamCard = document.getElementById("webcamOption");
                if (webcamCard) {
                    const h4 = webcamCard.querySelector("h4");
                    if (h4) h4.textContent = dict["g-photo-capture-title"];
                    const p = webcamCard.querySelector("p");
                    if (p) p.textContent = dict["g-photo-capture-desc"];
                    const btn = webcamCard.querySelector("button");
                    if (btn) {
                        btn.innerHTML = `<span class="material-symbols-outlined">photo_camera</span> ` + dict["g-btn-open-camera"];
                    }
                }

                // Remove btn
                const removeBtn = document.getElementById("removePhotoBtn");
                if (removeBtn) {
                    removeBtn.innerHTML = `<span class="material-symbols-outlined">delete</span> ` + dict["g-btn-delete-photo"];
                }
            }

            // Step 3: Contact Info
            const step3 = document.getElementById("step3");
            if (step3) {
                // Success message box
                const successBox = step3.querySelector(".success-message");
                if (successBox) {
                    const h3 = successBox.querySelector("h3");
                    if (h3) h3.textContent = dict["g-success-box-title"];
                    const p = successBox.querySelector("p");
                    if (p) p.innerHTML = dict["g-success-box-desc"].replace(". ", ".<br>");
                }

                // Mappings
                const mappings = [
                    { id: "email", label: "g-label-email-title", placeholder: "g-placeholder-email", icon: "mail", pos: "left" },
                    { id: "telephone", label: "g-label-phone-title", placeholder: "g-placeholder-phone", icon: "phone", pos: "right" },
                    { id: "adresse", label: "g-label-address-title", placeholder: "g-placeholder-address", icon: "home", pos: "right" },
                    { id: "ville", label: "g-label-city-title", placeholder: "g-placeholder-city", icon: "location_city", pos: "right" },
                    { id: "codePostal", label: "g-label-zip-title", placeholder: "g-placeholder-zip", icon: "pin_drop", pos: "left" }
                ];
                mappings.forEach(m => {
                    const input = document.getElementById(m.id);
                    if (input) {
                        input.placeholder = dict[m.placeholder];
                        const group = input.closest(".form-group");
                        if (group) {
                            const label = group.querySelector(".form-label");
                            if (label) {
                                if (m.pos === "left") {
                                    label.innerHTML = `<span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'ml-2' : 'mr-2'}">${m.icon}</span> ` + dict[m.label];
                                } else {
                                    label.innerHTML = dict[m.label] + ` <span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">${m.icon}</span>`;
                                }
                            }
                        }
                    }
                });

                // Whatsapp specific
                const waInput = document.getElementById("whatsapp");
                if (waInput) {
                    waInput.placeholder = dict["g-placeholder-phone"];
                    const group = waInput.closest(".form-group");
                    if (group) {
                        const label = group.querySelector(".form-label");
                        if (label) {
                            label.innerHTML = dict["g-label-whatsapp-title"] + ` <i class="fab fa-whatsapp ${lang === 'ar' ? 'mr-2' : 'ml-2'}"></i>`;
                        }
                    }
                    const checkLabel = group.querySelector(".whatsapp-checkbox label");
                    if (checkLabel) {
                        checkLabel.textContent = dict["g-label-same-as-phone"];
                    }
                }

                // Social section
                const socialSec = step3.querySelector(".social-media-section");
                if (socialSec) {
                    const h3 = socialSec.querySelector("h3");
                    if (h3) {
                        h3.innerHTML = `<span class="material-symbols-outlined text-[20px] ${lang === 'ar' ? 'ml-2' : 'mr-2'}" style="color: var(--primary-color);">share</span> ` + dict["g-social-title"];
                    }
                    const p = socialSec.querySelector("p");
                    if (p) p.textContent = dict["g-social-desc"];
                }
            }

            // Step 4: Supporting documents
            const step4 = document.getElementById("step4");
            if (step4) {
                const docItems = step4.querySelectorAll(".document-item");
                if (docItems[0]) {
                    const title = docItems[0].querySelector(".document-title");
                    if (title) title.textContent = dict["g-cni-front-title"];
                    const desc = docItems[0].querySelector(".document-description");
                    if (desc) desc.textContent = dict["g-cni-front-desc"];
                    const preview = document.querySelector("#cniPreview span:not(.material-symbols-outlined)");
                    if (preview && preview.textContent.includes("لم يتم")) preview.textContent = dict["g-doc-not-chosen"];
                    const scanBtn = document.getElementById("scanCniBtn");
                    if (scanBtn) scanBtn.innerHTML = `<span class="material-symbols-outlined">photo_camera</span> ` + dict["g-btn-scan"];
                    const uploadBtn = document.getElementById("uploadCniBtn");
                    if (uploadBtn) uploadBtn.innerHTML = `<span class="material-symbols-outlined">upload</span> ` + dict["g-btn-upload"];
                }
                if (docItems[1]) {
                    const title = docItems[1].querySelector(".document-title");
                    if (title) title.textContent = dict["g-cni-back-title"];
                    const desc = docItems[1].querySelector(".document-description");
                    if (desc) desc.textContent = dict["g-cni-back-desc"];
                    const preview = document.querySelector("#cniBackPreview span:not(.material-symbols-outlined)");
                    if (preview && preview.textContent.includes("لم يتم")) preview.textContent = dict["g-doc-not-chosen"];
                    const scanBtn = document.getElementById("scanCniBackBtn");
                    if (scanBtn) scanBtn.innerHTML = `<span class="material-symbols-outlined">photo_camera</span> ` + dict["g-btn-scan"];
                    const uploadBtn = document.getElementById("uploadCniBackBtn");
                    if (uploadBtn) uploadBtn.innerHTML = `<span class="material-symbols-outlined">upload</span> ` + dict["g-btn-upload"];
                }

                // Important information box
                const infoBox = step4.querySelector("div[style*='rgba(46, 125, 50']");
                if (infoBox) {
                    const title = infoBox.querySelector("strong");
                    if (title) title.textContent = dict["g-info-important-title"];
                    const items = infoBox.querySelectorAll("li");
                    if (items[0]) items[0].textContent = dict["g-info-item-1"];
                    if (items[1]) items[1].textContent = dict["g-info-item-2"];
                    if (items[2]) items[2].textContent = dict["g-info-item-3"];
                    if (items[3]) items[3].textContent = dict["g-info-item-4"];
                }
            }

            // Step 5: Summary & Credentials
            const step5 = document.getElementById("step5");
            if (step5) {
                // Header in summary
                const ninLabel = document.querySelector(".summary-id-modern");
                if (ninLabel) {
                    ninLabel.innerHTML = `<span class="material-symbols-outlined text-[18px] ${lang === 'ar' ? 'ml-2' : 'mr-2'}">badge</span> ` + dict["g-summary-nin-label"] + ' <span id="summaryNinModern">-</span>';
                }

                // Info Cards
                const infoCards = step5.querySelectorAll(".info-card-modern");
                if (infoCards[0]) {
                    const title = infoCards[0].querySelector(".info-title-modern");
                    if (title) title.innerHTML = dict["g-summary-identity-title"] + ` <span class="material-symbols-outlined text-[20px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">person</span>`;
                    const labels = infoCards[0].querySelectorAll(".info-label-modern");
                    if (labels[0]) labels[0].textContent = dict["g-summary-gender-label"];
                    if (labels[1]) labels[1].textContent = dict["g-summary-dob-label"];
                    if (labels[2]) labels[2].textContent = dict["g-summary-pob-label"];
                    if (labels[3]) labels[3].textContent = dict["g-summary-nationality-label"];
                }
                if (infoCards[1]) {
                    const title = infoCards[1].querySelector(".info-title-modern");
                    if (title) title.innerHTML = dict["g-summary-prof-contact-title"] + ` <span class="material-symbols-outlined text-[20px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">work</span>`;
                    const labels = infoCards[1].querySelectorAll(".info-label-modern");
                    if (labels[0]) labels[0].textContent = dict["g-summary-job-label"];
                    if (labels[1]) labels[1].textContent = dict["g-summary-email-label"];
                    if (labels[2]) labels[2].textContent = dict["g-summary-phone-label"];
                    if (labels[3]) labels[3].textContent = dict["g-summary-whatsapp-label"];
                }
                if (infoCards[2]) {
                    const title = infoCards[2].querySelector(".info-title-modern");
                    if (title) title.innerHTML = dict["g-summary-address-title"] + ` <i class="fas fa-home ${lang === 'ar' ? 'mr-2' : 'ml-2'}"></i>`;
                    const labels = infoCards[2].querySelectorAll(".info-label-modern");
                    if (labels[0]) labels[0].textContent = dict["g-summary-address-label"];
                    if (labels[1]) labels[1].textContent = dict["g-summary-city-label"];
                    if (labels[2]) labels[2].textContent = dict["g-summary-zip-label"];
                }

                // Documents status modern
                const docStatusSec = step5.querySelector(".documents-status-modern");
                if (docStatusSec) {
                    const h4 = docStatusSec.querySelector("h4");
                    if (h4) h4.innerHTML = dict["g-summary-docs-status-title"] + ` <span class="material-symbols-outlined text-[20px] ${lang === 'ar' ? 'mr-2' : 'ml-2'}">description</span>`;
                    const titles = docStatusSec.querySelectorAll(".status-title-modern");
                    if (titles[0]) titles[0].textContent = dict["g-summary-cni-front-label"];
                    if (titles[1]) titles[1].textContent = dict["g-summary-cni-back-label"];
                    const descs = docStatusSec.querySelectorAll(".status-desc-modern");
                    descs.forEach(desc => {
                        if (desc.textContent.includes("قيد الانتظار") || desc.textContent.includes("En attente") || desc.textContent.includes("Pending") || desc.textContent.includes("deg ugani")) {
                            desc.textContent = dict["g-summary-status-pending"];
                        }
                    });
                }

                // Credentials Minimalist Section
                const credFields = step5.querySelectorAll(".credentials-minimalist .cred-field");
                const credInfos = [
                    { title: "g-cred-username-title", sub: "g-cred-username-sub", placeholder: "g-cred-username-placeholder", icon: "badge", id: "username" },
                    { title: "g-cred-password-title", sub: "g-cred-password-sub", placeholder: "g-cred-password-placeholder", icon: "lock", id: "password" },
                    { title: "g-cred-confirm-title", sub: "g-cred-confirm-sub", placeholder: "g-cred-confirm-placeholder", icon: "lock_reset", id: "confirmPassword" }
                ];
                credFields.forEach((field, idx) => {
                    const info = credInfos[idx];
                    if (info) {
                        const titleEl = field.querySelector(".cred-title");
                        if (titleEl) titleEl.textContent = dict[info.title];
                        const subEl = field.querySelector(".cred-subtitle");
                        if (subEl) subEl.textContent = dict[info.sub];
                        const input = document.getElementById(info.id);
                        if (input) input.placeholder = dict[info.placeholder];
                        if (info.id === "username") {
                            const hintEl = field.querySelector(".cred-hint");
                            if (hintEl) hintEl.innerHTML = `<span class="material-symbols-outlined">info</span> ` + dict["g-cred-username-hint"];
                        }
                    }
                });

                // Checkbox Conditions
                const condLabel = step5.querySelector("label[for='conditions']");
                if (condLabel) {
                    condLabel.innerHTML = dict["g-conditions-label"]
                        .replace("شروط الاستخدام", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-terms-link"]}</a>`)
                        .replace("les conditions d'utilisation", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-terms-link"]}</a>`)
                        .replace("the Terms of Use", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-terms-link"]}</a>`)
                        .replace("tiwtilin n useqdec", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-terms-link"]}</a>`)
                        .replace("سياسة الخصوصية", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-privacy-link"]}</a>`)
                        .replace("la politique de confidentialité", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-privacy-link"]}</a>`)
                        .replace("the Privacy Policy", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-privacy-link"]}</a>`)
                        .replace("tasertit n tbaḍnit", `<a href="#" style="color: var(--primary-color); font-weight: 500;">${dict["g-privacy-link"]}</a>`);
                }
            }

            // Buttons throughout all steps
            document.querySelectorAll(".navigation-buttons button").forEach(btn => {
                if (btn.id === "submitBtn") {
                    btn.innerHTML = `<i class="fas fa-check-circle"></i> ` + dict["g-btn-finish"];
                } else if (btn.classList.contains("btn-next")) {
                    if (lang === "ar") {
                        btn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span> ` + dict["g-btn-next"];
                    } else {
                        btn.innerHTML = dict["g-btn-next"] + ` <span class="material-symbols-outlined">arrow_forward</span>`;
                    }
                } else if (btn.classList.contains("btn-prev")) {
                    if (lang === "ar") {
                        btn.innerHTML = dict["g-btn-prev"] + ` <span class="material-symbols-outlined">arrow_forward</span>`;
                    } else {
                        btn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span> ` + dict["g-btn-prev"];
                    }
                }
            });
        }

        // Director Word Page Custom DOM Transformations
        if (path.includes("director-word.html")) {
            const h1 = document.querySelector("h1");
            if (h1) h1.textContent = dict["nav-director"];

            const h2 = document.querySelector("h2");
            if (h2 && (h2.textContent.includes("بسم الله") || h2.textContent.includes("Au nom") || h2.textContent.includes("In the name"))) {
                h2.textContent = dict["director-bismillah"];
            }

            const paras = document.querySelectorAll(".paragraph");
            const paraKeys = ["director-p1", "director-p2", "director-p3", "director-p4"];
            paras.forEach((p, idx) => {
                if (paraKeys[idx] && dict[paraKeys[idx]]) {
                    p.textContent = dict[paraKeys[idx]];
                }
            });

            const wishesH3 = document.querySelector(".bg-primary\\/5 h3");
            if (wishesH3) wishesH3.textContent = dict["director-wishes-h3"];
            const wishesPs = document.querySelectorAll(".bg-primary\\/5 p");
            if (wishesPs[0]) wishesPs[0].textContent = dict["director-wishes-p1"];
            if (wishesPs[1]) wishesPs[1].textContent = dict["director-wishes-p2"];

            const sigBoxTitle = document.querySelector(".signature-box p.text-slate-500");
            if (sigBoxTitle) sigBoxTitle.textContent = dict["director-sig-title"];
            const sigBoxName = document.querySelector(".signature-box p.text-2xl");
            if (sigBoxName) sigBoxName.textContent = dict["director-sig-name"];
        }

        // Library Goals Page Custom DOM Transformations
        if (path.includes("library-goals.html")) {
            const badge = document.querySelector(".mission-badge span:not(.material-symbols-outlined)");
            if (badge) badge.textContent = dict["goals-badge"];

            const h1 = document.querySelector("h1");
            if (h1) h1.textContent = dict["goals-hero-title"];

            const heroDesc = document.querySelector(".goals-hero p");
            if (heroDesc) heroDesc.textContent = dict["goals-hero-desc"];

            const goalParas = document.querySelectorAll(".goal-card p");
            const goalKeys = [
                "goal-1", "goal-2", "goal-3", "goal-4", "goal-5",
                "goal-6", "goal-7", "goal-8", "goal-9", "goal-10", "goal-11"
            ];
            goalParas.forEach((p, idx) => {
                if (goalKeys[idx] && dict[goalKeys[idx]]) {
                    p.textContent = dict[goalKeys[idx]];
                }
            });
        }

        // Technical Card Page Custom DOM Transformations
        if (path.includes("technical-card.html")) {
            const h1 = document.querySelector("h1");
            if (h1) h1.textContent = dict["tech-hero-title"];

            const heroDesc = document.querySelector(".tech-hero p");
            if (heroDesc) heroDesc.textContent = dict["tech-hero-desc"];

            // History section
            const histTitle = document.querySelector(".content-card:nth-of-type(1) .section-title span:not(.material-symbols-outlined)");
            if (histTitle) histTitle.textContent = dict["tech-history-title"];

            const histParas = document.querySelectorAll(".content-card:nth-of-type(1) .space-y-4 p");
            const histKeys = ["tech-history-p1", "tech-history-p2", "tech-history-p3"];
            histParas.forEach((p, idx) => {
                if (histKeys[idx] && dict[histKeys[idx]]) {
                    p.textContent = dict[histKeys[idx]];
                }
            });

            // Components (Citadelle, Mosque, Square Building)
            const cards = document.querySelectorAll(".grid-cols-1.md\\:grid-cols-3 .content-card");
            if (cards.length >= 3) {
                const fortTitle = cards[0].querySelector("h3");
                if (fortTitle) fortTitle.textContent = dict["tech-card-fort"];
                const fortDesc = cards[0].querySelector("p");
                if (fortDesc) fortDesc.textContent = dict["tech-card-fort-desc"];

                const mosqueTitle = cards[1].querySelector("h3");
                if (mosqueTitle) mosqueTitle.textContent = dict["tech-card-mosque"];
                const mosqueDesc = cards[1].querySelector("p");
                if (mosqueDesc) mosqueDesc.textContent = dict["tech-card-mosque-desc"];

                const squareTitle = cards[2].querySelector("h3");
                if (squareTitle) squareTitle.textContent = dict["tech-card-square"];
                const squareDesc = cards[2].querySelector("p");
                if (squareDesc) squareDesc.textContent = dict["tech-card-square-desc"];
            }

            // Modern shifts
            const shiftsTitle = document.querySelector(".content-card.bg-primary .section-title span:not(.material-symbols-outlined)");
            if (shiftsTitle) shiftsTitle.textContent = dict["tech-shifts-title"];

            const shiftsBlocks = document.querySelectorAll(".content-card.bg-primary .space-y-6 .p-4");
            if (shiftsBlocks.length >= 2) {
                const date1 = shiftsBlocks[0].querySelector("span");
                if (date1) date1.textContent = dict["tech-shift-1-date"];
                const desc1 = shiftsBlocks[0].querySelector("p");
                if (desc1) desc1.textContent = dict["tech-shift-1-desc"];

                const date2 = shiftsBlocks[1].querySelector("span");
                if (date2) date2.textContent = dict["tech-shift-2-date"];
                const desc2 = shiftsBlocks[1].querySelector("p");
                if (desc2) desc2.textContent = dict["tech-shift-2-desc"];
            }

            // Map & Directions
            const mapTitle = document.querySelector(".lg\\:col-span-2 .section-title span:not(.material-symbols-outlined)");
            if (mapTitle) mapTitle.textContent = dict["tech-map-title"];

            const mapDesc = document.querySelector(".lg\\:col-span-2 .flex-col.justify-center p");
            if (mapDesc) mapDesc.textContent = dict["tech-map-desc"];

            const compassPills = document.querySelectorAll(".lg\\:col-span-2 .grid-cols-2 .p-3");
            const compassKeys = [
                { dir: "tech-dir-n", desc: "tech-dir-n-desc" },
                { dir: "tech-dir-s", desc: "tech-dir-s-desc" },
                { dir: "tech-dir-e", desc: "tech-dir-e-desc" },
                { dir: "tech-dir-w", desc: "tech-dir-w-desc" }
            ];
            compassPills.forEach((pill, idx) => {
                if (compassKeys[idx]) {
                    const dirEl = pill.querySelector(".font-bold");
                    if (dirEl) dirEl.textContent = dict[compassKeys[idx].dir];
                    const descEl = pill.querySelector(".text-xs");
                    if (descEl) descEl.textContent = dict[compassKeys[idx].desc];
                }
            });
        }

        // Helper: In-memory events translation
        const translateEventsInMemory = (lang) => {
            if (!window.events) return;
            const eventTranslations = {
                fr: {
                    1: {
                        title: 'Grande soirée culturelle et littéraire',
                        date: '15 Mars 2026',
                        location: 'Grande Salle',
                        badge: 'Bientôt',
                        desc: 'La Bibliothèque Principale de la Lecture Publique de la Wilaya de Béjaïa a le plaisir de vous inviter à la grande soirée culturelle organisée sous le thème "La littérature, un pont entre les générations".\n\nCet événement verra la participation de romanciers et poètes algériens de renom pour débattre de l\'évolution du roman algérien contemporain et des défis de l\'édition numérique.',
                        program: [
                            { title: 'Accueil des invités', desc: 'Distribution des dépliants et présentation du programme.' },
                            { title: 'Discours d\'ouverture', desc: 'Mots de bienvenue du directeur de la bibliothèque.' },
                            { title: 'Débat et table ronde', desc: 'Discussion sur le roman algérien contemporain.' },
                            { title: 'Lectures poétiques', desc: 'Récitations par une sélection de poètes de talent.' }
                        ],
                        tags: ['littérature', 'poésie', 'séminaire', 'Béjaïa']
                    },
                    2: {
                        title: 'Atelier de lecture interactive pour enfants',
                        date: '22 Mars 2026',
                        location: 'Espace Enfants',
                        badge: 'Gratuit',
                        desc: 'Un monde d\'imagination et d\'apprentissage avant tout attend vos enfants ! Cet atelier vise à inculquer l\'amour du livre chez les jeunes de manière amusante et innovante.\n\nÀ travers le conte et le dessin expressif, nous transformerons l\'histoire en une expérience vivante.',
                        program: [
                            { title: 'Début de l\'atelier', desc: 'Activité brise-glace et présentation des enfants.' },
                            { title: 'Le Conte', desc: 'Récit d\'une histoire passionnante avec des marionnettes.' },
                            { title: 'Activité de dessin', desc: 'Représentation des personnages par le dessin et le coloriage.' },
                            { title: 'Distribution de cadeaux', desc: 'Encourager les enfants à lire régulièrement.' }
                        ],
                        tags: ['enfants', 'éducation', 'imagination', 'atelier']
                    },
                    3: {
                        title: 'Foire annuelle des livres et manuscrits',
                        date: '5 Avril 2026',
                        location: 'Salle des Expositions',
                        badge: 'Nouveau',
                        desc: 'Un voyage dans le temps à la foire annuelle des manuscrits rares. Cette année présente une collection exceptionnelle de manuscrits de l\'âge d\'or de la culture dans la région.',
                        program: [
                            { title: 'Ouverture officielle', desc: 'En présence des autorités locales et d\'universitaires.' },
                            { title: 'Visite guidée', desc: 'Explication des manuscrits rares exposés.' },
                            { title: 'Atelier de restauration', desc: 'Démonstration en direct de techniques de restauration de manuscrits.' },
                            { title: 'Vente-dédicace', desc: 'Rencontre avec les auteurs pour leurs nouveaux livres.' }
                        ],
                        tags: ['patrimoine', 'manuscrits', 'histoire', 'exposition']
                    },
                    4: {
                        title: 'Atelier d\'initiation à la calligraphie arabe',
                        date: '12 Avril 2026',
                        location: 'Salle des Ateliers',
                        badge: 'Atelier',
                        desc: 'Découvrez la beauté et la magie de la calligraphie arabe dans cet atelier intensif pour débutants. Apprenez les bases des styles Thuluth et Naskh.',
                        program: [
                            { title: 'Introduction historique', desc: 'Bref aperçu du développement de la calligraphie arabe.' },
                            { title: 'Préparation du matériel', desc: 'Comment préparer le calame (plume) et l\'encre.' },
                            { title: 'Pratique 1', desc: 'Écriture des lettres simples selon la méthode des points.' },
                            { title: 'Pratique 2', desc: 'Écriture d\'une phrase simple.' }
                        ],
                        tags: ['calligraphie', 'arts', 'atelier', 'créativité']
                    },
                    5: {
                        title: 'Rencontre hebdomadaire du club de lecture',
                        date: 'Chaque Samedi',
                        location: 'Salle de Lecture',
                        badge: 'Actif',
                        desc: 'Vous cherchez un espace pour partager vos idées sur vos lectures ? Rejoignez notre club de lecture, où nous nous réunissons chaque samedi pour débattre.',
                        program: [
                            { title: 'Présentation du livre', desc: 'Résumé rapide présenté par l\'un des membres.' },
                            { title: 'Cercle de débat', desc: 'Échange d\'opinions sur les idées clés de l\'œuvre.' },
                            { title: 'Recommandations', desc: 'Sélection des livres à lire pour les semaines suivantes.' }
                        ],
                        tags: ['club', 'débat', 'lecture', 'analyse']
                    },
                    6: {
                        title: 'Concours du meilleur résumé de livre pour jeunes',
                        date: '20 Mai 2026',
                        location: 'Grande Salle',
                        badge: 'Prix',
                        desc: 'La bibliothèque lance son concours annuel de résumé de livres destiné aux jeunes (15-30 ans) pour encourager l\'écriture et l\'esprit critique.',
                        program: [
                            { title: 'Dépôt des projets', desc: 'Enregistrement des candidatures et réception des résumés.' },
                            { title: 'Évaluation du jury', desc: 'Examen des résumés par des enseignants spécialisés.' },
                            { title: 'Annonce des lauréats', desc: 'Remise des prix aux trois gagnants.' }
                        ],
                        tags: ['concours', 'jeunes', 'créativité', 'résumé']
                    },
                    7: {
                        title: 'Conférence : Histoire des bibliothèques au Maghreb',
                        date: '1 Juin 2026',
                        location: 'Salle des Conférences',
                        badge: 'Pensée',
                        desc: 'Un séminaire approfondi sur l\'histoire des bibliothèques scientifiques au Maghreb, avec un accent particulier sur Béjaïa comme pôle culturel historique.',
                        program: [
                            { title: 'Premier axe', desc: 'Apparition des bibliothèques de dotation à Kairouan et Béjaïa.' },
                            { title: 'Deuxième axe', desc: 'Le voyage des livres et manuscrits à travers le Sahara.' },
                            { title: 'Troisième axe', desc: 'Les bibliothèques algériennes à l\'ère moderne.' }
                        ],
                        tags: ['histoire', 'Maghreb', 'conférence', 'pensée']
                    },
                    8: {
                        title: 'Formation aux bases de la recherche bibliographique',
                        date: '15 Juin 2026',
                        location: 'Salle de Formation',
                        badge: 'Skills',
                        desc: 'Une formation dédiée aux étudiants et chercheurs pour optimiser leurs recherches bibliographiques et l\'utilisation des bases de données de recherche.',
                        program: [
                            { title: 'Session 1', desc: 'Techniques de recherche dans les catalogues physiques et numériques.' },
                            { title: 'Session 2', desc: 'Utilisation des outils académiques comme Zotero et Mendeley.' },
                            { title: 'Application pratique', desc: 'Élaboration d\'une liste bibliographique sur un sujet donné.' }
                        ],
                        tags: ['recherche', 'université', 'formation', 'compétences']
                    },
                    9: {
                        title: 'Projection-Débat : Adaptation cinématographique',
                        date: '10 Juillet 2026',
                        location: 'Grande Salle',
                        badge: 'Cinéma',
                        desc: 'Un événement pour les passionnés de cinéma et de littérature. Projection d\'un film adapté d\'un roman célèbre, suivie d\'un débat sur l\'adaptation.',
                        program: [
                            { title: 'Projection', desc: 'Visionnage de l\'œuvre cinématographique sélectionnée.' },
                            { title: 'Table ronde', desc: 'Débat entre critiques de cinéma et écrivains.' },
                            { title: 'Débat avec le public', desc: 'Questions-réponses et analyse collective.' }
                        ],
                        tags: ['cinéma', 'roman', 'critique', 'art']
                    }
                },
                en: {
                    1: {
                        title: 'Grand Cultural & Literary Evening',
                        date: 'March 15, 2026',
                        location: 'Grand Lecture Hall',
                        badge: 'Soon',
                        desc: 'The Main Public Reading Library of Bejaia is honored to invite you to the Grand Cultural Evening under the theme "Literature: A Bridge Between Generations".\n\nThis event will host prominent Algerian novelists and poets to discuss the evolution of the contemporary Algerian novel and digital publishing.',
                        program: [
                            { title: 'Guest Reception', desc: 'Distribution of event brochures and introduction to the program.' },
                            { title: 'Opening Remarks', desc: 'Welcoming address by the library director.' },
                            { title: 'Panel Discussion', desc: 'Debate on the contemporary Algerian novel.' },
                            { title: 'Poetry Readings', desc: 'Beautiful recitations by a selection of talented poets.' }
                        ],
                        tags: ['literature', 'poetry', 'seminar', 'Bejaia']
                    },
                    2: {
                        title: 'Interactive Reading Workshop for Kids',
                        date: 'March 22, 2026',
                        location: 'Kids Space',
                        badge: 'Free',
                        desc: 'A world of imagination and learning awaits your children! This workshop aims to cultivate a love for reading in young minds in a fun and innovative way.\n\nUsing storytelling and drawing, we will transform the story into a live interactive experience.',
                        program: [
                            { title: 'Workshop Start', desc: 'Ice-breaking activity and introductions with kids.' },
                            { title: 'Storyteller', desc: 'Telling an exciting story using puppets.' },
                            { title: 'Drawing Activity', desc: 'Recreating the characters through drawing and coloring.' },
                            { title: 'Gift Distribution', desc: 'Encouraging children to continue reading.' }
                        ],
                        tags: ['kids', 'education', 'imagination', 'workshop']
                    },
                    3: {
                        title: 'Annual Book and Manuscripts Exhibition',
                        date: 'April 5, 2026',
                        location: 'Exhibition Hall',
                        badge: 'New',
                        desc: 'A journey through time at the annual rare books and manuscripts exhibition in Bejaia. This year highlights an exceptional collection from the Golden Age of the region.',
                        program: [
                            { title: 'Official Opening', desc: 'Attended by local authorities and academic figures.' },
                            { title: 'Guided Tour', desc: 'Explanation of the rare manuscripts on display.' },
                            { title: 'Restoration Demo', desc: 'Live demonstration of ancient manuscript restoration techniques.' },
                            { title: 'Book Signing', desc: 'Meet authors and discover their latest publications.' }
                        ],
                        tags: ['heritage', 'manuscripts', 'history', 'exhibition']
                    },
                    4: {
                        title: 'Arabic Calligraphy Masterclass',
                        date: 'April 12, 2026',
                        location: 'Workshop Room',
                        badge: 'Workshop',
                        desc: 'Discover the beauty and magic of Arabic calligraphy in this intensive beginner workshop. Learn the basics of Thuluth and Naskh script.',
                        program: [
                            { title: 'Historical Introduction', desc: 'A brief history of Arabic calligraphy development.' },
                            { title: 'Tool Preparation', desc: 'How to prepare the reed pen and ink.' },
                            { title: 'Practice 1', desc: 'Writing single letters using the dot grid method.' },
                            { title: 'Practice 2', desc: 'Writing a simple sentence.' }
                        ],
                        tags: ['calligraphy', 'arts', 'workshop', 'creativity']
                    },
                    5: {
                        title: 'Weekly Reader Club Meeting',
                        date: 'Every Saturday',
                        location: 'Reading Room',
                        badge: 'Active',
                        desc: 'Looking for a space to share your thoughts about the books you read? Join our club, meeting every Saturday to discuss world and local literature.',
                        program: [
                            { title: 'Book Review', desc: 'A quick summary presented by one of the members.' },
                            { title: 'Discussion Circle', desc: 'Debating the core concepts and ideas of the book.' },
                            { title: 'Recommendations', desc: 'Choosing books for the upcoming weeks.' }
                        ],
                        tags: ['club', 'discussion', 'reading', 'analysis']
                    },
                    6: {
                        title: 'Youth Book Summary Competition',
                        date: 'May 20, 2026',
                        location: 'Grand Lecture Hall',
                        badge: 'Prizes',
                        desc: 'The library is launching its annual book summarizing contest for youth (ages 15-30) to foster writing skills and critical analysis.',
                        program: [
                            { title: 'Project Submission', desc: 'Registering candidates and receiving book summaries.' },
                            { title: 'Jury Evaluation', desc: 'Review of summaries by specialized teachers.' },
                            { title: 'Results & Ceremony', desc: 'Awarding prizes to the top three winners.' }
                        ],
                        tags: ['contest', 'youth', 'creativity', 'summary']
                    },
                    7: {
                        title: 'Lecture: History of Libraries in the Maghreb',
                        date: 'June 1, 2026',
                        location: 'Lecture Hall',
                        badge: 'Ideas',
                        desc: 'An in-depth lecture exploring the rich history of scientific and endowment libraries in the Maghreb region, highlighting Bejaia\'s historical role.',
                        program: [
                            { title: 'First Topic', desc: 'Emergence of endowment libraries in Kairouan and Bejaia.' },
                            { title: 'Second Topic', desc: 'The transit of books and manuscripts across the Sahara.' },
                            { title: 'Third Topic', desc: 'Algerian libraries in the modern era.' }
                        ],
                        tags: ['history', 'Maghreb', 'lecture', 'ideas']
                    },
                    8: {
                        title: 'Bibliographic Research Basics Course',
                        date: 'June 15, 2026',
                        location: 'Training Room',
                        badge: 'Skills',
                        desc: 'A practical training session for university students and researchers to master bibliographic search methods and catalog use.',
                        program: [
                            { title: 'Session 1', desc: 'Search techniques in physical and digital catalogs.' },
                            { title: 'Session 2', desc: 'Using academic tools such as Zotero and Mendeley.' },
                            { title: 'Practice', desc: 'Drafting a bibliographic list for a specific research topic.' }
                        ],
                        tags: ['research', 'university', 'training', 'skills']
                    },
                    9: {
                        title: 'Book-to-Movie Screening & Discussion',
                        date: 'July 10, 2026',
                        location: 'Grand Lecture Hall',
                        badge: 'Cinema',
                        desc: 'An event bringing movie buffs and literature lovers together. Screening of a major film adapted from a novel, followed by a debate.',
                        program: [
                            { title: 'Screening', desc: 'Watching the selected film adaptation.' },
                            { title: 'Round Table', desc: 'Discussion with film critics and writers.' },
                            { title: 'Q&A Session', desc: 'Audience comments and collective character analysis.' }
                        ],
                        tags: ['cinema', 'novel', 'critique', 'art']
                    }
                }
            };

            if (eventTranslations[lang]) {
                window.events.forEach(ev => {
                    const trans = eventTranslations[lang][ev.id];
                    if (trans) {
                        ev.title = trans.title;
                        ev.date = trans.date;
                        ev.location = trans.location;
                        ev.badge = trans.badge;
                        ev.desc = trans.desc;
                        if (ev.program && trans.program) {
                            ev.program.forEach((p, i) => {
                                if (trans.program[i]) {
                                    p.title = trans.program[i].title;
                                    p.desc = trans.program[i].desc;
                                }
                            });
                        }
                        if (ev.tags && trans.tags) {
                            ev.tags = trans.tags;
                        }
                    }
                });
            }
        };

        // Cultural Activities Page
        if (path.includes("cultural-activities.html")) {
            const elH1 = document.querySelector(".hero-content h1");
            if (elH1) elH1.textContent = dict["activities-hero-title"];

            const elHeroDesc = document.querySelector(".hero-content p");
            if (elHeroDesc) elHeroDesc.textContent = dict["activities-hero-desc"];

            const statPills = document.querySelectorAll(".relative.z-30 .text-center");
            if (statPills.length >= 4) {
                const statTexts = [
                    lang === "ar" ? "فعالية مبرمجة" : lang === "fr" ? "Événements" : "Events",
                    lang === "ar" ? "ورشات عمل" : lang === "fr" ? "Ateliers" : "Workshops",
                    lang === "ar" ? "معارض كتب" : lang === "fr" ? "Expositions" : "Exhibitions",
                    lang === "ar" ? "مقاعد مجانية" : lang === "fr" ? "Places gratuites" : "Free Seats"
                ];
                statPills.forEach((pill, idx) => {
                    const labelEl = pill.querySelector(".text-slate-500");
                    if (labelEl && statTexts[idx]) labelEl.textContent = statTexts[idx];
                });
            }

            const elGridTitle = document.querySelector("main h2, .max-w-7xl h2");
            if (elGridTitle && elGridTitle.textContent.includes("الفعاليات")) elGridTitle.textContent = dict["activities-filter-all"] === "الكل" ? "الفعاليات والأنشطة" : dict["activities-badge"];
            
            const elGridDesc = document.querySelector(".max-w-7xl p.text-slate-500");
            if (elGridDesc && elGridDesc.textContent.includes("تعرّف")) {
                elGridDesc.textContent = lang === "ar" ? "تعرّف على جميع الفعاليات الثقافية والتعليمية القادمة في مكتبتنا" : lang === "fr" ? "Découvrez toutes les activités culturelles et éducatives à venir" : "Discover all upcoming cultural and educational activities";
            }

            const tabs = document.querySelectorAll("#filterTabs button");
            const filterMap = {
                "all": "activities-filter-all",
                "literary": "activities-filter-literary",
                "workshop": "activities-filter-workshop",
                "exhibition": "activities-filter-exhibition",
                "children": "activities-filter-children",
                "conference": "activities-filter-conference"
            };
            tabs.forEach(tab => {
                const filterAttr = tab.getAttribute("data-filter");
                if (filterMap[filterAttr] && dict[filterMap[filterAttr]]) {
                    tab.textContent = dict[filterMap[filterAttr]];
                }
            });

            const searchInput = document.getElementById("searchInput");
            if (searchInput) {
                searchInput.placeholder = dict["activities-search-placeholder"];
            }

            const galleryTitle = document.querySelector("section.bg-white h2");
            if (galleryTitle) galleryTitle.textContent = lang === "ar" ? "معرض الصور" : lang === "fr" ? "Galerie Photos" : "Photo Gallery";
            const galleryDesc = document.querySelector("section.bg-white p");
            if (galleryDesc) galleryDesc.textContent = lang === "ar" ? "لحظات مميزة من فعالياتنا السابقة" : lang === "fr" ? "Moments mémorables de nos événements passés" : "Memorable moments from our past events";

            const videoTitle = document.querySelector("section.py-16:not(.bg-white) h2");
            if (videoTitle) videoTitle.textContent = lang === "ar" ? "فيديوهات الفعاليات" : lang === "fr" ? "Vidéos des événements" : "Event Videos";
            const videoDesc = document.querySelector("section.py-16:not(.bg-white) p");
            if (videoDesc) videoDesc.textContent = lang === "ar" ? "شاهد أبرز اللحظات من فعالياتنا الثقافية" : lang === "fr" ? "Découvrez les moments forts en vidéo" : "Watch our event highlights in video";

            const videoCards = document.querySelectorAll("section.py-16:not(.bg-white) .grid .p-6");
            if (videoCards.length >= 2) {
                const card1Title = videoCards[0].querySelector("h3");
                if (card1Title) card1Title.textContent = lang === "ar" ? "عرض تعريفي للنشاطات الثقافية" : lang === "fr" ? "Présentation des activités culturelles" : "Presentation of cultural activities";
                const card1Desc = videoCards[0].querySelector("p");
                if (card1Desc) card1Desc.textContent = lang === "ar" ? "شاهد الفيديو التعريفي لأبرز النشاطات والفعاليات الثقافية في مكتبتنا" : lang === "fr" ? "Découvrez la vidéo de présentation des principales activités" : "Watch the introductory video of the main library activities";

                const card2Title = videoCards[1].querySelector("h3");
                if (card2Title) card2Title.textContent = lang === "ar" ? "تغطية خاصة متميزة" : lang === "fr" ? "Couverture spéciale" : "Special Coverage";
                const card2Desc = videoCards[1].querySelector("p");
                if (card2Desc) card2Desc.textContent = lang === "ar" ? "فيديو تعريفي للخدمات والأنشطة المقدمة داخل الفضاء الثقافي" : lang === "fr" ? "Vidéo présentant les services et activités de l'espace culturel" : "Video introducing the services and activities of the cultural space";
            }

            const calH2 = document.querySelector(".calendar-header h2");
            if (calH2) calH2.textContent = dict["activities-calendar-modal-title"];
            const calDayHeads = document.querySelectorAll(".calendar-day-head");
            const calDayTexts = {
                ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            };
            calDayHeads.forEach((head, idx) => {
                if (calDayTexts[lang] && calDayTexts[lang][idx]) {
                    head.textContent = calDayTexts[lang][idx];
                }
            });

            translateEventsInMemory(lang);
        }

        // Event Details Page
        if (path.includes("event-details.html")) {
            document.querySelectorAll(".detail-card").forEach(card => {
                const h2 = card.querySelector("h2");
                if (h2) {
                    const txt = h2.textContent.trim();
                    if (txt.includes("حول")) {
                        h2.innerHTML = '<span class="material-symbols-outlined">description</span> ' + dict["event-details-about"];
                    } else if (txt.includes("برنامج")) {
                        h2.innerHTML = '<span class="material-symbols-outlined">format_list_numbered</span> ' + dict["event-details-program"];
                    } else if (txt.includes("فيديو")) {
                        h2.innerHTML = '<span class="material-symbols-outlined">smart_display</span> ' + dict["event-details-video"];
                    }
                }
            });

            const elBookTitle = document.querySelector(".sticky-sidebar h3");
            if (elBookTitle) elBookTitle.textContent = dict["event-details-book-seat"];
            const elBookDesc = document.querySelector(".sticky-sidebar p");
            if (elBookDesc && elBookDesc.textContent.includes("يرجى")) elBookDesc.textContent = dict["event-details-book-desc"];

            const labels = document.querySelectorAll(".sticky-sidebar label");
            if (labels[0]) labels[0].textContent = dict["event-details-label-name"];
            if (labels[1]) labels[1].textContent = dict["event-details-label-phone"];

            const inputs = document.querySelectorAll(".sticky-sidebar input");
            if (inputs[0]) inputs[0].placeholder = dict["event-details-placeholder-name"];

            const btnConfirm = document.querySelector(".sticky-sidebar button[type='button']");
            if (btnConfirm) btnConfirm.innerHTML = '<span class="material-symbols-outlined">send</span> ' + dict["event-details-btn-confirm"];

            const footerNote = document.querySelector(".sticky-sidebar .text-\\[11px\\]");
            if (footerNote) footerNote.textContent = dict["event-details-footer-note"];

            const shareBtns = document.querySelectorAll(".sticky-sidebar .mt-6 button");
            if (shareBtns[0]) shareBtns[0].innerHTML = '<span class="material-symbols-outlined">share</span> ' + dict["event-details-share"];
            if (shareBtns[1]) {
                shareBtns[1].title = dict["event-details-add-calendar"];
                shareBtns[1].innerHTML = '<span class="material-symbols-outlined">calendar_add_on</span>';
            }

            translateEventsInMemory(lang);

            const badgeEl = document.getElementById("eventCategoryBadge");
            if (badgeEl) {
                const catNames = {
                    'literary': lang === 'ar' ? 'فعالية أدبية' : lang === 'fr' ? 'Événement Littéraire' : 'Literary Event',
                    'children': lang === 'ar' ? 'فضاء الأطفال' : lang === 'fr' ? 'Espace Enfants' : 'Kids Space',
                    'exhibition': lang === 'ar' ? 'معرض ثقافي' : lang === 'fr' ? 'Exposition Culturelle' : 'Cultural Exhibition',
                    'conference': lang === 'ar' ? 'ندوة فكرية' : lang === 'fr' ? 'Séminaire Intellectuel' : 'Intellectual Seminar',
                    'workshop': lang === 'ar' ? 'ورشة تدريبية' : lang === 'fr' ? 'Atelier de Formation' : 'Training Workshop'
                };
                const badgeTxt = badgeEl.textContent.trim();
                for (const [key, val] of Object.entries(catNames)) {
                    if (badgeTxt.includes(key) || badgeTxt === 'فعالية أدبية' || badgeTxt === 'فضاء الأطفال' || badgeTxt === 'معرض ثقافي' || badgeTxt === 'ندوة فكرية' || badgeTxt === 'ورشة تدريبية') {
                        const urlParams = new URLSearchParams(window.location.search);
                        const eventId = parseInt(urlParams.get('id'));
                        if (window.events) {
                            const currentEv = window.events.find(e => e.id === eventId);
                            if (currentEv && catNames[currentEv.category]) {
                                badgeEl.textContent = catNames[currentEv.category];
                            }
                        }
                        break;
                    }
                }
            }
        }

        // Internal Regulations Page
        if (path.includes("internal-regulations.html")) {
            const h1 = document.querySelector(".reg-hero h1");
            if (h1) h1.textContent = dict["reg-hero-title"];
            const heroDesc = document.querySelector(".reg-hero p");
            if (heroDesc) heroDesc.textContent = dict["reg-hero-desc"];

            const regCards = document.querySelectorAll(".content-card");
            if (regCards[0]) {
                const title = regCards[0].querySelector(".section-title span:not(.material-symbols-outlined)");
                if (title) title.textContent = dict["reg-hours-title"];
                const dayHead = regCards[0].querySelector("h4");
                if (dayHead) dayHead.textContent = dict["reg-hours-days"];
                const dayDesc = regCards[0].querySelector(".space-y-6 p.text-slate-500");
                if (dayDesc) dayDesc.textContent = dict["reg-hours-desc"];
                const badges = regCards[0].querySelectorAll(".time-badge span:not(.material-symbols-outlined)");
                if (badges[0]) badges[0].textContent = dict["reg-hours-from"];
                if (badges[1]) badges[1].textContent = dict["reg-hours-to"];
                const toText = regCards[0].querySelector(".font-bold.text-slate-300");
                if (toText) toText.textContent = lang === "ar" ? "إلى" : lang === "fr" ? "à" : "to";
                const note = regCards[0].querySelector(".text-sm.text-slate-400.italic");
                if (note) note.textContent = dict["reg-hours-note"];
            }

            if (regCards[1]) {
                const title = regCards[1].querySelector(".section-title span:not(.material-symbols-outlined)");
                if (title) title.textContent = dict["reg-join-title"];
                const ruleCards = regCards[1].querySelectorAll(".rule-card");
                if (ruleCards[0]) {
                    const h4 = ruleCards[0].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-age-title"];
                    const p = ruleCards[0].querySelector("p");
                    if (p) p.textContent = dict["reg-age-desc"];
                }
                if (ruleCards[1]) {
                    const h4 = ruleCards[1].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-process-title"];
                    const p = ruleCards[1].querySelector("p");
                    if (p) p.textContent = dict["reg-process-desc"];
                }
            }

            if (regCards[2]) {
                const title = regCards[2].querySelector(".section-title span:not(.material-symbols-outlined)");
                if (title) title.textContent = dict["reg-lending-title"];
                const ruleCards = regCards[2].querySelectorAll(".rule-card");
                if (ruleCards[0]) {
                    const h4 = ruleCards[0].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-lending-internal"];
                    const p = ruleCards[0].querySelector("p");
                    if (p) p.textContent = dict["reg-lending-internal-desc"];
                }
                if (ruleCards[1]) {
                    const h4 = ruleCards[1].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-lending-external"];
                    const p = ruleCards[1].querySelector("p");
                    if (p) p.textContent = dict["reg-lending-external-desc"];
                }
            }

            if (regCards[3]) {
                const title = regCards[3].querySelector(".section-title span:not(.material-symbols-outlined)");
                if (title) title.textContent = dict["reg-internet-title"];
                const subPills = regCards[3].querySelectorAll(".grid-cols-1.md\\:grid-cols-3 > div");
                if (subPills[0]) {
                    const h4 = subPills[0].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-internet-free"];
                    const p = subPills[0].querySelector("p");
                    if (p) p.textContent = dict["reg-internet-free-desc"];
                }
                if (subPills[1]) {
                    const h4 = subPills[1].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-internet-equip"];
                    const p = subPills[1].querySelector("p");
                    if (p) p.textContent = dict["reg-internet-equip-desc"];
                }
                if (subPills[2]) {
                    const h4 = subPills[2].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-internet-support"];
                    const p = subPills[2].querySelector("p");
                    if (p) p.textContent = dict["reg-internet-support-desc"];
                }
            }

            if (regCards[4]) {
                const title = regCards[4].querySelector(".penalty-header span:not(.material-symbols-outlined)");
                if (title) title.textContent = dict["reg-penalty-title"];
                const ruleCards = regCards[4].querySelectorAll(".rule-card");
                if (ruleCards[0]) {
                    const h4 = ruleCards[0].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-penalty-delay"];
                    const p = ruleCards[0].querySelector("p");
                    if (p) p.textContent = dict["reg-penalty-delay-desc"];
                }
                if (ruleCards[1]) {
                    const h4 = ruleCards[1].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-penalty-loss"];
                    const p = ruleCards[1].querySelector("p");
                    if (p) p.textContent = dict["reg-penalty-loss-desc"];
                }
                if (ruleCards[2]) {
                    const h4 = ruleCards[2].querySelector("h4");
                    if (h4) h4.textContent = dict["reg-penalty-exclude"];
                    const p = ruleCards[2].querySelector("p");
                    if (p) p.textContent = dict["reg-penalty-exclude-desc"];
                }
            }
        }

        // Orders History Page
        if (path.includes("orders-history.html")) {
            const elBreadcrumb = document.querySelector("nav.flex.items-center span.text-primary");
            if (elBreadcrumb) elBreadcrumb.textContent = dict["orders-history-breadcrumb"];
            const elBreadcrumbHome = document.querySelector("nav.flex.items-center a");
            if (elBreadcrumbHome) elBreadcrumbHome.textContent = lang === "ar" ? "الرئيسية" : lang === "fr" ? "Accueil" : "Home";

            const elTitle = document.querySelector("h2.text-3xl");
            if (elTitle) elTitle.textContent = dict["orders-history-title"];

            const elDesc = document.querySelector("main p.text-slate-500");
            if (elDesc && elDesc.textContent.includes("تابع")) elDesc.textContent = dict["orders-history-desc"];

            const originalFetchHistory = window.fetchHistory;
            if (originalFetchHistory) {
                window.fetchHistory = async function() {
                    await originalFetchHistory();
                    translateOrderHistoryCards(lang, dict);
                };
                translateOrderHistoryCards(lang, dict);
            }
        }

        // Hall Booking Page
        if (path.includes("hall-booking.html")) {
            const heroBadge = document.querySelector(".hero-section span.text-sm");
            if (heroBadge) heroBadge.textContent = dict["booking-hero-badge"];

            const h1 = document.querySelector(".hero-section h1");
            if (h1) h1.textContent = dict["booking-hero-title"];

            const heroDesc = document.querySelector(".hero-section p");
            if (heroDesc) heroDesc.textContent = dict["booking-hero-desc"];

            const hallsTitle = document.querySelector(".glass-card h2");
            if (hallsTitle) {
                hallsTitle.innerHTML = '<span class="material-symbols-outlined text-primary text-3xl">domain</span> ' + dict["booking-halls-title"];
            }

            const hallsGroups = document.querySelectorAll(".glass-card .group");
            if (hallsGroups[0]) {
                const badge = hallsGroups[0].querySelector(".floating-badge");
                if (badge) badge.textContent = dict["booking-hall1-badge"];
                const title = hallsGroups[0].querySelector("h3");
                if (title) title.textContent = dict["booking-hall1-title"];
                const cap = hallsGroups[0].querySelector(".flex.items-center span:nth-of-type(1)");
                if (cap) cap.innerHTML = '<span class="material-symbols-outlined text-[18px]">groups</span> ' + dict["booking-hall1-cap"];
                const equip = hallsGroups[0].querySelector(".flex.items-center span:nth-of-type(2)");
                if (equip) equip.innerHTML = '<span class="material-symbols-outlined text-[18px]">devices</span> ' + dict["booking-hall1-equip"];
                const desc = hallsGroups[0].querySelector("p");
                if (desc) desc.textContent = dict["booking-hall1-desc"];
            }

            if (hallsGroups[1]) {
                const badge = hallsGroups[1].querySelector(".floating-badge");
                if (badge) badge.textContent = dict["booking-hall2-badge"];
                const title = hallsGroups[1].querySelector("h3");
                if (title) title.textContent = dict["booking-hall2-title"];
                const cap = hallsGroups[1].querySelector(".flex.items-center span:nth-of-type(1)");
                if (cap) cap.innerHTML = '<span class="material-symbols-outlined text-[18px]">groups</span> ' + dict["booking-hall2-cap"];
                const equip = hallsGroups[1].querySelector(".flex.items-center span:nth-of-type(2)");
                if (equip) equip.innerHTML = '<span class="material-symbols-outlined text-[18px]">wifi</span> ' + dict["booking-hall2-equip"];
                const desc = hallsGroups[1].querySelector("p");
                if (desc) desc.textContent = dict["booking-hall2-desc"];
            }

            const featureCards = document.querySelectorAll(".grid-cols-1.md\\:grid-cols-3 .glass-card");
            if (featureCards[0]) {
                const h4 = featureCards[0].querySelector("h4");
                if (h4) h4.textContent = dict["booking-f1-title"];
                const p = featureCards[0].querySelector("p");
                if (p) p.textContent = dict["booking-f1-desc"];
            }
            if (featureCards[1]) {
                const h4 = featureCards[1].querySelector("h4");
                if (h4) h4.textContent = dict["booking-f2-title"];
                const p = featureCards[1].querySelector("p");
                if (p) p.textContent = dict["booking-f2-desc"];
            }
            if (featureCards[2]) {
                const h4 = featureCards[2].querySelector("h4");
                if (h4) h4.textContent = dict["booking-f3-title"];
                const p = featureCards[2].querySelector("p");
                if (p) p.textContent = dict["booking-f3-desc"];
            }

            const formCard = document.querySelector(".lg\\:col-span-1 .glass-card");
            if (formCard) {
                const formTitle = formCard.querySelector("h2");
                if (formTitle) formTitle.textContent = dict["booking-form-title"];

                const labels = formCard.querySelectorAll("label");
                if (labels[0]) labels[0].textContent = dict["booking-form-name"];
                if (labels[1]) labels[1].textContent = dict["booking-form-email"];
                if (labels[2]) labels[2].textContent = dict["booking-form-select-hall"];
                if (labels[3]) labels[3].textContent = dict["booking-form-date"];
                if (labels[4]) labels[4].textContent = dict["booking-form-period"];

                const inputs = formCard.querySelectorAll("input");
                if (inputs[0]) inputs[0].placeholder = dict["booking-form-name-placeholder"];

                const hallSelectOptions = formCard.querySelectorAll("select:nth-of-type(1) option");
                if (hallSelectOptions[0]) hallSelectOptions[0].textContent = dict["booking-hall1-title"];
                if (hallSelectOptions[1]) hallSelectOptions[1].textContent = dict["booking-hall2-title"];
                if (hallSelectOptions[2]) hallSelectOptions[2].textContent = lang === "ar" ? "فضاء ورش العمل" : lang === "fr" ? "Espace Ateliers" : "Workshops Space";

                const periodSelectOptions = formCard.querySelectorAll("select:nth-of-type(2) option");
                if (periodSelectOptions[0]) periodSelectOptions[0].textContent = dict["booking-form-period-morning"];
                if (periodSelectOptions[1]) periodSelectOptions[1].textContent = dict["booking-form-period-afternoon"];
                if (periodSelectOptions[2]) periodSelectOptions[2].textContent = dict["booking-form-period-fullday"];

                const btnSubmit = formCard.querySelector("button");
                if (btnSubmit) {
                    btnSubmit.innerHTML = '<span>' + dict["booking-form-submit"] + '</span> <span class="material-symbols-outlined">send</span>';
                }

                const footerText = formCard.querySelector("p");
                if (footerText) footerText.textContent = dict["booking-form-footer"];
            }
            
            // Dispatch custom event to notify dynamic elements of language changes
            document.dispatchEvent(new CustomEvent('i18nChanged', { detail: { language: lang } }));
        }
    },

    translateByTextContent: function(lang, dict) {
        // Simple search-and-replace for text nodes (incredibly powerful fallback for menus and titles)
        const textReplacements = {
            "الرئيسية": "nav-home",
            "عن المكتبة": "nav-about",
            "كلمة مدير المكتبة": "nav-director",
            "أهداف ومهام المكتبة": "nav-goals",
            "البطاقة الفنية للمكتبة": "nav-card",
            "النظام الداخلي للمكتبة": "nav-regulations",
            "خدمات": "nav-services",
            "الإنخراط في المكتبة": "nav-join",
            "فهرس المكتبة": "nav-catalog",
            "حجز القاعات": "nav-hall",
            "فضاء الشكاوى": "nav-complaints",
            "النشاطات الثقافية": "nav-activities",
            "برنامج النشاطات الثقافية": "nav-prog",
            "فضاء الأطفال": "nav-kids",
            "منتدى الكتاب": "nav-forum",
            "المؤلفين المحليين": "nav-authors",
            "اتصل بنا": "nav-contact",
            "تسجيل الدخول": "nav-login",
            "التسجيل": "nav-register",
            "سجل الإعارة": "nav-history",
            "تسجيل الخروج": "nav-logout",
            "حسابي": "nav-profile",
            "رسالة ترحيبية من إدارة المكتبة": "nav-director-desc",
            "رؤيتنا وأهدافنا الاستراتيجية": "nav-goals-desc",
            "معلومات تقنية وإحصائيات": "nav-card-desc",
            "قواعد ولوائح الاستخدام": "nav-regulations-desc",
            "سجّل للحصول على بطاقة الانخراط": "nav-join-desc",
            "تصفح الكتب والمراجع المتاحة": "nav-catalog-desc",
            "احجز قاعة للفعاليات والاجتماعات": "nav-hall-desc",
            "أرسل ملاحظاتك واقتراحاتك": "nav-complaints-desc",
            "الفعاليات والأنشطة القادمة": "nav-prog-desc",
            "أنشطة ترفيهية وتعليمية للصغار": "nav-kids-desc",
            "مناقشات أدبية وثقافية": "nav-forum-desc",
            "بوابة الكتّاب والمؤلفين المحليين": "nav-authors-desc",
            "الاسم واللقب": "profile-label-fullname",
            "تاريخ الميلاد": "profile-label-birth",
            "المهنة": "profile-label-job",
            "رقم التعريف الوطني": "profile-label-nin",
            "البريد الإلكتروني": "profile-label-email",
            "رقم الهاتف": "profile-label-phone",
            "العنوان": "profile-label-address",
            "تم الرفع": "profile-doc-uploaded",
            "غير متوفر": "profile-doc-missing",
            "قيد المراجعة": "profile-status-review",
            "تم التحقق": "profile-status-verified",
            "وصل التسجيل": "profile-action-receipt",
            "تعهد (AR)": "profile-action-commit-ar",
            "Engagement (FR)": "profile-action-commit-fr",
            "بطاقة القارئ (RFID)": "profile-action-rfid",
            "تغيير السر": "profile-action-pass",
            "بحث الكتب": "profile-action-search",
            "خروج": "profile-action-logout",
            "المعلومات الشخصية": "profile-card-personal",
            "التواصل والعنوان": "profile-card-contact",
            "حالة الملف": "profile-doc-status-title",
            "بطاقة الهوية": "profile-doc-cni",
            "الصورة الشخصية": "profile-doc-photo"
        };

        const walkDOM = (node) => {
            if (node.nodeType === 3) { // Text node
                const val = node.nodeValue.trim();
                if (textReplacements[val]) {
                    const key = textReplacements[val];
                    if (dict[key]) {
                        node.nodeValue = dict[key];
                    }
                }
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    // Skip script, style and inputs
                    if (node.tagName !== "SCRIPT" && node.tagName !== "STYLE" && node.tagName !== "INPUT" && node.tagName !== "TEXTAREA") {
                        walkDOM(node.childNodes[i]);
                    }
                }
            }
        };
        
        walkDOM(document.body);
    },

    // Injects the premium glassmorphic language selector into the navbar dynamically
    injectLangSelector: function() {
        const currentLang = localStorage.getItem("lang") || "ar";
        const currentLabel = currentLang === "ar" ? "العربية" : currentLang === "fr" ? "Français" : currentLang === "kab" ? "Tamazight" : "English";

        // Find the original language button
        const authContainer = document.querySelector("#auth-container") || document.querySelector("header .flex-shrink-0 .flex");
        if (!authContainer) return;

        // Try to locate the original hardcoded button
        const originalBtn = Array.from(document.querySelectorAll("header button")).find(el => 
            (el.textContent.includes("العربية") || el.textContent.includes("Français") || el.textContent.includes("English") || el.textContent.includes("Tamazight")) && el.querySelector(".material-symbols-outlined")
        );

        if (originalBtn) {
            // Replace original button with a premium dropdown container
            const switcherHTML = `
                <div class="relative lang-switcher no-print" style="margin-left: 10px; margin-right: 10px;">
                     <button id="langBtn" class="flex items-center gap-1.5 text-slate-700 hover:text-primary px-3 py-2 text-[15px] font-bold border border-slate-200/60 rounded-xl bg-white/60 backdrop-blur-md shadow-sm transition-all cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 0, 'wght' 600;">translate</span>
                        <span id="currentLangLabel" style="font-weight: 700;">${currentLabel}</span>
                        <span class="material-symbols-outlined text-[14px]">expand_more</span>
                    </button>
                    <div id="langDropdown" class="hidden absolute ${currentLang === 'ar' ? 'left-0' : 'right-0'} mt-2 w-32 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100/80 py-1.5 z-[999] transition-all">
                        <button onclick="i18n.setLanguage('ar')" class="w-full text-right px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors font-bold block cursor-pointer">العربية</button>
                        <button onclick="i18n.setLanguage('kab')" class="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors font-bold block cursor-pointer">Tamazight</button>
                        <button onclick="i18n.setLanguage('en')" class="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors font-bold block cursor-pointer">English</button>
                        <button onclick="i18n.setLanguage('fr')" class="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-primary transition-colors font-bold block cursor-pointer">Français</button>
                    </div>
                </div>
            `;

            // Insert it
            const parent = originalBtn.parentNode;
            originalBtn.remove();
            
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = switcherHTML.trim();
            const newSwitcher = tempDiv.firstChild;
            parent.insertBefore(newSwitcher, parent.firstChild);

            // Bind click toggle
            const langBtn = document.getElementById("langBtn");
            const langDropdown = document.getElementById("langDropdown");
            if (langBtn && langDropdown) {
                langBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    langDropdown.classList.toggle("hidden");
                });
                document.addEventListener("click", () => {
                    langDropdown.classList.add("hidden");
                });
            }
        }
    },

    setLanguage: function(lang) {
        localStorage.setItem("lang", lang);
        this.translatePage(lang);
        window.location.reload(); // Quick refresh ensures everything, including graphs/plugins, updates instantly
    },

    init: function() {
        const savedLang = localStorage.getItem("lang") || "ar";
        
        // Ensure kab has fallbacks for any missing keys
        const frKeys = this.translations["fr"];
        const kabKeys = this.translations["kab"];
        if (frKeys && kabKeys) {
            for (const key in frKeys) {
                if (kabKeys[key] === undefined) {
                    kabKeys[key] = frKeys[key];
                }
            }
        }
        
        // Translate page instantly
        this.translatePage(savedLang);

        // Inject the selector into the DOM after page loads fully
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                this.injectLangSelector();
                this.translatePage(savedLang);
            });
        } else {
            this.injectLangSelector();
            this.translatePage(savedLang);
        }
    }
};

// Auto-run on load
i18n.init();
window.i18n = i18n;
