import { MODELS, SPECS } from '../data/content';

export default function Specs() {
  return (
    <section id="specs" className="bg-[#F4F3F3] scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-24 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium ltr text-right">
          Technical specifications
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-snug text-[#191919]">
          مشخصات فنی
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Shared specs */}
          <dl className="divide-y divide-gray-300/70 border-y border-gray-300/70 self-start">
            {SPECS.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-6 py-4">
                <dt className="text-sm text-[#191919]/60">{s.label}</dt>
                <dd className="ltr text-sm font-medium text-[#191919]">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* Models — terminal blocks mirror the label on the back of each switch */}
          <div className="bg-white border border-gray-200">
            <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[7rem_1fr_auto] gap-x-6 border-b border-gray-200 px-5 sm:px-6 py-3 text-[11px] text-[#191919]/45">
              <span>مدل</span>
              <span>نوع</span>
              <span className="hidden sm:block">ترمینال‌ها</span>
            </div>
            <ul className="divide-y divide-gray-100">
              {MODELS.map((m) => (
                <li
                  key={m.code}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[7rem_1fr_auto] items-center gap-x-6 gap-y-3 px-5 sm:px-6 py-4"
                >
                  <span className="ltr text-xs font-medium tracking-wider text-[#191919]">{m.code}</span>
                  <span className="text-sm text-[#191919]/75">{m.name}</span>
                  <span className="col-span-2 sm:col-span-1 flex w-fit justify-self-start sm:justify-self-end ltr border border-[#191919]/70 rounded-[3px] overflow-hidden">
                    {m.terminals.map((t) => (
                      <span
                        key={t}
                        className="min-w-[2.1rem] border-r last:border-r-0 border-[#191919]/70 px-1.5 py-1 text-center text-[11px] text-[#191919]"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
