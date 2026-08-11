import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/properties', label: 'Properties' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-emerald' : 'text-ink hover:text-emerald'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-white/90 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-sm font-bold text-emerald-light transition group-hover:scale-105">
            Æ
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-charcoal">
            {company.name}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/join"
            className="inline-flex items-center rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-dark active:scale-[0.98]"
          >
            Join Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-border p-2.5 text-charcoal transition hover:bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[73px] z-40 bg-white transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col gap-2 px-4 py-6 sm:px-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? 'bg-sage-soft text-emerald-dark'
                    : 'text-ink hover:bg-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald px-5 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-dark"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  )
}
