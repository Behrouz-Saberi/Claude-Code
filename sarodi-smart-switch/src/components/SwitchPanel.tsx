import { useState } from 'react';
import { PANEL_ICONS, PANEL_SIZE, SARODI_WORDMARK } from '../data/icons';
import type { SwitchModel } from '../data/content';

type Props = {
  model: SwitchModel;
  state: boolean[];
  onToggle: (index: number) => void;
  className?: string;
};

const HIT_SIZE = 64; // touch target in panel units (~26% of the face)

/** Black glass touch panel rendered from the real Sarodi icon artwork. */
export default function SwitchPanel({ model, state, onToggle, className = '' }: Props) {
  const buttons = PANEL_ICONS[model.key];
  const [ripples, setRipples] = useState<Record<number, number>>({});
  const activeCount = state.filter(Boolean).length;

  const press = (i: number) => {
    setRipples((r) => ({ ...r, [i]: (r[i] ?? 0) + 1 }));
    onToggle(i);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Ambient LED spill on the wall — grows with the number of active channels. */}
      <div
        className="pointer-events-none absolute -inset-[18%] rounded-full bg-led blur-3xl transition-opacity duration-500"
        style={{ opacity: activeCount ? 0.1 + activeCount * 0.05 : 0 }}
        aria-hidden="true"
      />

      <div
        className="relative aspect-square w-full overflow-hidden rounded-[9%] border border-white/[0.07]"
        style={{
          background: 'linear-gradient(145deg, #1c1e21 0%, #0c0d0e 48%, #050506 100%)',
          boxShadow:
            '0 50px 100px -30px rgba(0,0,0,0.75), 0 20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Glass sheen */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(118deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 34%, rgba(255,255,255,0) 34.2%)',
          }}
          aria-hidden="true"
        />

        <svg viewBox={`0 0 ${PANEL_SIZE} ${PANEL_SIZE}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="led-halo">
              <stop offset="0%" stopColor="#3DDBC8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3DDBC8" stopOpacity="0" />
            </radialGradient>
            <filter id="led-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Vertical wordmark, top-right — as on the physical panel. */}
          <g
            transform="translate(224 56.7) rotate(-90) scale(0.1305) translate(-251 -129)"
            fill="#ffffff"
            fillOpacity="0.9"
          >
            {SARODI_WORDMARK.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          {buttons.map((b, i) => {
            const on = !!state[i];
            return (
              <g key={`${model.key}-${i}`}>
                <circle
                  cx={b.cx}
                  cy={b.cy}
                  r={26}
                  fill="url(#led-halo)"
                  style={{ opacity: on ? 1 : 0, transition: 'opacity 300ms ease' }}
                />
                <g
                  fill={on ? '#3DDBC8' : '#ffffff'}
                  fillOpacity={on ? 1 : 0.82}
                  filter={on ? 'url(#led-glow)' : undefined}
                  style={{ transition: 'fill 250ms ease, fill-opacity 250ms ease' }}
                >
                  {b.paths.map((d, j) => (
                    <path key={j} d={d} />
                  ))}
                </g>
              </g>
            );
          })}
        </svg>

        {buttons.map((b, i) => {
          const ch = model.channels[i];
          return (
            <button
              key={`${model.key}-hit-${i}`}
              type="button"
              aria-pressed={!!state[i]}
              aria-label={`${ch?.label ?? `کانال ${i + 1}`} — ${state[i] ? 'روشن' : 'خاموش'}`}
              onClick={() => press(i)}
              className="group absolute grid place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-led/70"
              style={{
                width: `${(HIT_SIZE / PANEL_SIZE) * 100}%`,
                height: `${(HIT_SIZE / PANEL_SIZE) * 100}%`,
                left: `${((b.cx - HIT_SIZE / 2) / PANEL_SIZE) * 100}%`,
                top: `${((b.cy - HIT_SIZE / 2) / PANEL_SIZE) * 100}%`,
              }}
            >
              <span className="absolute inset-[18%] rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/[0.04]" />
              {ripples[i] ? (
                <span
                  key={ripples[i]}
                  className="pointer-events-none absolute inset-[30%] rounded-full border border-led/70 animate-ripple"
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
