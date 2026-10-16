import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand-mark" aria-label="Anuj Sharma home">
          AS
        </a>

        <div className={`nav-panel ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-button subtle">
            Contact
          </a>
          <a href="/Anuj-Sharma-Resume.txt" className="nav-button primary" download>
            Resume <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
