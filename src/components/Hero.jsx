import { Link } from 'react-router-dom'
import { Sparkles, Home, Users, Handshake } from 'lucide-react'

const floatCards = [
  { label: 'New Opportunity', value: 'Harborview Lofts', icon: Sparkles, delay: '' },
  { label: 'Rental Available', value: 'Cedar Court', icon: Home, delay: 'animate-float-delayed' },
  { label: 'Members', value: '500+ growing', icon: Users, delay: 'animate-float-slow' },
  { label: 'Strategic Partner', value: 'Open to connect', icon: Handshake, delay: 'animate-float-delayed' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(167,196,181,0.35),_transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">
            Real Estate Network
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Discover. Connect. Invest.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A modern real estate network connecting members, partners, properties, and
            opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark active:scale-[0.98]"
            >
              Become A Member
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-charcoal transition hover:border-emerald hover:text-emerald active:scale-[0.98]"
            >
              Explore Properties
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-float">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80"
              alt="Modern luxury home exterior representing AETHER property opportunities"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>

          <div className="pointer-events-none absolute inset-0">
            {floatCards.map((card, i) => {
              const Icon = card.icon
              const positions = [
                'top-4 left-3 sm:-left-4',
                'top-[28%] right-2 sm:-right-3',
                'bottom-[28%] left-2 sm:-left-6',
                'bottom-6 right-3 sm:right-0',
              ]
              return (
                <div
                  key={card.label}
                  className={`absolute ${positions[i]} animate-float ${card.delay} pointer-events-auto rounded-2xl border border-white/70 bg-white/95 p-3 shadow-float backdrop-blur-sm sm:p-4`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-soft text-emerald">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-wide text-muted uppercase">
                        {card.label}
                      </p>
                      <p className="text-sm font-semibold text-charcoal">{card.value}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
