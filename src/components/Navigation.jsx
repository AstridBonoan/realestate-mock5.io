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
    requestAnimationFrame(() => scrollToTop())
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
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            to="/"
            onClick={goHome}
            className="text-[15px] font-bold tracking-[0.08em] text-plum uppercase"
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
                  className="text-[13px] font-medium text-warm-gray transition hover:text-plum"
                >
                  {l.label}
                </Link>
              ) : (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-[13px] font-medium transition ${
                      isActive ? 'text-plum' : 'text-warm-gray hover:text-plum'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/get-involved" className="btn-primary hidden !py-2.5 !px-4 sm:inline-flex">
              Start Here
            </Link>
            <button
              type="button"
              className="relative z-[60] border border-line px-3 py-2 text-[12px] font-semibold text-plum lg:hidden"
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
        className={`fixed inset-0 z-[55] bg-white transition-transform duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <div className="mb-12 flex items-center justify-between border-b border-line pb-6">
            <button type="button" onClick={goHome} className="font-bold tracking-[0.08em] text-plum uppercase">
              {company.name}
            </button>
            <button
              type="button"
              className="border border-line px-3 py-2 text-[12px] font-semibold text-plum"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={l.hash ? handleIdea : closeMenu}
                className="border-b border-line py-5 text-2xl font-semibold text-plum"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={closeMenu}
              className="btn-primary mt-8 self-start"
            >
              Start Here
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
