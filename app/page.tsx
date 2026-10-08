"use client";
// ============================================================================
// app/page.tsx — صفحة الهبوط لبوت Veyron (Next.js App Router)
// ----------------------------------------------------------------------------
// ⚠️ أضف بيانات المعاينة (Open Graph) في app/layout.tsx كالتالي:
//
//   import type { Metadata } from "next";
//   export const metadata: Metadata = {
//     title: "Veyron — بوت التذاكر لسيرفرك",
//     description: "بوت تذاكر احترافي لديسكورد: فتح تذاكر، إغلاق تلقائي، نسخ محادثات.",
//     openGraph: {
//       title: "Veyron — بوت التذاكر لسيرفرك",
//       description: "نظّم دعم سيرفرك مع بوت التذاكر الأذكى.",
//       images: [{ url: "/ticket-bot-banner.png", width: 1200, height: 630 }],
//       locale: "ar_AR",
//       type: "website",
//     },
//     twitter: { card: "summary_large_image" },
//     icons: { icon: "/favicon.png" },
//   };
// ----------------------------------------------------------------------------
// 📁 ضع الملفات التالية في مجلد public/:  ticket-bot-banner.png , favicon.png
// ============================================================================

import { useEffect, useRef, useState } from "react";

const CSS = `
:root{
  --blurple:#5865F2; --blurple-dark:#4752C4; --bg:#0f1116; --bg-2:#151823;
  --bg-3:#1c2030; --card:#181c29; --text:#e6e8f0; --muted:#9aa0b4;
  --green:#57F287; --red:#ED4245; --border:rgba(255,255,255,.07);
  --radius:16px; --font:'Segoe UI', Tahoma, 'Noto Kufi Arabic', system-ui, sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.7;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.container{width:min(1140px,92%);margin:0 auto}
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
.ticket-head{display:flex;align-items:center;gap:8px;font-size:.9rem;flex-wrap:wrap}
.ticket-head small{color:var(--muted)}
.msg{color:var(--muted);font-size:.85rem;margin-top:4px}
.tag{font-size:.7rem;padding:2px 9px;border-radius:999px;font-weight:700}
.tag-open{background:rgba(87,242,135,.15);color:var(--green)}
.tag-claim{background:rgba(88,101,242,.15);color:var(--blurple)}
.close-btn{margin-right:auto;background:rgba(237,66,69,.12);color:var(--red);border:1px solid rgba(237,66,69,.3);padding:6px 14px;border-radius:8px;font-size:.8rem;font-weight:700;font-family:var(--font);cursor:pointer}
section{padding:90px 0}
.sec-title{text-align:center;margin-bottom:60px}
.sec-title h2{font-size:2rem;font-weight:800}
.sec-title p{color:var(--muted);margin-top:10px}
.alt{background:var(--bg-2)}
.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.feature{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;transition:.25s}
.feature:hover{transform:translateY(-6px);border-color:rgba(88,101,242,.4)}
.feature-icon{width:48px;height:48px;border-radius:12px;display:grid;place-items:center;font-size:1.3rem;margin-bottom:16px;background:rgba(88,101,242,.12);border:1px solid rgba(88,101,242,.3)}
.feature h3{font-size:1.1rem;margin-bottom:8px}
.feature p{color:var(--muted);font-size:.92rem}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.step{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:30px}
.step-num{width:42px;height:42px;border-radius:50%;background:var(--blurple);color:#fff;display:grid;place-items:center;font-weight:800;margin-bottom:16px}
.step h3{margin-bottom:8px}
.step p{color:var(--muted);font-size:.92rem}
.cmd-box{background:#0b0d13;border:1px solid var(--border);border-radius:var(--radius);padding:24px;direction:ltr;text-align:left;font-family:Consolas,'Courier New',monospace;font-size:.92rem;line-height:2.1;color:#c9d1d9;overflow-x:auto}
.cmd-box .cmd{color:var(--green)}
.cmd-box .flag{color:#79c0ff}
.cmd-box .comment{color:#8b949e}
.faq{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden}
.faq-q{width:100%;background:none;border:none;color:var(--text);font-family:var(--font);font-size:1rem;font-weight:700;padding:18px 22px;text-align:right;cursor:pointer;display:flex;justify-content:space-between;align-items:center}
.faq-q::after{content:'+';font-size:1.3rem;color:var(--blurple);transition:.2s}
.faq-item.open .faq-q::after{transform:rotate(45deg)}
.faq-a{color:var(--muted);font-size:.95rem}
.faq-a>div{padding:0 22px 18px}
.cta{background:linear-gradient(135deg,var(--blurple),#7c3aed);border-radius:24px;padding:60px 30px;text-align:center}
.cta h2{font-size:1.9rem;margin-bottom:12px}
.cta p{color:rgba(255,255,255,.85);margin-bottom:28px}
.cta .btn{background:#fff;color:var(--blurple)}
footer{border-top:1px solid var(--border);padding:36px 0;color:var(--muted);font-size:.9rem}
.footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.reveal{opacity:0;transform:translateY(24px);transition:.6s ease}
.reveal.visible{opacity:1;transform:none}
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
`;

