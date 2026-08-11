import { Link } from 'react-router-dom'
import MembershipBenefit from '../components/MembershipBenefit'
import MembershipDashboardPreview from '../components/MembershipDashboardPreview'
import TeamMember from '../components/TeamMember'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { membershipBenefits, team } from '../data/content'

export default function Membership() {
  const featured = team.find((m) => m.featured)
  const others = team.filter((m) => !m.featured)
  const [horizontal, ...rest] = others

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Membership
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Membership Opens The Door.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Become part of a growing network built around relationships, real estate, and
            opportunity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/join"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark sm:w-auto"
            >
              Join Now
            </Link>
            <a
              href="#team"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-charcoal transition hover:border-emerald sm:w-auto"
            >
              Meet The Team
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Membership Features
            </h2>
            <p className="mt-2 text-muted">A dashboard-inspired look at what membership unlocks.</p>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <MembershipBenefit {...b} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Membership Experience
            </h2>
            <p className="mt-2 max-w-2xl text-muted">
              A polished preview of what the member experience could eventually look like. Visual
              marketing mockup only — not a live dashboard.
            </p>
          </ScrollReveal>
          <div className="mt-8">
            <ScrollReveal>
              <MembershipDashboardPreview />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Meet The Team
            </h2>
            <p className="mt-2 text-sm text-muted">
              Placeholder profiles — replace names, bios, and images easily.
            </p>
          </ScrollReveal>
          <div className="mt-8 space-y-6">
            {featured && (
              <ScrollReveal>
                <TeamMember member={featured} variant="featured" />
              </ScrollReveal>
            )}
            {horizontal && (
              <ScrollReveal>
                <TeamMember member={horizontal} variant="horizontal" />
              </ScrollReveal>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((m, i) => (
                <ScrollReveal key={m.id} delay={i * 70}>
                  <TeamMember member={m} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Would You Like To Become A Member?"
        description="Join the network and become part of a growing community built around real estate opportunities and relationships."
        primaryLabel="Join Now"
        primaryTo="/join"
      />
    </>
  )
}
