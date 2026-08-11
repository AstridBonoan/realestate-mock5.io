import { Link } from 'react-router-dom'
import { company } from '../data/company'

function LegalPage({ title, children }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display text-4xl text-espresso">{title}</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">{children}</div>
        <Link to="/" className="editorial-link mt-10 inline-block">
          Return Home →
        </Link>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p>
        This is a mockup privacy page for {company.name}. Replace with your actual privacy policy
        before launch.
      </p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms">
      <p>
        This is a mockup terms page for {company.name}. It does not constitute a legal agreement.
      </p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Mockup Design #5 is an illustrative website concept. Property listings, team biographies,
        and opportunity details are placeholder content and do not represent real offerings unless
        explicitly stated by the organization.
      </p>
      <p>
        Nothing on this site constitutes investment, legal, or financial advice. Always perform
        independent due diligence.
      </p>
    </LegalPage>
  )
}
