import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS or your backend API
    alert('Thank you, Chavidu will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactDetails = [
    {
      title: 'Email',
      value: 'chavip2003@gmail.com', // Change to your actual email if needed
      link: 'mailto:chavidupahasara@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'Sri Lanka',
      link: '#',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-indigo-400 border border-indigo-500/20"
          >
            ✦ Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
          Let's work <span className="bg-linear-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Have a project in mind or looking for a software engineer? Feel free to reach out!
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {contactDetails.map((detail, idx) => (
              <a
                key={idx}
                href={detail.link}
                className="flex items-center gap-4 p-5 rounded-2xl glass hover:border-white/20 transition-all duration-300 group"
              >
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{detail.title}</p>
                  <p className="text-white font-semibold text-base mt-0.5">{detail.value}</p>
                </div>
              </a>
            ))}

            {/* Social Connect Badge */}
            <div className="p-6 rounded-2xl glass space-y-4">
              <p className="text-sm font-semibold text-slate-300">Connect on Socials</p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-slate-300 hover:text-white transition-all"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-slate-300 hover:text-white transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass space-y-6 border border-white/10 shadow-2xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chavidu Pahasara"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all duration-300 active:scale-95 shadow-lg shadow-indigo-500/10 cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;