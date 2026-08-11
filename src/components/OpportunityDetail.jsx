import { Link } from 'react-router-dom'

export default function OpportunityDetailView({ item }) {
  return (
    <article>
      <p className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">{item.code}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
        {item.type}
      </h1>
      <p className="mt-3 text-warm-gray">{item.location}</p>

      <img
        src={item.image}
        alt={`${item.type} in ${item.location}`}
        className="mt-10 aspect-[21/9] min-h-[240px] w-full object-cover"
      />

      <section className="mt-12">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
          The opportunity
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-warm-ink">{item.opportunity}</p>
      </section>

      <section className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
            The property
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-warm-gray">{item.property}</p>
          <dl className="mt-6 space-y-3 text-sm">
            {item.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-warm-gray">{k}</dt>
                <dd className="font-medium text-plum">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
            Why it matters
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-warm-gray">{item.whyItMatters}</p>
        </div>
      </section>

      <section className="mt-14 bg-lavender px-6 py-12 text-center sm:px-10">
        <h2 className="text-2xl font-semibold text-plum">Next step</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-warm-gray">
          Ready to explore this conversation? Reach out through KINDRED.
        </p>
        <Link to="/conversation" className="btn-primary mt-6 inline-flex">
          Start a conversation
        </Link>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-warm-gray">
        Disclaimer: Opportunity details are illustrative mockup content. Actual availability,
        pricing, and terms may differ. Not a live offering or solicitation.
      </p>
    </article>
  )
}
