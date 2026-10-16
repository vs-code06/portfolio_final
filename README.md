# Vipul Sharma — AI Engineer & Full-Stack Developer Portfolio

A modern, high-signal, engineering-first personal portfolio designed specifically for technical recruiters, engineering managers, and interviewers.

---

## ⚡ Highlights & Key Features

- **🎯 High-Signal, Non-Flashy Design:** Inspired by top engineering organizations (Linear, Vercel, Raycast). Clean typography, subtle dark/light atmosphere, and zero bloated 3D libraries.
- **🤖 Interactive AI Agent Terminal (`agent://vipul.runtime`):** Interviewers can click pre-crafted query chips (e.g., *"Why hire Vipul?"*, *"Netflix Churn Architecture"*, *"Tradiobiz Production Work"*) or type custom technical questions to inspect Vipul's systems thinking in real-time.
- **📐 Interactive Pipeline Visualizers:** Step-through architectures for:
  - **Netflix Customer Churn Strategist:** Scikit-Learn Decision Tree (97.9% accuracy with decision-path explainability) + ChromaDB RAG + LangGraph Multi-Agent coordination + Streamlit dashboard.
  - **CivicFlow Smart Civic Management:** React/TypeScript frontend + Node/Express gateway + FastAPI/LangChain AI microservice + MongoDB schemas.
- **💼 Verified Work Experience:** Full-stack engineering at **Tradiobiz** (500+ users, 30% page load optimization, asynchronous API state management).
- **🏆 Rigorous DSA Proof:** LeetCode 350+ solved, CodeChef 1442, Codeforces 1047, Hacktoberfest 2025 contributor.
- **🎓 Academic Standing:** 9.45 / 10.0 GPA in B.Tech Artificial Intelligence at Newton School of Technology (NST, Rishihood University).
- **⌘ Command Palette (Cmd+K / Ctrl+K):** Instant keyboard navigation across projects, skills, resume, and contact actions.
- **📄 Built-in Printable Resume Modal:** One-click preview of ATS-compliant resume with `@media print` styling for PDF generation.
- **🌓 Dynamic Light / Dark Mode:** Seamless switching with localStorage persistence.
- **⚡ Vanilla Precision:** Built purely with semantic HTML5, modern CSS3, and ES6+ JavaScript. Loads in milliseconds with zero dependencies.

---

## 🚀 Running Locally

You can open the portfolio directly in any browser:

### Option A: Double-Click
Simply double-click `index.html` in your file explorer to open it in your default browser.

### Option B: Local HTTP Server (Recommended)
Using Python (pre-installed on macOS/Linux):
```bash
cd ~/Desktop/vipul-portfolio
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

Or using Node:
```bash
npx serve .
```

---

## 🌐 Deploying in 60 Seconds

### Option 1: Vercel (1-Click)
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `vipul-portfolio` directory and follow the prompts.
3. Your portfolio is instantly live on a custom `.vercel.app` domain with free SSL.

### Option 2: GitHub Pages
1. Create a repository on GitHub (e.g. `vipul-portfolio`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/vs-code06/vipul-portfolio.git
   git push -u origin main
   ```
3. In repository **Settings → Pages**, set the source branch to `main` and save.

---

## 📁 File Structure

```
vipul-portfolio/
├── index.html        # Semantic HTML5 markup, SEO meta tags, resume modal, command palette
├── styles.css        # Pure CSS design system (tokens, layout, responsive, dark/light themes)
├── app.js            # Interactive AI terminal, Cmd+K palette, tab switching, clipboard toasts
└── README.md         # Documentation & deployment guide
```

© 2026 Vipul Sharma.
