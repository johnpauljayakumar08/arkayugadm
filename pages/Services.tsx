
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, getIcon } from '../constants';
import { CheckCircle2, Search, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24"
      >
        <div className="text-brand-gold font-black uppercase tracking-[0.5em] text-xs mb-6">Expertise Portfolio</div>
        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">Bespoke <br /><span className="text-brand-maroon">Solutions</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-semibold italic">
          "Elite tools for the discerning brand. We don't just provide services; we engineer unfair advantages."
        </p>
      </motion.div>

      {/* Services List - Updated Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1"
              >
                <div className="w-20 h-20 bg-brand-maroon text-brand-gold rounded-[1.5rem] flex items-center justify-center mb-10 shadow-2xl">
                  {getIcon(service.icon, "w-10 h-10")}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 mb-10 shadow-inner border-l-4 border-l-brand-gold"
                >
                  <h4 className="text-xs font-black text-brand-maroon uppercase tracking-[0.4em] mb-6 flex items-center">
                    <Search size={14} className="mr-2 text-brand-gold" /> Critical Competencies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.keywords.map((kw, kIdx) => (
                      <span key={kIdx} className="bg-white px-5 py-2.5 rounded-2xl text-[10px] font-black text-brand-maroon uppercase tracking-widest border border-slate-200 shadow-sm hover:border-brand-gold transition-all cursor-default">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Strategic Superiority",
                    "Customized Architecture",
                    "Infinite Optimization",
                    "Executive Level Reporting"
                  ].map((text, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-slate-900"
                    >
                      <CheckCircle2 className="text-brand-gold shrink-0" size={20} />
                      <span className="text-sm font-black uppercase tracking-tight">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative group overflow-hidden rounded-[4rem] shadow-3xl">
                  <div className="absolute inset-0 bg-brand-maroon/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1460925895917-afdab827c52f', // seo
                      '1551288049-bebda4e38f71', // sem
                      '1611162617474-5b21e879e113', // smm
                      '1486312338219-ce68d2c6f44d', // lead
                    ][idx % 4] || '1460925895917-afdab827c52f'}?auto=format&fit=crop&q=80&w=800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-10 left-10 z-20">
                    <div className="bg-brand-gold text-brand-maroon px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Premium Asset</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner - Unified Icons */}
      <section className="mt-40 relative px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-24 bg-brand-maroon rounded-[4rem] text-center overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#9E7E5D_0%,transparent_50%)] opacity-10"></div>
          
          <div className="relative z-10 px-8">
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase">Unlock Elite Potential</h2>
            <p className="text-xl text-brand-gold/80 mb-12 max-w-2xl mx-auto leading-relaxed font-bold italic">
              "Exclusivity is our standard. We build strategies for brands that refuse to settle for second place."
            </p>
            <motion.a 
              href="#/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-4 bg-brand-gold text-brand-maroon px-12 py-6 rounded-3xl font-black text-2xl hover:bg-white transition-all shadow-2xl"
            >
              <span>Command Your Market</span>
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
