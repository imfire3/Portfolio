import { FC } from 'react';
import { motion } from 'motion/react';
import { Briefcase, ArrowUpRight, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: FC = () => {
  return (
    <section id="experiences" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff4b16] mb-3">
            <span>03 / EXPÉRIENCES</span>
            <span>✦</span>
            <span>TRACK RECORD & IMPACT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white">
            4 ans à <span className="font-normal italic text-[#ff4b16]">faire avancer</span> les produits.
          </h2>
        </div>
        <div className="text-sm font-mono text-white/50 max-w-sm">
          Des environnements FinTech réglementés aux startups à forte vélocité.
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative bg-[#131418] border border-white/10 hover:border-[#ff4b16]/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Index, Period, Company */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-white/30 group-hover:text-[#ff4b16] transition-colors">
                    {exp.num}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-white transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-[#ff4b16] mt-0.5">
                    {exp.sector}
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    Échelle : {exp.users}
                  </div>
                </div>

                {/* Key Metric Badge */}
                <div className="inline-block bg-gradient-to-r from-[#ff4b16]/20 to-transparent border border-[#ff4b16]/40 rounded-xl px-3.5 py-2">
                  <div className="text-[10px] font-mono text-[#ff4b16] uppercase tracking-wider font-semibold">
                    Résultat mesuré
                  </div>
                  <div className="text-sm font-mono font-bold text-white mt-0.5">
                    {exp.metrics}
                  </div>
                </div>
              </div>

              {/* Right Column: Role, Description, Achievements, Tools */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>

                {/* Achievements list */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                    Réalisations clés
                  </div>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4b16] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tools used */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[11px] font-mono text-white/40 mr-2">Outils :</span>
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded"
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
