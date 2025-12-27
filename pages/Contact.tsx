
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div className="lg:sticky lg:top-32">
            <div className="text-brand-gold font-black uppercase tracking-[0.5em] text-xs mb-6">HQ Connect</div>
            <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">Initiate <br /><span className="text-brand-maroon">Dialogue</span></h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-semibold italic">
              "Elite growth starts with a single high-level conversation. Let's map your brand's future."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 bg-brand-maroon text-brand-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-maroon uppercase tracking-widest mb-1">Direct Command</h4>
                  <p className="text-slate-900 font-black">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 bg-brand-maroon text-brand-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-maroon uppercase tracking-widest mb-1">Elite Inbox</h4>
                  <p className="text-slate-900 font-black">info@digigrow.com</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 bg-brand-maroon text-brand-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-maroon uppercase tracking-widest mb-1">The Atelier</h4>
                  <p className="text-slate-900 font-black">New Delhi, Elite District</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 bg-brand-maroon text-brand-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-maroon uppercase tracking-widest mb-1">Operating Window</h4>
                  <p className="text-slate-900 font-black">Mon - Sat: 0900 - 1800</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-maroon text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">The Gold Commitment</h4>
              <ul className="space-y-6">
                {[
                  { icon: Zap, text: "Complimentary Elite Strategy Audit" },
                  { icon: ShieldCheck, text: "Full NDA Confidentiality Guaranteed" },
                  { icon: HeartHandshake, text: "Exclusivity-First Client Selection" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="bg-brand-gold text-brand-maroon p-1.5 rounded-lg">
                      <item.icon size={18} />
                    </div>
                    <span className="font-bold uppercase tracking-tight text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
