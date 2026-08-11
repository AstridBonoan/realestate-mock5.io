import { useState } from 'react'

export function TeamProfile({ person, onClose }) {
  if (!person) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-plum/40 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-line bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <img src={person.image} alt={person.name} className="aspect-[4/5] w-full object-cover" />
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
                {person.role}
              </p>
              <h3 id="profile-title" className="mt-2 text-2xl font-semibold text-plum sm:text-3xl">
                {person.name}
              </h3>
              <p className="mt-4 text-base font-medium text-warm-ink">
                “{person.philosophy}”
              </p>
              <p className="mt-5 text-sm leading-relaxed text-warm-gray">{person.bio}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary mt-8 self-start"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonCard({ person, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(person)}
      className="group w-full min-w-0 text-left"
    >
      <div className="overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-plum">{person.name}</p>
      <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-coral uppercase">
        {person.role}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">{person.philosophy}</p>
    </button>
  )
}

export default function TeamShowcase({ people }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="md:hidden">
        <div className="no-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-4">
          {people.map((person) => (
            <div key={person.id} className="w-[70vw] max-w-[260px] shrink-0">
              <PersonCard person={person} onSelect={setActive} />
            </div>
          ))}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      <div className="hidden gap-x-6 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} onSelect={setActive} />
        ))}
      </div>

      <TeamProfile person={active} onClose={() => setActive(null)} />
    </>
  )
}