const FEATURES = [
  { icon: "🎫", title: "لوحة تذاكر تفاعلية", desc: "أزرار وفئة تذاكر (دعم، شكوى، شراء) مع رسالة ترحيب مخصصة لكل فئة." },
  { icon: "👥", title: "إسناد تلقائي للطاقم", desc: "منشن تلقائي لرتبة الدعم عند فتح التذكرة، ونظام استلام (Claim) لتجنّب التداخل." },
  { icon: "📄", title: "نسخ محادثات Transcripts", desc: "حفظ كامل للمحادثة بصيغة HTML وإرسالها لقناة الأرشيف عند الإغلاق." },
  { icon: "⏱️", title: "إغلاق تلقائي خامل", desc: "إغلاق التذاكر غير النشطة بعد مدة تحددها أنت، مع رسالة تنبيه قبل الإغلاق." },
  { icon: "🎨", title: "تخصيص كامل", desc: "غيّر الألوان، أسماء القنوات، الرسائل، والأزرار بسهولة عبر أوامر السلاش." },
  { icon: "🔒", title: "صلاحيات آمنة", desc: "قنوات تذاكر خاصة لا يراها إلا صاحبها والطاقم — خصوصية كاملة." },
];

const FAQS = [
  { q: "هل البوت مجاني؟", a: "نعم، جميع المميزات الأساسية مجانية بالكامل. توجد خطة بريميوم اختيارية لمميزات إضافية مثل عدد غير محدود من الفئات وتخصيص متقدم." },
  { q: "كم عدد التذاكر التي يمكن فتحها؟", a: "لا يوجد حد أقصى للتذاكر، ويمكنك تحديد حد أقصى لكل عضو في نفس الوقت لمنع الإساءة." },
  { q: "هل يمكن تخصيص أزرار التذاكر؟", a: "بالتأكيد! يمكنك تغيير نص الزر وأيقونته ولونه، وإنشاء أكثر من لوحة تذاكر لكل نوع من الطلبات." },
  { q: "أين تُحفظ نسخ المحادثات؟", a: "تُرسل تلقائيًا لقناة الأرشيف التي تحددها أثناء الإعداد بصيغة HTML وتشمل الأسماء والوقت والصور." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const step = target / 80;
      let cur = 0;
      const tick = () => {
        cur += step;
        if (cur < target) { setVal(Math.floor(cur)); raf = requestAnimationFrame(tick); }
        else { setVal(target); }
      };
      tick();
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);
  const suffix = target === 99 ? ".9" : "+";
  return <h3 ref={ref}>{val.toLocaleString("en")}{val === target ? suffix : ""}</h3>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ===== Header ===== */}
      <header>
        <div className="container nav">
          <a href="#" className="logo"><span className="logo-badge">🎫</span> Veyron</a>
          <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
            <li><a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a></li>
            <li><a href="#how" onClick={() => setMenuOpen(false)}>كيف يعمل</a></li>
            <li><a href="#commands" onClick={() => setMenuOpen(false)}>الأوامر</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a></li>
          </ul>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="#invite" className="btn btn-primary">أضف البوت</a>
            <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">☰</button>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">⚡ نظام تذاكر احترافي لديسكورد</span>
            <h1>نظّم دعم سيرفرك مع <span>بوت التذاكر</span> الأذكى</h1>
            <p>فتح تذاكر بضغطة زر، إسناد تلقائي للطاقم، نسخ محادثات كاملة، وتخصيص كامل للألوان والرسائل — كل ما يحتاجه سيرفرك في بوت واحد.</p>
            <div className="hero-actions">
              <a href="#invite" className="btn btn-primary">➕ أضف البوت لسيرفرك</a>
              <a href="#commands" className="btn btn-ghost">📖 اطّلع على الأوامر</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><Counter target={12500} /><span>سيرفر يستخدم البوت</span></div>
              <div className="stat"><Counter target={890000} /><span>تذكرة تم معالجتها</span></div>
              <div className="stat"><Counter target={99} /><span>% وقت تشغيل</span></div>
            </div>
          </div>
          <div className="mockup">
            <div className="mockup-bar">
              <span className="dot" style={{ background: "#ED4245" }} />
              <span className="dot" style={{ background: "#FEBB2C" }} />
              <span className="dot" style={{ background: "#57F287" }} />
              <span className="mockup-title"># تذكرة-0001</span>
            </div>
            <div className="mockup-body">
              <div className="panel">
                <h4>🎫 نظام التذاكر</h4>
                <p>اضغط الزر بالأسفل لفتح تذكرة وسيتواصل معك الطاقم فورًا</p>
                <span className="panel-btn">فتح تذكرة</span>
              </div>
              <div className="ticket">
                <div className="avatar" style={{ background: "#5865F2" }}>م</div>
                <div style={{ flex: 1 }}>
                  <div className="ticket-head"><strong>مستخدم</strong><small>اليوم 10:24 م</small><span className="tag tag-open">مفتوحة</span></div>
                  <div className="msg">أحتاج مساعدة في تفعيل رتبتي بالسيرفر</div>
                </div>
              </div>
              <div className="ticket">
                <div className="avatar" style={{ background: "#57F287" }}>د</div>
                <div style={{ flex: 1 }}>
                  <div className="ticket-head"><strong>الدعم الفني</strong><small>اليوم 10:25 م</small><span className="tag tag-claim">تم الاستلام</span></div>
                  <div className="msg">أهلًا بك! تم استلام تذكرتك وسنخدمك الآن ✅</div>
                </div>
                <button className="close-btn">إغلاق</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="alt">
        <div className="container">
          <div className="sec-title reveal">
            <h2>لماذا بوت Veyron؟</h2>
            <p>كل الأدوات التي يحتاجها فريق الدعم في مكان واحد</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div className="feature reveal" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How ===== */}
      <section id="how">
        <div className="container">
          <div className="sec-title reveal">
            <h2>كيف يعمل؟</h2>
            <p>ثلاث خطوات وتكون جاهزًا</p>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="step-num">1</div><h3>أضف البوت</h3><p>اضغط زر &quot;أضف البوت&quot; واختر سيرفرك وامنح الصلاحيات المطلوبة.</p></div>
            <div className="step reveal"><div className="step-num">2</div><h3>أعدّ لوحة التذاكر</h3><p>استخدم أمر <code>/panel</code> لإنشاء لوحة التذاكر في قناة الدعم.</p></div>
            <div className="step reveal"><div className="step-num">3</div><h3>استقبل التذاكر</h3><p>يضغط الأعضاء الزر وتُفتح قناة خاصة، وفريقك يستلم ويغلق بسهولة.</p></div>
          </div>
        </div>
      </section>

      {/* ===== Commands ===== */}
      <section id="commands" className="alt">
        <div className="container">
          <div className="sec-title reveal">
            <h2>أوامر السلاش</h2>
            <p>بسيطة وقوية في نفس الوقت</p>
          </div>
          <div className="cmd-box reveal">
            <span className="comment">{"# — إعدادات عامة —"}</span>{"\n"}
            <span className="cmd">/setup</span> <span className="flag">category:#الدعم</span> <span className="flag">support-role:@الدعم الفني</span> <span className="flag">transcripts:#الأرشيف</span>{"\n"}
            <span className="cmd">/panel</span> <span className="flag">title:الدعم الفني</span> <span className="flag">description:اضغط الزر لفتح تذكرة</span>{"\n"}
            <span className="cmd">/add</span> <span className="flag">user:@عضو</span>          <span className="comment"># إضافة عضو للتذكرة</span>{"\n"}
            <span className="cmd">/remove</span> <span className="flag">user:@عضو</span>       <span className="comment"># إزالة عضو من التذكرة</span>{"\n"}
            {"\n"}
            <span className="comment">{"# — إدارة التذكرة —"}</span>{"\n"}
            <span className="cmd">/close</span> <span className="flag">reason:تم حل المشكلة</span>{"\n"}
            <span className="cmd">/claim</span>                           <span className="comment"># استلام التذكرة</span>{"\n"}
            <span className="cmd">/rename</span> <span className="flag">name:شراء-رتبة</span>{"\n"}
            <span className="cmd">/transcript</span>                     <span className="comment"># نسخة فورية من المحادثة</span>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="container">
          <div className="sec-title reveal"><h2>الأسئلة الشائعة</h2></div>
          <div className="faq reveal">
            {FAQS.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}</button>
                {openFaq === i && <div className="faq-a"><div>{f.a}</div></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="invite">
        <div className="container">
          <div className="cta reveal">
            <h2>جاهز لتنظيم دعم سيرفرك؟</h2>
            <p>أضف البوت خلال أقل من دقيقة وابدأ باستقبال التذاكر فورًا</p>
            <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noopener noreferrer" className="btn">أضف Veyron الآن ➕</a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <div className="container footer-inner">
          <a href="#" className="logo"><span className="logo-badge">🎫</span> Veyron</a>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">شروط الاستخدام</a>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">سيرفر الدعم</a>
          </div>
          <span>© 2026 Veyron — جميع الحقوق محفوظة</span>
        </div>
      </footer>
    </>
  );
}
