import PartnerPathway from '../components/PartnerPathway'
import { partnerPathways } from '../data/content'

export default function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
          Who We Work With
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-plum sm:text-5xl md:text-6xl">
          WE DON&apos;T BUILD ALONE.
        </h1>
        <div className="mt-12 border-y border-line">
          {partnerPathways.map((item) => (
            <PartnerPathway key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
