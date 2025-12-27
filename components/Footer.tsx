
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Landmark, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-maroon text-white/70 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-gold p-1.5 rounded-lg">
                <Landmark className="text-brand-maroon w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">DigiGrow</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 font-medium">
              The gold standard in digital marketing. We deliver prestige and performance for brands that demand excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-maroon transition-all border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-gold transition-colors flex items-center group font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2 group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Connect</h3>
            <ul className="space-y-4 font-bold">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-gold mt-1 shrink-0" size={20} />
                <span>India Office, New Delhi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <a href="mailto:info@digigrow.com" className="hover:text-white transition-colors">info@digigrow.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91-XXXXXXXXXX</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Stay Informed</h3>
            <p className="text-sm text-white/60 mb-4 font-medium">Subscribe for elite marketing insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-brand-gold text-sm text-white font-bold"
              />
              <button className="bg-brand-gold hover:bg-white text-brand-maroon px-4 py-2 rounded-r-lg transition-colors font-black uppercase text-xs">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} DigiGrow Elite Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
