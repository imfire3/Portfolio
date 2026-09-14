import { FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-deep)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[var(--text-4)]">
        <div className="flex items-center gap-3">
          <span className="text-[var(--text)] font-bold">© 2026 VINCENT GIACALONE</span>
          <span>✦</span>
          <span>PRODUCT · UX · AUTOMATION</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/vincentgiacalone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text)] transition-colors"
          >
            LINKEDIN ↗
          </a>

          <a
            href="mailto:vincentgiacalonepro@gmail.com"
            className="hover:text-[var(--text)] transition-colors"
          >
            EMAIL ↗
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--text-3)] hover:text-[var(--text)] transition-colors cursor-pointer"
          >
            <span>RETOUR EN HAUT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};