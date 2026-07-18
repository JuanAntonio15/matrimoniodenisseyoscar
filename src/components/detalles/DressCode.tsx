import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';

export function DressCode() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal mx-auto mt-10 flex max-w-[560px] flex-col items-center gap-4 rounded-md border border-brass-light/40 bg-parchment/[0.04] p-7 text-center sm:flex-row sm:gap-6 sm:p-[34px_32px] sm:text-left ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <svg viewBox="0 0 120 160" className="h-[104px] w-[78px] flex-shrink-0 fill-none stroke-brass-light stroke-[2.2]" aria-hidden="true">
        <path d="M42 12 L60 46" strokeLinecap="round" />
        <path d="M78 12 L60 46" strokeLinecap="round" />
        <path
          d="M46 40 C40 55 40 70 44 90 C40 105 34 122 30 141 C30 146 90 146 90 141 C86 122 80 105 76 90 C80 70 80 55 74 40 C68 47 52 47 46 40 Z"
          strokeLinejoin="round"
        />
        <path d="M50 92 C46 111 42 128 40 143" strokeLinecap="round" opacity=".7" />
        <path d="M60 92 L60 144" strokeLinecap="round" opacity=".7" />
        <path d="M70 92 C74 111 78 128 80 143" strokeLinecap="round" opacity=".7" />
        <path d="M20 88 L27 95 L20 102 L13 95 Z" strokeLinejoin="round" />
        <path d="M98 116 L104 121 L98 126 L92 121 Z" strokeLinejoin="round" />
      </svg>
      <div>
        <div className="mb-2 font-stamp text-[13px] uppercase tracking-[0.18em] text-brass-light">
          {WEDDING_CONFIG.dressCode.title}
        </div>
        <div className="font-display text-[21px] italic leading-[1.5]">{WEDDING_CONFIG.dressCode.text}</div>
      </div>
    </div>
  );
}
