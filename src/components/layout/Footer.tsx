import { WEDDING_CONFIG } from '../../config/wedding.config';

export function Footer() {
  return (
    <footer className="relative bg-navy-deep px-6 py-10 pb-10 text-center text-parchment sm:py-12">
      <div className="relative mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-brass-light">
        <div className="absolute inset-1.5 rounded-full border border-dashed border-brass-light/50" />
        <span className="font-display text-xl italic text-brass-light">{WEDDING_CONFIG.footer.seal}</span>
      </div>
      <p className="font-stamp text-[10.5px] tracking-[0.2em] opacity-60">{WEDDING_CONFIG.footer.dateLine}</p>
    </footer>
  );
}
