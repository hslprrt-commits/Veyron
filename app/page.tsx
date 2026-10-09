"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const font = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

/* ───────────── Types ───────────── */

type Status = "open" | "pending" | "closed";
type Priority = "high" | "normal" | "low";

type Msg = {
  id: number;
  from: "user" | "staff";
  author: string;
  text: string;
  time: string;
};

type Ticket = {
  id: number;
  subject: string;
  user: string;
  category: string;
  status: Status;
  priority: Priority;
  assignee: string | null;
  opened: string;
  messages: Msg[];
};

/* ───────────── Mock data (replace with your API) ───────────── */

const STAFF = ["ريان", "سلمى", "فهد"];
const ME = "ريان"; // الموظف الحالي: خذه من الجلسة لاحقاً
const MAX_REPLY = 2000; // حد رسالة ديسكورد

const INITIAL: Ticket[] = [
  {
    id: 1042,
    subject: "لا أستطيع الدخول إلى روم الصوت",
    user: "mohammed_x",
    category: "دعم فني",
    status: "open",
    priority: "high",
    assignee: null,
    opened: "قبل 6 دقائق",
    messages: [
      { id: 1, from: "user", author: "mohammed_x", text: "السلام عليكم، كل ما أدخل روم الصوت يطلع لي خطأ في الصلاحيات.", time: "10:42" },
      { id: 2, from: "user", author: "mohammed_x", text: "جربت أطلع وأدخل مرة ثانية بدون فايدة.", time: "10:44" },
    ],
  },
  {
    id: 1041,
    subject: "طلب انضمام لفريق الإشراف",
    user: "layla.dev",
    category: "طلب انضمام",
    status: "pending",
    priority: "normal",
    assignee: "سلمى",
    opened: "قبل ساعة",
    messages: [
      { id: 1, from: "user", author: "layla.dev", text: "أرغب بالانضمام للإشراف، عندي خبرة سنتين في سيرفرات مشابهة.", time: "09:30" },
      { id: 2, from: "staff", author: "سلمى", text: "أهلاً ليلى، أرسلي لنا أمثلة على سيرفرات أشرفتِ عليها.", time: "09:41" },
    ],
  },
  {
    id: 1040,
    subject: "إبلاغ عن عضو يرسل روابط مشبوهة",
    user: "nora_92",
    category: "إبلاغ",
    status: "open",
    priority: "high",
    assignee: "فهد",
    opened: "قبل 3 ساعات",
    messages: [
      { id: 1, from: "user", author: "nora_92", text: "في عضو يرسل روابط في الخاص باسم هدايا نيترو.", time: "07:12" },
      { id: 2, from: "staff", author: "فهد", text: "شكراً على البلاغ، هل عندك لقطة شاشة للرسالة؟", time: "07:20" },
      { id: 3, from: "user", author: "nora_92", text: "إي، أرفقتها الحين.", time: "07:25" },
    ],
  },
  {
    id: 1039,
    subject: "استفسار عن رتبة الداعمين",
    user: "sultan",
    category: "استفسار",
    status: "closed",
    priority: "low",
    assignee: "ريان",
    opened: "أمس",
    messages: [
      { id: 1, from: "user", author: "sultan", text: "متى تنضاف رتبة الداعمين بعد الاشتراك؟", time: "أمس" },
      { id: 2, from: "staff", author: "ريان", text: "تنضاف خلال دقائق، وإذا تأخرت افتح تذكرة جديدة.", time: "أمس" },
    ],
  },
  {
    id: 1038,
    subject: "البوت لا يرد على الأوامر",
    user: "hadi_k",
    category: "دعم فني",
    status: "pending",
    priority: "normal",
    assignee: "ريان",
    opened: "أمس",
    messages: [
      { id: 1, from: "user", author: "hadi_k", text: "الأوامر ما تشتغل عندي في قناة الأوامر.", time: "أمس" },
      { id: 2, from: "staff", author: "ريان", text: "ممكن تكتب لي الأمر اللي جربته بالضبط؟", time: "أمس" },
    ],
  },
];

