import './experience.css';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">EXPERIENCE</h2>

            <div className="experience-list">
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Frontend & Web3 Developer</h3>
                        <span className="experience-company">Astra</span>
                    </div>

                    <p className="experience-duration">June 2025 – Feb 2025</p>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Frontend Developer</h3>
                        <span className="experience-company">Prep Beta Solutions</span>
                    </div>

                    <p className="experience-duration">January 2024 – May 2025</p>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Frontend Developer</h3>
                        <span className="experience-company">Tiffany Berth School</span>
                    </div>

                    <p className="experience-duration">February 2023 – December 2023</p>
                </div>
            </div>

            <p className="experience-note">
                For full experience details, view my resume.
            </p>
        </section>
    );
}
