import { POSTCARDS } from '../../config/wedding.config';
import { PostcardItem } from './PostcardItem';

export function PostcardWall() {
  return (
    <div className="mx-auto flex max-w-[1080px] flex-wrap justify-center gap-x-[18px] gap-y-[26px] px-2 pb-2.5">
      {POSTCARDS.map((postcard, index) => (
        <PostcardItem key={postcard.caption} postcard={postcard} delayMs={(index % 6) * 90} />
      ))}
    </div>
  );
}
