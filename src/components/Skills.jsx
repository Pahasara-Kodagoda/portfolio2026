import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Vite", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Framer Motion", level: "Intermediate" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Basic" },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL / SQL", level: "Intermediate" },
        { name: "Git / GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20"
          >
            ✦ Technical Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Skills & <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Technologies.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            The modern tools, frameworks, and languages I use to build seamless digital products.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-8 rounded-3xl glass hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;