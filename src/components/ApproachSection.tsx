import { FC } from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Terminal, LineChart, ArrowRight } from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const ApproachSection: FC = () => {
  const stepIcons = [Search, PenTool, Terminal, LineChart];

  return (
    <section id="approche" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Manifesto Statement */}
      <div className="mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-[#ff4b16] mb-4">
          02 / APPROCHE & MANIFESTE
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-4xl">
          Je ne m’arrête pas aux slides.{' '}
          <span className="text-[#ff4b16] underline decoration-white/20 underline-offset-8">
            Je cadre, je design, je build
          </span>{' '}
          et je mets entre les mains des utilisateurs.
        </h2>
      </div>

      {/* 4 Steps Grid */}
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
              className="bg-[#14151a] border border-white/10 hover:border-[#ff4b16]/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#ff4b16] bg-[#ff4b16]/10 px-2.5 py-1 rounded-full border border-[#ff4b16]/20">
                    PHASE {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#ff4b16] group-hover:border-[#ff4b16]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-[#ff4b16] mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Key bullet points */}
              <div className="pt-4 border-t border-white/10 space-y-1.5">
                {step.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                    <span className="w-1 h-1 rounded-full bg-[#ff4b16]" />
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
