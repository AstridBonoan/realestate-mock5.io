import {
  Users,
  Sparkles,
  HeartHandshake,
  Handshake,
  BookOpen,
  TrendingUp,
} from 'lucide-react'

const icons = {
  Users,
  Sparkles,
  HeartHandshake,
  Handshake,
  BookOpen,
  TrendingUp,
}

export default function MembershipBenefit({ title, description, icon }) {
  const Icon = icons[icon] || Users

  return (
    <article className="rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-sage hover:shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-emerald">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-bold tracking-wide text-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  )
}
