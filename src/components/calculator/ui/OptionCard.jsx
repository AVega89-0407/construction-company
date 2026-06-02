export default function OptionCard({ icon, label, description, selected, onClick}) {
    return (
        <button 
        onClick={onClick}
        className={`option-card ${selected ? 'option-card--selected' : '' }`}>
            {icon}
            <span className="option-card__label">{label}</span>
            {description && (
                <span className="option-card__desc">{description}</span>
            )}
        </button>
    )
}