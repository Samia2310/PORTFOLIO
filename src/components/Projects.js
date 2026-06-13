import { useState } from "react";
import { UserIcon, UsersIcon } from "./Icons";
import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Nextern",
    subtitle: "AI-Powered Campus Internship & Career Platform",
    type: "Group Project",
    team: [
      {
        name: "Sabbir Akon",
        github: "https://github.com/akonBRO",
        email: "sabbir@example.com",
      },
      {
        name: "Jauad Ahmed Sadik",
        github: "https://github.com/JauadAhmed",
        email: "jauadahmedsadik@gmail.com",
      },
    ],
    description:
      "A full-stack Next.js 15 web platform built exclusively for university students, campus recruiters, and advisors. Nextern bridges the gap between fresh graduates and employers through AI-powered skill gap analysis, internship fit scoring, smart job recommendations, real-time messaging, and a verified alumni mentorship network. Students get a Graduation Evaluation Report; employers manage entire hiring pipelines; university advisors access AI-generated readiness insights — all in one ecosystem.",
    tags: ["Next.js 15", "TypeScript", "MongoDB", "Tailwind CSS", "Gemini AI", "Groq", "Pusher", "NextAuth.js", "Uploadthing", "Google Calendar"],
    liveUrl: "https://nextern-virid.vercel.app",
    githubUrl: "https://github.com/akonBRO/nextern",
    features: [
      "AI skill gap analysis & internship fit scoring",
      "Smart personalized job recommendations",
      "Real-time messaging with Pusher",
      "Alumni mentorship network with video sessions",
      "Graduation Evaluation Report (GER) generation",
    ],
    status: "In Progress",
    year: "2026",
  },
  {
    id: 2,
    number: "02",
    title: "Scramble Puzzle",
    subtitle: "Interactive Slide Puzzle Game",
    type: "Personal Project",
    description:
      "A fully-featured sliding puzzle game built with React, featuring 50 curated images, 4 difficulty levels (2×2 to 5×5), high score tracking via localStorage, sound effects, and a solvability algorithm using inversion count theory. Players can select images, shuffle tiles, and compete for the lowest move count.",
    tags: ["React", "JavaScript", "CSS", "Game Dev", "Algorithm"],
    liveUrl: "https://scramble-puzzle2-0.vercel.app",
    githubUrl: "https://github.com/Samia2310/ScramblePuzzle2.0",
    features: [
      "50 curated puzzle images",
      "4 difficulty levels",
      "High score tracking",
      "Sound effects",
      "Solvability algorithm",
    ],
    status: "Live",
    year: "2025",
  },
  {
    id: 3,
    number: "03",
    title: "QR Code Generator",
    subtitle: "URL to QR Code Web Tool",
    type: "Personal Project",
    description:
      "A sleek, browser-based QR code generator that instantly converts any URL into a high-resolution, scannable QR code. Built with vanilla HTML, CSS, and JavaScript featuring a glassmorphism UI design, animated entrance effects, and responsive layout. Users can generate and download QR codes in PNG format with a single click.",
    tags: ["HTML", "CSS", "JavaScript", "QR Code", "Glassmorphism"],
    liveUrl: "https://samia2310.github.io/QR-Code-Generator/",
    githubUrl: "https://github.com/Samia2310/QR-Code-Generator",
    features: [
      "Instant QR code generation",
      "PNG download support",
      "Glassmorphism UI design",
      "Responsive for all devices",
      "Enter key shortcut support",
    ],
    status: "Live",
    year: "2025",
  },
  {
    id: 4,
    number: "04",
    title: "Quick Calendar",
    subtitle: "Multi-Calendar Generator & Date Converter",
    type: "Personal Project",
    description:
      "A feature-rich calendar web app supporting three calendar systems: Gregorian (English), Bengali (Bangabda), and Arabic (Hijri). Users can generate full-year calendars, convert dates across all three systems, check leap years, and read historical notes about each calendar. Includes dark mode, a draggable info note panel, and leap year visual theming.",
    tags: ["HTML", "CSS", "JavaScript", "Date Algorithm", "Multi-language"],
    liveUrl: "https://samia2310.github.io/QuickCalendar1.0/",
    githubUrl: "https://github.com/Samia2310/QuickCalendar1.0",
    features: [
      "3 calendar systems supported",
      "Cross-calendar date conversion",
      "Leap year detection & theming",
      "Draggable history notes panel",
      "Dark mode support",
    ],
    status: "Live",
    year: "2025",
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
            A collection of things I've built. From games to intelligent systems.
            Each project reflects a problem I wanted to solve.
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
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noreferrer"
                                className="team-member-gh-link"
                                onClick={(e) => e.stopPropagation()}
                                title="GitHub"
                              >
                                <svg
                                  className="team-gh-icon"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                              </a>

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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn secondary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}