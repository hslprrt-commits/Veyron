import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "Veyron — بوت التذاكر الاحترافي لديسكورد",
  description: "نظام تذاكر لسيرفر ديسكورد: لوحات بأزرار، تصنيفات، سجل محادثات، وصلاحيات رتب.",
};

// TODO: ضع رابط دعوة البوت الحقيقي هنا
const INVITE_URL = "#";

const features = [
  { icon: "🎫", title: "لوحات تذاكر بأزرار", text: "انشر لوحة بزر واحد، والعضو يفتح تذكرته بثانية." },
  { icon: "🗂️", title: "تصنيفات متعددة", text: "دعم، شراء، شكاوى، تقديم… لكل تصنيف قناة وفريق خاص." },
  { icon: "📜", title: "سجل المحادثات", text: "عند الإغلاق يُحفظ سجل كامل بصيغة HTML قابل للمراجعة." },
  { icon: "🛡️", title: "صلاحيات الرتب", text: "حدد من يشوف التذاكر ومن يستلمها ومن يغلقها." },
  { icon: "⭐", title: "تقييم الخدمة", text: "يقيّم العضو الدعم بعد الإغلاق لتعرف مستوى فريقك." },
];

const steps = [
  { title: "أضف البوت", text: "ادعُ Veyron لسيرفرك بصلاحيات التذاكر." },
  { title: "جهّز الإعدادات", text: "اختر التصنيفات ورتب الدعم وقناة السجلات." },
  { title: "انشر اللوحة", text: "أرسل لوحة التذاكر وابدأ استقبال الطلبات." },
];

const container = "mx-auto w-full max-w-[1100px] px-[18px]";
const grad =
  "bg-gradient-to-l from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent";
const card =
  "rounded-2xl border border-[#e3e6ef] bg-white p-5 dark:border-[#1c2233] dark:bg-[#0f131d]";
const muted = "text-slate-500 dark:text-slate-400";
const btnPrimary =
  "inline-block rounded-xl bg-gradient-to-l from-violet-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-violet-600/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500";

export default function Page() {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`${cairo.className} min-h-screen bg-[#f6f7fb] leading-relaxed text-[#10131c] dark:bg-[#07090f] dark:text-[#eef1f8]`}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-[#e3e6ef] bg-[#f6f7fb]/80 backdrop-blur dark:border-[#1c2233] dark:bg-[#07090f]/80">
        <div className={`${container} flex h-[62px] items-center justify-between`}>
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold tracking-wide">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
              V
            </span>
            Veyron
          </a>
          <ul className={`hidden gap-6 text-[15px] md:flex ${muted}`}>
            <li><a href="#features" className="hover:text-violet-500">المميزات</a></li>
          </ul>
          <a href={INVITE_URL} className={`${btnPrimary} !px-5 !py-2.5 text-sm`}>أضف البوت</a>
        </div>
      </nav>

      {/* Hero */}
      <header className={`${container} px-[18px] pb-10 pt-20 text-center`}>
        <h1 className="mb-3.5 text-[clamp(34px,6vw,58px)] font-extrabold leading-[1.2]">
          نظام تذاكر <span className={grad}>بسرعة Veyron</span> لسيرفر ديسكورد
        </h1>
        <p className={`mx-auto mb-6 max-w-[620px] text-lg ${muted}`}>
          استقبل طلبات الدعم، نظّم الفريق، واحفظ كل محادثة في سجل منظم، بدون فوضى وبدون رسائل ضايعة.
        </p>
        <a href={INVITE_URL} className={btnPrimary}>أضف Veyron لسيرفرك</a>
      </header>

      {/* Features */}
      <section id="features" className="scroll-mt-16 py-14">
        <div className={container}>
          <h2 className="mb-2 text-center text-[clamp(26px,4vw,38px)] font-extrabold">
            كل ما يحتاجه <span className={grad}>فريق الدعم</span>
          </h2>
          <p className={`mx-auto mb-8 max-w-[560px] text-center ${muted}`}>أدوات جاهزة تشتغل من أول دقيقة.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className={`${card} transition hover:-translate-y-1 hover:border-violet-500`}>
                <div className="mb-2 text-[26px]">{f.icon}</div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className={`text-[15px] ${muted}`}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14">
        <div className={container}>
          <h2 className="mb-2 text-center text-[clamp(26px,4vw,38px)] font-extrabold">
            تشغيله في <span className={grad}>٣ خطوات</span>
          </h2>
          <p className={`mx-auto mb-10 max-w-[560px] text-center ${muted}`}>بدون إعدادات معقدة.</p>
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className={`${card} relative pt-8`}>
                <span className="absolute -top-4 start-5 grid h-[34px] w-[34px] place-items-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className={`text-[15px] ${muted}`}>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className={container}>
          <div className="rounded-3xl border border-[#e3e6ef] bg-gradient-to-br from-violet-500/20 to-cyan-500/15 px-5 py-12 text-center dark:border-[#1c2233]">
            <h2 className="mb-2 text-[clamp(26px,4vw,38px)] font-extrabold">
              جاهز تنظّم <span className={grad}>دعم سيرفرك؟</span>
            </h2>
            <p className={`mx-auto mb-6 max-w-[560px] ${muted}`}>أضف Veyron الآن وابدأ في أقل من دقيقتين.</p>
            <a href={INVITE_URL} className={btnPrimary}>أضف Veyron لسيرفرك</a>
          </div>
        </div>
      </section>

      <footer className={`border-t border-[#e3e6ef] py-6 text-sm dark:border-[#1c2233] ${muted}`}>
        <div className={`${container} flex flex-wrap justify-between gap-3`}>
          <span>© Veyron 2026</span>
          <span>مصنوع لمجتمعات ديسكورد</span>
        </div>
      </footer>
    </div>
  );
}
