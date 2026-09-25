import { ArrowRight } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const PILLARS = [
  { n: '01', label: 'لمسی', href: '#product' },
  { n: '02', label: 'متصل', href: '#features' },
  { n: '03', label: 'ایمن', href: '#specs' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col items-center overflow-hidden h-[100svh] min-h-[720px]">
      <BoomerangVideoBg />

      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-[6.5rem] md:pt-32 px-4 sm:px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.2] text-[#191919] font-light">
          هوشمندی،
          <br />
          با یک لمس.
        </h1>

        <p className="max-w-sm sm:max-w-md mt-5 sm:mt-6 md:mt-8 text-sm md:text-base text-[#191919]/70 leading-loose">
          کلید هوشمند سارودی — پنل شیشه‌ای لمسی با اتصال مستقیم <span className="ltr">Wi‑Fi</span> برای کنترل
          روشنایی، پرده و کولر؛ از روی دیوار یا با گوشی.
        </p>

        <a
          href="#contact"
          className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          استعلام قیمت و خرید
        </a>
      </div>

      {/* Bottom info panel, flush with the fold */}
      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-0 shadow-sm">
          <div className="grid gap-6 sm:gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium ltr text-right">
                Why Sarodi?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-light leading-snug text-[#191919]">
                خانه‌ای که <br className="hidden sm:block" />
                به لمس تو پاسخ می‌دهد
              </h2>
            </div>
            <p className="hidden sm:block self-end text-sm md:text-[15px] text-[#191919]/70 leading-loose">
              طراحی‌شده برای ساختمان‌های امروز. پنل شیشه‌ای مینیمال، اتصال مستقیم به مودم خانه و کنترل کامل
              از روی گوشی — بدون هاب و بدون پیچیدگی.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

          <div className="mt-2 sm:mt-3 grid gap-2 sm:gap-3 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="group flex items-center justify-between bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 text-sm text-[#191919]"
              >
                <span>
                  <span className="text-[#191919]/40 ltr">{p.n}</span>
                  <span className="mx-2 text-[#191919]/30">/</span>
                  <span className="font-medium">{p.label}</span>
                </span>
                {/* RTL: arrow points left, nudges forward (left) on hover */}
                <ArrowRight className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-gray-700 group-hover:-translate-x-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
