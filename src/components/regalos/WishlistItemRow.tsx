import type { WishlistIconId, WishlistItem } from '../../types/wedding.types';
import { useReveal } from '../../hooks/useReveal';
import { PlaneIcon } from '../decor/PlaneIcon';
import {
  GasPumpIcon,
  GraduationCapIcon,
  HourglassIcon,
  HouseIcon,
  SoccerBallIcon,
} from '../decor/WishlistIcons';

interface WishlistItemRowProps {
  item: WishlistItem;
}

const ICONS: Record<WishlistIconId, (className: string) => React.ReactNode> = {
  soccer: (className) => <SoccerBallIcon className={className} />,
  gas: (className) => <GasPumpIcon className={className} />,
  hourglass: (className) => <HourglassIcon className={className} />,
  graduation: (className) => <GraduationCapIcon className={className} />,
  house: (className) => <HouseIcon className={className} />,
  plane: (className) => <PlaneIcon className={className} />,
};

export function WishlistItemRow({ item }: WishlistItemRowProps) {
  const { ref, isVisible } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`reveal flex flex-col gap-2 border-b border-brass-light/15 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6 ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <span className="flex flex-1 items-start gap-3">
        <span aria-hidden="true" className="mt-1 text-brass-light">
          •
        </span>
        <span aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brass-light">
          {ICONS[item.iconId]('h-5 w-5 fill-brass-light')}
        </span>
        <span className="text-[16.5px] leading-[1.45] text-parchment/90">{item.text}</span>
      </span>
      <span className="flex-shrink-0 whitespace-nowrap pl-8 font-cinzel text-[16.5px] font-semibold text-brass-light sm:pl-0 sm:pt-0.5">
        {item.price}
      </span>
    </li>
  );
}
