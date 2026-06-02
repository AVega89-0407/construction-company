import NavButtons from "../ui/NavButtons";

export default function Step3Yta({ answers, onChange, onNext, onBack }) {
    return (
        <section className="step">
            <h2 className="step__title">Hur stor yta handlar det om?</h2>
            <div className="slider-row">
                <span className="slider-row__value">{answers.yta} kvm</span>
                <input 
                type="range"
                min={10}
                max={500}
                step={5}
                value={answers.yta}
                onChange={e => onChange('yta', Number(e.target.value))}
                />
            </div>
            <NavButtons onBack={onBack} onNext={onNext}/>
        </section>
    )
}