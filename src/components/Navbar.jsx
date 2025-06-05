import { useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();
    const isHome = location.pathname === '/';

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
                        <a href="/Resume-Dannon-Abayomi.pdf" download>
                            <button className="btn btn-download">
                                <span className="slide-wrapper">
                                    <span className="slide-text top">RESUME</span>
                                    <span className="slide-text bottom">RESUME</span>
                                </span>
                                <span className="slide-wrapper icon-wrapper">
                                    <span className="slide-icon top"><FiDownload /></span>
                                    <span className="slide-icon bottom"><FiDownload /></span>
                                </span>
                            </button>
                        </a>
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
        </nav>
    );
}
