import Lorem from '../components/Lorem';

Start.route = {
  path: '/',
  label: 'Start',
  index: 1
}

export default function Start() {
  return (
    <>
      <section className="widget">
        <h2>Välkommen!</h2>
        <Lorem paragraphCount={2} />
      </section>
    </>
  );
}