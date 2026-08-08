import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Pitch.css';

gsap.registerPlugin(ScrollTrigger);

export default function Pitch() {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.pitch-animate'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            }
        );

        statsRef.current.forEach((el) => {
            if (!el) return;
            const target = +el.dataset.target;
            const counter = { val: 0 };
            gsap.to(counter, {
                val: target,
                duration: 1.4,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                },
                onUpdate: () => {
                    el.textContent = Math.floor(counter.val) + (el.dataset.suffix || '');
                },
            });
        });
    }, []);

    return (
        <div className="pitch-container" ref={sectionRef}>
            <div className="pitch-text pitch-animate">
                <h2 className="pitch-heading">
                    I BUILD WEBSITES <br /> THAT WORK.
                </h2>
                <p className="pitch-sub">
                    If you need a site that's fast, looks sharp, and actually gets you results
                    &mdash; you've come to the right place.
                </p>

            </div>

            <div className="pitch-stats pitch-animate">
                <div className="stat">
                    <span
                        className="stat-number"
                        ref={(el) => (statsRef.current[0] = el)}
                        data-target="20"
                        data-suffix="+"
                    >
                        0
                    </span>
                    <span className="stat-label">Products Shipped</span>
                </div>
                <div className="stat">
                    <span
                        className="stat-number"
                        ref={(el) => (statsRef.current[1] = el)}
                        data-target="4"
                        data-suffix="+"
                    >
                        0
                    </span>
                    <span className="stat-label">Years Building</span>
                </div>
                <div className="stat">
                    <span
                        className="stat-number"
                        ref={(el) => (statsRef.current[2] = el)}
                        data-target="5"
                        data-suffix="+"
                    >
                        0
                    </span>
                    <span className="stat-label">Industries</span>
                </div>
            </div>
        </div>
    );
}