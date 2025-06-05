import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import gsap from 'gsap';
import './transitionOverlay.css';

const TransitionOverlay = forwardRef(({ title }, ref) => {
    const whiteRef = useRef();
    const blackRef = useRef();
    const white2Ref = useRef();
    const titleRef = useRef();
    
    const soundRef = useRef(null);

    useEffect(() => {
        soundRef.current = new Audio('/sound/t-sound-3.mp3'); 
        soundRef.current.volume = 0.03;
    }, []);

    useImperativeHandle(ref, () => ({
        enter: () => {
            return new Promise((resolve) => {
                if (soundRef.current) {
                    soundRef.current.currentTime = 0;
                    soundRef.current.play();
                }

                const tl = gsap.timeline({ onComplete: resolve });

                tl.set([whiteRef.current, blackRef.current, white2Ref.current], {
                    y: '100%', pointerEvents: 'auto'
                });
                tl.set(titleRef.current, { y: '100%', opacity: 0 });

                tl.to(whiteRef.current, { y: '0%', duration: 0.6, ease: 'power2.inOut' })
                    .to(blackRef.current, { y: '0%', duration: 1.2, ease: 'power2.inOut' }, '-=0.3')
                    .to(titleRef.current, { y: '0%', opacity: 1, duration: 1.4, ease: 'power4.out' }, '-=0.8')
                    .to(white2Ref.current, { y: '0%', duration: 0.5, ease: 'power2.inOut' }, '+=0.3');
            });
        },

        exit: () => {
            return new Promise((resolve) => {
                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.set([whiteRef.current, blackRef.current, white2Ref.current, titleRef.current], {
                            y: '100%',
                            opacity: 0,
                            pointerEvents: 'none',
                        });
                        resolve();
                    },
                });

                tl.to(titleRef.current, { y: '-100%', opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.4 })
                    .to(blackRef.current, { y: '-100%', duration: 1.2, ease: 'power1.inOut' }, '-=0.6')
                    .to(white2Ref.current, { y: '-100%', duration: 0.6, ease: 'power2.inOut' }, '-=1.2')
                    .to(whiteRef.current, { y: '-100%', duration: 1.2, ease: 'power2.inOut' }, '-=1.6');
            });
        },
    }));

    return (
        <div className='transition-overlay'>
            <div ref={whiteRef} className="transition-layer white-layer"></div>
            <div ref={blackRef} className="transition-layer black-layer">
                <h1 ref={titleRef} className="transition-title">{title}</h1>
            </div>
            <div ref={white2Ref} className="transition-layer white-layer second"></div>
        </div>
    );
});

export default TransitionOverlay;
