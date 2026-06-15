import "./Experiences.css";

const experiences = [
  {
    id: 1,
    role: "Inventory Coordinator",
    org: "Kazi Farms Kitchen Franchise — Satkhira, Khulna",
    duration: "2025 – 2026",
    type: "Professional",
    description:
      "Managed inventory records for over 20 SKUs using Microsoft Excel. This helped track stock movements and sales transactions accurately. I identified inventory consumption and sales trends, assessed risks of stockouts, and ensured products were replenished on time.",
    tags: ["Inventory Management", "Excel", "Supply Chain"],
  },
  {
    id: 2,
    role: "Senior Executive",
    org: "Dream — Khulna",
    duration: "2025 – 2026",
    type: "Volunteering",
    description:
      "It's a voluntary club at KUET that facilitates blood donation support. I coordinated with donors, recipients, and volunteers to provide timely blood donation support for those in need.",
    tags: ["Volunteer Coordination", "Blood Donation", "Community Support"],
  },
];

const typeIcon = {
  Teaching: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
    </svg>
  ),
  Leadership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Club: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  Volunteer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export default function Experience() {
  return (
    <section className="experience" id="experiences">
      <div className="exp-bg">
        <div className="exp-orb exp-orb-1" />
        <div className="exp-orb exp-orb-2" />
      </div>

      <div className="exp-container">
        <div className="exp-header">
          <span className="section-tag">My Journey</span>
          <h2 className="exp-title">
            Experience &amp; <span className="gradient-text">Leadership</span>
          </h2>
          <p className="exp-subtitle">
            Roles I've held beyond the classroom — from managing inventory
            operations to coordinating community support.
          </p>
        </div>

        <div className="exp-timeline">
          {/* Vertical rail */}
          <div className="exp-rail" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="exp-item">
              {/* Timeline node */}
              <div className="exp-node">
                <div className="exp-node-ring" />
                <div className="exp-node-dot" />
              </div>

              {/* Card */}
              <div className="exp-card">
                {/* Accent bar */}
                <div className="exp-card-accent" />

                <div className="exp-card-inner">
                  {/* Top row */}
                  <div className="exp-card-top">
                    <div className="exp-type-icon">
                      {typeIcon[exp.type] || typeIcon["Volunteer"]}
                    </div>
                    <div className="exp-card-meta">
                      <span className="exp-type-badge">{exp.type}</span>
                      <span className="exp-duration">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Role + org */}
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-org">{exp.org}</p>
                  <p className="exp-desc">{exp.description}</p>

                  {/* Tags */}
                  <div className="exp-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector line from node to next */}
              {index < experiences.length - 1 && (
                <div className="exp-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}