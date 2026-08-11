export default function FilterBar({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Property filters">
      {options.map((option) => {
        const selected = active === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={selected}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              selected
                ? 'bg-emerald text-white shadow-soft'
                : 'border border-border bg-white text-ink hover:border-sage hover:bg-sage-soft'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
