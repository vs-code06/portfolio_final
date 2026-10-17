import React, { useEffect } from 'react';
import { PROJECT_DETAILS } from '../data/projects';

export default function ProjectModal({ projectId, onClose }) {
  const project = projectId ? PROJECT_DETAILS[projectId] : null;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay active"
      id="project-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target.id === 'project-detail-modal') {
          onClose();
        }
      }}
    >
      <div className="modal-card project-modal-card">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="project-badge-row">
              {project.badges.map((b, idx) => (
                <span key={idx} className={`p-badge ${b.class}`}>
                  {b.text}
                </span>
              ))}
            </div>
            <h3 id="project-modal-title" className="modal-title">
              {project.title}
            </h3>
            <p className="modal-project-tagline">{project.tagline}</p>
          </div>

          <div className="modal-actions-wrap">
            <div className="modal-project-links">
              {project.links.map((link, idx) => {
                if (link.disabled) {
                  return (
                    <span key={idx} className="p-badge-status">
                      {link.label}
                    </span>
                  );
                }
                const cls = link.primary ? 'p-btn p-btn-primary' : 'p-btn';
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              &#10005;
            </button>
          </div>
        </div>

        <div className="modal-body project-modal-body">
          {/* Flow */}
          <div className="modal-section">
            <h5 className="modal-section-label">Architecture Pipeline Flow</h5>
            <div className="modal-flow-wrap">
              {project.flow.map((f, idx) => (
                <React.Fragment key={idx}>
                  <div className={`modal-flow-step ${f.active ? 'active-step' : ''}`}>
                    <span className="flow-step-num">{f.num}</span>
                    <span className="flow-step-name">{f.name}</span>
                    <span className="flow-step-desc">{f.desc}</span>
                  </div>
                  {idx < project.flow.length - 1 && (
                    <span className="modal-flow-arrow">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="modal-section">
            <h5 className="modal-section-label">System Highlights &amp; Implementation Details</h5>
            <ul className="modal-highlights-list">
              {project.highlights.map((h, idx) => (
                <li key={idx}>
                  <strong>{h.title}:</strong> {h.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h5 className="modal-section-label">Full Technology Stack</h5>
            <div className="project-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
