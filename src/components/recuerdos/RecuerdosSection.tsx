import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';

export function RecuerdosSection() {
  const { ref, isVisible } = useReveal<HTMLAnchorElement>();

  return (
    <section className="relative bg-ivory px-6 py-24 text-center">
      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">
        Recuerdos
      </span>
      <svg viewBox="0 0 48 48" className="mx-auto mb-[18px] mt-4 h-[52px] w-[52px] fill-none stroke-cognac stroke-[1.4]" aria-hidden="true">
        <rect x="5" y="14" width="38" height="26" rx="3" strokeLinejoin="round" />
        <path d="M17 14 L20 8 H28 L31 14" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="24" cy="27" r="8" />
        <circle cx="36" cy="19" r="1.2" fill="#BE7A3D" stroke="none" />
      </svg>
      <h2 className="mb-[18px] font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic text-navy">
        Comparte tus fotos
      </h2>
      <p className="mx-auto mb-8 max-w-[480px] text-base leading-[1.8]">{WEDDING_CONFIG.recuerdos.text}</p>
      <a
        ref={ref}
        className={`reveal inline-block rounded-sm border border-navy px-9 py-4 font-stamp text-[11.5px] uppercase tracking-[0.18em] text-navy transition-colors duration-300 hover:bg-navy hover:text-parchment ${
          isVisible ? 'reveal-visible' : ''
        }`}
        href={WEDDING_CONFIG.recuerdos.folderUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir a la carpeta compartida
      </a>
    </section>
  );
}
