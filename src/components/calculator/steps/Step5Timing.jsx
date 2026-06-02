import OptionCard from "../ui/OptionCard";
import NavButtons from "../ui/NavButtons";

const OPTIONS = [
  { value: 'Så snart som möjligt' },
  { value: 'Inom 1–3 månader' },
  { value: 'Inom 6 månader' },
  { value: 'Bara undersöker' },
];

export default function Step2Timing({ answers, onChange, onNext, onBack }) {
  return (
    <section className="step">
      <h2 className="step__title">När vill du att arbetet ska påbörjas?</h2>
      <section className="options-grid">
        {OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.value}
            description={opt.description}
            selected={answers.timing === opt.value}
            onClick={() => onChange("timing", opt.value)}
          />
        ))}
      </section>
      <NavButtons 
      onBack={onBack}
      onNext={onNext} 
      nextDisabled={!answers.timing} />
    </section>
  );
}
