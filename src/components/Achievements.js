import "./Achievements.css";

const scholarships = [
  {
    id: 1,
    title: "Merit Scholarship",
    org: "BRAC University",
    duration: "June 2024 – Present",
    description:
      "Awarded the Merit Scholarship by BRAC University in recognition of outstanding academic performance. This scholarship reflects consistent dedication to excellence throughout the undergraduate program.",
    tags: ["Academic Excellence", "BRAC University"],
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const awards = [
  {
    id: 1,
    position: "3rd",
    event: "5th National Language Festival 2018",
    category: "Photography — Mobile (9–12)",
    org: "Dhaka Residential Model College",
    year: "2018",
    color: "#f59e0b",
    pdfFile: "/NationalLanguageFest2018.pdf",
  },
  {
    id: 2,
    position: "3rd",
    event: "10th Josephite Art & Lit Carnival 2018",
    category: "Photography — Mobile (9–12)",
    org: "St. Joseph Higher Secondary School",
    year: "2018",
    color: "#f59e0b",
    pdfFile: "/JosephiteCarnival2018.pdf",
  },
  {
    id: 3,
    position: "2nd",
    event: "Josephite Art & Lit Carnival 2019",
    category: "Photography — Mobile (Jr.)",
    org: "St. Joseph Higher Secondary School",
    year: "2019",
    color: "#8B5CF6",
    pdfFile: "/JosephiteCarnival2019.pdf",
  },
  {
    id: 4,
    position: "3rd",
    event: "Art & Photography Fiesta 2018",
    category: "Photography — Junior / Mobile Level",
    org: "VNSC",
    year: "2018",
    color: "#f59e0b",
    pdfFile: "/PhotoFiesta2018.pdf",
  },
];

const positionMeta = {
  "1st": { glow: "#fbbf24" },
  "2nd": { glow: "#8B5CF6" },
  "3rd": { glow: "#f59e0b" },
};

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="ach-bg">
        <div className="ach-orb ach-orb-1" />
        <div className="ach-orb ach-orb-2" />
      </div>

      <div className="ach-container">

        {/* ── Header ── */}
        <div className="ach-header">
          <span className="section-tag">Honours</span>
          <h2 className="ach-title">
            Achievements &amp; <span className="gradient-text">Awards</span>
          </h2>
          <p className="ach-subtitle">
            Scholarships earned and competitions placed in, a record of effort
            recognised beyond the classroom.
          </p>
        </div>

        {/* ══ SCHOLARSHIPS ══ */}
        <div className="ach-block">
          <div className="ach-block-label">
            <span className="ach-block-line" />
            <span className="ach-block-text">Scholarships</span>
            <span className="ach-block-line" />
          </div>

          <div className="ach-scholarship-list">
            {scholarships.map((s) => (
              <div key={s.id} className="ach-scholarship-card" style={{ "--accent": s.color }}>
                <div className="ach-sc-accent" />
                <div className="ach-sc-inner">
                  <div className="ach-sc-top">
                    <div className="ach-sc-icon">{s.icon}</div>
                    <div className="ach-sc-meta">
                      <span className="ach-sc-badge">Scholarship</span>
                      <span className="ach-sc-duration">{s.duration}</span>
                    </div>
                  </div>
                  <h3 className="ach-sc-title">{s.title}</h3>
                  <p className="ach-sc-org">{s.org}</p>
                  <p className="ach-sc-desc">{s.description}</p>
                  <div className="ach-sc-tags">
                    {s.tags.map((t, i) => (
                      <span key={i} className="ach-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ AWARDS ══ */}
        <div className="ach-block">
          <div className="ach-block-label">
            <span className="ach-block-line" />
            <span className="ach-block-text">Competition Awards</span>
            <span className="ach-block-line" />
          </div>

          <div className="ach-awards-grid">
            {awards.map((a) => {
              const meta = positionMeta[a.position] || positionMeta["3rd"];
              return (
                <div
                  key={a.id}
                  className="ach-award-card"
                  style={{ "--accent": a.color, "--glow": meta.glow }}
                >
                  {/* Position */}
                  <div className="ach-award-position">
                    <span className="ach-position-badge">{a.position}</span>
                    <span className="ach-position-label">Place</span>
                  </div>

                  {/* Body */}
                  <div className="ach-award-body">
                    <div className="ach-award-top">
                      <span className="ach-award-year">{a.year}</span>
                      <span className="ach-award-cat">{a.category}</span>
                    </div>
                    <h4 className="ach-award-event">{a.event}</h4>
                    <p className="ach-award-org">{a.org}</p>

                    {/* View Certificate button */}
                    <a
                      href={a.pdfFile}
                      target="_blank"
                      rel="noreferrer"
                      className="ach-view-cert-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                      </svg>
                      View Certificate
                    </a>
                  </div>

                  {/* Decorative trophy */}
                  <div className="ach-award-trophy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
                      <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                      <path d="M6 3h12v8a6 6 0 0 1-12 0V3z" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}