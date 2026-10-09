import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyAchievements from './components/KeyAchievements';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import HenaloDigital from './components/HenaloDigital';
import Awards from './components/Awards';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-[#263746] bg-[#F2F5F8] min-h-screen flex flex-col selection:bg-[#167D75] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <KeyAchievements />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <HenaloDigital />
        <Awards />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
