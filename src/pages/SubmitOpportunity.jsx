import OpportunityForm from '../components/OpportunityForm'
import ScrollReveal from '../components/ScrollReveal'

export default function SubmitOpportunity() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Submit
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Submit An Opportunity.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Share a property or real estate opportunity with our team. This form is a frontend
            mockup designed to demonstrate intake UX—no backend processing required.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <OpportunityForm />
        </ScrollReveal>
      </div>
    </section>
  )
}
