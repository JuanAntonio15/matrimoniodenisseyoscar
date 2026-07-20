import { WISHLIST } from '../../config/wedding.config';
import { WishlistItemRow } from './WishlistItemRow';

export function WishlistSection() {
  return (
    <ul className="mx-auto w-full max-w-[900px] text-left">
      {WISHLIST.map((item) => (
        <WishlistItemRow key={item.text} item={item} />
      ))}
    </ul>
  );
}
