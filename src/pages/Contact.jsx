import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import { company } from '../data/company'

export default function Contact() {
  return (
    <>
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-emerald uppercase">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Let&apos;s Connect.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
            Have a question, property, opportunity, or partnership idea? We&apos;d like to hear from
            you.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <ScrollReveal>
            <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-charcoal">Contact Information</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 text-emerald" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a href={`mailto:${company.email}`} className="text-muted hover:text-emerald">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 text-emerald" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <a
                      href={`tel:${company.phone.replace(/\D/g, '')}`}
                      className="text-muted hover:text-emerald"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 text-emerald" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Location</p>
                    <p className="text-muted">{company.location}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 text-emerald" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Business Hours</p>
                    <p className="text-muted">{company.hours}</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
