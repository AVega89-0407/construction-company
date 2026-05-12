import { Construction, Hammer, Ruler, TreePine, House, BrickWall } from "lucide-react";


CalculatorPage.route = {
  path: '/offert',
  index: 5
}

export default function CalculatorPage() {
  {
    const offerts = [
      { icon: <Construction />, title: "Nybyggnation", desc: "Bygg nytt hus eller lokal." },
      { icon: <Hammer />, title: "Renovering", desc: "Kök, badrum, golv m.m." },
      { icon: <Ruler />, title: "Tillbyggnad", desc: "Utöka befintlig yta." },
      { icon: <TreePine />, title: "Mark & trädgård", desc: "Altan, uppfart, mark" }
    ];
    return (
      <div className="page">
        <section>
          <h2 className="section-title">Vad behöver du hjälp med?</h2>
          <div className="offerts-grid">
            {offerts.map((s) => (
              <div className="offerts-card" key={s.title}>
                <span className="offerts-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn">Nästa &#8594;</button>
        </section>
      </div>
    );
  }
}