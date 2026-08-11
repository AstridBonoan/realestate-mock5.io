function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  )
}

export default function TeamMember({ member, variant = 'standard' }) {
  if (variant === 'featured') {
    return (
      <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card md:grid md:grid-cols-2">
        <div className="relative min-h-[280px]">
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-emerald uppercase">
            Featured
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold text-charcoal">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted">{member.position}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">{member.bio}</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-emerald hover:text-emerald"
          >
            <LinkedInIcon size={16} /> LinkedIn
          </a>
        </div>
      </article>
    )
  }

  if (variant === 'horizontal') {
    return (
      <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft sm:flex-row">
        <img
          src={member.image}
          alt={member.name}
          className="h-48 w-full object-cover sm:h-auto sm:w-44"
        />
        <div className="flex flex-1 flex-col justify-center p-5">
          <h3 className="font-display text-xl font-bold text-charcoal">{member.name}</h3>
          <p className="mt-1 text-sm text-emerald">{member.position}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">{member.bio}</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-4 inline-flex w-fit text-muted transition hover:text-emerald"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </article>
    )
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <img
        src={member.image}
        alt={member.name}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-charcoal">{member.name}</h3>
        <p className="mt-1 text-sm text-emerald">{member.position}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">{member.bio}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-4 inline-flex text-muted transition hover:text-emerald"
        >
          <LinkedInIcon size={18} />
        </a>
      </div>
    </article>
  )
}
