import { FC } from 'react';
import { motion } from 'motion/react';
import { Compass, TrendingUp, Sparkles, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[var(--text-3)]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[var(--text-3)]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[var(--text-3)]" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-[var(--text-3)]" />;
    }
  };

  return (
    <section id="competences" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-3">
            <span>04 / COMPÉTENCES</span>
            <span>✦</span>
            <span>EXPERTISE MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[var(--text)]">
            Hybrid by <span className="font-normal italic text-[var(--text-3)]">design.</span>
          </h2>
        </div>
        <p className="text-sm font-mono text-[var(--text-4)] max-w-sm">
          Le croisement entre rigueur produit, intuition UX et vélocité de prototypage IA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent-border)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-4)]">
                  DOMAINE 0{idx + 1}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] flex items-center justify-center">
                  {getIcon(cat.icon)}
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-[var(--text)] mb-6">
                {cat.title}
              </h3>

              <ul className="space-y-2.5">
                {cat.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-xs font-mono text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-border)] group-hover:bg-[var(--text)] transition-colors shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-soft)] text-[10px] font-mono text-[var(--text-4)] flex items-center justify-between">
              <span>{cat.skills.length} compétences</span>
              <span className="text-[var(--text-3)] font-bold">READY TO SHIP</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};