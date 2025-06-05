import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const lettersRef = useRef([]);
    const pictureRef = useRef();
    const aboutRef = useRef();
    const awardRef = useRef();
    const specialRef = useRef();

    useEffect(() => {
        const letters = lettersRef.current;
        const picture = pictureRef.current;

        gsap.set(letters, { y: 50, opacity: 0 });
        gsap.set(picture, { y: 40, opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: letters[0].parentNode,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.to(letters, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
        });

        tl.to(
            picture,
            {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: 'power1.inOut',
            },
            '+=0.2'
        );
        const slideUp = (element, delay = 0) => {
            if (!element) return;
            gsap.fromTo(
                element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    delay,
                }
            );
        };

        slideUp(aboutRef.current);
        slideUp(awardRef.current, 0.1);
        slideUp(specialRef.current, 0.1);
    }, []);



    const word = 'hellooooo';

    return (
        <section className="about-section" id='about'>
            <div className="hello-text">
                {word.split('').map((letter, index) => (
                    <span
                        key={index}
                        ref={(el) => (lettersRef.current[index] = el)}
                        className='hello-word'
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <img
                ref={pictureRef}
                src="/images/about-pic-4.jpg"
                alt="Dannon"
                className='my-picture'
            />
            <div className="about-description">
                <div className="about-text-span">
                    <p ref={aboutRef} className='about-text'>
                        I’m Dannon a front-end developer who turns pixels into
                        responsive, interactive web experiences that (hopefully)
                        don't break. I love building clean, user-friendly interfaces
                        that work beautifully across devices.
                        Outside the screen, you'll find me listening to good music,
                        getting heartbroken by Man United, or binge-watching movies
                        like it's a full-time job.
                        I'm currently open to junior front-end developer roles and
                        always happy to collaborate on exciting web projects let's build something awesome together!
                    </p>
                </div>
                <div className="award-section" ref={awardRef}>
                    <h4 className="award-heading">Awards</h4>
                    <p className='award-sub-heading'>2022 - AltSchool Africa Hackathon Winner</p>
                    <p>Developed a web app that scrambles sensitive
                        words in user generated text using asterisk masking,
                        allowing safer social media sharing.</p>
                </div>
            </div>
            <div className="special" ref={specialRef}>
                <p>Let's make your <br /> project special!</p>
            </div>
        </section>
    );
}
