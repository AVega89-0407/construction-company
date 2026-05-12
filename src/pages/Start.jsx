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
          <h1>Vi bygger det<br/>du <em>drömmer</em> om. <br /> Underhåller <br /> det du <em>bryr dig om</em>.</h1>
          <p>Vi är ett familjeägt byggföretag med lång erfarenhet av nybyggnation, renovering och tillbyggnad. Kvalitet och ärlighet i varje projekt.</p> 
          <Link to="/offert" className="hero-cta">
            Offertförfrågan &#8594;
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}