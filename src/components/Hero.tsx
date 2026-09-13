import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Subtle Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4b16]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-white/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs text-white/80 uppercase tracking-widest font-semibold">
            Paris, France · Disponible immédiatement
          </span>
        </div>
        <div className="font-mono text-xs text-white/50 tracking-wider">
          PRODUCT · UX · AUTOMATION
        </div>
      </div>

      {/* Main Headline */}
      <div className="my-auto py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Monumental Headline with Dynamic Word Flip */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-white leading-[0.95]">
              AI PRODUCT
            </h1>
            <div className="h-16 sm:h-24 lg:h-28 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={HERO_WORDS[wordIndex]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#ff4b16] leading-none"
                >
                  {HERO_WORDS[wordIndex]}
                  <span className="text-white ml-2">✦</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Statement & Philosophy */}
          <p className="text-lg sm:text-2xl font-normal text-white/80 max-w-3xl leading-relaxed tracking-tight">
            Je transforme des problèmes utilisateurs et business en produits digitaux{' '}
            <span className="text-white font-semibold underline decoration-[#ff4b16] decoration-2 underline-offset-4">
              conçus, lancés et mesurés
            </span>
            .
          </p>

          {/* Key Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
            <div className="bg-[#15161a] border border-white/10 rounded-2xl p-3.5">
              <div className="text-xs font-mono text-white/50">EXPÉRIENCE</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">4 ans +</div>
            </div>
            <div className="bg-[#15161a] border border-white/10 rounded-2xl p-3.5">
              <div className="text-xs font-mono text-white/50">IMPACT FORTUNEO</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#ff4b16] mt-0.5">+9% conv.</div>
            </div>
            <div className="bg-[#15161a] border border-white/10 rounded-2xl p-3.5">
              <div className="text-xs font-mono text-white/50">UTILISATEURS</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">2M+</div>
            </div>
            <div className="bg-[#15161a] border border-white/10 rounded-2xl p-3.5">
              <div className="text-xs font-mono text-white/50">STACK PHARE</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">IA & React</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 rounded-2xl bg-[#ff4b16] hover:bg-[#ff4b16]/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-[#ff4b16]/20 cursor-pointer"
            >
              <span>Découvrir mes projets</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Prendre contact</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff4b16]" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Loop Ticker Preview */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-xs text-white/60">
        <div className="flex items-center gap-3">
          <span className="text-[#ff4b16] font-bold">CYCLE PRODUIT :</span>
          <span>BUILD → SHIP → MEASURE → ITERATE</span>
        </div>
        <div className="flex items-center gap-2 text-white/40">
          <span>Faites défiler</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#ff4b16]" />
        </div>
      </div>
    </section>
  );
};
