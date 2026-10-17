import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

import ScrollProgress from './components/ScrollProgress';
import Toast from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Accolades from './components/Accolades';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vs_theme') || 'dark';
  });
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Theme synchronization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vs_theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Toast notifier
  const showToast = useCallback((message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  // Copy email
  const copyEmail = useCallback((email = 'vipultheplayer@gmail.com') => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast(`Copied ${email} to clipboard!`))
        .catch(() => showToast(`Email: ${email}`));
    } else {
      showToast(`Email: ${email}`);
    }
  }, [showToast]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Toast toasts={toasts} />

      <div className="app-container" id="top">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCmd={() => setIsCmdOpen(true)}
          onCopyEmail={copyEmail}
        />

        <main>
          <Hero />
          <Projects onOpenDetail={(id) => setSelectedProjectId(id)} />
          <Experience />
          <Skills />
          <Accolades />
          <Contact
            onOpenResume={() => setIsResumeOpen(true)}
            onCopyEmail={copyEmail}
          />
        </main>

        <Footer />
      </div>

      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onCopyEmail={copyEmail}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
