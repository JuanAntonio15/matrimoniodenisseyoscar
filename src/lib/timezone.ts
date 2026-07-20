/**
 * Resolves the UTC instant for a "wall clock" date/time as observed in a
 * given IANA time zone, e.g. turning "2026-11-27T17:30:00" + "America/Santiago"
 * into the correct UTC Date — honoring whatever DST rule applies on that
 * exact day, since Chile has changed its daylight-saving rules multiple
 * times and the offset cannot be safely hardcoded.
 *
 * Uses only Intl.DateTimeFormat (already timezone-aware via the runtime's
 * ICU data), so no date library is needed. Two passes are enough in
 * practice: the first estimates the offset from a UTC-assumed guess, the
 * second re-checks it at the resulting instant in case the guess landed on
 * the wrong side of a DST transition.
 */
function getTimeZoneOffsetMs(timeZone: string, date: Date): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const parts: Record<string, string> = {};
  for (const part of formatter.formatToParts(date)) {
    if (part.type !== 'literal') parts[part.type] = part.value;
  }

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );

  return asUtc - date.getTime();
}

export function zonedTimeToUtc(localDateTime: string, timeZone: string): Date {
  const naiveUtcGuess = new Date(`${localDateTime}Z`);
  const firstOffset = getTimeZoneOffsetMs(timeZone, naiveUtcGuess);
  const refined = new Date(naiveUtcGuess.getTime() - firstOffset);
  const secondOffset = getTimeZoneOffsetMs(timeZone, refined);
  return new Date(naiveUtcGuess.getTime() - secondOffset);
}
