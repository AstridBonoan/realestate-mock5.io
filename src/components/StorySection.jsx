import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StorySection({
  id,
  label,
  children,
  className = '',
  full = false,
}) {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`${full ? 'story-panel' : 'py-20 md:py-28'} ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-6xl px-5 md:px-8 reveal ${visible ? 'visible' : ''}`}
      >
        {label && (
          <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
