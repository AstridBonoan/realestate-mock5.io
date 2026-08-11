import { useState } from 'react'

const field =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base outline-none focus:border-coral'

export default function PartnershipForm() {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    orgType: '',
    partnershipType: '',
    bring: '',
    accomplish: '',
    propertyInfo: '',
    additional: '',
  })
  const [errors, setErrors] = useState({})
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    if (!form.bring.trim()) next.bring = 'Required'
    setErrors(next)
    if (Object.keys(next).length) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="bg-lavender p-10 text-center">
        <h3 className="text-2xl font-semibold text-plum">Inquiry received</h3>
        <p className="mt-3 text-sm text-warm-gray">
          Thank you for your partnership inquiry. This is a mockup confirmation — no backend
          submission occurred.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {[
        ['name', 'Name'],
        ['company', 'Company'],
        ['email', 'Email', 'email'],
        ['phone', 'Phone', 'tel'],
        ['orgType', 'Organization Type'],
        ['partnershipType', 'Partnership Type'],
      ].map(([key, label, type = 'text']) => (
        <label key={key} className="block">
          <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
            {label}
          </span>
          <input
            type={type}
            className={field}
            value={form[key]}
            onChange={(e) => update(key, e.target.value)}
          />
          {errors[key] && <span className="text-xs text-coral">{errors[key]}</span>}
        </label>
      ))}
      {[
        ['bring', 'What do you bring to the table?'],
        ['accomplish', 'What are you looking to accomplish?'],
        ['propertyInfo', 'Property / Opportunity Information'],
        ['additional', 'Additional Information'],
      ].map(([key, label]) => (
        <label key={key} className="block">
          <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
            {label}
          </span>
          <textarea
            rows={3}
            className={`${field} resize-y`}
            value={form[key]}
            onChange={(e) => update(key, e.target.value)}
          />
          {errors[key] && <span className="text-xs text-coral">{errors[key]}</span>}
        </label>
      ))}
      <button
        type="submit"
        className="btn-primary"
      >
        Submit partnership inquiry
      </button>
    </form>
  )
}
