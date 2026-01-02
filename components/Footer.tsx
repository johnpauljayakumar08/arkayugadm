
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Landmark, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';
const logo = new URL('../assets/arkayuga_logo.png', import.meta.url).href;
const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-maroon text-white/70 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            {/* <div className="flex items-center space-x-2 mb-6"> */}
              {/* <img src={logo} alt="Arkayuga" className="w-30 h-20 block" /> */}
            {/* </div> */}
            <span className="text-2xl font-black text-white tracking-tighter uppercase">Digital Agency</span>
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
            <ul className="flex flex-col gap-4 font-bold">
              <li className="w-full flex items-start space-x-3">
                <MapPin className="text-brand-gold mt-1 shrink-0" size={20} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Site%20no.54%2C%20Door%20no.29%20ashok%20layout%2C%20civil%20aerodrome%20post%2C%20sitra%2C%20Coimbatore%20641014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                  aria-label="Open Arkayuga address in Google Maps"
                >
                  Site no.54, Door no.29 ashok layout, civil aerodrome post, sitra, Coimbatore 641014
                </a>
              </li>
              <li className="w-full flex items-center space-x-3">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <a href="mailto:info@arkayuga.com" className="hover:text-white transition-colors block">info@arkayuga.com</a>
              </li>
              <li className="w-full flex items-center space-x-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <a href="tel:+919962999817" className="hover:text-white transition-colors block">9962999817</a>
              </li>
              <li className="w-full flex items-center space-x-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <a href="tel:+919962999818" className="hover:text-white transition-colors block">9962999818</a>
              </li>
              <li className="w-full flex items-center space-x-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <a href="tel:+919962999819" className="hover:text-white transition-colors block">9962999819</a>
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
          <p>© {new Date().getFullYear()} Arkayuga Digital Agency. All rights reserved.</p>
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
