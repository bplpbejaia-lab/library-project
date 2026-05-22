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

            // General / Auth Modal
            "login-title": "تسجيل الدخول",
            "login-subtitle": "مرحباً بك مجدداً في فضائك الخاص",
            "login-username-placeholder": "اسم المستخدم أو البريد الإلكتروني",
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
            "stat-titles": "عدد العناوين",
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
            "g-title": "إنشاء حساب قارئ جديد",
            "g-subtitle": "سجل الآن لتستفيد من الإعارة الخارجية والولوج لكافة الخدمات الرقمية للمكتبة",
            "g-step-personal": "البيانات الشخصية",
            "g-step-contact": "معلومات الاتصال",
            "g-step-documents": "تحميل الوثائق",
            "g-label-nom-ar": "اللقب (بالعربية)",
            "g-label-prenom-ar": "الاسم (بالعربية)",
            "g-label-nom-la": "Nom (en Latin)",
            "g-label-prenom-la": "Prénom (en Latin)",
            "g-label-dob": "تاريخ الميلاد",
            "g-label-pob": "مكان الميلاد",
            "g-label-gender": "الجنس",
            "g-gender-m": "ذكر",
            "g-gender-f": "أنثى",
            "g-label-profession": "المهنة / الصفة",
            "g-label-nationalite": "الجنسية",
            "g-label-email": "البريد الإلكتروني",
            "g-label-phone": "رقم الهاتف",
            "g-label-password": "كلمة المرور",
            "g-label-address": "العنوان الكامل",
            "g-label-wilaya": "الولاية",
            "g-label-nin": "رقم التعريف الوطني (NIN)",
            "g-label-cni-front": "بطاقة التعريف الوطنية (الوجه الأمامي)",
            "g-label-cni-back": "بطاقة التعريف الوطنية (الوجه الخلفي)",
            "g-label-photo": "الصورة الشخصية",
            "g-btn-next": "التالي",
            "g-btn-prev": "السابق",
            "g-btn-submit": "إرسال ملف التسجيل",

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
            "director-sig-name": "السيد حموش مهني",

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

            // General / Auth Modal
            "login-title": "Se Connecter",
            "login-subtitle": "Bienvenue dans votre espace lecteur",
            "login-username-placeholder": "Identifiant ou E-mail",
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
            "g-title": "Créer un nouveau compte lecteur",
            "g-subtitle": "Inscrivez-vous maintenant pour bénéficier du prêt externe et de tous nos services en ligne",
            "g-step-personal": "Infos Personnelles",
            "g-step-contact": "Contact & Connexion",
            "g-step-documents": "Téléversement",
            "g-label-nom-ar": "Nom (en Arabe)",
            "g-label-prenom-ar": "Prénom (en Arabe)",
            "g-label-nom-la": "Nom (en Latin)",
            "g-label-prenom-la": "Prénom (en Latin)",
            "g-label-dob": "Date de naissance",
            "g-label-pob": "Lieu de naissance",
            "g-label-gender": "Genre",
            "g-gender-m": "Homme",
            "g-gender-f": "Femme",
            "g-label-profession": "Profession / Statut",
            "g-label-nationalite": "Nationalité",
            "g-label-email": "Adresse E-mail",
            "g-label-phone": "Téléphone",
            "g-label-password": "Mot de passe",
            "g-label-address": "Adresse complète",
            "g-label-wilaya": "Wilaya",
            "g-label-nin": "Numéro d'identité national (NIN)",
            "g-label-cni-front": "Carte d'identité (Recto)",
            "g-label-cni-back": "Carte d'identité (Verso)",
            "g-label-photo": "Photo d'identité",
            "g-btn-next": "Suivant",
            "g-btn-prev": "Précédent",
            "g-btn-submit": "Envoyer l'inscription",

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
            "director-sig-name": "M. Hammouche Mehani",

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

            // General / Auth Modal
            "login-title": "Login",
            "login-subtitle": "Welcome back to your member space",
            "login-username-placeholder": "Username or Email",
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
            "g-title": "Create a New Reader Account",
            "g-subtitle": "Register now to enjoy external book lending and access all digital library services",
            "g-step-personal": "Personal Details",
            "g-step-contact": "Contact & Login",
            "g-step-documents": "Uploads",
            "g-label-nom-ar": "Last Name (Arabic)",
            "g-label-prenom-ar": "First Name (Arabic)",
            "g-label-nom-la": "Last Name (Latin)",
            "g-label-prenom-la": "First Name (Latin)",
            "g-label-dob": "Date of Birth",
            "g-label-pob": "Place of Birth",
            "g-label-gender": "Gender",
            "g-gender-m": "Male",
            "g-gender-f": "Female",
            "g-label-profession": "Profession / Status",
            "g-label-nationalite": "Nationality",
            "g-label-email": "Email Address",
            "g-label-phone": "Phone Number",
            "g-label-password": "Password",
            "g-label-address": "Full Address",
            "g-label-wilaya": "Wilaya",
            "g-label-nin": "National Identification Number (NIN)",
            "g-label-cni-front": "National ID (Front Side)",
            "g-label-cni-back": "National ID (Back Side)",
            "g-label-photo": "Profile Photo",
            "g-btn-next": "Next",
            "g-btn-prev": "Previous",
            "g-btn-submit": "Submit Application",

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
            "director-sig-name": "Mr. Hammouche Mehani",

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

            // General / Auth Modal
            "login-title": "Kcem",
            "login-subtitle": "Ansuf yis-k ɣer tallunt-ik",
            "login-username-placeholder": "Isem n useqdac neɣ E-mail",
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
            "g-title": "Ayerred n Umaslad Amaynut",
            "g-subtitle": "Jerred tura iwakken ad t-awiḍ arettal d unermis ɣer yimeẓla n web",
            "g-step-personal": "Talɣut Tudmawt",
            "g-step-contact": "Anermis & Akayad",
            "g-step-documents": "Uli Isemlan",
            "g-label-nom-ar": "Isem n twacult (s taɛrabt)",
            "g-label-prenom-ar": "Isem (s taɛrabt)",
            "g-label-nom-la": "Isem n twacult (s tlatint)",
            "g-label-prenom-la": "Isem (s tlatint)",
            "g-label-dob": "Azemz n tlalit",
            "g-label-pob": "Addeg n tlalit",
            "g-label-gender": "Tawsit",
            "g-gender-m": "Argaz",
            "g-gender-f": "Tameṭṭut",
            "g-label-profession": "Axeddim / Addad",
            "g-label-nationalite": "Taɣlent",
            "g-label-email": "Tansa E-mail",
            "g-label-phone": "Uṭṭun n usir",
            "g-label-password": "Awal n uɛaddi",
            "g-label-address": "Tansa tačurant",
            "g-label-wilaya": "Tawilayt",
            "g-label-nin": "Uṭṭun n ucali anamur (NIN)",
            "g-label-cni-front": "Tafriqt n ucali (Zdat)",
            "g-label-cni-back": "Tafriqt n ucali (Deffir)",
            "g-label-photo": "Tugna n ucali",
            "g-btn-next": "Afus d-iteddun",
            "g-btn-prev": "Afus yezrin",
            "g-btn-submit": "Azen ajerred",

            // Director Word Page (Specifics)
            "director-bismillah": "S yisem n Yakuc, Anegbay, Amezwar",
            "director-sig-title": "Anemhal n Temkarḍit n Bgayet",
            "director-sig-name": "M. Hammouche Mehani",

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
            "header nav a[href='#'] .dropdown-title": "nav-complaints",
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
            "main p.text-slate-600, main p.text-slate-500": "events-section-subtitle",
            ".animate-count[data-target]:nth-of-type(1)": "stat-titles",

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
            const elTitle = document.querySelector("h1");
            if (elTitle && elTitle.textContent.includes("حساب")) elTitle.textContent = dict["g-title"];
            const elSub = document.querySelector("h1 + p");
            if (elSub && elSub.textContent.includes("سجل")) elSub.textContent = dict["g-subtitle"];

            // Step headers
            const stepMap = [dict["g-step-personal"], dict["g-step-contact"], dict["g-step-documents"]];
            document.querySelectorAll(".step-label").forEach((el, idx) => {
                if (stepMap[idx]) el.textContent = stepMap[idx];
            });

            // Labels
            const registerLabels = {
                "اللقب (بالعربية)": "g-label-nom-ar",
                "الاسم (بالعربية)": "g-label-prenom-ar",
                "Nom (en Latin)": "g-label-nom-la",
                "Prénom (en Latin)": "g-label-prenom-la",
                "تاريخ الميلاد": "g-label-dob",
                "مكان الميلاد": "g-label-pob",
                "الجنس": "g-label-gender",
                "المهنة / الصفة": "g-label-profession",
                "الجنسية": "g-label-nationalite",
                "البريد الإلكتروني": "g-label-email",
                "رقم الهاتف": "g-label-phone",
                "كلمة المرور": "g-label-password",
                "العنوان الكامل": "g-label-address",
                "الولاية": "g-label-wilaya",
                "رقم التعريف الوطني": "g-label-nin",
                "بطاقة التعريف الوطنية (الوجه الأمامي)": "g-label-cni-front",
                "بطاقة التعريف الوطنية (الوجه الخلفي)": "g-label-cni-back",
                "الصورة الشخصية": "g-label-photo"
            };
            document.querySelectorAll("label").forEach(el => {
                const txt = el.textContent.trim();
                for (const [arTxt, key] of Object.entries(registerLabels)) {
                    if (txt.includes(arTxt)) {
                        el.textContent = dict[key];
                        break;
                    }
                }
            });

            // Gender selector options
            document.querySelectorAll("select[name='genre'] option").forEach(el => {
                if (el.value === "M" || el.textContent.includes("ذكر")) el.textContent = dict["g-gender-m"];
                if (el.value === "F" || el.textContent.includes("أنثى")) el.textContent = dict["g-gender-f"];
            });

            // Buttons
            document.querySelectorAll("button").forEach(el => {
                const txt = el.textContent.trim();
                if (txt.includes("التالي")) el.textContent = dict["g-btn-next"];
                if (txt.includes("السابق")) el.textContent = dict["g-btn-prev"];
                if (txt.includes("إرسال")) el.textContent = dict["g-btn-submit"];
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
            "تم التحقق": "profile-status-verified"
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
