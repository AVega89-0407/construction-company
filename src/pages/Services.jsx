import { Construction, Hammer, Ruler, TreePine, House, BrickWall } from 'lucide-react';

Services.route = {
  path: '/tjanster',
  label: 'Tjänster',
  index: 2
}

export default function Services() {
  {
    const services = [
      { icon: <Construction />, title: "Nybyggnation", desc: "Vi uppför nya bostäder och kommersiella byggnader från grunden. Från ritning till nyckelklart — vi hanterar hela processen." },
      { icon: <Hammer />, title: "Renovering", desc: "Badrum, kök, fasader eller hela huset. Vi renoverar med hantverksskicklighet och respekt för din bostad." },
      { icon: <Ruler />, title: "Tillbyggnad", desc: "Utöka ditt hem med ett garage, en altan eller ett extra rum. Vi planerar och utför tillbyggnader anpassade efter dina behov." },
      { icon: <TreePine />, title: "Snickeri", desc: "Fönster, dörrar, trappor och inredningssnickeri. Hantverk av högsta klass med fokus på detaljer." },
      { icon: <House />, title: "Takarbeten", desc: "Byte av tak, taktäckning och plåtslageri. Vi arbetar med alla typer av takmaterial." },
      { icon: <BrickWall />, title: "Markarbeten", desc: "Dränering, plattsättning och anläggning av utemiljöer. Vi skapar utemiljöer som håller länge." },
    ];
    return (
      <div className="page">
        <section>
          <p className="section-label">Vad vi erbjuder</p>
          <h2 className="section-title">Våra tjänster</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}