import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionOverlay from '../components/TransitionOverlay';
import { FiPlay } from 'react-icons/fi';
import './projectProfile.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectProfile() {
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const project = projects.find(p => p.id === currentId);
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const contentRef = useRef(null);
  const stripRef = useRef(null);
  const textRef = useRef(null);
  const directionRef = useRef(1);
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  const [transitioning, setTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (transitioning && overlayRef.current) {
      const timer = setTimeout(() => {
        overlayRef.current.enter().then(() => setTransitioning(false));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  useEffect(() => {
    if (!transitioning && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
      );
    }
  }, [transitioning]);

  if (!project) return <div>Project not found.</div>;

  const { title, tech, imageMobile, imageDesktop, description, liveLink, repoLink, demoVideos } = project;
  const otherProjects = projects.filter(p => p.id !== currentId);

  const handleNavigate = async (targetId) => {
    setTransitioning(true);
    if (overlayRef.current) {
      await overlayRef.current.exit();
    }
    navigate(`/projects/${targetId}`);
  };

  return (
    <>
      {transitioning && (
        <TransitionOverlay ref={overlayRef} title={title} />
      )}
      {!transitioning && (
        <div className='project-profile-container'>
          <Navbar />
          <div className="project-profile-content" ref={contentRef}>
            <div className="project-profile-head">
              <div className="pp-head">
                <h1 className='project-profile-title'>{title}</h1>
              </div>
              <div className="tech-stacks">
                {tech.map((item, index) => (
                  <span key={index} className="tech-item">{item}</span>
                ))}
              </div>
            </div>

            <div className="project-profile-image">
              <picture>
                <source media="(max-width: 768px)" srcSet={imageMobile} />
                <img src={imageDesktop} alt={`${title}`} className="img-desktop" />
              </picture>
            </div>

            <div className="description">
              <h2>DESCRIPTION</h2>
              <span className='short-span'>
                <p className='description-text' ref={textRef}>{description}</p>
              </span>
            </div>
            {/* PROJECT DEMO SECTION */}
            {demoVideos && demoVideos.length > 0 && (
              <div className="project-demo">

                {/* Header */}
                <div className="project-demo-header">
                  <h2>LIVE DEMO</h2>
                  <span className="demo-subtext">See it in action</span>
                </div>

                {/* Video Selector Tabs */}
                {demoVideos.length > 1 && (
                  <div className="demo-selector">
                    {demoVideos.map((video, index) => (
                      <button
                        key={index}
                        className={`demo-tab ${activeVideoIndex === index ? "active" : ""}`}
                        onClick={() => {
                          setActiveVideoIndex(index);
                          setShowVideo(false); // Reset video display, requires user to click play again
                        }}
                      >
                        {video.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Glass Preview / Video Player */}
                {!showVideo ? (
                  <div
                    className="glass-demo-card"
                    onClick={() => setShowVideo(true)}
                    style={{ backgroundImage: `url(${imageDesktop})` }}
                  >
                    <div className="glass-gradient" />
                    <div className="glass-center-content">
                      <div className="play-button">
                        <FiPlay />
                      </div>
                      <p>Watch "{demoVideos[activeVideoIndex].label}"</p>
                    </div>
                  </div>
                ) : (
                  <div className="video-wrapper">
                    <video
                      src={demoVideos[activeVideoIndex].url}
                      controls
                      autoPlay
                      muted={false}
                      preload="none"
                      onPause={() => console.log("User paused video")}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="project-links">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link hover-slide"
              >
                <span className={isMobile ? "project-profile-live-link" : "slides-wrapper"}>
                  <span className={isMobile ? "live-link-text" : "slide-item"}>
                    Live Site <FiExternalLink />
                  </span>
                  {
                    isMobile ? '' :
                      <span className={isMobile ? "live-link-text" : "slide-item"}>
                        Live Site <FiExternalLink />
                      </span>
                  }
                </span>
              </a>

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link hover-slide"
                >
                  <span className={isMobile ? "project-profile-live-link" : "slides-wrapper"}>
                    <span className={isMobile ? "live-link-text" : "slide-item"}>
                      <FaGithub className="github-link-icon" /> Repo
                    </span>
                    {isMobile ? '' :
                      <span className={isMobile ? "live-link-text" : "slide-item item2"}>
                        <FaGithub className="github-link-icon" /> Repo
                      </span>
                    }
                  </span>
                </a>
              )}
            </div>

            <div className="project-strip" ref={stripRef}>
              <h3 className="other-projects-title">MOVE TO ANOTHER PROJECT</h3>
              <div className="thumb-img-container">
                {otherProjects.map((p) => (
                  <button
                    key={p.id}
                    className="thumb-link"
                    onClick={() => handleNavigate(p.id)}
                    type="button"
                  >
                    <div className="thumb-img-wrapper">
                      <img
                        src={p.imageMobile}
                        alt={p.title}
                        className="thumb-img"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
