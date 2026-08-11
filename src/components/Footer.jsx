import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-lavender">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <p className="text-3xl font-extrabold tracking-tight text-plum sm:text-4xl">
          {company.name}
        </p>
        <p className="mt-3 max-w-md text-lg font-medium text-warm-gray">
          {company.tagline}
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.18em] text-plum uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/#idea" className="hover:text-coral">
                  The Idea
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-coral">
                  The People
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-coral">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-coral">
                  Journal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.18em] text-plum uppercase">
              Get Involved
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/community" className="hover:text-coral">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-coral">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-coral">
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/conversation" className="hover:text-coral">
                  Start A Conversation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-bold tracking-[0.18em] text-plum uppercase">
              Follow
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={company.social.instagram} target="_blank" rel="noreferrer" className="hover:text-coral">
                  Instagram
                </a>
              </li>
              <li>
                <a href={company.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-coral">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={company.social.facebook} target="_blank" rel="noreferrer" className="hover:text-coral">
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
