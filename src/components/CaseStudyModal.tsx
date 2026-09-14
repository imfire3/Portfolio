import { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Zap, CheckCircle2, ArrowRight, ExternalLink, Cpu } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-elevated)] border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-header)]/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[var(--text)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full border border-[var(--accent-border)]">
                CASE STUDY #{project.num}
              </span>
              <span className="text-sm font-mono text-[var(--text-3)]">{project.tag}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[var(--text-3)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
              aria-label="Fermer la fenêtre"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-[var(--text-3)]">
                <span>{project.year}</span>
                <span>✦</span>
                <span>{project.role}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] font-display mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed max-w-2xl">
                {project.shortDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl p-4">
                  <div className="text-xs font-mono text-[var(--text-4)] mb-1">{m.label}</div>
                  <div className="text-2xl font-bold font-mono text-[var(--text)] tracking-tight">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--bg-mockup)]">
              <ProjectMockup
                type={project.caseStudy.mockupType}
                title={project.title}
                imageUrl={project.imageUrl}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[var(--text-3)] font-mono text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>01 / Le Défi & Le Problème</span>
                </div>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  {project.caseStudy.problem}
                </p>
                <div className="text-xs text-[var(--text-4)] italic pt-2 border-t border-[var(--border-soft)]">
                  Contexte : {project.caseStudy.context}
                </div>
              </div>

              <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[var(--text-3)] font-mono text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>02 / L'Approche Produit</span>
                </div>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">
                  {project.caseStudy.solution}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[var(--bg-soft-strong)] text-[var(--text-2)] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-transparent border border-[var(--accent-border)] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[var(--text)] font-mono text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>03 / Workflow IA & Pipeline Technique</span>
              </div>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                {project.caseStudy.aiWorkflow}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-3)]">
                  Résultats mesurés
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-2)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--text-3)] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-3)]">
                  Key Learnings Produit
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.keyLearnings.map((learn, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-2)]">
                      <ArrowRight className="w-4 h-4 text-[var(--text-3)] shrink-0 mt-0.5" />
                      <span>{learn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--bg-header)] flex items-center justify-end">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--bg)] rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-[var(--accent-glow)]"
            >
              <span>Voir le site web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};