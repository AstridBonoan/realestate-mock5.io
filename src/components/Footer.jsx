import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-lavender">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.08em] text-plum uppercase">
              {company.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-warm-gray">
              {company.tagline} A professional community connecting people, property, and
              opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-plum uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-warm-gray">
              <li>
                <Link to="/#idea" className="hover:text-plum">
                  The Idea
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-plum">
                  The People
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-plum">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-plum">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-plum uppercase">
              Get Involved
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-warm-gray">
              <li>
                <Link to="/community" className="hover:text-plum">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-plum">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-plum">
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/conversation" className="hover:text-plum">
                  Conversation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.12em] text-plum uppercase">
              Follow
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-warm-gray">
              <li>
                <a href={company.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-plum">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={company.social.instagram} target="_blank" rel="noreferrer" className="hover:text-plum">
                  Instagram
                </a>
              </li>
              <li>
                <a href={company.social.facebook} target="_blank" rel="noreferrer" className="hover:text-plum">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-warm-gray sm:flex-row sm:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Mockup Design #6.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-plum">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-plum">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-plum">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
