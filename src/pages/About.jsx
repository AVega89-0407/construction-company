import HeroImage from '../components/HeroImage';

About.route = {
  path: '/om-oss',
  label: 'Om oss',
  index: 3
};

export default function About() {
  return (
    <>
    <div className="page-about">
      <section>
        <p className="section-label">Vilka vi är</p>
        <h2 className="section-title">Om oss</h2>
        <div className="about-grid">
          <div>
            <p style={{ lineHeight: 1.85, color: "var(--muted)", marginBottom: "1.5rem" }}>
              Vi grundades 1998 av [Namn] med en enkel vision: leverera byggarbeten med äkta hantverk och ärlig kommunikation. Idag är vi ett team på [X] hantverkare som delar samma passion för kvalitet.
            </p>
            <p style={{ lineHeight: 1.85, color: "var(--muted)" }}>
              Vi tar oss an projekt av alla storlekar — från ett nytt badrum till ett helt bostadshus. Varje uppdrag får samma omsorg och noggrannhet. Vi är stolta över att majoriteten av våra kunder kommer via rekommendationer.
            </p>
            <div className="about-stats">
              {[["25+", "År i branschen"], ["200+", "Avslutade projekt"], ["98%", "Nöjda kunder"], ["10", "Medarbetare"]].map(([num, label]) => (
                <div className="stat" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about-hero.jpg" alt="Vårt team av hantverkare" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}