import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, programs } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsOpen(false);
  }, [location]);

  const showSolid = !isHome || isScrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm">L</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold text-lg tracking-tight leading-none ${showSolid ? 'text-surface-900' : 'text-white'}`}>
                  LIRP
                </span>
                <span className={`text-[10px] tracking-wider uppercase leading-none ${showSolid ? 'text-surface-400' : 'text-white/50'}`}>
                  by Laxmaya
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <Link
                  to="/programs"
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    showSolid ? 'text-surface-700 hover:text-brand-600 hover:bg-surface-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Programs
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                </Link>
                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-surface-100 overflow-hidden"
                    >
                      {programs.map((p) => (
                        <Link
                          key={p.id}
                          to={`/programs#${p.id}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors"
                        >
                          <span className="text-lg">{p.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-surface-900">{p.title}</p>
                            <p className="text-xs text-surface-500">{p.subtitle}</p>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/programs"
                        className="block px-4 py-3 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
                      >
                        View All Programs →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.filter(l => l.label !== 'Programs').map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    showSolid ? 'text-surface-700 hover:text-brand-600 hover:bg-surface-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3">
              <Link
                to="/apply"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-200 active:scale-95"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${showSolid ? 'text-surface-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-20 overflow-y-auto"
          >
            <nav className="px-6 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-4 text-lg font-semibold text-surface-900 border-b border-surface-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block py-4 text-lg font-semibold text-surface-900 border-b border-surface-100"
              >
                Contact
              </Link>
              <div className="mt-6 space-y-3">
                <Link
                  to="/apply"
                  className="block w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-xl text-center"
                >
                  Apply Now
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-50 text-green-700 font-semibold rounded-xl"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
