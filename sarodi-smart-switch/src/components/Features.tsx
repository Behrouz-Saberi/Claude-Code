const FEATURES = [
  {
    tag: 'Glass Touch',
    title: 'لمس روی شیشه',
    body: 'پنل تمام‌شیشه با آیکن‌های نورانی؛ بدون دکمهٔ مکانیکی، بدون لقی و ساییدگی، با تمیزکاری در یک حرکت.',
  },
  {
    tag: 'Wi‑Fi · 2.4GHz',
    title: 'اتصال مستقیم، بدون هاب',
    body: 'کلید مستقیماً به مودم خانه وصل می‌شود؛ نیازی به گیت‌وی یا تجهیزات جانبی نیست.',
  },
  {
    tag: 'QR Pairing',
    title: 'راه‌اندازی با یک اسکن',
    body: 'کد QR روی برچسب هر کلید را اسکن کنید تا به اپلیکیشن اضافه شود و از روی گوشی قابل کنترل باشد.',
  },
  {
    tag: '2200W / gang',
    title: 'توان بالا برای هر پل',
    body: 'تا ۲۲۰۰ وات برای هر کانال؛ مناسب لوستر، هالوژن و نورپردازی‌های پرمصرف.',
  },
  {
    tag: 'LXSW 101 — 106',
    title: 'شش مدل، یک زبان طراحی',
    body: 'از تک‌پل تا چهارپل، پرده و کولر؛ همه با ظاهری یکپارچه که کنار هم روی دیوار می‌نشینند.',
  },
  {
    tag: 'Made in Iran',
    title: 'ساخت ایران، پشتیبانی ایمن‌آب',
    body: 'تولید و خدمات پس از فروش توسط گروه ایمن‌آب اسپادانا در اصفهان.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium ltr text-right">
              Features
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-snug text-[#191919]">
              فناوری در پس‌زمینه،
              <br className="hidden sm:block" /> سادگی روی دیوار.
            </h2>
          </div>
          <p className="self-end text-sm md:text-[15px] text-[#191919]/70 leading-loose">
            سارودی هوشمندسازی را از ساده‌ترین نقطهٔ خانه شروع می‌کند: کلید برق. بدون تغییر عادت‌ها، فقط با
            کنترل بیشتر.
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid gap-px bg-gray-200 border-y border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="group relative bg-white py-8 sm:px-8"
            >
              <div className="flex items-center justify-between">
                <span className="ltr text-xs text-[#191919]/35">{String(i + 1).padStart(2, '0')}</span>
                <span className="ltr text-[11px] tracking-[0.15em] uppercase text-sarodi">{f.tag}</span>
              </div>
              <h3 className="mt-8 text-lg md:text-xl font-medium text-[#191919]">{f.title}</h3>
              <p className="mt-3 text-sm text-[#191919]/65 leading-loose">{f.body}</p>
              <span className="absolute bottom-0 right-0 h-px w-0 bg-[#191919] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
