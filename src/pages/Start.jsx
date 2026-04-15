import Lorem from '../components/Lorem';
import HeroImage from '../components/HeroImage';

import { Link } from 'react-router';

Start.route = {
  path: '/',
  label: 'Start',
  index: 1
}

export default function Start() {
  return (
    <>
              <HeroImage
        src="construction-hero.jpg"
        alt="Start Hero"
      />
    <div className="page">
      <div className="hero">
        <div className="hero-text">
          <p className="section-label">Byggföretag i [stad] sedan 1998</p>
          <h1>Vi bygger det<br/>du <em>drömmer</em><br/>om.</h1>
          <p>Vi är ett familjeägt byggföretag med lång erfarenhet av nybyggnation, renovering och tillbyggnad. Kvalitet och ärlighet i varje projekt.</p>
          <Link to="/kontakt" className="hero-cta">
            Begär offert
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}