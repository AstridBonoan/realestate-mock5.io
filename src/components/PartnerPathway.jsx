import { Link } from 'react-router-dom'

export default function PartnerPathway({ item }) {
  return (
    <section className="border-t border-line py-10 first:border-t-0 md:py-12">
      <div className="grid gap-5 md:grid-cols-[5rem_1fr] md:gap-8">
        <p className="text-2xl font-semibold text-coral md:text-3xl">{item.number}</p>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-plum sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-warm-gray">
            {item.description}
          </p>
          <p className="mt-3 text-sm text-rose italic">{item.example}</p>
          <Link to="/partner-with-us" className="text-link mt-5 inline-block">
            Start a conversation →
          </Link>
        </div>
      </div>
    </section>
  )
}
