import { useState } from 'react'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  occupation: '',
  experience: '',
  interests: '',
  why: '',
  referral: '',
  additional: '',
  agree: false,
}

const fieldClass =
  'w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-sm text-espresso outline-none transition focus:border-burgundy'

export default function MembershipForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    if (!form.phone.trim()) next.phone = 'Required'
    if (!form.why.trim()) next.why = 'Required'
    if (!form.agree) next.agree = 'Please agree to be contacted'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-rule bg-parchment px-6 py-12 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-burgundy uppercase">
          Received
        </p>
        <h3 className="mt-3 font-display text-3xl text-espresso">Application Submitted</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Thank you for your interest in Ashlar. Our team will review your application and be in
          touch regarding next steps. This is a mockup confirmation—no backend submission occurred.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            First Name
          </span>
          <input
            className={fieldClass}
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            autoComplete="given-name"
          />
          {errors.firstName && <span className="mt-1 block text-xs text-sienna">{errors.firstName}</span>}
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Last Name
          </span>
          <input
            className={fieldClass}
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            autoComplete="family-name"
          />
          {errors.lastName && <span className="mt-1 block text-xs text-sienna">{errors.lastName}</span>}
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Email
          </span>
          <input
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
          />
          {errors.email && <span className="mt-1 block text-xs text-sienna">{errors.email}</span>}
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Phone
          </span>
          <input
            type="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <span className="mt-1 block text-xs text-sienna">{errors.phone}</span>}
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            City
          </span>
          <input
            className={fieldClass}
            value={form.city}
            onChange={(e) => update('city', e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            State
          </span>
          <input
            className={fieldClass}
            value={form.state}
            onChange={(e) => update('state', e.target.value)}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          Occupation
        </span>
        <input
          className={fieldClass}
          value={form.occupation}
          onChange={(e) => update('occupation', e.target.value)}
        />
      </label>

      {[
        ['experience', 'Real Estate Experience'],
        ['interests', 'Areas of Interest'],
        ['why', 'Why would you like to become a member?'],
        ['referral', 'How did you hear about us?'],
        ['additional', 'Additional Information'],
      ].map(([key, label]) => (
        <label key={key} className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            {label}
          </span>
          <textarea
            rows={3}
            className={`${fieldClass} resize-y`}
            value={form[key]}
            onChange={(e) => update(key, e.target.value)}
          />
          {errors[key] && <span className="mt-1 block text-xs text-sienna">{errors[key]}</span>}
        </label>
      ))}

      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => update('agree', e.target.checked)}
          className="mt-1 accent-burgundy"
        />
        <span>I agree to be contacted regarding my application.</span>
      </label>
      {errors.agree && <span className="block text-xs text-sienna">{errors.agree}</span>}

      <button type="submit" className="editorial-link border-0 bg-transparent p-0">
        Submit Application →
      </button>
    </form>
  )
}
