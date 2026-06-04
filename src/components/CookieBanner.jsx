import { useState, useEffect } from "react";

/**
 * CookieBanner
 *
 * Sparar val i localStorage under nyckeln "cookie_consent".
 * Värden: "all" | "necessary"
 *
 * Användning i App.jsx (eller root-komponent):
 *   import CookieBanner from "./CookieBanner";
 *   <CookieBanner privacyPolicyPath="/integritetspolicy" />
 *
 * Props:
 *   privacyPolicyPath  – sökväg till integritetspolicysidan (default: "/integritetspolicy")
 *   onAcceptAll        – callback när användaren accepterar alla cookies
 *   onAcceptNecessary  – callback när användaren väljer bara nödvändiga
 */
export default function CookieBanner({
  privacyPolicyPath = "/integritetspolicy",
  onAcceptAll,
  onAcceptNecessary,
}) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Liten fördröjning så att sidan hinner ladda klart
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (type) => {
    setLeaving(true);
    setTimeout(() => {
      localStorage.setItem("cookie_consent", type);
      setVisible(false);
      setLeaving(false);
      if (type === "all" && onAcceptAll) onAcceptAll();
      if (type === "necessary" && onAcceptNecessary) onAcceptNecessary();
    }, 320);
  };

  if (!visible) return null;

  return (
    <>
      <style>{css}</style>
      <div className={`cb-overlay ${leaving ? "cb-overlay--out" : ""}`} aria-hidden="true" />
      <div
        role="dialog"
        aria-label="Cookiesamtycke"
        aria-live="polite"
        className={`cb-banner ${leaving ? "cb-banner--out" : ""}`}
      >
        {/* Left: icon + text */}
        <div className="cb-left">
          <div className="cb-icon" aria-hidden="true">🍪</div>
          <div className="cb-text">
            <p className="cb-title">Vi använder cookies</p>
            <p className="cb-desc">
              Vi använder cookies för att förbättra din upplevelse och analysera
              trafik på vår webbplats. Du väljer själv vad du tillåter.{" "}
              <a href={privacyPolicyPath} className="cb-link">
                Läs vår integritetspolicy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right: buttons */}
        <div className="cb-actions">
          <button
            className="cb-btn cb-btn--secondary"
            onClick={() => dismiss("necessary")}
          >
            Endast nödvändiga
          </button>
          <button
            className="cb-btn cb-btn--primary"
            onClick={() => dismiss("all")}
          >
            Acceptera alla
          </button>
        </div>
      </div>
    </>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Lora:wght@400;600&display=swap');

  .cb-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26, 24, 20, 0.25);
    backdrop-filter: blur(2px);
    z-index: 998;
    animation: cb-fade-in 0.35s ease forwards;
  }

  .cb-overlay--out {
    animation: cb-fade-out 0.32s ease forwards;
  }

  .cb-banner {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    z-index: 999;
    width: min(760px, calc(100vw - 32px));
    background: #faf8f4;
    border: 2px solid #1a1814;
    box-shadow: 6px 6px 0px #1a1814;
    padding: 24px 28px;
    display: flex;
    align-items: center;
    gap: 28px;
    animation: cb-slide-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .cb-banner--out {
    animation: cb-slide-down 0.32s cubic-bezier(0.55, 0, 1, 0.45) forwards;
  }

  .cb-left {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex: 1;
    min-width: 0;
  }

  .cb-icon {
    font-size: 28px;
    flex-shrink: 0;
    line-height: 1;
    margin-top: 2px;
  }

  .cb-text {
    flex: 1;
    min-width: 0;
  }

  .cb-title {
    font-family: 'Lora', Georgia, serif;
    font-weight: 600;
    font-size: 0.95rem;
    color: #1a1814;
    margin: 0 0 6px;
  }

  .cb-desc {
    font-family: 'Lora', Georgia, serif;
    font-size: 0.82rem;
    line-height: 1.7;
    color: #6a6460;
    margin: 0;
  }

  .cb-link {
    color: #b85c38;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .cb-link:hover {
    color: #1a1814;
  }

  .cb-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
  }

  .cb-btn {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 11px 20px;
    border: 1.5px solid #1a1814;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s, transform 0.1s;
  }

  .cb-btn:active {
    transform: scale(0.97);
  }

  .cb-btn--primary {
    background: #1a1814;
    color: #faf8f4;
  }

  .cb-btn--primary:hover {
    background: #b85c38;
    border-color: #b85c38;
  }

  .cb-btn--secondary {
    background: transparent;
    color: #1a1814;
  }

  .cb-btn--secondary:hover {
    background: #ede6d8;
  }

  .cb-btn:focus-visible {
    outline: 2px solid #b85c38;
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes cb-slide-up {
    from { opacity: 0; transform: translateX(-50%) translateY(40px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @keyframes cb-slide-down {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to   { opacity: 0; transform: translateX(-50%) translateY(40px); }
  }

  @keyframes cb-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes cb-fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .cb-banner {
      flex-direction: column;
      align-items: stretch;
      bottom: 16px;
      padding: 20px 20px;
      gap: 20px;
    }

    .cb-actions {
      flex-direction: row;
    }

    .cb-btn {
      flex: 1;
      text-align: center;
    }
  }
`;