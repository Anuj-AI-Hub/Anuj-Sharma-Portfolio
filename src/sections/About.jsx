import { motion } from 'framer-motion';
import { BrainCircuit, Database, NotebookPen, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const highlights = [
  { icon: Database, title: 'Python & SQL', text: 'Building data workflows with Python, SQL, and structured analysis.' },
  { icon: NotebookPen, title: 'EDA & Cleaning', text: 'Preparing raw datasets through cleaning, transformation, and exploration.' },
  { icon: Sparkles, title: 'Visualization', text: 'Turning analysis into clear, decision-ready visual narratives.' },
  { icon: BrainCircuit, title: 'ML Foundations', text: 'Exploring supervised learning, evaluation, and end-to-end pipelines.' },
];

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <SectionHeading
        eyebrow="About"
        title="A data-minded learner with practical project experience"
        description="I am building a foundation in data science and analytics through hands-on project work, structured learning, and real-world-style data problem solving."
      />

      <div className="about-grid">
        <motion.div
          className="about-copy panel-surface"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I am a learner focused on data science, data analytics, and machine learning, with a growing practical understanding of Python programming, SQL, data cleaning, exploratory data analysis, data visualization, and model development.
          </p>
          <p>
            My work is centered on understanding real data, identifying patterns, and communicating insights clearly through dashboards and analytical thinking. I am especially interested in building end-to-end learning workflows that connect raw information to meaningful decisions.
          </p>
          <div className="education-list">
            <div>
              <span className="meta-label">Education</span>
              <p>B.A., Raj Rishi Bhartrihari Matsya University</p>
            </div>
            <div>
              <span className="meta-label">Diploma</span>
              <p>Data Science / AI &amp; Machine Learning, TIPS-G, Alwar (2024–2026 expected completion)</p>
            </div>
          </div>
        </motion.div>

        <div className="highlight-grid">
          {highlights.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              className="mini-panel panel-surface"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mini-icon">
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
