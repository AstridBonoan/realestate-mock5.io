import { Link } from 'react-router-dom'

export function OpportunityItem({ item }) {
  return (
    <article className="border-t border-line py-8 first:border-t-0 md:py-10">
      <div className="grid gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-10 lg:grid-cols-[minmax(0,340px)_1fr]">
        <Link to={`/opportunities/${item.id}`} className="block overflow-hidden">
          <img
            src={item.image}
            alt={`${item.type} in ${item.location}`}
            className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
        </Link>
        <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:gap-8">
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
      </div>
    </article>
  )
}

export default function OpportunityFeed({ items, filter, onFilter }) {
  const cats = ['ALL', 'PROPERTY', 'INVESTMENT', 'RENTAL']
  const list = filter === 'ALL' ? items : items.filter((i) => i.category === filter)

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-4"
        role="group"
        aria-label="Opportunity categories"
      >
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
