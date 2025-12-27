
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-maroon p-2 rounded-lg group-hover:bg-brand-maroonDark transition-colors shadow-lg">
              <Landmark className="text-brand-gold w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase ${scrolled ? 'text-brand-maroon' : 'text-brand-maroon'}`}>
              DigiGrow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-brand-gold ${
                  location.pathname === link.path ? 'text-brand-maroon border-b-2 border-brand-gold' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-maroon text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-maroonDark transition-all shadow-xl hover:shadow-brand-maroon/20"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-maroon hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block px-3 py-4 text-lg font-bold border-b border-slate-100 last:border-0 ${
                location.pathname === link.path ? 'text-brand-maroon' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block w-full text-center bg-brand-maroon text-white px-6 py-4 rounded-xl text-lg font-bold mt-4"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
