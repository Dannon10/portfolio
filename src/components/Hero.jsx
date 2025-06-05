import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const circleRef = useRef(null);
  const frontRef = useRef(null);
  const endRef = useRef(null);
  const hyphenRef = useRef(null);

    useEffect(() => {
    gsap.to(frontRef.current, {
      x: '-100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(endRef.current, {
      x: '100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(hyphenRef.current, {
      scaleX: 10,
      transformOrigin: 'center',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);


  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.2,
      }
    );

    const tween = gsap.to(circleRef.current, {
      x: 300,
      y: 300,
      opacity: 0,
      ease: "power1.out",
      paused: true,
      duration: 1.5,
    });

    ScrollTrigger.create({
      trigger: '.hero-container',
      start: 'top top',
      end: '+=1000',
      onUpdate: (self) => {
        const easedProgress = gsap.parseEase('power1.out')(self.progress);
        tween.progress(easedProgress);
      },
    });
  }, []);

  return (
    <div className="hero-container">
      <h1 className="hero-text">
        FRONT-END <br /> DEVELOPER
      </h1>
      <div 
      className="hero-circle" 
      ref={circleRef}>
        
      </div>
      <div className="desktop-hero">
        <div className="front">
        <span 
        className="slide-hero-text" 
        ref={frontRef}>FRONT</span>
        <span 
        className="hyphen" 
        ref={hyphenRef}>
          &mdash;
          </span>
        <span 
        className="slide-hero-text end" 
        ref={endRef}>END</span>
        </div>
        <span className="developer">DEVELOPER</span>
      </div>
    </div>
  );
}