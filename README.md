# Vipul Sharma — AI Engineer & Full-Stack Developer Portfolio (React + Vite)

A modern, high-signal, engineering-first personal portfolio built with **React 19**, **Vite**, and **Vanilla CSS tokens**, designed specifically for technical recruiters, engineering managers, and interviewers.

---

## ⚡ Highlights & Key Features

- **🎯 High-Signal, Non-Flashy Design:** Inspired by top engineering organizations (Linear, Vercel, Raycast). Clean typography, subtle dark/light atmosphere, and zero bloated libraries.
- **🚀 Compact Project Cards & Deep-Dive Modals:**
  - 4 scannable cards (~210px height) displaying category badges, quick links, 2-line summaries, and tech pills.
  - Interactive **"See in Detail →"** button opening comprehensive architecture pipeline diagrams (1 to 5 stages), system engineering highlights, and complete tech stacks.
- **💼 Verified Work Experience:** Full-stack engineering at **Tradiobiz** (500+ users, 30% page load optimization, asynchronous API state management).
- **🏆 Rigorous DSA Proof:** LeetCode 350+ solved, CodeChef 1442 (★), Codeforces 1050, Hacktoberfest 2025 contributor.
- **🎓 Academic Standing:** 9.45 / 10.0 GPA in B.Tech Artificial Intelligence at Newton School of Technology (NST, Rishihood University).
- **⌘ Command Palette (Cmd+K / Ctrl+K):** Instant keyboard navigation across projects, skills, resume, and contact actions with live search filtering.
- **📄 Built-in Printable Resume Modal:** One-click preview of ATS-compliant resume with `@media print` styling for instant PDF generation.
- **🌓 Dynamic Light / Dark Mode:** Seamless switching with localStorage persistence and CSS custom properties.

---

## 🚀 Running Locally

### Development Server
```bash
npm install
npm run dev
```
Then visit `http://localhost:5173/` in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
vipul-portfolio/
├── index.html              # HTML5 template & Google Fonts preconnect
├── package.json            # React 19, Vite, and scripts
├── vite.config.js          # Vite configuration with @vitejs/plugin-react
├── src/
│   ├── main.jsx            # React root mount point
│   ├── App.jsx             # Top-level state (theme, modals, shortcuts, toasts)
│   ├── styles.css          # Design system tokens, glassmorphism, responsive grid
│   ├── data/
│   │   ├── projects.js     # Compact cards & detailed architecture pipelines
│   │   ├── experience.js   # Tradiobiz role, metrics & engineering bullets
│   │   ├── skills.js       # AI/ML, Full-Stack, and Foundation categories
│   │   ├── accolades.js    # Competitive programming ratings & education
│   │   └── resume.js       # ATS-compliant CV data
│   └── components/
│       ├── Navbar.jsx          # Header, quick links, theme toggle & search
│       ├── Hero.jsx            # Bio, availability status & CTA buttons
│       ├── MetricsBar.jsx      # Animated counter hooks (LC 350+, GPA 9.45)
│       ├── Projects.jsx        # 2x2 compact project cards
│       ├── ProjectModal.jsx    # Deep-dive architecture modal
│       ├── Experience.jsx      # Career timeline & metrics strip
│       ├── Skills.jsx          # Technical skills matrix
│       ├── Accolades.jsx       # Education & competitive programming
│       ├── Contact.jsx         # Direct email copy, links & mailto CTA
│       ├── Footer.jsx          # Footer & smooth scroll-to-top
│       ├── ResumeModal.jsx     # Printable CV preview
│       ├── CommandPalette.jsx  # Cmd+K searchable launcher
│       ├── Toast.jsx           # Toast notification system
│       └── ScrollProgress.jsx  # Top reading progress indicator
```

© 2026 Vipul Sharma.
