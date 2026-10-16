import { motion } from 'framer-motion';
import { BarChart3, Database, FileSpreadsheet, GitBranch, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/portfolioData';

const iconMap = [Database, BarChart3, Sparkles, FileSpreadsheet, GitBranch];

export default function Services() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="What I can do"
        title="Practical data and analytics capabilities"
        description="These capabilities reflect skills and learning areas relevant to data-focused projects, analysis work, and machine learning exploration."
      />

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[index % iconMap.length];
          return (
            <motion.div
              key={service}
              className="service-card panel-surface"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="service-icon">
                <Icon size={22} />
              </div>
              <p>{service}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
