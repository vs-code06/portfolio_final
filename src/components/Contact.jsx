import React from 'react';

export default function Contact({ onOpenResume, onCopyEmail }) {
  return (
    <section className="content-block" id="contact">
      <div className="block-header">
        <span className="block-tag">05 / CONNECT</span>
        <h3 className="block-title">Get in Touch</h3>
        <p className="block-subtitle">Available for AI Engineering and Software Engineering opportunities for 2025/2026 cycles.</p>
      </div>

      <div className="contact-box reveal-on-scroll">
        <p className="contact-intro">
          I am actively exploring <strong>AI Engineering</strong> and{' '}
          <strong>Software Engineering Intern / Full-Time</strong> opportunities for 2025/2026 cycles.
        </p>

        <div className="contact-channels">
          <div className="channel-tile">
            <span className="ch-label">Direct Email</span>
            <button
              type="button"
              className="ch-value copy-email-btn"
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
              onClick={() => onCopyEmail('vipultheplayer@gmail.com')}
              title="Click to copy email"
            >
              vipultheplayer@gmail.com
            </button>
          </div>
          <div className="channel-tile">
            <span className="ch-label">Location &amp; Work Availability</span>
            <span className="ch-value">Delhi NCR, India &bull; Open to Remote &amp; Relocation</span>
          </div>
        </div>

        <div className="contact-links-row">
          <a href="https://github.com/vs-code06" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub &nearr;
          </a>
          <a href="https://linkedin.com/in/vipul-sharma-069943241/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn &nearr;
          </a>
          <a href="https://leetcode.com/u/Vipul_Sharma06/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LeetCode &nearr;
          </a>
          <a href="https://codeforces.com/profile/Vipul_Sharma06" target="_blank" rel="noopener noreferrer" className="footer-link">
            Codeforces &nearr;
          </a>
        </div>

        <div className="contact-cta-row">
          <a
            href="mailto:vipultheplayer@gmail.com?subject=Interview%20Inquiry%20%E2%80%94%20Vipul%20Sharma"
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span>Send Message</span>
          </a>
          <button
            type="button"
            id="contact-open-resume"
            className="btn btn-secondary"
            onClick={onOpenResume}
          >
            View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}
