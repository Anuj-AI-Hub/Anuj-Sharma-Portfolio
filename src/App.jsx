import Navbar from './components/Navbar';
import AnimatedCursor from './components/AnimatedCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import AnalyticsShowcase from './sections/AnalyticsShowcase';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-shell">
      <AnimatedCursor />
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />
      <div className="bg-orb orb-3" aria-hidden="true" />

      <Navbar />

      <main className="page-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AnalyticsShowcase />
        <Experience />
        <Services />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>© 2026 Anuj Sharma • Data Science • Data Analytics • Machine Learning</p>
      </footer>
    </div>
  );
}

export default App;
