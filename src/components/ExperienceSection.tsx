import { FC } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: FC = () => {
  return (
    <section id="experiences" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-3">
            <span>03 / EXPÉRIENCES</span>
            <span>✦</span>
            <span>TRACK RECORD & IMPACT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[var(--text)]">
            4 ans à <span className="font-normal italic text-[var(--text-3)]">faire avancer</span> les produits.
          </h2>
        </div>
        <div className="text-sm font-mono text-[var(--text-4)] max-w-sm">
          Des environnements FinTech réglementés aux startups à forte vélocité.
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-[var(--text-4)] group-hover:text-[var(--text)] transition-colors">
                    {exp.num}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--bg-soft)] text-[var(--text-2)] border border-[var(--border)]">
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-[var(--text)] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-[var(--text-3)] mt-0.5">
                    {exp.sector}
                  </div>
                  <div className="text-xs text-[var(--text-4)] mt-1">
                    Échelle : {exp.users}
                  </div>
                </div>

                <div className="inline-block bg-[var(--accent-soft)] border border-[var(--accent-border)] rounded-xl px-3.5 py-2">
                  <div className="text-[10px] font-mono text-[var(--text-3)] uppercase tracking-wider font-semibold">
                    Résultat mesuré
                  </div>
                  <div className="text-sm font-mono font-bold text-[var(--text)] mt-0.5">
                    {exp.metrics}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>

                <div className="bg-[var(--bg-soft)] rounded-2xl p-4 border border-[var(--border-soft)] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-4)] mb-1">
                    Réalisations clés
                  </div>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-2)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-3)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[11px] font-mono text-[var(--text-4)] mr-2">Outils :</span>
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text-2)] px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};