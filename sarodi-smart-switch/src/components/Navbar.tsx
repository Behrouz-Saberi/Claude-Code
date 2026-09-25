import { useEffect, useState } from 'react';
import SarodiLogo from './SarodiLogo';

const LINKS = [
  { label: 'محصولات', href: '#product' },
  { label: 'ویژگی‌ها', href: '#features' },
  { label: 'مشخصات فنی', href: '#specs' },
  { label: 'تماس', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        // Transparent over the hero video; a quiet glass bar once the page scrolls past it.
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/70' : 'border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 md:px-14 py-4 sm:py-5">
        <a href="#top" className="flex items-center gap-2.5 text-[#191919]" aria-label="سارودی — صفحهٔ اصلی">
          <SarodiLogo className="h-5 w-auto sm:h-6" />
          <span className="hidden sm:inline text-[11px] font-medium tracking-[0.2em] uppercase text-[#191919]/50 ltr">
            Smart Switch
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          استعلام قیمت
        </a>
      </nav>
    </header>
  );
}
