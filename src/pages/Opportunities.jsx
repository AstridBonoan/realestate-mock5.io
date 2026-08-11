import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import OpportunityFeed from '../components/OpportunityFeed'
import OpportunityDetailView from '../components/OpportunityDetail'
import { getOpportunityById, opportunities } from '../data/opportunities'

export function Opportunities() {
  const [filter, setFilter] = useState('ALL')

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">Opportunities</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          What&apos;s happening
        </h1>
        <p className="mt-5 max-w-2xl text-base text-warm-gray">
          A curated feed of property, investment, and rental conversations across the network.
        </p>
        <div className="mt-12">
          <OpportunityFeed items={opportunities} filter={filter} onFilter={setFilter} />
        </div>
      </div>
    </section>
  )
}

export function OpportunityDetail() {
  const { id } = useParams()
  const item = getOpportunityById(id)

  if (!item) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="text-2xl font-semibold text-plum">Not found</h1>
        <Link to="/opportunities" className="text-link mt-6 inline-block">
          Back to opportunities →
        </Link>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <OpportunityDetailView item={item} />
      </div>
    </section>
  )
}
