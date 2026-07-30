import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Subtle Ambient Glows - Very Soft */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-150 h-100 bg-indigo-500/8 rounded-full blur-[160px]" />
        
        {/* Middle Soft Glow */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-175 h-125 bg-purple-500/6 rounded-full blur-[180px]" />
      </div>
    
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;