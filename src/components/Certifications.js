import { useState } from "react";
import { createPortal } from "react-dom";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    platform: "Coursera",
    issued: "Feb 2025",
    credentialId: "DK5YUM4AGMDN",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/DK5YUM4AGMDN",
    pdfFile: "/SupervisedML.pdf",
    imageFile: "/SupervisedML.jpg",
    description:
      "Supervised Machine Learning: Regression and Classification is the first course of the Machine Learning Specialization, authorized by DeepLearning.AI and Stanford University and offered through Coursera, instructed by Andrew Ng. The course covers core supervised learning concepts including linear regression, logistic regression, and gradient descent, along with regularization techniques to prevent overfitting. Learners implement these algorithms hands-on using Python, NumPy, and scikit-learn, building a strong practical foundation alongside the theory. It is one of the most well-regarded entry-level ML courses available, designed to bridge the gap between mathematical intuition and real-world application.",
    tags: ["Python", "Machine Learning", "Regression", "Classification"],
  },

  {
    id: 2,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    platform: "Coursera",
    issued: "Feb 2025",
    credentialId: "UD3WANCK1MU0",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/UD3WANCK1MU0",
    pdfFile: "/AdvancedAlg.pdf",
    imageFile: "/AdvancedAlg.jpg",
    description:
      "Advanced Learning Algorithms is the second course of the Machine Learning Specialization, authorized by DeepLearning.AI and Stanford University and offered through Coursera, instructed by Andrew Ng. The course covers neural networks in depth — how to build and train them using TensorFlow, with a solid understanding of forward propagation, backpropagation, and activation functions. It also introduces tree-based ensemble methods including decision trees, random forests, and XGBoost, which are widely used for structured data problems. Beyond the algorithms themselves, the course teaches practical ML engineering skills such as diagnosing bias and variance, evaluating model performance, and building a systematic approach to improving ML systems.",
    tags: ["Python", "Neural Networks", "Decision Trees", "Deep Learning"],
  },

  {
    id: 3,
    title: "Network Smarter with AI",
    issuer: "Grameenphone Academy",
    platform: "Grameenphone Ltd.",
    issued: "Apr 2026",
    credentialId: "50f799c2b135",
    verifyUrl: "https://www.grameenphone.academy/cert/50f799c2b135",
    pdfFile: "/Network Smarter with AI.pdf",
    imageFile: "/Network Smarter with AI.png",
    description: "Network Smarter with AI is a certification course offered by Grameenphone Academy, designed to equip learners with the knowledge and skills to leverage artificial intelligence in professional and digital networking contexts. The course explores how AI tools can enhance productivity, communication, and strategic thinking in today's fast-evolving digital landscape. Learners gain practical exposure to AI-driven approaches for career development, problem-solving, and building meaningful professional connections. Issued by Grameenphone Ltd. under its Academy's AI Mission initiative, this certification reflects the completion of a structured learning path focused on future-ready digital skills.",
    tags: ["Artificial Intelligence", "Digital Skills", "Professional Networking", "Career Readiness", "Grameenphone Academy"],
  },

  {
    id: 4,
    title: "Design System Thinking with AI",
    issuer: "Grameenphone Academy",
    platform: "Grameenphone Ltd.",
    issued: "Mar 2026",
    credentialId: "c884624a8256",
    verifyUrl: "https://www.grameenphone.academy/cert/c884624a8256",
    pdfFile: "/GP1.pdf",
    imageFile: "/GP1.jpg",
    description:
      "Design System Thinking with AI is a professional certification offered by Grameenphone Academy, focused on integrating design thinking methodologies with artificial intelligence tools. The course explores user-centered problem solving, system-level analysis, and AI-driven innovation strategies. Learners gain hands-on experience in applying empathy mapping, ideation frameworks, prototyping, and data-informed decision making to real-world business challenges. The program emphasizes holistic thinking, understanding interconnected systems, and leveraging AI to enhance product development, customer experience, and strategic planning. This certification validates practical competency in system thinking, AI-assisted design processes, and innovation-oriented solution building.",
    tags: ["Design Thinking", "System Thinking", "Artificial Intelligence", "Innovation", "Product Strategy"],
  },

  {
    id: 5,
    title: "Use Canva to Create Social Media Visuals for Business",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    issued: "Jun 2025",
    credentialId: "1P2JBDZL7073",
    verifyUrl: "https://coursera.org/verify/1P2JBDZL7073",
    pdfFile: "/Canva.pdf",
    imageFile: "/Canva.jpg",
    description:
      "Use Canva to Create Social Media Visuals for Business is a guided project offered through the Coursera Project Network, designed to build practical skills in digital visual design. The course walks through the complete process of creating professional social media graphics using Canva; covering layout composition, typography, color schemes, and brand identity. Learners design platform-specific content for Instagram, Facebook, and other channels, understanding how visual consistency drives audience engagement. The project also emphasizes real-world business applications, teaching how to align design choices with marketing goals and brand messaging. This certification validates hands-on proficiency in Canva and the ability to independently produce polished, business-ready social media visuals.",
    tags: ["Canva", "Graphic Design", "Social Media", "Visual Communication"],
  },

  {
    id: 6,
    title: "Create Your First Python Program From UST",
    issuer: "UST",
    platform: "Coursera",
    issued: "Feb 2026",
    credentialId: "51VG0FKAOB5E",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/51VG0FKAOB5E",
    pdfFile: "/PythonUST.pdf",
    imageFile: "/PythonUST.jpg",
    description:
      "Create Your First Python Program From UST is a hands-on guided project authorized by UST and offered through Coursera, instructed by Amit Yadav from the Machine Learning and Data Science domain. The course introduces Python programming from the ground up, guiding learners through writing, running, and understanding their very first Python programs. It covers fundamental programming concepts including variables, data types, basic input/output, and simple logic structures. The project-based format ensures learners gain real, practical coding experience rather than purely theoretical knowledge. This certification marks a foundational milestone in Python programming and serves as a solid starting point for further studies in data science, machine learning, and software development.",
    tags: ["Python"],
  },

  {
    id: 7,
    title: "Build a Full Website using WordPress",
    issuer: "Coursera Project Network",
    platform: "Coursera",
    issued: "Jun 2025",
    credentialId: "1LUA41Y2LYBV",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/1LUA41Y2LYBV",
    pdfFile: "/WordPress.pdf",
    imageFile: "/WordPress.jpg",
    description:
      "Build a Full Website using WordPress is a guided project authorized by the Coursera Project Network and offered through Coursera, instructed by Stacey Shanklin-Langford, Subject Matter Expert at Freedom Learning Group. The course provides a comprehensive, hands-on walkthrough of building a complete, professional website from scratch using WordPress — one of the most widely used content management systems in the world. Learners work through setting up WordPress, configuring themes, managing pages and posts, and customizing the site layout to achieve a polished, functional result. The project covers essential web development concepts including site structure, navigation design, plugin integration, and content management. This certification demonstrates practical proficiency in WordPress and the ability to independently plan, build, and launch a fully functional website.",
    tags: ["WordPress", "Web Development", "CMS", "Website Design"],
  }
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