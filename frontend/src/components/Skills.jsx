import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Layout className="text-indigo-600" />,
      skills: ["React", "Node.js", "Express", "Vite", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Automation & AI",
      icon: <Server className="text-cyan-600" />,
      skills: ["RPA", "AA (Automation Anywhere)", "Python", "Data Automation"]
    },
    {
      title: "Database",
      icon: <Database className="text-purple-600" />,
      skills: ["MongoDB", "MySQL", "NoSQL", "Firebase"]
    },
    {
      title: "Tools & Design",
      icon: <Cpu className="text-orange-600" />,
      skills: ["Git & GitHub", "Postman", "DSA", "UI/UX Basics"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group shadow-sm hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-slate-50 text-slate-500 text-sm rounded-lg border border-slate-100 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
