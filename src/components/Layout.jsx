import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash, key])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
