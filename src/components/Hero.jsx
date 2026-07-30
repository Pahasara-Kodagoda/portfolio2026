import React from 'react';
import { motion } from 'framer-motion';
// 1. Assets folder එකේ තියෙන photo එක මෙතනට import කරගන්න
import meImg from '../assets/me.png'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Text Content */}
        <div className="md:col-span-7 text-center md:text-left space-y-6">
          
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20">
              ✦ Available for Software Engineering Projects
            </span>
          </motion.div>

                    {/* Main Name & Title Heading */}
          <motion.h1 variants={itemVariants} className="flex flex-col gap-1 tracking-tight">
            <span className="text-5xl sm:text-3xl font-medium text-slate-400">
              Hi, I'm
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
              Chavindu Pahasara.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            A passionate Software Engineering student dedicated to building clean modern web applications, scalable backends, and seamless digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 hover:bg-slate-200 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/10 text-center active:scale-95"
            >
              Explore Works
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/10 text-slate-200 font-medium rounded-full transition-all duration-300 text-center active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>

        </div>

        {/* Right Image Display */}
        <motion.div variants={itemVariants} className="md:col-span-5 flex justify-center">
          <div className="relative group p-2 rounded-3xl glass hover:border-white/20 transition-all duration-500">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              {/* 2. src එකට Import කරපු variable එක ලබාදෙන්න */}
              <img
                src={meImg} 
                alt="Chavindu Pahasara"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;