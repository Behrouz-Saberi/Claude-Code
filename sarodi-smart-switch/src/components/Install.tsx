const STEPS = [
  {
    n: '۱',
    title: 'سیم‌کشی',
    body: 'فاز (L)، نول (N) و خروجی‌ها را طبق برچسب پشت کلید متصل کنید. نصب توسط برق‌کار مجاز توصیه می‌شود.',
  },
  {
    n: '۲',
    title: 'اتصال به Wi‑Fi',
    body: 'کد QR روی برچسب را با اپلیکیشن اسکن کنید و کلید را به شبکهٔ ۲٫۴ گیگاهرتز خانه وصل کنید.',
  },
  {
    n: '۳',
    title: 'کنترل',
    body: 'هر پل را نام‌گذاری کنید؛ حالا از روی دیوار یا از روی گوشی، همه‌چیز در دست شماست.',
  },
];

export default function Install() {
  return (
    <section id="install" className="bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium ltr text-right">
          Setup in three steps
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-snug text-[#191919]">
          از جعبه تا دیوار، در سه قدم.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s) => (
            <li key={s.n} className="relative border-t border-[#191919] pt-6">
              <span className="font-serif text-5xl font-extralight text-[#191919]/20">{s.n}</span>
              <h3 className="mt-4 text-lg font-medium text-[#191919]">{s.title}</h3>
              <p className="mt-3 text-sm text-[#191919]/65 leading-loose">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 inline-flex items-center gap-3 bg-[#F4F3F3] px-4 py-3 text-xs sm:text-sm text-[#191919]/70">
          <span className="h-1.5 w-1.5 rounded-full bg-sarodi" />
          <span>
            این کلید برای کارکرد به سیم نول (<span className="ltr">N</span>) در قوطی کلید نیاز دارد.
          </span>
        </p>
      </div>
    </section>
  );
}
