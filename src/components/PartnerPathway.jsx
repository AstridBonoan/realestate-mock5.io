import { Link } from 'react-router-dom'

export default function PartnerPathway({ item }) {
  return (
    <section className="border-t border-line py-12 first:border-t-0 md:py-16">
      <div className="grid gap-6 md:grid-cols-[6rem_1fr]">
        <p className="text-4xl font-extrabold text-coral md:text-5xl">{item.number}</p>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-plum sm:text-3xl">
            {item.title}
          </h2>
          <p className="mt-3 max-w-2xl text-warm-gray">{item.description}</p>
          <p className="mt-4 text-sm italic text-rose">{item.example}</p>
          <Link
            to="/partner-with-us"
            className="mt-6 inline-block text-[11px] font-extrabold tracking-[0.16em] text-coral uppercase"
          >
            Start A Conversation →
          </Link>
        </div>
      </div>
    </section>
  )
}
