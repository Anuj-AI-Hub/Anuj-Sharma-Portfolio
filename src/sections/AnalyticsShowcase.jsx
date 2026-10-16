import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

export default function AnalyticsShowcase() {
  return (
    <section id="analytics" className="section-shell">
      <SectionHeading
        eyebrow="Data analytics showcase"
        title="Turning analysis into a clear, decision-ready story"
        description="This dashboard is intentionally illustrative and labeled as sample data so it remains transparent and avoids presenting fabricated results as project outputs."
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <AnalyticsDashboard />
      </motion.div>
    </section>
  );
}
