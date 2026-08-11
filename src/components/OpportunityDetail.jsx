import { Link } from 'react-router-dom'

export default function OpportunityDetailView({ item }) {
  return (
    <article>
      <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">{item.code}</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-plum sm:text-5xl md:text-6xl">
        {item.type}
      </h1>
      <p className="mt-3 text-warm-gray">{item.location}</p>

      <img
        src={item.image}
        alt={`${item.type} in ${item.location}`}
        className="mt-10 aspect-[21/9] min-h-[240px] w-full rounded-[2rem] object-cover"
      />

      <section className="mt-14">
        <h2 className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
          The Opportunity
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-warm-ink">{item.opportunity}</p>
      </section>

      <section className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            The Property
          </h2>
          <p className="mt-4 text-warm-gray">{item.property}</p>
          <dl className="mt-6 space-y-3 text-sm">
            {item.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-warm-gray">{k}</dt>
                <dd className="font-semibold text-plum">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            Why It Matters
          </h2>
          <p className="mt-4 text-warm-gray">{item.whyItMatters}</p>
        </div>
      </section>

      <section className="mt-14 bg-lavender px-6 py-12 text-center sm:px-10">
        <h2 className="text-3xl font-extrabold text-plum">Next Step</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-warm-gray">
          Ready to explore this conversation? Reach out through KINDRED.
        </p>
        <Link
          to="/conversation"
          className="mt-6 inline-block text-sm font-extrabold tracking-[0.14em] text-coral uppercase"
        >
          Start A Conversation →
        </Link>
      </section>

      <p className="mt-8 text-xs text-warm-gray">
        Disclaimer: Opportunity details are illustrative mockup content. Actual availability,
        pricing, and terms may differ. Not a live offering or solicitation.
      </p>
    </article>
  )
}
