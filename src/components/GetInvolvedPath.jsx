import { Link } from 'react-router-dom'

export default function GetInvolvedPath({ paths }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {paths.map((p) => (
        <Link
          key={p.title}
          to={p.to}
          className="group relative min-h-[200px] overflow-hidden border border-line bg-white p-7 transition hover:border-plum"
        >
          <img
            src={p.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12] transition duration-500 group-hover:opacity-20 group-hover:scale-105"
          />
          <div className="relative flex h-full min-h-[160px] flex-col justify-between">
            <h3 className="text-xl font-semibold text-plum sm:text-2xl">{p.title}</h3>
            <span className="text-sm font-semibold text-coral">{p.arrow}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
