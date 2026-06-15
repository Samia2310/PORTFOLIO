import { useState } from "react";
import "./Contact.css";

const contacts = [
    {
        id: 1,
        name: "Gmail",
        handle: "koffaruk007@gmail.com",
        url: "mailto:koffaruk007@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
            </svg>
        ),
        color: "#EA4335",
    },
    {
        id: 3,
        name: "LinkedIn",
        handle: "Kazi Omar Faruk",
        url: "https://www.linkedin.com/in/kazi-omar-faruk-23a5bb345/",
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
        url: "https://www.facebook.com/share/1HWjBqVZ7c/",
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
        url: "mailto:samia.tchowdhury@outlook.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 7.387v12.461a1.2 1.2 0 0 1-1.2 1.2H9.6a1.2 1.2 0 0 1-1.2-1.2V17.4l7.2-4.2-7.2-3.45V7.387a1.2 1.2 0 0 1 1.2-1.187h13.2A1.2 1.2 0 0 1 24 7.387z" fill="#0078D4" />
            </svg>
        ),
        color: "#0078D4",
    },
];

export default function Contact() {
    const [username, setUsername] = useState("");
    const [feedback, setFeedback] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();

        const safeUsername = (username || "Anonymous").trim();
        const safeFeedback = (feedback || "").trim();

        if (!safeFeedback) {
            setStatusMessage("Please write your feedback before sending.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio feedback from ${safeUsername}`);
        const body = encodeURIComponent(
            `Username: ${safeUsername}\n\nFeedback:\n${safeFeedback}`
        );

        const mailtoLink = `mailto:koffaruk007@gmail.com?subject=${subject}&body=${body}`;

        try {
            window.open(mailtoLink, "_blank", "noopener,noreferrer");
            setStatusMessage("Your email draft should open in your mail app. Please review and send it there.");
        } catch (error) {
            setStatusMessage("Please allow popups or use your email app to send this feedback.");
        }

        setUsername("");
        setFeedback("");
    };
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

                <div className="contact-layout">
                    <div className="contact-panel">
                        <div className="contact-panel-header">
                            <span className="section-tag">Reach out</span>
                            <h3 className="contact-panel-title">Direct contact options</h3>
                            <p className="contact-panel-text">Pick the best way to connect with me for projects, collaboration, or quick questions.</p>
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
                    </div>

                    <div className="feedback-panel">
                        <div className="feedback-copy">
                            <span className="section-tag">Feedback</span>
                            <h3 className="feedback-title">Tell me what you think</h3>
                            <p className="feedback-subtitle">
                                Share your thoughts, suggestions, or any feedback. It will open your email app with a ready-to-send message.
                            </p>
                        </div>

                        <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                            <label className="feedback-field">
                                <span>Your username</span>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    placeholder="e.g. Alex"
                                />
                            </label>

                            <label className="feedback-field">
                                <span>Your feedback</span>
                                <textarea
                                    rows="6"
                                    value={feedback}
                                    onChange={(event) => setFeedback(event.target.value)}
                                    placeholder="Write your feedback here..."
                                    required
                                />
                            </label>

                            <button type="submit" className="feedback-submit">Send feedback</button>
                            {statusMessage ? <p className="feedback-status">{statusMessage}</p> : null}
                        </form>
                    </div>
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