import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onCopyEmail,
  onToggleTheme
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleDismiss = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);

      const handleKey = (e) => {
        if (e.key === 'Escape') {
          handleDismiss();
        }
      };

      window.addEventListener('keydown', handleKey);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  const navItems = [
    { id: 'projects', icon: '🚀', title: 'Flagship Projects (Netflix Churn & CivicFlow)', kbd: 'P', target: '#projects' },
    { id: 'experience', icon: '💼', title: 'Work Experience (Tradiobiz)', kbd: 'E', target: '#experience' },
    { id: 'skills', icon: '🧠', title: 'Technical Skills Matrix', kbd: 'S', target: '#skills' },
    { id: 'accolades', icon: '🏆', title: 'Accolades & Ratings (CF 1050, CC 1442, LC 350+)', kbd: 'A', target: '#accolades' }
  ];

  const actionItems = [
    { id: 'resume', icon: '📄', title: 'Open Curriculum Vitae (Resume)', kbd: 'R', action: () => { handleDismiss(); onOpenResume(); } },
    { id: 'copy-email', icon: '✉️', title: 'Copy Email (vipultheplayer@gmail.com)', kbd: 'C', action: () => { handleDismiss(); onCopyEmail('vipultheplayer@gmail.com'); } },
    { id: 'toggle-theme', icon: '🌓', title: 'Toggle Dark / Light Theme', kbd: 'T', action: () => { handleDismiss(); onToggleTheme(); } }
  ];

  const q = query.toLowerCase().trim();
  const filteredNav = navItems.filter((i) => i.title.toLowerCase().includes(q));
  const filteredActions = actionItems.filter((i) => i.title.toLowerCase().includes(q));

  const handleNav = (target) => {
    handleDismiss();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="cmd-palette-overlay active"
      id="cmd-palette"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmd-search-input"
      onClick={(e) => {
        if (e.target.id === 'cmd-palette') {
          handleDismiss();
        }
      }}
    >
      <div className="cmd-palette-card">
        <div className="cmd-search-wrap">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            ref={inputRef}
            id="cmd-search-input"
            className="cmd-search-input"
            placeholder="Search portfolio or jump to section..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="kbd-badge" onClick={handleDismiss} style={{ cursor: 'pointer' }}>
            ESC
          </kbd>
        </div>

        <div className="cmd-results" id="cmd-results">
          {filteredNav.length > 0 && (
            <>
              <div className="cmd-group-label">Navigation</div>
              {filteredNav.map((item) => (
                <div
                  key={item.id}
                  className="cmd-item"
                  onClick={() => handleNav(item.target)}
                >
                  <span className="cmd-item-icon">{item.icon}</span>
                  <span className="cmd-item-title">{item.title}</span>
                  <kbd className="cmd-item-kbd">{item.kbd}</kbd>
                </div>
              ))}
            </>
          )}

          {filteredActions.length > 0 && (
            <>
              <div className="cmd-group-label">Actions</div>
              {filteredActions.map((item) => (
                <div
                  key={item.id}
                  className="cmd-item"
                  onClick={item.action}
                >
                  <span className="cmd-item-icon">{item.icon}</span>
                  <span className="cmd-item-title">{item.title}</span>
                  <kbd className="cmd-item-kbd">{item.kbd}</kbd>
                </div>
              ))}
            </>
          )}

          {filteredNav.length === 0 && filteredActions.length === 0 && (
            <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No commands or sections matching "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
