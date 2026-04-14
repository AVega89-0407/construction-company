import Lorem from '../components/Lorem';

About.route = {
  path: '/om-oss',
  label: 'Om oss',
  index: 3
};

export default function About() {
  return (
    <>
      <section className="widget">
        <h2>Om oss</h2>
        <Lorem paragraphCount={2} />
      </section>
    </>
  );
}