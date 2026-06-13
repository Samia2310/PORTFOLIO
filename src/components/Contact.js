import "./Contact.css";

const contacts = [
    {
        id: 1,
        name: "Gmail",
        handle: "samiatchowdhury2310@gmail.com",
        url: "mailto:samiatchowdhury2310@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
            </svg>
        ),
        color: "#EA4335",
    },
    {
        id: 2,
        name: "GitHub",
        handle: "github.com/Samia2310",
        url: "https://github.com/Samia2310",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        color: "#ffffff",
    },
    {
        id: 3,
        name: "LinkedIn",
        handle: "Kazi Omar Faruk",
        url: "https://www.linkedin.com/in/samia-tabassum-chowdhury-191229348",
        icon: (
            <svg viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        color: "#0A66C2",
    },
    {
        id: 4,
        name: "Facebook",
        handle: "Kazi Omar Faruk",
        url: "https://www.facebook.com/Samia.Tabassum.Chowdhury/",
        icon: (
            <svg viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        color: "#1877F2",
    },
    {
        id: 5,
        name: "Outlook",
        handle: "Microsoft Outlook",
        url: "mailto:samia.t.chowdhury@outlook.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 7.387v12.461a1.2 1.2 0 0 1-1.2 1.2H9.6a1.2 1.2 0 0 1-1.2-1.2V17.4l7.2-4.2-7.2-3.45V7.387a1.2 1.2 0 0 1 1.2-1.187h13.2A1.2 1.2 0 0 1 24 7.387z" fill="#0078D4" />
            </svg>
        ),
        color: "#0078D4",
    },
    {
        id: 6,
        name: "Kaggle",
        handle: "Visit my Kaggle profile",
        url: "https://www.kaggle.com/Samia2310",
        icon: (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.235.118-.353.354-.353h2.431c.234 0 .351.118.351.353v14.343l6.203-6.272c.165-.165.33-.248.497-.248h3.239c.149 0 .235.049.259.148.023.1-.011.197-.106.296l-6.302 6.275 6.495 8.333c.095.104.13.208.1.307z"
      fill="#20BEFF"
    />
  </svg>
),
        color: "#20BEFF",
    },
];

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <div className="contact-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="contact-title">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="contact-subtitle">
                        Whether you have a project in mind, a question, or just want to say hello,
                        I'd love to hear from you. Reach out through any of the platforms below.
                    </p>
                </div>

                <div className="contact-grid">
                    {contacts.map((contact) => (
                        <a
                            key={contact.id}
                            href={contact.url}
                            target={contact.url.startsWith("mailto") ? "_self" : "_blank"}
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <div
                                className="contact-card-glow"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${contact.color}22 0%, transparent 70%)`
                                }}
                            />

                            <div
                                className="contact-icon-wrap"
                                style={{ borderColor: `${contact.color}33` }}
                            >
                                <div className="contact-icon">
                                    {contact.icon}
                                </div>
                            </div>

                            <div className="contact-info">
                                <span className="contact-name">{contact.name}</span>
                                <span className="contact-handle">{contact.handle}</span>
                            </div>

                            <div className="contact-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="contact-footer">
                    <p>
                        Designed & Built by <span className="gradient-text">Kazi Omar Faruk</span>
                    </p>
                </div>

            </div>
        </section>
    );
}