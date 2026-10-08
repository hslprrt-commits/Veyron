import { Readex_Pro, IBM_Plex_Sans_Arabic } from "next/font/google";

const heading = Readex_Pro({ subsets: ["arabic", "latin"], display: "swap" });
const body = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata = {
  title: "Veyron — بوت التذاكر الاحترافي لديسكورد",
  description: "نظام تذاكر لسيرفر ديسكورد: لوحات بأزرار، تصنيفات، سجل محادثات، وصلاحيات رتب.",
};

// TODO: ضع رابط دعوة البوت الحقيقي هنا
const INVITE_URL = "#";

const ICONS = {
  ticket: ["M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", "M13 5v2M13 11v2M13 17v2"],
  folder: ["M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"],
  file: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z", "M14 3v5h5M9 13h6M9 17h6"],
  shield: ["M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6Z"],
  star: ["m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"],
};

const features = [
  { icon: "ticket", title: "لوحات تذاكر بأزرار", text: "انشر لوحة بزر واحد، والعضو يفتح تذكرته بثانية." },
  { icon: "folder", title: "تصنيفات متعددة", text: "دعم، شراء، شكاوى، تقديم… لكل تصنيف قناة وفريق خاص." },
  { icon: "file", title: "سجل المحادثات", text: "عند الإغلاق يُحفظ سجل كامل بصيغة HTML قابل للمراجعة." },
  { icon: "shield", title: "صلاحيات الرتب", text: "حدد من يشوف التذاكر ومن يستلمها ومن يغلقها." },
  { icon: "star", title: "تقييم الخدمة", text: "يقيّم العضو الدعم بعد الإغلاق لتعرف مستوى فريقك." },
];

