import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { label: 'Portfolio & brand sites' },
    { label: 'Dashboards & web apps' },
    { label: 'E-commerce' },
    { label: 'AI-powered features' },
    { label: 'Mobile Apps' },
];

const steps = [
    {
        number: '01',
        title: 'Discovery call',
        description: 'We talk through what you need, your timeline, and what success looks like.',
    },
    {
        number: '02',
        title: 'Research & planning',
        description: 'I look into your industry, competitors, and users before writing a line of code, so the build actually fits the goal.',
    },
    {
        number: '03',
        title: 'Design & build',
        description: 'I design and build the site, keeping you posted as it takes shape.',
    },
    {
        number: '04',
        title: 'Revisions',
        description: 'You review it, I refine it until it fits exactly what you had in mind.',
    },
    {
        number: '05',
        title: 'Launch',
        description: 'The site goes live, and you get support if anything comes up after.',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.services-animate'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            }
        );
    }, []);

    return (
        <div className="services-container" ref={sectionRef}>
            <div className="services-block services-animate">
                <h3 className="services-heading">What I build</h3>
                <div className="services-list">
                    {services.map((service) => (
                        <span key={service.label} className="service-pill">
                            {service.label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="process-block">
                <h3 className="services-heading services-animate">How it works</h3>
                <div className="process-list">
                    {steps.map((step) => (
                        <div key={step.number} className="process-step services-animate">
                            <span className="process-number">{step.number}</span>
                            <div className="process-info">
                                <h4 className="process-title">{step.title}</h4>
                                <p className="process-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}