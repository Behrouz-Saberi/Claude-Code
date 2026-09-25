import { ArrowRight } from 'lucide-react';
import SarodiLogo from './SarodiLogo';

const CHANNELS = [
  { label: 'تلفن فروش', value: '031 33 120', href: 'tel:+983133120' },
  { label: 'وب‌سایت', value: 'imenabco.com', href: 'https://imenabco.com' },
  { label: 'اینستاگرام سارودی', value: '@sarodi.co', href: 'https://instagram.com/sarodi.co' },
  { label: 'اینستاگرام ایمن‌آب', value: '@imenab_company', href: 'https://instagram.com/imenab_company' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-panel text-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-24 md:pt-32 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium ltr text-right">
              Get in touch
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.25]">
              خانهٔ بعدی را
              <br />
              هوشمند شروع کنید.
            </h2>
            <p className="mt-6 max-w-md text-sm md:text-[15px] text-white/55 leading-loose">
              برای استعلام قیمت، خرید عمده، پروژه‌های ساختمانی و همکاری با نمایندگان فروش با ما در تماس باشید.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+983133120"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#191919] text-sm font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                تماس با واحد فروش
                <ArrowRight className="w-4 h-4 rotate-180 text-gray-500 group-hover:text-gray-800 group-hover:-translate-x-0.5 transition-all duration-200" />
              </a>
              <a
                href="https://imenabco.com"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/15 text-white/85 text-sm rounded-lg hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                فروشگاه ایمن‌آب
              </a>
            </div>
          </div>

          <div className="self-end">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {CHANNELS.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200"
                  >
                    <span className="text-sm text-white/45">{c.label}</span>
                    <span className="ltr text-sm text-white/85 group-hover:text-led transition-colors duration-200">
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-6 not-italic text-sm text-white/45 leading-loose">
              اصفهان، شهرک برق و الکترونیک، بلوار برق — شرکت ایمن‌آب
              <br />
              کد پستی: <span className="ltr">8418148699</span>
            </address>
          </div>
        </div>

        <div className="mt-24 flex flex-col-reverse gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">© ۱۴۰۵ ایمن‌آب اسپادانا — تمامی حقوق محفوظ است.</p>
          <SarodiLogo withEndorsement className="h-9 w-auto text-white/80" title="Sarodi by imenab" />
        </div>
      </div>
    </section>
  );
}
