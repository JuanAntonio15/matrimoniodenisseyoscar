import { WEDDING_CONFIG } from '../../config/wedding.config';
import { CompassIcon } from '../decor/CompassIcon';
import { PassportStamp } from '../decor/PassportStamp';
import { PlaneIcon } from '../decor/PlaneIcon';

const airmailStripe =
  'absolute left-0 right-0 h-2.5 opacity-75 bg-[repeating-linear-gradient(45deg,#7A3B34_0px_14px,#EAD9AE_14px_28px,#0F1A2C_28px_42px,#EAD9AE_42px_56px)]';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-navy-deep px-5 py-16 text-center text-parchment animate-bgdrift"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 30% 20%, rgba(211,179,107,0.14), transparent 55%), radial-gradient(ellipse at 75% 80%, rgba(190,122,61,0.16), transparent 50%), linear-gradient(180deg, #0F1A2C 0%, #1C2B45 100%)',
        backgroundSize: '160% 160%, 160% 160%, 100% 100%',
      }}
    >
      <div className={`${airmailStripe} top-0`} />
      <div className={`${airmailStripe} bottom-0`} />
      <div className="pointer-events-none absolute inset-5 border border-brass-light/55">
        <div className="absolute inset-1.5 border border-brass-light/30" />
      </div>
      <div className="pointer-events-none absolute left-3.5 top-3.5 h-[26px] w-[26px] border-[1.5px] border-r-0 border-b-0 border-brass-light/80" />
      <div className="pointer-events-none absolute right-3.5 top-3.5 h-[26px] w-[26px] border-[1.5px] border-l-0 border-b-0 border-brass-light/80" />
      <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-[26px] w-[26px] border-[1.5px] border-r-0 border-t-0 border-brass-light/80" />
      <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-[26px] w-[26px] border-[1.5px] border-l-0 border-t-0 border-brass-light/80" />

      <PassportStamp
        top="Pasaporte"
        middle="D & O"
        bottom="2026"
        color="light"
        position="top-14 right-[5%]"
        rotation="rotate(-11deg)"
      />

      <CompassIcon className="mb-5 h-[50px] w-[50px] opacity-90 animate-spinSlow [animation-delay:.1s]" />

      <div className="relative mb-[18px] h-[132px] w-[132px] animate-fadeUp [animation-delay:.05s]">
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#e7c37a,#A9863E_70%)] shadow-[0_2px_4px_rgba(0,0,0,.4)]" />
        <img
          className="h-full w-full rotate-[-4deg] border border-brass-light/50 object-cover shadow-[0_10px_26px_-8px_rgba(0,0,0,.6)]"
          src={WEDDING_CONFIG.heroPhoto}
          alt={WEDDING_CONFIG.heroPhotoAlt}
          loading="eager"
        />
      </div>

      <div className="flex items-center justify-center animate-fadeUp [animation-delay:.25s]">
        <span aria-hidden="true" className="mx-1 text-[13px] tracking-[0.4em] text-brass-light">
          ✦
        </span>
        <div className="bg-[linear-gradient(90deg,#A9863E_0%,#D3B36B_50%,#A9863E_100%)] bg-clip-text font-cinzel-decorative text-[15px] font-bold uppercase tracking-[0.28em] text-transparent">
          {WEDDING_CONFIG.heroEyebrow}
        </div>
        <span aria-hidden="true" className="mx-1 text-[13px] tracking-[0.4em] text-brass-light">
          ✦
        </span>
      </div>

      <h1 className="my-4 font-display text-[clamp(44px,11vw,96px)] font-semibold italic leading-[1.05] animate-fadeUp [animation-delay:.45s]">
        {WEDDING_CONFIG.coupleNames.first}
        <span className="mx-2.5 text-[0.62em] not-italic text-cognac">&amp;</span>
        {WEDDING_CONFIG.coupleNames.second}
      </h1>

      <div className="mt-0.5 font-amatic text-[30px] font-bold tracking-[0.06em] text-parchment opacity-90 animate-fadeUp [animation-delay:.65s]">
        {WEDDING_CONFIG.heroSubtitle}
      </div>

      <div className="my-8 flex w-[220px] items-center gap-2.5 animate-fadeUp [animation-delay:.85s]">
        <div className="h-px w-[60px] bg-[repeating-linear-gradient(90deg,#A9863E_0px_6px,transparent_6px_11px)]" />
        <div className="relative h-5 flex-1 overflow-visible">
          <PlaneIcon className="absolute top-0 left-0 h-5 w-5 rotate-90 fill-brass-light animate-flyacross" />
        </div>
        <div className="h-px w-[60px] bg-[repeating-linear-gradient(90deg,#A9863E_0px_6px,transparent_6px_11px)]" />
      </div>

      <div className="font-display text-[clamp(19px,3.6vw,25px)] tracking-[0.05em] animate-fadeUp [animation-delay:1s]">
        {WEDDING_CONFIG.eventDateDisplay}
      </div>
      <div className="mt-2 font-stamp text-[12.5px] tracking-[0.1em] opacity-70 animate-fadeUp [animation-delay:1.15s]">
        {WEDDING_CONFIG.eventPlaceShort}
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 h-[38px] w-px -translate-x-1/2 bg-parchment/40 animate-scrollcue"
      />
    </section>
  );
}
