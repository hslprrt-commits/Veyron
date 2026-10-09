
"use client";

import { useState } from "react";

const features = [
  {
    icon: "◈",
    number: "01",
    title: "نظام تذاكر منظم",
    description:
      "تجربة مصممة لترتيب طلبات الأعضاء وجمع محادثات الدعم في مكان واضح.",
    tag: "Ticket Management",
  },
  {
    icon: "⌘",
    number: "02",
    title: "فريق الدعم",
    description:
      "تصميم يراعي توزيع المسؤوليات وتسهيل متابعة الطلبات بين أعضاء الفريق.",
    tag: "Support Team",
  },
  {
    icon: "▤",
    number: "03",
    title: "سجل المحادثات",
    description:
      "التخطيط لأرشفة المحادثات حتى تكون تفاصيل الطلبات قابلة للمراجعة.",
    tag: "Ticket History",
  },
  {
    icon: "◎",
    number: "04",
    title: "تجربة عربية",
    description:
      "واجهة عربية باتجاه RTL مع التوجه إلى دعم اللغة الإنجليزية أيضاً.",
    tag: "Arabic First",
  },
  {
    icon: "⌁",
    number: "05",
    title: "إعدادات مرنة",
    description:
      "تصور لإعداد نظام الدعم بما يتناسب مع احتياجات كل سيرفر.",
    tag: "Configuration",
  },
  {
    icon: "▦",
    number: "06",
    title: "لوحة تحكم",
    description:
      "واجهة مستقبلية مخطط لها لجمع إعدادات المشروع ومعلوماته في مكان واحد.",
    tag: "Dashboard",
  },
];

const steps = [
  {
    number: "01",
    title: "جهّز نظام الدعم",
    text: "تحديد قنوات التذاكر وصلاحيات فريق الدعم بعد تنفيذ البوت.",
  },
  {
    number: "02",
    title: "استقبل الطلبات",
    text: "يبدأ العضو طلب المساعدة من خلال نظام التذاكر المخطط له.",
  },
  {
    number: "03",
    title: "تابع الطلب",
    text: "يتابع فريق الدعم الطلب حتى إغلاقه وفق الوظائف التي ستُنفّذ.",
  },
];

const faqs = [
  {
    q: "شنو هو Veyron؟",
    a: "Veyron مشروع بوت لإدارة تذاكر الدعم في Discord، هدفه تنظيم طلبات الأعضاء وتسهيل عمل فريق الدعم.",
  },
  {
    q: "هل البوت جاهز حالياً؟",
    a: "لا، البوت قيد التطوير. الموقع يعرض هوية المشروع ومميزاته المخطط لها، والأزرار التوضيحية لا تنشئ تذاكر حقيقية.",
  },
  {
    q: "هل راح يدعم اللغة العربية؟",
    a: "الواجهة الحالية عربية ومتوافقة مع اتجاه الكتابة من اليمين إلى اليسار، ودعم العربية والإنجليزية من أهداف المشروع.",
  },
  {
    q: "هل لوحة التحكم حقيقية؟",
    a: "لا، اللوحة المعروضة في الصفحة معاينة بصرية فقط. تحتاج اللوحة الحقيقية إلى بناء الواجهة الخلفية وربطها بالبوت.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-x-1">
      {diagonal ? "↗" : "←"}
    </span>
  );
}

