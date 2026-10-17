import React from 'react';
import { PROJECTS_SUMMARY } from '../data/projects';

export default function Projects({ onOpenDetail }) {
  return (
    <section className="content-block" id="projects">
      <div className="block-header">
        <span className="block-num">01 / SELECTED WORK</span>
        <h3 className="block-title">Flagship AI &amp; Full-Stack Projects</h3>
        <p className="block-subtitle">Production-ready architectures, explainable ML models, and scalable systems.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS_SUMMARY.map((p) => (
          <article
            key={p.id}
            className={`project-card ${p.isUpcoming ? 'project-card-upcoming' : ''} reveal-on-scroll`}
          >
            <div className="project-card-top">
              {p.pulseClass ? (
                <span className={`p-badge ${p.badgeClass}`}>
                  <span className={`pulse-dot ${p.pulseClass}`}></span> {p.category}
                </span>
              ) : (
                <span className={`p-badge ${p.badgeClass}`}>{p.category}</span>
              )}

              <div className="p-card-links">
                {p.links ? (
                  p.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link.primary ? 'p-link-primary' : 'p-link'}
                    >
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className="p-badge-status">{p.statusBadge}</span>
                )}
              </div>
            </div>

            <h4 className="project-name">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>

            <div className="project-card-footer">
              <div className="project-tags">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="btn-see-detail"
                onClick={() => onOpenDetail(p.id)}
              >
                See in Detail &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
