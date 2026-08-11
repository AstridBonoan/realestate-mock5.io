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
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Feed</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-plum sm:text-6xl">
          WHAT&apos;S HAPPENING
        </h1>
        <p className="mt-5 max-w-2xl text-warm-gray">
          Announcements across property, investment, and rental — told as stories, not listings.
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
        <h1 className="text-3xl font-extrabold text-plum">Not Found</h1>
        <Link to="/opportunities" className="mt-6 inline-block text-coral">
          Back to feed →
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
