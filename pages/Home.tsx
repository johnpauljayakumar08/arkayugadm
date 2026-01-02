
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { SERVICES, getIcon } from '../constants';

const Home: React.FC = () => {
  // Use a type-casted local variable to bypass environment-specific Framer Motion type errors
  const m = motion as any;
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
      {/* Hero Section with Dynamic Animated Background */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center overflow-hidden">
        {/* Animated Motion Background */}
        <div className="absolute inset-0 -z-20 bg-slate-50">
           {/* Subtle texture layer */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.15] mix-blend-overlay"></div>
           
           {/* Floating Animated Blobs (GIF-like effect) */}
           <m.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-brand-maroon/20 to-transparent rounded-full blur-[100px]"
           />
           <m.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 60, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-15%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-tr from-brand-gold/25 to-transparent rounded-full blur-[120px]"
           />
           
           {/* Moving Grid Line (Visual Interest) */}
           <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#5D1B22_1px,transparent_1px),linear-gradient(to_bottom,#5D1B22_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <m.div 
          style={{ y: springY1, opacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-brand-maroon px-6 py-2 rounded-full text-sm font-black mb-10 shadow-2xl border border-brand-gold/30"
          >
            <Sparkles size={16} className="text-brand-gold animate-pulse" />
            <span className="uppercase tracking-[0.2em]">The Gold Standard of Marketing</span>
          </m.div>

          <m.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl lg:text-6xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter uppercase"
          >
            Grow Your Business Faster with <br />
            <span className="lg:text-5xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-maroon via-brand-gold to-brand-maroonDark">Result‑Driven Digital Marketing</span>
          </m.h1>

          <m.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-bold italic"
          >
            We help startups and growing brands increase visibility, generate quality leads, and convert traffic into loyal customers using proven digital marketing strategies.
          </m.p>

          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="group relative w-full sm:w-auto bg-brand-maroon text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-brand-maroonDark transition-all shadow-2xl hover:shadow-brand-maroon/40 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Get a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20"></div>
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-white/60 backdrop-blur-sm text-brand-maroon border-2 border-brand-maroon/20 px-12 py-5 rounded-2xl font-black text-xl hover:border-brand-maroon transition-all">
              View Our Services
            </Link>
          </m.div>
        </m.div>
      </section>

      {/* Redesigned Services UI - 3D Hover Cards */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-gold font-black uppercase tracking-[0.4em] mb-4 text-sm"
              >
                Signature Selection
              </m.div>
              <h2 className="text-5xl lg:text-6xl font-black text-brand-maroon tracking-tighter uppercase leading-[0.9]">
                We offer end‑to‑end  <br /> <span className="text-slate-900">digital marketing services</span>
              </h2>
            </div>
            <Link to="/services" className="group flex items-center space-x-4 text-brand-maroon font-black uppercase tracking-widest hover:text-brand-gold transition-colors">
              <span>Explore All services</span>
              <div className="w-14 h-14 rounded-2xl border-2 border-brand-maroon group-hover:border-brand-gold flex items-center justify-center transition-all group-hover:rotate-12">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <m.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative perspective-1000"
              >
                {/* 3D Background Card Effect */}
                <div className="absolute inset-0 bg-brand-maroon/5 rounded-[2.5rem] translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500 -z-10"></div>
                
                <div className="relative bg-slate-50 border border-slate-100 p-12 rounded-[2.5rem] transition-all duration-500 group-hover:-translate-y-6 group-hover:bg-white group-hover:shadow-[0_50px_100px_-20px_rgba(93,27,34,0.15)] group-hover:border-brand-gold/40 h-full flex flex-col">
                  <div className="mb-10 flex justify-between items-start">
                    <div className="w-20 h-20 bg-brand-maroon text-brand-gold rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl">
                      {getIcon(service.icon, "w-10 h-10")}
                    </div>
                    <span className="text-brand-gold/10 font-black text-7xl select-none leading-none">0{idx+1}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-maroon transition-colors leading-tight uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-slate-500 font-bold leading-relaxed mb-10 flex-grow text-lg italic">
                    "{service.description}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-gold/30"></div>
                      ))}
                    </div>
                    <Link to={`/services#${service.id}`} className="flex items-center space-x-2 text-brand-maroon font-black uppercase text-xs tracking-widest group-hover:text-brand-gold transition-colors">
                      <span>View Profile</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Branding Stats */}
      {/* <section className="py-24 bg-brand-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9E7E5D_0%,transparent_75%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Growth Vector', value: '15x' },
              { label: 'Elite Retainers', value: '180+' },
              { label: 'Campaign Awards', value: '35' },
              { label: 'Top Strategists', value: '30+' }
            ].map((stat, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-6xl lg:text-8xl font-black text-brand-gold mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-[0.5em] text-white/40">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final Call to Action */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[4rem] p-16 lg:p-28 shadow-3xl border border-brand-maroon/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-maroon translate-x-1/2 -skew-x-12 opacity-[0.05]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:max-w-2xl">
                <h2 className="text-5xl lg:text-7xl font-black text-brand-maroon mb-8 tracking-tighter uppercase leading-[0.9]">Ready to grow <br /><span className="text-slate-800">your business online?</span></h2>
                <p className="text-2xl text-slate-500 font-bold italic mb-8">"Let’s discuss your goals and build a strategy that works."</p>
                <div className="flex space-x-6">
                   <div className="flex items-center space-x-2 text-brand-gold font-black uppercase text-xs tracking-widest">
                    <CheckCircle2 size={18} /> <span>ELITE AUDIT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-gold font-black uppercase text-xs tracking-widest">
                    <CheckCircle2 size={18} /> <span>EXPERT COUNSEL</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="w-full lg:w-auto bg-brand-maroon text-white px-16 py-8 rounded-3xl font-black text-3xl hover:bg-brand-maroonDark transition-all shadow-2xl hover:shadow-brand-maroon/40 text-center uppercase tracking-tighter">
                Contact Us Today
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
