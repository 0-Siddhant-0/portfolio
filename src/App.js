// App.js
import React, { useCallback, lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import Background from './components/Background';

const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const CertificationsSection = lazy(() => import('./components/CertificationsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function App() {
  const navItems = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Certifications', 'Contact'];

  const scrollToSection = useCallback((section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] text-[#e0e0e0] overflow-x-hidden"
         style={{ fontFamily: "'VT323', monospace" }}>
      <Background />
      <div className="relative z-10">
        <NavBar navItems={navItems} scrollToSection={scrollToSection} />
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </Suspense>
      </div>
      <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=VT323&family=Space+Mono:wght@400;700&family=Fira+Code:wght@400;500;600&display=swap');
  
  html {
    font-size: 110%;
  }
  
  * {
    cursor: default;
  }
  
  body {
    font-family: 'Space Mono', 'Fira Code', monospace;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'VT323', monospace;
    letter-spacing: 0.03em;
  }
  
  /* For highest readability in body text */
  p, li, span, div {
    line-height: 1.6;
    letter-spacing: 0.02em;
  }
  
  ::selection {
    background: #00ff00;
    color: #000000;
  }
`}</style>
    </div>
  );
}

export default App;
