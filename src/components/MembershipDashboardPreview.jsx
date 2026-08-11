import { properties } from '../data/properties'

export default function MembershipDashboardPreview() {
  const cards = properties.slice(0, 2)

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-charcoal p-4 shadow-float sm:p-6">
      <div className="rounded-[1.5rem] bg-gradient-to-br from-charcoal-soft to-charcoal p-4 sm:p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.14em] text-sage uppercase">Member Preview</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-white">
              Welcome, Jordan Lee
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Visual marketing mockup — not a live authenticated dashboard.
            </p>
          </div>
          <span className="rounded-full bg-emerald/20 px-3 py-1 text-xs font-semibold text-emerald-light">
            Membership Status: ACTIVE
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['Network', '125 Connections'],
            ['Opportunities', '12 Available'],
            ['Upcoming', '3 Events'],
          ].map(([label, value], i) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <p className="text-xs text-white/50">{label}</p>
              <p className="mt-1 font-display text-lg font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white/80">Recent Opportunities</h4>
            <div className="space-y-3">
              {cards.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <img
                    src={p.images[0]}
                    alt=""
                    className="h-16 w-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{p.title}</p>
                    <p className="text-xs text-white/50">{p.location}</p>
                    <p className="mt-1 text-xs font-medium text-emerald-light">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white/80">Recent Connections</h4>
            <div className="space-y-3">
              {[
                ['Avery Kim', 'Investor'],
                ['Noah Patel', 'Property Owner'],
                ['Sam Rivera', 'Developer'],
              ].map(([name, role]) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/30 text-sm font-bold text-emerald-light">
                    {name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-white/50">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
