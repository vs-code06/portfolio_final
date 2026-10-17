import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';

export default function Skills() {
  return (
    <section className="content-block" id="skills">
      <div className="block-header">
        <span className="block-tag">03 / CAPABILITIES</span>
        <h3 className="block-title">Technical Skills Matrix</h3>
      </div>

      <div className="skills-grid reveal-on-scroll">
        {SKILL_CATEGORIES.map((sc, idx) => (
          <div key={idx} className="skill-card">
            <div className="sc-header">
              <span className="sc-icon">{sc.icon}</span>
              <h4 className="sc-title">{sc.title}</h4>
            </div>
            <p className="sc-items">{sc.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
