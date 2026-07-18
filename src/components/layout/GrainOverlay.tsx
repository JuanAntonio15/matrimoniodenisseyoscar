/** Fixed film-grain texture over the whole page, giving the aged-paper feel from the reference design. */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain-texture pointer-events-none fixed inset-0 z-[999] opacity-5 mix-blend-multiply animate-grainShift"
    />
  );
}
