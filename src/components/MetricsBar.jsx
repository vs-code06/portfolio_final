import React, { useEffect, useState, useRef } from 'react';
import { TOP_METRICS } from '../data/accolades';

function Counter({ target, isFloat, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1100;
          const start = performance.now();

          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = progress === 1 ? target : target * ease;
            setVal(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const displayVal = isFloat ? val.toFixed(2) : Math.floor(val);

  return (
    <span ref={ref} className="metric-value">
      {displayVal}
      {suffix}
    </span>
  );
}

export default function MetricsBar() {
  return (
    <div className="metrics-grid reveal-on-scroll">
      {TOP_METRICS.map((m, idx) => (
        <div key={idx} className="metric-card">
          <span className="metric-label">{m.label}</span>
          <Counter target={m.target} isFloat={m.isFloat} suffix={m.suffix} />
          <span className="metric-sub">{m.sub}</span>
        </div>
      ))}
    </div>
  );
}
