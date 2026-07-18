interface CompassIconProps {
  className?: string;
}

export function CompassIcon({ className }: CompassIconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="#D3B36B" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" stroke="#D3B36B" strokeWidth="0.75" opacity=".6" />
      <path d="M50 12 L57 50 L50 88 L43 50 Z" fill="#D3B36B" opacity=".9" />
      <path d="M12 50 L50 43 L88 50 L50 57 Z" fill="#D3B36B" opacity=".55" />
      <circle cx="50" cy="50" r="3.5" fill="#EAD9AE" />
    </svg>
  );
}
