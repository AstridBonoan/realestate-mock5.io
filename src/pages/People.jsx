import TeamShowcase from '../components/TeamShowcase'
import { people } from '../data/content'

export default function People() {
  return (
    <>
      <section className="bg-lavender py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            03 — The People
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-plum sm:text-5xl md:text-6xl">
            Built By People Who Believe In The Power Of Relationships.
          </h1>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="KINDRED people gathering in conversation"
            className="aspect-[21/9] min-h-[240px] w-full object-cover"
          />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-extrabold text-plum sm:text-4xl">Meet The People</h2>
          <p className="mt-3 max-w-xl text-warm-gray">
            Tap a portrait to open a fuller profile. Placeholder people for Mockup Design #6.
          </p>
          <div className="mt-10">
            <TeamShowcase people={people} />
          </div>
        </div>
      </section>
    </>
  )
}
