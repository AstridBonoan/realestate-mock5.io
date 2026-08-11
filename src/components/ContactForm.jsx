import { useState } from 'react'

const inquiryTypes = [
  'General',
  'Membership',
  'Investment',
  'Rental',
  'Partnership',
  'Property Owner',
  'Developer',
  'Other',
]

const fieldClass =
  'w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-sm text-espresso outline-none transition focus:border-burgundy'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    if (!form.inquiryType) next.inquiryType = 'Please select an inquiry type'
    if (!form.subject.trim()) next.subject = 'Required'
    if (!form.message.trim()) next.message = 'Required'
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
          Confirmed
        </p>
        <h3 className="mt-3 font-display text-3xl text-espresso">Message Received</h3>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          Thank you for writing. This is a mockup confirmation—no message was transmitted to a
          server.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            First Name
          </span>
          <input
            className={fieldClass}
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
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
          />
          {errors.lastName && <span className="mt-1 block text-xs text-sienna">{errors.lastName}</span>}
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Email
          </span>
          <input
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
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
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          Inquiry Type
        </span>
        <select
          className={fieldClass}
          value={form.inquiryType}
          onChange={(e) => update('inquiryType', e.target.value)}
        >
          <option value="">Select</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <span className="mt-1 block text-xs text-sienna">{errors.inquiryType}</span>
        )}
      </label>

      <label className="block">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          Subject
        </span>
        <input
          className={fieldClass}
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
        />
        {errors.subject && <span className="mt-1 block text-xs text-sienna">{errors.subject}</span>}
      </label>

      <label className="block">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          Message
        </span>
        <textarea
          rows={5}
          className={`${fieldClass} resize-y`}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
        {errors.message && <span className="mt-1 block text-xs text-sienna">{errors.message}</span>}
      </label>

      <button type="submit" className="editorial-link border-0 bg-transparent p-0">
        Send Message →
      </button>
    </form>
  )
}
