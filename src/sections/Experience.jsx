import './experience.css';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">EXPERIENCE</h2>

            <div className="experience-list">
                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-info">
                            <h3 className="experience-title">Lead Frontend Developer</h3>
                            <span className="experience-company">
                                KDN Plus — United States (Remote)
                            </span>
                        </div>
                        <p className="experience-duration">Jan 2026 – Present</p>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-info">
                            <h3 className="experience-title">Frontend & Web3 Developer</h3>
                            <span className="experience-company">
                                Astra — United Kingdom (Remote)
                            </span>
                        </div>
                        <p className="experience-duration">June 2025 – Mar 2026</p>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-info">
                            <h3 className="experience-title">Frontend Developer</h3>
                            <span className="experience-company">
                                Prep Beta Solutions — Lagos, Nigeria (Remote)
                            </span>
                        </div>
                        <p className="experience-duration">January 2024 – May 2025</p>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-info">
                            <h3 className="experience-title">Frontend Developer</h3>
                            <span className="experience-company">
                                Tiffany Berth School — Lagos, Nigeria (Remote)
                            </span>
                        </div>
                        <p className="experience-duration">February 2023 – December 2023</p>
                    </div>
                </div>
            </div>

            <p className="experience-note">
                For full experience details, view my resume.
            </p>
        </section>
    );
}
