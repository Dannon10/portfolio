import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TransitionOverlay from '../components/TransitionOverlay';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import Experience from '../sections/Experience';

export default function Home() {
  const [transitioning, setTransitioning] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState('');
  const overlayRef = useRef();

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        if (scrollTo === 'projects') {
          projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTo === 'about') {
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTo === 'contact') {
          contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
  }, [location]);

  return (
    <div>
      {transitioning && (
        <TransitionOverlay ref={overlayRef} title={transitionTitle} />
      )}
      <Navbar />
      <Hero />
      <div ref={projectsRef}>
        <Projects
          setTransitioning={setTransitioning}
          setTransitionTitle={setTransitionTitle}
          overlayRef={overlayRef}
        />
      </div>
      <Experience />
      <div ref={aboutRef}>
        <About />
      </div>
      <Skills />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
