import { FC, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: FC<NavbarProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Projets', href: '#projets', num: '01' },
    { label: 'Compétences', href: '#competences', num: '02' },
    { label: 'Expériences', href: '#experiences', num: '03' },
    { label: 'Formations', href: '#formations', num: '04' },
    { label: 'Contact', href: '#contact', num: '05' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[var(--bg)]/90 border-b border-[var(--border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        <a href="#" className="group flex items-center">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[var(--text)] group-hover:text-[var(--text-2)] transition-colors">
            Vincent Giacalone
          </span>
        </a>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème clair/sombre"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[var(--bg-soft)] hover:bg-[var(--bg-soft-strong)] border border-[var(--border)] text-[var(--text-3)] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--text)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--text)]" />
            )}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              id="nav-dropdown-button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] hover:bg-[var(--bg-soft-strong)] border border-[var(--border)] text-[var(--text)] font-mono text-xs tracking-wider transition-all cursor-pointer"
            >
              <span className="font-medium">Menu</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--text-3)] transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 bg-[var(--bg-elevated)] border border-[var(--border-strong)] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl"
                >
                  <div className="text-[10px] font-mono text-[var(--text-4)] uppercase tracking-widest px-3 py-1.5 font-semibold">
                    Catégories
                  </div>
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--bg-soft)] transition-colors group"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          {link.label}
                        </span>
                        <span className="text-[11px] text-[var(--text-3)] font-bold">{link.num}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};