const steps = [
  { title: "أضف البوت", text: "ادعُ Veyron لسيرفرك بصلاحيات التذاكر." },
  { title: "جهّز الإعدادات", text: "اختر التصنيفات ورتب الدعم وقناة السجلات." },
  { title: "انشر اللوحة", text: "أرسل لوحة التذاكر وابدأ استقبال الطلبات." },
];

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {ICONS[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

const css = `
:root{--page:#eef0f8;--surf:#fff;--ink:#0b0d1f;--mut:#5a607a;--line:#cfd4e8}
@media (prefers-color-scheme:dark){:root{--page:#0b0d1f;--surf:#14172e;--ink:#eef0ff;--mut:#9aa1c0;--line:#2a3050}}
.tkt{--r:15px;display:flex;flex-direction:column;filter:drop-shadow(0 28px 40px rgba(60,30,200,.28))}
.tkt-main,.tkt-stub{--c:#0000 97%,#000}
.tkt-main{background:#6d4aff;border-radius:26px 26px 0 0;
 -webkit-mask:radial-gradient(var(--r) at 0 100%,var(--c)) left/51% 100% no-repeat,radial-gradient(var(--r) at 100% 100%,var(--c)) right/51% 100% no-repeat;
 mask:radial-gradient(var(--r) at 0 100%,var(--c)) left/51% 100% no-repeat,radial-gradient(var(--r) at 100% 100%,var(--c)) right/51% 100% no-repeat}
.tkt-stub{background:#fff;color:#0b0d1f;border-radius:0 0 26px 26px;border-top:2px dashed #c9c3f5;
 -webkit-mask:radial-gradient(var(--r) at 0 0,var(--c)) left/51% 100% no-repeat,radial-gradient(var(--r) at 100% 0,var(--c)) right/51% 100% no-repeat;
 mask:radial-gradient(var(--r) at 0 0,var(--c)) left/51% 100% no-repeat,radial-gradient(var(--r) at 100% 0,var(--c)) right/51% 100% no-repeat}
@media (min-width:768px){
 .tkt{flex-direction:row}
 .tkt-main{flex:1;border-radius:0 26px 26px 0;
  -webkit-mask:radial-gradient(var(--r) at 0 0,var(--c)) top/100% 51% no-repeat,radial-gradient(var(--r) at 0 100%,var(--c)) bottom/100% 51% no-repeat;
  mask:radial-gradient(var(--r) at 0 0,var(--c)) top/100% 51% no-repeat,radial-gradient(var(--r) at 0 100%,var(--c)) bottom/100% 51% no-repeat}
 .tkt-stub{width:230px;border-radius:26px 0 0 26px;border-top:0;border-inline-start:2px dashed #c9c3f5;
  -webkit-mask:radial-gradient(var(--r) at 100% 0,var(--c)) top/100% 51% no-repeat,radial-gradient(var(--r) at 100% 100%,var(--c)) bottom/100% 51% no-repeat;
  mask:radial-gradient(var(--r) at 100% 0,var(--c)) top/100% 51% no-repeat,radial-gradient(var(--r) at 100% 100%,var(--c)) bottom/100% 51% no-repeat}
}
.bars{height:54px;background:repeating-linear-gradient(90deg,#0b0d1f 0 2px,#0000 2px 4px,#0b0d1f 4px 5px,#0000 5px 8px,#0b0d1f 8px 11px,#0000 11px 13px,#0b0d1f 13px 14px,#0000 14px 17px)}
`;

const container = "mx-auto w-full max-w-[1100px] px-5";
const h2 = `${heading.className} text-[clamp(26px,4vw,38px)] font-semibold leading-tight`;
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c5cff]";

export default function Page() {
  return (
    <div dir="rtl" lang="ar" className={`${body.className} min-h-screen bg-[var(--page)] leading-relaxed text-[var(--ink)]`}>
      <style>{css}</style>

      <nav className="sticky top-0 z-10 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--page)_85%,transparent)] backdrop-blur">
        <div className={`${container} flex h-16 items-center justify-between`}>
          <a href="#" className={`flex items-center gap-2.5 text-xl font-semibold ${heading.className} ${focus}`}>
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#6d4aff] text-white"><Icon name="ticket" /></span>
            Veyron
          </a>
          <ul className="hidden gap-6 text-[15px] text-[var(--mut)] md:flex">
            <li><a href="#features" className={`hover:text-[#7c5cff] ${focus}`}>المميزات</a></li>
          </ul>
          <a href={INVITE_URL} className={`rounded-xl bg-[#6d4aff] px-5 py-2 text-sm font-semibold text-white hover:bg-[#5b3be8] ${focus}`}>أضف البوت</a>
        </div>
      </nav>

      <header className={`${container} pb-8 pt-10 md:pt-16`}>
        <div className="tkt mx-auto max-w-[980px]">
          <div className="tkt-main p-7 text-white md:p-12">
            <h1 className={`${heading.className} mb-4 text-[clamp(32px,5.4vw,54px)] font-semibold leading-[1.2]`}>
              نظام تذاكر بسرعة Veyron لسيرفر ديسكورد
            </h1>
            <p className="mb-8 max-w-[520px] text-lg text-white/80">
              استقبل طلبات الدعم، نظّم الفريق، واحفظ كل محادثة في سجل منظم، بدون فوضى وبدون رسائل ضايعة.
            </p>
            <a href={INVITE_URL} className={`inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#4a2fd6] hover:bg-[#f0ecff] ${focus}`}>
              أضف Veyron لسيرفرك
            </a>
          </div>
          <div className="tkt-stub flex flex-col justify-between gap-5 p-6" aria-hidden="true">
            <div>
              <div className="text-sm text-[#5a607a]">تذكرة دعم</div>
              <div className={`${heading.className} text-4xl font-semibold`} dir="ltr" style={{ textAlign: "right" }}>#0001</div>
            </div>
            <div className="bars" />
            <div className={`${heading.className} text-lg font-semibold text-[#6d4aff]`}>Veyron</div>
          </div>
        </div>
      </header>

      <section id="features" className="scroll-mt-20 py-16">
        <div className={`${container} grid gap-8 md:grid-cols-[300px_1fr] md:gap-14`}>
          <div className="md:sticky md:top-28 md:self-start">
            <h2 className={h2}>كل ما يحتاجه فريق الدعم</h2>
            <p className="mt-3 text-[var(--mut)]">أدوات جاهزة تشتغل من أول دقيقة.</p>
          </div>
          <ul className="divide-y-2 divide-dashed divide-[var(--line)] border-y-2 border-dashed border-[var(--line)]">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4 py-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#7c5cff]/15 text-[#7c5cff]">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <h3 className={`${heading.className} text-lg font-semibold`}>{f.title}</h3>
                  <p className="text-[var(--mut)]">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className={`${container} grid gap-8 md:grid-cols-[300px_1fr] md:gap-14`}>
          <div>
            <h2 className={h2}>تشغيله في ٣ خطوات</h2>
            <p className="mt-3 text-[var(--mut)]">بدون إعدادات معقدة.</p>
          </div>
          <ol className="relative space-y-10 border-s-2 border-dashed border-[var(--line)] ps-8">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className={`${heading.className} absolute -start-[51px] top-0 grid h-9 w-9 place-items-center rounded-full bg-[#6d4aff] font-semibold text-white ring-8 ring-[var(--page)]`}>
                  {i + 1}
                </span>
                <h3 className={`${heading.className} text-lg font-semibold`}>{s.title}</h3>
                <p className="text-[var(--mut)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className={`${container} border-t-2 border-dashed border-[var(--line)] pt-14 text-center`}>
          <h2 className={`${h2} mb-3`}>جاهز تنظّم دعم سيرفرك؟</h2>
          <p className="mx-auto mb-7 max-w-[520px] text-[var(--mut)]">أضف Veyron الآن وابدأ في أقل من دقيقتين.</p>
          <a href={INVITE_URL} className={`inline-block rounded-xl bg-[#6d4aff] px-7 py-3 font-semibold text-white hover:bg-[#5b3be8] ${focus}`}>
            أضف Veyron لسيرفرك
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-6 text-sm text-[var(--mut)]">
        <div className={`${container} flex flex-wrap justify-between gap-3`}>
          <span>© Veyron 2026</span>
          <span>مصنوع لمجتمعات ديسكورد</span>
        </div>
      </footer>
    </div>
  );
}
