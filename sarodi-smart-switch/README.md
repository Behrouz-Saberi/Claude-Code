# Sarodi Smart Switch — Landing Page

Redesign of `imenabco.com/smart-switch` for the Sarodi LXSW smart-switch series (RTL / Persian).

**Stack:** React + TypeScript + Vite + Tailwind CSS 3 + Lucide React (`ArrowRight` only).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Structure

| File | Role |
| --- | --- |
| `src/components/BoomerangVideoBg.tsx` | Hero background: plays the CloudFront video once, captures frames (≤960px, `requestVideoFrameCallback` → rAF fallback, deduped by `currentTime`), then ping-pongs them on a canvas at 30fps. Falls back to native loop if capture fails. |
| `src/components/Hero.tsx` | Full-viewport hero + bottom “Why Sarodi?” panel. |
| `src/components/SwitchPanel.tsx` | Interactive black-glass touch panel drawn from the real icon artwork in the brand PDF. |
| `src/components/ProductShowcase.tsx` | Model selector (LXSW101–106) + live channel console synced with the panel. |
| `src/data/icons.ts` | Vector paths auto-extracted from the brand PDFs (wordmark + panel icons). |
| `src/data/content.ts` | Models, channels, terminals and shared specs (from product labels). |

## Notes

- Persian glyphs fall back per-glyph to **Vazirmatn**; Latin text keeps Inter / P22 Mackinac.
- On phones the frame capture width is capped at 540px to keep memory reasonable.
- Address text (Persian) and phone link are taken from the brand PDF — verify before going live.