/* ───────────── Static maps (full class strings so Tailwind keeps them) ───────────── */

const STATUS_LABEL: Record<Status, string> = {
  open: "مفتوحة",
  pending: "معلّقة",
  closed: "مغلقة",
};

const STATUS_STYLE: Record<Status, string> = {
  open: "bg-[#E8E5FF] text-[#3B2FD0]",
  pending: "bg-[#FFF0D6] text-[#8A5A00]",
  closed: "bg-[#E4EBE7] text-[#3F5F50]",
};

const PRIORITY_LABEL: Record<Priority, string> = {
  high: "عالية",
  normal: "عادية",
  low: "منخفضة",
};

const PRIORITY_STRIPE: Record<Priority, string> = {
  high: "border-s-[#E5484D]",
  normal: "border-s-[#B9B6D9]",
  low: "border-s-[#DAD8EA]",
};

const AVATAR_COLORS = ["#5B4BFF", "#1F9D6B", "#D9822B", "#C2397F", "#2B7FD9"];

const NAV = ["التذاكر", "الأنواع والأقسام", "الردود الجاهزة", "فريق الدعم", "الإعدادات"];

/* ───────────── Helpers ───────────── */

function avatarColor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 997;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function nowHHMM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function lastFromUser(t: Ticket) {
  return t.messages.length > 0 && t.messages[t.messages.length - 1].from === "user";
}

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
      style={{
        width: size,
        height: size,
        background: avatarColor(name),
        fontSize: size * 0.4,
      }}
      aria-hidden
    >
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
}

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B4BFF]";

/* ───────────── Page ───────────── */

