import { PlaneIcon } from './PlaneIcon';

interface TicketStackBadgeProps {
  position: string;
}

const BARCODE_WIDTHS = [3, 2, 2, 4, 2, 3, 2, 4, 2, 3];

function Barcode() {
  return (
    <div className="flex items-end gap-[2px]">
      {BARCODE_WIDTHS.map((w, i) => (
        <div key={i} className="bg-brass-light" style={{ width: `${w}px`, height: '20px' }} />
      ))}
    </div>
  );
}

function TicketStub({ className, showLabel }: { className: string; showLabel?: boolean }) {
  return (
    <div
      className={`absolute flex h-20 w-40 items-stretch rounded-md border-2 border-brass-light bg-navy-deep/85 ${className}`}
    >
      <div className="flex flex-1 flex-col justify-center gap-2 px-3">
        {showLabel && (
          <span className="font-stamp text-[15px] font-bold uppercase tracking-[0.15em] text-brass-light">
            Ticket
          </span>
        )}
        <Barcode />
      </div>
      <div className="w-0 border-l-2 border-dashed border-brass-light/80" />
      <div className="flex w-11 items-center justify-center">
        <PlaneIcon className="h-7 w-7 rotate-45 fill-brass-light" />
      </div>
    </div>
  );
}

export function TicketStackBadge({ position }: TicketStackBadgeProps) {
  return (
    <div aria-hidden="true" className={`absolute hidden h-28 w-44 sm:block ${position}`}>
      <TicketStub className="right-0 top-0 rotate-[18deg] opacity-70" />
      <TicketStub className="bottom-0 left-0 -rotate-6" showLabel />
    </div>
  );
}
