import { Link } from 'react-router-dom'
import { Heart, Bath, BedDouble, Maximize } from 'lucide-react'
import { useState } from 'react'

export default function PropertyCard({ property, large = false }) {
  const [favorited, setFavorited] = useState(false)

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-80" />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-charcoal shadow-soft">
          {property.opportunityType}
        </span>
        <button
          type="button"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorited}
          onClick={() => setFavorited((v) => !v)}
          className="absolute top-4 right-4 rounded-full bg-white/95 p-2.5 text-muted shadow-soft transition hover:text-emerald"
        >
          <Heart
            size={18}
            className={favorited ? 'fill-emerald text-emerald' : ''}
          />
        </button>
        <span className="absolute bottom-4 left-4 rounded-full bg-emerald px-3 py-1 text-xs font-semibold text-white">
          {property.status}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-bold text-charcoal">
              {property.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{property.location}</p>
          </div>
          <p className="font-display text-lg font-bold text-emerald">{property.price}</p>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          {property.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-muted">
          <span className="rounded-full bg-surface px-3 py-1">{property.type}</span>
          {property.beds != null && (
            <span className="inline-flex items-center gap-1">
              <BedDouble size={14} /> {property.beds} bd
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Bath size={14} /> {property.baths} ba
          </span>
          <span className="inline-flex items-center gap-1">
            <Maximize size={14} /> {property.sqft} sqft
          </span>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:border-emerald hover:bg-emerald hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
