interface IconProps {
  className?: string;
}


export function SoccerBallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M12 6.8 16.2 9.9 14.6 14.9H9.4L7.8 9.9Z"
        fill="#0F1A2C"
        fillOpacity="0.8"
      />
      <g stroke="#0F1A2C" strokeOpacity="0.65" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M9.4 14.9 7.3 19.2M14.6 14.9 16.7 19.2M7.8 9.9 3.2 9M16.2 9.9 20.8 9" />
      </g>
    </svg>
  );
}

export function GasPumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 3h9v18H4zM6 6h5v4H6zM15 8l3 2v7.5a1.5 1.5 0 0 0 3 0V9l-2.2-2.2-1 1L19.5 9.5V17a.5.5 0 0 1-1 0v-6.3L15 8.4z" />
    </svg>
  );
}

export function HourglassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M6 2h12v2l-5 6 5 6v2H6v-2l5-6-5-6V2zm2.2 2 3.8 4.6L15.8 4H8.2zm0 16h7.6L12 13.4 8.2 20z" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3 1 8.5 12 14l8-4.1V15h2V8.5L12 3z" />
      <path d="M5 11.3v4.4c0 1.8 3.1 3.3 7 3.3s7-1.5 7-3.3v-4.4l-7 3.5-7-3.5z" />
    </svg>
  );
}

export function HouseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2.5 2 11h3v10h6v-6h2v6h6V11h3L12 2.5z" />
    </svg>
  );
}
