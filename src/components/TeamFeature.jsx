import { useState } from 'react'

export function TeamMember({ member, expanded, onToggle }) {
  return (
    <article className="border-b border-rule last:border-b-0 sm:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full text-left"
      >
        <div className="img-zoom">
          <img
            src={member.image}
            alt={member.name}
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
        <h3 className="mt-4 font-display text-xl text-espresso">{member.name}</h3>
        <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-burgundy uppercase">
          {member.position}
        </p>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          expanded ? 'mt-3 max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 text-sm leading-relaxed text-muted">{member.bio}</p>
      </div>
    </article>
  )
}

export default function TeamFeature({ members }) {
  const featured = members.find((m) => m.featured) || members[0]
  const others = members.filter((m) => m.id !== featured.id)
  const [openId, setOpenId] = useState(null)

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-end">
        <div className="img-zoom">
          <img
            src={featured.image}
            alt={featured.name}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="md:pb-4">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-burgundy uppercase">
            Featured
          </p>
          <h3 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">{featured.name}</h3>
          <p className="mt-2 text-sm font-medium tracking-wide text-terracotta uppercase">
            {featured.position}
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {featured.bio}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((m) => (
          <TeamMember
            key={m.id}
            member={m}
            expanded={openId === m.id}
            onToggle={() => setOpenId((id) => (id === m.id ? null : m.id))}
          />
        ))}
      </div>
    </div>
  )
}
