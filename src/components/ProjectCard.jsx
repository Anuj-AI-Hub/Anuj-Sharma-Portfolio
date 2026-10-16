import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const accentMap = {
  cyan: {
    accent: '#00e5ff',
    glow: 'rgba(0, 229, 255, 0.18)',
  },
  violet: {
    accent: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.18)',
  },
  amber: {
    accent: '#ffb547',
    glow: 'rgba(255, 181, 71, 0.17)',
  },
};

export default function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = accentMap[project.accent] ?? accentMap.cyan;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (offsetX - 0.5) * 14,
      y: (0.5 - offsetY) * 14,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className={`project-card panel-surface ${project.accent}`}
      style={{
        '--card-accent': accent.accent,
        '--card-glow': accent.glow,
        transform: `perspective(1400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${tilt.y * -0.35}px)`,
      }}
    >
      <div className="project-card-visual">
        <img src={project.image} alt={`${project.title} thumbnail`} />
        <span className="project-card-badge">{project.category}</span>
      </div>

      <div className="project-card-content">
        <div className="project-header">
          <span className="project-category">{project.category}</span>
          <span className="project-metric">{project.metrics}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-body">
          <p>{project.description}</p>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
