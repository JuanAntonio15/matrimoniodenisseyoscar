import { WEDDING_CONFIG } from '../../config/wedding.config';
import { AirmailFrame } from '../decor/AirmailFrame';
import { PassportStamp } from '../decor/PassportStamp';
import { PostalCornerBlock } from '../decor/PostalCornerBlock';
import { RibbonBanner } from '../decor/RibbonBanner';
import { TicketStackBadge } from '../decor/TicketStackBadge';
import { TravelBadge } from '../decor/TravelBadge';
import { VerticalAirmailStripe } from '../decor/VerticalAirmailStripe';
import { BankTicketCard } from './BankTicketCard';
import { FlightArcHeader } from './FlightArcHeader';
import { WishlistSection } from './WishlistSection';

export function GiftSection() {
  const [titleLine1, titleLine2] = WEDDING_CONFIG.wishlistTitleLines;

  return (
    <section
      className="relative overflow-hidden bg-navy-deep px-6 pb-16 pt-6 text-center text-parchment animate-bgdrift"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 30% 20%, rgba(211,179,107,0.14), transparent 55%), radial-gradient(ellipse at 75% 80%, rgba(190,122,61,0.16), transparent 50%), linear-gradient(180deg, #0F1A2C 0%, #1C2B45 100%)',
        backgroundSize: '160% 160%, 160% 160%, 100% 100%',
      }}
    >
      <AirmailFrame />
      <PostalCornerBlock position="left-6 top-6" />
      <VerticalAirmailStripe side="right" />

      <PassportStamp
        top="Happiness"
        middle="D & O"
        bottom="2026"
        color="light"
        position="top-14 right-[5%]"
        rotation="rotate(9deg) scale(1.15)"
      />
      <TravelBadge position="bottom-10 left-[4%]" rotation="rotate(-8deg)" />
      <TicketStackBadge position="bottom-14 right-[5%]" />

      <FlightArcHeader />

      <h2 className="mx-auto max-w-[450px] font-cinzel text-[clamp(22px,4.4vw,32px)] font-semibold uppercase leading-[1.3] text-brass-light">
        <span aria-hidden="true">✦ </span>
        {titleLine1}{' ✦'}
        <br />
        {titleLine2}
        <span aria-hidden="true"></span>
      </h2>

      <div className="mt-8 mb-8">
        <RibbonBanner lines={WEDDING_CONFIG.wishlistRibbonLines} />
      </div>

      <WishlistSection />

      <div className="mt-9">
        <BankTicketCard />
      </div>

      <p className="mt-9 text-[19px] font-bold tracking-[0.04em]">
        <span aria-hidden="true" className="text-brass-light">
          ✦{' '}
        </span>
        <span className="bg-[linear-gradient(90deg,#A9863E_0%,#D3B36B_50%,#A9863E_100%)] bg-clip-text font-cinzel-decorative text-transparent">
          {WEDDING_CONFIG.giftsClosing}
        </span>
        <span aria-hidden="true" className="text-brass-light">
          {' '}✦
        </span>
      </p>
    </section>
  );
}
