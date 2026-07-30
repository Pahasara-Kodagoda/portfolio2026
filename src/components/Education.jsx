import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Rajarata University of Sri Lanka", 
      duration: "2025 - Present",
      description: "Focusing on Software Architecture, Web Development, Data Structures, Algorithms, and Database Systems.",
      status: "In Progress",
    },
    {
      degree: "G.C.E. Advanced Level (A/L)",
      institution: "Mahinda Rajapaksa Collage,Matara", 
      duration: "2019 - 2022",
      description: "Successfully completed secondary education in the Arts Stream, developing critical thinking and analytical skills.",
      status: "Completed",
    },
    {
      degree: "G.C.E. Ordinary Level (O/L)",
      institution: "Fort President Collage,Matara", 
      duration: "2019",
      description: "Successfully completed secondary school education with strong basic foundations.",
      status: "Completed",
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20"
          >
            ✦ Academic Background
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            My <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Education.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            The academic journey and qualifications that shaped my engineering foundation.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12"
        >
          {educationList.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-125 group-hover:bg-pink-500 transition-all duration-300" />
              
              {/* Education Card */}
              <div className="p-8 rounded-3xl glass hover:border-white/20 transition-all duration-500 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mt-1">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                      {item.duration}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;