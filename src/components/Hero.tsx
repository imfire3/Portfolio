import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_WORDS } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: FC<HeroProps> = ({ onExploreProjects, onOpenContact }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent)]/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[var(--bg-soft-strong)] blur-[100px] pointer-events-none rounded-full" />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-3)] animate-ping" />
          <span className="font-mono text-xs text-[var(--text-2)] uppercase tracking-widest font-semibold">
            Paris, France · Disponible immédiatement
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--text-4)] tracking-wider">
          PRODUCT · UX · AUTOMATION
        </div>
      </div>

      <div className="my-auto py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tighter text-[var(--text)] leading-[0.98]">
              VINCENT GIACALONE
            </h1>
            <div className="h-14 sm:h-20 lg:h-24 overflow-hidden flex items-center">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-4)] mr-4">
                AI PRODUCT
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={HERO_WORDS[wordIndex]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-black font-display tracking-tighter text-[var(--text)] leading-none"
                >
                  {HERO_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-lg sm:text-2xl font-normal text-[var(--text-2)] max-w-3xl leading-relaxed tracking-tight">
            Je transforme des problèmes utilisateurs et business en produits digitaux{' '}
            <span className="text-[var(--text)] font-semibold underline decoration-[var(--border-strong)] decoration-2 underline-offset-4">
              conçus, lancés et mesurés
            </span>
            .
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl">
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-3.5">
              <div className="text-xs font-mono text-[var(--text-4)]">EXPÉRIENCE</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text)] mt-0.5">4 ans +</div>
            </div>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-3.5">
              <div className="text-xs font-mono text-[var(--text-4)]">IMPACT FORTUNEO</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text)] mt-0.5">+9% conv.</div>
            </div>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-3.5">
              <div className="text-xs font-mono text-[var(--text-4)]">UTILISATEURS</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text)] mt-0.5">2M+</div>
            </div>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-3.5">
              <div className="text-xs font-mono text-[var(--text-4)]">STACK PHARE</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text)] mt-0.5">IA & React</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--bg)] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[var(--accent-glow)] cursor-pointer"
            >
              <span>Découvrir mes projets</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-[var(--bg-soft)] hover:bg-[var(--bg-soft-strong)] border border-[var(--border)] text-[var(--text)] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Prendre contact</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-3)]" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border)] font-mono text-xs text-[var(--text-4)]">
        <div className="flex items-center gap-3">
          <span className="text-[var(--text)] font-bold">CYCLE PRODUIT :</span>
          <span>BUILD → SHIP → MEASURE → ITERATE</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--text-4)]">
          <span>Faites défiler</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--text-3)]" />
        </div>
      </div>
    </section>
  );
};