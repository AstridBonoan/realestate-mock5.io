import { Link } from 'react-router-dom'
import { company } from '../data/company'

function LegalPage({ title, children }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">{title}</h1>
        <div className="prose-sm mt-6 space-y-4 text-muted">{children}</div>
        <Link to="/" className="mt-10 inline-flex text-sm font-semibold text-emerald hover:underline">
          Back to home
        </Link>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p>
        This is a mockup privacy page for {company.name}. In a production environment, this page
        would describe how personal information is collected, used, and protected.
      </p>
      <p>Replace this placeholder with your actual privacy policy before launch.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms">
      <p>
        This is a mockup terms page for {company.name}. It does not constitute a legal agreement.
      </p>
      <p>Replace this placeholder with your actual terms of use before launch.</p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Mockup Design #5 is an illustrative website concept. Property listings, statistics,
        testimonials, team biographies, and opportunity details are placeholder content and do not
        represent real offerings, guarantees, or affiliations unless explicitly stated otherwise by
        the organization.
      </p>
      <p>
        Always perform independent due diligence. Nothing on this site constitutes investment,
        legal, or financial advice.
      </p>
    </LegalPage>
  )
}
