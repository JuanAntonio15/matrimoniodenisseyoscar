import { CompassIcon } from '../decor/CompassIcon';
import { PinIcon } from '../decor/PinIcon';
import { PlaneIcon } from '../decor/PlaneIcon';

export function FlightArcHeader() {
  return (
    <div aria-hidden="true" className="relative mx-auto mb-6 h-40 w-full max-w-[420px]">
      <PinIcon className="absolute bottom-[25px] left-[4%] h-10 w-8 text-brass-light" />
      <PinIcon className="absolute bottom-[25px] right-[4%] h-10 w-8 text-brass-light" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M30 140 Q200 30 370 140"
          stroke="#D3B36B"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-1/2 top-[120px] h-12 w-12 -translate-x-1/2">
        <CompassIcon className="h-full w-full animate-spinSlow" />
      </div>
      <PlaneIcon className="absolute left-1/2 top-[60px] h-12 w-12 -translate-x-1/2 rotate-[78deg] fill-brass-light" />
    </div>
  );
}
