import { FC, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Eye, Cpu, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ProjectCardWrapper } from './ProjectCardWrapper';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'saas'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ai') return p.tag.includes('IA') || p.tag.includes('AI');
    if (filter === 'saas')
      return (
        p.tag.includes('SAAS') ||
        p.tag.includes('AUTOMATISATION') ||
        p.tag.includes('EDTECH') ||
        p.tag.includes('PLATEFORME')
      );
    return true;
  });

  return (
    <section id="projets" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff4b16] mb-3">
            <span>01 / PROJETS SÉLECTIONNÉS</span>
            <span>✦</span>
            <span>PRODUITS & CASE STUDIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white">
            Selected <span className="font-normal italic text-[#ff4b16]">work.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60 max-w-xl">
            Des produits vivants construits de l'idée jusqu'à la mise en production, testables en ligne dès maintenant.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-[#15161a] p-1.5 rounded-2xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#ff4b16] text-white font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Tous ({projects.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'ai'
                ? 'bg-[#ff4b16] text-white font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            IA Native & LLM
          </button>
          <button
            onClick={() => setFilter('saas')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'saas'
                ? 'bg-[#ff4b16] text-white font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            SaaS & Automatisation
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCardWrapper project={project} index={idx}>
              {/* Top Bar on the Card */}
              <div className="px-6 py-3.5 bg-[#171920] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[#ff4b16] font-bold">PROJECT {project.num}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/70">{project.year}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/5 text-[11px]">
                    {project.tag}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 text-[#ff4b16] hover:underline text-[11px]"
                  >
                    <span>Lien direct</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Grid Layout: Mockup preview + Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Mockup Stage (Left on desktop) */}
                <div className="lg:col-span-6 p-0 bg-[#0c0d10] border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-center overflow-hidden">
                  <ProjectMockup
                    type={project.caseStudy.mockupType}
                    title={project.title}
                    imageUrl={project.imageUrl}
                  />
                </div>

                {/* Text / Spec Info (Right on desktop) */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#ff4b16] uppercase tracking-wider font-semibold">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-white/40">
                        Rôle : {project.role}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-3">
                      {project.title}
                    </h3>

                    <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                      {project.shortDesc}
                    </p>

                    {/* Impact Highlight Box */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                      <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
                        Impact & Réalisation
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {project.impact}
                      </div>
                    </div>

                    {/* Metrics preview */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-[10px] font-mono text-white/50">{m.label}</div>
                          <div className="text-sm font-mono font-bold text-white mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 rounded-xl bg-[#ff4b16] hover:bg-[#ff4b16]/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ff4b16]/20"
                    >
                      <span>Visiter le site live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#ff4b16]" />
                      <span>Explorer le Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </ProjectCardWrapper>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
