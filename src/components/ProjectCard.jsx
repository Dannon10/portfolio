import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './projectCard.css';

const ProjectCard = forwardRef(({
  id,
  title,
  shortDescription,
  imageMobile,
  imageDesktop,
  viewMode,
  setTransitioning,
  setTransitionTitle,
  overlayRef,
  hoveredId,
  setHoveredId
}, ref) => {
  const cardClass = viewMode === 'list' ? 'project-card-list' : 'project-card-grid';
  const navigate = useNavigate();

  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const shortDescriptionRef = useRef(null);
  const imageRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wrapLetters = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">{char}</span>
    ));
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });

    const targets = [titleRef.current, shortDescriptionRef.current];
    if (viewMode === 'grid' && imageRef.current) targets.unshift(imageRef.current);

    timeline.fromTo(targets,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power2.out'
      }
    );

    return () => timeline.kill();
  }, [viewMode]);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && hoveredId === id) {
          setHoveredId(null);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hoveredId, id, setHoveredId]);

  useImperativeHandle(ref, () => ({
    animateExit: () => {
      const targets = [titleRef.current, shortDescriptionRef.current];
      if (viewMode === 'grid' && imageRef.current) targets.unshift(imageRef.current);

      return gsap.to(targets, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power1.inOut'
      }).then(() => Promise.resolve());
    },
    animateEntrance: () => {
      const targets = [titleRef.current, shortDescriptionRef.current];
      if (viewMode === 'grid' && imageRef.current) targets.unshift(imageRef.current);

      gsap.set(targets, { y: 50, opacity: 0 });
      return gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.1,
        ease: 'power2.out'
      }).then(() => Promise.resolve());
    }
  }));

  const handleClick = async (e) => {
    e.preventDefault();
    if (!overlayRef?.current) {
      navigate(`/projects/${id}`);
      return;
    }

    setTransitionTitle(title);
    setTransitioning(true);
    await overlayRef.current.enter();
    navigate(`/projects/${id}`);
  };

  const handleMouseEnter = () => {
    setHoveredId(id);

    if (isDesktop) {
      const letters = titleRef.current?.querySelectorAll('.letter');
      if (letters) {
        gsap.fromTo(letters,
          { y: 0, opacity: 1 },
          {
            y: -6,
            opacity: 0.8,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.out'
          }
        );
      }
    }

    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);

    if (isDesktop) {
      const letters = titleRef.current?.querySelectorAll('.letter');
      if (letters) {
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: 'power2.inOut'
        });
      }
    }

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  };

  const dimmed = hoveredId !== null && hoveredId !== id;

  return (
    <a href={`/projects/${id}`} onClick={handleClick} className='project-card-link'>
      <div
        ref={cardRef}
        className={`${cardClass} ${dimmed ? 'dimmed' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {viewMode === 'grid' && (
          <picture>
            <source media="(max-width: 768px)" srcSet={imageMobile} />
            <img
              ref={imageRef}
              src={imageDesktop}
              alt={`${title} desktop view`}
              className="img-project-card"
            />
          </picture>
        )}

        <div className="grid-head">
          <h4 ref={titleRef} className="title slide-title">
            {isDesktop ? wrapLetters(title) : title}
          </h4>
        </div>

        <div>
          <span ref={shortDescriptionRef} className="short-description">{shortDescription}</span>
        </div>
      </div>
    </a>
  );
});

export default ProjectCard;
