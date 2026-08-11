import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/properties', label: 'Properties' },
  { to: '/partners', label: 'Partnerships' },
  { to: '/contact', label: 'Contact' },
]

export default function EditorialHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navClass = ({ isActive }) =>
    `text-[12px] font-medium tracking-[0.14em] uppercase transition-colors ${
      isActive ? 'text-burgundy' : 'text-ink hover:text-terracotta'
    }`

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          to="/"
          className="font-display text-2xl tracking-[0.04em] text-espresso sm:text-[1.75rem]"
        >
          {company.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/join" className="editorial-link hidden sm:inline-block">
            Join
          </Link>
          <button
            type="button"
            className="border border-rule px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-espresso uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-rule" />

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[73px] bottom-0 z-40 bg-ivory transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-8" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `border-b border-rule py-4 text-sm tracking-[0.14em] uppercase ${
                  isActive ? 'text-burgundy' : 'text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/join" className="editorial-link mt-8">
            Join →
          </Link>
        </nav>
      </div>
    </header>
  )
}
