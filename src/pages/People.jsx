import TeamShowcase from '../components/TeamShowcase'
import { people } from '../data/content'

export default function People() {
  return (
    <>
      <section className="border-b border-line bg-lavender py-16 md:py-22">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
            03 — The People
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
            Built by people who believe in the power of relationships.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-warm-gray">
            A professional team focused on community, opportunity, and partnership.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="KINDRED people in a professional meeting"
            className="aspect-[21/9] min-h-[220px] w-full object-cover"
          />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-2xl font-semibold text-plum sm:text-3xl">Meet the people</h2>
          <p className="mt-2 max-w-xl text-sm text-warm-gray">
            Select a portrait to view a fuller profile. Placeholder team for Mockup Design #6.
          </p>
          <div className="mt-10">
            <TeamShowcase people={people} />
          </div>
        </div>
      </section>
    </>
  )
}
