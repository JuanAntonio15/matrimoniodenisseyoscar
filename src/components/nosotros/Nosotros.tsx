import { WEDDING_CONFIG } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { PassportStamp } from '../decor/PassportStamp';
import { FlightPathDivider } from './FlightPathDivider';
import { PostcardWall } from './PostcardWall';

export function Nosotros() {
  const eyebrow = useReveal<HTMLSpanElement>();
  const title = useReveal<HTMLHeadingElement>();
  const paragraph1 = useReveal<HTMLParagraphElement>();
  const paragraph2 = useReveal<HTMLParagraphElement>();
  const wallEyebrow = useReveal<HTMLSpanElement>();
  const wallTitle = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-ivory px-6 py-24 text-center">
      <PassportStamp
        top="Visado de"
        middle="Amor"
        bottom="Aprobado"
        color="brass"
        position="top-9 right-[6%]"
        rotation="rotate(-9deg)"
      />

      <span
        ref={eyebrow.ref}
        className={`reveal block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac ${
          eyebrow.isVisible ? 'reveal-visible' : ''
        }`}
      >
        {WEDDING_CONFIG.nosotros.eyebrow}
      </span>
      <h2
        ref={title.ref}
        className={`reveal my-4 font-display text-[clamp(30px,5.6vw,50px)] font-semibold italic text-navy ${
          title.isVisible ? 'reveal-visible' : ''
        }`}
      >
        {WEDDING_CONFIG.nosotros.title}
      </h2>
      <p
        ref={paragraph1.ref}
        className={`reveal mx-auto max-w-[620px] text-lg leading-[1.85] ${
          paragraph1.isVisible ? 'reveal-visible' : ''
        }`}
      >
        {WEDDING_CONFIG.nosotros.paragraphs[0]}
      </p>
      <p
        ref={paragraph2.ref}
        className={`reveal mx-auto mt-5 max-w-[620px] text-lg leading-[1.85] ${
          paragraph2.isVisible ? 'reveal-visible' : ''
        }`}
      >
        {WEDDING_CONFIG.nosotros.paragraphs[1]}
      </p>

      <div className="mt-16">
        <span
          ref={wallEyebrow.ref}
          className={`reveal mb-2.5 block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac ${
            wallEyebrow.isVisible ? 'reveal-visible' : ''
          }`}
        >
          {WEDDING_CONFIG.nosotros.wallEyebrow}
        </span>
        <div
          ref={wallTitle.ref}
          className={`reveal mb-11 font-display text-[22px] italic text-navy ${
            wallTitle.isVisible ? 'reveal-visible' : ''
          }`}
        >
          {WEDDING_CONFIG.nosotros.wallTitle}
        </div>
      </div>

      <PostcardWall />
      <FlightPathDivider />
    </section>
  );
}
