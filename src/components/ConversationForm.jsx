import { useState } from 'react'

const reasons = [
  { id: 'join', label: 'I Want To Join' },
  { id: 'property', label: 'I Have A Property' },
  { id: 'partner', label: 'I Want To Partner' },
  { id: 'question', label: 'I Have A Question' },
]

const field =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base outline-none focus:border-coral'

export default function ConversationForm() {
  const [reason, setReason] = useState('join')
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    propertyType: '',
    partnershipType: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (reason !== 'property' && reason !== 'partner') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    } else if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Valid email required'
    }
    if (reason === 'join' && !form.email) next.email = 'Valid email required'
    if (reason === 'question') {
      if (!form.email) next.email = 'Valid email required'
      if (!form.subject.trim()) next.subject = 'Required'
    }
    if (!form.message.trim()) next.message = 'Required'
    setErrors(next)
    if (Object.keys(next).length) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="border border-line bg-lavender p-10 text-center">
        <h3 className="text-2xl font-semibold text-plum">Conversation started</h3>
        <p className="mt-3 text-sm text-warm-gray">
          Thank you — this is a mockup confirmation. No message was sent to a server.
        </p>
      </div>
    )
  }

  return (
    <div>
      <InquirySelector reason={reason} setReason={setReason} />
      <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
        <label className="block">
          <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
            Name
          </span>
          <input className={field} value={form.name} onChange={(e) => update('name', e.target.value)} />
          {errors.name && <span className="text-xs text-coral">{errors.name}</span>}
        </label>

        {(reason === 'join' || reason === 'question') && (
          <>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Email
              </span>
              <input
                type="email"
                className={field}
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
              />
              {errors.email && <span className="text-xs text-coral">{errors.email}</span>}
            </label>
            {reason === 'join' && (
              <label className="block">
                <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                  Phone
                </span>
                <input
                  type="tel"
                  className={field}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>
            )}
            {reason === 'question' && (
              <label className="block">
                <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                  Subject
                </span>
                <input
                  className={field}
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                />
                {errors.subject && <span className="text-xs text-coral">{errors.subject}</span>}
              </label>
            )}
          </>
        )}

        {reason === 'property' && (
          <>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Company
              </span>
              <input
                className={field}
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Property Location
              </span>
              <input
                className={field}
                value={form.location}
                onChange={(e) => update('location', e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Property Type
              </span>
              <input
                className={field}
                value={form.propertyType}
                onChange={(e) => update('propertyType', e.target.value)}
              />
            </label>
          </>
        )}

        {reason === 'partner' && (
          <>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Company
              </span>
              <input
                className={field}
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                Partnership Type
              </span>
              <input
                className={field}
                value={form.partnershipType}
                onChange={(e) => update('partnershipType', e.target.value)}
              />
            </label>
          </>
        )}

        <label className="block">
          <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
            Message
          </span>
          <textarea
            rows={5}
            className={`${field} resize-y`}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
          />
          {errors.message && <span className="text-xs text-coral">{errors.message}</span>}
        </label>

        <button
          type="submit"
          className="btn-primary"
        >
          Start conversation
        </button>
      </form>
    </div>
  )
}

export function InquirySelector({ reason, setReason }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Conversation reason">
      {reasons.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => setReason(r.id)}
          aria-pressed={reason === r.id}
          className={`border px-4 py-5 text-left text-sm font-bold transition ${
            reason === r.id
              ? 'border-plum bg-plum text-white'
              : 'border-line text-plum hover:border-plum'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}
