import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "Road Damage Detection System",
      description: "An intelligent system that detects and classifies road defects (such as potholes and cracks) using computer vision/machine learning models to assist in automated road maintenance.",
      techStack: ["Python", "OpenCV", "Machine Learning", "React", "Tailwind CSS"],
      github: "https://github.com", // ඔයාගේ GitHub Repo Link එක දාන්න
      demo: "https://example.com",   // Live Link එකක් තියේ නම් දාන්න
    },
    {
      title: "Encryption & Decryption Cipher System",
      description: "A secure software application implementing custom and standard cryptographic algorithms (ciphers) for encoding and decoding confidential data.",
      techStack: ["Software Engineering", "Cryptography", "JavaScript / Python", "Data Security"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "University GPA Calculator",
      description: "A specialized utility web application designed for university students to calculate semester and cumulative GPA (CGPA) based on course credits and grades.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      demo: "https://example.com",
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
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20"
          >
            ✦ Selected Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Featured <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Projects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            A showcase of real-world applications, security software, and intelligent systems I've built.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group p-7 rounded-3xl glass hover:border-white/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="space-y-4">
                {/* Card Header & Links */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>

                    {/* Live Demo Link */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-6">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium"
                  >
                    {tech}
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

export default Projects;