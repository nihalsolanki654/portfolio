import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-mono uppercase tracking-tight">Contact Information</h3>
            <p className="text-slate-500 text-lg mb-8 max-w-md">
              Feel free to reach out for collaborations, project inquiries, or just to say hi!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-indigo-50/50 rounded-xl flex items-center justify-center border border-indigo-100 group-hover:border-indigo-600 transition-colors">
                  <Mail className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Email</h4>
                  <a href="mailto:nihalsolanki654@gmail.com" className="text-lg text-slate-700 hover:text-indigo-600 transition-colors font-medium">nihalsolanki654@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-indigo-50/50 rounded-xl flex items-center justify-center border border-indigo-100 group-hover:border-indigo-600 transition-colors">
                  <Phone className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Phone</h4>
                  <a href="tel:8128302081" className="text-lg text-slate-700 hover:text-indigo-600 transition-colors font-medium">+91 8128 302081</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin className="text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Location</h4>
                  <p className="text-lg text-slate-700 font-medium font-mono">Vadodara, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Connect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100/50 flex flex-col justify-center items-center text-center space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 font-mono uppercase tracking-tight">Quick Connect</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                Ready to start a project? Choose your preferred way to reach out and I'll get back to you instantly.
              </p>
            </div>

            <div className="grid gap-4 w-full">
              <a
                href="mailto:nihalsolanki654@gmail.com"
                className="flex items-center justify-center gap-3 w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-100 group"
              >
                <Mail size={22} className="group-hover:scale-110 transition-transform" />
                Email Me Directly
              </a>
              
              <a
                href="https://wa.me/918128302081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 border-2 border-slate-100 hover:border-indigo-600 hover:text-indigo-600 text-slate-700 rounded-2xl font-bold transition-all transform hover:-translate-y-1 group"
              >
                <Phone size={22} className="group-hover:scale-110 transition-transform" />
                WhatsApp Me
              </a>
            </div>

            <div className="pt-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em] font-mono">Available for new opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
