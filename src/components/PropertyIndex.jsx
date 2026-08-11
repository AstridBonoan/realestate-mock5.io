import { Link } from 'react-router-dom'
import PropertyFeature from './PropertyFeature'

export default function PropertyIndex({ properties, filter, onFilterChange, filters }) {
  const featured = properties.find((p) => p.featured) || properties[0]
  const rest = properties.filter((p) => p.id !== featured?.id)

  const matches = (p) => {
    if (filter === 'ALL') return true
    if (filter === 'INVESTMENTS') return p.opportunityType === 'Investment'
    if (filter === 'RENTALS') return p.opportunityType === 'Rental'
    if (filter === 'RESIDENTIAL') return p.type === 'Residential'
    if (filter === 'COMMERCIAL') return p.type === 'Commercial'
    return true
  }

  const filteredRest = rest.filter(matches)
  const showFeatured = featured && matches(featured)
  const twoCol = filteredRest.slice(0, 2)
  const oneLarge = filteredRest[2]
  const threeSmall = filteredRest.slice(3, 6)

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-rule pb-4"
        role="group"
        aria-label="Property filters"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onFilterChange(f)}
            aria-pressed={filter === f}
            className={`text-[12px] font-semibold tracking-[0.16em] uppercase transition ${
              filter === f ? 'text-burgundy' : 'text-muted hover:text-espresso'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {showFeatured && <PropertyFeature property={featured} large />}

        {twoCol.length > 0 && (
          <div className="mb-14 grid gap-10 md:grid-cols-2 md:gap-8">
            {twoCol.map((p) => (
              <PropertyFeature key={p.id} property={p} large={false} />
            ))}
          </div>
        )}

        {oneLarge && <PropertyFeature property={oneLarge} large />}

        {threeSmall.length > 0 && (
          <div className="grid gap-10 sm:grid-cols-3">
            {threeSmall.map((p) => (
              <article key={p.id}>
                <Link
                  to={`/properties/${p.id}`}
                  className="group block text-inherit no-underline"
                >
                  <div className="img-zoom">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-burgundy uppercase">
                    {p.opportunityType}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-espresso group-hover:text-burgundy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {p.location} · {p.type}
                  </p>
                  <span className="editorial-link mt-3 inline-block">View Property →</span>
                </Link>
              </article>
            ))}
          </div>
        )}

        {!showFeatured && filteredRest.length === 0 && (
          <p className="py-16 text-center text-muted">No properties in this index.</p>
        )}
      </div>
    </div>
  )
}
