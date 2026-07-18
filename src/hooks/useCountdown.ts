import { useEffect, useState } from 'react';
import type { CountdownValue } from '../types/wedding.types';

function computeRemaining(targetMs: number): CountdownValue {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function useCountdown(targetIso: string): CountdownValue {
  const targetMs = new Date(targetIso).getTime();
  const [value, setValue] = useState<CountdownValue>(() => computeRemaining(targetMs));

  useEffect(() => {
    const interval = setInterval(() => setValue(computeRemaining(targetMs)), 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  return value;
}
