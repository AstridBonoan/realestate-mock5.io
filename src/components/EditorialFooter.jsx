import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function EditorialFooter() {
  return (
    <footer className="border-t border-rule bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <p className="font-display text-4xl text-espresso sm:text-5xl">{company.name}</p>
        <p className="mt-4 max-w-lg font-display text-2xl text-burgundy italic sm:text-3xl">
          {company.tagline}
        </p>

        <div className="mt-12 grid gap-10 border-t border-rule pt-10 sm:grid-cols-3">
          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['About', '/about'],
                ['Membership', '/membership'],
                ['Properties', '/properties'],
                ['Partners', '/partners'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-ink transition hover:text-burgundy">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
              Connect
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-burgundy">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="hover:text-burgundy">
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-burgundy"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-burgundy"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-burgundy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-burgundy">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-burgundy">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {company.fullName}. Mockup Design #5.
          </p>
          <p>Editorial mockup — illustrative content only.</p>
        </div>
      </div>
    </footer>
  )
}
