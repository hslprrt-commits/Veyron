
"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    icon: "◈",
    title: "نظام تذاكر متكامل",
    description:
      "أنشئ تذاكر الدعم بسهولة، ونظّم طلبات الأعضاء ضمن نظام واضح وسريع.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "إدارة فريق الدعم",
    description:
      "وزّع المسؤوليات، نظّم عمل فريقك، وتابع التذاكر المفتوحة والمغلقة.",
  },
  {
    number: "03",
    icon: "↗",
    title: "سجل العمليات",
    description:
      "احتفظ بسجل واضح للتذاكر والإجراءات حتى تكون الإدارة أكثر شفافية.",
  },
  {
    number: "04",
    icon: "⏱",
    title: "تجربة سريعة",
    description:
      "واجهة بسيطة تساعد الأعضاء على الوصول للدعم بدون تعقيد.",
  },
  {
    number: "05",
    icon: "⌕",
    title: "تنظيم الطلبات",
    description:
      "رتّب طلبات الأعضاء وتابع حالة كل تذكرة من مكان واحد.",
  },
  {
    number: "06",
    icon: "✳",
    title: "واجهة عصرية",
    description:
      "تصميم واضح ومتناسق يسهّل استخدام النظام على مختلف الأجهزة.",
  },
];

const faqs = [
  {
    question: "شنو هو Veyron؟",
    answer:
      "Veyron هو مشروع لنظام إدارة تذاكر Discord، هدفه تنظيم طلبات الدعم ومساعدة أصحاب السيرفرات على إدارة التذاكر بطريقة مرتبة.",
  },
  {
    question: "شلون أضيف البوت إلى سيرفري؟",
    answer:
      "اضغط على زر إضافة إلى Discord بعد ربطه برابط الدعوة الرسمي للبوت. لازم يكون عندك رابط OAuth2 الصحيح وصلاحيات البوت المطلوبة.",
  },
  {
    question: "هل أگدر أخصص نظام التذاكر؟",
    answer:
      "التخصيص يعتمد على الميزات المنفذة فعلياً داخل البوت. يمكن تطوير خيارات مثل تصنيفات التذاكر وصلاحيات فريق الدعم.",
  },
  {
    question: "هل لوحة التحكم متاحة؟",
    answer:
      "هذه الصفحة تعرض واجهة Veyron التعريفية. لوحة التحكم الفعلية تحتاج إلى صفحات مرتبطة بالبوت ونظام تسجيل دخول وبيانات حقيقية.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "-rotate-45" : ""}
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Mark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.07] ${
        small ? "h-9 w-9" : "h-11 w-11"
      }`}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-transparent" />
      <svg
        viewBox="0 0 40 40"
        className={small ? "h-6 w-6" : "h-7 w-7"}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 29V11h5l10 12V11h5v18h-5L15 17v12z"
          fill="white"
        />
        <path
          d="M26 11h4v7"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3.5 py-2 text-xs font-semibold text-violet-200">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#08090d] text-white selection:bg-violet-500/40"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-72 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-violet-600/[0.11] blur-[140px]" />
        <div className="absolute right-[-240px] top-[700px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/[0.07] bg-[#08090d]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Veyron - الرئيسية"
          >
            <Mark />
            <span className="text-xl font-bold tracking-tight">
              Veyron<span className="text-violet-400">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a
              className="text-white transition hover:text-violet-300"
              href="#home"
            >
              الرئيسية
            </a>
            <a
              className="transition hover:text-white"
              href="#features"
            >
              المميزات
            </a>
            <a
              className="transition hover:text-white"
              href="#how"
            >
              كيف يعمل؟
            </a>
            <a
              className="transition hover:text-white"
              href="#faq"
            >
              الأسئلة الشائعة
            </a>
          </nav>

          <a
            href="#invite"
            className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-violet-100 sm:inline-flex"
          >
            إضافة إلى Discord
            <Arrow diagonal />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/[0.08] bg-[#0b0c12] p-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["الرئيسية", "#home"],
                ["المميزات", "#features"],
                ["كيف يعمل؟", "#how"],
                ["الأسئلة الشائعة", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href="#invite"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black"
              >
                إضافة إلى Discord
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="text-right">
            <SectionLabel>نظام إدارة التذاكر لـ Discord</SectionLabel>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.4] tracking-tight sm:text-5xl sm:leading-[1.35] lg:text-[62px]">
              دعم مجتمعك،
              <br />
              <span className="bg-gradient-to-l from-violet-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                بمستوى مختلف.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              إدارة تذاكر الدعم، تنظيم فريقك، ومتابعة طلبات أعضاء سيرفرك
              من خلال تجربة مصممة للسرعة والوضوح مع Veyron.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#invite"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold shadow-[0_0_35px_rgba(139,92,246,0.2)] transition hover:bg-violet-400"
              >
                ابدأ مع Veyron
                <Arrow />
              </a>

              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                استكشف المميزات
                <span className="text-zinc-400">↓</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                تجربة عربية
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                واجهة سهلة الاستخدام
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                تصميم متجاوب
              </span>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-8 rounded-[40px] bg-violet-500/[0.08] blur-[65px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#101116] shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-3">
                  <Mark small />
                  <div>
                    <div className="text-sm font-bold">Veyron Dashboard</div>
                    <div className="mt-1 text-[10px] text-zinc-500">
                      معاينة توضيحية للوحة التحكم
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5" dir="ltr">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                </div>
              </div>

              <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[118px_1fr]">
                <aside className="border-l border-white/[0.06] bg-[#0c0d12] p-3 sm:p-4">
                  <div className="mb-5 text-[9px] font-bold tracking-widest text-zinc-600">
                    WORKSPACE
                  </div>
                  <div className="mb-2 rounded-lg border border-violet-400/15 bg-violet-500/10 px-2 py-2.5 text-[10px] font-semibold text-violet-200 sm:text-xs">
                    ◈　الرئيسية
                  </div>
                  <div className="rounded-lg px-2 py-2.5 text-[10px] text-zinc-500 sm:text-xs">
                    ▤　التذاكر
                  </div>
                  <div className="rounded-lg px-2 py-2.5 text-[10px] text-zinc-500 sm:text-xs">
                    ♙　الفريق
                  </div>
                  <div className="rounded-lg px-2 py-2.5 text-[10px] text-zinc-500 sm:text-xs">
                    ⚙　الإعدادات
                  </div>

                  <div className="mt-10 border-t border-white/[0.07] pt-4">
                    <div className="text-[9px] text-zinc-600">
                      WORKSPACE
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/15 text-[10px] text-violet-300">
                        V
                      </span>
                      <span className="hidden text-[10px] text-zinc-400 sm:inline">
                        My Server
                      </span>
                    </div>
                  </div>
                </aside>

                <div className="min-w-0 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-base font-bold sm:text-lg">
                        نظرة عامة
                      </div>
                      <div className="mt-1 text-[10px] leading-5 text-zinc-500 sm:text-xs">
                        ملخص توضيحي لإدارة التذاكر
                      </div>
                    </div>
                    <span className="rounded-lg border border-white/[0.08] px-2 py-2 text-[9px] text-zinc-400">
                      كل الأوقات
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {[
                      {
                        label: "التذاكر المفتوحة",
                        number: "12",
                        icon: "◈",
                        color: "text-violet-300",
                      },
                      {
                        label: "تم حلها",
                        number: "48",
                        icon: "✓",
                        color: "text-emerald-300",
                      },
                      {
                        label: "قيد المتابعة",
                        number: "05",
                        icon: "◷",
                        color: "text-blue-300",
                      },
                      {
                        label: "فريق الدعم",
                        number: "08",
                        icon: "♙",
                        color: "text-amber-200",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9px] leading-4 text-zinc-500 sm:text-[10px]">
                            {stat.label}
                          </span>
                          <span className={`text-sm ${stat.color}`}>
                            {stat.icon}
                          </span>
                        </div>
                        <div className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                          {stat.number}
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className={`h-full rounded-full ${
                              stat.color === "text-violet-300"
                                ? "w-3/4 bg-violet-400"
                                : stat.color === "text-emerald-300"
                                  ? "w-4/5 bg-emerald-400"
                                  : stat.color === "text-blue-300"
                                    ? "w-1/2 bg-blue-400"
                                    : "w-2/3 bg-amber-300"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold">أحدث التذاكر</span>
                      <span className="text-[9px] text-zinc-500">
                        معاينة تجريبية
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          id: "#1024",
                          name: "مشكلة في الحساب",
                          status: "مفتوحة",
                          color: "text-emerald-300",
                          bg: "bg-emerald-400/10",
                        },
                        {
                          id: "#1023",
                          name: "طلب مساعدة",
                          status: "قيد المراجعة",
                          color: "text-amber-200",
                          bg: "bg-amber-300/10",
                        },
                        {
                          id: "#1022",
                          name: "استفسار عام",
                          status: "مغلقة",
                          color: "text-zinc-400",
                          bg: "bg-white/[0.06]",
                        },
                      ].map((ticket) => (
                        <div
                          key={ticket.id}
                          className="flex min-w-0 items-center justify-between gap-2 border-t border-white/[0.05] pt-3"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.035] text-xs text-violet-300">
                              #
                            </span>
                            <div className="min-w-0">
                              <div className="truncate text-[10px] font-semibold sm:text-xs">
                                {ticket.name}
                              </div>
                              <div className="mt-1 text-[9px] text-zinc-600">
                                {ticket.id}
                              </div>
                            </div>
                          </div>
                          <span
                            className={`shrink-0 rounded-md px-2 py-1 text-[9px] ${ticket.color} ${ticket.bg}`}
                          >
                            {ticket.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-violet-400/15 bg-violet-500/[0.06] px-3 py-2.5 text-[10px] text-violet-200">
                    <span>✳</span>
                    واجهة تجريبية — البيانات غير حقيقية
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#14151d] px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-lg text-emerald-300">
                ✓
              </span>
              <div>
                <div className="text-xs font-bold">تنظيم أفضل</div>
                <div className="mt-1 text-[10px] text-zinc-500">
                  كل طلب بمكانه
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      </div>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>المميزات</SectionLabel>
          <h2 className="text-3xl font-black leading-relaxed tracking-tight sm:text-4xl">
            كل ما تحتاجه،
            <span className="text-violet-300"> بتجربة واحدة.</span>
          </h2>
          <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-base">
            أدوات لتنظيم الدعم وإدارة التذاكر، ضمن واجهة واضحة بدون تعقيد.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.045] sm:p-7"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-violet-500/[0.06] blur-2xl transition group-hover:bg-violet-500/[0.13]" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.09] text-xl text-violet-300">
                  {feature.icon}
                </span>
                <span className="text-xs font-medium tracking-widest text-zinc-700">
                  {feature.number}
                </span>
              </div>

              <h3 className="relative mt-6 text-lg font-bold">
                {feature.title}
              </h3>
              <p className="relative mt-3 text-sm leading-8 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>كيف يعمل؟</SectionLabel>
              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl">
                من طلب المساعدة
                <br />
                <span className="text-violet-300">إلى الحل.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-8 text-zinc-400 sm:text-base">
                تجربة دعم منظمة تبدأ باستقبال الطلب، وتساعد فريقك على
                متابعة التفاصيل حتى إغلاق التذكرة.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  n: "01",
                  title: "إعداد البوت",
                  text: "اربط البوت بسيرفرك واضبط صلاحياته وقنوات الدعم المطلوبة.",
                },
                {
                  n: "02",
                  title: "استقبال التذاكر",
                  text: "يبدأ العضو طلب الدعم عبر نظام التذاكر الذي تم إعداده.",
                },
                {
                  n: "03",
                  title: "المتابعة والإغلاق",
                  text: "يتابع فريق الدعم الطلب ويعالج المشكلة ثم يغلق التذكرة.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-[#0d0e14] p-5 transition hover:border-violet-400/20 sm:gap-6 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-sm font-bold text-violet-300">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">
                      {step.text}
                    </p>
                  </div>
                  <div className="mr-auto hidden self-center text-zinc-600 transition group-hover:text-violet-300 sm:block">
                    <Arrow diagonal />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div
          id="invite"
          className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#111019] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] to-transparent" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <Mark small />
            </div>
            <h2 className="mt-7 text-3xl font-black leading-relaxed sm:text-4xl">
              جاهز ترتّب الدعم بسيرفرك؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
              خلي إدارة التذاكر أوضح لفريقك وأبسط لأعضاء مجتمعك.
            </p>
            <a
              href="https://discord.com/developers/applications"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-violet-100"
            >
              إعداد تطبيق Discord
              <Arrow diagonal />
            </a>
            <p className="mt-4 text-xs leading-6 text-zinc-500">
              رابط إعداد التطبيق مؤقت، وليس رابط دعوة البوت.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 mx-auto max-w-3xl px-5 pb-24 sm:px-8 sm:pb-28"
      >
        <div className="mb-10 text-center">
          <SectionLabel>الأسئلة الشائعة</SectionLabel>
          <h2 className="text-3xl font-black sm:text-4xl">
            عندك سؤال؟
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            إجابات واضحة عن المشروع وطريقة استخدامه.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const expanded = openFaq === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition ${
                  expanded
                    ? "border-violet-400/20 bg-violet-500/[0.035]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpenFaq(expanded ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right"
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-lg transition ${
                      expanded
                        ? "rotate-45 border-violet-400/20 text-violet-300"
                        : "border-white/10 text-zinc-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                {expanded && (
                  <div className="px-5 pb-5">
                    <p className="border-t border-white/[0.07] pt-4 text-sm leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Mark small />
            <div>
              <div className="font-bold">
                Veyron<span className="text-violet-400">.</span>
              </div>
              <div className="mt-1 text-[10px] text-zinc-500">
                Discord Ticket Management
              </div>
            </div>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500">
            <a className="transition hover:text-white" href="#home">
              الرئيسية
            </a>
            <a className="transition hover:text-white" href="#features">
              المميزات
            </a>
            <a className="transition hover:text-white" href="#how">
              كيف يعمل؟
            </a>
            <a className="transition hover:text-white" href="#faq">
              الأسئلة الشائعة
            </a>
          </nav>

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Veyron. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  );
}