function Logo() {
  return (
    <a href="#top" className="group flex shrink-0 items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-violet-300/20 bg-gradient-to-br from-violet-400/25 to-indigo-500/10 text-lg font-black text-white shadow-lg shadow-violet-950/30 transition group-hover:border-violet-300/50">
        V
      </span>
      <span className="text-xl font-extrabold tracking-tight text-white">
        Veyron<span className="text-violet-400">.</span>
      </span>
    </a>
  );
}

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-4 py-2 text-xs font-semibold text-violet-200">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
        {label}
      </span>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function DiscordPreview() {
  const [selectedTab, setSelectedTab] = useState("ticket");

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className="absolute -inset-8 rounded-[45px] bg-violet-600/[0.13] blur-[75px]" />

      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.11] bg-[#11121a] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.018] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 font-black text-indigo-200">
              V
            </div>
            <div>
              <p className="text-sm font-bold text-white">Veyron Studio</p>
              <p className="mt-0.5 text-[10px] text-zinc-500">
                Discord ticket preview
              </p>
            </div>
          </div>
          <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1.5 text-[10px] font-semibold text-amber-300">
            DEMO
          </span>
        </div>

        <div className="grid grid-cols-[92px_minmax(0,1fr)] sm:grid-cols-[145px_minmax(0,1fr)]">
          <aside className="border-l border-white/[0.06] bg-black/10 p-2 sm:p-3">
            <p className="mb-3 px-2 pt-2 text-[9px] font-bold tracking-widest text-zinc-600">
              SERVER
            </p>
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-white/[0.035] p-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-xs text-indigo-200">
                V
              </span>
              <span className="truncate text-[10px] font-semibold text-zinc-300">
                Community
              </span>
            </div>
            <p className="mb-2 px-2 text-[9px] text-zinc-600">TEXT CHANNELS</p>
            {[
              ["#", "general"],
              ["#", "announcements"],
              ["#", "support"],
            ].map(([icon, name]) => (
              <div
                key={name}
                className={`mb-1 flex items-center gap-1.5 rounded-lg px-2 py-2 text-[9px] sm:text-[10px] ${
                  name === "support"
                    ? "bg-violet-500/15 text-violet-200"
                    : "text-zinc-500"
                }`}
              >
                <span>{icon}</span>
                <span className="truncate">{name}</span>
              </div>
            ))}
            <p className="mb-2 mt-5 px-2 text-[9px] text-zinc-600">TICKETS</p>
            <div className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-[9px] text-zinc-400 sm:text-[10px]">
              <span className="text-emerald-400">#</span>
              <span className="truncate">ticket-demo</span>
            </div>
          </aside>

          <div className="min-w-0 p-3 sm:p-5">
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
              <div>
                <p className="text-sm font-bold text-white"># ticket-demo</p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Support request preview
                </p>
              </div>
              <span className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.07] px-2 py-1.5 text-[9px] text-emerald-300">
                Open
              </span>
            </div>

            <div className="mt-5 flex items-start gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-xs font-bold text-indigo-200">
                V
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-white">Veyron</span>
                  <span className="rounded bg-indigo-500/15 px-1.5 py-0.5 text-[9px] text-indigo-200">
                    BOT PREVIEW
                  </span>
                </div>
                <div className="mt-3 rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-3 sm:p-4">
                  <div className="h-1 w-12 rounded-full bg-violet-400" />
                  <h3 className="mt-3 text-sm font-bold text-white sm:text-base">
                    مركز الدعم
                  </h3>
                  <p className="mt-2 text-[11px] leading-6 text-zinc-400 sm:text-xs">
                    أهلاً بيك! هذه معاينة لشكل رسالة التكت المستقبلية. فريق
                    الدعم راح يساعدك بعد تنفيذ البوت.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTab("ticket")}
                      className={`rounded-lg px-3 py-2 text-[10px] font-semibold transition ${
                        selectedTab === "ticket"
                          ? "bg-violet-500 text-white"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300"
                      }`}
                    >
                      فتح تذكرة
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTab("help")}
                      className={`rounded-lg px-3 py-2 text-[10px] font-semibold transition ${
                        selectedTab === "help"
                          ? "bg-violet-500 text-white"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300"
                      }`}
                    >
                      معلومات الدعم
                    </button>
                  </div>
                  <p className="mt-3 rounded-lg bg-black/20 px-3 py-2 text-[10px] leading-5 text-zinc-500">
                    {selectedTab === "ticket"
                      ? "نموذج توضيحي لزر فتح التذكرة — غير مربوط بـ Discord."
                      : "نموذج توضيحي لمعلومات الدعم — لا توجد خدمة فعلية مرتبطة."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-sm text-emerald-300">
                ✓
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-zinc-200">
                  واجهة منظمة
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  تصور بصري للمنتج المستقبلي
                </p>
              </div>
              <span className="mr-auto text-[9px] text-zinc-600">PREVIEW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-1 hidden rounded-xl border border-white/10 bg-[#171722] px-4 py-3 shadow-xl sm:block sm:-left-5">
        <p className="text-[10px] text-zinc-500">Designed for</p>
        <p className="mt-1 text-xs font-bold text-white">Discord Support</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <main
      id="top"
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#080910] text-white selection:bg-violet-500/30"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-64 right-[8%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.10] blur-[140px]" />
        <div className="absolute top-[1100px] -left-64 h-[500px] w-[500px] rounded-full bg-indigo-600/[0.07] blur-[140px]" />
      </div>

      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080910]/85 backdrop-blur-2xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
            <Logo />

            <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
              <a href="#features" className="transition hover:text-white">
                المميزات
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                كيف يعمل؟
              </a>
              <a href="#faq" className="transition hover:text-white">
                الأسئلة الشائعة
              </a>
            </nav>

            <a
              href="#status"
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold transition hover:border-violet-400/30 hover:bg-violet-500/10 sm:inline-flex"
            >
              حالة المشروع <Arrow diagonal />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-lg text-zinc-300 md:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <nav className="border-t border-white/[0.06] px-5 py-4 md:hidden">
              {[
                ["المميزات", "#features"],
                ["كيف يعمل؟", "#how-it-works"],
                ["الأسئلة الشائعة", "#faq"],
                ["حالة المشروع", "#status"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.04]"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </header>

        <section className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24 lg:grid-cols-2 lg:gap-12 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-4 py-2 text-xs font-medium text-violet-200">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              مشروع قيد التطوير
              <span className="text-violet-400/50">/</span>
              Discord Ticket System
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.35] tracking-tight sm:text-5xl sm:leading-[1.25] lg:text-[62px]">
              نظام تذاكر Discord
              <br />
              <span className="bg-gradient-to-l from-violet-300 via-indigo-300 to-white bg-clip-text text-transparent">
                بشكل احترافي.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              إدارة تذاكر الدعم، تنظيم فريقك، ومتابعة طلبات أعضاء سيرفرك من
              خلال تجربة بسيطة وسريعة مع Veyron.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#status"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                تابع المشروع <Arrow diagonal />
              </a>
              <a
                href="#features"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
              >
                استكشف المميزات <Arrow />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="text-violet-300">✓</span>
                تصميم عربي RTL
              </span>
              <span className="flex items-center gap-2">
                <span className="text-violet-300">✓</span>
                تجربة متجاوبة
              </span>
              <span className="flex items-center gap-2">
                <span className="text-violet-300">✓</span>
                مخصص لـ Discord
              </span>
            </div>
          </div>

          <div className="px-1 pb-7 pt-3 sm:px-5 lg:px-0">
            <DiscordPreview />
          </div>
        </section>

        <section id="status" className="border-y border-white/[0.06] bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-3 sm:px-8">
            {[
              ["حالة المشروع", "قيد التطوير", "البوت لم يُنفّذ بعد"],
              ["واجهة التكت", "معاينة بصرية", "ليست مرتبطة بـ Discord"],
              ["لوحة التحكم", "ضمن الخطة", "تحتاج إلى بناء وربط"],
            ].map(([label, value, detail]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-[#0b0c14]/70 px-5 py-4 transition hover:border-violet-400/20"
              >
                <p className="text-xs text-zinc-500">{label}</p>
                <p className="mt-2 text-lg font-bold text-zinc-100">{value}</p>
                <p className="mt-1 text-xs text-zinc-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionTitle
            label="مميزات Veyron"
            title="دعم أوضح. تنظيم أفضل."
            description="تصوّر للمميزات التي سيُبنى عليها نظام دعم منظم لسيرفر Discord، مع توضيح ما هو مخطط له."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.035] sm:p-7"
              >
                <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-violet-500/[0.04] blur-2xl transition group-hover:bg-violet-500/[0.12]" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-xl text-violet-300">
                    {feature.icon}
                  </div>
                  <span className="font-mono text-xs text-zinc-700">
                    {feature.number}
                  </span>
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-violet-300/70">
                  {feature.tag}
                </p>
                <h3 className="mt-2 text-lg font-bold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                  ضمن خطة التطوير
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-white/[0.06] bg-white/[0.018]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
            <SectionTitle
              label="طريقة العمل"
              title="ثلاث خطوات لتجربة دعم أوضح"
              description="هذه هي آلية العمل المستهدفة بعد بناء البوت وتنفيذ الوظائف وربطها بـ Discord."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((item, index) => (
                <article
                  key={item.number}
                  className="relative rounded-2xl border border-white/[0.07] bg-[#0b0c14] p-6 transition hover:border-violet-400/20 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 font-mono text-sm font-bold text-violet-300">
                      {item.number}
                    </span>
                    <span className="font-mono text-xs text-zinc-700">
                      STEP 0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionTitle
            label="الأسئلة الشائعة"
            title="خلّينا نوضح الصورة"
            description="معلومات عن المشروع، المميزات المخطط لها، وحالة التنفيذ الحالية."
          />

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openQuestion === index;

              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-xl border transition ${
                    isOpen
                      ? "border-violet-400/20 bg-violet-500/[0.035]"
                      : "border-white/[0.07] bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right"
                  >
                    <span className="text-sm font-semibold text-zinc-200 sm:text-base">
                      {item.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-8 text-zinc-400">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-l from-violet-500/[0.12] via-[#11111e] to-indigo-500/[0.07] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-20 -top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl font-black text-violet-200">
                V
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                VEYRON PROJECT
              </p>
              <h2 className="mt-4 text-2xl font-black sm:text-4xl">
                كل تجربة دعم ناجحة تبدأ بالتنظيم.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
                Veyron مشروع قيد التطوير، وهذه الصفحة تعرض تصوّراً لهويته
                ومميزاته المستقبلية بكل وضوح.
              </p>
              <a
                href="#status"
                className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                حالة المشروع <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <Logo />
            <p className="text-xs leading-6 text-zinc-600">
              Veyron © {new Date().getFullYear()} — مشروع قيد التطوير.
            </p>
            <a
              href="#top"
              className="text-xs text-zinc-500 transition hover:text-white"
            >
              العودة للأعلى ↑
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

