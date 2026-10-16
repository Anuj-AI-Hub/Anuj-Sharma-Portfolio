import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectFilters, projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured projects"
        title="A portfolio shaped by analytical thinking and practical ML exploration"
        description="Projects are organized across data analytics, machine learning, NLP, and computer vision. Some sections are intentionally labeled as learning-oriented and placeholders remain editable until verified information is available."
      />

      <div className="filter-row" aria-label="Project categories">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
