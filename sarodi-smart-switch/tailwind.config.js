/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Latin glyphs render in Inter / Mackinac; Persian glyphs fall back to Vazirmatn per-glyph.
        sans: ['Inter', 'Vazirmatn', 'sans-serif'],
        serif: ['P22 Mackinac W01 Book', 'Vazirmatn', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#191919',
        mist: '#F4F3F3',
        sarodi: '#00728B',
        imenab: '#15A799',
        led: '#3DDBC8',
        panel: '#0B0C0D',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.4)', opacity: '0.55' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
