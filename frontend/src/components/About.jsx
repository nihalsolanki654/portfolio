import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed"
          >
            <p>
              I'm <span className="text-indigo-600 font-semibold">Nihal Solanki</span>, an AI Developer and MSc IT student specializing in <span className="text-cyan-600 font-semibold">Intelligent Automation</span> and <span className="text-indigo-600 font-semibold">Full-Stack Development</span>.
            </p>
            <p>
              With professional experience as an RPA Intern at Tecnoprism, I build high-performance web applications that bridge the gap between complex backend automation and seamless user experiences.
            </p>
            <p>
              I am dedicated to creating state-of-the-art AI solutions that solve real-world problems through innovation and constant learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-50 relative group"
          >
            <div className="absolute inset-0 bg-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-indigo-600 text-sm font-mono">01</span>
              My Journey
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-indigo-600 transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-100 border-2 border-white group-hover:bg-indigo-600 transition-colors"></div>
                <h4 className="font-bold text-slate-400 uppercase tracking-wider text-sm font-mono">Dec 2025 - April 2026</h4>
                <p className="text-indigo-600 font-semibold">RPA Intern</p>
                <p className="text-slate-500">Tecnoprism</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-indigo-600 transition-colors delay-75">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-100 border-2 border-white group-hover:bg-indigo-600 transition-colors"></div>
                <h4 className="font-bold text-slate-400 uppercase tracking-wider text-sm font-mono">2024 - Present</h4>
                <p className="text-indigo-600 font-semibold">MSc IT</p>
                <p className="text-slate-500">CVMU , Anand</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-indigo-600 transition-colors delay-150">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-100 border-2 border-white group-hover:bg-indigo-600 transition-colors"></div>
                <h4 className="font-bold text-slate-400 uppercase tracking-wider text-sm font-mono">2021 - 2024</h4>
                <p className="text-indigo-600 font-semibold">BCA</p>
                <p className="text-slate-500">MKBU, Bhavanagar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
