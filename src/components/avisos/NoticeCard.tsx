import type { ReactNode } from 'react';
import type { NoticeItem } from '../../types/wedding.types';
import { useReveal } from '../../hooks/useReveal';

interface NoticeCardProps {
  notice: NoticeItem;
  icon: ReactNode;
}

export function NoticeCard({ notice, icon }: NoticeCardProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal mx-auto mb-[26px] flex max-w-[560px] flex-col items-center gap-4 rounded-md border border-cognac/35 bg-espresso/[0.03] p-6 text-center last:mb-0 sm:flex-row sm:gap-6 sm:p-[28px_30px] sm:text-left ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="h-[54px] w-[54px] flex-shrink-0">{icon}</div>
      <div>
        <div className="mb-2 font-stamp text-xs uppercase tracking-[0.16em] text-cognac">{notice.title}</div>
        <div className="font-garamond text-[16.5px] leading-[1.7] text-ink">{notice.text}</div>
      </div>
    </div>
  );
}
