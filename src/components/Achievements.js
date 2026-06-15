import "./Achievements.css";

const scholarships = [
  {
    id: 1,
    title: "Merit Scholarship",
    org: "Khulna University of Engineering & Technology (KUET)",
    duration: "2022",
    description:
      "Awarded the merit scholarship by KUET in recognition of entrance examination performance.",
    tags: ["Academic Excellence"],
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

//const awards = [
  //{
    //id: 1,
    //position: "3rd",
    //event: "5th National Language Festival 2018",
    //category: "Photography — Mobile (9–12)",
    //org: "Dhaka Residential Model College",
    //year: "2018",
    //color: "#f59e0b",
    //pdfFile: "/NationalLanguageFest2018.pdf",
  //},
  
//];

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
        {/* Award cards have been removed for now. Add this section back later when awards data is ready. */}

      </div>
    </section>
  );
}