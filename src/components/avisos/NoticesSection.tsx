import { NOTICES } from '../../config/wedding.config';
import { NoticeCard } from './NoticeCard';

function AdultsOnlyIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full fill-none stroke-cognac stroke-[1.7]" aria-hidden="true">
      <g transform="rotate(-14 16 22)">
        <path d="M6 6 H26 L16 20 V38" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 40 H23" strokeLinecap="round" />
      </g>
      <g transform="rotate(14 40 22)">
        <path d="M20 6 H40 L30 20 V38" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M23 40 H37" strokeLinecap="round" />
      </g>
      <circle cx="12" cy="4" r="1.1" fill="#BE7A3D" stroke="none" />
      <circle cx="34" cy="2" r="1" fill="#BE7A3D" stroke="none" />
    </svg>
  );
}

function HalfTimeShowIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full fill-none stroke-cognac stroke-[1.7]" aria-hidden="true">
      <path
        d="M20 5 L10 12 L15 20 L19 17 V50 H37 V17 L41 20 L46 12 L36 5 L31 9 H25 Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="28" cy="30" r="6" strokeLinejoin="round" />
      <path d="M28 24.5 L30.5 28 L27 31.5 L23.8 28 Z" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = [<AdultsOnlyIcon key="adults" />, <HalfTimeShowIcon key="halftime" />];

export function NoticesSection() {
  return (
    <section className="relative bg-ivory px-6 py-24 text-center">
      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">
        Antes de venir
      </span>
      <h2 className="my-4 mb-10 font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic text-navy">
        Dos cosas importantes
      </h2>

      {NOTICES.map((notice, index) => (
        <NoticeCard key={notice.title} notice={notice} icon={ICONS[index]} />
      ))}
    </section>
  );
}
