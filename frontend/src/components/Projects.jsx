import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AR Finance Portal",
      description: "A comprehensive financial management system developed during a professional internship (Dec 2025 - April 2026). Integrated with Robotic Process Automation (RPA) and Data Automation (DA) to streamline invoice processing, automate email workflows, and provide advanced financial analytics.",
      tags: ["React", "Node.js", "MongoDB", "RPA", "Intelligent Automation"],
      github: "#",
      demo: "https://ar-bot-frontend.vercel.app/dashboard"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured Project</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 hover:border-indigo-100 transition-all group shadow-xl shadow-slate-100/50 max-w-3xl w-full"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-xs rounded-full uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-8 mt-auto">

                  <a href={project.demo} className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 text-base font-bold">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
