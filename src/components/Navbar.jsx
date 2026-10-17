import React from 'react';

export default function Navbar({ onOpenResume, onCopyEmail, onOpenCmd, onToggleTheme, theme }) {
  return (
    <header className="top-bar">
      <div className="brand-group">
        <span className="brand-badge">VS</span>
        <div className="brand-info">
          <h1 className="brand-name">Vipul Sharma</h1>
          <span className="brand-role">AI Engineer & Full-Stack Developer</span>
        </div>
      </div>

      <div className="top-actions">
        <nav className="top-nav" aria-label="Section links">
          <a href="#projects" className="top-nav-link">Projects</a>
          <a href="#experience" className="top-nav-link">Experience</a>
          <a href="#skills" className="top-nav-link">Skills</a>
          <a href="#accolades" className="top-nav-link">Accolades</a>
          <a href="#contact" className="top-nav-link">Contact</a>
        </nav>

        <div className="action-cluster">
          <button
            type="button"
            id="open-resume-btn"
            className="btn btn-primary btn-sm"
            onClick={onOpenResume}
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span>Resume</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm copy-email-btn"
            onClick={() => onCopyEmail('vipultheplayer@gmail.com')}
            title="Copy email address"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Email</span>
          </button>

          <button
            type="button"
            id="cmd-k-btn"
            className="cmd-btn"
            onClick={onOpenCmd}
            title="Search portfolio (Cmd + K)"
          >
            <span className="cmd-sym">⌘</span><span className="cmd-key">K</span>
          </button>

          <button
            type="button"
            id="theme-toggle"
            className="icon-btn"
            onClick={onToggleTheme}
            title={`Toggle theme (currently ${theme})`}
            aria-label={`Toggle theme (currently ${theme})`}
          >
            <svg className="sun-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
