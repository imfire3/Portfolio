import { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Target, Zap, CheckCircle2, ArrowRight, ExternalLink, Cpu } from 'lucide-react';
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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121317] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16181e]/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#ff4b16] bg-[#ff4b16]/15 px-2.5 py-1 rounded-full border border-[#ff4b16]/30">
                CASE STUDY #{project.num}
              </span>
              <span className="text-sm font-mono text-white/50">{project.tag}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fermer la fenêtre"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-[#ff4b16]">
                <span>{project.year}</span>
                <span>✦</span>
                <span>{project.role}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                {project.shortDesc}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-xs font-mono text-white/50 mb-1">{m.label}</div>
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Real Website Preview */}
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/40">
              <ProjectMockup
                type={project.caseStudy.mockupType}
                title={project.title}
                imageUrl={project.imageUrl}
              />
            </div>

            {/* Case Study Deep-Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Le Problème */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>01 / Le Défi & Le Problème</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
                <div className="text-xs text-white/40 italic pt-2 border-t border-white/5">
                  Contexte : {project.caseStudy.context}
                </div>
              </div>

              {/* La Solution */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>02 / L'Approche Produit</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono bg-white/10 text-white/80 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture IA & Automatisation */}
            <div className="bg-gradient-to-br from-[#ff4b16]/10 via-transparent to-transparent border border-[#ff4b16]/30 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#ff4b16] font-mono text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>03 / Workflow IA & Pipeline Technique</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {project.caseStudy.aiWorkflow}
              </p>
            </div>

            {/* Résultats & Enseignements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/60">
                  Résultats mesurés
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/60">
                  Key Learnings Produit
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.keyLearnings.map((learn, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                      <ArrowRight className="w-4 h-4 text-[#ff4b16] shrink-0 mt-0.5" />
                      <span>{learn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer with clean right-aligned button */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#16181e] flex items-center justify-end">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#ff4b16] hover:bg-[#ff4b16]/90 text-white rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#ff4b16]/20"
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
