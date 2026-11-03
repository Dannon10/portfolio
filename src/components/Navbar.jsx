import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiEye, FiDownload, FiExternalLink } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const RESUME_URL = encodeURI('/Dannon Abayomi CV.pdf');
const RESUME_DOWNLOAD_NAME = 'Abayomi-Dannon-CV.pdf';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const resumeTriggerRef = useRef(null);
    const resumeCloseRef = useRef(null);

    const playHoverSound = (linkName) => {
        if (hoveredLink === linkName) return;

        const sound = new Audio('/sound/hover-sound-9.wav');
        sound.volume = 0.03;
        sound.play();

        setHoveredLink(linkName);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    // Desktop browsers with a built-in PDF viewer get the in-page preview.
    // Phones and tablets (where inline PDFs are unreliable) open the PDF in a new tab,
    // which uses the device's native viewer.
    const handleResumeClick = () => {
        const canEmbedPdf =
            typeof window !== 'undefined' &&
            navigator.pdfViewerEnabled === true &&
            window.matchMedia('(min-width: 1024px)').matches;

        if (canEmbedPdf) {
            setIsResumeOpen(true);
        } else {
            window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
        }
    };

    const closeResume = () => setIsResumeOpen(false);

    // Modal behaviour: Escape to close, lock page scroll, move focus in, restore focus on close
    useEffect(() => {
        if (!isResumeOpen) return;

        const triggerEl = resumeTriggerRef.current;
        const previousOverflow = document.body.style.overflow;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setIsResumeOpen(false);
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);
        resumeCloseRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
            triggerEl?.focus();
        };
    }, [isResumeOpen]);

    return (
        <nav className="nav-bar-container">
            <div className="nav-bar-content">
                <div className="name">
                    <h4>DANNON ABAYOMI</h4>
                </div>

                <div className="nav-lists desktop">
                    <ul className="nav-list-desktop">
                        <li
                            className={`nav-link-desktop ${isHome ? 'active-home brush-home' : ''}`}
                            onMouseEnter={() => { if (!isHome) playHoverSound('home') }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to="/"
                                id="nav-link-desktop"
                                className={isHome ? 'disabled-link' : ''}
                            >
                                Home
                            </Link>
                            {isHome && (
                                <img
                                    src="/images/brush-stroke-4.jpg"
                                    alt="brush stroke"
                                    className="brush-stroke-image"
                                    aria-hidden="true"
                                />
                            )}
                        </li>
                        <li
                            className="nav-link-desktop"
                            onMouseEnter={() => playHoverSound('contact')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/" state={{ scrollTo: 'contact' }} id="nav-link-desktop">
                                Contact
                            </Link>
                        </li>
                        <li
                            className="nav-link-desktop"
                            onMouseEnter={() => playHoverSound('about')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/" state={{ scrollTo: 'about' }} id="nav-link-desktop">
                                About
                            </Link>
                        </li>
                        <li
                            className="nav-link-desktop"
                            onMouseEnter={() => playHoverSound('projects')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/" state={{ scrollTo: 'projects' }} id="nav-link-desktop">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="nav-items">
                    <div className="resume">
                        <button
                            type="button"
                            ref={resumeTriggerRef}
                            className="btn btn-download"
                            onClick={handleResumeClick}
                            aria-haspopup="dialog"
                            aria-label="View resume"
                        >
                            <span className="slide-wrapper">
                                <span className="slide-text top">RESUME</span>
                                <span className="slide-text bottom">RESUME</span>
                            </span>
                            <span className="slide-wrapper icon-wrapper">
                                <span className="slide-icon top"><FiEye /></span>
                                <span className="slide-icon bottom"><FiEye /></span>
                            </span>
                        </button>
                    </div>

                    {!isMenuOpen && (
                        <div className="menu-icon mobile">
                            <FiMenu
                                onClick={() => setIsMenuOpen(true)}
                                className="btn-menu open"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className={`dropdown-overlay ${isMenuOpen ? 'show' : ''}`}>
                <div className="menu-icon">
                    <FiX
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-menu close"
                    />
                </div>
                <ul className="dropdown-menu">
                    <li className={`nav-link project-profile-link ${isHome ? 'active-home' : ''}`}>
                        {isHome ? (
                            <span className="project-profile-link">Home</span>
                        ) : (
                            <Link
                                to="/"
                                className="project-profile-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        )}
                    </li>
                    <li className="nav-link">
                        <Link
                            to="/"
                            state={{ scrollTo: 'contact' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            to="/"
                            state={{ scrollTo: 'about' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            to="/"
                            state={{ scrollTo: 'projects' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>

            {isResumeOpen && (
                <div className="resume-modal-backdrop" onClick={closeResume}>
                    <div
                        className="resume-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Resume preview"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="resume-modal-header">
                            <h5 className="resume-modal-title">Resume</h5>
                            <div className="resume-modal-actions">
                                <a
                                    href={RESUME_URL}
                                    download={RESUME_DOWNLOAD_NAME}
                                    className="resume-modal-btn"
                                >
                                    <FiDownload aria-hidden="true" />
                                    Download
                                </a>
                                <a
                                    href={RESUME_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-modal-btn"
                                >
                                    <FiExternalLink aria-hidden="true" />
                                    Open in new tab
                                </a>
                                <button
                                    type="button"
                                    ref={resumeCloseRef}
                                    className="resume-modal-close"
                                    onClick={closeResume}
                                    aria-label="Close resume preview"
                                >
                                    <FiX aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <iframe
                            className="resume-modal-frame"
                            src={`${RESUME_URL}#view=FitH`}
                            title="Resume preview"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}
