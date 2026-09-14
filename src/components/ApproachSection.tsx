import { FC } from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Terminal, LineChart } from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const ApproachSection: FC = () => {
  const stepIcons = [Search, PenTool, Terminal, LineChart];

  return (
    <section id="approche" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-4">
          02 / APPROCHE & MANIFESTE
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[var(--text)] leading-tight max-w-4xl">
          Je ne m’arrête pas aux slides.{' '}
          <span className="text-[var(--text-3)] underline decoration-[var(--border-strong)] underline-offset-8">
            Je cadre, je design, je build
          </span>{' '}
          et je mets entre les mains des utilisateurs.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {APPROACH_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--accent-border)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[var(--text)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full border border-[var(--accent-border)]">
                    PHASE {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] group-hover:text-[var(--text)] group-hover:border-[var(--accent-border)] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-[var(--text)] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-[var(--text-3)] mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-soft)] space-y-1.5">
                {step.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-4)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--text-3)]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};