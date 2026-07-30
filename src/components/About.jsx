import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Stream Shifted", value: "Arts ➔ SE" },
    { label: "Focus Area", value: "Full-Stack" },
    { label: "Core Values", value: "Clean Code & UX" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20"
          >
            ✦ Personal Story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            About <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Me.</span>
          </motion.h2>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I'm <span className="text-white font-semibold">Chavindu Pahasara</span>, a dedicated Information Technology student with a strong passion for developing modern web applications, scalable software solutions, and security utilities.
              </p>
              <p>
                My educational journey is unique-having completed my Advanced Level in the <span className="text-indigo-300 font-medium">Arts stream</span>, I successfully transitioned into <span className="text-indigo-300 font-medium">Information Technology and Software Engineering</span>. This background gives me a distinct advantage: blending creative thinking, problem-solving, and analytical skills to craft intuitive digital experiences.
              </p>
              <p>
                I enjoy taking on challenging projects-from computer vision tools like <span className="text-slate-100 font-medium">Road Damage Detection Systems</span> to practical applications like <span className="text-slate-100 font-medium">GPA Calculators</span> and <span className="text-slate-100 font-medium">Cipher Systems</span>.
              </p>
            </div>

            {/* Sub Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-base sm:text-lg font-bold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Info / Fast Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-4 p-8 rounded-3xl glass border border-white/10 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-3">
                Key Highlights
              </h3>
              
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 text-lg">✦</span>
                  <span>Focused on Clean Architecture & Design Patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-lg">✦</span>
                  <span>Passionate about Frontend Aesthetics & Responsive UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 text-lg">✦</span>
                  <span>Continuous Learner in Emerging Web Technologies</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="w-full block text-center py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/10 active:scale-95"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;