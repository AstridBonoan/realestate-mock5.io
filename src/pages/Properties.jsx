import { useMemo, useState } from 'react'
import FeaturedProperty from '../components/FeaturedProperty'
import PropertyCard from '../components/PropertyCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import ScrollReveal from '../components/ScrollReveal'
import { filterOptions, properties } from '../data/properties'

function matchesPrice(property, price) {
  if (!price) return true
  const isRental = property.opportunityType === 'Rental'
  const v = property.priceValue
  if (price === 'under3k') return isRental && v < 3000
  if (price === 'under1m') return !isRental && v < 1000000
  if (price === '1to5m') return !isRental && v >= 1000000 && v <= 5000000
  if (price === 'over5m') return !isRental && v > 5000000
  return true
}

export default function Properties() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [opportunityType, setOpportunityType] = useState('')
  const [price, setPrice] = useState('')
  const [filter, setFilter] = useState('All')
  const [searchTick, setSearchTick] = useState(0)

  const featured = properties.find((p) => p.featured) || properties[0]

  const filtered = useMemo(() => {
    void searchTick
    return properties.filter((p) => {
      if (p.id === featured.id) return false
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.opportunityType.toLowerCase().includes(q)
      const matchesLocation = !location || p.location === location
      const matchesType = !propertyType || p.type === propertyType
      const matchesOpp = !opportunityType || p.opportunityType === opportunityType
      const matchesFilter = filter === 'All' || p.category.includes(filter)
      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesOpp &&
        matchesFilter &&
        matchesPrice(p, price)
      )
    })
  }, [
    query,
    location,
    propertyType,
    opportunityType,
    price,
    filter,
    featured.id,
    searchTick,
  ])

  return (
    <>
      <section className="bg-cream py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Marketplace
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Explore Real Estate Opportunities.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Browse selected properties and opportunities across our growing network.
          </p>
          <div className="mt-8">
            <SearchBar
              query={query}
              setQuery={setQuery}
              location={location}
              setLocation={setLocation}
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              opportunityType={opportunityType}
              setOpportunityType={setOpportunityType}
              price={price}
              setPrice={setPrice}
              onSearch={() => setSearchTick((t) => t + 1)}
            />
          </div>
          <div className="mt-6">
            <FilterBar options={filterOptions} active={filter} onChange={setFilter} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <FeaturedProperty property={featured} />

          <div>
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                Property Marketplace
              </h2>
              <p className="mt-2 text-sm text-muted">
                Showing {filtered.length} mock listings. Illustrative content only.
              </p>
            </ScrollReveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} large={i === 0} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="mt-8 rounded-3xl border border-border bg-surface p-8 text-center text-muted">
                No properties match your filters. Try adjusting search criteria.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
