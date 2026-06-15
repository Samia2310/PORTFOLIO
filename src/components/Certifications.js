import { useState } from "react";
import { createPortal } from "react-dom";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Microsoft Excel with A.I Masterclass (Self Learning)",
    issuer: "Satish Dhawale (Skill Course)",
    platform: "Skill Course",
    issued: "Jun 2026",
    credentialId: "SC-00E44B62F0",
    verifyUrl: "https://exam.skillcourse.in/student/view_certificate?uid=SC-00E44B62F0",
    pdfFile: "/Excel.pdf",
    imageFile: "/Excel.png",
    description:
      "This self-paced masterclass is designed to equip learners with both fundamental and advanced Microsoft Excel skills, enhanced by the power of Artificial Intelligence , making it ideal for professionals, students, and anyone looking to boost their productivity and data management capabilities. The course provides comprehensive training in core Excel skills including Formulas, Functions, PivotTables, Power Pivot, Power Query, Conditional Formatting, and Data Validation. covering real-world applications of Excel in Business and Finance domains, including financial modeling, reporting, and business data analysis.",
    tags: ["Excel", "A.I", "Data Analysis"],
  },

  
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <div className="cert-container">

        <div className="cert-header">
          <span className="cert-section-tag">Certifications</span>
          <h2 className="cert-heading">
            Credentials & <span className="cert-gradient">Licenses</span>
          </h2>
          <p className="cert-subheading">
            Verified certifications from globally recognized institutions.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelected(cert)}
            >
              <div className="cert-card-bar" />

              <div className="cert-card-body">
                <div className="cert-platform-row">
                  <span className="cert-platform-badge">{cert.platform}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>

                <div className="cert-meta">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Issued</span>
                    <span className="cert-meta-value">{cert.issued}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Credential ID</span>
                    <span className="cert-meta-value cert-mono">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                <div className="cert-tags">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="cert-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="cert-card-footer">
                  <button className="cert-view-btn">
                    View Certificate →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected &&
        createPortal(
          <div
            className="cert-modal-overlay"
            onClick={() => setSelected(null)}
          >
            <div
              className="cert-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <span className="cert-platform-badge">
                    {selected.platform}
                  </span>
                  <h3 className="cert-modal-title">
                    {selected.title}
                  </h3>
                  <p className="cert-modal-issuer">
                    {selected.issuer}
                  </p>
                </div>

                <button
                  className="cert-modal-close"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>

              <div className="cert-pdf-wrapper">
                <img
                  src={selected.imageFile}
                  alt={selected.title}
                  className="cert-img"
                />
              </div>

              <div className="cert-modal-body">
                <p className="cert-modal-desc">
                  {selected.description}
                </p>

                <div className="cert-modal-meta">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Issued</span>
                    <span className="cert-meta-value">
                      {selected.issued}
                    </span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Credential ID</span>
                    <span className="cert-meta-value cert-mono">
                      {selected.credentialId}
                    </span>
                  </div>
                </div>

                <div className="cert-modal-actions">
                  <a
                    href={selected.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn-primary"
                  >
                    Verify Certificate ↗
                  </a>

                  <a
                    href={selected.pdfFile}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn-secondary"
                  >
                    Open PDF ↗
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}