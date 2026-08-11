import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import NetworkDiagram from '../components/NetworkDiagram'
import PropertyCard from '../components/PropertyCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { properties } from '../data/properties'
import { testimonials } from '../data/content'

const steps = [
  { n: '01', title: 'JOIN', text: 'Become part of the network.' },
  { n: '02', title: 'CONNECT', text: 'Meet members, professionals, and partners.' },
  { n: '03', title: 'DISCOVER', text: 'Explore properties and opportunities.' },
  { n: '04', title: 'GROW', text: 'Build relationships and pursue new opportunities.' },
]

const growthFlow = ['MEMBERS', 'CONNECTIONS', 'OPPORTUNITIES', 'PARTNERSHIPS', 'GROWTH']

export default function Home() {
  const featured = properties.slice(0, 4)

  return (
    <>
      <Hero />
      <Stats />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald uppercase">
              Introduction
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              One Network. Multiple Opportunities.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              AETHER brings together members, partners, property owners, investors, and real estate
              professionals into one connected ecosystem—built for discovery, collaboration, and
              long-term growth.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Members', 'Partners', 'Property Owners', 'Investors', 'Professionals'].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </ScrollReveal>
          <NetworkDiagram />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald uppercase">
              Purpose
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Why We&apos;re Building This.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                  alt="Modern interior representing our mission"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-charcoal">Mission</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Our mission is to create a connected real estate network where people can
                    discover opportunities, develop relationships, and collaborate.
                  </p>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                  alt="City skyline representing our vision"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-charcoal">Vision</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Our vision is to build a trusted platform that brings people, properties, and
                    partnerships together.
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              A simple path from joining the network to growing with it.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 80}>
                <div className="relative h-full rounded-3xl border border-border bg-cream p-6">
                  <p className="font-display text-sm font-bold text-emerald">{step.n}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.text}</p>
                  {i < steps.length - 1 && (
                    <div className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-sage md:block" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Featured Opportunities
              </h2>
              <p className="mt-2 text-muted">Marketplace-style previews from the network.</p>
            </ScrollReveal>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark"
            >
              Explore All Properties <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              More Than A Property Platform.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              We&apos;re building a network of people—not simply listing properties. Membership
              creates connections that unlock opportunities, partnerships, and long-term growth.
            </p>
            <Link
              to="/membership"
              className="mt-8 inline-flex rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"
            >
              Join The Network
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-[2rem] border border-border bg-cream p-6 sm:p-8">
              <ol className="space-y-0">
                {growthFlow.map((item, i) => (
                  <li key={item} className="flex flex-col items-center text-center">
                    <div className="rounded-2xl border border-border bg-white px-6 py-3 font-display text-sm font-bold tracking-wide text-charcoal shadow-soft">
                      {item}
                    </div>
                    {i < growthFlow.length - 1 && (
                      <span className="my-2 text-emerald" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              What People Are Saying
            </h2>
            <p className="mt-2 text-sm text-muted">
              Placeholder testimonials for this mockup — easy to replace with real quotes.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Ready To Join The Network?"
        description="Become a member, explore opportunities, or start a partnership conversation."
        primaryLabel="Join Now"
        primaryTo="/join"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  )
}
