import NavButtons from "../ui/NavButtons";

export default function StepSummary({ answers, onNext, onBack }) {
    const rows = [
    { label: 'Tjänst',    value: answers.tjanst },
    { label: 'Fastighet', value: answers.fastighet },
    { label: 'Yta',       value: `${answers.yta} kvm` },
    { label: 'Standard',  value: answers.standard },
    { label: 'Starttid',  value: answers.timing },
    ];

    return (
        <section className="step">
            <h2 className="step__title">Stämmer detta?</h2>
            <p className="step__sub">
                Nästa steg är att fylla i dina kontaktuppgifter så återkommer vi med en offert.
            </p>

            <div className="summary-card">
                {rows.map(row => (
                    <div key={row.label} className="summary-card__row">
                        <span className="summary-card__label">{row.label}</span>
                        <span className="summary-card__value">{row.value}</span>
                    </div>
                ))}
            </div>

            <NavButtons 
            onBack={onBack}
            onNext={onNext}
            nextLabel="Fyll i kontaktuppgifter"
            />
        </section>
    )
}