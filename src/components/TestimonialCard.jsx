export default function TestimonialCard({ quote, name, position, organization, placeholder }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-soft">
      {placeholder && (
        <span className="mb-3 w-fit rounded-full bg-sage-soft px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-dark uppercase">
          Placeholder testimonial
        </span>
      )}
      <blockquote className="flex-1 text-base leading-relaxed text-ink/90">
        “{quote}”
      </blockquote>
      <footer className="mt-6 border-t border-border pt-4">
        <p className="font-display text-sm font-bold text-charcoal">{name}</p>
        <p className="text-xs text-muted">
          {position}, {organization}
        </p>
      </footer>
    </article>
  )
}
