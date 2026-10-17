import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="page-footer">
      <div className="footer-content">
        <span className="footer-txt">
          &copy; 2026 Vipul Sharma. Built with precision, performance &amp; modern React.
        </span>
        <a href="#top" className="scroll-top-link" onClick={scrollToTop}>
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
