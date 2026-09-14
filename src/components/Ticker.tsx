import { FC } from 'react';

export const Ticker: FC = () => {
  const items = [
    'PRODUCT VISION',
    '✦',
    'MVP SCOPING',
    '✦',
    'UX/UI DESIGN',
    '✦',
    'AI WORKFLOWS',
    '✦',
    'PROMPT ENGINEERING',
    '✦',
    'AUTOMATION & MAKE',
    '✦',
    'RAPID PROTOTYPING',
    '✦',
    'GROWTH & EXPERIMENTATION',
    '✦',
  ];

  return (
    <div className="w-full bg-[var(--accent)] text-[var(--bg)] py-3.5 overflow-hidden select-none border-y border-[var(--bg)]/20">
      <div className="flex w-max animate-marquee font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className={`mx-3 sm:mx-4 ${item === '✦' ? 'opacity-50' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};