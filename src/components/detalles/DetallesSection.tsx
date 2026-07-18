import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { PassportStamp } from '../decor/PassportStamp';
import { PlaneIcon } from '../decor/PlaneIcon';
import { DressCode } from './DressCode';

export function DetallesSection() {
  const boarding = useReveal<HTMLDivElement>();
  const { venue } = WEDDING_CONFIG;

  return (
    <section className="relative bg-gradient-to-b from-navy to-navy-deep px-6 py-24 text-center text-parchment">
      <PassportStamp
        top="Abordaje"
        middle="OK"
        bottom="Confirmado"
        color="light"
        position="bottom-9 left-[5%]"
        rotation="rotate(12deg)"
      />

      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">
        Cuándo y dónde
      </span>
      <h2 className="my-4 font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic">Pase de abordar</h2>

      <div
        ref={boarding.ref}
        className={`reveal mx-auto flex max-w-[520px] flex-col overflow-hidden rounded border border-brass-light/40 bg-parchment/5 text-left sm:flex-row ${
          boarding.isVisible ? 'reveal-visible' : ''
        }`}
      >
        <div className="flex-1 p-7">
          <div className="mb-[3px] font-stamp text-[9.5px] uppercase tracking-[0.16em] text-brass-light">Destino</div>
          <div className="mb-1.5 font-display text-[22px] italic">{venue.name}</div>
          <div className="mb-[3px] font-stamp text-[9.5px] uppercase tracking-[0.16em] text-brass-light">Dirección</div>
          <div className="mb-4 text-[15px] leading-[1.5]">
            {venue.address}
            <br />
            {venue.addressLine2}
          </div>
          <div className="mb-[3px] font-stamp text-[9.5px] uppercase tracking-[0.16em] text-brass-light">Embarque</div>
          <div className="mb-4 text-[15px] leading-[1.5]">{venue.boardingTime}</div>
          <a
            className="mt-1.5 inline-block rounded-sm border border-brass-light px-[26px] py-3 font-stamp text-[11px] uppercase tracking-[0.16em] text-parchment transition-colors duration-300 hover:bg-brass-light hover:text-navy-deep"
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en el mapa
          </a>
        </div>
        <div className="flex items-center justify-center border-t-2 border-dashed border-brass-light/40 bg-brass-light/[0.08] p-5 sm:w-[110px] sm:border-l-2 sm:border-t-0">
          <PlaneIcon className="h-[34px] w-[34px] rotate-90 fill-brass-light" />
        </div>
      </div>

      <DressCode />
    </section>
  );
}
