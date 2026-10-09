"use client";

import { useMemo, useState } from "react";

const commands = [
{ name: "/help", category: "عام", description: "عرض دليل الأوامر المتاحة.", usage: "/help" },
{ name: "/ping", category: "عام", description: "عرض حالة استجابة البوت.", usage: "/ping" },
{ name: "/setup", category: "الإعدادات", description: "بدء إعداد نظام التذاكر.", usage: "/setup" },
{ name: "/config", category: "الإعدادات", description: "إدارة إعدادات نظام التذاكر.", usage: "/config" },
{ name: "/set-language", category: "الإعدادات", description: "تحديد لغة البوت العربية أو الإنجليزية.", usage: "/set-language" },
{ name: "/set-logs", category: "الإعدادات", description: "تحديد قناة سجلات التذاكر.", usage: "/set-logs" },
{ name: "/set-staff", category: "الإعدادات", description: "تحديد فريق الدعم المسؤول عن التذاكر.", usage: "/set-staff" },
{ name: "/ticket-panel", category: "التذاكر", description: "إعداد لوحة فتح التذاكر.", usage: "/ticket-panel" },
{ name: "/ticket-create", category: "التذاكر", description: "إنشاء تذكرة دعم جديدة.", usage: "/ticket-create" },
{ name: "/ticket-close", category: "التذاكر", description: "إغلاق التذكرة الحالية.", usage: "/ticket-close" },
{ name: "/ticket-reopen", category: "التذاكر", description: "إعادة فتح تذكرة مغلقة.", usage: "/ticket-reopen" },
{ name: "/ticket-claim", category: "التذاكر", description: "استلام التذكرة من أحد أعضاء الدعم.", usage: "/ticket-claim" },
{ name: "/ticket-add", category: "التذاكر", description: "إضافة عضو إلى التذكرة.", usage: "/ticket-add" },
{ name: "/ticket-remove", category: "التذاكر", description: "إزالة عضو من التذكرة.", usage: "/ticket-remove" },
{ name: "/ticket-rename", category: "التذاكر", description: "تغيير اسم التذكرة.", usage: "/ticket-rename" },
{ name: "/ticket-priority", category: "التذاكر", description: "تحديد أولوية التذكرة.", usage: "/ticket-priority" },
{ name: "/ticket-transcript", category: "التذاكر", description: "إنشاء نسخة محفوظة من محادثة التذكرة.", usage: "/ticket-transcript" },
{ name: "/ticket-rate", category: "التذاكر", description: "إتاحة تقييم تجربة الدعم.", usage: "/ticket-rate" },
{ name: "/ticket-stats", category: "الإدارة", description: "عرض إحصائيات التذاكر.", usage: "/ticket-stats" },
{ name: "/ticket-history", category: "الإدارة", description: "عرض سجل التذاكر.", usage: "/ticket-history" },
{ name: "/blacklist", category: "الإدارة", description: "إدارة قائمة منع فتح التذاكر.", usage: "/blacklist" },
];

const categories = ["الكل", "عام", "التذاكر", "الإعدادات", "الإدارة"];

