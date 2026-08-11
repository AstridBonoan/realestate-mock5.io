import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inquiryTypes = [
  'General Inquiry',
  'Membership',
  'Investment',
  'Rental',
  'Partnership',
  'Property Owner',
  'Developer',
  'Other',
]

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initial)
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
      <div className="rounded-[2rem] border border-sage bg-sage-soft/40 p-8 text-center">
        <CheckCircle2 className="mx-auto text-emerald" size={40} />
        <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">Message Sent</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Thank you for reaching out. This is a mockup confirmation — no backend message was sent.
          Replace with your live contact workflow when ready.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-[2rem] border border-border bg-white p-5 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor="c-firstName">
          <span className="mb-1.5 block text-sm font-medium">First Name</span>
          <input
            id="c-firstName"
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
            autoComplete="given-name"
          />
          {errors.firstName && <span className="mt-1 block text-xs text-red-600">{errors.firstName}</span>}
        </label>
        <label className="block" htmlFor="c-lastName">
          <span className="mb-1.5 block text-sm font-medium">Last Name</span>
          <input
            id="c-lastName"
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
            autoComplete="family-name"
          />
          {errors.lastName && <span className="mt-1 block text-xs text-red-600">{errors.lastName}</span>}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor="c-email">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
            autoComplete="email"
          />
          {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
        </label>
        <label className="block" htmlFor="c-phone">
          <span className="mb-1.5 block text-sm font-medium">Phone</span>
          <input
            id="c-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block" htmlFor="c-inquiry">
        <span className="mb-1.5 block text-sm font-medium">Inquiry Type</span>
        <select
          id="c-inquiry"
          value={form.inquiryType}
          onChange={(e) => update('inquiryType', e.target.value)}
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        >
          <option value="">Select an option</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <span className="mt-1 block text-xs text-red-600">{errors.inquiryType}</span>
        )}
      </label>

      <label className="block" htmlFor="c-subject">
        <span className="mb-1.5 block text-sm font-medium">Subject</span>
        <input
          id="c-subject"
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        />
        {errors.subject && <span className="mt-1 block text-xs text-red-600">{errors.subject}</span>}
      </label>

      <label className="block" htmlFor="c-message">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea
          id="c-message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="min-h-[140px] w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        />
        {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
      >
        Send Message
      </button>
    </form>
  )
}
