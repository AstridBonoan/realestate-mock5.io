import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company } from '../data/company'

const links = [
  { to: '/#idea', label: 'The Idea', hash: true },
  { to: '/people', label: 'The People' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleIdea = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('idea')?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-plum">
          {company.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={handleIdea}
                className="text-[11px] font-bold tracking-[0.16em] text-warm-gray uppercase transition hover:text-plum"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `text-[11px] font-bold tracking-[0.16em] uppercase transition ${
                    isActive ? 'text-coral' : 'text-warm-gray hover:text-plum'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/get-involved"
            className="hidden text-[11px] font-extrabold tracking-[0.18em] text-plum uppercase transition hover:text-coral sm:inline"
          >
            Start Here
          </Link>
          <button
            type="button"
            className="border border-line px-3 py-2 text-[11px] font-bold tracking-[0.14em] text-plum uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-plum text-white transition-transform duration-400 lg:hidden ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 py-8">
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold">{company.name}</span>
            <button
              type="button"
              className="text-[11px] font-bold tracking-[0.14em] uppercase"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={l.hash ? handleIdea : undefined}
                className="text-4xl font-extrabold tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/get-involved" className="mt-4 text-2xl font-bold text-coral">
              Start Here →
            </Link>
          </nav>
          <p className="text-sm text-white/60">{company.tagline}</p>
        </div>
      </div>
    </header>
  )
}
