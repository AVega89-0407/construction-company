export default function NavButtons({
    onBack, 
    onNext, 
    nextLabel = 'Nästa',
    nextDisabled = false,
}) {
    return (
        <section className="nav-buttons">
            {onBack && (
                <button className="btn btn--secondary" onClick={onBack}>
                    Tillbaka
                </button>
            )}
            <button className="btn btn--primary"
            onClick={onNext}
            disabled={nextDisabled}>
                {nextLabel}
            </button>
        </section>
    )
}