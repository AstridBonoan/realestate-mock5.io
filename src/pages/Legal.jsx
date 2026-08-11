import { Link } from 'react-router-dom'
import { company } from '../data/company'

function LegalPage({ title, children }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="text-4xl font-extrabold text-plum">{title}</h1>
        <div className="mt-6 space-y-4 text-sm text-warm-gray">{children}</div>
        <Link to="/" className="mt-10 inline-block text-coral">
          Return →
        </Link>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p>Mockup privacy page for {company.name}. Replace before launch.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms">
      <p>Mockup terms for {company.name}. Not a legal agreement.</p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Mockup Design #6 is illustrative. Opportunities, people, and articles are placeholder
        content and do not represent live offerings.
      </p>
    </LegalPage>
  )
}
