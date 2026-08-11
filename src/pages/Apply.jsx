import ApplicationWizard from '../components/ApplicationWizard'

export default function Apply() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Application</p>
        <h1 className="mt-3 text-4xl font-extrabold text-plum sm:text-5xl">Join KINDRED</h1>
        <p className="mt-4 text-warm-gray">A multi-step application — frontend mockup only.</p>
        <div className="mt-12">
          <ApplicationWizard />
        </div>
      </div>
    </section>
  )
}
