interface PlaqueProps {
  value: number;
  label: string;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export function Plaque({ value, label }: PlaqueProps) {
  return (
    <div className="relative flex h-[112px] w-[92px] flex-col items-center justify-center border border-brass bg-white/35 text-espresso">
      <div className="absolute inset-[5px] border border-brass/45" />
      <div className="absolute -left-px -top-px h-[9px] w-[9px] border-[1.5px] border-r-0 border-b-0 border-brass" />
      <div className="absolute -right-px -top-px h-[9px] w-[9px] border-[1.5px] border-l-0 border-b-0 border-brass" />
      <div className="absolute -bottom-px -left-px h-[9px] w-[9px] border-[1.5px] border-r-0 border-t-0 border-brass" />
      <div className="absolute -bottom-px -right-px h-[9px] w-[9px] border-[1.5px] border-l-0 border-t-0 border-brass" />
      <span className="font-cinzel text-3xl font-semibold leading-none">{pad(value)}</span>
      <span className="mt-2 font-garamond text-[11px] italic tracking-[0.1em] text-cognac">{label}</span>
    </div>
  );
}
