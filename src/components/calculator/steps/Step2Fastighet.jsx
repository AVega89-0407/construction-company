import OptionCard from "../ui/OptionCard";
import NavButtons from "../ui/NavButtons";

const OPTIONS = [
  { value: "Villa", description: "Enfamiljshus" },
  { value: "Radhus", description: "Radhus eller kedjehus" },
  { value: "Bostadsrätt", description: "Lägenhet" },
  { value: "Lokal", description: "Kontor eller butik" },
];

export default function Step2Fastighet({ answers, onChange, onNext, onBack }) {
  return (
    <section className="step">
      <h2 className="step__title">Vilken typ av fastighet?</h2>
      <section className="options-grid">
        {OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.value}
            description={opt.description}
            selected={answers.fastighet === opt.value}
            onClick={() => onChange("fastighet", opt.value)}
          />
        ))}
      </section>
      <NavButtons 
      onBack={onBack}
      onNext={onNext} 
      nextDisabled={!answers.fastighet} />
    </section>
  );
}
