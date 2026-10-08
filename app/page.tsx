const features = [
  {
    number: "01",
    title: "نظام تذاكر متكامل",
    description:
      "أنشئ تذاكر الدعم ونظّمها وتابع حالتها من مكان واحد، بدون فوضى داخل سيرفرك.",
    icon: "✦",
  },
  {
    number: "02",
    title: "تحكم كامل بالفريق",
    description:
      "حدد صلاحيات فريق الدعم، وزّع المهام، وخلي كل شخص يعرف شنو عليه.",
    icon: "◈",
  },
  {
    number: "03",
    title: "إحصائيات واضحة",
    description:
      "راقب التذاكر المفتوحة والمغلقة وأداء فريقك من خلال لوحة تحكم بسيطة.",
    icon: "⌁",
  },
  {
    number: "04",
    title: "أمان وصلاحيات",
    description:
      "تحكم دقيق بالصلاحيات والإعدادات حتى يبقى نظام الدعم تحت سيطرتك.",
    icon: "◇",
  },
];

const tickets = [
  ["#104", "مشكلة في الدخول", "مفتوح"],
  ["#103", "استفسار عن السيرفر", "مفتوح"],
  ["#102", "طلب مساعدة", "مغلق"],
];

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#05060a] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[160px]" />
        <div className="absolute right-[-250px] top-[600px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute left-[-250px] top-[1200px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05060a]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-indigo-400/20 bg-indigo-500/10">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl transition group-hover:bg-indigo-500/40" />
              <span className="relative text-xl font-black text-indigo-300">
                V
              </span>
            </div>

            <div>
              <div className="text-[17px] font-bold tracking-tight">
                Veyron
              </div>

              <div className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                Ticket Management
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-[13px] font-medium text-zinc-500 md:flex">
            <a
              href="#features"
              className="transition hover:text-white"
            >
              المميزات
            </a>

            <a
              href="#how"
              className="transition hover:text-white"
            >
              كيف يعمل؟
            </a>

            <a
              href="#faq"
              className="transition hover:text-white"
            >
              الأسئلة الشائعة
            </a>
          </nav>

          <a
            href="/login"
            className="group relative overflow-hidden rounded-xl border border-indigo-400/20 bg-indigo-500 px-5 py-3 text-xs font-bold shadow-[0_0_30px_rgba(99,102,241,.18)] transition hover:bg-indigo-400"
          >
            <span className="relative z-10">
              إضافة إلى Discord
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-0" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1240px] px-5 pb-28 pt-24 sm:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-indigo-500/[0.07] px-4 py-2 text-[11px] font-medium text-indigo-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              نظام إدارة تذاكر Discord
            </div>

            <h1 className="max-w-[700px] text-[48px] font-black leading-[1.08] tracking-[-0.04em] sm:text-[64px] lg:text-[72px]">
              دعم سيرفرك.
              <br />

              <span className="bg-gradient-to-l from-white via-indigo-200 to-indigo-500 bg-clip-text text-transparent">
                بطريقة أذكى.
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-[15px] font-medium leading-8 text-zinc-500 sm:text-[16px]">
              Veyron يحوّل نظام الدعم في Discord إلى تجربة منظمة
              وسريعة واحترافية، حتى يكون فريقك قادرًا على التركيز
              على حل المشاكل بدل البحث بينها.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login"
                className="group flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-zinc-200"
              >
                إضافة إلى Discord
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              <a
                href="#features"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                استكشف Veyron
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-[11px] text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                جاهز للاستخدام
              </div>

              <div className="h-3 w-px bg-white/10" />

              <div>مصمم لـ Discord</div>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-indigo-600/10 blur-[100px]" />

            <div className="relative rotate-[1deg] overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0c12] shadow-[0_40px_100px_rgba(0,0,0,.55)] transition duration-500 hover:rotate-0">
              {/* Window top */}
              <div className="flex h-12 items-center border-b border-white/[0.06] bg-[#090b10] px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <div className="mx-auto rounded-md border border-white/[0.05] bg-white/[0.025] px-8 py-1.5 text-[9px] text-zinc-600">
                  dashboard.veyron.app
                </div>
              </div>

              <div className="flex min-h-[430px]">
                {/* Sidebar */}
                <aside className="hidden w-[145px] border-l border-white/[0.06] bg-[#080a0f] p-4 sm:block">
                  <div className="mb-9 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-black text-indigo-300">
                      V
                    </div>

                    <span className="text-[10px] font-bold">
                      Veyron
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-zinc-600">
                    <div className="rounded-lg border border-white/[0.05] bg-white/[0.06] px-3 py-2.5 text-white">
                      الرئيسية
                    </div>

                    <div className="rounded-lg px-3 py-2.5 transition hover:bg-white/[0.03]">
                      التذاكر
                    </div>

                    <div className="rounded-lg px-3 py-2.5">
                      الأعضاء
                    </div>

                    <div className="rounded-lg px-3 py-2.5">
                      الإحصائيات
                    </div>

                    <div className="rounded-lg px-3 py-2.5">
                      الإعدادات
                    </div>
                  </div>

                  <div className="mt-16 border-t border-white/[0.05] pt-4">
                    <div className="mb-2 text-[8px] uppercase tracking-widest text-zinc-700">
                      Server
                    </div>

                    <div className="rounded-lg bg-indigo-500/[0.07] px-3 py-2 text-[9px] text-indigo-300">
                      My Discord Server
                    </div>
                  </div>
                </aside>

                {/* Content */}
                <div className="min-w-0 flex-1 p-5 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold">
                        الرئيسية
                      </div>

                      <div className="mt-1 text-[9px] text-zinc-600">
                        نظرة عامة على نظام الدعم
                      </div>
                    </div>

                    <div className="hidden rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-[9px] text-zinc-500 sm:block">
                      آخر تحديث: الآن
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-7 grid grid-cols-3 gap-2.5">
                    {[
                      ["12", "تذاكر مفتوحة", "↑ 8%"],
                      ["348", "تذاكر مغلقة", "↑ 14%"],
                      ["7", "تذاكر اليوم", "↑ 3%"],
                    ].map(([number, label, growth]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.018] p-3.5"
                      >
                        <div className="flex items-center justify-between">
                          <strong className="text-lg font-bold">
                            {number}
                          </strong>

                          <span className="text-[7px] text-emerald-400">
                            {growth}
                          </span>
                        </div>

                        <p className="mt-2 text-[8px] text-zinc-600">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tickets */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.06]">
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3.5">
                      <span className="text-[10px] font-bold">
                        آخر التذاكر
                      </span>

                      <span className="text-[8px] text-indigo-400">
                        عرض الكل
                      </span>
                    </div>

                    {tickets.map(([id, title, status]) => (
                      <div
                        key={id}
                        className="grid grid-cols-[45px_1fr_50px] items-center border-b border-white/[0.035] px-4 py-3 last:border-0"
                      >
                        <span className="text-[8px] text-zinc-700">
                          {id}
                        </span>

                        <span className="text-[9px] font-medium text-zinc-300">
                          {title}
                        </span>

                        <span
                          className={`text-[8px] font-semibold ${
                            status === "مفتوح"
                              ? "text-emerald-400"
                              : "text-zinc-600"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini chart */}
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.012] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold">
                        نشاط الدعم
                      </span>

                      <span className="text-[8px] text-zinc-700">
                        آخر 7 أيام
                      </span>
                    </div>

                    <div className="mt-4 flex h-16 items-end gap-2">
                      {[35, 52, 42, 72, 58, 84, 68, 94, 76, 100].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-600/20 to-indigo-400/80"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative border-t border-white/[0.06] py-28"
      >
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-8 bg-indigo-400" />
              المميزات
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              كل الأدوات التي يحتاجها
              <br />
              <span className="text-zinc-600">
                فريق الدعم.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-600">
              Veyron مصمم حتى يخلي إدارة التذاكر واضحة وسريعة،
              من أول رسالة إلى إغلاق المشكلة.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.03]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/[0.08] text-indigo-300">
                      {feature.icon}
                    </div>

                    <span className="text-[9px] font-bold tracking-widest text-zinc-700">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[15px] font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-7 text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section
        id="how"
        className="border-t border-white/[0.06] py-28"
      >
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090b10]">
            <div className="grid lg:grid-cols-[.7fr_1.3fr]">
              <div className="border-b border-white/[0.06] p-8 sm:p-12 lg:border-b-0 lg:border-l">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                  كيف يعمل؟
                </div>

                <h2 className="mt-5 text-4xl font-black leading-tight">
                  من سيرفرك
                  <br />
                  إلى دعم
                  <br />
                  <span className="text-zinc-600">
                    احترافي.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-8 text-zinc-600">
                  ما تحتاج نظام معقد. Veyron يخليك تبدأ خلال دقائق
                  وتخلي فريقك يركز على المستخدمين.
                </p>
              </div>

              <div className="p-8 sm:p-12">
                <div className="space-y-10">
                  {[
                    [
                      "01",
                      "اربط سيرفرك",
                      "أضف Veyron إلى سيرفر Discord الخاص بك وابدأ الإعداد.",
                    ],
                    [
                      "02",
                      "خصص النظام",
                      "حدد القنوات والتصنيفات والصلاحيات المناسبة لفريقك.",
                    ],
                    [
                      "03",
                      "ابدأ الدعم",
                      "استقبل التذاكر، تابعها، وحل المشاكل من خلال نظام منظم.",
                    ],
                  ].map(([number, title, description]) => (
                    <div
                      key={number}
                      className="flex gap-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/[0.07] text-[10px] font-bold text-indigo-300">
                        {number}
                      </div>

                      <div>
                        <h3 className="text-sm font-bold">
                          {title}
                        </h3>

                        <p className="mt-2 max-w-lg text-[11px] leading-7 text-zinc-600">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/[0.06] py-32">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[900px] px-5 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-2xl font-black text-indigo-300 shadow-[0_0_50px_rgba(99,102,241,.12)]">
            V
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl">
            جاهز تخلي الدعم
            <br />
            <span className="bg-gradient-to-l from-white to-indigo-400 bg-clip-text text-transparent">
              أفضل؟
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-zinc-600">
            ابدأ باستخدام Veyron وخلي إدارة الدعم في سيرفرك
            أسرع، أوضح، وأكثر احترافية.
          </p>

          <a
            href="/login"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-zinc-200"
          >
            إضافة إلى Discord
            <span>←</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="faq"
        className="border-t border-white/[0.06]"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-black text-indigo-300">
              V
            </div>

            <div>
              <div className="text-xs font-bold">
                Veyron
              </div>

              <div className="mt-0.5 text-[8px] text-zinc-700">
                Discord Ticket Management
              </div>
            </div>
          </div>

          <div className="text-[10px] text-zinc-700">
            © 2026 Veyron. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
              }
