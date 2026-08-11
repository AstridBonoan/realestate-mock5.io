import { stats as defaultStats } from '../data/company'
import { useCountUp, useScrollReveal } from '../hooks/useScrollReveal'

function StatItem({ value, suffix, label, note, enabled }) {
  const count = useCountUp(value, enabled)
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        <span className="text-emerald">{count}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-ink">{label}</p>
      <p className="mt-1 text-[11px] tracking-wide text-muted uppercase">{note} figure</p>
    </div>
  )
}

export default function Stats({ items = defaultStats }) {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className="border-y border-border bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8 lg:py-12">
        {items.map((item) => (
          <StatItem key={item.label} {...item} enabled={visible} />
        ))}
      </div>
      <p className="pb-6 text-center text-xs text-muted">
        Illustrative mockup statistics — replace with live metrics anytime.
      </p>
    </section>
  )
}
