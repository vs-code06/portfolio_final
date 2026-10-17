import React from 'react';
import { EXPERIENCE } from '../data/experience';

export default function Experience() {
  return (
    <section className="content-block" id="experience">
      <div className="block-header">
        <span className="block-tag">02 / CAREER</span>
        <h3 className="block-title">Production Work Experience</h3>
      </div>

      <div className="experience-card reveal-on-scroll">
        <div className="exp-top">
          <div>
            <h4 className="exp-company">{EXPERIENCE.company}</h4>
            <div className="exp-role-title">
              {EXPERIENCE.role} &nbsp;&bull;&nbsp;{' '}
              <span className="remote-badge">{EXPERIENCE.location}</span>
            </div>
          </div>
          <span className="exp-dates">{EXPERIENCE.period}</span>
        </div>

        <div className="exp-metrics-strip">
          {EXPERIENCE.metrics.map((m, idx) => (
            <div key={idx} className="exp-m-item">
              <span className="exp-m-val">{m.value}</span>
              <span className="exp-m-desc">{m.label}</span>
            </div>
          ))}
        </div>

        <ul className="details-list">
          {EXPERIENCE.bullets.map((b, idx) => (
            <li key={idx}>
              <strong>{b.title}:</strong> {b.desc}
            </li>
          ))}
        </ul>

        <div className="dossier-tech-row" style={{ marginTop: '1rem' }}>
          {EXPERIENCE.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
