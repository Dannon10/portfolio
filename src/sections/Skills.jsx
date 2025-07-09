import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './skill.css';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.from(itemsRef.current, {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.stack-lists',
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <section className='skills-section'>
            <div className="skills-container">
                <h2 className='skills-title'>Used by my hands and mind</h2>

                <div className="skill-stack-wrapper">
                    <div className="skill-bg">SKILLS</div> 
                    <div className="skill-stack">
                        <h4>Languages/Frameworks/Libraries</h4>
                        <div className="list-container">
                            <ul className='stack-lists'>
                                {[
                                    'HTML', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js', 
                                    'Typescript', 'Redux', 'Vue.js',
                                    'GSAP', 'Firebase', 'Git/Github', 'Agile/Scrum'
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="stack-item"
                                        ref={el => itemsRef.current[index] = el}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="special-stack">
                            <h4>Special</h4>
                            <ul className='stack-lists'>
                                <li
                                    className="stack-item"
                                    ref={el => itemsRef.current[itemsRef.current.length] = el}
                                >
                                    Googling 😜
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
