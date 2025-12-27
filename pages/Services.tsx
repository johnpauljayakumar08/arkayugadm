
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, getIcon } from '../constants';
import { CheckCircle2, Search, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  // Use a type-casted local variable to bypass environment-specific Framer Motion type errors
  const m = motion as any;

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <m.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24"
      >
        <div className="text-brand-gold font-black uppercase tracking-[0.5em] text-xs mb-8">Expertise Portfolio</div>
        <h1 className="text-6xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-[0.9]">Signature <br /><span className="text-brand-maroon">Solutions</span></h1>
        <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-bold italic">
          "Elite tools for brands that demand nothing less than undisputed digital leadership."
        </p>
      </m.div>

      {/* Services List - Uniform Icons & Styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-48">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <m.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1"
              >
                {/* Brand-consistent Maroon/Gold Icon Container */}
                <div className="w-24 h-24 bg-brand-maroon text-brand-gold rounded-[2rem] flex items-center justify-center mb-12 shadow-3xl">
                  {getIcon(service.icon, "w-12 h-12")}
                </div>
                
                <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter uppercase leading-none">{service.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-bold italic">
                  "{service.description}"
                </p>
                
                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 mb-12 shadow-inner border-l-8 border-l-brand-gold"
                >
                  <h4 className="text-sm font-black text-brand-maroon uppercase tracking-[0.4em] mb-8 flex items-center">
                    <Search size={18} className="mr-3 text-brand-gold" /> Critical Competencies
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {service.keywords.map((kw, kIdx) => (
                      <span key={kIdx} className="bg-white px-6 py-3 rounded-2xl text-[11px] font-black text-brand-maroon uppercase tracking-widest border border-slate-200 shadow-md hover:border-brand-gold transition-all cursor-default">
                        {kw}
                      </span>
                    ))}
                  </div>
                </m.div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    "Executive Strategy",
                    "Custom Architecture",
                    "Elite Performance",
                    "Gold Standard Audit"
                  ].map((text, i) => (
                    <m.li 
                      key={i} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 text-slate-900"
                    >
                      <div className="bg-brand-gold/20 p-1 rounded-lg">
                        <CheckCircle2 className="text-brand-maroon" size={20} />
                      </div>
                      <span className="text-sm font-black uppercase tracking-tight">{text}</span>
                    </m.li>
                  ))}
                </ul>
              </m.div>
              
              <m.div 
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="flex-1 w-full"
              >
                <div className="relative group overflow-hidden rounded-[5rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)]">
                  <div className="absolute inset-0 bg-brand-maroon/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1460925895917-afdab827c52f',
                      '1551288049-bebda4e38f71',
                      '1611162617474-5b21e879e113',
                      '1486312338219-ce68d2c6f44d',
                    ][idx % 4] || '1460925895917-afdab827c52f'}?auto=format&fit=crop&q=80&w=1000`} 
                    alt={service.title} 
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-12 left-12 z-20">
                    <div className="bg-brand-gold text-brand-maroon px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl">Elite Asset Profile</div>
                  </div>
                </div>
              </m.div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Consistent Icons */}
      <section className="mt-48 relative px-4 sm:px-6 lg:px-8">
        <m.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-32 bg-brand-maroon rounded-[5rem] text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#9E7E5D_0%,transparent_50%)] opacity-20"></div>
          
          <div className="relative z-10 px-12">
            <h2 className="text-6xl font-black text-white mb-10 tracking-tighter uppercase">Forge Your Legacy</h2>
            <p className="text-2xl text-brand-gold/90 mb-16 max-w-3xl mx-auto leading-relaxed font-bold italic">
              "We don't just provide services—we provide the gold key to market dominance. Ready for the ascent?"
            </p>
            <m.a 
              href="#/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-6 bg-brand-gold text-brand-maroon px-16 py-8 rounded-[2rem] font-black text-3xl hover:bg-white transition-all shadow-3xl"
            >
              <span>Command Excellence</span>
              <ArrowRight size={32} />
            </m.a>
          </div>
        </m.div>
      </section>
    </div>
  );
};

export default Services;
