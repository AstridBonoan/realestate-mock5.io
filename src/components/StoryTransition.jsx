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
      className={`flex min-h-[70vh] items-center ${
        dark ? 'bg-plum text-white' : 'bg-lavender text-warm-ink'
      }`}
    >
      <div
        className={`mx-auto max-w-4xl px-5 py-20 text-center md:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description && (
          <p
            className={`mx-auto mt-6 max-w-2xl text-base sm:text-lg ${
              dark ? 'text-white/75' : 'text-warm-gray'
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            to={primaryTo}
            className={`text-sm font-extrabold tracking-[0.12em] uppercase ${
              dark ? 'text-coral' : 'text-plum'
            } hover:opacity-80`}
          >
            {primaryLabel}
          </Link>
          {secondaryTo && (
            <Link
              to={secondaryTo}
              className={`text-sm font-bold tracking-[0.12em] uppercase ${
                dark ? 'text-white/70' : 'text-warm-gray'
              } hover:opacity-80`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
