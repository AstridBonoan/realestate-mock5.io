import { Link } from 'react-router-dom'

export default function MembershipList({ items }) {
  return (
    <div className="mt-10 divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <div key={item.number} className="focus-row grid gap-2 px-1 py-7 sm:grid-cols-[5rem_1fr] sm:gap-8">
          <span className="focus-num font-display text-3xl text-burgundy">{item.number}</span>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-wide text-espresso sm:text-3xl">
                {item.title}
              </h3>
              <span className="focus-arrow text-terracotta" aria-hidden="true">
                →
              </span>
            </div>
            <p className="focus-desc text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function FocusList({ items }) {
  return (
    <div className="mt-10 divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <Link
          key={item.number}
          to={item.to}
          className="focus-row grid gap-2 px-1 py-8 text-inherit no-underline sm:grid-cols-[5rem_1fr] sm:gap-10"
        >
          <span className="focus-num font-display text-3xl text-burgundy sm:text-4xl">
            {item.number}
          </span>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-wide text-espresso sm:text-3xl md:text-4xl">
                {item.title}
              </h3>
              <span className="focus-arrow text-lg text-terracotta" aria-hidden="true">
                →
              </span>
            </div>
            <p className="focus-desc max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