export default function DashboardPage() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL);
  const [selectedId, setSelectedId] = useState<number | null>(INITIAL[0].id);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");
  // مسودة منفصلة لكل تذكرة حتى لا يُرسل رد إلى تذكرة خاطئة
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const selected = tickets.find((t) => t.id === selectedId) ?? null;
  const draft = selected ? drafts[selected.id] ?? "" : "";

  const counts = useMemo(
    () => ({
      all: tickets.length,
      open: tickets.filter((t) => t.status === "open").length,
      pending: tickets.filter((t) => t.status === "pending").length,
      closed: tickets.filter((t) => t.status === "closed").length,
    }),
    [tickets]
  );

  const awaitingStaff = tickets.filter((t) => t.status !== "closed" && lastFromUser(t)).length;
  const unassigned = tickets.filter((t) => t.status !== "closed" && !t.assignee).length;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^#/, "");
    return tickets.filter((t) => {
      if (filter !== "all" && t.status !== filter) return false;
      if (!q) return true;
      return (
        t.subject.toLowerCase().includes(q) ||
        t.user.toLowerCase().includes(q) ||
        String(t.id).includes(q)
      );
    });
  }, [tickets, filter, query]);

  // تمرير حاوية الرسائل فقط (scrollIntoView كان يحرّك الصفحة كلها)
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [selectedId, selected?.messages.length]);

  function update(id: number, patch: Partial<Ticket>) {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function setDraft(value: string) {
    if (!selected) return;
    const id = selected.id;
    setDrafts((prev) => ({ ...prev, [id]: value }));
  }

  function send() {
    if (!selected || selected.status === "closed") return;
    const text = draft.trim();
    if (!text) return;
    const id = selected.id;
    const time = nowHHMM();

    // تحديث وظيفي: يقرأ أحدث حالة بدل نسخة قديمة من الإغلاق (closure)
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id || t.status === "closed") return t;
        const nextId = t.messages.reduce((m, x) => Math.max(m, x.id), 0) + 1;
        return {
          ...t,
          assignee: t.assignee ?? ME,
          status: "pending",
          messages: [...t.messages, { id: nextId, from: "staff", author: ME, text, time }],
        };
      })
    );
    setDrafts((prev) => ({ ...prev, [id]: "" }));
  }

  const tabs: { key: Status | "all"; label: string }[] = [
    { key: "all", label: "الكل" },
    { key: "open", label: "مفتوحة" },
    { key: "pending", label: "معلّقة" },
    { key: "closed", label: "مغلقة" },
  ];

  return (
    <div
      dir="rtl"
      className={`${font.className} min-h-screen bg-[#F3F3F9] text-[#1B1D3A] lg:grid lg:grid-cols-[232px_minmax(0,1fr)] xl:h-screen xl:grid-rows-[minmax(0,1fr)] xl:overflow-hidden`}
    >
      {/* ─── Sidebar ─── */}
      <aside className="hidden flex-col bg-[#1B1D3A] px-4 py-6 text-[#C9CAE6] lg:flex">
        <div className="mb-8 flex items-center gap-3 px-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5B4BFF] text-lg font-bold text-white">
            V
          </span>
          <span className="text-lg font-bold text-white">Veyron</span>
        </div>

        <nav className="flex flex-col gap-1 text-sm" aria-label="التنقل الرئيسي">
          {NAV.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-current={i === 0 ? "page" : undefined}
              className={`rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8F84FF] ${
                i === 0 ? "bg-white/10 font-medium text-white" : "hover:bg-white/5"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <Avatar name={ME} />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{ME}</div>
            <div className="text-xs text-[#9FA1C8]">مشرف</div>
          </div>
        </div>
      </aside>

      {/* ─── Main ─── */}
      <main className="flex min-w-0 flex-col xl:min-h-0">
        <header className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-[#E1E1EE] bg-white px-6 py-4">
          <h1 className="text-xl font-bold">التذاكر</h1>
          <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {[
              { label: "بانتظار رد الموظف", value: awaitingStaff },
              { label: "بدون مستلم", value: unassigned },
              { label: "مفتوحة", value: counts.open },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-2">
                <dt className="order-2 text-[#5E6082]">{m.label}</dt>
                <dd className="order-1 text-lg font-bold tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="grid flex-1 grid-cols-1 xl:min-h-0 xl:grid-cols-[340px_minmax(0,1fr)_264px] xl:grid-rows-[minmax(0,1fr)]">
          {/* ─── Queue ─── */}
          <section
            className="flex min-h-[320px] flex-col border-[#E1E1EE] bg-[#FAFAFD] xl:min-h-0 xl:border-e"
            aria-label="قائمة التذاكر"
          >
            <div className="space-y-3 p-4">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث بالموضوع أو اسم العضو أو الرقم"
                aria-label="بحث في التذاكر"
                className="w-full rounded-lg border border-[#D6D6E8] bg-white px-3 py-2 text-sm outline-none placeholder:text-[#8C8EB0] focus:border-[#5B4BFF] focus:ring-2 focus:ring-[#5B4BFF]/20"
              />
              <div className="flex gap-1 rounded-lg bg-[#ECECF6] p-1" role="group" aria-label="تصفية حسب الحالة">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    aria-pressed={filter === tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${FOCUS} ${
                      filter === tab.key
                        ? "bg-white text-[#1B1D3A] shadow-sm"
                        : "text-[#5E6082] hover:text-[#1B1D3A]"
                    }`}
                  >
                    {tab.label}
                    <span className="ms-1 tabular-nums text-[#8C8EB0]">{counts[tab.key]}</span>
                  </button>
                ))}
              </div>
            </div>

            <ul className="min-h-0 flex-1 divide-y divide-[#ECECF6] overflow-y-auto">
              {visible.length === 0 && (
                <li className="px-6 py-12 text-center text-sm text-[#5E6082]">
                  لا توجد تذاكر مطابقة. غيّر الفلتر أو امسح البحث.
                </li>
              )}
              {visible.map((t) => {
                const active = t.id === selectedId;
                const waiting = t.status !== "closed" && lastFromUser(t);
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(t.id)}
                      aria-current={active ? "true" : undefined}
                      className={`w-full border-s-4 px-4 py-3 text-start transition-colors focus-visible:-outline-offset-2 ${FOCUS} ${
                        PRIORITY_STRIPE[t.priority]
                      } ${active ? "bg-white" : "hover:bg-white/60"}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold">{t.subject}</span>
                        {waiting && (
                          <span
                            role="img"
                            aria-label="بانتظار رد الموظف"
                            title="بانتظار رد الموظف"
                            className="h-2 w-2 shrink-0 rounded-full bg-[#5B4BFF]"
                          />
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[#5E6082]">
                        <span dir="ltr">#{t.id}</span>
                        <span className="truncate">{t.user}</span>
                        <span className="ms-auto shrink-0">{t.opened}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className={`rounded-full px-2 py-0.5 font-medium ${STATUS_STYLE[t.status]}`}>
                          {STATUS_LABEL[t.status]}
                        </span>
                        <span className="text-[#8C8EB0]">{t.category}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ─── Conversation ─── */}
          <section className="flex min-h-[520px] min-w-0 flex-col bg-white xl:min-h-0" aria-label="المحادثة">
            {!selected ? (
              <div className="flex flex-1 items-center justify-center px-6 text-center text-sm text-[#5E6082]">
                اختر تذكرة من القائمة لعرض المحادثة.
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-3 border-b border-[#ECECF6] px-6 py-4">
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-base font-bold">{selected.subject}</h2>
                    <p className="text-xs text-[#5E6082]">
                      <span dir="ltr">#{selected.id}</span> · {selected.user} · {selected.category}
                    </p>
                  </div>
                  {selected.status === "closed" ? (
                    <button
                      type="button"
                      onClick={() => update(selected.id, { status: "open" })}
                      className={`rounded-lg border border-[#D6D6E8] px-4 py-2 text-sm font-medium hover:bg-[#F3F3F9] ${FOCUS}`}
                    >
                      إعادة فتح التذكرة
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => update(selected.id, { status: "closed" })}
                      className={`rounded-lg bg-[#1B1D3A] px-4 py-2 text-sm font-medium text-white hover:bg-[#2B2E57] focus-visible:outline-offset-2 ${FOCUS}`}
                    >
                      إغلاق التذكرة
                    </button>
                  )}
                </div>

                <div
                  ref={scrollRef}
                  className="min-h-0 max-h-[60vh] flex-1 space-y-4 overflow-y-auto px-6 py-5 xl:max-h-none"
                >
                  {selected.messages.map((m) => {
                    const staff = m.from === "staff";
                    return (
                      <div key={m.id} className={`flex items-end gap-3 ${staff ? "flex-row-reverse" : ""}`}>
                        <Avatar name={m.author} size={28} />
                        <div
                          className={`max-w-[75%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                            staff
                              ? "rounded-ee-sm bg-[#5B4BFF] text-white"
                              : "rounded-es-sm bg-[#F0F0F8]"
                          }`}
                        >
                          <div className={`mb-0.5 text-xs ${staff ? "text-white/75" : "text-[#5E6082]"}`}>
                            {m.author} · {m.time}
                          </div>
                          {m.text}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-[#ECECF6] p-4">
                  {selected.status === "closed" ? (
                    <p className="rounded-lg bg-[#F3F3F9] px-4 py-3 text-center text-sm text-[#5E6082]">
                      التذكرة مغلقة. أعد فتحها لإرسال رد.
                    </p>
                  ) : (
                    <div className="flex items-end gap-3">
                      <textarea
                        value={draft}
                        maxLength={MAX_REPLY}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.nativeEvent.isComposing) return;
                          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                            e.preventDefault();
                            send();
                          }
                        }}
                        rows={2}
                        placeholder="اكتب ردك هنا (Ctrl + Enter للإرسال)"
                        aria-label="نص الرد"
                        className="min-h-[52px] flex-1 resize-none rounded-lg border border-[#D6D6E8] px-3 py-2 text-sm outline-none placeholder:text-[#8C8EB0] focus:border-[#5B4BFF] focus:ring-2 focus:ring-[#5B4BFF]/20"
                      />
                      <button
                        type="button"
                        onClick={send}
                        disabled={!draft.trim()}
                        className={`rounded-lg bg-[#5B4BFF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4A3BE6] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-offset-2 ${FOCUS}`}
                      >
                        إرسال الرد
                      </button>
                    </div>
                  )}
                  {selected.status !== "closed" && draft.length > MAX_REPLY * 0.9 && (
                    <p className="mt-2 text-xs text-[#8A5A00]" aria-live="polite">
                      {draft.length} / {MAX_REPLY} حرف
                    </p>
                  )}
                </div>
              </>
            )}
          </section>

          {/* ─── Details ─── */}
          <aside
            className="space-y-6 border-[#E1E1EE] bg-[#FAFAFD] p-5 xl:min-h-0 xl:overflow-y-auto xl:border-s"
            aria-label="تفاصيل التذكرة"
          >
            {selected ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar name={selected.user} size={40} />
                  <div className="min-w-0 leading-tight">
                    <div className="truncate text-sm font-semibold">{selected.user}</div>
                    <div className="text-xs text-[#5E6082]">فتح التذكرة {selected.opened}</div>
                  </div>
                </div>

                <div>
                  <label htmlFor="assignee" className="mb-1.5 block text-xs font-medium text-[#5E6082]">
                    المستلم
                  </label>
                  <select
                    id="assignee"
                    value={selected.assignee ?? ""}
                    onChange={(e) => update(selected.id, { assignee: e.target.value || null })}
                    className="w-full rounded-lg border border-[#D6D6E8] bg-white px-3 py-2 text-sm outline-none focus:border-[#5B4BFF] focus:ring-2 focus:ring-[#5B4BFF]/20"
                  >
                    <option value="">بدون مستلم</option>
                    {STAFF.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {!selected.assignee && selected.status !== "closed" && (
                    <button
                      type="button"
                      onClick={() => update(selected.id, { assignee: ME })}
                      className={`mt-2 text-xs font-medium text-[#3B2FD0] underline-offset-2 hover:underline ${FOCUS}`}
                    >
                      استلام التذكرة
                    </button>
                  )}
                </div>

                <div>
                  <label htmlFor="priority" className="mb-1.5 block text-xs font-medium text-[#5E6082]">
                    الأولوية
                  </label>
                  <select
                    id="priority"
                    value={selected.priority}
                    onChange={(e) => update(selected.id, { priority: e.target.value as Priority })}
                    className="w-full rounded-lg border border-[#D6D6E8] bg-white px-3 py-2 text-sm outline-none focus:border-[#5B4BFF] focus:ring-2 focus:ring-[#5B4BFF]/20"
                  >
                    {(Object.keys(PRIORITY_LABEL) as Priority[]).map((p) => (
                      <option key={p} value={p}>
                        {PRIORITY_LABEL[p]}
                      </option>
                    ))}
                  </select>
                </div>

                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[#5E6082]">الحالة</dt>
                    <dd>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLE[selected.status]}`}>
                        {STATUS_LABEL[selected.status]}
                      </span>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#5E6082]">القسم</dt>
                    <dd>{selected.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#5E6082]">عدد الرسائل</dt>
                    <dd className="tabular-nums">{selected.messages.length}</dd>
                  </div>
                </dl>
              </>
            ) : (
              <p className="text-sm text-[#5E6082]">لا توجد تذكرة محددة.</p>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
