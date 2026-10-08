<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tickety — بوت التذاكر لسيرفرك</title>
<meta name="description" content="بوت تذاكر احترافي لديسكورد: فتح تذاكر، إغلاق تلقائي، نسخ محادثات، وأزرار تفاعلية.">
<style>
:root{
  --blurple:#5865F2;
  --blurple-dark:#4752C4;
  --bg:#0f1116;
  --bg-2:#151823;
  --bg-3:#1c2030;
  --card:#181c29;
  --text:#e6e8f0;
  --muted:#9aa0b4;
  --green:#57F287;
  --red:#ED4245;
  --border:rgba(255,255,255,.07);
  --radius:16px;
  --font:'Segoe UI', Tahoma, 'Noto Kufi Arabic', system-ui, sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.7;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.container{width:min(1140px,92%);margin:0 auto}

/* ===== Header ===== */
header{position:fixed;top:0;right:0;left:0;z-index:100;background:rgba(15,17,22,.8);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav{display:flex;align-items:center;justify-content:space-between;height:68px}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.2rem}
.logo-badge{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--blurple),#8b5cf6);display:grid;place-items:center;font-size:1rem}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{color:var(--muted);font-size:.95rem;transition:.2s}
.nav-links a:hover{color:var(--text)}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border-radius:10px;font-weight:700;font-size:.95rem;transition:.2s;border:none;cursor:pointer;font-family:var(--font)}
.btn-primary{background:var(--blurple);color:#fff}
.btn-primary:hover{background:var(--blurple-dark);transform:translateY(-2px)}
.btn-ghost{background:transparent;border:1px solid var(--border);color:var(--text)}
.btn-ghost:hover{border-color:var(--blurple);color:var(--blurple)}
.burger{display:none;background:none;border:none;color:var(--text);font-size:1.5rem;cursor:pointer}

/* ===== Hero ===== */
.hero{padding:150px 0 90px;position:relative}
.hero::before{content:'';position:absolute;top:-200px;right:50%;transform:translateX(50%);width:700px;height:700px;background:radial-gradient(circle,rgba(88,101,242,.25),transparent 65%);pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:50px;align-items:center;position:relative}
.badge{display:inline-block;background:rgba(88,101,242,.12);color:var(--blurple);border:1px solid rgba(88,101,242,.35);padding:6px 16px;border-radius:999px;font-size:.85rem;font-weight:700;margin-bottom:18px}
h1{font-size:clamp(2rem,4.5vw,3.2rem);line-height:1.35;font-weight:800}
h1 span{background:linear-gradient(90deg,var(--blurple),#a78bfa);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{color:var(--muted);font-size:1.1rem;margin:18px 0 30px;max-width:480px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.hero-stats{display:flex;gap:36px;margin-top:44px}
.stat h3{font-size:1.6rem;color:var(--blurple)}
.stat span{color:var(--muted);font-size:.88rem}

/* ===== Mockup ===== */
.mockup{background:var(--bg-2);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)}
.mockup-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg-3);border-bottom:1px solid var(--border)}
.dot{width:11px;height:11px;border-radius:50%}
.mockup-title{margin-right:auto;margin-left:auto;color:var(--muted);font-size:.85rem}
.mockup-body{padding:18px;display:flex;flex-direction:column;gap:14px;min-height:330px}
.panel{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center}
.panel h4{margin-bottom:6px}
.panel p{color:var(--muted);font-size:.85rem;margin-bottom:14px}
.panel-btn{display:inline-block;background:var(--green);color:#0f1116;font-weight:800;padding:10px 26px;border-radius:8px;font-size:.92rem}
.ticket{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;gap:12px;align-items:flex-start}
.avatar{width:38px;height:38px;border-radius:50%;flex-shrink:0;display:grid;place-items:center;font-weight:800;color:#fff}
.ticket-head{display:flex;align-items:center;gap:8px;font-size:.9rem}
.ticket-head small{color:var(--muted)}
.msg{color:var(--muted);font-size:.85rem;margin-top:4px}
.tag{font-size:.7rem;padding:2px 9px;border-radius:999px;font-weight:700}
.tag-open{background:rgba(87,242,135,.15);color:var(--green)}
.tag-claim{background:rgba(88,101,242,.15);color:var(--blurple)}
.close-btn{margin-right:auto;background:rgba(237,66,69,.12);color:var(--red);border:1px solid rgba(237,66,69,.3);padding:6px 14px;border-radius:8px;font-size:.8rem;font-weight:700;font-family:var(--font);cursor:pointer}

/* ===== Sections ===== */
section{padding:90px 0}
.sec-title{text-align:center;margin-bottom:60px}
.sec-title h2{font-size:2rem;font-weight:800}
.sec-title p{color:var(--muted);margin-top:10px}
.alt{background:var(--bg-2)}

/* ===== Features ===== */
.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.feature{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;transition:.25s}
.feature:hover{transform:translateY(-6px);border-color:rgba(88,101,242,.4)}
.feature-icon{width:48px;height:48px;border-radius:12px;display:grid;place-items:center;font-size:1.3rem;margin-bottom:16px;background:rgba(88,101,242,.12);border:1px solid rgba(88,101,242,.3)}
.feature h3{font-size:1.1rem;margin-bottom:8px}
.feature p{color:var(--muted);font-size:.92rem}

/* ===== Steps ===== */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;counter-reset:step}
.step{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:30px;position:relative}
.step-num{width:42px;height:42px;border-radius:50%;background:var(--blurple);color:#fff;display:grid;place-items:center;font-weight:800;margin-bottom:16px}
.step h3{margin-bottom:8px}
.step p{color:var(--muted);font-size:.92rem}

/* ===== Commands ===== */
.cmd-box{background:#0b0d13;border:1px solid var(--border);border-radius:var(--radius);padding:24px;direction:ltr;text-align:left;font-family:'Consolas','Courier New',monospace;font-size:.92rem;line-height:2.1;color:#c9d1d9;overflow-x:auto}
.cmd-box .cmd{color:var(--green)}
.cmd-box .flag{color:#79c0ff}
.cmd-box .comment{color:#8b949e}

/* ===== FAQ ===== */
.faq{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden}
.faq-q{width:100%;background:none;border:none;color:var(--text);font-family:var(--font);font-size:1rem;font-weight:700;padding:18px 22px;text-align:right;cursor:pointer;display:flex;justify-content:space-between;align-items:center}
.faq-q::after{content:'+';font-size:1.3rem;color:var(--blurple);transition:.2s}
.faq-item.open .faq-q::after{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease;color:var(--muted);font-size:.95rem}
.faq-a div{padding:0 22px 18px}

/* ===== CTA ===== */
.cta{background:linear-gradient(135deg,var(--blurple),#7c3aed);border-radius:24px;padding:60px 30px;text-align:center}
.cta h2{font-size:1.9rem;margin-bottom:12px}
.cta p{color:rgba(255,255,255,.85);margin-bottom:28px}
.cta .btn{background:#fff;color:var(--blurple)}

/* ===== Footer ===== */
footer{border-top:1px solid var(--border);padding:36px 0;color:var(--muted);font-size:.9rem}
.footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}

/* ===== Reveal ===== */
.reveal{opacity:0;transform:translateY(24px);transition:.6s ease}
.reveal.visible{opacity:1;transform:none}

/* ===== Responsive ===== */
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .features-grid,.steps{grid-template-columns:1fr 1fr}
  .nav-links{display:none}
  .burger{display:block}
  .nav-links.open{display:flex;position:absolute;top:68px;right:0;left:0;flex-direction:column;background:var(--bg-2);padding:20px;gap:16px;border-bottom:1px solid var(--border)}
}
@media(max-width:600px){
  .features-grid,.steps{grid-template-columns:1fr}
  .hero-stats{gap:22px}
}
</style>
</head>
<body>

<!-- ===== Header ===== -->
<header>
  <div class="container nav">
    <a href="#" class="logo"><span class="logo-badge">🎫</span> Tickety</a>
    <ul class="nav-links" id="navLinks">
      <li><a href="#features">المميزات</a></li>
      <li><a href="#how">كيف يعمل</a></li>
      <li><a href="#commands">الأوامر</a></li>
      <li><a href="#faq">الأسئلة الشائعة</a></li>
    </ul>
    <div style="display:flex;gap:10px;align-items:center">
      <a href="#invite" class="btn btn-primary">أضف البوت</a>
      <button class="burger" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
    </div>
  </div>
</header>

<!-- ===== Hero ===== -->
<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">⚡ نظام تذاكر احترافي لديسكورد</span>
      <h1>نظّم دعم سيرفرك مع <span>بوت التذاكر</span> الأذكى</h1>
      <p>فتح تذاكر بضغطة زر، إسناد تلقائي للطاقم، نسخ محادثات كاملة، وتخصيص كامل للألوان والرسائل — كل ما يحتاجه سيرفرك في بوت واحد.</p>
      <div class="hero-actions">
        <a href="#invite" class="btn btn-primary">➕ أضف البوت لسيرفرك</a>
        <a href="#commands" class="btn btn-ghost">📖 اطّلع على الأوامر</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><h3 data-count="12500">0</h3><span>سيرفر يستخدم البوت</span></div>
        <div class="stat"><h3 data-count="890000">0</h3><span>تذكرة تم معالجتها</span></div>
        <div class="stat"><h3 data-count="99">0</h3><span>% وقت تشغيل</span></div>
      </div>
    </div>
    <div class="mockup">
      <div class="mockup-bar">
        <span class="dot" style="background:#ED4245"></span>
        <span class="dot" style="background:#FEBB2C"></span>
        <span class="dot" style="background:#57F287"></span>
        <span class="mockup-title"># تذكرة-0001</span>
      </div>
      <div class="mockup-body">
        <div class="panel">
          <h4>🎫 نظام التذاكر</h4>
          <p>اضغط الزر بالأسفل لفتح تذكرة وسيتواصل معك الطاقم فورًا</p>
          <span class="panel-btn">فتح تذكرة</span>
        </div>
        <div class="ticket">
          <div class="avatar" style="background:#5865F2">م</div>
          <div style="flex:1">
            <div class="ticket-head"><strong>مستخدم</strong><small>اليوم 10:24 م</small><span class="tag tag-open">مفتوحة</span></div>
            <div class="msg">أحتاج مساعدة في تفعيل رتبتي بالسيرفر</div>
          </div>
        </div>
        <div class="ticket">
          <div class="avatar" style="background:#57F287">د</div>
          <div style="flex:1">
            <div class="ticket-head"><strong>الدعم الفني</strong><small>اليوم 10:25 م</small><span class="tag tag-claim">تم الاستلام</span></div>
            <div class="msg">أهلًا بك! تم استلام تذكرتك وسنخدمك الآن ✅</div>
          </div>
          <button class="close-btn">إغلاق</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== Features ===== -->
<section id="features" class="alt">
  <div class="container">
    <div class="sec-title reveal">
      <h2>لماذا بوت Tickety؟</h2>
      <p>كل الأدوات التي يحتاجها فريق الدعم في مكان واحد</p>
    </div>
    <div class="features-grid">
      <div class="feature reveal"><div class="feature-icon">🎫</div><h3>لوحة تذاكر تفاعلية</h3><p>أزرار وفئة تذاكر (دعم، شكوى، شراء) مع رسالة ترحيب مخصصة لكل فئة.</p></div>
      <div class="feature reveal"><div class="feature-icon">👥</div><h3>إسناد تلقائي للطاقم</h3><p>منشن تلقائي لرتبة الدعم عند فتح التذكرة، ونظام استلام (Claim) لتجنّب التداخل.</p></div>
      <div class="feature reveal"><div class="feature-icon">📄</div><h3>نسخ محادثات Transcripts</h3><p>حفظ كامل للمحادثة بصيغة HTML وإرسالها لقناة الأرشيف عند الإغلاق.</p></div>
      <div class="feature reveal"><div class="feature-icon">⏱️</div><h3>إغلاق تلقائي خامل</h3><p>إغلاق التذاكر غير النشطة بعد مدة تحددها أنت، مع رسالة تنبيه قبل الإغلاق.</p></div>
      <div class="feature reveal"><div class="feature-icon">🎨</div><h3>تخصيص كامل</h3><p>غيّر الألوان، أسماء القنوات، الرسائل، والأزرار بسهولة عبر أوامر السلاش.</p></div>
      <div class="feature reveal"><div class="feature-icon">🔒</div><h3>صلاحيات آمنة</h3><p>قنوات تذاكر خاصة لا يراها إلا صاحبها والطاقم — خصوصية كاملة.</p></div>
    </div>
  </div>
</section>

<!-- ===== How ===== -->
<section id="how">
  <div class="container">
    <div class="sec-title reveal">
      <h2>كيف يعمل؟</h2>
      <p>ثلاث خطوات وتكون جاهزًا</p>
    </div>
    <div class="steps">
      <div class="step reveal"><div class="step-num">1</div><h3>أضف البوت</h3><p>اضغط زر "أضف البوت" واختر سيرفرك وامنح الصلاحيات المطلوبة.</p></div>
      <div class="step reveal"><div class="step-num">2</div><h3>أعدّ لوحة التذاكر</h3><p>استخدم أمر <code>/panel</code> لإنشاء لوحة التذاكر في قناة الدعم.</p></div>
      <div class="step reveal"><div class="step-num">3</div><h3>استقبل التذاكر</h3><p>يضغط الأعضاء الزر وتُفتح قناة خاصة، وفريقك يستلم ويغلق بسهولة.</p></div>
    </div>
  </div>
</section>

<!-- ===== Commands ===== -->
<section id="commands" class="alt">
  <div class="container">
    <div class="sec-title reveal">
      <h2>أوامر السلاش</h2>
      <p>بسيطة وقوية في نفس الوقت</p>
    </div>
    <div class="cmd-box reveal">
<span class="comment"># — إعدادات عامة —</span>
<span class="cmd">/setup</span> <span class="flag">category:#الدعم</span> <span class="flag">support-role:@الدعم الفني</span> <span class="flag">transcripts:#الأرشيف</span>
<span class="cmd">/panel</span> <span class="flag">title:الدعم الفني</span> <span class="flag">description:اضغط الزر لفتح تذكرة</span>
<span class="cmd">/add</span> <span class="flag">user:@عضو</span>          <span class="comment"># إضافة عضو للتذكرة</span>
<span class="cmd">/remove</span> <span class="flag">user:@عضو</span>       <span class="comment"># إزالة عضو من التذكرة</span>

<span class="comment"># — إدارة التذكرة —</span>
<span class="cmd">/close</span> <span class="flag">reason:تم حل المشكلة</span>
<span class="cmd">/claim</span>                           <span class="comment"># استلام التذكرة</span>
<span class="cmd">/rename</span> <span class="flag">name:شراء-رتبة</span>
<span class="cmd">/transcript</span>                     <span class="comment"># نسخة فورية من المحادثة</span>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section id="faq">
  <div class="container">
    <div class="sec-title reveal">
      <h2>الأسئلة الشائعة</h2>
    </div>
    <div class="faq reveal">
      <div class="faq-item"><button class="faq-q">هل البوت مجاني؟</button><div class="faq-a"><div>نعم، جميع المميزات الأساسية مجانية بالكامل. توجد خطة بريميوم اختيارية لمميزات إضافية مثل عدد غير محدود من الفئات وتخصيص متقدم.</div></div></div>
      <div class="faq-item"><button class="faq-q">كم عدد التذاكر التي يمكن فتحها؟</button><div class="faq-a"><div>لا يوجد حد أقصى للتذاكر، ويمكنك تحديد حد أقصى لكل عضو في نفس الوقت لمنع الإساءة.</div></div></div>
      <div class="faq-item"><button class="faq-q">هل يمكن تخصيص أزرار التذاكر؟</button><div class="faq-a"><div>بالتأكيد! يمكنك تغيير نص الزر وأيقونته ولونه، وإنشاء أكثر من لوحة تذاكر لكل نوع من الطلبات.</div></div></div>
      <div class="faq-item"><button class="faq-q">أين تُحفظ نسخ المحادثات؟</button><div class="faq-a"><div>تُرسل تلقائيًا لقناة الأرشيف التي تحددها أثناء الإعداد بصيغة HTML وتشمل الأسماء والوقت والصور.</div></div></div>
    </div>
  </div>
</section>

<!-- ===== CTA ===== -->
<section id="invite">
  <div class="container">
    <div class="cta reveal">
      <h2>جاهز لتنظيم دعم سيرفرك؟</h2>
      <p>أضف البوت خلال أقل من دقيقة وابدأ باستقبال التذاكر فورًا</p>
      <a href="https://discord.com/oauth2/authorize" target="_blank" class="btn">أضف Tickety الآن ➕</a>
    </div>
  </div>
</section>

<!-- ===== Footer ===== -->
<footer>
  <div class="container footer-inner">
    <a href="#" class="logo"><span class="logo-badge">🎫</span> Tickety</a>
    <div style="display:flex;gap:20px">
      <a href="#">شروط الاستخدام</a>
      <a href="#">سياسة الخصوصية</a>
      <a href="#">سيرفر الدعم</a>
    </div>
    <span>© 2026 Tickety — جميع الحقوق محفوظة</span>
  </div>
</footer>

<script>
// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement, ans=item.querySelector('.faq-a'), open=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px'}
  });
});
// Counter animation
const counters=document.querySelectorAll('[data-count]');
const animate=el=>{
  const target=+el.dataset.count;let cur=0;const step=target/80;
  const tick=()=>{cur+=step;if(cur<target){el.textContent=Math.floor(cur).toLocaleString('en');requestAnimationFrame(tick)}else{el.textContent=target.toLocaleString('en')+(target===99?'.9':'+')}};
  tick();
};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animate(e.target);io.unobserve(e.target)}}),{threshold:.5});
counters.forEach(c=>io.observe(c));
// Scroll reveal
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
</script>
</body>
</html>
