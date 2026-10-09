"use client";

import { useState } from "react";

const features = [
{
number: "01",
icon: "◈",
title: "نظام تذاكر متقدم",
description:
"نظام دعم منظم يساعد أعضاء سيرفرك على إرسال طلباتهم ومتابعتها من مكان واحد.",
},
{
number: "02",
icon: "⌘",
title: "إدارة فريق الدعم",
description:
"تصوّر واضح لكيفية تنظيم فريق الدعم واستلام التذاكر وتوزيع المسؤوليات.",
},
{
number: "03",
icon: "▤",
title: "حفظ المحادثات",
description:
"خطة لدعم أرشفة محادثات التذاكر والرجوع إليها عند الحاجة بعد تنفيذ البوت.",
},
{
number: "04",
icon: "◎",
title: "عربي وإنجليزي",
description:
"تجربة مصممة لدعم اللغتين العربية والإنجليزية ضمن إعدادات المشروع المستقبلية.",
},
{
number: "05",
icon: "⌁",
title: "إعدادات مرنة",
description:
"التوجه هو توفير إعدادات تساعد كل سيرفر على تنظيم نظام الدعم بما يناسبه.",
},
{
number: "06",
icon: "▦",
title: "لوحة تحكم مستقبلية",
description:
"واجهة ويب مخطط لها لإدارة الإعدادات ومتابعة المعلومات من مكان واحد.",
},
];

const questions = [
{
question: "شنو هو Veyron؟",
answer:
"Veyron مشروع لنظام إدارة تذاكر الدعم في Discord، هدفه تنظيم طلبات الأعضاء وتسهيل عمل فريق الدعم.",
},
{
question: "هل البوت جاهز حالياً؟",
answer:
"لا، البوت بعده قيد الإنشاء. الموقع يعرض فكرة المشروع ومميزاته المخطط لها، والأوامر المذكورة ليست مفعّلة حالياً.",
},
{
question: "هل راح يدعم اللغة العربية؟",
answer:
"نعم، دعم العربية والإنجليزية ضمن أهداف المشروع، مع واجهة عربية باتجاه كتابة من اليمين إلى اليسار.",
},
{
question: "هل توجد لوحة تحكم؟",
answer:
"لوحة التحكم من المميزات المخطط لها. ربطها بإعدادات Discord يحتاج إلى بناء البوت والواجهة الخلفية.",
},
];

function Arrow({ left = false }: { left?: boolean }) {
return (
<span aria-hidden="true" className="inline-block">
{left ? "←" : "↗"}
</span>
);
}

function SectionHeading({
eyebrow,
title,
description,
}: {
eyebrow: string;
title: string;
description: string;
}) {
return (
<div className="mx-auto mb-12 max-w-2xl text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-semibold text-violet-300">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
{eyebrow}
</div>
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
{title}
</h2>
<p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
{description}
</p>
</div>
);
}

