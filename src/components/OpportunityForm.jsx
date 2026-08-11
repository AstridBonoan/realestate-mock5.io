import { useState } from 'react'
import { CheckCircle2, Upload } from 'lucide-react'

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  propertyType: '',
  opportunityType: '',
  description: '',
  value: '',
  additional: '',
}

export default function OpportunityForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    if (!form.address.trim()) next.address = 'Required'
    if (!form.propertyType) next.propertyType = 'Required'
    if (!form.opportunityType) next.opportunityType = 'Required'
    if (!form.description.trim()) next.description = 'Required'
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
          Opportunity Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Thank you for submitting your opportunity. Our team will review the details and follow up
          if there is a potential fit within the network. This is a mockup confirmation — no files
          were uploaded.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-[2rem] border border-border bg-white p-5 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor="o-name">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input
            id="o-name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          />
          {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="block" htmlFor="o-company">
          <span className="mb-1.5 block text-sm font-medium">Company</span>
          <input
            id="o-company"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor="o-email">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            id="o-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          />
          {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
        </label>
        <label className="block" htmlFor="o-phone">
          <span className="mb-1.5 block text-sm font-medium">Phone</span>
          <input
            id="o-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          />
        </label>
      </div>

      <label className="block" htmlFor="o-address">
        <span className="mb-1.5 block text-sm font-medium">Property Address</span>
        <input
          id="o-address"
          value={form.address}
          onChange={(e) => update('address', e.target.value)}
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        />
        {errors.address && <span className="mt-1 block text-xs text-red-600">{errors.address}</span>}
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" htmlFor="o-ptype">
          <span className="mb-1.5 block text-sm font-medium">Property Type</span>
          <select
            id="o-ptype"
            value={form.propertyType}
            onChange={(e) => update('propertyType', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Select</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Multifamily</option>
            <option>Land / Development</option>
            <option>Mixed-Use</option>
          </select>
          {errors.propertyType && (
            <span className="mt-1 block text-xs text-red-600">{errors.propertyType}</span>
          )}
        </label>
        <label className="block" htmlFor="o-otype">
          <span className="mb-1.5 block text-sm font-medium">Opportunity Type</span>
          <select
            id="o-otype"
            value={form.opportunityType}
            onChange={(e) => update('opportunityType', e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Select</option>
            <option>Investment</option>
            <option>Rental</option>
            <option>Sale</option>
            <option>Partnership</option>
            <option>Development</option>
          </select>
          {errors.opportunityType && (
            <span className="mt-1 block text-xs text-red-600">{errors.opportunityType}</span>
          )}
        </label>
      </div>

      <label className="block" htmlFor="o-desc">
        <span className="mb-1.5 block text-sm font-medium">Description</span>
        <textarea
          id="o-desc"
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          className="min-h-[110px] w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        />
        {errors.description && (
          <span className="mt-1 block text-xs text-red-600">{errors.description}</span>
        )}
      </label>

      <label className="block" htmlFor="o-value">
        <span className="mb-1.5 block text-sm font-medium">Estimated Value</span>
        <input
          id="o-value"
          value={form.value}
          onChange={(e) => update('value', e.target.value)}
          className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          placeholder="$"
        />
      </label>

      <label className="block" htmlFor="o-additional">
        <span className="mb-1.5 block text-sm font-medium">Additional Information</span>
        <textarea
          id="o-additional"
          value={form.additional}
          onChange={(e) => update('additional', e.target.value)}
          className="min-h-[96px] w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
        />
      </label>

      <div>
        <span className="mb-1.5 block text-sm font-medium">Upload Property Images</span>
        <label
          htmlFor="o-upload"
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-4 py-8 text-center transition hover:border-emerald hover:bg-sage-soft/40"
        >
          <Upload className="text-emerald" size={22} />
          <span className="mt-2 text-sm font-medium text-ink">
            {fileName || 'Choose images (visual only — no upload)'}
          </span>
          <span className="mt-1 text-xs text-muted">Mockup field. Files stay on your device.</span>
          <input
            id="o-upload"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => {
              const files = e.target.files
              setFileName(files?.length ? `${files.length} file(s) selected` : '')
            }}
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
      >
        Submit Opportunity
      </button>
    </form>
  )
}
