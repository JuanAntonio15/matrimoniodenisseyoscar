import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useCountdown } from '../../hooks/useCountdown';
import { useReveal } from '../../hooks/useReveal';
import { CompassIcon } from '../decor/CompassIcon';
import { Plaque } from './Plaque';

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_CONFIG.eventDate);
  const shout = useReveal<HTMLParagraphElement>();
  const plaques = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative overflow-hidden px-5 py-[76px] pb-[90px] text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 15% 20%, rgba(190,122,61,.10), transparent 45%), radial-gradient(ellipse at 85% 75%, rgba(58,42,29,.08), transparent 45%)',
        backgroundColor: '#F1E4C0',
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-5">
        <CompassIcon className="h-full w-full animate-spinGhost" />
      </div>

      <p
        ref={shout.ref}
        className={`reveal relative z-10 mx-auto mb-10 max-w-[640px] font-display text-[clamp(22px,4.4vw,32px)] font-bold italic leading-[1.35] text-navy ${
          shout.isVisible ? 'reveal-visible' : ''
        }`}
      >
        {WEDDING_CONFIG.countdownShout.prefix}
        <span className="text-oxblood">{WEDDING_CONFIG.countdownShout.highlight}</span>
        {WEDDING_CONFIG.countdownShout.suffix}
      </p>

      <div
        ref={plaques.ref}
        className={`reveal relative z-10 mt-10 flex flex-wrap justify-center gap-[clamp(4px,2.4vw,18px)] ${
          plaques.isVisible ? 'reveal-visible' : ''
        }`}
      >
        <Plaque value={days} label="días" />
        <span aria-hidden="true" className="flex items-center text-sm text-brass">
          ✦
        </span>
        <Plaque value={hours} label="horas" />
        <span aria-hidden="true" className="flex items-center text-sm text-brass">
          ✦
        </span>
        <Plaque value={minutes} label="min" />
        <span aria-hidden="true" className="flex items-center text-sm text-brass">
          ✦
        </span>
        <Plaque value={seconds} label="seg" />
      </div>
    </section>
  );
}
