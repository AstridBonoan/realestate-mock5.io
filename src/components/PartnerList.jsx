import { Link } from 'react-router-dom'

export default function PartnerList({ items, linkTo = '/contact' }) {
  return (
    <div className="mt-10 divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <Link
          key={item.number}
          to={linkTo}
          className="focus-row grid gap-3 px-1 py-8 text-inherit no-underline sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8"
        >
          <span className="focus-num font-display text-3xl text-burgundy">{item.number}</span>
          <div>
            <h3 className="font-display text-2xl text-espresso sm:text-3xl">{item.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </div>
          <span className="focus-arrow pt-2 text-terracotta" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  )
}
