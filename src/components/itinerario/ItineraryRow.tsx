import type { ItineraryItem } from '../../types/wedding.types';
import { useReveal } from '../../hooks/useReveal';

interface ItineraryRowProps {
  item: ItineraryItem;
  isLast: boolean;
}

export function ItineraryRow({ item, isLast }: ItineraryRowProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal mb-1.5 flex ${isVisible ? 'reveal-visible' : ''}`}>
      <div className="w-[58px] flex-shrink-0 pt-0.5 pr-3.5 text-right font-cinzel text-[14.5px] font-semibold tracking-[0.02em] text-navy">
        {item.time}
      </div>
      <div className="relative flex w-5 flex-shrink-0 items-start justify-center">
        <span className="z-10 mt-1 h-[11px] w-[11px] rounded-full border-2 border-brass bg-parchment-soft" />
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[17px] bottom-[-14px] w-px -translate-x-1/2 bg-[repeating-linear-gradient(180deg,#A9863E_0px_5px,transparent_5px_9px)]"
          />
        )}
      </div>
      <div className="pb-[22px] pl-4 pt-0.5">
        <div className="font-stamp text-[10.5px] uppercase tracking-[0.12em] text-cognac">{item.label}</div>
        <div className="mt-1 font-garamond text-[17px] italic text-ink">{item.event}</div>
      </div>
    </div>
  );
}
