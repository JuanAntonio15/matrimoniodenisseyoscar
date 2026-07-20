import { ITINERARY, WEDDING_CONFIG } from '../../config/wedding.config';
import { PassportStamp } from '../decor/PassportStamp';
import { ItineraryRow } from './ItineraryRow';

export function Itinerario() {
  return (
    <section
      className="relative px-6 py-24 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 15% 20%, rgba(190,122,61,.10), transparent 45%), radial-gradient(ellipse at 85% 75%, rgba(58,42,29,.08), transparent 45%)',
        backgroundColor: '#F1E4C0',
      }}
    >
      <PassportStamp
        top="Ruta del"
        middle="Día"
        bottom="27.11.26"
        color="brass"
        position="top-10 right-[6%]"
        rotation="rotate(10deg)"
      />

      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">Mood Viaje</span>
      <h2 className="my-4 mb-12 font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic text-navy">
        {WEDDING_CONFIG.itineraryTitle}
      </h2>

      <div className="mx-auto max-w-[400px] text-left">
        {ITINERARY.map((item, index) => (
          <ItineraryRow key={item.time} item={item} isLast={index === ITINERARY.length - 1} />
        ))}
      </div>
    </section>
  );
}
