import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PullQuote from '../components/PullQuote'
import SectionLabel from '../components/SectionLabel'
import ImageCaption from '../components/ImageCaption'
import { FocusList } from '../components/MembershipList'
import PropertyFeature from '../components/PropertyFeature'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { focusAreas } from '../data/content'
import { properties } from '../data/properties'

export default function Home() {
  const desk = properties.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <ScrollReveal>
            <SectionLabel>Feature</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-espresso sm:text-5xl md:text-[3.25rem]">
              More Than Property
            </h2>
            <p className="mt-6 font-display text-2xl leading-snug text-burgundy sm:text-3xl">
              Real estate is ultimately about relationships.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Ashlar is organized as a property house with the discipline of a journal: we present
                opportunities carefully, convene people selectively, and treat introductions as craft.
              </p>
              <p>
                Membership, partnerships, investments, and rentals are not separate products—they are
                chapters of one long conversation about land, capital, and trust.
              </p>
              <p>
                We believe strong real estate organizations endure through judgment, patience, and
                relationships that outlast any single transaction.
              </p>
            </div>
            <PullQuote>Buildings create spaces. Relationships create opportunities.</PullQuote>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-rule bg-parchment py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <ScrollReveal>
            <SectionLabel>02 / Our Mission</SectionLabel>
            <h2 className="mt-6 font-display text-3xl leading-snug text-espresso sm:text-4xl md:text-5xl">
              To build a connected real estate community where people, partnerships, and
              opportunities can grow together.
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-burgundy rule-grow" />
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              We exist to make those connections more intentional—less noise, more clarity, and a
              network oriented toward the long term.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
          <ScrollReveal>
            <div className="img-zoom">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
                alt="City architecture representing Ashlar's long-term vision"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <ImageCaption caption="Urban fabric as study—scale, rhythm, and the patience of lasting work." />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <SectionLabel>03 / Our Vision</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl md:text-5xl">
              Building a recognized network around real estate.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              Our long-term vision is to become a trusted house known for judgment: which
              opportunities we present, whom we introduce, and how we cultivate collaboration across
              owners, investors, professionals, and members.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Recognition, for us, means credibility—earned through consistency and care—not
              spectacle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-rule py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <SectionLabel>04 / What We Do</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">Areas Of Focus</h2>
          </ScrollReveal>
          <FocusList items={focusAreas} />
        </div>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>Property Desk</SectionLabel>
                <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
                  From The Property Desk
                </h2>
              </div>
              <Link to="/properties" className="editorial-link">
                View The Index →
              </Link>
            </div>
          </ScrollReveal>
          <div className="space-y-12">
            {desk.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
                <PropertyFeature property={p} large={i === 0} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <ScrollReveal>
            <SectionLabel>Partnerships</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl md:text-5xl">
              Have Something Worth Building?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              We welcome conversations with people and organizations who see potential in real
              estate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
              <Link to="/partners" className="editorial-link">
                Become A Partner →
              </Link>
              <Link to="/contact" className="editorial-link">
                Contact Us →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
