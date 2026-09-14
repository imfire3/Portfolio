import { useState } from 'react';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Ticker } from './components/Ticker';
import { ProjectsSection } from './components/ProjectsSection';
import { ApproachSection } from './components/ApproachSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projets');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--bg)] bg-grid-pattern">
      <Navbar onOpenContact={scrollToContact} />

      <main id="main-content">
        <Hero
          onExploreProjects={scrollToProjects}
          onOpenContact={scrollToContact}
        />

        <AboutSection />

        <Ticker />

        <ProjectsSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ApproachSection />

        <ExperienceSection />

        <SkillsSection />

        <EducationSection />

        <ContactSection />
      </main>

      <Footer />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}