interface PostalCornerBlockProps {
  position: string;
}

/**
 * Bold diagonal-stripe rectangle used as a corner ornament on postal-themed
 * pages — a bigger, bolder cousin of the thin airmail stripes used
 * elsewhere. Purely decorative.
 */
export function PostalCornerBlock({ position }: PostalCornerBlockProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[130px] w-[235px] opacity-35 ${position}`}
      style={{
        backgroundImage: 'repeating-linear-gradient(135deg, transparent 0px 9px, #D3B36B 9px 11px)',
      }}
    />
  );
}