export default function CommandsPage() {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("الكل");
const [copied, setCopied] = useState("");

const filteredCommands = useMemo(() => {
return commands.filter((command) => {
const matchesCategory = category === "الكل" || command.category === category;
const matchesSearch =
command.name.toLowerCase().includes(search.toLowerCase()) ||
command.description.includes(search);
return matchesCategory && matchesSearch;
});
}, [search, category]);

async function copyCommand(name: string) {
try {
await navigator.clipboard.writeText(name);
setCopied(name);
window.setTimeout(() => setCopied(""), 1600);
} catch {
setCopied("");
}
}

return (
<main dir="rtl" className="min-h-screen overflow-hidden bg-[#080910] text-white">
<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-48 right-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
<div className="absolute top-[500px] -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
</div>

  <div className="relative mx-auto max-w-7xl px-5 pb-24">
    <header className="flex items-center justify-between border-b border-white/[0.07] py-5">
      <a href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-lg font-black text-violet-300">
          V
        </span>
        <span className="text-xl font-bold tracking-tight">
          Veyron<span className="text-violet-400">.</span>
        </span>
      </a>

      <nav className="flex items-center gap-5 text-sm text-zinc-400">
        <a href="/" className="transition hover:text-white">الرئيسية</a>
        <a href="/commands" className="text-white">الأوامر</a>
      </nav>
    </header>

    <section className="mx-auto max-w-3xl py-20 text-center sm:py-28">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-medium text-violet-200">
        <span className="h-2 w-2 rounded-full bg-violet-400" />
        دليل أوامر Veyron
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
        كل الأوامر.
        <br />
        <span className="bg-gradient-to-l from-violet-300 via-indigo-300 to-white bg-clip-text text-transparent">
          بمكان واحد.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
        اكتشف أوامر إدارة التذاكر، إعدادات الدعم، وأدوات الإدارة.
        كل ما تحتاجه لفهم تجربة Veyron القادمة.
      </p>

      <div className="mt-9 inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-xs text-amber-200">
        <span>●</span>
        الأوامر قيد التجهيز — البوت غير متصل حالياً
      </div>
    </section>

    <section className="mx-auto max-w-5xl">
      <div className="rounded-2xl border border-white/[0.09] bg-[#10111b]/90 p-3 shadow-2xl shadow-black/20 sm:p-5">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="ابحث عن أمر أو وظيفة..."
            aria-label="البحث عن الأوامر"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] py-4 pr-12 pl-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-lg px-4 py-2.5 text-sm transition ${
                category === item
                  ? "border border-violet-400/30 bg-violet-500/15 text-violet-200"
                  : "border border-transparent bg-white/[0.03] text-zinc-400 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 mt-8 flex items-center justify-between">
        <h2 className="text-lg font-bold">قائمة الأوامر</h2>
        <span className="text-sm text-zinc-500">
          {filteredCommands.length} أمر
        </span>
      </div>

      {filteredCommands.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {filteredCommands.map((command) => (
            <article
              key={command.name}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-3">
                <code
                  dir="ltr"
                  className="rounded-lg border border-violet-400/15 bg-violet-500/[0.08] px-3 py-2 font-mono text-sm font-semibold text-violet-200"
                >
                  {command.name}
                </code>

                <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                  {command.category}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {command.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-xs text-zinc-600">الاستخدام</span>
                <button
                  onClick={() => copyCommand(command.usage)}
                  className="rounded-lg px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {copied === command.name ? "تم النسخ ✓" : "نسخ الأمر"}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 px-5 py-16 text-center">
          <p className="font-semibold text-zinc-300">ما لقينا أوامر مطابقة</p>
          <p className="mt-2 text-sm text-zinc-500">جرّب كلمة ثانية أو غيّر التصنيف.</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("الكل");
            }}
            className="mt-5 rounded-lg bg-violet-500/10 px-4 py-2 text-sm text-violet-200 hover:bg-violet-500/20"
          >
            عرض كل الأوامر
          </button>
        </div>
      )}
    </section>

    <section className="mt-16 rounded-2xl border border-violet-400/15 bg-gradient-to-l from-violet-500/[0.09] to-indigo-500/[0.04] p-7 text-center sm:p-10">
      <h2 className="text-2xl font-bold">الدعم يبدأ من هنا.</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-zinc-400">
        هذه القائمة تعرض الأوامر المخططة للمشروع. ستحتاج إلى إنشاء البوت
        وربطه بـ Discord وتنفيذ الأوامر قبل أن تصبح قابلة للاستخدام.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
      >
        العودة للرئيسية
      </a>
    </section>

    <footer className="mt-16 border-t border-white/[0.07] pt-7 text-center text-xs text-zinc-600">
      © {new Date().getFullYear()} Veyron. جميع الحقوق محفوظة.
    </footer>
  </div>
</main>

);
  }
