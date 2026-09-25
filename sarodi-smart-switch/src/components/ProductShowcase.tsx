import { useState } from 'react';
import { MODELS, toFa } from '../data/content';
import type { ModelKey, SwitchModel } from '../data/content';
import SwitchPanel from './SwitchPanel';

const initialState = (): Record<ModelKey, boolean[]> =>
  Object.fromEntries(
    MODELS.map((m) => [m.key, m.key === 'g3' ? [false, true, true] : m.channels.map(() => false)]),
  ) as Record<ModelKey, boolean[]>;

function nextState(model: SwitchModel, current: boolean[], i: number): boolean[] {
  const next = [...current];
  const turningOn = !current[i];
  if (turningOn && model.exclusive?.includes(i)) {
    model.exclusive.forEach((j) => (next[j] = false));
  }
  next[i] = turningOn;
  return next;
}

export default function ProductShowcase() {
  const [active, setActive] = useState<ModelKey>('g3');
  const [states, setStates] = useState(initialState);
  const model = MODELS.find((m) => m.key === active)!;
  const state = states[active];

  const toggle = (i: number) => setStates((s) => ({ ...s, [active]: nextState(model, s[active], i) }));

  return (
    <section id="product" className="relative overflow-hidden bg-panel text-white scroll-mt-16">
      {/* Blueprint grid, fading toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium ltr text-right">
              Interactive demo — LXSW Series
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-snug">
              لمس کنید؛ درست مثل
              <br className="hidden sm:block" /> روی دیوار خانه.
            </h2>
          </div>
          <p className="max-w-sm text-sm md:text-[15px] text-white/55 leading-loose">
            آیکن‌های روی پنل را لمس کنید. همین تجربه را روی دیوار و در اپلیکیشن گوشی خواهید داشت.
          </p>
        </div>

        {/* Model selector */}
        <div
          role="tablist"
          aria-label="انتخاب مدل"
          className="mt-12 md:mt-16 flex gap-2 overflow-x-auto pb-1 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none]"
        >
          {MODELS.map((m) => {
            const selected = m.key === active;
            return (
              <button
                key={m.key}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(m.key)}
                className={`shrink-0 rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 ${
                  selected
                    ? 'border-white bg-white text-[#191919] font-medium'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
                }`}
              >
                {m.short}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[420px] lg:max-w-[460px]">
            <SwitchPanel model={model} state={state} onToggle={toggle} />
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-6">
              <h3 className="text-2xl md:text-3xl font-light">{model.name}</h3>
              <span className="ltr text-xs tracking-[0.2em] text-white/40">{model.code}</span>
            </div>
            <p className="mt-6 text-sm md:text-[15px] text-white/60 leading-loose">{model.description}</p>

            {/* Channel console — mirrors the panel state */}
            <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]" aria-live="polite">
              {model.channels.map((ch, i) => {
                const on = !!state[i];
                return (
                  <li key={`${model.key}-${i}`}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-right transition-colors duration-200 hover:bg-white/[0.02]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="ltr w-14 text-left text-[11px] tracking-[0.15em] text-white/35">
                          {ch.terminal}
                        </span>
                        <span className="text-sm md:text-base text-white/85">{ch.label}</span>
                      </span>
                      <span
                        className={`flex items-center gap-2 text-xs transition-colors duration-200 ${
                          on ? 'text-led' : 'text-white/35'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                            on ? 'bg-led shadow-[0_0_10px_2px_rgba(61,219,200,0.6)]' : 'bg-white/20'
                          }`}
                        />
                        {model.key === 'curtain' ? (on ? 'فعال' : '—') : on ? 'روشن' : 'خاموش'}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/40">
              <span>
                ترمینال‌ها:{' '}
                <span className="ltr text-white/70 tracking-wider">{model.terminals.join('  ·  ')}</span>
              </span>
              <span>
                توان: <span className="ltr text-white/70">2200W / gang</span>
              </span>
              <span>
                کانال‌ها: <span className="text-white/70">{toFa(model.channels.length)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
