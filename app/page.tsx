"use client";
// ============================================================================
// app/page.tsx — Veyron ✦ بوت التذاكر (تصميم Aurora Neon — الإصدار الثاني)
// ----------------------------------------------------------------------------
// ⚠️ انسخ الـ metadata التالي إلى app/layout.tsx (لا يعمل داخل use client):
//
//   import type { Metadata } from "next";
//   export const metadata: Metadata = {
//     title: "Veyron — بوت التذاكر لسيرفرك",
//     description: "بوت تذاكر احترافي لديسكورد: فتح تذاكر، إغلاق تلقائي، نسخ محادثات.",
//     openGraph: {
//       title: "Veyron — بوت التذاكر لسيرفرك",
//       description: "نظّم دعم سيرفرك مع بوت التذاكر الأذكى.",
//       images: [{ url: "/veyron-banner.png", width: 1200, height: 630 }],
//       locale: "ar_AR", type: "website",
//     },
//     twitter: { card: "summary_large_image" },
//     icons: { icon: "/favicon.png" },
//   };
// ----------------------------------------------------------------------------
// 📁 public/: ضع veyron-banner.png و favicon.png
// ============================================================================

import { useEffect, useRef, useState } from "react";

const CSS = `
:root{
  --bg:#08080e; --bg2:#0d0d16; --card:rgba(255,255,255,.03);
  --text:#eef0f8; --muted:#8f95ad;
  --b1:#5865F2; --b2:#8b5cf6; --b3:#d946ef; --cyan:#22d3ee; --green:#4ade80;
  --border:rgba(255,255,255,.08); --border2:rgba(139,92,246,.35);
  --font:'Segoe UI',Tahoma,'Noto Kufi Arabic',system-ui,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.75;overflow-x:hidden}
a{text-decoration:none;color:inherit}
::selection{background:rgba(139,92,246,.45)}
.container{width:min(1180px,92%);margin:0 auto}

/* ===== Aurora background ===== */
.aurora{position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none}
.orb{position:absolute;border-radius:50%;filter:blur(110px);opacity:.5;animation:drift 18s ease-in-out infinite alternate}
.orb.o1{width:560px;height:560px;background:#4338ca;top:-180px;right:-120px}
.orb.o2{width:480px;height:480px;background:#7e22ce;bottom:-160px;left:-140px;animation-delay:-6s}
.orb.o3{width:380px;height:380px;background:#0e7490;top:38%;left:32%;opacity:.28;animation-delay:-12s}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(60px,40px) scale(1.12)}}
.grid-lines{position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:56px 56px;
  mask-image:radial-gradient(ellipse 90% 70% at 50% 0%,#000 30%,transparent 75%)}

/* ===== Floating pill navbar ===== */
.nav-wrap{position:fixed;top:16px;right:0;left:0;z-index:100;display:flex;justify-content:center;padding:0 16px}
.nav{display:flex;align-items:center;gap:26px;background:rgba(13,13,22,.7);backdrop-filter:blur(18px);
  border:1px solid var(--border);border-radius:999px;padding:10px 12px 10px 22px;box-shadow:0 12px 40px rgba(0,0,0,.45);width:min(1180px,100%)}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.15rem}
.logo-badge{width:34px;height:34px;border-radius:50%;background:conic-gradient(from 200deg,var(--b1),var(--b2),var(--b3),var(--b1));
  display:grid;place-items:center;font-size:.95rem;box-shadow:0 0 18px rgba(139,92,246,.55)}
.nav-links{display:flex;gap:24px;list-style:none;margin-inline-start:auto}
.nav-links a{color:var(--muted);font-size:.92rem;transition:.2s}
.nav-links a:hover{color:var(--text)}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:999px;font-weight:700;font-size:.93rem;
  transition:.25s;border:none;cursor:pointer;font-family:var(--font)}
.btn-primary{background:linear-gradient(120deg,var(--b1),var(--b2));color:#fff;box-shadow:0 6px 24px rgba(88,101,242,.4)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(139,92,246,.5)}
.btn-ghost{background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--text)}
.btn-ghost:hover{border-color:var(--border2);background:rgba(139,92,246,.1)}
.burger{display:none;background:rgba(255,255,255,.06);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:1.25rem;cursor:pointer;padding:6px 12px}

/* ===== Hero ===== */
.hero{padding:190px 0 60px;text-align:center;position:relative}
.chip{display:inline-flex;align-items:center;gap:8px;background:rgba(139,92,246,.1);border:1px solid var(--border2);
  color:#c4b5fd;padding:7px 18px;border-radius:999px;font-size:.85rem;font-weight:700;margin-bottom:26px}
.chip .pulse{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);animation:pulse 1.8s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
h1{font-size:clamp(2.3rem,5.5vw,4rem);line-height:1.3;font-weight:800;letter-spacing:-.5px}
.grad{background:linear-gradient(100deg,#818cf8,#c084fc 45%,#e879f9);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{color:var(--muted);font-size:1.12rem;margin:22px auto 36px;max-width:620px}
.hero-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.hero-actions .btn{padding:14px 30px;font-size:1rem}

/* ===== Showcase window ===== */
.showcase{margin-top:70px;background:rgba(13,13,22,.75);border:1px solid var(--border);border-radius:22px;
  overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.55),0 0 0 1px rgba(139,92,246,.08);text-align:right}
.win-bar{display:flex;align-items:center;gap:8px;padding:13px 18px;background:rgba(255,255,255,.03);border-bottom:1px solid var(--border)}
.dot{width:11px;height:11px;border-radius:50%}
.win-title{margin-inline:auto;color:var(--muted);font-size:.85rem}
.win-body{padding:22px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
.panel{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px}
.panel h4{margin-bottom:6px;font-size:1.02rem}
.panel p{color:var(--muted);font-size:.85rem;margin-bottom:14px}
.panel-btn{display:inline-block;background:linear-gradient(120deg,#34d399,#4ade80);color:#052e16;font-weight:800;padding:10px 28px;border-radius:10px;font-size:.92rem;box-shadow:0 4px 16px rgba(74,222,128,.35)}
.ticket{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start}
.avatar{width:38px;height:38px;border-radius:50%;flex-shrink:0;display:grid;place-items:center;font-weight:800;color:#fff}
.ticket-head{display:flex;align-items:center;gap:8px;font-size:.9rem;flex-wrap:wrap}
.ticket-head small{color:var(--muted)}
.msg{color:var(--muted);font-size:.85rem;margin-top:4px}
.tag{font-size:.7rem;padding:2px 10px;border-radius:999px;font-weight:700}
.tag-open{background:rgba(74,222,128,.15);color:#4ade80;border:1px solid rgba(74,222,128,.3)}
.tag-claim{background:rgba(139,92,246,.15);color:#c084fc;border:1px solid rgba(139,92,246,.3)}
.close-btn{margin-inline-start:auto;background:rgba(244,63,94,.1);color:#f87171;border:1px solid rgba(244,63,94,.3);
  padding:6px 14px;border-radius:8px;font-size:.8rem;font-weight:700;font-family:var(--font);cursor:pointer}

/* ===== Stats ===== */
.stats-row{display:flex;justify-content:center;gap:60px;margin-top:56px;flex-wrap:wrap}
.stat{text-align:center}
.stat h3{font-size:2rem;font-weight:800;background:linear-gradient(120deg,#a5b4fc,#e879f9);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat span{color:var(--muted);font-size:.88rem}

/* ===== Marquee ===== */
.marquee{margin:80px 0 0;border-block:1px solid var(--border);padding:16px 0;overflow:hidden;direction:ltr;
  background:rgba(255,255,255,.015)}
.marquee-track{display:flex;gap:48px;width:max-content;animation:scroll 26s linear infinite}
.marquee-track span{color:var(--muted);font-weight:700;font-size:.95rem;white-space:nowrap;display:flex;align-items:center;gap:48px}
.marquee-track i{color:var(--b2);font-style:normal}
@keyframes scroll{to{transform:translateX(-50%)}}

/* ===== Sections ===== */
section{padding:100px 0 40px}
.sec-head{text-align:center;margin-bottom:56px}
.sec-head .kicker{color:#c084fc;font-weight:800;font-size:.85rem;letter-spacing:2px;text-transform:uppercase}
.sec-head h2{font-size:clamp(1.7rem,3.5vw,2.4rem);font-weight:800;margin-top:10px}
.sec-head p{color:var(--muted);margin-top:10px}

/* ===== Bento features ===== */
.bento{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.bcard{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:26px;position:relative;overflow:hidden;transition:.3s}
.bcard::before{content:'';position:absolute;inset:0;background:radial-gradient(420px 200px at 85% -10%,rgba(139,92,246,.14),transparent 70%);opacity:0;transition:.3s}
.bcard:hover::before{opacity:1}
.bcard:hover{transform:translateY(-5px);border-color:var(--border2)}
.bcard.sp2{grid-column:span 2}
.bcard.sp3{grid-column:span 2;grid-row:span 2}
.bicon{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;font-size:1.25rem;margin-bottom:16px;
  background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.3)}
.bcard h3{font-size:1.08rem;margin-bottom:8px}
.bcard p{color:var(--muted);font-size:.92rem}
.bcard .big-icon{position:absolute;bottom:-18px;left:-8px;font-size:7rem;opacity:.06;pointer-events:none}

/* ===== Steps ===== */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;position:relative}
.step{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:30px 26px;transition:.3s}
.step:hover{transform:translateY(-4px);border-color:var(--border2)}
.step-num{font-size:2.6rem;font-weight:800;line-height:1;background:linear-gradient(120deg,var(--b1),var(--b3));
  -webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:14px}
.step h3{font-size:1.1rem;margin-bottom:8px}
.step p{color:var(--muted);font-size:.92rem}
.step code{background:rgba(139,92,246,.15);color:#c084fc;padding:1px 8px;border-radius:6px;font-size:.85em}

/* ===== Terminal ===== */
.term{background:#0a0a12;border:1px solid var(--border);border-radius:18px;overflow:hidden;
  box-shadow:0 30px 70px rgba(0,0,0,.5);direction:ltr;text-align:left;max-width:860px;margin:0 auto}
.term-bar{display:flex;align-items:center;gap:8px;padding:13px 16px;background:rgba(255,255,255,.03);border-bottom:1px solid var(--border)}
.term-title{margin-inline:auto;color:var(--muted);font-size:.8rem;font-family:Consolas,monospace}
.term-body{padding:24px;font-family:Consolas,'Courier New',monospace;font-size:.92rem;line-height:2.15;color:#c9d1d9;overflow-x:auto}
.term-body .cmd{color:#4ade80}.term-body .flag{color:#7dd3fc}.term-body .comment{color:#6b7280}
.cursor{display:inline-block;width:9px;height:18px;background:#c084fc;vertical-align:middle;animation:pulse 1.1s infinite}

/* ===== FAQ ===== */
.faq{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:.25s}
.faq-item.open{border-color:var(--border2);background:rgba(139,92,246,.05)}
.faq-q{width:100%;background:none;border:none;color:var(--text);font-family:var(--font);font-size:1rem;font-weight:700;
  padding:18px 22px;text-align:right;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px}
.faq-q::after{content:'+';font-size:1.35rem;color:#c084fc;transition:.25s;flex-shrink:0}
.faq-item.open .faq-q::after{transform:rotate(45deg)}
.faq-a{color:var(--muted);font-size:.95rem}
.faq-a>div{padding:0 22px 18px}

/* ===== CTA ===== */
.cta-panel{position:relative;overflow:hidden;border-radius:28px;padding:80px 30px;text-align:center;
  background:linear-gradient(135deg,#312e81,#6d28d9 55%,#a21caf);border:1px solid rgba(255,255,255,.14)}
.cta-panel::before{content:'';position:absolute;width:520px;height:520px;border-radius:50%;background:rgba(255,255,255,.1);
  filter:blur(90px);top:-260px;right:-120px}
.cta-panel h2{font-size:clamp(1.7rem,3.5vw,2.4rem);margin-bottom:12px;position:relative}
.cta-panel p{color:rgba(255,255,255,.85);margin-bottom:30px;position:relative}
.cta-panel .btn{background:#fff;color:#6d28d9;padding:14px 34px;font-size:1.02rem;position:relative}

/* ===== Footer ===== */
footer{border-top:1px solid var(--border);margin-top:90px;padding:38px 0;color:var(--muted);font-size:.9rem}
.footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}

/* ===== Reveal ===== */
.reveal{opacity:0;transform:translateY(26px);transition:.65s ease}
.reveal.visible{opacity:1;transform:none}

@media(max-width:940px){
  .bento{grid-template-columns:1fr 1fr}
  .bcard.sp3{grid-column:span 2;grid-row:auto}
  .win-body{grid-template-columns:1fr}
  .nav-links{display:none;position:absolute;top:64px;right:0;left:0;flex-direction:column;background:rgba(13,13,22,.97);
    border:1px solid var(--border);border-radius:18px;padding:18px;gap:14px}
  .nav-links.open{display:flex}
  .burger{display:block}
  .steps{grid-template-columns:1fr}
  .stats-row{gap:34px}
}
@media(max-width:600px){.bento{grid-template-columns:1fr}.bcard.sp2,.bcard.sp3{grid-column:span 1}}
`;

