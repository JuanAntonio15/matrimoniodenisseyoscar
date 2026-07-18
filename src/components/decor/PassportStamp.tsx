interface PassportStampProps {
  top: string;
  bottom: string;
  middle: string;
  color: 'brass' | 'light' | 'oxblood';
  position: string;
  rotation: string;
}

const COLOR_CLASSES: Record<PassportStampProps['color'], string> = {
  brass: 'border-brass text-brass [&_.stamp-dashed]:border-brass',
  light: 'border-brass-light text-brass-light [&_.stamp-dashed]:border-brass-light',
  oxblood: 'border-oxblood text-oxblood [&_.stamp-dashed]:border-oxblood',
};

/**
 * Decorative passport-stamp circles scattered across sections. Purely
 * ornamental, hidden below 480px (matches the reference) and from
 * assistive tech.
 */
export function PassportStamp({ top, bottom, middle, color, position, rotation }: PassportStampProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden sm:flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 text-center font-stamp opacity-40 pointer-events-none select-none ${COLOR_CLASSES[color]} ${position}`}
      style={{ transform: rotation }}
    >
      <div className="stamp-dashed absolute inset-[5px] rounded-full border border-dashed opacity-70" />
      <span className="mt-3 text-[8px] uppercase tracking-[0.14em]">{top}</span>
      <span className="my-[3px] text-[15px] font-bold tracking-[0.05em]">{middle}</span>
      <span className="mb-3 text-[8px] tracking-[0.1em]">{bottom}</span>
    </div>
  );
}
