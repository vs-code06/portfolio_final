import React from 'react';
import { EDUCATION, HONORS } from '../data/accolades';

export default function Accolades() {
  return (
    <section className="content-block" id="accolades">
      <div className="block-header">
        <span className="block-tag">04 / CREDENTIALS</span>
        <h3 className="block-title">Education &amp; Accolades</h3>
        <p className="block-subtitle">Academic standing at Newton School of Technology and verified competitive programming ratings.</p>
      </div>

      <div className="credentials-split reveal-on-scroll">
        {/* Degree */}
        <div className="credential-card">
          <div className="cred-header">
            <div>
              <h4 className="cred-title">{EDUCATION.degree}</h4>
              <span className="cred-school">{EDUCATION.school}</span>
            </div>
            <span className="cred-gpa-badge">{EDUCATION.gpa}</span>
          </div>
          <span className="cred-period">{EDUCATION.period}</span>
          <p className="cred-desc">{EDUCATION.desc}</p>
        </div>

        {/* Accolades List */}
        <div className="credential-card">
          <h4
            className="cred-title"
            style={{
              marginBottom: '0.85rem',
              paddingBottom: '0.45rem',
              borderBottom: '1px solid var(--border)'
            }}
          >
            Competitive Programming &amp; Honors
          </h4>
          <div className="honors-list">
            {HONORS.map((h, idx) => (
              <div key={idx} className="honor-row">
                <span className="honor-pill">{h.pill}</span>
                <div className="honor-desc">
                  <strong>{h.title}</strong>
                  <span>{h.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
