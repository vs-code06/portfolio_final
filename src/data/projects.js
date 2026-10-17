export const PROJECTS_SUMMARY = [
  {
    id: "netflix",
    category: "Multi-Agent AI",
    badgeClass: "p-badge-purple",
    title: "Netflix Customer Churn Strategist",
    desc: "End-to-end AI system predicting customer churn via explainable 97.9% Decision Trees and orchestrating targeted retention packages with LangGraph LLM agents.",
    tags: ["Python", "LangGraph", "Scikit-Learn", "ChromaDB"],
    links: [
      { label: "Live Demo ↗", href: "https://netflix-churn-ai.streamlit.app/", primary: true },
      { label: "GitHub ↗", href: "https://github.com/vs-code06/Netflix-Churn-Strategist", primary: false }
    ],
    isUpcoming: false
  },
  {
    id: "civicflow",
    category: "Full-Stack Web",
    badgeClass: "p-badge-blue",
    title: "CivicFlow — Smart Civic Management",
    desc: "Enterprise civic grievance platform pairing scalable Express REST APIs with an asynchronous FastAPI microservice for automated NLP triage, department routing, and live tracking.",
    tags: ["React", "TypeScript", "Node.js", "FastAPI"],
    links: [
      { label: "Live Demo ↗", href: "https://civicflow-mu.vercel.app/", primary: true },
      { label: "GitHub ↗", href: "https://github.com/vs-code06/CivicFlow", primary: false }
    ],
    isUpcoming: false
  },
  {
    id: "orchestrator",
    category: "In Active R&D",
    badgeClass: "p-badge-amber",
    title: "Autonomous Agent Workflow Orchestrator",
    desc: "Distributed multi-agent orchestration framework featuring persistent state graphs, dynamic tool calling DAG compilation, and deterministic safety evaluation.",
    tags: ["Python", "LangGraph", "FastAPI", "Qdrant"],
    statusBadge: "Coming Soon",
    pulseClass: "pulse-amber",
    isUpcoming: true
  },
  {
    id: "telemetry",
    category: "In Prototyping",
    badgeClass: "p-badge-purple",
    title: "Real-Time Event Stream & Anomaly Engine",
    desc: "High-throughput event aggregation and anomaly detection pipeline designed for streaming telemetry, sub-second query latency, and automated alerting.",
    tags: ["TypeScript", "Node.js", "Kafka", "ClickHouse"],
    statusBadge: "Coming Soon",
    pulseClass: "pulse-purple",
    isUpcoming: true
  }
];

