import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'

export default function EditorialSection({
  label,
  title,
  children,
  className = '',
  titleClassName = '',
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal>
          {label && <SectionLabel>{label}</SectionLabel>}
          {title && (
            <h2
              className={`mt-4 font-display text-3xl text-espresso sm:text-4xl md:text-5xl ${titleClassName}`}
            >
              {title}
            </h2>
          )}
          {children}
        </ScrollReveal>
      </div>
    </section>
  )
}
