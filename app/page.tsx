export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#07090d] text-white"
    >
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5">
          <a href="/" className="flex items-center gap-3">
            <div className="text-3xl font-black text-indigo-400">V</div>

            <span className="text-xl font-semibold tracking-tight">
              Veyron
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs text-zinc-400 md:flex">
            <a href="#features" className="hover:text-white">
              المميزات
            </a>

            <a href="#how" className="hover:text-white">
              كيف يعمل؟
            </a>

            <a href="#faq" className="hover:text-white">
              الأسئلة الشائعة
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-lg bg-[#5865f2] px-5 py-3 text-xs font-semibold transition hover:bg-[#6875ff]"
          >
            إضافة إلى Discord
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1180px] px-5 pb-24 pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">
              Discord Ticket Management
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              نظام تذاكر Discord
              <br />
              بشكل{" "}
              <span className="bg-gradient-to-l from-indigo-300 to-violet-500 bg-clip-text text-transparent">
                احترافي.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-500">
              إدارة تذاكر الدعم، تنظيم فريقك، ومتابعة طلبات أعضاء سيرفرك
              من خلال تجربة بسيطة وسريعة مع Veyron.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="/login"
                className="rounded-xl bg-[#5865f2] px-6 py-4 text-sm font-semibold transition hover:bg-[#6875ff]"
              >
                إضافة إلى Discord
              </a>

              <a
                href="#features"
                className="rounded-xl border border-white/10 px-6 py-4 text-sm text-zinc-300 transition hover:bg-white/[0.04]"
              >
                استكشاف المميزات
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f15] shadow-2xl">
              <div className="flex h-11 items-center border-b border-white/[0.06] px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="mx-auto text-[10px] text-zinc-600">
                  Veyron Dashboard
                </span>
              </div>

              <div className="flex min-h-[370px]">
                <aside className="hidden w-36 border-l border-white/[0.06] bg-[#090c12] p-4 sm:block">
                  <div className="mb-8 text-lg font-black text-indigo-400">
                    V
                  </div>

                  <div className="space-y-2 text-[10px] text-zinc-500">
                    <div className="rounded-lg bg-white/[0.06] px-3 py-2 text-white">
                      الرئيسية
                    </div>

                    <div className="px-3 py-2">
                      التذاكر
                    </div>

                    <div className="px-3 py-2">
                      الأعضاء
                    </div>

                    <div className="px-3 py-2">
                      الإعدادات
                    </div>
                  </div>
                </aside>

                <div className="flex-1 p-5">
                  <div className="mb-6">
                    <h2 className="text-sm font-semibold">
                      الرئيسية
                    </h2>

                    <p className="mt-1 text-[9px] text-zinc-600">
                      نظرة عامة على نظام التذاكر
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <strong className="text-xl">12</strong>
                      <p className="mt-2 text-[9px] text-zinc-600">
                        تذاكر مفتوحة
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <strong className="text-xl">348</strong>
                      <p className="mt-2 text-[9px] text-zinc-600">
                        تذاكر مغلقة
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <strong className="text-xl">7</strong>
                      <p className="mt-2 text-[9px] text-zinc-600">
                        تذاكر اليوم
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/[0.07]">
                    <div className="border-b border-white/[0.06] p-4 text-xs font-semibold">
                      آخر التذاكر
                    </div>

                    {[
                      ["#104", "مشكلة في الدخول", "مفتوح"],
                      ["#103", "استفسار عن السيرفر", "مفتوح"],
                      ["#102", "طلب مساعدة", "مغلق"],
                      ["#101", "اقتراح جديد", "مغلق"],
                    ].map(([id, title, status]) => (
                      <div
                        key={id}
                        className="grid grid-cols-[50px_1fr_60px] items-center border-b border-white/[0.04] px-4 py-3 text-[9px]"
                      >
                        <span className="text-zinc-600">{id}</span>

                        <span className="text-zinc-300">
                          {title}
                        </span>

                        <span
                          className={
                            status === "مفتوح"
                              ? "text-emerald-400"
                              : "text-indigo-400"
                          }
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-white/[0.06] py-24"
      >
        <div className="mx-auto max-w-[1080px] px-5">
          <div className="mb-12">
            <span className="text-xs text-indigo-400">
              المميزات
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              كل شيء لإدارة الدعم
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
              أدوات بسيطة وقوية تساعد فريقك على تنظيم جميع طلبات الدعم.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["◈", "تذاكر ذكية", "تنظيم سريع لجميع طلبات الدعم."],
              ["⚙", "إعدادات مرنة", "خصص نظام التذاكر كما تريد."],
              ["⌁", "إحصائيات", "تابع أداء فريق الدعم."],
              ["◇", "أمان", "نظام صلاحيات متكامل."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6"
              >
                <div className="mb-5 text-2xl text-indigo-400">
                  {icon}
                </div>

                <h3 className="text-sm font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="border-t border-white/[0.06] py-24"
      >
        <div className="mx-auto max-w-[1080px] px-5">
          <div className="rounded-3xl border border-white/10 bg-[#090c12] p-8 sm:p-12">
            <span className="text-xs text-indigo-400">
              كيف يعمل؟
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              ثلاث خطوات فقط
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                ["01", "اربط سيرفرك", "أضف Veyron إلى سيرفر Discord."],
                ["02", "خصص الإعدادات", "حدد القنوات والتصنيفات."],
                ["03", "ابدأ الدعم", "استقبل التذاكر وأدر فريقك."],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <div className="text-xs text-indigo-400">
                    {number}
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-indigo-400/20 bg-indigo-500/10 text-4xl font-black text-indigo-400">
            V
          </div>

          <h2 className="mt-8 text-4xl font-bold">
            ابدأ مع Veyron
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-600">
            اجعل إدارة الدعم في سيرفرك أبسط وأكثر احترافية.
          </p>

          <a
            href="/login"
            className="mt-8 inline-block rounded-xl bg-[#5865f2] px-7 py-4 text-sm font-semibold hover:bg-[#6875ff]"
          >
            إضافة إلى Discord
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-[1080px] flex-col justify-between gap-4 px-5 text-xs text-zinc-600 sm:flex-row">
          <span>© 2026 Veyron</span>

          <span>
            Discord Ticket Management
          </span>
        </div>
      </footer>
    </main>
  );
                        }