export const PROJECT_DETAILS = {
  netflix: {
    title: "Netflix Customer Churn Strategist",
    tagline: "Autonomous multi-agent retention engine pairing explainable 97.9% decision tree telemetry with LangGraph LLM consensus playbooks.",
    badges: [
      { text: "Multi-Agent AI", class: "p-badge-purple" },
      { text: "Explainable ML (97.9%)", class: "p-badge-green" },
      { text: "Contextual RAG", class: "p-badge-blue" }
    ],
    links: [
      { label: "Live Demo ↗", href: "https://netflix-churn-ai.streamlit.app/", primary: true },
      { label: "GitHub ↗", href: "https://github.com/vs-code06/Netflix-Churn-Strategist", primary: false }
    ],
    flow: [
      { num: "01", name: "Account Telemetry", desc: "Usage & billing data ingestion", active: false },
      { num: "02", name: "Decision Tree", desc: "97.9% test accuracy classifier", active: true },
      { num: "03", name: "ChromaDB RAG", desc: "Historical playbook vector retrieval", active: false },
      { num: "04", name: "LangGraph Multi-Agent", desc: "Strategist + Evaluator consensus", active: true },
      { num: "05", name: "Streamlit UI", desc: "Auditable strategy & risk sliders", active: false }
    ],
    highlights: [
      {
        title: "Explainable Machine Learning",
        desc: "Trained a Scikit-Learn Decision Tree classifier achieving 97.9% test accuracy with full boolean decision-path rule extraction, ensuring enterprise stakeholders can audit why an account was flagged rather than relying on an opaque black box."
      },
      {
        title: "Contextual Vector Retrieval (RAG)",
        desc: "Integrated a ChromaDB vector store to semantically retrieve past high-conversion retention playbooks, matching customer viewing genres and tier telemetry."
      },
      {
        title: "Multi-Agent State Graph (LangGraph)",
        desc: "Designed cyclical state machine workflows where a Strategist Agent formulates tailored discount and content bundles, while an autonomous Evaluator Agent stress-tests propositions against profit margins and retention policies."
      },
      {
        title: "Real-Time Auditing Dashboard",
        desc: "Built an interactive Streamlit console featuring real-time churn probability sliders, visual tree-path rendering, and dynamic LLM strategy generation."
      }
    ],
    tech: ["Python", "Scikit-Learn", "LangGraph", "LangChain", "ChromaDB", "LLaMA", "Streamlit"]
  },
  civicflow: {
    title: "CivicFlow — Smart Civic Management Platform",
    tagline: "Enterprise-grade civic grievance platform pairing scalable REST APIs with an AI microservice for automated triage, department routing, and live tracking.",
    badges: [
      { text: "Full-Stack Web", class: "p-badge-blue" },
      { text: "FastAPI Microservice", class: "p-badge-purple" },
      { text: "LangChain NLP", class: "p-badge-green" }
    ],
    links: [
      { label: "Live Demo ↗", href: "https://civicflow-mu.vercel.app/", primary: true },
      { label: "GitHub ↗", href: "https://github.com/vs-code06/CivicFlow", primary: false }
    ],
    flow: [
      { num: "01", name: "Citizen Client", desc: "React 18 + TypeScript SPA", active: false },
      { num: "02", name: "API Gateway", desc: "Express.js + JWT Auth", active: false },
      { num: "03", name: "FastAPI Microservice", desc: "LangChain NLP categorization", active: true },
      { num: "04", name: "MongoDB Atlas", desc: "Document schemas & audit logs", active: false },
      { num: "05", name: "Officer Portal", desc: "SLA tracking & dispatch", active: false }
    ],
    highlights: [
      {
        title: "Decoupled AI Microservice",
        desc: "Architected a dedicated FastAPI service utilizing LangChain to parse natural-language citizen complaints, categorize urgency levels, and automatically summarize actionable briefs for municipal engineers."
      },
      {
        title: "Scalable RESTful Backend",
        desc: "Implemented robust Express.js API services with structured MongoDB document schemas for complaint lifecycles, officer assignments, and immutable audit logs."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Developed specialized portal interfaces for Citizens (reporting & GPS-enabled status tracking), Municipal Officers (action lifecycle & SLA monitoring), and Administrators (city-wide issue analytics)."
      },
      {
        title: "Performance-Tuned React Client",
        desc: "Structured modular TypeScript component trees ensuring sub-second interactions and high responsiveness even on throttled mobile network connections."
      }
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB Atlas", "FastAPI", "LangChain"]
  },
  orchestrator: {
    title: "Autonomous Agent Workflow Orchestrator",
    tagline: "Distributed multi-agent orchestration framework featuring persistent state graphs, dynamic tool calling DAG compilation, and deterministic safety evaluation.",
    badges: [
      { text: "In Active R&D", class: "p-badge-amber" },
      { text: "Autonomous Systems", class: "p-badge-outline" },
      { text: "Target: Q4 2026", class: "p-badge-outline" }
    ],
    links: [
      { label: "Slot Reserved", href: "#", primary: false, disabled: true }
    ],
    flow: [
      { num: "01", name: "Task Planner", desc: "Goal decomposition DAG", active: false },
      { num: "02", name: "Tool Dispatcher", desc: "Parallel async worker pool", active: false },
      { num: "03", name: "Vector Memory", desc: "Qdrant episodic recall", active: true },
      { num: "04", name: "Evaluator Node", desc: "Safety & schema verification", active: false },
      { num: "05", name: "Output Stream", desc: "Token-by-token WebSocket push", active: false }
    ],
    highlights: [
      {
        title: "Dynamic Tool Routing",
        desc: "Intent classification engine that compiles natural-language goals into executable, dependency-aware tool execution graphs with automated error reflection."
      },
      {
        title: "Episodic State Checkpointing",
        desc: "Hybrid vector index combined with Redis-backed state graphs for robust checkpoint recovery and multi-turn conversational memory persistence."
      },
      {
        title: "Self-Reflective Validation",
        desc: "Automated verification nodes that test output against deterministic rules and schema constraints before final delivery."
      }
    ],
    tech: ["Python", "LangGraph", "FastAPI", "Qdrant", "Redis", "Docker"]
  },
  telemetry: {
    title: "Real-Time Event Stream & Anomaly Engine",
    tagline: "High-throughput event aggregation and anomaly detection pipeline designed for streaming telemetry, sub-second query latency, and automated alerting.",
    badges: [
      { text: "In Prototyping", class: "p-badge-purple" },
      { text: "Distributed Systems", class: "p-badge-outline" },
      { text: "Target: Q1 2027", class: "p-badge-outline" }
    ],
    links: [
      { label: "Slot Reserved", href: "#", primary: false, disabled: true }
    ],
    flow: [
      { num: "01", name: "Ingestion Gate", desc: "50k req/sec JSON validator", active: false },
      { num: "02", name: "Kafka Stream", desc: "Partitioned event log topics", active: false },
      { num: "03", name: "ClickHouse Index", desc: "Sub-millisecond columnar aggregation", active: true },
      { num: "04", name: "Anomaly Model", desc: "Online statistical drift classifier", active: false },
      { num: "05", name: "Alert UI", desc: "WebSocket incident dispatch", active: false }
    ],
    highlights: [
      {
        title: "High-Concurrency Streaming Ingestion",
        desc: "Asynchronous ingestion pipeline capable of parsing, validating, and routing high-frequency streaming event payloads across partitioned Kafka clusters."
      },
      {
        title: "Hybrid Log Indexing & Analytics",
        desc: "Dense vector embeddings paired with inverted indices for instant semantic search and root-cause clustering across high-volume error traces."
      },
      {
        title: "Automated Anomaly Alerting",
        desc: "Online statistical classification identifying metric drift and zero-day regressions before downstream service degradation occurs."
      }
    ],
    tech: ["TypeScript", "Node.js", "Kafka", "ClickHouse", "WebSockets", "Docker"]
  }
};
