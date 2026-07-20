interface RibbonBannerProps {
  lines: [string, string];
}

/**
 * Brass banner whose left/right edges notch inward (clip-path), framing
 * two lines of copy — the "ribbon" motif from the reference design.
 */
export function RibbonBanner({ lines }: RibbonBannerProps) {
  return (
    <div
      className="mx-auto max-w-[580px] bg-brass-light px-10 py-4 text-center"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)' }}
    >
      <p className="font-cinzel text-[13px] font-semibold leading-[1.6] tracking-[0.02em] text-navy-deep">
        {lines[0]}{' '}
        <br />
        {lines[1]}
      </p>
    </div>
  );
}
