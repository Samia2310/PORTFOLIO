import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Desktop Layout */}
        <div className="about-desktop">
          <div className="about-left">
            <span className="section-tag">About Me</span>
            <h2>
              Data Analytics &
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> Supply Chain enthusiast</span>
            </h2>
            <p>
              A strong interest in Supply Chain Management and Data Analytics, driven by a passion for improving operational efficiency through data-driven decision-making. Interested in leveraging analytical thinking to identify business trends, and support strategic planning. Keen to transform complex operational data into actionable insights that enhance productivity and organizational performance.
            </p>
            <p>
              From academic research to personal builds, i enjoy solving real world problems and learning something new along the way.
            </p>
          </div>

          <div className="about-right">
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Sc. in IPE</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value">4th Year (Final)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Focus</span>
                <span className="info-value"> Supply Chain Management + Data Analytics</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Bangladesh 🇧🇩</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="about-btn primary">
                Resume
              </a>
              <a href="https://samia-portfolio-gold.vercel.app" className="about-btn secondary" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="about-mobile">

          <div className="mobile-header">
            <span className="section-tag">About Me</span>
            <h2>
              Data Analytics &
              <span style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}> Supply Chain enthusiast</span>
            </h2>
            <p>
              A strong interest in Supply Chain Management and Data Analytics, driven by a passion for improving operational efficiency through data-driven decision-making. Interested in leveraging analytical thinking to identify business trends, and support strategic planning. Keen to transform complex operational data into actionable insights that enhance productivity and organizational performance.
            </p>
            <p>
              From academic research to personal builds, i enjoy solving real world problems and learning something new along the way.
            </p>
          </div>

          <div className="mobile-divider">
            <span></span>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Degree</span>
              <span className="info-value">B.Sc. in IPE</span>
            </div>
            <div className="info-item">
              <span className="info-label">Year</span>
              <span className="info-value">4th Year (Final)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Focus</span>
              <span className="info-value">supply chain management + Data analytics</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Bangladesh 🇧🇩</span>
            </div>
          </div>

          <div className="about-buttons">
            <a href="#contact" className="about-btn primary">
              Resume
            </a>
            <a href="https://faruk-portfolio-two.vercel.app/" className="about-btn secondary" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}