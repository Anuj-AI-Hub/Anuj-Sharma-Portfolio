import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificates, education, experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience & education"
        title="Learning path shaped by analysis, training, and technical exploration"
        description="This section reflects verified education and internship training information, alongside recognized learning certificates."
      />

      <div className="experience-grid">
        <div className="timeline panel-surface">
          <h3><BriefcaseBusiness size={18} /> Experience</h3>
          {experience.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p className="company-name">{item.company}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="stacked-panels">
          <div className="timeline panel-surface">
            <h3><GraduationCap size={18} /> Education</h3>
            {education.map((item) => (
              <div key={item.title} className="timeline-item compact-item">
                <div className="timeline-dot" />
                <div>
                  <span>{item.period}</span>
                  <h4>{item.title}</h4>
                  <p className="company-name">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline panel-surface">
            <h3><Award size={18} /> Certificates</h3>
            <div className="cert-list">
              {certificates.map((item) => (
                <motion.div
                  key={item.name}
                  className="cert-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <strong>{item.name}</strong>
                  <span>{item.provider}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
