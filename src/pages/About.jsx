import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import { company } from '../data/company'

const values = [
  {
    title: 'Relationships First',
    text: 'Strong real estate businesses are built through trust and long-term collaboration.',
  },
  {
    title: 'Clarity',
    text: 'We communicate opportunities and partnerships with honesty and professionalism.',
  },
  {
    title: 'Network Thinking',
    text: 'Value multiplies when people, properties, and partners connect intentionally.',
  },
  {
    title: 'Modern Craft',
    text: 'We combine premium real estate sensibility with digital product experience.',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">About</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Who We Are
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {company.name} is a modern real estate organization building a centralized network where
            members discover opportunities, explore rentals, connect with partners, and grow together.
            We sit between a real estate company, investment platform, property marketplace, membership
            organization, and strategic partnership network.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <article className="h-full rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-charcoal">Mission</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Our mission is to create a connected real estate network where people can discover
                opportunities, develop relationships, and collaborate.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <article className="h-full rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-charcoal">Vision</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Our vision is to build a trusted platform that brings people, properties, and
                partnerships together.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal">Our Approach</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              We design membership, marketplace, and partnership experiences as one product system.
              Members join for community and access. Partners collaborate for shared opportunity.
              Properties and rentals become discovery layers—not the entire identity of the
              organization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal">Our Values</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60}>
                <article className="rounded-3xl border border-border p-6 shadow-soft">
                  <h3 className="font-display text-lg font-bold text-charcoal">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Why We Believe In Networks.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Strong real estate businesses are built through relationships, trust, collaboration,
              and long-term thinking. A network creates leverage that isolated transactions cannot:
              introductions compound, opportunities circulate, and partnerships deepen over time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Join The AETHER Network"
        description="Membership, partnerships, and opportunities—designed as one connected experience."
        primaryLabel="Join Now"
        primaryTo="/join"
        secondaryLabel="Explore Properties"
        secondaryTo="/properties"
      />
    </>
  )
}
