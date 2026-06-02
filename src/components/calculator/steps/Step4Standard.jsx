import OptionCard from "../ui/OptionCard";
import NavButtons from "../ui/NavButtons";

const OPTIONS = [
  { value: 'Grundstandard', description: 'Funktionellt och kostnadseffektivt' },
  { value: 'Mellannivå',    description: 'Bra balans pris och kvalitet' },
  { value: 'Hög standard',  description: 'Premium material och finish' },
];

export default function Step2Standard({ answers, onChange, onNext, onBack }) {
  return (
    <section className="step">
      <h2 className="step__title">Vilken standard önskar du?</h2>
      <section className="options-grid">
        {OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.value}
            description={opt.description}
            selected={answers.standard === opt.value}
            onClick={() => onChange("standard", opt.value)}
          />
        ))}
      </section>
      <NavButtons 
      onBack={onBack}
      onNext={onNext} 
      nextDisabled={!answers.standard} />
    </section>
  );
}