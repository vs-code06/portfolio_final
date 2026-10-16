/**
 * VIPUL SHARMA — PORTFOLIO CLIENT LOGIC
 * High-performance, zero-dependency, vanilla ES6+ script.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTerminal();
  initProjectTabs();
  initCommandPalette();
  initResumeModal();
  initCopyButtons();
  initScrollSpy();
  initAnimations();
  initPremiumEffects();
  initProjectModal();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const toggleBtns = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
  const savedTheme = localStorage.getItem('vs_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const handleToggle = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    const applyThemeChange = () => {
      document.documentElement.classList.add('theme-transitioning');
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('vs_theme', next);
      showToast(`Switched to ${next} mode`);

      window.clearTimeout(window.__themeTimer);
      window.__themeTimer = setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 450);
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyThemeChange();
      });
    } else {
      applyThemeChange();
    }
  };

  toggleBtns.forEach(btn => btn.addEventListener('click', handleToggle));
}

/* ==========================================================================
   2. Interactive AI Agent Runtime / Terminal (vipul.runtime)
   ========================================================================== */
function initTerminal() {
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const chipButtons = document.querySelectorAll('.chip-btn');
  if (!terminalForm || !terminalOutput) return;

  // Pre-compiled knowledge base directly from Vipul's resume & engineering specs
  const knowledgeBase = {
    "why should we hire vipul?": `
<strong>Recommendation Matrix for Hiring Teams:</strong>
1. <strong>Dual Competency:</strong> Solid AI foundations (LangChain, LangGraph, RAG, ChromaDB, Transformers) married with robust full-stack engineering (React, TypeScript, Node.js, FastAPI).
2. <strong>Academic & Algorithmic Rigor:</strong> 9.45 / 10 GPA in B.Tech Artificial Intelligence at Newton School of Technology; 350+ LeetCode problems solved; active competitive programmer (CodeChef (Max 1442), Codeforces (Max 1050)).
3. <strong>Demonstrated Production Impact:</strong> At Tradiobiz, maintained systems serving 500+ active users and reduced page load times by 30% through rendering optimization.
4. <strong>Systems Mindset:</strong> Focuses on explainable ML (e.g. 97.9% decision tree with rule tracing) rather than opaque black boxes.
`,
    "explain the netflix churn rag + langgraph pipeline": `
<strong>Netflix Customer Churn Strategist Architecture:</strong>
• <strong>Phase 1: Predictive Modeling:</strong> Trained a Scikit-Learn Decision Tree classifier achieving 97.9% test accuracy. Extracted explicit decision paths so churn risks can be audited by humans.
• <strong>Phase 2: RAG Context Retrieval:</strong> ChromaDB vector store retrieves targeted customer history, plan tiers, and past successful retention offers.
• <strong>Phase 3: Multi-Agent Orchestration:</strong> LangGraph state graph coordinates a 'Strategist Agent' (formulating custom discount/content bundles) and an 'Evaluator Agent' (checking budget and policy compliance).
• <strong>Phase 4: Real-time UI:</strong> Interactive Streamlit dashboard enabling business teams to run what-if simulations and generate retention playbooks in &lt;2.5 seconds.
`,
    "tell me about the tradiobiz production work": `
<strong>Tradiobiz Software Engineering Experience (Jun–Jul 2025, Remote):</strong>
• <strong>Scale:</strong> Developed & maintained core web workflows for a B2B platform with 500+ active enterprise users.
• <strong>API & State Mastery:</strong> Integrated RESTful endpoints handling asynchronous states, network retries, optimistic UI updates, and error boundaries.
• <strong>Performance Win:</strong> Profiled rendering cycles and bundled assets, reducing initial page load latency by 30%.
• <strong>Component Systems:</strong> Built modular, reusable React components that accelerated subsequent feature development across the team.
`,
    "what is your dsa & problem-solving background?": `
<strong>Algorithmic Problem Solving:</strong>
• <strong>LeetCode:</strong> 350+ problems solved across Dynamic Programming, Graph Algorithms (BFS/DFS, Dijkstra), Tree Traversals, Two Pointers, and Binary Search.
• <strong>CodeChef:</strong> All-Time Max Rating: 1442 (Division 3 rated competitor).
• <strong>Codeforces:</strong> All-Time Max Rating: 1050 (Pupil contender).
• <strong>Open Source:</strong> Hacktoberfest 2025 Contributor / Supercontributor.
• <strong>Core strength:</strong> Writing optimal time/space complexity solutions (O(N), O(N log N)) with edge-case resilience under timed interview pressure.
`,
    "what are your core technical principles?": `
<strong>Vipul's Engineering Principles:</strong>
1. <strong>Explainability over Hype:</strong> AI systems must be auditable. If a business cannot understand why an ML model flagged a customer, it cannot be safely automated.
2. <strong>Decoupled Microservice Boundaries:</strong> Keep AI inference (FastAPI/Python) isolated from primary web gateways (Node/Express) to prevent event-loop starvation.
3. <strong>State-Driven Multi-Agent Workflows:</strong> Single prompt LLMs hallucinate; cyclical state machines with LangGraph enforce guardrails and cross-validation.
4. <strong>Zero-Bloat UI:</strong> Fast, accessible web applications that load immediately without unnecessary multi-megabyte bundles.
`
  };

  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      if (query) {
        handleTerminalQuery(query);
      }
    });
  });

  if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = terminalInput.value.trim();
      if (query) {
        handleTerminalQuery(query);
        terminalInput.value = '';
      }
    });
  }

  function handleTerminalQuery(query) {
    appendTerminalLine(`user > ${query}`, 'user-line');

    const clean = query.toLowerCase().trim();
    let response = null;

    // Direct match
    if (knowledgeBase[clean]) {
      response = knowledgeBase[clean];
    } else {
      // Fuzzy match
      if (clean.includes('hire') || clean.includes('why') || clean.includes('role')) {
        response = knowledgeBase["why should we hire vipul?"];
      } else if (clean.includes('netflix') || clean.includes('churn') || clean.includes('langgraph') || clean.includes('rag')) {
        response = knowledgeBase["explain the netflix churn rag + langgraph pipeline"];
      } else if (clean.includes('tradiobiz') || clean.includes('experience') || clean.includes('work') || clean.includes('intern')) {
        response = knowledgeBase["tell me about the tradiobiz production work"];
      } else if (clean.includes('dsa') || clean.includes('leetcode') || clean.includes('codechef') || clean.includes('codeforces')) {
        response = knowledgeBase["what is your dsa & problem-solving background?"];
      } else if (clean.includes('principle') || clean.includes('philosophy') || clean.includes('architecture')) {
        response = knowledgeBase["what are your core technical principles?"];
      } else if (clean.includes('gpa') || clean.includes('education') || clean.includes('college')) {
        response = `<strong>Education Profile:</strong> B.Tech in Artificial Intelligence @ Newton School of Technology (NST, Rishihood University), 2024–2028. Academic standing: <strong>9.45 / 10.0 GPA</strong>.`;
      } else if (clean.includes('contact') || clean.includes('email') || clean.includes('phone')) {
        response = `<strong>Direct Contact:</strong> Email: <a href="mailto:vipultheplayer@gmail.com">vipultheplayer@gmail.com</a> | Location: Rishihood University / India.`;
      } else if (clean.includes('civicflow') || clean.includes('civic')) {
        response = `<strong>CivicFlow Platform:</strong> Full-stack smart civic platform with React, TypeScript, Node.js, Express, MongoDB, FastAPI, and LangChain for automated grievance classification and routing.`;
      } else {
        response = `
<strong>Runtime Synthesis for "${escapeHtml(query)}":</strong><br/>
Vipul Sharma is an AI Engineer and B.Tech AI student (9.45 GPA) with production experience at Tradiobiz, 350+ LeetCode problems, and deep expertise in LangChain, LangGraph, RAG pipelines, and full-stack systems. Check the <a href="#projects" style="color:var(--accent-cyan);text-decoration:underline;">Projects</a> or <a href="#experience" style="color:var(--accent-cyan);text-decoration:underline;">Experience</a> sections for full specifications.
`;
      }
    }

    // Streaming typing appearance
    const agentContainer = document.createElement('div');
    agentContainer.className = 'terminal-line agent-line';
    agentContainer.innerHTML = `<span class="prompt-symbol">agent:vipul &gt;</span> <span class="stream-text">Thinking...</span>`;
    terminalOutput.appendChild(agentContainer);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;

    setTimeout(() => {
      agentContainer.innerHTML = `<span class="prompt-symbol">agent:vipul &gt;</span> ${response}`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, 280);
  }

  function appendTerminalLine(text, className) {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ==========================================================================
   3. Project Specification Tabs
   ========================================================================== */
function initProjectTabs() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const tabs = card.querySelectorAll('.spec-tab');
    const contents = card.querySelectorAll('.spec-tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetContent = card.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

/* ==========================================================================
   4. Command Palette (Cmd+K / Ctrl+K)
   ========================================================================== */
function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const triggerBtns = document.querySelectorAll('#cmd-k-btn, .mobile-cmd-k');
  const searchInput = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-results');

  if (!palette) return;

  function openPalette() {
    palette.classList.add('active');
    palette.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      searchInput.value = '';
      filterItems('');
      setTimeout(() => searchInput.focus(), 50);
    }
  }

  function closePalette() {
    palette.classList.remove('active');
    palette.setAttribute('aria-hidden', 'true');
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openPalette));

  palette.addEventListener('click', (e) => {
    if (e.target === palette) {
      closePalette();
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (palette.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && palette.classList.contains('active')) {
      closePalette();
    }
  });

  // Action handling
  const items = palette.querySelectorAll('.cmd-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      handlePaletteAction(item);
      closePalette();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterItems(e.target.value.toLowerCase().trim());
    });
  }

  function filterItems(query) {
    items.forEach(item => {
      const title = item.querySelector('.cmd-item-title').textContent.toLowerCase();
      if (!query || title.includes(query)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function handlePaletteAction(item) {
    const action = item.getAttribute('data-action');
    const target = item.getAttribute('data-target');

    if (action === 'nav' && target) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'resume') {
      openResume();
    } else if (action === 'copy-email') {
      copyToClipboard('vipultheplayer@gmail.com', 'Email copied to clipboard!');
    } else if (action === 'toggle-theme') {
      const toggle = document.getElementById('theme-toggle');
      if (toggle) toggle.click();
    }
  }
}

/* ==========================================================================
   5. Resume Preview Modal
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('#open-resume-btn, #mobile-resume-btn, #contact-open-resume, #hero-resume-trigger');
  const closeBtn = document.getElementById('close-resume-btn');

  if (!modal) return;

  function openResume() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.openResume = openResume;

  openBtns.forEach(btn => btn.addEventListener('click', openResume));
  if (closeBtn) closeBtn.addEventListener('click', closeResume);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeResume();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeResume();
    }
  });
}

/* ==========================================================================
   6. Copy to Clipboard & Toast Notifications
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-email') || 'vipultheplayer@gmail.com';
      copyToClipboard(val, `Copied: ${val}`);
    });
  });
}

function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Copied to clipboard!');
  }).catch(() => {
    // Fallback for older browsers
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMessage || 'Copied to clipboard!');
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 200);
  }, 2600);
}

/* ==========================================================================
   7. Scroll Spy (Active Nav Links)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav-link, .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}


/* ==========================================================================
   Micro-Animations: Scroll Reveal, Sticky Header Elevation, & Count-Up
   ========================================================================== */
function initAnimations() {
  initScrollReveal();
  initStickyHeader();
  initMetricCountUp();
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

function initStickyHeader() {
  const bar = document.querySelector('.top-bar');
  if (!bar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 25) {
          bar.classList.add('scrolled');
        } else {
          bar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initMetricCountUp() {
  const metrics = document.querySelectorAll('.metric-value[data-target]');
  if (!metrics.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  metrics.forEach(el => observer.observe(el));
}

function animateMetric(el) {
  const rawTarget = el.getAttribute('data-target');
  if (!rawTarget) return;

  const isFloat = rawTarget.includes('.');
  const target = parseFloat(rawTarget);
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const duration = 1100;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic: 1 - (1 - t)^3
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = progress === 1 ? target : (target * ease);
    el.textContent = prefix + (isFloat ? current.toFixed(2) : Math.floor(current)) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

/* ==========================================================================
   Premium Interactions: Scroll Progress, Cursor Card Glow, Smooth Nav
   ========================================================================== */
function initPremiumEffects() {
  initScrollProgress();
  initCursorGlow();
  initSmoothNavClicks();
}

/* Scroll Progress Bar */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const progress = Math.min(scrollTop / docHeight, 1);
    bar.style.transform = 'scaleX(' + progress + ')';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* Cursor-Following Card Glow */
function initCursorGlow() {
  const cards = document.querySelectorAll(
    '.project-card, .project-dossier, .experience-card, .credential-card, .contact-box'
  );
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
      const before = card.querySelector(':scope > *');
      if (before) {
        card.style.cssText += '; --glow-x:' + x + 'px; --glow-y:' + y + 'px;';
      }
    });
  });
}

/* Smooth Nav Click with offset */
function initSmoothNavClicks() {
  const links = document.querySelectorAll('.top-nav-link, .nav-chip');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 90;
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
}


/* ==========================================================================
   Project Detail Modal Logic
   ========================================================================== */
const PROJECT_DETAILS = {
  netflix: {
    title: "Netflix Customer Churn Strategist",
    tagline: "End-to-end AI system predicting customer churn via white-box machine learning and synthesizing tailored retention offers with collaborative LLM agents.",
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
        desc: "Trained a Scikit-Learn Decision Tree classifier achieving <strong>97.9% test accuracy</strong> with full boolean decision-path rule extraction, ensuring enterprise stakeholders can audit why an account was flagged rather than relying on an opaque black box."
      },
      {
        title: "Contextual Vector Retrieval (RAG)",
        desc: "Integrated a ChromaDB vector store to semantically retrieve past high-conversion retention playbooks, matching customer viewing genres and tier telemetry."
      },
      {
        title: "Multi-Agent State Graph (LangGraph)",
        desc: "Designed cyclical state machine workflows where a <em>Strategist Agent</em> formulates tailored discount and content bundles, while an autonomous <em>Evaluator Agent</em> stress-tests propositions against profit margins and retention policies."
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

function openProjectModal(projectId) {
  const data = PROJECT_DETAILS[projectId];
  if (!data) return;

  const modal = document.getElementById('project-detail-modal');
  const titleEl = document.getElementById('project-modal-title');
  const taglineEl = document.getElementById('modal-project-tagline');
  const badgesEl = document.getElementById('modal-project-badges');
  const linksEl = document.getElementById('modal-project-links');
  const bodyEl = document.getElementById('project-modal-body');

  titleEl.textContent = data.title;
  taglineEl.textContent = data.tagline;

  // Badges
  badgesEl.innerHTML = data.badges.map(b => `<span class="p-badge ${b.class}">${b.text}</span>`).join('');

  // Links
  linksEl.innerHTML = data.links.map(l => {
    if (l.disabled) {
      return `<span class="p-badge-status">${l.label}</span>`;
    }
    const cls = l.primary ? 'p-btn p-btn-primary' : 'p-btn';
    return `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="${cls}">${l.label}</a>`;
  }).join('');

  // Body content: Flow + Highlights + Tech
  let flowHtml = `
    <div class="modal-section">
      <h5 class="modal-section-label">Architecture Pipeline Flow</h5>
      <div class="modal-flow-wrap">
        ${data.flow.map((f, i) => `
          <div class="modal-flow-step ${f.active ? 'active-step' : ''}">
            <span class="flow-step-num">${f.num}</span>
            <span class="flow-step-name">${f.name}</span>
            <span class="flow-step-desc">${f.desc}</span>
          </div>
          ${i < data.flow.length - 1 ? '<span class="modal-flow-arrow">→</span>' : ''}
        `).join('')}
      </div>
    </div>
  `;

  let highlightsHtml = `
    <div class="modal-section">
      <h5 class="modal-section-label">System Highlights & Implementation Details</h5>
      <ul class="modal-highlights-list">
        ${data.highlights.map(h => `
          <li>
            <strong>${h.title}:</strong> ${h.desc}
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  let techHtml = `
    <div class="modal-section">
      <h5 class="modal-section-label">Full Technology Stack</h5>
      <div class="project-tags">
        ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  bodyEl.innerHTML = flowHtml + highlightsHtml + techHtml;

  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function initProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  const closeBtn = document.getElementById('close-project-modal-btn');
  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Expose globally for inline onclick
window.openProjectModal = openProjectModal;
