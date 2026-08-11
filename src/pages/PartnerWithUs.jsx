import PartnershipForm from '../components/PartnershipForm'

export default function PartnerWithUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            Partnership Proposal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-plum sm:text-5xl">
            Partner With KINDRED
          </h1>
          <p className="mt-5 text-warm-gray">
            Tell us what you bring and what you hope to build. Frontend mockup only.
          </p>
        </div>
        <PartnershipForm />
      </div>
    </section>
  )
}