const MARQUEE = ["دعم فني 24/7","تذاكر غير محدودة","نسخ محادثات HTML","إغلاق تلقائي خامل","أوامر سلاش سريعة","صلاحيات آمنة","تخصيص كامل","استلام Claim ذكي"];

const FEATURES = [
  { icon:"🎫", title:"لوحة تذاكر تفاعلية", desc:"أزرار أنيقة وفئات متعددة (دعم، شكوى، شراء) مع رسالة ترحيب مخصصة لكل فئة، وكل ذلك بضغطة زر واحدة من الأعضاء.", span:"sp3" },
  { icon:"👥", title:"إسناد تلقائي", desc:"منشن فوري لرتبة الدعم عند فتح التذكرة مع نظام Claim يمنع تداخل الطاقم.", span:"sp1" },
  { icon:"⏱️", title:"إغلاق تلقائي", desc:"إغلاق التذاكر الخاملة بعد مدة تحددها مع تنبيه قبل الإغلاق.", span:"sp1" },
  { icon:"📄", title:"نسخ محادثات كاملة", desc:"Transcripts بصيغة HTML تُرسل تلقائيًا لقناة الأرشيف عند إغلاق التذكرة، تشمل الأسماء والأوقات والصور.", span:"sp2" },
  { icon:"🎨", title:"تخصيص كامل", desc:"ألوان وأسماء قنوات ورسائل وأزرار — كل شيء قابل للتعديل عبر أوامر السلاش.", span:"sp1" },
  { icon:"🔒", title:"خصوصية تامة", desc:"قنوات تذاكر خاصة لا يراها إلا العضو والطاقم فقط.", span:"sp1" },
];

