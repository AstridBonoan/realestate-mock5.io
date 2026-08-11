import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StoryTransition({
  title,
  description,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  dark = false,
}) {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`flex min-h-[55vh] items-center ${
        dark ? 'bg-plum text-white' : 'bg-lavender text-warm-ink'
      }`}
    >
      <div
        className={`mx-auto max-w-3xl px-5 py-20 text-center md:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p
            className={`mx-auto mt-5 max-w-xl text-base leading-relaxed ${
              dark ? 'text-white/70' : 'text-warm-gray'
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to={primaryTo}
            className={dark ? 'btn-primary !bg-white !text-plum hover:!bg-lavender' : 'btn-primary'}
          >
            {primaryLabel}
          </Link>
          {secondaryTo && (
            <Link
              to={secondaryTo}
              className={
                dark
                  ? 'btn-secondary !border-white/30 !text-white hover:!bg-white/10'
                  : 'btn-secondary'
              }
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
