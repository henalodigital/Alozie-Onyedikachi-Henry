import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsTicker from './components/SkillsTicker';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Services />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;