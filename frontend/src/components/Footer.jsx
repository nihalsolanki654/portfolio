import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            
            <p className="text-slate-500 text-sm font-medium">Innovating through code, one project at a time.</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://github.com/nihalsolanki654?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
            <a href="mailto:nihalsolanki654@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
          </div>

          <button 
            onClick={() => scroll.scrollToTop()}
            className="w-12 h-12 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all border border-slate-200 rounded-full flex items-center justify-center group shadow-sm"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/50 text-center text-slate-400 text-xs uppercase tracking-widest font-mono">
          <p>&copy; {currentYear} Nihal Solanki. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
