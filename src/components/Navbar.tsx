import { FC, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: FC<NavbarProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Projets', href: '#projets', num: '01' },
    { label: 'Approche', href: '#approche', num: '02' },
    { label: 'Expériences', href: '#experiences', num: '03' },
    { label: 'Compétences', href: '#competences', num: '04' },
    { label: 'Formations', href: '#formations', num: '05' },
  ];

  // Close dropdown on outside click
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0e0f12]/90 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Nom et prénom uniquement */}
        <a href="#" className="group flex items-center">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#ff4b16] transition-colors">
            Vincent Giacalone
          </span>
        </a>

        {/* Right: Menu déroulant des catégories */}
        <div className="relative" ref={dropdownRef}>
          <button
            id="nav-dropdown-button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs tracking-wider transition-all cursor-pointer shadow-sm"
          >
            <span className="font-medium">Menu</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#ff4b16] transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Panel */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-56 bg-[#14161d] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl"
              >
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-3 py-1.5 font-semibold">
                  Catégories
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-white/80 hover:text-white hover:bg-white/10 transition-colors group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-[#ff4b16] font-bold">{link.num}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
