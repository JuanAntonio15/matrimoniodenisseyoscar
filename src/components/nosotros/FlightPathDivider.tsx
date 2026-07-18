import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { PlaneIcon } from '../decor/PlaneIcon';

export function FlightPathDivider() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal mx-auto mt-[70px] flex max-w-[640px] items-center gap-3.5 px-5 ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <span className="whitespace-nowrap font-stamp text-[11px] tracking-[0.06em] text-brass">
        {WEDDING_CONFIG.flightPath.start}
      </span>
      <div className="relative h-px flex-1 bg-[repeating-linear-gradient(90deg,#A9863E_0px_6px,transparent_6px_12px)]">
        <PlaneIcon className="absolute -top-2 left-0 h-4 w-4 rotate-90 fill-cognac animate-flyacross [animation-duration:5s]" />
      </div>
      <span className="whitespace-nowrap font-stamp text-[11px] tracking-[0.06em] text-brass">
        {WEDDING_CONFIG.flightPath.end}
      </span>
    </div>
  );
}
