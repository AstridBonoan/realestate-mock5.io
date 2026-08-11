import { Link } from 'react-router-dom'

export default function PropertyFeature({ property, large = true }) {
  if (!property) return null

  return (
    <article className={large ? 'mb-14' : ''}>
      <Link to={`/properties/${property.id}`} className="group block text-inherit no-underline">
        <div className="img-zoom">
          <img
            src={property.images[0]}
            alt={property.title}
            className={`w-full object-cover ${large ? 'aspect-[21/9] min-h-[280px]' : 'aspect-[16/10]'}`}
            loading="lazy"
          />
        </div>
        <div className="mt-5 grid gap-4 border-t border-rule pt-5 md:grid-cols-[1.2fr_1fr] md:gap-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-burgundy uppercase">
              {property.opportunityType} · {property.type}
            </p>
            <h3 className="mt-2 font-display text-3xl text-espresso transition group-hover:text-burgundy sm:text-4xl">
              {property.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{property.location}</p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted">{property.shortDescription}</p>
            <p className="mt-3 font-display text-xl text-espresso">{property.price}</p>
            <span className="editorial-link mt-4 inline-block">View Property →</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
