export default function HeroImage({ src, alt }) {
  return <div className="hero-image-holder">
    <img src={`/images/${src}`} alt={alt} />
  </div>;
}