import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/portfolioData';
import DataScene from '../components/DataScene';

export default function Hero() {
  return (
    <section id="top" className="hero-section section-shell">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Data • Intelligence • Decisions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="role-line"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {profile.intro}
        </motion.p>

        <motion.p
          className="preamble"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="cta-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <a href="#projects" className="primary-button">
            Explore My Work <ArrowRight size={18} />
          </a>
          <a href="/Anuj-Sharma-Resume.txt" className="secondary-button" download>
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="social-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <ArrowUpRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12 }}
      >
        <DataScene />
      </motion.div>
    </section>
  );
}
