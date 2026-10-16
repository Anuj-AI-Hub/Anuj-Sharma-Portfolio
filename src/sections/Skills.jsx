import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Capabilities across analytics, programming, and machine learning"
        description="Focused on practical data skills, clean workflows, and the ability to communicate insights clearly across projects and analysis tasks."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
          >
            <SkillCard title={group.title} items={group.items} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
