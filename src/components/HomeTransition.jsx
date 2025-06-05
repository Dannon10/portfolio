import { useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import './HomeTransition.css';

const HomeTransition = forwardRef((props, ref) => {
  const blackRef = useRef();

  useImperativeHandle(ref, () => ({
    enter: () => {
      return new Promise((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });

        tl.set(blackRef.current, { y: '100%', pointerEvents: 'auto' })
          .to(blackRef.current, {
            y: '0%',
            duration: 1,
            ease: 'power1.inOut',
          });
      });
    },
    exit: () => {
      return new Promise((resolve) => {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(blackRef.current, {
              y: '100%',
              pointerEvents: 'none',
            });
            resolve();
          },
        });

        tl.to(blackRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power1.inOut',
        });
      });
    },
  }));

  return (
    <div className="home-transition-overlay">
      <div ref={blackRef} className="home-transition-layer">
        <span className="transition-text">WELCOME</span>
      </div>
    </div>
  );
});

export default HomeTransition;
