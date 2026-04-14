import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [name, setName] = React.useState('');
  const [fontIndex, setFontIndex] = React.useState(0);
  const fullName = "Nihal Solanki.";
  const fonts = ['font-sans', 'font-serif', 'font-mono'];

  React.useEffect(() => {
    let currentName = '';
    let isDeleting = false;
    let charIndex = 0;
    let timeoutId;

    const type = () => {
      if (!isDeleting && charIndex <= fullName.length) {
        setName(fullName.substring(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(type, 120);
      } else if (isDeleting && charIndex >= 0) {
        setName(fullName.substring(0, charIndex));
        charIndex--;
        timeoutId = setTimeout(type, 80);
      } else if (charIndex > fullName.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2000);
      } else if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        setFontIndex((prev) => (prev + 1) % fonts.length);
        timeoutId = setTimeout(type, 500);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-600 font-mono mb-4 text-lg font-semibold tracking-wider uppercase"
          >
            Hi, my name is
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-7xl font-bold mb-6 text-slate-900 min-h-[1.2em] ${fonts[fontIndex]}`}
          >
            {name}<span className="animate-pulse text-indigo-600">|</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-slate-500 mb-8"
          >
            I build intelligent solutions.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 text-lg mb-10 leading-relaxed mx-auto"
          >
            MSc IT Student & Aspiring <span className="text-indigo-600 font-semibold">AI Developer</span>. Currently an RPA Intern at Tecnoprism, focused on building intelligent automation and cutting-edge AI solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-indigo-200"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <a
              href="/nihal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:-translate-y-1"
            >
              Resume <Download size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
