import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { PassportStamp } from '../decor/PassportStamp';

export function RsvpSection() {
  const { ref, isVisible } = useReveal<HTMLAnchorElement>();

  return (
    <section className="relative bg-ivory px-6 py-24 text-center">
      <PassportStamp
        top="Destino"
        middle="Juntos"
        bottom="Para siempre"
        color="brass"
        position="top-7 right-[6%]"
        rotation="rotate(9deg)"
      />

      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">
        Confirmación
      </span>
      <h2 className="my-4 font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic text-navy">
        ¿Nos acompañas en la ruta?
      </h2>
      <p className="mx-auto mb-9 max-w-[480px] font-amatic text-[32px] font-bold text-oxblood">
        {WEDDING_CONFIG.rsvpShout}
      </p>
      <a
        ref={ref}
        className={`reveal inline-block rounded-sm border border-navy bg-navy px-10 py-4 font-stamp text-[11.5px] uppercase tracking-[0.18em] text-parchment transition-colors duration-300 hover:bg-transparent hover:text-navy ${
          isVisible ? 'reveal-visible' : ''
        }`}
        href={WEDDING_CONFIG.rsvpFormUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Confirmar mi lugar
      </a>
    </section>
  );
}
