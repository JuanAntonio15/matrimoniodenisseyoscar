const airmailStripe =
  'absolute left-0 right-0 h-2.5 opacity-75 bg-[repeating-linear-gradient(45deg,#7A3B34_0px_14px,#EAD9AE_14px_28px,#0F1A2C_28px_42px,#EAD9AE_42px_56px)]';

/**
 * Passport-page chrome shared by dark sections: airmail stripes top/bottom,
 * a double-line frame and bracket corners. Purely decorative — sits behind
 * section content via `pointer-events-none` and stays out of the a11y tree.
 */
export function AirmailFrame() {
  return (
    <>
      <div aria-hidden="true" className={`${airmailStripe} top-0`} />
      <div aria-hidden="true" className={`${airmailStripe} bottom-0`} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-5 border border-brass-light/55">
        <div className="absolute inset-1.5 border border-brass-light/30" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3.5 h-[26px] w-[26px] border-[1.5px] border-r-0 border-b-0 border-brass-light/80" />
      <div aria-hidden="true" className="pointer-events-none absolute right-3.5 top-3.5 h-[26px] w-[26px] border-[1.5px] border-l-0 border-b-0 border-brass-light/80" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-3.5 left-3.5 h-[26px] w-[26px] border-[1.5px] border-r-0 border-t-0 border-brass-light/80" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-3.5 right-3.5 h-[26px] w-[26px] border-[1.5px] border-l-0 border-t-0 border-brass-light/80" />
    </>
  );
}
