
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="lg:sticky lg:top-32">
            <div className="text-brand-gold font-black uppercase tracking-[0.6em] text-xs mb-8">Executive Liaison</div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-[0.9]">Contact Us <br /><span className="text-brand-maroon"></span></h1>
            <p className="text-2xl text-slate-600 mb-16 leading-relaxed font-bold italic">
              "Have a project in mind or want to grow your business online? Get in touch with us today."
            </p>

            {/* Icon Grid - Standardized to Brand Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
              <div className="flex flex-col space-y-6">
                <div className="w-16 h-16 bg-brand-maroon text-brand-gold rounded-[1.25rem] flex items-center justify-center shadow-2xl">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-maroon uppercase tracking-[0.3em] mb-2">Direct Command</h4>
                  <p className="text-xl text-slate-900 font-black"><a href="tel:+919962999817" className="hover:text-brand-maroon transition-colors block">9962999817</a><a href="tel:+919962999818" className="hover:text-brand-maroon transition-colors block">9962999818</a> <a href="tel:+919962999819" className="hover:text-brand-maroon transition-colors block">9962999819</a></p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="w-16 h-16 bg-brand-maroon text-brand-gold rounded-[1.25rem] flex items-center justify-center shadow-2xl">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-maroon uppercase tracking-[0.3em] mb-2">Elite Inbox</h4>
                  <p className="text-xl text-slate-900 font-black"><a href="mailto:info@arkayuga.com" className="hover:text-brand-maroon transition-colors block">info@arkayuga.com</a></p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="w-16 h-16 bg-brand-maroon text-brand-gold rounded-[1.25rem] flex items-center justify-center shadow-2xl">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-maroon uppercase tracking-[0.3em] mb-2">The Atelier</h4>
                  <p className="text-xl text-slate-900 font-black uppercase tracking-tighter">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Site%20no.54%2C%20Door%20no.29%20ashok%20layout%2C%20civil%20aerodrome%20post%2C%20sitra%2C%20Coimbatore%20641014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-maroonDark transition-colors block"
                      aria-label="Open Arkayuga address in Google Maps"
                    >
                      Site no.54, Door no.29 ashok layout, civil aerodrome post, sitra, Coimbatore 641014
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="w-16 h-16 bg-brand-maroon text-brand-gold rounded-[1.25rem] flex items-center justify-center shadow-2xl">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-maroon uppercase tracking-[0.3em] mb-2">Operating Window</h4>
                  <p className="text-xl text-slate-900 font-black">Mon - Sat: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Prestige Commitment Box */}
            {/* <div className="bg-brand-maroon text-white p-16 rounded-[4rem] shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <h4 className="text-3xl font-black mb-10 uppercase tracking-tighter">The Gold Commitment</h4>
              <ul className="space-y-8">
                {[
                  { icon: Zap, text: "Complimentary Growth Architecture Audit" },
                  { icon: ShieldCheck, text: "Strict Executive Confidentiality" },
                  { icon: HeartHandshake, text: "Direct Partner-Level Engagement" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-6">
                    <div className="bg-brand-gold text-brand-maroon p-2 rounded-xl shadow-xl">
                      <item.icon size={24} />
                    </div>
                    <span className="font-black uppercase tracking-tight text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Embedded Google Map */}
          
          {/* Form Side */}
          <div className="lg:pt-12">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <div>
        <iframe
          title="Arkayuga Location Map"
          src="https://www.google.com/maps/search/?api=1&query=Site%20no.54%2C%20Door%20no.29%20ashok%20layout%2C%20civil%20aerodrome%20post%2C%20sitra%2C%20Coimbatore%20641014"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
    
  );
};

export default Contact;
