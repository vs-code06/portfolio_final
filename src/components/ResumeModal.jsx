import React, { useEffect } from 'react';
import { RESUME_DATA } from '../data/resume';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay active"
      id="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={(e) => {
        if (e.target.id === 'resume-modal') {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h3 id="resume-title" className="modal-title">
              Vipul Sharma — Curriculum Vitae
            </h3>
            <span className="modal-sub">Updated for 2025/2026 Engineering Cycles</span>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => window.print()}
              title="Print or save as PDF"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              className="icon-btn modal-close-btn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="modal-body printable-resume">
          <div className="resume-sheet">
            <div className="resume-sheet-header">
              <h1 className="resume-name">{RESUME_DATA.name}</h1>
              <div className="resume-contact-line">
                <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a> &bull;{' '}
                <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{' '}
                &bull;{' '}
                <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{' '}
                &bull;{' '}
                <a href={RESUME_DATA.leetcode} target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              </div>
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">SUMMARY</h2>
              <p>{RESUME_DATA.summary}</p>
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">EDUCATION</h2>
              <div className="resume-entry">
                <div className="entry-row">
                  <strong>{RESUME_DATA.education.degree}</strong>
                  <span>{RESUME_DATA.education.period}</span>
                </div>
                <div className="entry-row italic">
                  <span>{RESUME_DATA.education.school}</span>
                  <span className="highlight-val">{RESUME_DATA.education.gpa}</span>
                </div>
              </div>
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">EXPERIENCE</h2>
              <div className="resume-entry">
                <div className="entry-row">
                  <strong>{RESUME_DATA.experience.role}</strong>
                  <span>{RESUME_DATA.experience.period}</span>
                </div>
                <div className="entry-row italic">
                  <span>{RESUME_DATA.experience.company}</span>
                  <span>{RESUME_DATA.experience.location}</span>
                </div>
                <ul className="resume-bullets">
                  {RESUME_DATA.experience.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">PROJECTS</h2>
              {RESUME_DATA.projects.map((proj, pIdx) => (
                <div key={pIdx} className="resume-entry">
                  <div className="entry-row">
                    <strong>{proj.name}</strong>
                    <span>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>{' '}
                      |{' '}
                      <a href={proj.live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </span>
                  </div>
                  <div className="entry-tech">
                    <strong>Tech Stack:</strong> {proj.tech}
                  </div>
                  <ul className="resume-bullets">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
              <p>
                <strong>Languages:</strong> {RESUME_DATA.skills.languages}
              </p>
              <p>
                <strong>Machine Learning:</strong> {RESUME_DATA.skills.ml}
              </p>
              <p>
                <strong>Generative AI:</strong> {RESUME_DATA.skills.genai}
              </p>
              <p>
                <strong>Software Development:</strong> {RESUME_DATA.skills.software}
              </p>
            </div>

            <div className="resume-sec">
              <h2 className="resume-sec-title">ACHIEVEMENTS</h2>
              <ul className="resume-bullets">
                {RESUME_DATA.achievements.map((ach, aIdx) => (
                  <li key={aIdx}>
                    <strong>{ach.label}:</strong> {ach.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
