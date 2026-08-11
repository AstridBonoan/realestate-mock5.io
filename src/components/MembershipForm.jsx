import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

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
  goals: '',
  referral: '',
  additional: '',
  agree: false,
}

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
    if (!form.city.trim()) next.city = 'Required'
    if (!form.state.trim()) next.state = 'Required'
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
      <div className="rounded-[2rem] border border-sage bg-sage-soft/40 p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto text-emerald" size={40} />
        <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">
          Application Submitted
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Thank you for your interest. Our team will review your application and contact you
          regarding next steps.
        </p>
      </div>
    )
  }

  const field = (id, label, props = {}) => (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {props.type === 'textarea' ? (
        <textarea
          id={id}
          value={form[id]}
          onChange={(e) => update(id, e.target.value)}
          className="min-h-[96px] w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-emerald focus:bg-white"
          {...props}
          type={undefined}
        />
      ) : (
        <input
          id={id}
          value={form[id]}
          onChange={(e) => update(id, e.target.value)}
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-emerald focus:bg-white"
          {...props}
        />
      )}
      {errors[id] && <span className="mt-1 block text-xs text-red-600">{errors[id]}</span>}
    </label>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-[2rem] border border-border bg-white p-5 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {field('firstName', 'First Name', { autoComplete: 'given-name' })}
        {field('lastName', 'Last Name', { autoComplete: 'family-name' })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {field('city', 'City', { autoComplete: 'address-level2' })}
        {field('state', 'State', { autoComplete: 'address-level1' })}
      </div>
      {field('occupation', 'Occupation')}
      {field('experience', 'Real Estate Experience', { type: 'textarea' })}
      {field('interests', 'Areas of Interest', { type: 'textarea' })}
      {field('goals', 'What are you hoping to gain from membership?', { type: 'textarea' })}
      {field('referral', 'How did you hear about us?')}
      {field('additional', 'Additional Information', { type: 'textarea' })}

      <label className="flex items-start gap-3 text-sm text-ink" htmlFor="agree">
        <input
          id="agree"
          type="checkbox"
          checked={form.agree}
          onChange={(e) => update('agree', e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border text-emerald focus:ring-emerald"
        />
        <span>I agree to be contacted regarding my membership application.</span>
      </label>
      {errors.agree && <span className="block text-xs text-red-600">{errors.agree}</span>}

      <button
        type="submit"
        className="w-full rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark active:scale-[0.99]"
      >
        Submit Application
      </button>
    </form>
  )
}
