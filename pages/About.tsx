
import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES, getIcon } from '../constants';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  // Use a type-casted local variable to bypass environment-specific Framer Motion type errors
  const m = motion as any;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Page Header */}
      <m.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 bg-brand-maroon/5 border border-brand-maroon/10 rounded-full text-brand-maroon text-xs font-black uppercase tracking-[0.3em] mb-6">Our Legacy</div>
        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">The Prestige <br /><span className="text-brand-gold">Standard</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-bold italic">
          "Architecture of digital dominance. We build the foundations upon which global leaders stand."
        </p>
      </m.div>

      {/* Company Intro */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-black text-brand-maroon mb-8 tracking-tighter uppercase">Power Through Precision</h3>
              <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
                DigiGrow was founded with a singular focus: to redefine the digital experience through the lens of high-end strategy and elite execution.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-12 font-medium italic">
                Our team is a collective of specialized minds dedicated to the craft of growth. We don't just follow trends; we set the benchmark.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { val: '98%', label: 'Loyalty' },
                  { val: '500+', label: 'Campaigns' },
                  { val: '24/7', label: 'Support' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center shadow-sm">
                    <div className="text-4xl font-black text-brand-maroon mb-1 tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </m.div>
            <m.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-brand-gold/10 rounded-[4rem] rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Elite Team" 
                className="rounded-[3rem] shadow-3xl relative z-10 border-8 border-white"
              />
            </m.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Standardized Icon Colors */}
      <section className="py-24 bg-brand-maroon text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <m.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-16 rounded-[4rem] border border-white/10 group hover:border-brand-gold/60 transition-all duration-500"
            >
              <div className="w-24 h-24 bg-brand-maroon text-brand-gold rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform shadow-2xl border-2 border-brand-gold/30">
                <Target size={48} />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">Our Command</h2>
              <p className="text-2xl text-white/70 leading-relaxed font-bold italic">
                "To architect market-leading digital ecosystems that yield undisputed ROI for elite brands."
              </p>
            </m.div>
            <m.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-16 rounded-[4rem] border border-white/10 group hover:border-brand-gold/60 transition-all duration-500"
            >
              <div className="w-24 h-24 bg-brand-maroon text-brand-gold rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform shadow-2xl border-2 border-brand-gold/30">
                <Eye size={48} />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">Our Vision</h2>
              <p className="text-2xl text-white/70 leading-relaxed font-bold italic">
                "To be the global benchmark for digital excellence, where our gold mark represents the peak of performance."
              </p>
            </m.div>
          </div>
        </div>
      </section>

      {/* Core Values - Standardized Icons */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="text-brand-gold font-black uppercase tracking-[0.6em] text-xs mb-4">Core Principles</div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">Ethos of Elite Results</h2>
          </div>
          <m.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {CORE_VALUES.map((value, idx) => (
              <m.div 
                key={idx} 
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-28 h-28 bg-brand-maroon text-brand-gold rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl border-4 border-white">
                  {getIcon(value.icon, "w-12 h-12")}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-none">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-bold italic px-4">
                  "{value.description}"
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default About;
