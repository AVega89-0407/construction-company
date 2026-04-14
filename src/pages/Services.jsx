import Lorem from "../components/Lorem";

Services.route = {
  path: '/tjanster',
  label: 'Tjänster',
  index: 2
}

export default function Services() {
  return (
    <>
      <section className="widget">
        <h2>Tjänster</h2>
        <h3>Bygg</h3>
        <Lorem paragraphCount={2} />
      </section>
      <section className="widget">
        <h3>Luftbehandling</h3>
        <Lorem paragraphCount={2} />
      </section>
    </>
  );
}