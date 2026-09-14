import { FC } from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const EducationSection: FC = () => {
  return (
    <section id="formations" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-3">
          <span>05 / FORMATIONS</span>
          <span>✦</span>
          <span>PARCOURS ACADÉMIQUE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[var(--text)]">
          Bases solides & <span className="font-normal italic text-[var(--text-3)]">diplômes.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EDUCATIONS.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent-border)] rounded-2xl p-6 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[var(--text-3)] font-bold">
                  {edu.period}
                </span>
                <GraduationCap className="w-4 h-4 text-[var(--text-4)] group-hover:text-[var(--text-3)] transition-colors" />
              </div>

              <h3 className="text-lg font-bold font-display text-[var(--text)] mb-1">
                {edu.degree}
              </h3>
              <div className="text-xs font-mono text-[var(--text-2)] font-semibold mb-3">
                {edu.school}
              </div>

              {edu.details && (
                <p className="text-xs text-[var(--text-3)] leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border-soft)] text-[10px] font-mono text-[var(--text-4)]">
              Certifié & Validé
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};