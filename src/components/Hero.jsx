import React from 'react';
import MetricsBar from './MetricsBar';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="status-badge">
        <span className="status-dot"></span>
        <span className="status-text">
          Available for Roles &bull; B.Tech Artificial Intelligence @ NST (<strong>9.45 GPA</strong>)
        </span>
      </div>

      <h2 className="hero-heading">
        Engineering autonomous AI systems with rigorous full-stack foundations.
      </h2>

      <p className="hero-subtext">
        I specialize in <strong>Multi-Agent Workflows (LangGraph)</strong>, <strong>Contextual RAG Pipelines</strong>, and <strong>Explainable Machine Learning</strong>, paired with production web engineering in React, TypeScript, Node.js, and FastAPI.
      </p>

      <MetricsBar />
    </section>
  );
}
