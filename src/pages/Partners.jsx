import PartnerPathway from '../components/PartnerPathway'
import { partnerPathways } from '../data/content'

export default function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
          Who we work with
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          We don&apos;t build alone.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-warm-gray">
          Partnerships across ownership, capital, development, and professional services.
        </p>
        <div className="mt-12 border-y border-line">
          {partnerPathways.map((item) => (
            <PartnerPathway key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
