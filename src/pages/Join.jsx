import MembershipForm from '../components/MembershipForm'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

export default function Join() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <ScrollReveal>
          <SectionLabel>Application</SectionLabel>
          <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
            Membership Application
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            We&apos;d like to learn more about you and your interest in real estate.
          </p>
          <div className="mt-4 h-px w-full bg-rule" />
        </ScrollReveal>
        <div className="mt-10">
          <MembershipForm />
        </div>
      </div>
    </section>
  )
}
