import type { Postcard } from '../../types/wedding.types';
import { useReveal } from '../../hooks/useReveal';

interface PostcardItemProps {
  postcard: Postcard;
  delayMs: number;
}

export function PostcardItem({ postcard, delayMs }: PostcardItemProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      className={`reveal ${postcard.rotationClass} relative w-[42%] bg-[#fbf7ee] p-2.5 pb-[34px] shadow-[0_14px_30px_-14px_rgba(43,33,21,.4)] sm:w-[190px] ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-3 bg-brass-light/60 opacity-85" />
      <img
        src={postcard.image}
        alt={postcard.alt}
        loading="lazy"
        className="block h-[150px] w-full object-cover [filter:sepia(.28)_saturate(1.05)_contrast(1.02)]"
      />
      <div className="absolute bottom-2.5 left-0 right-0 text-center font-stamp text-[11px] tracking-[0.02em] text-espresso">
        {postcard.caption}
      </div>
    </div>
  );
}
