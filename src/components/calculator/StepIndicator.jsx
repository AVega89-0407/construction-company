export default function StepIndicator({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="step-indicator">
      <div className="step-indicator__bar">
        <div
          className="step-indicator__fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="step-indicator__label">
        Steg {current} av {total}
      </span>
    </div>
  )
}