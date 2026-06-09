(function() {
    const ADMIN_KEY='ca_admin_session_v2';
    const CONTENT_KEY='ca_content_v2';
    let isAdmin=false;

    function notifyAdmin(message) {
        let container = document.getElementById('adminToastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'adminToastContainer';
            container.style.cssText = 'position:fixed;top:16px;right:16px;z-index:21000;display:flex;flex-direction:column;gap:10px;max-width:min(340px,calc(100vw - 32px));pointer-events:none;';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = 'pointer-events:auto;background:#fff;border:1px solid #fde68a;border-right:5px solid #d97706;box-shadow:0 12px 28px rgba(15,23,42,.14);padding:12px 14px;border-radius:12px;font-weight:700;color:#0f172a;direction:rtl;';
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity .25s ease';
            setTimeout(() => toast.remove(), 260);
        }, 3200);
    }

    const D={
        heroTitle:'برنامج النشاطات الثقافية',
        heroSub:'اكتشف الفعاليات والأنشطة الثقافية القادمة في المكتبة الرئيسية لولاية بجاية',
        stats:{events:'10',workshops:'4',exhibitions:'3',seats:'∞'}
    };
    function L(){ try{ return Object.assign({},D,JSON.parse(localStorage.getItem(CONTENT_KEY)||'{}')); }catch(e){ return D; } }
    function S(data){ localStorage.setItem(CONTENT_KEY,JSON.stringify(data)); }
    let C=L();

    function apply(){
        const h1=document.querySelector('.hero-content h1');
        const hp=document.querySelector('.hero-content p');
        if(h1) h1.textContent=C.heroTitle;
        if(hp) hp.textContent=C.heroSub;
        const sg=document.querySelector('.bg-white.rounded-2xl.shadow-xl');
        if(sg){
            const sm=[C.stats.events,C.stats.workshops,C.stats.exhibitions,C.stats.seats];
            const vals=sg.querySelectorAll('.text-3xl');
            vals.forEach((el,i)=>{ if(sm[i]!==undefined) el.textContent=sm[i]; });
        }
    }

    function makeEditable(el,onSave,placeholder){
        if(!isAdmin) return;
        const old=el.textContent;
        const inp=document.createElement('input');
        inp.value=old;
        inp.className='admin-inline-input';
        if(placeholder) inp.placeholder=placeholder;
        el.textContent='';
        el.appendChild(inp);
        inp.focus();
        function save(){ const v=inp.value.trim(); if(v) onSave(v); else el.textContent=old; el.innerHTML=''; el.textContent=v||old; }
        inp.addEventListener('blur',save);
        inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); inp.blur(); } if(e.key==='Escape'){ el.innerHTML=''; el.textContent=old; } });
    }

    function makeTextareaEditable(el,onSave){
        if(!isAdmin) return;
        const old=el.innerHTML.replace(/<br\s*\/?>/gi,'\n');
        const ta=document.createElement('textarea');
        ta.value=old;
        ta.className='admin-inline-textarea';
        el.textContent='';
        el.appendChild(ta);
        ta.focus();
        function save(){ const v=ta.value.trim(); if(v) onSave(v); el.innerHTML=''; el.innerText=v||old; }
        ta.addEventListener('blur',save);
        ta.addEventListener('keydown',e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); ta.blur(); } if(e.key==='Escape'){ el.innerHTML=''; el.innerText=old; } });
    }

    function createAdminUI(){
        if(document.getElementById('adminFab')) return;

        const mk=(tag,cls,html,parent)=>{ const el=document.createElement(tag); el.className=cls; if(html) el.innerHTML=html; parent.appendChild(el); return el; };

        const trigger=mk('button','admin-trigger','<span class="material-symbols-outlined" style="font-size:14px;">admin_panel_settings</span>',document.body);
        trigger.onclick=()=>{
            if(localStorage.getItem(ADMIN_KEY)){ toggleAdmin(); return; }
            const pw=prompt('أدخل كلمة مرور المدير:');
            if(pw==='admin123'){ localStorage.setItem(ADMIN_KEY,'1'); toggleAdmin(true); notifyAdmin('تم تسجيل الدخول كمدير'); }
            else notifyAdmin('كلمة المرور غير صحيحة');
        };

        mk('div','admin-tag','وضع المدير',document.body).id='adminTag';

        const fab=mk('button','admin-fab','<span class="material-symbols-outlined">edit</span>',document.body);
        fab.id='adminFab';
        fab.onclick=()=>{ if(confirm('هل تريد الخروج من وضع المدير؟')){ localStorage.removeItem(ADMIN_KEY); toggleAdmin(false); } };

        const addEvtBtn=mk('button','admin-add-event-btn','<span class="material-symbols-outlined">add</span> إضافة فعالية',document.body);
        addEvtBtn.id='adminAddEventBtn';
        addEvtBtn.onclick=openAddEventInline;
    }

    function toggleAdmin(force){
        isAdmin=force!==undefined?force:!!localStorage.getItem(ADMIN_KEY);
        document.getElementById('adminFab').classList.toggle('visible',isAdmin);
        document.getElementById('adminTag').classList.toggle('visible',isAdmin);
        document.getElementById('adminAddEventBtn').classList.toggle('visible',isAdmin);
        document.body.classList.toggle('admin-active',isAdmin);
        if(isAdmin) injectAdminTools();
        else removeAdminTools();
    }

    function injectAdminTools(){
        removeAdminTools();

        // Hero title & subtitle
        const h1=document.querySelector('.hero-content h1');
        const hp=document.querySelector('.hero-content p');
        if(h1 && !h1.dataset.admin){ h1.dataset.admin='1'; h1.style.cursor='pointer'; h1.title='انقر لتعديل العنوان'; h1.onclick=()=>makeEditable(h1,v=>{ C.heroTitle=v; S(C); apply(); }); }
        if(hp && !hp.dataset.admin){ hp.dataset.admin='1'; hp.style.cursor='pointer'; hp.title='انقر لتعديل الوصف'; hp.onclick=()=>makeTextareaEditable(hp,v=>{ C.heroSub=v; S(C); apply(); }); }

        // Stats
        const statGrid=document.querySelector('.bg-white.rounded-2xl.shadow-xl');
        if(statGrid){
            const labels=['events','workshops','exhibitions','seats'];
            statGrid.querySelectorAll('.text-3xl').forEach((el,i)=>{
                if(!el.dataset.admin){ el.dataset.admin='1'; el.classList.add('admin-stat'); el.title='انقر لتعديل'; el.onclick=()=>makeEditable(el,v=>{ C.stats[labels[i]]=v; S(C); apply(); }); }
            });
        }

        // Event cards
        const grid=document.getElementById('eventsGrid');
        if(grid){
            grid.querySelectorAll('.event-card-full').forEach((card,idx)=>{
                if(card.dataset.admin) return;
                card.dataset.admin='1';
                const btns=document.createElement('div');
                btns.className='admin-card-btns';
                btns.innerHTML='<button class="admin-cbtn edit" title="تعديل"><span class="material-symbols-outlined">edit</span></button><button class="admin-cbtn del" title="حذف"><span class="material-symbols-outlined">delete</span></button>';
                card.appendChild(btns);
                btns.querySelector('.edit').onclick=e=>{ e.stopPropagation(); editEventInline(card,idx); };
                btns.querySelector('.del').onclick=e=>{ e.stopPropagation(); deleteEventInline(card,idx); };
            });
        }

        // Gallery items
        const galGrid=document.querySelector('.gallery-grid');
        if(galGrid){
            galGrid.querySelectorAll('.gallery-item').forEach((item,idx)=>{
                if(item.dataset.admin) return;
                item.dataset.admin='1';
                const btn=document.createElement('button');
                btn.className='admin-img-btn';
                btn.innerHTML='<span class="material-symbols-outlined">photo_camera</span>';
                btn.onclick=e=>{ e.stopPropagation(); editGalleryImage(item,idx); };
                item.appendChild(btn);
            });
        }

        // Video sections
        const videoContainer=document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.gap-8.scroll-reveal > div');
        videoContainer.forEach((sec,idx)=>{
            if(sec.dataset.admin) return;
            sec.dataset.admin='1';
            const btn=document.createElement('button');
            btn.className='admin-video-btn';
            btn.innerHTML='<span class="material-symbols-outlined">videocam</span> تعديل الفيديو';
            btn.onclick=e=>{ e.stopPropagation(); editVideoInline(sec,idx); };
            sec.style.position='relative';
            sec.appendChild(btn);
        });
    }

    function removeAdminTools(){
        document.querySelectorAll('[data-admin]').forEach(el=>{
            delete el.dataset.admin;
            el.style.cursor='';
            el.title='';
            el.onclick=null;
            el.classList.remove('admin-stat');
        });
        document.querySelectorAll('.admin-card-btns,.admin-img-btn,.admin-video-btn').forEach(el=>el.remove());
    }

    function editEventInline(card,idx){
        const eventsArr=window.events||[];
        const e=eventsArr[idx];
        if(!e) return;

        const titleEl=card.querySelector('h3');
        const dateEl=card.querySelectorAll('.flex.items-center.gap-2')[0];
        const timeEl=card.querySelectorAll('.flex.items-center.gap-2')[1];
        const locEl=card.querySelectorAll('.flex.items-center.gap-2')[2];

        if(titleEl) makeEditable(titleEl,v=>{ e.title=v; S(buildFullContent()); refreshEvents(); });
        if(dateEl) makeEditable(dateEl.lastChild,v=>{ e.date=v; S(buildFullContent()); refreshEvents(); });
        if(timeEl) makeEditable(timeEl.lastChild,v=>{ e.time=v; S(buildFullContent()); refreshEvents(); });
        if(locEl) makeEditable(locEl.lastChild,v=>{ e.location=v; S(buildFullContent()); refreshEvents(); });

        // Image change
        const img=card.querySelector('.card-img img');
        if(img){
            const url=prompt('أدخل رابط الصورة الجديدة (أو دعه فارغاً):',img.src);
            if(url!==null && url.trim()){ e.img=url.trim(); S(buildFullContent()); refreshEvents(); }
        }
    }

    function deleteEventInline(card,idx){
        if(!confirm('هل أنت متأكد من حذف هذه الفعالية؟')) return;
        const eventsArr=window.events||[];
        const e=eventsArr[idx];
        if(!e) return;
        const id=e.id;
        const idxInArr=eventsArr.findIndex(ev=>ev.id===id);
        if(idxInArr>=0){ eventsArr.splice(idxInArr,1); S(buildFullContent()); refreshEvents(); }
    }

    function openAddEventInline(){
        const eventsArr=window.events||[];
        const maxId=eventsArr.reduce((m,e)=>Math.max(m,e.id||0),0);
        const newEvent={
            id:maxId+1,
            title:'فعالية جديدة',
            date:'تاريخ جديد',
            sortDate:new Date().toISOString().slice(0,10),
            time:'--:--',
            location:'المكان',
            badge:'جديد',
            badgeClass:'badge-new',
            category:'literary',
            img:'../images/cultural_hero.png',
            desc:'وصف الفعالية الجديدة',
            program:[],
            tags:['جديد'],
            video:''
        };
        eventsArr.push(newEvent);
        S(buildFullContent());
        refreshEvents();
        setTimeout(()=>{
            const cards=document.querySelectorAll('.event-card-full');
            const last=cards[cards.length-1];
            if(last){ last.scrollIntoView({behavior:'smooth',block:'center'}); editEventInline(last,eventsArr.length-1); }
        },100);
    }

    function editGalleryImage(item,idx){
        const inp=document.createElement('input');
        inp.type='file';
        inp.accept='image/*';
        inp.style.display='none';
        inp.onchange=()=>{
            const file=inp.files[0];
            if(!file) return;
            const reader=new FileReader();
            reader.onload=()=>{
                const dataUrl=reader.result;
                item.querySelector('img').src=dataUrl;
                let gal=C.gallery||[];
                if(!Array.isArray(gal)) gal=[];
                if(idx<gal.length) gal[idx]=dataUrl; else gal.push(dataUrl);
                C.gallery=gal; S(C);
            };
            reader.readAsDataURL(file);
        };
        document.body.appendChild(inp);

        const url=prompt('رابط صورة جديدة (أو اضغط Cancel لرفع ملف):',item.querySelector('img').src);
        if(url===null){ inp.click(); }
        else if(url.trim()){
            item.querySelector('img').src=url.trim();
            let gal=C.gallery||[];
            if(!Array.isArray(gal)) gal=[];
            if(idx<gal.length) gal[idx]=url.trim(); else gal.push(url.trim());
            C.gallery=gal; S(C);
        }
        setTimeout(()=>inp.remove(),5000);
    }

    function editVideoInline(sec,idx){
        const titleEl=sec.querySelector('h3');
        const descEl=sec.querySelector('p');
        const thumb=sec.querySelector('img');
        const player=sec.querySelector('.aspect-video');

        if(titleEl) makeEditable(titleEl,v=>{ updateVideo(idx,'title',v); });
        if(descEl) makeEditable(descEl,v=>{ updateVideo(idx,'desc',v); });

        const url=prompt('أدخل ID أو رابط YouTube الجديد:',C.videos?.[idx]?.url||'');
        if(url && url.trim()){
            const clean=url.trim().replace('https://www.youtube.com/watch?v=','').replace('https://youtu.be/','').replace('https://www.youtube.com/embed/','');
            updateVideo(idx,'url',clean);
            if(thumb) thumb.src='https://img.youtube.com/vi/'+clean+'/maxresdefault.jpg';
            if(player) player.setAttribute('onclick',`this.innerHTML='<iframe src="https://www.youtube.com/embed/${clean}?autoplay=1" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'`);
        }
    }

    function updateVideo(idx,field,value){
        if(!C.videos) C.videos=[{title:'',desc:'',url:''},{title:'',desc:'',url:''}];
        if(!C.videos[idx]) C.videos[idx]={title:'',desc:'',url:''};
        C.videos[idx][field]=value;
        S(C);
    }

    function buildFullContent(){
        C.events=JSON.parse(JSON.stringify(window.events||[]));
        return C;
    }

    function refreshEvents(){
        if(window.renderEvents) window.renderEvents(window.currentFilter,window.currentSearch);
        setTimeout(injectAdminTools,50);
    }

    // Init
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
    function init(){ createAdminUI(); apply(); if(localStorage.getItem(ADMIN_KEY)) toggleAdmin(true); }
})();
