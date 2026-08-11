import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { aboutSections } from '../data/content'
import { company } from '../data/company'

export default function About() {
  return (
    <>
      <section className="border-b border-rule py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionLabel>Company Profile</SectionLabel>
          <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
            {company.fullName}
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            An editorial company profile for a real estate journal and boutique property house—
            cultured, selective, and oriented toward lasting relationships.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="img-zoom">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1800&q=80"
              alt="Architectural detail in warm natural light"
              className="aspect-[21/9] min-h-[240px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {aboutSections.map((section, i) => (
        <section
          key={section.id}
          className={`py-14 md:py-20 ${i % 2 === 1 ? 'bg-parchment' : ''}`}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
            <ScrollReveal>
              <SectionLabel>{section.label}</SectionLabel>
              <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
                {section.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-sm leading-relaxed text-muted sm:text-base md:pt-8">
                {section.body}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="border-y border-rule py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <ScrollReveal>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl md:text-5xl">
              Built For The Long Term.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              Strong real estate businesses are built through relationships, trust, collaboration,
              and sustainable growth. Ashlar is designed for people who prefer patience to noise—
              and who understand that opportunity compounds when judgment is shared carefully.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection variant="parchment" title="Begin A Conversation" linkLabel="Contact Us →" linkTo="/contact" />
    </>
  )
}
