import ContactForm from '../components/ContactForm'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'
import { company } from '../data/company'

export default function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
            Let&apos;s Talk.
          </h1>
        </ScrollReveal>

        <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <p className="max-w-md font-display text-2xl leading-snug text-espresso sm:text-3xl">
              Have a property, partnership, membership question, or opportunity to discuss?
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`} className="text-espresso hover:text-burgundy">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${company.phone.replace(/\D/g, '')}`}
                    className="text-espresso hover:text-burgundy"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-espresso">{company.location}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  Hours
                </dt>
                <dd className="mt-1 text-espresso">{company.hours}</dd>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
