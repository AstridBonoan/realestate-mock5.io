import { Link, useParams } from 'react-router-dom'
import { Bath, BedDouble, Maximize, MapPin } from 'lucide-react'
import PropertyGallery from '../components/PropertyGallery'
import { getPropertyById } from '../data/properties'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-charcoal">Property Not Found</h1>
        <p className="mt-3 text-muted">This mock listing doesn&apos;t exist.</p>
        <Link to="/properties" className="mt-6 inline-flex text-emerald hover:underline">
          Back to properties
        </Link>
      </section>
    )
  }

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-muted">
          <Link to="/properties" className="text-emerald hover:underline">
            Properties
          </Link>{' '}
          / {property.title}
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <PropertyGallery images={property.images} title={property.title} />

          <div>
            <span className="rounded-full bg-sage-soft px-3 py-1 text-xs font-semibold text-emerald-dark">
              {property.opportunityType} · {property.status}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              {property.title}
            </h1>
            <p className="mt-2 inline-flex items-center gap-1.5 text-muted">
              <MapPin size={16} className="text-emerald" />
              {property.location} · {property.type}
            </p>
            <p className="mt-4 font-display text-3xl font-bold text-emerald">{property.price}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
              {property.beds != null && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5">
                  <BedDouble size={16} /> {property.beds} bedrooms
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5">
                <Bath size={16} /> {property.baths} bathrooms
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5">
                <Maximize size={16} /> {property.sqft} sqft
              </span>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-border bg-cream p-6">
              <h2 className="font-display text-lg font-bold text-charcoal">
                Interested In This Property?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Connect with our team to learn more about this opportunity.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-charcoal">Property Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">{property.overview}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                Opportunity Description
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{property.opportunityDescription}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-charcoal">Features</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold text-charcoal">Key Details</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Type</dt>
                  <dd className="font-medium">{property.type}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Opportunity</dt>
                  <dd className="font-medium">{property.opportunityType}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Availability</dt>
                  <dd className="font-medium text-right">{property.availability}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Status</dt>
                  <dd className="font-medium">{property.status}</dd>
                </div>
              </dl>
            </div>
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
              Disclaimer: Displayed properties and information are illustrative/mockup content.
              Actual opportunities may differ. This page is part of Mockup Design #5 and is not a
              live offering.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
