import { Link } from 'react-router-dom'

export default function GetInvolvedPath({ paths }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {paths.map((p) => (
        <Link
          key={p.title}
          to={p.to}
          className="group relative min-h-[220px] overflow-hidden bg-lavender p-8 transition hover:bg-lavender-deep"
        >
          <img
            src={p.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105 group-hover:opacity-30"
          />
          <div className="relative flex h-full min-h-[180px] flex-col justify-between">
            <h3 className="text-2xl font-extrabold text-plum sm:text-3xl">{p.title}</h3>
            <span className="text-[11px] font-extrabold tracking-[0.16em] text-coral uppercase">
              {p.arrow}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
