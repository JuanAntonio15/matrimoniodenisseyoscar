import { useState } from 'react';
import { BANK_ACCOUNT, WEDDING_CONFIG, formatBankAccountForClipboard } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { copyToClipboard } from '../../lib/clipboard';
import { PassportStamp } from '../decor/PassportStamp';

type CopyState = 'idle' | 'copied' | 'unsupported';

const BANK_ROWS: Array<{ label: string; value: string }> = [
  { label: 'Titular', value: BANK_ACCOUNT.titular },
  { label: 'RUT', value: BANK_ACCOUNT.rut },
  { label: 'Banco', value: BANK_ACCOUNT.banco },
  { label: 'Cuenta', value: BANK_ACCOUNT.tipoCuenta },
  { label: 'N° Cuenta', value: BANK_ACCOUNT.numeroCuenta },
  { label: 'Email', value: BANK_ACCOUNT.email },
];

export function GiftSection() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const handleCopy = async () => {
    const result = await copyToClipboard(formatBankAccountForClipboard(BANK_ACCOUNT));
    setCopyState(result.success ? 'copied' : 'unsupported');
    setTimeout(() => setCopyState('idle'), 2500);
  };

  const buttonLabel =
    copyState === 'copied'
      ? '¡Copiado!'
      : copyState === 'unsupported'
        ? 'Copia manual: revisa los datos arriba'
        : 'Copiar datos';

  return (
    <section
      className="relative px-6 py-24 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 20% 30%, rgba(190,122,61,.10), transparent 45%), radial-gradient(ellipse at 80% 70%, rgba(58,42,29,.07), transparent 45%)',
        backgroundColor: '#F1E4C0',
      }}
    >
      <PassportStamp
        top="Equipaje"
        middle="✓"
        bottom="Completo"
        color="brass"
        position="top-11 left-[6%]"
        rotation="rotate(-13deg)"
      />

      <span className="block font-stamp text-[11px] font-bold uppercase tracking-[0.3em] text-cognac">Regalos</span>
      <h2 className="my-4 font-display text-[clamp(28px,5.2vw,44px)] font-semibold italic text-navy">
        Un anillo al dedo
      </h2>
      <p className="mx-auto mb-10 max-w-[560px] text-[17px] leading-[1.85]">{WEDDING_CONFIG.giftsCopy}</p>

      <div className="flex flex-col items-center">
        <div aria-hidden="true" className="h-[34px] w-0.5 bg-espresso opacity-50" />
        <div
          ref={ref}
          className={`reveal relative w-full max-w-[400px] rounded-2xl border-[1.5px] border-espresso bg-ivory p-7 pb-[26px] text-left shadow-[0_18px_36px_-18px_rgba(58,42,29,.4)] transition-transform duration-500 hover:-rotate-[1.5deg] ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          <div className="absolute -top-[19px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-espresso bg-parchment" />
          <div className="mb-4 text-center font-stamp text-[10.5px] uppercase tracking-[0.18em] text-cognac">
            Fondo de luna de miel
          </div>
          {BANK_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex justify-between gap-3 border-b border-dashed border-espresso/[0.28] py-2.5 text-sm last:border-b-0"
            >
              <span className="flex-shrink-0 font-stamp text-[10px] uppercase tracking-[0.05em] text-cognac">
                {row.label}
              </span>
              <span className="text-right font-medium">{row.value}</span>
            </div>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            aria-live="polite"
            className={`mt-5 w-full rounded-sm p-3.5 font-stamp text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
              copyState === 'copied'
                ? 'bg-cognac text-espresso'
                : 'bg-espresso text-parchment hover:bg-navy'
            }`}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