const FAQS = [
  { q:"هل البوت مجاني؟", a:"نعم، جميع المميزات الأساسية مجانية بالكامل. خطة بريميوم اختيارية تضيف فئات غير محدودة وتخصيصًا متقدمًا." },
  { q:"كم عدد التذاكر التي يمكن فتحها؟", a:"لا يوجد حد أقصى، ويمكنك تحديد حد أقصى لكل عضو في نفس الوقت لمنع الإساءة." },
  { q:"هل يمكن تخصيص أزرار التذاكر؟", a:"بالتأكيد! غيّر نص الزر وأيقونته ولونه، وأنشئ أكثر من لوحة لكل نوع طلبات." },
  { q:"أين تُحفظ نسخ المحادثات؟", a:"تُرسل تلقائيًا لقناة الأرشيف التي تحددها أثناء الإعداد بصيغة HTML." },
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
    const el = ref.current; if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const step = target / 80; let cur = 0;
      const tick = () => {
        cur += step;
        if (cur < target) { setVal(Math.floor(cur)); raf = requestAnimationFrame(tick); }
        else setVal(target);
      };
      tick();
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);
  return <h3 ref={ref}>{val.toLocaleString("en")}{val === target ? (target === 99 ? ".9%" : "+") : ""}</h3>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="aurora"><div className="orb o1" /><div className="orb o2" /><div className="orb o3" /></div>
      <div className="grid-lines" />

      {/* ===== Navbar ===== */}
      <div className="nav-wrap">
        <nav className="nav">
          <a href="#" className="logo"><span className="logo-badge">🎫</span> Veyron</a>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a></li>
            <li><a href="#how" onClick={() => setMenuOpen(false)}>كيف يعمل</a></li>
            <li><a href="#commands" onClick={() => setMenuOpen(false)}>الأوامر</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة</a></li>
          </ul>
          <a href="#invite" className="btn btn-primary" style={{ marginInlineStart: "auto" }}>أضف البوت</a>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">☰</button>
        </nav>
      </div>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container">
          <span className="chip"><span className="pulse" /> Veyron متاح الآن — الإصدار 2.0</span>
          <h1>نظّم دعم سيرفرك<br />مع <span className="grad">بوت التذاكر الأذكى</span></h1>
          <p>فتح تذاكر بضغطة زر، إسناد تلقائي للطاقم، نسخ محادثات كاملة، وتخصيص لا محدود — كل ما يحتاجه سيرفرك في بوت واحد سريع وآمن.</p>
          <div className="hero-actions">
            <a href="#invite" className="btn btn-primary">➕ أضف Veyron لسيرفرك</a>
            <a href="#commands" className="btn btn-ghost">⌘ اطّلع على الأوامر</a>
          </div>

          <div className="showcase reveal">
            <div className="win-bar">
              <span className="dot" style={{ background: "#f87171" }} />
              <span className="dot" style={{ background: "#fbbf24" }} />
              <span className="dot" style={{ background: "#4ade80" }} />
              <span className="win-title">veyron — ticket-0001</span>
            </div>
            <div className="win-body">
              <div className="panel">
                <h4>🎫 نظام التذاكر</h4>
                <p>اضغط الزر بالأسفل لفتح تذكرة وسيتواصل معك الطاقم فورًا</p>
                <span className="panel-btn">فتح تذكرة</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="ticket">
                  <div className="avatar" style={{ background: "linear-gradient(135deg,#5865F2,#8b5cf6)" }}>م</div>
                  <div style={{ flex: 1 }}>
                    <div className="ticket-head"><strong>مستخدم</strong><small>اليوم 10:24 م</small><span className="tag tag-open">مفتوحة</span></div>
                    <div className="msg">أحتاج مساعدة في تفعيل رتبتي بالسيرفر</div>
                  </div>
                </div>
                <div className="ticket">
                  <div className="avatar" style={{ background: "linear-gradient(135deg,#34d399,#4ade80)" }}>د</div>
                  <div style={{ flex: 1 }}>
                    <div className="ticket-head"><strong>الدعم الفني</strong><small>اليوم 10:25 م</small><span className="tag tag-claim">تم الاستلام</span></div>
                    <div className="msg">أهلًا بك! تم استلام تذكرتك وسنخدمك الآن ✅</div>
                  </div>
                  <button className="close-btn">إغلاق</button>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat"><Counter target={12500} /><span>سيرفر يستخدم Veyron</span></div>
            <div className="stat"><Counter target={890000} /><span>تذكرة تم معالجتها</span></div>
            <div className="stat"><Counter target={99} /><span>وقت تشغيل</span></div>
          </div>
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}<i>✦</i></span>)}
        </div>
      </div>

      {/* ===== Features (Bento) ===== */}
      <section id="features">
        <div className="container">
          <div className="sec-head reveal">
            <div className="kicker">المميزات</div>
            <h2>كل أدوات الدعم في مكان واحد</h2>
            <p>صمم Veyron ليجعل دعم الأعضاء أسرع وأسهل من أي وقت</p>
          </div>
          <div className="bento">
            {FEATURES.map((f) => (
              <div className={`bcard reveal ${f.span}`} key={f.title}>
                <div className="bicon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="big-icon">{f.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How ===== */}
      <section id="how">
        <div className="container">
          <div className="sec-head reveal">
            <div className="kicker">البداية</div>
            <h2>ثلاث خطوات وتكون جاهزًا</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="step-num">01</div><h3>أضف البوت</h3><p>اضغط زر الدعوة واختر سيرفرك وامنح الصلاحيات المطلوبة — يستغرق الأمر أقل من دقيقة.</p></div>
            <div className="step reveal"><div className="step-num">02</div><h3>أعدّ اللوحة</h3><p>شغّل أمر <code>/setup</code> ثم <code>/panel</code> لإنشاء لوحة التذاكر في قناة الدعم.</p></div>
            <div className="step reveal"><div className="step-num">03</div><h3>استقبل التذاكر</h3><p>يضغط الأعضاء الزر وتُفتح قناة خاصة، وفريقك يستلم ويغلق بضغطة واحدة.</p></div>
          </div>
        </div>
      </section>

      {/* ===== Commands ===== */}
      <section id="commands">
        <div className="container">
          <div className="sec-head reveal">
            <div className="kicker">الأوامر</div>
            <h2>أوامر سلاش بسيطة وقوية</h2>
          </div>
          <div className="term reveal">
            <div className="term-bar">
              <span className="dot" style={{ background: "#f87171" }} />
              <span className="dot" style={{ background: "#fbbf24" }} />
              <span className="dot" style={{ background: "#4ade80" }} />
              <span className="term-title">veyron — slash commands</span>
            </div>
            <div className="term-body">
              <span className="comment"># — إعدادات عامة —</span>{"\n"}
              <span className="cmd">/setup</span> <span className="flag">category:#الدعم</span> <span className="flag">support-role:@الدعم</span> <span className="flag">transcripts:#الأرشيف</span>{"\n"}
              <span className="cmd">/panel</span> <span className="flag">title:الدعم الفني</span> <span className="flag">description:اضغط الزر لفتح تذكرة</span>{"\n"}
              <span className="cmd">/add</span> <span className="flag">user:@عضو</span> <span className="comment"># إضافة عضو للتذكرة</span>{"\n"}
              <span className="cmd">/remove</span> <span className="flag">user:@عضو</span> <span className="comment"># إزالة عضو من التذكرة</span>{"\n"}
              {"\n"}
              <span className="comment"># — إدارة التذكرة —</span>{"\n"}
              <span className="cmd">/close</span> <span className="flag">reason:تم حل المشكلة</span>{"\n"}
              <span className="cmd">/claim</span> <span className="comment"># استلام التذكرة</span>{"\n"}
              <span className="cmd">/rename</span> <span className="flag">name:شراء-رتبة</span>{"\n"}
              <span className="cmd">/transcript</span> <span className="comment"># نسخة فورية من المحادثة</span>{"\n"}
              <span className="cursor" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="container">
          <div className="sec-head reveal"><div className="kicker">الأسئلة الشائعة</div><h2>كل ما تريد معرفته</h2></div>
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
          <div className="cta-panel reveal">
            <h2>جاهز لتنظيم دعم سيرفرك؟</h2>
            <p>أضف Veyron خلال أقل من دقيقة وابدأ باستقبال التذاكر فورًا</p>
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
