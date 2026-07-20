import { useId } from 'react';
import { PlaneIcon } from './PlaneIcon';

interface TravelBadgeProps {
  position: string;
  rotation: string;
}

const DIAMONDS = [
  { x: 56, y: 6 },
  { x: 106, y: 56 },
  { x: 56, y: 106 },
  { x: 6, y: 56 },
];

export function TravelBadge({ position, rotation }: TravelBadgeProps) {
  const arcId = useId();

  return (
    <div
      aria-hidden="true"
      className={`absolute hidden h-28 w-28 sm:block ${position}`}
      style={{ transform: rotation }}
    >
      <svg viewBox="0 0 112 112" className="absolute inset-0 h-full w-full">
        <circle cx="56" cy="56" r="53" fill="none" stroke="#D3B36B" strokeWidth="2" opacity="0.85" />
        <circle
          cx="56"
          cy="56"
          r="46"
          fill="none"
          stroke="#D3B36B"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.6"
        />
        {DIAMONDS.map(({ x, y }) => (
          <rect
            key={`${x}-${y}`}
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            fill="#D3B36B"
            transform={`rotate(45 ${x} ${y})`}
          />
        ))}
        <path id={arcId} d="M25 44 A34 34 0 0 1 90 44" fill="none" />
        <text fill="#D3B36B" fontSize="11" letterSpacing="5">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle" className="font-stamp">
            TRAVEL
          </textPath>
        </text>
        <g fill="none" stroke="#D3B36B" strokeWidth="1.3" transform="translate(56,60)" opacity="0.4">
          <circle r="35" />
          <ellipse rx="25" ry="35" />
          <ellipse rx="15" ry="35" />
          <path d="M-27 -22 Q0 -28 27 -22 M-35 0 Q0 -2 35 0 M-33 -12 Q0 -15 33 -12 M-33 12 Q0 15 32 12M-27 22 Q0 28 27 22"/>
        </g>
      </svg>
      <PlaneIcon className="absolute left-1/2 top-[50%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-[35deg] fill-brass-light" />
    </div>
  );
}
