import OptionCard from "../ui/OptionCard";
import NavButtons from "../ui/NavButtons";

import { Construction, Hammer, Ruler, TreePine, House, BrickWall } from "lucide-react";

    const OPTIONS = [
      { icon: <Construction />, value: "Nybyggnation", description: "Bygg nytt hus eller lokal." },
      { icon: <Hammer />, value: "Renovering", description: "Kök, badrum, golv m.m." },
      { icon: <Ruler />, value: "Tillbyggnad", description: "Utöka befintlig yta." },
      { icon: <TreePine />, value: "Mark & trädgård", description: "Altan, uppfart, mark" }
    ];

    export default function Step1Tjanst({ answers, onChange, onNext}) {
       return (
        <section className="step">
            <h2 className="step__title">Vad behöver du hjälp med?</h2>
            <section className="options-grid">
                {OPTIONS.map(opt => (
                    <OptionCard 
                    key={opt.value}
                    icon={opt.icon}
                    label={opt.value}
                    description={opt.description}
                    selected={answers.tjanst === opt.value}
                    onClick={() => onChange('tjanst', opt.value)}
                    />
                ))}
            </section>
            <NavButtons 
            onNext={onNext}
            nextDisabled={!answers.tjanst}
            />
        </section>
       )
    }