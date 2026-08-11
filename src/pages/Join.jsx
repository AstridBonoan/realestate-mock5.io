import MembershipForm from '../components/MembershipForm'
import ScrollReveal from '../components/ScrollReveal'

export default function Join() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Application
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Become Part Of The Network.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Tell us about yourself and how you&apos;d like to engage with AETHER. This modern
            onboarding-style form is frontend-only for the mockup—perfect for demonstrating the
            membership journey.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink">
            {[
              'Access a growing professional network',
              'Discover curated opportunities',
              'Connect with partners and owners',
              'Build long-term relationships',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <MembershipForm />
        </ScrollReveal>
      </div>
    </section>
  )
}