function DashboardPreview() {
return (
<div className="relative mx-auto w-full max-w-[560px]">
<div className="absolute -inset-8 rounded-[40px] bg-violet-600/[0.12] blur-[65px]" />

  <div className="relative overflow-hidden rounded-2xl border border-white/[0.11] bg-[#0e0f19] shadow-2xl shadow-black/40">
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-black text-violet-300">
          V
        </div>
        <span className="text-xs font-bold text-zinc-200">
          Veyron <span className="font-normal text-zinc-500">/ Overview</span>
        </span>
      </div>
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
      </div>
    </div>

    <div className="grid grid-cols-[92px_1fr] sm:grid-cols-[135px_1fr]">
      <aside className="border-l border-white/[0.06] bg-white/[0.012] p-2 sm:p-3">
        <p className="mb-3 px-2 pt-2 text-[9px] text-zinc-600 sm:text-[10px]">
          WORKSPACE
        </p>
        {[
          ["◫", "الرئيسية"],
          ["◈", "التذاكر"],
          ["▤", "السجلات"],
          ["⚙", "الإعدادات"],
        ].map(([icon, label], index) => (
          <div
            key={label}
            className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] sm:text-xs ${
              index === 0
                ? "bg-violet-500/15 text-violet-200"
                : "text-zinc-500"
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <div className="min-w-0 p-3 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-white sm:text-base">
              نظرة عامة
            </p>
            <p className="mt-1 text-[9px] text-zinc-500 sm:text-[11px]">
              معاينة توضيحية للوحة المستقبلية
            </p>
          </div>
          <span className="rounded-md border border-amber-400/20 bg-amber-400/[0.07] px-2 py-1 text-[9px] text-amber-300">
            Preview
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          {[
            ["التذاكر", "128", "+12%"],
            ["قيد المعالجة", "24", "نشطة"],
            ["تم الإغلاق", "96", "مكتملة"],
            ["فريق الدعم", "08", "أعضاء"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4"
            >
              <p className="text-[9px] text-zinc-500 sm:text-[11px]">
                {label}
              </p>
              <div className="mt-2 flex flex-wrap items-end justify-between gap-1">
                <span className="text-xl font-bold text-white sm:text-2xl">
                  {value}
                </span>
                <span className="text-[9px] text-violet-300">{note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-zinc-300 sm:text-xs">
              نشاط التذاكر
            </span>
            <span className="text-[9px] text-zinc-600">مثال بصري</span>
          </div>
          <div className="mt-4 flex h-20 items-end gap-2 sm:h-24 sm:gap-3">
            {[35, 58, 43, 77, 49, 88, 65, 96, 54, 73, 45, 82].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 items-end"
                >
                  <div
                    className={`w-full rounded-t-sm ${
                      index === 7
                        ? "bg-violet-400"
                        : "bg-gradient-to-t from-violet-700/30 to-violet-400/60"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ),
            )}
          </div>
          <div className="mt-3 border-t border-white/[0.06] pt-3 text-[9px] leading-5 text-zinc-600">
            بيانات وأرقام تجريبية للتصميم، وليست بيانات سيرفر حقيقية.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/10 bg-[#151521] px-4 py-3 shadow-xl sm:-left-7">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-lg text-violet-300">
        ◈
      </div>
      <div>
        <p className="text-xs font-semibold text-white">تجربة منظمة</p>
        <p className="mt-1 text-[10px] text-zinc-500">تصوّر واجهة Veyron</p>
      </div>
    </div>
  </div>
</div>

);
}

export default function HomePage() {
const [menuOpen, setMenuOpen] = useState(false);
const [openQuestion, setOpenQuestion] = useState<number | null>(0);

return (
<main
dir="rtl"
className="min-h-screen overflow-hidden bg-[#080910] text-white selection:bg-violet-500/30"
>
<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-64 right-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.09] blur-[130px]" />
<div className="absolute top-[900px] -left-60 h-[500px] w-[500px] rounded-full bg-indigo-600/[0.06] blur-[130px]" />
</div>

  <div className="relative">
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080910]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-lg font-black text-violet-200 shadow-lg shadow-violet-950/20">
            V
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Veyron<span className="text-violet-400">.</span>
          </span>
        </a>

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
          className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold transition hover:border-violet-400/30 hover:bg-violet-500/10 sm:inline-flex"
        >
          حالة المشروع <Arrow />
        </a>

        <button
          type="button"
          aria-label="فتح القائمة"
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
              className="block rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/[0.04]"
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
          Discord Support
        </div>

        <h1 className="max-w-2xl text-4xl font-black leading-[1.3] tracking-tight sm:text-5xl sm:leading-[1.25] lg:text-[64px]">
          إدارة الدعم،
          <br />
          <span className="bg-gradient-to-l from-violet-300 via-indigo-300 to-white bg-clip-text text-transparent">
            بطريقة أذكى.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
          تعرّف على Veyron، مشروع نظام تذاكر Discord المصمم لتنظيم طلبات
          الدعم، وتسهيل إدارة التذاكر، وتقديم تجربة أكثر وضوحاً لأعضاء
          السيرفر وفريق الإدارة.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400"
          >
            استكشف المميزات <Arrow />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            كيف يعمل المشروع؟ <Arrow left />
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="text-violet-300">✓</span>
            تصميم عربي RTL
          </span>
          <span className="flex items-center gap-2">
            <span className="text-violet-300">✓</span>
            مخطط لدعم لغتين
          </span>
          <span className="flex items-center gap-2">
            <span className="text-violet-300">✓</span>
            واجهة متجاوبة
          </span>
        </div>
      </div>

      <div className="px-2 pb-8 pt-3 sm:px-5 lg:px-0">
        <DashboardPreview />
      </div>
    </section>

    <section id="status" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-3 sm:px-8">
        {[
          ["الحالة الحالية", "قيد التطوير", "البوت لم يُنشأ بعد"],
          ["قناة الأوامر", "#bot-commands", "اسم مقترح لقناة واحدة"],
          ["لوحة التحكم", "ضمن الخطة", "تحتاج إلى تنفيذ وربط"],
        ].map(([label, value, detail]) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.06] bg-[#0b0c14]/70 px-5 py-4"
          >
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="mt-2 text-lg font-bold text-zinc-100">{value}</p>
            <p className="mt-1 text-xs text-zinc-500">{detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="المميزات"
        title="كل شيء يبدأ بتجربة منظمة"
        description="المميزات الأساسية التي يهدف Veyron إلى تقديمها لبناء نظام دعم واضح وقابل للتطوير."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.035] sm:p-7"
          >
            <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-violet-500/[0.035] blur-2xl transition group-hover:bg-violet-500/[0.10]" />
            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-xl text-violet-300">
                {feature.icon}
              </div>
              <span className="font-mono text-xs text-zinc-700">
                {feature.number}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-zinc-100">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {feature.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-violet-300/80">
              <span className="h-1 w-1 rounded-full bg-violet-400" />
              ميزة مخطط لها
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="how-it-works" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="طريقة العمل"
          title="من الإعداد إلى إدارة الدعم"
          description="هذه هي آلية العمل المستهدفة بعد إنشاء البوت وتنفيذ الوظائف وربطها بـ Discord."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "إعداد السيرفر",
              description:
                "تحديد القنوات والصلاحيات وفريق الدعم ضمن إعدادات النظام.",
            },
            {
              step: "02",
              title: "استقبال الطلبات",
              description:
                "يتمكن العضو من بدء تذكرة دعم وفق النظام الذي سيتم تنفيذه.",
            },
            {
              step: "03",
              title: "متابعة التذكرة",
              description:
                "يتولى فريق الدعم متابعة الطلب وإغلاقه مع حفظ السجل عند تفعيل الميزة.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-white/[0.07] bg-[#0b0c14] p-6 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 font-mono text-sm font-bold text-violet-300">
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="الأسئلة الشائعة"
        title="عندك سؤال؟"
        description="إجابات واضحة عن المشروع وحالته الحالية."
      />

      <div className="space-y-3">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;

          return (
            <div
              key={item.question}
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
                  {item.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-8 text-zinc-400">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-l from-violet-500/[0.11] via-[#11111e] to-indigo-500/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl font-black text-violet-200">
            V
          </div>
          <h2 className="mt-6 text-2xl font-bold sm:text-4xl">
            الدعم المنظم يبدأ بفكرة.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
            Veyron ما زال قيد التطوير. تابع هذه الصفحة للتعرّف على فكرة
            المشروع ومميزاته المخطط لها، من دون الادعاء بأن البوت جاهز.
          </p>
          <a
            href="#status"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-400"
          >
            حالة المشروع <Arrow />
          </a>
        </div>
      </div>
    </section>

    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a href="/" className="text-lg font-extrabold">
          Veyron<span className="text-violet-400">.</span>
        </a>
        <p className="text-xs leading-6 text-zinc-600">
          مشروع قيد التطوير — المميزات المعروضة تصوّر للخطة المستقبلية.
        </p>
        <a href="#top" className="text-xs text-zinc-500 transition hover:text-white">
          العودة للأعلى ↑
        </a>
      </div>
    </footer>
  </div>
</main>

);
  }
