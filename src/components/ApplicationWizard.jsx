import { useState } from 'react'

const connections = [
  'Investor',
  'Property Owner',
  'Professional',
  'Entrepreneur',
  'Developer',
  'Interested Individual',
  'Other',
]

const lookingFor = [
  'Networking',
  'Investment Opportunities',
  'Partnerships',
  'Real Estate Knowledge',
  'Rental Opportunities',
  'Community',
]

const field =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base outline-none focus:border-coral'

export default function ApplicationWizard() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    connection: '',
    looking: [],
    more: '',
    emailPref: true,
    phonePref: false,
  })
  const [errors, setErrors] = useState({})

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const toggleLooking = (item) => {
    setForm((f) => ({
      ...f,
      looking: f.looking.includes(item)
        ? f.looking.filter((x) => x !== item)
        : [...f.looking, item],
    }))
  }

  const validateStep = () => {
    const next = {}
    if (step === 1) {
      if (!form.name.trim()) next.name = 'Required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email required'
    }
    if (step === 2 && !form.connection) next.connection = 'Select one'
    if (step === 3 && form.looking.length === 0) next.looking = 'Select at least one'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const nextStep = () => {
    if (!validateStep()) return
    if (step < 5) setStep((s) => s + 1)
    else setDone(true)
  }

  if (done) {
    return (
      <div className="py-16 text-center">
        <p className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">Received</p>
        <h2 className="mt-4 text-3xl font-semibold text-plum">Thank you.</h2>
        <p className="mt-4 text-warm-gray">Your application has been received.</p>
        <p className="mt-2 text-xs text-warm-gray">
          Mockup confirmation — no backend submission occurred.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
        {String(step).padStart(2, '0')} / 05
      </p>
      <div className="mt-4 flex gap-2" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-1 flex-1 ${n <= step ? 'bg-coral' : 'bg-line'}`}
          />
        ))}
      </div>

      <div className="mt-10">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-plum">Tell us about yourself</h2>
            {[
              ['name', 'Name'],
              ['email', 'Email'],
              ['phone', 'Phone'],
              ['city', 'City'],
              ['state', 'State'],
            ].map(([key, label]) => (
              <label key={key} className="block">
                <span className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase">
                  {label}
                </span>
                <input
                  className={field}
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                  type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                />
                {errors[key] && <span className="text-xs text-coral">{errors[key]}</span>}
              </label>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl font-extrabold text-plum">
              What&apos;s Your Connection To Real Estate?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {connections.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => update('connection', c)}
                  className={`border px-4 py-3 text-sm font-semibold transition ${
                    form.connection === c
                      ? 'border-coral bg-coral text-white'
                      : 'border-line text-plum hover:border-plum'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {errors.connection && (
              <p className="mt-3 text-xs text-coral">{errors.connection}</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl font-extrabold text-plum">What Are You Looking For?</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {lookingFor.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleLooking(c)}
                  aria-pressed={form.looking.includes(c)}
                  className={`border px-4 py-3 text-sm font-semibold transition ${
                    form.looking.includes(c)
                      ? 'border-plum bg-plum text-white'
                      : 'border-line text-plum hover:border-plum'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {errors.looking && <p className="mt-3 text-xs text-coral">{errors.looking}</p>}
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-3xl font-extrabold text-plum">Tell Us More</h2>
            <label className="mt-6 block">
              <span className="sr-only">Tell us more</span>
              <textarea
                rows={6}
                className={`${field} resize-y`}
                value={form.more}
                onChange={(e) => update('more', e.target.value)}
                placeholder="Share anything that helps us understand you..."
              />
            </label>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-3xl font-extrabold text-plum">Stay Connected</h2>
            <p className="mt-3 text-sm text-warm-gray">How should we reach you?</p>
            <div className="mt-6 space-y-4">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.emailPref}
                  onChange={(e) => update('emailPref', e.target.checked)}
                  className="accent-coral"
                />
                Email updates
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.phonePref}
                  onChange={(e) => update('phonePref', e.target.checked)}
                  className="accent-coral"
                />
                Phone / text
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="text-[11px] font-bold tracking-[0.14em] text-warm-gray uppercase disabled:opacity-30"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
        >
          {step === 5 ? 'Submit application' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
