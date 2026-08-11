import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  dark = false,
}) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? 'bg-charcoal text-white' : 'bg-surface text-charcoal'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark
            ? 'bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.18),_transparent_55%)]'
            : 'bg-[radial-gradient(ellipse_at_bottom_left,_rgba(167,196,181,0.35),_transparent_55%)]'
        }`}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
              dark ? 'text-white/70' : 'text-muted'
            }`}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primaryTo}
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark active:scale-[0.98] sm:w-auto"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className={`inline-flex w-full items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition active:scale-[0.98] sm:w-auto ${
                  dark
                    ? 'border-white/25 text-white hover:bg-white/10'
                    : 'border-border text-charcoal hover:bg-white'
                }`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
