
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { SERVICES, getIcon } from '../constants';

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center overflow-hidden">
        {/* Living Background Overlay */}
        <div className="absolute inset-0 -z-20 bg-slate-50">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
           <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-br from-brand-maroon/20 to-transparent rounded-full blur-[120px]"
           />
           <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-full blur-[150px]"
           />
        </div>

        <motion.div 
          style={{ y: springY1, opacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md text-brand-maroon px-6 py-2 rounded-full text-sm font-black mb-10 shadow-xl border border-brand-gold/30"
          >
            <Sparkles size={16} className="text-brand-gold animate-pulse" />
            <span className="uppercase tracking-widest">The Gold Standard of Marketing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
          >
            CRAFTING <span className="text-brand-maroon">ELITE</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-goldLight">DIGITAL</span> LEGACIES
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-semibold italic"
          >
            "Where Maroon strength meets Gold excellence. We don't just market; we build empires."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="group relative w-full sm:w-auto bg-brand-maroon text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-maroonDark transition-all shadow-2xl hover:shadow-brand-maroon/40 overflow-hidden">
              <span className="relative z-10">Start Your Ascent</span>
              <div className="absolute inset-0 bg-brand-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20"></div>
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm text-brand-maroon border-2 border-brand-maroon/20 px-10 py-5 rounded-2xl font-black text-xl hover:border-brand-maroon transition-all">
              Our Portfolios
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Redesigned Services - Dynamic Card UI */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-gold font-black uppercase tracking-[0.3em] mb-4 text-sm"
              >
                Our Signature Selection
              </motion.div>
              <h2 className="text-5xl font-black text-brand-maroon tracking-tighter uppercase leading-none">
                Elite Marketing <br /> <span className="text-slate-900">Instruments</span>
              </h2>
            </div>
            <Link to="/services" className="group flex items-center space-x-3 text-brand-maroon font-black uppercase tracking-widest hover:text-brand-gold transition-colors">
              <span>View All Services</span>
              <div className="w-12 h-12 rounded-full border-2 border-brand-maroon group-hover:border-brand-gold flex items-center justify-center transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-brand-maroon rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 -z-10 opacity-5"></div>
                <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(93,27,34,0.15)] group-hover:border-brand-gold/30">
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 bg-brand-maroon text-brand-gold rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                      {getIcon(service.icon, "w-8 h-8")}
                    </div>
                    <div className="absolute -top-2 -right-2 text-brand-gold/20 font-black text-6xl select-none group-hover:text-brand-gold/40 transition-colors">0{idx+1}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-maroon transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-gold/20"></div>
                      ))}
                    </div>
                    <Link to={`/services#${service.id}`} className="bg-white p-3 rounded-full text-brand-maroon border border-slate-200 group-hover:bg-brand-maroon group-hover:text-white group-hover:border-brand-maroon transition-all shadow-sm">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Stats Breakdown */}
      <section className="py-24 bg-brand-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#9E7E5D_0%,transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Growth Multiplier', value: '12x' },
              { label: 'Elite Partners', value: '150+' },
              { label: 'Awarded Campaigns', value: '42' },
              { label: 'Expert Strategists', value: '25+' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl lg:text-7xl font-black text-brand-gold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[0.4em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl border border-brand-maroon/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-maroon translate-x-1/2 -skew-x-12 opacity-[0.03]"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-black text-brand-maroon mb-8 tracking-tighter leading-none">READY FOR THE <br /> <span className="text-slate-900">GOLD UPGRADE?</span></h2>
                <p className="text-xl text-slate-600 mb-10 font-semibold italic">Join the elite 2% of brands that dominate the digital skyline.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-brand-gold font-black uppercase text-xs tracking-widest">
                    <CheckCircle2 size={16} /> <span>PREMIUM AUDIT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-gold font-black uppercase text-xs tracking-widest">
                    <CheckCircle2 size={16} /> <span>EXPERT ANALYSIS</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <Link to="/contact" className="bg-brand-maroon text-white text-center py-6 rounded-3xl font-black text-2xl hover:bg-brand-maroonDark transition-all shadow-xl hover:shadow-brand-maroon/30">
                  Claim Your Consultation
                </Link>
                <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-[0.3em]">Exclusivity Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
