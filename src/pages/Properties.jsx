import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import PropertyIndex from '../components/PropertyIndex'
import PropertyDetailView from '../components/PropertyDetail'
import ScrollReveal from '../components/ScrollReveal'
import { getPropertyById, properties, propertyFilters } from '../data/properties'

export function Properties() {
  const [filter, setFilter] = useState('ALL')

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal>
          <SectionLabel>Index</SectionLabel>
          <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
            Selected Properties
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            A curated presentation of properties and opportunities within our network.
          </p>
        </ScrollReveal>
        <div className="mt-10">
          <PropertyIndex
            properties={properties}
            filter={filter}
            onFilterChange={setFilter}
            filters={propertyFilters}
          />
        </div>
      </div>
    </section>
  )
}

export function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="font-display text-3xl text-espresso">Property Not Found</h1>
        <Link to="/properties" className="editorial-link mt-6 inline-block">
          Return to Index →
        </Link>
      </section>
    )
  }

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-6 text-xs tracking-wide text-muted">
          <Link to="/properties" className="hover:text-burgundy">
            Selected Properties
          </Link>
          <span className="mx-2">/</span>
          {property.title}
        </p>
        <PropertyDetailView property={property} />
      </div>
    </section>
  )
}
