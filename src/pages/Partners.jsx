import { Link } from 'react-router-dom'
import PartnerCard from '../components/PartnerCard'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { partnerCategories } from '../data/content'

const process = [
  { n: '01', title: 'CONNECT', text: 'Introduce your organization and goals.' },
  { n: '02', title: 'DISCUSS', text: 'Explore fit across people, properties, and strategy.' },
  { n: '03', title: 'COLLABORATE', text: 'Define how we work together inside the network.' },
  { n: '04', title: 'GROW', text: 'Build durable partnerships and shared opportunities.' },
]

export default function Partners() {
  return (
    <>
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">Partners</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Build With Us.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
            We&apos;re looking to connect with people and organizations who see opportunity in real
            estate.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal">Partner Categories</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <PartnerCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal">Partnership Process</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {process.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 70}>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                  <p className="font-display text-sm font-bold text-emerald">{step.n}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
            >
              Become A Partner
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have A Property Or Opportunity?"
        description="Tell us about a property or real estate opportunity you'd like our team to review."
        primaryLabel="Submit Opportunity"
        primaryTo="/submit-opportunity"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  )
}
