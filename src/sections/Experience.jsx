import './experience.css';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">How I've Helped Clients</h2>

            <div className="experience-list">
                <div className="experience-item">
                    <span className="experience-number">01</span>
                    <div className="experience-info">
                        <h3 className="experience-title">Lead Frontend Developer</h3>
                        <span className="experience-company">KDN Plus</span>
                        <span className="experience-location">New York, United States · Remote</span>
                    </div>
                    <p className="experience-problem">
                        Built 3 products for KDN Plus's ecosystem, now serving around
                        20k users combined.
                    </p>
                    <div className="experience-meta">
                        <span className="experience-duration">JAN 2026 TO PRESENT</span>
                        <span className="experience-type">FULL TIME</span>
                    </div>
                </div>

                <div className="experience-item">
                    <span className="experience-number">02</span>
                    <div className="experience-info">
                        <h3 className="experience-title">Frontend & Web3 Developer</h3>
                        <span className="experience-company">Astra</span>
                        <span className="experience-location">United Kingdom · Remote</span>
                    </div>
                    <p className="experience-problem">
                        Built the fashion designer's interface at Astra, including a
                        blockchain escrow flow so designers get paid securely.
                    </p>
                    <div className="experience-meta">
                        <span className="experience-duration">JUN 2025 TO JUN 2026</span>
                        <span className="experience-type">FULL TIME</span>
                    </div>
                </div>

                <div className="experience-item">
                    <span className="experience-number">03</span>
                    <div className="experience-info">
                        <h3 className="experience-title">Frontend Developer</h3>
                        <span className="experience-company">Prep Beta Solutions</span>
                        <span className="experience-location">Lagos, Nigeria · Remote</span>
                    </div>
                    <p className="experience-problem">
                        Built a study app to help A-Level students prep more effectively.
                    </p>
                    <div className="experience-meta">
                        <span className="experience-duration">AUG 2023 TO MAY 2025</span>
                        <span className="experience-type">FULL TIME</span>
                    </div>
                </div>

                <div className="experience-item">
                    <span className="experience-number">04</span>
                    <div className="experience-info">
                        <h3 className="experience-title">Frontend Developer</h3>
                        <span className="experience-company">Tiffany Berth School</span>
                        <span className="experience-location">Lagos, Nigeria · Remote</span>
                    </div>
                    <p className="experience-problem">
                        Built an administrative dashboard to help the school manage
                        day-to-day operations.
                    </p>
                    <div className="experience-meta">
                        <span className="experience-duration">SEP 2022 TO JUL 2023</span>
                        <span className="experience-type">CONTRACT</span>
                    </div>
                </div>
            </div>

            <p className="experience-note">
                For full experience details, view my resume.
            </p>
        </section>
    );
}