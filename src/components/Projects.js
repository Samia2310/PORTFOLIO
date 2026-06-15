import { useState } from "react";
import { UserIcon, UsersIcon } from "./Icons";
import "./Projects.css";

const projects = [
    {
    id: 1,
    number: "01",
    title: "Logistics Analysis",
    subtitle: "Interactive dashboard design for logistics analysis",
    type: "Personal Project",
    description:
      "This project is an Excel-based Logistics Analysis Dashboard developed to monitor shipment performance, delivery efficiency, transportation costs, and carrier operations through interactive reporting. The solution addresses the challenge of tracking large volumes of logistics data by transforming raw shipment records into meaningful business insights for faster decision-making.",
    tags: ["Excel", "Power Query", "Pivot Table", "Iferror", "Index-Match", "Data Visualization"],
    liveUrl: "https://excel.cloud.microsoft/open/onedrive/?docId=B8060C3B45534CE5%21sdae60943b91449048f3b6db4b4455bb2&driveId=B8060C3B45534CE5&wdOrigin=OFFICECOM-WEB.REDIRECT%2CAPPHOME-WEB.BANNER.UPLOAD-OCDI&wdPreviousSession=8b2bcf92-565e-483f-8c0c-5e8b733a4854&wdPreviousSessionSrc=AppHomeWeb&ct=1781552523397",
    features: [
      "Shipment performance monitoring",
      "Delivery time analysis",
      "Trend visualization",
      "Dynamic reporting",
    ],
    status: "Live",
    year: "2026",
  },
  {
    id: 2,
    number: "02",
    title: "Inventory management system",
    subtitle: "Interactive dashboard for inventory management",
    type: "Personal Project",
    description:
      "This project is an Excel-based Inventory Management System designed to streamline product purchasing, sales tracking, inventory monitoring, vendor management, and customer records in a single dashboard. It solves the common challenge of manually tracking stock levels and sales by automatically calculating inventory movement and generating real-time insights. The system uses advanced spreadsheet tools such as Pivot Tables, VLOOKUP, SUMIF, INDEX-MATCH,  IFERROR, and AGGREGATE functions to automate data processing and reporting. A dynamic dashboard provides category-wise sales analysis, stock valuation, and low-stock notifications with vendor contact details for timely reordering.",
    tags: ["Vlookup", "Sumif", "Index-Match", "Aggregate Functions", "Data Visualization"],
    liveUrl: "https://onedrive.live.com/personal/b8060c3b45534ce5/_layouts/15/doc2.aspx?resid=a0180b01-6297-4f09-acb4-171137979928&cid=b8060c3b45534ce5",
    features: [
      "Real-Time Inventory Tracking",
      "Monitors stock availability",
      "Records and analyzes all sales and purchase transactions in one system",
      "Low Stock Alerts",
      "Maintains supplier and customer information",
      "Interactive Dashboard & Reports",
      "stock valuation",
    ],
    status: "Live",
    year: "2026",
  },
  
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [teamOpen, setTeamOpen] = useState(false);

  return (
    <section className="projects" id="projects">
      <div className="projects-bg">
        <div className="projects-orb projects-orb-1" />
        <div className="projects-orb projects-orb-2" />
      </div>

      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A collection of things I've built. Developed interactive Excel dashboards and automated reporting systems to improve operational efficiency and data driven decision making.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={
                "project-card" +
                (hovered === project.id ? " hovered" : "")
              }
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-left">
                <span className="project-number">{project.number}</span>
                <div className="project-line" />
              </div>

              <div className="project-center">
                <div className="project-top-row">
                  <div className="project-meta">
                    <span
                      className={
                        "project-status" +
                        (project.status === "In Progress" ? " in-progress" : "")
                      }
                    >
                      <span className="status-dot" />
                      {project.status}
                    </span>

                    <span className="project-year">{project.year}</span>

                    {project.type === "Group Project" ? (
                      <div className="team-dropdown-wrapper">
                        <button
                          className="project-type-badge group"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTeamOpen((prev) => !prev);
                          }}
                          aria-expanded={teamOpen}
                        >
                          <UsersIcon className="project-badge-icon" />
                          <span>{project.type}</span>
                          <svg
                            className={"team-chevron" + (teamOpen ? " open" : "")}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        <div className={"team-dropdown" + (teamOpen ? " open" : "")}>
                          <p className="team-dropdown-label">Team Members</p>
                          {project.team.map((member, i) => (
                            <div key={i} className="team-dropdown-member">
                              <span className="team-member-name">{member.name}</span>

                              <a
                                href={`mailto:${member.email}`}
                                className="team-member-email-link"
                                onClick={(e) => e.stopPropagation()}
                                title={member.email}
                              >
                                <svg
                                  className="team-email-icon"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                  <polyline points="22,6 12,13 2,6" />
                                </svg>
                              </a>

                              <svg
                                className="team-arrow-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <span className="project-type-badge personal">
                        <UserIcon className="project-badge-icon" />
                        <span>{project.type}</span>
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  {project.features.map((f, i) => (
                    <span key={i} className="project-feature">
                      <span className="feature-dot">&#9657;</span>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-right">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M9 13h6" />
                    <path d="M9 17h6" />
                  </svg>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}