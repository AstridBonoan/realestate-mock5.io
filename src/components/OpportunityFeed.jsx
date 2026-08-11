import { Link } from 'react-router-dom'

export function OpportunityItem({ item }) {
  return (
    <article className="border-t border-line py-8 first:border-t-0 md:py-10">
      <div className="grid gap-5 md:grid-cols-[1fr_1.3fr] md:items-start md:gap-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
            {item.code}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-plum sm:text-3xl">
            {item.type}
          </h3>
          <p className="mt-2 text-sm text-warm-gray">{item.location}</p>
        </div>
        <div>
          <p className="text-base leading-relaxed text-warm-ink">{item.shortDescription}</p>
          <Link to={`/opportunities/${item.id}`} className="text-link mt-5 inline-block">
            View details →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function OpportunityFeed({ items, filter, onFilter }) {
  const cats = ['ALL', 'PROPERTY', 'INVESTMENT', 'RENTAL']
  const list = filter === 'ALL' ? items : items.filter((i) => i.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-4" role="group" aria-label="Opportunity categories">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onFilter(c)}
            aria-pressed={filter === c}
            className={`text-sm font-semibold transition ${
              filter === c ? 'text-plum' : 'text-warm-gray hover:text-plum'
            }`}
          >
            {c.charAt(0) + c.slice(1).toLowerCase()}
          </button>
        ))}
      </div>
      <div className="mt-2 border-b border-line">
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
