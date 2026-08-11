import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { company } from '../data/company'

const links = [
  { to: '/#idea', label: 'The Idea', hash: true },
  { to: '/people', label: 'The People' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/get-involved', label: 'Get Involved' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const goHome = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname === '/' && !location.hash) {
      scrollToTop()
      return
    }
    navigate('/')
    // Ensure top after route/hash clears
    requestAnimationFrame(() => {
      scrollToTop()
    })
    setTimeout(scrollToTop, 50)
  }

  const handleIdea = (e) => {
    closeMenu()
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('idea')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
        <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            to="/"
            onClick={goHome}
            className="text-lg font-extrabold tracking-tight text-plum"
          >
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
              className="relative z-[60] border border-line px-3 py-2 text-[11px] font-bold tracking-[0.14em] text-plum uppercase lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-plum text-white transition-transform duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-6 py-8">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={goHome}
              className="text-lg font-extrabold text-white"
            >
              {company.name}
            </button>
            <button
              type="button"
              className="border border-white/30 px-3 py-2 text-[11px] font-bold tracking-[0.14em] uppercase"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={l.hash ? handleIdea : closeMenu}
                className="text-4xl font-extrabold tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={closeMenu}
              className="mt-4 text-2xl font-bold text-coral"
            >
              Start Here →
            </Link>
          </nav>
          <p className="text-sm text-white/60">{company.tagline}</p>
        </div>
      </div>
    </>
  )
}
