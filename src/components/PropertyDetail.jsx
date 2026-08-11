import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function PropertyDetailView({ property }) {
  const [active, setActive] = useState(0)

  if (!property) return null

  return (
    <article>
      <div className="img-zoom">
        <img
          src={property.images[active]}
          alt={`${property.title} — view ${active + 1}`}
          className="aspect-[21/10] min-h-[280px] w-full object-cover"
        />
      </div>
      {property.images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {property.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={active === i}
              className={`h-16 w-24 shrink-0 overflow-hidden border ${
                active === i ? 'border-burgundy' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <header className="mt-10 border-b border-rule pb-8">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-burgundy uppercase">
          {property.opportunityType}
        </p>
        <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
          {property.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span>{property.location}</span>
          <span>{property.type}</span>
          <span className="font-display text-xl text-espresso">{property.price}</span>
        </div>
      </header>

      <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <h2 className="font-display text-2xl text-espresso">Description</h2>
          <p className="mt-4 leading-relaxed text-muted">{property.overview}</p>
          <p className="mt-4 leading-relaxed text-muted">{property.opportunityDescription}</p>
        </div>
        <aside className="border-t border-rule pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <h2 className="font-display text-2xl text-espresso">Property Facts</h2>
          <dl className="mt-5 space-y-4 text-sm">
            {property.beds != null && (
              <div className="flex justify-between gap-4 border-b border-rule pb-3">
                <dt className="text-muted">Bedrooms</dt>
                <dd className="font-medium text-espresso">{property.beds}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4 border-b border-rule pb-3">
              <dt className="text-muted">Bathrooms</dt>
              <dd className="font-medium text-espresso">{property.baths}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-rule pb-3">
              <dt className="text-muted">Square footage</dt>
              <dd className="font-medium text-espresso">{property.sqft}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-rule pb-3">
              <dt className="text-muted">Availability</dt>
              <dd className="text-right font-medium text-espresso">{property.availability}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Property type</dt>
              <dd className="font-medium text-espresso">{property.type}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-14 border-y border-rule py-10 text-center">
        <h2 className="font-display text-3xl text-espresso">Interested In This Property?</h2>
        <Link to="/contact" className="editorial-link mt-5 inline-block">
          Contact Us →
        </Link>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted">
        Disclaimer: Pricing, availability, and property details shown here are illustrative mockup
        content for design purposes. Actual opportunities may differ. This is not a live offering or
        solicitation.
      </p>
    </article>
  )
}
