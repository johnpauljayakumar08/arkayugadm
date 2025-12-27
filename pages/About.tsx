
import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES, getIcon } from '../constants';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
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
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 bg-brand-maroon/5 border border-brand-maroon/10 rounded-full text-brand-maroon text-xs font-black uppercase tracking-widest mb-6">Our Legacy</div>
        <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">Defining the <br /><span className="text-brand-gold">Gold Standard</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium italic">
          "Fresh perspectives anchored in timeless excellence. We are the architects of digital growth."
        </p>
      </motion.div>

      {/* Company Intro */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black text-brand-maroon mb-6 tracking-tight">Precision in Every Pivot</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                DigiGrow was founded on the principle that digital marketing should be as strong as Maroon and as valuable as Gold. We don't just execute tasks; we craft bespoke growth engines.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-10 font-medium">
                Our cross-disciplinary team of elite strategists, creative designers, and technical experts works in synergy to ensure your brand doesn't just survive the digital shift—it dominates it.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { val: '98%', label: 'Loyalty' },
                  { val: '50+', label: 'Ascents' },
                  { val: '24/7', label: 'Command' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                    <div className="text-3xl font-black text-brand-maroon mb-1 tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-[3rem] rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Elite Team" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Standardized Icons */}
      <section className="py-24 bg-brand-maroon text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 group hover:border-brand-gold/50 transition-all"
            >
              <div className="w-20 h-20 bg-brand-gold text-brand-maroon rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl">
                <Target size={36} />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">Our Command</h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium">
                To engineer high-performance digital marketing ecosystems that deliver undisputed market leadership for our exclusive partners.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 group hover:border-brand-gold/50 transition-all"
            >
              <div className="w-20 h-20 bg-brand-gold text-brand-maroon rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl">
                <Eye size={36} />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">Our Vision</h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium">
                To be the global benchmark for boutique digital excellence, where innovation and elite results are synonymous with our name.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Standardized Icons */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-4">Foundation</div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">The Ethics of Excellence</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {CORE_VALUES.map((value, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-brand-maroon text-brand-gold rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl border-4 border-white">
                  {getIcon(value.icon, "w-10 h-10")}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-bold italic">
                  "{value.description}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
