import { FC } from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, ArrowDownRight } from 'lucide-react';

const ABOUT_FACTS = [
  { label: 'FORMATION', value: 'Master Product Management · HETIC' },
  { label: 'DERNIER POSTE', value: 'Product Owner — Fortuneo (FinTech)' },
  { label: 'EXERCICE', value: 'AI Product Builder · Freelance' },
  { label: 'LOCALISATION', value: 'Paris · Remote France & Europe' },
];

export const AboutSection: FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--border)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-3)] mb-4">
            <span>À PROPOS</span>
            <span>✦</span>
            <span>PROFIL</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[var(--text-4)] font-mono text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Paris, France</span>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[var(--text)] leading-[1.05] max-w-3xl"
          >
            Product Manager qui <span className="text-[var(--text-3)]">code</span>, designer qui{' '}
            <span className="text-[var(--text-3)]">ships</span>, stratège qui{' '}
            <span className="text-[var(--text-3)]">mesure</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[var(--text-2)] max-w-2xl leading-relaxed"
          >
            Après 4 ans en Product Management (Fortuneo, Choisir by Impala, Unlatch) et un Master à HETIC,
            j'accompagne produits jeunes et équipes confirmées sur le cycle complet : cadrage, UX,
            prototypage accéléré par l'IA et mise en production. Mon terrain de jeu : les MVP que l'on
            <span className="text-[var(--text)] font-semibold"> confie à de vrais utilisateurs en quelques semaines</span>,
            et des workflows LLM qui transformeront les frictions quotidiennes en automatisations silencieuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl"
          >
            {ABOUT_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-start justify-between gap-3 border border-[var(--border)] rounded-xl px-4 py-3 bg-[var(--bg-elevated)]"
              >
                <div>
                  <div className="text-[10px] font-mono text-[var(--text-4)] uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text)] mt-0.5">{fact.value}</div>
                </div>
                <GraduationCap className="w-3.5 h-3.5 text-[var(--text-3)] shrink-0 mt-0.5 hidden sm:block" />
              </div>
            ))}
          </motion.div>

          <a
            href="#projets"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-3)] hover:text-[var(--text)] transition-colors"
          >
            <span>Découvrir les projets</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};