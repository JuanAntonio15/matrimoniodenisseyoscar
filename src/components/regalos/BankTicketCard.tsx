import { useState } from 'react';
import { BANK_ACCOUNT, WEDDING_CONFIG, formatBankAccountForClipboard } from '../../config/wedding.config';
import { useReveal } from '../../hooks/useReveal';
import { copyToClipboard } from '../../lib/clipboard';

type CopyState = 'idle' | 'copied' | 'unsupported';

const BANK_LINES: string[] = [
  `Nombre: ${BANK_ACCOUNT.titular}`,
  `RUT: ${BANK_ACCOUNT.rut}`,
  `Banco: ${BANK_ACCOUNT.banco}`,
  `Tipo de cuenta: ${BANK_ACCOUNT.tipoCuenta}`,
  `Número de cuenta: ${BANK_ACCOUNT.numeroCuenta}`,
  `Correo: ${BANK_ACCOUNT.email}`,
];

export function BankTicketCard() {
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
    <div
      ref={ref}
      className={`reveal relative mx-auto w-70 max-w-[380px] border border-espresso/30 bg-brass-light px-7 py-6 text-center shadow-[0_18px_36px_-18px_rgba(15,26,44,.5)] ${
        isVisible ? 'reveal-visible' : ''
      }`}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 91% 50%, 100% 100%, 0% 100%, 9% 50%)' }}
    >
      <div className="mb-3 flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-navy-deep">
        <span aria-hidden="true">• </span>
        {WEDDING_CONFIG.bankBoxTitle}
      </div>
      <div className="space-y-1.4">
        {BANK_LINES.map((line) => (
          <p key={line} className="font-cinzel text-[11px] uppercase tracking-[0.02em] text-navy-deep">
            {line}
          </p>
        ))}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={`mt-3 w-40 rounded-sm p-3.5 font-stamp text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
          copyState === 'copied' ? 'bg-cognac text-espresso' : 'bg-navy-deep text-parchment hover:bg-navy'
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
