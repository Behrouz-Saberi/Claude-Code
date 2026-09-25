import { BY_IMENAB, SARODI_WORDMARK } from '../data/icons';

type Props = { className?: string; withEndorsement?: boolean; title?: string };

/** Sarodi wordmark, traced from the brand PDF. Inherits color via currentColor. */
export default function SarodiLogo({ className = '', withEndorsement = false, title = 'Sarodi' }: Props) {
  return (
    <svg
      viewBox={withEndorsement ? '250 128 350 106' : '250 128 350 67'}
      fill="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      {SARODI_WORDMARK.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {withEndorsement && BY_IMENAB.map((d, i) => <path key={`b${i}`} d={d} />)}
    </svg>
  );
}
