import React, { useEffect, useState } from "react";

/**
 * LumaBuild — Loading Screen
 * Drop this into your Vite + React + TS + Tailwind project as-is.
 * Usage:
 *   const [loading, setLoading] = useState(true);
 *   ...
 *   {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
 *
 * No external deps. Animation is pure CSS (keyframes injected via <style>),
 * so it works even before Tailwind's config picks up custom keyframes.
 */

interface LoadingScreenProps {
  /** Called once the intro animation + progress finishes. Optional. */
  onFinish?: () => void;
  /** Total duration in ms before onFinish fires. Default 2200ms. */
  duration?: number;
  /** Show the "LumaBuild" wordmark under the logo. Default true. */
  showWordmark?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onFinish,
  duration = 2200,
  showWordmark = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(() => onFinish?.(), 500); // matches exit-fade duration below
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, onFinish]);

  return (
    <div
      className={`lb-loader ${exiting ? "lb-loader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading LumaBuild"
    >
      <style>{`
        .lb-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          background: radial-gradient(circle at 50% 40%, #16311a 0%, #0b1a0d 65%, #070f08 100%);
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        .lb-loader--exit {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .lb-mark-wrap {
          position: relative;
          width: 84px;
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Pulsing glow rings behind the box */
        .lb-ring {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          border: 1.5px solid rgba(139, 214, 149, 0.35);
          animation: lb-pulse 2.2s ease-out infinite;
        }
        .lb-ring.lb-ring-2 { animation-delay: 0.7s; }
        .lb-ring.lb-ring-3 { animation-delay: 1.4s; }

        @keyframes lb-pulse {
          0%   { transform: scale(1);    opacity: 0.6; }
          100% { transform: scale(1.9);  opacity: 0; }
        }

        /* The logo box itself */
        .lb-box {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: #112712;
          box-shadow:
            0 0 0 1px rgba(139, 214, 149, 0.25),
            0 8px 24px rgba(0, 0, 0, 0.45),
            0 0 30px rgba(90, 200, 120, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lb-breathe 2.2s ease-in-out infinite;
        }

        @keyframes lb-breathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }

        .lb-letter {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 30px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 0 16px rgba(255, 255, 255, 0.35);
        }

        /* Sweeping light across the letter */
        .lb-sheen {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          overflow: hidden;
        }
        .lb-sheen::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.28) 50%,
            transparent 100%
          );
          transform: rotate(20deg);
          animation: lb-sheen-move 2.6s ease-in-out infinite;
        }
        @keyframes lb-sheen-move {
          0%   { left: -60%; }
          55%  { left: 130%; }
          100% { left: 130%; }
        }

        .lb-wordmark {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(226, 240, 228, 0.85);
          opacity: 0;
          animation: lb-fade-in 0.6s ease-out 0.35s forwards;
        }
        @keyframes lb-fade-in {
          to { opacity: 1; }
        }

        .lb-progress-track {
          width: 160px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .lb-progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #4f8f57, #a4e2ab);
          transition: width 0.15s linear;
        }
      `}</style>

      <div className="lb-mark-wrap">
        <span className="lb-ring lb-ring-1" />
        <span className="lb-ring lb-ring-2" />
        <span className="lb-ring lb-ring-3" />
        <div className="lb-box">
          <span className="lb-letter">L</span>
          <span className="lb-sheen" />
        </div>
      </div>

      {showWordmark && <div className="lb-wordmark">LumaBuild</div>}

      <div className="lb-progress-track">
        <div className="lb-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
