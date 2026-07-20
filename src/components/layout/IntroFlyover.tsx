import { useEffect, useState } from 'react';
import { PlaneIcon } from '../decor/PlaneIcon';

const ANIMATION_MS = 2400;

/**
 * One-off, subtle plane crossing the top of the viewport on first load.
 * Self-removing (unmounts after the animation) and skipped entirely under
 * prefers-reduced-motion, matching the rest of the site's motion policy.
 */
export function IntroFlyover() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), ANIMATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-[8%] z-[998] h-8 overflow-visible"
    >
      <PlaneIcon className="absolute left-0 top-0 h-6 w-6 rotate-90 fill-brass-light animate-introFly" />
    </div>
  );
}
