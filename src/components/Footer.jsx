import { Link } from 'react-router-dom'
import { company } from '../data/company'

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-emerald-light">
              Æ
            </span>
            <span className="font-display text-lg font-bold">{company.name}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {company.description} Building a centralized place for members,
            partners, properties, and growth.
          </p>
          <p className="mt-4 font-display text-sm font-semibold text-sage">
            {company.tagline}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
            Explore
          </h2>
          <ul className="space-y-2.5 text-sm">
            {[
              ['About', '/about'],
              ['Membership', '/membership'],
              ['Properties', '/properties'],
              ['Partners', '/partners'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/75 transition hover:text-emerald-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
            Opportunities
          </h2>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/properties" className="text-white/75 transition hover:text-emerald-light">
                Investments
              </Link>
            </li>
            <li>
              <Link to="/properties" className="text-white/75 transition hover:text-emerald-light">
                Rentals
              </Link>
            </li>
            <li>
              <Link
                to="/submit-opportunity"
                className="text-white/75 transition hover:text-emerald-light"
              >
                Submit Opportunity
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
            Connect
          </h2>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`mailto:${company.email}`} className="transition hover:text-emerald-light">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="transition hover:text-emerald-light">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/15 p-2 transition hover:border-emerald-light hover:text-emerald-light"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-white/15 p-2 transition hover:border-emerald-light hover:text-emerald-light"
              >
                <InstagramIcon size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. Mockup Design #5.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
