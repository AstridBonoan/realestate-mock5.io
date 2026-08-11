import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import PartnerList from '../components/PartnerList'
import ScrollReveal from '../components/ScrollReveal'
import { partnerTypes } from '../data/content'

export default function Partners() {
  return (
    <>
      <section className="border-b border-rule py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionLabel>Partnerships</SectionLabel>
          <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
            Good opportunities begin with good relationships.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            We are interested in working with property owners, investors, developers, businesses,
            real estate professionals, and organizations who share a long-term view of real estate.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
              Partner Categories
            </h2>
          </ScrollReveal>
          <PartnerList items={partnerTypes} />
          <div className="mt-12 text-center">
            <Link to="/contact" className="editorial-link">
              Become A Partner →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
