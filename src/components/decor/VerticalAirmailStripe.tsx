interface VerticalAirmailStripeProps {
  side: 'left' | 'right';
}

/**
 * Vertical counterpart to the horizontal airmail stripes — runs down one
 * edge of the page. Purely decorative.
 */
export function VerticalAirmailStripe({ side }: VerticalAirmailStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 bottom-0 w-2.5 opacity-75 ${side === 'left' ? 'left-0' : 'right-0'}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, #7A3B34 0px 14px, #EAD9AE 14px 28px, #0F1A2C 28px 42px, #EAD9AE 42px 56px)',
      }}
    />
  );
}
