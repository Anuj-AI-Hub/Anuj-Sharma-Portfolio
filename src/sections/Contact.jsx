import { ArrowUpRight, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { contactLinks, profile } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <SectionHeading
        eyebrow="Contact"
        title="Open to internships and data-focused opportunities"
        description="I am actively looking to connect on internship, project, and analytics learning opportunities that align with data science, data analytics, and machine learning work."
      />

      <div className="contact-panel panel-surface">
        <div className="contact-copy">
          <p className="contact-label">Let’s connect</p>
          <h3>{profile.name}</h3>
          <p>{profile.title}</p>
          <a href={contactLinks.email} className="contact-link">
            <Mail size={16} /> {profile.email}
          </a>
        </div>

        <div className="contact-links">
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} /> LinkedIn
          </a>
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
