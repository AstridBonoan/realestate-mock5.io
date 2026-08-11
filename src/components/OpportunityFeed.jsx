import { Link } from 'react-router-dom'

export function OpportunityItem({ item }) {
  return (
    <article className="border-t border-line py-10 first:border-t-0">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
            {item.code}
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-plum sm:text-4xl">
            {item.type}
          </h3>
          <p className="mt-2 text-sm font-medium text-warm-gray">{item.location}</p>
        </div>
        <div>
          <p className="text-base text-warm-ink">{item.shortDescription}</p>
          <Link
            to={`/opportunities/${item.id}`}
            className="mt-5 inline-block text-[11px] font-extrabold tracking-[0.16em] text-coral uppercase"
          >
            {item.cta}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function OpportunityFeed({ items, filter, onFilter }) {
  const cats = ['ALL', 'PROPERTY', 'INVESTMENT', 'RENTAL']
  const list =
    filter === 'ALL' ? items : items.filter((i) => i.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Opportunity categories">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onFilter(c)}
            aria-pressed={filter === c}
            className={`text-sm font-extrabold tracking-[0.14em] uppercase ${
              filter === c ? 'text-coral' : 'text-warm-gray hover:text-plum'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-6 border-y border-line">
        {list.map((item) => (
          <OpportunityItem key={item.id} item={item} />
        ))}
        {list.length === 0 && (
          <p className="py-12 text-center text-warm-gray">No opportunities in this category.</p>
        )}
      </div>
    </div>
  )
}
