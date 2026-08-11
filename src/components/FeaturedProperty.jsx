import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function FeaturedProperty({ property }) {
  if (!property) return null

  return (
    <ScrollReveal>
      <section className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] sm:min-h-[360px]">
            <img
              src={property.images[0]}
              alt={property.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald uppercase">
              Featured Opportunity
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              {property.title}
            </h2>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={16} className="text-emerald" />
              {property.location} · {property.type}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              {property.overview}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-surface p-4">
                <dt className="text-muted">Price / Rate</dt>
                <dd className="mt-1 font-display text-lg font-bold text-emerald">
                  {property.price}
                </dd>
              </div>
              <div className="rounded-2xl bg-surface p-4">
                <dt className="text-muted">Status</dt>
                <dd className="mt-1 font-display text-lg font-bold text-charcoal">
                  {property.status}
                </dd>
              </div>
            </dl>
            <Link
              to={`/properties/${property.id}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"
            >
              View Opportunity
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
