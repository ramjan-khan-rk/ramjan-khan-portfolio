import { useState } from "react";

const email = "ramjankhan8824@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact-content">
        <div className="section-heading">
          <p className="section-label">05 — Contact</p>
          <h2>Let&apos;s build something.</h2>
        </div>

        <p className="contact-text">
          I&apos;m open to developer roles, collaborations, and conversations
          about products that need to work in the real world.
        </p>

        <div className="contact-email">
          <a href={`mailto:${email}`}>{email}</a>
          <button type="button" onClick={copyEmail}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="contact-links">
          <a href={`mailto:${email}`}>
            <span>Email</span>
            <span>{email}</span>
          </a>
          <a href="https://github.com/ramjan-khan-rk" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <span>ramjan-khan-rk</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ramjan-khan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>ramjan-khan</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
