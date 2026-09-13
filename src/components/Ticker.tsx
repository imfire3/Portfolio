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
    <div className="w-full bg-[#ff4b16] text-[#0e0f12] py-3.5 overflow-hidden select-none border-y border-black/20">
      <div className="flex w-max animate-marquee font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase">
        {/* Repeat sequence 4 times for infinite smooth loop */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className={`mx-3 sm:mx-4 ${
              item === '✦' ? 'text-black/60' : 'text-[#0e0f12]'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
