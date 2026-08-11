import { useState } from 'react'

export function TeamProfile({ person, onClose }) {
  if (!person) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-plum/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <img src={person.image} alt={person.name} className="aspect-[4/5] w-full object-cover" />
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-coral uppercase">
                {person.role}
              </p>
              <h3 id="profile-title" className="mt-2 text-3xl font-extrabold text-plum">
                {person.name}
              </h3>
              <p className="mt-4 text-lg font-medium text-warm-ink italic">
                “{person.philosophy}”
              </p>
              <p className="mt-5 text-sm leading-relaxed text-warm-gray">{person.bio}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 self-start text-[11px] font-bold tracking-[0.16em] text-plum uppercase"
            >
              Close →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamShowcase({ people }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
        {people.map((person) => (
          <button
            key={person.id}
            type="button"
            onClick={() => setActive(person)}
            className="w-[240px] shrink-0 text-left sm:w-[280px]"
          >
            <div className="overflow-hidden rounded-[40%_40%_20%_20%]">
              <img
                src={person.image}
                alt={person.name}
                className="aspect-[3/4] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xl font-extrabold text-plum">{person.name}</p>
            <p className="text-[11px] font-bold tracking-[0.14em] text-coral uppercase">
              {person.role}
            </p>
            <p className="mt-2 text-sm text-warm-gray">{person.philosophy}</p>
          </button>
        ))}
      </div>
      <TeamProfile person={active} onClose={() => setActive(null)} />
    </>
  )
}
