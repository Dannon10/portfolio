import './experience.css';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">EXPERIENCE</h2>

            <div className="experience-list">
                {/* Astra Labs */}
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Frontend & Web3 Developer</h3>
                        <span className="experience-company">Astra</span>
                    </div>

                    <p className="experience-duration">June 2025 – December 2025</p>

                    <ul className="experience-details">
                        <li>
                            Built and shipped production-ready frontend features for a
                            Figma-like web application for fashion designers and makers.
                        </li>
                        {/* <li>
                            Developed multi-step onboarding flows and responsive UI/UX for
                            desktop and mobile
                            applications.
                        </li> */}
                        <li>
                            Architected and integrated a WebSocket-driven real-time chat system within an escrow workflow.
                        </li>
                    </ul>
                </div>

                {/* Prep Beta Solutions */}
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>Frontend Developer</h3>
                        <span className="experience-company">Prep Beta Solutions</span>
                    </div>

                    <p className="experience-duration">January 2024 – March 2025</p>

                    <ul className="experience-details">
                        <li>
                            Developed responsive user interfaces and reusable components for
                            client-facing products.
                        </li>
                        <li>
                            Collaborated with designers and backend developers to deliver
                            production features.
                        </li>
                    </ul>
                </div>
            </div>

            <p className="experience-note">
                For full experience details, view my resume.
            </p>
        </section>
    );
}
